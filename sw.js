if(!self.define){let e,c={};const i=(i,n)=>(i=new URL(i+".js",n).href,c[i]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=c,document.head.appendChild(e)}else e=i,importScripts(i),c()})).then((()=>{let e=c[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(c[o])return;let r={};const d=e=>i(e,o),t={module:{uri:o},exports:r,require:d};c[o]=Promise.all(n.map((e=>t[e]||d(e)))).then((e=>(s(...e),r)))}}define(["./workbox-ac6e2db0"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/chunk-vendors.0af22a31.css",revision:"e2e858b4d120eb644b8259240d7ec8d9"},{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"fonts/materialdesignicons-webfont.9cacdc87.eot",revision:"9cacdc876e2049988fcab540c21738d5"},{url:"fonts/materialdesignicons-webfont.9d243c16.woff2",revision:"9d243c168a4f1c2cb3cec74884344de7"},{url:"fonts/materialdesignicons-webfont.a0711490.woff",revision:"a0711490bcd581b647329230b3e915cf"},{url:"fonts/materialdesignicons-webfont.b62641af.ttf",revision:"b62641afc9ab487008e996a5c5865e56"},{url:"images/icono-512.png",revision:"785dd4631c1bcc23a9bc4c253531a688"},{url:"index.html",revision:"2c9b6a8c2ddb81f6f16dfe6fd86e9c30"},{url:"js/app.aa3850a0.js",revision:"a432c829b023966ce1fa7b883c70b89e"},{url:"js/chunk-vendors.6c22c2d0.js",revision:"f9a918d72a200bc427b214bd5f8e1cbd"},{url:"manifest.json",revision:"d700bc3050f9575c713ed5bb541f9444"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
