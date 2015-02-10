'use strict';

/**
 * @ngdoc function
 * @name testingPravinApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testingPravinApp
 */
angular.module('testingPravinApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
