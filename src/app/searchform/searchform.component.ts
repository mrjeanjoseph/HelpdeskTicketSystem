import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {
  @Output() submitSearch = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  SubmitSearch(form:NgForm): void{
    let searchATicket:string = form.form.value.Type;
    this.submitSearch.emit(searchATicket);
  }

}
