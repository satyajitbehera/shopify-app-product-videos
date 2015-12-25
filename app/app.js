(function() {
	'use strict';
  	angular.
  		module('MyApp', []).
  		controller('MyController', ['$scope','notify', function ($scope, notify) {
  			$scope.callNotify = function(msg) {
  				console.log(msg + notify);
  			};
  		}]).
  		factory('notify', ['$window', function(win) {
  			var msgs = [];
  			return 123;
  		}]);
})();