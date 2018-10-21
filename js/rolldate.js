/*!
 * Rolldate 1.4.9
 * Copyright 2018 雾空
 * https://github.com/weijhfly/rolldate
 * Licensed under MIT
 * Released on: aug 4, 2018
 */
!function(t,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.rolldate=o():t.rolldate=o()}(window,function(){return function(t){var o={};function i(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=t,i.c=o,i.d=function(t,o,e){i.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,o){if(1&o&&(t=i(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var s in t)i.d(e,s,function(o){return t[o]}.bind(null,s));return e},i.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(o,"a",o),o},i.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},i.p="",i(i.s=0)}([function(t,o,i){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.version=o.Date=void 0;var e=function(){function t(t,o){for(var i=0;i<o.length;i++){var e=o[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(o,i,e){return i&&t(o.prototype,i),e&&t(o,e),o}}();i(3);var s=function(t){return t&&t.__esModule?t:{default:t}}(i(1));var r=i(2),n=s.default.iScroll;o.Date=function(){function t(o){if(function(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}(this,t),o&&o.el){var i=this,e=i.$(o.el)[0];if(e&&!e.rolldate&&(e.rolldate=!0,i.extend(o),e.addEventListener("click",function(){if(!i.$(".rolldate-container")[0]){if("INPUT"==e.nodeName&&e.blur(),i.config.tapBefore&&!1===i.config.tapBefore.call(i,e))return!1;i.createUi()}}),o.value)){"INPUT"==e.nodeName?e.value=o.value:e.innerText=o.value;var s=o.value.replace(/-/g,"/").replace(/[^\d/:]/g,"");e.date=new window.Date(s)}}}return e(t,[{key:"baseData",value:function(){return{date:new window.Date,emptyli:"<li>&nbsp;</li>",dateFormat:["YYYY-MM","YYYY-MM-DD","YYYY-MM-DD hh:mm","YYYY-MM-DD hh:mm:ss","YYYY","MM","DD","hh:mm","hh:mm:ss"],domClass:["rolldate-year","rolldate-month","rolldate-day","rolldate-hour","rolldate-min","rolldate-sec"],opts:{el:"",format:"YYYY-MM-DD",beginYear:2e3,endYear:2100,theme:"",scrollTime:200,tapBefore:null,moveEnd:null,confirmBefore:null,confirmEnd:null,liHeight:40,minStep:1}}}},{key:"extend",value:function(t){var o=this.baseData().opts;for(var i in o)o[i]=0===t[i]?0:t[i]||o[i];this.config=o}},{key:"createUi",value:function(){for(var t=this,o=t.baseData(),i=o.dateFormat.indexOf(t.config.format),e=5==(i=i>1?i+1:i)?[o.domClass[0]]:6==i?[o.domClass[1]]:7==i?[o.domClass[2]]:8==i?o.domClass.slice(3,5):9==i?o.domClass.slice(3):o.domClass.slice(0,i+2),s=e.length,r="",l=t.$(t.config.el)[0],a=l.date?l.date:o.date,h=0;h<s;h++){if(r+='<div id="'+e[h]+'"><ul>'+o.emptyli,0==h&&i<6)for(var c=t.config.beginYear;c<=t.config.endYear;c++)r+="<li"+(c==a.getFullYear()?' class="active"':"")+">"+c+"年</li>";else if((1==h||6==i)&&i<7)for(var p=1;p<=12;p++)r+="<li"+(p==a.getMonth()+1?' class="active"':"")+">"+(p<10?"0"+p:p)+"月</li>";else if((2==h||7==i)&&i<=7)for(var d=t.bissextile(a.getFullYear(),a.getMonth()+1),u=1;u<=d;u++)r+="<li"+(u==a.getDate()?' class="active"':"")+">"+(u<10?"0"+u:u)+"日</li>";else if(3==h||i>7&&0==h)for(var m=0;m<=23;m++)r+="<li"+(m==a.getHours()?' class="active"':"")+">"+(m<10?"0"+m:m)+"时</li>";else if(4==h||i>7&&1==h)for(var f=0;f<=59;f+=t.config.minStep)r+="<li"+(f==a.getMinutes()?' class="active"':"")+">"+(f<10?"0"+f:f)+"分</li>";else if(5==h||i>7&&2==h)for(var b=0;b<=59;b++)r+="<li"+(b==a.getSeconds()?' class="active"':"")+">"+(b<10?"0"+b:b)+"秒</li>";r+=o.emptyli+"</ul></div>"}var S='<div class="rolldate-mask"></div>\n            <div class="rolldate-wrapper">\n                <header>选择日期</header>\n                <section class="rolldate-content">\n                    <div class="rolldate-frame">'+r+'</div>\n                </section>\n                <footer>\n                    <button class="rolldate-btn rolldate-cancel">取消</button>\n                    <button class="rolldate-btn rolldate-confirm">确定</button>\n                </footer>\n            </div>',g=document.createElement("div"),v=0==i||8==i?"rolldate-two":3==i?"rolldate-five":4==i?"rolldate-six":i>=5&&i<=7?"rolldate-one":"",y=!1;g.className="rolldate-container "+v,g.innerHTML=S,document.body.appendChild(g),t.setTheme(),t.iscroll=[],t.config.liHeight=document.querySelector(".rolldate-frame li").offsetHeight;for(var x=0;x<s;x++){t.iscroll[x]=new n(e[x],{snap:"li",vScrollbar:!1,hScroll:!1,checkDOMChanges:2==x,onScrollEnd:function(){if(y){var i=t.config.liHeight;if(0!==Math.abs(this.y%i))return this.scrollTo(0,-Math.round(Math.abs(this.y)/i)*i,0,!1),!1;if(t.config.moveEnd&&t.config.moveEnd.call(t,t.$(t.config.el)[0],this),-1!=o.domClass.slice(0,2).indexOf(this.wrapper.id)&&t.iscroll[2]){var e=t.getIscrollDay(t.iscroll[2]),s=t.bissextile(t.getIscrollDay(t.iscroll[0]),t.getIscrollDay(t.iscroll[1])),r="";if(s+2!=t.$("#"+o.domClass[2]+" li").length){for(var n=1;n<=s;n++)r+="<li>"+(n<10?"0"+n:n)+"日</li>";r=o.emptyli+r+o.emptyli,t.$("#"+o.domClass[2]+" ul")[0].innerHTML=r,e>s&&t.iscroll[2].scrollToElement(t.$("#"+o.domClass[2]+" li")[s-1])}}}}});var w=t.$("#"+e[x]+" .active")[0];w&&t.iscroll[x].scrollToElement(w.previousSibling,t.config.scrollTime)}t.event(),document.body.style.overflow="hidden",setTimeout(function(){y=!0},1e3)}},{key:"$",value:function(t){return"string"!=typeof t&&t.nodeType?[t]:document.querySelectorAll(t)}},{key:"event",value:function(){var t=this,o=t.$(".rolldate-mask")[0],i=t.$(".rolldate-cancel")[0],e=t.$(".rolldate-confirm")[0];o.addEventListener("click",function(){t.destroy(!0)}),i.addEventListener("click",function(){t.destroy(!0)}),e.addEventListener("click",function(){var o=t.$(t.config.el)[0],i=t.baseData(),e=t.config.format,s=new window.Date,r=i.dateFormat.indexOf(e);if(t.iscroll.forEach(function(o,i){var n=t.getIscrollDay(o),l=void 0;r<=4?l=0==i?"YYYY":1==i?"MM":2==i?"DD":3==i?"hh":4==i?"mm":"ss":5==r?l="MM":6==r?l="DD":7==r?l=0==i?"hh":1==i?"mm":"":8==r&&(l=0==i?"hh":1==i?"mm":"ss"),e=e.replace(l,n),"YYYY"==l?s.setFullYear(n):"MM"==l?s.setMonth(n-1):"DD"==l?s.setDate(n):"hh"==l?s.setHours(n):"mm"==l?s.setMinutes(n):"ss"==l&&s.setSeconds(n)}),t.config.confirmBefore){var n=t.config.confirmBefore.call(t,o,e);if(!1===n)return t.config.confirmEnd&&t.config.confirmEnd.call(t,o,e),!1;n&&(e=n)}"INPUT"==o.nodeName?o.value=e:o.innerText=e,t.config.confirmEnd&&t.config.confirmEnd.call(t,o,e),t.destroy(),o.date=s});var s=t.config.liHeight;t.config.queryStyle=function(){window.removeEventListener("resize",t.config.queryStyle),setTimeout(function(){t.$(".rolldate-container")[0]&&s!=document.querySelector(".rolldate-frame li").offsetHeight&&t.destroy(!0)},0)},window.addEventListener("resize",t.config.queryStyle,!1)}},{key:"bissextile",value:function(t,o){var i=void 0;return 1==o||3==o||5==o||7==o||8==o||10==o||12==o?i=31:4==o||6==o||11==o||9==o?i=30:2==o&&(i=t%4!=0||t%100==0&&t%400!=0?28:29),i}},{key:"destroy",value:function(t){if(this.iscroll.forEach(function(t,o){t.destroy()}),document.body.removeChild(this.$(".rolldate-container")[0]),t&&this.config.confirmEnd){var o=this.$(this.config.el)[0];this.config.confirmEnd.call(this,o)}this.config.queryStyle&&window.removeEventListener("resize",this.config.queryStyle,!1),document.body.style.overflow="visible"}},{key:"getIscrollDay",value:function(t){var o=this.config.liHeight,i=0!==Math.abs(t.y%o)?Math.round(Math.abs(t.y)/o)+1:Math.abs(t.y)/o+1;return this.$("#"+t.wrapper.id+" li")[i].innerText.replace(/\D/g,"")}},{key:"setTheme",value:function(){var t=this.config.theme,o={blue:"#16a1d3",red:"#d91600",green:"#009688",black:"#393D49"},i=this.$(".rolldate-container header")[0],e=this.$(".rolldate-container .rolldate-confirm")[0];t&&(i.style.background=e.style.background=o[t]?o[t]:t)}}]),t}(),o.version=r.version},function(t,o,i){!function(){var t=Math,i=function(t){return t>>0},e=/webkit/i.test(navigator.appVersion)?"webkit":/firefox/i.test(navigator.userAgent)?"Moz":"opera"in window?"O":"",s=/android/gi.test(navigator.appVersion),r=/iphone|ipad/gi.test(navigator.appVersion),n=/playbook/gi.test(navigator.appVersion),l=/hp-tablet/gi.test(navigator.appVersion),a="WebKitCSSMatrix"in window&&"m11"in new WebKitCSSMatrix,h="ontouchstart"in window&&!l,c=e+"Transform"in document.documentElement.style,p=r||n,d=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return setTimeout(t,1)},u=window.cancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout,m="onorientationchange"in window?"orientationchange":"resize",f=h?"touchstart":"mousedown",b=h?"touchmove":"mousemove",S=h?"touchend":"mouseup",g=h?"touchcancel":"mouseup",v="Moz"==e?"DOMMouseScroll":"mousewheel",y="translate"+(a?"3d(":"("),x=a?",0)":")",w=function(t,o){var i,n=this,l=document;for(i in n.wrapper="object"==typeof t?t:l.getElementById(t),n.wrapper.style.overflow="hidden",n.scroller=n.wrapper.children[0],n.options={hScroll:!0,vScroll:!0,x:0,y:0,bounce:!0,bounceLock:!1,momentum:!0,lockDirection:!0,useTransform:!0,useTransition:!1,topOffset:0,checkDOMChanges:!1,hScrollbar:!0,vScrollbar:!0,fixedScrollbar:s,hideScrollbar:r,fadeScrollbar:r&&a,scrollbarClass:"",zoom:!1,zoomMin:1,zoomMax:4,doubleTapZoom:2,wheelAction:"scroll",snap:!1,snapThreshold:1,onRefresh:null,onBeforeScrollStart:function(t){t.preventDefault()},onScrollStart:null,onBeforeScrollMove:null,onScrollMove:null,onBeforeScrollEnd:null,onScrollEnd:null,onTouchEnd:null,onDestroy:null,onZoomStart:null,onZoom:null,onZoomEnd:null},o)n.options[i]=o[i];n.x=n.options.x,n.y=n.options.y,n.options.useTransform=!!c&&n.options.useTransform,n.options.hScrollbar=n.options.hScroll&&n.options.hScrollbar,n.options.vScrollbar=n.options.vScroll&&n.options.vScrollbar,n.options.zoom=n.options.useTransform&&n.options.zoom,n.options.useTransition=p&&n.options.useTransition,n.options.zoom&&s&&(y="translate(",x=")"),n.scroller.style[e+"TransitionProperty"]=n.options.useTransform?"-"+e.toLowerCase()+"-transform":"top left",n.scroller.style[e+"TransitionDuration"]="0",n.scroller.style[e+"TransformOrigin"]="0 0",n.options.useTransition&&(n.scroller.style[e+"TransitionTimingFunction"]="cubic-bezier(0.33,0.66,0.66,1)"),n.options.useTransform?n.scroller.style[e+"Transform"]=y+n.x+"px,"+n.y+"px"+x:n.scroller.style.cssText+=";position:absolute;top:"+n.y+"px;left:"+n.x+"px",n.options.useTransition&&(n.options.fixedScrollbar=!0),n.refresh(),n._bind(m,window),n._bind(f),h||(n._bind("mouseout",n.wrapper),"none"!=n.options.wheelAction&&n._bind(v)),n.options.checkDOMChanges&&(n.checkDOMTime=setInterval(function(){n._checkDOMChanges()},500))};w.prototype={enabled:!0,x:0,y:0,steps:[],scale:1,currPageX:0,currPageY:0,pagesX:[],pagesY:[],aniTime:null,wheelZoomCount:0,handleEvent:function(t){switch(t.type){case f:if(!h&&0!==t.button)return;this._start(t);break;case b:this._move(t);break;case S:case g:this._end(t);break;case m:this._resize();break;case v:this._wheel(t);break;case"mouseout":this._mouseout(t);break;case"webkitTransitionEnd":this._transitionEnd(t)}},_checkDOMChanges:function(){this.moved||this.zoomed||this.animating||this.scrollerW==this.scroller.offsetWidth*this.scale&&this.scrollerH==this.scroller.offsetHeight*this.scale||this.refresh()},_scrollbar:function(o){var s,r=document;this[o+"Scrollbar"]?(this[o+"ScrollbarWrapper"]||(s=r.createElement("div"),this.options.scrollbarClass?s.className=this.options.scrollbarClass+o.toUpperCase():s.style.cssText="position:absolute;z-index:100;"+("h"==o?"height:7px;bottom:1px;left:2px;right:"+(this.vScrollbar?"7":"2")+"px":"width:7px;bottom:"+(this.hScrollbar?"7":"2")+"px;top:2px;right:1px"),s.style.cssText+=";pointer-events:none;-"+e+"-transition-property:opacity;-"+e+"-transition-duration:"+(this.options.fadeScrollbar?"350ms":"0")+";overflow:hidden;opacity:"+(this.options.hideScrollbar?"0":"1"),this.wrapper.appendChild(s),this[o+"ScrollbarWrapper"]=s,s=r.createElement("div"),this.options.scrollbarClass||(s.style.cssText="position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);-"+e+"-background-clip:padding-box;-"+e+"-box-sizing:border-box;"+("h"==o?"height:100%":"width:100%")+";-"+e+"-border-radius:3px;border-radius:3px"),s.style.cssText+=";pointer-events:none;-"+e+"-transition-property:-"+e+"-transform;-"+e+"-transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);-"+e+"-transition-duration:0;-"+e+"-transform:"+y+"0,0"+x,this.options.useTransition&&(s.style.cssText+=";-"+e+"-transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"),this[o+"ScrollbarWrapper"].appendChild(s),this[o+"ScrollbarIndicator"]=s),"h"==o?(this.hScrollbarSize=this.hScrollbarWrapper.clientWidth,this.hScrollbarIndicatorSize=t.max(i(this.hScrollbarSize*this.hScrollbarSize/this.scrollerW),8),this.hScrollbarIndicator.style.width=this.hScrollbarIndicatorSize+"px",this.hScrollbarMaxScroll=this.hScrollbarSize-this.hScrollbarIndicatorSize,this.hScrollbarProp=this.hScrollbarMaxScroll/this.maxScrollX):(this.vScrollbarSize=this.vScrollbarWrapper.clientHeight,this.vScrollbarIndicatorSize=t.max(i(this.vScrollbarSize*this.vScrollbarSize/this.scrollerH),8),this.vScrollbarIndicator.style.height=this.vScrollbarIndicatorSize+"px",this.vScrollbarMaxScroll=this.vScrollbarSize-this.vScrollbarIndicatorSize,this.vScrollbarProp=this.vScrollbarMaxScroll/this.maxScrollY),this._scrollbarPos(o,!0)):this[o+"ScrollbarWrapper"]&&(c&&(this[o+"ScrollbarIndicator"].style[e+"Transform"]=""),this[o+"ScrollbarWrapper"].parentNode.removeChild(this[o+"ScrollbarWrapper"]),this[o+"ScrollbarWrapper"]=null,this[o+"ScrollbarIndicator"]=null)},_resize:function(){var t=this;setTimeout(function(){t.refresh()},s?200:0)},_pos:function(t,o){t=this.hScroll?t:0,o=this.vScroll?o:0,this.options.useTransform?this.scroller.style[e+"Transform"]=y+t+"px,"+o+"px"+x+" scale("+this.scale+")":(t=i(t),o=i(o),this.scroller.style.left=t+"px",this.scroller.style.top=o+"px"),this.x=t,this.y=o,this._scrollbarPos("h"),this._scrollbarPos("v")},_scrollbarPos:function(t,o){var s,r="h"==t?this.x:this.y;this[t+"Scrollbar"]&&((r=this[t+"ScrollbarProp"]*r)<0?(this.options.fixedScrollbar||((s=this[t+"ScrollbarIndicatorSize"]+i(3*r))<8&&(s=8),this[t+"ScrollbarIndicator"].style["h"==t?"width":"height"]=s+"px"),r=0):r>this[t+"ScrollbarMaxScroll"]&&(this.options.fixedScrollbar?r=this[t+"ScrollbarMaxScroll"]:((s=this[t+"ScrollbarIndicatorSize"]-i(3*(r-this[t+"ScrollbarMaxScroll"])))<8&&(s=8),this[t+"ScrollbarIndicator"].style["h"==t?"width":"height"]=s+"px",r=this[t+"ScrollbarMaxScroll"]+(this[t+"ScrollbarIndicatorSize"]-s))),this[t+"ScrollbarWrapper"].style[e+"TransitionDelay"]="0",this[t+"ScrollbarWrapper"].style.opacity=o&&this.options.hideScrollbar?"0":"1",this[t+"ScrollbarIndicator"].style[e+"Transform"]=y+("h"==t?r+"px,0":"0,"+r+"px")+x)},_start:function(o){var i,s,r,n,l,a=h?o.touches[0]:o;this.enabled&&(this.options.onBeforeScrollStart&&this.options.onBeforeScrollStart.call(this,o),(this.options.useTransition||this.options.zoom)&&this._transitionTime(0),this.moved=!1,this.animating=!1,this.zoomed=!1,this.distX=0,this.distY=0,this.absDistX=0,this.absDistY=0,this.dirX=0,this.dirY=0,this.options.zoom&&h&&o.touches.length>1&&(n=t.abs(o.touches[0].pageX-o.touches[1].pageX),l=t.abs(o.touches[0].pageY-o.touches[1].pageY),this.touchesDistStart=t.sqrt(n*n+l*l),this.originX=t.abs(o.touches[0].pageX+o.touches[1].pageX-2*this.wrapperOffsetLeft)/2-this.x,this.originY=t.abs(o.touches[0].pageY+o.touches[1].pageY-2*this.wrapperOffsetTop)/2-this.y,this.options.onZoomStart&&this.options.onZoomStart.call(this,o)),this.options.momentum&&(this.options.useTransform?(s=1*(i=getComputedStyle(this.scroller,null)[e+"Transform"].replace(/[^0-9-.,]/g,"").split(","))[4],r=1*i[5]):(s=1*getComputedStyle(this.scroller,null).left.replace(/[^0-9-]/g,""),r=1*getComputedStyle(this.scroller,null).top.replace(/[^0-9-]/g,"")),s==this.x&&r==this.y||(this.options.useTransition?this._unbind("webkitTransitionEnd"):u(this.aniTime),this.steps=[],this._pos(s,r))),this.absStartX=this.x,this.absStartY=this.y,this.startX=this.x,this.startY=this.y,this.pointX=a.pageX,this.pointY=a.pageY,this.startTime=o.timeStamp||Date.now(),this.options.onScrollStart&&this.options.onScrollStart.call(this,o),this._bind(b),this._bind(S),this._bind(g))},_move:function(o){var i,s,r,n=h?o.touches[0]:o,l=n.pageX-this.pointX,a=n.pageY-this.pointY,c=this.x+l,p=this.y+a,d=o.timeStamp||Date.now();return this.options.onBeforeScrollMove&&this.options.onBeforeScrollMove.call(this,o),this.options.zoom&&h&&o.touches.length>1?(i=t.abs(o.touches[0].pageX-o.touches[1].pageX),s=t.abs(o.touches[0].pageY-o.touches[1].pageY),this.touchesDist=t.sqrt(i*i+s*s),this.zoomed=!0,(r=1/this.touchesDistStart*this.touchesDist*this.scale)<this.options.zoomMin?r=.5*this.options.zoomMin*Math.pow(2,r/this.options.zoomMin):r>this.options.zoomMax&&(r=2*this.options.zoomMax*Math.pow(.5,this.options.zoomMax/r)),this.lastScale=r/this.scale,c=this.originX-this.originX*this.lastScale+this.x,p=this.originY-this.originY*this.lastScale+this.y,this.scroller.style[e+"Transform"]=y+c+"px,"+p+"px"+x+" scale("+r+")",void(this.options.onZoom&&this.options.onZoom.call(this,o))):(this.pointX=n.pageX,this.pointY=n.pageY,(c>0||c<this.maxScrollX)&&(c=this.options.bounce?this.x+l/2:c>=0||this.maxScrollX>=0?0:this.maxScrollX),(p>this.minScrollY||p<this.maxScrollY)&&(p=this.options.bounce?this.y+a/2:p>=this.minScrollY||this.maxScrollY>=0?this.minScrollY:this.maxScrollY),this.absDistX<6&&this.absDistY<6?(this.distX+=l,this.distY+=a,this.absDistX=t.abs(this.distX),void(this.absDistY=t.abs(this.distY))):(this.options.lockDirection&&(this.absDistX>this.absDistY+5?(p=this.y,a=0):this.absDistY>this.absDistX+5&&(c=this.x,l=0)),this.moved=!0,this._pos(c,p),this.dirX=l>0?-1:l<0?1:0,this.dirY=a>0?-1:a<0?1:0,d-this.startTime>300&&(this.startTime=d,this.startX=this.x,this.startY=this.y),void(this.options.onScrollMove&&this.options.onScrollMove.call(this,o))))},_end:function(o){if(!h||0==o.touches.length){var s,r,n,l,a,c,p,d=this,u=h?o.changedTouches[0]:o,m={dist:0,time:0},f={dist:0,time:0},v=(o.timeStamp||Date.now())-d.startTime,w=d.x,T=d.y;if(d._unbind(b),d._unbind(S),d._unbind(g),d.options.onBeforeScrollEnd&&d.options.onBeforeScrollEnd.call(d,o),d.zoomed)return p=d.scale*d.lastScale,p=Math.max(d.options.zoomMin,p),p=Math.min(d.options.zoomMax,p),d.lastScale=p/d.scale,d.scale=p,d.x=d.originX-d.originX*d.lastScale+d.x,d.y=d.originY-d.originY*d.lastScale+d.y,d.scroller.style[e+"TransitionDuration"]="200ms",d.scroller.style[e+"Transform"]=y+d.x+"px,"+d.y+"px"+x+" scale("+d.scale+")",d.zoomed=!1,d.refresh(),void(d.options.onZoomEnd&&d.options.onZoomEnd.call(d,o));if(!d.moved)return h&&(d.doubleTapTimer&&d.options.zoom?(clearTimeout(d.doubleTapTimer),d.doubleTapTimer=null,d.options.onZoomStart&&d.options.onZoomStart.call(d,o),d.zoom(d.pointX,d.pointY,1==d.scale?d.options.doubleTapZoom:1),d.options.onZoomEnd&&setTimeout(function(){d.options.onZoomEnd.call(d,o)},200)):d.doubleTapTimer=setTimeout(function(){for(d.doubleTapTimer=null,s=u.target;1!=s.nodeType;)s=s.parentNode;"SELECT"!=s.tagName&&"INPUT"!=s.tagName&&"TEXTAREA"!=s.tagName&&((r=document.createEvent("MouseEvents")).initMouseEvent("click",!0,!0,o.view,1,u.screenX,u.screenY,u.clientX,u.clientY,o.ctrlKey,o.altKey,o.shiftKey,o.metaKey,0,null),r._fake=!0,s.dispatchEvent(r))},d.options.zoom?250:0)),d._resetPos(200),void(d.options.onTouchEnd&&d.options.onTouchEnd.call(d,o));if(v<300&&d.options.momentum&&(m=w?d._momentum(w-d.startX,v,-d.x,d.scrollerW-d.wrapperW+d.x,d.options.bounce?d.wrapperW:0):m,f=T?d._momentum(T-d.startY,v,-d.y,d.maxScrollY<0?d.scrollerH-d.wrapperH+d.y-d.minScrollY:0,d.options.bounce?d.wrapperH:0):f,w=d.x+m.dist,T=d.y+f.dist,(d.x>0&&w>0||d.x<d.maxScrollX&&w<d.maxScrollX)&&(m={dist:0,time:0}),(d.y>d.minScrollY&&T>d.minScrollY||d.y<d.maxScrollY&&T<d.maxScrollY)&&(f={dist:0,time:0})),m.dist||f.dist)return a=t.max(t.max(m.time,f.time),10),d.options.snap&&(n=w-d.absStartX,l=T-d.absStartY,t.abs(n)<d.options.snapThreshold&&t.abs(l)<d.options.snapThreshold?d.scrollTo(d.absStartX,d.absStartY,200):(w=(c=d._snap(w,T)).x,T=c.y,a=t.max(c.time,a))),d.scrollTo(i(w),i(T),a),void(d.options.onTouchEnd&&d.options.onTouchEnd.call(d,o));if(d.options.snap)return n=w-d.absStartX,l=T-d.absStartY,t.abs(n)<d.options.snapThreshold&&t.abs(l)<d.options.snapThreshold?d.scrollTo(d.absStartX,d.absStartY,200):(c=d._snap(d.x,d.y)).x==d.x&&c.y==d.y||d.scrollTo(c.x,c.y,c.time),void(d.options.onTouchEnd&&d.options.onTouchEnd.call(d,o));d._resetPos(200),d.options.onTouchEnd&&d.options.onTouchEnd.call(d,o)}},_resetPos:function(t){var o=this.x>=0?0:this.x<this.maxScrollX?this.maxScrollX:this.x,i=this.y>=this.minScrollY||this.maxScrollY>0?this.minScrollY:this.y<this.maxScrollY?this.maxScrollY:this.y;if(o==this.x&&i==this.y)return this.moved&&(this.moved=!1,this.options.onScrollEnd&&this.options.onScrollEnd.call(this)),this.hScrollbar&&this.options.hideScrollbar&&("webkit"==e&&(this.hScrollbarWrapper.style[e+"TransitionDelay"]="300ms"),this.hScrollbarWrapper.style.opacity="0"),void(this.vScrollbar&&this.options.hideScrollbar&&("webkit"==e&&(this.vScrollbarWrapper.style[e+"TransitionDelay"]="300ms"),this.vScrollbarWrapper.style.opacity="0"));this.scrollTo(o,i,t||0)},_wheel:function(t){var o,i,e,s,r,n=this;if("wheelDeltaX"in t?(o=t.wheelDeltaX/12,i=t.wheelDeltaY/12):o=i="detail"in t?3*-t.detail:-t.wheelDelta,"zoom"==n.options.wheelAction)return(r=n.scale*Math.pow(2,1/3*(i?i/Math.abs(i):0)))<n.options.zoomMin&&(r=n.options.zoomMin),r>n.options.zoomMax&&(r=n.options.zoomMax),void(r!=n.scale&&(!n.wheelZoomCount&&n.options.onZoomStart&&n.options.onZoomStart.call(n,t),n.wheelZoomCount++,n.zoom(t.pageX,t.pageY,r,400),setTimeout(function(){n.wheelZoomCount--,!n.wheelZoomCount&&n.options.onZoomEnd&&n.options.onZoomEnd.call(n,t)},400)));e=n.x+o,s=n.y+i,e>0?e=0:e<n.maxScrollX&&(e=n.maxScrollX),s>n.minScrollY?s=n.minScrollY:s<n.maxScrollY&&(s=n.maxScrollY),n.scrollTo(e,s,0)},_mouseout:function(t){var o=t.relatedTarget;if(o){for(;o=o.parentNode;)if(o==this.wrapper)return;this._end(t)}else this._end(t)},_transitionEnd:function(t){t.target==this.scroller&&(this._unbind("webkitTransitionEnd"),this._startAni())},_startAni:function(){var o,i,e,s=this,r=s.x,n=s.y,l=Date.now();if(!s.animating)if(s.steps.length){if((o=s.steps.shift()).x==r&&o.y==n&&(o.time=0),s.animating=!0,s.moved=!0,s.options.useTransition)return s._transitionTime(o.time),s._pos(o.x,o.y),s.animating=!1,void(o.time?s._bind("webkitTransitionEnd"):s._resetPos(0));(e=function(){var a,h,c=Date.now();if(c>=l+o.time)return s._pos(o.x,o.y),s.animating=!1,s.options.onAnimationEnd&&s.options.onAnimationEnd.call(s),void s._startAni();c=(c-l)/o.time-1,i=t.sqrt(1-c*c),a=(o.x-r)*i+r,h=(o.y-n)*i+n,s._pos(a,h),s.animating&&(s.aniTime=d(e))})()}else s._resetPos(400)},_transitionTime:function(t){t+="ms",this.scroller.style[e+"TransitionDuration"]=t,this.hScrollbar&&(this.hScrollbarIndicator.style[e+"TransitionDuration"]=t),this.vScrollbar&&(this.vScrollbarIndicator.style[e+"TransitionDuration"]=t)},_momentum:function(o,e,s,r,n){var l=t.abs(o)/e,a=l*l/.0012;return o>0&&a>s?(l=l*(s+=n/(6/(a/l*6e-4)))/a,a=s):o<0&&a>r&&(l=l*(r+=n/(6/(a/l*6e-4)))/a,a=r),{dist:a*=o<0?-1:1,time:i(l/6e-4)}},_offset:function(t){for(var o=-t.offsetLeft,i=-t.offsetTop;t=t.offsetParent;)o-=t.offsetLeft,i-=t.offsetTop;return t!=this.wrapper&&(o*=this.scale,i*=this.scale),{left:o,top:i}},_snap:function(o,e){var s,r,n,l,a;for(n=this.pagesX.length-1,s=0,r=this.pagesX.length;s<r;s++)if(o>=this.pagesX[s]){n=s;break}for(n==this.currPageX&&n>0&&this.dirX<0&&n--,o=this.pagesX[n],l=(l=t.abs(o-this.pagesX[this.currPageX]))?t.abs(this.x-o)/l*500:0,this.currPageX=n,n=this.pagesY.length-1,s=0;s<n;s++)if(e>=this.pagesY[s]){n=s;break}return n==this.currPageY&&n>0&&this.dirY<0&&n--,e=this.pagesY[n],a=(a=t.abs(e-this.pagesY[this.currPageY]))?t.abs(this.y-e)/a*500:0,this.currPageY=n,{x:o,y:e,time:i(t.max(l,a))||200}},_bind:function(t,o,i){(o||this.scroller).addEventListener(t,this,!!i)},_unbind:function(t,o,i){(o||this.scroller).removeEventListener(t,this,!!i)},destroy:function(){this.scroller.style[e+"Transform"]="",this.hScrollbar=!1,this.vScrollbar=!1,this._scrollbar("h"),this._scrollbar("v"),this._unbind(m,window),this._unbind(f),this._unbind(b),this._unbind(S),this._unbind(g),this.options.hasTouch||(this._unbind("mouseout",this.wrapper),this._unbind(v)),this.options.useTransition&&this._unbind("webkitTransitionEnd"),this.options.checkDOMChanges&&clearInterval(this.checkDOMTime),this.options.onDestroy&&this.options.onDestroy.call(this)},refresh:function(){var t,o,s,r,n=0,l=0;if(this.scale<this.options.zoomMin&&(this.scale=this.options.zoomMin),this.wrapperW=this.wrapper.clientWidth||1,this.wrapperH=this.wrapper.clientHeight||1,this.minScrollY=-this.options.topOffset||0,this.scrollerW=i(this.scroller.offsetWidth*this.scale),this.scrollerH=i((this.scroller.offsetHeight+this.minScrollY)*this.scale),this.maxScrollX=this.wrapperW-this.scrollerW,this.maxScrollY=this.wrapperH-this.scrollerH+this.minScrollY,this.dirX=0,this.dirY=0,this.options.onRefresh&&this.options.onRefresh.call(this),this.hScroll=this.options.hScroll&&this.maxScrollX<0,this.vScroll=this.options.vScroll&&(!this.options.bounceLock&&!this.hScroll||this.scrollerH>this.wrapperH),this.hScrollbar=this.hScroll&&this.options.hScrollbar,this.vScrollbar=this.vScroll&&this.options.vScrollbar&&this.scrollerH>this.wrapperH,t=this._offset(this.wrapper),this.wrapperOffsetLeft=-t.left,this.wrapperOffsetTop=-t.top,"string"==typeof this.options.snap)for(this.pagesX=[],this.pagesY=[],o=0,s=(r=this.scroller.querySelectorAll(this.options.snap)).length;o<s;o++)(n=this._offset(r[o])).left+=this.wrapperOffsetLeft,n.top+=this.wrapperOffsetTop,this.pagesX[o]=n.left<this.maxScrollX?this.maxScrollX:n.left*this.scale,this.pagesY[o]=n.top<this.maxScrollY?this.maxScrollY:n.top*this.scale;else if(this.options.snap){for(this.pagesX=[];n>=this.maxScrollX;)this.pagesX[l]=n,n-=this.wrapperW,l++;for(this.maxScrollX%this.wrapperW&&(this.pagesX[this.pagesX.length]=this.maxScrollX-this.pagesX[this.pagesX.length-1]+this.pagesX[this.pagesX.length-1]),n=0,l=0,this.pagesY=[];n>=this.maxScrollY;)this.pagesY[l]=n,n-=this.wrapperH,l++;this.maxScrollY%this.wrapperH&&(this.pagesY[this.pagesY.length]=this.maxScrollY-this.pagesY[this.pagesY.length-1]+this.pagesY[this.pagesY.length-1])}this._scrollbar("h"),this._scrollbar("v"),this.zoomed||(this.scroller.style[e+"TransitionDuration"]="0",this._resetPos(200))},scrollTo:function(t,o,i,e){var s,r,n=t;for(this.stop(),n.length||(n=[{x:t,y:o,time:i,relative:e}]),s=0,r=n.length;s<r;s++)n[s].relative&&(n[s].x=this.x-n[s].x,n[s].y=this.y-n[s].y),this.steps.push({x:n[s].x,y:n[s].y,time:n[s].time||0});this._startAni()},scrollToElement:function(o,i){var e;(o=o.nodeType?o:this.scroller.querySelector(o))&&((e=this._offset(o)).left+=this.wrapperOffsetLeft,e.top+=this.wrapperOffsetTop,e.left=e.left>0?0:e.left<this.maxScrollX?this.maxScrollX:e.left,e.top=e.top>this.minScrollY?this.minScrollY:e.top<this.maxScrollY?this.maxScrollY:e.top,i=void 0===i?t.max(2*t.abs(e.left),2*t.abs(e.top)):i,this.scrollTo(e.left,e.top,i))},scrollToPage:function(t,o,i){var e,s;i=void 0===i?400:i,this.options.onScrollStart&&this.options.onScrollStart.call(this),this.options.snap?(t="next"==t?this.currPageX+1:"prev"==t?this.currPageX-1:t,o="next"==o?this.currPageY+1:"prev"==o?this.currPageY-1:o,t=t<0?0:t>this.pagesX.length-1?this.pagesX.length-1:t,o=o<0?0:o>this.pagesY.length-1?this.pagesY.length-1:o,this.currPageX=t,this.currPageY=o,e=this.pagesX[t],s=this.pagesY[o]):(e=-this.wrapperW*t,s=-this.wrapperH*o,e<this.maxScrollX&&(e=this.maxScrollX),s<this.maxScrollY&&(s=this.maxScrollY)),this.scrollTo(e,s,i)},disable:function(){this.stop(),this._resetPos(0),this.enabled=!1,this._unbind(b),this._unbind(S),this._unbind(g)},enable:function(){this.enabled=!0},stop:function(){this.options.useTransition?this._unbind("webkitTransitionEnd"):u(this.aniTime),this.steps=[],this.moved=!1,this.animating=!1},zoom:function(t,o,i,s){var r=i/this.scale;this.options.useTransform&&(this.zoomed=!0,s=void 0===s?200:s,t=t-this.wrapperOffsetLeft-this.x,o=o-this.wrapperOffsetTop-this.y,this.x=t-t*r+this.x,this.y=o-o*r+this.y,this.scale=i,this.refresh(),this.x=this.x>0?0:this.x<this.maxScrollX?this.maxScrollX:this.x,this.y=this.y>this.minScrollY?this.minScrollY:this.y<this.maxScrollY?this.maxScrollY:this.y,this.scroller.style[e+"TransitionDuration"]=s+"ms",this.scroller.style[e+"Transform"]=y+this.x+"px,"+this.y+"px"+x+" scale("+i+")",this.zoomed=!1)},isReady:function(){return!this.moved&&!this.zoomed&&!this.animating}},o.iScroll=w}()},function(t){t.exports={name:"rolldate",version:"1.4.9",description:"rolldate 移动端日期选择插件",main:"dist/rolldate.js",scripts:{build:"cross-env NODE_ENV=production webpack --config config/rolldate.config.js --mode production",dev:"cross-env NODE_ENV=development webpack-dev-server --config config/rolldate.config.js --mode development"},keywords:["date","iscroll-date"],repository:{type:"git",url:"https://github.com/weijhfly/rolldate"},author:"雾空",license:"MIT",dependencies:{},devDependencies:{autoprefixer:"^9.0.1","babel-core":"^6.26.3","babel-loader":"^7.1.5","babel-preset-es2015":"^6.24.1","clean-webpack-plugin":"^0.1.19","cross-env":"^5.2.0","css-loader":"^1.0.0","extract-text-webpack-plugin":"^4.0.0-beta.0","html-webpack-plugin":"^3.2.0",less:"^3.8.0","less-loader":"^4.1.0","postcss-loader":"^2.1.6","style-loader":"^0.21.0",webpack:"^4.16.2","webpack-cli":"^3.1.0","webpack-dev-server":"^3.1.5"}}},function(t,o){}])});
