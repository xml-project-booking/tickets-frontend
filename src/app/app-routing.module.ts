import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './login/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UnauthFlightsComponent } from './unauth-flights/unauth-flights.component';
import { UserComponent } from './user/user.component';
import { CreateFlightComponent } from './admin/create-flight/create-flight.component';
import { AllFlightsComponent } from './admin/all-flights/all-flights.component';
import { BuyTicketComponent } from './ticket/buy-ticket/buy-ticket.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'flights', component: UnauthFlightsComponent},
  { path: 'user', component: UserComponent,
    children: [
      { path: 'flightSearch', component:UnauthFlightsComponent},
      { path: 'buy-ticket', component:BuyTicketComponent}
    ],
    data: {
    allowedRoles: ['USER']
    },
    canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent,
    children: [
    { path: 'create-flight', component:CreateFlightComponent},
    {path: 'all-flights',component:AllFlightsComponent}
 ],
    data: {
    allowedRoles: ['ADMIN']
    },
    canActivate: [AuthGuard] 
  },
  { path: 'registration', component:RegistrationComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
