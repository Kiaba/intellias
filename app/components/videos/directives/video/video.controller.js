'use strict';

angular.module('myApp.videos')

.controller('VideoCtrl', ['$scope', 'videosService', function($scope, videosService) {
  
  $scope.initialize = function() {
    $scope.count = 0;
    if($scope.video.views > 1000000) {
      $scope.count = 2;
      $scope.views = ($scope.video.views/1000000).toFixed(1)
    } else if($scope.video.views > 1000) {
      $scope.count = 1;
      $scope.views = ($scope.video.views/1000).toFixed(1)
    } else {
      $scope.count = 0;
      $scope.views = $scope.video.views;
    }
    $scope.pluralize = {
      '0': '{{views}} views',
      '1': '{{views}}S views',
      'other': '{{views}}M views'
    }
  }
  
  $scope.getSource = function(video) {
    return videosService.getSource(video);
  }
  
}]);