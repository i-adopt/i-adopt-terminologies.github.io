import{S as r,i as m,s as f,Q as l,e as i,R as h,b as u,H as c,h as _,o as d}from"./index.19b94c13.js";import{b as w}from"./paths.6c5c6318.js";function y(s){let e,n;return{c(){e=new l(!1),n=i(),this.h()},l(t){e=h(t,!1),n=i(),this.h()},h(){e.a=n},m(t,a){e.m(s[0],t,a),u(t,n,a)},p(t,[a]){a&1&&e.p(t[0])},i:c,o:c,d(t){t&&_(n),t&&e.d()}}}function b(s,e,n){let{content:t=""}=e,{source:a=""}=e;return d(async()=>{a&&n(0,t=await(await fetch(`${w}/md/${a}.md`)).text())}),s.$$set=o=>{"content"in o&&n(0,t=o.content),"source"in o&&n(1,a=o.source)},[t,a]}class M extends r{constructor(e){super(),m(this,e,b,y,f,{content:0,source:1})}}export{M};