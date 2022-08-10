import { Component, OnInit } from '@angular/core';
import { TicketService } from './ticket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class  AppComponent implements OnInit {

  constructor(private ticketService: TicketService) { }

  //userName: string = "Default";

  ngOnInit(): void {
  }

  displayName(): string{
    return this.ticketService.loginName;
  }

}