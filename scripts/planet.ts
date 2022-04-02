import P5 from "p5";

export default class Planet{

	position: P5.Vector;
	
	constructor(position: P5.Vector)
	{
		this.position = position;
	}
}