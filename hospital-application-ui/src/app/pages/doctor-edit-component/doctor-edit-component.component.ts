import {Component, OnInit} from '@angular/core';
import {User} from "../../services/models/user";
import {AdminControllerService} from "../../services/services/admin-controller.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AdminUserRequest} from "../../services/models/admin-user-request";

@Component({
  selector: 'app-doctor-edit-component',
  templateUrl: './doctor-edit-component.component.html',
  styleUrls: ['./doctor-edit-component.component.scss']
})
export class DoctorEditComponentComponent implements OnInit{

  doctor: User = {} as User; // Inițializare cu un obiect gol de tip User
  updatedUser: AdminUserRequest = {} as AdminUserRequest; // Inițializare cu obiect AdminUserRequest gol

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private adminService: AdminControllerService
  ) {}

  ngOnInit(): void {
    // Preluăm id-ul doctorului din URL
    const doctorId = this.route.snapshot.paramMap.get('id');
    if (doctorId) {
      // Obținem lista de doctori și găsim doctorul cu id-ul respectiv
      this.adminService.getAllDoctors().subscribe((doctors) => {
        this.doctor = doctors.find((d) => d.id === +doctorId) || {} as User;
        this.populateFormFields(); // Populăm câmpurile formularului cu datele doctorului
      });
    }
  }

  populateFormFields(): void {
    // Populăm obiectul 'updatedUser' cu datele din 'doctor'
    this.updatedUser.firstname = this.doctor.firstname;
    this.updatedUser.lastname = this.doctor.lastname;
    this.updatedUser.email = this.doctor.email;
    this.updatedUser.phoneNumber = this.doctor.phoneNumber;
    this.updatedUser.specialization = this.doctor.specialization;
    this.updatedUser.hospital = this.doctor.hospital;
    this.updatedUser.enabled = this.doctor.enabled;
    this.updatedUser.accountLocked = this.doctor.accountLocked;
    // Adaugă și alte câmpuri dacă ai nevoie
  }

  updateDoctor(): void {
    const updatedParams = {
      userId: this.doctor.id!,
      body: this.updatedUser
    };

    this.router.navigate(['dashboard']);
    alert("Date modificate cu succes!");

    this.adminService.updateUser(updatedParams).subscribe(
      (response) => {
        console.log('Doctor actualizat cu succes:', response);
        // Poți adăuga un mesaj de succes sau redirecționare după succes

      },
      (error) => {
        console.error('Eroare la actualizarea doctorului:', error);
      }
    );
  }
}
