import { Component } from '@angular/core';
import { AuthenticationService } from 'src/services/authentication.service';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthResponse} from "../../models/authResponse";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  isLoginButtonDisabled: boolean = true;
  loginCredentials: FormGroup;
  constructor(private authService: AuthenticationService, private router: Router){
    this.loginCredentials = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })

    this.loginCredentials.valueChanges.subscribe(() => {
      this.updateLoginButtonState();
    });
  }

  Login():void{
    const username = this.loginCredentials.get('username')!.value;
    const password = this.loginCredentials.get('password')!.value;
    this.authService.login(username, password).subscribe({
      next: (data:AuthResponse):void=>{
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('refresh_token', data.refresh_token);
        localStorage.setItem('expires_in', data.expires_in);
        localStorage.setItem('refresh_expires_in', data.refresh_expires_in);
        localStorage.setItem('token_type', data.token_type);

        this.router?.navigateByUrl('/home');
      },
      error: (err):void=>{
        console.log(err);// needs toast for error on login here
      }
    });
  }

  updateLoginButtonState():void{
    this.isLoginButtonDisabled = this.loginCredentials.invalid;
  }
}
