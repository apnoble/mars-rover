import { Component, OnInit } from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-rover-form',
  templateUrl: './rover-form.component.html',
  styleUrls: ['./rover-form.component.css']
})
export class RoverFormComponent implements OnInit {

  plateau = new FormControl('', [Validators.required, Validators.email]);

  constructor() { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.plateau.hasError('required')) {
      return 'You must enter a value';
    }

    return this.plateau.hasError('plateau') ? 'Not a valid email' : '';
  }
}
