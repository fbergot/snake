import Utils from "./Utils";

class Draw extends Utils {
   constructor() {
      super();
   }
   /**
    * Draw rect in Canvas
    * @param {CanvasRenderingContext2D} ctx
    * @param {number} x
    * @param {number} y
    * @param {number} x_length x length rect
    * @param {number} y_length y length rect
    * @param {string} color
    * @param {boolean} fill
    * @memberof Draw
    */
   drawRect(ctx, x, y, x_length, y_length, color) {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, x_length, y_length);
   }

   /**
    * Draw image on Canvas
    * @param {CanvasRenderingContext2D} ctx
    * @param {number} x
    * @param {number} y
    * @param {number} x_length
    * @param {number} y_length
    * @param {HTMLImageElement} img
    * @memberof Draw
    */
   drawImg(ctx, x, y, x_length, y_length, img) {
      ctx.drawImage(img, x, y, x_length, y_length);
   }
}

export default Draw;
