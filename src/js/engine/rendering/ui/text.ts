import Widget from "./widget";


export default class TextWidget extends Widget {

    private _text: string;
    private _font:string;
    private _size:number;
    private _color:string;

    constructor(text: string, x: number, y: number, font: string = "Terminal", size: number = 16, color: string = "white") {
        super(x,y);
        this._text = text;
        this._font = font;
        this._size = size;
        this._color = color;
    }
    
    public get text(): string {
        return this._text;
    }

    public get size() : number {
        return this._size;
    }

    public get font() : string {
        return this._font;
    }

    public get color() : string {
        return this._color;
    }

}