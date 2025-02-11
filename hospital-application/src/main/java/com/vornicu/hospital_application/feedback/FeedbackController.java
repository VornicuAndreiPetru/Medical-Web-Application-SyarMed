package com.vornicu.hospital_application.feedback;

import com.vornicu.hospital_application.appointment.Appointment;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("feedback")
@Tag(name = "Feedback")
public class FeedbackController {

    private final FeedbackService service;


    @PostMapping
    public ResponseEntity<Map<String,String>> createFeedback(
        @RequestBody FeedbackRequest request,
        Authentication connectedUser
    ){
        service.createFeedback(request, connectedUser);
        Map<String, String> response = new HashMap<>();
        response.put("message", "Feedback submitted successfully");
        return ResponseEntity.ok(response);
    }



    @GetMapping("/doctor/feedback")
    public ResponseEntity<FeedbackResponse> getFeedbackForDoctor(
            Authentication connectedUser
    ) {
        // Preluăm feedback-ul pentru doctorul conectat
        FeedbackResponse response = service.getFeedbackForDoctor(connectedUser);
        return ResponseEntity.ok(response);
    }


    @GetMapping("/doctor/{doctorId}/average-rating")
    public ResponseEntity<Double> getAverageRatingForDoctor(@PathVariable Integer doctorId) {
        double averageRating = service.getAverageRatingForDoctor(doctorId);
        return ResponseEntity.ok(averageRating);
    }


}
