import { Component } from '@angular/core';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private loginService: LoginService){}

  Login(){
    this.loginService.authenticate("admin", "admin").subscribe({
      next: data=>{
        console.log(data);
        
      },
      error: err=>{
        console.log(err);
      }
    })
  }
}
