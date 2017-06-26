'use strict';

angular.module('myApp.index')

.controller('VideoUrlCtrl', ['$scope', '$sce', function($scope, $sce) {
  
  $scope.initialize = function() {
    $scope.src = $sce.trustAs($sce.RESOURCE_URL, $scope.video.url);
  }
  
}]);