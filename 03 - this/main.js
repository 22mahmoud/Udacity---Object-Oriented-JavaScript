var fn = function(a, b) {
  console.log(this, a, b);
};

var r = {},
  g = {},
  b = {},
  y = {};

r.method = fn;
// r.method.call(r, g, b);
// r.method(g, b);
// fn(g, b); // ? {} {}
// fn.call(y, g, b);
//setTimeout(() => r.method(g, b), 1000);
var m = new r.method(g, b);
console.log(m);
