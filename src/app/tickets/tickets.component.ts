import { NgForm } from '@angular/forms';
import { TicketapiService } from './../ticketapi.service';
import { Ticket } from './../ticket';
import { Component, OnInit } from '@angular/core';

//This is the parent component
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  constructor(private ticketapiService: TicketapiService) { }

  tickets:Ticket[] = [];
  currentTicket: Ticket [] = [];
  currentIndex = -1;
  ticketName = '';
  searchTickets = "";

  GetTicketResult(): Ticket[]{
    if(this.searchTickets == ""){
      return this.tickets;
    }
    else{
      return this.tickets; // Added this temporarly
    }
  }

  ngOnInit(): void {
    this.GetAllTickets();
  }

  GetAllTickets():void{
    this.ticketapiService.GetAllTickets().subscribe(
      (response: any) =>{
        this.tickets = response;
        console.log(response);
      }
    )
  }

  CreateATicket(form: NgForm): void{
    let newticket: Ticket = {
      id: 0,
      ticketName: form.form.value.ticketName,
      openedBy: form.form.value.openedBy,
      status: false,
      issue: form.form.value.issue
    }
    this.ticketapiService.CreateTicket(newticket).subscribe(
      (response: any) => {
        console.log(response);
      }
    )
  }

  getOneTicket:string ="";
  SearchTicketByName(): any{
    let result: Ticket[] = [];
    this.tickets.forEach((t:Ticket) =>{
      if(t.ticketName.includes(this.getOneTicket)){
        result.push(t);
      }
    });
    return result;
  }

  // SearchTicketByName(ticketName: string): void{
  //   this.currentTicket = [];
  //   this.currentIndex = -1;

  //   this.ticketapiService.FindByTicketName(this.ticketName).subscribe(
  //     ticketData => {
  //       this.tickets = ticketData;
  //       console.log(ticketData);
  //     },
  //   );
  // }
}
