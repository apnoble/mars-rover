import { Injectable } from '@angular/core';
import { Plateau } from './plateau';
import { Orientation } from './orientation';
import { Rover } from './rover';
import { Instruction } from './instruction';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  constructor() { }

  parsePlateauString(plateauString: string) {
    let coordinates = plateauString.split(' ');

    let xLimit = parseInt(coordinates[0]);
    let yLimit = parseInt(coordinates[1]);

    return new Plateau(xLimit, yLimit);
  }

  parseRoverString(roverString: string) {
    let items = roverString.split(' ');

    let xStart = parseInt(items[0]);
    let yStart = parseInt(items[1]);

    let orientation;

    switch (items[2]) {
      case 'N': {
        orientation = Orientation.North;
        break;
      }
      case 'W': {
        orientation = Orientation.West;
        break;
      }
      case 'E': {
        orientation = Orientation.East;
        break;
      }
      case 'S': {
        orientation = Orientation.South;
        break;
      }
    }

    if (xStart == undefined || yStart == undefined || orientation == undefined) {
      return "Error: Parsing the rover string failed";
    } 
    return new Rover(xStart, yStart, orientation);
  }

  parseInstructionsString(instructionsString: string) {
    let charArray = instructionsString.split('');
    let instructions: Instruction[] = [];
    for (let letter of charArray) {
      let instruction;
      switch (letter) {
        case 'L': {
          instruction = Instruction.TurnLeft;
          break;
        }
        case 'M': {
          instruction = Instruction.MoveForward;
          break;
        }
        case 'R': {
          instruction = Instruction.TurnRight;
          break;
        }
      }
      if (instruction != undefined) instructions.push(instruction);
    }
    return instructions;
  }
}
