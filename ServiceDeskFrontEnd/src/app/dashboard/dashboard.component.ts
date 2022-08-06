import { TicketService } from './../ticket.service';
import { Ticket, Bookmark } from './../ticket';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tickets: Ticket[] = [];
  bookmarks: Bookmark[] = [];
  bookmarkTickets: Ticket[] = [];

  constructor(private ticketservice: TicketService) { }

  ngOnInit() {
    //This will run all other methods
    this.getTickets();
  }

  getTickets(): void {
    this.ticketservice.getTickets()
    .subscribe((tickets: Ticket[]) => {
      this.tickets = tickets;
      this.getBookmarkByUser();      
      //calling this method to make sure it get pushed
    });
    //.slice(1, 5)
  }

  getBookmarkByUser(): void{
    this.ticketservice.getBookmarkByUser()
    .subscribe((response: Bookmark[]) => {
      this.bookmarks = response;
      this.getBookmarkTickets();
      //calling this method to make sure it get pushed
    });
  }

  getBookmarkTickets(): void{
    this.bookmarks.forEach(
      (b: Bookmark) => {
        this.bookmarkTickets.push(this.tickets.find((t:Ticket) =>  t.id == b.ticketId)!);
      }
    )
  }
}