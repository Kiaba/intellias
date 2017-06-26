'use strict';

angular.module('myApp.videos')

.service('videosService', ['$http', function($http) {
  this.load = function() {
    return $http({
      method: 'GET',
      url: 'https://cdn.playbuzz.com/content/feed/items'
    }).then(function successCallback(response) {
      return response.data.items;
    }, function errorCallback(response) {
      // ko
    });
  }
  
  this.getSource = function(video) {
    return (video.type === "video") ? video.source: "unknown";
  }
}]);