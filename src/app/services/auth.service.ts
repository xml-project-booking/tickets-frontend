import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../model/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiHost: string = 'http://localhost:5000';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }
  signIn(login:Login): Observable<any> {
    return this.http.post<Login>(this.apiHost + '/login', login, { headers: this.headers });
  }
  // getLoggedInClient():Observable<any>{
  //   return this.http.get<Client>(this.apiHost + '/auth/loggedInClient', { headers: this.headers });
  // }
  isAuthorized(allowedRoles: string[]): boolean {
    // check if the list of allowed roles is empty, if empty, authorize the user to access the page
    if (allowedRoles == null || allowedRoles.length === 0) {
      return true;
    }
  
    // get token from local storage or state management
   const role = localStorage.getItem('role');
  
  // check if the user roles is in the list of allowed roles, return true if allowed and false if not allowed
    return allowedRoles.includes(role!);
  }
}
