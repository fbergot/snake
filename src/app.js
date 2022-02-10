import "./assets/CSS/style.css";
import Game from "./class/Game";
import Draw from "./class/Draw";
import Snake from "./class/Snake";
import Apple from "./assets/picture/apple.png";

const game = new Game(Draw, Snake, Apple);

game.start();
