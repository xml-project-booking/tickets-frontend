import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { AdminComponent } from '../admin.component';
import { AuthGuard } from 'src/app/login/auth.guard';
import { CreateFlightComponent } from '../create-flight/create-flight.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { AllFlightsComponent } from '../all-flights/all-flights.component';
const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    data: {
      allowedRoles: ['ADMIN']
    },
    canActivate:[AuthGuard],
    children: [
       { path: 'create-flight', component:CreateFlightComponent},
       {path: 'all-flights',component:AllFlightsComponent}
       
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatCardModule,
   
  ]
})
export class AdminModule { }
