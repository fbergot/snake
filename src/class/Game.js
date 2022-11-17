import Snake from "./Snake";
import GameState from "./state/GameState";
import startingSnakeBuilder from "../function/startingSnakeBuilder";
import SnakeBorder from "../assets/picture/snakeBorder.png";
import SpeedManager from "./SpeedManager";
import LocalStorage from "./LocalStorage";
import PadManager from "./PadManager";
import EatFood from "../assets/audio/tone.mp3";

class Game extends Snake {
   constructor() {
      super();
      this.score = 0;
      this.totalFood = 0;
      this.oldPlayerScore;
      this.incScoreNumb = 10;
      this.playerName = "";
      this.food = this.randomCoords();
      this.soundState = false;
      this.soundTrigger = (time) => {
         this.soundState = true;
         setTimeout(() => {
            this.soundState = false;
         }, time);
      };
   }

   /**
    * Random coords
    * @returns {{x: number, y: number}}
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
    * @returns {null | boolean}
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
    * get always sound of food
    * @param {number} time (in ms)
    * @param {() => void} callback
    */
   getSound(time, callback) {
      this.soundTrigger(time);

      if (!this.soundState) {
         callback();
      } else {
         const audio = new Audio(EatFood);
         audio.volume = 1;
         audio.play();
      }
   }

   /**
    * Update after food collision (score, speed, food coords...)
    */
   updateAfterFoodCollision() {
      this.score += this.incScoreNumb;
      this.food = this.randomCoords();
      this.displayScoreAndFood(++this.totalFood, this.score);
      this.gameEvents() ? null : this.getSound(1200, () => this.sounds.eatFood.play());
   }

   /**
    * Game start, display alert box for signin/signup and start game loop
    */
   async start() {
      try {
         this.addEvListener(
            "#trigger-class",
            "click",
            this.buildAndDisplayClassement.bind(this)
         );

         await this.buildLoginStart(this.mainHTML);
         GameState.setCallbackOfGameState(this.initGame.bind(this), "start");
         GameState.setCallbackOfGameState(this.renderLoop.bind(this), "inProgress");
         GameState.checkState();
      } catch (error) {
         console.info(error);
      }
   }

   /**
    * Restart game
    */
   restart() {
      SpeedManager.selectorSpeed = 1;
      this.$(".genContainer").classList.remove("blurBody");
      this.$(".alertEndMessage").remove();
      // re-init snake properties
      this.score = 0;
      this.totalFood = 0;
      if (this.pad) {
         this.pad.direction = "RIGHT";
      }
      this.direction = "RIGHT";
      this.snake = startingSnakeBuilder(1, 10, 10, this.canvasBox);
      this.oldHead = { x: this.snake[0].x, y: this.snake[0].y };
      this.newHead = { x: this.oldHead.x, y: this.oldHead.y };
      this.food = this.randomCoords();
      this.displayScoreAndFood(this.totalFood, this.score);
      // toggle state & run game loop
      GameState.handleState(1);
   }

   /**
    * remove start window, render loop start
    */
   initGame() {
      const playerName = this.$("#email").value;
      this.playerName = playerName.toLowerCase();
      // remove start window
      this.$(".alertMessage").remove();
      this.canvas.style.display = "block";
      this.createBubbles(this.$(".genContainer"));
      this.displayCanvas();
      if (window.innerWidth < 800) {
         this.pad = new PadManager(this.$(".genContainer"));
         this.pad.createPad();
      }
      this.$("header img").src = SnakeBorder;
      this.$("header img").classList.add("imgResponsiveTel");
      document.body.classList.add("bodyJustify-center");
      this.oldPlayerScore = this.getPlayerOldScore(this.playerName) || 0;
      // render loop start
      this.renderLoop();
   }

   /**
    * Render Game loop
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

   /**
    * Stop the render loop
    * @returns {true | undefined}
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
    * When player lose
    */
   end() {
      if (this.score !== 0) this.addNewPlayerScore(this.score, this.playerName);
      this.sounds.gameOver.play();
      this.$(".genContainer").classList.add("blurBody");
      this.$(".endMessageBut").removeAttribute("disabled");
      this.addEvListener(".endMessageBut", "click", this.restart.bind(this));
      this.buildBestsScores(
         LocalStorage.getItem("snakeScore"),
         this.$(".alertEndMessage"),
         this.playerName
      );
   }
}

export default Game;
