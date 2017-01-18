(function($){    

    $(function(){

    $('#mobile-menu-icon a').click(function(e){

        e.preventDefault();
        $('.region-navigation').slideToggle();
        $('#navigation').toggleClass('open');

    });
    /*
    * Menu switch
    */

   /*
   * Anchor scroll top margin
   */

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
