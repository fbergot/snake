import { messagesAndErrors } from "../globalCodeConfig/messagesAnderrors";
const errors = messagesAndErrors.startingSakeBuilder;

/**
 * Build snake
 * @param {number} x_start
 * @param {number} y_start
 * @param {number} lengthOfBodySnake
 * @param {number} canvasBox
 * @returns {{x: number, y: number}[]}
 */
function startingSnakeBuilder(x_start, y_start, lengthOfBodySnake, canvasBox) {
   if (lengthOfBodySnake <= 0) throw Error(errors.badLength);
   if (canvasBox === 0) throw Error(errors.badWidthOfCanvasBox);

   const bodyOfSnake = [];
   let i;

   for (i = 1, x_start; i <= lengthOfBodySnake; i++, x_start--) {
      bodyOfSnake.push({ x: canvasBox * x_start, y: canvasBox * y_start });
   }
   return bodyOfSnake;
}

export default startingSnakeBuilder;
