$(function () {
    var nav=$('.nav');
    //弹框
    $(".wxt-box-close").click(function() {
       $(this).parent().hide();
       $(".shade").hide();
    });

    //顶部导航点击定位
    navPosition($(".nav-bar"),nav,1000,function(that){
        that.addClass('on').parent().siblings().children().removeClass('on');
    });

    //侧边导航点击定位
    navPosition($(".side-nav"),nav,1000,function(that){
        that.addClass('current').siblings().removeClass('current');
    });

    //移动端顶部导航定位
    navPosition($(".line"),$(".server-menu"),1,function(that){
        that.addClass('current').parent().siblings().children().removeClass('current');
    });

    //页面滚动交互
    pageScroll();

    //价格hover效果
    priceHover();

    //设置drop-info的宽度
    setDropWidth();

    //pc端服务项目显示
    serverItemShow();
    

    //banner气泡
    bannerBubble();
});

function navPosition(fl,bar,time,callBack) {
    var ht=bar.height();
    fl.on('click', 'a', function () {
        var id = $(this).attr('href');
        if (id.substr(0, 1) == "#") {
            var top = $(id).offset().top - ht;
            if (!bar.hasClass('fixed')) {
                top -= ht;
            }
            $('body,html').animate({scrollTop: top + 'px'},time);
            callBack&&callBack($(this));
            return false;
        }
    });
}

function autoLight(fl, stp, callBack) {
    fl.find('a').each(function (index, val) {
        var cardName = $(val).attr('href');
        if (cardName.substr(0, 1) == "#") {
            $(cardName).offset() && stp >= $(cardName).offset().top - 80 && callBack && callBack(fl.find('a[href=' + cardName + ']'));
        }
    });
}

function pageScroll(){
    $(window).on('scroll', function () {
        var nav = $(".side-nav,.nav-bar li");
        var menu = $(".service-menu");
        var fixedNav=$('.nav');
        var topNav = fixedNav.find('.nav-bar');
        var sideNav = $('.side-nav');
        var stp = $(this).scrollTop();

        //顶部导航自动高亮
        autoLight(topNav, stp, function (that) {
            that.addClass('on').parent().siblings().find('a').removeClass('on');
        });

        //侧边导航自动高亮
        autoLight(sideNav, stp, function (that) {
            that.addClass('current').siblings().removeClass('current');
        });

        //移动端顶部导航自动高亮
        autoLight(menu, stp, function (that) {
            that.addClass('current').parent().siblings().find('a').removeClass('current');
        });

        //页面滚动侧导航显示隐藏
        stp > 200 ? sideNav.fadeIn(300) : sideNav.fadeOut(300);

        //pc页面滚动头部固定
        fixedNavPosition(stp);

        //移动端页面滚动头部固定
        fixedMiniNavPosition(stp);

        //立即体验固定
        setExperiencePosition(stp);
    });
}

function isPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

function priceHover(){
    var price=$(".price");
    price.hover(function () {
        price.addClass("opa");
        $(this).removeClass("opa");
    }, function () {
        price.removeClass("opa");
    });
}

function setDropWidth(){
    var drop=$(".dropdown .drop-info");
    var service=$(".service-item");
    var tableWidth =service.width();
    drop.width(tableWidth);
    $(window).resize(function () {
        var tableW = service.width();
        drop.width(tableW);
    });
}

function serverItemShow(){
    if (isPC()) {
        $(".service-item .dropdown").hover(function () {
            $(this).find(".drop-info").show();
        }, function () {
            $(this).find(".drop-info").hide();
        });
    }
}

function setExperiencePosition(stp){
    var experienceTop = $(".bg-cyan").offset().top;
    var casecontentTop = $(".case-content").offset().top;
    if (stp > experienceTop && stp < casecontentTop) {
        $('.experience').addClass('experience-fixed');
    } else {
        $(".experience").removeClass("experience-fixed");
    }
}

function fixedNavPosition(stp){
    var fixedNav=$('.nav');
    if (stp> 30) {
        fixedNav.addClass('fixed');
        $(".mini-experience").addClass("mini-experience-fixed");
    } else {
        fixedNav.removeClass("fixed");
        $(".mini-experience").removeClass("mini-experience-fixed");
    }
}

function fixedMiniNavPosition(stp){
    var menu = $(".service-menu");
    if (stp > 50) {
        menu.addClass("fixed");
    } else {
        menu.removeClass("fixed");
    }
}

function bannerBubble() {
    // banner 圆点
    var c = document.getElementById('bubbles'),
        ctx = c.getContext('2d'),
        width = window.innerWidth,
        height = window.innerHeight,
        particles = 25,
        minRadius = 1,
        maxRadius = 4,
        speed = 0.00001,
        x = width / particles;

    // Bubbles
    var Bubbles = [];

    for (var i = 0; i < particles; i++) {
        Bubbles.push({
            x: i * x,
            y: height * Math.random(),
            r: minRadius + Math.random() * (maxRadius - minRadius),
            speed: 10 * Math.random()
        });
    }

    function bubble() {

        c.width = width;
        c.height = height;
        for (i = 0; i < Bubbles.length; i++) {
            var b = Bubbles[i];
            //console.log(i, b);
            ctx.beginPath();
            ctx.arc(b.x, b.y, b.r, 0, 2 * Math.PI);

            b.alpha = .5 * (b.y / height);
            b.speed += speed;

            ctx.strokeStyle = "rgba(225, 225, 225, " + b.alpha + ")";
            ctx.stroke();
            ctx.fillStyle = "rgba(21, 124, 255, 1)";
            ctx.fill();
            b.y -= b.speed;
            if (b.y < 0) {
                b.y = height;
                b.speed = Math.random() * 5;
            }
        }
    }

    // Draw
    function draw() {
        bubble();
        window.requestAnimationFrame(draw);
    }

    // Resize Canvas
    function resizeCanvas() {
        width = window.innerWidth,
            height = window.innerHeight;
        c.width = width;
        c.height = height;
        draw();
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, false);

}