import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {RegisterDoctorComponent} from "./pages/register-doctor/register-doctor.component";
import {ActivateAccountComponent} from "./pages/activate-account/activate-account.component";
import {AppointmentComponent} from "./pages/appointment/appointment.component";
import {MyAppointmentsComponent} from "./pages/my-appointments/my-appointments.component";
import {DoctorAppointmentsComponent} from "./pages/doctor-appointments/doctor-appointments.component";
import {PatientsHistoryComponent} from "./pages/patients-history/patients-history.component";
import {MyMedicalHistoryComponent} from "./pages/my-medical-history/my-medical-history.component";
import {AddFeedbackComponent} from "./pages/add-feedback/add-feedback.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {ProfileDoctorComponent} from "./pages/profile-doctor/profile-doctor.component";
import {DoctorReviewsComponent} from "./pages/doctor-reviews/doctor-reviews.component";
import {AboutUsComponent} from "./pages/about-us/about-us.component";
import {DashboardAdminComponent} from "./pages/dashboard-admin/dashboard-admin.component";
import {DoctorEditComponentComponent} from "./pages/doctor-edit-component/doctor-edit-component.component";
import {PatientListComponent} from "./pages/patient-list/patient-list.component";
import {PatientEditComponent} from "./pages/patient-edit/patient-edit.component";
import {WaitComponent} from "./pages/wait/wait.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'register-doctor',
    component: RegisterDoctorComponent
  },
  {
    path: 'activate-account',
    component: ActivateAccountComponent
  },
  {
    path: 'appointment',
    component: AppointmentComponent
  },
  {
    path: 'my-appointments',
    component: MyAppointmentsComponent
  },
  {
    path: 'doctor-appointments',
    component: DoctorAppointmentsComponent
  },
  {
    path: 'patients-history',
    component: PatientsHistoryComponent
  },
  {
    path: 'my-medical-history',
    component: MyMedicalHistoryComponent
  },
  {
    path: 'add-feedback',
    component: AddFeedbackComponent
  },
  {
    path: 'profile-patient',
    component: ProfileComponent
  },
  {
    path: 'profile-doctor',
    component: ProfileDoctorComponent
  },
  {
    path: 'doctor-reviews',
    component: DoctorReviewsComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'dashboard',
    component: DashboardAdminComponent
  },
  {
    path: 'dashboard/edit/:id',
    component: DoctorEditComponentComponent
  },
  {
    path: 'dashboard-patients',
    component: PatientListComponent
  },
  {
    path: 'dashboard-patients/edit/:id',
    component: PatientEditComponent
  },
  {
    path: 'wait',
    component: WaitComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
