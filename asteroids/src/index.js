const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");

const newGame = new Game();
newGame.moveObjects();

console.log("Webpack is working!");
window.MovingObject = MovingObject;

const bigRock = new MovingObject({pos: [100, 100], vel: [30, 30], radius: 50, color: 'blue'});
const mediumAsteroid = new Asteroid({ pos: [30, 30] });

document.addEventListener("DOMContentLoaded", function() {
  const canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.width = Game.DIM_X;
  canvasEl.height = Game.DIM_Y;

  const ctx = canvasEl.getContext("2d");
  bigRock.draw(ctx);
  mediumAsteroid.draw(ctx);
  // const game = new Game();
  // new GameView(game, ctx).start();
});