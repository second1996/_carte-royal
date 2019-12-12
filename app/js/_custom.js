document.addEventListener("DOMContentLoaded", function() {

	// Custom JS

});

$(document).ready(function(){
	$(".h-heroes__carousel").owlCarousel({
		items: 1,
		mouseDrag: false,
		touchDrag: false,
		nav: true,
		loop: true,
		// autoplay: true,
		// autoplayTimeout: 5000,
		// autoplayHoverPause: true,
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



	// Mobile navigation
	var mNavHumb	= $('.s-header__humb');
			mNav			= $('.m-nav');

	mNavHumb.on('click', function() {
		mNav.toggleClass('is-active');
	});
});