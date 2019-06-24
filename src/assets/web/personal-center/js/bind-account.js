+function() {
    //统一执行函数
    init();
    function init() {
        // 添加type选择，样式变化  
        chooseType();
        // 流程下一步
        nextStep();
    }
    // 绑定类型选择
    function chooseType() {
        $('.type-choose').click(function () {
            var chooseType = chooseData($(this));
            $('.bind-account-content').addClass('hide').siblings('[' + chooseType +'= "0"]').removeClass('hide');
        });
        $('.bind-type-list li').click(function () {
            var chooseType = chooseData($(this));
            $('.bind-account-content').addClass('hide').siblings('[' + chooseType +'= "0"]').removeClass('hide');
        });
        $('.form-tips').click(function() {
            var chooseType = chooseData($(this));
            $('.bind-account-content').addClass('hide').siblings('[' + chooseType +']').removeClass('hide');
        })
    }
    // 验证表单下一步
    function nextStep() {  
        $('.handle-next').click(function () {
            var chooseType = chooseData($(this));
            // 切换下一步
            flowPathChoose(chooseType, 0);
        });
        // handle-email-next 处理文字
        emailBindHandle('.handle-email-next');
        // 邮箱替换处理按钮
        emailBindHandle('.handle-new-email');
        // 手机确定按钮
        $('.handle-sure').click(function () {
            var chooseType = chooseData($(this));
            flowPathChoose(chooseType, 1);
        });
        // 确定邮箱按钮点击事件
        $('.handle-look').click(function () {  
            var chooseType = $(this).data('choose');
            var index = parseInt($(this).attr('data-index'));
            flowPathChoose(chooseType, index);
        })
    }

    // 路径切换，页面显示内容切换
    function flowPathChoose(type, step) {
        // 路径切换，内容区域显示切换
        step + 1 === 2 ? $('.bind-flow-path').children('li').eq(step).addClass('active-complete').next().addClass('active').addClass('active-complete') 
        : $('.bind-flow-path').children('li').eq(step).addClass('active-complete').next().addClass('active');
        console.log('[' + type +'="' + (step + 1) + '"]');
        $('.bind-account-content').addClass('hide').siblings('[' + type +'="' + (step + 1) + '"]').removeClass('hide');
    }

    // 路径返回
    function backToPrev(type, step) {
        $('.bind-flow-path').children().eq(step).removeClass('active-complete').next().removeClass('active');
        $('.bind-account-content').addClass('hide').siblings('[' + type +'="' + step + '"]').removeClass('hide');
    }
    // 获取选择方式
    function chooseData(dom) {
        return dom.data('choose');
    }
    // 邮箱处理跳出确认页面
    function emailBindHandle(dom) {
        $(dom).click(function(){
            var chooseType = $(this).data('choose');
            var index = $(this).data('index');
            $('.bind-account-content').addClass('hide').siblings('[' + chooseType +']').removeClass('hide');
            $('[' + chooseType +']').find('.handle-look').attr('data-index', index);
        });
        
    }
}()