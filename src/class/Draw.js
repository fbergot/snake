class Draw {
   /**
    * Draw rect in Canvas
    * @static
    * @param {CanvasRenderingContext2D} ctx
    * @param {number} x
    * @param {number} y
    * @param {number} x_length x length rect
    * @param {number} y_length y length rect
    * @param {string} color
    * @param {boolean} fill
    * @memberof Draw
    */
   static drawRect(ctx, x, y, x_length, y_length, color) {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, x_length, y_length);
   }
}

export default Draw;
