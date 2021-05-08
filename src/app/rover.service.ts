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

	getOutput(data: any) {
		let plateau = this.commandService.parsePlateauString(data.plateau);
        console.log(data);

        let result = [];
        for (let item of data.roversArray) {
            let rover = this.commandService.parseRoverString(item.rover);
            let instructions = this.commandService.parseInstructionsString(item.instructions);

            if (typeof rover === "string") { 
                console.log(rover);
            } else {
                result.push(this.getEndLocation(plateau, rover, instructions))
            }
        }

        return result;
		// let rover = this.commandService.parseRoverString(data.rover);
		// let instructions = this.commandService.parseInstructionsString(data.instructions);

		// if (typeof rover === "string") return rover;

		// return this.getEndLocation(plateau, rover, instructions);
  	}

  	getEndLocation(plateau: Plateau, rover: Rover, instructions: Instruction[]) {
		let curX = rover.getX();
		let curY = rover.getY();

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
					case Orientation.North: {
					  	rover.orientation = Orientation.West;
					  	break;
					}
					case Orientation.South: {
						rover.orientation = Orientation.East;
					  	break;
					}
					case Orientation.East: {
						rover.orientation = Orientation.North;
					  	break;
					}
					case Orientation.West: {
						rover.orientation = Orientation.South;
						break;
					}
				}
			}
			else if (instruction === Instruction.TurnRight) {
				switch (rover.orientation) {
					case Orientation.North: {
					  	rover.orientation = Orientation.East;
					  	break;
					}
					case Orientation.South: {
						rover.orientation = Orientation.West;
					  	break;
					}
					case Orientation.East: {
						rover.orientation = Orientation.South;
					  	break;
					}
					case Orientation.West: {
						rover.orientation = Orientation.North;
						break;
					}
				}
			}
		}

		return {x: curX, y: curY, orientation:rover.orientation};
  	}

	
}
