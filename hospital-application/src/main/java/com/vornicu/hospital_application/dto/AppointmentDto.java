package com.vornicu.hospital_application.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AppointmentDto {
    private Integer id;
    private String doctorName;
    private String specialization;
    private String hospital;
    private String patientName;
    private LocalDateTime dateAppointment;
    private String reason;
    private String status;
    private List<FeedbackDto> feedback;
}
