package com.vornicu.hospital_application.appointment;


import com.vornicu.hospital_application.dto.AppointmentDto;
import com.vornicu.hospital_application.dto.DoctorDto;
import com.vornicu.hospital_application.dto.FeedbackDto;
import com.vornicu.hospital_application.feedback.Feedback;
import com.vornicu.hospital_application.feedback.FeedbackService;
import com.vornicu.hospital_application.user.User;
import com.vornicu.hospital_application.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AppointmentService {

    private final UserRepository userRepository;
    private final AppointmentRepository appointmentRepository;
    private final FeedbackService feedbackService;


    public Integer create(AppointmentRequest request, Authentication connectedUser) {
        User doctor = userRepository.findById(request.getDoctorId())
                .orElseThrow(()->new IllegalStateException("Doctor not found"));
        User patient = ((User)connectedUser.getPrincipal());



        Appointment appointment = Appointment.builder()
                .doctor(doctor)
                .patient(patient)
                .appointmentDate(request.getDateAppointment())
                .reason(request.getReason())
                .status("PENDING")
                .build();
        return appointmentRepository.save(appointment).getId();
    }

    public List<String> getAllSpecializations() {
        return userRepository.findAllSpecializations();
    }

    public List<String> getHospitalsBySpecialization(String specialization) {
        return userRepository.findHospitalsBySpecialization(specialization);
    }

//    public List<DoctorDto> getDoctorsBySpecAndHospital(String specialization,
//                                                    String hospital) {
//        return userRepository.findDoctorsBySpecializationAndHospital(specialization, hospital)
//                .stream()
//                .map(user -> new DoctorDto(user.getId(),user.getFullName(),user.getSpecialization(),user.getHospital()))
//                .collect(Collectors.toList());
//    }

    public List<DoctorDto> getDoctorsBySpecAndHospital(String specialization, String hospital) {
        return userRepository.findDoctorsBySpecializationAndHospital(specialization, hospital)
                .stream()
                .map(user -> {
                    // Obținem rating-ul mediu pentru fiecare doctor
                    double averageRating = feedbackService.getAverageRatingForDoctor(user.getId());

                    // Creăm un DoctorDto și adăugăm și averageRating
                    return new DoctorDto(
                            user.getId(),
                            user.getFirstname(),
                            user.getLastname(),
                            user.getSpecialization(),
                            user.getHospital(),
                            averageRating // Adăugăm media rating-ului
                    );
                })
                .collect(Collectors.toList());
    }


    public List<LocalDateTime> getDoctorAvailability(Integer doctorId, LocalDate date) {
        // Intervalul de lucru: 09:00 - 17:00
        LocalDateTime startOfDay = date.atTime(9, 0);
        LocalDateTime endOfDay = date.atTime(17, 0);

        // Găsim toate programările doctorului în acea zi
        List<Appointment> appointments = appointmentRepository.findByDoctorIdAndAppointmentDateBetween(
                doctorId, startOfDay, endOfDay
        );

        // Sloturi ocupate
        List<LocalDateTime> occupiedSlots = appointments.stream()
                .map(Appointment::getAppointmentDate)
                .collect(Collectors.toList());

        // Generăm toate sloturile disponibile la fiecare 30 de minute
        List<LocalDateTime> availableSlots = new ArrayList<>();
        LocalDateTime currentSlot = startOfDay;
        while (currentSlot.isBefore(endOfDay)) {
            if (!occupiedSlots.contains(currentSlot)) {
                availableSlots.add(currentSlot);
            }
            currentSlot = currentSlot.plusMinutes(30); // Sloturi de 30 de minute
        }

        return availableSlots;
    }


    public List<AppointmentDto> getAllMyAppointments(Authentication connectedUser) {
        String currentEmail = connectedUser.getName(); // Obține e-mailul utilizatorului conectat

        // Obține toate programările
        List<Appointment> appointments = appointmentRepository.findAll();

        // Filtrare: include doar programările unde utilizatorul conectat este implicat
        List<Appointment> filteredAppointments = appointments.stream()
                .filter(appointment -> appointment.getPatient().getEmail().equals(currentEmail) ||
                        appointment.getDoctor().getEmail().equals(currentEmail))
                .toList();

        // Convertire la DTO-uri
        return filteredAppointments.stream()
                .map(this::convertToDto)
                .toList();
    }

    private AppointmentDto convertToDto(Appointment appointment) {
        return new AppointmentDto(
                appointment.getId(),
                appointment.getDoctor().getFullName(),
                appointment.getDoctor().getSpecialization(),
                appointment.getDoctor().getHospital(),
                appointment.getPatient().getFullName(),
                appointment.getAppointmentDate(),
                appointment.getReason(),
                appointment.getStatus(),
                appointment.getFeedback().stream().map(this::convertFeedbackToDto).collect(Collectors.toList())
        );
    }

    private FeedbackDto convertFeedbackToDto(Feedback feedback) {
        return new FeedbackDto(
                feedback.getPatient().getFullName(),
                feedback.getRating(),
                feedback.getComment(),
                feedback.getCreatedDate()
        );
    }


    public List<AppointmentDto> getCompletedAppointments(Authentication connectedUser) {
        User patient = (User) connectedUser.getPrincipal(); // Obține pacientul conectat

        List<Appointment> appointments = appointmentRepository.findByPatientIdAndStatus(patient.getId(), "COMPLETED");

        return appointments.stream()
                .map(this::convertToDto)
                .toList();
    }
}
