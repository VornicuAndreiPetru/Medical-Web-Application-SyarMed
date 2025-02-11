import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './pages/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegisterComponent } from './pages/register/register.component';
import { RegisterDoctorComponent } from './pages/register-doctor/register-doctor.component';
import { ActivateAccountComponent } from './pages/activate-account/activate-account.component';
import {CodeInputModule} from "angular-code-input";
import { AppointmentComponent } from './pages/appointment/appointment.component';
import {HttpTokenInterceptor} from "./services/interceptor/http-token.interceptor";
import { MyAppointmentsComponent } from './pages/my-appointments/my-appointments.component';
import { DoctorAppointmentsComponent } from './pages/doctor-appointments/doctor-appointments.component';
import { PatientsHistoryComponent } from './pages/patients-history/patients-history.component';
import { MyMedicalHistoryComponent } from './pages/my-medical-history/my-medical-history.component';
import { AddFeedbackComponent } from './pages/add-feedback/add-feedback.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileDoctorComponent } from './pages/profile-doctor/profile-doctor.component';
import { DoctorReviewsComponent } from './pages/doctor-reviews/doctor-reviews.component';
import { FooterComponent } from './components/footer/footer.component';
import { RatingComponent } from './components/rating/rating.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { DoctorEditComponentComponent } from './pages/doctor-edit-component/doctor-edit-component.component';
import { PatientListComponent } from './pages/patient-list/patient-list.component';
import { PatientEditComponent } from './pages/patient-edit/patient-edit.component';
import { WaitComponent } from './pages/wait/wait.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    RegisterComponent,
    RegisterDoctorComponent,
    ActivateAccountComponent,
    AppointmentComponent,
    MyAppointmentsComponent,
    DoctorAppointmentsComponent,
    PatientsHistoryComponent,
    MyMedicalHistoryComponent,
    AddFeedbackComponent,
    ProfileComponent,
    ProfileDoctorComponent,
    DoctorReviewsComponent,
    FooterComponent,
    RatingComponent,
    AboutUsComponent,
    DashboardAdminComponent,
    DoctorEditComponentComponent,
    PatientListComponent,
    PatientEditComponent,
    WaitComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        CodeInputModule,
        ReactiveFormsModule
    ],
  providers: [
    HttpClient,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
