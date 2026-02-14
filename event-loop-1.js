const fs = require("fs");
const a = 1000;
setImmediate(() => console.log("setImmediate"));

fs.readFile("./file.txt", "utf8", () => {
  console.log("File reading");
});
setTimeout(() => console.log("Timer expired"), 0);
function printA() {
  console.log("a=", a);
}
printA();
console.log("Last line of the file");
