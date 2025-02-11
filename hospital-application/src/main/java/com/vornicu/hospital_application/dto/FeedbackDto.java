package com.vornicu.hospital_application.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FeedbackDto {

    private String patientName;
    private Double rating;
    private String comment;
    private LocalDateTime createdDate;
}
