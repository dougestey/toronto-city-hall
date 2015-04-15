angular.module('starter.controllers', [])

.controller('MotionsCtrl', function($scope, $state, Motions) {

  $scope.go = function(destination){
    $state.go(destination);
  }

  Motions.all().then(function(data){
    $scope.motions = data;
  });

  /*(function(){
    
  })();*/

})

/*.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };*/
