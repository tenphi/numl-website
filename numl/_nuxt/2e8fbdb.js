(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{298:function(t,e,n){"use strict";n.r(e);n(27);var r=n(117),o=n.n(r),c=n(61),l={name:"PreviewEmbed",props:{markup:String,repl:Boolean},data:function(){return{timerId:null,contentWindow:null}},computed:{computedOptions:function(){return{hue:c.c.hue,saturation:c.c.saturation,pastel:c.c.pastel,scheme:c.c.scheme,contrast:c.c.contrast}},encodedData:function(){return o.a.compressToEncodedURIComponent(JSON.stringify({markup:this.markup&&this.markup.trim()?this.markup.replace(/#\[\[|!\[\[|]]#|]]!/g,""):void 0,options:this.computedOptions}))},iframeStyles:function(){return{display:"block",transition:"height var(--transition) linear","max-width":"100%",height:this.repl?"100%":"58px","flex-grow":1}}},watch:{encodedData:function(){var t=this.$refs.frame;setTimeout((function(){t.contentWindow.location.reload()}),100)}}},d=n(12),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("iframe",{ref:"frame",style:t.iframeStyles,attrs:{src:"/preview/index.html#"+t.encodedData,frameborder:"0",scrolling:"yes",width:"100%",height:"100%"}})}),[],!1,null,null,null);e.default=component.exports}}]);