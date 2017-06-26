'use strict';

angular.module('myApp.index')

.controller('VideoFacebookCtrl', ['$scope', '$sce', function($scope, $sce) {
  
  $scope.initialize = function() {
    $scope.hasVideoId = $scope.video.hasOwnProperty('videoId');
    $scope.src = $sce.trustAs($sce.RESOURCE_URL, "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fsamopomich.ua%2Fvideos%2F" + $scope.video.videoId + "%2F&show_text=0");
  }
  
}]);