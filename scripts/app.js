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

	// Détection IE10
	if (navigator.appVersion.indexOf("MSIE 10") !== -1){
		$("html").addClass("ie ie10");
	}

	// Détection IE8 -
	if($('html').hasClass('ie')){
		$('body').html('<div class="internet"><h1>La version actuelle de votre navigateur <span>Internet Explorer</span><br> ne vous permet pas une lecture optimale de ce site</h1><h2><a href="http://www.microsoft.com/fr-fr/download/details.aspx?id=40901">Mettre à jour mon navigateur</a> ou télécharger <a href="http://www.google.fr/intl/com/chrome/browser/">Chrome</a> ou <a href="http://www.mozilla.org/en-US/firefox/new/">Firefox</a>')
	}

	$rootScope.go = function (path, pageAnimationClass) {
		if (typeof(pageAnimationClass) === 'undefined') { // Use a default, your choice

			// Ferme le menu
			$('.menu').trigger('click');
			
	        $rootScope.pageAnimationClass = 'fadeIn';
	         console.log('yolo')
	    }
	    else if (typeof(pageAnimationClass) === 'slideFromHome') { // Use a default, your choice
	        $rootScope.pageAnimationClass = 'slideFromHome';
	         console.log('yoloSWAG')
	    }
	    else if (typeof(pageAnimationClass) === 'slideToHome') { // Use a default, your choice
	        $rootScope.pageAnimationClass = 'slideToHome';
	    }
	         
	    else { // Use the specified animation
	        $rootScope.pageAnimationClass = pageAnimationClass;
	         console.log('yolo2 : '+pageAnimationClass)
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