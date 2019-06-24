/**
 * Created by Administrator on 2019/5/6.
 */
$(function () {
   generateTagClouds();
});
function customTimer(inpId, fn) {
    if ($(inpId).length) {
        fn();
    }
    else {
        var intervalId = setInterval(function () {
            if ($(inpId).length) {  //如果存在了
                clearInterval(intervalId);  // 则关闭定时器
                customTimer(inpId, fn);              //执行自身
            }
        }, 100);
    }
}
function generateTagClouds() {
    var options = {
        'range': [-200, 300],
        'gravity': -10,
        'xPos': 0.5,
        'yPos': 0.5,
        'gravityVector': [0, 0, 1],
        'interval': 100,
        'hoverGravityFactor': 0
    };
    $('.cloud').starfieldTagCloud(options);
}
