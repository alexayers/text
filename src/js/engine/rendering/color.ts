
export class Color {
    private _red: number;
    private _green: number;
    private _blue: number;
    private _alpha: number;

    constructor(red: number, green: number, blue: number, alpha: number) {
        this._red = red;
        this._green = green;
        this._blue = blue;
        this._alpha = alpha;
    }

    get blue(): number {
        return this._blue;
    }

    get red(): number {
        return this._red;
    }

    get green(): number {
        return this._green;
    }

    get alpha(): number {
        return this._alpha;
    }

    set red(red: number) {
        this._red = red;
    }

    set green(green: number) {
        this._green = green;
    }

    set blue(blue: number) {
        this._blue = blue;
    }

    set alpha(alpha: number) {
        this._alpha = alpha;
    }

    public hex(): string {
        let redHex = Number(this._red).toString(16);
        if (redHex.length < 2) {
            redHex = "0" + redHex;
        }

        let greenHex = Number(this._green).toString(16);
        if (greenHex.length < 2) {
            greenHex = "0" + greenHex;
        }

        let blueHex = Number(this._blue).toString(16);
        if (blueHex.length < 2) {
            blueHex = "0" + blueHex;
        }

        return "#" + redHex + greenHex + blueHex;

    }

}