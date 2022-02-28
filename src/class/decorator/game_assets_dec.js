/**
 * Add sound and images in Game proto
 * @param {Game} gameInst
 * @param {{sounds: {gameOver: HTMLAudioElement, eatFood: HTMLAudioElement}, images: {
 *  snake: {head: {bottom: HTMLImageElement, top: HTMLImageElement, left: HTMLImageElement,
 * right: HTMLImageElement}, body: HTMLImageElement}, food: HTMLImageElement    }
 * }} assets
 * @returns {Game}
 */
function game_assets_dec(gameInst, {sounds, images}) {
    gameInst.prototype.sounds = sounds;
    gameInst.prototype.images = images;
    return new gameInst;
}

export default game_assets_dec;