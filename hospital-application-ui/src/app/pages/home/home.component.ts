import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/services/authentication.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  faqs = [
    { question: 'Cum pot accesa istoricul meu medical?', answer: 'Puteți accesa istoricul dumneavoastră medical prin intermediul contului personal din aplicație. După autentificare, navigați la secțiunea „Istoricul Meu” pentru a vizualiza toate informațiile referitoare la vizitele anterioare, diagnosticările și tratamentele efectuate.', isOpen: false },
    { question: 'Cum pot crea o programare la doctor?', answer: 'Pentru a crea o programare, accesați secțiunea „Creare Programare” din aplicație, selectați data și ora dorită, și completați formularul cu detalii suplimentare despre consultație. ', isOpen: false },
    { question: 'Este posibil să adaug feedback pentru doctorul meu?', answer: 'Da, după fiecare consultație, aveți posibilitatea de a adăuga un feedback pentru medicul dumneavoastră. Puteți evalua experiența din cadrul consultației și puteți lăsa sugestii pentru îmbunătățirea serviciilor.', isOpen: false },
    { question: 'Cum pot adăuga un formular pentru programare în istoricul meu medical?', answer: 'După completarea unei programări, formularul va fi automat adăugat în istoricul medical al pacientului.', isOpen: false },
    { question: 'Ce se întâmplă dacă nu pot respecta ora programării?', answer: 'Dacă nu puteți ajunge la programare, vă rugăm să o anulați sau să o reprogramați din aplicație cu cel puțin 24 de ore înainte.', isOpen: false },
    { question: 'Cum pot verifica detaliile unei programări viitoare?', answer: ' Pentru a verifica detaliile unei programări viitoare, accesați secțiunea „Programările Mele” din aplicație. Aici veți găsi toate programările planificate, inclusiv data, ora, medicul și motivul consultației. De asemenea, aveți opțiunea de a adăuga sau modifica informațiile legate de programare, dacă este necesar.', isOpen: false }
  ];

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {
  }
  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

  toRegister() {
    if(this.authService.isAuthenticated()){
      alert('Sunteți deja conectat!');
    }else {
      this.router.navigate(['register']);
    }
  }
}
