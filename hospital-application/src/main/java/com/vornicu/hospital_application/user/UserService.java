package com.vornicu.hospital_application.user;


import com.vornicu.hospital_application.dto.DoctorDto;
import com.vornicu.hospital_application.dto.PatientDto;
import com.vornicu.hospital_application.feedback.FeedbackService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final FeedbackService feedbackService;

    public Object getUserProfile(Authentication connectedUser) {
        User user = (User) connectedUser.getPrincipal();

        if (user.getRoles().stream().anyMatch(r -> r.getName().equals("DOCTOR"))) {
            double averageRating = feedbackService.getAverageRatingForDoctor(user.getId());
            return new DoctorDto(
                    user.getId(),
                    user.getFirstname(),
                    user.getLastname(),
                    user.getSpecialization(),
                    user.getHospital(),
                    averageRating
            );
        } else {
            return new PatientDto(
                    user.getId(),
                    user.getFirstname(),
                    user.getLastname(),
                    user.getPhoneNumber(),
                    user.getCnp(),
                    user.getDateOfBirth(),
                    user.getAddress()
            );
        }
    }

    public Object updateUserProfile(UpdateUserRequest request, Authentication connectedUser) {
        User user = (User) connectedUser.getPrincipal();


        if (request.getEmail() != null) {
            user.setEmail(request.getEmail());  // Asigură-te că email-ul nu este resetat accidental
        }

        user.setFirstname(request.getFirstname());
        user.setLastname(request.getLastname());
        user.setPhoneNumber(request.getPhoneNumber());
        user.setDateOfBirth(request.getDateOfBirth());
        user.setAddress(request.getAddress());
        if (user.getRoles().stream().anyMatch(r -> r.getName().equals("DOCTOR"))) {
            user.setSpecialization(request.getSpecialization());
            user.setHospital(request.getHospital());
        }

        userRepository.save(user);
        return getUserProfile(connectedUser);
    }
}
