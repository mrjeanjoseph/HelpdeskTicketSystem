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
  ticketDetail: Ticket | undefined;

// @Input() aSingleTicket: Ticket = {
//     id: -1,
//     status: false,
//     ticketName: "",
//     issue: "",
//     openedBy: ""
//   }

  constructor(private ticketApiService: TicketapiService, private route:ActivatedRoute) { }

  // ngOnInit(): void {
  //   const routeParams = this.route.snapshot.paramMap;
  //   let id: number = Number(routeParams.get("id"));
  //   this.aSingleTicket = this.ticketApiService.FindByTicketName(id);
  // }

  //trying something new
  ngOnInit(): void {
    this.getTicket();
  }

  getTicket(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.ticketApiService.getTicket(id)
    .subscribe((ticket) => ticket = ticket);
  }
}