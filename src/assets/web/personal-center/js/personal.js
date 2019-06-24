var selectStr = '';
$(function() {
   $(".shrink").click(function(event) {
   	if($(this).children('span').hasClass('icon-up')){
       $(this).html('收起<span class="icon-down"></span>');
   	}else{
   	   $(this).html('展开<span class="icon-up"></span>');
   	}
   	 
   	 $(this).parents(".add-datas-list").toggleClass('switching');
   });
   

   $(".info-list-dv input").bind('click', function(event) {
      $(this).siblings('.childselect').children('.leaveone').show();
   });
      

   $('.childselect ul li span').click(function(event) {
      $(this).addClass('current').parent().siblings().children("span").removeClass('current');
      $(this).parents().siblings('.leavetwo').show();
   });
   
  $(".leavetwo li a").click(function(event) {
      $(this).parents(".leavetwo").hide();
      $(this).parents(".leavetwo").siblings(".leaveone").hide();
      return false;
   });


   new selectInVal($('.jc'));
   new selectInVal($('.zj'));
   new selectInVal($('.lb'));
  
  /*批量删除 */
  $(".p-del input").click(function(event) {
    if($('.p-del input').is(':checked')) {
       $(".p-del label").addClass('on');
       $(".del-a").addClass('on');
    }else{
      $(".p-del label").removeClass('on');
       $(".del-a").removeClass('on');
    };
  });
  
  
   /* 控制字符 */  
	isChangeFont();
});
  /* 控制字符 */
function isChangeFont(){
	$(".assets-text h3").each(function(inde,ele){
		var strLength = getStrLength(this);
		var fontsizeNum = 24;
		 if(strLength <= 10){
		    fontsizeNum = 24;
		   }else if(strLength <= 12){
		    fontsizeNum = 18;
		   }else if(strLength <= 14){
		     fontsizeNum = 16;
		   }else if(strLength <= 16){
		     fontsizeNum = 14;
		   }else if(strLength <= 18){
		     fontsizeNum = 12;
		   }else{
		   	 fontsizeNum = 12;
		   }
		   
		   fontsizeNum += 'px';
		   console.log(fontsizeNum);
		   $(this).css('font-size',fontsizeNum);
	})
	function getStrLength(ele){
		var tempStr = $(ele).html();
		return tempStr.length;
	}
}




function selectInVal(target){
      this.jcSelectStr = '';
      this.addEventerLinstener = function(target){
         var _this = this;
         $(target).find('.leaveone li span').click(function(){
            _this.jcSelectStr = $(this).text();
               console.log('qqqqqqq');
                $(this).parents('.info-list-dv').children('input').val(_this.jcSelectStr);
           });

           $(target).find('.leavetwo li a').click(function(){
            _this.jcSelectStr += ">"+$(this).text();
               console.log('zzzzzzz');
               $(this).parents('.info-list-dv').children('input').val(_this.jcSelectStr);
           });
      }
     this.addEventerLinstener(target);
}



























