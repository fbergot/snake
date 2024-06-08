import "./assets/CSS/style.css";
import Game from "./class/Game.js";
import { images } from "./function/imgBuilder.js";
import { sounds } from "./function/soundBuilder.js";
import GameAssetsDecorator from "./function/decorator/game_assets_dec.js";

const game = new (GameAssetsDecorator(Game, { images, sounds }))();
game.start();
