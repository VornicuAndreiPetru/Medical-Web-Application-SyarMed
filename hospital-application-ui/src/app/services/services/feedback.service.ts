/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createFeedback } from '../fn/feedback/create-feedback';
import { CreateFeedback$Params } from '../fn/feedback/create-feedback';
import { FeedbackResponse } from '../models/feedback-response';
import { getAverageRatingForDoctor } from '../fn/feedback/get-average-rating-for-doctor';
import { GetAverageRatingForDoctor$Params } from '../fn/feedback/get-average-rating-for-doctor';
import { getFeedbackForDoctor } from '../fn/feedback/get-feedback-for-doctor';
import { GetFeedbackForDoctor$Params } from '../fn/feedback/get-feedback-for-doctor';

@Injectable({ providedIn: 'root' })
export class FeedbackService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `createFeedback()` */
  static readonly CreateFeedbackPath = '/feedback';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createFeedback()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createFeedback$Response(params: CreateFeedback$Params, context?: HttpContext): Observable<StrictHttpResponse<{
[key: string]: string;
}>> {
    return createFeedback(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createFeedback$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createFeedback(params: CreateFeedback$Params, context?: HttpContext): Observable<{
[key: string]: string;
}> {
    return this.createFeedback$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
[key: string]: string;
}>): {
[key: string]: string;
} => r.body)
    );
  }

  /** Path part for operation `getAverageRatingForDoctor()` */
  static readonly GetAverageRatingForDoctorPath = '/feedback/doctor/{doctorId}/average-rating';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAverageRatingForDoctor()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAverageRatingForDoctor$Response(params: GetAverageRatingForDoctor$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return getAverageRatingForDoctor(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAverageRatingForDoctor$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAverageRatingForDoctor(params: GetAverageRatingForDoctor$Params, context?: HttpContext): Observable<number> {
    return this.getAverageRatingForDoctor$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `getFeedbackForDoctor()` */
  static readonly GetFeedbackForDoctorPath = '/feedback/doctor/feedback';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFeedbackForDoctor()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFeedbackForDoctor$Response(params?: GetFeedbackForDoctor$Params, context?: HttpContext): Observable<StrictHttpResponse<FeedbackResponse>> {
    return getFeedbackForDoctor(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getFeedbackForDoctor$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFeedbackForDoctor(params?: GetFeedbackForDoctor$Params, context?: HttpContext): Observable<FeedbackResponse> {
    return this.getFeedbackForDoctor$Response(params, context).pipe(
      map((r: StrictHttpResponse<FeedbackResponse>): FeedbackResponse => r.body)
    );
  }

}
