/**
 * @jest-environment jsdom
 */

/**
 * Build new audio HTML
 * @param {string} path
 * @returns {HTMLAudioElement}
 */
function soundBuilder(path, volume) {
   if (typeof path !== "string") throw Error("Bad type of path param");
   if (!volume || typeof volume !== "number") throw Error("Bad type of volume param");

   const audio = new Audio(path);
   audio.volume = volume;
   return audio;
}

/* eslint-disable */
describe("soundBuilder", () => {
   it("should build an instance of HTMLAudioElement", () => {
      const image = soundBuilder("../assets/audio/tone.mp3", 1);
      expect(image instanceof HTMLAudioElement).toBe(true);
   });

   it("should throw an error", () => {
      expect(() => {
         soundBuilder(2, 1);
      }).toThrowError();

      expect(() => {
         soundBuilder("../assets/audio/tone.mp3", []);
      }).toThrowError();
   });
});
