/**
 * @jest-environment jsdom
 */

function imgBuilder(path) {
   if (typeof path !== "string") throw Error("Bad type of path param");
   const img = new Image();
   img.src = path;
   return img;
}

/* eslint-disable */
describe("imgBuilder", () => {
   it("should build an instance of HTMLImageElement", () => {
      const image = imgBuilder("../assets/picture/food.png");
      expect(image instanceof HTMLImageElement).toBe(true);
   });

   it("should throw an error", () => {
      expect(() => {
         imgBuilder(2);
      }).toThrowError();
   });
});
