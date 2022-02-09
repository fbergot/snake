class Snake {
   constructor(ctx, canvasBox, DrawClass, headColor, bodyColor, apple, changeScore) {
      this.ctx = ctx;
      this.canvasBox = canvasBox;
      this.drawClass = DrawClass;
      this.headColor = headColor;
      this.bodyColor = bodyColor;
      this.foodImage = new Image();
      this.foodImage.src = apple;
      this.changeScore = changeScore;
      this.food = this.randomFood();
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
    * Random food coords
    * @returns {{x: number, y: number}}
    * @memberof Snake
    */
   randomFood() {
      return {
         x: Math.floor(2 + Math.random() * 20) * this.canvasBox,
         y: Math.floor(5 + Math.random() * 20) * this.canvasBox,
      };
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
      this.drawFood(this.food);
      let color = "";
      for (let i = 0; i < this.snake.length; i++) {
         color = i == 0 ? this.headColor : this.bodyColor;
         this.drawClass.drawRect(
            this.ctx,
            this.snake[i].x,
            this.snake[i].y,
            this.canvasBox,
            this.canvasBox,
            color,
            "fill"
         );
      }
      // check if snake touch food
      if (this.oldHeadX === this.food.x && this.oldHeadY === this.food.y) {
         this.changeScore(10);
         this.food = this.randomFood();
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
    * Draw the food in canvas according to coords
    * @param {{x: number, y: number}} foodCoords
    * @memberof Snake
    */
   drawFood(foodCoords) {
      this.ctx.drawImage(this.foodImage, foodCoords.x, foodCoords.y);
   }

   /**
    * Check if snake collision himself
    * @param {{x: number, y: number}} head newHead
    * @param {{x: number, y: number}[]} snake snake body
    * @returns {boolean}
    * @memberof Snake
    */
   collision(head, snake) {
      let i;
      for (i = 0; i < snake.length; i++) {
         if (head.x == snake[i].x && head.y == snake[i].y) {
            return true;
         }
      }
      return false;
   }
}

export default Snake;
