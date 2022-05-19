import P5 from "p5";
import Color from "./color";
import CustomMath from "./math";
import Renderer from "./renderer";

export default class Planet{

	position: P5.Vector;
	radius: number;
	get diameter()
	{
		return this.radius * 2;
	}
	sprite: P5.Image;
	movementType: MovementType;
	
	
	constructor(position: P5.Vector, radius: number)
	{
		this.radius = radius;
		this.position = CustomMath.clampToScreen(position, this.radius);
		this.sprite = Renderer.images.planets[Math.round(Math.random() * (Renderer.images.planets.length - 1))];
	}

	draw = () =>
	{
		Renderer.drawImage(this.sprite, this.position.x, this.position.y, this.diameter, this.diameter, Color.white, "center")
	}
}

enum MovementType {
	RANDOM = "random",
	LINKED = "linked"
}