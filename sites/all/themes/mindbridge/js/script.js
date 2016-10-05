(function($){    

    $(function(){

    $('#mobile-menu-icon a').click(function(e){

        e.preventDefault();
        $('.region-navigation').slideToggle();
        $('#navigation').toggleClass('open');

    });

    /*
    * anchor top margin
    */

    if(window.location.hash)
    { 
       var target = window.location.hash;
       
        var $target = $(target);
        console.log($target);
        $('html, body').stop().animate({
          'scrollTop': $target.offset().top-75
        }, 150);
    }  


    $('.view-services a[href*=#]').on('click',function (e) 
    {       
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-75
        }, 400, 'swing', function () {
            window.location.hash = target;
        });
    });

});
    
})(jQuery);
