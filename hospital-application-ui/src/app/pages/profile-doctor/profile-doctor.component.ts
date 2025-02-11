import {Component, OnInit} from '@angular/core';
import {UserControllerService} from "../../services/services/user-controller.service";
import {DoctorDto} from "../../services/models/doctor-dto";
import {PatientDto} from "../../services/models/patient-dto";

@Component({
  selector: 'app-profile-doctor',
  templateUrl: './profile-doctor.component.html',
  styleUrls: ['./profile-doctor.component.scss']
})
export class ProfileDoctorComponent implements OnInit{

  user: DoctorDto  = {};  // Vom stoca datele utilizatorului aici
  isEditMode: boolean = false; // Control pentru a comuta între vizualizare și editare

  constructor(private userService: UserControllerService) {}

  ngOnInit(): void {
    this.loadUserProfile();
  }

  // Obținem profilul utilizatorului conectat (poate fi doctor sau pacient)
  loadUserProfile(): void {
    this.userService.getUserProfile().subscribe((data: DoctorDto) => {
      this.user = data;
    });
  }

  // Comutăm între vizualizare și editare
  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }

  // Salvează modificările profilului utilizatorului
  saveProfile(): void {
    this.userService.updateUserProfile({body: this.user}).subscribe(() => {
      this.isEditMode = false;
      this.loadUserProfile();  // Încărcăm din nou datele pentru a reflecta modificările
    });
  }

}
