app.controller('HomeController', function ($scope) {
	var perso = $(".liste-persos li");
	var previewImg = $('.preview img');
	var titlePerso = $('#title-persos');
	var previewPerso = $('.preview');
	perso.hover(over, out);

	// Suppression de l'effet de slide sur la home
	$('.content > section').removeClass('slideUp');

	function over(){
		var $this = $(this);
		var persoId = $this.attr('id');
		
		if(persoId != 'moz-unknow'){

			// Changement dynamique du titre
			var title = $this.find('img').attr('alt');
			titlePerso.html(title);

			// Changement dynamique du fond du gros personnage
			var bigPerso = $this.attr('id').substr(4);
			previewPerso.attr('id',bigPerso);

			// Changement dynamique du gros personnage
			previewImg.attr('src', 'img/persos/big-'+bigPerso+'.png');
			previewImg.attr('alt', title);
		}
	}

	function out(){
		// TweenMax.to($(this), 0.5, {backgroundColor:"blue"})
		// TweenMax.to($(this).find("span"), 0.3, {rotation:0, scale:1, x:0, overwrite:"all"})
	}
})