if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let t={};const o=e=>n(e,f),d={module:{uri:f},exports:t,require:o};i[f]=Promise.all(s.map((e=>d[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-020e1147"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-DKzAvaiR.js",revision:null},{url:"assets/index-DUBsG8gZ.css",revision:null},{url:"google0470e9a0f178a00b.html",revision:"63e2e4f0736a9c1f45c8322b93ffdb09"},{url:"index.html",revision:"5829d32fa21865a9dd05f2918af3974f"},{url:"registerSW.js",revision:"4c74f70e6b3f9c7f2e7a4b8946c14439"},{url:"favicon.ico",revision:"b681b6bb0ff152de1938924bc1875a5d"},{url:"meet-app-144.png",revision:"dae5f3d5d35396e6e3c04e8ef6e70cb6"},{url:"meet-app-192.png",revision:"4ad85c7f381794f8fc16e5ba53cd1f8f"},{url:"meet-app-512.png",revision:"365b42cb16441d855f01d1c094011c15"},{url:"manifest.webmanifest",revision:"8da8937a7081d66dd1134bdf9fd476ab"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/\/.*\.png$/,new e.StaleWhileRevalidate({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:50})]}),"GET")}));
