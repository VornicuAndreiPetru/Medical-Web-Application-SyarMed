package com.vornicu.hospital_application.feedback;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FeedbackRepository extends JpaRepository<Feedback, Integer> {
    boolean existsByAppointmentId(Integer appointmentId);

    List<Feedback> findByDoctorId(Integer doctorId);
}
