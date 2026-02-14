const http = require("http");
const server = http.createServer(function (req, res) {
  if (req.url === "/getSecretData") {
    res.end("No secret data Sudheer");
  }
  res.end("Hellow World");
});
server.listen(1818);
