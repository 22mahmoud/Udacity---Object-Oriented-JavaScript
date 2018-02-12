const { Van, Cop } = require("./lib");

let amy = Van(1);
amy.move();
console.log(amy);

let ben = Van(9);
ben.move();

let cop = Cop(9);
cop.move();
