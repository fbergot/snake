import Draw from "./Draw";

class Canvas extends Draw {
   constructor() {
      super();
      this.canvas = document.getElementById("canvas");
      this.ctx = this.canvas.getContext("2d");
      this.mainHTML = document.querySelector("main");
      this.canvasWidth =
         window.innerWidth > 420 ? window.innerWidth * 0.6 : window.innerWidth * 0.9;
      this.canvasHeight = window.innerHeight * 0.6;
      this.canvasBox = window.innerWidth > 420 ? 30 : 20;
      this.canvas.width = Math.floor(this.canvasWidth / this.canvasBox) * this.canvasBox;
      this.canvas.height = Math.floor(this.canvasHeight / this.canvasBox) * this.canvasBox;
      this.canvas.style.display = "none";
   }
}

export default Canvas;
