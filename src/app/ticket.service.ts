import { MessageService } from './message.service';
import { Ticket } from './ticket';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
// 

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private ticketUrl = 'https://localhost:44361/api/Ticket'; // This will come from visual studio url

  constructor(
    private http : HttpClient,
    private messageservice: MessageService
    ) { }

    // login to the page
    loginName: string = "";

    setLogin(newlogin: string): void {
      this.loginName = newlogin;
    }

    getLogin(): string{
      return this.loginName;
    }

// Log a TicketService message with the MessageService 
  private log(message: string){
    this.messageservice.add(`TicketService: ${message}`);
  }  

  //So much code, my head is  spinning 
  getTickets(): Observable<Ticket[]>{
    return this.http.get<Ticket[]>(this.ticketUrl)
    .pipe(tap(_ => this.log('found a tickets')),
      catchError(this.handleError<Ticket[]>('getTickets', []))
    );
  }

  /** GET hero by id. Return `undefined` when id not found */
  getHeroNo404<Data>(id: number): Observable<Ticket> {
    const url = `${this.ticketUrl}/?id=${id}`;
    return this.http.get<Ticket[]>(url)
      .pipe(
        map(tickets => tickets[0]), // returns a {0|1} element array
        tap(t => {
          const outcome = t ? `fetched` : `did not find`;
          this.log(`${outcome} ticket id=${id}`);
        }),
        catchError(this.handleError<Ticket>(`getTicket id=${id}`))
      );
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  //Getting a ticket by Id
  getTicket(id: number): Observable<Ticket>{
    const url = `${ this.ticketUrl}/${id}`;
    return this.http.get<Ticket>(url)
    .pipe(tap(_ => this.log(`found this ticket id=${id}`)),
    catchError(this.handleError<Ticket>(`getTicket id=${id}`))    
    )
  }

  updateTicket(ticket: Ticket): Observable<any> {
    return this.http.put(this.ticketUrl, ticket, this.httpOptions)
    .pipe(tap(_ => this.log(`updated ticket id=${ticket.id}`)),    
    catchError(this.handleError<Ticket[]>('getTickets', []))  
  );
  }

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json'
      }
    )
  }


  //================================================
  addNewTicket(newTicket: Ticket): any{
    console.log(newTicket);
    const params = new HttpParams();

    return this.http.post(this.ticketUrl + "?ticketName="+newTicket.ticketName + 
    "&status="+newTicket.status + 
    "&issue="+newTicket.issue + 
    "&openedBy="+newTicket.openedBy, params);
  }


  // This delete ticket is not necessary and its not working
  deleteTicket(id: number): Observable<Ticket> {
    const url = `${this.ticketUrl}/${id}`;

    return this.http.delete<Ticket>(url, this.httpOptions)
    .pipe(tap(_ => this.log(`delete hero id=${id}`)),
    catchError(this.handleError<Ticket>('deleteTicket'))
    );
  }

  //This is to get one ticket by name
  searchTickets(searching: string): Observable<Ticket[]>{
    if(!searching.trim()){
      //This will return an empty ticket array.
      return of([]);
    }
    return this.http.get<Ticket[]>(`${this.ticketUrl}/?ticketName=${searching}`)
    .pipe(tap(t => t.length ? 
      this.log(`A matching ticket found "${searching}"`) :
      this.log(`No ticket found "${searching}"`)),
      catchError(this.handleError<Ticket[]>('searchTickets', []))
      );
  }

}
