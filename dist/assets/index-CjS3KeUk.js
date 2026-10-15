const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Dzk2WzQP.js","assets/motion-vendor-LizF12fj.js","assets/react-vendor-B0CFA1vK.js","assets/Swiper-DfcAIvdO.js","assets/Config-B4fV_GYJ.js","assets/ErrorState-DfBHaGIl.js","assets/swiper-vendor-DX6y7hnN.js","assets/Swiper--67IFcXz.css","assets/genreHelper-Gbjq1g3l.js","assets/heart-BOF6JKT1.js","assets/clapperboard-Dw3quN-2.js","assets/firebase-vendor-BJWr4moQ.js","assets/index-CLEDthcy.js","assets/index-DrrR8x-2.js","assets/dateHelpers-jW83agEc.js","assets/x-DKBsZvZO.js","assets/index-D_Q8fsnU.js","assets/index-CT56q3l0.js","assets/mail-C8OhhoQ3.js","assets/index-CPXXbGBh.js","assets/index-PWtdzKRr.js"])))=>i.map(i=>d[i]);
var Me=Object.defineProperty;var We=(e,t,r)=>t in e?Me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var ae=(e,t,r)=>We(e,typeof t!="symbol"?t+"":t,r);import{j as n,A as Fe,m as Ve}from"./motion-vendor-LizF12fj.js";import{r as d,R as _,g as Be,L as Y,u as He,O as ve,a as Ge,b as j,c as Ze,B as qe}from"./react-vendor-B0CFA1vK.js";import{g as Ke,i as Qe,a as Ye,b as Je,c as Xe,s as et,d as O,u as D,G as tt,e as oe,f as rt,h as st,j as at,k as ye,l as R,m as ee,n as ot,o as nt}from"./firebase-vendor-BJWr4moQ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();class it extends d.Component{constructor(){super(...arguments);ae(this,"state",{hasError:!1,error:null})}static getDerivedStateFromError(r){return{hasError:!0,error:r}}componentDidCatch(r,s){console.error("ErrorBoundary:",r,s)}render(){var r;return this.state.hasError?n.jsx("div",{className:"min-h-screen flex items-center justify-center p-6",children:n.jsxs("div",{className:"text-center max-w-md",children:[n.jsx("h1",{className:"text-3xl font-bold mb-4",children:"Oops! Something went wrong."}),n.jsx("p",{className:"text-white/60 mb-6",children:((r=this.state.error)==null?void 0:r.message)||"Unexpected error"}),n.jsx("button",{onClick:()=>window.location.reload(),className:"bg-primary hover:bg-red-700 px-6 py-3 rounded-lg",children:"Reload Page"})]})}):this.props.children}}const ct="modulepreload",lt=function(e){return"/"+e},ne={},$=function(t,r,s){let a=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));a=Promise.allSettled(r.map(l=>{if(l=lt(l),l in ne)return;ne[l]=!0;const m=l.endsWith(".css"),f=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const u=document.createElement("link");if(u.rel=m?"stylesheet":ct,m||(u.as="script"),u.crossOrigin="",u.href=l,c&&u.setAttribute("nonce",c),document.head.appendChild(u),m)return new Promise((p,h)=>{u.addEventListener("load",p),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return a.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return t().catch(i)})};var xe={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ie=_.createContext&&_.createContext(xe),dt=["attr","size","title"];function ut(e,t){if(e==null)return{};var r=ft(e,t),s,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)s=i[a],!(t.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}function ft(e,t){if(e==null)return{};var r={};for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){if(t.indexOf(s)>=0)continue;r[s]=e[s]}return r}function M(){return M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},M.apply(this,arguments)}function ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,s)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ce(Object(r),!0).forEach(function(s){mt(e,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ce(Object(r)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))})}return e}function mt(e,t,r){return t=pt(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function pt(e){var t=ht(e,"string");return typeof t=="symbol"?t:t+""}function ht(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var s=r.call(e,t);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function be(e){return e&&e.map((t,r)=>_.createElement(t.tag,W({key:r},t.attr),be(t.child)))}function we(e){return t=>_.createElement(gt,M({attr:W({},e.attr)},t),be(e.child))}function gt(e){var t=r=>{var{attr:s,size:a,title:i}=e,o=ut(e,dt),c=a||r.size||"1em",l;return r.className&&(l=r.className),e.className&&(l=(l?l+" ":"")+e.className),_.createElement("svg",M({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,s,o,{className:l,style:W(W({color:e.color||r.color},r.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),i&&_.createElement("title",null,i),e.children)};return ie!==void 0?_.createElement(ie.Consumer,null,r=>t(r)):t(xe)}function vs(e){return we({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm.001 6c-.001 0-.001 0 0 0h-.465l-2.667-4H20l.001 4zM9.536 9 6.869 5h2.596l2.667 4H9.536zm5 0-2.667-4h2.596l2.667 4h-2.596zM4 5h.465l2.667 4H4V5zm0 14v-8h16l.002 8H4z"},child:[]},{tag:"path",attr:{d:"m10 18 5.5-3-5.5-3z"},child:[]}]})(e)}function vt(e){return we({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"},child:[]}]})(e)}function yt(e=50){const[t,r]=d.useState(!1);return d.useEffect(()=>{const s=()=>{r(window.scrollY>e)};return s(),window.addEventListener("scroll",s,{passive:!0}),()=>window.removeEventListener("scroll",s)},[e]),t}const xt={},le=e=>{let t;const r=new Set,s=(f,u)=>{const p=typeof f=="function"?f(t):f;if(!Object.is(p,t)){const h=t;t=u??(typeof p!="object"||p===null)?p:Object.assign({},t,p),r.forEach(v=>v(t,h))}},a=()=>t,l={setState:s,getState:a,getInitialState:()=>m,subscribe:f=>(r.add(f),()=>r.delete(f)),destroy:()=>{(xt?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}},m=t=e(s,a,l);return l},bt=e=>e?le(e):le;var je={exports:{}},Ee={},Se={exports:{}},Ce={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L=d;function wt(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jt=typeof Object.is=="function"?Object.is:wt,Et=L.useState,St=L.useEffect,Ct=L.useLayoutEffect,_t=L.useDebugValue;function Ot(e,t){var r=t(),s=Et({inst:{value:r,getSnapshot:t}}),a=s[0].inst,i=s[1];return Ct(function(){a.value=r,a.getSnapshot=t,q(a)&&i({inst:a})},[e,r,t]),St(function(){return q(a)&&i({inst:a}),e(function(){q(a)&&i({inst:a})})},[e]),_t(r),r}function q(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!jt(e,r)}catch{return!0}}function Nt(e,t){return t()}var At=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Nt:Ot;Ce.useSyncExternalStore=L.useSyncExternalStore!==void 0?L.useSyncExternalStore:At;Se.exports=Ce;var Pt=Se.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B=d,kt=Pt;function Lt(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Dt=typeof Object.is=="function"?Object.is:Lt,$t=kt.useSyncExternalStore,It=B.useRef,Rt=B.useEffect,zt=B.useMemo,Tt=B.useDebugValue;Ee.useSyncExternalStoreWithSelector=function(e,t,r,s,a){var i=It(null);if(i.current===null){var o={hasValue:!1,value:null};i.current=o}else o=i.current;i=zt(function(){function l(h){if(!m){if(m=!0,f=h,h=s(h),a!==void 0&&o.hasValue){var v=o.value;if(a(v,h))return u=v}return u=h}if(v=u,Dt(f,h))return v;var P=s(h);return a!==void 0&&a(v,P)?(f=h,v):(f=h,u=P)}var m=!1,f,u,p=r===void 0?null:r;return[function(){return l(t())},p===null?void 0:function(){return l(p())}]},[t,r,s,a]);var c=$t(e,i[0],i[1]);return Rt(function(){o.hasValue=!0,o.value=c},[c]),Tt(c),c};je.exports=Ee;var Ut=je.exports;const Mt=Be(Ut),_e={},{useDebugValue:Wt}=_,{useSyncExternalStoreWithSelector:Ft}=Mt;let de=!1;const Vt=e=>e;function Bt(e,t=Vt,r){(_e?"production":void 0)!=="production"&&r&&!de&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),de=!0);const s=Ft(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,r);return Wt(s),s}const ue=e=>{(_e?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?bt(e):e,r=(s,a)=>Bt(t,s,a);return Object.assign(r,t),r},Oe=e=>e?ue(e):ue,Ht={apiKey:"AIzaSyAHOpvOxTTtrWAyLckuUgTWO9AAzRzUAPg",authDomain:"movie-app-bdb4e.firebaseapp.com",projectId:"movie-app-bdb4e",storageBucket:"movie-app-bdb4e.firebasestorage.app",messagingSenderId:"327209542120",appId:"1:327209542120:web:0393cfae01b4a11383045d"},Ne=Ke().length?Ye():Qe(Ht),k=Je(Ne),N=Xe(Ne);let Gt={data:""},Zt=e=>{if(typeof window=="object"){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||Gt},qt=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Kt=/\/\*[^]*?\*\/|  +/g,fe=/\n+/g,C=(e,t)=>{let r="",s="",a="";for(let i in e){let o=e[i];i[0]=="@"?i[1]=="i"?r=i+" "+o+";":s+=i[1]=="f"?C(o,i):i+"{"+C(o,i[1]=="k"?"":t)+"}":typeof o=="object"?s+=C(o,t?t.replace(/([^,])+/g,c=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,c):c?c+" "+l:l)):i):o!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=C.p?C.p(i,o):i+":"+o+";")}return r+(t&&a?t+"{"+a+"}":a)+s},E={},Ae=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+Ae(e[r]);return t}return e},Qt=(e,t,r,s,a)=>{let i=Ae(e),o=E[i]||(E[i]=(l=>{let m=0,f=11;for(;m<l.length;)f=101*f+l.charCodeAt(m++)>>>0;return"go"+f})(i));if(!E[o]){let l=i!==e?e:(m=>{let f,u,p=[{}];for(;f=qt.exec(m.replace(Kt,""));)f[4]?p.shift():f[3]?(u=f[3].replace(fe," ").trim(),p.unshift(p[0][u]=p[0][u]||{})):p[0][f[1]]=f[2].replace(fe," ").trim();return p[0]})(e);E[o]=C(a?{["@keyframes "+o]:l}:l,r?"":"."+o)}let c=r&&E.g?E.g:null;return r&&(E.g=E[o]),((l,m,f,u)=>{u?m.data=m.data.replace(u,l):m.data.indexOf(l)===-1&&(m.data=f?l+m.data:m.data+l)})(E[o],t,s,c),o},Yt=(e,t,r)=>e.reduce((s,a,i)=>{let o=t[i];if(o&&o.call){let c=o(r),l=c&&c.props&&c.props.className||/^go/.test(c)&&c;o=l?"."+l:c&&typeof c=="object"?c.props?"":C(c,""):c===!1?"":c}return s+a+(o??"")},"");function H(e){let t=this||{},r=e.call?e(t.p):e;return Qt(r.unshift?r.raw?Yt(r,[].slice.call(arguments,1),t.p):r.reduce((s,a)=>Object.assign(s,a&&a.call?a(t.p):a),{}):r,Zt(t.target),t.g,t.o,t.k)}let Pe,J,X;H.bind({g:1});let S=H.bind({k:1});function Jt(e,t,r,s){C.p=t,Pe=e,J=r,X=s}function A(e,t){let r=this||{};return function(){let s=arguments;function a(i,o){let c=Object.assign({},i),l=c.className||a.className;r.p=Object.assign({theme:J&&J()},c),r.o=/ *go\d+/.test(l),c.className=H.apply(r,s)+(l?" "+l:"");let m=e;return e[0]&&(m=c.as||e,delete c.as),X&&m[0]&&X(c),Pe(m,c)}return a}}var Xt=e=>typeof e=="function",F=(e,t)=>Xt(e)?e(t):e,er=(()=>{let e=0;return()=>(++e).toString()})(),ke=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),tr=20,te="default",Le=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(o=>o.id===t.toast.id?{...o,...t.toast}:o)};case 2:let{toast:s}=t;return Le(e,{type:e.toasts.find(o=>o.id===s.id)?1:0,toast:s});case 3:let{toastId:a}=t;return{...e,toasts:e.toasts.map(o=>o.id===a||a===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(o=>o.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+i}))}}},U=[],De={toasts:[],pausedAt:void 0,settings:{toastLimit:tr}},w={},$e=(e,t=te)=>{w[t]=Le(w[t]||De,e),U.forEach(([r,s])=>{r===t&&s(w[t])})},Ie=e=>Object.keys(w).forEach(t=>$e(e,t)),rr=e=>Object.keys(w).find(t=>w[t].toasts.some(r=>r.id===e)),G=(e=te)=>t=>{$e(t,e)},sr={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},ar=(e={},t=te)=>{let[r,s]=d.useState(w[t]||De),a=d.useRef(w[t]);d.useEffect(()=>(a.current!==w[t]&&s(w[t]),U.push([t,s]),()=>{let o=U.findIndex(([c])=>c===t);o>-1&&U.splice(o,1)}),[t]);let i=r.toasts.map(o=>{var c,l,m;return{...e,...e[o.type],...o,removeDelay:o.removeDelay||((c=e[o.type])==null?void 0:c.removeDelay)||(e==null?void 0:e.removeDelay),duration:o.duration||((l=e[o.type])==null?void 0:l.duration)||(e==null?void 0:e.duration)||sr[o.type],style:{...e.style,...(m=e[o.type])==null?void 0:m.style,...o.style}}});return{...r,toasts:i}},or=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||er()}),z=e=>(t,r)=>{let s=or(t,e,r);return G(s.toasterId||rr(s.id))({type:2,toast:s}),s.id},g=(e,t)=>z("blank")(e,t);g.error=z("error");g.success=z("success");g.loading=z("loading");g.custom=z("custom");g.dismiss=(e,t)=>{let r={type:3,toastId:e};t?G(t)(r):Ie(r)};g.dismissAll=e=>g.dismiss(void 0,e);g.remove=(e,t)=>{let r={type:4,toastId:e};t?G(t)(r):Ie(r)};g.removeAll=e=>g.remove(void 0,e);g.promise=(e,t,r)=>{let s=g.loading(t.loading,{...r,...r==null?void 0:r.loading});return typeof e=="function"&&(e=e()),e.then(a=>{let i=t.success?F(t.success,a):void 0;return i?g.success(i,{id:s,...r,...r==null?void 0:r.success}):g.dismiss(s),a}).catch(a=>{let i=t.error?F(t.error,a):void 0;i?g.error(i,{id:s,...r,...r==null?void 0:r.error}):g.dismiss(s)}),e};var nr=1e3,ir=(e,t="default")=>{let{toasts:r,pausedAt:s}=ar(e,t),a=d.useRef(new Map).current,i=d.useCallback((u,p=nr)=>{if(a.has(u))return;let h=setTimeout(()=>{a.delete(u),o({type:4,toastId:u})},p);a.set(u,h)},[]);d.useEffect(()=>{if(s)return;let u=Date.now(),p=r.map(h=>{if(h.duration===1/0)return;let v=(h.duration||0)+h.pauseDuration-(u-h.createdAt);if(v<0){h.visible&&g.dismiss(h.id);return}return setTimeout(()=>g.dismiss(h.id,t),v)});return()=>{p.forEach(h=>h&&clearTimeout(h))}},[r,s,t]);let o=d.useCallback(G(t),[t]),c=d.useCallback(()=>{o({type:5,time:Date.now()})},[o]),l=d.useCallback((u,p)=>{o({type:1,toast:{id:u,height:p}})},[o]),m=d.useCallback(()=>{s&&o({type:6,time:Date.now()})},[s,o]),f=d.useCallback((u,p)=>{let{reverseOrder:h=!1,gutter:v=8,defaultPosition:P}=p||{},I=r.filter(x=>(x.position||P)===(u.position||P)&&x.height),Ue=I.findIndex(x=>x.id===u.id),se=I.filter((x,Z)=>Z<Ue&&x.visible).length;return I.filter(x=>x.visible).slice(...h?[se+1]:[0,se]).reduce((x,Z)=>x+(Z.height||0)+v,0)},[r]);return d.useEffect(()=>{r.forEach(u=>{if(u.dismissed)i(u.id,u.removeDelay);else{let p=a.get(u.id);p&&(clearTimeout(p),a.delete(u.id))}})},[r,i]),{toasts:r,handlers:{updateHeight:l,startPause:c,endPause:m,calculateOffset:f}}},cr=S`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,lr=S`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,dr=S`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ur=A("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${cr} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${lr} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${dr} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,fr=S`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,mr=A("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${fr} 1s linear infinite;
`,pr=S`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,hr=S`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,gr=A("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${pr} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${hr} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,vr=A("div")`
  position: absolute;
`,yr=A("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,xr=S`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,br=A("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${xr} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,wr=({toast:e})=>{let{icon:t,type:r,iconTheme:s}=e;return t!==void 0?typeof t=="string"?d.createElement(br,null,t):t:r==="blank"?null:d.createElement(yr,null,d.createElement(mr,{...s}),r!=="loading"&&d.createElement(vr,null,r==="error"?d.createElement(ur,{...s}):d.createElement(gr,{...s})))},jr=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Er=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Sr="0%{opacity:0;} 100%{opacity:1;}",Cr="0%{opacity:1;} 100%{opacity:0;}",_r=A("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Or=A("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Nr=(e,t)=>{let r=e.includes("top")?1:-1,[s,a]=ke()?[Sr,Cr]:[jr(r),Er(r)];return{animation:t?`${S(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${S(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Ar=d.memo(({toast:e,position:t,style:r,children:s})=>{let a=e.height?Nr(e.position||t||"top-center",e.visible):{opacity:0},i=d.createElement(wr,{toast:e}),o=d.createElement(Or,{...e.ariaProps},F(e.message,e));return d.createElement(_r,{className:e.className,style:{...a,...r,...e.style}},typeof s=="function"?s({icon:i,message:o}):d.createElement(d.Fragment,null,i,o))});Jt(d.createElement);var Pr=({id:e,className:t,style:r,onHeightUpdate:s,children:a})=>{let i=d.useCallback(o=>{if(o){let c=()=>{let l=o.getBoundingClientRect().height;s(e,l)};c(),new MutationObserver(c).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return d.createElement("div",{ref:i,className:t,style:r},a)},kr=(e,t)=>{let r=e.includes("top"),s=r?{top:0}:{bottom:0},a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:ke()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...s,...a}},Lr=H`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,T=16,Dr=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:s,children:a,toasterId:i,containerStyle:o,containerClassName:c})=>{let{toasts:l,handlers:m}=ir(r,i);return d.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:T,left:T,right:T,bottom:T,pointerEvents:"none",...o},className:c,onMouseEnter:m.startPause,onMouseLeave:m.endPause},l.map(f=>{let u=f.position||t,p=m.calculateOffset(f,{reverseOrder:e,gutter:s,defaultPosition:t}),h=kr(u,p);return d.createElement(Pr,{id:f.id,key:f.id,onHeightUpdate:m.updateHeight,className:f.visible?Lr:"",style:h},f.type==="custom"?F(f.message,f):a?a(f):d.createElement(Ar,{toast:f,position:u}))}))},y=g;const V=Oe((e,t)=>({user:null,isLoading:!0,error:null,setUser:r=>e({user:r,isLoading:!1,error:null}),setLoading:r=>e({isLoading:r}),setError:r=>e({error:r}),login:async(r,s)=>{e({error:null});try{await at(k,r,s),y.success("Login success")}catch(a){throw e({error:a.code}),y.error("Login filed!"),a}},register:async(r,s,a)=>{e({error:null});try{const{user:i}=await st(k,s,a);y.success("Register success")}catch(i){throw e({error:i.code}),y.error("Register filed!"),i}},loginWithGoogle:async()=>{e({error:null});try{const r=new rt;await oe(k,r),y.success("Register success")}catch(r){throw e({error:r.code}),y.error("Register filed!"),r}},loginWithGithub:async()=>{e({error:null});try{const r=new tt;await oe(k,r),y.success("Register success")}catch(r){throw e({error:r.code}),y.error("Register filed!"),r}},updateUserAvatar:async r=>{const s=t().user;if(s)try{const a=O(N,"users",s.uid);return await D(a,{avatar:r}),e({user:{...s,avatar:r}}),y.success("Successful changed"),{success:!0,url:r}}catch(a){return y.error("Error in changing"),console.error("Avatar upload failed:",a),{success:!1,error:a.message}}},logout:async()=>{try{await et(k),y.success("Logout success")}catch(r){throw e({error:r.code}),y.error("Logout filed!"),r}}})),b=({type:e="header",to:t,title:r})=>{const s=e==="header"?"hover:text-red-400 transition-colors hidden md:block":"hover:text-red-400 transition";return n.jsx("li",{children:n.jsx(Y,{to:t,className:s,children:r})})},$r=()=>n.jsxs("nav",{className:"w-full bg-[#050505] h-14 md:h-16 flex items-center justify-between px-6 md:px-12 border-b border-gray-900 animate-pulse",children:[n.jsx("div",{className:"h-6 w-28 bg-red-900/40 rounded-md"}),n.jsxs("div",{className:"hidden md:flex items-center gap-8",children:[n.jsx("div",{className:"h-4 w-12 bg-gray-700/60 rounded"}),n.jsx("div",{className:"h-4 w-16 bg-gray-700/60 rounded"}),n.jsx("div",{className:"h-4 w-8 bg-gray-700/60 rounded"})]}),n.jsx("div",{className:"w-10 h-10 rounded-full bg-gray-700/80 shrink-0"})]}),Ir=()=>{const e=yt(50),{user:t,isLoading:r}=V();if(r)return n.jsx($r,{});const s=e?"bg-[#0a0a0a]/90 backdrop-blur-lg border-b border-white/5 backdrop-blur-md shadow-lg text-gray-200":"bg-gradient-to-b from-black/80 to-transparent";return n.jsx("nav",{className:`fixed top-0 z-40 w-full ${s}`,children:n.jsxs("div",{className:"container mx-auto px-6 py-4 flex items-center justify-between",children:[n.jsx("a",{href:"/",className:"text-2xl font-bold text-red-500 tracking-wider drop-shadow-md",children:"CINEMA"}),n.jsx("div",{className:"flex items-center gap-8 text-sm font-medium",children:n.jsxs("ul",{className:"flex items-center gap-8 text-sm font-medium",children:[n.jsx(b,{type:"header",to:"/",title:"HOME"}),n.jsx(b,{type:"header",to:"/search",title:"MOVIES"}),n.jsx(b,{type:"header",to:"/search",title:"TV"})]})}),n.jsx("div",{className:"flex items-center gap-4",children:t?n.jsx(Y,{to:"/account",className:"cursor-pointer",children:n.jsx("img",{src:t.avatar||"/images/UserAvatar.png",alt:t.name,className:"w-8 h-8 object-cover rounded-full"})}):n.jsx(Y,{to:"/login",className:"cursor-pointer",children:n.jsx(vt,{className:"w-4 h-4"})})})]})})};/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=(...e)=>e.filter((t,r,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===r).join(" ").trim();/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zr=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,s)=>s?s.toUpperCase():r.toLowerCase());/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=e=>{const t=zr(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var K={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tr=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},Ur=d.createContext({}),Mr=()=>d.useContext(Ur),Wr=d.forwardRef(({color:e,size:t,strokeWidth:r,absoluteStrokeWidth:s,className:a="",children:i,iconNode:o,...c},l)=>{const{size:m=24,strokeWidth:f=2,absoluteStrokeWidth:u=!1,color:p="currentColor",className:h=""}=Mr()??{},v=s??u?Number(r??f)*24/Number(t??m):r??f;return d.createElement("svg",{ref:l,...K,width:t??m??K.width,height:t??m??K.height,stroke:e??p,strokeWidth:v,className:Re("lucide",h,a),...!i&&!Tr(c)&&{"aria-hidden":"true"},...c},[...o.map(([P,I])=>d.createElement(P,I)),...Array.isArray(i)?i:[i]])});/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=(e,t)=>{const r=d.forwardRef(({className:s,...a},i)=>d.createElement(Wr,{ref:i,iconNode:t,className:Re(`lucide-${Rr(me(e))}`,`lucide-${e}`,s),...a}));return r.displayName=me(e),r};/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr=[["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20",key:"oj1oa8"}],["path",{d:"m20 7 2 .5-2 .5",key:"12nv4d"}],["path",{d:"M10 18v3",key:"1yea0a"}],["path",{d:"M14 17.75V21",key:"1pymcb"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61",key:"1npnn0"}]],Vr=re("bird",Fr);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Br=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],Hr=re("camera",Br);/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gr=[["path",{d:"m17 2-5 5-5-5",key:"16satq"}],["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",key:"1e6viu"}]],Zr=re("tv",Gr),qr=()=>n.jsxs("footer",{className:"bg-[#050505] border-t border-white/5 pt-10 pb-4 px-16",children:[n.jsxs("div",{className:"container mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 text-right",children:[n.jsxs("div",{className:"flex flex-col items-start justify-center",children:[n.jsx("a",{href:"/",className:"text-2xl font-bold text-red-500 tracking-wider drop-shadow-md",children:"CINEMA"}),n.jsx("p",{className:"text-gray-500 text-start text-sm leading-relaxed font-light",children:"The largest resource for downloading and watching high-quality movies, series, and animations."}),n.jsxs("div",{className:"flex items-center justify-start self-end gap-2 mt-3",children:[n.jsx(Q,{icon:n.jsx(Zr,{})}),n.jsx(Q,{icon:n.jsx(Vr,{})}),n.jsx(Q,{icon:n.jsx(Hr,{})})]})]}),n.jsxs("div",{className:"text-start",children:[n.jsx("h4",{className:"font-bold mb-4 text-white tracking-wide",children:"Quick Access"}),n.jsxs("ul",{className:"space-y-3 text-sm text-gray-500 font-light",children:[n.jsx(b,{type:"fotter",to:"/movies",title:"Feature films"}),n.jsx(b,{type:"fotter",to:"/series",title:"New TV series"}),n.jsx(b,{type:"fotter",to:"/search",title:"Advanced Search"})]})]}),n.jsxs("div",{className:"text-start",children:[n.jsx("h4",{className:"font-bold mb-4 text-white tracking-wide",children:"Support"}),n.jsxs("ul",{className:"space-y-3 text-sm text-gray-500 font-light",children:[n.jsx(b,{type:"fotter",to:"#",title:"Contact Us"}),n.jsx(b,{type:"fotter",to:"#",title:"Frequently Asked Questions"})]})]}),n.jsxs("div",{className:"text-start",children:[n.jsx("h4",{className:"font-bold mb-4 text-white tracking-wide",children:"Rules"}),n.jsxs("ul",{className:"space-y-3 text-sm text-gray-500 font-light",children:[n.jsx(b,{type:"fotter",to:"#",title:"Privacy"}),n.jsx(b,{type:"fotter",to:"#",title:"Terms of Use"})]})]})]}),n.jsxs("div",{className:"text-center text-xs text-gray-600 mt-6 border-t border-white/5 pt-4 tracking-wider",children:["© 2026 ",n.jsx("a",{href:"https://www.shams-js.ir",children:"Shams-js"})," - All rights reserved."]})]}),Q=({icon:e})=>n.jsx("div",{className:"text-sx p-2 rounded-full hover:bg-white/5 flex items-center justify-center text-gray-400 hover:text-red-400 transition-colors border border-white/5 duration-150",children:e}),Kr=()=>{const e=He();return n.jsxs("div",{className:"min-h-screen flex flex-col bg-dark-900",children:[n.jsx(Ir,{}),n.jsx("main",{className:"flex-1",children:n.jsx(Fe,{mode:"wait",children:n.jsx(Ve.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},children:n.jsx(ve,{})},e.pathname)})}),n.jsx(qr,{})]})},ze=({className:e="h-screen bg-[#0a0a0a] flex items-center justify-center text-gray-200",width:t=8,height:r=8})=>n.jsx("div",{className:e,children:n.jsxs("svg",{"aria-hidden":"true",className:`inline w-${t} h-${r} text-white-100 animate-spin fill-blue-600`,viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),n.jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]})}),Qr=()=>{const{user:e,isLoading:t}=V();return t?n.jsx(ze,{}):n.jsx(ve,{})},Yr=d.lazy(()=>$(()=>import("./index-Dzk2WzQP.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]))),pe=d.lazy(()=>$(()=>import("./index-CLEDthcy.js"),__vite__mapDeps([12,1,2,3,4,5,6,7,13,14,15,11]))),Jr=d.lazy(()=>$(()=>import("./index-D_Q8fsnU.js"),__vite__mapDeps([16,1,2,4,15,8,9,5,11]))),Xr=d.lazy(()=>$(()=>import("./index-CT56q3l0.js"),__vite__mapDeps([17,1,2,13,10,18,11]))),es=d.lazy(()=>$(()=>import("./index-CPXXbGBh.js"),__vite__mapDeps([19,1,2,5,14,18,9,15,11]))),ts=d.lazy(()=>$(()=>import("./index-PWtdzKRr.js"),__vite__mapDeps([20,1,2]))),rs=()=>n.jsx(d.Suspense,{fallback:n.jsx(ze,{}),children:n.jsxs(Ge,{children:[n.jsxs(j,{element:n.jsx(Kr,{}),children:[n.jsx(j,{index:!0,element:n.jsx(Yr,{})}),n.jsx(j,{path:"/movie/:id",element:n.jsx(pe,{type:"movie"})}),n.jsx(j,{path:"/tv/:id",element:n.jsx(pe,{type:"tv"})}),n.jsx(j,{path:"/search",element:n.jsx(Jr,{})})]}),n.jsx(j,{element:n.jsx(Qr,{}),children:n.jsx(j,{path:"/account",element:n.jsx(es,{})})}),n.jsx(j,{path:"/login",element:n.jsx(Xr,{})}),n.jsx(j,{path:"*",element:n.jsx(ts,{})})]})}),ss=()=>n.jsx(it,{children:n.jsx(rs,{})});var Te,he=Ze;Te=he.createRoot,he.hydrateRoot;const as=async e=>{const t=O(N,"users",e.uid);(await ee(t)).exists()?await D(t,{lastLogin:R()}):await ot(t,{username:e.displayName||"_",avatar:e.photoURL||null,email:e.email,createdAt:R(),lastLogin:R(),favorites:{},watchlist:{}})},os=async e=>{const t=O(N,"users",e),r=await ee(t);if(!r.exists())return{watchlist:{},favorites:{}};const s=r.data();return{watchlist:s.watchlist||{},favorites:s.favorites||{}}},ns=async(e,t)=>{await D(O(N,"users",e),{[`watchlist.${t.id}`]:{id:t.id,mediaType:t.mediaType,title:t.title||t.name,posterPath:t.poster_path,voteAverage:t.vote_average,releaseDate:t.release_date||t.first_air_date,addedAt:R()}})},is=async(e,t)=>{await D(O(N,"users",e),{[`watchlist.${t}`]:ye()})},cs=async(e,t)=>{await D(O(N,"users",e),{[`favorites.${t.id}`]:{id:t.id,mediaType:t.mediaType,title:t.title||t.name,posterPath:t.poster_path,voteAverage:t.vote_average,releaseDate:t.release_date||t.first_air_date,addedAt:R()}})},ls=async(e,t)=>{await D(O(N,"users",e),{[`favorites.${t}`]:ye()})},ds=async e=>{const t=await ee(O(N,"users",e));return t.exists()?t.data():null},ge=Oe((e,t)=>({watchlist:{},favorites:{},isLoading:!0,error:null,loadUserData:async r=>{e({isLoading:!0,error:null});try{const{watchlist:s,favorites:a}=await os(r);e({watchlist:s,favorites:a,isLoading:!1})}catch(s){e({error:s.message,isLoading:!1})}},toggleWatchlis:async(r,s)=>{const{watchlist:a}=t(),i=!!a[s.id],o=a,c={...a};i?delete c[s.id]:c[s.id]={...s,addedAt:Date.now()},e({watchlist:c});try{return i?await is(r,s.id):await ns(r,s),{success:!0}}catch(l){return e({watchlist:o,error:l.message}),{success:!1,error:l.message}}},toggleFavorites:async(r,s)=>{const{favorites:a}=t(),i=!!a[s.id],o=a,c={...a};i?delete c[s.id]:c[s.id]={...s,addedAt:Date.now()},e({favorites:c});try{return i?await ls(r,s.id):await cs(r,s),{success:!0}}catch(l){return e({favorites:o,error:l.message}),{success:!1,error:l.message}}},reset:()=>e({watchlist:{},favorites:{},isLoading:!1,error:null})}));function us({children:e}){return d.useEffect(()=>{const t=nt(k,async r=>{if(r){const s=await ds(r.uid);V.getState().setUser({...s,uid:r.uid}),await as(r),await ge.getState().loadUserData(r.uid)}else V.getState().setUser(null),ge.getState().reset()});return()=>t()},[]),e}const fs=({children:e})=>n.jsxs("div",{children:[n.jsx(Dr,{position:"top-center",reverseOrder:!1,gutter:8,toastOptions:{duration:3e3,style:{background:"#363636",color:"#fff"}}}),e]});Te(document.getElementById("root")).render(n.jsx(fs,{children:n.jsx(qe,{children:n.jsx(us,{children:n.jsx(ss,{})})})}));export{vs as B,we as G,ze as S,Zr as T,ge as a,re as c,V as u,y as z};
