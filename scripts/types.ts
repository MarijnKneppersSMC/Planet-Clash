import P5 from "p5";

export type PlanetData = {
	position: P5.Vector,
	radius: number
}

export type Level = {
	name: string;
	nextLevel: number | "end";
	duration: number;
	planets: PlanetData[];
}

export type LevelData = {
	levels: Level[];
}