import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FlightTicket } from 'src/app/model/flight-ticket/flight-ticket.model';
import { Ticket } from 'src/app/model/ticket/ticket.module';
import { FlightserviceService } from 'src/app/services/flightservice.service';
import { TicketService } from 'src/app/services/ticket.service';
import { MatSort   } from '@angular/material/sort';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-user-tickets',
  templateUrl: './all-user-tickets.component.html',
  styleUrls: ['./all-user-tickets.component.css']
})
export class AllUserTicketsComponent implements OnInit {

  @ViewChild(MatSort) sort!: MatSort;

  ticket:Ticket = new Ticket
  userId:string =""
  displayedColumns: string[] = ['from', 'to', 'date', 'departureTime', 'numberOfSeats'];
  dataSource = new MatTableDataSource<FlightTicket>([]);
  
  constructor(private router: Router,private ticketService: TicketService, private flightService: FlightserviceService) { }

  ngOnInit(): void {

    const storedUsername = localStorage.getItem('username');
    if (storedUsername !== null) {
      this.ticket.userId = storedUsername;
    } else {
      // handle the case where the value is null
      alert("Please login again!")
      this.router.navigate(['/login']);
      console.log('Username not found in local storage');
    }


    this.ticketService.getAllTicketsByUserId(this.ticket).subscribe(
      (res) => {
        if(res!=null)
        {
          res.forEach(t => {
            this.flightService.getAirlineFlightById(t.flightId).subscribe(
            (res2)=>
            {
              const  ft: FlightTicket = new FlightTicket;
              ft.date = res2.date;
              ft.from = res2.from;
              ft.numberOfSeats =t.numberOfSeats;
              ft.to = res2.to;
              this.dataSource.data.push(ft);
              this.dataSource = new MatTableDataSource(this.dataSource.data); 
              this.dataSource.sort = this.sort;
            })          
          });
        }
      },

      (err) => 
      {
        console.error(err);
      }
    );
    

  }


  ngAfterViewInit() {
  }
}
