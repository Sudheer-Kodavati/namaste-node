console.log("Hello world");
var a = 908765;
var b = 209876;

setTimeout(() => {
  console.log("Call me ASAP");
}, 0);

setTimeout(() => {
  console.log("Call me after 3 seconds");
}, 3000);

function multiply(x, y) {
  const result = a * b;
  return result;
}

var c = multiply(a, b);
console.log("The result is: ", c);
