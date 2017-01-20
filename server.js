var express = require('express');

var app = express();


var server = require('http').Server(app);

app.use(express.static('public'));

app.get('/',function(req,res){
    res.sendFile(__dirname + '/views' + '/index.html');
});

app.listen(3000);