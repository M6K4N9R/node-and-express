const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  }
  if (req.url === "/about") {
    // BLOCKING CODE !!!
    for (let i = 0; i<1000; i++){
        for(let j = 0; j<1000; j++){
            console.log(`${i} and ${j}`);
            
        }
    }
    res.end("About Page");
  }

  res.end(
    '<h2>The page you are looking for doesn\'t exist</h2><a href="/">Go back to home page</a>'
  );
});

server.listen(5000, () => {
  console.log("Server is listeting on port 5000...");
});
