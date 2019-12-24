document.addEventListener("DOMContentLoaded", function() {

	var lazyLoadInstance = new LazyLoad({
		elements_selector: ".lazy",
		threshold: 0,
	});

});

$(document).ready(function(){
	$(".h-heroes__carousel").owlCarousel({
		items: 1,
		lazyLoad: true,
		mouseDrag: false,
		touchDrag: false,
		nav: true,
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		navContainer: '.h-heroes__carousel-nav',
		navText: [
			'<svg class="icon icon-arrow"><use xlink:href="../img/icons/sprite.svg#icon-arrow"></use></svg>',
			'<svg class="icon icon-arrow"><use xlink:href="../img/icons/sprite.svg#icon-arrow"></use></svg>'
		],
		animateOut: 'fadeOut',
		smartSpeed: 5000,
	});
	$(".h-delivery__carousel").owlCarousel({
		items: 1,
		mouseDrag: false,
		touchDrag: false,
		nav: true,
		navContainer: '.h-delivery__carousel-nav',
		navText: [
			'<svg class="icon icon-arrow"><use xlink:href="../img/icons/sprite.svg#icon-arrow"></use></svg>',
			'<svg class="icon icon-arrow"><use xlink:href="../img/icons/sprite.svg#icon-arrow"></use></svg>'
		],
		dots: false,
		animateOut: 'fadeOut',
	});
	$(".reviews__carousel").owlCarousel({
		margin: 20,
		mouseDrag: false,
		touchDrag: true,
		nav: true,
		navContainer: '.reviews__carousel-nav',
		navText: [
			'<svg class="icon icon-arrow"><use xlink:href="../img/icons/sprite.svg#icon-arrow"></use></svg>',
			'<svg class="icon icon-arrow"><use xlink:href="../img/icons/sprite.svg#icon-arrow"></use></svg>'
		],
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			}
		},
	});
	$(".family__carousel").owlCarousel({
		items: 5,
		margin: 10,
		lazyLoad: true,
		mouseDrag: false,
		// touchDrag: true,
		nav: true,
		dots: false,
		navText: [
			'<svg class="icon icon-arrow"><use xlink:href="../img/icons/sprite.svg#icon-arrow"></use></svg>',
			'<svg class="icon icon-arrow"><use xlink:href="../img/icons/sprite.svg#icon-arrow"></use></svg>'
		],
		responsive: {
			0: {
				items: 2
			},
			576: {
				items: 3
			},
			992: {
				items: 5
			}
		},
	});
	$(".events__carousel").owlCarousel({
		// loop: true,
		margin: 20,
		// center: true,
		// startPosition: 1,
		mouseDrag: false,
		touchDrag: true,
		dots: false,
		nav: true,
		navText: [
			'Попередня',
			'Наступна'
		],
		responsive: {
			0: {
				items: 1
			},
			992: {
				items: 2
			}
		},
	});

	// Mobile navigation
	var mNavHumb	= $('.s-header__humb');
			mNav			= $('.m-nav');

	mNavHumb.on('click', function() {
		$(this).toggleClass('toggled')
		mNav.toggleClass('is-active');
	});

	// Fancybox
	$('[data-fancybox="gallery"]').fancybox({
		// Options will go here
	});

	// Anchors Links
	$('a[data-link^="anchor"]').bind('click.smoothscroll', function(){
		var target = $(this).attr('href'),
				bl_top = $(target).offset().top - 75,
				bl_top_class = $(target).hasClass('section-gray'),
				bl_top_padding = $(target).offset().top;

		if( bl_top_class == false ) {
			$('body, html').animate({scrollTop: bl_top}, 1000);
		} else {
			$('body, html').animate({scrollTop: bl_top_padding}, 1000);
		}
		return false;
	});

	// Bootstrap Tabs hash
	if (location.hash !== '') $('a[href="' + location.hash + '"]').tab('show');
	return $('a[data-toggle="tab"]').on('shown', function(e) {
		return location.hash = $(e.target).attr('href').substr(1);
	});

});