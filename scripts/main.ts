import P5 from "p5";
import Renderer from "./renderer";
import { drawScene, initializeScene, SceneType, touchStarted, updateScene } from "./scene";
import Audio from "./audio";
import LevelScreen from "./scenes/levelScreen";
import Color from "./color";
import Constants from "./constants";

const sketch = (p5: P5) =>
{
	let canvas: P5.Renderer;

	p5.preload = () =>
	{
		Game.p5 = p5;

		Renderer.preload();

		LevelScreen.preload();

		Audio.preload();

		Color.initializeColors();
	}

	p5.setup = () =>
	{
		Game.startTime = p5.millis();
		Game.frameTime = p5.millis();

		canvas = p5.createCanvas(Constants.screenDimensions.x, Constants.screenDimensions.y);
		canvas.parent("app");

		Renderer.drawImage(Renderer.images.background);
		
		Game.reset();
	}

	p5.draw = () =>
	{
		Game.passedTime = p5.millis() - Game.startTime;

		Game.frameTime = (p5.millis() - Game.lastFrame)/1000;

		Game.lastFrame = p5.millis();

		updateScene();

		Renderer.drawImage(Renderer.images.background);

		drawScene();
	}

	p5.touchStarted = () =>
	{
		touchStarted();
	}
}

new P5(sketch);

export default class Game
{
	static p5: P5;
	static scene: SceneType;
	static level: number;
	static startTime: number;
	static passedTime: number;
	static lastFrame: number;
	static frameTime: number;
	static success: boolean;

	static reset(): void {
		initializeScene(SceneType.TITLE);
		this.level = 1;
		this.success = false;
		this.startTime = this.p5.millis();
		this.passedTime = 0;
	}
}