import{b as r}from"./paths.c4a7c2bb.js";async function s({params:a,fetch:l}){let e=l(`${r}/data/summary.json`).then(t=>t.json()).then(t=>t.sort((o,n)=>o.title.localeCompare(n.title)));if(["variable","property","entity","constraint","method","unit"].includes(a.slug)){const t=a.slug;e=e.then(o=>o.filter(n=>n.has[t]))}return{promise:e}}const u=Object.freeze(Object.defineProperty({__proto__:null,load:s},Symbol.toStringTag,{value:"Module"}));export{u as _,s as l};
