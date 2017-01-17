(function($){    
    $(function(){

        var max1 = $('.view-services .views-row').length;
        for(var i=1; i<=max1; i++)
        {   
            $('.view-services .views-row-'+i+' .serv-block').replaceIcon();
        }  

        $('.view-services .views-row').each(function(){
        
            var title = $(this).find('.title').text();
            title = title.slice(0, -1);
            console.log(title);
            $(this).find('a.serv-block').attr('href','/services/#'+title);
        });
        
        $('.view-services-page .view-grouping').each(function(){

            $(this).servListIcon();
            var title = $(this).find('.view-grouping-content .views-row-1 .views-field-name .field-content').text();
            title = title.slice(0, -1);
            $(this).find('.view-grouping-header').attr('id',title);
        });
    });

    $.fn.replaceIcon = function( action ) {
        
        var imgName = $(this).find('.serv-icon').text().toLowerCase();
        var div = $(this).find('.serv-icon');
        div.html('<img class="serv-icon" src="/sites/all/themes/mindbridge/images/'+imgName+'-icon.png" alt="">');
    };

     $.fn.servListIcon = function( action ) {
        
        var imgName = $(this).find('.views-row-1 .serv-icon').text().toLowerCase();
        console.log(imgName);
        var div = $(this).find('.views-field-title');
        div.prepend('<img class="serv-icon" src="/sites/all/themes/mindbridge/images/'+imgName+'-small-icon.png" alt="">');
    };

})(jQuery);
