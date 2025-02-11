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

import { completeMedicalHistory } from '../fn/medical-history/complete-medical-history';
import { CompleteMedicalHistory$Params } from '../fn/medical-history/complete-medical-history';
import { getMedicalHistoryByCnp } from '../fn/medical-history/get-medical-history-by-cnp';
import { GetMedicalHistoryByCnp$Params } from '../fn/medical-history/get-medical-history-by-cnp';
import { getMedicalHistoryForPatient } from '../fn/medical-history/get-medical-history-for-patient';
import { GetMedicalHistoryForPatient$Params } from '../fn/medical-history/get-medical-history-for-patient';
import { getPersonalMedicalHistory } from '../fn/medical-history/get-personal-medical-history';
import { GetPersonalMedicalHistory$Params } from '../fn/medical-history/get-personal-medical-history';
import { MedicalHistoryDto } from '../models/medical-history-dto';

@Injectable({ providedIn: 'root' })
export class MedicalHistoryService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `completeMedicalHistory()` */
  static readonly CompleteMedicalHistoryPath = '/medical-history/appointment/{appointmentId}/complete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `completeMedicalHistory()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  completeMedicalHistory$Response(params: CompleteMedicalHistory$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return completeMedicalHistory(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `completeMedicalHistory$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  completeMedicalHistory(params: CompleteMedicalHistory$Params, context?: HttpContext): Observable<void> {
    return this.completeMedicalHistory$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getMedicalHistoryForPatient()` */
  static readonly GetMedicalHistoryForPatientPath = '/medical-history/patient/{patientId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMedicalHistoryForPatient()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMedicalHistoryForPatient$Response(params: GetMedicalHistoryForPatient$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MedicalHistoryDto>>> {
    return getMedicalHistoryForPatient(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getMedicalHistoryForPatient$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMedicalHistoryForPatient(params: GetMedicalHistoryForPatient$Params, context?: HttpContext): Observable<Array<MedicalHistoryDto>> {
    return this.getMedicalHistoryForPatient$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MedicalHistoryDto>>): Array<MedicalHistoryDto> => r.body)
    );
  }

  /** Path part for operation `getMedicalHistoryByCnp()` */
  static readonly GetMedicalHistoryByCnpPath = '/medical-history/patient/cnp/{cnp}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMedicalHistoryByCnp()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMedicalHistoryByCnp$Response(params: GetMedicalHistoryByCnp$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MedicalHistoryDto>>> {
    return getMedicalHistoryByCnp(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getMedicalHistoryByCnp$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMedicalHistoryByCnp(params: GetMedicalHistoryByCnp$Params, context?: HttpContext): Observable<Array<MedicalHistoryDto>> {
    return this.getMedicalHistoryByCnp$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MedicalHistoryDto>>): Array<MedicalHistoryDto> => r.body)
    );
  }

  /** Path part for operation `getPersonalMedicalHistory()` */
  static readonly GetPersonalMedicalHistoryPath = '/medical-history/me';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPersonalMedicalHistory()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPersonalMedicalHistory$Response(params?: GetPersonalMedicalHistory$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MedicalHistoryDto>>> {
    return getPersonalMedicalHistory(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPersonalMedicalHistory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPersonalMedicalHistory(params?: GetPersonalMedicalHistory$Params, context?: HttpContext): Observable<Array<MedicalHistoryDto>> {
    return this.getPersonalMedicalHistory$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MedicalHistoryDto>>): Array<MedicalHistoryDto> => r.body)
    );
  }

}
