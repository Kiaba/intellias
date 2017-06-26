angular.module('myApp.videos')
.directive('videoUrl', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      video: "="
    },
    templateUrl: function(elem, attr) {
      return 'components/videos/directives/video-url/video.html';
    },
    controller: 'VideoUrlCtrl'
  };
});