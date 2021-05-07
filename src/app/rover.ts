export class Rover {

    private xLoc;
    private yLoc;
    private orientation;

    constructor(xLoc:number, yLoc:number, orientation:string) {
        this.xLoc = xLoc;
        this.yLoc = yLoc;
        this.orientation = orientation;
    }
}