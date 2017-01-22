// var express = require('express');

// var app = express();




// var http = require('http').Server(app);
// var io = require('socket.io')(http);

var express = require('express');
http = require('http');
var app = express();
var server = http.createServer(app);

var io = require('socket.io').listen(server);




app.use(express.static('public'));

app.get('/',function(req,res){
    res.sendFile(__dirname + '/views' + '/index.html');
});

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
        io.emit('chat message',msg);
  });
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

server.listen(3000,function(){
    console.log("Chatroom running on port 3000");
});