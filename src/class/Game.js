import Snake from "./Snake";

class Game extends Snake {
   constructor(apple) {
      super();
      this.score = 0;
      this.oldPlayerScore;
      this.speed = [80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30];
      this.selectorSpeed = 0;
      this.actualSpeed = this.speed[this.selectorSpeed];
      this.speedDecrement = 1;
      this.incScoreNumb = 10;
      this.foodImage = new Image();
      this.foodImage.src = apple;
      this.foodImage.style.width = `${this.canvasBox} px`;
      this.food = this.randomCoords();
      this.playerName = "";
      this.state = true;
   }
   /**
    * Random food coords
    * @returns {{x: number, y: number}}
    * @memberof Snake
    */
   randomCoords() {
      const xConv = this.canvas.width / this.canvasBox;
      const yConv = this.canvas.height / this.canvasBox;
      return {
         x: Math.floor(Math.random() * xConv) * this.canvasBox,
         y: Math.floor(Math.random() * yConv) * this.canvasBox,
      };
   }

   /**
    * Update after food collision (score, speed, food coords...)
    * @memberof Game
    */
   updateAfterFoodCollision() {
      this.score += this.incScoreNumb;
      this.food = this.randomCoords();
      if (this.score % 50 === 0) {
         this.actualSpeed = this.speed[++this.selectorSpeed];
      }
      // update
      this.displayScoreAndSpeed(this.actualSpeed, this.score);
      this.oldPlayerScore = this.getPlayerOldScore(this.playerName);
      this.addNewPlayerScore(this.score, this.playerName);
   }

   end() {}
   /**
    * Game start, display alert box for name and start loop after
    * @memberof Game
    */
   start() {
      this.windowBuildAndDisplay(
         {
            content: "",
            contentButton: "valider",
            contentLabel: "Entrer votre nom",
            classForDiv: "alertMessage",
            classForButton: "alertMessageBut",
         },
         this.mainHTML
      );
      this.addEvListener(".alertMessageBut", "click", this.initGame.bind(this));
   }
   /**
    * remove start window, render loop start
    * @memberof Game
    */
   initGame() {
      const playerName = document.getElementById("name").value;
      this.playerName = playerName;
      // remove start window
      const startBox = document.querySelector(".alertMessage");
      startBox.remove();
      this.canvas.style.display = "block";
      // render loop start
      this.renderLoop();
   }
   /**
    * Draw background game
    * @memberof Game
    */
   drawBackground() {
      this.drawRect(this.ctx, 0, 0, this.canvasWidth, this.canvasHeight, "#27ae4d");
   }
   /**
    * Render Game loop
    * @memberof Game
    */
   renderLoop() {
      const draw = () => {
         this.end();
         this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
         this.drawBackground();
         this.ctx.drawImage(this.foodImage, this.food.x, this.food.y);
         this.createSnake();
         if (!this.state) return;
         window.setTimeout(draw, this.actualSpeed);
      };
      draw();
   }
}

export default Game;
