'use strict';

angular.module('myApp.index')

.controller('VideoYoutubeCtrl', ['$scope', '$sce', function($scope, $sce) {
  
  $scope.initialize = function() {
    $scope.hasVideoId = $scope.video.hasOwnProperty('videoId');
    $scope.src = $sce.trustAs($sce.RESOURCE_URL, "https://www.youtube.com/embed/" + $scope.video.videoId);
  }
  
}]);