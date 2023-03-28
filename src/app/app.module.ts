import { MaterialModule } from './material/material.module';
import { UserModule } from './user/user/user.module';
import { AdminModule } from './admin/admin/admin.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UnauthFlightsComponent } from './unauth-flights/unauth-flights.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthInterception } from './login/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UnauthFlightsComponent,
    UserComponent,
    AdminComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AdminModule,
    UserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterception,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
