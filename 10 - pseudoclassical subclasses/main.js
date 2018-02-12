const { Car, Van } = require("./lib");

const zed = new Car(3);
zed.move();
console.log("zed", zed);

const amy = new Van(9);
amy.move();
amy.grab();
console.log("amy", amy);
console.log("amy", amy.constructor);
