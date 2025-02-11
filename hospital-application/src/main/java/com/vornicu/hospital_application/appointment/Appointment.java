package com.vornicu.hospital_application.appointment;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.vornicu.hospital_application.feedback.Feedback;
import com.vornicu.hospital_application.medicalhistory.MedicalHistory;
import com.vornicu.hospital_application.user.User;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Appointment {

    @Id
    @GeneratedValue
    private Integer id;
    private LocalDateTime appointmentDate;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "patient_id", nullable = false)
    private User patient;
    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "doctor_id", nullable = false)
    private User doctor;

    @JsonBackReference
    @OneToOne(mappedBy = "appointment", cascade = CascadeType.ALL)
    private MedicalHistory medicalHistory;

    @OneToMany(mappedBy = "appointment", cascade = CascadeType.ALL)
    private List<Feedback> feedback;

    @Column(nullable = false)
    private String status;  //Ex: "Pending", "Confirmed", "Completed"

    @Column(length = 500)
    private String reason;


}
