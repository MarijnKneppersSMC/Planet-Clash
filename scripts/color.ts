import P5 from "p5";
import Game from "./main";

export default class Color {

    static green: P5.Color;
    static red: P5.Color;
    static grey: P5.Color;
    static white: P5.Color;

    static initializeColors = () =>
    {
        this.green = Game.p5.color(0, 228, 48);
        this.red = Game.p5.color(230, 41, 55);
        this.grey = Game.p5.color(130, 130, 130);
        this.white = Game.p5.color(255, 255, 255);
    }

}