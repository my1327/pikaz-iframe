(function(i){function n(n){for(var e,o,a=n[0],c=n[1],s=n[2],v=0,u=[];v<a.length;v++)o=a[v],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&u.push(r[o][0]),r[o]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(i[e]=c[e]);l&&l(n);while(u.length)u.shift()();return d.push.apply(d,s||[]),t()}function t(){for(var i,n=0;n<d.length;n++){for(var t=d[n],e=!0,a=1;a<t.length;a++){var c=t[a];0!==r[c]&&(e=!1)}e&&(d.splice(n--,1),i=o(o.s=t[0]))}return i}var e={},r={app:0},d=[];function o(n){if(e[n])return e[n].exports;var t=e[n]={i:n,l:!1,exports:{}};return i[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=i,o.c=e,o.d=function(i,n,t){o.o(i,n)||Object.defineProperty(i,n,{enumerable:!0,get:t})},o.r=function(i){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},o.t=function(i,n){if(1&n&&(i=o(i)),8&n)return i;if(4&n&&"object"===typeof i&&i&&i.__esModule)return i;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:i}),2&n&&"string"!=typeof i)for(var e in i)o.d(t,e,function(n){return i[n]}.bind(null,e));return t},o.n=function(i){var n=i&&i.__esModule?function(){return i["default"]}:function(){return i};return o.d(n,"a",n),n},o.o=function(i,n){return Object.prototype.hasOwnProperty.call(i,n)},o.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=n,a=a.slice();for(var s=0;s<a.length;s++)n(a[s]);var l=c;d.push(["6b90","chunk-vendors"]),t()})({5295:function(i,n,t){},"6b90":function(i,n,t){"use strict";t.r(n);var e=t("2b0e"),r=function(){var i=this,n=i.$createElement,t=i._self._c||n;return t("div",{attrs:{id:"app"}},[t("example")],1)},d=[],o=function(){var i=this,n=i.$createElement,t=i._self._c||n;return t("div",{staticClass:"layout"},[t("div",{staticClass:"layout-item"},[t("h4",[i._v("传入url")]),t("div",{staticClass:"demo"},[t("pikaz-iframe",{attrs:{"onpikaz-iframeload":i.onload(1),src:i.src}})],1)]),t("div",{staticClass:"layout-item"},[t("h4",[i._v("传入html内容")]),t("div",{staticClass:"demo"},[t("pikaz-iframe",{attrs:{onload:i.onload(2),srcdoc:i.srcdoc}})],1)]),t("div",{staticClass:"layout-item"},[t("h4",[i._v("传入html内容并隐藏滚动条")]),t("div",{staticClass:"demo"},[t("pikaz-iframe",{attrs:{onload:i.onload(3),srcdoc:i.srcdoc,hideScrolling:!0}})],1)]),t("div",{staticClass:"layout-item"},[t("h4",[i._v("传入html内容并修改样式")]),t("div",{staticClass:"demo"},[t("pikaz-iframe",{attrs:{onload:i.onload(4),srcdoc:i.srcdoc,css:i.css}})],1)]),t("div",{staticClass:"layout-item"},[t("h4",[i._v("添加loading")]),t("div",{staticClass:"demo"},[t("pikaz-iframe",{attrs:{onload:i.onload(5),src:i.src}},[t("div",{staticClass:"loading"},[i._v("加载中")])])],1)])])},a=[],c=function(){var i=this,n=i.$createElement,t=i._self._c||n;return t("div",{attrs:{id:"pikaz-iframe-container"}},[t("iframe",{style:i.hideScrollBar,attrs:{name:i.iframeName,sandbox:i.iframeSandbox,scrolling:i.iframeScrolling,src:i.iframeSrc,srcdoc:i.iframeSrcdoc,frameborder:i.iframeFrameborder,id:"pikazIframe"}})])},s=[],l=(t("b0c0"),t("a9e3"),t("d3b7"),t("ac1f"),t("25f0"),t("466d"),t("5319"),{props:{name:{type:String},frameborder:{type:Number,default:0},sandbox:{type:String,default:"allow-same-origin allow-scripts"},scrolling:{type:String,default:"auto"},src:{type:String},srcdoc:{type:String},hideScrolling:{type:[String,Boolean],default:!1},onload:{type:Function,default:function(){}},css:{type:String}},components:{},data:function(){return{}},created:function(){},mounted:function(){},methods:{iframeOnload:function(){var i=this;this.$nextTick((function(){var n=document.getElementById("pikazIframe"),t=i;n.onload=function(){t.onload()}}))}},computed:{iframeName:function(){return this.name},iframeSandbox:function(){return this.sandbox},iframeScrolling:function(){return this.scrolling},iframeSrc:function(){return this.src},iframeSrcdoc:function(){if(this.css&&this.srcdoc){var i="<head.*(?=>)(.|\n)*?</head>",n=this.srcdoc.match(i)[0],t="<style>".concat(this.css,"</style></head>"),e=n.replace("</head>",t),r=this.srcdoc.replace(n,e);return r}return this.srcdoc},iframeFrameborder:function(){return this.frameborder},hideScrollBar:function(){if(this.hideScrolling)return"[object String]"===Object.prototype.toString.call(this.hideScrolling)?{width:"calc(100% + ".concat(this.hideScrolling,")")}:{width:"calc(100% + 18px)"}}},watch:{src:{handler:function(i){this.iframeOnload()},immediate:!0},srcdoc:{handler:function(i){this.iframeOnload()},immediate:!0}}}),v=l,u=(t("7951"),t("2877")),f=Object(u["a"])(v,c,s,!1,null,"6271adc9",null),m=f.exports,p='<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width,initial-scale=1.0">\n    <title>demo</title>\n    <style>\n    div{\n      font-size:20px;\n      border-bottom:1px solid lightgray;\n    }\n    </style>\n  </head>\n  <body>\n    <div id="demo">\n    <div>1</div>\n    <div>1</div>\n    <div>1</div>\n    <div>1</div>\n    <div>1</div>\n    <div>2</div>\n    <div>2</div>\n    <div>2</div>\n    <div>2</div>\n    <div>2</div>\n    <div>2</div>\n    <div>3</div>\n    <div>3</div>\n    <div>3</div>\n    <div>3</div>\n    <div>3</div>\n    <div>3</div>\n    <div>3</div>\n    <div>4</div>\n    <div>4</div>\n    <div>4</div>\n    <div>4</div>\n    <div>4</div>\n    <div>4</div>\n    <div>5</div>\n    <div>5</div>\n    <div>5</div>\n    <div>5</div>\n    <div>5</div>\n    <div>5</div>\n    <div>6</div>\n    <div>6</div>\n    <div>6</div>\n    <div>6</div>\n    <div>6</div>\n    <div>6</div>\n    <div>7</div>\n    <div>7</div>\n    <div>7</div>\n    <div>7</div>\n    <div>7</div>\n    <div>8</div>\n    <div>8</div>\n    <div>8</div>\n    <div>8</div>\n    <div>8</div>\n    <div>8</div>\n    <div>8</div>\n    <div>9</div>\n    <div>9</div>\n    <div>9</div>\n    <div>9</div>\n    <div>9</div>\n    <div>9</div>\n    </div>\n  </body>\n</html>',h={props:{},components:{PikazIframe:m},data:function(){return{src:"https://m.baidu.com/",srcdoc:p,css:"\n      div{color:red;}\n    body::-webkit-scrollbar {width:5px;}\n    body::-webkit-scrollbar-track {\n    background-color: lightgray;\n    -webkit-border-radius: 2em;\n  -moz-border-radius: 2em;\n  border-radius: 2em;\n}\n    body::-webkit-scrollbar-thumb {\n  background-color: gray;\n  -webkit-border-radius: 2em;\n  -moz-border-radius: 2em;\n  border-radius: 2em;\n}\n      "}},created:function(){},mounted:function(){},methods:{onload:function(i){console.log("第".concat(i,"个iframe载入成功"))}},computed:{},watch:{}},b=h,y=(t("f78f"),Object(u["a"])(b,o,a,!1,null,"236f9a64",null)),g=y.exports,S={name:"App",components:{Example:g}},w=S,k=(t("c786"),Object(u["a"])(w,r,d,!1,null,null,null)),x=k.exports;t("7be5");e["a"].config.productionTip=!1,new e["a"]({render:function(i){return i(x)}}).$mount("#app")},7494:function(i,n,t){},7951:function(i,n,t){"use strict";var e=t("d8a4"),r=t.n(e);r.a},"7be5":function(i,n,t){},c786:function(i,n,t){"use strict";var e=t("5295"),r=t.n(e);r.a},d8a4:function(i,n,t){},f78f:function(i,n,t){"use strict";var e=t("7494"),r=t.n(e);r.a}});