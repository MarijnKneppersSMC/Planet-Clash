import Color from "../color";
import Game from "../main";
import Renderer from "../renderer";
import { initializeScene, SceneType } from "../scene";
import {LevelData, Level} from "../types"

let levelData: LevelData;
let currentLevel: Level;

let timeLeft: number;

export function InitializeLevelData()
{

    levelData = Game.p5.loadJSON("./data/levels.json") as LevelData;

}

export function initializeLevelScreen()
{

	if(Game.level > levelData.levels.length)
	{
		initializeScene(SceneType.ENDING);
		return;
	}

	currentLevel = levelData.levels[Game.level - 1];

	timeLeft = currentLevel.duration;
}

export function drawLevelScreen()
{
	Renderer.drawText(`Level ${Game.level} - ${currentLevel.name}`, 20, 1, 1, Color.white, "left", "top");
	Renderer.drawImage("timer", 0, 20);
	Renderer.drawText(timeLeft.toFixed(1).toString(), 20, 32, 28, Color.white, "left", "top");
}

export function updateLevelScreen()
{
	timeLeft -= Game.frameTime;

	if(timeLeft <= 0)
	{
		Game.level += 1;

		initializeScene(SceneType.LEVEL);
	}
}