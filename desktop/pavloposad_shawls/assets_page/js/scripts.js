$(document).ready(function() {

	/* lazy load */
	new LazyLoad();
	
	/* scroll */
	
	$("a[href^='#']").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"200px"});
		if (_href == "#order_form") {
			var product = $(this).parent().find("h4").text();
			$("#order_form select[name='comment'] option[value='"+product+"']").prop("selected", true);
		}
		return false;
	});

	//модель в форму
	$('.product_item .button').on('click', function(){
		var prodName = $(this).siblings('.title_block').children('h4').text();
		$("input[name='comment']").val(prodName);
	});

	/* sliders */

	$(".slider").owlCarousel({
		items: 1,
		loop: true,
		smartSpeed: 300,
		mouseDrag: false,
		pullDrag: false,
		dots: false,
		nav: true,
		navText: ""
	});

	$(".reviews_list").owlCarousel({
		smartSpeed: 300,
		mouseDrag: false,
		pullDrag: false,
		dots: false,
		navText: "",
		responsive: {
			0: {
				items: 1,
				margin: 0,
				nav: true,
				loop: true
			},
			660: {
				items: 2,
				margin: 20,
				nav: true,
				loop: true
			},
			1170: {
				items: 4,
				margin: 20,
				nav: false,
				loop: false
			}
		}
	});

});