"use strict";

/* Default Variables */
var SiteOptions = {
}

if ( typeof Site !== 'undefined' ) {
	$.extend( SiteOptions, Site );
}

var Site = {
	init: function( ) {
		// resize
		$(window).resize(Site.onResize);

		Site.initSwipebox();
		Site.initIsotope();
		Site.initVegas();
		Site.kbzJquery();
	},
	isMobile: function(){
		return ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
	},
	initIsotope: function(){

		// isotope init
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
				// use element for option
				columnWidth: '.grid-sizer'
			}
		});
		// layout isotope after each image loads
		$grid.imagesLoaded().progress( function() {
			$grid.isotope('layout');
		});
		// filters
		$('.filter-button-group').on( 'click', 'button', function() {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});
		// filters change is-checked class on buttons
		$('.button-group').each( function( i, buttonGroup ) {
			var $buttonGroup = $( buttonGroup );
			$buttonGroup.on( 'click', 'button', function() {
				$buttonGroup.find('.is-checked').removeClass('is-checked');
				$( this ).addClass('is-checked');
			});
		});
	},
	onResize: function(){

	},
	initSwipebox: function(){
		$('.swipebox').swipebox( {
			useCSS : true, // false will force the use of jQuery for animations
			useSVG : false, // false to force the use of png for buttons
			initialIndexOnArray : 0, // which image index to init when a array is passed
			hideCloseButtonOnMobile : true, // true will hide the close button on mobile devices
			hideBarsDelay : false, // delay before hiding bars on desktop
			videoMaxWidth : 1140, // videos max width
			beforeOpen: function() {}, // called before opening
			afterOpen: null, // called after opening
			afterClose: function() {}, // called after closing
			loopAtEnd: false // true will return to the first image after the last image is reached
		} );
	},
	initVegas: function(){
		$('body').vegas({
			slides: [
				{ src: '/images/backgrounds/background_1.jpg' },
				{ src: '/images/backgrounds/background_2.jpg' }
			]
		});
	},
	// kbzJquery
	kbzJquery: function(){

	}
}

// Initialize
Site.init( );