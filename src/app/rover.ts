import { Orientation } from './orientation';


export class Rover {

    xLoc;
    yLoc;
    orientation;

    constructor(xLoc:number, yLoc:number, orientation:Orientation) {
        this.xLoc = xLoc;
        this.yLoc = yLoc;
        this.orientation = orientation;
    }
    getX() {
        return this.xLoc;
    }
    getY() {
        return this.yLoc;
    }
}