import TitleScreen from "./scenes/titleScreen";
import Game from "./main";
import LevelScreen from "./scenes/levelScreen";
import EndingScreen from "./scenes/endingScreen";

export enum SceneType {
	TITLE,
	LEVEL,
	ENDING
}

export default class SceneHandler {
	static initializeScene(scene: SceneType) {
		Game.scene = scene;

		switch (Game.scene) {
			case SceneType.LEVEL:
				LevelScreen.initialize();
			case SceneType.ENDING:
				EndingScreen.initialize();
		}
	}

	static drawScene() {
		switch (Game.scene) {
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

	static updateScene() {
		switch (Game.scene) {
			case SceneType.LEVEL:
				LevelScreen.update();
				break;
		}
	}

	static touchStarted() {
		switch (Game.scene) {
			case SceneType.TITLE:
				TitleScreen.touchStarted();
				break;
			case SceneType.LEVEL:
				LevelScreen.touchStarted();
				break;
			case SceneType.ENDING:
				EndingScreen.touchStarted();
				break;
		}
	}

	static touchEnded() {
		switch (Game.scene) {
			case SceneType.LEVEL:
				LevelScreen.touchEnded();
				break;
		}
	}
}