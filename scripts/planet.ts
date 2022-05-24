import P5, { Vector } from "p5";
import Color from "./color";
import Constants from "./constants";
import Game from "./main";
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
	speed: number;
	movementType: MovementType;

	target: P5.Vector

	dragging: boolean;
	
	
	constructor(position: P5.Vector, radius: number, speed: number, movementType: MovementType)
	{
		this.radius = radius;
		this.position = CustomMath.clampToScreen(position, this.radius);
		this.speed = speed;
		this.sprite = Renderer.images.planets[Math.round(CustomMath.randomRange(0, Renderer.images.planets.length - 1))];
		this.movementType = movementType;
		this.dragging = false;

		if(movementType == MovementType.RANDOM)
		{
			this.generateRandomPosition();
		}
	}

	draw = () =>
	{
		Renderer.drawImage(this.sprite, this.position.x, this.position.y, this.diameter, this.diameter, Color.white, "center")
	}

	move = (target?: P5.Vector) =>
	{
		if(this.dragging)
		{
			this.position.x = Game.p5.mouseX;
			this.position.y = Game.p5.mouseY;
		}
		if(this.movementType == MovementType.RANDOM)
		{
			if(this.position.x == this.target.x && this.position.y == this.position.y)
				this.generateRandomPosition();

			this.position = CustomMath.moveTowardsVector(this.position, this.target, this.speed * Game.frameTime);

		}
		else
		{
			if(target == undefined)
			{
				throw "Target not specified";
			}

			this.position = CustomMath.moveTowardsVector(this.position, target, this.speed * Game.frameTime);
		}
	}

	generateRandomPosition = () =>
	{
		this.target = new Vector(
			CustomMath.randomRange(this.radius, Constants.screenDimensions.x - this.radius),
			CustomMath.randomRange(this.radius, Constants.screenDimensions.y - this.radius)
		);
	}
}

export enum MovementType {
	RANDOM = "random",
	LINKED = "linked"
}