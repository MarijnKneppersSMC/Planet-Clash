import P5 from "p5";

export default class Renderer
{
	static p5: P5;

	static  initiazeRenderer = (p5: P5) =>
	{
		this.p5 = p5;
	}

	static drawBackground = () =>
	{
		this.p5.clear(0, 0, 0, 0);
	}
}