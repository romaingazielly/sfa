'use strict';

var app = angular.module("soFarAway", [
	'ngRoute'
]);

app.config(function ($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "views/home.html",
			controller: "HomeController"
		})
		.when("/personnages", {
			templateUrl: "views/personnages.html",
			controller: "PersonnagesController"
		});
});