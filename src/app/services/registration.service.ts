import { RegUser } from './../model/regUser.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  apiHost: string = 'http://localhost:5000';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  registerUser(userReg: RegUser): Observable<RegUser> {
    return this.http.post<RegUser>(this.apiHost + '/registration', userReg, { headers: this.headers });
  }
  Proba(): any{
    return this.http.post(this.apiHost + '/proba', { headers: this.headers });
  }
  getClientByEmail(email: String): Observable<RegUser> {
    return this.http.get<RegUser>(this.apiHost + '/existsEmail/' + email, { headers: this.headers });
  }
  getClientByUsername(username: String): Observable<RegUser> {
    return this.http.get<RegUser>(this.apiHost + '/existsUsername/' + username, { headers: this.headers });
  }
}
