import {Component, OnInit} from '@angular/core';
import {AppointmentService} from "../../services/services/appointment.service";
import {MedicalHistoryService} from "../../services/services/medical-history.service";
import {CompleteMedicalHistory$Params} from "../../services/fn/medical-history/complete-medical-history";

@Component({
  selector: 'app-doctor-appointments',
  templateUrl: './doctor-appointments.component.html',
  styleUrls: ['./doctor-appointments.component.scss']
})
export class DoctorAppointmentsComponent implements OnInit{

  appointments: any[] = []; // Lista programărilor
  showForm: boolean = false; // Control pentru formularul modal
  selectedAppointmentId!: number; // ID-ul programării selectate

  // DTO pentru completarea istoricului medical
  medicalHistoryRequest = {
    diagnosis: '',
    treatment: '',
    additionalInfo: '',
  };

  constructor(
    private appointmentService: AppointmentService,
    private medicalHistoryService: MedicalHistoryService
  ) {}

  ngOnInit(): void {
    this.loadAppointments();
  }

  // Încarcă programările doctorului
  loadAppointments(): void {
    this.appointmentService.getAllMyAppointments().subscribe((appointments) => {
      console.log('Appointments data:', appointments); // Verifică structura datelor
      this.appointments = appointments;
    });
  }

  // Deschide formularul pentru o programare specifică
  openForm(appointmentId: number): void {
    this.selectedAppointmentId = appointmentId;
    this.showForm = true;
  }

  // Închide formularul
  closeForm(): void {
    this.showForm = false;
    this.medicalHistoryRequest = {
      diagnosis: '',
      treatment: '',
      additionalInfo: '',
    };
  }

  // Trimite formularul la backend
  submitForm(): void {
    const params: CompleteMedicalHistory$Params = {
      appointmentId: this.selectedAppointmentId,
      body: {
        diagnosis: this.medicalHistoryRequest.diagnosis,
        treatment: this.medicalHistoryRequest.treatment,
        additionalInfo: this.medicalHistoryRequest.additionalInfo,
      },
    };

    this.medicalHistoryService.completeMedicalHistory(params).subscribe(() => {
      alert('Istoricul medical a fost completat cu succes!');
      this.closeForm();
      this.loadAppointments(); // Reîncarcă lista după completare
    });
  }



}
