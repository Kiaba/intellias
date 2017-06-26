angular.module('myApp.index')
.directive('videoDirective', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      video: "="
    },
    templateUrl: function(elem, attr) {
      return 'components/videos/directives/video/video.html';
    },
    controller: 'VideoCtrl',
  };
});