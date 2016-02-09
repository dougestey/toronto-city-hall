angular.module('hall.services', ['hall.data'])

.factory('Motions', function(cityApi) {
  return {
    latest: function() {
      return cityApi.agenda_items.getAllLatestAgendaItems().then(function(items){
        return items;
      })
    },
    upcoming: function() {
      return cityApi.agenda_items.getAllUpcomingAgendaItems().then(function(items){
        return items;
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
.factory('Council', function(cityApi) {
  return {
    all: function() {
      return cityApi.people.getAllPeople().then(function(people){
        return people;
      })
    }
  }
})
.factory('Wards', function(cityApi) {
  return {
    all: function() {
      return cityApi.posts.getAllPosts().then(function(wards) {
        return wards;
      })
    }
  }
});
