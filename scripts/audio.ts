import p5 from "p5";
import Game from "./main"

type AudioClips = {
	ambient: p5.MediaElement
}

export default class Audio {

	static audioClips: AudioClips = {
		ambient: undefined
	};

	static load() {
		this.audioClips.ambient = this.loadAudio("ambient.ogg", false, true);
	}

	static loadAudio(fileName: string, autoplay: boolean = false, loop: boolean = false) {
		let audio: p5.MediaElement = Game.p5.createAudio(`./audio/${fileName}`).autoplay(autoplay)

		if (loop) {
			audio.loop();
		}

		return audio;
	}

	static playAudio = (clip: p5.MediaElement) => {
		clip.play();
	}
}