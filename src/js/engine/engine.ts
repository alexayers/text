

import Renderer from './rendering/renderer';
import Game from "./game";
import Logger from "./lib/logger";

export default class Engine {

    private static _renderer: Renderer;
    private _game: Game;
    
    constructor() {
        Engine._renderer = new Renderer();

    }

    public initialize(game: Game) {
        this._game = game;
        this._game.initialize();

        Logger.info("Initialized game");
    }

    public static print(msg: string, x: number, y: number) {
        Engine._renderer.write(msg, x, y);
    }

    public gameLoop() : void {
        requestAnimationFrame(this.gameLoop.bind(this));
        this._game.gameLoop();
        Engine._renderer.render();
    }

    public resize() : void {
        Engine._renderer.resize();
    }

}