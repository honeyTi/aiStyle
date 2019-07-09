+function ($) {
    $.fn.wordCloud = function (options) {
        // 获取外层dom
        var that = this;
        // 参数项目
        var defaultOptions = {
            // 文字移动
            fontSizeLimit: 25,
            // 文字执行时长
            speed: 2000,
            // 文本数据，要求数组方式
            data: [],
            // 一次出现几条内容
            itemNum: 8,
            list:undefined,
            liclass:undefined,
            itemcss:undefined,
        }
        // 数据配置项获取
        var setting = $.extend({}, defaultOptions, options);
        // 初始化方法
        _init();
        function _init() {
            // 设置初始化数据循环位置
            setting.startNum = 0;
            // 初始化标签
            _appendTagDom();
            // 设置中心坐标点
            _getOutDomStyle();
            _dataSet();
            // 开始动画
            _startAnimation()
        }
        // 初始化dom元素， 根据itemNum数量先显示
        function _appendTagDom() {
            that.append('<ul class="'+setting.list+'"></ul>');
            var content = '';
            for (var i = 1; i <= setting.itemNum; i++) {
                var tempcss = setting.itemcss+' '+setting.liclass;
                content += '<li class="'+ tempcss + i +'"></li>'
            }
            $('.'+setting.list).append(content);
        }
        // 文字效果启动函数
        function _startAnimation() {
            setInterval(function () {
                _dataSet();
            }, setting.speed + 1000);
        }
        // 中心位置
        function _getOutDomStyle() {
            setting.tagHalfWidth = $('.'+setting.list+' li').width() / 2;
            setting.tagHalfHeight = $('.'+setting.list+' li').height() / 2;
            setting.initLeft = that.width() / 2 - setting.tagHalfWidth;
            setting.initTop = that.height() / 2 - setting.tagHalfHeight;
            setting.sqrtBorder = Math.sqrt(Math.pow(setting.initTop, 2) + Math.pow(setting.initLeft, 2));
        }
        // 初始化样式
        function _styleInit(dom) {
            $(dom).css({
                position: 'absolute',
                left: setting.initLeft + 'px',
                top: setting.initTop + 'px',
                fontSize: '0px',
                opacity: 0
            })
        }
        // 随机数据整理append进入内容区域
        function _dataSet() {
            var dataLength = setting.data.length;
            var nums = [];
            if ((setting.startNum + 1) * setting.itemNum >= dataLength && setting.startNum * setting.itemNum < dataLength) {
                limitShow = dataLength;
            } else if (setting.startNum * setting.itemNum > dataLength) {
                limitShow = setting.itemNum;
            } else {
                limitShow = setting.itemNum * (setting.startNum + 1);
            }
            setting.startNum = setting.startNum * setting.itemNum > dataLength ? 0 : setting.startNum;
            for (var i = setting.itemNum * setting.startNum; i < limitShow; i++) {
                nums.push(setting.data[i]);
            }
            setTimeout(function() {
                for(var i = 0; i < nums.length / 2; i++) {
                    _appendItem(nums[i], i + 1, nums.length, i)
                }
            }, 0);
            setTimeout(function() {
                for(var i = Math.ceil(nums.length / 2); i < nums.length; i++) {
                    _appendItem(nums[i], i + 1, nums.length, i -Math.ceil(nums.length / 2))
                }
            }, 0);
            // nums.forEach(function (ele, index) {
            //     _appendItem(ele, index+1, nums.length)
            // });
            setting.startNum++;
        }
        // 将内容分为setting.itemNum个区域
        function _positionSet(dom, index, avgDeg) {
            // 获取正弦、余弦
            var avg = (Math.PI / 180) * (360 / avgDeg);
            var time = Math.floor(Math.random() * (setting.speed - (setting.speed - 2000)) + (setting.speed - 2000));
            if (index > 4) {
                setTimeout(function() {
                    _wordAnimation(dom, (setting.sqrtBorder + 2 * setting.tagHalfHeight) * Math.sin(index * avg), (setting.sqrtBorder + 2 * setting.tagHalfWidth) * Math.cos(index * avg), time);
                }, ((index -1) - (setting.itemNum / 2)) * (setting.speed / (setting.itemNum / 4)));
            } else {
                setTimeout(function() {
                    _wordAnimation(dom, (setting.sqrtBorder + 2 * setting.tagHalfHeight) * Math.sin(index * avg), (setting.sqrtBorder + 2 * setting.tagHalfWidth) * Math.cos(index * avg), time);
                }, (index -1) * (setting.speed / (setting.itemNum / 4)));
            }
            
        }
        // 初始化文字
        function _appendItem(data, index, length) {
            $('.'+setting.liclass + index).html(data);
            // 添加初始化样式
            _styleInit('.'+setting.itemcss);
            _positionSet('.'+setting.liclass + index, index, length);
        }
        // 文字动效统一样式
        function _wordAnimation(dom, top, left, time) {
            $(dom).animate({
                top: setting.initTop + top + 'px',
                left: setting.initLeft + left + 'px',
                opacity: 1,
                fontSize: setting.fontSizeLimit,
            }, time, function () {
                _styleInit(dom);
            })
        }
    }
}($)

