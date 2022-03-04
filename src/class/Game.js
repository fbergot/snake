import Snake from "./Snake";
import GameState from "./state/GameState";
import SnakeBorder from "../assets/picture/snakeBorder.png";

class Game extends Snake {
   constructor() {
      super();
      this.score = 0;
      this.totalFood = 0;
      this.oldPlayerScore;
      this.speed = [90, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25];
      this.selectorSpeed = 0;
      this.actualSpeed = this.speed[this.selectorSpeed];
      this.speedDecrement = 1;
      this.incScoreNumb = 10;
      this.playerName = "";
      this.state = GameState.currentStateOfGame;
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
      this.displayScoreAndFood(++this.totalFood, this.score);
      this.addNewPlayerScore(this.score, this.playerName);
   }

   end() {
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
            classContainerPopup: "alertMessage",
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
      const playerName = this.$("#name").value;
      this.playerName = playerName;
      // remove start window
      this.$(".alertMessage").remove();
      this.canvas.style.display = "block";
      this.createBubbles(this.$(".genContainer"));
      this.displayCanvas();
      this.$("header img").src = SnakeBorder;
      document.body.classList.add("bodyJustify-center");
      this.oldPlayerScore = this.getPlayerOldScore(this.playerName) || 0;
      // render loop start
      this.renderLoop();
   }
   /**
    * Render Game loop
    * @memberof Game
    */
   renderLoop() {
      const draw = () => {
         this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
         this.ctx.drawImage(
            this.images.food,
            this.food.x,
            this.food.y,
            this.canvasBox,
            this.canvasBox
         );
         this.createSnake();
         if (GameState.currentStateOfGame === "end") return void this.end();
         window.setTimeout(draw, this.actualSpeed);
      };
      draw();
   }
}

export default Game;
