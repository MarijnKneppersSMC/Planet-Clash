import Color from "../color";
import Game from "../main";
import Planet from "../planet";
import Renderer from "../renderer";
import { initializeScene, SceneType } from "../scene";
import { LevelData, Level, PlanetData } from "../types"


export default class LevelScreen extends Screen {
	static levelData: LevelData;
	static currentLevel: Level;

	static timeLeft: number;

	static planets: Planet[];

	static preload() {

		this.levelData = Game.p5.loadJSON("./data/levels.json") as LevelData;

	}

	static initialize() {

		if (Game.level > this.levelData.levels.length) {
			Game.success = true;
			initializeScene(SceneType.ENDING);
			return;
		}

		this.currentLevel = this.levelData.levels[Game.level - 1];

		this.timeLeft = this.currentLevel.duration;

		this.planets = [];

		for(let i: number = 0; i < this.currentLevel.planets.length; i++)
		{
			let planet: PlanetData = this.currentLevel.planets[i];
			this.planets.push(new Planet(planet.position, planet.radius));
		}
	}

	static draw() {
		Renderer.drawText(`Level ${Game.level} - ${this.currentLevel.name}`, 20, 1, 1, Color.white, "left", "top");
		Renderer.drawImage(Renderer.images.timer, 0, 20);
		Renderer.drawText(this.timeLeft.toFixed(1).toString(), 20, 32, 28, Color.white, "left", "top");

		for(let i: number = 0; i < this.planets.length; i++)
		{
			this.planets[i].draw();
		}
	}

	static update() {
		this.timeLeft -= Game.frameTime;

		if (this.timeLeft <= 0) {
			if (this.currentLevel.nextLevel = "end") {
				Game.success = true;
				initializeScene(SceneType.ENDING);
				return;
			}

			Game.level += 1;

			initializeScene(SceneType.LEVEL);
		}
	}
}