$(function() {
    $("header .collapse ul.nav-pills li").click(function(){
       $("header .collapse ul.nav-pills li").removeClass("active");
       $(this).addClass("active");
    });
    
    $.scrollUp({
        scrollName: 'scrollUp',
        topDistance: '300',
        topSpeed: 300,
        animation: 'fade',
        animationInSpeed: 200, 
        animationOutSpeed: 200, 
        scrollText: '<span class="glyphicon glyphicon-chevron-up"></span>',
        activeOverlay: false
    });
});
