import LocalStorage from "./LocalStorage";

class Utils extends LocalStorage {
   constructor() {
      super();
      this.scoreContainer = document.getElementById("score");
      this.speedContainer = document.getElementById("speed");
   }
   /**
    *
    *
    * @static
    * @param {{content: string, classForDiv: string}} options
    * @param {HTMLElement} parent
    * @memberof Utils
    */
   windowBuildAndDisplay(options, parent) {
      let inputOrNot = "";
      if (options.contentLabel) {
         inputOrNot = `
                <div>
                    <label for='name'>${options.contentLabel}</label>
                    <input type='text' id='name'/>
                </div>
            `;
      }
      // create external box
      const div = document.createElement("div");
      div.innerText = options.content;
      div.classList.add(options.classForDiv);
      // create input
      div.innerHTML = `
            ${options.content}
            ${inputOrNot}
            <button class='${options.classForButton}'>${options.contentButton}</button>
       `;

      parent.appendChild(div);
   }

   /**
    * Add event listener with a function
    * @param {string} tagForTarget
    * @param {string} typeEvent
    * @param {() => void} callback
    * @memberof Utils
    */
   addEvListener(tagForTarget, typeEvent, callback) {
      const target = document.querySelector(tagForTarget);
      target.addEventListener(typeEvent, callback);
   }
   /**
    *
    * Display game data (speed, score)
    * @memberof Utils
    */
   displayScoreAndSpeed(speed, score) {
      this.scoreContainer.textContent = score;
      this.speedContainer.textContent = speed;
   }
   /**
    *
    *
    * @param {string} nameOfPlayer
    * @memberof Utils
    */
   getPlayerOldScore(nameOfPlayer) {
      const oldScore = this.getItem("snakeScore");
      if (oldScore) {
         const playerScore = oldScore.filter((score) => {
            return score.name === nameOfPlayer;
         });
         if (playerScore) {
            return playerScore;
         }
         return null;
      }
      return null;
   }

   /*
    *
    * @param {number} score
    * @param {string} nameOfPlayer
    * @memberof Utils
    */
   addNewPlayerScore(score, nameOfPlayer) {
      let total_score_of_players;
      const dataplayer = {
         name: nameOfPlayer,
         score: score,
      };
      // check if data exist
      const scoreTotal = this.getItem("snakeScore");
      if (!scoreTotal) {
         total_score_of_players = [];
         total_score_of_players.push(dataplayer);
         this.setItem("snakeScore", total_score_of_players);
         return;
      }
      const oldScoreOfPlayer = scoreTotal.find((scoreData) => {
         return scoreData.name === nameOfPlayer;
      });

      if (oldScoreOfPlayer) {
         if (oldScoreOfPlayer.score > score) {
            oldScoreOfPlayer.score = score;
         }
      } else {
         this.setItem("snakeScore", scoreTotal);
         return;
      }
      scoreTotal.push(dataplayer);
      this.setItem("snakeScore", scoreTotal);
   }
}

export default Utils;
