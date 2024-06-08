import startingSnakeBuilder from "./startingSnakeBuilder.js";

/* eslint-disable */
describe("startingSnakeBuilder", () => {
   it("should return array of body snake with good length", () => {
      const bodySnake = startingSnakeBuilder(5, 8, 10, 20);
      expect(bodySnake.length).toEqual(10);
   });

   it("should return true if good incrementation", () => {
      const box = 20;
      const bodySnake = startingSnakeBuilder(5, 8, 10, box);
      //  log: [
      //     { x: 100, y: 160 },
      //     { x: 80, y: 160 },
      //     { x: 60, y: 160 },
      //     { x: 40, y: 160 },
      //     { x: 20, y: 160 },
      //     { x: 0, y: 160 },
      //     { x: -20, y: 160 },
      //     { x: -40, y: 160 },
      //     { x: -60, y: 160 },
      //     { x: -80, y: 160 }
      //   ]
      const xValues = bodySnake.map((item) => item.x);

      function checkValues(arrValues, boxWidth) {
         let val = arrValues[0];

         for (let i = 1; i < arrValues.length; i++) {
            val = arrValues[i];
            if (val === arrValues[i + 1] - boxWidth) {
               return false;
            }
         }
         return true;
      }

      expect(checkValues(xValues, box)).toBe(true);
   });

   it("should throw an error", () => {
      expect(() => {
         startingSnakeBuilder(5, 8, 10, 0);
      }).toThrowError();

      expect(() => {
         startingSnakeBuilder(5, 8, 0, 30);
      }).toThrowError();
   });
});
