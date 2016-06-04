$(function(){
	$(".quiz").mouseover(function(){
		$(this).css({'filter':'blur(4px)', '-webkit-filter': 'blur(4px)'});
		$(".quiz-text").show();
	})
	.mouseleave(function(){
		$(this).css({'filter':'blur(0px)', '-webkit-filter': 'blur(0px)'});
		$(".quiz-text").hide();
	})
	$(".ratings").mouseover(function(){
		$(this).css({'filter':'blur(4px)', '-webkit-filter': 'blur(4px)'});
		$(".ratings-text").show();
	})
	.mouseleave(function(){
		$(this).css({'filter':'blur(0px)', '-webkit-filter': 'blur(0px)'});
		$(".ratings-text").hide();
	})
	$(".shopping-list").mouseover(function(){
		$(this).css({'filter':'blur(4px)', '-webkit-filter': 'blur(4px)'});
		$(".list-text").show();
	})
	.mouseleave(function(){
		$(this).css({'filter':'blur(0px)', '-webkit-filter': 'blur(0px)'});
		$(".list-text").hide();
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