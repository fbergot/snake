/* eslint-disable no-undef */
import LocalStorage from "./LocalStorage";
import Food from "../assets/picture/food.png";
import FetchDataManager from "./fetchDataManager";
import { started } from "../app";
import Jwt from "./JWT";

class Utils {
   constructor() {
      this.jwt = Jwt._getInstance();
      this.keyScore = "snakeScore";
      this.toLog = true;
      this.templateidentifier = `
            <div class='cont-but'>Pas encore enregisté ? <button class='alertMessageBut' id='change-log'>S'enregistrer</button></div>
            <div class='userDataInput'>
               <div class='content-label'>
                  <label for='email'>Email</label>
               </div>
               <input required name='email' type='email' id='email'/>
            </div>

            <div class='userDataInput'>
               <div class='content-label'>
                  <label id='label' for='password'>Mot de passe</label>
               </div>
               <input required name='password' type='password' id='mdp'/>
            </div>
      `;
      this.templateregister = `
            <div class='cont-but'>Déjà enregistré ? <button class='alertMessageBut' id='change-log'>Se loguer</button></div>
            <div class='userDataInput'>
               <div class='content-label'>
                  <label id='label' for='name'>Nom</label>
               </div>
               <input required name='name' type='text' id='name'/>
            </div>

            <div class='userDataInput'>
               <div class='content-label'>
                  <label id='label' for='email'>Email</label>
               </div>
               <input required name='email' type='email' id='email'/>
            </div>

            <div class='userDataInput'>
               <div class='content-label'>
                  <label id='label' for='password'>Mot de passe</label>
               </div>
               <input required name='password' type='password' id='mdp'/>
            </div>
      `;
   }

   /**
    * Build login/register popup
    * @param {HTMLElement} parent
    * @param {string} template
    */
   async buildLoginStart(parent) {
      const container = document.createElement("div");
      container.classList.add("alertMessage");

      container.innerHTML = `
         <div id='base'>
            <form>
               ${this.toLog ? this.templateidentifier : this.templateregister}
               <div class='contButton'>
                  <button type='submit' id='validation' class='alertMessageBut'>Valider</button>
               </div>
            </form>     
         </div>
       `;
      parent.appendChild(container);

      this.addEvListener("#change-log", "click", () => {
         this.InitAndChangeParams();
      });

      return new Promise((resolve) => {
         this.addEvListener("form", "submit", async (e) => {
            e.preventDefault();
            const state = await this.middleware(this.toLog);
            if (state) {
               resolve(true);
            }
         });
      });
   }

   /**
    * Make and return user Data
    * @param {boolean} swtch
    * @returns { {password: string, email: string, name?: string} }
    */
   getDataUser(swtch) {
      const data = {};

      data.password = this.$("#mdp").value || "";
      data.email = this.$("#email").value || "";

      if (!swtch) {
         data.name = this.$("#name").value || "";
      }
      return data;
   }

   /**
    *
    */
   InitAndChangeParams() {
      this.$(".alertMessage").remove();
      this.toLog = !this.toLog;
      started();
   }

   /**
    *
    * @param {boolean} swtch
    */
   async middleware(swtch) {
      const dataUser = this.getDataUser(swtch);
      const state = await this.switchIfValidConnection(dataUser);
      return state;
   }

   /**
    * Connection data for fetch the snake API
    * @param {{password: string, email: string, name?: string}} dataUser
    */
   async switchIfValidConnection(dataUser) {
      try {
         // if this.toLog = true case => signin
         if (this.toLog) {
            const stateOrStatus = await FetchDataManager.signin(dataUser);
            this.checkStateReturned(stateOrStatus);
            return true;
         }
         // if this.toLog = false case => signup
         else {
            const stateOfWork = await FetchDataManager.signup(dataUser);
            this.checkStateReturned(stateOfWork);
            return true;
         }
      } catch (err) {
         await this.messageManager(2000, err.message);
         return false;
      }
   }

   /**
    *
    * @param {*} status
    */
   checkStateReturned(status) {
      if (typeof status === "number") {
         throw Error(`${status}`);
      }
   }

   /**
    *
    * @param {number} time
    * @param {string} mess
    */
   async messageManager(time, mess) {
      try {
         const div = document.createElement("div");
         div.setAttribute("id", "cont");
         div.innerHTML = `<span id="feedbackMessError">${mess}</span>`;
         this.$("#base").appendChild(div);

         await this.wait(time);
         this.$("#cont").remove();
      } catch (error) {
         console.error(error);
      }
   }

   /**
    *
    * @param {number} time
    * @param {any} time
    * @returns {Promise<boolean|any>}
    */
   wait(time, value) {
      return new Promise((resolve) => {
         window.setTimeout(() => {
            resolve(value || true);
         }, time);
      });
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
         speedAnimWindow = document.createElement("div");
         speedAnimWindow.classList.add("speedNotif");
         speedAnimWindow.innerHTML = `<p>${message}</p>`;
         already = true;
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
   /**
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
      // if data not exist
      if (!scoreTotal) {
         total_score_of_players = [];
         total_score_of_players.push(dataPlayer);
         LocalStorage.setItem(this.keyScore, total_score_of_players);
         return;
      }
      // if exist
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
   /**
    * Targeting HTMLElement
    * @param {string} tag
    * @returns {HTMLElement | NodeList}
    */
   $(tag) {
      return document.querySelector(tag);
   }
   /**
    * @param {string} str
    */
   stringTolLowercase(str) {
      if (typeof str !== "string") throw Error("Bad type of str parameter");
      return str.toLowerCase();
   }

   /**
    * build classements global from API
    */
   async buildAndDisplayClassement() {
      if (!this.$(".int-class-con")) {
         const containerClassement = this.$("#classement-gen");
         containerClassement.style.display = "flex";

         const classements = await FetchDataManager.getAllClassements();
         this.buildClassement(classements, containerClassement);
      } else {
         this.$("#classement-gen").classList.remove("escape-classement");
      }
   }

   buildClassement(classements, container) {
      const cont_int_class = document.createElement("div");
      cont_int_class.classList.add("int-class-con");

      cont_int_class.innerHTML = `
         <h1>Classement globalisé</h1>
      `;

      container.appendChild(cont_int_class);

      let lines = `
      <div class='line-class first-line'>
         <p>Device (px)</p>
         <p>Nom</p>
         <p>Score</p>
         <p>Date</p>
      </div>`;

      classements.forEach((data, index) => {
         const css = index == 0 ? "style='margin-top: 120px;'" : "";
         const cssline = index % 2 == 0 ? "line-yellow" : "line-green";
         const line = `
            <div class='line-class ${cssline}' ${css}>
               <p>${data.device || 0}px</p>
               <p>${data.name}</p>
               <p>${data.score}</p>
               <p>${new Date(data.createdAt).toLocaleDateString()}</p>
            </div>
         `;
         lines += line;
      });

      cont_int_class.innerHTML += lines += `
         <div class='close-but'>
            <button class='alertMessageBut' id='closebut'>fermer</button>
         </div>`;

      this.addEvListener("#closebut", "click", this.eraseClassementWindow.bind(this));
   }

   async eraseClassementWindow() {
      this.$("#classement-gen").classList.add("escape-classement");

      // juste pour tester si la cration de lignes dan sla table classement fonctionne bien
      const t = await FetchDataManager.setOneClassement({
         name: "florian",
         score: 1625,
         device: "500",
      });
      console.log(t);
   }
}

export default Utils;
