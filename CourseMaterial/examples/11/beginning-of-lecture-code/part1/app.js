(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Goodi";

  $scope.sayMessage = function () {
    return "something";
  };
}

})();
