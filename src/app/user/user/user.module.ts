import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { UserComponent } from '../user.component';
import { AuthGuard } from 'src/app/login/auth.guard';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    data: {
      allowedRoles: ['USER']
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
export class UserModule { }
