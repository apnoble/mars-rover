export class Plateau {

    private xLimit;
    private yLimit;

    constructor(xLimit:number, yLimit:number) {
        this.xLimit = xLimit;
        this.yLimit = yLimit;
    }

    public doesLocationExist(x: number, y: number) {
        return (x <= this.xLimit && y <= this.yLimit && x >= 0 && y >= 0);
    }
}