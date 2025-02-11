import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/services/authentication.service";
import {PatientRegistrationRequest} from "../../services/models/patient-registration-request";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerRequest: PatientRegistrationRequest = {email:'', firstname: '', lastname:'',password:'',cnp:''}
  errorMsg: Array<string> = [];


  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {
  }


  toDoctorReg() {
    this.router.navigate(['register-doctor']);
  }

  register() {
    this.errorMsg = [];
    this.authService.registerPatient({
      body: this.registerRequest
    }).subscribe({
      next: () => {
        this.router.navigate(['activate-account']);
      },
      error: (err) => {
        // Verifică dacă eroarea este de tipul CNP duplicat
        if (err.status === 400 && err.error.businessErrorCode === 305) {
          this.errorMsg.push(err.error.businessErrorDescription);  // Adaugă mesajul de eroare pentru CNP duplicat
        } else {
          // În cazul altor erori, adaugă-le în array-ul de erori
          this.errorMsg = err.error.validationErrors || ['A apărut o eroare necunoscută.'];
        }
      }
    })
  }

}
