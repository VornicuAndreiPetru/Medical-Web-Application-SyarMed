import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-wait',
  templateUrl: './wait.component.html',
  styleUrls: ['./wait.component.scss']
})
export class WaitComponent {


  constructor(private router: Router) {
  }

  toHome() {
    this.router.navigate(['']);
  }
}
