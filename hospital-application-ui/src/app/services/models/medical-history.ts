/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { Appointment } from '../models/appointment';
import { User } from '../models/user';
export interface MedicalHistory {
  additionalInfo?: string;
  appointment?: Appointment;
  diagnosis?: string;
  doctor?: User;
  id?: number;
  patient?: User;
  treatment?: string;
}
