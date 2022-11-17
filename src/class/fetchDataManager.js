/* eslint-disable no-undef */
import Jwt from "./JWT";
import LocalStorage from "./LocalStorage";
import { messagesAndErrors } from "../globalCodeConfig/messagesAnderrors";
const errors = messagesAndErrors.fetchDataManager;

class FetchDataManager {
   constructor() {
      this.baseURL = process.env.SERVER_BASE_URL;
      this.secret = process.env.SECRET;
      this.errorMessage = (response) => Number(response.status);

      if (!this.baseURL || !this.secret) {
         throw Error(errors.envVarmissing);
      }
   }

   /**
    * @async
    * Get all line in the classement table
    * @returns {{_id: string, name: string, score: string}[]}
    */
   async getAllClassements() {
      try {
         const options = { method: "GET" };
         const URL = `${this.baseURL}/classement/all`;
         return await this.toAPI(URL, options);
      } catch (err) {
         console.error(err.message);
      }
   }

   /**
    * Get one line in the classement table
    * @param {string} _id
    * @returns {{name: string, score: string}}
    */
   async getOneClassement(_id) {
      const options = { method: "GET" };
      const URL = `${this.baseURL}/classement/one/${_id}`;
      return await this.toAPI(URL, options);
   }

   /**
    * Get one line in the classement table
    * @param {string} _id
    * @returns {}
    */
   async setOneClassement(objData) {
      const options = { method: "POST", body: JSON.stringify(objData) };
      const URL = `${this.baseURL}/classement/new`;
      return await this.toAPI(URL, options, true);
   }

   /**
    * Allow Signup user
    * @param {{name: string, email: string, password: string}} (destrut.)
    * @returns {string} (API message "created, already exist ...")
    */
   async signup(userData) {
      const body = JSON.stringify(userData);
      const options = { method: "POST", body };
      const URL = `${this.baseURL}/user/signup`;
      const message = await this.toAPI(URL, options);
      return message;
   }

   /**
    * Signin => Get token for identif.
    * @param {{email: string, password: string}} (destruct.)
    * @throw (invalid signature, ect ...)
    * @returns {string} (token)
    */
   async signin(userData) {
      const body = JSON.stringify(userData);
      const options = { method: "POST", body };
      const URL = `${this.baseURL}/user/signin`;

      const result = await this.toAPI(URL, options);
      if (Number.isInteger(result)) {
         return result;
      }
      LocalStorage.setItem("snake_token", result.message);
      const jwtInstance = Jwt._getInstance();
      const compare = await jwtInstance.jwtVerify(result.message);
      if (compare) {
         return true;
      }
   }

   /**
    * Fetch/Send data to API
    * @param {string} URL
    * @param {RequestInit} options
    * @returns {Promise<*>}
    */
   async toAPI(URL, options, needToken) {
      try {
         this.headers = {
            "Content-Type": "application/json; charset=UTF-8",
            Accept: "text/json",
         };

         if (needToken) {
            try {
               const token = LocalStorage.getItem("snake_token");
               this.headers["Authorization"] = `Bearer ${token}`;
            } catch (error) {
               console.error(error.message);
            }
         }

         const requestOptions = {};
         Object.assign(requestOptions, options, { headers: this.headers });

         const response = await window.fetch(URL, requestOptions);
         if (response.ok) {
            const data = await response.json();
            return data;
         }
         return this.errorMessage(response);
      } catch (err) {
         return this.errorMessage(response);
      }
   }
}

export default new FetchDataManager();
