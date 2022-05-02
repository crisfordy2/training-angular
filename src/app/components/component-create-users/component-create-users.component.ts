import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface ContactForm {
  name: string;
  checkAdult: boolean;
  department: string;
  comment: string;
}

@Component({
  selector: 'app-component-create-users',
  templateUrl: './component-create-users.component.html',
  styleUrls: ['./component-create-users.component.scss'],
})
export class ComponentCreateUsersComponent implements OnInit {
  model: ContactForm = {
    name: '',
    checkAdult: true,
    department: '',
    comment: '',
  };

  constructor() {}

  ngOnInit(): void {}

  ngSubmitForm(formUser: NgForm) {
    console.log(formUser.value);
  }
}
