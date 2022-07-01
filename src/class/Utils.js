import LocalStorage from "./LocalStorage";
import Food from "../assets/picture/food.png";

class Utils {
   constructor() {
      this.keyScore = "snakeScore";
   }
   /**
    * Targeting HTMLElement
    * @param {string} tag
    * @returns {HTMLElement}
    */
   $(tag) {
      return document.querySelector(tag);
   }
   /**
    * build popup
    * @param {{content: string, classForDiv: string}} options
    * @param {HTMLElement} parent
    */
   windowBuildAndDisplay(options, parent) {
      const propertiesCSS_select = `
         text-align: center;
         border-bottom: 1px solid #FFF;
         color: #FFF;
         padding: .5rem;
         margin-bottom: 1rem;
      `;

      let inputOrNot = "";
      if (options.contentLabel) {
         inputOrNot = `
                <form>
                <div style='${propertiesCSS_select}'>Déjà enregistré ? <button id='change-log'>Se loguer</button></div>
                  <div class='userDataInput'>
                     <div class='content-label'>
                        <label id='label' for='name'>${options.contentLabel}</label>
                     </div>
                     <input name='name' type='text' id='name'/>
                  </div>

                  <div class='userDataInput'>
                     <div class='content-label'>
                        <label id='label' for='password'>${options.contentLabel2}</label>
                     </div>
                     <input name='password' type='password' id='mdp'/>
                  </div>
                </form>
            `;
      }
      // creation external box
      const container = document.createElement("div");
      options.classContainerPopup.forEach((className) => {
         container.classList.add(className);
      });
      // input & button
      container.innerHTML = `
            ${options.content}
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
    */
   addEvListener(target, typeEvent, callback) {
      this.$(target).addEventListener(typeEvent, callback);
   }

   /**
    * Display score and foods in bubbles
    * @param {number} apples
    * @param {number} score
    */
   displayScoreAndFood(apples, score) {
      this.$("#score").textContent = score;
      this.$("#apples").textContent = apples;
   }
   /**
    * Give old score of current player
    * @param {string} nameOfPlayer
    */
   getPlayerOldScore(nameOfPlayer) {
      const oldScore = LocalStorage.getItem(this.keyScore);
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
    */
   addNewPlayerScore(score, nameOfPlayer) {
      let total_score_of_players;
      let total_score_without_scoreActualPlyer;
      const dataPlayer = {
         name: nameOfPlayer,
         score: score,
      };
      const scoreTotal = LocalStorage.getItem(this.keyScore);
      // check if data exist
      if (!scoreTotal) {
         total_score_of_players = [];
         total_score_of_players.push(dataPlayer);
         LocalStorage.setItem(this.keyScore, total_score_of_players);
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
            LocalStorage.setItem(this.keyScore, total_score_without_scoreActualPlyer);
         }
      } else {
         scoreTotal.push(dataPlayer);
         LocalStorage.setItem(this.keyScore, scoreTotal);
      }
   }
   /**
    * Creation row for <table> (scores)
    * @param {{name: string, score: number}} data
    */
   createLine(data, rating, playerName) {
      return `
         <tr class='result_row ${playerName === data.name ? "selected" : ""}'>
            <td>${rating}</td>
            <td>${data.name}</td>
            <td>${data.score}</td>
         </tr>
      `;
   }
   /**
    * Build array of bests scores in order
    * @param {{name: string, score: number}[]} bestsScores
    * @param {HTMLElement} parent
    */
   buildBestsScores(bestsScores, parent, playerName) {
      const sortedScores = bestsScores.sort((a, b) => b.score - a.score);

      const container = document.createElement("div");
      container.classList.add("container_scores");

      const headingTitle = document.createElement("h2");
      headingTitle.textContent = "Meilleurs scores";
      headingTitle.classList.add("headingRanking");
      container.appendChild(headingTitle);

      const rankingTable = document.createElement("table");

      let lines = "";
      // create each line of table
      sortedScores.forEach((scoreData, index) => {
         if (index <= 2) {
            lines += this.createLine(scoreData, index + 1, playerName);
         }
      });

      rankingTable.innerHTML = lines;
      container.appendChild(rankingTable);
      parent.appendChild(container);
   }
   /**
    * Create score and apples bubbles
    * @param {string} pathApple
    * @param {HTMLElement} parent
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
