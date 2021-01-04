const fs = require("fs");
const path = require("path");

// create a folder in my system
fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
  if (err) throw err;
  console.log("folder created");
});

// create and write to file
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello Robot",
  (err) => {
    if (err) throw err;
    console.log("Filed written to");

    // File append
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'),
    'I love Node Js', err=> {
      if (err) throw err;
      console.log('File witten to..')
    })
  }
);
