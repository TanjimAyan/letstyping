$(document).ready(function(){

	var disp = $('.disp_wrapper');

	var keyboard = $('.img-wrapper');

	var textarea = $('.disp_wrapper textarea');

	var p = $('.disp_wrapper p');

	var p_len = p.height();

	console.log(p_len);

	textarea.height(p_len+'px');

	textarea.focus(function(){
		disp.css('outline','2px solid #333333');
		disp.css('border','2px solid white');
		disp.css('border-top','none');
		keyboard.css('outline','2px solid #333333');
		keyboard.css('border','2px solid white');
	});

	function a(){
		$('.disp_wrapper textarea').focus();
	}

	textarea.focusout(function(){
		disp.css('outline','none');
		disp.css('border','2px solid #333333');
		disp.css('border-top','none');
		keyboard.css('outline','none');
		keyboard.css('border','2px solid #333333');
		a();
	});

});