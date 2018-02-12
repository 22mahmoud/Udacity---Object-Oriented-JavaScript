const Car = function(loc) {
  let obj = { loc };
  obj.move = () => obj.loc++;
  return obj;
};

const Van = function(loc) {
  let obj = Car(loc);

  obj.grab = () => "grab";
  return obj;
};

const Cop = function(loc) {
  let obj = Car(loc);
  obj.call = () => "call";
  return obj;
};

module.exports = {
  Van,
  Cop
};
