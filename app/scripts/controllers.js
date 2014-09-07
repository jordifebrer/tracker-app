'use strict';
angular.module('TrackerApp.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('AddCtrl', function($scope) {
})

.controller('ArchiveCtrl', function($scope, Activities) {
  $scope.activities = Activities.all();
})

.controller('AccountCtrl', function($scope) {
});
