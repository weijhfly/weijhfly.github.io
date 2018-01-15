/*!
 * tap.js
 * by weijianhua  https://github.com/tap
*/
;(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define(factory);
	}else {
		factory();
	}
}(function () {
	window.tap = function(){
		var arg = arguments,
			els = document.querySelectorAll(arg[0]),
			isTouch = "ontouchend" in document,
			len = els.length,
			i = 0,
			isEntrust = arg.length == 3;

		if(len == 0){return false;}
		while (i < len){
			if(isTouch){
				var o = {};
				els[i].addEventListener('touchstart',function(e){
					e.preventDefault();
					var t = e.touches[0];
					o.startX = t.clientX;
		            o.startY = t.clientY;
		            o.endX = t.clientX;
		            o.endY = t.clientY;
		            o.sTime = + new Date;
				});
				els[i].addEventListener('touchmove',function(e){
					var t = e.touches[0];
					o.endX = t.clientX;
		            o.endY = t.clientY;
				});
				els[i].addEventListener('touchend',function(e){
					var t = e.touches[0];
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
		            o.sTime = undefined;
		            o.startX = undefined;
		            o.startY = undefined;
		            o.endX = undefined;
		            o.endY = undefined;
		        });
			}else{
				els[i].addEventListener('click',function(e){
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
	}
}))
