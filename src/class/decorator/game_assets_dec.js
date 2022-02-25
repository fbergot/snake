/**
 * Description
 * @param {Game} gameInst
 * @param {{sounds}} assets
 * @returns {any}
 */
function game_assets_dec(gameInst, {sounds, images}) {
    gameInst.prototype.sounds = sounds;
    gameInst.prototype.images = images;
    return new gameInst;
}

export default game_assets_dec;