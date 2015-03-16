var Controllers = angular.module('Controllers', ['portfolioService']);

Controllers.controller('portfolioController', ['$scope', 'portfolioFactory', function ($scope, portfolioFactory) {

}]);

Controllers.controller('HomeController', ['$scope', 'portfolioFactory', function ($scope, portfolioFactory){
}]);

Controllers.controller('AboutController', ['$scope', function ($scope) {
}]);

Controllers.controller('PortfolioController', ['$scope', 'portfolioFactory', function ($scope, portfolioFactory) {
  $scope.isLoaded = false;
   $scope.displayRepos = function() {
    $scope.isLoaded = true;
     portfolioFactory.httpCall(function (response) {
      $scope.repos = response;
      $scope.isLoaded = false;
      console.log($scope.repos);
     });
   };

   $scope.displayRepos();
}]);

Controllers.controller('ContactController', ['$scope', function ($scope) {
}]);

