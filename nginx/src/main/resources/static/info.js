
/**
 *  info.js for info.html 
 */


;(function($){
	
	var index,w,ul,timer;
	
		//左移动
	   function  runLeft(a,b,w){
	   		
	   		a.animate({"left":-b*w},300);
		 	if(b==4){
		 		index=-1;
		 	}
		 	index++;
		 }
	   
	   //右移动
	   function  runRight(){
		 	
		 }
	//輪播圖
	$.fn.wheelPlanting = function(options){
		var _this =this;
		ul = _this.find("ul").eq(0);
		index = 0;
		w = _this.width();
		timer = setInterval(function(){
			runLeft(ul,index,w);
		},5000);
		
		$(function(){
			//鼠標移入事件
		 /*  _this.mouseover(function(){
		   	 clearTimeout(timer);
		   }).mouseleave(function(){
		   	timer = setInterval(function(){
			runLeft(ul,index,w);
		},3000);
		   });*/
		   //窗口--
		   $(window).resize(function(){
		   	//停止當前已經存在的動畫
		   	stop();
		   	clearTimeout(timer);
		   	w = _this.width();
		   	console.log("---窗口-"+w);
		   	ul.animate({"left":-index*w},100);
		   	timer = setInterval(function(){
			runLeft(ul,index,w);
		},3000);
		   });
		});
		
		return _this;
	}
	
	
	
})(jQuery);

$(function(){
	$(".warp").wheelPlanting();
	$(window).scroll(function(){
		var h = $(".warper_nav").height();
		var distance = $(window).scrollTop();
		if(distance>h){
			$(".warper_nav").addClass("active");
		}else{
			$(".warper_nav").removeClass("active");
		}
		
		
	});
	
});

