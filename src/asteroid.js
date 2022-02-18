const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");

function Asteroid(pos, vel, radius, color) {
    MovingObject.call(this, pos, vel, radius, color);
    this.color = 'grey';
    this.radius = 10;
    this.vel = Util.randomVec(10);
}

Util.inherits.apply(Asteroid, [Asteroid, MovingObject]);

module.exports = Asteroid;