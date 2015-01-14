'use strict';

app.controller('MainController', function() {

	animMenu();

	// Apparition de la home une fois le chargement effectué
	angular.element(document).ready(function () {
        $('.content').addClass('visible');

        // Pour harmoniser la taille de la home
        $('.page-view').height($(document).height() - 104);

        $(window).resize(function(){
        	 $('.page-view').height($(document).height() - 104);
        });
    });

});

function animMenu() {
	var contactOpen = false;
	var tl = new TimelineMax({paused:true});
	var overlay = $('.overlay');
	var contact = $('#contact');
	var close = $('#subhead-close');

	tl.set(overlay, {css:{display:'block'}})
	  .to($('.subheader, .content'), .6, {css: { "transform" : "translate3d(0px, 155px, 0px)" }})
	  .to(overlay, .6, {css:{opacity:1}}, "-=.6");
	
	contact.on('click', function(e){
		if(!contactOpen){
			e.preventDefault();
			contact.addClass('current');
			tl.play();
			contactOpen = true;
		}else{
			close.trigger('click');
		}
	});

	overlay.on('click', function(){
		close.trigger('click');
	});

	close.on('click', function(){
		tl.reverse();
		contact.removeClass('current');
		contactOpen = false;
	});
}

