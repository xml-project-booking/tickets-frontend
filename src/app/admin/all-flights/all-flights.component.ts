import { Component, OnInit } from '@angular/core';
import { FlightserviceService } from 'src/app/services/flightservice.service';
@Component({
  selector: 'app-all-flights',
  templateUrl: './all-flights.component.html',
  styleUrls: ['./all-flights.component.css']
})
export class AllFlightsComponent implements OnInit {
  DeleteFlight(flightID: any) {
    this.flightService.deleteAirlineFlight(flightID).subscribe(res => {
      this.flightService.getAllAirlineFlights().subscribe(rem => {
        this.dataSource = rem
      })  
    })
  }

  constructor(private flightService: FlightserviceService) { }
  dataSource: any
  ngOnInit(): void {
    this.flightService.getAllAirlineFlights().subscribe(res => {
      this.dataSource = res
    }

    )
  }

  displayedColumns: string[] = ['from', 'to', 'date', 'time', 'price', 'delete'];

}
