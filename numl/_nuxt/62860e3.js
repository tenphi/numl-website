(window.webpackJsonp=window.webpackJsonp||[]).push([[11,4,10],{297:function(e,t,n){"use strict";var r=n(6),l=n(46),o=n(47),d=n(185),c=n(87),f=n(13),h=n(70).f,m=n(71).f,v=n(22).f,S=n(299).trim,_="Number",w=r.Number,x=w,N=w.prototype,I=o(n(88)(N))==_,E="trim"in String.prototype,A=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){var n,r,l,o=(t=E?t.trim():S(t,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:r=2,l=49;break;case 79:case 111:r=8,l=55;break;default:return+t}for(var code,d=t.slice(2),i=0,f=d.length;i<f;i++)if((code=d.charCodeAt(i))<48||code>l)return NaN;return parseInt(d,r)}}return+t};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof w&&(I?f((function(){N.valueOf.call(n)})):o(n)!=_)?d(new x(A(t)),n,w):A(t)};for(var T,F=n(14)?h(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),M=0;F.length>M;M++)l(x,T=F[M])&&!l(w,T)&&v(w,T,m(x,T));w.prototype=N,N.constructor=w,n(25)(r,_,w)}},299:function(e,t,n){var r=n(4),l=n(53),o=n(13),d=n(300),c="["+d+"]",f=RegExp("^"+c+c+"*"),h=RegExp(c+c+"*$"),m=function(e,t,n){var l={},c=o((function(){return!!d[e]()||"​"!="​"[e]()})),f=l[e]=c?t(v):d[e];n&&(l[n]=f),r(r.P+r.F*c,"String",l)},v=m.trim=function(e,t){return e=String(l(e)),1&t&&(e=e.replace(f,"")),2&t&&(e=e.replace(h,"")),e};e.exports=m},300:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},303:function(e,t,n){"use strict";n.r(t);n(297);var r={props:{heading:String,description:String,badge:String,fill:String,color:String,special:Boolean,items:String,level:[String,Number],headingSize:[String,Number],width:String,gap:String,padding:String,border:String}},l=n(12),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Section",{attrs:{display:"flex",padding:e.padding||"12x 0||8x 0",text:"center",items:e.items||"center",fill:e.fill?e.fill:e.special?"dark":"bg",color:e.special?"white":null,border:e.border?e.border:e.special?"top bottom outside #white.50":null,width:e.width,gap:e.gap}},[e.heading||e.description||e.badge?n("nu-flex",{attrs:{flow:"column",items:e.items||"center",width:"min-content --heading-width 46||min-content --heading-width",gap:"2x"}},[n("nu-props",{attrs:{"heading-width":"6sp|8sp|10sp|--content-width","max-width":"50rem"}}),e._v(" "),e.badge?n("nu-badge",{attrs:{border:"n",special:"",text:"up bold",size:"md|||xs"},domProps:{innerHTML:e._s(e.$html(e.badge))}}):e._e(),e._v(" "),e.heading?n("Heading",{attrs:{level:e.level,size:e.headingSize||null}},[n("nu-el",{domProps:{innerHTML:e._s(e.$html(e.heading))}})],1):e._e(),e._v(" "),e.description?n("nu-description",{attrs:{size:"xl||lg",text:"sb"},domProps:{innerHTML:e._s(e.$html(e.description))}}):e._e()],1):e._e(),e._v(" "),e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Heading:n(304).default,Section:n(305).default})},304:function(e,t,n){"use strict";n.r(t);n(297);var r={name:"Heading",props:{level:[String,Number]}},l=n(12),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.level?"nu-h"+e.level:"nu-h2",{tag:"component",attrs:{role:"heading",level:e.level||2,"aria-level":e.level||2}},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},305:function(e,t,n){"use strict";n.r(t);var r={name:"Section",props:{width:String,gap:String,padding:String,items:String}},l=n(12),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nu-section",{attrs:{box:"y",color:"white"}},[n("nu-flex",{attrs:{flow:"column",space:"around",items:e.items||"center",width:e.width||"min-content (--max-content-width + (--content-padding * 2))",padding:e.padding||"0 --content-padding",gap:e.gap||"4x"}},[e._t("default")],2)],1)}),[],!1,null,null,null);t.default=component.exports}}]);