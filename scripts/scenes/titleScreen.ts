import Renderer from "../renderer";
import Game from "../main";
import SceneHandler, { SceneType } from "../scene";
import Color from "../color";
import Constants from "../constants";
import CustomMath from "../math";
import { Vector } from "p5";


export default class TitleScreen {

	static fullscreenPosition: Vector = new Vector(Constants.screenDimensions.x - 42, Constants.screenDimensions.y - 42);

	static draw() {
		Renderer.drawImage(Renderer.images.logo, (Constants.screenDimensions.x / 2) - (Renderer.images.logo.width) / 2, (Constants.screenDimensions.y / 2) - (Renderer.images.logo.height / 2) - 20 + Math.sin(Game.passedTime / 1000) * 10);
		Renderer.drawText("CLICK or TAP to GAMEPLAY SCREEN", 20, Constants.screenDimensions.x / 2, 350, Color.grey, "center", "top");
		Renderer.drawText("Code by Marijn Kneppers", 20, Constants.screenDimensions.x / 2, 375, Color.grey, "center", "top");
		Renderer.drawText("Art by Twan Kneppers", 20, Constants.screenDimensions.x / 2, 400, Color.grey, "center", "top");

		Renderer.drawImage(Renderer.images.fullscreen, this.fullscreenPosition.x, this.fullscreenPosition.y);
	}

	static touchStarted() {

		if(CustomMath.checkSquarePointCollision(this.fullscreenPosition, 32, 32, Game.mousePosition))
		{
			Game.p5.fullscreen(!Game.p5.fullscreen());
			Game.fullscreen = !Game.fullscreen;
			Game.p5.windowResized();
			return;
		}

		SceneHandler.initializeScene(SceneType.LEVEL);
	}
}