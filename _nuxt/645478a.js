(window.webpackJsonp=window.webpackJsonp||[]).push([[28,8,9],{298:function(r,e,o){"use strict";o.r(e);o(27);var t=o(117),n=o.n(t),c=o(61),l={name:"PreviewEmbed",props:{markup:String,repl:Boolean},data:function(){return{timerId:null,contentWindow:null}},computed:{computedOptions:function(){return{hue:c.c.hue,saturation:c.c.saturation,pastel:c.c.pastel,scheme:c.c.scheme,contrast:c.c.contrast}},encodedData:function(){return n.a.compressToEncodedURIComponent(JSON.stringify({markup:this.markup&&this.markup.trim()?this.markup.replace(/#\[\[|!\[\[|]]#|]]!/g,""):void 0,options:this.computedOptions}))},iframeStyles:function(){return{display:"block",transition:"height var(--transition) linear","max-width":"100%",height:this.repl?"100%":"58px","flex-grow":1}}},watch:{encodedData:function(){var r=this.$refs.frame;setTimeout((function(){r.contentWindow.location.reload()}),100)}}},d=o(12),component=Object(d.a)(l,(function(){var r=this,e=r.$createElement;return(r._self._c||e)("iframe",{ref:"frame",style:r.iframeStyles,attrs:{src:"/preview/index.html#"+r.encodedData,frameborder:"0",scrolling:"yes",width:"100%",height:"100%"}})}),[],!1,null,null,null);e.default=component.exports},301:function(r,e,o){"use strict";o.r(e);var t=o(52),n={name:"PreviewWindow",data:function(){return{Preview:t.a}},computed:{markup:function(){return t.a.markup},encodedData:function(){var r=this.$refs.embed;return r?r.encodedData:""}},methods:{close:function(){t.a.hide()},minimize:function(){},maximize:function(){}}},c=o(12),component=Object(c.a)(n,(function(){var r=this,e=r.$createElement,o=r._self._c||e;return r.Preview.shown?o("nu-card",{staticStyle:{resize:"both"},attrs:{display:"flex",flow:"column",width:"320rp 40vw 100vw",height:"240rp 60vh 100vh",place:"fixed top right (--topbar-offset + 1x)",z:"max",cursor:"pointer",border:"y :moving[#special]",padding:"0",overflow:"hidden",shadow:"4x #main-shadow.50 :moving[4x #main-special-shadow.30]","use-movable":"holder(heading)"}},[o("nu-pane",{attrs:{id:"heading",padding:"1x",fill:"subtle",width:"100%",radius:"(1r - 1bw) (1r - 1bw) 0 0",border:"bottom",transition:"border"}},[o("nu-action",{attrs:{fill:"hue(12 100 25)",border:"hue(12 100 1 pastel) outside :hover[outside .5x hue(12 100 1 pastel)]",radius:"round",width:"1.75x",height:"1.75x"},on:{tap:r.close}}),r._v(" "),o("nu-action",{attrs:{fill:"hue(50 100 15)",border:"hue(50 100 1 pastel) outside :hover[outside .5x hue(50 100 1 pastel)]",radius:"round",width:"1.75x",height:"1.75x"},on:{tap:r.minimize}}),r._v(" "),o("nu-action",{attrs:{fill:"hue(120 100 20)",border:"hue(120 100 1 pastel) outside :hover[outside .5x hue(120 100 1 pastel)]",radius:"round",width:"1.75x",height:"1.75x"},on:{tap:r.maximize}}),r._v(" "),o("nu-el",{attrs:{size:"xs",text:"b",color:"#text.70"}},[r._v(" PREVIEW ")])],1),r._v(" "),o("nu-flex",{attrs:{flow:"column",box:"y",grow:"1"}},[o("PreviewEmbed",{ref:"embed",attrs:{markup:r.Preview.markup}}),r._v(" "),o("nu-block",{attrs:{place:"cover",show:"^card n :moving[y]"}})],1)],1):r._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PreviewEmbed:o(298).default})},308:function(r,e,o){var content=o(314);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[r.i,content,""]]),content.locals&&(r.exports=content.locals);(0,o(31).default)("0d1b36b2",content,!0,{sourceMap:!1})},313:function(r,e,o){"use strict";o(308)},314:function(r,e,o){var t=o(30)(!1);t.push([r.i,".vue-codemirror{display:flex;flex-flow:column;width:calc(100% + var(--content-padding)*2);flex-grow:1;margin-left:calc(var(--content-padding)*-1);margin-right:calc(var(--content-padding)*-1)}.CodeMirror{background:var(--main-bg-color);color:var(--main-text-color);flex-grow:1;font-family:var(--monospace-font)}.CodeMirror-scroll{box-sizing:content-box;height:calc(var(--window-height)*100 - var(--gap)*12.5 + var(--border-width))}.cm-s-default .cm-header{color:var(--header-text-color)}.cm-s-default .cm-quote{color:var(--quote-text-color)}.cm-negative{color:var(--negative-text-color)}.cm-positive{color:var(--positive-text-color)}.cm-header,.cm-strong{font-weight:700}.cm-em{font-style:italic}.cm-link{text-decoration:underline}.cm-strikethrough{text-decoration:line-through}.cm-s-default .cm-keyword{color:var(--keyword-color)}.cm-s-default .cm-atom{color:var(--atom-color)}.cm-s-default .cm-number{color:var(--number-color)}.cm-s-default .cm-def{color:var(--def-color)}.cm-s-default .cm-variable-2{color:var(--variable-color)}.cm-s-default .cm-type,.cm-s-default .cm-variable-3{color:var(--type-color)}.cm-s-default .cm-comment{color:var(--comment-color)}.cm-s-default .cm-string{color:var(--string-color)}.cm-s-default .cm-string-2{color:var(--string-2-color)}.cm-s-default .cm-meta,.cm-s-default .cm-qualifier{color:var(--meta-color)}.cm-s-default .cm-builtin{color:var(--builtin-color)}.cm-s-default .cm-bracket{color:var(--bracket-color)}.cm-s-default .cm-tag{color:var(--tag-color)}.cm-s-default .cm-attribute{color:var(--attribute-color)}.cm-s-default .cm-hr{color:var(--hr-color)}.cm-s-default .cm-link{color:var(--link-color)}.cm-invalidchar,.cm-s-default .cm-error{color:var(--cm-error-color)}.CodeMirror-composing{border-bottom:2px solid}.CodeMirror-gutters{border-right:1px solid var(--main-border-color);background-color:var(--main-subtle-color);white-space:nowrap}.CodeMirror-linenumber{padding:0 3px 0 5px;min-width:20px;text-align:right;color:#999;white-space:nowrap}.CodeMirror-guttermarker{color:var(--main-text-color)}.CodeMirror-guttermarker-subtle{color:#999}.CodeMirror-focused .CodeMirror-selected,.CodeMirror-selected{background:rgba(var(--outline-color-rgb),.3);background:rgba(var(--main-outline-color-rgb,var(--outline-color-rgb)),.3)}.CodeMirror-crosshair{cursor:crosshair}.CodeMirror-line::selection,.CodeMirror-line>span::selection,.CodeMirror-line>span>span::selection{background:rgba(var(--outline-color-rgb),.3);background:rgba(var(--main-outline-color-rgb,var(--outline-color-rgb)),.3)}.CodeMirror-line::-moz-selection,.CodeMirror-line>span::-moz-selection,.CodeMirror-line>span>span::-moz-selection{background:rgba(var(--outline-color-rgb),.3);background:rgba(var(--main-outline-color-rgb,var(--outline-color-rgb)),.3)}.CodeMirror-cursor{background:var(--main-hover-color);border-left:1px solid var(--main-text-color)}.CodeMirror-hscrollbar::-webkit-scrollbar,.CodeMirror-vscrollbar::-webkit-scrollbar{width:var(--gap);height:var(--gap)}.CodeMirror-hscrollbar::-webkit-scrollbar-track,.CodeMirror-vscrollbar::-webkit-scrollbar-track{background-color:var(--subtle-color);background-color:var(--local-bg-color,var(--subtle-color))}.CodeMirror-hscrollbar::-webkit-scrollbar-thumb,.CodeMirror-vscrollbar::-webkit-scrollbar-thumb{background-color:rgba(var(--text-color-rgb),.5);border-radius:var(--radius);border:var(--border-width) solid var(--subtle-color)}.CodeMirror-hscrollbar::-webkit-scrollbar-corner,.CodeMirror-vscrollbar::-webkit-scrollbar-corner{background-color:transparent}.CodeMirror-hscrollbar,.CodeMirror-vscrollbar{scrollbar-width:thin;scrollbar-color:var(--subtle-color) rgba(var(--text-color-rgb),.5)}.CodeMirror-scrollbar-filler{background-color:transparent}.CodeMirror-activeline-background{background:var(--subtle-color)}",""]),r.exports=t},330:function(r,e,o){"use strict";o.r(e);var t=o(3),n=(o(24),o(35),o(117)),c=o.n(n),l=o(145),d=o.n(l),m=o(69),v=o.n(m),h="/.netlify/functions/server/api/",f=function(r){return v.a.get("".concat(h,"snippets/").concat(r)).then((function(r){var data=r.data;if(data.ok)return data.payload.code;throw data.payload}))},w=function(code){return v.a.post("".concat(h,"snippets"),{code:code}).then((function(r){var data=r.data;if(data.ok)return data.payload.id;throw data.payload}))},k=o(52),x={name:"Repl",props:{markup:{type:String,required:!1},embed:Boolean},data:function(){return{mode:"editor",currentMarkup:"",editorOptions:{mode:"text/html",tabSize:2,indentUnit:2,lineNumbers:!0,autoCloseTags:!0,styleActiveLine:!0,extraKeys:{"Ctrl-E":"autocomplete","Cmd-E":"autocomplete"}},valid:!0,timerId:null,copied:!1,saved:!1,currentEmbed:!1,Preview:k.a,savedMarkup:""}},computed:{encodedData:function(){var r=this.$refs.preview;return r?r.encodedData:""},isDirty:function(){return this.savedMarkup!==k.a.markup},saveDisabled:function(){return!this.currentMarkup||!this.currentMarkup.trim()}},watch:{currentMarkup:function(){var r=this;this.timerId&&clearTimeout(this.timerId),this.timerId=setTimeout((function(){r.updatePreview()}),800)}},mounted:function(){var r=this;setTimeout(Object(t.a)(regeneratorRuntime.mark((function e(){var o,data,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.markup){e.next=5;break}r.currentMarkup=r.markup||"",r.currentEmbed=!!r.embed,e.next=21;break;case 5:if(24!==(o=window.location.hash.slice(1)).length){e.next=16;break}return e.next=9,f(o);case 9:if(e.t0=e.sent,e.t0){e.next=12;break}e.t0="";case 12:r.currentMarkup=e.t0,r.currentEmbed=!1,e.next=18;break;case 16:if(t=!1,o){try{data=JSON.parse(decodeURIComponent(o))}catch(r){try{data=JSON.parse(c.a.decompressFromEncodedURIComponent(o)),t=!0}catch(r){}}r.currentMarkup=data.markup||"",r.currentEmbed=data.embed||!1,r.updatePreview(!0),setTimeout((function(){t||r.save()}),100)}case 18:if(r.checkMarkup()){e.next=20;break}return e.abrupt("return");case 20:r.updatePreview(!0);case 21:setTimeout((function(){r.$refs.editor&&r.$refs.editor.codemirror.refresh()}),500);case 22:case"end":return e.stop()}}),e)}))))},methods:{updatePreview:function(r){k.a[r?"show":"change"](this.currentMarkup&&this.currentMarkup.trim()||" "),this.savedMarkup=k.a.markup},toggleMode:function(){this.mode="editor"===this.mode?"preview":"editor"},checkMarkup:function(){return!0},copyReplLink:function(){var r=this;this.saveDisabled||(this.updatePreview(),setTimeout(Object(t.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.save(!0);case 2:return o=e.sent,e.next=5,d()("https://numl.design/repl#".concat(o));case 5:r.saved=!1,r.copied=!0,setTimeout((function(){r.copied=!1}),2e3);case 8:case"end":return e.stop()}}),e)}))),300))},save:function(r){var e=this;return Object(t.a)(regeneratorRuntime.mark((function o(){var t;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(!e.saveDisabled){o.next=2;break}return o.abrupt("return");case 2:return e.updatePreview(),o.prev=3,o.next=6,w(e.currentMarkup);case 6:t=o.sent,o.next=12;break;case 9:o.prev=9,o.t0=o.catch(3),t=Object(k.c)(e.currentMarkup);case 12:return!0!==r&&(window.location.hash=t,e.copied=!1,e.saved=!0,setTimeout((function(){e.saved=!1}),2e3)),o.abrupt("return",t);case 14:case"end":return o.stop()}}),o,null,[[3,9]])})))()}}},M=(o(313),o(12)),component=Object(M.a)(x,(function(){var r=this,e=r.$createElement,o=r._self._c||e;return o("nu-block",{attrs:{overflow:"no",place:"cover"}},[o("nu-props",{attrs:{"header-color":"hue(266 70)"}}),r._v(" "),o("nu-props",{attrs:{"quote-color":"hue(128 70)"}}),r._v(" "),o("nu-props",{attrs:{"negative-color":"hue(12 70)"}}),r._v(" "),o("nu-props",{attrs:{"positive-color":"hue(128 70)"}}),r._v(" "),o("nu-props",{attrs:{"keyword-color":"hue(298 70)"}}),r._v(" "),o("nu-props",{attrs:{"atom-color":"hue(267 70)"}}),r._v(" "),o("nu-props",{attrs:{"number-color":"hue(148 70)"}}),r._v(" "),o("nu-props",{attrs:{"def-color":"hue(266 70)"}}),r._v(" "),o("nu-props",{attrs:{"variable-color":"hue(255 70)"}}),r._v(" "),o("nu-props",{attrs:{"type-color":"hue(145 70)"}}),r._v(" "),o("nu-props",{attrs:{"comment-color":"hue(31 70)"}}),r._v(" "),o("nu-props",{attrs:{"string-color":"hue(12 70)"}}),r._v(" "),o("nu-props",{attrs:{"string-2-color":"hue(19 70)"}}),r._v(" "),o("nu-props",{attrs:{"meta-color":"hue(0 70)"}}),r._v(" "),o("nu-props",{attrs:{"builtin-color":"hue(269 70)"}}),r._v(" "),o("nu-props",{attrs:{"bracket-color":"hue(86 70)"}}),r._v(" "),o("nu-props",{attrs:{"tag-color":"hue(127 70)"}}),r._v(" "),o("nu-props",{attrs:{"attribute-color":"hue(266 70)"}}),r._v(" "),o("nu-props",{attrs:{"hr-color":"hue(0 70 low)"}}),r._v(" "),o("nu-props",{attrs:{"link-color":"hue(266 70)"}}),r._v(" "),o("nu-props",{attrs:{"error-color":"hue(12 70)"}}),r._v(" "),o("nu-flex",{attrs:{flow:"column",width:"max @content-width",space:"around",content:"stretch",padding:"@topbar-offset top",height:"100%"}},[o("nu-pane",{attrs:{padding:"",box:"y"}},[o("nu-attrs",{attrs:{for:"btn",padding:".5x 1x"}}),r._v(" "),o("nu-btn",{attrs:{disabled:r.saveDisabled},on:{tap:r.save}},[o("nu-icon",{attrs:{name:r.saved?"checkmark-outline":"save-outline"}}),r._v("\n        Save\n      ")],1),r._v(" "),o("nu-btn",{attrs:{disabled:r.saveDisabled},on:{tap:r.copyReplLink}},[o("nu-icon",{attrs:{name:r.copied?"checkmark-outline":"share-outline"}}),r._v("\n        Share\n      ")],1),r._v(" "),r.Preview.shown?r._e():o("nu-btn",{on:{tap:function(e){return r.Preview.show(r.currentMarkup)}}},[o("nu-icon",{attrs:{name:"eye-outline"}}),r._v("\n        Preview\n      ")],1),r._v(" "),o("nu-el",{attrs:{hidden:!r.copied,transition:"opacity",opacity:"1 :hidden[0]",text:"nowrap ellipsis||||nowrap b",place:"||||outside-top 1x",fill:"#clear||||bg",border:"n||||y",padding:"||||.5x",size:"md xs||||xs",z:"||||max"}},[r._v("\n        Link is copied to the clipboard.\n      ")]),r._v(" "),o("nu-el",{attrs:{hidden:!r.saved,transition:"opacity",opacity:"1 :hidden[0]",text:"nowrap ellipsis||||nowrap b",place:"||||outside-top 1x",fill:"#clear||||bg",border:"n||||y",padding:"||||.5x",size:"md xs||||xs",z:"||||max"}},[r._v("\n        The snippet is saved.\n      ")])],1),r._v(" "),o("client-only",[o("codemirror",{ref:"editor",attrs:{options:r.editorOptions},model:{value:r.currentMarkup,callback:function(e){r.currentMarkup=e},expression:"currentMarkup"}})],1)],1),r._v(" "),o("PreviewWindow",{ref:"preview"})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PreviewWindow:o(301).default})}}]);