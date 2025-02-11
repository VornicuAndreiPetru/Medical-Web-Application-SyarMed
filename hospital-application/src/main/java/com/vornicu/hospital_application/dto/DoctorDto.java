package com.vornicu.hospital_application.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DoctorDto {
    private Integer id;
    private String firstname;
    private String lastname;
    private String specialization;
    private String hospital;
    private Double averageRating;
}

