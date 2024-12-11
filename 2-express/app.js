const http = require("http");

const server = http.createServer((req, res) => {
  console.log("user hit the server");
  res.end("Hey there");
});

server.listen(5000);
