import { Component, OnInit } from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators, FormBuilder, FormArray} from '@angular/forms';
import { RoverService } from '../rover.service';


@Component({
  selector: 'app-rover-form',
  templateUrl: './rover-form.component.html',
  styleUrls: ['./rover-form.component.css']
})
export class RoverFormComponent implements OnInit {

  inputForm = this.fb.group({
    plateau: ['', [Validators.required, Validators.pattern('[0-9]+\\\s[0-9]+$')]],
    roversArray: this.fb.array([
        this.fb.group({
            rover: this.fb.control('', [Validators.required, Validators.pattern('[0-9]+\\\s[0-9]+\\\s[NSEW]')]),
            instructions: this.fb.control('', [Validators.required, Validators.pattern('[LMN]+')])
        })
    ]),
  });

  output: any;

  constructor(private fb: FormBuilder, private roverService: RoverService) { }

  ngOnInit(): void {
  }

  getRoversArray() {
    return (this.inputForm.get('roversArray') as FormArray).controls;
  }


  getErrorMessage(from: string) {

    let controls = this.inputForm.controls;

    if (from === "plateau") {
      if (controls.plateau.hasError('required')) {
        return 'You must enter a value';
      }
  
      else if (controls.plateau.hasError('pattern')) {
        return 'Please enter two whole numbers separated by a space';
      }
    } else if (from === 'rover') {
      if (controls.rover.hasError('required')) {
        return 'You must enter a value';
      }
  
      if (controls.rover.hasError('pattern')) {
        return 'Please enter two whole numbers, and a direction (N, S, E, or W), separated by spaces e.g. 12 5 W';
      }
    } else if (from === 'instructions') {
      if (controls.instructions.hasError('required')) {
        return 'You must enter a value';
      }
  
      if (controls.instructions.hasError('pattern')) {
        return 'Please enter a string of instructions with no spaces and only the values L, R, or M e.g. LMLMLMLMLMLMR';
      }
    }
  
    return '';
  }

  onClick(): void {
    //console.log(this.plateau.value);
    
  }

  onSubmit(): void {

    this.output = this.roverService.getOutput(this.inputForm.value);
  }

  addRover(): void {
      (this.inputForm.controls.roversArray as FormArray).push(this.fb.group({
        rover: this.fb.control('', [Validators.required, Validators.pattern('[0-9]+\\\s[0-9]+\\\s[NSEW]')]),
        instructions: this.fb.control('', [Validators.required, Validators.pattern('[LMN]+')])
    }));
  }

  removeRover(): void {
        let length = (this.inputForm.controls.roversArray as FormArray).length;
        (this.inputForm.controls.roversArray as FormArray).removeAt(length - 1);
  }
}

