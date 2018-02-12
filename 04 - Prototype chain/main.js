var gold = { a: 1 }; // Create an object w/ prop a = 1
console.log("gold", gold.a); // 1
console.log("gold", gold.z); // undefined

// crate an object w/ prop b = 2 && get all props from the gold Object
var blue = Object.assign({ b: 2 }, gold);
console.log("blue", blue.a);
console.log("blue", blue.b);
console.log("blue", blue.z);

// create an Object w/ empty props and make a prototype from gold Object
var rose = Object.create(gold);
rose.b = 2;
// prop 'a' it doesn't exist in the rose Object but the compiler also search in the prototype obj
console.log("rose", rose.a); // 1
console.log("rose", rose.b); // 2
console.log("rose", rose.z); // undefined

gold.z = 3;
console.log("blue", blue.z); // undefined
console.log("rose", rose.z); // 3

// Object.prototype.X()

console.log("gold.hasOwnProp()", gold.hasOwnProperty("a"));
