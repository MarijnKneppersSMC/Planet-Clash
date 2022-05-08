import { drawTitleScreen, titleTouchEvent } from "./scenes/titleScreen";
import Game from "./main";
import { drawLevelScreen, initializeLevelScreen, updateLevelScreen } from "./scenes/levelScreen";
import { drawEndingScreen, initializeEdingScreen, updateEndingScreen } from "./scenes/endingScreen";

export enum SceneType
{
	TITLE,
	LEVEL,
	ENDING
}

export function initializeScene(scene: SceneType)
{
	Game.scene = scene;

	switch(Game.scene)
	{
		case SceneType.LEVEL:
			initializeLevelScreen();
		case SceneType.ENDING:
			initializeEdingScreen();
	}
}

export function drawScene()
{
	switch(Game.scene)
	{
		case SceneType.TITLE:
			drawTitleScreen();
			break;
		case SceneType.LEVEL:
			drawLevelScreen();
			break;
		case SceneType.ENDING:
			drawEndingScreen();
			break;
	}
}

export function updateScene()
{
	switch(Game.scene)
	{
		case SceneType.LEVEL:
			updateLevelScreen();
			break;
		case SceneType.ENDING:
			updateEndingScreen();
			break;
	}
}

export function touchStarted()
{
	switch(Game.scene)
	{
		case SceneType.TITLE:
			titleTouchEvent();
			break;
	}
}