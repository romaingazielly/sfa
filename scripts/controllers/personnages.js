app.controller('PersonnagesController', ["$scope", "$rootScope", "$http", "$routeParams", function ($scope, $rootScope, $http, $routeParams) {

	$http.get('datas/'+$routeParams.persoId+'.json').success(function(data) {
	    $scope.perso = data;

	    if(data.multivisuel){
	    	// Carousel
		    $(".sfa-slider").owlCarousel({
				animateOut: 'fadeOutUp',
				animateIn: 'fadeInUp',
				items:1,
				center: true,
				autoplay: true,
				autoplayTimeout: 3000,
				loop: false,
				mouseDrag: false,
				smartSpeed: 1400,
				responsive: true,
				lazyLoad: true,
				lazyContent: true
			});
		}else{
			// Carousel
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

	    }
	    
	});

	$scope.$on('$viewContentLoaded', function(){
		resize();
		menu();
    	$(window).resize(resize);
	});

}]);

var resize = function() {
	var windowHeight = $(window).height() - 104;
	$('.content-persos aside, .content-persos article').css({'height': windowHeight, 'line-height': windowHeight+'px'});
}

var menu = function(){
	$('#menu').on('click', function(e){
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










