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
		autoplayTimeout: 2000,
		loop: true,
		mouseDrag: false,
		smartSpeed: 800,
		fluidSpeed: 1
	});

	$scope.$on('$viewContentLoaded', function(){
		resize()
    	$(window).resize(resize);
	});
}])

var resize = function() {
	var windowHeight = $(window).height() - 104;
	$('.content-persos aside, .content-persos article').css({'height': windowHeight, 'line-height': windowHeight+'px'});
}