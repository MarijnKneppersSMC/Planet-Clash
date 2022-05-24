import P5 from "p5";
import Color from "./color";
import Game from "./main";

type Images = {
	background: P5.Image,
	logo: P5.Image,
	timer: P5.Image,
	planets: P5.Image[],
	fullscreen: P5.Image
}

const planets: string[] = ["B", "Blue planet1", "C", "D", "E", "F", "G", "H", "Jupiter", "Mars", "Mercury", "Neptune", "orange planet1", "Saturn", "Uranus", "Venus"];

export default class Renderer {

	static images: Images = {
		background: undefined,
		logo: undefined,
		timer: undefined,
		planets: [],
		fullscreen: undefined
	};

	static preload() {
		this.images.background = this.loadImage("background");
		this.images.logo = this.loadImage("logo");
		this.images.timer = this.loadImage("timer");

		for (let i: number = 0; i < planets.length; i++) {
			this.images.planets.push(this.loadImage(planets[i]));
		}

		this.images.fullscreen = this.loadImage("Fullscreen");

	}

	/**Draw image to the screen
	 * @param image The name of the image to be drawn to the screen. Can be both in generalImages and in planetImages.
	 * @param x The x position of the image on the screen
	 * @param y The y position of the image on the screen
	 */
	static drawImage = (image: P5.Image, x: number = 0, y: number = 0, width: number = image.width, height: number = image.height, color: P5.Color = Color.white, imageMode: P5.IMAGE_MODE = "corner") => {

		Game.p5.fill(color);
		Game.p5.imageMode(imageMode)
		Game.p5.image(image, x, y, width, height);
	}

	/**Draw text to the screen
	 * @param text The text to draw to the screen
	 * @param fontSize The size for the text
	 * @param xOffset The x offset from the chosen allignment
	 * @param yOffset The y offset from the chosen allignment
	 * @param color The color at which the text should be drawn
	 * @param xAllignment The allignment on the x-axis
	 * @param yAllignment The allignment on the y-axis
	 */
	static drawText = (text: string, fontSize: number, xOffset: number, yOffset: number, color: P5.Color, xAllignment: (P5.LEFT | P5.CENTER | P5.RIGHT) = "left", yAllignment: (P5.TOP | P5.CENTER | P5.BOTTOM) = "top"): void => {
		Game.p5.textAlign(xAllignment, yAllignment);
		Game.p5.textSize(fontSize);
		Game.p5.fill(color);
		Game.p5.text(text, xOffset, yOffset);
	}

	/**Load an image from the server. Should only be called at initialisation time to avoid game freezes
	 * @param image The name of the image
	 */
	static loadImage = (image: string): P5.Image => {
		return Game.p5.loadImage(`./images/${image}.png`);
	}
}