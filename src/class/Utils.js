import LocalStorage from "./LocalStorage";

class Utils extends LocalStorage {
   constructor() {
      super();
      this.scoreContainer = document.getElementById("score");
      this.speedContainer = document.getElementById("speed");
      this.keyScore = "snakeScore";
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
    * @param {string} nameOfPlayer
    * @memberof Utils
    */
   getPlayerOldScore(nameOfPlayer) {
      const oldScore = this.getItem(this.keyScore);
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
    * @param {number} score
    * @param {string} nameOfPlayer
    * @memberof Utils
    */
   addNewPlayerScore(score, nameOfPlayer) {
      let total_score_of_players;
      let total_score_without_scoreActualPlyer;
      const dataplayer = {
         name: nameOfPlayer,
         score: score,
      };
      // check if data exist
      const scoreTotal = this.getItem(this.keyScore);
      if (!scoreTotal) {
         total_score_of_players = [];
         total_score_of_players.push(dataplayer);
         this.setItem(this.keyScore, total_score_of_players);
         return;
      }
      const oldScoreOfPlayer = scoreTotal.find((scoreData) => {
         return scoreData.name === nameOfPlayer;
      });
      // check if old score for this player
      if (oldScoreOfPlayer) {
         if (oldScoreOfPlayer.score < score) {
            oldScoreOfPlayer.score = score;
            total_score_without_scoreActualPlyer = scoreTotal.filter((scorePlayer) => {
               return scorePlayer.name !== nameOfPlayer;
            });
            // add new score
            total_score_without_scoreActualPlyer.push(oldScoreOfPlayer);
            this.setItem(this.keyScore, total_score_without_scoreActualPlyer);
         }
      } else {
         scoreTotal.push(dataplayer);
         this.setItem(this.keyScore, scoreTotal);
      }
   }

   /**
    *
    *
    * @param {{name: string, score: number}} data
    * @memberof Utils
    */
   createLine(data, rating) {
      return `
         <div class='result_row'>
            <p>${rating}</p>
            <p>${data.name}</p>
            <p>${data.score}</p>
         </div>
      `;
   }

   /**
    * Build array of bests scores in order
    * @param {{name: string, score: number}[]} bestsScores
    * @param {HTMLElement} parent
    * @memberof Utils
    */
   builBestsScores(bestsScores, parent) {
      const sortedScores = this.sortDecroissant(bestsScores);
      const container = document.createElement("div");
      container.classList.add("container_scores");
      let lines = "<h2>Classement</h2>";
      // create each line
      sortedScores.forEach((scoreData, index) => {
         lines += this.createLine(scoreData, index + 1);
      });

      container.innerHTML = lines;
      parent.appendChild(container);
   }

   sortDecroissant(arr) {
      let i = 0;

      while (i < arr.length) {
         if (arr[i + 1] && arr[i].score < arr[i + 1].score) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            i = -1;
         }
         i++;
      }
      return arr;
   }
}

export default Utils;
