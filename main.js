$(document).ready(function(){

		$('textarea').val('');

		var url_string = window.location.href;
		var url = new URL(url_string);
		var level = url.searchParams.get("level");

		// tv_screen = $('.lesson .require_text');
		// tv_value = $('.lesson .require_text h3');
		key_img = $('.img-wrapper img');

		level = level;

		display_status  = 'deactive';

		char = 'currect';


		function currectChar(){

			disp = $('.disp_wrapper');

			// disp.css('border','2px solid green');
			// tv_screen.css('background-color','rgba(255,255,255,0.3)');
				// tv_value.css('color','white');

			setTimeout(function(){
				// disp.css('border','2px solid #f0a3bc');
				// tv_screen.css('background-color','white');
					// tv_value.css('color','black');
			},100);
		}

		function wrongChar(){

			wrapper = $('body');

			wrapper.css('background-color','red');
			// tv_screen.css('background-color','red');

			setTimeout(function(){
				wrapper.css('background-color','white');
				// tv_screen.css('background-color','white');
			},100);
		}



		level1 = ['jj ff jffj fj fj jf jj ff jf fj jj j f ff jf fj','jffj fjjf jfff fjj fj jf j f f j j jf fj'];
		level2 = ['uu rr urrv ur ru ur uj ju ju rf fr fr kk kr rkkr kr ku ku k u u kr ur k kk u','ku uk k u u kr uuk kku rk kr kj kkj jj kk kj j k kj kf fk ur rr ur uk ku r','ukr kru urk kk r rpk uur urk k u r u r k ur uk uu ru rk rr kr ku kk k u k rr uu'];
		level3 = ['dd ee deed de ed du ud er re de ed ee dd er re ee ei ii iei ie id di ii id e e d i ii id ir ie ei ei ie','eiii iei ie id dd ee dee d de ed du ud er er de ed ee dd ed re ei ii di ii id de de id di ii id ir i ee ii ee dd di di ii d e','dd er re ee ei ii di id ied edi ii ir de ed e ee re re rd dd dr er ee dd ii'];
		level4 = ['cg gc cc gg cn nc nn cc ng gn gg gn ng','cdd ccd dc cd ge ge eeg gg gf ni in nn ii in nn in ni','ng ng nc cn gc gn cg cn n c g gc n c gn cg nc cn gc gn cn n g c gn cc gn ng'];
 		level5 = ['ts tl st sl tl tt s ss tl t l tt ll ss st l lt ls tt lt ls lt ss tl ll tt tl lt sl tl sl tl','tc tc tcc cct tt ct tc cc tt tc tc ct ct','ss sg gs ssg sg g s s sg sg gs gs gs ss sg ss gg gs sg sg sg','nn ni in ii ni in ni in i n ni ni nn ni ii in ni i n n i i nn in ni','tt ss ll ts tl st sl s t l ls lt lt s st ts sl lt tl ls st sl'];
 		level6 = ['oo bb aa ob oa oa b ba o bo ao oa ba ba ob ba ab ob oa ao ab oa ao ob oa bo ba ao ab ba oa aa bb oo','ob oa ob ab ba ba oa oo bb oa ba ab ao ab ba bo ao oa ao bo ba aa bb oo bo ob oa ao','ott oot bss bbs bs sb bb al la aa la'];
 		level7 = ['vv hh mm vh vm hv hm mh mv m v h hh h m v vv hm mm vh','vov vvo v o o v ha ah aa hh ah ha','mm mb mbb mbb mm mb bm mb bm mb mb mm bb mb mb mb bm mb mm mb'];
 		level8 = [',, .. .., ,,. .,. ,., ,, .. . , . ., ,. .. , . ., ,. ., ,. .. ,, ., ,. ,. ,. .. ,,','v, h, m, v. ,, l, v, ,v ,. .l h. .h .l .v .v .l .h'];
  		level9 = ['ww xx ;; wx xw ;w w; wx xw ;w w; ;x x; w; xw w; xw ww xx ;; ;x ;w w; x;','w, x. xw wx ;. .; ,; ,; w; w, .w .x x. w.w; .; w.'];
 		level10 = ['qq yy yq qy yq yq qq yy yq qy yy qq qy yq','qw qx q; y; yx yw yy ww wy yw ;; y w yx xw'];
 		level11 = ['pp zz pz zp zz pp pq pq qp zy yz yy zz','pq pq pp qq pq qp zq qz zz qq zq qz py yp pp yp yp yy py yp'];

		if(level == 1){
			displayed_data_array = [level1[0],level2[1]];
			lesson_end_msg_next_btn = 'visible';
		}else if(level == 2){
			displayed_data_array = [level2[0],level2[1],level2[2]];
			lesson_end_msg_next_btn = 'visible';
		}else if(level == 3){
			displayed_data_array = [level3[0],level3[1],level3[2]];
			lesson_end_msg_next_btn = 'visible';
		}else if(level == 4){
			displayed_data_array = [level4[0],level4[1],level4[2],level4[3],level4[4]];
			lesson_end_msg_next_btn = 'visible';
		}else if(level == 5){
			displayed_data_array = [level5[0],level5[1],level5[2]];
			lesson_end_msg_next_btn = 'visible';
		}else if(level == 6){
			displayed_data_array = [level6[0],level6[1],level6[2]];
			lesson_end_msg_next_btn = 'visible';
		}else if(level == 7){
			displayed_data_array = [level7[0],level7[1],level7[2]];
			lesson_end_msg_next_btn = 'visible';
		}else if(level == 8){
			displayed_data_array = [level8[0],level8[1]];
			lesson_end_msg_next_btn = 'visible';
		}else if(level == 9){
			displayed_data_array = [level9[0],level9[1]];
			lesson_end_msg_next_btn = 'visible';
		}else if(level == 10){
			displayed_data_array = [level10[0],level10[1]];
			lesson_end_msg_next_btn = 'visible';
		}else if(level == 11){
			displayed_data_array = [level11[0],level11[1]];
			lesson_end_msg_next_btn = 'hide';
		}

		if(lesson_end_msg_next_btn == 'hide'){
			$('.lesson_end_msg_container .lesson_end_msg .end_msg_next_btn').addClass('d-none');
		}

		displayed_data_array_len = displayed_data_array.length - 1;

		console.log(displayed_data_array_len + ' displayed_data_array_len');

		arrIndexIncre = 0;

		$('.next_btn').click(function(){

			displayed_data_len = 3;
			textarea_len = 1;

			start_btn = $('.next_btn_wrapper .start_btn');

			start_btn.removeClass('d-none');
			start_btn.addClass('d-block');


			if(displayed_data_len <= textarea_len){
				$('.next_btn').removeClass('d-none');
				$('.next_btn').addClass('d-block');
			}else if(displayed_data_len > textarea_len){
				$('.next_btn').removeClass('d-block');
				$('.next_btn').addClass('d-none');
			}

			if(arrIndexIncre >= displayed_data_array_len){
				
				var lesson_end_msg_container = $('.lesson_end_msg_container');

				lesson_end_msg_container.removeClass('d-none');
				lesson_end_msg_container.addClass('d-flex');

				url = $(location).attr("href");

				current_level = 'level=' + level;

				next_level = parseInt(level) + 1;

				next_level = 'level='+next_level;

				
					url_nxt = url.replace(current_level,next_level);
					
				$('.end_msg_next_btn').attr('href',url_nxt);


		

			}else if(arrIndexIncre <= displayed_data_array_len){

			$('textarea').val('');

			arrIndexIncre++;

			set_display_data = $('p').text(displayed_data_array[arrIndexIncre]);

			displayed_data = $('p').text();

			displayed_data_index = 0;

			requireText = displayed_data.charAt(displayed_data_index);

			if(requireText == 'a'){
				key_img.attr("src","images2/a.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .a').addClass('active');
			}else if(requireText == 'b'){
				key_img.attr("src","images2/b.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .b').addClass('active');
			}else if(requireText == 'c'){
				key_img.attr("src","images2/c.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .c').addClass('active');
			}else if(requireText == 'd'){
				key_img.attr("src","images2/d.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .d').addClass('active');
			}else if(requireText == 'e'){
				key_img.attr("src","images2/e.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .e').addClass('active');
			}else if(requireText == 'f'){
				key_img.attr("src","images2/f.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .f').addClass('active');
			}else if(requireText == 'g'){
				key_img.attr("src","images2/g.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .g').addClass('active');
			}else if(requireText == 'h'){
				key_img.attr("src","images2/h.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .h').addClass('active');
			}else if(requireText == 'i'){
				key_img.attr("src","images2/i.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .i').addClass('active');
			}else if(requireText == 'j'){
				key_img.attr("src","images2/j.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .j').addClass('active');
			}else if(requireText == 'k'){
				key_img.attr("src","images2/k.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .k').addClass('active');
			}else if(requireText == 'l'){
				key_img.attr("src","images2/l.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .l').addClass('active');
			}else if(requireText == 'm'){
				key_img.attr("src","images2/m.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .m').addClass('active');
			}else if(requireText == 'n'){
				key_img.attr("src","images2/n.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .n').addClass('active');
			}else if(requireText == 'o'){
				key_img.attr("src","images2/o.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .o').addClass('active');
			}else if(requireText == 'p'){
				key_img.attr("src","images2/p.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .p').addClass('active');
			}else if(requireText == 'q'){
				key_img.attr("src","images2/q.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .q').addClass('active');
			}else if(requireText == 'r'){
				key_img.attr("src","images2/r.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .r').addClass('active');
			}else if(requireText == 's'){
				key_img.attr("src","images2/s.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .s').addClass('active');
			}else if(requireText == 't'){
				key_img.attr("src","images2/t.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .t').addClass('active');
			}else if(requireText == 'u'){
				key_img.attr("src","images2/u.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .u').addClass('active');
			}else if(requireText == 'v'){
				key_img.attr("src","images2/v.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .v').addClass('active');
			}else if(requireText == 'w'){
				key_img.attr("src","images2/w.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .w').addClass('active');
			}else if(requireText == 'x'){
				key_img.attr("src","images2/x.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .x').addClass('active');
			}else if(requireText == 'y'){
				key_img.attr("src","images2/y.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .y').addClass('active');
			}else if(requireText == 'z'){
				key_img.attr("src","images2/z.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .z').addClass('active');
			}else if(requireText == '.'){
				key_img.attr("src","images2/period.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .period').addClass('active');
			}else if(requireText == ','){
				key_img.attr("src","images2/comma.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .comma').addClass('active');
			}else if(requireText == ' '){
				key_img.attr("src","images2/space.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .spacebar').addClass('active');
			}else if(requireText == ' '){
				key_img.attr("src","images2/space.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .spacebar').addClass('active');
			}else if(requireText == ''){
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				key_img.attr("src","");
			}else if(requireText == ';'){
				key_img.attr("src","images2/semiColon.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .semiColon_colon').addClass('active');
			}

			

			// tv_value.text(requireText);

			}

		});

		$('.next_btn').click(function(){
			key_img.attr("src","images2/f.png");
			$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
		});

		set_display_data = $('p').text(displayed_data_array[arrIndexIncre]);

		displayed_data = $('p').text();

		displayed_data_index = 0;

		requireText = displayed_data.charAt(displayed_data_index);

		textarea = $('.disp_wrapper textarea');

		start_btn = $('.next_btn_wrapper .start_btn');

		start_btn.click(function(){
					display_status = 'active';
					textarea.focus();
					start_btn.removeClass('d-block');
					start_btn.addClass('d-none');
				

		if(requireText == 'a' && display_status == 'active'){
				key_img.attr("src","images2/a.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .a').addClass('active');
			}else if(requireText == 'b'){
				key_img.attr("src","images2/b.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .b').addClass('active');
			}else if(requireText == 'c'){
				key_img.attr("src","images2/c.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .c').addClass('active');
			}else if(requireText == 'd'){
				key_img.attr("src","images2/d.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .d').addClass('active');
			}else if(requireText == 'e'){
				key_img.attr("src","images2/e.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .e').addClass('active');
			}else if(requireText == 'f'){
				key_img.attr("src","images2/f.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .f').addClass('active');
			}else if(requireText == 'g'){
				key_img.attr("src","images2/g.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .g').addClass('active');
			}else if(requireText == 'h'){
				key_img.attr("src","images2/h.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .h').addClass('active');
			}else if(requireText == 'i'){
				key_img.attr("src","images2/i.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .i').addClass('active');
			}else if(requireText == 'j'){
				key_img.attr("src","images2/j.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .j').addClass('active');
			}else if(requireText == 'k'){
				key_img.attr("src","images2/k.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .k').addClass('active');
			}else if(requireText == 'l'){
				key_img.attr("src","images2/l.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .l').addClass('active');
			}else if(requireText == 'm'){
				key_img.attr("src","images2/m.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .m').addClass('active');
			}else if(requireText == 'n'){
				key_img.attr("src","images2/n.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .n').addClass('active');
			}else if(requireText == 'o'){
				key_img.attr("src","images2/o.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .o').addClass('active');
			}else if(requireText == 'p'){
				key_img.attr("src","images2/p.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .p').addClass('active');
			}else if(requireText == 'q'){
				key_img.attr("src","images2/q.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .q').addClass('active');
			}else if(requireText == 'r'){
				key_img.attr("src","images2/r.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .r').addClass('active');
			}else if(requireText == 's'){
				key_img.attr("src","images2/s.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .s').addClass('active');
			}else if(requireText == 't'){
				key_img.attr("src","images2/t.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .t').addClass('active');
			}else if(requireText == 'u'){
				key_img.attr("src","images2/u.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .u').addClass('active');
			}else if(requireText == 'v'){
				key_img.attr("src","images2/v.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .v').addClass('active');
			}else if(requireText == 'w'){
				key_img.attr("src","images2/w.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .w').addClass('active');
			}else if(requireText == 'x'){
				key_img.attr("src","images2/x.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .x').addClass('active');
			}else if(requireText == 'y'){
				key_img.attr("src","images2/y.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .y').addClass('active');
			}else if(requireText == 'z'){
				key_img.attr("src","images2/z.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .z').addClass('active');
			}else if(requireText == '.'){
				key_img.attr("src","images2/period.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .period').addClass('active');
			}else if(requireText == ','){
				key_img.attr("src","images2/comma.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .comma').addClass('active');
			}else if(requireText == ' '){
				key_img.attr("src","images2/space.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .spacebar').addClass('active');
			}else if(requireText == ' '){
				key_img.attr("src","images2/space.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .spacebar').addClass('active');
			}else if(requireText == ''){
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				key_img.attr("src","");
			}else if(requireText == ';'){
				key_img.attr("src","images2/semiColon.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .semiColon_colon').addClass('active');
			}

			});

		// tv_value.text(requireText);

		var textarea = $('textarea');


	textarea.keyup(function(){
		displayed_data_len = displayed_data.length;
		textarea_len = textarea.val().length;

		if(displayed_data_len <= textarea_len){
			$('.next_btn').removeClass('d-none');
			$('.next_btn').addClass('d-block');
		}else if(displayed_data_len > textarea_len){
			$('.next_btn').removeClass('d-block');
			$('.next_btn').addClass('d-none');
		}
	});



	textarea.keydown(function(e){


		if(e.key != requireText){
			e.preventDefault();
			e.stopPropagation();

			if(char == 'currect'){
				wrongChar();
			}

			char = 'wrong';
			
		}

		if(e.key == requireText){
			displayed_data_index++;
			requireText = displayed_data.charAt(displayed_data_index);



			if(requireText == 'a'){
				key_img.attr("src","images2/a.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .a').addClass('active');
			}else if(requireText == 'b'){
				key_img.attr("src","images2/b.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .b').addClass('active');
			}else if(requireText == 'c'){
				key_img.attr("src","images2/c.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .c').addClass('active');
			}else if(requireText == 'd'){
				key_img.attr("src","images2/d.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .d').addClass('active');
			}else if(requireText == 'e'){
				key_img.attr("src","images2/e.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .e').addClass('active');
			}else if(requireText == 'f'){
				key_img.attr("src","images2/f.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .f').addClass('active');
			}else if(requireText == 'g'){
				key_img.attr("src","images2/g.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .g').addClass('active');
			}else if(requireText == 'h'){
				key_img.attr("src","images2/h.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .h').addClass('active');
			}else if(requireText == 'i'){
				key_img.attr("src","images2/i.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .i').addClass('active');
			}else if(requireText == 'j'){
				key_img.attr("src","images2/j.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .j').addClass('active');
			}else if(requireText == 'k'){
				key_img.attr("src","images2/k.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .k').addClass('active');
			}else if(requireText == 'l'){
				key_img.attr("src","images2/l.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .l').addClass('active');
			}else if(requireText == 'm'){
				key_img.attr("src","images2/m.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .m').addClass('active');
			}else if(requireText == 'n'){
				key_img.attr("src","images2/n.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .n').addClass('active');
			}else if(requireText == 'o'){
				key_img.attr("src","images2/o.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .o').addClass('active');
			}else if(requireText == 'p'){
				key_img.attr("src","images2/p.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .p').addClass('active');
			}else if(requireText == 'q'){
				key_img.attr("src","images2/q.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .q').addClass('active');
			}else if(requireText == 'r'){
				key_img.attr("src","images2/r.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .r').addClass('active');
			}else if(requireText == 's'){
				key_img.attr("src","images2/s.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .s').addClass('active');
			}else if(requireText == 't'){
				key_img.attr("src","images2/t.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .t').addClass('active');
			}else if(requireText == 'u'){
				key_img.attr("src","images2/u.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .u').addClass('active');
			}else if(requireText == 'v'){
				key_img.attr("src","images2/v.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .v').addClass('active');
			}else if(requireText == 'w'){
				key_img.attr("src","images2/w.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .w').addClass('active');
			}else if(requireText == 'x'){
				key_img.attr("src","images2/x.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .x').addClass('active');
			}else if(requireText == 'y'){
				key_img.attr("src","images2/y.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .y').addClass('active');
			}else if(requireText == 'z'){
				key_img.attr("src","images2/z.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .z').addClass('active');
			}else if(requireText == '.'){
				key_img.attr("src","images2/period.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .period').addClass('active');
			}else if(requireText == ','){
				key_img.attr("src","images2/comma.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .comma').addClass('active');
			}else if(requireText == ' '){
				key_img.attr("src","images2/space.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .spacebar').addClass('active');
			}else if(requireText == ' '){
				key_img.attr("src","images2/space.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .spacebar').addClass('active');
			}else if(requireText == ''){
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				key_img.attr("src","");
			}else if(requireText == ';'){
				key_img.attr("src","images2/semiColon.png");
				$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
				$('.img-wrapper .keyboard .keyRow1 .semiColon_colon').addClass('active');
			}





			// if(requireText == ' '){
			// 	tv_value.text('space');
			// }else{
			// 	tv_value.text(requireText);
			// }

			char = 'currect';

			currectChar();
		}

	});


				textarea = $('.disp_wrapper textarea');

				start_btn = $('.next_btn_wrapper .start_btn');

				// display_status = 'active';

				start_btn.click(function(){
					display_status = 'active';
					textarea.focus();
					start_btn.removeClass('d-block');
					start_btn.addClass('d-none');
				});

				textarea.focusout(function(){
					display_status = 'deactive';
					key_img.attr("src","images2/f.png");
					$('.img-wrapper .keyboard .keyRow1 .key').removeClass('active');
					start_btn.removeClass('d-none');
					start_btn.addClass('d-block');
					textarea.focusout();
				});

				

});