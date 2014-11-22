'use strict';

app.controller('MainController', function() {

	animMenu();

});

function animMenu() {
	var tl = new TimelineLite({paused:true});
	var overlay = $('.overlay');
	var subMenu = $('.subheader');
	var content = $('.content');
	var contact = $('#contact');

	tl.to(overlay, 0, {css:{display:'block'}});
	tl.to(overlay, .5, {css:{opacity:1}}, "+=0");
	tl.to(subMenu, .5, {css:{top:103}, ease:Power4.easeInOut}, "-=.5");
	tl.to(content, .5, {css:{marginTop:155}}, "-=.5");
	
	contact.on('click', function(e){
		e.preventDefault();
		contact.addClass('current');
		tl.play()
	});

	$('#subhead-close').on('click', function(e){
		tl.reverse();
		contact.removeClass('current');
	});
}