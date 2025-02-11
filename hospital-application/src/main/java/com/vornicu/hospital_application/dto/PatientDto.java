package com.vornicu.hospital_application.dto;


import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Schema(description = "Patient Data Transfer Object")
public class PatientDto {
    @Schema(description = "Patient's unique identifier")
    private Integer id;

    @Schema(description = "Patient's first name")
    private String firstname;

    @Schema(description = "Patient's last name")
    private String lastname;

    @Schema(description = "Patient's phone number")
    private String phoneNumber;

    @Schema(description = "Patient's CNP")
    private String cnp;

    @Schema(description = "Patient's date of birth")
    private LocalDate dateOfBirth;

    @Schema(description = "Patient's address")
    private String address;
}

