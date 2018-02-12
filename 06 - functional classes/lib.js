const Car = function(loc) {
  let obj = { loc };
  obj = { ...Car.methods, ...obj };

  return obj;
};

Car.methods = {
  move: function() {
    this.loc += 1;
  }
};

module.exports = {
  Car
};
