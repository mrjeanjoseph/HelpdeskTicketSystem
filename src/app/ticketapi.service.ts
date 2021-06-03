import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TicketapiService {

  apiUrl:string = "";

  constructor(private http: HttpClient) { }

  getTickets():any{ // method created to get all tickets
    return this.http.get(this.apiUrl);
  }
}
