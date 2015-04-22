angular.module('hall.controllers', [])

.controller('MotionsCtrl', function($scope, $state, $mdSidenav, Motions) {

  $scope.go = function(destination){
    $state.go(destination);
  }

  Motions.all().then(function(data){
    $scope.motions = data;
  });

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
.controller('MotionsMenuCtrl', function ($scope, $timeout, $mdSidenav, $log) {
  $scope.close = function () {
    $mdSidenav('menu').close();
  };
});
