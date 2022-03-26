import P5 from "p5";
import Renderer from "./renderer";
import { drawScene, initializeScene, SceneType, updateScene } from "./scene";
import Audio from "./audio";

const sketch = (p5: P5) =>
{
	let canvas: P5.Renderer;

	p5.setup = () =>
	{
		Game.p5 = p5;

		canvas = p5.createCanvas(800, 450);
		canvas.parent("app");
		Renderer.initiazeRenderer();
		Renderer.drawImage("background");

		Audio.intializeAudio();

		initializeScene(SceneType.TITLE)
	}

	p5.draw =() =>
	{
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
}