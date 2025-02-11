package com.vornicu.hospital_application.feedback;


import com.vornicu.hospital_application.appointment.Appointment;
import com.vornicu.hospital_application.appointment.AppointmentRepository;
import com.vornicu.hospital_application.dto.AppointmentDto;
import com.vornicu.hospital_application.dto.FeedbackDto;
import com.vornicu.hospital_application.user.User;
import com.vornicu.hospital_application.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class FeedbackService {


    private final AppointmentRepository appointmentRepository;
    private final FeedbackRepository feedbackRepository;


    @Transactional
    public Feedback createFeedback(FeedbackRequest request, Authentication connectedUser) {
        User patient = (User) connectedUser.getPrincipal();

        Appointment appointment = appointmentRepository.findById(request.getAppointmentId())
                .orElseThrow(()-> new RuntimeException("Appointment not found"));

        if(!appointment.getStatus().equals("COMPLETED")){
            throw new IllegalStateException("Feedback can only be given for completed appointments");
        }

        if(!appointment.getPatient().getId().equals(patient.getId())){
            throw new SecurityException("You can only give feedback for your own appointment");
        }

        if (request.getRating() < 1 || request.getRating() > 5) {
            throw new IllegalArgumentException("Rating must be between 1 and 5");
        }

        Feedback feedback = Feedback.builder()
                .patient(patient)
                .doctor(appointment.getDoctor())
                .rating(request.getRating())
                .appointment(appointment)
                .comment(request.getComment())
                .createdBy(patient.getId())
                .createdDate(LocalDateTime.now())
                .build();

        if (feedbackRepository.existsByAppointmentId(request.getAppointmentId())) {
            throw new IllegalStateException("Feedback for this appointment has already been submitted.");
        }


        return feedbackRepository.save(feedback);

    }

    @Transactional
    public FeedbackResponse getFeedbackForDoctor(Authentication connectedUser) {
        // Obținem utilizatorul conectat (presupunem că este un doctor)
        User doctor = (User) connectedUser.getPrincipal();

        // Verificăm dacă doctorul există în sistem
        if (doctor == null) {
            throw new RuntimeException("Doctor not found");
        }

        // Obținem feedback-ul pentru doctorul respectiv
        List<Feedback> feedbackList = feedbackRepository.findByDoctorId(doctor.getId());

        // Calculăm rating-ul mediu
        double averageRating = feedbackList.stream()
                .mapToDouble(Feedback::getRating)
                .average()
                .orElse(0.0);

        // Transformăm feedback-urile în DTO-uri
        List<FeedbackDto> feedbackDtos = feedbackList.stream()
                .map(feedback -> new FeedbackDto(
                        feedback.getPatient().getFullName(),
                        feedback.getRating(),
                        feedback.getComment(),
                        feedback.getCreatedDate()
                ))
                .collect(Collectors.toList());

        // Returnăm feedback-ul pentru doctor
        return new FeedbackResponse(doctor.getId(), averageRating, feedbackDtos);
    }


    public double getAverageRatingForDoctor(Integer doctorId) {
        return feedbackRepository.findByDoctorId(doctorId).stream()
                .mapToDouble(Feedback::getRating)
                .average()
                .orElse(0.0);
    }


}
