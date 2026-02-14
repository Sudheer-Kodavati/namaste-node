// // require("./xyz");
// const { calculateSum, x } = require("./calculate/sum");
// const { calculateMultiply } = require("./calculate/multiply");
const { x, calculateMultiply, calculateSum } = require("./calculate");
const data = require("./data.json");
var a = 10;
var b = 20;
calculateSum(a, b);
calculateMultiply(a, b);
console.log(x);

// console.log(data);
console.log(JSON.stringify(data));
