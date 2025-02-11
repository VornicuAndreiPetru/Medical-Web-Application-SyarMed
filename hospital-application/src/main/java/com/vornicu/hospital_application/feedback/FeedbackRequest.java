package com.vornicu.hospital_application.feedback;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FeedbackRequest {
    private Integer appointmentId;
    private Double rating;
    private String comment;
}
