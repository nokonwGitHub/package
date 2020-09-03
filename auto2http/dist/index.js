/*! For license information please see index.js.LICENSE.txt */
!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./",n(n.s=3)}([function(t,e,n){var r=n(5),o=n(6),i=n(7),c=n(9);t.exports=function(t,e){return r(t)||o(t,e)||i(t,e)||c()}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},function(t,e,n){"use strict";n.r(e),function(t,e){var r=n(0),o=n.n(r),i=n(1),c=n.n(i),a=n(2),u=n.n(a);Object.defineProperty(exports,"__esModule",{value:!0});var s=n(10),f=n(11),l=n(12),p=n(14),h=n(17),d=l.join(t,"./api_list.d.ts");f.locale("zh-cn"),e.exports=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.hostname,r=void 0===n?"localhost":n,o=e.port,i=void 0===o?3306:o,a=e.httpRoot,u=void 0===a?"":a,f=e.defaultHeader,l=void 0===f?h:f;c()(this,t);try{s.readdirSync(u)}catch(t){throw TypeError("httpRoot必须为一个绝对路径")}this.hostname=r,this.port=i,this.httpRoot=u,this.defaultHeader=l,this.header={},this.list=[]}return u()(t,[{key:"setHeader",value:function(t){for(var e=0,n=Object.entries(this.defaultHeader);e<n.length;e++){var r=o()(n[e],2),i=r[0],c=r[1];this.header[i]||(this.header[i]=c)}}},{key:"apiList",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"w";this.list=e,n&&(this.flag=!0===n?"w":n,this.list.forEach((function(e){t.one(e)})))}},{key:"createApi",value:function(t){var e=t.plugins,n=t.callback,r=t.app;this.list.forEach((function(t){r[t.method](t.path,t.handler(e))})),n(r)}},{key:"one",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.method,n=void 0===e?"GET":e,r=t.path,i=void 0===r?"/test":r,c=t.header,a=void 0===c?{"Content-Type":"application/json",Accept:"application/json"}:c,u=t.params,l=void 0===u?{}:u,h=t.data,d=void 0===h?{}:h,v=t.description,y=void 0===v?"默认描述":v,g=i;g.indexOf("/",1)>0&&(g=i.substring(0,i.indexOf("/",1)));var b="";this.setHeader(a);for(var m=0,j=Object.entries(a);m<j.length;m++){var w=o()(j[m],2),x=w[0],O=w[1];b+="".concat(x,": ").concat(O,"\n")}var A=this.httpRoot+g+".http";l=p.unescape(l instanceof Object?p.stringify(l):l),s.writeFile(A,"\n###  生成时间 ".concat(f().format("LLLL"),"\n###  描述：").concat(y,"\n").concat(n.toUpperCase()," http://").concat(this.hostname,":").concat(this.port+i).concat(l.length>1?"?"+l:"","\n").concat(b,"         \n").concat(JSON.stringify(d,null,2),"\n###\n"),{flag:String(this.flag),encoding:"utf-8"},(function(t){if(t)throw TypeError("".concat(i," 插入错误"))}))}}],[{key:"createApiDict",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];try{s.readdirSync(t)}catch(t){throw TypeError("pathName必须为一个绝对路径")}var r={},o=[];n(18).exec;!function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=s.readdirSync(e);return r.forEach((function(r,o){var i=l.join(e,r);s.statSync(i).isDirectory()?t(l.join(e,r),n):".js"===l.extname(i)&&n.push(i)})),n}(t,o);var i=" ",c="";o.forEach((function(e){var o=e.substring(t.length);o=(o=o.substring(0,o.length-3)).replace(new RegExp("\\\\","gm"),"/"),r[o]=n(19)(e),i+="'".concat(o,"'|"),c+="     '".concat(o,"'?:(config:object|undefined) => (req, res) => {};\n")})),i+="string",i=e?i:"string",c=e?c:"";s.writeFileSync(d,"interface Api_list {\n".concat(c,"         \n}\n\ninterface ApiList {\n   path?: ").concat(i,",\n}"),{encoding:"utf-8"});return r}},{key:"main",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.defaultHeader,r=e.hostname,o=e.httpRoot,i=e.port,c=e.apiList,a=e.flag,u=new t({defaultHeader:n,hostname:r,httpRoot:o,port:i});return u.apiList(c,a),u}}]),t}()}.call(this,"/",n(4)(t))},function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var c,a=t[Symbol.iterator]();!(r=(c=a.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}}},function(t,e,n){var r=n(8);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,e){t.exports=require("fs")},function(t,e){t.exports=require("moment")},function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var o=t[r];"."===o?t.splice(r,1):".."===o?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",o=!1,i=arguments.length-1;i>=-1&&!o;i--){var c=i>=0?arguments[i]:t.cwd();if("string"!=typeof c)throw new TypeError("Arguments to path.resolve must be strings");c&&(e=c+"/"+e,o="/"===c.charAt(0))}return(o?"/":"")+(e=n(r(e.split("/"),(function(t){return!!t})),!o).join("/"))||"."},e.normalize=function(t){var i=e.isAbsolute(t),c="/"===o(t,-1);return(t=n(r(t.split("/"),(function(t){return!!t})),!i).join("/"))||i||(t="."),t&&c&&(t+="/"),(i?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(r(t,(function(t,e){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length&&""===t[e];e++);for(var n=t.length-1;n>=0&&""===t[n];n--);return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var o=r(t.split("/")),i=r(n.split("/")),c=Math.min(o.length,i.length),a=c,u=0;u<c;u++)if(o[u]!==i[u]){a=u;break}var s=[];for(u=a;u<o.length;u++)s.push("..");return(s=s.concat(i.slice(a))).join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!=typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,o=!0,i=t.length-1;i>=1;--i)if(47===(e=t.charCodeAt(i))){if(!o){r=i;break}}else o=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=function(t){"string"!=typeof t&&(t+="");var e,n=0,r=-1,o=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!o){n=e+1;break}}else-1===r&&(o=!1,r=e+1);return-1===r?"":t.slice(n,r)}(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!=typeof t&&(t+="");for(var e=-1,n=0,r=-1,o=!0,i=0,c=t.length-1;c>=0;--c){var a=t.charCodeAt(c);if(47!==a)-1===r&&(o=!1,r=c+1),46===a?-1===e?e=c:1!==i&&(i=1):-1!==e&&(i=-1);else if(!o){n=c+1;break}}return-1===e||-1===r||0===i||1===i&&e===r-1&&e===n+1?"":t.slice(e,r)};var o="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n(13))},function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:c}catch(t){r=c}}();var u,s=[],f=!1,l=-1;function p(){f&&u&&(f=!1,u.length?s=u.concat(s):l=-1,s.length&&h())}function h(){if(!f){var t=a(p);f=!0;for(var e=s.length;e;){for(u=s,s=[];++l<e;)u&&u[l].run();l=-1,e=s.length}u=null,f=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===c||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function v(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new d(t,e)),1!==s.length||f||a(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e,n){"use strict";e.decode=e.parse=n(15),e.encode=e.stringify=n(16)},function(t,e,n){"use strict";function r(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,n,i){e=e||"&",n=n||"=";var c={};if("string"!=typeof t||0===t.length)return c;var a=/\+/g;t=t.split(e);var u=1e3;i&&"number"==typeof i.maxKeys&&(u=i.maxKeys);var s=t.length;u>0&&s>u&&(s=u);for(var f=0;f<s;++f){var l,p,h,d,v=t[f].replace(a,"%20"),y=v.indexOf(n);y>=0?(l=v.substr(0,y),p=v.substr(y+1)):(l=v,p=""),h=decodeURIComponent(l),d=decodeURIComponent(p),r(c,h)?o(c[h])?c[h].push(d):c[h]=[c[h],d]:c[h]=d}return c};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},function(t,e,n){"use strict";var r=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,n,a){return e=e||"&",n=n||"=",null===t&&(t=void 0),"object"==typeof t?i(c(t),(function(c){var a=encodeURIComponent(r(c))+n;return o(t[c])?i(t[c],(function(t){return a+encodeURIComponent(r(t))})).join(e):a+encodeURIComponent(r(t[c]))})).join(e):a?encodeURIComponent(r(a))+n+encodeURIComponent(r(t)):""};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function i(t,e){if(t.map)return t.map(e);for(var n=[],r=0;r<t.length;r++)n.push(e(t[r],r));return n}var c=Object.keys||function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}},function(t,e){t.exports={"Content-Type":"application/json",Accept:"application/json"}},function(t,e){t.exports=require("child_process")},function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=19}]);
//# sourceMappingURL=index.js.map