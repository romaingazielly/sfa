app.controller('PersonnagesController',
	[ "$scope", "$rootScope", "$http", "$routeParams", "$location",
	function ($scope, $rootScope, $http, $routeParams, $location) {
	
	$http.get('datas/'+$routeParams.persoId+'.json').success(function(data) {
	    $scope.perso = data;

		    $(".sfa-slider").owlCarousel({
				animateOut: 'fadeOutUp',
				animateIn: 'fadeInUp',
				items:1,
				center: true,
				autoplay: false,
				autoplayTimeout: 3000,
				loop: false,
				mouseDrag: false,
				smartSpeed: 1400,
				responsive: true,
				lazyLoad: true,
				lazyContent: true
			});
	});

	$scope.$on('$viewContentLoaded', function(){
		resize();
		menu();
    	$(window).resize(resize);
	});

	$scope.prev = function () {
		$rootScope.go('/personnages/'+$scope.perso.prev, 'slideDown');
	};

	$scope.next = function () {
		$rootScope.go('/personnages/'+$scope.perso.next, 'slideUp');
	};

	setTimeout(function(){
		$('.switchbar').addClass('ok')
	}, 100);



}]);

var resize = function() {
	var windowHeight = $(window).height() - 104;
	$('.content-persos aside, .content-persos article').css({'height': windowHeight, 'line-height': windowHeight+'px'});
}

var menu = function(){
	$('.menu').on('click', function(e){
		e.preventDefault();

		// Ouverture/Fermeture du menu latéral
		$(this).toggleClass('open');

		// Décalage du contenu
		$('.boite').toggleClass('translate');

		// Overlay
		$('.boite').toggleClass('over');

		// Arrivé du menu
		$('#nav-menu').toggleClass('visible');
	});
}

var slidePerso = function(){

	$('.next-perso').on('click', function(e){
		e.preventDefault();

		var tl = new TimelineLite();
	})
}










