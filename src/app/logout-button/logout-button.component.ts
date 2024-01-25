import { Component } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.scss']
})
export class LogoutButtonComponent {
  constructor(private authService:AuthenticationService, private router:Router) {}

  Logout():void{
    this.authService.logout()
      .subscribe({
        next: value => {
          console.log(value);
          // Needs a toast here for logging out successfully
        },
        error:err => {
          console.log(err)
          // Needs a toast here for error logging out
        }
      })
    this.router?.navigateByUrl('login');
  }

}
