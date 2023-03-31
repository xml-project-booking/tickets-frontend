import { FlightSearch } from './../model/flightSearch.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../model/flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightserviceService {

  constructor(private http:HttpClient) { }
  apiHost: string = 'http://localhost:5000';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });




  createAirlineFlight(flight: Flight): Observable<Flight> {
    return this.http.post<Flight>(this.apiHost + '/admin/create-flight', flight, { headers: this.headers });
  }

  deleteAirlineFlight(flightID:number):Observable<Flight>{
    return this.http.post<Flight>(this.apiHost+'/admin/delete-flight/'+flightID,flightID,{ headers: this.headers })
  }

  getAllAirlineFlights():Observable<Flight[]>{
    return this.http.get<Flight[]>(this.apiHost+'/admin/get-all-flights',{headers:this.headers})
  }

  searchFlights(search:FlightSearch):Observable<Flight[]>{
    return this.http.get<Flight[]>(this.apiHost+'/search'+ '?From=' + search.from + '&To=' + search.to + '&Date=' + search.date + '&Passengers=' + search.passengers ,{headers:this.headers})
  }
}
