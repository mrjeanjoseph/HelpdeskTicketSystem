import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from './ticket';

const baseUrl = 'https://localhost:44361/api/Ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketapiService {
  tickets: Ticket[] = [];

  //apiUrl:string = 'https://localhost:44361/api/Ticket';

  //constructor(private http: HttpClient, private ticketapiservice: TicketapiService) { }
  constructor(private http: HttpClient) { }

  GetAllTickets(): any{ // method created to get all tickets
    return this.http.get(baseUrl);
  }

  FindByTicketName(ticketName: any): Ticket{
    let result: Ticket = {
      id: -1,
      status: false,
      ticketName: "",
      issue: "",
      openedBy: ""
    }
    this.tickets.forEach((t:Ticket) =>{
      if(t.ticketName == ticketName){
        result = t;
      }
    })
    return result;
  }

  GetAll(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(baseUrl);
  }

  CreateTicket(newTicket: Ticket): any{
    console.log(newTicket);
    const params = new HttpParams();

    return this.http.post(baseUrl + "?ticketName="+newTicket.ticketName + 
    "&status="+newTicket.status + 
    "&issue="+newTicket.issue + 
    "&openedBy="+newTicket.openedBy, params);
  }
}