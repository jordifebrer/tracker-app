'use strict';
angular.module('TrackerApp.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Activities', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var activities = [
    { id: 0, name: 'Activity 1' },
    { id: 1, name: 'Activity 2' },
    { id: 2, name: 'Activity 3' }
  ];

  return {
    all: function() {
      return activities;
    }
  };
});
