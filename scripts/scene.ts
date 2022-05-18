import TitleScreen from "./scenes/titleScreen";
import Game from "./main";
import LevelScreen from "./scenes/levelScreen";
import EndingScreen from "./scenes/endingScreen";

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
			LevelScreen.initialize();
		case SceneType.ENDING:
			EndingScreen.initialize();
	}
}

export function drawScene()
{
	switch(Game.scene)
	{
		case SceneType.TITLE:
			TitleScreen.draw();
			break;
		case SceneType.LEVEL:
			LevelScreen.draw();
			break;
		case SceneType.ENDING:
			EndingScreen.draw();
			break;
	}
}

export function updateScene()
{
	switch(Game.scene)
	{
		case SceneType.LEVEL:
			LevelScreen.update();
			break;
	}
}

export function touchStarted()
{
	switch(Game.scene)
	{
		case SceneType.TITLE:
			TitleScreen.touchEvent();
			break;
		case SceneType.ENDING:
			EndingScreen.touchEvent();
			break;
	}
}