import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from './ticket';

const baseUrl = 'https://localhost:44361/api/Ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketapiService {
  
  //apiUrl:string = 'https://localhost:44361/api/Ticket';

  //constructor(private http: HttpClient, private ticketapiservice: TicketapiService) { }
  constructor(private http: HttpClient) { }

  GetAllTickets(): any{ // method created to get all tickets
    return this.http.get(baseUrl);
  }

  // FindByTicketName(ticketName: any): Ticket{
  //   return this.http.get(`${apiUrl}name=${ticketName}`);
  // }

  GetAll(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(baseUrl);
  }

  FindByTicketName(name: any): Observable<Ticket[]>{
    return this.http.get<Ticket[]>(`${baseUrl}name${name}`)
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