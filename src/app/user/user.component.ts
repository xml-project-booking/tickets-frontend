import { RegistrationService } from './../services/registration.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router:Router, private registrationService:RegistrationService) { }

  ngOnInit(): void {
  }
  LogOut(){
    localStorage.removeItem('Token');
    localStorage.removeItem('role');
    this.router.navigate(["/"]);
}


}
