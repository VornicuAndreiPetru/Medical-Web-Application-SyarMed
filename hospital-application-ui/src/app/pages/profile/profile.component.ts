import {Component, OnInit} from '@angular/core';
import {UserControllerService} from "../../services/services/user-controller.service";
import {DoctorDto} from "../../services/models/doctor-dto";
import {PatientDto} from "../../services/models/patient-dto";
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  userForm: FormGroup;
  user: PatientDto = {};  // Vom stoca datele pacientului aici
  isEditMode: boolean = false; // Control pentru a comuta între vizualizare și editare
  successMessage: string = '';

  constructor(private userService: UserControllerService, private fb:FormBuilder) {
    this.userForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^07\d{8}$/)]],  // Validare număr telefon
      address: ['', Validators.required],
      cnp: [{value: '', disabled: true}],  // CNP-ul este dezactivat
      dateOfBirth: ['', [Validators.required, this.ageValidator]]  // Validare vârstă
    });
  }

  get phoneNumberControl() {
    return this.userForm.get('phoneNumber');
  }

  get dateOfBirthControl() {
    return this.userForm.get('dateOfBirth');
  }


  ngOnInit(): void {
    this.loadUserProfile();
  }

  // Obținem profilul pacientului conectat
  loadUserProfile(): void {
    this.userService.getUserProfile().subscribe((data: PatientDto) => {
      this.user = data;
      if (this.user) {
        this.userForm.patchValue(this.user); // Precompletăm formularul cu datele existente
      }
    });
  }

  // Comutăm între vizualizare și editare
  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
    if (this.isEditMode) {
      this.userForm.patchValue(this.user); // Precompletăm din nou la fiecare editare
    }
  }
  ageValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }

    const dob = new Date(control.value);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();

    // Ajustăm calculul pentru a verifica dacă utilizatorul are exact 18 ani împliniți
    if (age < 18 || (age === 18 && (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)))) {
      return { ageError: true }; // Returnăm eroare dacă utilizatorul are sub 18 ani
    }

    return null;
  }

  // Salvează modificările profilului pacientului
  saveProfile(): void {
    if(this.userForm.valid){
      this.userService.updateUserProfile({body:this.userForm.getRawValue()}).subscribe(() => {
        this.isEditMode = false;
        this.successMessage = 'Modificările au fost salvate cu succes!';
        setTimeout(() => this.successMessage = '', 3000); // Ascundem mesajul după 3 secunde
        this.loadUserProfile();  // Încărcăm din nou datele pentru a reflecta modificările
      });
    }
  }
}
