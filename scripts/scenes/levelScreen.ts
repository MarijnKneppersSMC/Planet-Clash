import { debug } from "console";
import { Vector } from "p5";
import Game from "../main";
import Renderer from "../renderer";

let levelData: LevelData;
let currentLevel: Level;

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
	currentLevel = levelData.levels[Game.level - 1];
}

export function drawLevelScreen()
{
	Renderer.drawText(currentLevel.name, 21, 0, 0, new Vector(255, 255, 255), "left", "top");
}

export function updateLevelScreen()
{
	
}