"use strict";(self.webpackChunkgoit_react_woolf_hw_05_movies=self.webpackChunkgoit_react_woolf_hw_05_movies||[]).push([[310],{310:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(439),i=n(791),r="MoviesPage_movies__IkPVC",s="MoviesPage_list__PJZqT",o="MoviesPage_link__Lj8cH",u=n(694),c=n.n(u),l=n(742),f=n(689),_=n(87),h="Searchbar_form__D-hp5",m="Searchbar_btn__MFSUa",v=n(184);function d(e){var t=e.onSubmit,n=(0,_.lr)(),r=(0,a.Z)(n,1)[0],s=(0,i.useState)(r.get("query")),o=(0,a.Z)(s,2),u=o[0],c=o[1];return(0,v.jsx)("form",{className:h,onSubmit:function(e){e.preventDefault(),t(u)},children:(0,v.jsxs)("label",{children:[(0,v.jsx)("input",{type:"text",onChange:function(e){return c(e.target.value)},value:null===u?"":u}),(0,v.jsx)("button",{type:"submit",className:m,children:"Search"})]})})}function g(){var e=(0,f.TH)(),t=(0,i.useState)([]),n=(0,a.Z)(t,2),u=n[0],h=n[1],m=(0,_.lr)(),g=(0,a.Z)(m,2),b=g[0],j=g[1];return(0,i.useEffect)((function(){var e=b.get("query");null!==e&&(""!==e?(0,l.z1)(e).then((function(t){0!==t.data.total_results?h(t.data.results):c().Notify.failure("Oops! No movie found containing ".concat(e))})):c().Notify.warning("Please enter the name of the movie to search"))}),[b]),(0,i.useEffect)((function(){return h([])}),[]),(0,v.jsxs)("div",{className:r,children:[(0,v.jsx)(d,{onSubmit:function(e){j({query:e})}}),u.length>0&&(0,v.jsx)("div",{children:(0,v.jsx)("ul",{className:s,children:u.map((function(t){return(0,v.jsx)("li",{children:(0,v.jsx)(_.rU,{className:o,to:"/movies/".concat(t.id),state:{from:e},children:t.title})},t.id)}))})})]})}}}]);
//# sourceMappingURL=310.ad27a9ef.chunk.js.map