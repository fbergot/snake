import LocalStorage from "./LocalStorage";
import Food from "../assets/picture/food.png";
import soundBuilder from "../function/soundBuilder";

class Utils extends LocalStorage {
   constructor() {
      super();
      this.keyScore = "snakeScore";
   }
   /**
    * Targeting HTMLElement
    * @param {string} tag
    * @returns {HTMLElement}
    * @memberof Utils
    */
   $(tag) {
      return document.querySelector(tag);
   }
   /**
    * build popup
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
      // creation external box
      const container = document.createElement("div");
      options.classContainerPopup.forEach((className) => {
         container.classList.add(className);
      });
      // input & button
      container.innerHTML = `
            <p>${options.content}</p>
            ${inputOrNot}
            <div class='contButton'>
               <button disabled class='${options.classForButton}'>${options.contentButton}</button>
            </div>
       `;
      parent.appendChild(container);
   }
   /**
    * Build speed message
    * @param {HTMLElement} parent
    * @param {string} message
    * @memberof Utils
    */
   buildSpeedNotif(parent, message) {
      let already;
      let speedAnimWindow;
      if (!already) {
         (() => {
            speedAnimWindow = document.createElement("div");
            speedAnimWindow.classList.add("speedNotif");
            speedAnimWindow.innerHTML = `<p>${message}</p>`;
            already = true;
         })();
      }
      parent.appendChild(speedAnimWindow);
      window.setTimeout(() => {
         speedAnimWindow.remove();
      }, 1200);
   }
   /**
    * Add event listener with a function
    * @param {string} target
    * @param {string} typeEvent
    * @param {(e) => void} callback
    * @memberof Utils
    */
   addEvListener(target, typeEvent, callback) {
      this.$(target).addEventListener(typeEvent, callback);
   }

   /**
    * Display score and foods in bubbles
    * @param {number} apples
    * @param {number} score
    * @memberof Utils
    */
   displayScoreAndFood(apples, score) {
      this.$("#score").textContent = score;
      this.$("#apples").textContent = apples;
   }
   /**
    * Give old score of current player
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
      const scoreTotal = this.getItem(this.keyScore);
      // check if data exist
      if (!scoreTotal) {
         total_score_of_players = [];
         total_score_of_players.push(dataplayer);
         this.setItem(this.keyScore, total_score_of_players);
         return;
      }
      // if exist ..
      const oldScoreOfPlayer = scoreTotal.find((scoreData) => {
         return scoreData.name === nameOfPlayer;
      });
      // check if old score exist for this player
      if (oldScoreOfPlayer) {
         if (score > oldScoreOfPlayer.score) {
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
    * Creation row for <table> (scores)
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
      const sortedScores = bestsScores.sort((a, b) => a - b);
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
   /**
    * Create score and apples bubbles
    * @param {string} pathApple
    * @param {HTMLElement} parent
    * @memberof Utils
    */
   createBubbles(parent) {
      const container = document.createElement("div");
      container.classList.add("containerBubble");
      container.innerHTML = `
         <div>
            <p>Score</p>
            <span class="score" id='score'>0</span>
         </div>  
         <div>
            <img class='appleBubble' src='${Food}' alt='food'/>
            <span class="apples" id='apples'>0</span>
         </div>
      `;
      parent.appendChild(container);
   }
}

export default Utils;
