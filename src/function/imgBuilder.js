import HeadBottom from "../assets/picture/headBottom.png";
import HeadTop from "../assets/picture/headTop.png";
import HeadLeft from "../assets/picture/headLeft.png";
import HeadRight from "../assets/picture/headRight.png";
import Food from "../assets/picture/food.png";
import BodyX from "../assets/picture/bodyX.png";

/**
 * Build new image
 * @param {string} path
 * @returns {HTMLImageElement}
 */
function imgBuilder(path) {
   if (typeof path !== "string") throw Error("Bad type of path param");
   const img = new Image();
   img.src = path;
   return img;
}

export const images = {
   snake: {
      head: {
         bottom: imgBuilder(HeadBottom),
         top: imgBuilder(HeadTop),
         left: imgBuilder(HeadLeft),
         right: imgBuilder(HeadRight),
      },
      body: imgBuilder(BodyX),
   },
   food: imgBuilder(Food),
};
