var http=require('http');
var dt=require('./ownModule');
http.createServer(function(req, res){
    res.writeHead(200,{'content-Type':'text/html'});
    res.write("The.Date and time are currently:"+dt.myDateTime());
    res.end();
}).listen(8080);
