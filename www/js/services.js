angular.module('hall.services', [])

.factory('Motions', function($http, apiUrl) {

  var motions = [];

  return {
    all: function() {
      return $http.get(apiUrl + '/voteevent?&sort=identifier%20DESC&limit=100').then(function(response){
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
    },
    one: function(id) {
      return $http.get(apiUrl + '/councillor/' + id).then(function(response){
        council = response.data;
        return council;
      })
    }
  }
})
.factory('Wards', function($http, apiUrl) {

  var council = [];

  return {
    all: function() {
      return $http.get(apiUrl + '/ward?sort=id%20ASC').then(function(response){
        wards = response.data;
        return wards;
      })
    }
  }
});
