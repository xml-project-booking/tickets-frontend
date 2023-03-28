import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Login } from '../model/login.model';
import { catchError, EMPTY } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }
  public login: Login = new Login();
  public showPassword: boolean = false;
  ngOnInit(): void {
  }
  SignIn() {
    this.authService.signIn(this.login).pipe(catchError(res => {
      alert("Wrong username or password!")
      return EMPTY
    })).subscribe(res => {
      let role = res.role
      localStorage.setItem('Token', res.token);
      localStorage.setItem('role', role);

      if (role == 'USER') this.router.navigate(['/user/']);
      else if (role == 'ADMIN') this.router.navigate(['/admin/']);
      else {
           localStorage.removeItem('Token');
           this.router.navigate(['/']);
         }
      });
   
    }
    public togglePasswordVisibility(): void {
      this.showPassword = !this.showPassword;
    }

}
