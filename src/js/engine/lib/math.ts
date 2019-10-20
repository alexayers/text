




export class MathLib {

    public static randomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    public static randomNegative(): number {
        if (this.randomInt(1, 2) == 1) {
            return -1;
        } else {
            return 1;
        }
    }

}
