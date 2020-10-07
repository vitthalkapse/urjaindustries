;(function () {
	
	'use strict';



	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	// Main Menu Superfish
	var mainMenu = function() {

		$('#fh5co-primary-menu').superfish({
			delay: 0,
			animation: {
				opacity: 'show'
			},
			speed: 'fast',
			cssArrows: true,
			disableHI: true
		});

	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};


	// Offcanvas and cloning of the main menu
	var offcanvas = function() {

		var $clone = $('#fh5co-menu-wrap').clone();
		$clone.attr({
			'id' : 'offcanvas-menu'
		});
		$clone.find('> ul').attr({
			'class' : '',
			'id' : ''
		});

		$('#fh5co-page').prepend($clone);

		// click the burger
		$('.js-fh5co-nav-toggle').on('click', function(){

			if ( $('body').hasClass('fh5co-offcanvas') ) {
				$('body').removeClass('fh5co-offcanvas');
			} else {
				$('body').addClass('fh5co-offcanvas');
			}
			// $('body').toggleClass('fh5co-offcanvas');

		});

		$('#offcanvas-menu').css('height', $(window).height());

		$(window).resize(function(){
			var w = $(window);


			$('#offcanvas-menu').css('height', w.height());

			if ( w.width() > 769 ) {
				if ( $('body').hasClass('fh5co-offcanvas') ) {
					$('body').removeClass('fh5co-offcanvas');
				}
			}

		});	

	}

	

	// Click outside of the Mobile Menu
	var mobileMenuOutsideClick = function() {
		$(document).click(function (e) {
	    var container = $("#offcanvas-menu, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('fh5co-offcanvas') ) {
				$('body').removeClass('fh5co-offcanvas');
			}
	    }
		});
	};


	// Animations

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							el.addClass('fadeInUp animated');
							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};

	// Background Animation

	var cover1 = $('.fh5co-cover1');
	var cover2 = $('.fh5co-cover2');

	var backgrounds = [
      'url(./images/cover_bg_1.jpg)', 
      'url(./images/cover_bg_2.jpg)', 
      'url(./images/cover_bg_3.jpg)', 
      'url(./images/cover_bg_4.jpg)', 
      'url(./images/cover_bg_5.jpg)', 
      'url(./images/cover_bg_6.jpg)', 
      'url(./images/cover_bg_7.jpg)', 
      'url(./images/cover_bg_8.jpg)', 
      'url(./images/cover_bg_9.jpg)', 
      'url(./images/cover_bg_10.jpg)', 
      'url(./images/cover_bg_11.jpg)'];

      var current = 0;
      var i = 0;

      function nextBackground() {
      	
      	if(i % 2){

      		$( ".fh5co-cover2" ).animate({opacity:0}, 2500)
      		$( ".fh5co-cover1" ).animate({opacity:1}, 2500)

      		cover1.css('background',backgrounds[current = ++current % backgrounds.length]);
        	cover1.css('background-size', 'cover');
      	}else{

      		$( ".fh5co-cover1" ).animate({opacity:0}, 2500)
      		$( ".fh5co-cover2" ).animate({opacity:1}, 2500)

      		cover2.css('background',backgrounds[current = ++current % backgrounds.length]);
       		cover2.css('background-size', 'cover');
      	}

      	i++;

        setTimeout(nextBackground, 5000);
    }

    setTimeout(nextBackground, 5000);
    cover1.css('background', backgrounds[0]);
    cover1.css('background-size', 'cover');
    $( ".fh5co-cover2" ).animate({opacity:0}, 2500)
    $( ".fh5co-cover1" ).animate({opacity:1}, 2500)

    // Background Animation End

    $(document).ready(function() {

	    $('.popup-youtube').magnificPopup({
	    	type:'iframe', 
	    	iframe: {
			  markup: '<div class="mfp-iframe-scaler">'+
			            '<div class="mfp-close"></div>'+
			            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
			          '</div>',

			  patterns: {
			    youtube: {
			      index: 'youtube.com/',

			      id: 'v=',

			      src: 'http://www.youtube.com/embed/%id%?autoplay=1'
			    },
			    gmaps: {
			      index: '//maps.google.',
			      src: '%id%&output=embed'
			    }


			  },

			  srcAction: 'iframe_src',
			}

	  	})
  	});

	

	// Document on load.
	$(function(){
		mainMenu();
		parallax();
		offcanvas();
		mobileMenuOutsideClick();
		contentWayPoint();
		

	});


}());