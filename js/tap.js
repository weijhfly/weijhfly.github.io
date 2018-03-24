/*!
 * tap.js v1.2.4
 * By 雾空 https://github.com/weijhfly/tap
 * Time:2018/1/17
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
		doc = window.document,
		els = arg[0] == doc ? [doc]:doc.querySelectorAll(arg[0]),
		isTouch = "ontouchend" in doc,
		len = els.length,
		i = 0,
		isEntrust = typeof arg[1]== 'string',
		isMulti = typeof arg[1]== 'object';

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
		if(e.target.href){
			return window.location = e.target.href;
		}
		if(isEntrust){
			if(equal(e,arg[1])){
				prevent(e);
				arg[2].call(e.target,e);
			}
		}else if(isMulti){
			for(key in arg[1]){
				if(equal(e,key)){
					prevent(e);
					arg[1][key].call(e.target,e);
					break;
				}
			}
		}else{
			prevent(e);
			arg[1].call(that,e);
		}
	}
	function equal(e,el){
		return el[0] == '#'? new RegExp('\\b'+ el.substring(1) +'\\b').test(e.target.id) : 
			el[0] == '.'? new RegExp('\\b'+ el.substring(1) +'\\b').test(e.target.className) :
			e.target.nodeName.toLocaleLowerCase() == el;
	}
	function prevent(e){
		var tagName = e.target.tagName.toLocaleLowerCase();
		if(tagName != 'select' && tagName != 'input' && tagName != 'textarea'){
			doc.activeElement.blur();
			e.preventDefault();
		}
	}
}))
