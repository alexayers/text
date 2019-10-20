import TextWidget from "./ui/text";


export default class RenderBuffer {

    private _textBuffer:Array<TextWidget>;

    constructor() {
        this._textBuffer = new Array();
    }

    public addToBuffer(text: TextWidget) : void {
        this._textBuffer.push(text);
    }

    public getTextBuffer() : Array<TextWidget> {
        return this._textBuffer;
    }

    public clear() : void {
        this._textBuffer = new Array();
    }

}