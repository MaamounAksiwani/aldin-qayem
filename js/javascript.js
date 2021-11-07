// JavaScript Document

$(document).ready(function(){
	
	$('.option_group li').click(function(){
		$(this).addClass("select").siblings().removeClass("select");
		$(".for-hide > div").hide();
		$($(this).attr("data-class")).show();
		
	});	
	
})