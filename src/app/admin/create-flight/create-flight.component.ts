import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Flight } from 'src/app/model/flight.model';
import { FlightserviceService } from 'src/app/services/flightservice.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-create-flight',
  templateUrl: './create-flight.component.html',
  styleUrls: ['./create-flight.component.css']
})
export class CreateFlightComponent implements OnInit {

  constructor(private flightService:FlightserviceService,public toastr:ToastrService) { }
  public flight: Flight = new Flight();
  array:string[] = []
  ngOnInit(): void {
  }

  public createFlight(){
    this.array = this.flight.departureTime.split(":")
    this.flight.date.setHours(parseInt(this.array[0]))
    this.flight.date.setMinutes(parseInt(this.array[1]))
    this.flightService.createAirlineFlight(this.flight).subscribe()
    this.toastr.success('New flight successfully created!')


  }
}
