'use strict';

angular.module('myApp.index')

.controller('VideosCtrl', ['$scope', 'videosService', function($scope, videosService) {
  
  $scope.videos = [];
  
  $scope.initialize = function() {
    return videosService.load().then(function(list) {
      $scope.videos = list;
    });
  }
  
}]);