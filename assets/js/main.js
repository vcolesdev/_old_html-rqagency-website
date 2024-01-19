$(document).ready(function(){

	// Smooth scroll to anchor links
	let scrollLink = new SmoothScroll('a[href*="#"]', {
		speed: 600
	});

	// Back to top button
	const scrollTop = $('.scroll-top');
	const offset = 250;
	const duration = 600;

	$(window).scroll(function() {
		if($(this).scrollTop() > offset) {
			scrollTop.fadeIn(duration);
		} else {
			scrollTop.fadeOut(duration);
		}
	});

	scrollTop.click(function() {
		$('html, body').animate({scrollTop: 0}, 500);
		return false;
	});

	// Sticky header
	(function() {
		const navbar = $('.navbar-wrap');
		const header = $('.site-header');
		const navbarTop = navbar.offset().top;

		$(window).scroll(function() {
			if ($(this).scrollTop() > navbarTop) {
				navbar.addClass('navbar-sticky');
			} else {
				navbar.removeClass('navbar-sticky');
			}
		});
	})();

	// Initialize testimonials carousel
	$('.testimonials-carousel').slick({
//	dots: true,
		autoplay: true,
		autoplaySpeed: 5000,
		prevArrow: '<button class="slick-prev slick-arrow" type="button" role="button"><i class="ion-ios-arrow-left"></i></button>',
		nextArrow: '<button class="slick-next slick-arrow" type="button" role="button"><i class="ion-ios-arrow-right"></i></button>'
	});

	// Initialize logo carousel
	$('.logo-carousel').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		variableWidth: true
	});

});