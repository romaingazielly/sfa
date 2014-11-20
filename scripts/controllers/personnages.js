app.controller('PersonnagesController', ["$scope", function ($scope) {
	$scope.$watch("name", function (newValue, old) {
		$scope.$emit("name_changed", { value: newValue })
	})

	$(".sfa-slider").owlCarousel({
		// animateOut: 'fadeOutDown',
		// animateIn: 'fadeInDown',
		items:1,
		center: true,
		autoplay: true,
		autoplayTimeout: 3000,
		loop: true,
		mouseDrag: false,
		smartSpeed: 1400,
		responsive: true
	});

	$scope.$on('$viewContentLoaded', function(){
		resize();
		menu();
    	$(window).resize(resize);
	});
}])

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