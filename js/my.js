/*帮助提示*/
function borde_prompt(){
	$(".borde-help").hover(
		function(){
			$(this).find(".borde-prompt").fadeIn(300);
		},  
		function(){ 
			$(this).find(".borde-prompt").hide();
		} 
	);
}

/*协议*/
$(document).ready(function(){
	
		//初始化
	$(".xieyi").empty();
	$(".textHolder").each(function(){
		$(this).parent(".treeTtem").css({"display":"block"});
		$(this).parent(".treeItem").css({"display":"block"});
		$(this).css({"color":"#777","background-color":""});		
	});
	$("#white_content").show();
	var mythis = $(this);
	var cont = $(this).val();
	if(cont){
		var arr = cont.split(',');
		for(var i=0;i<=arr.length;i++){
			if(arr[i]){
				$("<option>"+arr[i]+"</option>").appendTo(".xieyi");
			}
		}
	}
	//点击效果
	 $(".treeLeft").find(".textHolder").click(function(){
			   if($(this).css("color") == "rgb(255, 255, 255)"){
					$(this).css({"color":"#777","background-color":""});
					 
				}else if($(this).css("color") != "rgb(255, 255, 255)"){ 

					$(this).css({"color":"rgb(255, 255, 255)","background-color":"#3594d8"});
					
					$(this).siblings("ul").hide();
					
					$(this).siblings(".img_1").attr("src","images/bullet_toggle_plus.png");
					$(this).siblings("ul").find(".textHolder").each(function(){
						if($(this).css("color") == "rgb(255, 255, 255)"){ 
							$(this).css({"color":"#777","background-color":""});
						}
					});
					$(this).parents("ul").siblings(".textHolder").each(function(){
						if($(this).css("color") == "rgb(255, 255, 255)"){
							$(this).css({"color":"#777","background-color":""});
						};
					});
			   }
				
	})	 

	 
	 //添加
	$(".treeAdd").click(function(){
		
			$(".textHolder").each(function(){
				if($(this).css("color") == "rgb(255, 255, 255)"){
					var pro =  $(this).text(); 
					$(this).parent("li").find("span").each(function(){
						var textSpan = $(this).html();
						$(".xieyi").find("option").each(function(){
							if( textSpan == $(this).html()){
								$(this).remove();
							}
						})
					})
					$("<option>"+pro+"</option>").appendTo(".xieyi");
					$(this).css({color:"","background-color":""});
					$(this).parent(".treeTtem").css({display:"none"});
					$(this).parent(".treeItem").css({display:"none"});      
				}	
			})
		});
		
		//删除
		$(".treeDel").click(function(){		 
			$(".xieyi").find("option").each(function(){
				if($(this).attr("selected") == "selected"){
					var optionTxt = $(this).html()
					$(".treeLeft").find("li").each(function(){
						if(optionTxt == $(this).find("span").html()){
							$(this).css({"color":"#777"});
							$(this).css({"display":"block"});
						}
					})
					$(this).remove();
				}
			})
	  })
	
	//折叠树
	$(".myTree").find("UL").hide();
	$(".treeLeft").find(".img_1").click(function(){
			   var ul_show = $(this).parent().children("UL");
			   if(ul_show.css("display") == "none"){
					  $(this).attr("src","images/bullet_toggle_minus.png");
					  ul_show.show();
			   }else{
					  $(this).attr("src","images/bullet_toggle_plus.png");
					  ul_show.hide();
			   }
	})
	 

})
/*协议-end*/



/*表格排序样式*/
function sequence(){
	$(".sequence_ico").each(function(a){
		$(this).click(function(){
			var span = $(this).children("span")
			var u = 'sequence_use';
			var up = 'sequence_icoUP';
			var dm = 'sequence_icoDM';
			var use = span.attr('class').indexOf(u);
			if(use != -1){
				if(span.attr('class').indexOf(up)!= -1)
				{	
					span.removeClass(up); 
					span.addClass(dm);
					
				}else{
					span.removeClass(dm); 
					span.addClass(up);
				}
			}else{
				$(this).parents("tr").find("span").removeClass(u);
				$(this).parents("ul").find("span").removeClass(u);
				span.addClass(u); 
			}
		
		})
	})
}
$(function () {sequence();})
/*表格排序样式-end*/

