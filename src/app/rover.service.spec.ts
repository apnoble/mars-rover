import { TestBed } from '@angular/core/testing';

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

        });

        it('should call the 3 parse methods but not getEndLocation when all of the rover strings fail to parse', () => {

        });
    });

    describe("getEndLocation", () => {
        it('should return a message saying the rover start location is out of bounds if the location does not exist', () => {

        });

        it('should update the cur location if the next spot is valid', () => {

        });

        it('should not update the cur location is the next spot is invalid', () => {

        });
    })
});
