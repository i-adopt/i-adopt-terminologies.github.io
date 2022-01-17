import{S as I,i as S,s as V,Q as j,e as m,t as v,k as q,w,l as D,c as d,a as _,h as y,d as u,m as E,x as C,b as U,g as f,G as g,y as x,R as B,q as L,o as P,B as M,f as G,j as H,K as h}from"../../chunks/vendor-a6a35261.js";import{b as K}from"../../chunks/paths-4b3c6e7e.js";import{D as N}from"../../chunks/Datatable-1640b98c.js";import{M as O}from"../../chunks/MarkDown-60bce0cf.js";function Q(r){let t,n=r[3].message+"",o;return{c(){t=m("p"),o=v(n),this.h()},l(e){t=d(e,"P",{style:!0});var a=_(t);o=y(a,n),a.forEach(u),this.h()},h(){G(t,"color","red")},m(e,a){f(e,t,a),g(t,o)},p(e,a){a&1&&n!==(n=e[3].message+"")&&H(o,n)},i:h,o:h,d(e){e&&u(t)}}}function R(r){let t,n,o;return n=new N({props:{options:r[1],data:r[2]}}),{c(){t=m("div"),w(n.$$.fragment),this.h()},l(e){t=d(e,"DIV",{class:!0});var a=_(t);C(n.$$.fragment,a),a.forEach(u),this.h()},h(){U(t,"class","list svelte-107f8vb")},m(e,a){f(e,t,a),x(n,t,null),o=!0},p(e,a){const c={};a&1&&(c.data=e[2]),n.$set(c)},i(e){o||(L(n.$$.fragment,e),o=!0)},o(e){P(n.$$.fragment,e),o=!1},d(e){e&&u(t),M(n)}}}function z(r){let t,n;return{c(){t=m("p"),n=v("Loading...")},l(o){t=d(o,"P",{});var e=_(t);n=y(e,"Loading..."),e.forEach(u)},m(o,e){f(o,t,e),g(t,n)},p:h,i:h,o:h,d(o){o&&u(t)}}}function A(r){let t,n,o,e,a,c,p,b,k;a=new O({props:{source:"unit2prop"}});let i={ctx:r,current:null,token:null,hasCatch:!0,pending:z,then:R,catch:Q,value:2,error:3,blocks:[,,,]};return j(b=r[0],i),{c(){t=m("h1"),n=v("Unit to Property Lookup"),o=q(),e=m("div"),w(a.$$.fragment),c=q(),p=D(),i.block.c(),this.h()},l(s){t=d(s,"H1",{});var l=_(t);n=y(l,"Unit to Property Lookup"),l.forEach(u),o=E(s),e=d(s,"DIV",{class:!0});var $=_(e);C(a.$$.fragment,$),$.forEach(u),c=E(s),p=D(),i.block.l(s),this.h()},h(){U(e,"class","text svelte-107f8vb")},m(s,l){f(s,t,l),g(t,n),f(s,o,l),f(s,e,l),x(a,e,null),f(s,c,l),f(s,p,l),i.block.m(s,i.anchor=l),i.mount=()=>p.parentNode,i.anchor=p,k=!0},p(s,[l]){r=s,i.ctx=r,l&1&&b!==(b=r[0])&&j(b,i)||B(i,r,l)},i(s){k||(L(a.$$.fragment,s),L(i.block),k=!0)},o(s){P(a.$$.fragment,s);for(let l=0;l<3;l+=1){const $=i.blocks[l];P($)}k=!1},d(s){s&&u(t),s&&u(o),s&&u(e),M(a),s&&u(c),s&&u(p),i.block.d(s),i.token=null,i=null}}}async function Y(){return{props:{dataPromise:fetch(`${K}/data/unit2property.json`).then(t=>t.json()).then(t=>t.sort((n,o)=>n.unitLabel.localeCompare(o.unitLabel)))}}}function F(r,t,n){let{dataPromise:o}=t;const e={order:[[1,"asc"]],columns:[{data:"source",title:"Ontology"},{data:"unitLabel",title:"Unit",render:(a,c,p)=>`<a href="${p.unit}" target="_blank">${p.unitLabel}</a>`},{data:"quant",title:"Property",render:a=>`<ul>${a.sort((c,p)=>c.quantLabel.localeCompare(p.quantLabel)).map(c=>`<li><a href="${c.quant}" target="_blank">${c.quantLabel}</a></li>`).join("")}</ul>`}]};return r.$$set=a=>{"dataPromise"in a&&n(0,o=a.dataPromise)},[o,e]}class Z extends I{constructor(t){super();S(this,t,F,A,V,{dataPromise:0})}}export{Z as default,Y as load};
