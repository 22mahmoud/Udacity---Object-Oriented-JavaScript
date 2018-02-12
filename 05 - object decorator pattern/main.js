const { carLike } = require("./lib");

let amy = carLike({}, 1);
amy.move();
console.log(amy);
let ben = carLike({}, 9);
ben.move();
