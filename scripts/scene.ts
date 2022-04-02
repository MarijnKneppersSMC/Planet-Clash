import { drawTitleScreen, initializeTitleScreen, updateTitleScreen } from "./scenes/titleScreen";
import Game from "./main";

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
		case SceneType.TITLE:
			initializeTitleScreen();
			break;
	}
}

export function drawScene()
{
	switch(Game.scene)
	{
		case SceneType.TITLE:
			drawTitleScreen();
			break;
	}
}

export function updateScene()
{
	switch(Game.scene)
	{
		case SceneType.TITLE:
			updateTitleScreen();
			break;
	}
}