import { TicketapiService } from './../ticketapi.service';
import { Ticket } from './../ticket';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticketdetails',
  templateUrl: './ticketdetails.component.html',
  styleUrls: ['./ticketdetails.component.css']
})
export class TicketdetailsComponent implements OnInit {

aSingleTicket: Ticket = {
    id: -1,
    status: false,
    ticketName: "",
    issue: "",
    openedBy: ""
  }

  constructor(private ticketApiService: TicketapiService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    let id: number = Number(routeParams.get("id"));
    this.aSingleTicket = this.ticketApiService.FindByTicketName(id);
  }
}