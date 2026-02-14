const fs = require("fs");
const https = require("https");

console.log("Hello world");
fs.readFileSync("./file.txt", "utf-8");
console.log("After sync read executing");

var a = 1078698;
var b = 20986;

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Fetched data successfully");
});

setTimeout(() => {
  console.log("setTimeout called after 5 seconds");
}, 5000);

fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log("File Data : ", data);
});

function multiply(x, y) {
  const result = a * b;
  return result;
}

var c = multiply(a, b);
console.log("The result is: ", c);
