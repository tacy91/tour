$(document).ready(function(){
		//var mpointHeight=$('.m_point').find("img").height();
		//$('.m_point').css('height',mpointHeight);
		var thisHeight=$('.zoomImg_wrap .imgBox').find("img").height();
		$('.zoomImg_wrap .imgBox').css('height',thisHeight);
		// $('.zoomImg_wrap .imgBox').bind('mouseover',function(){
		// 	$('.zoomImg_wrap .imgBox').css('height',thisHeight);
		// 	$(this).find('img').stop().animate({ width:'106%',marginLeft:'-3%',marginTop:'-3%'});
		// 	$(this).find('.shadowbg').stop().fadeIn(500);
		// 	$(this).find('.shadowTxt').stop().fadeIn(500);
		// 	$(this).find(".line").stop().animate({ width:'60px'},500);
		// });
		
		// $('.zoomImg_wrap .imgBox').bind('mouseout',function(){
		// 	$('.zoomImg_wrap .imgBox').css('height',thisHeight);
		// 	$(this).find('img').stop().animate({ width:'100%',marginLeft:'0',marginTop:'0'});			
		// 	$(this).find('.shadowbg').stop().fadeOut(500);
		// 	$(this).find('.shadowTxt').stop().fadeOut(500);
		// 	$(this).find(".line").stop().animate({ width:'20px'},500);
		// });
		$('.zoomImg_wrap .imgBox').bind('mouseover',function(){
			shadow_over(this);
		});
		
		$('.zoomImg_wrap .imgBox').bind('mouseout',function(){
			shadow_out(this);
		});

		function shadow_over(element){
			var height=$(element).height();
			//alert(height);
			$(element).css('height',height);
			$(element).find('img').stop().animate({ width:'106%',height:'106%',marginLeft:'-3%',marginTop:'-3%'});
			$(element).find('.shadowbg').stop().fadeIn(500);
			setTimeout(function(){$(element).find('.shadowTxt').stop().fadeIn(500);},200)
			$(element).find(".line").stop().animate({ width:'60px'},500);
		}
		function shadow_out(element){
			var height=$(element).height();
			//alert(height);
			//$(element).css('height',height)
			$(element).find('img').stop().animate({ width:'100%',height:'100%',marginLeft:'0',marginTop:'0'});
			
			//$(element).find('.shadowTxt').stop().fadeOut(500);
			$(element).find('.shadowbg').stop().fadeOut(500);
			setTimeout(function(){$(element).find('.shadowTxt').stop().fadeOut(200);},200)
			$(element).find(".line").stop().animate({ width:'20px'},500);
		}
		function fade_in(_this,num){

			$(_this).style.opacity=num/100;
			$(_this).style.filter='alpha(opacity='+num+')';
			//if($(_this).hasAttribute('opacity'))

		}
		$(window).resize(function(){
			thisHeight=$('.zoomImg_wrap .imgBox').find("img").height();	
			$('.zoomImg_wrap .imgBox').css('height',thisHeight);
			//var mpointHeight=$('.m_point').find("img").height();
			//$('.m_point').css('height',mpointHeight);
		});
		$(window).load(function(){
			thisHeight=$('.zoomImg_wrap .imgBox').find("img").height();	
			$('.zoomImg_wrap .imgBox').css('height',thisHeight);
			//var mpointHeight=$('.m_point').find("img").height();
			//$('.m_point').css('height',mpointHeight);
		});
	$(".idx_view li > div").bind('mouseover',function(){		
		$(this).css('height',thisHeight);
		//$(this).find(".shadowbg").css('height',thisHeight);
		$(this).find("img").stop().animate({ width:'106%',marginLeft:'-3%',marginTop:'-3%'});
		$(this).find(".shadowbg").stop().fadeIn(500);
		$(this).find(".shadowTxt").stop().fadeIn(500);
		$(this).find(".line").stop().animate({ width:'60px'},500);
	});
	$(".idx_view li > div").bind('mouseleave',function(){		
		$(this).find("img").stop().animate({ width:'100%',marginLeft:'0',marginTop:'0'});
		
		//$(this).find(".shadowbg").css('height',thisHeight);
		$(this).find('.shadowbg').stop().fadeOut(500);
		$(this).find(".shadowTxt").stop().fadeOut(500);
		$(this).find(".line").stop().animate({ width:'20px'},500);
		//var thisHeight=$(this).find("img").height();
		$(this).css('height',thisHeight);
	});
	$(".dzImg_wrap li .imgBox").bind('mouseover',function(){
		
		$(this).css('height',thisHeight);
		$(this).find("img").stop().animate({ width:'106%',marginLeft:'-3%',marginTop:'-3%'});
//		$(this).find(".shadowbg").stop().fadeOut(200);
//		$(this).find(".shadowTxt").stop().fadeOut(200);
		$(this).find(".shadowbg").show();
		$(this).find(".shadowTxt").show();
		
	});
	$(".dzImg_wrap li .imgBox").bind('mouseleave',function(){
		$(this).find("img").stop().animate({ width:'100%',marginLeft:'0',marginTop:'0'});
		$(this).css('height',thisHeight);
		$(this).find(".shadowbg").show();
		$(this).find(".shadowTxt").show();
	});
	$(".themeHalf li .link .imgBox").bind('mouseover',function(){
		$(this).find(".f_shadowbg").stop().fadeIn(500);
		$(this).find(".txtbg").stop().fadeOut();
		$(this).find(" .txt").stop().hide();
		var txt=$(this).find(".txt div").text();
		$(this).find(".f_shadowTxt").text(txt).stop().delay(500).stop().fadeTo('slow',1);
	});
	$(".themeHalf li .link .imgBox").bind('mouseleave',function(){
		$(this).find(".f_shadowbg").stop().fadeOut(500);
		$(this).find(".txtbg").stop().fadeIn();
		$(this).find(".txt").stop().delay(500).fadeTo('slow',1);
		//var txt=$(this).find(" .txt div").text();
		$(this).find(".f_shadowTxt").stop().fadeOut(100);
	});
	$(".m_point").bind('mouseover',function(){
		
		//$(this).css('height',mpointHeight);
		$(this).find("img").stop().animate({width:'120%',marginTop:'-10%'},500, 'easeOutBounce');
		$(this).find(".cTent").stop().fadeIn(300,function(){$(this).animate({top:'-30px'},300)});
	});
	$(".m_point").bind('mouseout',function(){
		//$(this).css('height',mpointHeight);
		$(this).find("img").stop().animate({width:'100%',marginTop:'0%'},500, 'easeOutBounce');
		$(this).find(".cTent").stop().fadeOut(300,function(){$(this).animate({top:'-20px'},300)});
	});
	// $(".dchoose_one").bind('mouseover',function(){
	// 	$(this).find('img').stop().animate({ width:'106%',marginLeft:'-3%',marginTop:'-1%'});
	// });
	
	$(".tabBox .tab_top ul li a").click(function(){
		$(this).parent().addClass('active').siblings().removeClass('active');
		var tabid=$(this).parent().attr('tabid');
		var $tabmain=$(this).parents('.tabBox').find('.tab_btm');
		$tabmain.find('.mainItem').hide();
		$tabmain.find('.'+tabid).show();
	});
//	每日行程显示：
	function planaxis(num){
		var width=$('.planaxis').width();
		var itemWid=1/(num-1)*100;
		var dayWid=width/(num-1);
		//alert(dayWid);
		
		for(var i=1;i<num;i++){
			var left_bfb=itemWid*i;
			var j=i+1;
			$('.planaxis').append('<div class="axisItem" style="left:'+left_bfb+'%" tabid="section'+j+'"></div>');
			
		}
		for(var i=1;i<num;i++){
			var j=i+1;
			$('.plan_day').append('<span class="dayItem" ">第'+j+'天</span>');
		}
		$('.dayItem').width(dayWid);
//		$('.plan_day .dayItem:first-child').css("margin-left",-dayWid/2);
		$('.plan_day').css({"margin-left":-dayWid/2,"margin-right":-dayWid/2});
//		style="width:'+dayWid+'px;margin-left:'+(-dayWid/2)+'px;
	};
	planaxis(7);
	function axistab(){
		
	}
	$(".axisItem").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var tabid=$(this).attr('tabid');
		$(".dayplan").find(".planItem").hide();
		$(".dayplan").find("."+tabid).show();
	});
	$(".axis_prev").click(function(){
		var num=$(".axisItem").length;
		//alert(num);
		var _this=$(".planaxis .axisItem.active");
		var index=_this.index();
		var $prev=_this.prev();
		var tabid=$prev.attr('tabid');	
		$prev.addClass("active").siblings().removeClass("active");
		index=index+1;
		if(index>1){
			$(".dayplan").find(".planItem").hide();
			$(".dayplan").find("."+tabid).show();
		}
	});
	$(".axis_next").click(function(){
		var num=$(".axisItem").length;
		//alert(num);
		var _this=$(".planaxis .axisItem.active");
		var index=_this.index();
		var $next=_this.next();
		var tabid=$next.attr('tabid');	
		$next.addClass("active").siblings().removeClass("active");
		index=index+1;
		if(index<num){
			$(".dayplan").find(".planItem").hide();
			$(".dayplan").find("."+tabid).show();
		}
	});
	
	
	$(".win_close").click(function(){
		$(this).parent().hide();
		$('.fp_shasowbg').hide();
	});
