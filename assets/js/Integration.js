!function(o,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Integration=e():o.Integration=e()}(window,(function(){return function(o){var e={};function n(t){if(e[t])return e[t].exports;var r=e[t]={i:t,l:!1,exports:{}};return o[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=o,n.c=e,n.d=function(o,e,t){n.o(o,e)||Object.defineProperty(o,e,{enumerable:!0,get:t})},n.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},n.t=function(o,e){if(1&e&&(o=n(o)),8&e)return o;if(4&e&&"object"==typeof o&&o&&o.__esModule)return o;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:o}),2&e&&"string"!=typeof o)for(var r in o)n.d(t,r,function(e){return o[e]}.bind(null,r));return t},n.n=function(o){var e=o&&o.__esModule?function(){return o.default}:function(){return o};return n.d(e,"a",e),e},n.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)},n.p="",n(n.s=70)}({70:function(o,e,n){"use strict";var t=Integration_LocalConst.INIT.General,r=Integration_LocalConst.INIT.handsome;window.randomColor=function(){return"rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"},window.getTimeState=function(){var o="",e=(new Date).getHours();return e>=0&&e<=10?o="早上好，永远年轻，永远热泪盈眶！":e>10&&e<=14?o="中午好，睡会儿午觉吧！":e>14&&e<=18?o="下午好，是时候打个盹了！":e>18&&e<=24&&(o="晚上好，注意早点休息！"),o},$((function(){HoerMouse(),ReturnTop(),ActivatePowerModes(),Integration_LocalConst.GET_THEME&&(new Function(r)(),setCopyright(Integration_LocalConst.COPYRIGHT_TYPE)),new Function(t)()})),console.log("\n %c Integration v".concat("1.9.0"," ").concat("1b70dbd"," %c by Stars_Kim | blog.starskim.cn \n"),"color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;"),console.log("\n %c 炫彩鼠标插件 https://gitee.com/HoeXhe/HoerMouse %c www.hoehub.com 😊 HoerMouse By Hoe \n","font-family:'Microsoft YaHei','SF Pro Display',Roboto,Noto,Arial,'PingFang SC',sans-serif;color:white;background:#ffa099;padding:5px 0;","font-family:'Microsoft YaHei','SF Pro Display',Roboto,Noto,Arial,'PingFang SC',sans-serif;color:#ffa099;background:#404040;padding:5px 0;")}})}));