/*下拉切换*/
function tab_switch(tabBnt,tabBox,tabParent){

	var tabP =$(tabParent);
	tabP.each(function(){
		var bnt = $(this).find(tabBnt);
		var box = $(this).find(tabBox);
		var ipt = bnt.parent().siblings();
		var ipt_val;
		if(ipt.attr('class').indexOf('selectInpt')!=-1){
			ipt_val = ipt.val();
		}
		bnt.removeClass("active");
		box.hide();
		bnt.each(function(x){

			
			if(ipt_val==$(this).attr("data-value")){
				$(this).addClass("active");
				box.eq(x).show();

			}
			
			$(this).click(function(){
				bnt.removeClass("active");
				box.hide();
				$(this).addClass("active");
				box.eq(x).slideDown();
			})
		})
	})
}
$(function(){
tab_switch(".tab-switch-key li",".tab-switch-div",".tab-switch");
})
/*下拉切换-end*/



/*悬浮提示*/
function easy(){
	
	var xO = 0; // x distance from mouse
    var yO = -2; // y distance from mouse  
	
	$(".inptText-Error").hover(
		function(e) {
			if($(this).attr('tip') != undefined){
				var top = ($(this).offset().top + yO);
				var left = ($(this).offset().left + xO);
				$('body').append( '<div id="vtip"><div><p class="rounded">' + $(this).attr('tip') + '</p><span></span></div></div>' );
				$('div#vtip').css("top", top+"px").css("left", left+"px");
			}
		},
		function() {
			if($(this).attr('tip') != undefined){
				$("div#vtip").remove();
			}
		}
	);
}
$(function () {easy();})
/*悬浮提示-end*/

/*高度开关绑定
 a : ".class input" 复选、单选
 b : "ul.class li" 内容
 f : ".class" 父级
 seitchH(".class input", "ul.class>li")
 seitchH(".class input", "ul.class>li", ".class")
*/
function seitchH(a,b,f){
		var k = $(a);
		var o = $(b);
		var p = $(f);
	function se(k ,o ,z, y){
		if(k.is(':checked')){o.slideDown(); k.parent().addClass("active"); }else{o.hide()}
		k.change(function(){

				z.hide();
			 	y.parent().each(function(){
					$(this).removeClass("active");
				}) 

			if(k.is(':checked')){o.slideDown(); k.parent().addClass("active"); }else{o.hide()}
		})
	}

	if(p.length > 0){
		p.each(function(){
			var n=$(this).find(a);
			var m=$(this).children(b);
			n.each(function(x){se(n.eq(x) , m.eq(x), m, n)})
			
		});
	} else {
		k.each(function(x){se(k.eq(x), o.eq(x), o, k)})
	}

}
/*高度开关绑定-end*/
$(function(){
        seitchH(".seitchH-radio input[type='radio']", ".seitchH-ul>li" );
		seitchH(".checkbox-power input[type='checkbox']", ".switch-div", ".switch"); 
		seitchH(".total-checkbox-power input[type='checkbox']", ".total-switch-div", ".total-switch"); 

		seitchH(".seitchHF-radio input[type='radio']", ".seitchHF-div",".switchF");
})

/*安全类型*/
function safety_type(a, b, c){
	var a = $(a);
	var b = $(b);
	var c = $(c);
	
	if(a.val()=="无密码"){
		c.hide();
	} else {
		c.show();
	}
	b.each(function(){
		$(this).click(function(){
			if($(this).attr('data-value')=="无密码"){
				c.hide();
			} else {
				c.show();
			}
		})
	})
	

}
/*安全类型-end*/

/*弹框*/
function showjqm(shw, mo){
     $(shw).jqm({ modal: mo,trigger: 'a.showDialog'});
     $(shw).jqmShow();
	 $(shw).find(":input").first().focus();
}
/*弹框-end*/
 
/*侧导航伸缩*/
function accordion(){
        var btn = $(".sidebar_nav li").find("span");
        var uls = $(".sidebar_nav li ul");
		var lis = $(".sidebar_nav li ul li");
        btn.each(function(a){
                $(this).click(function(){
                        uls.eq(a).css("display","block");
                        var li = uls.eq(a).find("li");
                        var len = li.length;
                        var h = uls.eq(a).find("li").eq(0).outerHeight();
                        var mt = parseInt(uls.eq(a).find("li").css("marginTop"));
                        var itarget = h*len+mt*len;
                        if($(this).siblings().height()!==0){
                                $(this).removeClass("on").siblings().animate({height:"0px"},300);
                        }
                        else{
                                $(this).addClass("on").siblings().animate({height:itarget+"px"},300);
                           $(this).parent().siblings().find("span").removeClass("on").siblings().animate({height:"0px"},300);         
                        }
                })                          
        })
		
		lis.click(function(){
				lis.each(function(a){
					$(this).removeClass("current");
				})
				$(this).addClass("current");
				
		})
		
}
$(function(){
        accordion(); 
})



