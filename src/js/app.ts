import Fun from "./game/fun";

declare var require: any;
require('../css/main.css');
import Engine from './engine/engine';
import FunGame from "./game/fun";

const engine : Engine = new Engine();

class App {

	constructor() {
		
	}

	public setup(): void {
		engine.initialize(new FunGame());
	}

	public run() : void {
		engine.gameLoop();
	}

}

window.onload = () => {
	let app = new App();
	app.setup();
	app.run();
};

window.onresize = () => {
	engine.resize();
};


