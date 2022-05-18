import Renderer from "../renderer";
import Game from "../main";
import { initializeScene, SceneType } from "../scene";
import Color from "../color";


export default class TitleScreen {

	static draw() {
		Renderer.drawImage(Renderer.images.logo, (800 / 2) - (Renderer.images.logo.width) / 2, (450 / 2) - (Renderer.images.logo.height / 2) - 20 + Math.sin(Game.passedTime / 1000) * 10);
		Renderer.drawText("CLICK or TAP to GAMEPLAY SCREEN", 20, 800 / 2, 350, Color.grey, "center", "top");
		Renderer.drawText("Code by Marijn Kneppers", 20, 800 / 2, 375, Color.grey, "center", "top");
		Renderer.drawText("Art by Twan Kneppers", 20, 800 / 2, 400, Color.grey, "center", "top");
	}

	static touchEvent() {
		initializeScene(SceneType.LEVEL);
	}
}