/*网口状态*/
$(document).ready(function(){
var xNOffset = 20; // x distance from mouse
var yNOffset = 10; // y distance from mouse  
var ww = $(window).width();

		$(".port_list li").hover(
			function (e) {
				var top = (e.pageY + yNOffset);
				var left = (e.pageX + xNOffset);
				var divC = $(this).children('.port_com').html();
				if(ww < left){
					left= ww -120;
				}
				$("#portRE").css({"top": top,"left":left});
				
				if(divC != ''){
					$('body').append( '<div id="portRE">' + divC + '</div>' );
					$('#portRE').css("top", top+"px").css("left", left+"px");
				}
			},  
			function () { 
				$('#portRE').remove();
				
			} 
		).mousemove(
		function(r) {
				var top = (r.pageY + yNOffset);
				var left = (r.pageX + xNOffset);
				if(ww < left+100){
					left= ww -120;
				}
				$("#portRE").css({"top": top,"left":left});
			
		});
	
 })
 /*网口状态-end*/  
 
 
/*复选框全选js*/
function chkAll(){
	$(".chk_all").click(function(){
		if($(this).attr("checked")== "checked"){
			$(this).parents("table").find("input[name='chk_list']").attr("checked",true);
		}else{
			$(this).parents("table").find("input[name='chk_list']").attr("checked", false);
		}
	});
	$("input[name='chk_list']").click(function(){

		var chk_name = $(this).parents("tr").attr("class");

		if($(this).attr("checked")!= "checked"){

			var chk_all = $(this).parents("table").find(".chk_all");
			if( chk_all.attr("checked")== "checked"){
				chk_all.attr("checked", false);
			}

			if(chk_name == 'item-show'){
				$(this).parents(".item-show").next(".item-edit").find("input[name='chk_list']").prop("checked",false);
			}else{
				$(this).parents(".item-edit").prev(".item-show").find("input[name='chk_list']").prop("checked",false);
			}

		}else{

			if(chk_name == 'item-show'){
				$(this).parents(".item-show").next(".item-edit").find("input[name='chk_list']").prop("checked",true);
			}else{
				$(this).parents(".item-edit").prev(".item-show").find("input[name='chk_list']").prop("checked",true);
			}

		}
	});
}	


/*上传美化*/
function upload(){
	var textButton="<input type='submit' name='' value='选择文件' class='but_h26 B_bg rounded type_file_button' style='padding: 8px 14px;' />"
	$(".type_file").each(function(a){
			var fileDiv = $(this);
			var file = fileDiv.find(".fileField");
			var fileTxt = fileDiv.find(".textfield");
			
			$(textButton).insertBefore(file);
			file.change(function(){
				fileTxt.val(file.val());
			});					   
	})
}
/*上传美化-end*/

/*表格背景*/
function start_table(){
		/*表格隔行变色*/
		$(".table-every").each(function(a){
			var tr = $(this).find("tr");
			tr.each(function(b){
				if(b%2==1){
					$(this).css({"background":"#f9f9f9"});
				}else{
					$(this).css({"background":"#ffffff"});
				}
			})
			$(this).find("tr:first").css({"background":"transparent"});
		});
		
		
		/*表格移入背景变色*/
		$(".table-every tr").hover(
				function () {
					$(this).children("td").stop().css({"background": "#efefef"}); 
				},  
				function () { 
					$(this).children("td").stop().css({"background": "transparent"}); 
				} 
		)
		/*表格移入背景变色-end*/
}
/*表格背景-end*/


