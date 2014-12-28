'use strict';

var app = angular.module("soFarAway", [
	'ngRoute',
	'ngAnimate'
]);

app.config(function ($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "views/home.html",
			controller: "HomeController"
		})
		.when("/personnages/:persoId", {
			templateUrl: "views/personnages.html",
			controller: "PersonnagesController"
		});
});

app.run(['$rootScope', '$location', '$window', function ($rootScope, $location, $window) {
	$rootScope.go = function (path, pageAnimationClass) {
		if (typeof(pageAnimationClass) === 'undefined') { // Use a default, your choice
	        $rootScope.pageAnimationClass = 'fadeIn';
	         console.log('yolo')
	    }
	         
	    else { // Use the specified animation
	        $rootScope.pageAnimationClass = pageAnimationClass;
	         console.log('yolo2')
	    }
	 
	    if (path === 'back') { // Allow a 'back' keyword to go to previous page
	        $window.history.back();
	     console.log('yolo3')
	    }
	         
	    else { // Go to the specified path
	        $location.path(path);
	         console.log('yol4o')
	    }
	};
}]);