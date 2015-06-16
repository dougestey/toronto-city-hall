angular.module('hall.controllers', [])
.controller('AppCtrl', function($scope, $rootScope, $state, $mdSidenav){
  function buildToggler(navID) {
    return function() {
      return $mdSidenav(navID).toggle()
        .then(function () {
          console.log('done');
        });
    }
  }
  $scope.toggleMenu = buildToggler('menu'); 
  $scope.go = function(destination){
    $state.go(destination);
  }
  $scope.back = function(){
    $state.go($rootScope.previousState);
  }
  $rootScope.previousState;
  $rootScope.currentState;
  $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
      $rootScope.previousState = from;
      $rootScope.currentState = to;
      //console.log('Previous state:'+$rootScope.previousState)
      //console.log('Current state:'+$rootScope.currentState)
  });
})
.controller('MotionsCtrl', function($scope, $state, $mdDialog, Motions) {
  $scope.interact = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
    $mdDialog.show(
      $mdDialog.confirm()
        .parent(angular.element(document.body))
        .title('You swiped a motion')
        .content('Now let\'s do something about it.')
        .ariaLabel('Alert Dialog Demo')
        .cancel('I hate this')
        .ok('I love this')
        .targetEvent(ev)
    );
  };
  Motions.all().then(function(data){
    $scope.motions = data;
  });
})
.controller('CouncillorsCtrl', function($scope, $state, apiUrl, Council) {
  $scope.apiUrl = apiUrl;
  Council.all().then(function(data){
    $scope.council = data;
  });
})
.controller('WardsCtrl', function($scope, $state, apiUrl, Wards) {
  //$scope.apiUrl = apiUrl;
  Wards.all().then(function(data){
    console.log(data);
    $scope.wards = data;
  });
})
.controller('CouncillorCtrl', function($scope, $state, apiUrl, $stateParams) {
  /*$scope.apiUrl = apiUrl;
  Council.all().then(function(data){
    $scope.council = data;
  });*/
  $scope.params = $stateParams;
  $scope.councillor = $stateParams.councillor;
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
