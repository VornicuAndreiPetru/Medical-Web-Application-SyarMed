import {Component, OnInit} from '@angular/core';
import {AdminUserRequest} from "../../services/models/admin-user-request";
import {User} from "../../services/models/user";
import {AdminControllerService} from "../../services/services/admin-controller.service";
import {UpdateUser$Params} from "../../services/fn/admin-controller/update-user";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.scss']
})
export class DashboardAdminComponent implements OnInit {
  doctors: User[] = []; // Lista de doctori

  constructor(private adminService: AdminControllerService, private router: Router) {}

  ngOnInit(): void {
    this.getDoctors();  // Apelăm funcția pentru a încărca doctorii la încărcarea componentei
  }

  // Funcția care apela serviciul pentru a aduce lista de doctori
  getDoctors(): void {
    this.adminService.getAllDoctors().subscribe(
      (doctors) => {
        this.doctors = doctors;  // Salvăm lista de doctori
      },
      (error) => {
        console.error('Eroare la obținerea doctorilor:', error);
      }
    );
  }

  // Funcția care va naviga la pagina de editare a unui doctor
  editDoctor(doctorId: number | undefined): void {
    this.router.navigate([`/dashboard/edit/${doctorId}`]);
  }
}
