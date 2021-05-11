import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoverFormComponent } from './rover-form.component';
import { ReactiveFormsModule, FormArray } from '@angular/forms'
import { strings } from '../constants';

describe('RoverFormComponent', () => {
    let component: RoverFormComponent;
    let fixture: ComponentFixture<RoverFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule
            ],
            declarations: [RoverFormComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RoverFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe("getRoversArray", () => {

        it("should return a roversArray", ()=> {
            let result = component.getRoversArray();

            expect(result.length).toBe(1);
        });
    });

    describe("getErrorMessage", () => {
        it("should return the required error message when plateau has required error", () => {
            let errorSpy = spyOn(component.inputForm.controls.plateau, "hasError").and.returnValue(true);
            
            let result = component.getErrorMessage('plateau');
            
            expect(errorSpy).toHaveBeenCalled();
            expect(result).toBe(strings.required_message);
        });

        // TODO: add tests for the 5 other error messages
    });

    describe("onSubmit", () => {
        it("should call the getOutput method", () => {
            let getOutputSpy = spyOn((<any>component).roverService, "getOutput");

            component.onSubmit();

            expect(getOutputSpy).toHaveBeenCalled();
        });
    });

    describe("addRover", () => {
        it("should add a new formbuilder group to the roversArray", () => {
            component.addRover();

            expect((component.inputForm.controls.roversArray as FormArray).length).toBe(2);
        });
    });

    describe("removeRover", () => {
        it("should remove the most recently added formbuilder group from the roversArray", ()=> {
            component.removeRover();

            expect((component.inputForm.controls.roversArray as FormArray).length).toBe(0);
        });
    })
});
