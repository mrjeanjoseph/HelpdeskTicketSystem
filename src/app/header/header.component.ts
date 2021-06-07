import { TicketService } from './../ticket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private ticketService: TicketService) { }

  //userName: string = "Default";

  ngOnInit(): void {
  }

  displayName(): string{
    return this.ticketService.loginName;
  }

}