//	$('.order_btn').click(function(){
//		showCenter($(".order_win"));
//	});

//	目的地选择页面
	$(".areaitem .mainBox a").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var area=$(this).parents(".areaitem");
		area.find("span label").addClass("active");
		area.siblings().find("span label").removeClass("active");
		area.siblings().find(".mainBox a").removeClass("active");

	});
	$(".dateitem a").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	});

	
	//wait_load.opacity(0);
	$(window).bind('scroll',_wait_load);
	$(window).bind('resize',_wait_load);
	
	//alert($('.wait_load').size());
//验证
	$('#phone').bind('blur',function(){
		if($(this).val()==''){
			$('form').find('.info_phone').css('display','block');
			$('form').find('.error_phone').css('display','none');
		}else if(!check_phone()){
			$('form').find('.info_phone').css('display','none');
			$('form').find('.error_phone').css('display','block');
		}else{
			$('form').find('.info_phone').css('display','none');
			$('form').find('.error_phone').css('display','none');
		}
	});
	$('#locstart').bind('blur',function(){
		if(!check_locstart()){
			$('form').find('.info_locstart').css('display','block');
		}else{
			$('form').find('.info_locstart').css('display','none');
		}
	});
	$('#locend').bind('blur',function(){
		if(!check_locend()){
			$('form').find('.info_locend').css('display','block');
		}else{
			$('form').find('.info_locend').css('display','none');
		}
	});
	$('#name').bind('blur',function(){
		if(!check_name()){
			$('form').find('.info_name').css('display','block');
		}else{
			$('form').find('.info_name').css('display','none');
		}
	});
	$('#email').bind('blur',function(){
		if(!check_email()){
			$('form').find('.error_email').css('display','block');
		}else{
			$('form').find('.error_email').css('display','none');
		}
	});
	$('form .sub').click(function() {
		var flag=true;
		if(!check_name()){
			$('form').find('.info_name').css('display','block');	
			flag=false;			
		}
		if(!check_locstart()){
			$('form').find('.info_locstart').css('display','block');
			flag=false;	
		}
		if(!check_locend()){
			$('form').find('.info_locend').css('display','block');
			flag=false;	
		}
		if(!check_phone()){
			$('form').find('.error_phone').css('display','block');	
			flag=false;			
		}
		if(!check_email()){
			$('form').find('.error_email').css('display','block');	
			flag=false;
		}
		if(flag){
			alert('验证成功！');
		}
	});

});
var wait_load=$('.wait_load');
function showCenter(elemt){
		$('.fp_shasowbg').show();
		elemt.show();
		var top=($(window).height()-elemt.height())/2;
		var left=($(window).width()-elemt.width())/2;
		//alert(elemt);
		elemt.css({'left':left,'top':top});
		
	};
	function _wait_load(){

		setTimeout(function(){
			
			for(var i=0;i<$('.wait_load').size();i++){
				//alert($('.wait_load').size());
				var _this=$('.wait_load').get(i);
				//alert(offsetTop($('.wait_load').get(i)));
				if(getInner().height+getScroll().top>=offsetTop(_this)+50){

					$(_this).attr('src',$(_this).attr('xsrc')).fadeTo(1000,1);
				}
			}
		},500);
	}
	function getScroll(){
		return{
			top:document.documentElement.scrollTop||document.body.scrollTop,
			left:document.documentElement.scrollLeft||document.body.scrollLeft
		}
	}
	function offsetTop(element){
		var top=element.offsetTop;
		var parent=element.offsetParent;
		while(parent!=null){
			top+=parent.offsetTop;
			parent=parent.offsetParent;
		}
		return top;
	}
	//跨浏览器获取视口大小
function getInner(){
	if(typeof window.innerWidth!='undefined'){
		return{
			width:window.innerWidth,
			height:window.innerHeight
		}
	}else {
		return{
			width:document.documentElement.clientWidth,
			height:document.documentElement.clientHeight
		}
	}
}

//验证是否为空
//var chufa=$('#chufa').val();
function check_name(){
	if($('#name').val()!=''){		
		return true;
	}
}
function check_locstart(){
	if($('#locstart').val()!=''){		
		return true;
	}
}
function check_locend(){
	if($('#locend').val()!=''){		
		return true;
	}
}
function check_phone(){
	if(/^1[3,5,8][0-9]{9}$/.test($('#phone').val())){		
		return true;
	}
}
function check_email(){
		if(/^[a-zA-Z0-9_\-\.]+@[a-zA-Z0-9_\-]+(\.[a-zA-Z]{2,4}){1,2}$/.test($.trim($('#email').val()))) return true;
	}
function check_notempty(str){	
	if(str=='') {						
		return true;
	}
	else return false;

}


