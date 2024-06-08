import game_assets_dec from "./game_assets_dec.js";

/* eslint-disable */
describe("game_assets_dec", () => {
   it("should add property in prototype of constructor", () => {
      class Test {}

      const properties = { sounds: "test", images: "test" };
      const TestWithProps = game_assets_dec(Test, properties);

      expect(
         (() => {
            return TestWithProps.prototype.sounds && TestWithProps.prototype.images
               ? true
               : false;
         })()
      ).toBe(true);
   });
});
