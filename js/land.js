/*登陆抖动*/
function flash(obj,time,wh,fx)
{ 
	$(function(){
	var $panel = $(obj);
	var offset = $panel.offset()-$panel.width();
	var x= offset.left;
	var y= offset.top;
	for(var i=1; i<=time; i++){
		if(i%2==0)
		{
			$panel.animate({left:'+'+wh+'px'},fx);
		}else
		{
			$panel.animate({left:'-'+wh+'px'},fx);
		}
			
	}
	$panel.animate({left:0},fx);
	$panel.offset({ top: y, left: x });
		
	})
}

$(document).ready(function(){

	/*div居中*/
	function landCenter(){
		var land= $('.land_content');
			land.css({
				"left": ($(window).width() - land.outerWidth())/2,
				"top": ($(window).height() - land.outerHeight())/2 - 20
			});
		
	};
	$(function(){landCenter()});
	$(window).resize(function(){landCenter()});
	/*div居中 end*/

	//淡出
	$("#land_bg1").fadeOut(1800);
})


/*背景提示文字*/
window.onload=function()
{
	var u = document.getElementById('user_input1') ;
	var p = document.getElementById('psod_input1') ;
   if (u.value !=''){
			u.parentNode.style.backgroundPosition="0px -108px";
	}
	if (p.value !=''){
			p.parentNode.style.backgroundPosition="0px -108px";
	}
}
function  input01_onfocus(t){
			t.parentNode.style.backgroundPosition="0px -54px";

}
function  input01_onblur(s){
			s.parentNode.style.backgroundPosition="0px -108px";
				if (s.value ==''){
					s.parentNode.style.backgroundPosition="0px 0px";
				}		
}
/*背景提示文字 end*/


/*验证*/
$(document).ready(function(){

	$('.submit_land').click(function(){
		if(! $("#land_shake").is(":animated")){ 
				
                 landVerify();                          
         }
	});

	
		$("#user_input1,#psod_input1").bind('keyup',function(event) {  
			 
			if(event.keyCode==13){  
				if(! $("#land_shake").is(":animated")){ 
					if($("#psod_input1").val()!='' || $("#psod_input1").val()!=''){
						 landVerify();  
					}                        
				 }
			}  
		}); 
	
}); 
var n=0;
var hideTimerO;
function landVerify(){
		//输入框
		var user = $("#user_input1").val();
		var psod = $("#psod_input1").val();
		
		//正则
		var regU = /0/;
		var regP = /0/;
		
		//正则验证
		if(!regU.test(user) && !regP.test(user)){
			//登陆失败
			
			//输入0次
			n+=1;
			if( n >=0){
				$(".land_prompt_error").height(50).animate({top:'+'+80+'px',opacity: 1},800, 'easeOutBounce');
				clearTimeout(hideTimerO);
				hideTimerO = setTimeout(function(){
					$(".land_prompt_error").animate({opacity: 0},800,function(){$(".land_prompt_error").css({'top':'-50px','height':'0'})});
					
				},2600);
				
			};
			 
			flash('#land_shake',15,4,70);
			return false;
		}else{
			//登陆成功
		}
		
		
};
/*验证 end*/ 