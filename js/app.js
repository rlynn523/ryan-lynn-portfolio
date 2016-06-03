$(function(){
	$(".quiz, .ratings, .shopping-list").mouseover(function(){
		$(this).css({'filter':'blur(2px)', '-webkit-filter': 'blur(2px)'});
	})
	.mouseleave(function(){
		$(this).css({'filter':'blur(0px)', '-webkit-filter': 'blur(0px)'});
	})
});