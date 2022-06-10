import startingSnakeBuilder from "./startingSnakeBuilder";

/* eslint-disable */
describe("startingSnakeBuilder", () => {
   it("should return array of body snake with good length", () => {
      const bodySnake = startingSnakeBuilder(5, 8, 10, 20);
      //   [
      //   { x: 100, y: 160 },
      //   { x: 80, y: 160 },
      //   { x: 60, y: 160 },
      //   { x: 40, y: 160 },
      //   { x: 20, y: 160 },
      //   { x: 0, y: 160 },
      //   { x: -20, y: 160 },
      //   { x: -40, y: 160 },
      //   { x: -60, y: 160 },
      //   { x: -80, y: 160 }
      // ]
      expect(bodySnake.length).toEqual(10);
   });

   it("should throw an error", () => {
      expect(() => {
         startingSnakeBuilder(5, 8, 10, 0);
      }).toThrowError();
   });
});
