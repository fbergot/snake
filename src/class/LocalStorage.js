class LocalStorage {
   /**
    * Stringify and set item in localStorage
    * @static
    * @param {string} key
    * @param {*} value
    * @memberof LocalStorage
    */
   setItem(key, value) {
      const jsonValue = JSON.stringify(value);
      window.localStorage.setItem(key, jsonValue);
   }

   /**
    * Get item and parse
    * @static
    * @param {string} key
    * @returns {any | null}
    * @memberof LocalStorage
    */
   getItem(key) {
      const jsonValue = window.localStorage.getItem(key);
      if (!jsonValue) return null;

      return JSON.parse(jsonValue);
   }
}

export default LocalStorage;
