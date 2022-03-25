import P5 from "p5";
import {drawBackground, initiazeRenderer} from "./renderer";

const sketch = (p5: P5) =>
{
	let canvas: P5.Renderer;

	p5.setup = () =>
	{
		canvas = p5.createCanvas(800, 450);
		canvas.parent("app");
		initiazeRenderer(p5);
		drawBackground();
	}

	p5.draw =() =>
	{
		drawBackground();
	}
}

new P5(sketch);
