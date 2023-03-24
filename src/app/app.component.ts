import { Component } from '@angular/core';
import { ServiceService } from './service.service';
 export interface Patient {
  Name:string,
  
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tickets-frontend';
   public  name:string="";
   public patient = {} as Patient

  constructor(private service: ServiceService){}

  proba(){
    console.log(this.patient);
    this.service.checkIfWorks(this.patient).subscribe();
  }


}
