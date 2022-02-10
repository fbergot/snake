import LocalStorage from "./LocalStorage";

class Utils extends LocalStorage {
   constructor() {
      super();
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
}

export default Utils;
