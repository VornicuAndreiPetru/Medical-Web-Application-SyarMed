package com.vornicu.hospital_application.feedback;


import com.vornicu.hospital_application.dto.FeedbackDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FeedbackResponse {
    private Integer doctorId;
    private Double averageRating;
    private List<FeedbackDto> feedbacks;
}
