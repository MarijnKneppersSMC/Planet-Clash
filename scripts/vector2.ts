export default class vector2
	{
		x: number;
		y: number;
		
		constructor(x: number, y: number)
		{
			this.x = x;
			this.y = y;
		}

		moveTowards(target: vector2, maxDistance: number): void {
			let xVector: number = target.x - this.x;
			let yVector: number = target.y - this.y;

			let sqDist: number = xVector * xVector + yVector * yVector;

			if (sqDist == 0 || (maxDistance >= 0 && sqDist <= maxDistance * maxDistance))
			{
				this.x = target.x;
				this.y = target.y;
			}

			let dist = Math.sqrt(sqDist);

			this.x = this.x + xVector / dist * maxDistance;
			this.y = this.y + yVector / dist * maxDistance;
		}
	}