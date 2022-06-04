import { Vector } from "p5";
import Constants from "./constants";

export default class CustomMath {
	static moveTowardsVector = (position: Vector, target: Vector, maxDistance: number): Vector => {

		let xVector: number = target.x - position.x;
		let yVector: number = target.y - position.y;

		let sqDist: number = xVector * xVector + yVector * yVector;

		if (sqDist == 0 || (maxDistance >= 0 && sqDist <= maxDistance * maxDistance)) {
			return target;
		}

		let dist = Math.sqrt(sqDist);

		let result: Vector = new Vector();

		result.x = position.x + xVector / dist * maxDistance;
		result.y = position.y + yVector / dist * maxDistance;
		return result;
	}

	static clampToScreen = (position: Vector, radius: number): Vector => {

		if (position.x < radius) {
			position.x = radius;
		}
		else if (position.x > Constants.screenDimensions.x - radius) {
			position.x = Constants.screenDimensions.x - radius;
		}

		if (position.y < radius) {
			position.y = radius;
		}
		else if (position.y > Constants.screenDimensions.y - radius) {
			position.y = Constants.screenDimensions.y - radius;
		}

		return position;
	}

	static randomRange(min: number, max: number) {
		return Math.random() * (max - min) + min;
	}

	static checkCircleCollision = (pos1: Vector, radius1: number, pos2: Vector, radius2: number): boolean => {
		return Math.abs((pos1.x - pos2.x) * (pos1.x - pos2.x) + (pos1.y - pos2.y) * (pos1.y - pos2.y)) < (radius1 + radius2) * (radius1 + radius2)
	}

	static checkCirclePointCollision = (pos1: Vector, radius: number, pos2: Vector): boolean => {
		return this.checkCircleCollision(pos1, radius, pos2, 0);
	}

	static checkSquarePointCollision = (pos1: Vector, width: number, height: number, pos2: Vector): boolean => {
		if (pos2.x >= pos1.x &&
			pos2.x <= pos1.x + width &&
			pos2.y >= pos1.y &&
			pos2.y <= pos2.y + height) {
			return true
		}

		return false;
	}

	static clampWithOverflow = (index: number, min: number, max: number): number => {
		let result: number = index;

		if (result < min) {
			result = min;
		}

		while (result > max) {
			result -= max + 1;
		}

		return result;
	}
}