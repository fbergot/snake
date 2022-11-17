import { messagesAndErrors } from "../globalCodeConfig/messagesAnderrors";
const errors = messagesAndErrors.localStorage;

class LocalStorage {
   /**
    * Stringify and set item in localStorage
    * @static
    * @param {string} key
    * @param {*} value
    * @returns {void | false}
    */
   static setItem(key, value) {
      try {
         var jsonValue = JSON.stringify(value);
         window.localStorage.setItem(key, jsonValue);
      } catch (error) {
         console.error(error);
      }
   }

   /**
    * Get item and parse before return
    * @static
    * @param {string} key
    * @returns {any | false}
    */
   static getItem(key) {
      try {
         const jsonValue = window.localStorage.getItem(key);
         if (!jsonValue) throw Error(errors.missingItemInLocalStor);
         return JSON.parse(jsonValue);
      } catch (error) {
         console.error(error);
      }
   }

   /**
    * @param {string} key
    */
   static removeItem(key) {
      window.localStorage.removeItem(key);
   }
}

export default LocalStorage;
