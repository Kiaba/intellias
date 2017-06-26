'use strict';

angular.module('myApp.index')

.controller('VideoUrlCtrl', ['$scope', '$sce', function($scope, $sce) {
  
  $scope.initialize = function() {
    $scope.hasVideoId = $scope.video.hasOwnProperty('url');
    $scope.src = $sce.trustAs($sce.RESOURCE_URL, $scope.video.url);
  }
  
}]);