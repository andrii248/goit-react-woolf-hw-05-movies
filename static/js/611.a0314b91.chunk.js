"use strict";(self.webpackChunkgoit_react_woolf_hw_05_movies=self.webpackChunkgoit_react_woolf_hw_05_movies||[]).push([[611],{364:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var i=n(439),r=n(791),s="MoviesPage_movies__IkPVC",a=n(694),o=n.n(a),u=n(742),l=n(87),c="Searchbar_form__D-hp5",f="Searchbar_btn__MFSUa",_=n(184);function h(e){var t=e.onSubmit,n=(0,l.lr)(),s=(0,i.Z)(n,1)[0],a=(0,r.useState)(s.get("query")),u=(0,i.Z)(a,2),h=u[0],m=u[1];return(0,_.jsx)("form",{className:c,onSubmit:function(e){e.preventDefault(),""!==h&&null!==h?t(h):o().Notify.warning("Please enter the name of the movie to search")},children:(0,_.jsxs)("label",{children:[(0,_.jsx)("input",{type:"text",onChange:function(e){return m(e.target.value)},value:null===h?"":h}),(0,_.jsx)("button",{type:"submit",className:f,children:"Search"})]})})}var m="MoviesList_list__0Owr9",v="MoviesList_link__8rTGX",d=n(689);function x(e){var t=e.moviesList,n=(0,d.TH)();return(0,_.jsx)("div",{children:(0,_.jsx)("ul",{className:m,children:t.map((function(e){return(0,_.jsx)("li",{children:(0,_.jsx)(l.rU,{className:v,to:"/movies/".concat(e.id),state:{from:n},children:e.title})},e.id)}))})})}function b(){var e=(0,r.useState)([]),t=(0,i.Z)(e,2),n=t[0],a=t[1],c=(0,l.lr)(),f=(0,i.Z)(c,2),m=f[0],v=f[1];return(0,r.useEffect)((function(){var e=m.get("query");null!==e&&(0,u.z1)(e).then((function(t){0!==t.data.total_results?a(t.data.results):o().Notify.failure("Oops! No movie found containing ".concat(e))}))}),[m]),(0,r.useEffect)((function(){return a([])}),[]),(0,_.jsxs)("div",{className:s,children:[(0,_.jsx)(h,{onSubmit:function(e){v({query:e})}}),n.length>0&&(0,_.jsx)(x,{moviesList:n})]})}}}]);
//# sourceMappingURL=611.a0314b91.chunk.js.map