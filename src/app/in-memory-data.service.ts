// import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Ticket } from './ticket';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {
  //For whatever reason, it is taking the InMemoryDataService.
  
  createDB() {
    const tickets = [
      {
          id: 1,
          ticketName: 'Broken iPhone',
          status: false,
          issue: 'Fell down the stair',
          openedBy: 'jean18'
        },
        {
          id: 2,
          ticketName: 'Smashed TV',
          status: false,
          issue: 'Was hit with a bat',
          openedBy: 'jean18'
        },
        {
          id: 3,
          ticketName: 'Ran over iPad',
          status: false,
          issue: 'fell on the highway',
          openedBy: 'jean18'
        },
        {
          id: 4,
          ticketName: 'Water damage Drone',
          status: false,
          issue: 'fell in the ocean',
          openedBy: 'jean18'
        },
        {
          id: 5,
          ticketName: 'Flat Tire',
          status: false,
          issue: 'my wife got mad at me',
          openedBy: 'jean18'
        }
  ];
  return {tickets};
  }

  genId(tickets: Ticket[]): number{
    return tickets.length > 0 ? Math.max(...tickets.map(ticket => ticket.id)) + 1 : 11;
  }
}
