(function($) {
	"use strict";

	// burger menu
	var nav = document.getElementById('xxx');
	var menu = document.getElementById('burger');
	burger.addEventListener('click', function () {
	  nav.classList.toggle('cross');
	});
	
	// burger menu toggle
	$('.burger').click(function(){
		$('.nav').fadeToggle(200);
	});
	
	// sticky header
	$(window).on('scroll',function() {    
		var scroll = $(window).scrollTop();
		if (scroll < 10) {
		$("#head-bar").removeClass("fixed-head");
		}else{
		$("#head-bar").addClass("fixed-head");
	   }
	});

	// scroll up activation
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="fas fa-angle-up"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});
	
    // basic slider activation
    $('.basic-slider').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
	
    // cliend slider activation
	$('.testmonial').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
	
    // brand slider activation
    $('.brand-active').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
		autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    });
	
	// counter activation
	$('.counter').counterUp({
        delay: 10,
        time: 1000
	});
	
	// wow activation
	new WOW().init();
	

})(jQuery);