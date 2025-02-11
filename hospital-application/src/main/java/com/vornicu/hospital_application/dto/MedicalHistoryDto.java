package com.vornicu.hospital_application.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MedicalHistoryDto {

    private Integer id;
    private String diagnosis;
    private String treatment;
    private String additionalInfo;
    private LocalDateTime appointmentDate;
    private String patientName;
    private String doctorName;
}
