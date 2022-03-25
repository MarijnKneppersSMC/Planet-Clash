import P5 from "p5";

var p5: P5;

export function initiazeRenderer(p5: P5)
{
	this.p5 = p5;
}

export function drawBackground()
{
	p5.clear(0, 0, 0, 0);
}