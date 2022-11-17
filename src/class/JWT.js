/* eslint-disable no-undef */
import JWT from "jsonwebtoken";
import { messagesAndErrors } from "../globalCodeConfig/messagesAnderrors";
const errors = messagesAndErrors.jwt;

export default class Jwt {
   static _instance;

   static _getInstance() {
      if (!process.env.SECRET) {
         throw Error(errors.missingSecret);
      }

      if (!this._instance) {
         this._instance = new Jwt(process.env.SECRET);
         return this._instance;
      }
      return this._instance;
   }

   constructor(secret) {
      this.secret = secret;
      this.algo = "HS256";
   }
   /**
    * @async
    * @param {string} token
    * @returns {Promise<any>}
    */
   jwtVerify(token) {
      return new Promise((resolve, reject) => {
         JWT.verify(token, this.secret, { algorithms: this.algo }, (err, decoded) => {
            if (err) reject(err);
            else resolve(decoded);
         });
      });
   }
}
