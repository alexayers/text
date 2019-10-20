import RenderBuffer from "./renderBuffer";
import TextWidget from "./ui/text";

export default class Renderer {
	private _canvas: HTMLCanvasElement;
	private _ctx: CanvasRenderingContext2D;
	private _height: number = window.innerHeight;
	private _width: number = window.innerWidth;
	private _renderBuffer:RenderBuffer;
	
	constructor() {
		this._canvas = <HTMLCanvasElement>document.getElementById('canvas');
		this._canvas.width = this._width;
		this._canvas.height = this._height;
		this._ctx = this._canvas.getContext("2d");
		this._renderBuffer = new RenderBuffer();

	}

	public write(text: string, x: number, y: number) : void {
		let textWidget : TextWidget = new TextWidget(text,x,y);
		this._renderBuffer.addToBuffer(textWidget);
	}

	public writeText(textWidget: TextWidget) : void {
		this._renderBuffer.addToBuffer(textWidget);
	}

	public render(): void {
		this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);


		this._renderBuffer.getTextBuffer().forEach( (text) => {
			this._ctx.fillStyle = text.color;
			this._ctx.font = text.font;
			this._ctx.fillText(text.text, text.x, text.y);
		});

		this._renderBuffer.clear();
	}



	public resize(): void {
        if (this._canvas !== undefined) {
            this._canvas.width = window.innerWidth;
            this._canvas.height = window.innerHeight;
        }
    }

}
