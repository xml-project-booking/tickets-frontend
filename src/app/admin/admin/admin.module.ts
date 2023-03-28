import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { AdminComponent } from '../admin.component';
import { AuthGuard } from 'src/app/login/auth.guard';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    data: {
      allowedRoles: ['ADMIN']
    },
    canActivate:[AuthGuard],
    children: [
      //  { path: 'home', component:HomePageClientComponent},
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
