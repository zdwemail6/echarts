/**tab�л�*/
/************************************
 *	Version 		14.0.1
 *	Author			wuwg
 *  CreateTime      14.07.14
 *	UpdateTime		14.07.14
 **************************************/
(function ($, window) {

	$.fn.addNav = function (options) {
		var opts = $.extend({}, $.fn.addNav.defaultOpts, options || {});
		return this.each(function () {
			var $that = $(this);
			var li_wid = 300;
			var num = 4;
			var sum = $that.find('li').length;
			var left_value = $that.find('ul').css('left');
			set_dis();
			function set_dis(){
				if(parseInt(left_value)>=0){
					$that.find('#preBtnIndex').addClass('btn-disabled');
				}else{
					$that.find('#preBtnIndex').removeClass('btn-disabled');
				}
				if(sum>num&&parseInt(left_value)>parseInt(-li_wid*(sum-num))){
					$that.find('#nextBtnIndex').removeClass('btn-disabled');
				}else{
					$that.find('#nextBtnIndex').addClass('btn-disabled');
				}
			}
			$that.find('#preBtnIndex').click(function(){
				if($(this).hasClass('btn-disabled')){
					return;
				}else {
					if(-parseInt(left_value)/parseInt(li_wid)<num){
						left_value=0+'px';
						$that.find('ul').animate({left:left_value},1000);
					}else{
						left_value=parseInt(left_value)+parseInt(li_wid)*num+'px';
						$that.find('ul').animate({left:left_value},1000);
					}
					set_dis();
				}
			})
			$that.find('#nextBtnIndex').click(function(){
				if($(this).hasClass('btn-disabled')){
					return;
				}else {
					if(sum+parseInt(left_value)/parseInt(li_wid)>=(num*2)){
						left_value=parseInt(left_value)-parseInt(li_wid)*num+'px';
						$that.find('ul').animate({left:left_value},1000);
					}else {
						left_value=-parseInt(li_wid)*(sum-num)+'px';
						$that.find('ul').animate({left:left_value},1000);
					}
					set_dis();
				}
			})
		})
	}

	/*

	 */
	$.fn.addNav.defaultOpts = {
		index : 0,
		selectedClass : "on",
		classType : "only",
		mouseType : "click",
		isFade : false,
		lastLiLoseEffect : false,
		tweenTime : 500,
		autoPlay : false,
		delay : 6000,
		callback : null
	};

	//点击图片变大
	$(".index").find("img").click(function(){
		$("#fd-mask").removeClass("fd-closemask");
		$("#fd-mask").addClass("fd-openmask");
		$(".fd-mask-images").attr("src",$(this).attr("src"));

	})

	//关闭遮罩层图层
	$("#fd-img-close").click(function(){
		$("#fd-mask").removeClass("fd-openmask");
		$("#fd-mask").addClass("fd-closemask");
	})

})(jQuery, window);
