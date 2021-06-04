import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // added the httpClient module

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

// There are my generated components
import { AppComponent } from './app.component';
import { TicketdetailsComponent } from './ticketdetails/ticketdetails.component';
import { TicketsComponent } from './tickets/tickets.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { SearchformComponent } from './searchform/searchform.component';

//added these as custom routes
const appRoutes: Routes = [ 
  { path: 'tickets', component: TicketsComponent},
  { path: 'tickets/id', component: TicketdetailsComponent},
  { path: '', redirectTo: '/tickets', pathMatch: 'full'},
  { path: '**', redirectTo: '/tickets', pathMatch: 'full'}
]



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
    RouterModule.forRoot(
      appRoutes
    ),
    FormsModule,    
    HttpClientModule //  added the httpClient module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



//* ADDED ALL OF THIS STUFF AND I AM ABLE TO READ OTHER COMPNENTS */
// const appRoutes: Routes = [ 
//   { path: 'tickets', component: TicketsComponent},
//   { path: 'tickets/id', component: TicketdetailsComponent},
//   { path: '', redirectTo: '/tickets', pathMatch: 'full'},
//   { path: '**', redirectTo: '/tickets', pathMatch: 'full'}
// ]
// RouterModule.forRoot(
//   appRoutes
// ),
// FormsModule,    