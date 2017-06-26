angular.module('myApp.videos')
.directive('videoYoutube', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      video: "="
    },
    templateUrl: function(elem, attr) {
      return 'components/videos/directives/video-youtube/video.html';
    },
    controller: 'VideoYoutubeCtrl'
  };
});