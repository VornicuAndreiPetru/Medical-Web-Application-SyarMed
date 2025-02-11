import {Component, OnInit} from '@angular/core';
import {User} from "../../services/models/user";
import {AdminControllerService} from "../../services/services/admin-controller.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit{
  patients: User[] = []; // Lista de pacienți

  constructor(private adminService: AdminControllerService, private router: Router) {}

  ngOnInit(): void {
    this.getPatients();  // Apelăm funcția pentru a încărca pacienții la încărcarea componentei
  }

  // Funcția care apela serviciul pentru a aduce lista de pacienți
  getPatients(): void {
    this.adminService.getAllPatients().subscribe(
      (patients) => {
        this.patients = patients;  // Salvăm lista de pacienți
      },
      (error) => {
        console.error('Eroare la obținerea pacienților:', error);
      }
    );
  }

  // Funcția care va naviga la pagina de editare a unui pacient
  editPatient(patientId: number | undefined): void {
    this.router.navigate([`/dashboard-patients/edit/${patientId}`]);
  }
}
