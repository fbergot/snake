import Utils from "./Utils";

class SpeedManager {
   constructor() {
      this.utils = new Utils();
      this.speeds = new Map([
         [1, 110],
         [2, 100],
         [3, 90],
         [4, 80],
      ]);
      this.selector = 1;
      this.trigger = 8;
   }

   /**
    * Increment speed of snake
    * @memberof Game
    */
   incrementSpeed(totalFoods) {
      if (totalFoods % this.trigger === 0) {
         if (this.selector < this.speeds.size) {
            ++this.selector;
            this.utils.buildSpeedNotif(document.body, "Speed");
         } else {
            this.utils.buildSpeedNotif(document.body, "Speed Max");
         }
      }
   }

   set selectorSpeed(selector) {
      this.selector = selector;
   }

   get currentSpeed() {
      return this.speeds.get(this.selector);
   }
}
export default new SpeedManager();
