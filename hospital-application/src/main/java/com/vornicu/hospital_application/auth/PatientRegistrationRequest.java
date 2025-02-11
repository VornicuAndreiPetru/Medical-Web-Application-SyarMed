package com.vornicu.hospital_application.auth;


import jakarta.persistence.Column;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PatientRegistrationRequest extends RegistrationRequest{


    @NotNull(message = "CNP-ul este obligatoriu.")
    @Size(min = 13, max = 13, message = "CNP-ul trebuie să aibă exact 13 caractere.")
    @Pattern(regexp = "\\d{13}", message = "CNP-ul trebuie să conțină doar cifre.")
    @Column(unique = true, nullable = false)
    private String cnp;

}
