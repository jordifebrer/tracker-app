'use strict';
angular.module('TrackerApp.services', [])

/**
 * A simple example service that returns some fake activities.
 */
.factory('Activities', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var activities = [
    { id: 0, username: 'nickname1', title: 'Activity 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat purus sed nisi iaculis, et feugiat lorem molestie. Vestibulum ultrices accumsan consequat.'},
    { id: 1, username: 'nickname2', title: 'Activity 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat purus sed nisi iaculis, et feugiat lorem molestie. Vestibulum ultrices accumsan consequat.'},
    { id: 2, username: 'nickname3', title: 'Activity 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat purus sed nisi iaculis, et feugiat lorem molestie. Vestibulum ultrices accumsan consequat.'},
    { id: 3, username: 'nickname4', title: 'Activity 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat purus sed nisi iaculis, et feugiat lorem molestie. Vestibulum ultrices accumsan consequat.'},
    { id: 4, username: 'nickname5', title: 'Activity 5', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat purus sed nisi iaculis, et feugiat lorem molestie. Vestibulum ultrices accumsan consequat.'},
    { id: 5, username: 'nickname1', title: 'Activity 6', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat purus sed nisi iaculis, et feugiat lorem molestie. Vestibulum ultrices accumsan consequat.'},
    { id: 6, username: 'nickname2', title: 'Activity 7', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat purus sed nisi iaculis, et feugiat lorem molestie. Vestibulum ultrices accumsan consequat.'},
    { id: 7, username: 'nickname3', title: 'Activity 8', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat purus sed nisi iaculis, et feugiat lorem molestie. Vestibulum ultrices accumsan consequat.'},
    { id: 8, username: 'nickname4', title: 'Activity 9', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat purus sed nisi iaculis, et feugiat lorem molestie. Vestibulum ultrices accumsan consequat.'},
    { id: 9, username: 'nickname5', title: 'Activity 10', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat purus sed nisi iaculis, et feugiat lorem molestie. Vestibulum ultrices accumsan consequat.'}
  ];

  return {
    all: function() {
      return activities;
    },
    get: function(activityId) {
      // Simple index lookup
      return activities[activityId];
    }
  };
})

/**
 * A simple example service that returns some fake social actions.
 */
.factory('Socials', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var socials = [
    { id: 0, username: 'nickname1', type: 'like'},
    { id: 1, username: 'nickname2', type: 'add'},
    { id: 2, username: 'nickname3', type: 'like'},
    { id: 3, username: 'nickname4', type: 'add'},
    { id: 4, username: 'nickname5', type: 'like'},
    { id: 5, username: 'nickname6', type: 'add'},
    { id: 6, username: 'nickname7', type: 'like'},
    { id: 7, username: 'nickname8', type: 'add'},
    { id: 8, username: 'nickname9', type: 'like'},
    { id: 9, username: 'nickname10', type: 'add'},
  ];

  return {
    all: function() {
      return socials;
    }
  };
})

/**
 * A simple example service that returns some fake activity types.
 */
.factory('ActivityTypes', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var activityTypes = [
    { id: 0, label: 'type1'},
    { id: 1, label: 'type2'},
    { id: 2, label: 'type3'},
    { id: 3, label: 'type4'},
    { id: 4, label: 'type5'},
  ];

  return {
    all: function() {
      return activityTypes;
    }
  };
});
