// Car Class
const Car = function(loc) {
  this.loc = loc;
};

// Move Function
Car.prototype.move = function() {
  this.loc += 1;
};

// Van subClass from Car Class
const Van = function(loc) {
  Car.call(this, loc);
};

Van.prototype = Object.create(Car.prototype);
Van.prototype.constructor = Van;
Van.prototype.grab = function() {
  /*  */
};

module.exports = {
  Car,
  Van
};
