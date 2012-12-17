$(function(){
	//$('.custom-radio input[type="radio"]').hide();
	$('.custom-radio .extra-info').hide();

	$('.custom-radio').click(function(){
		$(this).children('input[type="radio"]').prop('checked','true');
	});

	$('.custom-radio').hover(function(){
		$(this).children('.extra-info').slideDown(100);
	},function(){
		$(this).children('.extra-info').slideUp(100);
	});
});
