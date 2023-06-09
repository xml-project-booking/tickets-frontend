import { FlightserviceService } from 'src/app/services/flightservice.service';
import { SearchCriteria } from '../model/SearchCriteria.model';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Flight } from '../model/flight.model';
import { TicketService } from '../services/ticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unauth-flights',
  templateUrl: './unauth-flights.component.html',
  styleUrls: ['./unauth-flights.component.css']
})

export class UnauthFlightsComponent implements OnInit {

  public search: SearchCriteria = new SearchCriteria();
  public clickedS: boolean = false;
  public clickedM: boolean = false;
  public loggedUser: boolean = false;
  public dataSource = new MatTableDataSource<Flight>();
  public displayedColumns = ['From', 'To', 'Date',  'Price per person', 'Total price','Buy ticket'];
  public flights: Flight[] = [];
  constructor(private router: Router, private flightService: FlightserviceService, private ticketService:TicketService) { }

  ngOnInit(): void {
    if (localStorage.getItem('role') == 'USER') {
      this.loggedUser = true;
    }
  }

  Search() {
    //this.clickedS = true;
    this.flightService.searchFlights(this.search).subscribe(res => {
      this.flights = res;
      if(this.flights){
        this.clickedS=true
      this.flights.forEach((f) => {
        f.date = new Date(new Date(f.date).getTime()! - 2 * 60 * 60 * 1000)
        f.totalPrice = f.price * this.search.number
      })}
      else{
        this.clickedM=true
      }
      this.dataSource.data = this.flights;
    
    })
  }

  BuyTicket(flightId:string)
  {
    this.ticketService.setSelectedFlight(flightId);
    console.log(flightId)
    this.router.navigate(['/user/buy-ticket']);
  }

}
