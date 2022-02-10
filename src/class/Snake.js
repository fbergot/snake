class Snake {
   constructor(
      ctx,
      canvasBox,
      DrawClass,
      headColor,
      bodyColor,
      incrementScore,
      getFoodCoords,
      applyRandomCoordsFood
   ) {
      this.ctx = ctx;
      this.canvasBox = canvasBox;
      this.drawClass = DrawClass;
      this.headColor = headColor;
      this.bodyColor = bodyColor;
      this.incrementScore = incrementScore;
      this.getFoodCoords = getFoodCoords;
      this.applyRandomCoordsFood = applyRandomCoordsFood;
      this.snake = [
         {
            x: canvasBox * 5,
            y: canvasBox * 8,
         },
      ];
      this.oldHeadX = this.snake[0].x;
      this.oldHeadY = this.snake[0].y;
      this.newHead;
      this.direction;
      document.addEventListener("keydown", this.changeDirection.bind(this));
   }

   /**
    * Change snake direction
    * @param {Event} e
    * @memberof Snake
    */
   changeDirection(e) {
      if (e.keyCode === 37 && this.direction != "RIGHT") {
         this.direction = "LEFT";
      } else if (e.keyCode === 38 && this.direction != "DOWN") {
         this.direction = "UP";
      } else if (e.keyCode === 39 && this.direction != "LEFT") {
         this.direction = "RIGHT";
      } else if (e.keyCode === 40 && this.direction != "UP") {
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
         color = i == 0 ? this.headColor : this.bodyColor;
         this.drawClass.drawRect(
            this.ctx,
            this.snake[i].x,
            this.snake[i].y,
            this.canvasBox,
            this.canvasBox,
            color
         );
      }
      // check if snake touch food
      if (
         this.oldHeadX === this.getFoodCoords().x &&
         this.oldHeadY === this.getFoodCoords().y
      ) {
         this.incrementScore();
         this.applyRandomCoordsFood();
      } else {
         this.snake.pop();
      }
      // move snake
      if (this.direction === "LEFT") {
         this.oldHeadX -= this.canvasBox;
      }
      if (this.direction === "UP") {
         this.oldHeadY -= this.canvasBox;
      }
      if (this.direction === "RIGHT") {
         this.oldHeadX += this.canvasBox;
      }
      if (this.direction === "DOWN") {
         this.oldHeadY += this.canvasBox;
      }
      this.newHead = { x: this.oldHeadX, y: this.oldHeadY };
      this.snake.unshift(this.newHead);
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
