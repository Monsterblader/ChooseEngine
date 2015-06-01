'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
      }])
    .factory('game', function () {
      var passages = [{title: "Start", description: "You are here.", routes: [1, 2]},
        {title: "Point 1", description: "You are here.", parent: 0, routes: [3, 4]},
        {title: "Point 2", description: "You are here.", parent: 0, routes: []},
        {title: "Point 3", description: "You are here.", parent: 1, routes: []},
        {title: "Point 4", description: "You are here.", parent: 1, routes: []}
      ];

      var methods = {};

      methods.addPassage = function (newPassage) {
        passages.push(newPassage);
        newPassage.parent && passages[newPassage.parent].routes.push(passages.length - 1);
      };

      methods.changeParent = function (index, oldParent) {
        var routes, i;

        routes = passages[oldParent].routes;
        i = routes.indexOf(index);
        routes.slice(i, 1);


      };

      methods.getPassages = function () {
        return passages;
      };

      return methods;
    });
