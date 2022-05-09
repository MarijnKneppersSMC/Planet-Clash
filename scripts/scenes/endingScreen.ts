import Color from "../color";
import Game from "../main";
import Renderer from "../renderer";

let initializeTime: number;

export function initializeEdingScreen()
{
	initializeTime = Game.p5.millis();
}

export function drawEndingScreen()
{
	if(Game.success)
	{
		Renderer.drawText("YOU WIN", 60, 400, 225, Color.green, "center", "center")
	}
	else
	{
		Renderer.drawText("YOU LOSE", 60, 400, 225, Color.red, "center", "center")
	}

	Renderer.drawText("CLICK or TAP to RETURN to TITLE SCREEN", 20, 400, 275, (Game.success)? Color.green : Color.red, "center")
}

export function endingTouchEvent()
{
	Game.reset();
}