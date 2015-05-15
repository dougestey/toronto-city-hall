angular.module('hall.controllers', [])
.controller('AppCtrl', function($scope, $state, $mdSidenav){
  function buildToggler(navID) {
    return function() {
      return $mdSidenav(navID).toggle()
        .then(function () {
          console.log('done');
        });
    }
  }
  $scope.toggleMenu = buildToggler('menu'); 
})
.controller('MotionsCtrl', function($scope, $state, Motions) {
  $scope.go = function(destination){
    $state.go(destination);
  }
  Motions.all().then(function(data){
    $scope.motions = data;
  });
})
.controller('CouncillorsCtrl', function($scope, $state, apiUrl, Council) {
  $scope.go = function(destination){
    $state.go(destination);
  }
  $scope.apiUrl = apiUrl;
  Council.all().then(function(data){
    $scope.council = data;
  });
})
.controller('MenuCtrl', function ($scope, $state, $mdSidenav) {
  $scope.go = function(destination){
    $mdSidenav('menu').close();
    $state.go(destination);
  }
  $scope.close = function () {
    $mdSidenav('menu').close();
  };
});
