import { Vector } from "p5";
import Game from "../main";
import Renderer from "../renderer";
import { initializeScene, SceneType } from "../scene";

let initializeTime: number;

export function initializeEdingScreen()
{
	initializeTime = Game.p5.millis();
}

export function drawEndingScreen()
{
	if(Game.success)
	{
		Renderer.drawText("YOU WIN", 60, 400, 225, new Vector(0, 228, 48), "center", "center")
	}
	else
	{
		Renderer.drawText("YOU LOSE", 60, 400, 225, new Vector(230, 41, 55), "center", "center")
	}

	Renderer.drawText("CLICK or TAP to RETURN to TITLE SCREEN", 20, 400, 275, (Game.success)? new Vector(0, 228, 48) : new Vector(230, 41, 55), "center")
}

export function endingTouchEvent()
{
	Game.reset();
}