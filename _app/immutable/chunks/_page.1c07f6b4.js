import{b as n}from"./paths.c4a7c2bb.js";async function r({fetch:t}){return{promise:t(`${n}/data/unit2property.json`).then(e=>e.json()).then(e=>e.sort((a,o)=>a.unitLabel.localeCompare(o.unitLabel)))}}const l="always",i=Object.freeze(Object.defineProperty({__proto__:null,load:r,trailingSlash:l},Symbol.toStringTag,{value:"Module"}));export{i as _,r as l,l as t};
