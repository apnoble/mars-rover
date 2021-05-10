import { TestBed } from '@angular/core/testing';

import { CommandService } from './command.service';
import { Instruction } from './instruction';

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
        it('should return a Plateau object', () => {
            let result = service.parsePlateauString("5 5");

            expect((<any>result).xLimit).toBe(5);
            expect((<any>result).yLimit).toBe(5);
        });
    });

    describe("parseRoverString", () => {
        it("should return a Rover object", () => {
            let result = service.parseRoverString("1 1 N");

            expect((<any>result).getX()).toBe(1);
            expect((<any>result).getY()).toBe(1);
            expect((<any>result).orientation).toBe("N");
        });
    });
    
    describe("parseInstructionString", () => {
        it("should return an array of Instruction objects", () => {
            let result = service.parseInstructionsString("LMLR");

            expect((<any>result).length).toBe(4);
            expect(typeof result === "object").toBe(true);
            expect(result[0]).toBe(Instruction.TurnLeft);
            expect(result[1]).toBe(Instruction.MoveForward);
            expect(result[2]).toBe(Instruction.TurnLeft);
            expect(result[3]).toBe(Instruction.TurnRight);
        });
    });
});
