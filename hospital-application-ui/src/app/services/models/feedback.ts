/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { Appointment } from '../models/appointment';
import { User } from '../models/user';
export interface Feedback {
  appointment?: Appointment;
  comment?: string;
  createdBy?: number;
  createdDate?: string;
  doctor?: User;
  id?: number;
  lastModifiedBy?: number;
  lastModifiedDate?: string;
  patient?: User;
  rating?: number;
}
