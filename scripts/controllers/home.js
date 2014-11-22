app.controller('HomeController', function ($scope) {
	var perso = $(".liste-persos li")
	perso.hover(over, out);

	function over(){
		// Changement dynamique du titre
		var title = $(this).find('img').attr('alt');
		$('#title-persos').html(title);

		// Changement dynamique du fond du petit personnage
		perso.removeClass('current');
		$(this).addClass('current');

		// Changement dynamique du fond du gros personnage
		var bigPerso = $(this).attr('id').substr(4);
		$('.preview').attr('id',bigPerso);

		// Changement dynamique du gros personnage
		$('.preview img').attr('src', 'img/persos/big-'+bigPerso+'.png');
		$('.preview img').attr('alt', title);

	}

	function out(){
		// TweenMax.to(this, 0.5, {backgroundColor:"blue"})
		// TweenMax.to($(this).find("span"), 0.3, {rotation:0, scale:1, x:0, overwrite:"all"})
	}
})