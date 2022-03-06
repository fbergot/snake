/**
 *
 * Build snake
 * @param {number} x_start
 * @param {number} y_start
 * @param {number} lengthOfBodySnake
 * @param {number} canvasBox
 * @returns {{x: number, y: number}[]}
 */
function startingSnakeBuilder(x_start, y_start, lengthOfBodySnake, canvasBox) {
   const bodyOfSnake = [{ x: canvasBox * x_start, y: canvasBox * y_start }];
   let i;
   for (i = 1; i <= lengthOfBodySnake; i++) {
      bodyOfSnake.push({ x: canvasBox * --x_start, y: canvasBox * y_start });
   }
   return bodyOfSnake;
}

export default startingSnakeBuilder;
