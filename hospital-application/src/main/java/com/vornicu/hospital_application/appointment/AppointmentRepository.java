package com.vornicu.hospital_application.appointment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;

public interface AppointmentRepository extends JpaRepository<Appointment,Integer> {


    @Query("""
        SELECT a
        FROM Appointment a
        WHERE a.doctor.id = :doctorId
          AND a.appointmentDate BETWEEN :startOfDay AND :endOfDay
    """)
    List<Appointment> findByDoctorIdAndAppointmentDateBetween(
            @Param("doctorId") Integer doctorId,
            @Param("startOfDay") LocalDateTime startOfDay,
            @Param("endOfDay") LocalDateTime endOfDay
    );



    List<Appointment>findByDoctorId(Integer doctorId);

    @Query("SELECT a FROM Appointment a WHERE a.doctor.id = :doctorId AND a.patient.id = :patientId")
    List<Appointment> findByDoctorIdAndPatientId(@Param("doctorId") Integer doctorId, @Param("patientId") Integer patientId);


    List<Appointment> findByPatientIdAndStatus(Integer patientId, String completed);
}



