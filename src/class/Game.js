class Game {
   constructor(Draw, Utils, Snake, apple) {
      // injection
      this.drawClass = Draw;
      this.utilsClass = Utils;
      // canvas
      this.canvas = document.getElementById("canvas");
      this.ctx = this.canvas.getContext("2d");
      this.mainHTML = document.querySelector("main");
      this.canvasWidth = window.innerWidth * 0.9;
      this.canvasHeight = window.innerHeight * 0.9;
      this.canvasBox = 30;
      this.canvas.width = Math.floor(this.canvasWidth / this.canvasBox) * this.canvasBox;
      this.canvas.height = Math.floor(this.canvasHeight / this.canvasBox) * this.canvasBox;
      // game data
      this.score = 0;
      this.changeScore = function (addScore) {
         this.score += addScore;
      };
      //   snake and food
      this.snake = new Snake(
         this.ctx,
         this.canvasBox,
         this.drawClass,
         "red",
         "grey",
         apple,
         this.changeScore
      );
      this.playerName = "";
      this.start();
   }

   /**
    * Game start, display alert box for name and start loop after
    * @memberof Game
    */
   start() {
      this.utilsClass.windowBuildAndDisplay(
         {
            content: "",
            contentButton: "valider",
            contentLabel: "Entrer votre nom",
            classForDiv: "alertMessage",
            classForButton: "alertMessageBut",
         },
         this.mainHTML
      );
      this.utilsClass.addEvListener(".alertMessageBut", "click", this.initGame.bind(this));
   }

   /**
    * remove start window, render loop start
    * @memberof Game
    */
   initGame() {
      // add player name
      const playerName = document.getElementById("name").value;
      this.playerName = playerName;
      // remove start window
      const startBox = document.querySelector(".alertMessage");
      startBox.remove();
      // render loop start
      this.renderLoop();
   }
   /**
    * Draw background game
    * @memberof Game
    */
   drawBackground() {
      this.drawClass.drawRect(
         this.ctx,
         0,
         0,
         this.canvasWidth,
         this.canvasHeight,
         "rgb(70, 175, 70)",
         "fill"
      );
   }

   /**
    * Render Game loop
    * @memberof Game
    */
   renderLoop() {
      const draw = () => {
         this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
         this.drawBackground();
         this.snake.createSnake();
      };
      this.loop = window.setInterval(draw, 100);
   }
}

export default Game;
