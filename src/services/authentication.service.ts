import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponse } from 'src/app/models/authResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authURL: string = "http://localhost:8080/realms/Open5HR/protocol/openid-connect/token";
  logoutURL: string = "http://localhost:8080/realms/Open5HR/protocol/openid-connect/logout";
  constructor(private http: HttpClient) {}

   login(username:string, password:string):Observable<AuthResponse>{
     const body:URLSearchParams = new URLSearchParams();
     body.set("grant_type","password");
     body.set("client_id","frontend");
     body.set('username', username);
     body.set('password', password);

     const options = {
       headers: new HttpHeaders()
         .set('Content-Type', 'application/x-www-form-urlencoded'),
         responseType: 'json' as 'json'
     };
    return (this.http.post<AuthResponse>(this.authURL, body.toString(), options));
  }

  logout(){
    const body:URLSearchParams = new URLSearchParams();
    const refresh_token = localStorage.getItem("refresh_token")!;

    body.set("client_id","frontend");
    body.set("refresh_token",refresh_token);

    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded'),
      responseType: 'json' as 'json'
    };

    localStorage.clear();
    return this.http.post(this.logoutURL, body.toString(), options);
  }

}
