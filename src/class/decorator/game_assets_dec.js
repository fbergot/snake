/**
 * Add sound and images in Game proto
 * @param {Game} game
 * @param {{sounds: {gameOver: HTMLAudioElement, eatFood: HTMLAudioElement}, images: {
 *  snake: {head: {bottom: HTMLImageElement, top: HTMLImageElement, left: HTMLImageElement,
 * right: HTMLImageElement}, body: HTMLImageElement}, food: HTMLImageElement    }
 * }} assets
 * @returns {Game}
 */
function game_assets_dec(game, { sounds, images }) {
   game.prototype.sounds = sounds;
   game.prototype.images = images;
   return game;
}

export default game_assets_dec;
