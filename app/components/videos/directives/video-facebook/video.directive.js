angular.module('myApp.index')
.directive('videoFacebook', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      video: "="
    },
    templateUrl: function(elem, attr) {
      return 'components/videos/directives/video-facebook/video.html';
    },
    controller: 'VideoFacebookCtrl'
  };
});