angular.module('starter.services', [])

.factory('Motions', function($http) {

  var votes = [];

  return {
    all: function() {
      return $http.get('data/voting.json').then(function(response){
        votes = response.data;
        return votes;
      })
    },
    remove: function(vote) {
      chats.splice(votes.indexOf(vote), 1);
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
});
