import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/model/flight.model';
import { FlightserviceService } from 'src/app/services/flightservice.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.css']
})
export class BuyTicketComponent implements OnInit {

  flight: Flight =new Flight();
  flightId: string = "64271a09368b345c28ce9ab4";
  numberOfSeats: number = 1;
  array:string[] = []

  constructor(private ticketService: TicketService, private flightService: FlightserviceService) {}

  ngOnInit() {
    // Get the selected flight from the service
    this.flightId = this.ticketService.getSelectedFlight();
    
    this.flightService.getAirlineFlightById(this.flightId).subscribe((res) =>{
      
      console.log(res)
      this.flight = res
    });
  }

  buyTicket()
  {
    console.log(this.numberOfSeats)
  }

}
