import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user-two',
  templateUrl: './create-user-two.component.html',
  styleUrls: ['./create-user-two.component.scss'],
})
export class CreateUserTwoComponent implements OnInit {
  formUser: FormGroup = this.fb.group({
    name: ['', Validators.required],
    checkAdult: [true],
    department: [''],
    comment: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  ngSubmitForm() {
    console.log(this.formUser.value);
  }
}
