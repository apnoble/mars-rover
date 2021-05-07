import { Component, OnInit } from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-rover-form',
  templateUrl: './rover-form.component.html',
  styleUrls: ['./rover-form.component.css']
})
export class RoverFormComponent implements OnInit {

  plateau = new FormControl('', [Validators.required, Validators.email]);
  rover = new FormControl('', [Validators.required, Validators.email]);
  instructions = new FormControl('', [Validators.required, Validators.email]);

  constructor() { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.plateau.hasError('required')) {
      return 'You must enter a value';
    }

    return this.plateau.hasError('email') ? 'Not a valid email' : '';
  }





}
