import p5, { Vector } from "p5";
import Constants from "./constants";
import Game from "./main";

export default class CustomMath
{
	static moveTowardsVector = (position: Vector, target: Vector, maxDistance: number): void => {
		let xVector: number = target.x - position.x;
		let yVector: number = target.y - position.y;
	
		let sqDist: number = xVector * xVector + yVector * yVector;
	
		if (sqDist == 0 || (maxDistance >= 0 && sqDist <= maxDistance * maxDistance)) {
			position.x = target.x;
			position.y = target.y;
		}
	
		let dist = Math.sqrt(sqDist);
	
		position.x = position.x + xVector / dist * maxDistance;
		position.y = position.y + yVector / dist * maxDistance;
	}

	static clampToScreen = (position: Vector, radius: number): Vector =>
	{
		
		if(position.x < radius)
		{
			position.x = radius;
		}
		else if(position.x > Constants.screenDimensions.x - radius)
		{
			position.x = Constants.screenDimensions.x - radius;
		}

		if(position.y < radius)
		{
			position.y = radius;
		}
		else if(position.y > Constants.screenDimensions.y - radius)
		{
			position.y = Constants.screenDimensions.y - radius;
		}

		return position;
	}
}