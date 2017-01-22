angular.module('chatroomApp')
    .controller('chatroomController',function($scope,user){
        $scope.a = 'b';

        $scope.user = user;

        $scope.user.a = $scope.user.name;
    });