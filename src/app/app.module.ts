import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // added the httpClient module

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketdetailsComponent } from './ticketdetails/ticketdetails.component';
import { TicketsComponent } from './tickets/tickets.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketdetailsComponent,
    TicketsComponent,
    BookmarksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule //  added the httpClient module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
