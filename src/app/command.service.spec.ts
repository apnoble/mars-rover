import { TestBed } from '@angular/core/testing';

import { CommandService } from './command.service';

describe('CommandService', () => {
    let service: CommandService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CommandService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe("parsePlateauString", () => {
        it('should return a Plateau object when the input is valid', () => {

        });

        it('should throw an error when the input string is invalid', ()=> {

        });
    });

    describe("parseRoverString", () => {
        it("should return a Rover object when the input is valid", () => {

        });

        it("should throw an error when the input string is invalid", ()=> {
            
        });
    });
    
    describe("parseInstructionString", () => {
        it("should return an array of Instruction objects when the input is valid", () => {

        });
        
        it("should throw an error when the input string is invalid", () => {

        });
    });
});
