const http = require("http");

const server = http.createServer((req, res) => {
  // console.log("server started");
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Home Page</h1>");
  } else if (url === "/bjk") {
    res.write("<h1>bjk page</h1>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("404 not found");
  }

  res.end();
});

const port = 3000;

server.listen(port, () => {
  console.log(`server started on port ${port}`);
});
