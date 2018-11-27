Function.prototype.inherits = function(parent) {
  // function Surrogate() {}
  // Surrogate.prototype = parent.prototype;
  // this.prototype = new Surrogate();
  
  this.prototype = Object.create(parent.prototype);
  this.prototype.constructor = this;
};

function MovingObject() {
}

MovingObject.prototype.blowup = function() {
  console.log("kaboom!");
};

function Ship() {}
Ship.inherits(MovingObject);

function Asteroid() {}
Asteroid.inherits(MovingObject);

let blownUpShip = new Ship();
blownUpShip.blowup();

let blownUpRock = new Asteroid();
blownUpRock.blowup();