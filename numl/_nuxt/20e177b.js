(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{294:function(t,e,n){"use strict";var c=n(3),r=(n(24),n(86),n(45),n(23),n(28),n(11),n(29),n(60)),o=(n(27),n(295));function l(t){return"https://github.com/numldesign/numl/blob/master/src/".concat(t)}function f(t){var e=t.path.split("/")[1],section=t.path.split("/")[2];t.siteSection=e,t.section=section;var title=t.title,n=t.menuTitle;switch(section){case"behaviors":title="".concat(t.slug),n="".concat(t.slug),t.type="behavior",t.githubLink=l("behaviors/".concat(t.slug,".js"));break;case"functions":title="".concat(t.slug,"()"),n="".concat(t.slug,"()"),t.type="function";break;case"styles":title="".concat(t.slug),n="[".concat(t.slug,"]"),t.type="style attribute","githubLink"in t||(t.githubLink=l("styles/".concat(t.slug,".js")));break;case"utilities":title="".concat(t.slug),n="[".concat(t.slug,"]"),t.type="utility attribute";break;case"elements":title=t.slug,n="<".concat(t.slug,"/>"),t.type="element","githubLink"in t||(t.githubLink=l("elements/".concat(t.slug.replace("nu-",""),".js")));break;case"definitions":title=t.slug,n="<".concat(t.slug,"/>"),t.type="definition","githubLink"in t||(t.githubLink=l("definitions/".concat(t.slug.replace("nu-",""),".js")));break;default:n=title=Object(o.a)(t.slug).replace(/-/g," ")}return t.title||(t.title=title),t.menuTitle||(t.menuTitle=n),t.fullTitle="".concat(Object(o.a)(e)," – ").concat(t.title).concat(t.type?" – ".concat(t.type):""),t.description||(t.description="Content page of Numl.Design. It doesn't have description yet."),t}e.a=function(t){var e=t.split("/")[0],n=t.split("/")[1],o=r.a[e]||[];return{data:function(){return{section:e}},asyncData:function(r){return Object(c.a)(regeneratorRuntime.mark((function l(){var m,d,h,k,v;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return m=r.$content,d=r.params,l.t0=f,l.next=4,m(t,d.slug||"introduction").fetch();case 4:return l.t1=l.sent,l.t2=n,h=(0,l.t0)(l.t1,l.t2),l.next=9,m(e).fetch();case 9:return k=l.sent.sort((function(t,e){return(t.menuIndex||0)-(e.menuIndex||0)})).map(f),l.next=12,Promise.all(o.map(function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(n){var c,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.slug,t.next=3,m("".concat(e,"/").concat(c)).fetch();case 3:return r=t.sent.map((function(t){return t.section=c,t})).sort((function(t,e){return t.menuIndex||e.menuIndex?(t.menuIndex||0)-(e.menuIndex||0):(t.menuTitle||t.title||t.slug).localeCompare(e.menuTitle||e.title||e.slug)})),n.pages=r.map((function(t){return f(t)})),n.size=n.pages.filter((function(t){return!t.hidden})).length,n.title||(n.title=c),t.abrupt("return",n);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 12:return v=l.sent.filter((function(section){return section.pages.length})),l.abrupt("return",{page:h,pages:k,sections:v});case 14:case"end":return l.stop()}}),l)})))()}}}},346:function(t,e,n){"use strict";n.r(e);var c=n(294),r=Object(c.a)("storybook/converters"),o=n(12),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("MarkdownPage",{attrs:{section:t.section,pages:t.pages,page:t.page,toc:t.page.toc,sections:t.sections}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MarkdownPage:n(296).default})}}]);