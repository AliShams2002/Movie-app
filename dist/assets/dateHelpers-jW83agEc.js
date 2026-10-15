import{c as g,u,a as r,z as n}from"./index-CjS3KeUk.js";/**
 * @license lucide-react v1.24.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=[["path",{d:"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",key:"oz39mx"}]],v=g("bookmark",d);function h(s){const e=u(t=>t.user),c=r(t=>t.watchlist),i=r(t=>t.toggleWatchlis),o=!!c[s];return{isInWatchlist:o,toggle:async t=>{if(!e)return{needsLogin:!0};const a=await i(e.uid,t);return a.success?n.success(o?"Removed from watchlist":"Added to watchlist"):n.error("Operation failed. Please try again"),a}}}function m(s){const e=u(t=>t.user),c=r(t=>t.favorites),i=r(t=>t.toggleFavorites),o=!!c[s];return{isInFavorites:o,toggle:async t=>{if(!e)return{needsLogin:!0};const a=await i(e.uid,t);return a.success?n.success(o?"Removed from favorites":"Added to favorites"):n.error("Operation failed. Please try again"),a}}}const w=s=>new Date(s).toLocaleDateString();export{v as B,m as a,w as f,h as u};
