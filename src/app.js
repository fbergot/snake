import "./assets/CSS/style.css";
import Game from "./class/Game";
import LocalStorage from "./class/LocalStorage";
import { images } from "./function/imgBuilder";
import { sounds } from "./function/soundBuilder";
import GameAssetsDecorator from "./function/decorator/game_assets_dec";

LocalStorage.removeItem("snake_token");

const game = new (GameAssetsDecorator(Game, { images, sounds }))();

export const started = () => {
   game.start();
};

started();
