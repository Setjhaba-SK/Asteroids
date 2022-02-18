function MovingObject(pos, vel, radius, color) { 
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
};

// Drawing a moving object with canvas

MovingObject.prototype.draw = function (ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
}

MovingObject.prototype.move = function () {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
}

module.exports = MovingObject;