package com.vornicu.hospital_application.medicalhistory;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Arrays;
import java.util.List;

public interface MedicalHistoryRepository extends JpaRepository<MedicalHistory,Integer> {
    List<MedicalHistory> findByPatientId(Integer patientId);

    List<MedicalHistory> findByPatientIdAndDoctorId(Integer patientId, Integer doctorId);


    boolean existsByPatientId(Integer patientId);


}
