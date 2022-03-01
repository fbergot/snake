import Snake from "./Snake";
import gameState from "./state/GameState";

class Game extends Snake {
   constructor() {
      super();
      this.score = 0;
      this.oldPlayerScore;
      this.speed = [80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25];
      this.selectorSpeed = 0;
      this.actualSpeed = this.speed[this.selectorSpeed];
      this.speedDecrement = 1;
      this.incScoreNumb = 10;
      this.playerName = "";
      this.state = gameState.currentStateOfGame;
      this.backgroundColor = "#5DB337";
      this.food = this.randomCoords();
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
    * Increment speed of snake
    * @memberof Game
    */
   incrementSpeed() {
      if (this.score % 50 === 0) {
         if (this.speed[this.selectorSpeed + 1]) {
            this.actualSpeed = this.speed[++this.selectorSpeed];
         }
      }
   }

   /**
    * Update after food collision (score, speed, food coords...)
    * @memberof Game
    */
   updateAfterFoodCollision() {
      this.sounds.eatFood.play();
      this.score += this.incScoreNumb;
      this.food = this.randomCoords();
      this.incrementSpeed();
      // update
      this.displayScoreAndSpeed(this.actualSpeed, this.score);
      this.addNewPlayerScore(this.score, this.playerName);
   }

   end() {
      gameState.handleState();
      this.state = gameState.currentStateOfGame;
      this.sounds.gameOver.play();
   }
   /**
    * Game start, display alert box for name and start loop after
    * @memberof Game
    */
   start() {
      this.windowBuildAndDisplay(
         {
            content: "",
            contentButton: "valider",
            contentLabel: "Entrez votre nom",
            classForDiv: "alertMessage",
            classForButton: "alertMessageBut",
         },
         this.mainHTML
      );
      this.addEvListener(".alertMessageBut", "click", this.initGame.bind(this));
      // this.builBestsScores(this.getItem("snakeScore"), this.mainHTML);
   }
   /**
    * remove start window, render loop start
    * @memberof Game
    */
   initGame() {
      const playerName = document.getElementById("name").value;
      this.playerName = playerName;
      // remove start window
      document.querySelector(".alertMessage").remove();
      this.canvas.style.display = "block";
      this.createBubbles(this.mainHTML);
      this.displayCanvas();
      this.oldPlayerScore = this.getPlayerOldScore(this.playerName) || 0;
      // render loop start
      this.renderLoop();
   }
   /**
    * Draw background game
    * @memberof Game
    */
   drawBackground() {
      this.drawRect(this.ctx, 0, 0, this.canvasWidth, this.canvasHeight, this.backgroundColor);
   }
   /**
    * Render Game loop
    * @memberof Game
    */

   renderLoop() {
      const draw = () => {
         this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
         this.drawBackground();
         this.ctx.drawImage(
            this.images.food,
            this.food.x,
            this.food.y,
            this.canvasBox,
            this.canvasBox
         );
         this.createSnake();
         if (this.state === "end") return;
         window.setTimeout(draw, this.actualSpeed);
      };
      draw();
   }
}

export default Game;
