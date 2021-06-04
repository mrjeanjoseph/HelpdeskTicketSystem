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

  tickets:Ticket[] = []; //Initalize a empty api array to fill
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



  // ngOnInit(): void {
  //   //this.GetAListOfTickets();
  //   this.tickets = this.ticketapiService.GetAllTickets();
  // }


  ngOnInit(): void {
    //this.GetAListOfTickets();
    this.GetAllTickets();
  }

  // SearchTicketByName(type:string):void{
  //   console.log(type);
  //   this.searchTickets = type;
  // }

  GetAllTickets():void{
    this.ticketapiService.GetAllTickets().subscribe(
      (response: any) =>{
        this.tickets = response.tickets;
        console.log(response);
      }
    )
  }

  // GetAListOfTickets(): void{
  //   this.ticketapiService.GetAllTickets().subscribe(
  //     (response: any) =>{
  //       this.ticketName = response.ticketName;
  //       this.issue = response.issue;
  //       //this.status = status;
  //       console.log(response);
  //     }
  //   );
  // }
}
