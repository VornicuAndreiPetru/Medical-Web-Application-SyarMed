package com.vornicu.hospital_application.user;


import lombok.Data;

import java.time.LocalDate;

@Data
public class AdminUserRequest {

    private String firstname;
    private String lastname;
    private String email;
    private String phoneNumber;
    private String address;
    private LocalDate dateOfBirth;
    private String specialization; // pentru doctori
    private String hospital;       // pentru doctori
    private boolean accountLocked;
    private boolean enabled;
    private String cnp;
    private String role;
}
