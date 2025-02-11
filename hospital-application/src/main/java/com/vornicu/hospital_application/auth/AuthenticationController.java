package com.vornicu.hospital_application.auth;


import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.mail.MessagingException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("auth")
@RequiredArgsConstructor
@Tag(name = "Authentication")
public class AuthenticationController {

    private final AuthenticationService service;

    @PostMapping("/register-patient")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public ResponseEntity<?> registerPatient(
            @RequestBody @Valid PatientRegistrationRequest request
    ) throws MessagingException {
        service.registerPatient(request);
        return ResponseEntity.accepted().build();
    }

    @PostMapping("/register-doctor")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public ResponseEntity<?> registerDoctor(
            @RequestBody @Valid DoctorRegistrationRequest request
    ) throws MessagingException {
        service.registerDoctor(request);
        return ResponseEntity.accepted().build();
    }


    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody @Valid AuthenticationRequest request
    ){
        return ResponseEntity.ok(service.authenticate(request));
    }

    @GetMapping("/activate-account")
    public void confirm(
            @RequestParam String token
    ) throws MessagingException {
        service.activateAccount(token);
    }



}
