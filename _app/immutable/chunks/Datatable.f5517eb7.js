import{S as g,i as H,s as j,k as c,a as C,l as i,m as d,h as n,c as Q,n as v,b as R,D as h,T as S,H as L,o as x}from"./index.19b94c13.js";function A(f){let t,l,s,r,u,a,_,e,y,m,w;return{c(){t=c("table"),l=c("thead"),s=c("tr"),r=c("th"),u=C(),a=c("tbody"),_=c("tr"),e=c("td"),y=c("ul"),this.h()},l(b){t=i(b,"TABLE",{class:!0});var o=d(t);l=i(o,"THEAD",{});var E=d(l);s=i(E,"TR",{});var k=d(s);r=i(k,"TH",{}),d(r).forEach(n),k.forEach(n),E.forEach(n),u=Q(o),a=i(o,"TBODY",{});var T=d(a);_=i(T,"TR",{});var p=d(_);e=i(p,"TD",{});var D=d(e);y=i(D,"UL",{}),d(y).forEach(n),D.forEach(n),p.forEach(n),T.forEach(n),o.forEach(n),this.h()},h(){v(t,"class",f[0])},m(b,o){R(b,t,o),h(t,l),h(l,s),h(s,r),h(t,u),h(t,a),h(a,_),h(_,e),h(e,y),m||(w=S(t,"click",f[1]),m=!0)},p(b,[o]){o&1&&v(t,"class",b[0])},i:L,o:L,d(b){b&&n(t),m=!1,w()}}}function B(f,t,l){let s,{options:r}=t,{data:u}=t,{rowLink:a}=t;x(async()=>{window.jQuery("table").empty(),window.jQuery("table").DataTable({...r,data:u,scrollY:`calc( ${window.jQuery(".list").height()}px - 3em )`,deferRender:!0,scrollCollapse:!1,scroller:!0,language:{search:"",searchPlaceholder:"Search ..."}})});const _=a?function(...y){a.apply(y[0].target,y)}:void 0;return f.$$set=e=>{"options"in e&&l(2,r=e.options),"data"in e&&l(3,u=e.data),"rowLink"in e&&l(4,a=e.rowLink)},f.$$.update=()=>{f.$$.dirty&16&&l(0,s=a?"linked":"")},[s,_,r,u,a]}class q extends g{constructor(t){super(),H(this,t,B,A,j,{options:2,data:3,rowLink:4})}}export{q as D};
