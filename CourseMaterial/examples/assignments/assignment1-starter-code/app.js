(function () {
'use strict';

    angular.module('lunchApp', [])
//    .directive('myDirective')
      .controller('LunchCheckController', function($scope){
        $scope.userInput = "none";
        $scope.message = "";
      $scope.blank = "userInput";

        $scope.checkLunch = function() {
          var input[] = $scope.userInput.split(",");
          if (input.length() <= 3) {
            $scope.message = "Enjoy!";
          } else {
            $scope.message = "too much";
          }
          };
//          $scope.reset = function() {
//            $scope.userInput = angular.copy($scope.blank);
//            $scope.message = "Form reset";
//          };
});

})();
