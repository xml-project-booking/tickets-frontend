import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  apiHost:string  = "http://localhost:5000"

  constructor(private http:HttpClient) { }

  checkIfWorks(patient:any){
    console.log(patient)
    
    return this.http.post(this.apiHost+"/registration",patient)
  }


}
