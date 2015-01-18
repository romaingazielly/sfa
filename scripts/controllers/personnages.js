app.controller('PersonnagesController',
	[ "$scope", "$rootScope", "$http", "$routeParams", "$location",
	function ($scope, $rootScope, $http, $routeParams, $location) {
	
	$scope.isScrolling = false;

	$http.get('datas/'+$routeParams.persoId+'.json').success(function(data) {
	    $scope.perso = data;

		    $(".sfa-slider").owlCarousel({
				items:1,
				center: true,
				autoplay: true,
				autoplayTimeout: 3000,
				loop: false,
				mouseDrag: false,
				smartSpeed: 1400,
				responsive: true
			});
	});

	$scope.$on('$viewContentLoaded', function(){
		resize();
		menu();
		share();
    	$(window).resize(resize);
	});

	$scope.prev = function () {
		$rootScope.go('/personnages/'+$scope.perso.prev, 'slideDown');
	};

	$scope.next = function () {
		$rootScope.go('/personnages/'+$scope.perso.next, 'slideUp');
	};

	$('.boite').bind('mousewheel', function(event) {
		if ($scope.isScrolling) return;

	    if (event.originalEvent.wheelDelta >= 0) {
	        $scope.prev();
	    }
	    else {
	        $scope.next();
	    }

	    $scope.isScrolling = true;

	    window.setTimeout(function () {
	    	$scope.isScrolling = false;
	    }, 1000);
	});

	setTimeout(function(){
		$('.switchbar').addClass('ok');
	}, 100);

}]);

var resize = function() {
	var windowHeight = $(window).height() - 104;
	$('.content-persos aside, .content-persos article').css({'height': windowHeight, 'line-height': windowHeight+'px'});
}
var scrolled = false; // Booléen pour le scroll auto du menu
var menu = function(){
	$('.menu').on('click', function(e){
		e.preventDefault();

		// Ouverture/Fermeture du menu latéral
		$('.menu').toggleClass('open');

		// Décalage du contenu
		$('.boite').toggleClass('translate');

		// Overlay
		$('.boite').toggleClass('over');

		// Arrivé du menu
		$('#nav-menu').toggleClass('visible');

		// SmoothScroll
		if($('#nav-menu').hasClass('visible') && !scrolled){
			$('#nav-menu').scrollTo({top:720, left:0}, 2000, function(){
				scrolled = true;
			});
		}

		$('.over .sfa-slider, .over .infos-perso').click(function(){
    		$('.menu').click()
    	})
	});
}

// En chantier
var slidePerso = function(){

	$('.next-perso').on('click', function(e){
		e.preventDefault();

		var tl = new TimelineLite();
	})
}

// Partage Twitter
var share = function(){
	$('#share-tw, #share-fb').click(function(event) {
    var width  = 575,
        height = 400,
        left   = ($(window).width()  - width)  / 2,
        top    = ($(window).height() - height) / 2,
        url    = this.href,
        opts   = 'status=1' +
                 ',width='  + width  +
                 ',height=' + height +
                 ',top='    + top    +
                 ',left='   + left;
    
    window.open(url, 'twitter', opts);
 
    return false;
  });
}

