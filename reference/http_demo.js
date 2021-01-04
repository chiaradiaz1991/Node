const http = require("http");

// Create server object

http
  .createServer((req, res) => {
    // write response
    res.write("hello world");
    res.end();
  })
  .listen(8080, () => console.log("server running"));
