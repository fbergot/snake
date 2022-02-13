import "./assets/CSS/style.css";
import Game from "./class/Game";
import Food from "../src/assets/picture/hamb2.png";
import GameOver from "../src/assets/audio/gameOver.mp3";
import EatFood from "../src/assets/audio/eatFood.mp3";

const game = new Game(Food, GameOver, EatFood);

game.start();