/*下拉框*/
function select_box(){

	$('.selectInpt').bind('click', function(){
		var ul = $(this).siblings(".selectUl");
		if(ul.css('display') =="none"){
        	ul.slideDown(150);
			$(this).css({"background-position":"right -28px"});
		}else{
			ul.fadeOut();
			$(this).css({"background-position":"right 0"});
		}
    });
	
	$('.selectUl li').bind('click', function(){
		var li = $(this).html();
		var Inpt = $(this).parents(".selectBox").find(".selectInpt").val(li);
		var boxVal = $(this).attr("data-type");
		$(this).parents(".selectBox").attr("value",boxVal);
		$(this).parents(".selectUl").hide();
	});
	
	$(".selectUl li").hover(
		function () {
				$(this).css({"background-color": "#0088cc","color": "#ffffff"}); 
			},  
			function () { 
				$(this).css({"background-color": "transparent","color": "#666666"}); 
			} 
	);
	
	$(".selectBox").hover(
			function () {
				$(this).children(".selectInpt").css({"background-position":"right -28px"});
			},  
			function () { 
				$(this).children(".selectUl").fadeOut();
				$(this).children(".selectInpt").css({"background-position":"right 0"});
			} 
	);
}
/*下拉框 end*/

/*inpt框内提示*/
function promptInpt(){
	$('.promptTxt').parent().siblings(".inptText").val("");
	$('.promptTxt').click(function(){
		$(this).hide();
		$(this).parent().siblings(".inptText").focus();
	});
	$('.inptText').focus(function(){
         $(this).siblings().children(".promptTxt").hide();
    }).blur(function(){
		if($(this).val()==""){
        	$(this).siblings().children(".promptTxt").show();
		}
   });
}
/*inpt框内提示 end*/



/*扩展池*/
function expansionTank(){
	//添加
	$(".table").find(".addA").click(function(){
		 var ipA = $(this).parents(".table").find(".ipsA");
		 var opts = $(this).parents(".table").find(".opts");
		 //if(!get_checkip(ipA))return;
		 if(ipA.val() !=""){
			if(checkchongfu(opts,ipA.val())){
				opts.find("option").removeAttr("selected");
				$("<option selected='selected'>"+ipA.val()+"</option>").prependTo(opts);
				ipA.val("");
				opts.removeClass("input_error").removeClass("input_light");
			}
			
		 }
	})
	
	$(".table").find(".addC").click(function(){
			 var ipC = $(this).parents("table").find(".ipsC option");
			 var opts = $(this).parents("table").find(".opts");
				ipC.each(function(a){
					if($(this).attr("selected") == "selected"){
					 $("<option>"+$(this).html()+"</option>").appendTo(opts);
				  }
				})
		})
	
	//删除
	$(".table").find(".dels").click(function(){
		   $(this).parents(".table").find(".opts option").each(function(){
			  if($(this).attr("selected") == "selected"){
				 $(this).remove();
			  }
		   })
	})
}

//判断重复
function checkchongfu(a,b){
	var flag=true;
		a.find("option").each(function(){
			if($(this).val() == b){
				flag=false;
			}
		});
		return flag;	
}
/*扩展池-end*/


/*开关动画*/
function checkbox_power(a){

	$(a).each(function(){
		var c = $(this).find("input");
		var s = $(this).find("span");
		var d = $(this).find("div");
		se(c, d, s);
	})

	function transition_on(s, d){
		d.animate({left:'0px'},100);
		s.removeClass("R_bg");
		s.addClass("G_bg");
	};
	
	function transition_off(s, d){
		d.animate({left:'-28px'},100);
		s.removeClass("G_bg");
		s.addClass("R_bg");
	};
	
	function se(c, d, s){
		c.is(':checked') ? transition_on(s, d) : transition_off(s, d)
		c.change(function(){
			c.is(':checked') ? transition_on(s, d) : transition_off(s, d)	
		});
	};
}
/*开关动画-end*/




