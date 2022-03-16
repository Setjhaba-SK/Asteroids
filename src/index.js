const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game");
const GameView = require("./game_view");

window.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");

    const gameView = new GameView();
    gameView.start();
});



window.MovingObject = MovingObject;
window.Util = Util;
window.Asteroid = Asteroid;
window.Game = Game;
window.GameView = GameView;
// window.Ship = Ship;