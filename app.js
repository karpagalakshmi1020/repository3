(function () {
    'use strict';
    
    angular.module('caseApp', [])
    .controller('caseController', caseController);
    
    caseController.$inject = ['$scope', '$filter'];
    function caseController($scope, $filter) {
      $scope.name = "KARPAGA LAKSHMI";
    
      $scope.lower = function () {
        var lowCase = $filter('lowercase');
        $scope.name = lowCase($scope.name);
      };
    }
    })();
