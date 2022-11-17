class DataState {
   constructor() {
      /** global */
      this.allClassements = [];
      this.classementOfPlayer = null;

      /** game player data */
      this.oldScore = null;
      this.newScore = null;
   }

   set TotalClassements(total) {
      this.allClassements = total;
   }
   set ClassementOfPlayer(one) {
      this.classementOfPlayer = one;
   }
   set OldScore(score) {
      this.oldScore = score;
   }
   set NewScore(score) {
      this.newScore = score;
   }

   get totalClassements() {
      return this.allClassements;
   }
   get oneClassementOfPlayer() {
      return this.classementOfPlayer;
   }
   get getOldScore() {
      return this.oldScore;
   }
   get getNewScore() {
      return this.newScore;
   }
}

export default new DataState();
