const carLike = function(obj, loc) {
  obj.loc = loc;
  obj.move = () => obj.loc++;

  return obj;
};

module.exports = {
  carLike
};
