import { Vector } from "p5";
import Game from "../main";
import Renderer from "../renderer";
import { initializeScene, SceneType } from "../scene";
import {LevelData, Level} from "../types"

let levelData: LevelData;
let currentLevel: Level;

let timeLeft: number;

export function InitializeLevelData()
{
	var request = new XMLHttpRequest();
    request.overrideMimeType("application/json");
    request.open("GET", "/data/levels.json", true);
    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status == 200) {
            levelData = JSON.parse(request.responseText);
        }
    }
    request.send(null);
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
	Renderer.drawText(`Level ${Game.level} - ${currentLevel.name}`, 20, 1, 1, new Vector(255, 255, 255), "left", "top");
	Renderer.drawImage("timer", 0, 20);
	Renderer.drawText(timeLeft.toFixed(1).toString(), 20, 32, 28, new Vector(255, 255, 255), "left", "top");
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