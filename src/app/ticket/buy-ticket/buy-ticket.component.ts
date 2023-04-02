import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/model/flight.model';
import { Ticket } from 'src/app/model/ticket/ticket.module';
import { FlightserviceService } from 'src/app/services/flightservice.service';
import { TicketService } from 'src/app/services/ticket.service';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';
@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.css']
})
export class BuyTicketComponent implements OnInit {

  flight: Flight = new Flight();
  ticket: Ticket = new Ticket();
  flightId: string = ""; //TODO 
  username: string = ""; //TODO
  numberOfSeats: number = 1;
  array:string[] = []
  constructor(private router: Router, private ticketService: TicketService, private flightService: FlightserviceService, private registrationService: RegistrationService) {}

  ngOnInit() {
    // Get the selected flight from the service
    this.flightId = this.ticketService.getSelectedFlight();
    
    this.flightService.getAirlineFlightById(this.flightId).subscribe((res) =>{
      this.flight = res
    },
    (err)=>{console.log(err)});
  }

  buyTicket()
  {
    this.ticket.flightId = this.flightId;
    this.ticket.numberOfSeats = this.numberOfSeats;

    const storedUsername = localStorage.getItem('username');
    if (storedUsername !== null) {
      this.ticket.userId = storedUsername;
    } else {
      // handle the case where the value is null
      alert("Please login again!")
      this.router.navigate(['/login']);
      console.log('Username not found in local storage');
    }

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
