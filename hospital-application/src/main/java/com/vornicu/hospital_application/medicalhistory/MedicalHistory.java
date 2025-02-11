package com.vornicu.hospital_application.medicalhistory;


import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.vornicu.hospital_application.appointment.Appointment;
import com.vornicu.hospital_application.user.User;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class MedicalHistory {

    @Id
    @GeneratedValue
    private Integer id;

    @JsonManagedReference
    @ManyToOne
    @JoinColumn(name = "patient_id", nullable = false)
    private User patient;

    @JsonManagedReference
    @ManyToOne
    @JoinColumn(name = "doctor_id", nullable = false)
    private User doctor;

    @JsonManagedReference
    @OneToOne
    @JoinColumn(name = "appointment_id", nullable = false)
    private Appointment appointment;

    @Column(nullable = false)
    private String diagnosis;

    @Column(nullable = false)
    private String treatment;

    private String additionalInfo;
}
