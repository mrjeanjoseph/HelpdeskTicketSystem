import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelpDesk CRM';
  loginAccess = "Login"
  dashboard = "Dashboard";
  ticketSearch = "Ticket Search";
  bookmark = "Bookmark";
  profile = "Profile"
}
