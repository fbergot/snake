import Canvas from "./Canvas";

class Snake extends Canvas {
   constructor() {
      super();
      this.newHead;
      this.direction;
      this.snake = [{ x: this.canvasBox * 5, y: this.canvasBox * 8 }];
      this.oldHead = { x: this.snake[0].x, y: this.snake[0].y };
      // this.oldHeadX = this.snake[0].x;
      // this.oldHeadY = this.snake[0].y;
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
    * Create and display the snake
    * @memberof Snake
    */
   createSnake() {
      let color = "";
      for (let i = 0; i < this.snake.length; i++) {
         color = i == 0 ? "red" : "grey";
         this.drawRect(
            this.ctx,
            this.snake[i].x,
            this.snake[i].y,
            this.canvasBox,
            this.canvasBox,
            color
         );
      }
      // check if snake touch food
      if (this.oldHead.x === this.food.x && this.oldHead.y === this.food.y) {
         this.updateAfterFoodCollision();
      } else {
         this.snake.pop();
      }
      this.applyDirection();
      this.newHead = { x: this.oldHead.x, y: this.oldHead.y };
      if (this.collision(this.oldHead, this.snake)) {
         alert("ok");
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
