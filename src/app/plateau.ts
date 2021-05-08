export class Plateau {

    private upperX;
    private upperY;

    constructor(upperX:number, upperY:number) {
        this.upperX = upperX;
        this.upperY = upperY;
    }

    // I'm not sure if this should be a public method
    public doesLocationExist(x: number, y: number) {
        return (x <= this.upperX && y <= this.upperY && x >= 0 && y >= 0);
    }
}