import Draw from "./Draw";

class Canvas extends Draw {
   constructor() {
      super();
      this.canvas = document.createElement("canvas");
      this.canvas.setAttribute("id", "canvas");
      this.ctx = this.canvas.getContext("2d");
      this.canvasWidth =
         window.innerWidth > 420 ? window.innerWidth * 0.6 : window.innerWidth * 0.9;
      this.canvasHeight =
         window.innerWidth > 1200 ? window.innerHeight * 0.6 : window.innerHeight * 0.5;
      this.canvasBox = window.innerWidth > 700 ? 25 : 15;
      this.canvas.width = Math.floor(this.canvasWidth / this.canvasBox) * this.canvasBox;
      this.canvas.height = Math.floor(this.canvasHeight / this.canvasBox) * this.canvasBox;
      this.mainHTML = this.$("main");
      this.mainHTML.appendChild(this.canvas);
      this.displayCanvas = () => {
         this.mainHTML.style.display = "block";
      };
   }
}

export default Canvas;
