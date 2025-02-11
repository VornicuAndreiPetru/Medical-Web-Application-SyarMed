import {Component, OnInit} from '@angular/core';
import {MedicalHistoryService} from "../../services/services/medical-history.service";

@Component({
  selector: 'app-my-medical-history',
  templateUrl: './my-medical-history.component.html',
  styleUrls: ['./my-medical-history.component.scss']
})
export class MyMedicalHistoryComponent implements OnInit{
  medicalHistory: any[] = []; // Lista istoricului medical
  errorMessage: string | null = null; // Mesaj de eroare, dacă există

  constructor(private medicalHistoryService: MedicalHistoryService) {}

  ngOnInit(): void {
    this.loadMedicalHistory();
  }

  // Încarcă istoricul medical al pacientului conectat
  loadMedicalHistory(): void {
    this.medicalHistoryService.getPersonalMedicalHistory()
      .subscribe({
        next: (history) =>{
          this.medicalHistory = history.sort((a, b) => {
            const dateA = a.appointmentDate ? new Date(a.appointmentDate).getTime() : 0; // Folosim 0 ca valoare fallback
            const dateB = b.appointmentDate ? new Date(b.appointmentDate).getTime() : 0; // Folosim 0 ca valoare fallback
            return dateB - dateA; // Sortează descrescător
          });
          this.errorMessage = null;
        },
        error: (error) =>{
          this.errorMessage = "Nu s-a gasit niciun istoric medical";
          this.medicalHistory = [];
        }
      });
  }
}
