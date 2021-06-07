import { TicketService } from './../ticket.service';
import { Ticket } from './../ticket';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';


// The TicketdetailComponent needs a new way to obtain the hero-to-display. This section take care of that.

@Component({
  selector: 'app-ticketdetails',
  templateUrl: './ticketdetails.component.html',
  styleUrls: ['./ticketdetails.component.css']
})
export class TicketdetailsComponent implements OnInit {
  // @Input() ticket?: Ticket;
  ticket: Ticket | undefined;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private ticketservice: TicketService
  ) { }

  ngOnInit(): void {
    this.getTicket();
  }

  getTicket(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.ticketservice.getTicket(id)
      .subscribe(ticket => this.ticket = ticket);
  }

  // back button method not working - moving on
  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.ticket) {
      this.ticketservice.updateTicket(this.ticket)
        .subscribe(() => this.goBack());
    }
  }

  delete(ticket: Ticket): void{
    // this.tickets = this.tickets.filter(t => t !== ticket);
    this.ticketservice.deleteTicket(ticket.id).subscribe();
    this.router.navigate(["/tickets"]);
  }

}
