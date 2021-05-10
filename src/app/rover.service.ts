import { Injectable } from '@angular/core';
import { Plateau } from './plateau';
import { CommandService } from './command.service';
import { Rover } from './rover';
import { Instruction } from './instruction';
import { Orientation } from './orientation';

@Injectable({
	providedIn: 'root',
})

export class RoverService {
	constructor(private commandService: CommandService) {}

    // Gets the output values for all of the rovers
	getOutput(data: any) : Array<any> {
		let plateau: Plateau = this.commandService.parsePlateauString(data.plateau);

        let result = [];
        for (let item of data.roversArray) {
            let rover: Rover | string = this.commandService.parseRoverString(item.rover);
            let instructions: Instruction[]= this.commandService.parseInstructionsString(item.instructions);

            if (typeof rover === "string") { 
                console.log(rover);
            } else {
                result.push(this.getEndLocation(plateau, rover, instructions))
            }
        }

        return result;
  	}

    // Calculates a rover's end location and orientation and returns it as an object
  	getEndLocation(plateau: Plateau, rover: Rover, instructions: Instruction[]) : {x:number, y: number, orientation: string} | string {
		let curX: number = rover.getX();
		let curY: number = rover.getY();

		if (plateau.doesLocationExist(curX, curY) === false) {
			return 'Rover start location is out of bounds';
		}

		for (let instruction of instructions) {
			if (instruction === Instruction.MoveForward) {
				switch (rover.orientation) {
					case Orientation.North: {
					  	if (plateau.doesLocationExist(curX, curY + 1)) {
							curY++;
						}
					  	break;
					}
					case Orientation.South: {
						if (plateau.doesLocationExist(curX, curY - 1)) {
							curY--;
						}
					  	break;
					}
					case Orientation.East: {
						if (plateau.doesLocationExist(curX - 1, curY)) {
							curX--;
						}
					  	break;
					}
					case Orientation.West: {
						if (plateau.doesLocationExist(curX + 1, curY)) {
							curX++;
						}
						break;
					}
				}
			}
			else if (instruction === Instruction.TurnLeft) {
				switch (rover.orientation) {
					case Orientation.North: rover.orientation = Orientation.West; break;
					case Orientation.South: rover.orientation = Orientation.East; break;
					case Orientation.East: rover.orientation = Orientation.North; break;
					case Orientation.West: rover.orientation = Orientation.South; break;
				}
			}
			else if (instruction === Instruction.TurnRight) {
				switch (rover.orientation) {
					case Orientation.North: rover.orientation = Orientation.East; break;
					case Orientation.South: rover.orientation = Orientation.West; break;
					case Orientation.East: rover.orientation = Orientation.South; break;
					case Orientation.West: rover.orientation = Orientation.North; break;
				}
			}
		}

		return {x: curX, y: curY, orientation:rover.orientation};
  	}
}
