$(function(){
	$(".masthead-title").fadeIn(4000);
	$(".menu").fadeIn(6000);
	$(".quiz").mouseover(function(){
		$(this).css({'filter':'blur(4px)', '-webkit-filter': 'blur(4px)'});
		$(".quiz-text").fadeIn(800);
	})
	.mouseleave(function(){
		$(this).css({'filter':'blur(0px)', '-webkit-filter': 'blur(0px)'});
		$(".quiz-text").fadeOut(400);
	})
	// $(".ratings").mouseover(function(){
	// 	$(this).css({'filter':'blur(4px)', '-webkit-filter': 'blur(4px)'});
	// 	$(".ratings-text").fadeIn(800);
	// })
	// .mouseleave(function(){
	// 	$(this).css({'filter':'blur(0px)', '-webkit-filter': 'blur(0px)'});
	// 	$(".ratings-text").fadeOut(400);
	// })
	$(".shopping-list").mouseover(function(){
		$(this).css({'filter':'blur(4px)', '-webkit-filter': 'blur(4px)'});
		$(".list-text").fadeIn(800);
	})
	.mouseleave(function(){
		$(this).css({'filter':'blur(0px)', '-webkit-filter': 'blur(0px)'});
		$(".list-text").fadeOut(400);
	})
});

function scrollProject(){
	$('html, body').animate({ scrollTop: $(".projects").position().top - $(".menu").height()}, 2000);
	// animate body with scrollTop
}
function scrollUp(){
	$('html, body').animate({ scrollTop: $(".masthead").position().top}, 2000);
}
function scrollWho(){
	$('html, body').animate({ scrollTop: $(".overview").position().top - $(".menu").height()}, 2000);
}
function scrollTech(){
	$('html, body').animate({ scrollTop: $(".tech").position().top - $(".menu").height()}, 2000);
}
function scrollFooter(){
	$('html, body').animate({ scrollTop: $(".social").position().top - $(".menu").height()}, 2000);
}