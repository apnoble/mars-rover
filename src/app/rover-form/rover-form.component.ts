import { Component, OnInit } from '@angular/core';
import {
    Validators,
    FormBuilder,
    FormArray
} from '@angular/forms';
import { RoverService } from '../rover.service';
import { strings } from '../constants';

@Component({
    selector: 'app-rover-form',
    templateUrl: './rover-form.component.html',
    styleUrls: ['./rover-form.component.css'],
})
export class RoverFormComponent implements OnInit {
    // This is the controls for the input form
    inputForm = this.fb.group({
        plateau: [
            '',
            [Validators.required, Validators.pattern('[0-9]+\\s[0-9]+$')],
        ],
        roversArray: this.fb.array([
            this.fb.group({
                rover: this.fb.control('', [
                    Validators.required,
                    Validators.pattern('[0-9]+\\s[0-9]+\\s[NSEW]'),
                ]),
                instructions: this.fb.control('', [
                    Validators.required,
                    Validators.pattern('[LMR]+'),
                ]),
            }),
        ]),
    });

    // This is the result to be displayed in the output table
    output: any = [];
    displayedColumns: string[] = ['num', 'x', 'y', 'orientation'];

    constructor(private fb: FormBuilder, private roverService: RoverService) { }

    ngOnInit(): void { }

    // This method is necessary for the ngFor that displays the rover input form group
    getRoversArray() {
        return (this.inputForm.get('roversArray') as FormArray).controls;
    }

    // This method handles the warning text that displays beneath our form text boxes when the input is invalid.
    getErrorMessage(from: string, item?: any) : string {
        let controls = this.inputForm.controls;

        if (from === 'plateau') {
            if (controls.plateau.hasError('required')) {
                return strings.required_message;
            } else if (controls.plateau.hasError('pattern')) {        
                return strings.plateau_pattern_message;
            }
        } else if (from === 'rover') {
            if (item.controls.rover.hasError('required')) {
                return strings.required_message;
            }

            if (item.controls.rover.hasError('pattern')) {
                return strings.rover_pattern_message;
            }

        } else if (from === 'instructions') {
            if (item.controls.instructions.hasError('required')) {
                return strings.required_message;
            }

            if (item.controls.instructions.hasError('pattern')) {
                return strings.instructions_pattern_message;
            }
        }

        return '';
    }

    // When the form is submitted, this gets the end location and orientation values to display in the output table
    onSubmit(): void {
        this.output = this.roverService.getOutput(this.inputForm.value);
    }

    // This adds a form group for an additional rover
    addRover(): void {
        (this.inputForm.controls.roversArray as FormArray).push(
            this.fb.group({
                rover: this.fb.control('', [
                    Validators.required,
                    Validators.pattern('[0-9]+\\s[0-9]+\\s[NSEW]'),
                ]),
                instructions: this.fb.control('', [
                    Validators.required,
                    Validators.pattern('[LMN]+'),
                ]),
            })
        );
    }

    // This removes the rover input form group for the most recently added rover
    removeRover(): void {
        let length = (this.inputForm.controls.roversArray as FormArray).length;
        (this.inputForm.controls.roversArray as FormArray).removeAt(length - 1);
    }
}
