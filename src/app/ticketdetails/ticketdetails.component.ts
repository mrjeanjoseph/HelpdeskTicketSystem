import { Ticket } from './../ticket';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticketdetails',
  templateUrl: './ticketdetails.component.html',
  styleUrls: ['./ticketdetails.component.css']
})
export class TicketdetailsComponent implements OnInit {

  @Input() ticketLists: Ticket = {
    id: 0,
    status: 0,
    ticketName: "",
    issue: "",
    openedBy: "",

  }
  constructor() { }

  ngOnInit(): void {
  }

}
