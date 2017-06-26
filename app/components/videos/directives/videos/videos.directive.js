angular.module('myApp.index')
.directive('videos', function() {
  return {
    restrict: 'E',
    templateUrl: function(elem, attr) {
      return 'components/videos/directives/videos/videos.html';
    },
    controller: 'VideosCtrl',
  };
});