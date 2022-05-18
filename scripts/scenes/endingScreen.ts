import Color from "../color";
import Game from "../main";
import Renderer from "../renderer";

export default class endingScreen {
	static initializeTime: number;

	static initialize() {
		this.initializeTime = Game.p5.millis();
	}

	static draw() {
		if (Game.success) {
			Renderer.drawText("YOU WIN", 60, 400, 225, Color.green, "center", "center")
		}
		else {
			Renderer.drawText("YOU LOSE", 60, 400, 225, Color.red, "center", "center")
		}

		Renderer.drawText("CLICK or TAP to RETURN to TITLE SCREEN", 20, 400, 275, (Game.success) ? Color.green : Color.red, "center")
	}

	static touchEvent() {
		Game.reset();
	}
}