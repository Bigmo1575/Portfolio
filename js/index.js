
$(function() {
    $(window ).resize( function() {
        if($(window).width() >= 1025){

        $susPic = $('#susPics img');

        $susPic.hover(function() {
            $(this).css("cursor", "pointer");
            $(this).stop().animate({
                width: "50%",
                height: "50%"
            }, 'slow');
            
        }, function(){
            $(this).stop().animate({
                width: "25%"
            }, 'slow')
        });
        }
}).resize(); 
});

