import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
import { Ticket } from './ticket';


@Injectable({
  providedIn: 'root'
})
export class TicketapiService {

  apiUrl:string = 'https://localhost:44361/api/Ticket';

  //constructor(private http: HttpClient, private ticketapiservice: TicketapiService) { }
  constructor(private http: HttpClient) { }

  GetAllTickets(): any{ // method created to get all tickets
    return this.http.get(this.apiUrl);
  }

  // GetTicketById(id:number): any{
  //   let result: Ticket

  //   this.apiUrl.forEach((element: Ticket) => {
  //     if(element.id == id){
  //       result = element;
  //     }      
  //   })
  //   return result;
  // }

  // GetAllTickets():Observable<Ticket[]>{ // method created to get all tickets
  //   return this.http.get<Ticket[]>(this.apiUrl);
  //}
}