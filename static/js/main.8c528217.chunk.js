(this["webpackJsonpreact_tabs-js"]=this["webpackJsonpreact_tabs-js"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var c=n(3),i=n.n(c),a=n(4),d=n(1),s=n(0),o=function(t){var e,n=t.tabs,c=t.selectedTabId,i=t.onTabSelected,a=n.find((function(t){return t.id===c}))||n[0];return Object(s.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(s.jsx)("div",{className:"tabs is-boxed",children:Object(s.jsx)("ul",{children:n.map((function(t){return Object(s.jsx)("li",{"data-cy":"Tab",className:t.id===a.id?"is-active":"",children:Object(s.jsx)("a",{href:"#".concat(t.id),"data-cy":"TabLink",onClick:function(){return function(t){t.id!==c&&i(t)}(t)},children:t.title})},t.id)}))})}),Object(s.jsx)("div",{className:"block","data-cy":"TabContent",children:null===(e=n.find((function(t){return t.id===a.id})))||void 0===e?void 0:e.content})]})},b=(n(10),n(11),n(12),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),l=function(){var t,e=Object(d.useState)(b[0].id),n=Object(a.a)(e,2),c=n[0],i=n[1];return Object(s.jsxs)("div",{className:"section",children:[Object(s.jsxs)("h1",{className:"title",children:["Selected tab is ",null===(t=b.find((function(t){return t.id===c})))||void 0===t?void 0:t.title]}),Object(s.jsx)(o,{tabs:b,selectedTabId:c,onTabSelected:function(t){i(t.id)}})]})};i.a.render(Object(s.jsx)(l,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.8c528217.chunk.js.map