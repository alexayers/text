import Game from "../engine/game";
import Engine from "../engine/engine";


export default class FunGame implements Game {

    initialize(): void {
    }

    gameLoop(): void {

        Engine.print("This is a test", 5,50);
        Engine.print("This is a test!!!", 50,250);
    }


}