import { Component } from '@angular/core';
import {AuthenticationService} from "../../services/services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {


  constructor(private authService: AuthenticationService, private router:Router) {
  }

  toRegister() {
    if(this.authService.isAuthenticated()){
      alert('Sunteți deja conectat!');
    }else {
      this.router.navigate(['register']);
    }
  }

  toLogin() {
    if(this.authService.isAuthenticated()){
      alert('Sunteți deja conectat!');
    }else {
      this.router.navigate(['login']);
    }
  }
}
