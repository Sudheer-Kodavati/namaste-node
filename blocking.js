const crypto = require("crypto");
console.log("Hello world");

crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
console.log("First key generated");

setTimeout(() => {
  console.log("Call me ASAP");
}, 0);

var a = 907867;
var b = 987234;

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("second key is generated");
});

function multiply(x, y) {
  const result = a * b;
  return result;
}

var c = multiply(a, b);
console.log("The result is: ", c);
