import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/services/authentication.service";
import {DoctorRegistrationRequest} from "../../services/models/doctor-registration-request";

@Component({
  selector: 'app-register-doctor',
  templateUrl: './register-doctor.component.html',
  styleUrls: ['./register-doctor.component.scss']
})
export class RegisterDoctorComponent {

  registerRequest: DoctorRegistrationRequest = {email:'', firstname: '', lastname:'',password:'', hospital:'', specialization:''};
  errorMsg: Array<string> = [];


  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {
  }

  toPatientReg() {
      this.router.navigate(['register']);
  }

  register() {
    this.errorMsg = [];
    this.authService.registerDoctor({
      body: this.registerRequest
    }).subscribe({
      next: ()=>{
        this.router.navigate(['wait']);
      },
      error: (err) =>{
        this.errorMsg = err.error.validationErrors;
      }
    })
  }
}
