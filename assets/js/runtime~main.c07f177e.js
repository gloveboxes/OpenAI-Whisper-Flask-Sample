(()=>{"use strict";var e,r,t,a,o,n={},f={};function c(e){var r=f[e];if(void 0!==r)return r.exports;var t=f[e]={exports:{}};return n[e].call(t.exports,t,t.exports,c),t.exports}c.m=n,e=[],c.O=(r,t,a,o)=>{if(!t){var n=1/0;for(b=0;b<e.length;b++){t=e[b][0],a=e[b][1],o=e[b][2];for(var f=!0,i=0;i<t.length;i++)(!1&o||n>=o)&&Object.keys(c.O).every((e=>c.O[e](t[i])))?t.splice(i--,1):(f=!1,o<n&&(n=o));if(f){e.splice(b--,1);var d=a();void 0!==d&&(r=d)}}return r}o=o||0;for(var b=e.length;b>0&&e[b-1][2]>o;b--)e[b]=e[b-1];e[b]=[t,a,o]},c.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return c.d(r,{a:r}),r},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);c.r(o);var n={};r=r||[null,t({}),t([]),t(t)];for(var f=2&a&&e;"object"==typeof f&&!~r.indexOf(f);f=t(f))Object.getOwnPropertyNames(f).forEach((r=>n[r]=()=>e[r]));return n.default=()=>e,c.d(o,n),o},c.d=(e,r)=>{for(var t in r)c.o(r,t)&&!c.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((r,t)=>(c.f[t](e,r),r)),[])),c.u=e=>"assets/js/"+({5:"7154004a",19:"26d4022f",53:"935f2afb",81:"273b2aee",85:"1f391b9e",88:"1143c452",99:"c7abef22",127:"8a9aca18",173:"7a6f08cd",301:"c0c012b0",414:"393be207",498:"27d30293",514:"1be78505",566:"01a7d4b1",737:"02324ae2",817:"8986bf83",850:"5f16b72f",893:"3aa6c05f",918:"17896441",995:"dbd528cb"}[e]||e)+"."+{5:"7561ef11",19:"73bc96d5",53:"007ba6a6",81:"859c39f2",85:"bbb5cf32",88:"76c602bc",99:"43ced65c",127:"b8329dcc",173:"fdd649a2",248:"6aae7cc3",301:"cb48138b",414:"e28cd30b",498:"8bc03dcd",514:"e52c8d5a",566:"2eb2edcb",712:"5aea64e0",737:"4adc4675",817:"b68b680b",850:"39b90c0b",893:"f2e4f62a",918:"8aad0699",995:"77037186"}[e]+".js",c.miniCssF=e=>{},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),a={},o="docs:",c.l=(e,r,t,n)=>{if(a[e])a[e].push(r);else{var f,i;if(void 0!==t)for(var d=document.getElementsByTagName("script"),b=0;b<d.length;b++){var u=d[b];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+t){f=u;break}}f||(i=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.setAttribute("data-webpack",o+t),f.src=e),a[e]=[r];var l=(r,t)=>{f.onerror=f.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],f.parentNode&&f.parentNode.removeChild(f),o&&o.forEach((e=>e(t))),r)return r(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=l.bind(null,f.onerror),f.onload=l.bind(null,f.onload),i&&document.head.appendChild(f)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="/OpenAI-Whisper-Transcriber-Sample/",c.gca=function(e){return e={17896441:"918","7154004a":"5","26d4022f":"19","935f2afb":"53","273b2aee":"81","1f391b9e":"85","1143c452":"88",c7abef22:"99","8a9aca18":"127","7a6f08cd":"173",c0c012b0:"301","393be207":"414","27d30293":"498","1be78505":"514","01a7d4b1":"566","02324ae2":"737","8986bf83":"817","5f16b72f":"850","3aa6c05f":"893",dbd528cb:"995"}[e]||e,c.p+c.u(e)},(()=>{var e={303:0,532:0};c.f.j=(r,t)=>{var a=c.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^(303|532)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>a=e[r]=[t,o]));t.push(a[2]=o);var n=c.p+c.u(r),f=new Error;c.l(n,(t=>{if(c.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var o=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;f.message="Loading chunk "+r+" failed.\n("+o+": "+n+")",f.name="ChunkLoadError",f.type=o,f.request=n,a[1](f)}}),"chunk-"+r,r)}},c.O.j=r=>0===e[r];var r=(r,t)=>{var a,o,n=t[0],f=t[1],i=t[2],d=0;if(n.some((r=>0!==e[r]))){for(a in f)c.o(f,a)&&(c.m[a]=f[a]);if(i)var b=i(c)}for(r&&r(t);d<n.length;d++)o=n[d],c.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return c.O(b)},t=self.webpackChunkdocs=self.webpackChunkdocs||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})()})();