(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{295:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));e(35);function o(t){return"".concat((t=t||"").charAt(0).toUpperCase()).concat(t.slice(1))}},306:function(t,n,e){"use strict";e.r(n);var o=e(61),c={name:"InlineSettings",data:function(){return{Theme:o.c}},methods:{toggleScheme:function(){var t=o.c.scheme,n=o.b.indexOf(t);o.c.set({scheme:o.b[(n+1)%o.b.length]})},toggleContrast:function(){var t=o.c.contrast,n=o.a.indexOf(t);o.c.set({contrast:o.a[(n+1)%o.a.length]})},capitalize:e(295).a}},r=e(12),component=Object(r.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("nu-pane",[e("nu-btn",{attrs:{padding:"1x 2x 1x 1.5x|||1x",label:"Scheme",radius:"round"},on:{tap:t.toggleScheme}},[e("nu-icon",{attrs:{name:"^root :light[sun-outline] :dark[moon-outline]"}}),t._v(" "),e("nu-el",{attrs:{show:"y|||n"}},[t._v("\n      "+t._s(t.capitalize(t.Theme.scheme))+"\n    ")]),t._v(" "),e("nu-block",{attrs:{text:"nowrap b",show:"n|||y",size:"xs",place:"outside-bottom -1px"}},[t._v("\n      "+t._s(t.capitalize(t.Theme.scheme))+"\n    ")])],1),t._v(" "),e("nu-btn",{attrs:{padding:"1x 2x 1x 1.5x|||1x",label:"Contrast Mode",radius:"round"},on:{tap:t.toggleContrast}},[e("nu-icon",{attrs:{name:"contrast",rotate:"^root :high-contrast[180deg]",transition:"rotate"}}),t._v(" "),e("nu-el",{attrs:{show:"y|||n"}},[t._v("\n      "+t._s(t.capitalize(t.Theme.contrast))+"\n    ")]),t._v(" "),e("nu-block",{attrs:{text:"nowrap b",show:"n|||y",size:"xs",place:"outside-bottom -1px"}},[t._v("\n      "+t._s(t.capitalize(t.Theme.contrast))+"\n    ")])],1)],1)}),[],!1,null,null,null);n.default=component.exports}}]);