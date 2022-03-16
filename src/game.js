const Asteroid = require("./asteroid");

function Game() {
    const DIM_X = 0;
    const DIM_Y = 0;
    const NUM_ASTEROID = 0;
    this.addAsteroids();
}

Game.prototype.addAsteroids = function () {
    // Store the asteroids as a property of game instance in an array
    let asteroids = [];
    asteroids.push(new Asteroid(this.randomPosition(), this));
    return asteroids;
}

Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, 300, 150);
    let asteroids = this.addAsteroids();

    asteroids.forEach((element, index) => {
        asteroids[index].draw(ctx);
    })
}

Game.prototype.randomPosition = function () {
    // Create random x postion of Asteroid within the game dimension
    let posX = Math.floor(Math.random() * (300 - 0) + 0);
    // Create random Y postion of Asteroid within the game dimension
    let posY = Math.floor(Math.random() * (150 - 0) + 0);
    let pos = [posX, posY];

    return pos;
}

Game.prototype.moveObjects = function () {
    let asteroids = this.addAsteroids();

    asteroids.forEach((element, index) => {
        asteroids[index].move();
    });
}

Game.prototype.wrap = function (pos) {
    return pos;
}




module.exports = Game;