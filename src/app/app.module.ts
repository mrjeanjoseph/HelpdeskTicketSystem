import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // added the httpClient module
import { AppRoutingModule } from './app-routing.module';

// There are my generated components
import { AppComponent } from './app.component';
import { TicketdetailsComponent } from './ticketdetails/ticketdetails.component';
import { TicketsComponent } from './tickets/tickets.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { SearchformComponent } from './searchform/searchform.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketdetailsComponent,
    TicketsComponent,
    BookmarksComponent,
    HeaderComponent,
    SearchformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    
    HttpClientModule //  added the httpClient module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }