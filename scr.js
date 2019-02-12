$(function(){
	$(".owl-carousel").owlCarousel({
		items: 1,
		autoplay:true,
		smartSpeed:700,
		loop: true,
		autoplayHoverPause: true,
		responsive: {
			0:{
				items: 1,
				autoplayHoverPause: false,
			},
		
		480:{
	    items:1,	
		},
		768:{
			items:1,
		},
		},
	});
});