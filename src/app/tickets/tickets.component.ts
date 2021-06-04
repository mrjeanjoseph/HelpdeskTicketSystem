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
  
  //Initalize a empty api array to fill
  // ticketName: string = ""; // It looks like I don't have to initialize anything here
  // issue: string = "";  
  //status: number = 0; This is giving me an error.

  searchTickets = "";
  GetTicketResult(): Ticket[]{
    if(this.searchTickets == ""){
      return this.tickets;
    }
    else{
      // return this.ticketapiService.GetAllTickets(this.searchTickets);
      return this.tickets; // Added this temporarly
    }
  }




  ngOnInit(): void {
    //this.GetAListOfTickets();
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

  SearchTicketByName(): void{
    this.currentTicket = [];
    this.currentIndex = -1;

    this.ticketapiService.FindByTicketName(this.ticketName).subscribe(
      ticketData => {
        this.tickets = ticketData;
        console.log(ticketData);
      },
      error => {
        console.log(error);
      }
    );
  }
}
