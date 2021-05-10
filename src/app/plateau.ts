export class Plateau {

    private xLimit;
    private yLimit;

    constructor(xLimit:number, yLimit:number) {
        this.xLimit = xLimit;
        this.yLimit = yLimit;
    }

    // I'm not sure if this should be a public method
    public doesLocationExist(x: number, y: number) {
        return (x <= this.xLimit && y <= this.yLimit && x >= 0 && y >= 0);
    }
}