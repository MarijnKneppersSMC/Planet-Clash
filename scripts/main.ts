import P5 from "p5";
import Renderer from "./renderer";

const sketch = (p5: P5) =>
{
	let canvas: P5.Renderer;

	p5.setup = () =>
	{
		canvas = p5.createCanvas(800, 450);
		canvas.parent("app");
		Renderer.initiazeRenderer(p5);
		Renderer.drawBackground();
	}

	p5.draw =() =>
	{
		Renderer.drawBackground();
	}
}

new P5(sketch);
