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

import { AppointmentDto } from '../models/appointment-dto';
import { createAppointment } from '../fn/appointment/create-appointment';
import { CreateAppointment$Params } from '../fn/appointment/create-appointment';
import { DoctorDto } from '../models/doctor-dto';
import { getAllMyAppointments } from '../fn/appointment/get-all-my-appointments';
import { GetAllMyAppointments$Params } from '../fn/appointment/get-all-my-appointments';
import { getCompletedAppointments } from '../fn/appointment/get-completed-appointments';
import { GetCompletedAppointments$Params } from '../fn/appointment/get-completed-appointments';
import { getDoctorAvailability } from '../fn/appointment/get-doctor-availability';
import { GetDoctorAvailability$Params } from '../fn/appointment/get-doctor-availability';
import { getDoctorsBySpecAndHospital } from '../fn/appointment/get-doctors-by-spec-and-hospital';
import { GetDoctorsBySpecAndHospital$Params } from '../fn/appointment/get-doctors-by-spec-and-hospital';
import { getHospitalsBySpecialization } from '../fn/appointment/get-hospitals-by-specialization';
import { GetHospitalsBySpecialization$Params } from '../fn/appointment/get-hospitals-by-specialization';
import { getSpecializations } from '../fn/appointment/get-specializations';
import { GetSpecializations$Params } from '../fn/appointment/get-specializations';

@Injectable({ providedIn: 'root' })
export class AppointmentService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `createAppointment()` */
  static readonly CreateAppointmentPath = '/appointments';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createAppointment()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createAppointment$Response(params: CreateAppointment$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return createAppointment(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createAppointment$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createAppointment(params: CreateAppointment$Params, context?: HttpContext): Observable<number> {
    return this.createAppointment$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `getSpecializations()` */
  static readonly GetSpecializationsPath = '/appointments/specializations';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSpecializations()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSpecializations$Response(params?: GetSpecializations$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<string>>> {
    return getSpecializations(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSpecializations$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSpecializations(params?: GetSpecializations$Params, context?: HttpContext): Observable<Array<string>> {
    return this.getSpecializations$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<string>>): Array<string> => r.body)
    );
  }

  /** Path part for operation `getAllMyAppointments()` */
  static readonly GetAllMyAppointmentsPath = '/appointments/my-appointments';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllMyAppointments()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllMyAppointments$Response(params?: GetAllMyAppointments$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AppointmentDto>>> {
    return getAllMyAppointments(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllMyAppointments$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllMyAppointments(params?: GetAllMyAppointments$Params, context?: HttpContext): Observable<Array<AppointmentDto>> {
    return this.getAllMyAppointments$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AppointmentDto>>): Array<AppointmentDto> => r.body)
    );
  }

  /** Path part for operation `getHospitalsBySpecialization()` */
  static readonly GetHospitalsBySpecializationPath = '/appointments/hospitals';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getHospitalsBySpecialization()` instead.
   *
   * This method doesn't expect any request body.
   */
  getHospitalsBySpecialization$Response(params: GetHospitalsBySpecialization$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<string>>> {
    return getHospitalsBySpecialization(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getHospitalsBySpecialization$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getHospitalsBySpecialization(params: GetHospitalsBySpecialization$Params, context?: HttpContext): Observable<Array<string>> {
    return this.getHospitalsBySpecialization$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<string>>): Array<string> => r.body)
    );
  }

  /** Path part for operation `getDoctorsBySpecAndHospital()` */
  static readonly GetDoctorsBySpecAndHospitalPath = '/appointments/doctors';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDoctorsBySpecAndHospital()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDoctorsBySpecAndHospital$Response(params: GetDoctorsBySpecAndHospital$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<DoctorDto>>> {
    return getDoctorsBySpecAndHospital(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getDoctorsBySpecAndHospital$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDoctorsBySpecAndHospital(params: GetDoctorsBySpecAndHospital$Params, context?: HttpContext): Observable<Array<DoctorDto>> {
    return this.getDoctorsBySpecAndHospital$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<DoctorDto>>): Array<DoctorDto> => r.body)
    );
  }

  /** Path part for operation `getCompletedAppointments()` */
  static readonly GetCompletedAppointmentsPath = '/appointments/completed-appointments';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCompletedAppointments()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCompletedAppointments$Response(params?: GetCompletedAppointments$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AppointmentDto>>> {
    return getCompletedAppointments(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCompletedAppointments$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCompletedAppointments(params?: GetCompletedAppointments$Params, context?: HttpContext): Observable<Array<AppointmentDto>> {
    return this.getCompletedAppointments$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AppointmentDto>>): Array<AppointmentDto> => r.body)
    );
  }

  /** Path part for operation `getDoctorAvailability()` */
  static readonly GetDoctorAvailabilityPath = '/appointments/availability';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDoctorAvailability()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDoctorAvailability$Response(params: GetDoctorAvailability$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<string>>> {
    return getDoctorAvailability(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getDoctorAvailability$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDoctorAvailability(params: GetDoctorAvailability$Params, context?: HttpContext): Observable<Array<string>> {
    return this.getDoctorAvailability$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<string>>): Array<string> => r.body)
    );
  }

}
