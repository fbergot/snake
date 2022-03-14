import "./assets/CSS/style.css";
import Game from "./class/Game";
import { images } from "./function/imgBuilder";
import { sounds } from "./function/soundBuilder";
import GameAssetsDecorator from "./function/decorator/game_assets_dec";

if (window.innerWidth > 1200) {
   const game = new (GameAssetsDecorator(Game, { images, sounds }))();
   game.start();
} else {
   alert(
      "Ce jeu doit être lancé sur un desktop (>1200px) car nous avons besoin des touches de direction pour jouer !"
   );
}
