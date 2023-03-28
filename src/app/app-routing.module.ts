import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './login/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UnauthFlightsComponent } from './unauth-flights/unauth-flights.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'flights', component: UnauthFlightsComponent},
  { path: 'user', component: UserComponent,
    data: {
    allowedRoles: ['USER']
    },
    canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent,
    data: {
    allowedRoles: ['ADMIN']
    },
    canActivate: [AuthGuard] },
  { path: 'registration', component:RegistrationComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
