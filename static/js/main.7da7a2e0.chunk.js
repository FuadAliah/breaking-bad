(this["webpackJsonpbreacking-bad"]=this["webpackJsonpbreacking-bad"]||[]).push([[0],{15:function(e,a,t){e.exports=t.p+"static/media/logo.10f5640d.png"},16:function(e,a,t){e.exports=t.p+"static/media/loading.c248cc5e.gif"},18:function(e,a,t){e.exports=t(42)},23:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(13),o=t.n(r),i=(t(23),t(3)),s=t.n(i),l=t(14),m=t(2),u=t(15),d=t.n(u);var p=function(){return c.a.createElement("header",null,c.a.createElement("img",{className:"logo",src:d.a,alt:"logo"}))},g=function(e){var a=e.getQuery,t=Object(n.useState)(""),r=Object(m.a)(t,2),o=r[0],i=r[1];return c.a.createElement("form",null,c.a.createElement("input",{type:"search",className:"search_input",placeholder:"Find Character..",autoFocus:!0,value:o,onChange:function(e){return t=e.target.value,i(t),void a(t);var t}}))},f=t(16),h=t.n(f),v=t(17),E=t.n(v),b=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)(!0),i=Object(m.a)(o,2),u=i[0],d=i[1],f=Object(n.useState)(""),v=Object(m.a)(f,2),b=v[0],w=v[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E()("https://www.breakingbadapi.com/api/characters?name=".concat(b));case 2:a=e.sent,r(a.data),d(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[b]),c.a.createElement("div",{className:"App"},c.a.createElement(p,null),c.a.createElement(g,{getQuery:function(e){return w(e)}}),c.a.createElement("div",{className:"row"}),u?c.a.createElement("div",{className:"loading"},c.a.createElement("img",{src:h.a,alt:"loading.."})):c.a.createElement("div",{className:"img_container"},t.map((function(e){return c.a.createElement("div",{className:"item",key:e.char_id},c.a.createElement("img",{className:"avatar",src:e.img,alt:e.name}),c.a.createElement("div",{className:"overlay"},c.a.createElement("h3",{className:"name"},e.name),c.a.createElement("h4",{className:"nickname"},e.nickname)))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.7da7a2e0.chunk.js.map