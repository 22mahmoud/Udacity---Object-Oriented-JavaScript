// Car Class
const Car = function(loc) {
  let obj = Object.create(Car.prototype);
  obj.loc = loc;
  return obj;
};

// Move Function
Car.prototype.move = function() {
  this.loc += 1;
};

module.exports = {
  Car
};
