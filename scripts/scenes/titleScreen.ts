import { Vector } from "p5";
import Renderer from "../renderer";
import Game from "../main";
import { initializeScene, SceneType } from "../scene";

export function initializeTitleScreen()
{
	
}

export function drawTitleScreen()
{
	Renderer.drawImage("logo", (800 / 2) - (Renderer.generalImages["logo"].width) / 2, (450/2) - (Renderer.generalImages["logo"].height / 2) - 20 + Math.sin(Game.passedTime / 1000) * 10);
	Renderer.drawText("CLICK or TAP to GAMEPLAY SCREEN", 20, 800/2, 350, new Vector(130, 130, 130), "center", "top");
	Renderer.drawText("Code by Marijn Kneppers", 20, 800/2, 375, new Vector(130, 130, 130), "center", "top");
	Renderer.drawText("Art by Twan Kneppers", 20, 800/2, 400, new Vector(130, 130, 130), "center", "top");
}

export function updateTitleScreen()
{
	if(Game.p5.mouseIsPressed)
	{
		if(Game.p5.mouseButton == Game.p5.LEFT)
		{
			initializeScene(SceneType.LEVEL);
		}
	}
}