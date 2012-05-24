window.onload=function(){var a=window.innerWidth,b=window.innerHeight;Crafty.init(a,b)},Crafty.scene("main",function(){var a=window.innerWidth,b=window.innerHeight;Crafty.init(a,b),Crafty.background("rgb(227,227,227)"),Crafty.e("Paddle, 2D, DOM, Color, Multiway").color("rgb(255,0,0)").attr({x:20,y:100,w:10,h:100}).multiway(4,{W:-90,S:90}),Crafty.e("Paddle, 2D, DOM, Color, Multiway").color("rgb(0,255,0)").attr({x:a-30,y:100,w:10,h:100}).multiway(4,{I:-90,K:90}),Crafty.e("2D, DOM, Color, Collision").color("rgb(0,0,255)").attr({x:a/2,y:b/2,w:10,h:10,dX:Crafty.math.randomInt(2,5),dY:Crafty.math.randomInt(2,5)}).bind("EnterFrame",function(){if(this.y<=0||this.y>=b-10)this.dY*=-1;this.x>a&&(this.x=a/2,Crafty("P1Points").each(function(){this.text(++this.points+" Points")})),this.x<10&&(this.x=a/2,Crafty("P2Points").each(function(){this.text(++this.points+" Points")})),this.x+=this.dX,this.y+=this.dY}).onHit("Paddle",function(){this.dX*=-1}),Crafty.e("P1Points, DOM, 2D, Text").attr({x:20,y:20,w:100,h:20,points:0}).text("0 Points"),Crafty.e("P2Points, DOM, 2D, Text").attr({x:a-120,y:20,w:100,h:20,points:0}).text("0 Points")}),Crafty.scene("menu",function(){var a=window.innerWidth,b=window.innerHeight;Crafty.background("#020");var c=a/2-75;Crafty.e("2D,DOM,Text").attr({w:c,h:20,x:150,y:120}).text("Pong!").css({"text-align":"center"}),Crafty.e("2D,DOM,Text,Mouse").attr({w:c,h:20,x:150,y:150}).text("Play!").css({"text-align":"center"}).bind("Click",function(){Crafty.scene("main")})}),Crafty.scene("loading",function(){var a=window.innerWidth,b=window.innerHeight;Crafty.load(["sprite.png","TreeUgly.png"],function(){Crafty.scene("menu")}),Crafty.background("#000");var c=a/2-75;Crafty.e("2D, DOM, Text").attr({w:c,h:20,x:150,y:120}).text("Loading").css({"text-align":"center"})}),Crafty.scene("loading");var requirejs,require,define;(function(a){function b(a,b){if(a&&a.charAt(0)==="."&&b){b=b.split("/"),b=b.slice(0,b.length-1),a=b.concat(a.split("/"));var c,d;for(c=0;d=a[c];c++)if(d===".")a.splice(c,1),c-=1;else if(d===".."){if(c===1&&(a[2]===".."||a[0]===".."))break;c>0&&(a.splice(c-1,2),c-=2)}a=a.join("/")}return a}function c(b,c){return function(){return l.apply(a,j.call(arguments,0).concat([b,c]))}}function d(a){return function(c){return b(c,a)}}function e(a){return function(b){h[a]=b}}function f(b){if(i.hasOwnProperty(b)){var c=i[b];delete i[b],k.apply(a,c)}return h[b]}function g(a,c){var e,g,h=a.indexOf("!");return h!==-1?(e=b(a.slice(0,h),c),a=a.slice(h+1),g=f(e),g&&g.normalize?a=g.normalize(a,d(c)):a=b(a,c)):a=b(a,c),{f:e?e+"!"+a:a,n:a,p:g}}var h={},i={},j=[].slice,k,l;if(typeof define=="function")return;k=function(b,d,j,k){var l=[],m,n,o,p,q,r;k||(k=b);if(typeof j=="function"){!d.length&&j.length&&(d=["require","exports","module"]);for(p=0;p<d.length;p++){r=g(d[p],k),o=r.f;if(o==="require")l[p]=c(b);else if(o==="exports")l[p]=h[b]={},m=!0;else if(o==="module")n=l[p]={id:b,uri:"",exports:h[b]};else if(h.hasOwnProperty(o)||i.hasOwnProperty(o))l[p]=f(o);else{if(!r.p)throw b+" missing "+o;r.p.load(r.n,c(k,!0),e(o),{}),l[p]=h[o]}}q=j.apply(h[b],l),b&&(n&&n.exports!==a?h[b]=n.exports:m||(h[b]=q))}else b&&(h[b]=j)},requirejs=l=function(b,c,d,e){return typeof b=="string"?f(g(b,c).f):(b.splice||(c.splice?(b=c,c=arguments[2]):b=[]),e?k(a,b,c,d):setTimeout(function(){k(a,b,c,d)},15),l)},l.config=function(){return l},require||(require=l),define=function(a,b,c){b.splice||(c=b,b=[]),define.unordered?i[a]=[a,b,c]:k(a,b,c)},define.amd={jQuery:!0}})(),define("almond",[],function(){}),function(a){function b(a){var b=document.createEvent("CustomEvent");b.initCustomEvent("fullscreenchange",!0,!1,null),document.dispatchEvent(b)}function c(a){var b=document.createEvent("CustomEvent");b.initCustomEvent("fullscreenerror",!0,!1,null),document.dispatchEvent(b)}function d(a){var b=document.createEvent("CustomEvent");b.initCustomEvent("pointerlockchange",!0,!1,null),document.dispatchEvent(b)}function e(a){var b=document.createEvent("CustomEvent");b.initCustomEvent("pointerlockerror",!0,!1,null),document.dispatchEvent(b)}var f=(a.HTMLElement||a.Element).prototype,g,h=a.GameShim={supports:{fullscreen:!0,pointerLock:!0,gamepad:!0,highResTimer:!0}};(function(){var a=0,b=["webkit","moz","ms","o"],c;for(c=0;c<b.length&&!window.requestAnimationFrame;++c)window.requestAnimationFrame=window[b[c]+"RequestAnimationFrame"];window.cancelAnimationFrame=window.cancelAnimationFrame||window.cancelRequestAnimationFrame;for(c=0;c<b.length&&!window.cancelAnimationFrame;++c)window.cancelAnimationFrame=window[b[c]+"CancelAnimationFrame"]||window[b[c]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(b,c){var d=Date.now(),e=Math.max(0,16-(d-a)),f=window.setTimeout(function(){b(d+e)},e);return a=d+e,f}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)}),window.animationStartTime||(g=function(){for(c=0;c<b.length;++c)if(window[b[c]+"AnimationStartTime"])return function(){return window[b[c]+"AnimationStartTime"]};return function(){return Date.now()}}(),Object.defineProperty(window,"animationStartTime",{enumerable:!0,configurable:!1,writeable:!1,get:g}))})(),document.hasOwnProperty("fullscreenEnabled")||(g=function(){return"webkitIsFullScreen"in document?function(){return webkitRequestFullScreen in document}:"mozFullScreenEnabled"in document?function(){return document.mozFullScreenEnabled}:(h.supports.fullscreen=!1,function(){return!1})}(),Object.defineProperty(document,"fullscreenEnabled",{enumerable:!0,configurable:!1,writeable:!1,get:g})),document.hasOwnProperty("fullscreenElement")||(g=function(){return"webkitFullscreenElement"in document?function(){return document.webkitFullscreenElement}:"mozFullScreenElement"in document?function(){return document.mozFullScreenElement}:function(){return null}}(),Object.defineProperty(document,"fullscreenElement",{enumerable:!0,configurable:!1,writeable:!1,get:g})),document.addEventListener("webkitfullscreenchange",b,!1),document.addEventListener("mozfullscreenchange",b,!1),document.addEventListener("webkitfullscreenerror",c,!1),document.addEventListener("mozfullscreenerror",c,!1),f.requestFullscreen||(f.requestFullscreen=function(){return f.webkitRequestFullScreen?function(){this.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)}:f.mozRequestFullScreen?function(){this.mozRequestFullScreen()}:function(){}}()),document.exitFullscreen||(document.exitFullscreen=function(){return document.webkitExitFullscreen||document.mozCancelFullScreen||function(){}}());var i=a.MouseEvent.prototype;"movementX"in i||Object.defineProperty(i,"movementX",{enumerable:!0,configurable:!1,writeable:!1,get:function(){return this.webkitMovementX||this.mozMovementX||0}}),"movementY"in i||Object.defineProperty(i,"movementY",{enumerable:!0,configurable:!1,writeable:!1,get:function(){return this.webkitMovementY||this.mozMovementY||0}}),navigator.pointer||(navigator.pointer=navigator.webkitPointer||navigator.mozPointer),document.addEventListener("webkitpointerlockchange",d,!1),document.addEventListener("webkitpointerlocklost",d,!1),document.addEventListener("mozpointerlockchange",d,!1),document.addEventListener("mozpointerlocklost",d,!1),document.addEventListener("webkitpointerlockerror",e,!1),document.addEventListener("mozpointerlockerror",e,!1),document.hasOwnProperty("pointerLockElement")||(g=function(){return"webkitPointerLockElement"in document?function(){return document.webkitPointerLockElement}:"mozPointerLockElement"in document?function(){return document.mozPointerLockElement}:function(){return null}}(),Object.defineProperty(document,"pointerLockElement",{enumerable:!0,configurable:!1,writeable:!1,get:g})),f.requestPointerLock||(f.requestPointerLock=function(){return f.webkitRequestPointerLock?function(){this.webkitRequestPointerLock()}:f.mozRequestPointerLock?function(){this.mozRequestPointerLock()}:navigator.pointer?function(){var a=this;navigator.pointer.lock(a,d,e)}:(h.supports.pointerLock=!1,function(){})}()),document.exitPointerLock||(document.exitPointerLock=function(){return document.webkitExitPointerLock||document.mozExitPointerLock||function(){if(navigator.pointer){var a=this;navigator.pointer.unlock()}}}()),navigator.gamepads||(g=function(){if("webkitGamepads"in navigator)return function(){return navigator.webkitGamepads};if("mozGamepads"in navigator)return function(){return navigator.mozGamepads};h.supports.gamepad=!1;var a=[];return function(){return a}}(),Object.defineProperty(navigator,"gamepads",{enumerable:!0,configurable:!1,writeable:!1,get:g})),window.performance||(window.performance={}),window.performance.timing||(window.performance.timing={navigationStart:Date.now()}),window.performance.now||(window.performance.now=function(){return window.performance.webkitNow?window.performance.webkitNow:(h.supports.highResTimer=!1,function(){return Date.now()-window.performance.timing.navigationStart})}())}(typeof exports!="undefined"?global:window),define("game-shim",function(){}),define("app/main",["require","game-shim"],function(a){a("game-shim")}),requirejs.config({baseUrl:"js/lib",paths:{app:"../app"}}),requirejs(["app/main"]),define("app",function(){})