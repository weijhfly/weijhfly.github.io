$.snowFall({
	//创建粒子数量，密度
	particleNo: 500,
	//粒子下拉速度
	particleSpeed:30,
	//粒子在垂直（Y轴）方向运动范围
	particleY_Range:1300,
	//粒子在垂直（X轴）方向运动范围
	particleX_Range:1000,
	//是否绑定鼠标事件
    bindMouse: false,
    //相机离Z轴原点距离
    zIndex:600,
  //摄像机视野角度
    angle:55,
    wind_weight:0
});
var interval,bg = ['bg','bg2'],next = 0,btn;

interval=function() {
	if($('#pic-btn').hasClass('opacity4')){
	   $('#pic-btn').attr('class','opacity9');
	}else{
	   $('#pic-btn').attr('class','opacity4');
	}
	
}

btn = setInterval(interval,5000);
 next = 1;
 
$('#pic-btn').bind('click',function(){
	next==2 && (next=0);
	$('body').attr('class',bg[next]);
	next++;
	$('.text-box').fadeOut(1000);
	$('body').attr('class') == 'bg2'&&($('.text-box').eq(0).fadeIn(1000));
})

$('#pic-btn').mouseenter(function(){
	$('#pic-btn').attr('class','opacity9');
	window.clearInterval(btn);
}).mouseleave(function(){
	$('#pic-btn').attr('class','opacity4');
	btn = setInterval(interval,5000);
})
window.onload = function(){
	var images = new Array()
	function preload() {

	    for (i = 0; i < preload.arguments.length; i++) {

	        images[i] = new Image()

	        images[i].src = preload.arguments[i]

	    }

	}
	if($(window).width() <= 768){
	 preload(
	'./images/mobile_snow02.jpg'
	)      
	}else{
	preload(
	'./images/snow02.jpg'
	)      
	}

	$('#audio').bind('click',function(){
		var audio = document.getElementById('myAudio');
		if(audio.paused){                 
			  audio.play();//audio.play();
			  $('#audio').removeClass('stop');
		  }else{
		   audio.pause();// 这个就是暂停
			$('#audio').addClass('stop');
		  }
	})
}
//--创建页面监听，等待微信端页面加载完毕 触发音频播放
	document.addEventListener('DOMContentLoaded', function () {
		function audioAutoPlay() {
			var audio = document.getElementById('myAudio');
				audio.play();
			document.addEventListener("WeixinJSBridgeReady", function () {
				audio.play();
			}, false);
		}
		audioAutoPlay();
	});
setTimeout(function() {$('#pic-btn span').fadeIn();}, 1000);
setTimeout(function() {$('#pic-btn span').fadeOut();}, 4000);
setTimeout(function() {
	var audio = document.getElementById('myAudio');
	if(audio.paused){
		$("body").one("touchstart",function(){
			audio.play();
		});
	}
}, 2000);
