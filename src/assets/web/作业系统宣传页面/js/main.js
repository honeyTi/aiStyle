+function () {
    // 初始化方法
    init();
    function init() {
        // 方块运动效果
        boxMove();
        // 滚动错题集动画
        productionMethod();
        // 工厂皮带效果
        factoryLine();
        // canvas效果
        canvasAnimation();
        // 按钮胶囊滑动效果
        btnHover();
        // 反转卡片
        reverseCard();
    }
    // 方块运动开始
    function boxMove() {
        var t = new TimelineMax();
        t.to('.introduce-content', 1, {
            onComplete: function () {
                var e = new TimelineMax({
                    repeat: -1
                });
                e.to('.box', 6.8, { left: '1090px', ease: "linear" });
                e.to('.box', 0.2, { left: '1110px', top: '70px', ease: "linear" });
                e.to('.box', 2, { top: '268px', ease: "linear" });
                e.to('.box', 0.2, { left: '1090px', top: '277px', ease: "linear" });
                e.to('.box', 7, { left: '400px', ease: "linear" });
                e.to('.person', 0, {background: "url('./img/person.gif') no-repeat", ease: 'linear'});
                e.to('.person', 0.6, {ease: 'linear'});
                e.to('.light', 0.3, {background: "url('./img/light_1.png') no-repeat", ease: 'linear'});
                e.to('.box', 0.3, { left: '400px', opacity: '0', ease: "linear" });
                e.to('.person', 0, {background: "url('./img/person.png') no-repeat", ease: 'linear'});
                e.to('.box', 4, { left: '236px', opacity: '0', ease: "linear" });
                e.to('.light', 0, {background: "url('./img/light.png') no-repeat", ease: 'linear'});
                e.to('.box', 0.1, { left: '236px', opacity: '1', ease: "linear" });
                e.to('.box', 2.3, { left: '108px', top: '353px', ease: "linear" });
                e.to('.box', 1.3, { left: '24px', top: '308px', ease: "linear" });
                e.to('.box', 1.8, { top: '208px', opacity: '0', ease: "linear" });
            }
        });
    }
    // 功能方法
    function productionMethod() {
        var t = new TimelineMax();
        // 第一个动画
        for (var i = 1; i <= 4; i++) {
            wrongAnimation('.wrong-' + i, t);
        }
    }
    // 动画效果复制
    function wrongAnimation(dom, t) {
        t.to('.function-show', 1.5, {
            onComplete: function () {
                var e = new TimelineMax({
                    repeat: -1
                });
                e.to(dom, 2.5, { top: '253px', opacity: '1', ease: "linear" });
                e.to(dom, 2.5, { top: '165px', left: '396px', transform: 'scale(0.6)', opacity: '0.7', ease: "linear" });
                e.to(dom, 1, { top: '130px', left: '480px', transform: 'scale(0.3)', opacity: '0', ease: "linear" });
                e.to(dom, 1.5, { top: '24px', left: '632px', transform: 'scale(1)', ease: "linear" });
                e.to(dom, 0.1, { top: '24px', left: '632px', transform: 'scale(1)', opacity: '1', background: "url('./img/right.png') no-repeat", ease: "linear" });
                e.to(dom, 1, { top: '0px', left: '672px', opacity: '0', ease: "linear" });
            }
        })
    }
    // 皮带效果
    function factoryLine() {
        var t = new TimelineMax();
        for (var i = 1; i <= 12; i++) {
            lineAnimation('.line-' + i, t);
        }
    }
    // 皮带效果
    function lineAnimation(dom, t) {
        t.to('.line-list', 0.5, {
            onComplete: function () {
                var e = new TimelineMax({
                    repeat: -1
                });
                e.to(dom, 0, { opacity: '1' });
                e.to(dom, 6, { top: '71px', left: '675px', ease: "linear" });
            }
        })
    }
    // canvas效果
    function canvasAnimation() {
        var c = new Cbg({
            container: "#canvas-club",
            control: "auto",
            width: $('.banner').width(),
            height: $('.banner').height(),
            size: [10, 0.02],
            type: "color",
            color: ['#f4658b','#ffab4e', '#5c97f8','#897df6','#897df6'],
            animation_type: 0,
            speed: 70,
        })
    }
    // 胶囊滑动效果
    function btnHover() {
        $('.mgt-55 .green').hover(function () {
            $(this).parent().addClass('move-right');
        },function () {
            $(this).parent().removeClass('move-right');
        })

        $('.mgt-35 .green').hover(function () {
            $(this).parent().addClass('move-left');
        },function () {
            $(this).parent().removeClass('move-left');
        })
    }
    // 翻转效果
    function reverseCard() {
        $('.part-list').on('mouseenter', 'div.item',function () {
            $(this).addClass('active');
        }).on('mouseleave', 'div.item', function () { 
            var that = this;
            setTimeout(function() {
                $(that).removeClass('active');
            }, 2000);
        });
    }
}()