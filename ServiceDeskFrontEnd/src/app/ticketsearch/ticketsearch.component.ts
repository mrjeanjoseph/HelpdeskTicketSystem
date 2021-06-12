import { TicketService } from './../ticket.service';
import { Observable, Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { debounce, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-ticketsearch',
  templateUrl: './ticketsearch.component.html',
  styleUrls: ['./ticketsearch.component.css']
})
export class TicketsearchComponent implements OnInit {

  tickets$!: Observable<Ticket[]>;
  private searches = new Subject<string>();

  constructor(private ticketservice: TicketService) { }

    // Push a search term into the observable stream.
  search(search: string): void {
    this.searches.next(search);
  }

  ngOnInit(): void {
    this.tickets$ = this.searches
    .pipe(debounceTime(300), //wait 300ms after each keystroke before considering the term
    distinctUntilChanged(), // ignore new term if same as previous term
    // switch to new search observable each time the term changes
    switchMap((search: string) =>
    this.ticketservice.searchTickets(search)),
    );
  }


}
