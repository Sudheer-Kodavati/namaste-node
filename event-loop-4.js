const fs = require("fs");
setImmediate(() => console.log("setImmediate"));
setTimeout(() => console.log("Timer expired"), 0);
Promise.resolve("promise").then(
  process.nextTick(() => console.log("inner tick")),
);
fs.readFile("./file.txt", "utf8", () => {
  console.log("file reading CB");
});
process.nextTick(() => {
  process.nextTick(() => console.log("inner tick"));
  console.log("next tick");
});
console.log("Last line of file");
