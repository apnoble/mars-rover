import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoverFormComponent } from './rover-form.component';
import { ReactiveFormsModule } from '@angular/forms'


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

        });
    });

    describe("getErrorMessage", () => {
        it("should return the error message", () => {

        });
    });

    describe("onSubmit", () => {
        it("should call the getOutput method", () => {

        });
    });

    describe("addRover", () => {
        it("should add a new formbuilder group to the roversArray", () => {

        });
    });

    describe("removeRover", () => {
        it("should remove the most recently added formbuilder group from the roversArray", ()=> {

        });
    })
});
