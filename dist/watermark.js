!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("React")):"function"==typeof define&&define.amd?define("watermark",["React"],n):"object"==typeof exports?exports.watermark=n(require("React")):t.watermark=n(t.React)}(window,(function(t){return r={},n.m=e={"+Oj+":function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return v}));var r=e("rPUy"),i=e.n(r),o=e("eLKs"),a=e.n(o),c=e("cDcd"),u=e.n(c),s=e("IMrR"),f=e("379a"),d=e("8DNW"),l=e("i69Z"),h=e("pLGG"),p=e.n(h);window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};var v=function(t){function n(n){var e;return(e=t.call(this,n)||this).loadWaterMark=function(){var t=!0;Object(l.a)((function(){t&&e.waterMark(),t=null})),Object(l.b)("load",(function(){t&&e.waterMark(),t=null}))},e.login=n.login,e.code=n.code,e.canvas=u.a.createRef(),e.ie=!!window.ActiveXObject||"ActiveXObject"in window,e.draw=window.ActiveXObject?f.c:f.b,e.initWaterMark(),e.loadWaterMark(),e}!function(t,n){t.prototype=i()(n.prototype),(t.prototype.constructor=t).__proto__=n}(n,t);var e=n.prototype;return e.render=function(){return u.a.createElement("canvas",{className:p.a.waterMark,ref:this.canvas})},e.componentDidMount=function(){var t=this,n=a()(f.a).call(f.a,this);Object(l.b)("resize",Object(s.a)((function(){n()&&t.waterMark()}),200))},e.initWaterMark=function(){var t=this;if(this.can=this.canvas&&this.canvas.current,!this.can)return requestAnimationFrame((function(){t.initWaterMark()}));this.ctx||(this.ctx=this.can.getContext("2d"),this.ratio=Object(d.a)(this.ctx),this.w=100,this.h=80,this.waterMark())},e.waterMark=function(){if(!this.can)return this.initWaterMark(),!1;this.width=window.innerWidth||document.documentElement.clientWidth||document.documentElement.offsetHeight||document.body.clientWidth,this.height=window.innerHeight||document.documentElement.clientWidth||document.documentElement.offsetHeight||document.body.clientHeight,this.draw()},n}(u.a.PureComponent)},"/EgQ":function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},"1lkh":function(t,n,e){var r=e("cEKj"),i=e("doUz");(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.3.5",mode:r?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},"2SXh":function(t,n,e){e("pevS")({target:"Object",stat:!0,sham:!e("wbIY")},{create:e("SJYm")})},"379a":function(t,n,e){"use strict";function r(t){void 0===t&&(t=50);var n=window.innerWidth||document.documentElement.clientWidth||document.documentElement.offsetHeight||document.body.clientWidth,e=window.innerHeight||document.documentElement.clientWidth||document.documentElement.offsetHeight||document.body.clientHeight,r=this.width!==n,i=this.height>e+t||this.height<e-t;return r||i}function i(){var t=this.ctx;this.can.width=this.width*this.ratio,this.can.height=this.height*this.ratio,this.can.style.width=this.width-(this.ie?8:0)+"px",this.can.style.height=this.height-(this.ie?8:0)+"px",t.beginPath(),t.fillStyle="transparent",t.font="200 14px 微软雅黑",t.textAlign="center",t.globalAlpha=.8,t.textBaseline="middle",t.fillRect(0,0,this.width,this.height),t.fillStyle="#ccc",t.scale(this.ratio,this.ratio);for(var n=this.width/this.w|1,e=this.height/this.h|1,r=this.login||"",i=this.code||"",o=0;o<n;o+=2)for(var a=0;a<e;a+=2)t.save(),t.translate(this.w*o,this.h*a),t.rotate(-15*Math.PI/180),t.fillText(r,this.w/2,36),t.fillText(i,this.w/2,54),t.restore()}function o(){var t=this.width/this.w|1,n=this.height/this.h|1,e=this.login||"",r=this.code||"",i=document.querySelector("#svgWaterMark");i||((i=document.createElementNS("http://www.w3.org/2000/svg","svg")).setAttribute("id","svgWaterMark"),i.setAttribute("xmlns","http://www.w3.org/2000/svg"),i.setAttribute("version","1.1")),i.setAttribute("style","pointer-events:none;position:absolute;top:0;left:0;right:0;bottom:0;z-index:200;font-weight:200;height:"+this.height+"px;width:100%;");for(var o=document.createDocumentFragment(),a=0;a<t;a+=2)for(var c=0;c<n;c+=2){var u=String(this.w*a),s=this.h*c,f=document.createElementNS("http://www.w3.org/2000/svg","text");f.setAttribute("x",u),f.setAttribute("y",String(40+s)),f.setAttribute("transform","rotate(-15 "+u+","+s+")"),f.setAttribute("fill","#ccc");var d=document.createElementNS("http://www.w3.org/2000/svg","tspan");d.textContent=e;var l=document.createElementNS("http://www.w3.org/2000/svg","tspan");l.textContent=r,l.setAttribute("x",u),l.setAttribute("y",String(60+s)),f.appendChild(d),f.appendChild(l),o.appendChild(f)}i.innerHTML="",i.appendChild(o),document.body.appendChild(i)}e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o}))},"39uu":function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},"6dl6":function(t,n,e){"use strict";var r=e("zJQS"),i=e("39uu"),o=[].slice,a={};t.exports=Function.bind||function(t){var n=r(this),e=o.call(arguments,1),c=function(){var r=e.concat(o.call(arguments));return this instanceof c?function(t,n,e){if(!(n in a)){for(var r=[],i=0;i<n;i++)r[i]="a["+i+"]";a[n]=Function("C,a","return new C("+r.join(",")+")")}return a[n](t,e)}(n,r.length,r):n.apply(t,r)};return i(n.prototype)&&(c.prototype=n.prototype),c}},"7b0v":function(t,n,e){var r=e("mIMY");t.exports=r("document","documentElement")},"8DNW":function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e("ZbhI");var r=function(t){return void 0===t&&(t={}),(window.devicePixelRatio||1)/(t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1)}},"9EaA":function(t,n,e){e("2SXh");var r=e("dktu").Object;t.exports=function(t,n){return r.create(t,n)}},"9Mno":function(t,n,e){var r=e("O3vZ"),i=Array.prototype;t.exports=function(t){var n=t.indexOf;return t===i||t instanceof Array&&n===i.indexOf?r:n}},AnMC:function(t,n,e){var r=e("wbIY"),i=e("QYBB"),o=e("LGyv");t.exports=r?function(t,n,e){return i.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},BsL6:function(t,n,e){"use strict";e.r(n);var r=e("eLKs"),i=e.n(r),o=e("IMrR"),a=e("379a"),c=e("8DNW"),u=e("i69Z");window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};var s={name:"WaterMark",data:function(){return{}},props:{login:{type:[String,Number,Array,Object],required:!0},code:{type:[String,Number],default:""}},beforeCreate:function(){this.ie=!!window.ActiveXObject||"ActiveXObject"in window,this.draw=window.ActiveXObject?a.c:a.b},created:function(){var t=this,n=!0;Object(u.a)((function(){n&&t.waterMark(),n=null})),Object(u.b)("load",(function(){n&&t.waterMark(),n=null}))},mounted:function(){var t=this,n=i()(a.a).call(a.a,this);Object(u.b)("resize",Object(o.a)((function(){n()&&t.waterMark()}),200))},methods:{initWaterMark:function(){var t=this;if(this.can=this.$refs.canvas,!this.can)return requestAnimationFrame((function(){t.initWaterMark()}));this.ctx||(this.ctx=this.can.getContext("2d"),this.ratio=Object(c.a)(this.ctx),this.w=100,this.h=80,this.waterMark())},waterMark:function(){if(!this.can)return this.initWaterMark(),!1;this.width=window.innerWidth||document.documentElement.clientWidth||document.documentElement.offsetHeight||document.body.clientWidth,this.height=window.innerHeight||document.documentElement.clientWidth||document.documentElement.offsetHeight||document.body.clientHeight,this.draw()}}},f=e("z30F"),d=function(t,n,e,r,i,o,a,c){var u,s="function"==typeof t?t.options:t;if(n&&(s.render=n,s.staticRenderFns=[],s._compiled=!0),s._scopeId="data-v-"+o,i&&(u=i),u)if(s.functional){s._injectStyles=u;var f=s.render;s.render=function(t,n){return u.call(n),f(t,n)}}else{var d=s.beforeCreate;s.beforeCreate=d?[].concat(d,u):[u]}return{exports:t,options:s}}(s,(function(){var t=this.$createElement;return(this._self._c||t)("canvas",{ref:"canvas",class:this.$style.waterMark})}),0,0,(function(t){this.$style=f.default.locals||f.default}),"070ba52c").exports;e.d(n,"install",(function(){return h})),e.d(n,"VueWaterMark",(function(){return d})),d.install=function(t){t.component(d.name,d)};var l,h=(l=d,function(t,n){void 0===n&&(n={}),t.component(l.name,l)});"undefined"!=typeof window&&window.Vue&&h(window.Vue),n.default=d},Bvq2:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},CGYG:function(t,n,e){(n=t.exports=e("JPst")(!1)).push([t.i,".watermark__waterMark-2yj37[data-v-070ba52c] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 99;\n  pointer-events: none;\n  /* IE 6/7/8/9/10 */\n  z-index: -99 \\8\\9\\0;\n  z-index: -99 \\9;\n}\n",""]),n.locals={waterMark:"watermark__waterMark-2yj37"}},FWHo:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(0<t?r:e)(t)}},GHVm:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},GUr9:function(t,n,e){var r=e("zJQS");t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,i){return t.call(n,e,r,i)}}return function(){return t.apply(n,arguments)}}},IMrR:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e("Kwsy"),i=e.n(r);function o(t,n){void 0===t&&(t=console.log),void 0===n&&(n=500);var e=null;return function(){null!==e&&clearTimeout(e),e=i()(t,n)}}},Ibh0:function(t,n,e){e("pevS")({target:"Function",proto:!0},{bind:e("6dl6")})},J6x8:function(t,n,e){t.exports=e("9Mno")},JPst:function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=function(t,n){var e=t[1]||"",r=t[3];if(!r)return e;if(n&&"function"==typeof btoa){var i=function(t){var n=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),e="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n);return"/*# ".concat(e," */")}(r),o=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot).concat(t," */")}));return[e].concat(o).concat([i]).join("\n")}return[e].join("\n")}(n,t);return n[2]?"@media ".concat(n[2],"{").concat(e,"}"):e})).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(var a=0;a<t.length;a++){var c=t[a];null!=c[0]&&r[c[0]]||(e&&!c[2]?c[2]=e:e&&(c[2]="(".concat(c[2],") and (").concat(e,")")),n.push(c))}},n}},Kwsy:function(t,n,e){t.exports=e("br0Y")},LGyv:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},LboF:function(t,n,e){"use strict";var r,i,o={},a=(i={},function(t){if(void 0===i[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}i[t]=n}return i[t]});function c(t,n){for(var e=[],r={},i=0;i<t.length;i++){var o=t[i],a=n.base?o[0]+n.base:o[0],c={css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(c):e.push(r[a]={id:a,parts:[c]})}return e}function u(t,n){for(var e=0;e<t.length;e++){var r=t[e],i=o[r.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(v(r.parts[a],n))}else{for(var c=[];a<r.parts.length;a++)c.push(v(r.parts[a],n));o[r.id]={id:r.id,refs:1,parts:c}}}}function s(t){var n=document.createElement("style");if(void 0===t.attributes.nonce){var r=e.nc;r&&(t.attributes.nonce=r)}if(Object.keys(t.attributes).forEach((function(e){n.setAttribute(e,t.attributes[e])})),"function"==typeof t.insert)t.insert(n);else{var i=a(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var f,d=(f=[],function(t,n){return f[t]=n,f.filter(Boolean).join("\n")});function l(t,n,e,r){var i=e?"":r.css;if(t.styleSheet)t.styleSheet.cssText=d(n,i);else{var o=document.createTextNode(i),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(o,a[n]):t.appendChild(o)}}var h=null,p=0;function v(t,n){var e,r,i;if(n.singleton){var o=p++;e=h=h||s(n),r=l.bind(null,e,o,!1),i=l.bind(null,e,o,!0)}else e=s(n),r=function(t,n,e){var r=e.css,i=e.media,o=e.sourceMap;if(i&&t.setAttribute("media",i),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}.bind(null,e,n),i=function(){!function(t){null!==t.parentNode&&t.parentNode.removeChild(t)}(e)};return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else i()}}t.exports=function(t,n){(n=n||{}).attributes="object"==typeof n.attributes?n.attributes:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var e=c(t,n);return u(e,n),function(t){for(var r=[],i=0;i<e.length;i++){var a=e[i],s=o[a.id];s&&(s.refs--,r.push(s))}t&&u(c(t,n),n);for(var f=0;f<r.length;f++){var d=r[f];if(0===d.refs){for(var l=0;l<d.parts.length;l++)d.parts[l]();delete o[d.id]}}}}},M5eE:function(t,n,e){"use strict";var r=e("Bvq2");t.exports=function(t,n){var e=[][t];return!e||!r((function(){e.call(null,n||function(){throw 1},1)}))}},MycS:function(t,n,e){e("Ibh0");var r=e("oWnS");t.exports=r("Function").bind},O3vZ:function(t,n,e){e("u+ON");var r=e("oWnS");t.exports=r("Array").indexOf},OsYe:function(t,n,e){(function(n){function e(t){return t&&t.Math==Math&&t}t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e("yLpj"))},PoCt:function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},QYBB:function(t,n,e){var r=e("wbIY"),i=e("d7IX"),o=e("b42z"),a=e("cWgI"),c=Object.defineProperty;n.f=r?c:function(t,n,e){if(o(t),n=a(n,!0),o(e),i)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},RALh:function(t,n,e){t.exports=e("9EaA")},RLqH:function(t,n,e){var r=e("wbIY"),i=e("cEPT"),o=e("LGyv"),a=e("pCEo"),c=e("cWgI"),u=e("eOcF"),s=e("d7IX"),f=Object.getOwnPropertyDescriptor;n.f=r?f:function(t,n){if(t=a(t),n=c(n,!0),s)try{return f(t,n)}catch(t){}if(u(t,n))return o(!i.f.call(t,n),t[n])}},RQhY:function(t,n,e){var r=e("FWHo"),i=Math.max,o=Math.min;t.exports=function(t,n){var e=r(t);return e<0?i(e+n,0):o(e,n)}},SJYm:function(t,n,e){function r(){}var i=e("b42z"),o=e("wjB2"),a=e("nleh"),c=e("bpon"),u=e("7b0v"),s=e("ejc7"),f=e("su3n")("IE_PROTO"),d="prototype",l=function(){var t,n=s("iframe"),e=a.length;for(n.style.display="none",u.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),l=t.F;e--;)delete l[d][a[e]];return l()};t.exports=Object.create||function(t,n){var e;return null!==t?(r[d]=i(t),e=new r,r[d]=null,e[f]=t):e=l(),void 0===n?e:o(e,n)},c[f]=!0},Y4Ys:function(t,n,e){function r(t){return function(n,e,r){var c,u=i(n),s=o(u.length),f=a(r,s);if(t&&e!=e){for(;f<s;)if((c=u[f++])!=c)return!0}else for(;f<s;f++)if((t||f in u)&&u[f]===e)return t||f||0;return!t&&-1}}var i=e("pCEo"),o=e("ZyXh"),a=e("RQhY");t.exports={includes:r(!0),indexOf:r(!1)}},Y4yM:function(t,n,e){var r=e("Bvq2"),i=e("/EgQ"),o="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?o.call(t,""):Object(t)}:Object},ZbhI:function(t,n,e){t.exports=e("J6x8")},ZyXh:function(t,n,e){var r=e("FWHo"),i=Math.min;t.exports=function(t){return 0<t?i(r(t),9007199254740991):0}},b42z:function(t,n,e){var r=e("39uu");t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},bpon:function(t,n){t.exports={}},br0Y:function(t,n,e){e("xahd"),t.exports=e("dktu").setTimeout},cDcd:function(n,e){n.exports=t},cEKj:function(t,n){t.exports=!0},cEPT:function(t,n,e){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);n.f=o?function(t){var n=i(this,t);return!!n&&n.enumerable}:r},cWgI:function(t,n,e){var r=e("39uu");t.exports=function(t,n){if(!r(t))return t;var e,i;if(n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;if("function"==typeof(e=t.valueOf)&&!r(i=e.call(t)))return i;if(!n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},d7IX:function(t,n,e){var r=e("wbIY"),i=e("Bvq2"),o=e("ejc7");t.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},dktu:function(t,n){t.exports={}},doUz:function(t,n,e){var r=e("OsYe"),i=e("j60x"),o="__core-js_shared__",a=r[o]||i(o,{});t.exports=a},eLKs:function(t,n,e){t.exports=e("tbMQ")},eOcF:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},ejc7:function(t,n,e){var r=e("OsYe"),i=e("39uu"),o=r.document,a=i(o)&&i(o.createElement);t.exports=function(t){return a?o.createElement(t):{}}},"h0T/":function(t,n,e){(n=t.exports=e("JPst")(!1)).push([t.i,".index__waterMark-3K7Mv {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 99;\n  pointer-events: none;\n  /* IE 6/7/8/9/10 */\n  z-index: -99 \\8\\9\\0;\n  z-index: -99 \\9;\n}\n",""]),n.locals={waterMark:"index__waterMark-3K7Mv"}},i69Z:function(t,n,e){"use strict";function r(t,n,e,r,i){return t[n](e,r,i)}e.d(n,"b",(function(){return i})),e.d(n,"a",(function(){return a}));var i=window.addEventListener?function(t,n,e,i){void 0===i&&(i=!1);var o=!(!t||!t.addEventListener);r(o?t:window,"addEventListener",o?n:t,o?e:n,i)}:function(t,n,e){var i=!(!t||!t.attachEvent);r(i?t:window,"attachEvent",n,i?e:n)},o=window.removeEventListener?function(t,n,e){var i=!(!t||!t.removeEventListener);r(i?t:window,"removeEventListener",i?n:t,i?e:n)}:function(t,n,e){var i=!(!t||!t.detachEvent);r(i?t:window,"detachEvent",n,i?e:n)},a=function(t){var n;window.addEventListener?(n=function(){t&&t(),o("DOMContentLoaded",n)},i("DOMContentLoaded",t,!1)):i("readystatechange",n=function(){"complete"==document.readyState&&(t&&t(),o("readystatechange",n))})}},j60x:function(t,n,e){var r=e("OsYe"),i=e("AnMC");t.exports=function(t,n){try{i(r,t,n)}catch(e){r[t]=n}return n}},jP1q:function(t,n,e){"use strict";e.r(n);var r=e("eLKs"),i=e.n(r),o=e("IMrR"),a=e("pLGG"),c=e.n(a),u=e("379a"),s=e("8DNW"),f=e("i69Z");function d(t){if(void 0===t&&(t={}),t&&"object"==typeof t)return this instanceof d?this.init(t):new d(t)}window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},d.prototype={constructor:d,canvas:document.createElement("canvas"),init:function(t){document.body.appendChild(this.canvas),this.login=t.login,this.code=t.code,this.ie=!!window.ActiveXObject||"ActiveXObject"in window,this.draw=window.ActiveXObject?u.c:u.b,this.canvas.className=c.a.waterMark,this.initWaterMark(),this.loadWaterMark()},initWaterMark:function(){var t=this;if(this.can=this.canvas,!this.can)return requestAnimationFrame((function(){t.initWaterMark()}));this.ctx||(this.ctx=this.can.getContext("2d"),this.ratio=Object(s.a)(this.ctx),this.w=100,this.h=80,this.waterMark())},loadWaterMark:function(){var t=this,n=!0;Object(f.a)((function(){n&&t.waterMark(),n=null})),Object(f.b)("load",(function(){n&&t.waterMark(),n=null}));var e=i()(u.a).call(u.a,this);Object(f.b)("resize",Object(o.a)((function(){e()&&t.waterMark()}),200))},waterMark:function(){if(!this.can)return this.initWaterMark(),!1;this.width=window.innerWidth||document.documentElement.clientWidth||document.documentElement.offsetHeight||document.body.clientWidth,this.height=window.innerHeight||document.documentElement.clientWidth||document.documentElement.offsetHeight||document.body.clientHeight,this.draw()}},n.default=d},jP3w:function(t,n,e){var r=e("MycS"),i=Function.prototype;t.exports=function(t){var n=t.bind;return t===i||t instanceof Function&&n===i.bind?r:n}},mIMY:function(t,n,e){function r(t){return"function"==typeof t?t:void 0}var i=e("dktu"),o=e("OsYe");t.exports=function(t,n){return arguments.length<2?r(i[t])||r(o[t]):i[t]&&i[t][n]||o[t]&&o[t][n]}},nleh:function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},oBZR:function(t,n,e){var r=e("syO3"),i=e("nleh");t.exports=Object.keys||function(t){return r(t,i)}},oOVA:function(t,n,e){function r(t,n){var e=c[a(t)];return e==s||e!=u&&("function"==typeof n?i(n):!!n)}var i=e("Bvq2"),o=/#|\.prototype\./,a=r.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=r.data={},u=r.NATIVE="N",s=r.POLYFILL="P";t.exports=r},oWnS:function(t,n,e){var r=e("dktu");t.exports=function(t){return r[t+"Prototype"]}},pCEo:function(t,n,e){var r=e("Y4yM"),i=e("GHVm");t.exports=function(t){return r(i(t))}},pLGG:function(t,n,e){var r=e("h0T/");"string"==typeof r&&(r=[[t.i,r,""]]);e("LboF")(r,{insert:"head",singleton:!1}),r.locals&&(t.exports=r.locals)},pevS:function(t,n,e){"use strict";function r(t){function n(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)}return n.prototype=t.prototype,n}var i=e("OsYe"),o=e("RLqH").f,a=e("oOVA"),c=e("dktu"),u=e("GUr9"),s=e("AnMC"),f=e("eOcF");t.exports=function(t,n){var e,d,l,h,p,v,w,m,b=t.target,y=t.global,g=t.stat,x=t.proto,M=y?i:g?i[b]:(i[b]||{}).prototype,j=y?c:c[b]||(c[b]={}),O=j.prototype;for(l in n)e=!a(y?l:b+(g?".":"#")+l,t.forced)&&M&&f(M,l),p=j[l],e&&(v=t.noTargetGet?(m=o(M,l))&&m.value:M[l]),h=e&&v?v:n[l],e&&typeof p==typeof h||(w=t.bind&&e?u(h,i):t.wrap&&e?r(h):x&&"function"==typeof h?u(Function.call,h):h,(t.sham||h&&h.sham||p&&p.sham)&&s(w,"sham",!0),j[l]=w,x&&(f(c,d=b+"Prototype")||s(c,d,{}),c[d][l]=h,t.real&&O&&!O[l]&&s(O,l,h)))}},rPUy:function(t,n,e){t.exports=e("RALh")},rpxL:function(t,n,e){var r=e("CGYG");"string"==typeof r&&(r=[[t.i,r,""]]);e("LboF")(r,{insert:"head",singleton:!1}),r.locals&&(t.exports=r.locals)},su3n:function(t,n,e){var r=e("1lkh"),i=e("PoCt"),o=r("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},syO3:function(t,n,e){var r=e("eOcF"),i=e("pCEo"),o=e("Y4Ys").indexOf,a=e("bpon");t.exports=function(t,n){var e,c=i(t),u=0,s=[];for(e in c)!r(a,e)&&r(c,e)&&s.push(e);for(;n.length>u;)r(c,e=n[u++])&&(~o(s,e)||s.push(e));return s}},tbMQ:function(t,n,e){t.exports=e("jP3w")},tjUo:function(t,n,e){"use strict";e.r(n);var r=e("+Oj+");e.d(n,"ReactWaterMark",(function(){return r.default}));var i=e("BsL6");e.d(n,"VueWaterMark",(function(){return i.default}));var o=e("jP1q");e.d(n,"NativeWaterMark",(function(){return o.default})),n.default=r.default},"u+ON":function(t,n,e){"use strict";var r=e("pevS"),i=e("Y4Ys").indexOf,o=e("M5eE"),a=[].indexOf,c=!!a&&1/[1].indexOf(1,-0)<0,u=o("indexOf");r({target:"Array",proto:!0,forced:c||u},{indexOf:function(t,n){return c?a.apply(this,arguments)||0:i(this,t,1<arguments.length?n:void 0)}})},wbIY:function(t,n,e){var r=e("Bvq2");t.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},wjB2:function(t,n,e){var r=e("wbIY"),i=e("QYBB"),o=e("b42z"),a=e("oBZR");t.exports=r?Object.defineProperties:function(t,n){o(t);for(var e,r=a(n),c=r.length,u=0;u<c;)i.f(t,e=r[u++],n[e]);return t}},xLjh:function(t,n,e){var r=e("mIMY");t.exports=r("navigator","userAgent")||""},xahd:function(t,n,e){function r(t){return function(n,e){var r=2<arguments.length,i=r?c.call(arguments,2):void 0;return t(r?function(){("function"==typeof n?n:Function(n)).apply(this,i)}:n,e)}}var i=e("pevS"),o=e("OsYe"),a=e("xLjh"),c=[].slice;i({global:!0,bind:!0,forced:/MSIE .\./.test(a)},{setTimeout:r(o.setTimeout),setInterval:r(o.setInterval)})},yLpj:function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},z30F:function(t,n,e){"use strict";var r=e("rpxL"),i=e.n(r);n.default=i.a},zJQS:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}}},n.c=r,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(n){return t[n]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="./",n(n.s="tjUo");function n(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var e,r}));
//# sourceMappingURL=watermark.js.map