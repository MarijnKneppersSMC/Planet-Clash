import P5 from "p5";
import Game from "./main";

export default class Renderer {

	
	static generalImages: any = {};

	/**Initialize the renderer */
	static initiazeRenderer = () => {
		this.generalImages["background"] = this.loadImage("background");
		this.loadAssets();
	}

	/**Load all assets */
	static loadAssets = () => {
		this.generalImages["logo"] = this.loadImage("logo");
		this.generalImages["timer"] = this.loadImage("timer");
	}

	/**Draw image to the screen
	 * @param image The name of the image to be drawn to the screen. Can be both in generalImages and in planetImages.
	 * @param x The x position of the image on the screen
	 * @param y The y position of the image on the screen
	 */
	static drawImage = (image: string, x: number = 0, y: number = 0) => {
		
		if(this.generalImages[image] != undefined)
		{
			Game.p5.image(this.generalImages[image], x, y);
		}
		else
		{
			throw 'Image not found'
		}
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
	static drawText = (text: string, fontSize: number, xOffset: number, yOffset: number, color: P5.Vector, xAllignment: (P5.LEFT | P5.CENTER | P5.RIGHT) = "left", yAllignment: (P5.TOP | P5.CENTER | P5.BOTTOM) = "top"): void => {
		Game.p5.textAlign(xAllignment, yAllignment);
		Game.p5.textSize(fontSize);
		Game.p5.fill(color.x, color.y, color.z);
		Game.p5.text(text, xOffset, yOffset);
	}

	/**Load an image from the server. Should only be called at initialisation time to avoid game freezes
	 * @param image The name of the image
	 */
	static loadImage = (image: string): P5.Image => {
		return Game.p5.loadImage(`./images/${image}.png`);
	}
}