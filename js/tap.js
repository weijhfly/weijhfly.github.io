/*!
 * tap.js
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
		els = document.querySelectorAll(arg[0]),
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
				o.startX = t.clientX;
				o.startY = t.clientY;
				o.sTime = + new Date;
				if(arg[isEntrust ? 3:2]){e.stopPropagation();}
			});
			els[i].addEventListener('touchend',function(e){
				var t = e.changedTouches[0];
				o.endX = t.clientX;
				o.endY = t.clientY;
				if((+ new Date)-o.sTime<300){
					if(Math.abs(o.endX-o.startX)+Math.abs(o.endY-o.startY)<20){
						e.preventDefault();
						if(isEntrust){
							if(equal(e,arg[1])){
								arg[2].call(e.target);
							}
						}else{
							arg[1].call(this);
						}
					}
				}
				if(arg[isEntrust ? 3:2]){e.stopPropagation();}
				o = {};
			});
		}else{
			els[i].addEventListener('click',function(e){
				if(arg[isEntrust ? 3:2]){e.stopPropagation();}
				if(isEntrust){
					if(equal(e,arg[1])){
						arg[2].call(e.target);
					}
				}else{
					arg[1].call(this);
				}
			});
		}
		i ++;
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
