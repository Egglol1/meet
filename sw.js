if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const c=e=>n(e,t),f={module:{uri:t},exports:o,require:c};i[t]=Promise.all(s.map((e=>f[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-020e1147"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-CVLAhDAx.js",revision:null},{url:"assets/index-DUBsG8gZ.css",revision:null},{url:"google0470e9a0f178a00b.html",revision:"63e2e4f0736a9c1f45c8322b93ffdb09"},{url:"index.html",revision:"6e39d915816e2d95e857a4ad84edbb63"},{url:"registerSW.js",revision:"4c74f70e6b3f9c7f2e7a4b8946c14439"},{url:"favicon.ico",revision:"b681b6bb0ff152de1938924bc1875a5d"},{url:"meet-app-144.png",revision:"dae5f3d5d35396e6e3c04e8ef6e70cb6"},{url:"meet-app-192.png",revision:"4ad85c7f381794f8fc16e5ba53cd1f8f"},{url:"meet-app-512.png",revision:"365b42cb16441d855f01d1c094011c15"},{url:"manifest.webmanifest",revision:"53901996b58c3792d6ba509cb72d8ffd"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/\/.*\.png$/,new e.StaleWhileRevalidate({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:50})]}),"GET")}));
