(function($){
	
	$(function(){

		$('#block-block-2 .content a').click(function(event){

			if($(window).width() > 730)
			{
				event.preventDefault();
				$('.block-search').addClass('active');
				$('.block-search + .block-block').addClass('hide');
				$('.block-search .form-type-textfield').slideDown();
			}
		});

		$("body").click(function(){
			if($(window).width() > 730)
			{
		 	  $(".block-search .form-type-textfield").slideUp();
			  $('.block-search').removeClass('active');
			  $('.block-search + .block-block').removeClass('hide');

		  	}
		});
	
		// Prevent events from getting pass .popup
		$("#search-block-form,#block-block-2").click(function(e){
		  e.stopPropagation();
		});
	});

})(jQuery)