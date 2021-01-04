// examples

// console.log('hello from node js')

// const person = require('./person')
// const Person = require('./class')
// const newPerson = new Person("Chiara", "pink")

// console.log(person)
// console.log(newPerson.greeting())

// server

const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // console.log(req.url)
  // if (req.url === "/") {
  //   fs.readFile(
  //     path.join(__dirname, "public", "index.html"),
  //     (err, content) => {
  //       if (err) throw err;
  //       res.writeHead(200, { "Content-Type": "text/html" });
  //       res.end(content);
  //     }
  //   );
  // }

  // if (req.url === "/about") {
  //   fs.readFile(
  //     path.join(__dirname, "public", "about.html"),
  //     (err, content) => {
  //       if (err) throw err;
  //       res.writeHead(200, { "Content-Type": "text/html" });
  //       res.end(content);
  //     }
  //   );
  // }

  // if (req.url === "/api/users") {
  //   const users = [
  //     { name: "Chiara", color: "green" },
  //     { name: "Luz", color: "yellow" },
  //   ];
  //   res.writeHead(200, { "Content-Type": "appllication/json" });
  //   res.end(JSON.stringify(users));
  // }

  // build filepath dynamic
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );
  console.log(filePath);
  // extension of the file
  let extname = path.extname(filePath);
  // initial content type
  let contentType = "text/html";

  // check the ext name and set the correct content type
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  // read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        //page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf-8");
          }
        );
      } else {
        // other error
        res.writeHead(500);
        res.end(`Server error: ${err.code}`);
      }
    } else {
      // Success
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content);
    }
  });
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
