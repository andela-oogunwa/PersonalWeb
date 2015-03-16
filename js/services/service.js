var portfolioService = angular.module('portfolioService',[]);

portfolioService.factory('portfolioFactory', ['$http', function($http) {

  return {
    httpCall: function (callback) {
     $http.get("http://api.github.com/users/andela-oogunwa/repos")
     .success(callback)
     .error(function(error){
      console.log(error);
     });
    }
  }
  
}]);