package com.vornicu.hospital_application.appointment;


import com.vornicu.hospital_application.dto.AppointmentDto;
import com.vornicu.hospital_application.dto.DoctorDto;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("appointments")
@RequiredArgsConstructor
@Tag(name = "Appointment")
public class AppointmentController {

    private final AppointmentService service;

    @PostMapping
    public ResponseEntity<Integer> createAppointment(@Valid @RequestBody AppointmentRequest request,
                                                   Authentication connectedUser
    ){
        return ResponseEntity.ok(service.create(request, connectedUser));
    }

    @GetMapping("/specializations")
    public List<String> getSpecializations(){
        return service.getAllSpecializations();
    }

    @GetMapping("/hospitals")
    public List<String> getHospitalsBySpecialization(@RequestParam String specialization){
        return service.getHospitalsBySpecialization(specialization);
    }

    @GetMapping("/doctors")
    public ResponseEntity<List<DoctorDto>> getDoctorsBySpecAndHospital(
            @RequestParam String specialization,
            @RequestParam String hospital
    ){
        return ResponseEntity.ok(service.getDoctorsBySpecAndHospital(specialization,hospital));
    }

    @GetMapping("/availability")
    public ResponseEntity<List<LocalDateTime>> getDoctorAvailability(
            @RequestParam Integer doctorId,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date
    ) {
        List<LocalDateTime> availableSlots = service.getDoctorAvailability(doctorId, date);
        return ResponseEntity.ok(availableSlots);
    }

    @GetMapping("/my-appointments")
    public ResponseEntity<List<AppointmentDto>> getAllMyAppointments(
            Authentication connectedUser
    ){
        List<AppointmentDto> appointments = service.getAllMyAppointments(connectedUser);
        return ResponseEntity.ok(appointments);
    }

    @GetMapping("/completed-appointments")
    public ResponseEntity<List<AppointmentDto>> getCompletedAppointments(Authentication connectedUser) {
        List<AppointmentDto> appointments = service.getCompletedAppointments(connectedUser);
        return ResponseEntity.ok(appointments);
    }

}
