(window.webpackJsonp=window.webpackJsonp||[]).push([[9,8],{298:function(e,t,r){"use strict";r.r(t);r(27);var n=r(117),o=r.n(n),d=r(61),l={name:"PreviewEmbed",props:{markup:String,repl:Boolean},data:function(){return{timerId:null,contentWindow:null}},computed:{computedOptions:function(){return{hue:d.c.hue,saturation:d.c.saturation,pastel:d.c.pastel,scheme:d.c.scheme,contrast:d.c.contrast}},encodedData:function(){return o.a.compressToEncodedURIComponent(JSON.stringify({markup:this.markup&&this.markup.trim()?this.markup.replace(/#\[\[|!\[\[|]]#|]]!/g,""):void 0,options:this.computedOptions}))},iframeStyles:function(){return{display:"block",transition:"height var(--transition) linear","max-width":"100%",height:this.repl?"100%":"58px","flex-grow":1}}},watch:{encodedData:function(){var e=this.$refs.frame;setTimeout((function(){e.contentWindow.location.reload()}),100)}}},c=r(12),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("iframe",{ref:"frame",style:e.iframeStyles,attrs:{src:"/preview/index.html#"+e.encodedData,frameborder:"0",scrolling:"yes",width:"100%",height:"100%"}})}),[],!1,null,null,null);t.default=component.exports},301:function(e,t,r){"use strict";r.r(t);var n=r(52),o={name:"PreviewWindow",data:function(){return{Preview:n.a}},computed:{markup:function(){return n.a.markup},encodedData:function(){var e=this.$refs.embed;return e?e.encodedData:""}},methods:{close:function(){n.a.hide()},minimize:function(){},maximize:function(){}}},d=r(12),component=Object(d.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.Preview.shown?r("nu-card",{staticStyle:{resize:"both"},attrs:{display:"flex",flow:"column",width:"320rp 40vw 100vw",height:"240rp 60vh 100vh",place:"fixed top right (--topbar-offset + 1x)",z:"max",cursor:"pointer",border:"y :moving[#special]",padding:"0",overflow:"hidden",shadow:"4x #main-shadow.50 :moving[4x #main-special-shadow.30]","use-movable":"holder(heading)"}},[r("nu-pane",{attrs:{id:"heading",padding:"1x",fill:"subtle",width:"100%",radius:"(1r - 1bw) (1r - 1bw) 0 0",border:"bottom",transition:"border"}},[r("nu-action",{attrs:{fill:"hue(12 100 25)",border:"hue(12 100 1 pastel) outside :hover[outside .5x hue(12 100 1 pastel)]",radius:"round",width:"1.75x",height:"1.75x"},on:{tap:e.close}}),e._v(" "),r("nu-action",{attrs:{fill:"hue(50 100 15)",border:"hue(50 100 1 pastel) outside :hover[outside .5x hue(50 100 1 pastel)]",radius:"round",width:"1.75x",height:"1.75x"},on:{tap:e.minimize}}),e._v(" "),r("nu-action",{attrs:{fill:"hue(120 100 20)",border:"hue(120 100 1 pastel) outside :hover[outside .5x hue(120 100 1 pastel)]",radius:"round",width:"1.75x",height:"1.75x"},on:{tap:e.maximize}}),e._v(" "),r("nu-el",{attrs:{size:"xs",text:"b",color:"#text.70"}},[e._v(" PREVIEW ")])],1),e._v(" "),r("nu-flex",{attrs:{flow:"column",box:"y",grow:"1"}},[r("PreviewEmbed",{ref:"embed",attrs:{markup:e.Preview.markup}}),e._v(" "),r("nu-block",{attrs:{place:"cover",show:"^card n :moving[y]"}})],1)],1):e._e()}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{PreviewEmbed:r(298).default})}}]);