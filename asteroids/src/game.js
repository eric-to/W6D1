const Asteroid = require("./asteroid.js");
const MovingObject = require("./moving_object");

function Game() {
  this.asteroids = [];
  this.bullets = [];
  this.ships = [];

  this.addAsteroids();
}

Game.BG_COLOR = "#000000";
Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.FPS = 32;
Game.NUM_ASTEROIDS = 10;

Game.prototype.add = function add(object) {
  if (object instanceof Asteroid) {
    this.asteroids.push(object);
  } else if (object instanceof Bullet) {
    this.bullets.push(object);
  } else if (object instanceof Ship) {
    this.ships.push(object);
  } else {
    throw new Error("unknown type of object");
  }
};

Game.prototype.allObjects = function allObjects() {
  return [].concat(this.ships, this.asteroids, this.bullets);
};

Game.prototype.addAsteroids = function() {
  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
    this.add(new Asteroid({ game: this }));
  }
};

Game.prototype.draw = function draw(ctx) {
  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  ctx.fillStyle = Game.BG_COLOR;
  ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

  this.allObjects().forEach(function(object) {
    object.draw(ctx);
  });
};

Game.prototype.isOutOfBounds = function isOutOfBounds(pos) {
  return (pos[0] < 0) || (pos[1] < 0) ||
    (pos[0] > Game.DIM_X) || (pos[1] > Game.DIM_Y);
};

Game.prototype.moveObjects = function moveObjects(delta) {
  this.allObjects().forEach(function(object) {
    object.move(delta);
  });
};

Game.prototype.randomPosition = function randomPosition() {
  return [
    Game.DIM_X * Math.random(),
    Game.DIM_Y * Math.random()
  ];
};

module.exports = Game;