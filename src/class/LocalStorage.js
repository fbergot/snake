class LocalStorage {
   /**
    * Stringify and set item in localStorage
    * @static
    * @param {string} key
    * @param {*} value
    * @memberof LocalStorage
    */
   static setItem(key, value) {
      try {
         const jsonValue = JSON.stringify(value);
         window.localStorage.setItem(key, jsonValue);
      } catch (error) {
      } finally {
      }
   }

   /**
    * Get item and parse before return
    * @static
    * @param {string} key
    * @returns {any | null}
    * @memberof LocalStorage
    */
   static getItem(key) {
      const jsonValue = window.localStorage.getItem(key);
      if (!jsonValue) return null;
      return JSON.parse(jsonValue);
   }
}

export default LocalStorage;
