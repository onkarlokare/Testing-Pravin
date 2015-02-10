'use strict';

/**
 * @ngdoc function
 * @name testingPravinApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testingPravinApp
 */
angular.module('testingPravinApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
