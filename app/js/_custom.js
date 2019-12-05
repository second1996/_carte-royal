document.addEventListener("DOMContentLoaded", function() {

	// Custom JS

});

$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		items: 1,
		mouseDrag: false,
		touchDrag: false,
		nav: true,
		navContainer: '.h-heroes__nav',
		navText: [
			'<svg class="icon icon-arrow"><use xlink:href="../img/icons/sprite.svg#icon-arrow"></use></svg>',
			'<svg class="icon icon-arrow"><use xlink:href="../img/icons/sprite.svg#icon-arrow"></use></svg>'
		],
		// navSpeed: 0,
		// dotsSpeed: 0,
		// animateIn: 'fadeIn',
		animateOut: 'fadeOut',
	});
});