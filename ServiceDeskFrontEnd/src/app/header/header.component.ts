import { TicketService } from './../ticket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  title = 'HelpDesk CRM';
  loginAccess = "Login"
  dashboard = "Dashboard";
  ticketSearch = "Ticket Search";
  bookmark = "Bookmark";
  profile = "Profile"
}
