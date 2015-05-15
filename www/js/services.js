angular.module('hall.services', [])

.factory('Motions', function($http) {

  var votes = [];

  return {
    all: function() {
      return $http.get('data/voting.json').then(function(response){
        votes = response.data;
        return votes.slice(0,19);
      })
    },
    remove: function(vote) {
      votes.splice(votes.indexOf(vote), 1);
    },
    get: function(voteId) {
      for (var i = 0; i < votes.length; i++) {
        if (votes[i].id === parseInt(voteId)) {
          return votes[i];
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
        console.log(response);
        council = response.data;
        return council;
      })
    }
  }
});
