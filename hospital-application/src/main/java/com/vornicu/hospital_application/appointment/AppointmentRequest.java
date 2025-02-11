package com.vornicu.hospital_application.appointment;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;


@Getter
@Setter
@Builder
public class AppointmentRequest {

    private Integer doctorId; //ne mai gandim la campul asta
    private LocalDateTime dateAppointment;
    private String reason;

}
