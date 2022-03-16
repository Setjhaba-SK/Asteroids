const Game = require("./game");

function GameView () {

}

GameView.prototype.start = function () {
    // Sets an interval to animate the game
    window.setInterval ( () => {
        const canvas = document.getElementById("game-canvas");
        const ctx = canvas.getContext("2d");
        Game.prototype.moveObjects();
        Game.prototype.draw(ctx);

    }, 20);
}

module.exports = GameView;