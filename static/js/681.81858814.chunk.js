"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[681],{9681:function(t,e,r){r.r(e);var n=r(9439),a=r(2791),u=r(7689),c=r(4390),o=r(184);e.default=function(){var t=(0,a.useState)([]),e=(0,n.Z)(t,2),r=e[0],s=e[1],i=(0,u.UO)().movieId;function p(t){var e=new Date(t);return"".concat(e.getFullYear(),"-").concat((e.getMonth()+1).toString().padStart(2,"0"),"-").concat(e.getDate().toString().padStart(2,"0")," ").concat(e.getHours().toString().padStart(2,"0"),":").concat(e.getMinutes().toString().padStart(2,"0"),":").concat(e.getSeconds().toString().padStart(2,"0"))}return(0,a.useEffect)((function(){(0,c.Bt)(i).then((function(t){return s(t)})).catch((function(t){console.error(t.message),s([])}))}),[i]),(0,o.jsx)(o.Fragment,{children:r.length>0?(0,o.jsx)("ul",{children:r.map((function(t){return(0,o.jsxs)("li",{children:[(0,o.jsxs)("h3",{children:["Author: ",t.author]}),(0,o.jsxs)("p",{children:["Date of create: ",p(t.created_at)]}),(0,o.jsx)("p",{children:t.content})]},t.id)}))}):(0,o.jsx)("p",{children:"We don't have any revies for this movie"})})}},4390:function(t,e,r){r.d(e,{Bt:function(){return d},Tg:function(){return s},iJ:function(){return i},m4:function(){return p},y:function(){return f}});var n=r(5861),a=r(4687),u=r.n(a),c=r(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="0cafd553b6a217ff7b99743b1693af60",s=function(){var t=(0,n.Z)(u().mark((function t(){var e,r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={api_key:o,page:1},t.next=3,c.Z.get("/trending/movie/day",{params:e});case 3:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={api_key:o,page:1,query:e},t.next=3,c.Z.get("/search/movie",{params:r});case 3:return n=t.sent,a=n.data,t.abrupt("return",a.results.filter((function(t){return t.title.toLowerCase().includes(e.toLowerCase())})));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={api_key:o,page:1},t.next=3,c.Z.get("/movie/".concat(e),{params:r});case 3:return n=t.sent,a=n.data,console.log(a),t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={api_key:o,page:1,language:"en-US"},t.next=3,c.Z.get("/movie/".concat(e,"/credits"),{params:r});case 3:return n=t.sent,a=n.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={api_key:o,page:1,language:"en-US"},t.next=3,c.Z.get("/movie/".concat(e,"/reviews"),{params:r});case 3:return n=t.sent,a=n.data,t.abrupt("return",a.results);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=681.81858814.chunk.js.map