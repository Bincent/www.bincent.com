$(document).ready(function() {
    //返回顶部
    $().toTop({img_src:"/assets/img/top.png",top_time:700});

    //下载按钮划过效果
    $("header .collapse ul.nav-pills li").click(function(){
       $("header .collapse ul.nav-pills li").removeClass("active");
       $(this).addClass("active");
    });
});
