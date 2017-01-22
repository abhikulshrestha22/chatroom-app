angular.module('chatroomApp')
    .controller('chatroomController',function($scope,user){
        $scope.a = 'b';

        $scope.user = user;

        $scope.user.a = $scope.user.name;



        var socket = io();

        $scope.sendMessage= function(){
            console.log('i am logged');
            console.log(socket);
            socket.emit('chat message',$scope.user.message);
        };

        socket.on('chat message',function(msg){
            console.log(msg);
        });
       
    });