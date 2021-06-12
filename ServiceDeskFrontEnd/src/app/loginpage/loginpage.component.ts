import { NgForm } from '@angular/forms';
import { TicketService } from './../ticket.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(private ticketService: TicketService, public router: Router) {

   }

   //in your constructor
  // constructor(public router: Router){}
  //navigation link.
  //  this.router.navigate(['your-route']);

  myLogin: string = "";

  getLogin(): void{
    this.myLogin = this.ticketService.getLogin();
  }

  setLogin(form: NgForm): void{
    this.ticketService.setLogin(form.form.value.user);
    this.getLogin();
    this.router.navigate(['tickets']);
  }

  ngOnInit(): void {
  }

}
