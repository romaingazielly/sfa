'use strict';

app.controller('MainController', function() {

	animMenu();

});

function animMenu() {
	var contactOpen = false;
	var tl = new TimelineLite({paused:true});
	var overlay = $('.overlay');
	var subMenu = $('.subheader');
	var content = $('.content');
	var contact = $('#contact');
	var close = $('#subhead-close');

	tl.to(overlay, 0, {css:{display:'block'}});
	tl.to(overlay, .5, {css:{opacity:1}}, "+=0");
	tl.to(subMenu, .2, {css:{top:103}, ease:Power4.easeInOut}, "-=.5");
	tl.to(content, .2, {css:{marginTop:155, ease:Power4.easeInOut}}, "-=.5");
	
	contact.on('click', function(e){
		if(!contactOpen){
			e.preventDefault();
			contact.addClass('current');
			tl.play();
			contactOpen = true;
		}else{
			closeMenu();
		}
	});

	close.on('click', closeMenu);

	function closeMenu(){
		tl.reverse();
		contact.removeClass('current');
		contactOpen = false;
	}
}

