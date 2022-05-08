import Planet from "./planet";

export type Level = {
	name: string;
	nextLevel: number | "end";
	duration: number;
	planets: Planet[];
}

export type LevelData = {
	levels: Level[];
}