import "./assets/CSS/style.css";
import Game from "./class/Game";
import { images } from "./function/imgBuilder";
import { sounds } from "./function/soundBuilder";
import GameAssetsDecorator from "./function/decorator/game_assets_dec";

const game = new (GameAssetsDecorator(Game, { images, sounds }))();
game.start();
