class GameState {
   constructor() {
      this.states = ["start", "inProgress", "end"];
      this.currentState = this.states[0];
      this.startFunc;
      this.inProgressFunc;
      this.endFunc;
   }

   /**
    * Handle the state of game
    */
   handleState(index) {
      this.currentState = this.states[index];
      this.checkState();
   }
   /**
    * Check the current state and call func
    */
   checkState() {
      switch (this.currentState) {
         case "start":
            this.startFunc();
            break;
         case "inProgress":
            this.inProgressFunc();
      }
   }
   /**
    * Set the callback for game
    * @param {() => void} func
    * @param {'start' | 'inProgress', 'end'} gameState
    * @param {'start' | 'inProgress' | 'end'} gameState
    */
   setCallbackOfGameState(func, gameState) {
      switch (gameState) {
         case "start":
            this.startFunc = func;
            break;
         case "inProgress":
            this.inProgressFunc = func;
            break;
         case "end":
            this.endFunc = func;
            break;
         default:
            throw Error("bad parameter gameState");
      }
   }
   /**
    * Get current state of game
    * @readonly
    * @return {string}
    */
   get currentStateOfGame() {
      return this.currentState;
   }
}

export default new GameState();
