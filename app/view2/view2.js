'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

    .controller('View2Ctrl', function ($scope, game) {
      $scope.passages = game.getPassages();
      $scope.path = [$scope.passages[0]];
      $scope.currentLocation = $scope.passages[0];

      $scope.addChoice = function (index) {
        var newLocation = $scope.passages[index];
        $scope.path.push(newLocation);
        $scope.currentLocation = newLocation;
      };
});