$('#f-nav').tooltip({
    default: 2,       // 默认为空  --  选中默认值
    width: '200',     // 限制宽度
    height: '100',
    textList: ['首页', '分页1', '分页2', '分页3'],   // 每个导航的内容
    type: 'slideMove',  // 必填, 选择内容
    success: function (ret) {

    }   //初始化回调
});
$('#f-nav2').tooltip({
    default: 3,
    type: 'fontUp',
    width: '150',
});
$('#f-nav3').tooltip({
    type: 'downUp'
});
$('#f-nav4').tooltip({
    type: 'edgeLeft'
});
$('#f-nav5').tooltip({
    type: 'edgeRight'
});
$('#f-nav6').tooltip({
    type: 'scaleChange'
});