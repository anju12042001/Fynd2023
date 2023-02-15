var http = require('http');
var dt = require('./server3.js');

http.createServer(function (req,res) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write("I am Student: ");

    res.end();
}).listen(8083);