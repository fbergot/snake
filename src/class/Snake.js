import Canvas from "./Canvas";
import GameState from "./state/GameState";
import startingSnakeBuilder from "../function/startingSnakeBuilder";

class Snake extends Canvas {
   constructor() {
      super();
      this.newHead;
      this.headImg;
      this.direction = "RIGHT";
      this.snake = startingSnakeBuilder(7, 5, 5, this.canvasBox);
      this.i;
      this.oldHead = { x: this.snake[0].x, y: this.snake[0].y };
      this.addEvListener("html", "keydown", this.changeDirection.bind(this));
   }
   /**
    * Change snake direction
    * @param {Event} e
    * @memberof Snake
    */
   changeDirection(e) {
      switch (true) {
         case e.keyCode === 37 && this.direction !== "RIGHT":
            this.direction = "LEFT";
            break;
         case e.keyCode === 38 && this.direction !== "DOWN":
            this.direction = "UP";
            break;
         case e.keyCode === 39 && this.direction !== "LEFT":
            this.direction = "RIGHT";
            break;
         case e.keyCode === 40 && this.direction !== "UP":
            this.direction = "DOWN";
      }
   }

   /**
    * Assign good head img according to direction
    * @memberof Snake
    */
   headSnake() {
      switch (this.direction) {
         case "UP":
            this.headImg = this.images.snake.head.top;
            break;
         case "DOWN":
            this.headImg = this.images.snake.head.bottom;
            break;
         case "LEFT":
            this.headImg = this.images.snake.head.left;
            break;
         case "RIGHT":
            this.headImg = this.images.snake.head.right;
      }
   }

   /**
    * Painting the snake
    * @memberof Snake
    */
   updateSnake() {
      for (this.i = 0; this.i < this.snake.length; this.i++) {
         this.headSnake();
         this.ctx.drawImage(
            this.i === 0 ? this.headImg : this.images.snake.body,
            this.snake[this.i].x,
            this.snake[this.i].y,
            this.canvasBox,
            this.canvasBox
         );
      }
   }
   /**
    * Create and display the snake
    * @memberof Snake
    */
   createSnake() {
      this.updateSnake();
      // check if the snake hits the food
      if (this.oldHead.x === this.food.x && this.oldHead.y === this.food.y) {
         this.updateAfterFoodCollision();
      } else {
         this.snake.pop();
      }
      this.applyDirection();
      this.newHead = { x: this.oldHead.x, y: this.oldHead.y };
      // check if snake hits himself
      if (this.collision(this.oldHead, this.snake) || this.canvasSnakeLimit()) {
         // state = 'end'
         GameState.handleState();
         return;
      }
      this.snake.unshift(this.newHead);
   }

   /**
    * Apply snake move direction
    * @memberof Snake
    */
   applyDirection() {
      switch (this.direction) {
         case "LEFT":
            this.oldHead.x -= this.canvasBox;
            break;
         case "RIGHT":
            this.oldHead.x += this.canvasBox;
            break;
         case "UP":
            this.oldHead.y -= this.canvasBox;
            break;
         case "DOWN":
            this.oldHead.y += this.canvasBox;
      }
   }

   /**
    * give limits of game (x/y)
    * @memberof Snake
    */
   canvasSnakeLimit() {
      switch (true) {
         case this.newHead.x < 0:
            return true;
         case this.newHead.x > this.canvasWidth - this.canvasBox:
            return true;
         case this.newHead.y < 0:
            return true;
         case this.newHead.y > this.canvasHeight - this.canvasBox:
            return true;
      }
   }
   /**
    * Check if snake collision himself
    * @param {{x: number, y: number}} head newHead
    * @param {{x: number, y: number}[]} bodySnake snake body
    * @returns {boolean}
    * @memberof Snake
    */
   collision(head, bodySnake) {
      let i;
      for (i = 0; i < bodySnake.length; i++) {
         if (head.x == bodySnake[i].x && head.y == bodySnake[i].y) {
            return true;
         }
      }
      return false;
   }
}

export default Snake;
