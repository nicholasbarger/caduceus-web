import { Component, OnInit } from '@angular/core';
import { RegistrationForm } from './registration-form';

@Component({
  selector: 'registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  model: RegistrationForm = new RegistrationForm();

  constructor() { }

  ngOnInit() {
  }

}
