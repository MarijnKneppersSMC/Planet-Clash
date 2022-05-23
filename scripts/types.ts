import P5 from "p5";
import { MovementType } from "./planet";

export type PlanetData = {
	position: P5.Vector,
	radius: number,
	speed: number
}

export type Level = {
	name: string;
	nextLevel: number | "end";
	duration: number;
	movementType: MovementType;
	planets: PlanetData[];
}

export type LevelData = {
	levels: Level[];
}