import Color from "../color";
import Game from "../main";
import CustomMath from "../math";
import Planet, { MovementType } from "../planet";
import Renderer from "../renderer";
import SceneHandler, { SceneType } from "../scene";
import { LevelData, Level, PlanetData } from "../types"
import { Vector } from "p5";


export default class LevelScreen {
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
			SceneHandler.initializeScene(SceneType.ENDING);
			return;
		}

		this.currentLevel = this.levelData.levels[Game.level - 1];

		this.timeLeft = this.currentLevel.duration;

		this.planets = [];

		for (let i: number = 0; i < this.currentLevel.planets.length; i++) {
			let planet: PlanetData = this.currentLevel.planets[i];
			this.planets.push(new Planet(planet.position, planet.radius, planet.speed, this.currentLevel.movementType));
		}
	}

	static draw() {
		for (let i: number = 0; i < this.planets.length; i++) {
			this.planets[i].draw();
		}

		Renderer.drawText(`Level ${Game.level} - ${this.currentLevel.name}`, 15, 1, 1, Color.white, "left", "top");
		Renderer.drawImage(Renderer.images.timer, 0, 25);
		Renderer.drawText(this.timeLeft.toFixed(1).toString(), 15, 32, 28, Color.white, "left", "top");
	}

	static update() {
		this.timeLeft -= Game.frameTime;

		if (this.timeLeft <= 0) {
			if (this.currentLevel.nextLevel == "end") {
				Game.success = true;
				SceneHandler.initializeScene(SceneType.ENDING);
				return;
			}

			Game.level += 1;

			SceneHandler.initializeScene(SceneType.LEVEL);
		}

		for (let i: number = 0; i < this.planets.length; i++) {
			if (this.currentLevel.movementType == MovementType.RANDOM) {
				this.planets[i].move();
			}
			else {
				this.planets[i].move(this.planets[CustomMath.clampWithOverflow(i + 2, 0, 3)].position);
			}
		}

		for (let i: number = 0; i < this.planets.length; i++) {
			for (let j: number = 0; j < this.planets.length; j++) {
				if (i == j) {
					continue;
				}

				if (CustomMath.checkCircleCollision(this.planets[i].position, this.planets[i].radius, this.planets[j].position, this.planets[j].radius)) {
					Game.success = false;
					SceneHandler.initializeScene(SceneType.ENDING);
				}
			}
		}
	}

	static touchStarted() {
		if (Game.dragging)
			return;

		for (let i: number = 0; i < this.planets.length; i++) {
			let planet: Planet = this.planets[i];
			if (CustomMath.checkCirclePointCollision(planet.position, planet.radius, new Vector(Game.p5.mouseX, Game.p5.mouseY))) {
				this.planets[i].dragging = true;
				Game.draggedPlanetIndex = i;
				break;
			}
		}
	}

	static touchEnded() {
		if (Game.draggedPlanetIndex != -1) {
			this.planets[Game.draggedPlanetIndex].dragging = false;
			Game.draggedPlanetIndex = -1;
			Game.dragging = false;
		}
	}
}