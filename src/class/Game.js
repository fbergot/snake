import Snake from "./Snake";
import GameState from "./state/GameState";
import startingSnakeBuilder from "../function/startingSnakeBuilder";
import SnakeBorder from "../assets/picture/snakeBorder.png";

class Game extends Snake {
   constructor() {
      super();
      this.score = 0;
      this.totalFood = 0;
      this.oldPlayerScore;
      this.speed = {
         1: 100,
         2: 90,
         3: 80,
         4: 70,
      };
      this.levelSpeedSelector = 1;
      this.speedDecrement = 1;
      this.incScoreNumb = 10;
      this.playerName = "";
      // this.state = GameState.currentStateOfGame;
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
      if (this.totalFood % 2 === 0 && this.speed[this.levelSpeedSelector + 1]) {
         ++this.levelSpeedSelector;
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
      this.windowBuildAndDisplay(
         {
            content: "Vous avez perdu :(",
            contentButton: "Rejouer",
            contentLabel: null,
            classContainerPopup: ["alertEndMessage", "alertMessage"],
            classForButton: "endMessageBut",
         },
         document.body
      );
      this.$(".genContainer").classList.add("blurBody");
      this.addEvListener(".endMessageBut", "click", this.restart.bind(this));
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
            classContainerPopup: ["alertMessage"],
            classForButton: "alertMessageBut",
         },
         this.mainHTML
      );
      this.addEvListener(".alertMessageBut", "click", this.initGame.bind(this));
      // this.builBestsScores(this.getItem("snakeScore"), this.mainHTML);
   }

   /**
    * Restart game
    * @memberof Game
    */
   restart() {
      this.$(".alertEndMessage").remove();
      this.$(".genContainer").classList.remove("blurBody");
      this.snake = startingSnakeBuilder(7, 5, 5, this.canvasBox);
      this.score = 0;
      this.totalFood = 0;
      this.newHead;
      this.headImg;
      this.direction = "RIGHT";
      this.oldHead = { x: this.snake[0].x, y: this.snake[0].y };
      this.newHead = { x: this.oldHead.x, y: this.oldHead.y };
      this.food = this.randomCoords();
      this.displayScoreAndFood(this.totalFood, this.score);
      GameState.handleState();
      this.renderLoop();
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
         if (GameState.currentStateOfGame === "end") {
            this.end();
            window.clearTimeout(this.timer);
            this.timer = null;
            return;
         }
         if (!this.timer) {
            this.timer = window.setTimeout(draw, this.speed[this.levelSpeedSelector]);
         } else {
            window.setTimeout(draw, this.speed[this.levelSpeedSelector]);
         }
      };
      draw();
   }
}

export default Game;
