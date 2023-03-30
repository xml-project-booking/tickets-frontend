import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router, private registrationService:RegistrationService) { }

  ngOnInit(): void {
  }
  LogOut(){
    localStorage.removeItem('Token');
    localStorage.removeItem('role');
    this.router.navigate(["/"]);
}
Proba(){
  this.registrationService.Proba().subscribe()
}
CreateFlight(){
  this.router.navigate(["/admin/create-flight"])
}
AllFlights(){
  this.router.navigate(["/admin/all-flights"])
}
}
