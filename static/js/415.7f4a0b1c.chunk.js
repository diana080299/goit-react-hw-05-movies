"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{126:function(r,t,e){e.d(t,{e:function(){return c}});var n=e(87),a=e(184),c=function(r){var t=r.movies,e=r.location;return(0,a.jsx)("ul",{children:t.map((function(r){var t=r.id,c=r.name;return(0,a.jsx)("li",{className:"border w- p-3 border-success p-2 mb-2 border-opacity-25",children:(0,a.jsx)(n.rU,{className:"text-xxl-end text-body-secondary",to:"/movies/".concat(t),state:{from:e},children:c})},t)}))})}},415:function(r,t,e){e.r(t);var n=e(861),a=e(439),c=e(687),u=e.n(c),o=e(126),i=e(791),s=e(689),f=e(567),p=e(184);t.default=function(){var r=(0,i.useState)([]),t=(0,a.Z)(r,2),e=t[0],c=t[1],v=(0,s.TH)();return(0,i.useEffect)((function(){var r=function(){var r=(0,n.Z)(u().mark((function r(){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,f._L)();case 2:t=r.sent;try{c(t)}catch(e){alert(e.message)}case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();r()}),[]),(0,p.jsx)("div",{children:e&&(0,p.jsx)(o.e,{movies:e,location:v})})}},567:function(r,t,e){e.d(t,{Bt:function(){return v},IQ:function(){return p},Pg:function(){return s},_L:function(){return i},gH:function(){return f}});var n=e(861),a=e(687),c=e.n(a),u=e(340),o=function(r){return r.results.map((function(r){return{id:r.id,name:r.title,image:r.poster_path}}))};u.Z.defaults.baseURL="https://api.themoviedb.org/3",u.Z.defaults.headers.common.Authorization="Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzExY2RlYTcyMzc3YzAzNDU5ZWQzNmRjODQwNmZiNyIsInN1YiI6IjY1NmI2ZWEzODg2MzQ4MDBjOWUwZTZiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vwf_lNzH6GZMg2Sepu5F0CPoBSGG6cLt1TGM_pUkhAg");var i=function(){var r=(0,n.Z)(c().mark((function r(){var t,e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("/trending/movie/day");case 3:return t=r.sent,e=t.data,n=o(e),r.abrupt("return",n);case 9:throw r.prev=9,r.t0=r.catch(0),console.error("Error fetching popular movies:",r.t0),r.t0;case 13:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(){return r.apply(this,arguments)}}(),s=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("movie/".concat(t));case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n,a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("/search/movie?query=".concat(t));case 2:return e=r.sent,n=e.data,a=o(n),r.abrupt("return",a);case 6:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("/movie/".concat(t,"/credits"));case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("/movie/".concat(t,"/reviews"));case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.7f4a0b1c.chunk.js.map