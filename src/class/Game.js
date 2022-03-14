import Snake from "./Snake";
import GameState from "./state/GameState";
import startingSnakeBuilder from "../function/startingSnakeBuilder";
import SnakeBorder from "../assets/picture/snakeBorder.png";
import SpeedManager from "./SpeedManager";
import LocalStorage from "./LocalStorage";

class Game extends Snake {
   constructor() {
      super();
      this.score = 0;
      this.totalFood = 0;
      this.oldPlayerScore;
      this.incScoreNumb = 10;
      this.playerName = "";
      this.food = this.randomCoords();
   }
   /**
    * Random coords
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
    * Manage the events after snake eat food
    * @returns {string | number | null}
    * @memberof Game
    */
   gameEvents() {
      const state = SpeedManager.incrementSpeed(this.totalFood);
      if (state) {
         this.sounds.eatFood.play();
         this.sounds.accSpeed.play();
      }
      return state;
   }
   /**
    * Update after food collision (score, speed, food coords...)
    * @memberof Game
    */
   updateAfterFoodCollision() {
      this.score += this.incScoreNumb;
      this.food = this.randomCoords();
      this.displayScoreAndFood(++this.totalFood, this.score);
      this.gameEvents() ? null : this.sounds.eatFood.play();
   }
   /**
    * When player lose
    * @memberof Game
    */
   end() {
      if (this.score !== 0) this.addNewPlayerScore(this.score, this.playerName);
      this.sounds.gameOver.play();
      this.windowBuildAndDisplay(
         {
            content: `<p>Perdu ${this.playerName} !</p>
                      <p>Votre score: ${this.score} points</p>
                     `,
            contentButton: "Rejouer",
            contentLabel: null,
            classContainerPopup: ["alertEndMessage", "alertMessage"],
            classForButton: "endMessageBut",
         },
         document.body
      );
      this.$(".genContainer").classList.add("blurBody");
      this.$(".endMessageBut").removeAttribute("disabled");
      this.addEvListener(".endMessageBut", "click", this.restart.bind(this));
      this.buildBestsScores(
         LocalStorage.getItem("snakeScore"),
         this.$(".alertEndMessage"),
         this.playerName
      );
   }
   /**
    * Game start, display alert box for name and start loop after
    * @memberof Game
    */
   start() {
      this.windowBuildAndDisplay(
         {
            content: "",
            contentButton: "Validez",
            contentLabel: "Entrez votre prénom",
            classContainerPopup: ["alertMessage"],
            classForButton: "alertMessageBut",
         },
         this.mainHTML
      );
      this.addEvListener("input", "input", (e) => {
         if (e.target.value.length >= 2) {
            this.$(".alertMessageBut").removeAttribute("disabled");
         }
         if (e.target.value.length < 2) {
            this.$(".alertMessageBut").setAttribute("disabled", "true");
         }
      });
      this.addEvListener(".alertMessageBut", "click", this.initGame.bind(this));
   }
   /**
    * Restart game
    * @memberof Game
    */
   restart() {
      SpeedManager.selectorSpeed = 1;
      this.$(".alertEndMessage").remove();
      this.$(".genContainer").classList.remove("blurBody");
      // re-init snake properties
      this.score = 0;
      this.totalFood = 0;
      this.direction = "RIGHT";
      this.snake = startingSnakeBuilder(7, 5, 10, this.canvasBox);
      this.oldHead = { x: this.snake[0].x, y: this.snake[0].y };
      this.newHead = { x: this.oldHead.x, y: this.oldHead.y };
      this.food = this.randomCoords();
      this.displayScoreAndFood(this.totalFood, this.score);
      // toggle state & run game loop
      GameState.handleState();
      this.renderLoop();
   }
   /**
    * remove start window, render loop start
    * @memberof Game
    */
   initGame() {
      const playerName = this.$("#name").value;
      this.playerName = playerName.toLowerCase();
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
    * Stop the render loop
    * @returns
    * @memberof Game
    */
   stopRenderLoop() {
      if (GameState.currentStateOfGame === "end") {
         this.end();
         window.clearTimeout(this.timer);
         this.timer = null;
         return true;
      }
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
         if (this.stopRenderLoop()) return;
         if (!this.timer) {
            this.timer = window.setTimeout(draw, SpeedManager.currentSpeed);
         } else {
            window.setTimeout(draw, SpeedManager.currentSpeed);
         }
      };
      draw();
   }
}

export default Game;
