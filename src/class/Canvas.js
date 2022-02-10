import Draw from "./Draw";

class Canvas extends Draw {
   constructor() {
      super();
      this.canvas = document.getElementById("canvas");
      this.ctx = this.canvas.getContext("2d");
      this.mainHTML = document.querySelector("main");
      this.canvasWidth = window.innerWidth * 0.95;
      this.canvasHeight = window.innerHeight * 0.95;
      this.canvasBox = 30;
      this.canvas.width = Math.floor(this.canvasWidth / this.canvasBox) * this.canvasBox;
      this.canvas.height = Math.floor(this.canvasHeight / this.canvasBox) * this.canvasBox;
   }
}

export default Canvas;
