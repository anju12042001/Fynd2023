var exprss = require("express");
var app =exprss();
var bodyParser = require('body-parser');

var urlencoderParser = bodyParser.urlencoded({extended:false});
app.use(exprss.static('public'));

app.get('/IndexStep.html',function(req,res){
    res.sendFile(_dirname + "IndexStep.html");
});

app.post('/post',urlencoderParser,function(req,res){
    response={
        first_name:req.body.first_name,
        last_name:req.body.last_name
    }
    console.log(response);
    res.send(JSON.stringify(response));
});

var server = app.listen(8000,function(){
    console.log("server is running");
})