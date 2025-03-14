(function($) {
	"use strict";

	$(window).on('load', function() {
	    $(".preloader").fadeOut("slow", function() {
	        $(".preloader-left").addClass("slide-left");
	    });

	    $('#lionhero').owlCarousel({
	        animateOut: 'fadeOut',
	        nav: true,
	        navText: [
	            '<i class="ion-ios-arrow-thin-left"></i>',
	            '<i class="ion-ios-arrow-thin-right"></i>'
	        ],
	        items: 1,
	        navSpeed: 400,
	        loop: true,
	        autoplay: true,
	        autoplayTimeout: 4000,
	        autoplayHoverPause: true,
	    });

	    $('#liontextslider').owlCarousel({
	        nav: false,
	        items: 1,
	        navSpeed: 400,
	        loop: true,
	        autoplay: true,
	        autoplayTimeout: 4000,
	        autoplayHoverPause: true,
	    });

	    $('#liontestimonial').owlCarousel({
	        nav: true,
	        navText: [
	            '<i class="ion-ios-arrow-thin-left"></i>',
	            '<i class="ion-ios-arrow-thin-right"></i>'
	        ],
	        items: 1,
	        navSpeed: 400,
	        loop: true,
	        autoplay: true,
	        autoplayTimeout: 4000,
	        autoplayHoverPause: true,
	    });
	});

	$('.portfolio-block, .menu-item').on('click', function() {

	    //Portfolio masonry
	    var $container = $('#portfolio-container');
	    $container.isotope({
	        masonry: {
	            columnWidth: '.portfolio-item'
	        },
	        itemSelector: '.portfolio-item'
	    });
	    $('#filters').on('click', 'li', function() {
	        $('#filters li').removeClass('active');
	        $(this).addClass('active');
	        var filterValue = $(this).attr('data-filter');
	        $container.isotope({ filter: filterValue });
	    });

	});

	// Typing Animation (Typed.js)
	$('#element').typed({
	    strings: ["UX, UI Designer", "Web App Developer", "Social Animal!"],
	    typeSpeed: -50,
	    loop: true,
	    startDelay: 500,
	    backDelay: 3000,
	    contentType: 'html',
	});

	//Video background
	$(".player").mb_YTPlayer({
	    containment: '#video-wrapper',
	    mute: true,
	    showControls: false,
	    quality: 'default',
	    startAt: 5
	});

	//Portfolio Modal
	$(document).on('click', '.open-project', function() {
	    var projectUrl = $(this).attr("href");
	    $('.inline-menu-container').removeClass('showx');
	    $('.sidebar-menu').addClass('hidex');
	    $('.content-blocks.pop').addClass('showx');
	    $('.content-blocks.pop section').load(projectUrl+' .load-data > *');
	    return false;
	});

	//Blog post Modal
	$('.open-post').on('click', function() {
	    var postUrl = $(this).attr("href");
	    $('.inline-menu-container').removeClass('showx');
	    $('.sidebar-menu').addClass('hidex');
	    $('.content-blocks.pop').addClass('showx');
	    $('.content-blocks.pop section').load(postUrl);
	    return false;
	});

	//On Click Open Menu Items
	$('.menu-block, .menu-item').on('click', function() {
	    $('.name-block').addClass('reverse');
	    $('.name-block-container').addClass('reverse');
	    $('.menu-blocks').addClass('hidex');
	    $('.inline-menu-container').addClass('showx');
	    $('.inline-menu-container.style2').addClass('dark');
	});
	//On Click Open About/Resume Block
	$('.about-block, .menu-item.about').on('click', function() {
	    $('.content-blocks').removeClass('showx');
	    $('.content-blocks.about').addClass('showx');
	    $('.menu-item').removeClass('active');
	    $('.menu-item.about').addClass('active');
	});
	//On Click Open Portfolio Block
	$('.portfolio-block, .menu-item.portfolio').on('click', function() {
	    $('.content-blocks').removeClass('showx');
	    $('.content-blocks.portfolio').addClass('showx');
	    $('.menu-item').removeClass('active');
	    $('.menu-item.portfolio').addClass('active');
	});
	//On Click Open Blog Block
	$('.blog-block, .menu-item.blog').on('click', function() {
	    $('.content-blocks').removeClass('showx');
	    $('.content-blocks.blog').addClass('showx');
	    $('.menu-item').removeClass('active');
	    $('.menu-item.blog').addClass('active');
	});
	//On Click Open Contact Block
	$('.contact-block, .menu-item.contact').on('click', function() {
	    $('.content-blocks').removeClass('showx');
	    $('.content-blocks.contact').addClass('showx');
	    $('.menu-item').removeClass('active');
	    $('.menu-item.contact').addClass('active');
	});

	//On Click Close Blocks
	$('#close').on('click', function() {
	    $('.name-block').removeClass('reverse');
	    $('.name-block-container').removeClass('reverse');
	    $('.content-blocks').removeClass('showx');
	    $('.menu-blocks').removeClass('hidex');
	    $('.inline-menu-container').removeClass('showx');
	    $('.menu-item').removeClass('active');
	});
	//On Click Close Blog Post And Project Details
	$('#close-pop').on('click', function() {
	    $('.content-blocks.pop').removeClass('showx');
	    $('.sidebar-menu').removeClass('hidex');
	    $('.inline-menu-container').addClass('showx');
	    $('.content-blocks.pop section').empty();
	});

	$('.menu-block, .menu-item, #close').on('click', function() {
	    $('.content-blocks').animate({ scrollTop: 0 }, 800);
	});	

	//Function for 'Index-Menu2.html'
	$('#home').on('click', function() {
	    $('.content-blocks').removeClass('showx');
	    $('.menu-item').removeClass('active');
	    $(this).addClass('active');
	    $('.inline-menu-container.style2').removeClass('dark');
	});

	// Intialize Map
	google.maps.event.addDomListener(window, 'load', init);

	function init() {
	    // Basic options for a simple Google Map
	    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
	    var mapOptions = {
	        // How zoomed in you want the map to start at (always required)
	        zoom: 15,

	        // The latitude and longitude to center the map (always required)
	        center: new google.maps.LatLng(44.349970, -79.702780), 

	        scrollwheel: true,


	        // How you would like to style the map.
	        // This is where you would paste any style found on Snazzy Maps.
	        styles: [{
	            featureType: 'all',
	            stylers: [{
	                saturation: -65
	            }]
	        }, {
	            featureType: 'road.arterial',
	            elementType: 'geometry',
	            stylers: [{
	                hue: '#00ffee'
	            }, {
	                saturation: 80
	            }]
	        }, {
	            featureType: 'poi.business',
	            elementType: 'labels',
	            stylers: [{
	                visibility: 'off'
	            }]
	        }]
	    };

	    // Get the HTML DOM element that will contain your map
	    // We are using a div with id="map" seen below in the <body>
	    var mapElement = document.getElementById('map');

	    // Create the Google Map using our element and options defined above
	    var map = new google.maps.Map(mapElement, mapOptions);

	    var image = 'images/map-marker.png';
	    // Let's also add a marker while we're at it
	    var marker = new google.maps.Marker({
	        position: new google.maps.LatLng(44.349970, -79.702780),
	        map: map,
	        icon: image,
	        draggable: true,
	        animation: google.maps.Animation.DROP
	    });
	    marker.addListener('click', toggleBounce);

	    function toggleBounce() {
	        if (marker.getAnimation() !== null) {
	            marker.setAnimation(null);
	        } else {
	            marker.setAnimation(google.maps.Animation.BOUNCE);
	        }
	    }
	}
})(jQuery);