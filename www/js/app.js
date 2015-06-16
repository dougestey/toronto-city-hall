angular.module('hall', ['ui.router', 'ngAria', 'ngAnimate', 'ngTouch', 'ngMaterial', 'hall.controllers', 'hall.directives', 'hall.services'])

.constant('apiUrl', 'http://localhost:1338')

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
    url: '/:councillor',
    views: {
      'roster': {
        controller: 'CouncillorCtrl',
        templateUrl: 'templates/councillors/single.html'
      }
    }
  })
  .state('councillors.roster', {
    url: '/roster',
    views: {
      'roster': {
        templateUrl: 'templates/councillors/roster.html'
      }
    }
  })

  .state('wards', {
    url: '/wards',
    abstract: true,
    templateUrl: 'templates/wards.html',
    controller: 'WardsCtrl'
  })
  .state('wards.list', {
    url: '/list',
    views: {
      'list': {
        templateUrl: 'templates/wards/list.html'
      }
    }
  })

  .state('settings', {
    url: '/settings',
    templateUrl: 'templates/settings.html'
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/motions/latest');

});
