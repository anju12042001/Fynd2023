var http = require('http');
var dt = require('./server2.js');

http.createServer(function (req,res) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write("I am Anjali: ");

    res.end();
}).listen(8082);