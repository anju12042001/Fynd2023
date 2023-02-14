var fs=require('fs');
var rs=fs.createReadStream('./demofile.text');
rs.on('open', function(){
    console.log('The file is open');
});
