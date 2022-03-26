import P5 from "p5";
import { vector2 } from "./vectors";

export default class Planet{

	position: P5.Vector;
	
	constructor(position: P5.Vector)
	{
		this.position = position;
	}
}