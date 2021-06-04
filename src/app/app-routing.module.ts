import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketdetailsComponent } from './ticketdetails/ticketdetails.component';
import { TicketsComponent } from './tickets/tickets.component';

//added these as custom routes
const routes: Routes = [ 
  { path: 'tickets', component: TicketsComponent},
  { path: 'tickets/id', component: TicketdetailsComponent},
  { path: '', redirectTo: '/tickets', pathMatch: 'full'},
  { path: '**', redirectTo: '/tickets', pathMatch: 'full'} // Look back to here for error - reference dummy proj
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
