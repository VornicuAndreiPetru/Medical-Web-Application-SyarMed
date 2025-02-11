import { Component } from '@angular/core';
import {MedicalHistoryService} from "../../services/services/medical-history.service";

@Component({
  selector: 'app-patients-history',
  templateUrl: './patients-history.component.html',
  styleUrls: ['./patients-history.component.scss']
})
export class PatientsHistoryComponent {
  cnp: string = ''; // CNP-ul introdus de utilizator
  medicalHistory: any[] | null = null; // Rezultatele istoricului medical
  errorMessage: string | null = null; // Mesaj de eroare

  constructor(private medicalHistoryService: MedicalHistoryService) {}

  // Funcție pentru căutarea istoricului medical al pacientului
  searchHistory(): void {
    if (!this.cnp.trim()) {
      this.errorMessage = 'Introduceți un CNP valid.';
      this.medicalHistory = null;
      return;
    }

    this.medicalHistoryService.getMedicalHistoryByCnp({ cnp: this.cnp }).subscribe({
      next: (history) => {
        this.errorMessage = null;
        this.medicalHistory = history.sort((a, b) => {
          const dateA = a.appointmentDate ? new Date(a.appointmentDate).getTime() : 0;
          const dateB = b.appointmentDate ? new Date(b.appointmentDate).getTime() : 0;
          return dateB - dateA; // Sortează descrescător
        });
      },
      error: (err) => {
        this.errorMessage = 'Nu s-a găsit niciun istoric medical pentru acest CNP.';
        this.medicalHistory = null;
      },
    });

  }

}
