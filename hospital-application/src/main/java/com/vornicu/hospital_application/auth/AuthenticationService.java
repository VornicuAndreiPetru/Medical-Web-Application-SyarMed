package com.vornicu.hospital_application.auth;


import com.vornicu.hospital_application.email.EmailService;
import com.vornicu.hospital_application.email.EmailTemplateName;
import com.vornicu.hospital_application.role.RoleRepository;
import com.vornicu.hospital_application.security.JwtService;
import com.vornicu.hospital_application.user.Token;
import com.vornicu.hospital_application.user.TokenRepository;
import com.vornicu.hospital_application.user.User;
import com.vornicu.hospital_application.user.UserRepository;
import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final TokenRepository tokenRepository;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final EmailService emailService;
    @Value("${application.mailing.frontend.activation-url}")
    private String activationUrl;


    public void registerPatient(PatientRegistrationRequest request) throws MessagingException {

        if (userRepository.existsByCnp(request.getCnp())) {
            throw new IllegalArgumentException("CNP-ul introdus este deja înregistrat.");
        }

        var patientRole  = roleRepository.findByName("PATIENT")
                .orElseThrow(()-> new IllegalStateException("ROLE PATIENT was not initialized"));

        var patient = User.builder()
                .firstname(request.getFirstname())
                .lastname(request.getLastname())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .cnp(request.getCnp())
                .accountLocked(false)
                .enabled(false)
                .roles(List.of(patientRole))
                .build();
        userRepository.save(patient);
        sendValidationEmail(patient);
    }

    public void registerDoctor(DoctorRegistrationRequest request) throws MessagingException {
        var doctorRole = roleRepository.findByName("DOCTOR")
                .orElseThrow(()-> new IllegalStateException("ROLE DOCTOR was not initialized"));

        var doctor = User.builder()
                .firstname(request.getFirstname())
                .lastname(request.getLastname())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .accountLocked(false)
                .enabled(false)
                .roles(List.of(doctorRole))
                .specialization(request.getSpecialization())
                .hospital(request.getHospital())
                .build();
        userRepository.save(doctor);
        sendValidationEmail(doctor);
    }

    private void sendValidationEmail(User user) throws MessagingException {
        var newToken = generateAndSaveActivationToken(user);
        //send email
        emailService.sendEmail(
                user.getEmail(),
                user.getFullName(),
                EmailTemplateName.ACTIVATE_ACCOUNT,
                activationUrl,
                newToken,
                "Account activation"
        );
    }

    private String generateAndSaveActivationToken(User user) {
        //generate a token
        String generatedToken = generateActivationCode(6);
        var token = Token.builder()
                .token(generatedToken)
                .createdAt(LocalDateTime.now())
                .expiresAt(LocalDateTime.now().plusMinutes(15))
                .user(user)
                .build();
        tokenRepository.save(token);
        return generatedToken;
    }

    private String generateActivationCode(int length) {
        String characters = "0123456789";
        StringBuilder codeBuilder = new StringBuilder();
        SecureRandom secureRandom = new SecureRandom();
        for(int i=0; i < length; i++){
            int randomIndex = secureRandom.nextInt(characters.length());
            codeBuilder.append(characters.charAt(randomIndex));
        }
        return codeBuilder.toString();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        var auth = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var claims = new HashMap<String, Object>();
        var user = ((User)auth.getPrincipal());
        claims.put("fullName", user.fullName());
        var jwtToken = jwtService.generateToken(claims, user);
        return AuthenticationResponse.builder()
                .token(jwtToken).build();
    }

    @Transactional
    public void activateAccount(String token) throws MessagingException {
        Token savedToken = tokenRepository.findByToken(token)
                .orElseThrow(()->new RuntimeException("Invalid token"));
        if(LocalDateTime.now().isAfter(savedToken.getExpiresAt())){
            sendValidationEmail(savedToken.getUser());
            throw new RuntimeException("Activation token has expired. A new token has been sent");
        }
        var user = userRepository.findById(savedToken.getUser().getId())
                .orElseThrow(()->new RuntimeException("User not found"));
        user.setEnabled(true);
        userRepository.save(user);
        savedToken.setValidatedAt(LocalDateTime.now());
        tokenRepository.save(savedToken);
    }
}
