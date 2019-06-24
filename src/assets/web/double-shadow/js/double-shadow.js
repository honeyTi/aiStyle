/**
 * Created by Administrator on 2019/5/6.
 */
$(function(){
    $('.double-shadow').each(function(id,val){
        console.log(1);
        var src=$(val).find('img').attr('src');
        $(val).find('.before,.after').css('backgroundImage','url('+src+')');
        /* $(val).find('.after').css('backgroundImage','url('+src+')');*/
    });
});