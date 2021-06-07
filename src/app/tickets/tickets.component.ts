import { TicketService } from './../ticket.service';

import { Ticket } from './../ticket';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  tickets: Ticket[] = []; // this replace the definition of the tickets property with a declaration
  //selectedTicket?: Ticket;

  // tickets = TICKETS;
  
  // This is an initial object
  // ticket: Ticket = {
  //   id: 1,
  //   ticketName: 'Broken iPhone',
  //   status: false,
  //   issue: 'Everyone is broken',
  //   openedBy: 'jean18'
  // }

  // constructor(private ticketservice: TicketService, private messageservice: MessageService) { }
  constructor(private ticketservice: TicketService) { }
// The parameter simultaneously defines a private ticketService property and identifies it as a TicketService injection site.

  ngOnInit(): void {
    this.getTickets();
  }

  // We will come back to this method later
  getTickets(): void {
    this.ticketservice.getTickets()
    .subscribe(tickets => this.tickets = tickets);
    // This retrieves the tickets from the service of course.
  }

  // Using this one for now.
  // onSelect(ticket: Ticket) : void{
  //   this.selectedTicket = ticket;
  //   this.messageservice.add(`TicketsComponent: Selected ticket id=${ticket.id}`);
  // }

  // add(newTicket: string): void {
  //   newTicket = newTicket.trim();
  //   if(!newTicket) { return; }
  //   this.ticketservice.addNewTicket({ newTicket } as unknown as Ticket)
  //   .subscribe(ticket => {
  //     this.tickets.push(ticket);
  //   });
  // }

  //========================================
  //Attemp a method
  add(form: NgForm): void{
    let newticket: Ticket = {
      id: 0,
      ticketName: form.form.value.ticketName,
      openedBy: form.form.value.openedBy,
      status: false,
      issue: form.form.value.issue
    }
    this.ticketservice.addNewTicket(newticket).subscribe(
      (response: any) => {
        console.log(response);
      }
    )
  }

  

  delete(ticket: Ticket): void{
    this.tickets = this.tickets.filter(t => t !== ticket);
    this.ticketservice.deleteTicket(ticket.id).subscribe();
  }
}
