const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");
const Asteroid = require("./asteroid.js");

window.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");

    const mo = new MovingObject([30, 30], [10, 10], 5, "#00FF00");
    const myAstroid = new Asteroid([100, 100]);

    mo.draw(ctx);
    myAstroid.draw(ctx);
});

window.MovingObject = MovingObject;
window.Util = Util;
window.Asteroid = Asteroid;