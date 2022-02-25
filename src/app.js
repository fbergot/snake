import "./assets/CSS/style.css";
import Game from "./class/Game";
import { images } from "./function/imgBuilder";
import { sounds } from "./function/soundBuilder";
import game_assets_deco from "./class/decorator/game_assets_dec";

const game = game_assets_deco(Game, {images, sounds});

game.start();
