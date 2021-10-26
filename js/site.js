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
		// Site.initVegas();
		Site.scrollify();
		Site.affix();
		Site.kbzJquery();
		Site.onResize();
	},
	isMobile: function(){
		return ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
	},
	onResize: function(){
		var ancho = window.innerWidth;
		if (ancho >= 768) {
			$.scrollify.enable();
		} else {
			$.scrollify.disable();
		}
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
	// scrollify
	scrollify: function(){
		$(function() {
			$.scrollify({
				section : ".full-page",
				// sectionName : "section-name",
				interstitialSection : "",
				easing: "easeOutExpo",
				scrollSpeed: 1100,
				offset : 0,
				scrollbars: true,
				standardScrollElements: "",
				setHeights: false,
				overflowScroll: true,
				updateHash: true,
				touchScroll:true,
				before:function() {},
				after:function() {},
				afterResize:function() {},
				afterRender:function() {}
			});
		});
	},
	// affix
	affix: function(){
		$(window).on('scroll', function (event) {
			var scrollValue = $(window).scrollTop();
			if (scrollValue > 45) {
				$('.navbar').addClass('affix');
			} else{
				$('.navbar').removeClass('affix');
			}
		});
	},
	// kbzJquery
	kbzJquery: function(){

	}
}

// Initialize
Site.init( );