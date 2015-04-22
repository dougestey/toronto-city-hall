angular.module('hall', ['ui.router', 'ngAria', 'ngAnimate', 'ngMaterial', 'hall.controllers', 'hall.services'])

.run(function(){
  //
})

.config(function($stateProvider, $urlRouterProvider, $mdThemingProvider) {

  $mdThemingProvider.theme('default')
    .primaryPalette('cyan', {
      'default': '500'
    })
    .accentPalette('lime', {
      'default': 'A200'
    });

  $stateProvider

  .state('motions', {
    url: '/motions',
    abstract: true,
    templateUrl: 'templates/motions.html',
    controller: 'MotionsCtrl'
  })

  // Each tab has its own nav history stack:

  .state('motions.trending', {
    url: '/trending',
    views: {
      'trending': {
        templateUrl: 'templates/motions/trending.html'
      }
    }
  })

  .state('motions.upcoming', {
    url: '/upcoming',
    views: {
      'upcoming': {
        templateUrl: 'templates/motions/upcoming.html'
      }
    }
  })

  .state('motions.favourites', {
    url: '/favourites',
    views: {
      'favourites': {
        templateUrl: 'templates/motions/favourites.html'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/motions/trending');

});
