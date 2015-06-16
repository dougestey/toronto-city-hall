angular.module('hall.directives', [])
  .directive('swipeMotion', function($swipe) {

    return {
      restrict: 'A',
      scope: '=',
      link: function(scope, ele, attrs, ctrl) {

        var startX;
        var action = angular.element(ele).children()[0];
        var text = angular.element(ele).children()[1];

        $swipe.bind(ele, {
          'start': function(coords) {
            startX = coords.x;
          },
          'move': function(coords) {
            var delta = coords.x - startX;
            if (coords.x > startX) {
              angular.element(text).css('left', delta + 'px');
            }
            if (delta > 36) {
              angular.element(action).css('opacity', '1');
            }
          },
          'end': function(coords) {
            var delta = coords.x - startX;
            angular.element(text).css('left', '0');
            angular.element(action).css('opacity', '0');
            if (delta > 36) {
              scope.interact();
            }
          },
          'cancel': function(coords) {
            angular.element(text).css('left', '0');
            angular.element(action).css('opacity', '0');
          }
        });
      }
    }
  });