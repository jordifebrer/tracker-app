'use strict';
angular.module('TrackerApp.controllers', [])

.controller('DashCtrl', function($scope, Activities) {
  $scope.activities = Activities.all();
})

.controller('FriendsCtrl', function($scope) {
})

.controller('AddCtrl', function($scope) {
})

.controller('StatsCtrl', function($scope) {
})

.controller('ProfileCtrl', function($scope) {
})

.controller('ConfigCtrl', function($scope) {
})

.controller('MainCtrl', function($scope) {
    $scope.config= false;
    $scope.changeConfig = function () {
        $scope.config = !$scope.config;
    }
})
