(function($){    
    $(function(){
        var max1= $('.view-banner .views-row').length;
        for(var i=1; i<=max1; i++)
        {   
            $('.view-banner .views-row-'+i+' .views-field-field-image-banner').replaceImgtag();
        }  

    });

    $.fn.replaceImgtag = function( action ) {
        
        var img = $(this).find('img');
        var imgSrc = img.attr('src');
        var div = $(this).find('div');
        console.log(img.attr('src'));
        img.remove();
        div.html('<div class="backbg"></div>');
        $(this).find('.backbg').css('background-image', 'url(' + imgSrc + ')');
    };
})(jQuery);
