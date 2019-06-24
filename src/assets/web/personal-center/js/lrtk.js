//star
$(document).ready(function(){
    var stepW = 52;
    var description = new Array("太差，根本无法使用","不好用","一般，勉强能用","还不错","非常完美的资料");
    var stars = $(".stars > li");
    var descriptionTemp;
    var option = $(".option");
    $(".showb").css("width",0);
    stars.each(function(i){
        $(stars[i]).click(function(e){
            var n = i+1;
            $(".showb").css({"width":stepW*n});
            descriptionTemp = description[i];
            $(this).find('a').blur();
            return stopDefault(e);
            return descriptionTemp;
        });
    });
    stars.each(function(i){
        $(stars[i]).hover(
            function(){
                $(".description").text(description[i]);
                option.find(".option-con:eq(" + $(this).index() + ")").show().siblings().hide();
                $(".prompt").hide();
                $(".speed-btn").css("display","inline-block");
            },
            function(){
                if(descriptionTemp != null){
                    $(".description").text(descriptionTemp);
                }else{
                   $(".description").text(" "); 
                   option.find(".option-con").hide();
                  $(".prompt").show();
                  $(".speed-btn").css("display","none");
                }

                    
            }
        );
    });

    $(".option-con li a").click(function(event) {
       $(this).toggleClass('on');
    });
});
function stopDefault(e){
    if(e && e.preventDefault)
           e.preventDefault();
    else
           window.event.returnValue = false;
    return false;
};
