import P5, { Vector } from "p5";
import Renderer from "./renderer";
import Audio from "./audio";
import LevelScreen from "./scenes/levelScreen";
import Color from "./color";
import Constants from "./constants";
import SceneHandler, { SceneType } from "./scene";

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

		SceneHandler.updateScene();

		Renderer.drawImage(Renderer.images.background);

		SceneHandler.drawScene();
	}

	p5.touchStarted = () =>
	{
		if(!(p5.mouseX > 0 && p5.mouseX < Constants.screenDimensions.x && p5.mouseY > 0 && p5.mouseY < Constants.screenDimensions.y))
		{
			return;
		}

		SceneHandler.touchStarted();
	}

	p5.touchEnded = () =>
	{
		SceneHandler.touchEnded();
	}

	p5.windowResized = () =>
	{
		//sadly, the p5.resizeCanvas function did not work, so I created my own version

		let canvas: HTMLElement = document.getElementById("defaultCanvas0");

		if(Game.fullscreen)
		{
			canvas.style.width = window.innerWidth.toString();
			canvas.style.height = window.innerHeight.toString();
			return;
		}
		else
		{
			canvas.style.width = Constants.screenDimensions.x.toString();
			canvas.style.height = Constants.screenDimensions.y.toString();
			return;
		}
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
	static dragging: boolean;
	static draggedPlanetIndex: number;
	static fullscreen: boolean;

	static get mousePosition()
	{
		return new Vector(this.p5.mouseX, this.p5.mouseY);
	}

	static reset(): void {
		SceneHandler.initializeScene(SceneType.TITLE);
		this.level = 1;
		this.success = false;
		this.startTime = this.p5.millis();
		this.passedTime = 0;
		this.dragging = false;
		this.draggedPlanetIndex = -1;
	}
}