package com.vornicu.hospital_application.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MedicalHistoryRequestDto {

    private String diagnosis;
    private String treatment;
    private String additionalInfo;
}
