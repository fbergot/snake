import Draw from "../Draw";

class Ennemies extends Draw {
   constructor({ storm, zombie }, ctx, { width, height }) {
      super();
      this.ctx = ctx;
      this.canvasW = width;
      this.canvasH = height;
      this.stormImg = storm;
      this.zombieImg = zombie;
      this.stormPositions = { x: 100, y: 120 };
      this.zombiePositions = { x: 50, y: 50 };
   }
   move() {}

   update(img, positions, canvasBox) {
      this.drawImg(this.ctx, positions.x, positions.y, canvasBox, canvasBox, img);
   }

   draw(canvasBox) {
      this.update(this.stormImg, this.stormPositions, canvasBox);
   }
}

export default Ennemies;
