import { Orientation } from './orientation';


export class Rover {

    x:number;
    y:number;
    orientation:Orientation;
    isOutOfBounds?:boolean;

    constructor(x:number, y:number, orientation:Orientation, isOutOfBounds:boolean = false) {
        this.x = x;
        this.y = y;
        this.orientation = orientation;
        this.isOutOfBounds = isOutOfBounds;
    }
    getX() : number {
        return this.x;
    }
    getY() : number {
        return this.y;
    }
}