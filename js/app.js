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