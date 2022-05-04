class PadManager {
   constructor(parent) {
      this.parent = parent;
      this.padButtons;
      this.direction = "RIGHT";
   }

   addListener() {
      this.padButtons = [...document.querySelectorAll(".butPad")];
      this.padButtons.forEach((but) => {
         but.addEventListener("click", (e) =>
            this.applyDirection(e.target.getAttribute("id")).bind(this)
         );
      });
   }

   applyDirection(dir) {
      switch (dir) {
         case "UP":
            if (this.direction !== "DOWN") {
               this.direction = dir;
            }
            break;
         case "DOWN":
            if (this.direction !== "UP") {
               this.direction = dir;
            }
            break;
         case "LEFT":
            if (this.direction !== "RIGHT") {
               this.direction = dir;
            }
            break;
         case "RIGHT":
            if (this.direction !== "LEFT") {
               this.direction = dir;
            }
      }
   }

   createPad() {
      const contPad = document.createElement("div");
      contPad.classList.add("cont-pad");
      const pad = `
         <div class='pad'>
            <button class='butPad' id='UP'>Haut</button>
            <button class='butPad' id='LEFT'>Left</button>
            <button class='butPad' id='RIGHT'>Right</button>
            <button class='butPad' id='DOWN'>Bas</button>
         </div>
      `;
      contPad.innerHTML = pad;
      this.parent.appendChild(contPad);
      this.addListener();
   }

   get currentDirection() {
      return this.direction;
   }
}

export default PadManager;
