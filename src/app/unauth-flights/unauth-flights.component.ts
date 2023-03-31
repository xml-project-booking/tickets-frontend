import { FlightSearch } from './../model/flightSearch.model';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-unauth-flights',
  templateUrl: './unauth-flights.component.html',
  styleUrls: ['./unauth-flights.component.css']
})
export class UnauthFlightsComponent implements OnInit {

  public search: FlightSearch = new FlightSearch();
  public clickedS : boolean = false;
  public loggedUser : boolean = false;
  //public dataSource = new MatTableDataSource<Flight>();
  public displayedColumns = ['From', 'To', 'Date', 'Seats left', 'Price per person', 'Total price'];
  //public flights: Flight[] = [];
  constructor() { }

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
    //     f.date = f.date.replace('T', ' ')
    //     f.total = f.price * search.passengers
    //   })
    //   this.dataSource.data = this.flights;
    // })
  }

}
