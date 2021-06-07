import { TicketService } from './../ticket.service';
import { Ticket } from './../ticket';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tickets: Ticket[] = [];

  constructor(private ticketservice: TicketService) { }

  ngOnInit() {
    this.getTickets();
  }

  getTickets(): void {
    this.ticketservice.getTickets()
    .subscribe(tickets => this.tickets = tickets.slice(1, 5));
  }
}

