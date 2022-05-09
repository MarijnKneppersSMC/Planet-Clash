import Renderer from "../renderer";
import Game from "../main";
import { initializeScene, SceneType } from "../scene";
import Color from "../color";

export function drawTitleScreen()
{
	Renderer.drawImage("logo", (800 / 2) - (Renderer.generalImages["logo"].width) / 2, (450/2) - (Renderer.generalImages["logo"].height / 2) - 20 + Math.sin(Game.passedTime / 1000) * 10);
	Renderer.drawText("CLICK or TAP to GAMEPLAY SCREEN", 20, 800/2, 350, Color.grey, "center", "top");
	Renderer.drawText("Code by Marijn Kneppers", 20, 800/2, 375, Color.grey, "center", "top");
	Renderer.drawText("Art by Twan Kneppers", 20, 800/2, 400, Color.grey, "center", "top");
}

export function titleTouchEvent()
{
	initializeScene(SceneType.LEVEL);
}