import { FlightserviceService } from 'src/app/services/flightservice.service';
import { SearchCriteria } from '../model/SearchCriteria.model';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Flight } from '../model/flight.model';

@Component({
  selector: 'app-unauth-flights',
  templateUrl: './unauth-flights.component.html',
  styleUrls: ['./unauth-flights.component.css']
})

export class UnauthFlightsComponent implements OnInit {

  public search: SearchCriteria = new SearchCriteria();
  public clickedS: boolean = false;
  public loggedUser: boolean = false;
  public dataSource = new MatTableDataSource<Flight>();
  public displayedColumns = ['From', 'To', 'Date',  'Price per person', 'Total price'];
  public flights: Flight[] = [];
  constructor(private flightService: FlightserviceService) { }

  ngOnInit(): void {
    if (localStorage.getItem('role') == 'USER') {
      this.loggedUser = true;
    }
  }

  Search() {
    this.clickedS = true;
    console.log(this.search)
    this.flightService.searchFlights(this.search).subscribe(res => {
      this.flights = res;
      this.flights.forEach((f) => {
        f.date = new Date(new Date(f.date).getTime()! - 2 * 60 * 60 * 1000)
        
        f.totalPrice = f.price * this.search.ticketnumber
      })
      this.dataSource.data = this.flights;
    })
  }

}
