import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  getSelectedFlight(): string {
    return "64271a09368b345c28ce9ab4";
  }

  constructor() { }
}
