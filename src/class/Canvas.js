import Draw from "./Draw";
import SnakeBorder from "../assets/picture/snakeBorder.png";

class Canvas extends Draw {
   constructor() {
      super();
      this.canvas = document.createElement("canvas");
      this.canvas.setAttribute("id", "canvas");
      this.ctx = this.canvas.getContext("2d");
      this.canvasWidth =
         window.innerWidth > 420 ? window.innerWidth * 0.6 : window.innerWidth * 0.9;
      this.canvasHeight = window.innerHeight * 0.6;
      this.canvasBox = window.innerWidth > 420 ? 25 : 15;
      this.canvas.width = Math.floor(this.canvasWidth / this.canvasBox) * this.canvasBox;
      this.canvas.height = Math.floor(this.canvasHeight / this.canvasBox) * this.canvasBox;
      this.canvas.style.display = "none";
      this.mainHTML = this.$("main");
      this.displayCanvas = () => {
         this.$("header img").src = SnakeBorder;
         this.mainHTML.appendChild(this.canvas);
         this.mainHTML.style.display = "block";
      };
   }
}

export default Canvas;
