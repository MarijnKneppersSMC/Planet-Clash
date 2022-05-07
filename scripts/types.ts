type Level = {
	name: string;
	nextLevel: number | "end";
}

type LevelData = {
	levels: Level[];
}