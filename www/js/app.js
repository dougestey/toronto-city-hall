// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngAria', 'ngMaterial', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $mdThemingProvider) {

  $mdThemingProvider.theme('default')
    .primaryPalette('cyan', {
      'default': '500'
    })
    .accentPalette('pink', {
      'default': '400'
    });

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
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

  /*.state('tab.friends', {
      url: '/friends',
      views: {
        'tab-friends': {
          templateUrl: 'templates/tab-friends.html',
          controller: 'FriendsCtrl'
        }
      }
    })
    .state('tab.friend-detail', {
      url: '/friend/:friendId',
      views: {
        'tab-friends': {
          templateUrl: 'templates/friend-detail.html',
          controller: 'FriendDetailCtrl'
        }
      }
    })*/


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/motions/trending');

});
