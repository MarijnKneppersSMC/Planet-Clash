import P5 from "p5";
import {drawAtPosition} from "./renderer";
import vector2 from "./vector2";

const sketch = (p5: P5) =>
{
	p5.setup = () =>
	{
		p5.createCanvas(800, 450);
		p5.background("black");
	}

	p5.draw =() =>
	{
		p5.background(0);
		drawAtPosition(new vector2(60, 60), p5);
	}
}

new P5(sketch);
