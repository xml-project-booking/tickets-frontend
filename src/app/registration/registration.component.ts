import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegUser } from '../model/regUser.model';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public byEmail : any;
  public byUsername : any;
  public validEmail :any = 'OK';
  public validUsername :any = 'OK';
  public validInfo : any = 'OK';
  public registrationUser: RegUser = new RegUser();
  public passConfirm : String = '';
  public showPassword: boolean = false;
  public showPasswordConfirm: boolean = false;
  constructor(private registrationService:RegistrationService, private router: Router) { }

  ngOnInit(): void {
  }

  Registration() {
    this.validationText();
    if (!this.isValidInput()) {
      return;
    }
    if(this.registrationUser.password!=this.passConfirm){
      return;
    }
    this.registrationService.getClientByEmail(this.registrationUser?.email).subscribe(res => {
      this.byEmail = res; 
      if(this.byEmail != null){
        this.validEmail='Email is already taken';
        return;
      }else{
      this.registrationService.getClientByUsername(this.registrationUser?.username).subscribe(res => {
          this.byUsername = res; 
          if(this.byUsername != null){
            this.validUsername='Username is already taken';
            return
          }else{
          this.registrationService.registerUser(this.registrationUser).subscribe(res => {
            alert("Registration request successfully sent!")
                this.router.navigate(['/user']);
              });
            }
        });
      }
    });
   };

    public togglePasswordVisibility(): void {
      this.showPassword = !this.showPassword;
    }
    public togglePasswordConfirmVisibility(): void {
      this.showPasswordConfirm = !this.showPasswordConfirm;
    }
  private isValidInput(): boolean {
    return this.registrationUser?.email != '' && this.registrationUser?.password !='' && this.registrationUser?.name != '' && this.registrationUser?.surname != '' &&
    this.registrationUser?.phoneNumber != '' && this.registrationUser?.username != '' && this.registrationUser?.birthDate != '';
  }
  private validationText(){
    if (this.registrationUser?.email == '') {  this.validInfo = 'You must enter email'; return; }
   if (this.registrationUser?.password =='') { this.validInfo = 'You must enter password'; return;}
   if (this.passConfirm == '') {this.validInfo = 'You must reenter your password'; return;}
   if (this.registrationUser?.password != this.passConfirm) {this.validInfo = 'Passwords are not the same'; return;}
   if (this.registrationUser?.name == '') {this.validInfo = 'You must enter first name'; return;}
   if (this.registrationUser?.surname == '') {this.validInfo = 'You must enter last name'; return;}
   if (this.registrationUser?.phoneNumber == '') {this.validInfo = 'You must enter phone number'; return;}
   if (this.registrationUser?.username == '') {this.validInfo = 'You must enter username'; return;}
   if (this.registrationUser?.birthDate == '') {this.validInfo = 'You must enter birth date'; return;}
   
  }

}
