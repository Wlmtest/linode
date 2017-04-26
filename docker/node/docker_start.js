#!/usr/bin/env node
const http = require('http');
const server = http.createServer(function (req, res) {
  res.writeHeader(200, {"Content-Type": "text/plain"});
  res.end("Hello\n");
});
server.listen(3000);
console.log("httpd start @3000");