/*首页-在线终端 圈图*/
$(function () {

    $('#PC').highcharts({
		exporting:{
			enabled:false//导出功能按钮
		},
		credits:{
			enabled:false//版本信息
        },
		title: { //标题
			text: 'PC端',
			floating:'true',
			align:'left',
			verticalAlign:'middle',
			x: 80,
		 	y: 10,
			style:{
				fontSize:"20px",
				color:"#01cc5a"
			}
		},
		subtitle: { //自定义副标题
			text: '888台',
			align:'center',
			verticalAlign:'middle',
			floating:'true',
			x: -48,
		 	y: 10,
			style:{
				fontSize:"20px",
				color:"#01cc5a"
			}
		},
		tooltip: {
			enabled: false //数据点提示框
		},

		chart: {
            type: 'pie', //图表类型还是pie图
			backgroundColor: 'rgba(255, 255, 255, 0)' //背景透明
        },
        plotOptions: {
			series: {
				states: {
					hover: {
						enabled: false //是否显示阴影带
					}
				}
			},
            pie: {
				size:65,//图表直径大小
				center: ['10%', '66%'],
                innerSize: '8', //也可以配置为10%的百分比形式
				borderWidth: 0, //色块之间的边线  
				dataLabels: {
					enabled: false //是否直接呈现数据 也就是外围显示数据与否
				},
				colors: [
				 '#01cc5a',
				 '#dde8ed'
				]
            }
        },

        series: [{
            data: [
                ['PC',   30],
                ['mobile',70]
            ]
        }]
    });
	
	
	$('#Mobile').highcharts({
		exporting:{
			enabled:false//导出功能按钮
		},
		credits:{
			enabled:false//版本信息
        },
		title: { //标题
			text: '移动端',
			floating:'true',
			align:'left',
			verticalAlign:'middle',
			x: 80,
		 	y: 10,
			style:{
				fontSize:"20px",
				color:"#FF8901" 
			}
		},
		subtitle: { //自定义副标题
			text: '888台',
			align:'center',
			verticalAlign:'middle',
			floating:'true',
			x: -48,
		 	y: 10,
			style:{
				fontSize:"20px",
				color:"#FF8901" 
			}
		},
		tooltip: {
			enabled: false //数据点提示框
		},

		chart: {
            type: 'pie', //图表类型还是pie图
			backgroundColor: 'rgba(255, 255, 255, 0)' //背景透明
        },
        plotOptions: {
			series: {
				states: {
					hover: {
						enabled: false //是否显示阴影带
					}
				}
			},
            pie: {
				size:65,//图表直径大小
				center: ['10%', '66%'],
                innerSize: '8', //也可以配置为10%的百分比形式
				borderWidth: 0, //色块之间的边线  
				dataLabels: {
					enabled: false//是否直接呈现数据 也就是外围显示数据与否
				},
				colors: [
				 '#FF8901',
				 '#dde8ed'
				]
            }
        },

        series: [{
            data: [
                
                ['mobile',70],
				['PC',    30]
            ]
        }]
    });
	
	
});
/*首页-在线终端 圈图-end*/


/*宽带参考*/
function reference(){
	$(".reference-value li").hover(
		function () {
			$(this).addClass("B_bg"); 
		},  
		function () { 
			$(this).removeClass("B_bg"); 
		} 
	);
	$(".reference").hover(
		function () {
		},  
		function () { 
			$(this).children(".reference-value").hide();
		} 
	);
	$(".reference_bnt").click(function () {
		$(this).siblings(".reference-value").show();
	
	});
	
}
/*宽带参考-end*/





$(document).ready(function(){
	select_box();/*下拉框 end*/
	promptInpt();/*inpt框内提示*/
	start_table();/*隔行变色*/
	expansionTank();/*扩展池*/
	upload();/*扩展池*/
	chkAll();/*复选框全选*/
	borde_prompt();/*帮助提示*/
	
	 /*开关动画*/
	checkbox_power('.checkbox-power');
	checkbox_power('.total-checkbox-power');
	
	/*安全类型 (网络设置-Wi-Fi 设置)*/
	safety_type(".safety-type1", ".safety-type-ul1 li", ".safety-type-div1");
	safety_type(".safety-type2", ".safety-type-ul2 li", ".safety-type-div2");
	safety_type(".safety-type3", ".safety-type-ul3 li", ".safety-type-div3");
	safety_type(".safety-type3", ".safety-type-ul4 li", ".safety-type-div4");
	
	/*安全类型  (AC管理-设置-编辑)*/
	safety_type(".safety-type1-a", ".safety-type-ul1-a li", ".safety-type-div1-a");
	safety_type(".safety-type2-a", ".safety-type-ul2-a li", ".safety-type-div2-a");
	
	/*安全类型  (AC管理-设置-默认配置)*/
	safety_type(".safety-type1-b", ".safety-type-ul1-b li", ".safety-type-div1-b");
	safety_type(".safety-type2-b", ".safety-type-ul2-b li", ".safety-type-div2-b");
	
	/*安全类型  (AC管理-设置-批量修改)*/
	safety_type(".safety-type1-c", ".safety-type-ul1-c li", ".safety-type-div1-c");
	safety_type(".safety-type2-c", ".safety-type-ul2-c li", ".safety-type-div2-c");
	
	reference();/*宽带参考-end*/
	
});