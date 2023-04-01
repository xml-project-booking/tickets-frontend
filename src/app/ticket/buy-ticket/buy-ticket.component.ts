import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/model/flight.model';
import { Ticket } from 'src/app/model/ticket/ticket.module';
import { FlightserviceService } from 'src/app/services/flightservice.service';
import { TicketService } from 'src/app/services/ticket.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.css']
})
export class BuyTicketComponent implements OnInit {

  flight: Flight = new Flight();
  ticket: Ticket = new Ticket();
  flightId: string = ""; //TODO 
  userId: string = "6427199d368b345c28ce9ab2"; //TODO
  numberOfSeats: number = 1;
  array:string[] = []
  constructor(private router: Router, private ticketService: TicketService, private flightService: FlightserviceService) {}

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
    this.ticket.flightId = this.flightId;
    this.ticket.numberOfSeats = this.numberOfSeats;
    this.ticket.userId = this.userId;
    this.ticketService.createTicket(this.ticket).subscribe(
      (res) => {
        alert("TICKET PURCHASED!")
        this.router.navigate(['/user/my-tickets']);
      },

      (err) => {
        alert("SOMETHING IS BAD, CHECK DATE AND NUMBER OF AVAILABLE SEATS")
        console.error(err);
      }
    );
  }

}
