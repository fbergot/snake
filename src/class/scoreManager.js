import dotenv from "dotenv";

dotenv.config();

// var myInit = {
//    method: "GET",
//    headers: myHeaders,
//    mode: "cors",
//    cache: "default",
// };

const toAPI = async (token, name, score, url, fetchOptions) => {
   const header = { accept: "application/json", Authorization: `Bearer ${token}` };
   const data = JSON.stringify({ name: name, score: score });

   try {
      await window.fetch(url, {
         ...fetchOptions,
         headers: { ...header },
         body: data,
      });
   } catch (err) {
      console.err(err.message);
   }
};

class ScoreManager {
   constructor() {}
}
