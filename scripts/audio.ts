import P5 from "p5"
import Game from "./main"

export default class Audio
{
	static audioClips: any = {};

	static intializeAudio = () =>
	{
		this.audioClips.ambient = Game.p5.createAudio("./audio/ambient.ogg");

		this.audioClips.ambient.loop();
	}

	static playAudio = (clip: string) =>
	{
		this.audioClips[clip].play();
	}
}