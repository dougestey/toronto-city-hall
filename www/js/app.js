angular.module('hall', ['ui.router', 'ngAria', 'ngAnimate', 'ngMaterial', 'hall.controllers', 'hall.services'])

.constant('apiUrl', 'http://localhost:1337')

.run(function(){
  //
})

.config(function($stateProvider, $urlRouterProvider, $mdThemingProvider) {

  $mdThemingProvider.theme('default')
    .primaryPalette('blue', {
      'default': '500'
    })
    .accentPalette('yellow', {
      'default': '400'
    });

  $stateProvider

  .state('motions', {
    url: '/motions',
    abstract: true,
    templateUrl: 'templates/motions.html',
    controller: 'MotionsCtrl'
  })
  .state('motions.upcoming', {
    url: '/upcoming',
    views: {
      'upcoming': {
        templateUrl: 'templates/motions/upcoming.html'
      }
    }
  })
  .state('motions.latest', {
    url: '/latest',
    views: {
      'latest': {
        templateUrl: 'templates/motions/latest.html'
      }
    }
  })

  .state('councillors', {
    url: '/councillors',
    abstract: true,
    templateUrl: 'templates/councillors.html',
    controller: 'CouncillorsCtrl'
  })
  .state('councillors.councillor', {
    url: '/:id'
  })
  .state('councillors.roster', {
    url: '/roster',
    views: {
      'roster': {
        templateUrl: 'templates/councillors/roster.html'
      }
    }
  })
  .state('councillors.attendance', {
    url: '/attendance',
    views: {
      'attendance': {
        templateUrl: 'templates/councillors/attendance.html'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/motions/latest');

});
