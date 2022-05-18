import P5 from "p5";
import Renderer from "./renderer";

export default class Planet{

	position: P5.Vector;
	radius: number;
	sprite: P5.Image;
	movementType: MovementType;
	
	
	constructor(position: P5.Vector, radius: number)
	{
		this.position = position;
		this.radius = radius;
		this.sprite = Renderer.images.planets[Math.round(Math.random() * (Renderer.images.planets.length - 1))];
	}

	draw = () =>
	{
		console.log(this.radius);
		console.log(this.sprite);
		Renderer.drawImage(this.sprite, this.position.x, this.position.y, this.radius, this.radius)
	}
}

enum MovementType {
	RANDOM = "random",
	LINKED = "linked"
}