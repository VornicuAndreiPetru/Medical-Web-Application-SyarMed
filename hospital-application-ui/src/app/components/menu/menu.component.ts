import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/services/authentication.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isDoctor: boolean = false;
  isPatient: boolean = false;
  isAdmin: boolean = false;
  isLoggedIn: boolean = false;
  username: string = '';

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isAuthenticated();
    if (this.isLoggedIn) {
      const roles = this.authService.getRolesFromToken();
      this.isDoctor = roles.includes('DOCTOR');
      this.isPatient = roles.includes('PATIENT');
      this.isAdmin = roles.includes('ADMIN');
      this.username = this.authService.getUsernameFromToken();
    }


    this.isDoctor = this.authService.isUserRole('DOCTOR');
    this.isPatient = this.authService.isUserRole('PATIENT');
    this.isAdmin = this.authService.isUserRole('ADMIN');
  }


  toLogin() {
    this.router.navigate(['login'])
  }

  toHome() {
    this.router.navigate([''])
  }

  toRegister() {
    this.router.navigate(['register'])
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.isDoctor = false;
    this.isPatient = false;
    this.username = '';
    this.router.navigate(['']);
  }

  toAppointment() {
    this.router.navigate(['appointment']);
  }

  toMyAppointments() {
    this.router.navigate(['my-appointments'])
  }

  toDoctorAppointments() {
    this.router.navigate(['doctor-appointments']);
  }

  toPatientsHistory() {
    this.router.navigate(['patients-history']);
  }

  toMyHistory() {
    this.router.navigate(['my-medical-history']);
  }

  toAddFeedback() {
    this.router.navigate(['add-feedback']);
  }

  toProfilePatient() {
    this.router.navigate(['profile-patient']);
  }

  toProfileDoctor() {
    this.router.navigate(['profile-doctor']);
  }

  toReviews() {
    this.router.navigate(['doctor-reviews']);
  }

  toAboutUs() {
    this.router.navigate(['about-us']);
  }

  toDashboard() {
    this.router.navigate(['dashboard']);
  }

  toDashboardPatients() {
    this.router.navigate(['dashboard-patients']);
  }
}
