var http = require('http');

http.createServer( function (req, res) {
  res.writeHead (200,
           {'Content-Type': 'text/plain'});
  res.end ('hello javascript\n');
}).listen (5000, 'localhost');

console.log ('server listening on 0.0.0.0 at port 5000');
