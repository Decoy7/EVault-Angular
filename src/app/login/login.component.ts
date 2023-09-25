import { Component } from '@angular/core';
import { LoginService } from 'src/services/login.service';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  loginCredentials: FormGroup;
  constructor(private loginService: LoginService, private router: Router){
    this.loginCredentials = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  Login(){
    this.username = this.loginCredentials.get('username')?.value;
    this.password = this.loginCredentials.get('password')?.value;
    this.loginService.authenticate(this.username,this.password).subscribe({
      next: data=>{
        localStorage.setItem('user', data.username);
        this.router?.navigateByUrl('');
      },
      error: err=>{
        console.log(err);
      }
    })
  }
}
