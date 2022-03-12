import Draw from "../Draw";

class Ennemies extends Draw {
   constructor({ storm, zombie }, thisArgGame) {
      super();
      this.thisArgGame = thisArgGame;
      this.ctx = thisArgGame.ctx;
      this.stormImg = storm;
      this.zombieImg = zombie;
      this.stormPositions = { x: thisArgGame.canvasBox * 5, y: thisArgGame.canvasBox * 5 };
      this.zombiePositions = { x: 50, y: 50 };
      this._displayEnnemy = false;
   }

   set displayEnnemy(value) {
      this._displayEnnemy = value;
   }

   get displayEnnemy() {
      return this._displayEnnemy;
   }

   collisionSnakeFood() {
      if (
         this.stormPositions.x === this.thisArgGame.newHead.x &&
         this.stormPositions.y === this.thisArgGame.newHead.y
      ) {
         alert("ok");
      }
   }

   update(img, positions, canvasBox) {
      this.drawImg(this.ctx, positions.x, positions.y, canvasBox, canvasBox, img);
   }

   draw(canvasBox) {
      this.collisionSnakeFood();
      this.update(this.stormImg, this.stormPositions, canvasBox);
   }
}

export default Ennemies;
