import P5 from "p5";

export default class Planet{

	position: P5.Vector;
	movementType: MovementType;
	
	
	constructor(position: P5.Vector)
	{
		this.position = position;
	}
}

enum MovementType {
	RANDOM,
	LINKED
}