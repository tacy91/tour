$(document).ready(function(){
		var mpointHeight=$('.m_point').find("img").height();
		$('.m_point').css('height',mpointHeight);
		var thisHeight=$('.zoomImg_wrap .imgBox').find("img").height();
		$('.zoomImg_wrap .imgBox').css('height',thisHeight);
		$('.zoomImg_wrap .imgBox').bind('mouseover',function(){
			$('.zoomImg_wrap .imgBox').css('height',thisHeight);
			$(this).find('img').stop().animate({ width:'106%',marginLeft:'-3%',marginTop:'-3%'});
			$(this).find('.shadowbg').stop().fadeIn(500);
			$(this).find('.shadowTxt').stop().fadeIn(500);
			$(this).find(".line").stop().animate({ width:'60px'},500);
		});
		$('.zoomImg_wrap .imgBox').bind('mouseout',function(){
			$('.zoomImg_wrap .imgBox').css('height',thisHeight);
			$(this).find('img').stop().animate({ width:'100%',marginLeft:'0',marginTop:'0'});			
			$(this).find('.shadowbg').stop().fadeOut(500);
			$(this).find('.shadowTxt').stop().fadeOut(500);
			$(this).find(".line").stop().animate({ width:'20px'},500);
		});
		$(window).resize(function(){
			thisHeight=$('.zoomImg_wrap .imgBox').find("img").height();	
			$('.zoomImg_wrap .imgBox').css('height',thisHeight);
			var mpointHeight=$('.m_point').find("img").height();
			$('.m_point').css('height',mpointHeight);
		});
		$(window).load(function(){
			thisHeight=$('.zoomImg_wrap .imgBox').find("img").height();	
			$('.zoomImg_wrap .imgBox').css('height',thisHeight);
			var mpointHeight=$('.m_point').find("img").height();
			$('.m_point').css('height',mpointHeight);
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
		$(this).find(".shadowbg").stop().fadeOut();
		$(this).find(" .shadowTxt").stop().hide();
		var txt=$(this).find(".shadowTxt div").text();
		$(this).find(".f_shadowTxt").text(txt).stop().fadeIn(500);
	});
	$(".themeHalf li .link .imgBox").bind('mouseleave',function(){
		$(this).find(".f_shadowbg").stop().fadeOut(500);
		$(this).find(".shadowbg").stop().fadeIn();
		$(this).find(" .shadowTxt").stop().show();
		var txt=$(this).find(" .shadowTxt div").text();
		$(this).find(".f_shadowTxt").text(txt).stop().fadeOut(500);
	});
	$(".m_point").bind('mouseover',function(){
		
		$(this).css('height',mpointHeight);
		$(this).find("img").stop().animate({width:'150%',marginLeft:'-25%',marginTop:'-50%'},500, 'easeOutBounce');
		$(this).find(".cTent").stop().fadeIn(800);
	});
	$(".m_point").bind('mouseout',function(){
		$(this).css('height',mpointHeight);
		$(this).find("img").stop().animate({width:'100%',marginLeft:'0%',marginTop:'0%'},500, 'easeOutBounce');
		$(this).find(".cTent").stop().fadeOut(800);
	});
	$(".dchoose_one").bind('mouseover',function(){
		$(this).find('img').stop().animate({ width:'106%',marginLeft:'-3%',marginTop:'-1%'});
	});
	
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
});
function showCenter(elemt){
		$('.fp_shasowbg').show();
		elemt.show();
		var top=($(window).height()-elemt.height())/2;
		var left=($(window).width()-elemt.width())/2;
		//alert(elemt);
		elemt.css({'left':left,'top':top});
		
	};