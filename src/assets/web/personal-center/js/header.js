$(function () {
        //推荐轮询
        $(".submenu  li").hover(function () {
            var a = $(".submenu li .nav_class");
            a.hide();
            $(this).children(".nav_class").show();
            var c = $(this).index(),
              d = $(this).children(".nav_class");
            d.height() > 37 * (15 - c) ? d.css({
                top: "-" + (d.height() - 37 * (15 - c) + 1) + "px"
            }) : d.css({
                top: "0px"
            })
        }, function () {
            a.hide();
        });     
});