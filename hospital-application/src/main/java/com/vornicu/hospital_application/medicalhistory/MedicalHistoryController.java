package com.vornicu.hospital_application.medicalhistory;


import com.vornicu.hospital_application.dto.MedicalHistoryDto;
import com.vornicu.hospital_application.dto.MedicalHistoryRequestDto;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("medical-history")
@RequiredArgsConstructor
@Tag(name = "MedicalHistory")
public class MedicalHistoryController {

    private final MedicalHistoryService service;

    @GetMapping("/patient/{patientId}")
    public ResponseEntity<List<MedicalHistoryDto>> getMedicalHistoryForPatient(
            @PathVariable Integer patientId,
            Authentication connectedUser
    ){
        return ResponseEntity.ok(service.getMedicalHistoryForPatient(patientId, connectedUser));
    }

    @PostMapping("appointment/{appointmentId}/complete")
    public ResponseEntity<Void> completeMedicalHistory(
            @PathVariable Integer appointmentId,
            @RequestBody MedicalHistoryRequestDto medicalHistoryRequestDto,
            Authentication connectedUser
    ){
        service.completeMedicalHistory(appointmentId,medicalHistoryRequestDto,connectedUser);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/me")
    public ResponseEntity<List<MedicalHistoryDto>> getPersonalMedicalHistory(
            Authentication connectedUser
    ){
        return ResponseEntity.ok(service.getPersonalMedicalHistory(connectedUser));
    }


    @GetMapping("/patient/cnp/{cnp}")
    public ResponseEntity<List<MedicalHistoryDto>> getMedicalHistoryByCnp(
            @PathVariable String cnp) {
        return ResponseEntity.ok(service.getMedicalHistoryByCnp(cnp));
    }

}
