import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
   }

   authenticate(username:string, password:string):Observable<any>{
    return this.http.get("https://localhost:7563/api/Dw_Auth/Retrieve/" + username + "/" + password, {responseType: "json" as 'json' })
}

}
