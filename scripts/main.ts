import P5 from "p5";
import Renderer from "./renderer";
import { drawScene, initializeScene, SceneType, updateScene } from "./scene";
import Audio from "./audio";
import { InitializeLevelData } from "./scenes/levelScreen";

const sketch = (p5: P5) =>
{
	let canvas: P5.Renderer;

	p5.setup = () =>
	{
		Game.p5 = p5;
		Game.startTime = p5.millis();

		canvas = p5.createCanvas(800, 450);
		canvas.parent("app");
		Renderer.initiazeRenderer();
		Renderer.drawImage("background");

		Audio.intializeAudio();

		InitializeLevelData();

		initializeScene(SceneType.TITLE)
	}

	p5.draw =() =>
	{
		Game.passedTime = p5.millis() - Game.startTime;

		updateScene();

		Renderer.drawImage("background");

		drawScene();
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

	static reset(): void {
		initializeScene(SceneType.TITLE);
		this.level = 1;
	}
}