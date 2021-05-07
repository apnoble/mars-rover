import { Component, OnInit } from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-rover-form',
  templateUrl: './rover-form.component.html',
  styleUrls: ['./rover-form.component.css']
})
export class RoverFormComponent implements OnInit {

  plateau = new FormControl('', [Validators.required, Validators.pattern('[0-9]+\\\s[0-9]+$')]);
  rover = new FormControl('', [Validators.required, Validators.pattern('[0-9]+\\\s[0-9]+\\\s[NSEW]')]);
  instructions = new FormControl('', [Validators.required, Validators.pattern('[LMN]+')]);

  constructor() { }

  ngOnInit(): void {
  }

  getErrorMessage(from: string) {

    if (from === "plateau") {
      if (this.plateau.hasError('required')) {
        return 'You must enter a value';
      }
  
      if (this.plateau.hasError('pattern')) {
        return 'Please enter two whole numbers separated by a space';
      }
    } else if (from === 'rover') {
      if (this.rover.hasError('required')) {
        return 'You must enter a value';
      }
  
      if (this.rover.hasError('pattern')) {
        return 'Please enter two whole numbers, and a direction (N, S, E, W), separated by spaces e.g. 12 5 W';
      }
    } else if (from === 'instructions') {
      if (this.instructions.hasError('required')) {
        return 'You must enter a value';
      }
  
      if (this.instructions.hasError('pattern')) {
        return 'Please enter a string of instructions with no spaces and only the values L, R, or M e.g. LMLMLMLMLMLMR';
      }
    }
  
    return '';
  }
}
