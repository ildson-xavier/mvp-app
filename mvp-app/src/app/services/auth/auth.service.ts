import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from 'src/app/model/login/login';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userDetails: any

/*   tokenUrl: string = environment.apiUrl + environment.obterTokenUrl
  clientId: string = environment.clientId
  clientSecret: string = environment.clientSecret */

  constructor( private http:HttpClient ) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  login(login: Login) : Boolean {
    /* return this.http.post<any>(`${baseLocalUrl}login`, login) */
    return true;
  }

  isAuthenticated() : boolean {
    return false;
  }

  logout(){
    return true;
  }


}

