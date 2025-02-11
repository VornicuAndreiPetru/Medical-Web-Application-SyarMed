import { Component, OnInit } from '@angular/core';
import { DoctorDto } from "../../services/models/doctor-dto";
import { AppointmentService } from "../../services/services/appointment.service";
import { AppointmentRequest } from "../../services/models/appointment-request";
import { GetDoctorAvailability$Params } from "../../services/fn/appointment/get-doctor-availability";

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  selectedSpecialization: string = '';
  specializations: string[] = [];
  hospitals: string[] = [];
  selectedHospital: string = '';
  doctors: DoctorDto[] = [];
  selectedDoctor: number | null = null;
  selectedDoctorEmail: string = '';  // Email-ul doctorului selectat
  appointmentDate: string = '';
  appointmentTime: string = '';
  reason: string = '';

  availabilityChecked: boolean = false;
  isAvailable: boolean = false;
  availableTimeSlots: string[] = [];

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.loadSpecializations();
  }

  loadSpecializations() {
    this.appointmentService.getSpecializations().subscribe({
      next: (specializations) => {
        this.specializations = specializations;
      },
      error: (err) => {
        console.error('Error fetching specializations:', err);
        alert('A apărut o eroare la încărcarea specializărilor.');
      }
    });
  }

  onSpecializationChange() {
    this.hospitals = [];
    this.doctors = [];
    this.selectedHospital = '';
    this.selectedDoctor = null;

    this.appointmentService.getHospitalsBySpecialization({
      specialization: this.selectedSpecialization
    }).subscribe((hospitals) => {
      this.hospitals = hospitals;
    });
  }

  onHospitalChange() {
    this.doctors = [];
    this.selectedDoctor = null;

    this.appointmentService.getDoctorsBySpecAndHospital({
      specialization: this.selectedSpecialization,
      hospital: this.selectedHospital
    }).subscribe((doctors) => {
      this.doctors = doctors;
    });
  }

  // onDoctorChange() {
  //   console.log('Doctor selectat:', this.selectedDoctor); // Adaugă un log pentru debugging
  //   this.availabilityChecked = false;
  //   this.isAvailable = false;
  // }

  onDoctorChange(doctorId: number): void {
    this.selectedDoctor = doctorId;
    this.availabilityChecked = false;
    this.isAvailable = false;
  }



  checkAvailability() {
    if (this.selectedDoctor && this.appointmentDate) {
      this.appointmentService.getDoctorAvailability({
        doctorId: this.selectedDoctor,
        date: this.appointmentDate
      }).subscribe((availability: string[]) => {
        if (availability.length > 0) {
          this.availableTimeSlots = availability.map(slot => slot.split('T')[1]?.slice(0, 5)); // Extrage ora
          this.isAvailable = true;
        } else {
          this.availableTimeSlots = [];
          this.isAvailable = false;
        }
        this.availabilityChecked = true;
      });
    } else {
      alert('Te rog să selectezi doctorul și data.');
    }
  }

  confirmAppointment() {
    if (this.selectedDoctor && this.appointmentDate && this.appointmentTime && this.reason) {
      const appointmentRequest: AppointmentRequest = {
        doctorId: this.selectedDoctor,
        dateAppointment: `${this.appointmentDate}T${this.appointmentTime}`,
        reason: this.reason
      };

      console.log(appointmentRequest);

      this.appointmentService.createAppointment({ body: appointmentRequest }).subscribe({
        next: () => {
          alert('Programarea a fost confirmată!');
        },
        error: (err) => {
          console.error('Eroare la confirmarea programării:', err);
          alert('A apărut o eroare la confirmarea programării.');
        }
      });
    } else {
      alert('Te rog să completezi toate câmpurile.');
    }
  }
}
