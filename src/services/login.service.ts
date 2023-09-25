import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
   }

   authenticate(username:string, password:string):Observable<User[]>{
    return (this.http.get<User[]>("https://localhost:7563/api/Dw_Auth/Retrieve/" + username + "/" + password, {responseType: "json" as 'json' }))
}

}
