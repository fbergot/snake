import GameOverSound from "../assets/audio/end.mp3";
import EatFood from "../assets/audio/tone.mp3";
import AccSpeed from "../assets/audio/Califourchon.mp3";
import BossSound from "../assets/audio/eatFood.mp3";

/**
 * Build new audio HTML
 * @param {string} path
 * @returns {HTMLAudioElement}
 */
function soundBuilder(path, volume) {
   const audio = new Audio(path);
   audio.volume = volume;
   return audio;
}

export const sounds = {
   gameOver: soundBuilder(GameOverSound, 1),
   eatFood: soundBuilder(EatFood, 1),
   accSpeed: soundBuilder(AccSpeed, 1),
   bossSound: soundBuilder(BossSound, 1),
};
