import { Component } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.scss']
})
export class LogoutButtonComponent {
  constructor(private authService:AuthenticationService, private router:Router, private toast:ToastrService) {}

  Logout():void{
    this.authService.logout()
      .subscribe({
        next: value => {
          if(value.status == 204){
            this.toast.success('Successfully logged out!', 'Success!', {
              timeOut: 3000,
              progressBar: true,
              positionClass: 'toast-top-right',
            });
          }
        },
        error:() => {
          this.toast.error('Something went wrong!', 'Error', {
            timeOut: 3000,
            progressBar: true,
            positionClass: 'toast-top-right',
          });
        }
      })
    this.router?.navigateByUrl('login');
  }

}
