(function($){
	
	$(function(){

		$('#block-block-2 .content a').click(function(event){

			if($(window).width() > 730)
			{
				event.preventDefault();
				$('#block-search-form').toggleClass('active');
				$('#block-block-2').toggleClass('hide');
				$('#search-block-form .form-type-textfield').slideDown();
			}
		});

		$("body").click(function(){
			if($(window).width() > 730)
			{
		 	  $("#search-block-form .form-type-textfield").slideUp();
			  $('#block-search-form').removeClass('active');
			  $('#block-block-2').removeClass('hide');
		  	}
		});
	
		// Prevent events from getting pass .popup
		$("#search-block-form,#block-block-2").click(function(e){
		  e.stopPropagation();
		});
	});

})(jQuery)