import Snake from "./Snake";

class Game extends Snake {
   constructor(apple) {
      super();
      this.score = 0;
      this.speeds = [80, 70, 60];
      this.incScoreNumb = 10;
      this.foodImage = new Image();
      this.foodImage.src = apple;
      this.food = this.randomFood();
      this.playerName = "";
      this.snake;
      this.state = true;
   }
   /**
    * Random food coords
    * @returns {{x: number, y: number}}
    * @memberof Snake
    */
   randomFood() {
      return {
         x: Math.floor(2 + Math.random() * 5) * this.canvasBox,
         y: Math.floor(5 + Math.random() * 5) * this.canvasBox,
      };
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
      // render loop start
      this.renderLoop();
   }
   /**
    * Draw background game
    * @memberof Game
    */
   drawBackground() {
      this.drawRect(this.ctx, 0, 0, this.canvasWidth, this.canvasHeight, "rgb(70, 175, 70)");
   }
   /**
    * Render Game loop
    * @memberof Game
    */
   renderLoop() {
      let timer;
      const draw = () => {
         this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
         this.drawBackground();
         this.ctx.drawImage(this.foodImage, this.food.x, this.food.y);
         this.createSnake();
         if (!this.state) return;
         window.setTimeout(draw, this.speeds[0]);
      };
      draw();
   }
}

export default Game;
