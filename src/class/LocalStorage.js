class LocalStorage {
   /**
    * Stringify and set item in localStorage
    * @static
    * @param {string} key
    * @param {string} value
    * @memberof LocalStorage
    */
   static setItem(key, value) {
      const jsonValue = JSON.stringify(value);
      window.localStorage.setItem(key, jsonValue);
   }

   /**
    * Get item and parse
    * @static
    * @param {string} key
    * @returns {any}
    * @memberof LocalStorage
    */
   static getItem(key) {
      const jsonValue = window.localStorage.getItem(key);
      if (!jsonValue) throw Error("Not item with this key");

      return JSON.parse(jsonValue);
   }
}

export default LocalStorage;
