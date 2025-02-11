import {Component, OnInit} from '@angular/core';
import {FeedbackService} from "../../services/services/feedback.service";
import {FeedbackRequest} from "../../services/models/feedback-request";
import {AuthenticationService} from "../../services/services/authentication.service";
import {AppointmentDto} from "../../services/models/appointment-dto";
import {AppointmentService} from "../../services/services/appointment.service";

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.scss']
})
export class AddFeedbackComponent implements OnInit{
  completedAppointments: AppointmentDto[] = [];
  selectedAppointment: AppointmentDto | null = null;
  // rating: number | null = null;
  rating: number = 0;
  comment: string = '';

  constructor(
    private appointmentService: AppointmentService,
    private feedbackService: FeedbackService
  ) {}

  ngOnInit(): void {
    this.loadCompletedAppointments();
  }

  loadCompletedAppointments(): void {
    this.appointmentService.getCompletedAppointments().subscribe(
      (appointments) => {
        console.log('Programări primite:', appointments);
        this.completedAppointments = appointments;
      },
      (error) => {
        console.error('Eroare la obținerea programărilor:', error);
      }
    );
  }

  submitFeedback(): void {
    if (this.rating === null || this.rating < 1 || this.rating > 5) {
      alert('Vă rugăm să selectați un rating între 1 și 5!');
      return;
    }

    if (this.selectedAppointment) {
      const feedbackRequest: FeedbackRequest = {
        appointmentId: this.selectedAppointment.id,
        rating: this.rating,
        comment: this.comment,
      };

      console.log('Trimitem feedback: ', feedbackRequest);
      this.feedbackService.createFeedback({body:feedbackRequest}).subscribe(
        (response) => {
          console.log('Răspuns server:', response);
          alert("Feedback-ul a fost trimis cu succes!");
          this.loadCompletedAppointments();
          this.selectedAppointment = null;
          this.rating = 0;
          this.comment = '';
        },
        (error) => {
          console.error('Eroare la trimiterea feedback-ului:', error);
        }
      );
    }
  }
}
