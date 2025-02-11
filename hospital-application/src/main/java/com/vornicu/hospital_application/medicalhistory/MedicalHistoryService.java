package com.vornicu.hospital_application.medicalhistory;

import com.vornicu.hospital_application.appointment.Appointment;
import com.vornicu.hospital_application.appointment.AppointmentRepository;
import com.vornicu.hospital_application.dto.MedicalHistoryDto;
import com.vornicu.hospital_application.dto.MedicalHistoryRequestDto;
import com.vornicu.hospital_application.user.User;
import com.vornicu.hospital_application.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
public class MedicalHistoryService {

    private final AppointmentRepository appointmentRepository;
    private final MedicalHistoryRepository medicalHistoryRepository;
    private final UserRepository userRepository;

    public List<MedicalHistoryDto> getMedicalHistoryForPatient(Integer patientId, Authentication connectedUser) {
        User doctor = (User) connectedUser.getPrincipal();
//        List<Appointment> doctorAppointments =  appointmentRepository.findByDoctorId(doctor.getId());

//        boolean hasAccess = doctorAppointments.stream()
//                .anyMatch(appointment -> appointment.getPatient().getId().equals(patientId));
//
//        if(!hasAccess){
//            throw new SecurityException("You do not have access to this patient's medical history");
//        }

        List<Appointment> doctorAppointments = appointmentRepository.findByDoctorIdAndPatientId(doctor.getId(),patientId);
        if(doctorAppointments.isEmpty()){
            throw new SecurityException("You do not have access to this patient's medical history");
        }

//        return medicalHistoryRepository.findByPatientId(patientId).stream()
//                .map(this::toDto)
//                .collect(Collectors.toList());


        return medicalHistoryRepository.findByPatientIdAndDoctorId(patientId, doctor.getId()).stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }


    @Transactional
    public void completeMedicalHistory(Integer appointmentId, MedicalHistoryRequestDto request, Authentication connectedUser) {
        User doctor = (User) connectedUser.getPrincipal();

        Appointment appointment = appointmentRepository.findById(appointmentId)
                .orElseThrow(()->new IllegalArgumentException("Appointment does not exist!"));

        if(!appointment.getDoctor().getId().equals(doctor.getId())){
            throw new SecurityException("You are not authorized to complete this medical history");
        }

        MedicalHistory medicalHistory = new MedicalHistory();
        medicalHistory.setDiagnosis(request.getDiagnosis());
        medicalHistory.setTreatment(request.getTreatment());
        medicalHistory.setAdditionalInfo(request.getAdditionalInfo());
        medicalHistory.setAppointment(appointment);
        medicalHistory.setPatient(appointment.getPatient());
        medicalHistory.setDoctor(doctor);

        medicalHistoryRepository.save(medicalHistory);

        appointment.setStatus("COMPLETED");
        appointmentRepository.save(appointment);

    }






    public List<MedicalHistoryDto> getPersonalMedicalHistory(Authentication connectedUser) {
        User patient = (User) connectedUser.getPrincipal();

        return medicalHistoryRepository.findByPatientId(patient.getId()).stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    private MedicalHistoryDto toDto(MedicalHistory medicalHistory){
        return new MedicalHistoryDto(
                medicalHistory.getId(),
                medicalHistory.getDiagnosis(),
                medicalHistory.getTreatment(),
                medicalHistory.getAdditionalInfo(),
                medicalHistory.getAppointment().getAppointmentDate(),
                medicalHistory.getPatient().getFullName(),
                medicalHistory.getDoctor().getFullName()
        );
    }

    public List<MedicalHistoryDto> getMedicalHistoryByCnp(String cnp) {
        // Verificăm dacă doctorul conectat are permisiunea de a accesa istoricul pacientului

        User patient = userRepository.findByCnp(cnp)
                .orElseThrow(() -> new IllegalArgumentException("Pacientul cu acest CNP nu există!"));

        // Găsește pacientul în baza de date pentru validare (opțional)
        if (!medicalHistoryRepository.existsByPatientId(patient.getId())) {
            throw new SecurityException("Pacientul nu are un istoric medical!");
        }

        // Returnează tot istoricul pacientului
        return medicalHistoryRepository.findByPatientId(patient.getId()).stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }
}
