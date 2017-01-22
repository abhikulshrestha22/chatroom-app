angular.module('chatroomApp')
    .controller('indexController',function($scope,$location,user){

        $scope.details = {};
       


        $scope.goToRoom = function(){
            //console.log($scope.details.name);

            $scope.user =user;
            $scope.user.name = $scope.details.name;

            $location.path('/chatroom');


        };

        


        
    });