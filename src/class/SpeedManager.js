import Utils from "./Utils";

class SpeedManager {
   constructor(nForTrigger, speedsLoopObject) {
      this.utils = new Utils();
      this.speeds = new Map(speedsLoopObject);
      this.selector = 1;
      this.trigger = nForTrigger;
      this.triggerCount = 1;
   }
   /**
    * Increment speed of snake
    * @param {number} totalFoods
    * @return {number | string | null}
    * @memberof Game
    */
   incrementSpeed(totalFoods) {
      if (totalFoods % this.trigger === 0) {
         if (this.selector < this.gearBoxSize) {
            this.utils.buildSpeedNotif(document.body, "Speed up !");
            ++this.triggerCount;
            ++this.selector;
            return true;
         } else if (this.selector === this.gearBoxSize) {
            if (this.triggerCount > this.gearBoxSize) {
               return false;
            } else {
               ++this.triggerCount;
               this.utils.buildSpeedNotif(document.body, "Speed Max !");
               return true;
            }
         }
      }
      return null;
   }

   /**
    * Get a size of Map (speeds)
    * @readonly
    * @memberof SpeedManager
    */
   get gearBoxSize() {
      return this.speeds.size;
   }
   /**
    * Set a selector for indexed Map speeds
    * @memberof SpeedManager
    */
   set selectorSpeed(selector) {
      this.selector = selector;
   }
   /**
    * Get a current speed for loop (setTimeout in ms in renderLoop())
    * @readonly
    * @memberof SpeedManager
    */
   get currentSpeed() {
      return this.speeds.get(this.selector);
   }
}
export default new SpeedManager(10, [
   [1, 120],
   [2, 110],
   [3, 100],
   [4, 90],
   [5, 80],
   [6, 70],
]);
