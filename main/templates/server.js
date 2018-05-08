var express = require('express');
var app = express();
app.get('/',function(req,res){
    res.sendFile(__dirname+'/'+"index.html");
})
app.get('/index',function(req,res){
    res.sendFile(__dirname+'/'+"index.html");
})
// app.get('/line',function(req,res){
//     res.sendFile(__dirname+'/'+"product.html");
// })
app.get('/product',function(req,res){
    res.sendFile(__dirname+'/'+"otherproduct.html");
})
app.get('/powercord',function(req,res){
    res.sendFile(__dirname+'/'+"powercord.html");
})
app.get('/mobile_powercord',function(req,res){
    res.sendFile(__dirname+'/'+"p.html");
})
app.get('/news',function(req,res){
    res.sendFile(__dirname+'/'+"news.html");
})
app.get('/mobile_product',function(req,res){
    res.sendFile(__dirname+'/'+"product.html");
})
app.use('/static',express.static('public'));
var server = app.listen(8094,'0.0.0.0',function(){
    var host = server.address().address
    var port = server.address().port

    console.log('host:',host,'port:',port);
});
