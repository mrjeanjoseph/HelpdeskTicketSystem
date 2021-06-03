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

  tickets:Ticket[] = []; //Initalize a empty api array to fill
  ticketName: string = "";
  issue: string = "";
  
  //status: number = 0; This is giving me an error.


  constructor(private ticketapiService: TicketapiService) { }

  ngOnInit(): void {
    this.GetAListOfTickets();
  }

  GetAListOfTickets(): void{
    this.ticketapiService.getTickets().subscribe(
      (response: any) =>{
        this.ticketName = response.TicketName;
        this.issue = response.Issue;
        //this.status = status;
      }
    );
  }
}
