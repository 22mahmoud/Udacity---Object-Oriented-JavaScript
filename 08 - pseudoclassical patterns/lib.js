// Car Class
const Car = function(loc) {
  this.loc = loc;
};

// Move Function
Car.prototype.move = function() {
  this.loc += 1;
};

module.exports = {
  Car
};
