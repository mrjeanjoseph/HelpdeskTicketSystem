import { NgForm } from '@angular/forms';
import { TicketService } from './../ticket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(private ticketService: TicketService) {

   }

  myLogin: string = "";

  getLogin(): void{
    this.myLogin = this.ticketService.getLogin();
  }

  setLogin(form: NgForm): void{
    this.ticketService.setLogin(form.form.value.user);
    this.getLogin();
  }

  ngOnInit(): void {
  }

}
