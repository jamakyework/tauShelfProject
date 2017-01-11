var myApp = angular.module('myApp', []);

myApp.controller('mainController',['$scope', '$http', '$window',
  function($scope, $http, $window) {
  console.log('inside main controller');

  $scope.login = function(){

    var userInfo = {
      username: $scope.username,
      password: $scope.password
    };

    $http({
      method: 'POST',
      url: '/',
      data: userInfo
    }).then(function successCallback(response) {
      console.log(response);
      $window.location.href = '/home';
    }, function errorCallback(error) {
      console.log('error', error);
      $window.location.href = '/';
    });
  };
}]);

myApp.controller('registerController',['$scope', '$http', '$window',
  function($scope, $http, $window) {
  console.log('inside register controller');

  $scope.register = function() {
    var userInfo = {
      username: $scope.username,
      password: $scope.password
    };

    $http({
      method: 'POST',
      url: '/register',
      data: userInfo
    }).then(function successCallback(response) {
      console.log('success', response);
      $window.location.href = '/';
    }, function errorCallback(error) {
      console.log('error occurred!');
    });
  };
}]);
