import Utils from "./Utils";

class SpeedManager {
   constructor(nForTrigger) {
      this.utils = new Utils();
      this.speeds = new Map([
         [1, 100],
         [2, 95],
         [3, 90],
         [4, 83],
         [5, 70],
      ]);
      this.selector = 1;
      this.trigger = nForTrigger;
   }
   /**
    * Increment speed of snake
    * @memberof Game
    */
   incrementSpeed(totalFoods) {
      if (totalFoods % this.trigger === 0) {
         if (this.selector < this.speeds.size) {
            ++this.selector;
            this.utils.buildSpeedNotif(document.body, "Speed up !");
         } else {
            this.utils.buildSpeedNotif(document.body, "Speed Max !");
         }
         return true;
      }
   }
   /**
    * Set a selector for indexed Map speeds
    * @memberof SpeedManager
    */
   set selectorSpeed(selector) {
      this.selector = selector;
   }
   /**
    * Get a current speed for loop (in ms)
    * @readonly
    * @memberof SpeedManager
    */
   get currentSpeed() {
      return this.speeds.get(this.selector);
   }
}
export default new SpeedManager(10);
