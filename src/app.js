import "./assets/CSS/style.css";
import Game from "./class/Game";
import { images } from "./function/imgBuilder";
import { sounds } from "./function/soundBuilder";
import GameAssetsDecorator from "./class/decorator/game_assets_dec";
import Ennemies from "./class/Ennemy/Ennemies";
import { imagesEnnemies } from "./function/imgBuilder";

const game = new (GameAssetsDecorator(Game, { images, sounds }))();

game.start();

new Ennemies(imagesEnnemies);
