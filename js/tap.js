/*!
 * tap.js v1.1.2
 * by weijianhua  https://github.com/weijhfly/tap
*/
;(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define(function(){return factory;});
	}else if (typeof exports == "object") {
		module.exports = factory;
	}else {
		window.tap = factory;
	}
}(function(){
	var arg = arguments,
		doc = document,
		els = arg[0] == doc ? [doc]:document.querySelectorAll(arg[0]),
		isTouch = "ontouchend" in document,
		len = els.length,
		i = 0,
		isEntrust = typeof arg[1]== 'string';

	if(len == 0){return false;}
	while (i < len){
		if(isTouch){
			var o = {};
			els[i].addEventListener('touchstart',function(e){
				var t = e.touches[0];
				o.startX = t.pageX;
				o.startY = t.pageY;
				o.sTime = + new Date;
			});
			els[i].addEventListener('touchend',function(e){
				var t = e.changedTouches[0];
				o.endX = t.pageX;
				o.endY = t.pageY;
				if((+ new Date)-o.sTime<300){
					if(Math.abs(o.endX-o.startX)+Math.abs(o.endY-o.startY)<20){
						handler(e,arg,this);
					}
				}
				o = {};
			});
		}else{
			els[i].addEventListener('click',function(e){
				handler(e,arg,this);
			});
		}
		i ++;
	}
	function handler(e,arg,that){
		if(isEntrust){
			if(equal(e,arg[1])){
				arg[2].call(e.target,e);
			}
		}else{
			arg[1].call(that,e);
		}
	}
	function equal(e,el){
		var flag = false;
		if(el.indexOf('.') != -1 && e.target.className == el.replace('.','')){
			flag = true;
		}else if(el.indexOf('#') != -1 && e.target.id == el.replace('#','')){
			flag = true;
		}else if(e.target.nodeName.toLocaleLowerCase() == el){
			flag = true;
		}
		return flag;
	}
}))