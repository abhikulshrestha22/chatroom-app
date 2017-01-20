angular.module('chatroomApp')
    .config(function($routeProvider,$locationProvider){

        $locationProvider.hashPrefix('');

        $routeProvider

            .when('/',{
                templateUrl:'views/home.html'
            })
            .when('/chatroom',{
                templateUrl:'views/chatroom.html'
            }); 
    });