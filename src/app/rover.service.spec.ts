import { TestBed } from '@angular/core/testing';
import { Orientation } from './orientation';
import { Plateau } from './plateau';
import { Rover } from './rover';
import { Instruction } from './instruction';
import { RoverService } from './rover.service';

describe('RoverService', () => {
    let service: RoverService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(RoverService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe("getOutput", () => {
        it('should call the 3 parse methods and getEndLocation when the input is valid', () => {
            let data = {roversArray: [{rover: {}, instructions: {} }]};

            let parsePlateauStringSpy = spyOn((<any>service).commandService, "parsePlateauString");
            let parseRoverStringSpy = spyOn((<any>service).commandService, "parseRoverString");
            let parseInstructionsStringSpy = spyOn((<any>service).commandService, "parseInstructionsString");
            let getEndLocationSpy = spyOn((<any>service), "getEndLocation");

            service.getOutput(data);

            expect(parsePlateauStringSpy).toHaveBeenCalled();
            expect(parseRoverStringSpy).toHaveBeenCalled();
            expect(parseInstructionsStringSpy).toHaveBeenCalled();
            expect(getEndLocationSpy).toHaveBeenCalled();
        });

        it('should call the parsePlateauString method but not the other parse methods or getEndLocation if the roversArray is empty', () => {
            let data = {roversArray: []};

            let parsePlateauStringSpy = spyOn((<any>service).commandService, "parsePlateauString");
            let parseRoverStringSpy = spyOn((<any>service).commandService, "parseRoverString");
            let parseInstructionsStringSpy = spyOn((<any>service).commandService, "parseInstructionsString");
            let getEndLocationSpy = spyOn((<any>service), "getEndLocation");

            service.getOutput(data);

            expect(parsePlateauStringSpy).toHaveBeenCalled();
            expect(parseRoverStringSpy).not.toHaveBeenCalled();
            expect(parseInstructionsStringSpy).not.toHaveBeenCalled();
            expect(getEndLocationSpy).not.toHaveBeenCalled();
        });
    });

    describe("getEndLocation", () => {
        it('should return a Rover object with isOutOfBounds set to true when the rover object is outside of the plateau', () => {
            let mockPlateau = new Plateau(5, 5);
            let mockRover = new Rover(6, 6, Orientation.North);
            let mockInstructions: Instruction[] = [];
            mockInstructions.push(Instruction.MoveForward);

            let doesLocationExistSpy = spyOn(mockPlateau, "doesLocationExist").and.returnValue(false);

            let resultRover = service.getEndLocation(mockPlateau, mockRover, mockInstructions);

            expect(doesLocationExistSpy).toHaveBeenCalled();
            expect(resultRover.isOutOfBounds).toBe(true);
        });

        // TODO tests to check each path of orientation and moves is working properly
    })
});
