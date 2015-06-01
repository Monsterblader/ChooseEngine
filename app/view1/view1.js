'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

    .controller('View1Ctrl', function ($scope, game) {
      $scope.passages = game.getPassages();

      $scope.addPassage = function () {
        var newPassage = {
          title: $scope.passageTitle,
          description: $scope.passageDescription,
          parent: $scope.passageParent,
          routes: []
        };
        game.addPassage(newPassage);
        $scope.passageTitle = "";
        $scope.passageDescription = "";
        $scope.passageParent = "";
      };

      $scope.newParent = function (index, oldParent, newParent) {
        game.changeParent(index, oldParent, newParent);
      };
});