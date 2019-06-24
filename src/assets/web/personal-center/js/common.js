+function ($) {
    // tab切换动态效果
    $.fn.tabChange = function (options) {
        //通用配置项
        var that = this;
        var  defaultOptions = {
            // 数据开始位置
            chooseItem: 0,
            // chooseClass 选中class
            chooseClass: 'active',
            chooseItemIndex: 0
        }
        // 配置项获取
        var setting = $.extend({}, defaultOptions, options);
        _init();
        // 初始化
        function _init() {
            // 获取条目宽度
            _getItemWidth();
            // 设置初始化线段的长度
            _setLineWidth();
            // 初始化元素的位置
            _linePositionChange(setting.chooseItem);
            _itemHover();
            _clickItem()
        }
        // 获取元素宽度设置underline的宽度
        function _getItemWidth() {
            // 设置条目的宽度
            setting.itemWidth = $(that).find(setting.item).width();
            // 条目的左右外边距+ 宽度值
            setting.itemWdithAll = $(that).find(setting.item).outerWidth(true);
        }
        // 初始化线的长度
        function _setLineWidth() {
            $(setting.underlineClass).css({
                width: setting.itemWidth + 'px'
            });
        }
        // 线段长度切换
        function _linePositionChange(index) {
            // 设置线段位置
            $(setting.underlineClass).css({
                left: index * setting.itemWdithAll + 'px'
            });
        }
        // 鼠标离开事件
        function _mouseLeave(index) {
            $(setting.underlineClass).css({
                left: setting.chooseItemIndex * setting.itemWdithAll + 'px'
            })
        }
        // hover效果
        function _itemHover() {
            $(that).find(setting.item).mouseover(function () { 
                _linePositionChange($(this).index());
            }).mouseleave(function () { 
                _mouseLeave($(this).index());
            });
        }
        // 点击事件
        function _clickItem() {
            $(that).on('click', setting.item, function () {
                var index = $(this).index();
                setting.chooseItemIndex = index;
                $(this).addClass(setting.chooseClass).siblings().removeClass(setting.chooseClass);
                $(setting.underlineClass).css({
                    left: index * setting.itemWdithAll + 'px'
                });
                // tabs切换
                $(setting.tabsContent).addClass(setting.hide).siblings('[data-index="'+ index +'"]').removeClass(setting.hide)
            })
            
        }

    };
    // 下来选项插件
    $.fn.dropDownSelect = function (options) {
        var that = this;
        var  defaultOptions = {
            // 数据开始位置
            nextSelectDom: "",
        }
        var setting = $.extend({}, defaultOptions, options);
        _init();
        function _init() {
            // 空白处点击隐藏select
            _spaceClick();
            // 点击select-value框显示option;
            _optionShow();
            // option点击事件
            _optionChoose();
        }
        function _optionShow() {
            // 点击select-value 显示与隐藏options
            $(that).children('.select-value').click(function () {
                $(that).children('.select-option').hasClass("hide") ? 
                $(that).children('.select-option').removeClass("hide")
                : $(that).children('.select-option').addClass("hide");
            })
        }
        // option点击时间
        function _optionChoose() {
            $(that).children('.select-option').on('click', 'li', function () {
                $(this).addClass('active').siblings().removeClass('active');
                $(that).children('.select-value').text($(this).text()).siblings('.select-option').addClass('hide');
                if (setting.nextSelectDom) {
                    $(setting.nextSelectDom).focus().select();
                }
            })
        }
        // 点击空白处隐藏select下拉框
        function _spaceClick() {
            
        }
    }
    // 回车切换下一行
    function keydown_to_tab($input) {
        if (!$input) $input = $('[data-text]:not(:disabled)');
        $input.bind("keydown", function (e) {
            var n = $input.length;
            if (e.which == 13) {
                e.preventDefault(); //Skip default behavior of the enter key
                var nextIndex = $input.index(this) + 1;
                if (nextIndex < n)
                    $input[nextIndex].focus();
                else
                    $input[nextIndex - 1].blur();
            }
        });
    }
    keydown_to_tab();
    // 分页器动效
    pagination();
    function pagination() {
        $('.num-input').focus(function () {  
            $('.pagination-sure').addClass('sure-animation');
        }).blur(function () {
            $('.pagination-sure').removeClass('sure-animation');
        })
    }
}($)