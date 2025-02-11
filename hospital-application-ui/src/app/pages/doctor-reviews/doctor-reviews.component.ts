import {Component, OnInit} from '@angular/core';
import {GetFeedbackForDoctor$Params} from "../../services/fn/feedback/get-feedback-for-doctor";
import {FeedbackService} from "../../services/services/feedback.service";
import {FeedbackResponse} from "../../services/models/feedback-response";
import {FeedbackDto} from "../../services/models/feedback-dto";
import {GetAverageRatingForDoctor$Params} from "../../services/fn/feedback/get-average-rating-for-doctor";

@Component({
  selector: 'app-doctor-reviews',
  templateUrl: './doctor-reviews.component.html',
  styleUrls: ['./doctor-reviews.component.scss']
})
export class DoctorReviewsComponent implements OnInit{

  feedbackResponse: FeedbackResponse | null = null;
  isLoading: boolean = true;
  error: string | null = null;

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit(): void {
    this.fetchFeedback();
  }

  fetchFeedback(): void {
    this.feedbackService.getFeedbackForDoctor().subscribe(
      (response: FeedbackResponse) => {
        this.feedbackResponse = response;
        this.isLoading = false;
      },
      (error) => {
        this.error = 'An error occurred while fetching feedback';
        this.isLoading = false;
      }
    );
  }



}
