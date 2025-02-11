import {Component, OnInit} from '@angular/core';
import {User} from "../../services/models/user";
import {AdminUserRequest} from "../../services/models/admin-user-request";
import {ActivatedRoute, Router} from "@angular/router";
import {AdminControllerService} from "../../services/services/admin-controller.service";

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.scss']
})
export class PatientEditComponent implements OnInit{
  patient: User = {} as User; // Inițializare cu un obiect gol de tip User
  updatedUser: AdminUserRequest = {} as AdminUserRequest; // Inițializare cu obiect AdminUserRequest gol

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private adminService: AdminControllerService
  ) {}

  ngOnInit(): void {
    // Preluăm id-ul pacientului din URL
    const patientId = this.route.snapshot.paramMap.get('id');
    if (patientId) {
      // Obținem lista de pacienți și găsim pacientul cu id-ul respectiv
      this.adminService.getAllPatients().subscribe((patients) => {
        this.patient = patients.find((p) => p.id === +patientId) || {} as User;
        this.populateFormFields(); // Populăm câmpurile formularului cu datele pacientului
      });
    }
  }

  populateFormFields(): void {
    // Populăm obiectul 'updatedUser' cu datele din 'patient'
    this.updatedUser.firstname = this.patient.firstname;
    this.updatedUser.lastname = this.patient.lastname;
    this.updatedUser.address = this.patient.address;
    this.updatedUser.cnp = this.patient.cnp;
    this.updatedUser.email = this.patient.email;
    this.updatedUser.phoneNumber = this.patient.phoneNumber;
    this.updatedUser.enabled = this.patient.enabled;
    this.updatedUser.accountLocked = this.patient.accountLocked;
    // Adaugă și alte câmpuri dacă ai nevoie
  }

  updatePatient(): void {
    const updatedParams = {
      userId: this.patient.id!,
      body: this.updatedUser
    };

    this.router.navigate(['dashboard-patients']);
    alert("Date modificate cu succes!");

    this.adminService.updateUser(updatedParams).subscribe(
      (response) => {
        console.log('Pacient actualizat cu succes:', response);
        // Poți adăuga un mesaj de succes sau redirecționare după succes
      },
      (error) => {
        console.error('Eroare la actualizarea pacientului:', error);
      }
    );
  }

}
