(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,n,e){},14:function(t,n,e){"use strict";e.r(n);var o=e(4),r=e.n(o),c=e(5),u=e(6),i=e(3),s=e.n(i),a=e(1);e(12);function d(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var l=function(){return d().then((function(t){return t.sort((function(t,n){var e=t.name,o=n.name;return e.localeCompare(o)})).slice(0,5)}))},f=function(){return d().then((function(t){return t.filter((function(t){return"red"===t.color}))}))},j=e(0),b=function(t){var n=t.goods;return Object(j.jsx)("ul",{children:n.map((function(t){var n=t.id,e=t.color,o=t.name;return Object(j.jsx)("li",{style:{color:e},children:o},n)}))})},h=function(){var t=Object(a.useState)([]),n=Object(u.a)(t,2),e=n[0],o=n[1],r=function(){var t=Object(c.a)(s.a.mark((function t(n){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n();case 2:e=t.sent,o(e);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Dynamic list of Goods"}),Object(j.jsx)("button",{onClick:function(){return r(d)},type:"button",children:"Load All goods"}),Object(j.jsx)("button",{onClick:function(){return r(l)},type:"button",children:"Load 5 first goods"}),Object(j.jsx)("button",{onClick:function(){return r(f)},type:"button",children:"Load red goods"}),e.length>0&&Object(j.jsx)(b,{goods:e})]})};r.a.render(Object(j.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.1b8dca9f.chunk.js.map