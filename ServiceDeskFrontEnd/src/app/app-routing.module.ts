import { LoginpageComponent } from './loginpage/loginpage.component';
import { TicketdetailsComponent } from './ticketdetails/ticketdetails.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketsComponent } from './tickets/tickets.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/loginpage', pathMatch: 'full' },
  { path: 'loginpage', component: LoginpageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: TicketdetailsComponent },
  { path: 'tickets', component: TicketsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
