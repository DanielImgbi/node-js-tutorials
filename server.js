const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  res.setHeader("content-Type", "text/html");
  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "home.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/home": //incase of redirect
      res.statusCode = 301;
      res.setHeader("location", "/");
      res.end();
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("checking for request on port 3000!!!");
});
