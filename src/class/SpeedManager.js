import Utils from "./Utils";
import { speedsForLevels } from "../globalCodeConfig/levels";
import { selectorOfSpeed } from "../function/speedsForLevelsSelector";
import { messagesAndErrors } from "../globalCodeConfig/messagesAnderrors";
const errors = messagesAndErrors.speedManager;

class SpeedManager {
   constructor(nForTrigger, speedsLoopData) {
      this.speeds = new Map(speedsLoopData);
      this.utils = new Utils();
      this.selector = 1;
      this.triggerCount = 1;
      this.trigger = nForTrigger;
   }

   /**
    * Increment speed of snake
    * @param {number} totalFoods
    * @return {boolean | null}
    */
   incrementSpeed(totalFoods) {
      if (totalFoods % this.trigger === 0) {
         if (this.selector < this.gearBoxSize) {
            this.utils.buildSpeedNotif(document.body, errors.speedUp);
            ++this.triggerCount;
            ++this.selector;
            return true;
         } else if (this.selector === this.gearBoxSize) {
            if (this.triggerCount > this.gearBoxSize) {
               return false;
            } else {
               ++this.triggerCount;
               this.utils.buildSpeedNotif(document.body, errors.speedMax);
               return true;
            }
         }
      }
      return null;
   }

   /**
    * Get a size of Map (speeds)
    * @readonly
    */
   get gearBoxSize() {
      return this.speeds.size;
   }

   /**
    * Set a selector for indexed Map speeds
    * @param {number} selector
    */
   set selectorSpeed(selector) {
      this.selector = selector;
   }

   /**
    * Get a current speed for loop (setTimeout in ms for Game.renderLoop())
    * @readonly
    */
   get currentSpeed() {
      return this.speeds.get(this.selector);
   }
}

const difficulties = ["easy", "middle", "hard"];
const speeds = selectorOfSpeed(difficulties[1], speedsForLevels);
const levelsBeforeTrigger = 6;

export default new SpeedManager(levelsBeforeTrigger, speeds);
