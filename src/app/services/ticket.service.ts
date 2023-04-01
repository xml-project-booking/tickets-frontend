import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../model/ticket/ticket.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  selectedFlightId: string ='';

  getSelectedFlight(): string {
    return this.selectedFlightId;
  }

  setSelectedFlight(flightId: string): void {
    this.selectedFlightId = flightId;
  }
  
  createTicket(ticket: Ticket): Observable<Ticket> {
    console.log(JSON.stringify(ticket))
    return this.http.post<Ticket>(this.apiHost + '/user/create-ticket', ticket, { headers: this.headers });
  }

  getAllTicketsByUserId(ticket: Ticket): Observable<Ticket[]>
  {   
    
     return this.http.post<Ticket[]>(this.apiHost + '/user/get-tickets-by-userId', ticket, { headers: this.headers });
 
  }
  
  constructor(private http:HttpClient) { }
  apiHost: string = 'http://localhost:5000';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });


}
