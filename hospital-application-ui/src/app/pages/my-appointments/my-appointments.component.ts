import {Component, OnInit} from '@angular/core';
import {AppointmentDto} from "../../services/models/appointment-dto";
import {HttpClient} from "@angular/common/http";
import {AppointmentService} from "../../services/services/appointment.service";

@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.component.html',
  styleUrls: ['./my-appointments.component.scss']
})
export class MyAppointmentsComponent implements OnInit{
  appointments: AppointmentDto[] = [];
  loading: boolean = false;
  error: string | null = null;

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.fetchMyAppointments();
  }

  fetchMyAppointments(): void {
    this.loading = true;
    this.error = null;

    this.appointmentService.getAllMyAppointments().subscribe({
      next: (data) => {
        this.appointments = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'An error occurred while fetching your appointments.';
        console.error(err);
        this.loading = false;
      }
    });
  }
}
