"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[414],{414:function(e,n,r){r.r(n),r.d(n,{default:function(){return b}});var t,i,o=r(861),s=r(439),c=r(757),a=r.n(c),l=r(263),d=r(168),h=r(87),u=r(867),f=(0,u.ZP)(h.rU)(t||(t=(0,d.Z)(["\n  text-decoration: none;\n  color: #4c4d52;\n\n  &:hover {\n    color: #bf4f74;\n  }\n\n  &.active {\n    color: #bf4f74;\n    font-weight: bold;\n  }\n"]))),v=r(184),x=function(e){var n=e.movie;if(!n)return(0,v.jsx)("p",{children:"Loading..."});var r=new Date(n.release_date).getFullYear(),t=Math.round(10*n.vote_average);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:"movie-detail",children:[(0,v.jsx)("div",{className:"movie-image",children:(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(n.poster_path),alt:"Poster of ".concat(n.title)})}),(0,v.jsxs)("div",{className:"movie-info",children:[(0,v.jsxs)("h1",{children:[n.title," (",r,")"]}),(0,v.jsxs)("p",{children:["User Score: ",t,"%"]}),(0,v.jsx)("h2",{children:"Overview"}),(0,v.jsx)("p",{children:n.overview}),(0,v.jsx)("h3",{children:"Genres"}),(0,v.jsx)("p",{children:n.genres.map((function(e){return e.name})).join(", ")})]})]}),(0,v.jsxs)("div",{className:"additional-info",children:[(0,v.jsx)("h4",{children:"Additional Information"}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(f,{to:"cast",children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(f,{to:"reviews",children:"Reviews"})})]})]})]})},p=r(791),m=r(689),j=r(340),g=(0,u.ZP)(h.rU)(i||(i=(0,d.Z)(["\n  text-decoration: none;\n  background-color: #bf4f74;\n  display: inline-block;\n  border: none;\n  color: white;\n  font-weight: bold;\n  font-size: 13px;\n  padding: 5px 10px;\n  text-align: center;\n\n  margin: 4px 2px;\n  cursor: pointer;\n  border-radius: 3px;\n  transition: background-color 0.3s;\n\n  &:hover {\n  }\n  &.active {\n    color: #bf4f74;\n    font-weight: bold;\n  }\n"]))),b=function(){var e,n,r=(0,m.UO)().movieId,t=(0,p.useState)(null),i=(0,s.Z)(t,2),c=i[0],d=i[1],h=(0,p.useState)(!1),u=(0,s.Z)(h,2),f=u[0],b=u[1],w=(0,m.TH)(),k=(0,p.useRef)(null!==(e=null===(n=w.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies");return(0,p.useEffect)((function(){var e=function(){var e=(0,o.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(!0),e.next=4,(0,j.Bi)(r);case 4:n=e.sent,d(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error fetching details for the movie:",e.t0);case 11:return e.prev=11,b(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[r]),(0,v.jsxs)(v.Fragment,{children:[f&&(0,v.jsx)(l.Z,{}),(0,v.jsx)(g,{to:k.current,children:"Go Back"}),(0,v.jsx)(x,{movie:c}),(0,v.jsx)(m.j3,{})]})}}}]);
//# sourceMappingURL=414.baf10b23.chunk.js.map