import { FlightserviceService } from 'src/app/services/flightservice.service';
import { FlightSearch } from './../model/flightSearch.model';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Flight } from '../model/flight.model';

@Component({
  selector: 'app-unauth-flights',
  templateUrl: './unauth-flights.component.html',
  styleUrls: ['./unauth-flights.component.css']
})
export class UnauthFlightsComponent implements OnInit {

  public search: FlightSearch = new FlightSearch();
  public clickedS : boolean = false;
  public loggedUser : boolean = false;
  public dataSource = new MatTableDataSource<Flight>();
  public displayedColumns = ['From', 'To', 'Date', 'Seats left', 'Price per person', 'Total price'];
  public flights: Flight[] = [];
  constructor(private flightSevice: FlightserviceService) { }

  ngOnInit(): void {
    if(localStorage.getItem('role')=='USER'){
      this.loggedUser = true;
    }
  }

  Search() {
    this.clickedS = true;
    // this.flightService.searchFlights(search).subscribe(res => {
    //   this.flights = res;
    //   this.flights.forEach((f) => { 
    //     f.Date = f.Date.replace('T', ' ')
    //     f.total = f.price * this.search.passengers
    //   })
    //   this.dataSource.data = this.flights;
    // })
  }

}
