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

  isLoginButtonDisabled: boolean = true;
  username: string = '';
  password: string = '';
  loginCredentials: FormGroup;
  constructor(private loginService: LoginService, private router: Router){
    this.loginCredentials = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })

    this.loginCredentials.valueChanges.subscribe(() => {
      this.updateLoginButtonState();
    });
  }

  Login(){
    this.username = this.loginCredentials.get('username')?.value;
    this.password = this.loginCredentials.get('password')?.value;
    this.loginService.authenticate(this.username,this.password).subscribe({
      next: data=>{
        const user = data[0]
        localStorage.setItem('username', user.username);
        console.log(localStorage.getItem('username'))
        localStorage.setItem('employee_id', user.ots_Adeies_Employee_Id);
        this.router?.navigateByUrl('/home');
      },
      error: err=>{
        console.log(err);
      }
    })
  }

  updateLoginButtonState(){
    this.isLoginButtonDisabled = this.loginCredentials.invalid;
  }
}
