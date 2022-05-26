class LocalStorage {
   /**
    * Stringify and set item in localStorage
    * @static
    * @param {string} key
    * @param {*} value
    * @returns {void | false}
    * @memberof LocalStorage
    */
   static setItem(key, value) {
      try {
         var jsonValue = JSON.stringify(value);
      } catch (error) {
         console.error(error);
         return false;
      } finally {
         window.localStorage.setItem(key, jsonValue);
      }
   }

   /**
    * Get item and parse before return
    * @static
    * @param {string} key
    * @returns {any | false}
    * @memberof LocalStorage
    */
   static getItem(key) {
      let valueParsed = null;
      try {
         const jsonValue = window.localStorage.getItem(key);
         if (!jsonValue) throw Error("No item");
         valueParsed = JSON.parse(jsonValue);
      } catch (error) {
         console.error(error);
         return false;
      } finally {
         return valueParsed;
      }
   }
}

export default LocalStorage;
