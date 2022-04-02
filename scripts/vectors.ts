import { Vector } from "p5";


export const moveTowards = (position: Vector, target: Vector, maxDistance: number): void => {
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