angular.module('hall.services', [])

.factory('Motions', function($http, apiUrl) {

  var motions = [];

  return {
    all: function() {
      return $http.get(apiUrl + '/motion?where={%22identifier%22:{%22contains%22:%22.CC%22}}&sort=identifier%20DESC&limit=100').then(function(response){
        motions = response.data;
        return motions;
      })
    },
    remove: function(vote) {
      motions.splice(votes.indexOf(vote), 1);
    },
    get: function(motionId) {
      for (var i = 0; i < motions.length; i++) {
        if (motions[i].id === parseInt(motionId)) {
          return motions[i];
        }
      }
      return null;
    }
  }
})
.factory('Council', function($http, apiUrl) {

  var council = [];

  return {
    all: function() {
      return $http.get(apiUrl + '/councillor').then(function(response){
        council = response.data;
        return council;
      })
    }
  }
});
