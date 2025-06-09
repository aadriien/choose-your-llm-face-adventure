var Wh=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports);var aw=Wh((sw,Mh)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=e(o);fetch(o.href,a)}})();const Eu=!1;var _a=Array.isArray,zh=Array.prototype.indexOf,ns=Array.from,Uh=Object.defineProperty,Yn=Object.getOwnPropertyDescriptor,zc=Object.getOwnPropertyDescriptors,Vh=Object.prototype,Gh=Array.prototype,rs=Object.getPrototypeOf,Iu=Object.isExtensible;function Hh(r){return r()}function Ri(r){for(var t=0;t<r.length;t++)r[t]()}function jh(r,t){if(Array.isArray(r))return r;if(!(Symbol.iterator in r))return Array.from(r);const e=[];for(const n of r)if(e.push(n),e.length===t)break;return e}const Wt=2,Uc=4,Ca=8,os=16,gn=32,Mr=64,as=128,It=256,Uo=512,pt=1024,tn=2048,rr=4096,mn=8192,is=16384,Vc=32768,ss=65536,qh=1<<17,Kh=1<<19,Gc=1<<20,ki=1<<21,Jn=Symbol("$state"),Xh=Symbol("legacy props"),$h=Symbol("");function Hc(r){return r===this.v}function Yh(r,t){return r!=r?t==t:r!==t||r!==null&&typeof r=="object"||typeof r=="function"}function us(r){return!Yh(r,this.v)}function Jh(r){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Qh(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Zh(r){throw new Error("https://svelte.dev/e/effect_orphan")}function ed(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function td(r){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}function nd(r){throw new Error("https://svelte.dev/e/props_invalid_value")}function rd(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function od(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ad(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let Or=!1,id=!1;function sd(){Or=!0}const cs=1,ls=2,jc=4,ud=8,cd=16,ld=1,fd=2,hd=4,dd=8,pd=16,vd=1,md=2,lt=Symbol(),gd="http://www.w3.org/1999/xhtml";function fs(r){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let Ae=null;function Ru(r){Ae=r}function Ea(r,t=!1,e){var n=Ae={p:Ae,c:null,d:!1,e:null,m:!1,s:r,x:null,l:null};Or&&!t&&(Ae.l={s:null,u:null,r1:[],r2:Qr(!1)}),hs(()=>{n.d=!0})}function Ia(r){const t=Ae;if(t!==null){r!==void 0&&(t.x=r);const i=t.e;if(i!==null){var e=Se,n=De;t.e=null;try{for(var o=0;o<i.length;o++){var a=i[o];Bn(a.effect),nn(a.reaction),ds(a.fn)}}finally{Bn(e),nn(n)}}Ae=t.p,t.m=!0}return r||{}}function uo(){return!Or||Ae!==null&&Ae.l===null}function qn(r){if(typeof r!="object"||r===null||Jn in r)return r;const t=rs(r);if(t!==Vh&&t!==Gh)return r;var e=new Map,n=_a(r),o=In(0),a=De,i=s=>{var u=De;nn(a);var c=s();return nn(u),c};return n&&e.set("length",In(r.length)),new Proxy(r,{defineProperty(s,u,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&rd();var l=e.get(u);return l===void 0?(l=i(()=>In(c.value)),e.set(u,l)):Re(l,i(()=>qn(c.value))),!0},deleteProperty(s,u){var c=e.get(u);if(c===void 0)u in s&&(e.set(u,i(()=>In(lt))),Ya(o));else{if(n&&typeof u=="string"){var l=e.get("length"),f=Number(u);Number.isInteger(f)&&f<l.v&&Re(l,f)}Re(c,lt),Ya(o)}return!0},get(s,u,c){var d;if(u===Jn)return r;var l=e.get(u),f=u in s;if(l===void 0&&(!f||(d=Yn(s,u))!=null&&d.writable)&&(l=i(()=>In(qn(f?s[u]:lt))),e.set(u,l)),l!==void 0){var h=j(l);return h===lt?void 0:h}return Reflect.get(s,u,c)},getOwnPropertyDescriptor(s,u){var c=Reflect.getOwnPropertyDescriptor(s,u);if(c&&"value"in c){var l=e.get(u);l&&(c.value=j(l))}else if(c===void 0){var f=e.get(u),h=f==null?void 0:f.v;if(f!==void 0&&h!==lt)return{enumerable:!0,configurable:!0,value:h,writable:!0}}return c},has(s,u){var h;if(u===Jn)return!0;var c=e.get(u),l=c!==void 0&&c.v!==lt||Reflect.has(s,u);if(c!==void 0||Se!==null&&(!l||(h=Yn(s,u))!=null&&h.writable)){c===void 0&&(c=i(()=>In(l?qn(s[u]):lt)),e.set(u,c));var f=j(c);if(f===lt)return!1}return l},set(s,u,c,l){var x;var f=e.get(u),h=u in s;if(n&&u==="length")for(var d=c;d<f.v;d+=1){var p=e.get(d+"");p!==void 0?Re(p,lt):d in s&&(p=i(()=>In(lt)),e.set(d+"",p))}f===void 0?(!h||(x=Yn(s,u))!=null&&x.writable)&&(f=i(()=>In(void 0)),Re(f,i(()=>qn(c))),e.set(u,f)):(h=f.v!==lt,Re(f,i(()=>qn(c))));var m=Reflect.getOwnPropertyDescriptor(s,u);if(m!=null&&m.set&&m.set.call(l,c),!h){if(n&&typeof u=="string"){var v=e.get("length"),g=Number(u);Number.isInteger(g)&&g>=v.v&&Re(v,g+1)}Ya(o)}return!0},ownKeys(s){j(o);var u=Reflect.ownKeys(s).filter(f=>{var h=e.get(f);return h===void 0||h.v!==lt});for(var[c,l]of e)l.v!==lt&&!(c in s)&&u.push(c);return u},setPrototypeOf(){od()}})}function Ya(r,t=1){Re(r,r.v+t)}function Dr(r){var t=Wt|tn,e=De!==null&&(De.f&Wt)!==0?De:null;return Se===null||e!==null&&(e.f&It)!==0?t|=It:Se.f|=Gc,{ctx:Ae,deps:null,effects:null,equals:Hc,f:t,fn:r,reactions:null,rv:0,v:null,wv:0,parent:e??Se}}function yd(r){const t=Dr(r);return il(t),t}function wr(r){const t=Dr(r);return t.equals=us,t}function qc(r){var t=r.effects;if(t!==null){r.effects=null;for(var e=0;e<t.length;e+=1)On(t[e])}}function xd(r){for(var t=r.parent;t!==null;){if((t.f&Wt)===0)return t;t=t.parent}return null}function Kc(r){var t,e=Se;Bn(xd(r));try{qc(r),t=ll(r)}finally{Bn(e)}return t}function Xc(r){var t=Kc(r);if(r.equals(t)||(r.v=t,r.wv=ul()),!Lr){var e=(Dn||(r.f&It)!==0)&&r.deps!==null?rr:pt;zt(r,e)}}const Jr=new Map;function Qr(r,t){var e={f:0,v:r,reactions:null,equals:Hc,rv:0,wv:0};return e}function In(r,t){const e=Qr(r);return il(e),e}function Ue(r,t=!1){var n;const e=Qr(r);return t||(e.equals=us),Or&&Ae!==null&&Ae.l!==null&&((n=Ae.l).s??(n.s=[])).push(e),e}function Lo(r,t){return Re(r,tr(()=>j(r))),t}function Re(r,t,e=!1){De!==null&&!Xt&&uo()&&(De.f&(Wt|os))!==0&&!(ct!=null&&ct.includes(r))&&ad();let n=e?qn(t):t;return Si(r,n)}function Si(r,t){if(!r.equals(t)){var e=r.v;Lr?Jr.set(r,t):Jr.set(r,e),r.v=t,(r.f&Wt)!==0&&((r.f&tn)!==0&&Kc(r),zt(r,(r.f&It)===0?pt:rr)),r.wv=ul(),$c(r,tn),uo()&&Se!==null&&(Se.f&pt)!==0&&(Se.f&(gn|Mr))===0&&(At===null?Td([r]):At.push(r))}return t}function $c(r,t){var e=r.reactions;if(e!==null)for(var n=uo(),o=e.length,a=0;a<o;a++){var i=e[a],s=i.f;(s&tn)===0&&(!n&&i===Se||(zt(i,t),(s&(pt|It))!==0&&((s&Wt)!==0?$c(i,rr):Sa(i))))}}let bd=!1;var ku,Yc,Jc,Qc;function wd(){if(ku===void 0){ku=window,Yc=/Firefox/.test(navigator.userAgent);var r=Element.prototype,t=Node.prototype,e=Text.prototype;Jc=Yn(t,"firstChild").get,Qc=Yn(t,"nextSibling").get,Iu(r)&&(r.__click=void 0,r.__className=void 0,r.__attributes=null,r.__style=void 0,r.__e=void 0),Iu(e)&&(e.__t=void 0)}}function Ra(r=""){return document.createTextNode(r)}function Vo(r){return Jc.call(r)}function ka(r){return Qc.call(r)}function me(r,t){return Vo(r)}function _d(r,t){{var e=Vo(r);return e instanceof Comment&&e.data===""?ka(e):e}}function _e(r,t=1,e=!1){let n=r;for(;t--;)n=ka(n);return n}function Cd(r){r.textContent=""}function Zc(r){Se===null&&De===null&&Zh(),De!==null&&(De.f&It)!==0&&Se===null&&Qh(),Lr&&Jh()}function Ed(r,t){var e=t.last;e===null?t.last=t.first=r:(e.next=r,r.prev=e,t.last=r)}function Br(r,t,e,n=!0){var o=Se,a={ctx:Ae,deps:null,nodes_start:null,nodes_end:null,f:r|tn,first:null,fn:t,last:null,next:null,parent:o,prev:null,teardown:null,transitions:null,wv:0};if(e)try{ys(a),a.f|=Vc}catch(u){throw On(a),u}else t!==null&&Sa(a);var i=e&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(Gc|as))===0;if(!i&&n&&(o!==null&&Ed(a,o),De!==null&&(De.f&Wt)!==0)){var s=De;(s.effects??(s.effects=[])).push(a)}return a}function hs(r){const t=Br(Ca,null,!1);return zt(t,pt),t.teardown=r,t}function Di(r){Zc();var t=Se!==null&&(Se.f&gn)!==0&&Ae!==null&&!Ae.m;if(t){var e=Ae;(e.e??(e.e=[])).push({fn:r,effect:Se,reaction:De})}else{var n=ds(r);return n}}function Id(r){return Zc(),ps(r)}function Rd(r){const t=Br(Mr,r,!0);return(e={})=>new Promise(n=>{e.outro?Go(t,()=>{On(t),n(void 0)}):(On(t),n(void 0))})}function ds(r){return Br(Uc,r,!1)}function ps(r){return Br(Ca,r,!0)}function Mt(r,t=[],e=Dr){const n=t.map(e);return vs(()=>r(...n.map(j)))}function vs(r,t=0){return Br(Ca|os|t,r,!0)}function Zr(r,t=!0){return Br(Ca|gn,r,!0,t)}function el(r){var t=r.teardown;if(t!==null){const e=Lr,n=De;Su(!0),nn(null);try{t.call(null)}finally{Su(e),nn(n)}}}function tl(r,t=!1){var e=r.first;for(r.first=r.last=null;e!==null;){var n=e.next;(e.f&Mr)!==0?e.parent=null:On(e,t),e=n}}function kd(r){for(var t=r.first;t!==null;){var e=t.next;(t.f&gn)===0&&On(t),t=e}}function On(r,t=!0){var e=!1;(t||(r.f&Kh)!==0)&&r.nodes_start!==null&&r.nodes_end!==null&&(Sd(r.nodes_start,r.nodes_end),e=!0),tl(r,t&&!e),Xo(r,0),zt(r,is);var n=r.transitions;if(n!==null)for(const a of n)a.stop();el(r);var o=r.parent;o!==null&&o.first!==null&&nl(r),r.next=r.prev=r.teardown=r.ctx=r.deps=r.fn=r.nodes_start=r.nodes_end=null}function Sd(r,t){for(;r!==null;){var e=r===t?null:ka(r);r.remove(),r=e}}function nl(r){var t=r.parent,e=r.prev,n=r.next;e!==null&&(e.next=n),n!==null&&(n.prev=e),t!==null&&(t.first===r&&(t.first=n),t.last===r&&(t.last=e))}function Go(r,t){var e=[];ms(r,e,!0),rl(e,()=>{On(r),t&&t()})}function rl(r,t){var e=r.length;if(e>0){var n=()=>--e||t();for(var o of r)o.out(n)}else t()}function ms(r,t,e){if((r.f&mn)===0){if(r.f^=mn,r.transitions!==null)for(const i of r.transitions)(i.is_global||e)&&t.push(i);for(var n=r.first;n!==null;){var o=n.next,a=(n.f&ss)!==0||(n.f&gn)!==0;ms(n,t,a?e:!1),n=o}}}function Ho(r){ol(r,!0)}function ol(r,t){if((r.f&mn)!==0){r.f^=mn,(r.f&pt)===0&&(r.f^=pt),co(r)&&(zt(r,tn),Sa(r));for(var e=r.first;e!==null;){var n=e.next,o=(e.f&ss)!==0||(e.f&gn)!==0;ol(e,o?t:!1),e=n}if(r.transitions!==null)for(const a of r.transitions)(a.is_global||t)&&a.in()}}let jo=[];function Dd(){var r=jo;jo=[],Ri(r)}function gs(r){jo.length===0&&queueMicrotask(Dd),jo.push(r)}function Ad(r){var t=Se;if((t.f&Vc)===0){if((t.f&as)===0)throw r;t.fn(r)}else al(r,t)}function al(r,t){for(;t!==null;){if((t.f&as)!==0)try{t.fn(r);return}catch{}t=t.parent}throw r}let Ai=!1,qo=null,Qn=!1,Lr=!1;function Su(r){Lr=r}let Wo=[],De=null,Xt=!1;function nn(r){De=r}let Se=null;function Bn(r){Se=r}let ct=null;function il(r){De!==null&&De.f&ki&&(ct===null?ct=[r]:ct.push(r))}let st=null,xt=0,At=null;function Td(r){At=r}let sl=1,Ko=0,Dn=!1;function ul(){return++sl}function co(r){var f;var t=r.f;if((t&tn)!==0)return!0;if((t&rr)!==0){var e=r.deps,n=(t&It)!==0;if(e!==null){var o,a,i=(t&Uo)!==0,s=n&&Se!==null&&!Dn,u=e.length;if(i||s){var c=r,l=c.parent;for(o=0;o<u;o++)a=e[o],(i||!((f=a==null?void 0:a.reactions)!=null&&f.includes(c)))&&(a.reactions??(a.reactions=[])).push(c);i&&(c.f^=Uo),s&&l!==null&&(l.f&It)===0&&(c.f^=It)}for(o=0;o<u;o++)if(a=e[o],co(a)&&Xc(a),a.wv>r.wv)return!0}(!n||Se!==null&&!Dn)&&zt(r,pt)}return!1}function cl(r,t,e=!0){var n=r.reactions;if(n!==null)for(var o=0;o<n.length;o++){var a=n[o];ct!=null&&ct.includes(r)||((a.f&Wt)!==0?cl(a,t,!1):t===a&&(e?zt(a,tn):(a.f&pt)!==0&&zt(a,rr),Sa(a)))}}function ll(r){var d;var t=st,e=xt,n=At,o=De,a=Dn,i=ct,s=Ae,u=Xt,c=r.f;st=null,xt=0,At=null,Dn=(c&It)!==0&&(Xt||!Qn||De===null),De=(c&(gn|Mr))===0?r:null,ct=null,Ru(r.ctx),Xt=!1,Ko++,r.f|=ki;try{var l=(0,r.fn)(),f=r.deps;if(st!==null){var h;if(Xo(r,xt),f!==null&&xt>0)for(f.length=xt+st.length,h=0;h<st.length;h++)f[xt+h]=st[h];else r.deps=f=st;if(!Dn)for(h=xt;h<f.length;h++)((d=f[h]).reactions??(d.reactions=[])).push(r)}else f!==null&&xt<f.length&&(Xo(r,xt),f.length=xt);if(uo()&&At!==null&&!Xt&&f!==null&&(r.f&(Wt|rr|tn))===0)for(h=0;h<At.length;h++)cl(At[h],r);return o!==null&&o!==r&&(Ko++,At!==null&&(n===null?n=At:n.push(...At))),l}catch(p){Ad(p)}finally{st=t,xt=e,At=n,De=o,Dn=a,ct=i,Ru(s),Xt=u,r.f^=ki}}function Nd(r,t){let e=t.reactions;if(e!==null){var n=zh.call(e,r);if(n!==-1){var o=e.length-1;o===0?e=t.reactions=null:(e[n]=e[o],e.pop())}}e===null&&(t.f&Wt)!==0&&(st===null||!st.includes(t))&&(zt(t,rr),(t.f&(It|Uo))===0&&(t.f^=Uo),qc(t),Xo(t,0))}function Xo(r,t){var e=r.deps;if(e!==null)for(var n=t;n<e.length;n++)Nd(r,e[n])}function ys(r){var t=r.f;if((t&is)===0){zt(r,pt);var e=Se,n=Qn;Se=r,Qn=!0;try{(t&os)!==0?kd(r):tl(r),el(r);var o=ll(r);r.teardown=typeof o=="function"?o:null,r.wv=sl;var a=r.deps,i;Eu&&id&&r.f&tn}finally{Qn=n,Se=e}}}function Fd(){try{ed()}catch(r){if(qo!==null)al(r,qo);else throw r}}function Pd(){var r=Qn;try{var t=0;for(Qn=!0;Wo.length>0;){t++>1e3&&Fd();var e=Wo,n=e.length;Wo=[];for(var o=0;o<n;o++){var a=Od(e[o]);Md(a)}Jr.clear()}}finally{Ai=!1,Qn=r,qo=null}}function Md(r){var t=r.length;if(t!==0)for(var e=0;e<t;e++){var n=r[e];(n.f&(is|mn))===0&&co(n)&&(ys(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?nl(n):n.fn=null))}}function Sa(r){Ai||(Ai=!0,queueMicrotask(Pd));for(var t=qo=r;t.parent!==null;){t=t.parent;var e=t.f;if((e&(Mr|gn))!==0){if((e&pt)===0)return;t.f^=pt}}Wo.push(t)}function Od(r){for(var t=[],e=r;e!==null;){var n=e.f,o=(n&(gn|Mr))!==0,a=o&&(n&pt)!==0;if(!a&&(n&mn)===0){(n&Uc)!==0?t.push(e):o?e.f^=pt:co(e)&&ys(e);var i=e.first;if(i!==null){e=i;continue}}var s=e.parent;for(e=e.next;e===null&&s!==null;)e=s.next,s=s.parent}return t}function j(r){var t=r.f,e=(t&Wt)!==0;if(De!==null&&!Xt){if(!(ct!=null&&ct.includes(r))){var n=De.deps;r.rv<Ko&&(r.rv=Ko,st===null&&n!==null&&n[xt]===r?xt++:st===null?st=[r]:(!Dn||!st.includes(r))&&st.push(r))}}else if(e&&r.deps===null&&r.effects===null){var o=r,a=o.parent;a!==null&&(a.f&It)===0&&(o.f^=It)}return e&&(o=r,co(o)&&Xc(o)),Lr&&Jr.has(r)?Jr.get(r):r.v}function tr(r){var t=Xt;try{return Xt=!0,r()}finally{Xt=t}}const Bd=-7169;function zt(r,t){r.f=r.f&Bd|t}function Ld(r){if(!(typeof r!="object"||!r||r instanceof EventTarget)){if(Jn in r)Ti(r);else if(!Array.isArray(r))for(let t in r){const e=r[t];typeof e=="object"&&e&&Jn in e&&Ti(e)}}}function Ti(r,t=new Set){if(typeof r=="object"&&r!==null&&!(r instanceof EventTarget)&&!t.has(r)){t.add(r),r instanceof Date&&r.getTime();for(let n in r)try{Ti(r[n],t)}catch{}const e=rs(r);if(e!==Object.prototype&&e!==Array.prototype&&e!==Map.prototype&&e!==Set.prototype&&e!==Date.prototype){const n=zc(e);for(let o in n){const a=n[o].get;if(a)try{a.call(r)}catch{}}}}}const Wd=["touchstart","touchmove"];function zd(r){return Wd.includes(r)}let Du=!1;function Ud(){Du||(Du=!0,document.addEventListener("reset",r=>{Promise.resolve().then(()=>{var t;if(!r.defaultPrevented)for(const e of r.target.elements)(t=e.__on_r)==null||t.call(e)})},{capture:!0}))}function fl(r){var t=De,e=Se;nn(null),Bn(null);try{return r()}finally{nn(t),Bn(e)}}function Vd(r,t,e,n=e){r.addEventListener(t,()=>fl(e));const o=r.__on_r;o?r.__on_r=()=>{o(),n(!0)}:r.__on_r=()=>n(!0),Ud()}const Gd=new Set,Au=new Set;function Hd(r,t,e,n={}){function o(a){if(n.capture||jr.call(t,a),!a.cancelBubble)return fl(()=>e==null?void 0:e.call(this,a))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?gs(()=>{t.addEventListener(r,o,n)}):t.addEventListener(r,o,n),o}function hl(r,t,e,n,o){var a={capture:n,passive:o},i=Hd(r,t,e,a);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&hs(()=>{t.removeEventListener(r,i,a)})}function jr(r){var x;var t=this,e=t.ownerDocument,n=r.type,o=((x=r.composedPath)==null?void 0:x.call(r))||[],a=o[0]||r.target,i=0,s=r.__root;if(s){var u=o.indexOf(s);if(u!==-1&&(t===document||t===window)){r.__root=t;return}var c=o.indexOf(t);if(c===-1)return;u<=c&&(i=u)}if(a=o[i]||r.target,a!==t){Uh(r,"currentTarget",{configurable:!0,get(){return a||e}});var l=De,f=Se;nn(null),Bn(null);try{for(var h,d=[];a!==null;){var p=a.assignedSlot||a.parentNode||a.host||null;try{var m=a["__"+n];if(m!=null&&(!a.disabled||r.target===a))if(_a(m)){var[v,...g]=m;v.apply(a,[r,...g])}else m.call(a,r)}catch(w){h?d.push(w):h=w}if(r.cancelBubble||p===t||p===null)break;a=p}if(h){for(let w of d)queueMicrotask(()=>{throw w});throw h}}finally{r.__root=t,delete r.currentTarget,nn(l),Bn(f)}}}function jd(r){var t=document.createElement("template");return t.innerHTML=r.replaceAll("<!>","<!---->"),t.content}function $o(r,t){var e=Se;e.nodes_start===null&&(e.nodes_start=r,e.nodes_end=t)}function Ye(r,t){var e=(t&vd)!==0,n=(t&md)!==0,o,a=!r.startsWith("<!>");return()=>{o===void 0&&(o=jd(a?r:"<!>"+r),e||(o=Vo(o)));var i=n||Yc?document.importNode(o,!0):o.cloneNode(!0);if(e){var s=Vo(i),u=i.lastChild;$o(s,u)}else $o(i,i);return i}}function _o(r=""){{var t=Ra(r+"");return $o(t,t),t}}function qd(){var r=document.createDocumentFragment(),t=document.createComment(""),e=Ra();return r.append(t,e),$o(t,e),r}function Fe(r,t){r!==null&&r.before(t)}function qt(r,t){var e=t==null?"":typeof t=="object"?t+"":t;e!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=e,r.nodeValue=e+"")}function Kd(r,t){return Xd(r,t)}const fr=new Map;function Xd(r,{target:t,anchor:e,props:n={},events:o,context:a,intro:i=!0}){wd();var s=new Set,u=f=>{for(var h=0;h<f.length;h++){var d=f[h];if(!s.has(d)){s.add(d);var p=zd(d);t.addEventListener(d,jr,{passive:p});var m=fr.get(d);m===void 0?(document.addEventListener(d,jr,{passive:p}),fr.set(d,1)):fr.set(d,m+1)}}};u(ns(Gd)),Au.add(u);var c=void 0,l=Rd(()=>{var f=e??t.appendChild(Ra());return Zr(()=>{if(a){Ea({});var h=Ae;h.c=a}o&&(n.$$events=o),c=r(f,n)||{},a&&Ia()}),()=>{var p;for(var h of s){t.removeEventListener(h,jr);var d=fr.get(h);--d===0?(document.removeEventListener(h,jr),fr.delete(h)):fr.set(h,d)}Au.delete(u),f!==e&&((p=f.parentNode)==null||p.removeChild(f))}});return $d.set(c,l),c}let $d=new WeakMap;function vn(r,t,[e,n]=[0,0]){var o=r,a=null,i=null,s=lt,u=e>0?ss:0,c=!1;const l=(h,d=!0)=>{c=!0,f(d,h)},f=(h,d)=>{s!==(s=h)&&(s?(a?Ho(a):d&&(a=Zr(()=>d(o))),i&&Go(i,()=>{i=null})):(i?Ho(i):d&&(i=Zr(()=>d(o,[e+1,n]))),a&&Go(a,()=>{a=null})))};vs(()=>{c=!1,t(l),c||f(null,null)},u)}function qr(r,t){return t}function Yd(r,t,e,n){for(var o=[],a=t.length,i=0;i<a;i++)ms(t[i].e,o,!0);var s=a>0&&o.length===0&&e!==null;if(s){var u=e.parentNode;Cd(u),u.append(e),n.clear(),Sn(r,t[0].prev,t[a-1].next)}rl(o,()=>{for(var c=0;c<a;c++){var l=t[c];s||(n.delete(l.k),Sn(r,l.prev,l.next)),On(l.e,!s)}})}function Kr(r,t,e,n,o,a=null){var i=r,s={flags:t,items:new Map,first:null},u=(t&jc)!==0;if(u){var c=r;i=c.appendChild(Ra())}var l=null,f=!1,h=wr(()=>{var d=e();return _a(d)?d:d==null?[]:ns(d)});vs(()=>{var d=j(h),p=d.length;f&&p===0||(f=p===0,Jd(d,s,i,o,t,n,e),a!==null&&(p===0?l?Ho(l):l=Zr(()=>a(i)):l!==null&&Go(l,()=>{l=null})),j(h))})}function Jd(r,t,e,n,o,a,i){var M,O,U,z;var s=(o&ud)!==0,u=(o&(cs|ls))!==0,c=r.length,l=t.items,f=t.first,h=f,d,p=null,m,v=[],g=[],x,w,y,b;if(s)for(b=0;b<c;b+=1)x=r[b],w=a(x,b),y=l.get(w),y!==void 0&&((M=y.a)==null||M.measure(),(m??(m=new Set)).add(y));for(b=0;b<c;b+=1){if(x=r[b],w=a(x,b),y=l.get(w),y===void 0){var _=h?h.e.nodes_start:e;p=Zd(_,t,p,p===null?t.first:p.next,x,w,b,n,o,i),l.set(w,p),v=[],g=[],h=p.next;continue}if(u&&Qd(y,x,b,o),(y.e.f&mn)!==0&&(Ho(y.e),s&&((O=y.a)==null||O.unfix(),(m??(m=new Set)).delete(y))),y!==h){if(d!==void 0&&d.has(y)){if(v.length<g.length){var E=g[0],I;p=E.prev;var R=v[0],k=v[v.length-1];for(I=0;I<v.length;I+=1)Tu(v[I],E,e);for(I=0;I<g.length;I+=1)d.delete(g[I]);Sn(t,R.prev,k.next),Sn(t,p,R),Sn(t,k,E),h=E,p=k,b-=1,v=[],g=[]}else d.delete(y),Tu(y,h,e),Sn(t,y.prev,y.next),Sn(t,y,p===null?t.first:p.next),Sn(t,p,y),p=y;continue}for(v=[],g=[];h!==null&&h.k!==w;)(h.e.f&mn)===0&&(d??(d=new Set)).add(h),g.push(h),h=h.next;if(h===null)continue;y=h}v.push(y),p=y,h=y.next}if(h!==null||d!==void 0){for(var T=d===void 0?[]:ns(d);h!==null;)(h.e.f&mn)===0&&T.push(h),h=h.next;var A=T.length;if(A>0){var B=(o&jc)!==0&&c===0?e:null;if(s){for(b=0;b<A;b+=1)(U=T[b].a)==null||U.measure();for(b=0;b<A;b+=1)(z=T[b].a)==null||z.fix()}Yd(t,T,B,l)}}s&&gs(()=>{var W;if(m!==void 0)for(y of m)(W=y.a)==null||W.apply()}),Se.first=t.first&&t.first.e,Se.last=p&&p.e}function Qd(r,t,e,n){(n&cs)!==0&&Si(r.v,t),(n&ls)!==0?Si(r.i,e):r.i=e}function Zd(r,t,e,n,o,a,i,s,u,c){var l=(u&cs)!==0,f=(u&cd)===0,h=l?f?Ue(o):Qr(o):o,d=(u&ls)===0?i:Qr(i),p={i:d,v:h,k:a,a:null,e:null,prev:e,next:n};try{return p.e=Zr(()=>s(r,h,d,c),bd),p.e.prev=e&&e.e,p.e.next=n&&n.e,e===null?t.first=p:(e.next=p,e.e.next=p.e),n!==null&&(n.prev=p,n.e.prev=p.e),p}finally{}}function Tu(r,t,e){for(var n=r.next?r.next.e.nodes_start:e,o=t?t.e.nodes_start:e,a=r.e.nodes_start;a!==n;){var i=ka(a);o.before(a),a=i}}function Sn(r,t,e){t===null?r.first=e:(t.next=e,t.e.next=e&&e.e),e!==null&&(e.prev=t,e.e.prev=t&&t.e)}const ep=Symbol("is custom element"),tp=Symbol("is html");function Yo(r,t,e,n){var o=np(r);o[t]!==(o[t]=e)&&(t==="loading"&&(r[$h]=e),e==null?r.removeAttribute(t):typeof e!="string"&&rp(r).includes(t)?r[t]=e:r.setAttribute(t,e))}function np(r){return r.__attributes??(r.__attributes={[ep]:r.nodeName.includes("-"),[tp]:r.namespaceURI===gd})}var Nu=new Map;function rp(r){var t=Nu.get(r.nodeName);if(t)return t;Nu.set(r.nodeName,t=[]);for(var e,n=r,o=Element.prototype;o!==n;){e=zc(n);for(var a in e)e[a].set&&t.push(a);n=rs(n)}return t}function hr(r,t,e=t){var n=uo();Vd(r,"input",o=>{var a=o?r.defaultValue:r.value;if(a=Ja(r)?Qa(a):a,e(a),n&&a!==(a=t())){var i=r.selectionStart,s=r.selectionEnd;r.value=a??"",s!==null&&(r.selectionStart=i,r.selectionEnd=Math.min(s,r.value.length))}}),tr(t)==null&&r.value&&e(Ja(r)?Qa(r.value):r.value),ps(()=>{var o=t();Ja(r)&&o===Qa(r.value)||r.type==="date"&&!o&&!r.value||o!==r.value&&(r.value=o??"")})}function Ja(r){var t=r.type;return t==="number"||t==="range"}function Qa(r){return r===""?null:+r}function Fu(r,t,e){var n=Yn(r,t);n&&n.set&&(r[t]=e,hs(()=>{r[t]=null}))}function Pu(r,t){return r===t||(r==null?void 0:r[Jn])===t}function Jo(r={},t,e,n){return ds(()=>{var o,a;return ps(()=>{o=a,a=[],tr(()=>{r!==e(...a)&&(t(r,...a),o&&Pu(e(...o),r)&&t(null,...o))})}),()=>{gs(()=>{a&&Pu(e(...a),r)&&t(null,...a)})}}),r}function xs(r=!1){const t=Ae,e=t.l.u;if(!e)return;let n=()=>Ld(t.s);if(r){let o=0,a={};const i=Dr(()=>{let s=!1;const u=t.s;for(const c in u)u[c]!==a[c]&&(a[c]=u[c],s=!0);return s&&o++,o});n=()=>j(i)}e.b.length&&Id(()=>{Mu(t,n),Ri(e.b)}),Di(()=>{const o=tr(()=>e.m.map(Hh));return()=>{for(const a of o)typeof a=="function"&&a()}}),e.a.length&&Di(()=>{Mu(t,n),Ri(e.a)})}function Mu(r,t){if(r.l.s)for(const e of r.l.s)j(e);t()}let Co=!1;function op(r){var t=Co;try{return Co=!1,[r(),Co]}finally{Co=t}}function Ou(r){var t;return((t=r.ctx)==null?void 0:t.d)??!1}function Qo(r,t,e,n){var _;var o=(e&ld)!==0,a=!Or||(e&fd)!==0,i=(e&dd)!==0,s=(e&pd)!==0,u=!1,c;i?[c,u]=op(()=>r[t]):c=r[t];var l=Jn in r||Xh in r,f=i&&(((_=Yn(r,t))==null?void 0:_.set)??(l&&t in r&&(E=>r[t]=E)))||void 0,h=n,d=!0,p=!1,m=()=>(p=!0,d&&(d=!1,s?h=tr(n):h=n),h);c===void 0&&n!==void 0&&(f&&a&&nd(),c=m(),f&&f(c));var v;if(a)v=()=>{var E=r[t];return E===void 0?m():(d=!0,p=!1,E)};else{var g=(o?Dr:wr)(()=>r[t]);g.f|=qh,v=()=>{var E=j(g);return E!==void 0&&(h=void 0),E===void 0?h:E}}if((e&hd)===0&&a)return v;if(f){var x=r.$$legacy;return function(E,I){return arguments.length>0?((!a||!I||x||u)&&f(I?v():E),E):v()}}var w=!1,y=Ue(c),b=Dr(()=>{var E=v(),I=j(y);return w?(w=!1,I):y.v=E});return i&&j(b),o||(b.equals=us),function(E,I){if(arguments.length>0){const R=I?j(b):a&&i?qn(E):E;if(!b.equals(R)){if(w=!0,Re(y,R),p&&h!==void 0&&(h=R),Ou(b))return E;tr(()=>j(b))}return E}return Ou(b)?b.v:j(b)}}function dl(r){Ae===null&&fs(),Or&&Ae.l!==null?pl(Ae).m.push(r):Di(()=>{const t=tr(r);if(typeof t=="function")return t})}function ap(r,t,{bubbles:e=!1,cancelable:n=!1}={}){return new CustomEvent(r,{detail:t,bubbles:e,cancelable:n})}function ip(){const r=Ae;return r===null&&fs(),(t,e,n)=>{var a;const o=(a=r.s.$$events)==null?void 0:a[t];if(o){const i=_a(o)?o.slice():[o],s=ap(t,e,n);for(const u of i)u.call(r.x,s);return!s.defaultPrevented}return!0}}function sp(r){Ae===null&&fs(),Ae.l===null&&td(),pl(Ae).a.push(r)}function pl(r){var t=r.l;return t.u??(t.u={a:[],b:[],m:[]})}const up="5";var Wc;typeof window<"u"&&((Wc=window.__svelte??(window.__svelte={})).v??(Wc.v=new Set)).add(up);sd();/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var vl=function(r,t){return(vl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var o in n)n.hasOwnProperty(o)&&(e[o]=n[o])})(r,t)};function Ut(r,t){function e(){this.constructor=r}vl(r,t),r.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}function Y(r,t,e,n){return new(e||(e=Promise))(function(o,a){function i(c){try{u(n.next(c))}catch(l){a(l)}}function s(c){try{u(n.throw(c))}catch(l){a(l)}}function u(c){c.done?o(c.value):new e(function(l){l(c.value)}).then(i,s)}u((n=n.apply(r,[])).next())})}function J(r,t){var e,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(u){return function(c){return function(l){if(e)throw new TypeError("Generator is already executing.");for(;i;)try{if(e=1,n&&(o=2&l[0]?n.return:l[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,l[1])).done)return o;switch(n=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,n=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){i=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){i.label=l[1];break}if(l[0]===6&&i.label<o[1]){i.label=o[1],o=l;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(l);break}o[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(r,i)}catch(f){l=[6,f],n=0}finally{e=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([u,c])}}}var cp=function(){function r(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.populateURLFlags()}return r.prototype.setPlatform=function(t,e){this.platform!=null&&console.warn("Platform "+this.platformName+" has already been set. Overwriting the platform with "+e+"."),this.platformName=t,this.platform=e},r.prototype.registerFlag=function(t,e,n){if(this.flagRegistry[t]={evaluationFn:e,setHook:n},this.urlFlags[t]!=null){var o=this.urlFlags[t];console.warn("Setting feature override from URL "+t+": "+o+"."),this.set(t,o)}},r.prototype.get=function(t){return t in this.flags?this.flags[t]:(this.flags[t]=this.evaluateFlag(t),this.flags[t])},r.prototype.getNumber=function(t){return this.get(t)},r.prototype.getBool=function(t){return this.get(t)},r.prototype.getFlags=function(){return this.flags},Object.defineProperty(r.prototype,"features",{get:function(){return this.flags},enumerable:!0,configurable:!0}),r.prototype.set=function(t,e){if(this.flagRegistry[t]==null)throw new Error("Cannot set flag "+t+" as it has not been registered.");this.flags[t]=e,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(e)},r.prototype.evaluateFlag=function(t){if(this.flagRegistry[t]==null)throw new Error("Cannot evaluate flag '"+t+"': no evaluation function found.");return this.flagRegistry[t].evaluationFn()},r.prototype.setFlags=function(t){this.flags=Object.assign({},t)},r.prototype.reset=function(){this.flags={},this.urlFlags={},this.populateURLFlags()},r.prototype.populateURLFlags=function(){var t=this;if(this.global!==void 0&&this.global.location!==void 0&&this.global.location.search!==void 0){var e,n,o=(e=this.global.location.search,n={},e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,function(a){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return lp(n,i[0],i[1]),i.join("=")}),n);"tfjsflags"in o&&o.tfjsflags.split(",").forEach(function(a){var i=a.split(":"),s=i[0],u=i[1];t.urlFlags[s]=function(c,l){if((l=l.toLowerCase())==="true"||l==="false")return l==="true";if(""+ +l===l)return+l;throw new Error("Could not parse value flag value "+l+" for flag "+c+".")}(s,u)})}},r}();function lp(r,t,e){r[decodeURIComponent(t)]=decodeURIComponent(e||"")}function L(){return ml}var ml=null,Zo=new Map,Ni=new Map;function gl(r,t){var e=xl(r,t);return Zo.get(e)}function fp(r){return Ni.get(r)}function Bu(r){for(var t=Zo.entries(),e=[];;){var n=t.next(),o=n.done,a=n.value;if(o)break;var i=a[0],s=a[1];i.split("_")[0]===r&&e.push(s)}return e}function yl(r){var t=r.kernelName,e=r.backendName,n=xl(t,e);if(Zo.has(n))throw new Error("The kernel '"+t+"' for backend '"+e+"' is already registered");Zo.set(n,r)}function hp(r){var t=r.kernelName;Ni.has(t)&&console.warn("Overriding the gradient for '"+t+"'"),Ni.set(t,r)}function xl(r,t){return t+"_"+r}function Fi(r,t,e){return Math.max(r,Math.min(t,e))}function bl(r){return r%2==0?r:r+1}function dp(r){for(var t=0,e=0;e<r.length;e++)t+=r[e];return t}function S(r,t){if(!r)throw new Error(typeof t=="string"?t:t())}function Ie(r,t,e){e===void 0&&(e=""),S(Xe(r,t),function(){return e+" Shapes "+r+" and "+t+" must match"})}function Wr(r){S(r!=null,function(){return"The input to the tensor constructor must be a non-null value."})}function Ar(r,t,e){if(t===void 0&&(t=[]),e===void 0&&(e=!1),t==null&&(t=[]),Array.isArray(r)||Qt(r)&&!e)for(var n=0;n<r.length;++n)Ar(r[n],t,e);else t.push(r);return t}function ee(r){if(r.length===0)return 1;for(var t=r[0],e=1;e<r.length;e++)t*=r[e];return t}function Xe(r,t){if(r===t)return!0;if(r==null||t==null||r.length!==t.length)return!1;for(var e=0;e<r.length;e++)if(r[e]!==t[e])return!1;return!0}function Le(r){return r%1==0}function pp(r){if(Math.tanh!=null)return Math.tanh(r);if(r===1/0)return 1;if(r===-1/0)return-1;var t=Math.exp(2*r);return(t-1)/(t+1)}function Pi(r){var t=Math.ceil(Math.sqrt(r));return[t,Math.ceil(r/t)]}function _r(r,t){return t<=r.length?r:r+" ".repeat(t-r.length)}function Lu(r,t,e){return t===void 0&&(t=function(n){return 0}),new Promise(function(n,o){var a=0,i=function(){if(r())n();else{a++;var s=t(a);e!=null&&a>=e?o():setTimeout(i,s)}};i()})}function vp(r,t){for(var e=1,n=-1,o=0;o<r.length;++o)if(r[o]>=0)e*=r[o];else if(r[o]===-1){if(n!==-1)throw Error("Shapes can only have 1 implicit size. Found -1 at dim "+n+" and dim "+o);n=o}else if(r[o]<0)throw Error("Shapes can not be < 0. Found "+r[o]+" at dim "+o);if(n===-1){if(t>0&&t!==e)throw Error("Size("+t+") must match the product of shape "+r);return r}if(e===0)throw Error("Cannot infer the missing size in ["+r+"] when there are 0 elements");if(t%e!=0)throw Error("The implicit shape can't be a fractional number. Got "+t+" / "+e);var a=r.slice();return a[n]=t/e,a}function qe(r,t){var e=t.length;return S((r=r==null?t.map(function(n,o){return o}):[].concat(r)).every(function(n){return n>=-e&&n<e}),function(){return"All values in axis param must be in range [-"+e+", "+e+") but got axis "+r}),S(r.every(function(n){return Le(n)}),function(){return"All values in axis param must be integers but got axis "+r}),r.map(function(n){return n<0?e+n:n})}function Kn(r,t){for(var e=[],n=[],o=t!=null&&Array.isArray(t)&&t.length===0,a=t==null||o?null:qe(t,r).sort(),i=0,s=0;s<r.length;++s){if(a!=null){if(a[i]===s&&r[s]!==1)throw new Error("Can't squeeze axis "+s+" since its dim '"+r[s]+"' is not 1");(a[i]==null||a[i]>s)&&r[s]===1&&(e.push(r[s]),n.push(s)),a[i]<=s&&i++}r[s]!==1&&(e.push(r[s]),n.push(s))}return{newShape:e,keptDims:n}}function eo(r,t){var e=null;if(r==null||r==="float32")e=new Float32Array(t);else if(r==="int32")e=new Int32Array(t);else{if(r!=="bool")throw new Error("Unknown data type "+r);e=new Uint8Array(t)}return e}function ea(r,t){var e=null;if(r==null||r==="float32")e=new Float32Array(t);else if(r==="int32")e=new Int32Array(t);else if(r==="bool")e=new Uint8Array(t);else{if(r!=="string")throw new Error("Unknown data type "+r);e=new Array(t)}return e}function mp(r,t){for(var e=0;e<r.length;e++){var n=r[e];if(isNaN(n)||!isFinite(n))throw Error("A tensor of type "+t+" being uploaded contains "+n+".")}}function gp(r){return r==="bool"||r==="complex64"||r==="float32"||r==="int32"||r==="string"}function yp(r,t){return t!=="complex64"&&(t!=="float32"||r==="complex64")&&(t!=="int32"||r==="float32"||r==="complex64")&&(t!=="bool"||r!=="bool")}function Qt(r){return r instanceof Float32Array||r instanceof Int32Array||r instanceof Uint8Array}function wl(r){if(r==="float32"||r==="int32")return 4;if(r==="complex64")return 8;if(r==="bool")return 1;throw new Error("Unknown dtype "+r)}function xp(r){if(r==null)return 0;var t=0;return r.forEach(function(e){return t+=e.length}),t}function bs(r){return typeof r=="string"||r instanceof String}function bp(r){return typeof r=="boolean"}function wp(r){return typeof r=="number"}function lo(r){return Array.isArray(r)?lo(r[0]):r instanceof Float32Array?"float32":r instanceof Int32Array||r instanceof Uint8Array?"int32":wp(r)?"float32":bs(r)?"string":bp(r)?"bool":"float32"}function Mi(r){return!!(r&&r.constructor&&r.call&&r.apply)}function Oi(r,t){for(var e=t;e<r;++e)if(r%e==0)return e;return r}function Zt(r){var t=r.length;if(t<2)return[];var e=new Array(t-1);e[t-2]=r[t-1];for(var n=t-3;n>=0;--n)e[n]=e[n+1]*r[n+1];return e}function _l(r,t,e){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(r)&&(r=Ar(r)),e&&mp(r,t),function(a,i){return a instanceof Float32Array&&i==="float32"||a instanceof Int32Array&&i==="int32"||a instanceof Uint8Array&&i==="bool"}(r,t))return r;if(t==null||t==="float32"||t==="complex64")return new Float32Array(r);if(t==="int32")return new Int32Array(r);if(t==="bool"){for(var n=new Uint8Array(r.length),o=0;o<n.length;++o)Math.round(r[o])!==0&&(n[o]=1);return n}throw new Error("Unknown data type "+t)}function Wu(r,t){if(r.length===0)return t[0];var e=r.reduce(function(n,o){return n*o});if(e===0)return[];if(e!==t.length)throw new Error("["+r+"] does not match the input size.");return function n(o,a,i){var s=new Array;if(a.length===1)for(var u=a[0],c=0;c<u;c++)s[c]=i[o+c];else{u=a[0];var l=a.slice(1),f=l.reduce(function(h,d){return h*d});for(c=0;c<u;c++)s[c]=n(o+c*f,l,i)}return s}(0,r,t)}function Cl(r,t){for(var e=fo(r,t),n=0;n<e.length;n++)e[n]=1;return e}function fo(r,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(r);if(t==="int32")return new Int32Array(r);if(t==="bool")return new Uint8Array(r);throw new Error("Unknown data type "+t)}function Kt(){return L().platform.now()}function El(r){r.forEach(function(t){S(Number.isInteger(t)&&t>=0,function(){return"Tensor must have a shape comprised of positive integers but got shape ["+r+"]."})})}function _p(r,t){return t===void 0&&(t="utf-8"),t=t||"utf-8",L().platform.encode(r,t)}function ta(r,t){return t===void 0&&(t="utf-8"),t=t||"utf-8",L().platform.decode(r,t)}function zu(r,t,e){if(t===0)return 0;if(t===1)return r[0];for(var n=r[r.length-1],o=0;o<r.length-1;++o)n+=e[o]*r[o];return n}function Cp(r,t,e){if(t===0)return[];if(t===1)return[r];for(var n=new Array(t),o=0;o<n.length-1;++o)n[o]=Math.floor(r/e[o]),r-=n[o]*e[o];return n[n.length-1]=r,n}var Ep=function(){function r(t,e){this.backendTimer=t,this.logger=e,e==null&&(this.logger=new Ip)}return r.prototype.profileKernel=function(t,e,n){var o,a=this,i=this.backendTimer.time(function(){o=n()});return o.forEach(function(s){s.data().then(function(u){(function(c,l,f){if(l!=="float32")return!1;for(var h=0;h<c.length;h++){var d=c[h];if(isNaN(d)||!isFinite(d))return console.warn("Found "+d+" in the result of '"+f+"'"),!0}})(u,s.dtype,t),i.then(function(c){var l="";c.getExtraProfileInfo!=null&&(l=c.getExtraProfileInfo()),a.logger.logKernelProfile(t,s,u,c.kernelMs,e,l)})})}),o},r}(),Ip=function(){function r(){}return r.prototype.logKernelProfile=function(t,e,n,o,a,i){var s=typeof o=="number"?_r(o+"ms",9):o.error,u=_r(t,25),c=e.rank,l=e.size,f=_r(e.shape.toString(),14),h="";for(var d in a){var p=a[d].shape||e.shape,m=p.length;h+=d+": "+m+"D "+(m>0?p:"")+" "}console.log("%c"+u+"	%c"+s+"	%c"+c+"D "+f+"	%c"+l+"	%c"+h+"	%c"+i,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")},r}(),Uu=20,Ur=3,Za=7;function Rp(r,t,e,n){var o=Zt(t),a=function(c,l,f,h){var d=ee(l),p=h[h.length-1],m=new Array(p).fill(0),v=l.length,g=f==="complex64"?Gr(c):c;if(v>1)for(var x=0;x<d/p;x++)for(var w=x*p,y=0;y<p;y++)m[y]=Math.max(m[y],Vr(g[w+y],0,f).length);return m}(r,t,e,o),i=t.length,s=function c(l,f,h,d,p,m){m===void 0&&(m=!0);var v=h==="complex64"?2:1,g=f[0],x=f.length;if(x===0)return h==="complex64"?[Vr(Gr(l)[0],0,h)]:h==="bool"?[Il(l[0])]:[l[0].toString()];if(x===1){if(g>Uu){var w=Ur*v,y=Array.from(l.slice(0,w)),b=Array.from(l.slice((g-Ur)*v,g*v));return h==="complex64"&&(y=Gr(y),b=Gr(b)),["["+y.map(function(O,U){return Vr(O,p[U],h)}).join(", ")+", ..., "+b.map(function(O,U){return Vr(O,p[g-Ur+U],h)}).join(", ")+"]"]}return["["+(h==="complex64"?Gr(l):Array.from(l)).map(function(O,U){return Vr(O,p[U],h)}).join(", ")+"]"]}var _=f.slice(1),E=d.slice(1),I=d[0]*v,R=[];if(g>Uu){for(var k=0;k<Ur;k++){var T=(A=k*I)+I;R.push.apply(R,c(l.slice(A,T),_,h,E,p,!1))}for(R.push("..."),k=g-Ur;k<g;k++)T=(A=k*I)+I,R.push.apply(R,c(l.slice(A,T),_,h,E,p,k===g-1))}else for(k=0;k<g;k++){var A;T=(A=k*I)+I,R.push.apply(R,c(l.slice(A,T),_,h,E,p,k===g-1))}var B=x===2?",":"";for(R[0]="["+R[0]+B,k=1;k<R.length-1;k++)R[k]=" "+R[k]+B;var M=`,
`;for(k=2;k<x;k++)M+=`
`;return R[R.length-1]=" "+R[R.length-1]+"]"+(m?"":M),R}(r,t,e,o,a),u=["Tensor"];return n&&(u.push("  dtype: "+e),u.push("  rank: "+i),u.push("  shape: ["+t+"]"),u.push("  values:")),u.push(s.map(function(c){return"    "+c}).join(`
`)),u.join(`
`)}function Vr(r,t,e){return _r(Array.isArray(r)?parseFloat(r[0].toFixed(Za))+" + "+parseFloat(r[1].toFixed(Za))+"j":bs(r)?"'"+r+"'":e==="bool"?Il(r):parseFloat(r.toFixed(Za)).toString(),t)}function Il(r){return r===0?"false":"true"}function Gr(r){for(var t=[],e=0;e<r.length;e+=2)t.push([r[e],r[e+1]]);return t}var to=function(){function r(t,e,n){var o=this;if(this.dtype=e,this.shape=t.slice(),this.size=ee(t),n!=null){var a=n.length;S(a===this.size,function(){return"Length of values '"+a+"' does not match the size inferred by the shape '"+o.size+"'."})}if(e==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=n||ea(e,this.size),this.strides=Zt(t)}return r.prototype.set=function(t){for(var e=this,n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];n.length===0&&(n=[0]),S(n.length===this.rank,function(){return"The number of provided coordinates ("+n.length+") must match the rank ("+e.rank+")"});var a=this.locToIndex(n);this.values[a]=t},r.prototype.get=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];t.length===0&&(t=[0]);for(var n=0,o=0,a=t;o<a.length;o++){var i=a[o];if(i<0||i>=this.shape[n]){var s="Requested out of range element at "+t+".   Buffer shape="+this.shape;throw new Error(s)}n++}for(var u=t[t.length-1],c=0;c<t.length-1;++c)u+=this.strides[c]*t[c];return this.values[u]},r.prototype.locToIndex=function(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];for(var e=t[t.length-1],n=0;n<t.length-1;++n)e+=this.strides[n]*t[n];return e},r.prototype.indexToLoc=function(t){if(this.rank===0)return[];if(this.rank===1)return[t];for(var e=new Array(this.shape.length),n=0;n<e.length-1;++n)e[n]=Math.floor(t/this.strides[n]),t-=e[n]*this.strides[n];return e[e.length-1]=t,e},Object.defineProperty(r.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),r.prototype.toTensor=function(){return $t().makeTensor(this.values,this.shape,this.dtype)},r}(),$t=null,P=null,Rl=null,Pe=function(){function r(t,e,n,o){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=ee(t),this.strides=Zt(t),this.dataId=n,this.id=o,this.rankType=this.rank<5?this.rank.toString():"higher"}return r.prototype.flatten=function(){return this.throwIfDisposed(),this.as1D()},r.prototype.asScalar=function(){return this.throwIfDisposed(),S(this.size===1,function(){return"The array must have only 1 element."}),this.reshape([])},r.prototype.as1D=function(){return this.throwIfDisposed(),this.reshape([this.size])},r.prototype.as2D=function(t,e){return this.throwIfDisposed(),this.reshape([t,e])},r.prototype.as3D=function(t,e,n){return this.throwIfDisposed(),this.reshape([t,e,n])},r.prototype.as4D=function(t,e,n,o){return this.throwIfDisposed(),this.reshape([t,e,n,o])},r.prototype.as5D=function(t,e,n,o,a){return this.throwIfDisposed(),this.reshape([t,e,n,o,a])},r.prototype.asType=function(t){return this.throwIfDisposed(),P.cast(this,t)},Object.defineProperty(r.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),r.prototype.buffer=function(){return Y(this,void 0,void 0,function(){var t;return J(this,function(e){switch(e.label){case 0:return[4,this.data()];case 1:return t=e.sent(),[2,P.buffer(this.shape,this.dtype,t)]}})})},r.prototype.bufferSync=function(){return P.buffer(this.shape,this.dtype,this.dataSync())},r.prototype.array=function(){return Y(this,void 0,void 0,function(){var t;return J(this,function(e){switch(e.label){case 0:return[4,this.data()];case 1:return t=e.sent(),[2,Wu(this.shape,t)]}})})},r.prototype.arraySync=function(){return Wu(this.shape,this.dataSync())},r.prototype.data=function(){return Y(this,void 0,void 0,function(){var t,e;return J(this,function(n){switch(n.label){case 0:return this.throwIfDisposed(),t=$t().read(this.dataId),this.dtype!=="string"?[3,2]:[4,t];case 1:e=n.sent();try{return[2,e.map(function(o){return ta(o)})]}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}n.label=2;case 2:return[2,t]}})})},r.prototype.dataSync=function(){this.throwIfDisposed();var t=$t().readSync(this.dataId);if(this.dtype==="string")try{return t.map(function(e){return ta(e)})}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t},r.prototype.bytes=function(){return Y(this,void 0,void 0,function(){var t;return J(this,function(e){switch(e.label){case 0:return this.throwIfDisposed(),[4,$t().read(this.dataId)];case 1:return t=e.sent(),this.dtype==="string"?[2,t]:[2,new Uint8Array(t.buffer)]}})})},r.prototype.dispose=function(){this.isDisposed||($t().disposeTensor(this),this.isDisposedInternal=!0)},Object.defineProperty(r.prototype,"isDisposed",{get:function(){return this.isDisposedInternal},enumerable:!0,configurable:!0}),r.prototype.throwIfDisposed=function(){if(this.isDisposed)throw new Error("Tensor is disposed.")},r.prototype.toFloat=function(){return this.asType("float32")},r.prototype.toInt=function(){return this.asType("int32")},r.prototype.toBool=function(){return this.asType("bool")},r.prototype.print=function(t){return t===void 0&&(t=!1),P.print(this,t)},r.prototype.reshape=function(t){return this.throwIfDisposed(),P.reshape(this,t)},r.prototype.reshapeAs=function(t){return this.throwIfDisposed(),this.reshape(t.shape)},r.prototype.expandDims=function(t){return t===void 0&&(t=0),P.expandDims(this,t)},r.prototype.cumsum=function(t,e,n){return t===void 0&&(t=0),e===void 0&&(e=!1),n===void 0&&(n=!1),P.cumsum(this,t,e,n)},r.prototype.squeeze=function(t){return this.throwIfDisposed(),P.squeeze(this,t)},r.prototype.clone=function(){return this.throwIfDisposed(),P.clone(this)},r.prototype.oneHot=function(t,e,n){return this.throwIfDisposed(),P.oneHot(this,t,e,n)},r.prototype.toString=function(t){return t===void 0&&(t=!1),Rp(this.dataSync(),this.shape,this.dtype,t)},r.prototype.tile=function(t){return this.throwIfDisposed(),P.tile(this,t)},r.prototype.gather=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),P.gather(this,t,e)},r.prototype.matMul=function(t,e,n){return e===void 0&&(e=!1),n===void 0&&(n=!1),this.throwIfDisposed(),P.matMul(this,t,e,n)},r.prototype.dot=function(t){return this.throwIfDisposed(),P.dot(this,t)},r.prototype.norm=function(t,e,n){return t===void 0&&(t="euclidean"),e===void 0&&(e=null),n===void 0&&(n=!1),this.throwIfDisposed(),P.norm(this,t,e,n)},r.prototype.slice=function(t,e){return this.throwIfDisposed(),P.slice(this,t,e)},r.prototype.reverse=function(t){return this.throwIfDisposed(),P.reverse(this,t)},r.prototype.concat=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),t instanceof r&&(t=[t]),P.concat([this].concat(t),e)},r.prototype.split=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),P.split(this,t,e)},r.prototype.stack=function(t,e){return e===void 0&&(e=0),P.stack([this,t],e)},r.prototype.unstack=function(t){return t===void 0&&(t=0),P.unstack(this,t)},r.prototype.pad=function(t,e){return e===void 0&&(e=0),P.pad(this,t,e)},r.prototype.batchNormalization=function(t,e,n,o,a){return n===void 0&&(n=.001),Rl("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon"),this.batchNorm(t,e,a,o,n)},r.prototype.batchNorm=function(t,e,n,o,a){return a===void 0&&(a=.001),this.throwIfDisposed(),P.batchNorm(this,t,e,n,o,a)},r.prototype.all=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.all(this,t,e)},r.prototype.any=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.any(this,t,e)},r.prototype.logSumExp=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.logSumExp(this,t,e)},r.prototype.sum=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.sum(this,t,e)},r.prototype.prod=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.prod(this,t,e)},r.prototype.mean=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.mean(this,t,e)},r.prototype.min=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.min(this,t,e)},r.prototype.max=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.max(this,t,e)},r.prototype.argMin=function(t){return t===void 0&&(t=null),this.throwIfDisposed(),P.argMin(this,t)},r.prototype.argMax=function(t){return t===void 0&&(t=null),this.throwIfDisposed(),P.argMax(this,t)},r.prototype.cast=function(t){return this.throwIfDisposed(),P.cast(this,t)},r.prototype.add=function(t){return this.throwIfDisposed(),P.add(this,t)},r.prototype.addStrict=function(t){return this.throwIfDisposed(),P.addStrict(this,t)},r.prototype.atan2=function(t){return this.throwIfDisposed(),P.atan2(this,t)},r.prototype.sub=function(t){return this.throwIfDisposed(),P.sub(this,t)},r.prototype.subStrict=function(t){return this.throwIfDisposed(),P.subStrict(this,t)},r.prototype.pow=function(t){return this.throwIfDisposed(),P.pow(this,t)},r.prototype.powStrict=function(t){return this.throwIfDisposed(),P.powStrict(this,t)},r.prototype.mul=function(t){return this.throwIfDisposed(),P.mul(this,t)},r.prototype.mulStrict=function(t){return this.throwIfDisposed(),P.mulStrict(this,t)},r.prototype.div=function(t){return this.throwIfDisposed(),P.div(this,t)},r.prototype.divNoNan=function(t){return this.throwIfDisposed(),P.divNoNan(this,t)},r.prototype.floorDiv=function(t){return this.throwIfDisposed(),P.floorDiv(this,t)},r.prototype.divStrict=function(t){return this.throwIfDisposed(),P.divStrict(this,t)},r.prototype.minimum=function(t){return this.throwIfDisposed(),P.minimum(this,t)},r.prototype.minimumStrict=function(t){return this.throwIfDisposed(),P.minimumStrict(this,t)},r.prototype.maximum=function(t){return this.throwIfDisposed(),P.maximum(this,t)},r.prototype.maximumStrict=function(t){return this.throwIfDisposed(),P.maximumStrict(this,t)},r.prototype.mod=function(t){return this.throwIfDisposed(),P.mod(this,t)},r.prototype.modStrict=function(t){return this.throwIfDisposed(),P.modStrict(this,t)},r.prototype.squaredDifferenceStrict=function(t){return this.throwIfDisposed(),P.squaredDifferenceStrict(this,t)},r.prototype.transpose=function(t){return this.throwIfDisposed(),P.transpose(this,t)},r.prototype.notEqual=function(t){return this.throwIfDisposed(),P.notEqual(this,t)},r.prototype.notEqualStrict=function(t){return this.throwIfDisposed(),P.notEqualStrict(this,t)},r.prototype.less=function(t){return this.throwIfDisposed(),P.less(this,t)},r.prototype.lessStrict=function(t){return this.throwIfDisposed(),P.lessStrict(this,t)},r.prototype.equal=function(t){return this.throwIfDisposed(),P.equal(this,t)},r.prototype.equalStrict=function(t){return this.throwIfDisposed(),P.equalStrict(this,t)},r.prototype.lessEqual=function(t){return this.throwIfDisposed(),P.lessEqual(this,t)},r.prototype.lessEqualStrict=function(t){return this.throwIfDisposed(),P.lessEqualStrict(this,t)},r.prototype.greater=function(t){return this.throwIfDisposed(),P.greater(this,t)},r.prototype.greaterStrict=function(t){return this.throwIfDisposed(),P.greaterStrict(this,t)},r.prototype.greaterEqual=function(t){return this.throwIfDisposed(),P.greaterEqual(this,t)},r.prototype.greaterEqualStrict=function(t){return this.throwIfDisposed(),P.greaterEqualStrict(this,t)},r.prototype.logicalAnd=function(t){return this.throwIfDisposed(),P.logicalAnd(this,t)},r.prototype.logicalOr=function(t){return this.throwIfDisposed(),P.logicalOr(this,t)},r.prototype.logicalNot=function(){return this.throwIfDisposed(),P.logicalNot(this)},r.prototype.logicalXor=function(t){return this.throwIfDisposed(),P.logicalXor(this,t)},r.prototype.where=function(t,e){return this.throwIfDisposed(),P.where(t,this,e)},r.prototype.neg=function(){return this.throwIfDisposed(),P.neg(this)},r.prototype.ceil=function(){return this.throwIfDisposed(),P.ceil(this)},r.prototype.floor=function(){return this.throwIfDisposed(),P.floor(this)},r.prototype.sign=function(){return this.throwIfDisposed(),P.sign(this)},r.prototype.isNaN=function(){return this.throwIfDisposed(),P.isNaN(this)},r.prototype.isInf=function(){return this.throwIfDisposed(),P.isInf(this)},r.prototype.isFinite=function(){return this.throwIfDisposed(),P.isFinite(this)},r.prototype.exp=function(){return this.throwIfDisposed(),P.exp(this)},r.prototype.expm1=function(){return this.throwIfDisposed(),P.expm1(this)},r.prototype.log=function(){return this.throwIfDisposed(),P.log(this)},r.prototype.log1p=function(){return this.throwIfDisposed(),P.log1p(this)},r.prototype.sqrt=function(){return this.throwIfDisposed(),P.sqrt(this)},r.prototype.rsqrt=function(){return this.throwIfDisposed(),P.rsqrt(this)},r.prototype.square=function(){return this.throwIfDisposed(),P.square(this)},r.prototype.reciprocal=function(){return this.throwIfDisposed(),P.reciprocal(this)},r.prototype.abs=function(){return this.throwIfDisposed(),P.abs(this)},r.prototype.clipByValue=function(t,e){return this.throwIfDisposed(),P.clipByValue(this,t,e)},r.prototype.relu=function(){return this.throwIfDisposed(),P.relu(this)},r.prototype.relu6=function(){return this.throwIfDisposed(),P.relu6(this)},r.prototype.elu=function(){return this.throwIfDisposed(),P.elu(this)},r.prototype.selu=function(){return this.throwIfDisposed(),P.selu(this)},r.prototype.leakyRelu=function(t){return t===void 0&&(t=.2),this.throwIfDisposed(),P.leakyRelu(this,t)},r.prototype.prelu=function(t){return this.throwIfDisposed(),P.prelu(this,t)},r.prototype.sigmoid=function(){return this.throwIfDisposed(),P.sigmoid(this)},r.prototype.logSigmoid=function(){return this.throwIfDisposed(),P.logSigmoid(this)},r.prototype.softplus=function(){return this.throwIfDisposed(),P.softplus(this)},r.prototype.zerosLike=function(){return this.throwIfDisposed(),P.zerosLike(this)},r.prototype.onesLike=function(){return this.throwIfDisposed(),P.onesLike(this)},r.prototype.sin=function(){return this.throwIfDisposed(),P.sin(this)},r.prototype.cos=function(){return this.throwIfDisposed(),P.cos(this)},r.prototype.tan=function(){return this.throwIfDisposed(),P.tan(this)},r.prototype.asin=function(){return this.throwIfDisposed(),P.asin(this)},r.prototype.acos=function(){return this.throwIfDisposed(),P.acos(this)},r.prototype.atan=function(){return this.throwIfDisposed(),P.atan(this)},r.prototype.sinh=function(){return this.throwIfDisposed(),P.sinh(this)},r.prototype.cosh=function(){return this.throwIfDisposed(),P.cosh(this)},r.prototype.tanh=function(){return this.throwIfDisposed(),P.tanh(this)},r.prototype.asinh=function(){return this.throwIfDisposed(),P.asinh(this)},r.prototype.acosh=function(){return this.throwIfDisposed(),P.acosh(this)},r.prototype.atanh=function(){return this.throwIfDisposed(),P.atanh(this)},r.prototype.erf=function(){return this.throwIfDisposed(),P.erf(this)},r.prototype.round=function(){return this.throwIfDisposed(),P.round(this)},r.prototype.step=function(t){return t===void 0&&(t=0),this.throwIfDisposed(),P.step(this,t)},r.prototype.softmax=function(t){return t===void 0&&(t=-1),this.throwIfDisposed(),P.softmax(this,t)},r.prototype.logSoftmax=function(t){return t===void 0&&(t=-1),this.throwIfDisposed(),P.logSoftmax(this,t)},r.prototype.resizeBilinear=function(t,e){return e===void 0&&(e=!1),this.throwIfDisposed(),P.image.resizeBilinear(this,t,e)},r.prototype.resizeNearestNeighbor=function(t,e){return e===void 0&&(e=!1),this.throwIfDisposed(),P.image.resizeNearestNeighbor(this,t,e)},r.prototype.conv1d=function(t,e,n,o,a,i){return o===void 0&&(o="NWC"),a===void 0&&(a=1),this.throwIfDisposed(),P.conv1d(this,t,e,n,o,a,i)},r.prototype.conv2d=function(t,e,n,o,a,i){return o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]),this.throwIfDisposed(),P.conv2d(this,t,e,n,o,a,i)},r.prototype.conv2dTranspose=function(t,e,n,o,a){return this.throwIfDisposed(),P.conv2dTranspose(this,t,e,n,o,a)},r.prototype.depthwiseConv2D=function(t,e,n,o,a,i){return o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]),this.throwIfDisposed(),P.depthwiseConv2d(this,t,e,n,o,a,i)},r.prototype.separableConv2d=function(t,e,n,o,a,i){return a===void 0&&(a=[1,1]),i===void 0&&(i="NHWC"),this.throwIfDisposed(),P.separableConv2d(this,t,e,n,o,a,i)},r.prototype.avgPool=function(t,e,n,o){return this.throwIfDisposed(),P.avgPool(this,t,e,n,o)},r.prototype.maxPool=function(t,e,n,o){return this.throwIfDisposed(),P.maxPool(this,t,e,n,o)},r.prototype.localResponseNormalization=function(t,e,n,o){return t===void 0&&(t=5),e===void 0&&(e=1),n===void 0&&(n=1),o===void 0&&(o=.5),P.localResponseNormalization(this,t,e,n,o)},r.prototype.pool=function(t,e,n,o,a){return this.throwIfDisposed(),P.pool(this,t,e,n,o,a)},r.prototype.variable=function(t,e,n){return t===void 0&&(t=!0),this.throwIfDisposed(),$t().makeVariable(this,t,e,n)},r.prototype.unsortedSegmentSum=function(t,e){return this.throwIfDisposed(),P.unsortedSegmentSum(this,t,e)},r.prototype.batchToSpaceND=function(t,e){return this.throwIfDisposed(),P.batchToSpaceND(this,t,e)},r.prototype.spaceToBatchND=function(t,e){return this.throwIfDisposed(),P.spaceToBatchND(this,t,e)},r.prototype.topk=function(t,e){return t===void 0&&(t=1),e===void 0&&(e=!0),this.throwIfDisposed(),P.topk(this,t,e)},r.prototype.stridedSlice=function(t,e,n,o,a,i,s,u){return o===void 0&&(o=0),a===void 0&&(a=0),i===void 0&&(i=0),s===void 0&&(s=0),u===void 0&&(u=0),this.throwIfDisposed(),P.stridedSlice(this,t,e,n,o,a,i,s,u)},r.prototype.depthToSpace=function(t,e){return this.throwIfDisposed(),P.depthToSpace(this,t,e)},r.prototype.fft=function(){return this.throwIfDisposed(),P.spectral.fft(this)},r.prototype.ifft=function(){return this.throwIfDisposed(),P.spectral.ifft(this)},r.prototype.rfft=function(){return this.throwIfDisposed(),P.spectral.rfft(this)},r.prototype.irfft=function(){return this.throwIfDisposed(),P.spectral.irfft(this)},r}();Object.defineProperty(Pe,Symbol.hasInstance,{value:function(r){return!!r&&r.dataId!=null&&r.shape!=null&&r.dtype!=null}});var Vu,Bi,Li,Wi,zi,Tr=function(r){function t(e,n,o,a){var i=r.call(this,e.shape,e.dtype,e.dataId,a)||this;return i.trainable=n,i.name=o,i}return Ut(t,r),t.prototype.assign=function(e){if(e.dtype!==this.dtype)throw new Error("dtype of the new value ("+e.dtype+") and previous value ("+this.dtype+") must match");if(!Xe(e.shape,this.shape))throw new Error("shape of the new value ("+e.shape+") and previous value ("+this.shape+") must match");$t().disposeTensor(this),this.dataId=e.dataId,$t().incRef(this,null)},t.prototype.dispose=function(){$t().disposeVariable(this),this.isDisposedInternal=!0},t}(Pe);Object.defineProperty(Tr,Symbol.hasInstance,{value:function(r){return r instanceof Pe&&r.assign!=null&&r.assign instanceof Function}}),function(r){r.R0="R0",r.R1="R1",r.R2="R2",r.R3="R3",r.R4="R4",r.R5="R5",r.R6="R6"}(Vu||(Vu={})),function(r){r.float32="float32",r.int32="int32",r.bool="int32",r.complex64="complex64"}(Bi||(Bi={})),function(r){r.float32="float32",r.int32="int32",r.bool="bool",r.complex64="complex64"}(Li||(Li={})),function(r){r.float32="float32",r.int32="float32",r.bool="float32",r.complex64="complex64"}(Wi||(Wi={})),function(r){r.float32="complex64",r.int32="complex64",r.bool="complex64",r.complex64="complex64"}(zi||(zi={}));var kp={float32:Wi,int32:Bi,bool:Li,complex64:zi};function Qe(r,t){if(r==="string"||t==="string"){if(r==="string"&&t==="string")return"string";throw new Error("Can not upcast "+r+" with "+t)}return kp[r][t]}function ei(r){return Qe(r,"int32")}function Oe(r,t){if(r.dtype===t.dtype)return[r,t];var e=Qe(r.dtype,t.dtype);return[r.cast(e),t.cast(e)]}function Sp(r,t){S(r.dtype===t.dtype,function(){return"The dtypes of the first("+r.dtype+") and second("+t.dtype+") input must match"})}function kl(r){var t=[];return function e(n,o,a){if(n!=null){if(n instanceof Pe)return void o.push(n);if(i=n,!(!Array.isArray(i)&&typeof i!="object")){var i,s=n;for(var u in s){var c=s[u];a.has(c)||(a.add(c),e(c,o,a))}}}}(r,t,new Set),t}var ti,Gu=function(){function r(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null}}return r.prototype.dispose=function(){for(var t in this.registeredVariables)this.registeredVariables[t].dispose()},r}(),Dp=function(){function r(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Gu}return r.prototype.ready=function(){return Y(this,void 0,void 0,function(){var t,e,n;return J(this,function(o){switch(o.label){case 0:if(this.pendingBackendInit!=null)return[2,this.pendingBackendInit.then(function(){})];if(this.backendInstance!=null)return[2];t=this.getSortedBackends(),e=0,o.label=1;case 1:return e<t.length?(n=t[e],[4,this.initializeBackend(n).success]):[3,5];case 2:return o.sent()?[4,this.setBackend(n)]:[3,4];case 3:return o.sent(),[2];case 4:return e++,[3,1];case 5:throw new Error("Could not initialize any backends, all backend initializations failed.")}})})},Object.defineProperty(r.prototype,"backend",{get:function(){if(this.pendingBackendInit!=null)throw new Error("Backend '"+this.backendName+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");if(this.backendInstance==null){var t=this.initializeBackendsAndReturnBest(),e=t.name;if(t.asyncInit)throw new Error("The highest priority backend '"+e+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");this.setBackend(e)}return this.backendInstance},enumerable:!0,configurable:!0}),r.prototype.backendNames=function(){return Object.keys(this.registryFactory)},r.prototype.findBackend=function(t){return!(t in this.registry)&&(!(t in this.registryFactory)||this.initializeBackend(t).asyncInit)?null:this.registry[t]},r.prototype.findBackendFactory=function(t){return t in this.registryFactory?this.registryFactory[t].factory:null},r.prototype.registerBackend=function(t,e,n){return n===void 0&&(n=1),t in this.registryFactory?(console.warn(t+" backend was already registered. Reusing existing backend factory."),!1):(this.registryFactory[t]={factory:e,priority:n},!0)},r.prototype.setBackend=function(t){return Y(this,void 0,void 0,function(){var e,n,o;return J(this,function(a){switch(a.label){case 0:if(this.registryFactory[t]==null)throw new Error("Backend name '"+t+"' not found in registry");return this.backendName=t,this.registry[t]!=null?[3,4]:(this.backendInstance=null,e=this.initializeBackend(t),n=e.success,e.asyncInit?[4,n]:[3,2]);case 1:return o=a.sent(),[3,3];case 2:o=n,a.label=3;case 3:if(!o)return[2,!1];a.label=4;case 4:return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new Ep(this.backendInstance),[2,!0]}})})},r.prototype.setupRegisteredKernels=function(){var t=this;Bu(this.backendName).forEach(function(e){e.setupFunc!=null&&e.setupFunc(t.backendInstance)})},r.prototype.disposeRegisteredKernels=function(t){var e=this;Bu(t).forEach(function(n){n.disposeFunc!=null&&n.disposeFunc(e.registry[t])})},r.prototype.initializeBackend=function(t){var e=this,n=this.registryFactory[t];if(n==null)throw new Error("Cannot initialize backend "+t+", no registration found.");try{var o=n.factory();if(Promise.resolve(o)===o){var a=++this.pendingBackendInitId,i=o.then(function(s){return!(a<e.pendingBackendInitId)&&(e.registry[t]=s,e.pendingBackendInit=null,!0)}).catch(function(s){return!(a<e.pendingBackendInitId)&&(e.pendingBackendInit=null,console.warn("Initialization of backend "+t+" failed"),console.warn(s.stack||s.message),!1)});return this.pendingBackendInit=i,{success:i,asyncInit:!0}}return this.registry[t]=o,{success:!0,asyncInit:!1}}catch(s){return console.warn("Initialization of backend "+t+" failed"),console.warn(s.stack||s.message),{success:!1,asyncInit:!1}}},r.prototype.removeBackend=function(t){if(!(t in this.registryFactory))throw new Error(t+" backend not found in registry");this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)},r.prototype.getSortedBackends=function(){var t=this;if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort(function(e,n){return t.registryFactory[n].priority-t.registryFactory[e].priority})},r.prototype.initializeBackendsAndReturnBest=function(){for(var t=this.getSortedBackends(),e=0;e<t.length;e++){var n=t[e],o=this.initializeBackend(n),a=o.success,i=o.asyncInit;if(i||a)return{name:n,asyncInit:i}}throw new Error("Could not initialize any backends, all backend initializations failed.")},r.prototype.moveData=function(t,e){var n=this.state.tensorInfo.get(e),o=n.backend,a=this.readSync(e);o.disposeData(e),n.backend=t,t.move(e,a,n.shape,n.dtype),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++},r.prototype.tidy=function(t,e){var n,o=this,a=null;if(e==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");e=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof e!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");a=t}return this.scopedRun(function(){return o.startScope(a)},function(){return o.endScope(n)},function(){return(n=e())instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),n})},r.prototype.scopedRun=function(t,e,n){t();try{var o=n();return e(),o}catch(a){throw e(),a}},r.prototype.nextTensorId=function(){return r.nextTensorId++},r.prototype.nextVariableId=function(){return r.nextVariableId++},r.prototype.clone=function(t){var e=this.makeTensorFromDataId(t.dataId,t.shape,t.dtype),n={x:t};return this.addTapeNode(this.state.activeScope.name,n,[e],function(o){return{x:function(){return o.toFloat()}}},[]),e},r.prototype.runKernel=function(t,e,n,o,a){return this.runKernelFunc(null,e,null,t,n,o,a)},r.prototype.shouldCheckForMemLeaks=function(){return this.ENV.getBool("IS_TEST")},r.prototype.checkKernelForMemLeak=function(t,e,n){var o=this.backend.numDataIds(),a=0;n.forEach(function(u){a+=u.dtype==="complex64"?3:1});var i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],s=o-e-a-i;if(s>0)throw new Error("Backend '"+this.backendName+"' has an internal memory leak ("+s+" data ids) after running '"+t+"'")},r.prototype.runKernelFunc=function(t,e,n,o,a,i,s){var u,c=this;i===void 0&&(i=[]),s===void 0&&(s=[]);var l=[],f=this.isTapeOn();o==null&&(o=this.state.activeScope!=null?this.state.activeScope.name:"");var h,d=function(x){f&&(l=x.map(function(w){return c.keep(c.clone(w))}))},p=this.state.numBytes,m=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);var v,g=gl(o,this.backendName);return h=g!=null?function(){var x=c.backend.numDataIds();v=g.kernelFunc({inputs:e,attrs:a,backend:c.backend});var w=Array.isArray(v)?v:[v];c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,x,w);var y=w.map(function(_){var E=_.dataId,I=_.shape,R=_.dtype;return c.makeTensorFromDataId(E,I,R)}),b=y.filter(function(_,E){return s[E]});return d((i||[]).slice().concat(b)),y}:function(){var x=c.backend.numDataIds();v=c.tidy(function(){return t(c.backend,d)});var w=Array.isArray(v)?v:[v];return c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,x,w),w},this.scopedRun(function(){return c.state.kernelDepth++},function(){return c.state.kernelDepth--},function(){u=c.ENV.getBool("DEBUG")?c.profiler.profileKernel(o,e,function(){return h()}):h()}),f&&this.addTapeNode(o,e,u,n,l),this.state.profiling&&this.state.activeProfile.kernels.push({name:o,bytesAdded:this.state.numBytes-p,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-m,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(e).map(function(x){return e[x].shape}),outputShapes:u.map(function(x){return x.shape})}),Array.isArray(v)?u:u[0]},r.prototype.makeTensor=function(t,e,n,o){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");n=n||"float32",o=o||this.backend;var a=t;n==="string"&&bs(t[0])&&(a=t.map(function(l){return _p(l)}));var i=o.write(a,e,n),s=new Pe(e,n,i,this.nextTensorId());if(this.incRef(s,o),n==="string"){var u=this.state.tensorInfo.get(i),c=xp(a);this.state.numBytes+=c-u.bytes,u.bytes=c}return s},r.prototype.makeTensorFromDataId=function(t,e,n,o){var a=new Pe(e,n=n||"float32",t,this.nextTensorId());return this.incRef(a,o),a},r.prototype.makeVariable=function(t,e,n,o){e===void 0&&(e=!0),n=n||this.nextVariableId().toString(),o!=null&&o!==t.dtype&&(t=t.asType(o));var a=new Tr(t,e,n,this.nextTensorId());if(this.state.registeredVariables[a.name]!=null)throw new Error("Variable with name "+a.name+" was already registered");return this.state.registeredVariables[a.name]=a,this.incRef(a,this.backend),a},r.prototype.incRef=function(t,e){var n=this.state.tensorInfo.has(t.dataId)?this.state.tensorInfo.get(t.dataId).refCount:0;if(this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++,n===0){this.state.numDataBuffers++;var o=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(o=t.size*wl(t.dtype)),this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:o,refCount:0}),this.state.numBytes+=o}this.state.tensorInfo.get(t.dataId).refCount++,t instanceof Tr||this.track(t)},r.prototype.disposeTensor=function(t){if(this.state.tensorInfo.has(t.dataId)){this.state.numTensors--,t.dtype==="string"&&this.state.numStringTensors--;var e=this.state.tensorInfo.get(t.dataId);e.refCount<=1?(t.dtype!=="complex64"&&(this.state.numBytes-=e.bytes),this.state.numDataBuffers--,e.backend.disposeData(t.dataId),this.state.tensorInfo.delete(t.dataId)):this.state.tensorInfo.get(t.dataId).refCount--}},r.prototype.disposeVariables=function(){for(var t in this.state.registeredVariables){var e=this.state.registeredVariables[t];this.disposeVariable(e)}},r.prototype.disposeVariable=function(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]},r.prototype.memory=function(){var t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t},r.prototype.profile=function(t){return Y(this,void 0,void 0,function(){var e,n;return J(this,function(o){return this.state.profiling=!0,e=this.state.numBytes,n=this.state.numTensors,this.state.activeProfile.kernels=[],this.state.activeProfile.result=t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max.apply(Math,this.state.activeProfile.kernels.map(function(a){return a.totalBytesSnapshot})),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-n,[2,this.state.activeProfile]})})},r.prototype.isTapeOn=function(){return this.state.gradientDepth>0&&this.state.kernelDepth===0},r.prototype.addTapeNode=function(t,e,n,o,a){var i=this,s={id:this.state.nextTapeNodeId++,kernelName:t,inputs:e,outputs:n,saved:a},u=fp(t);u!=null&&(o=u.gradFunc),o!=null&&(s.gradient=function(c){return c=c.map(function(l,f){if(l==null){var h=n[f],d=fo(h.size,h.dtype);return i.makeTensor(d,h.shape,h.dtype)}return l}),o(c.length>1?c:c[0],a)}),this.state.activeTape.push(s)},r.prototype.keep=function(t){return t.kept=!0,t},r.prototype.startTape=function(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++},r.prototype.endTape=function(){this.state.gradientDepth--},r.prototype.startScope=function(t){var e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e},r.prototype.endScope=function(t){for(var e=this,n=kl(t),o=new Set(n.map(function(u){return u.id})),a=0;a<this.state.activeScope.track.length;a++){var i=this.state.activeScope.track[a];i.kept||o.has(i.id)||i.dispose()}var s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach(function(u){u.kept||u.scopeId!==s.id||e.track(u)})},r.prototype.gradients=function(t,e,n,o){var a=this;if(o===void 0&&(o=!1),S(e.length>0,function(){return"gradients() received an empty list of xs."}),n!=null&&n.dtype!=="float32")throw new Error("dy must have 'float32' dtype, but has '"+n.dtype+"'");var i=this.scopedRun(function(){return a.startTape()},function(){return a.endTape()},function(){return a.tidy("forward",t)});S(i instanceof Pe,function(){return"The result y returned by f() must be a tensor."});var s=function(u,c,l){for(var f={},h={},d=0;d<c.length;d++)f[c[d].id]=!0;for(d=0;d<u.length;d++){var p=(_=u[d]).inputs;for(var m in p){for(var v=p[m],g=!1,x=0;x<c.length;x++)if(f[v.id]){_.outputs.forEach(function(k){return f[k.id]=!0}),g=!0,h[_.id]=!0;break}if(g)break}}var w={};w[l.id]=!0;var y={};for(d=u.length-1;d>=0;d--)for(p=(_=u[d]).inputs,x=0;x<_.outputs.length;x++)if(w[_.outputs[x].id]){for(var m in p)w[p[m].id]=!0,y[_.id]=!0;break}var b=[];for(d=0;d<u.length;d++){var _;if(h[(_=u[d]).id]&&y[_.id]){var E={};for(var m in _.inputs){var I=_.inputs[m];f[I.id]&&(E[m]=I)}var R=Object.assign({},_);R.inputs=E,R.outputs=_.outputs,b.push(R)}}return b}(this.state.activeTape,e,i);if(!o&&s.length===0&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",function(){var u,c,l={};l[i.id]=n??(u=i.shape,c=Cl(ee(u),"float32"),N.makeTensor(c,u,"float32")),function(h,d,p){for(var m=function(g){var x=d[g],w=[];if(x.outputs.forEach(function(E){var I=h[E.id];I!=null?w.push(I):w.push(null)}),x.gradient==null)throw new Error("Cannot compute gradient: gradient function not found for "+x.kernelName+".");var y=x.gradient(w),b=function(E){if(!(E in y))throw new Error("Cannot backprop through input "+E+". Available gradients found: "+Object.keys(y)+".");var I=p(function(){return y[E]()});if(I.dtype!=="float32")throw new Error("Error in gradient for op "+x.kernelName+". The gradient of input "+E+" must have 'float32' dtype, but has '"+I.dtype+"'");var R=x.inputs[E];if(!Xe(I.shape,R.shape))throw new Error("Error in gradient for op "+x.kernelName+". The gradient of input '"+E+"' has shape '"+I.shape+"', which does not match the shape of the input '"+R.shape+"'");if(h[R.id]==null)h[R.id]=I;else{var k=h[R.id];h[R.id]=k.add(I),k.dispose()}};for(var _ in x.inputs)b(_)},v=d.length-1;v>=0;v--)m(v)}(l,s,function(h){return a.tidy(h)});var f=e.map(function(h){return l[h.id]});return a.state.gradientDepth===0&&(a.state.activeTape.forEach(function(h){for(var d=0,p=h.saved;d<p.length;d++)p[d].dispose()}),a.state.activeTape=null),{value:i,grads:f}})},r.prototype.customGrad=function(t){var e=this;return S(Mi(t),function(){return"The f passed in customGrad(f) must be a function."}),function(){for(var n,o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];S(o.every(function(s){return s instanceof Pe}),function(){return"The args passed in customGrad(f)(x1, x2,...) must all be tensors"});var i={};return o.forEach(function(s,u){i[u]=s}),e.runKernelFunc(function(s,u){return S((n=t.apply(void 0,o.concat([u]))).value instanceof Pe,function(){return"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"}),S(Mi(n.gradFunc),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."}),n.value},i,function(s,u){var c=n.gradFunc(s,u),l=Array.isArray(c)?c:[c];S(l.length===o.length,function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."}),S(l.every(function(h){return h instanceof Pe}),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."});var f={};return l.forEach(function(h,d){f[d]=function(){return h}}),f})}},r.prototype.readSync=function(t){return this.state.tensorInfo.get(t).backend.readSync(t)},r.prototype.read=function(t){return this.state.tensorInfo.get(t).backend.read(t)},r.prototype.time=function(t){return Y(this,void 0,void 0,function(){var e,n;return J(this,function(o){switch(o.label){case 0:return e=Kt(),[4,this.backend.time(t)];case 1:return(n=o.sent()).wallMs=Kt()-e,[2,n]}})})},r.prototype.track=function(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t},Object.defineProperty(r.prototype,"registeredVariables",{get:function(){return this.state.registeredVariables},enumerable:!0,configurable:!0}),r.prototype.reset=function(){for(var t in this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Gu,this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null},r.nextTensorId=0,r.nextVariableId=0,r}(),N=function(){var r=function(){if(ti==null){var e=void 0;if(typeof window<"u")e=window;else if(typeof global<"u")e=global;else if(typeof process<"u")e=process;else{if(typeof self>"u")throw new Error("Could not find a global object");e=self}ti=e}return ti}();if(r._tfengine==null){var t=new cp(r);r._tfengine=new Dp(t)}return function(e){ml=e}(r._tfengine.ENV),$t=function(){return r._tfengine},r._tfengine}();function Sl(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}var hn=L();hn.registerFlag("DEBUG",function(){return!1},function(r){r&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")}),hn.registerFlag("IS_BROWSER",function(){return Sl()}),hn.registerFlag("IS_NODE",function(){return typeof process<"u"&&process.versions!==void 0&&process.versions.node!==void 0}),hn.registerFlag("IS_CHROME",function(){return typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)}),hn.registerFlag("PROD",function(){return!1}),hn.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",function(){return hn.getBool("DEBUG")}),hn.registerFlag("DEPRECATION_WARNINGS_ENABLED",function(){return!0}),hn.registerFlag("IS_TEST",function(){return!1});var no,_t,wt,Hn={},ni={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function Ap(r,t){Hn[r]=t}function sn(r){r in Hn||(Hn[r]=function(e){if(e!==1&&e!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");var n=function(o){if(typeof OffscreenCanvas<"u"&&o===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}(e);return n.addEventListener("webglcontextlost",function(o){o.preventDefault(),delete Hn[e]},!1),e===1?n.getContext("webgl",ni)||n.getContext("experimental-webgl",ni):n.getContext("webgl2",ni)}(r));var t=Hn[r];return t.isContextLost()?(delete Hn[r],sn(r)):(t.disable(t.DEPTH_TEST),t.disable(t.STENCIL_TEST),t.disable(t.BLEND),t.disable(t.DITHER),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SAMPLE_COVERAGE),t.enable(t.SCISSOR_TEST),t.enable(t.CULL_FACE),t.cullFace(t.BACK),Hn[r])}function Da(r,t){return[t,r]}function Xr(r){var t=ee(r);return Pi(Math.ceil(t/4))}function ho(r,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(r/2))]}function ws(r,t){var e,n,o,a,i,s,u,c,l,f=r;return L().getNumber("WEBGL_VERSION")===2?(e=f.R32F,n=f.R16F,o=f.RGBA16F,a=f.RGBA32F,i=f.RED,s=4,u=1,c=f.HALF_FLOAT,l=f.FLOAT):(e=r.RGBA,n=r.RGBA,o=r.RGBA,a=f.RGBA,i=r.RGBA,s=4,u=4,c=t!=null?t.HALF_FLOAT_OES:null,l=r.FLOAT),{internalFormatFloat:e,internalFormatHalfFloat:n,internalFormatPackedHalfFloat:o,internalFormatPackedFloat:a,textureFormatFloat:i,downloadTextureFormat:r.RGBA,downloadUnpackNumChannels:s,defaultNumChannels:u,textureTypeHalfFloat:c,textureTypeFloat:l}}function ne(r,t,e){var n=e();return t&&function(o){var a=o.getError();if(a!==o.NO_ERROR)throw new Error("WebGL Error: "+Pp(o,a))}(r),n}(function(r){r[r.DENSE=0]="DENSE",r[r.SHARED_BATCH=1]="SHARED_BATCH"})(no||(no={})),function(r){r[r.RENDER=0]="RENDER",r[r.UPLOAD=1]="UPLOAD",r[r.PIXELS=2]="PIXELS",r[r.DOWNLOAD=3]="DOWNLOAD"}(_t||(_t={})),function(r){r[r.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",r[r.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",r[r.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",r[r.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",r[r.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"}(wt||(wt={}));var Tp=596e-10,Np=65504;function Fp(r){return!!(L().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||r===0||Tp<Math.abs(r)&&Math.abs(r)<Np)}function Pp(r,t){switch(t){case r.NO_ERROR:return"NO_ERROR";case r.INVALID_ENUM:return"INVALID_ENUM";case r.INVALID_VALUE:return"INVALID_VALUE";case r.INVALID_OPERATION:return"INVALID_OPERATION";case r.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case r.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case r.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return"Unknown error code "+t}}function Eo(r,t,e){return yn(r,t,function(){return r.getExtension(e)},'Extension "'+e+'" not supported on this browser.')}function Mp(r,t,e){var n=yn(r,t,function(){return r.createShader(r.VERTEX_SHADER)},"Unable to create vertex WebGLShader.");if(ne(r,t,function(){return r.shaderSource(n,e)}),ne(r,t,function(){return r.compileShader(n)}),r.getShaderParameter(n,r.COMPILE_STATUS)===!1)throw console.log(r.getShaderInfoLog(n)),new Error("Failed to compile vertex shader.");return n}function Op(r,t,e){var n=yn(r,t,function(){return r.createShader(r.FRAGMENT_SHADER)},"Unable to create fragment WebGLShader.");if(ne(r,t,function(){return r.shaderSource(n,e)}),ne(r,t,function(){return r.compileShader(n)}),r.getShaderParameter(n,r.COMPILE_STATUS)===!1)throw function(o,a){var i=Bp.exec(a);if(i==null)return console.log("Couldn't parse line number in error: "+a),void console.log(o);for(var s=+i[1],u=o.split(`
`),c=u.length.toString().length+2,l=u.map(function(v,g){return _r((g+1).toString(),c)+v}),f=0,h=0;h<l.length;h++)f=Math.max(l[h].length,f);var d=l.slice(0,s-1),p=l.slice(s-1,s),m=l.slice(s);console.log(d.join(`
`)),console.log(a.split(`
`)[0]),console.log("%c "+_r(p[0],f),"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(m.join(`
`))}(e,r.getShaderInfoLog(n)),new Error("Failed to compile fragment shader.");return n}var ri,oi,Bp=/ERROR: [0-9]+:([0-9]+):/g;function Lp(r,t){return yn(r,t,function(){return r.createProgram()},"Unable to create WebGLProgram.")}function Wp(r,t,e){if(ne(r,t,function(){return r.linkProgram(e)}),r.getProgramParameter(e,r.LINK_STATUS)===!1)throw console.log(r.getProgramInfoLog(e)),new Error("Failed to link vertex and fragment shaders.")}function ai(r,t,e){if(ne(r,t,function(){return r.validateProgram(e)}),r.getProgramParameter(e,r.VALIDATE_STATUS)===!1)throw console.log(r.getProgramInfoLog(e)),new Error("Shader program validation failed.")}function zp(r,t,e){var n=yn(r,t,function(){return r.createBuffer()},"Unable to create WebGLBuffer");return ne(r,t,function(){return r.bindBuffer(r.ARRAY_BUFFER,n)}),ne(r,t,function(){return r.bufferData(r.ARRAY_BUFFER,e,r.STATIC_DRAW)}),n}function Up(r,t,e){var n=yn(r,t,function(){return r.createBuffer()},"Unable to create WebGLBuffer");return ne(r,t,function(){return r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,n)}),ne(r,t,function(){return r.bufferData(r.ELEMENT_ARRAY_BUFFER,e,r.STATIC_DRAW)}),n}function Vp(r,t){return yn(r,t,function(){return r.createTexture()},"Unable to create WebGLTexture.")}function Gp(r,t){var e=L().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(r<=0||t<=0){var n="["+r+"x"+t+"]";throw new Error("Requested texture size "+n+" is invalid.")}if(r>e||t>e)throw n="["+r+"x"+t+"]",new Error("Requested texture size "+n+" greater than WebGL maximum on this browser / GPU "+("["+e+"x"+e+"]")+".")}function Hp(r,t){return yn(r,t,function(){return r.createFramebuffer()},"Unable to create WebGLFramebuffer.")}function Hu(r,t,e,n,o,a,i,s){var u=r.getAttribLocation(e,n);return u!==-1&&(ne(r,t,function(){return r.bindBuffer(r.ARRAY_BUFFER,o)}),ne(r,t,function(){return r.vertexAttribPointer(u,a,r.FLOAT,!1,i,s)}),ne(r,t,function(){return r.enableVertexAttribArray(u)}),!0)}function jp(r,t,e,n){Yp(r,n),ne(r,t,function(){return r.activeTexture(r.TEXTURE0+n)}),ne(r,t,function(){return r.bindTexture(r.TEXTURE_2D,e)})}function qp(r,t,e,n){return yn(r,t,function(){return r.getUniformLocation(e,n)},'uniform "'+n+'" not present in program.')}function Kp(r,t,e){return r.getUniformLocation(t,e)}function Xp(r,t,e,n,o,a){ne(r,t,function(){return jp(r,t,n,a)}),ne(r,t,function(){return r.uniform1i(o,a)})}function ii(r,t,e,n){ne(r,t,function(){return r.bindFramebuffer(r.FRAMEBUFFER,n)}),ne(r,t,function(){return r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e,0)})}function ju(r,t,e){ne(r,t,function(){return r.bindFramebuffer(r.FRAMEBUFFER,e)}),ne(r,t,function(){return r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,null,0)})}function Io(r){var t=r.checkFramebufferStatus(r.FRAMEBUFFER);if(t!==r.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+$p(r,t))}function $p(r,t){switch(t){case r.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case r.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return"unknown error "+t}}function yn(r,t,e,n){var o=ne(r,t,function(){return e()});if(o==null)throw new Error(n);return o}function Yp(r,t){var e=r.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,n=t+r.TEXTURE0;if(n<r.TEXTURE0||n>e)throw new Error("textureUnit must be in "+("[gl.TEXTURE0, gl.TEXTURE"+e+"]")+".")}function na(r,t){return t===void 0&&(t=2),ee(r.slice(0,r.length-t))}function ra(r){if(r.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[r.length>1?r[r.length-2]:1,r[r.length-1]]}function si(r){var t=[1,1,1];return r.length===0||r.length===1&&r[0]===1||(t=[na(r)].concat(ra(r))),t}function Jp(r,t){var e;t===void 0&&(t=!1);var n=L().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(t&&(n*=2,(r=r.map(function(c,l){return l>=r.length-2?bl(r[l]):r[l]})).length===1&&(r=[2,r[0]])),r.length!==2){var o=Kn(r);r=o.newShape}var a=ee(r);if(r.length<=1&&a<=n)return[1,a];if(r.length===2&&r[0]<=n&&r[1]<=n)return r;if(r.length===3&&r[0]*r[1]<=n&&r[2]<=n)return[r[0]*r[1],r[2]];if(r.length===3&&r[0]<=n&&r[1]*r[2]<=n)return[r[0],r[1]*r[2]];if(r.length===4&&r[0]*r[1]*r[2]<=n&&r[3]<=n)return[r[0]*r[1]*r[2],r[3]];if(r.length===4&&r[0]<=n&&r[1]*r[2]*r[3]<=n)return[r[0],r[1]*r[2]*r[3]];if(t){var i=na(r),s=2,u=2;return r.length&&(s=(e=ra(r))[0],u=e[1]),Pi(a=i*(s/2)*(u/2)).map(function(c){return 2*c})}return Pi(a)}function Ro(r){return r%2==0}function ko(r,t){if(Xe(r=r.slice(-2),t=t.slice(-2))||!r.length||!t.length||r[0]===0||r[1]===0||t[0]===0||t[1]===0)return!0;if(r.length!==t.length){var e=r.slice(-1)[0],n=t.slice(-1)[0];if(e===n||Ro(e)&&Ro(n)&&(r[0]===1||t[0]===1))return!0}return r[1]===t[1]&&Ro(r[0])&&Ro(t[0])}function Qp(r){if(ri==null){var t=sn(r);ri=t.getParameter(t.MAX_TEXTURE_SIZE)}return ri}function Zp(r){if(oi==null){var t=sn(r);oi=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,oi)}function ev(r){if(r===0)return 0;var t=sn(r);return Ft(t,"EXT_disjoint_timer_query_webgl2")&&r===2?2:Ft(t,"EXT_disjoint_timer_query")?1:0}function Ft(r,t){return r.getExtension(t)!=null}function qu(r){try{if(sn(r)!=null)return!0}catch{return!1}return!1}function tv(r){if(r===0)return!1;var t=sn(r);if(r===1){if(!Ft(t,"OES_texture_float"))return!1}else if(!Ft(t,"EXT_color_buffer_float"))return!1;return Ui(t)}function nv(r){if(r===0)return!1;var t=sn(r);if(r!==1){if(Ft(t,"EXT_color_buffer_float"))return Ui(t);if(Ft(t,"EXT_color_buffer_half_float")){var e=t.getExtension("EXT_color_buffer_half_float");return function(n,o){var a=ws(n,o),i=n.createTexture();n.bindTexture(n.TEXTURE_2D,i),n.texImage2D(n.TEXTURE_2D,0,a.internalFormatHalfFloat,1,1,0,a.textureFormatFloat,a.textureTypeHalfFloat,null);var s=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,s),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,i,0);var u=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(i),n.deleteFramebuffer(s),u}(t,e)}return!1}return!!Ft(t,"OES_texture_float")&&!!Ft(t,"WEBGL_color_buffer_float")&&Ui(t)}function Ui(r){var t=ws(r),e=r.createTexture();r.bindTexture(r.TEXTURE_2D,e),r.texImage2D(r.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);var n=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,n),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e,0);var o=r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;return r.bindTexture(r.TEXTURE_2D,null),r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(e),r.deleteFramebuffer(n),o}function rv(r){return r===2&&sn(r).fenceSync!=null}var ce=L();function Dl(r){L().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(r+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function $(r,t){return N.tidy(r,t)}function dt(r){kl(r).forEach(function(t){return t.dispose()})}function ov(r){return N.keep(r)}function oa(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];L().getBool("IS_TEST")||console.warn.apply(console,r)}function Wn(r,t){var e=r;if(Qt(r))return t==="string"?[]:[r.length];if(!Array.isArray(r))return[];for(var n=[];Array.isArray(e)||Qt(e)&&t!=="string";)n.push(e.length),e=e[0];return Array.isArray(r)&&L().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&function o(a,i,s){if(s=s||[],!Array.isArray(a)&&!Qt(a))return void S(i.length===0,function(){return"Element arr["+s.join("][")+"] is a primitive, but should be an array/TypedArray of "+i[0]+" elements"});S(i.length>0,function(){return"Element arr["+s.join("][")+"] should be a primitive, but is an array of "+a.length+" elements"}),S(a.length===i[0],function(){return"Element arr["+s.join("][")+"] should have "+i[0]+" elements, but has "+a.length+" elements"});for(var u=i.slice(1),c=0;c<a.length;++c)o(a[c],u,s.concat(c))}(r,n,[]),n}function Ku(r,t,e,n){if(r!=null&&(r!=="numeric"&&r!==t||r==="numeric"&&t==="string"))throw new Error("Argument '"+e+"' passed to '"+n+"' must be "+r+" tensor, but got "+t+" tensor")}function C(r,t,e,n){if(n===void 0&&(n="numeric"),r instanceof Pe)return Ku(n,r.dtype,t,e),r;var o=lo(r);if(o!=="string"&&["bool","int32","float32"].indexOf(n)>=0&&(o=n),Ku(n,o,t,e),r==null||!Qt(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string"){var a=r==null?"null":r.constructor.name;throw new Error("Argument '"+t+"' passed to '"+e+"' must be a Tensor or TensorLike, but got '"+a+"'")}var i=Wn(r,o);Qt(r)||Array.isArray(r)||(r=[r]);var s=o!=="string"?_l(r,o,L().getBool("DEBUG")):Ar(r,[],!0);return N.makeTensor(s,i,o)}function aa(r,t,e,n){if(n===void 0&&(n="numeric"),!Array.isArray(r))throw new Error("Argument "+t+" passed to "+e+" must be a `Tensor[]` or `TensorLike[]`");return r.map(function(o,a){return C(o,t+"["+a+"]",e)},n)}function Al(r,t){for(var e=0;e<r.length;++e)if(r[r.length-e-1]!==t-1-e)return!1;return!0}function av(r,t,e){for(var n=r.length+t.length,o=[],a=0,i=0,s=0;s<n;s++)e.indexOf(s)===-1?o.push(r[a++]):o.push(t[i++]);return o}function et(r,t){for(var e=[],n=r.length,o=0;o<n;o++)t.indexOf(o)===-1&&e.push(r[o]);return[e,t.map(function(a){return r[a]})]}function vt(r,t){return av(r,t.map(function(e){return 1}),t)}function bt(r,t,e){S(Al(t,e),function(){return r+" supports only inner-most axes for now. Got axes "+t+" and rank-"+e+" input."})}function un(r,t){if(Al(r,t))return null;for(var e=[],n=0;n<t;++n)r.indexOf(n)===-1&&e.push(n);return r.forEach(function(o){return e.push(o)}),e}function _s(r){return r.map(function(t,e){return[e,t]}).sort(function(t,e){return t[1]-e[1]}).map(function(t){return t[0]})}function cn(r,t){for(var e=[],n=t-r;n<t;++n)e.push(n);return e}function iv(r,t){var e=r[0].length;r.forEach(function(o,a){S(o.length===e,function(){return"Error in concat"+e+"D: rank of tensors["+a+"] must be the same as the rank of the rest ("+e+")"})}),S(t>=0&&t<e,function(){return"Error in concat"+e+"D: axis must be between 0 and "+(e-1)+"."});var n=r[0];r.forEach(function(o,a){for(var i=0;i<e;i++)S(i===t||o[i]===n[i],function(){return"Error in concat"+e+"D: Shape of tensors["+a+"] ("+o+") does not match the shape of the rest ("+n+") along the non-concatenated axis "+a+"."})})}function Nr(r,t){for(var e=r[0].slice(),n=1;n<r.length;n++)e[t]+=r[n][t];return e}function D(r){var t=Object.keys(r);if(t.length!==1)throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with "+t.length+" keys.");var e=t[0],n=r[e];e.endsWith("_")&&(e=e.substring(0,e.length-1));var o=function(){for(var a=[],i=0;i<arguments.length;i++)a[i]=arguments[i];N.startScope(e);try{var s=n.apply(void 0,a);return s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),N.endScope(s),s}catch(u){throw N.endScope(null),u}};return Object.defineProperty(o,"name",{value:e,configurable:!0}),o}ce.registerFlag("HAS_WEBGL",function(){return ce.getNumber("WEBGL_VERSION")>0}),ce.registerFlag("WEBGL_VERSION",function(){return qu(2)?2:qu(1)?1:0}),ce.registerFlag("WEBGL_BUFFER_SUPPORTED",function(){return ce.get("WEBGL_VERSION")===2}),ce.registerFlag("WEBGL_CPU_FORWARD",function(){return!0}),ce.registerFlag("WEBGL_FORCE_F16_TEXTURES",function(){return!1}),ce.registerFlag("WEBGL_PACK",function(){return ce.getBool("HAS_WEBGL")}),ce.registerFlag("WEBGL_PACK_NORMALIZATION",function(){return ce.getBool("WEBGL_PACK")}),ce.registerFlag("WEBGL_PACK_CLIP",function(){return ce.getBool("WEBGL_PACK")}),ce.registerFlag("WEBGL_PACK_DEPTHWISECONV",function(){return!1}),ce.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",function(){return ce.getBool("WEBGL_PACK")}),ce.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",function(){return ce.getBool("WEBGL_PACK")}),ce.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",function(){return ce.getBool("WEBGL_PACK")}),ce.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",function(){return ce.getBool("WEBGL_PACK")}),ce.registerFlag("WEBGL_PACK_REDUCE",function(){return ce.getBool("WEBGL_PACK")}),ce.registerFlag("WEBGL_LAZILY_UNPACK",function(){return ce.getBool("WEBGL_PACK")}),ce.registerFlag("WEBGL_CONV_IM2COL",function(){return ce.getBool("WEBGL_PACK")}),ce.registerFlag("WEBGL_MAX_TEXTURE_SIZE",function(){return Qp(ce.getNumber("WEBGL_VERSION"))}),ce.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",function(){return Zp(ce.getNumber("WEBGL_VERSION"))}),ce.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",function(){var r=ce.getNumber("WEBGL_VERSION");return r===0?0:ev(r)}),ce.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",function(){return ce.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&(r=navigator.userAgent||navigator.vendor||window.opera,!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(r)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(r.substr(0,4))));var r}),ce.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",function(){return tv(ce.getNumber("WEBGL_VERSION"))}),ce.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",function(){return!ce.getBool("WEBGL_FORCE_F16_TEXTURES")&&ce.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")}),ce.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",function(){return nv(ce.getNumber("WEBGL_VERSION"))}),ce.registerFlag("WEBGL_FENCE_API_ENABLED",function(){return rv(ce.getNumber("WEBGL_VERSION"))}),ce.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",function(){return ce.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0}),Rl=Dl;var Je=D({complex_:function(r,t){var e=C(r,"real","complex"),n=C(t,"imag","complex");return Ie(e.shape,n.shape,"real and imag shapes, "+e.shape+" and "+n.shape+", must match in call to tf.complex()."),N.runKernelFunc(function(o){return o.complex(e,n)},{$real:e,$imag:n})}}),Nt=D({real_:function(r){var t=C(r,"input","real");return N.runKernelFunc(function(e){return e.real(t)},{$input:t})}}),Yt=D({imag_:function(r){var t=C(r,"input","imag");return N.runKernelFunc(function(e){return e.imag(t)},{$input:t})}});function Ze(r,t,e){return zn(r,t,Wn(r,e),e)}function zn(r,t,e,n){if(n==null&&(n=lo(r)),n==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!Qt(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){El(t);var o=ee(t),a=ee(e);S(o===a,function(){return"Based on the provided shape, ["+t+"], the tensor should have "+o+" values but has "+a});for(var i=0;i<e.length;++i){var s=e[i],u=i!==e.length-1||s!==ee(t.slice(i));S(e[i]===t[i]||!u,function(){return"Error creating a new Tensor. Inferred shape ("+e+") does not match the provided shape ("+t+"). "})}}return Qt(r)||Array.isArray(r)||(r=[r]),t=t||e,r=n!=="string"?_l(r,n,L().getBool("DEBUG")):Ar(r,[],!0),N.makeTensor(r,t,n)}function q(r,t){if((Qt(r)&&t!=="string"||Array.isArray(r))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&Qt(r)&&!(r instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return zn(r,[],[],t)}function We(r,t){Wr(r);var e=Wn(r,t);if(e.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return zn(r,null,e,t)}function Fn(r,t,e){if(Wr(r),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");var n=Wn(r,e);if(n.length!==2&&n.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return zn(r,t,n,e)}function Cs(r,t,e){if(Wr(r),t!=null&&t.length!==3)throw new Error("tensor3d() requires shape to have three numbers");var n=Wn(r,e);if(n.length!==3&&n.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return zn(r,t,n,e)}function ft(r,t,e){if(Wr(r),t!=null&&t.length!==4)throw new Error("tensor4d() requires shape to have four numbers");var n=Wn(r,e);if(n.length!==4&&n.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return zn(r,t,n,e)}function sv(r,t,e){if(Wr(r),t!=null&&t.length!==5)throw new Error("tensor5d() requires shape to have five numbers");var n=Wn(r,e);if(n.length!==5&&n.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return zn(r,t,n,e)}function uv(r,t,e){if(Wr(r),t!=null&&t.length!==6)throw new Error("tensor6d() requires shape to have six numbers");var n=Wn(r,e);if(n.length!==6&&n.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return zn(r,t=t||n,n,e)}function cv(r,t,e,n){return t===void 0&&(t=!0),N.makeVariable(r,t,e,n)}function zr(r,t){if(t===void 0&&(t="float32"),t==="complex64"){var e=zr(r,"float32"),n=Ne(r,"float32");return Je(e,n)}var o=Cl(ee(r),t);return N.makeTensor(o,r,t)}function Ne(r,t){if(t===void 0&&(t="float32"),t==="complex64"){var e=Ne(r,"float32"),n=Ne(r,"float32");return Je(e,n)}var o=fo(ee(r),t);return N.makeTensor(o,r,t)}function en(r,t,e){return N.runKernelFunc(function(n){return n.fill(r,t,e)},{})}function lv(r,t,e){if(e<=0)throw new Error("The number of values should be positive.");return N.runKernelFunc(function(n){return n.linspace(r,t,e)},{})}function ia(r,t,e,n){if(e===void 0&&(e=1),n===void 0&&(n="float32"),e===0)throw new Error("Cannot have a step of zero");if(r===t||r<t&&e<0||t<r&&e>1)return Ne([0],n);var o=fo(Math.abs(Math.ceil((t-r)/e)),n);t<r&&e===1&&(e=-1),o[0]=r;for(var a=1;a<o.length;a++)o[a]=o[a-1]+e;return We(o,n)}var Tl=D({onesLike_:function(r){var t=C(r,"x","onesLike");if(t.dtype==="complex64"){var e=Tl(Nt(t)),n=we(Yt(t));return Je(e,n)}return N.runKernelFunc(function(o){return o.onesLike(t)},{$x:t},function(o,a){return{$x:function(){return we(o)}}})}}),we=D({zerosLike_:function(r){var t=C(r,"x","zerosLike");return N.runKernelFunc(function(e){return e.zerosLike(t)},{$x:t},function(e,n){return{$x:function(){return we(e)}}})}}),Ve=D({concat_:function(r,t){t===void 0&&(t=0),S(r.length>=1,function(){return"Pass at least one tensor to concat"});var e=aa(r,"tensors","concat");e[0].dtype==="complex64"&&e.forEach(function(s){if(s.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype `+s.dtype+". ")}),t=qe(t,e[0].shape)[0];var n=Nr(e.map(function(s){return s.shape}),t);if(ee(n)===0)return Ze([],n);if((e=e.filter(function(s){return s.size>0})).length===1)return e[0];var o=e.map(function(s){return s.shape});iv(o,t);var a=e,i={axis:t};return N.runKernelFunc(function(s){return s.concat(e,t)},a,function(s){var u=o.map(function(c){return c[t]});return Es(s,u,t).map(function(c){return function(){return c}})},"Concat",i)}}),fv=D({concat1d_:function(r){return Ve(r,0)}}),hv=D({concat2d_:function(r,t){return Ve(r,t)}}),dv=D({concat3d_:function(r,t){return Ve(r,t)}}),pv=D({concat4d_:function(r,t){return Ve(r,t)}}),Es=D({split_:function(r,t,e){e===void 0&&(e=0);var n,o=C(r,"x","split");return e=qe(e,o.shape)[0],typeof t=="number"?(S(o.shape[e]%t==0,function(){return"Number of splits must evenly divide the axis."}),n=new Array(t).fill(o.shape[e]/t)):(S(o.shape[e]===t.reduce(function(a,i){return a+i}),function(){return"The sum of sizes must match the size of the axis dimension."}),n=t),N.runKernelFunc(function(a){return a.split(o,n,e)},{$x:o},function(a){return{$x:function(){return Ve(a,e)}}})}});function or(r,t){return r(t={exports:{}},t.exports),t.exports}var vv=or(function(r){(function(t,e,n){function o(s){var u,c=this,l=(u=4022871197,function(f){f=f.toString();for(var h=0;h<f.length;h++){var d=.02519603282416938*(u+=f.charCodeAt(h));d-=u=d>>>0,u=(d*=u)>>>0,u+=4294967296*(d-=u)}return 23283064365386963e-26*(u>>>0)});c.next=function(){var f=2091639*c.s0+23283064365386963e-26*c.c;return c.s0=c.s1,c.s1=c.s2,c.s2=f-(c.c=0|f)},c.c=1,c.s0=l(" "),c.s1=l(" "),c.s2=l(" "),c.s0-=l(s),c.s0<0&&(c.s0+=1),c.s1-=l(s),c.s1<0&&(c.s1+=1),c.s2-=l(s),c.s2<0&&(c.s2+=1),l=null}function a(s,u){return u.c=s.c,u.s0=s.s0,u.s1=s.s1,u.s2=s.s2,u}function i(s,u){var c=new o(s),l=u&&u.state,f=c.next;return f.int32=function(){return 4294967296*c.next()|0},f.double=function(){return f()+11102230246251565e-32*(2097152*f()|0)},f.quick=f,l&&(typeof l=="object"&&a(l,c),f.state=function(){return a(c,{})}),f}e&&e.exports?e.exports=i:this.alea=i})(0,r)}),mv=or(function(r){(function(t,e,n){function o(s){var u=this,c="";u.x=0,u.y=0,u.z=0,u.w=0,u.next=function(){var f=u.x^u.x<<11;return u.x=u.y,u.y=u.z,u.z=u.w,u.w^=u.w>>>19^f^f>>>8},s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),u.next()}function a(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u}function i(s,u){var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(typeof l=="object"&&a(l,c),f.state=function(){return a(c,{})}),f}e&&e.exports?e.exports=i:this.xor128=i})(0,r)}),gv=or(function(r){(function(t,e,n){function o(s){var u=this,c="";u.next=function(){var f=u.x^u.x>>>2;return u.x=u.y,u.y=u.z,u.z=u.w,u.w=u.v,(u.d=u.d+362437|0)+(u.v=u.v^u.v<<4^f^f<<1)|0},u.x=0,u.y=0,u.z=0,u.w=0,u.v=0,s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),l==c.length&&(u.d=u.x<<10^u.x>>>4),u.next()}function a(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u.v=s.v,u.d=s.d,u}function i(s,u){var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(typeof l=="object"&&a(l,c),f.state=function(){return a(c,{})}),f}e&&e.exports?e.exports=i:this.xorwow=i})(0,r)}),yv=or(function(r){(function(t,e,n){function o(s){var u=this;u.next=function(){var c,l,f=u.x,h=u.i;return c=f[h],l=(c^=c>>>7)^c<<24,l^=(c=f[h+1&7])^c>>>10,l^=(c=f[h+3&7])^c>>>3,l^=(c=f[h+4&7])^c<<7,c=f[h+7&7],l^=(c^=c<<13)^c<<9,f[h]=l,u.i=h+1&7,l},function(c,l){var f,h=[];if(l===(0|l))h[0]=l;else for(l=""+l,f=0;f<l.length;++f)h[7&f]=h[7&f]<<15^l.charCodeAt(f)+h[f+1&7]<<13;for(;h.length<8;)h.push(0);for(f=0;f<8&&h[f]===0;++f);for(f==8?h[7]=-1:h[f],c.x=h,c.i=0,f=256;f>0;--f)c.next()}(u,s)}function a(s,u){return u.x=s.x.slice(),u.i=s.i,u}function i(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(l.x&&a(l,c),f.state=function(){return a(c,{})}),f}e&&e.exports?e.exports=i:this.xorshift7=i})(0,r)}),xv=or(function(r){(function(t,e,n){function o(s){var u=this;u.next=function(){var c,l,f=u.w,h=u.X,d=u.i;return u.w=f=f+1640531527|0,l=h[d+34&127],c=h[d=d+1&127],l^=l<<13,c^=c<<17,l^=l>>>15,c^=c>>>12,l=h[d]=l^c,u.i=d,l+(f^f>>>16)|0},function(c,l){var f,h,d,p,m,v=[],g=128;for(l===(0|l)?(h=l,l=null):(l+="\0",h=0,g=Math.max(g,l.length)),d=0,p=-32;p<g;++p)l&&(h^=l.charCodeAt((p+32)%l.length)),p===0&&(m=h),h^=h<<10,h^=h>>>15,h^=h<<4,h^=h>>>13,p>=0&&(m=m+1640531527|0,d=(f=v[127&p]^=h+m)==0?d+1:0);for(d>=128&&(v[127&(l&&l.length||0)]=-1),d=127,p=512;p>0;--p)h=v[d+34&127],f=v[d=d+1&127],h^=h<<13,f^=f<<17,h^=h>>>15,f^=f>>>12,v[d]=h^f;c.w=m,c.X=v,c.i=d}(u,s)}function a(s,u){return u.i=s.i,u.w=s.w,u.X=s.X.slice(),u}function i(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(l.X&&a(l,c),f.state=function(){return a(c,{})}),f}e&&e.exports?e.exports=i:this.xor4096=i})(0,r)}),bv=or(function(r){(function(t,e,n){function o(s){var u=this,c="";u.next=function(){var f=u.b,h=u.c,d=u.d,p=u.a;return f=f<<25^f>>>7^h,h=h-d|0,d=d<<24^d>>>8^p,p=p-f|0,u.b=f=f<<20^f>>>12^h,u.c=h=h-d|0,u.d=d<<16^h>>>16^p,u.a=p-f|0},u.a=0,u.b=0,u.c=-1640531527,u.d=1367130551,s===Math.floor(s)?(u.a=s/4294967296|0,u.b=0|s):c+=s;for(var l=0;l<c.length+20;l++)u.b^=0|c.charCodeAt(l),u.next()}function a(s,u){return u.a=s.a,u.b=s.b,u.c=s.c,u.d=s.d,u}function i(s,u){var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(typeof l=="object"&&a(l,c),f.state=function(){return a(c,{})}),f}e&&e.exports?e.exports=i:this.tychei=i})(0,r)}),jn=or(function(r){(function(t,e){var n,o=this,a=256,i=6,s="random",u=e.pow(a,i),c=e.pow(2,52),l=2*c,f=a-1;function h(g,x,w){var y=[],b=m(function I(R,k){var T,A=[],B=typeof R;if(k&&B=="object")for(T in R)try{A.push(I(R[T],k-1))}catch{}return A.length?A:B=="string"?R:R+"\0"}((x=x==1?{entropy:!0}:x||{}).entropy?[g,v(t)]:g??function(){try{var I;return n&&(I=n.randomBytes)?I=I(a):(I=new Uint8Array(a),(o.crypto||o.msCrypto).getRandomValues(I)),v(I)}catch{var R=o.navigator,k=R&&R.plugins;return[+new Date,o,k,o.screen,v(t)]}}(),3),y),_=new d(y),E=function(){for(var I=_.g(i),R=u,k=0;I<c;)I=(I+k)*a,R*=a,k=_.g(1);for(;I>=l;)I/=2,R/=2,k>>>=1;return(I+k)/R};return E.int32=function(){return 0|_.g(4)},E.quick=function(){return _.g(4)/4294967296},E.double=E,m(v(_.S),t),(x.pass||w||function(I,R,k,T){return T&&(T.S&&p(T,_),I.state=function(){return p(_,{})}),k?(e[s]=I,R):I})(E,b,"global"in x?x.global:this==e,x.state)}function d(g){var x,w=g.length,y=this,b=0,_=y.i=y.j=0,E=y.S=[];for(w||(g=[w++]);b<a;)E[b]=b++;for(b=0;b<a;b++)E[b]=E[_=f&_+g[b%w]+(x=E[b])],E[_]=x;(y.g=function(I){for(var R,k=0,T=y.i,A=y.j,B=y.S;I--;)R=B[T=f&T+1],k=k*a+B[f&(B[T]=B[A=f&A+R])+(B[A]=R)];return y.i=T,y.j=A,k})(a)}function p(g,x){return x.i=g.i,x.j=g.j,x.S=g.S.slice(),x}function m(g,x){for(var w,y=g+"",b=0;b<y.length;)x[f&b]=f&(w^=19*x[f&b])+y.charCodeAt(b++);return v(x)}function v(g){return String.fromCharCode.apply(0,g)}if(e["seed"+s]=h,m(e.random(),t),r.exports){r.exports=h;try{n=require("crypto")}catch{}}})([],Math)});jn.alea=vv,jn.xor128=mv,jn.xorwow=gv,jn.xorshift7=yv,jn.xor4096=xv,jn.tychei=bv;var Aa=jn.alea,Is=function(){function r(t,e,n,o,a){this.mean=t,this.stdDev=e,this.dtype=n,this.nextVal=NaN,this.truncated=o,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);var i=a||Math.random();this.random=Aa(i.toString())}return r.prototype.nextValue=function(){if(!isNaN(this.nextVal)){var t=this.nextVal;return this.nextVal=NaN,t}for(var e,n,o=!1;!o;){var a=void 0,i=void 0,s=void 0;do s=(a=2*this.random()-1)*a+(i=2*this.random()-1)*i;while(s>=1||s===0);var u=Math.sqrt(-2*Math.log(s)/s);e=this.mean+this.stdDev*a*u,n=this.mean+this.stdDev*i*u,this.truncated&&!this.isValidTruncated(e)||(o=!0)}return this.truncated&&!this.isValidTruncated(n)||(this.nextVal=this.convertValue(n)),this.convertValue(e)},r.prototype.convertValue=function(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)},r.prototype.isValidTruncated=function(t){return t<=this.upper&&t>=this.lower},r}(),wv=function(){function r(t,e,n,o){this.alpha=t,this.beta=1/e,this.dtype=n;var a=o||Math.random();this.randu=Aa(a.toString()),this.randn=new Is(0,1,n,!1,this.randu()),this.d=t<1?t+2/3:t-1/3,this.c=1/Math.sqrt(9*this.d)}return r.prototype.nextValue=function(){for(var t,e,n,o,a,i;;){do o=this.randn.nextValue(),i=1+this.c*o;while(i<=0);if(i*=i*i,e=1-.331*(t=o*o)*t,n=.5*t+this.d*(1-i+Math.log(i)),(a=this.randu())<e||Math.log(a)<n)break}return i=1/this.beta*this.d*i,this.alpha<1&&(i*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(i)},r.prototype.convertValue=function(t){return this.dtype==="float32"?t:Math.round(t)},r}(),_v=function(){function r(t,e,n,o){var a=this;if(t===void 0&&(t=0),e===void 0&&(e=1),this.canReturnFloat=function(){return a.dtype==null||a.dtype==="float32"},this.min=t,this.range=e-t,this.dtype=n,o==null&&(o=Math.random()),typeof o=="number"&&(o=o.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error("The difference between "+t+" - "+e+" <= 1 and dtype is not float");this.random=Aa(o)}return r.prototype.convertValue=function(t){return this.canReturnFloat()?t:Math.round(t)},r.prototype.nextValue=function(){return this.convertValue(this.min+this.range*this.random())},r}();function de(r,t,e){return t===void 0&&(t="float32"),t=t||"float32",El(r),new to(r,t,e)}function Cv(r,t){t===void 0&&(t=!1),console.log(r.toString(t))}var Nl=D({batchToSpaceND_:function(r,t,e){var n=C(r,"x","batchToSpaceND"),o=t.reduce(function(a,i){return a*i});return S(n.rank>=1+t.length,function(){return"input rank is "+n.rank+" but should be > than blockShape.length "+t.length}),S(e.length===t.length,function(){return"crops.length is "+e.length+" but should be equal to blockShape.length  "+t.length}),S(n.shape[0]%o==0,function(){return"input tensor batch is "+n.shape[0]+" but is not divisible by the product of the elements of blockShape "+t.join(" * ")+" === "+o}),N.runKernelFunc(function(a){return a.batchToSpaceND(n,t,e)},{$x:n},function(a){return{$x:function(){return a.spaceToBatchND(t,e)}}})}}),Ev=D({broadcastTo_:function(r,t){var e=C(r,"broadcastTo","x"),n=e.shape;if(t.some(function(u){return!(u>0)||u%1!=0}))throw new Error("broadcastTo(): Invalid broadcast shape ["+t+"].");if(t.length<e.rank)throw new Error("broadcastTo(): shape.length="+t.length+" < input.rank="+e.rank+".");if(t.length>e.rank){for(var o=e.shape.slice();o.length<t.length;)o.unshift(1);e=e.reshape(o)}for(var a=Array.from(t),i=t.length-1;i>=0;i--)if(e.shape[i]===t[i])a[i]=1;else if(e.shape[i]!==1)throw new Error("broadcastTo(): ["+n+"] cannot be broadcast to ["+t+"].");var s=a.map(function(u,c){return u>1?c:-1}).filter(function(u){return u>=0});return s.length===0?e.clone():N.runKernelFunc(function(u){return u.tile(e,a)},{input:e},function(u){return{input:function(){return u.sum(s,!0)}}})}}),Iv=D({cast_:function(r,t){var e=C(r,"x","cast");if(!gp(t))throw new Error("Failed to cast to unknown dtype "+t);if(t==="string"&&e.dtype!=="string"||t!=="string"&&e.dtype==="string")throw new Error("Only strings can be casted to strings");var n={dtype:t};return N.runKernelFunc(function(o){return o.cast(e,t)},{x:e},function(o){return{x:function(){return o.clone()}}},"Cast",n)}}),Rv=D({clone_:function(r){var t=C(r,"x","clone",null);return N.runKernelFunc(function(){return N.makeTensorFromDataId(t.dataId,t.shape,t.dtype)},{$x:t},function(e){return{$x:function(){return e.toFloat()}}})}}),kv=D({cumsum_:function(r,t,e,n){t===void 0&&(t=0),e===void 0&&(e=!1),n===void 0&&(n=!1);var o=C(r,"x","cumsum"),a=un([t|=0],o.rank),i=o;a!=null&&(i=o.transpose(a));var s=cn(1,o.rank)[0],u=N.runKernelFunc(function(c){return c.cumsum(i,s,e,n)},{permutedX:i},function(c){return{permutedX:function(){return c.cumsum(t,e,!n)}}});return a!=null&&(u=u.transpose(a)),u}}),Sv=D({depthToSpace_:function(r,t,e){e===void 0&&(e="NHWC");var n=C(r,"x","depthToSpace"),o=e==="NHWC"?n.shape[1]:n.shape[2],a=e==="NHWC"?n.shape[2]:n.shape[3],i=e==="NHWC"?n.shape[3]:n.shape[1];return S(o*t>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+o+" and "+t+`  for depthToSpace with input shape
      `+n.shape}),S(a*t>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+a+" and "+t+` for depthToSpace with input shape
          `+n.shape}),S(i%(t*t)==0,function(){return"Dimension size must be evenly divisible by "+t*t+" but is "+i+" for depthToSpace with input shape "+n.shape}),N.runKernelFunc(function(s){return s.depthToSpace(n,t,e)},{$x:n})}}),Tt=D({expandDims_:function(r,t){t===void 0&&(t=0);var e=C(r,"x","expandDims",null);S(t<=e.rank,function(){return"Axis must be <= rank of the tensor"});var n=e.shape.slice();return t<0&&(S(-(e.rank+1)<=t,function(){return"Axis must be in the interval ["+-(e.rank+1)+", "+e.rank+"]"}),t=e.rank+t+1),n.splice(t,0,1),Bt(e,n)}}),Fl=D({eye_:function(r,t,e,n){n===void 0&&(n="float32"),t==null&&(t=r);for(var o=de([r,t],n),a=r<=t?r:t,i=0;i<a;++i)o.set(1,i,i);var s=o.toTensor().as2D(r,t);if(e==null)return s;if(e.length===1)return Cr(Tt(s,0),[e[0],1,1]);if(e.length===2)return Cr(Tt(Tt(s,0),0),[e[0],e[1],1,1]);if(e.length===3)return Cr(Tt(Tt(Tt(s,0),0),0),[e[0],e[1],e[2],1,1]);throw new Error("eye() currently supports only 1D and 2D batchShapes, but received "+e.length+"D.")}}),Dv=D({multinomial_:function(r,t,e,n){n===void 0&&(n=!1);var o=C(r,"logits","multinomial"),a=o.size,i=o.rank;if(a<2)throw new Error("Error in multinomial: you need at least 2 outcomes, but got "+a+".");if(i>2)throw new Error("Rank of probabilities must be 1 or 2, but is "+i);e=e||Math.random();var s=i===1?o.as2D(1,-1):o,u=N.runKernelFunc(function(c){return c.multinomial(s,n,t,e)},{logits2D:s});return i===1?u.as1D():u}}),Vi=D({oneHot_:function(r,t,e,n){if(e===void 0&&(e=1),n===void 0&&(n=0),t<2)throw new Error("Error in oneHot: depth must be >=2, but it is "+t);var o=C(r,"indices","oneHot","int32"),a=o.shape.concat([t]);return o=o.flatten(),N.runKernelFunc(function(i){return i.oneHot(o,t,e,n)},{$indices:o},function(i){return{$indices:function(){return Ne(o.shape,"float32")}}}).reshape(a)}}),ar=D({pad_:function(r,t,e){e===void 0&&(e=0);var n=C(r,"x","pad");if(n.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");var o={paddings:t,constantValue:e};return N.runKernelFunc(function(a){return a.pad(n,t,e)},{x:n},function(a){var i=t.map(function(s){return s[0]});return{x:function(){return a.slice(i,n.shape)}}},"PadV2",o)}}),Av=D({pad1d_:function(r,t,e){return e===void 0&&(e=0),S(t.length===2,function(){return"Invalid number of paddings. Must be length of 2."}),ar(r,[t],e)}}),Tv=D({pad2d_:function(r,t,e){return e===void 0&&(e=0),S(t.length===2&&t[0].length===2&&t[1].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),ar(r,t,e)}}),Nv=D({pad3d_:function(r,t,e){return e===void 0&&(e=0),S(t.length===3&&t[0].length===2&&t[1].length===2&&t[2].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),ar(r,t,e)}}),Fv=D({pad4d_:function(r,t,e){return e===void 0&&(e=0),S(t.length===4&&t[0].length===2&&t[1].length===2&&t[2].length===2&&t[3].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),ar(r,t,e)}}),Pv=D({rand_:function(r,t,e){var n=ee(r),o=null;if(e==null||e==="float32")o=new Float32Array(n);else if(e==="int32")o=new Int32Array(n);else{if(e!=="bool")throw new Error("Unknown data type "+e);o=new Uint8Array(n)}for(var a=0;a<n;a++)o[a]=t();return N.makeTensor(o,r,e)}}),Mv=D({randomNormal_:function(r,t,e,n,o){if(t===void 0&&(t=0),e===void 0&&(e=1),n!=null&&n==="bool")throw new Error("Unsupported data type "+n);for(var a=new Is(t,e,n,!1,o),i=de(r,n),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),Ov=D({randomGamma_:function(r,t,e,n,o){if(e===void 0&&(e=1),n===void 0&&(n="float32"),e==null&&(e=1),n==null&&(n="float32"),n!=="float32"&&n!=="int32")throw new Error("Unsupported data type "+n);for(var a=new wv(t,e,n,o),i=de(r,n),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),Pl=D({randomUniform_:function(r,t,e,n,o){t===void 0&&(t=0),e===void 0&&(e=1),n===void 0&&(n="float32");for(var a=de(r,n),i=new _v(t,e,null,o),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),Bt=D({reshape_:function(r,t){var e=C(r,"x","reshape",null);t=vp(t,e.size),S(e.size===ee(t),function(){return"new shape and old shape must have the same number of elements."});var n={shape:t};return N.runKernelFunc(function(o){return o.reshape(e,t)},{x:e},function(o){return{x:function(){return o.reshape(e.shape)}}},"Reshape",n)}}),Ml=D({spaceToBatchND_:function(r,t,e){var n=C(r,"x","spaceToBatchND");return S(n.rank>=1+t.length,function(){return"input rank "+n.rank+" should be > than [blockShape] "+t.length}),S(e.length===t.length,function(){return"paddings.shape[0] "+e.length+" must be equal to [blockShape] "+t.length}),S(n.shape.reduce(function(o,a,i){return i>0&&i<=t.length?o&&(a+e[i-1][0]+e[i-1][1])%t[i-1]==0:o},!0),function(){return"input spatial dimensions "+n.shape.slice(1)+" with paddings "+e.toString()+" must be divisible by blockShapes "+t.toString()}),N.runKernelFunc(function(o){return o.spaceToBatchND(n,t,e)},{$x:n},function(o){return{$x:function(){return o.batchToSpaceND(t,e)}}})}}),Ol=D({squeeze_:function(r,t){var e=C(r,"x","squeeze");return Bt(e,Kn(e.shape,t).newShape)}}),Rt=D({stack_:function(r,t){t===void 0&&(t=0);var e=aa(r,"tensors","stack");if(S(e.length>=1,function(){return"Pass at least one tensor to tf.stack"}),e.length===1)return e[0].expandDims(t);var n=e[0].rank,o=e[0].shape,a=e[0].dtype;S(t<=n,function(){return"Axis must be <= rank of the tensor"}),e.forEach(function(s){Ie(o,s.shape,"All tensors passed to stack must have matching shapes")}),e.forEach(function(s){S(a===s.dtype,function(){return"All tensors passed to stack must have matching dtypes"})});var i=e.map(function(s){return s.expandDims(t)});return Ve(i,t)}}),Cr=D({tile_:function(r,t){var e=C(r,"x","tile",null);S(e.rank===t.length,function(){return"Error in transpose: rank of input "+e.rank+" must match length of reps "+t+"."});var n=[e],o={reps:t};return N.runKernelFunc(function(a,i){var s=a.tile(e,t);return i([e]),s},{x:e},function(a,i){var s=i[0];return{x:function(){var u=we(s);if(s.rank===1)for(var c=0;c<t[0];++c)u=u.add(a.slice([c*s.shape[0]],[s.shape[0]]));else if(s.rank===2)for(c=0;c<t[0];++c)for(var l=0;l<t[1];++l)u=u.add(a.slice([c*s.shape[0],l*s.shape[1]],[s.shape[0],s.shape[1]]));else if(s.rank===3)for(c=0;c<t[0];++c)for(l=0;l<t[1];++l)for(var f=0;f<t[2];++f)u=u.add(a.slice([c*s.shape[0],l*s.shape[1],f*s.shape[2]],[s.shape[0],s.shape[1],s.shape[2]]));else{if(s.rank!==4)throw new Error("Gradient for tile operation is not implemented for rank-"+s.rank+" tensors yet.");for(c=0;c<t[0];++c)for(l=0;l<t[1];++l)for(f=0;f<t[2];++f)for(var h=0;h<t[3];++h)u=u.add(a.slice([c*s.shape[0],l*s.shape[1],f*s.shape[2],h*s.shape[3]],[s.shape[0],s.shape[1],s.shape[2],s.shape[3]]))}return u}}},"Tile",o,n)}}),Bv=D({truncatedNormal_:function(r,t,e,n,o){if(t===void 0&&(t=0),e===void 0&&(e=1),n!=null&&n==="bool")throw new Error("Unsupported data type "+n);for(var a=new Is(t,e,n,!0,o),i=de(r,n),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),Ge=D({unstack_:function(r,t){t===void 0&&(t=0),t=t||0;var e=C(r,"x","unstack");S(t>=-e.shape.length&&t<e.shape.length,function(){return"Axis = "+t+" is not in [-"+e.shape.length+", "+e.shape.length+")"}),t<0&&(t+=e.shape.length);var n={axis:t};return N.runKernelFunc(function(o){return o.unstack(e,t)},{x:e},function(o){return{x:function(){return Rt(o,t)}}},"Unpack",n)}}),Lv=function(r,t){return Y(this,void 0,void 0,function(){var e,n,o,a,i,s,u,c,l,f;return J(this,function(h){switch(h.label){case 0:return e=C(r,"x","setdiff1d"),n=C(t,"y","setdiff1d"),S(e.dtype===n.dtype,function(){return"x and y should have the same dtype, but got x ("+e.dtype+") and y ("+n.dtype+")."}),S(e.rank===1,function(){return"x should be 1D tensor, but got x ("+e.shape+")."}),S(n.rank===1,function(){return"y should be 1D tensor, but got y ("+n.shape+")."}),[4,e.data()];case 1:return o=h.sent(),[4,n.data()];case 2:for(a=h.sent(),i=new Set(a),s=0,l=0;l<o.length;l++)i.has(o[l])||s++;for(u=new to([s],e.dtype),c=new to([s],"int32"),l=0,f=0;l<o.length;l++)i.has(o[l])||(u.values[f]=o[l],c.values[f]=l,f++);return[2,[u.toTensor(),c.toTensor()]]}})})};function sa(r,t,e,n){n===void 0&&(n=!0);var o=[];if(n)(o=o.concat(t.slice(0))).push(r[0]/e),o=o.concat(r.slice(1));else{o=o.concat(r[0]);for(var a=t.length,i=0;i<a;++i)o=o.concat([r[i+1]/t[i],t[i]]);o=o.concat(r.slice(a+1))}return o}function ua(r,t,e){e===void 0&&(e=!0);var n=[];if(e){n.push(t);for(var o=t+1;o<r;++o)o<=2*t?(n.push(o),n.push(o-(t+1))):n.push(o)}else{var a=[],i=[];for(o=1;o<r;++o)o>=2*t+1||o%2==1?i.push(o):a.push(o);n.push.apply(n,a),n.push(0),n.push.apply(n,i)}return n}function ca(r,t,e,n){n===void 0&&(n=!0);var o=[];n?o.push(r[0]/e):o.push(r[0]*e);for(var a=1;a<r.length;++a)a<=t.length?n?o.push(t[a-1]*r[a]):o.push(r[a]/t[a-1]):o.push(r[a]);return o}function Bl(r,t){for(var e=[0],n=0;n<t;++n)e.push(r[n][0]);return e}function Ll(r,t,e){for(var n=r.slice(0,1),o=0;o<e;++o)n.push(r[o+1]-t[o][0]-t[o][1]);return n}function Wl(r,t){if(r.rank<1)throw new Error("tf.gatherND() expects the input to be rank 1 or higher, but the rank was "+r.rank+".");if(t.rank<1)throw new Error("tf.gatherND() expects the indices to be rank 1 or higher, but the rank was "+t.rank+".");if(t.dtype!=="int32")throw new Error("tf.gatherND() expects the indices to be int32 type, but the dtype was "+t.dtype+".");if(t.shape[t.rank-1]>r.rank)throw new Error("index innermost dimension length must be <= tensor rank; saw: "+t.shape[t.rank-1]+" vs. "+r.rank);if(r.size===0)throw new Error("Requested more than 0 entries, but input is empty. Input shape: "+r.shape+".");for(var e=t.shape,n=e[e.length-1],o=1,a=0;a<e.length-1;++a)o*=e[a];var i=r.shape,s=e.slice();s.pop();var u=1;for(a=n;a<r.rank;++a)u*=i[a],s.push(i[a]);var c=Zt(r.shape).map(function(l){return l/u}).concat([1]).slice(0,n);return[s,o,u,c]}var zl=30;function ui(r){return r<=zl?r:Oi(r,Math.floor(Math.sqrt(r)))}function Wv(r,t,e){var n=t.rank>1?t.shape[t.rank-1]:1,o=t.rank>1?t.rank-1:1,a="Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: "+e.shape+", indices.shape: "+t.shape+", shape: "+r+", sliceDim: "+n+", and batchDim: "+o+".";if(e.rank<o)throw new Error(a+" update.rank < "+o+". ");if(r.length<n+(e.rank-o))throw new Error(a+" Output shape length < "+(n+(e.rank-o)));if(e.rank!==o+r.length-n)throw new Error(a+" update.rank != "+(o+r.length-n));for(var i=0;i<o;++i)if(e.shape[i]!==t.shape[i])throw new Error(a+" updates.shape["+i+"] ("+e.shape[i]+") != indices.shape["+i+"] ("+t.shape[i]+").");for(i=0;i<e.rank-o;++i)if(e.shape[i+o]!==r[i+n])throw new Error(a+" updates.shape["+(i+o)+"] ("+e.shape[i+o]+") != shape["+(i+o)+"] ("+r[i+o]+")")}function zv(r,t,e){if(t.rank<1)throw new Error("tf.scatterND() expects the indices to be rank 1 or higher, but the rank was "+t.rank+".");if(r.rank<1)throw new Error("tf.scatterND() expects the updates to be rank 1 or higher, but the rank was "+r.rank+".");if(t.dtype!=="int32")throw new Error("The dtype of 'indices' should be int32, but got dtype: "+t.dtype);if(e.length<1)throw new Error("Output rank must be greater or equal to 1, but got shape: "+e);if(e.length===0){if(t.size===0)throw new Error("Indices specified for empty output. indices shape: "+t.shape);if(r.size===0)throw new Error("Updates specified for empty output. updates shape: "+r.shape)}Wv(e,t,r)}function la(r,t,e){for(var n=t.shape.length,o=n>1?t.shape[n-1]:1,a=e.length,i=1,s=o;s<a;++s)i*=e[s];var u=o<1?1:o;return{sliceRank:o,numUpdates:ee(t.shape)/u,sliceSize:i,strides:Zt(e.slice(0,o)).concat([1]),outputSize:ee(e)}}function Uv(r,t,e){S(r.rank===t.length,function(){return"Error in slice"+r.rank+"D: Length of begin "+t+" must match the rank of the array ("+r.rank+")."}),S(r.rank===e.length,function(){return"Error in slice"+r.rank+"D: Length of size "+e+" must match the rank of the array ("+r.rank+")."});for(var n=function(a){S(t[a]+e[a]<=r.shape[a],function(){return"Error in slice"+r.rank+"D: begin["+a+"] + size["+a+"] ("+(t[a]+e[a])+") would overflow input.shape["+a+"] ("+r.shape[a]+")"})},o=0;o<r.rank;++o)n(o)}function Xu(r){for(var t=[],e=0;r>0;)1&r&&t.push(e),r/=2,e++;return t}function Rs(r,t,e){for(var n=[],o=0;o<r.length;o++)n[o]=Math.ceil((t[o]-r[o])/e[o]);return n}function Vv(r,t,e,n,o){var a=t[o],i=e[o]||1;(r&1<<o||a==null)&&(a=i>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);var s=n[o];return a<0&&(a+=s),a=Fi(0,a,s-1)}function Gv(r,t,e,n,o){var a=t[o],i=e[o]||1;(r&1<<o||a==null)&&(a=i>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);var s=n[o];return a<0&&(a+=s),a=i>0?Fi(0,a,s):Fi(-1,a,s-1)}function Ul(r,t,e){for(var n=e.length,o=0;o<e.length;o++)if(e[o]>1){n=o;break}for(o=n+1;o<e.length;o++)if(t[o]>0||e[o]!==r[o])return!1;return!0}function Vl(r,t){for(var e=r.length>0?r[r.length-1]:1,n=0;n<r.length-1;n++)e+=r[n]*t[n];return e}function Hv(r,t){S(Mi(r),function(){return"The f passed in variableGrads(f) must be a function"}),S(t==null||Array.isArray(t)&&t.every(function(l){return l instanceof Tr}),function(){return"The varList passed in variableGrads(f, varList) must be an array of variables"});var e=t!=null;if(!e)for(var n in t=[],N.registeredVariables)t.push(N.registeredVariables[n]);var o=e?t.filter(function(l){return!l.trainable}):null,a=t.length;S((t=t.filter(function(l){return l.trainable})).length>0,function(){return"variableGrads() expects at least one of the input variables to be trainable, but none of the "+a+" variables is trainable."});var i=N.gradients(r,t,null,!0),s=i.value,u=i.grads;S(u.some(function(l){return l!=null}),function(){return"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."}),S(s.rank===0,function(){return"The f passed in variableGrads(f) must return a scalar, but it returned a rank-"+s.rank+" tensor"});var c={};return t.forEach(function(l,f){u[f]!=null&&(c[l.name]=u[f])}),o!=null&&o.forEach(function(l){return c[l.name]=null}),{value:s,grads:c}}function Ta(r){return N.customGrad(r)}var xn=D({softmax_:function(r,t){t===void 0&&(t=-1);var e=C(r,"logits","softmax","float32");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank "+e.rank+" and dim was "+t);return N.runKernelFunc(function(n,o){var a=n.softmax(e,t);return o([a]),a},{logits:e},function(n,o){var a=o[0],i=n.mul(a);return{logits:function(){return i.sub(i.sum([t],!0).mul(a))}}},"Softmax",{dim:t},[],[!0])}}),jv=D({logSoftmax_:function(r,t){t===void 0&&(t=-1);var e=C(r,"logits","logSoftmax");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error("Log Softmax along a non-last dimension is not yet supported. Logits was rank "+e.rank+" and axis was "+t);return Ta(function(n,o){var a=n.max(t,!0),i=n.sub(a),s=i.toFloat().sub(i.exp().sum(t,!0).log());return o([s]),{value:s,gradFunc:function(u,c){var l=c[0].exp();return u.sub(u.sum(t,!0).mul(l))}}})(e)}}),Gl=function(){function r(t,e){this.backend=t,this.dataMover=e,this.data=new WeakMap,this.dataIdsCount=0}return r.prototype.get=function(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)},r.prototype.set=function(t,e){this.dataIdsCount++,this.data.set(t,e)},r.prototype.has=function(t){return this.data.has(t)},r.prototype.delete=function(t){return this.dataIdsCount--,this.data.delete(t)},r.prototype.numDataIds=function(){return this.dataIdsCount},r}(),Hl=function(){function r(){}return r.prototype.time=function(t){return F("time")},r.prototype.read=function(t){return F("read")},r.prototype.readSync=function(t){return F("readSync")},r.prototype.numDataIds=function(){return F("numDataIds")},r.prototype.disposeData=function(t){return F("disposeData")},r.prototype.write=function(t,e,n){return F("write")},r.prototype.move=function(t,e,n,o){return F("move")},r.prototype.memory=function(){return F("memory")},r.prototype.floatPrecision=function(){return F("floatPrecision")},r.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},r.prototype.batchMatMul=function(t,e,n,o){return F("batchMatMul")},r.prototype.fusedBatchMatMul=function(t){return t.a,t.b,t.transposeA,t.transposeB,t.bias,t.activation,t.preluActivationWeights,F("fusedBatchMatMul")},r.prototype.slice=function(t,e,n){return F("slice")},r.prototype.stridedSlice=function(t,e,n,o){return F("stridedSlice")},r.prototype.unstack=function(t,e){return F("unstack")},r.prototype.reverse=function(t,e){return F("reverse")},r.prototype.concat=function(t,e){return F("concat")},r.prototype.neg=function(t){return F("neg")},r.prototype.add=function(t,e){return F("add")},r.prototype.addN=function(t){return F("addN")},r.prototype.subtract=function(t,e){return F("subtract")},r.prototype.multiply=function(t,e){return F("multiply")},r.prototype.realDivide=function(t,e){return F("realDivide")},r.prototype.floorDiv=function(t,e){return F("floorDiv")},r.prototype.sum=function(t,e){return F("sum")},r.prototype.prod=function(t,e){return F("prod")},r.prototype.unsortedSegmentSum=function(t,e,n){return F("unsortedSegmentSum")},r.prototype.argMin=function(t,e){return F("argMin")},r.prototype.argMax=function(t,e){return F("argMax")},r.prototype.equal=function(t,e){return F("equal")},r.prototype.notEqual=function(t,e){return F("notEqual")},r.prototype.less=function(t,e){return F("less")},r.prototype.lessEqual=function(t,e){return F("lessEqual")},r.prototype.greater=function(t,e){return F("greater")},r.prototype.greaterEqual=function(t,e){return F("greaterEqual")},r.prototype.logicalNot=function(t){return F("logicalNot")},r.prototype.logicalAnd=function(t,e){return F("logicalAnd")},r.prototype.logicalOr=function(t,e){return F("logicalOr")},r.prototype.where=function(t){return F("where")},r.prototype.select=function(t,e,n){return F("select")},r.prototype.topk=function(t,e,n){return F("topk")},r.prototype.min=function(t,e){return F("min")},r.prototype.minimum=function(t,e){return F("minimum")},r.prototype.mod=function(t,e){return F("mod")},r.prototype.max=function(t,e){return F("max")},r.prototype.maximum=function(t,e){return F("maximum")},r.prototype.all=function(t,e){return F("all")},r.prototype.any=function(t,e){return F("any")},r.prototype.squaredDifference=function(t,e){return F("squaredDifference")},r.prototype.ceil=function(t){return F("ceil")},r.prototype.floor=function(t){return F("floor")},r.prototype.round=function(t){return F("round")},r.prototype.sign=function(t){return F("sign")},r.prototype.isNaN=function(t){return F("isNaN")},r.prototype.isInf=function(t){return F("isInf")},r.prototype.isFinite=function(t){return F("isFinite")},r.prototype.pow=function(t,e){return F("pow")},r.prototype.exp=function(t){return F("exp")},r.prototype.expm1=function(t){return F("expm1")},r.prototype.softmax=function(t,e){return F("softmax")},r.prototype.log=function(t){return F("log")},r.prototype.log1p=function(t){return F("log1p")},r.prototype.sqrt=function(t){return F("sqrt")},r.prototype.rsqrt=function(t){return F("rsqrt")},r.prototype.square=function(t){return F("square")},r.prototype.reciprocal=function(t){return F("reciprocal")},r.prototype.relu=function(t){return F("relu")},r.prototype.relu6=function(t){return F("relu6")},r.prototype.prelu=function(t,e){return F("prelu")},r.prototype.elu=function(t){return F("elu")},r.prototype.eluDer=function(t,e){return F("eluDer")},r.prototype.selu=function(t){return F("selu")},r.prototype.int=function(t){return F("int")},r.prototype.clip=function(t,e,n){return F("clip")},r.prototype.abs=function(t){return F("abs")},r.prototype.complexAbs=function(t){return F("complexAbs")},r.prototype.sigmoid=function(t){return F("sigmoid")},r.prototype.softplus=function(t){return F("softplus")},r.prototype.sin=function(t){return F("sin")},r.prototype.cos=function(t){return F("cos")},r.prototype.tan=function(t){return F("tan")},r.prototype.asin=function(t){return F("asin")},r.prototype.acos=function(t){return F("acos")},r.prototype.atan=function(t){return F("atan")},r.prototype.atan2=function(t,e){return F("atan2")},r.prototype.sinh=function(t){return F("sinh")},r.prototype.cosh=function(t){return F("cosh")},r.prototype.tanh=function(t){return F("tanh")},r.prototype.asinh=function(t){return F("asinh")},r.prototype.acosh=function(t){return F("acosh")},r.prototype.atanh=function(t){return F("atanh")},r.prototype.erf=function(t){return F("erf")},r.prototype.step=function(t,e){return F("step")},r.prototype.fusedConv2d=function(t){return t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights,F("fusedConv2d")},r.prototype.conv2d=function(t,e,n){return F("conv2d")},r.prototype.conv2dDerInput=function(t,e,n){return F("conv2dDerInput")},r.prototype.conv2dDerFilter=function(t,e,n){return F("conv2dDerFilter")},r.prototype.fusedDepthwiseConv2D=function(t){return t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights,F("fusedDepthwiseConv2D")},r.prototype.depthwiseConv2D=function(t,e,n){return F("depthwiseConv2D")},r.prototype.depthwiseConv2DDerInput=function(t,e,n){return F("depthwiseConv2DDerInput")},r.prototype.depthwiseConv2DDerFilter=function(t,e,n){return F("depthwiseConv2DDerFilter")},r.prototype.conv3d=function(t,e,n){return F("conv3d")},r.prototype.conv3dDerInput=function(t,e,n){return F("conv3dDerInput")},r.prototype.conv3dDerFilter=function(t,e,n){return F("conv3dDerFilter")},r.prototype.maxPool=function(t,e){return F("maxPool")},r.prototype.maxPoolBackprop=function(t,e,n,o){return F("maxPoolBackprop")},r.prototype.avgPool=function(t,e){return F("avgPool")},r.prototype.avgPoolBackprop=function(t,e,n){return F("avgPoolBackprop")},r.prototype.avgPool3d=function(t,e){return F("avgPool3d")},r.prototype.avgPool3dBackprop=function(t,e,n){return F("avgPool3dBackprop")},r.prototype.maxPool3d=function(t,e){return F("maxPool3d")},r.prototype.maxPool3dBackprop=function(t,e,n,o){return F("maxPool3dBackprop")},r.prototype.reshape=function(t,e){return F("reshape")},r.prototype.cast=function(t,e){return F("cast")},r.prototype.tile=function(t,e){return F("tile")},r.prototype.pad=function(t,e,n){return F("pad")},r.prototype.transpose=function(t,e){return F("transpose")},r.prototype.gather=function(t,e,n){return F("gather")},r.prototype.gatherND=function(t,e){return F("gatherND")},r.prototype.scatterND=function(t,e,n){return F("scatterND")},r.prototype.batchToSpaceND=function(t,e,n){return F("batchToSpaceND")},r.prototype.spaceToBatchND=function(t,e,n){return F("spaceToBatchND")},r.prototype.resizeBilinear=function(t,e,n,o){return F("resizeBilinear")},r.prototype.resizeBilinearBackprop=function(t,e,n){return F("resizeBilinearBackprop")},r.prototype.resizeNearestNeighbor=function(t,e,n,o){return F("resizeNearestNeighbor")},r.prototype.resizeNearestNeighborBackprop=function(t,e,n){return F("resizeNearestNeighborBackprop")},r.prototype.batchNormalization=function(t,e,n,o,a,i){return F("batchNormalization")},r.prototype.localResponseNormalization4D=function(t,e,n,o,a){return F("localResponseNormalization4D")},r.prototype.LRNGrad=function(t,e,n,o,a,i,s){return F("LRNGrad")},r.prototype.multinomial=function(t,e,n,o){return F("multinomial")},r.prototype.oneHot=function(t,e,n,o){return F("oneHot")},r.prototype.cumsum=function(t,e,n,o){return F("cumsum")},r.prototype.nonMaxSuppression=function(t,e,n,o,a){return F("nonMaxSuppression")},r.prototype.fft=function(t){return F("fft")},r.prototype.ifft=function(t){return F("ifft")},r.prototype.complex=function(t,e){return F("complex")},r.prototype.real=function(t){return F("real")},r.prototype.imag=function(t){return F("imag")},r.prototype.cropAndResize=function(t,e,n,o,a,i){return F("cropAndResize")},r.prototype.depthToSpace=function(t,e,n){return F("depthToSpace")},r.prototype.split=function(t,e,n){return F("split")},r.prototype.sparseToDense=function(t,e,n,o){return F("sparseToDense")},r.prototype.diag=function(t){return F("diag")},r.prototype.fill=function(t,e,n){return F("fill")},r.prototype.onesLike=function(t){return F("onesLike")},r.prototype.zerosLike=function(t){return F("zerosLike")},r.prototype.linspace=function(t,e,n){return F("linspace")},r.prototype.dispose=function(){return F("dispose")},r}();function F(r){throw new Error("'"+r+"' not yet implemented or not found in the registry. Did you forget to import the kernel?")}function An(r,t){for(var e=r.length,n=[],o=0;o<e;o++){var a=e-1-o,i=r[a]||1;(t[t.length-1-o]||1)>1&&i===1&&n.unshift(a)}return n}function He(r,t){for(var e=[],n=0;n<t.length;n++){var o=r[r.length-n-1],a=t.length-n-1,i=t[a];(o==null||o===1&&i>1)&&e.unshift(a)}return e}function xe(r,t){for(var e=[],n=Math.max(r.length,t.length),o=0;o<n;o++){var a=r[r.length-o-1];a==null&&(a=1);var i=t[t.length-o-1];if(i==null&&(i=1),a===1)e.unshift(i);else if(i===1)e.unshift(a);else{if(a!==i)throw Error("Operands could not be broadcast together with shapes "+r+" and "+t+".");e.unshift(a)}}return e}function ro(r,t,e,n,o,a,i){i===void 0&&(i="channelsLast");var s,u=da(t),c=u[0],l=u[1];if(i==="channelsLast")s=[c,l,r[3],r[3]];else{if(i!=="channelsFirst")throw new Error("Unknown dataFormat "+i);s=[c,l,r[1],r[1]]}return ir(r,s,e,n,o,a,!1,i)}function fa(r,t,e,n,o,a,i){i===void 0&&(i="NDHWC");var s,u,c=Gi(t),l=c[0],f=c[1],h=c[2];if(i==="NDHWC")u="channelsLast",s=[l,f,h,r[4],r[4]];else{if(i!=="NCDHW")throw new Error("Unknown dataFormat "+i);u="channelsFirst",s=[l,f,h,r[1],r[1]]}return ha(r,s,e,n,o,!1,u,a)}function ir(r,t,e,n,o,a,i,s){i===void 0&&(i=!1),s===void 0&&(s="channelsLast");var u=[-1,-1,-1,-1],c=u[0],l=u[1],f=u[2],h=u[3];if(s==="channelsLast")c=r[0],l=r[1],f=r[2],h=r[3];else{if(s!=="channelsFirst")throw new Error("Unknown dataFormat "+s);c=r[0],h=r[1],l=r[2],f=r[3]}var d,p=t[0],m=t[1],v=t[3],g=da(e),x=g[0],w=g[1],y=da(n),b=y[0],_=y[1],E=Er(p,b),I=Er(m,_),R=function(M,O,U,z,W,V,H,K){var Q,ae,Z;if(typeof M=="number"){Q={top:M,bottom:M,left:M,right:M,type:M===0?"VALID":"NUMBER"};var ie=function(ge,X,te,se,be){se==null&&(se=jl(ge,X,te));var Ce=ge[0],gt=ge[1],St=$r((Ce-X+2*se)/te+1,be);S(Le(St),function(){return"The output # of rows ("+St+") must be an integer. Change the stride and/or zero pad parameters"});var it=$r((gt-X+2*se)/te+1,be);return S(Le(it),function(){return"The output # of columns ("+it+") must be an integer. Change the stride and/or zero pad parameters"}),[St,it]}([O,U],V,z,M,K);ae=ie[0],Z=ie[1]}else if(M==="same"){ae=Math.ceil(O/z),Z=Math.ceil(U/W);var ue=Math.max(0,(ae-1)*z+V-O),le=Math.max(0,(Z-1)*W+H-U),pe=Math.floor(ue/2),fe=ue-pe,ke=Math.floor(le/2);Q={top:pe,bottom:fe,left:ke,right:le-ke,type:"SAME"}}else{if(M!=="valid")throw Error("Unknown padding parameter: "+M);Q={top:0,bottom:0,left:0,right:0,type:"VALID"},ae=Math.ceil((O-V+1)/z),Z=Math.ceil((U-H+1)/W)}return{padInfo:Q,outHeight:ae,outWidth:Z}}(o,l,f,x,w,E,I,a),k=R.padInfo,T=R.outHeight,A=R.outWidth,B=i?v*h:v;return s==="channelsFirst"?d=[c,B,T,A]:s==="channelsLast"&&(d=[c,T,A,B]),{batchSize:c,dataFormat:s,inHeight:l,inWidth:f,inChannels:h,outHeight:T,outWidth:A,outChannels:B,padInfo:k,strideHeight:x,strideWidth:w,filterHeight:p,filterWidth:m,effectiveFilterHeight:E,effectiveFilterWidth:I,dilationHeight:b,dilationWidth:_,inShape:r,outShape:d,filterShape:t}}function ha(r,t,e,n,o,a,i,s){a===void 0&&(a=!1),i===void 0&&(i="channelsLast");var u=[-1,-1,-1,-1,-1],c=u[0],l=u[1],f=u[2],h=u[3],d=u[4];if(i==="channelsLast")c=r[0],l=r[1],f=r[2],h=r[3],d=r[4];else{if(i!=="channelsFirst")throw new Error("Unknown dataFormat "+i);c=r[0],d=r[1],l=r[2],f=r[3],h=r[4]}var p,m=t[0],v=t[1],g=t[2],x=t[4],w=Gi(e),y=w[0],b=w[1],_=w[2],E=Gi(n),I=E[0],R=E[1],k=E[2],T=Er(m,I),A=Er(v,R),B=Er(g,k),M=function(H,K,Q,ae,Z,ie,ue,le,pe,fe,ke){var ge,X,te,se;if(typeof H=="number"){ge={top:H,bottom:H,left:H,right:H,front:H,back:H,type:H===0?"VALID":"NUMBER"};var be=function(cr,fn,ja,lr,Gt,qa){Gt==null&&(Gt=jl(cr,fn,lr));var Oh=cr[0],Bh=cr[1],Lh=cr[2],Ka=$r((Oh-fn+2*Gt)/lr+1,qa);S(Le(Ka),function(){return"The output # of depths ("+Ka+") must be an integer. Change the stride and/or zero pad parameters"});var Xa=$r((Bh-fn+2*Gt)/lr+1,qa);S(Le(Xa),function(){return"The output # of rows ("+Xa+") must be an integer. Change the stride and/or zero pad parameters"});var $a=$r((Lh-fn+2*Gt)/lr+1,qa);return S(Le($a),function(){return"The output # of columns ("+$a+") must be an integer. Change the stride and/or zero pad parameters"}),[Ka,Xa,$a,ja]}([K,Q,ae,1],le,1,Z,H,ke);X=be[0],te=be[1],se=be[2]}else if(H==="same"){X=Math.ceil(K/Z),te=Math.ceil(Q/ie),se=Math.ceil(ae/ue);var Ce=(X-1)*Z+le-K,gt=(te-1)*ie+pe-Q,St=(se-1)*ue+fe-ae,it=Math.floor(Ce/2),En=Ce-it,yt=Math.floor(gt/2),Dt=gt-yt,ln=Math.floor(St/2);ge={top:yt,bottom:Dt,left:ln,right:St-ln,front:it,back:En,type:"SAME"}}else{if(H!=="valid")throw Error("Unknown padding parameter: "+H);ge={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},X=Math.ceil((K-le+1)/Z),te=Math.ceil((Q-pe+1)/ie),se=Math.ceil((ae-fe+1)/ue)}return{padInfo:ge,outDepth:X,outHeight:te,outWidth:se}}(o,l,f,h,y,b,_,T,A,B,s),O=M.padInfo,U=M.outDepth,z=M.outHeight,W=M.outWidth,V=a?x*d:x;return i==="channelsFirst"?p=[c,V,U,z,W]:i==="channelsLast"&&(p=[c,U,z,W,V]),{batchSize:c,dataFormat:i,inDepth:l,inHeight:f,inWidth:h,inChannels:d,outDepth:U,outHeight:z,outWidth:W,outChannels:V,padInfo:O,strideDepth:y,strideHeight:b,strideWidth:_,filterDepth:m,filterHeight:v,filterWidth:g,effectiveFilterDepth:T,effectiveFilterHeight:A,effectiveFilterWidth:B,dilationDepth:I,dilationHeight:R,dilationWidth:k,inShape:r,outShape:p,filterShape:t}}function jl(r,t,e,n){n===void 0&&(n=1);var o=Er(t,n);return Math.floor((r[0]*(e-1)-e+o)/2)}function da(r){return typeof r=="number"?[r,r,r]:r.length===2?[r[0],r[1],1]:r}function Gi(r){return typeof r=="number"?[r,r,r]:r}function Er(r,t){return t<=1?r:r+(r-1)*(t-1)}function $r(r,t){if(!t)return r;switch(t){case"round":return Math.round(r);case"ceil":return Math.ceil(r);case"floor":return Math.floor(r);default:throw new Error("Unknown roundingMode "+t)}}function Fr(r){var t=da(r),e=t[0],n=t[1],o=t[2];return e===1&&n===1&&o===1}function mt(r,t){return Fr(r)||Fr(t)}function ks(r){if(r==="NHWC")return"channelsLast";if(r==="NCHW")return"channelsFirst";throw new Error("Unknown dataFormat "+r)}function ql(r,t,e){if(t==="complex64"){if(r.dtype==="complex64")return r.clone();var n=Ne(r.shape),o=r.toFloat(),a=e.complex(o,n);return n.dispose(),o.dispose(),a}if(!yp(r.dtype,t))return N.makeTensorFromDataId(r.dataId,r.shape,t);if(r.dtype==="complex64"){var i=e.real(r);return a=i.cast(t),i.dispose(),a}if(t==="int32")return e.int(r);if(t==="bool"){var s=q(0,r.dtype);return a=e.notEqual(r,s),s.dispose(),a}throw new Error("Error in Cast: failed to cast "+r.dtype+" to "+t)}function Hi(r,t){return N.makeTensorFromDataId(r.dataId,t,r.dtype)}function Kl(r,t,e){var n=(t-r)/(e-1),o=fo(e,"float32");o[0]=r;for(var a=1;a<o.length;a++)o[a]=o[a-1]+n;return We(o,"float32")}function ji(r,t){if(r.length!==t.length)throw new Error("Cannot merge real and imag arrays of different lengths. real:"+r.length+", imag: "+t.length+".");for(var e=new Float32Array(2*r.length),n=0;n<e.length;n+=2)e[n]=r[n/2],e[n+1]=t[n/2];return e}function $u(r,t){return{real:r[2*t],imag:r[2*t+1]}}function qv(r,t,e,n){r[2*n]=t,r[2*n+1]=e}function Kv(r,t,e){var n=(e?2:-2)*Math.PI*(r/t);return{real:Math.cos(n),imag:Math.sin(n)}}function Xv(r,t,e){var n=function(a,i,s){return function(u,c,l){for(var f=0,h=u.length,d=0,p=!1;f<h;){var m=l(c,u[d=f+(h-f>>>1)]);m>0?f=d+1:(h=d,p=!m)}return p?f:-f-1}(a,i,s||$v)}(r,t,e),o=n<0?-(n+1):n;r.splice(o,0,t)}function $v(r,t){return r>t?1:r<t?-1:0}function Ss(r,t,e,n,o){return Xl(r,t,e,n,o,0).selectedIndices}function Ds(r,t,e,n,o,a){var i=Xl(r,t,e,n,o,a);return i.numValidOutputs.dispose(),{selectedIndices:i.selectedIndices,selectedScores:i.selectedScores}}function Xl(r,t,e,n,o,a,i,s){s===void 0&&(s=!1);for(var u=Array.from(t).map(function(y,b){return{score:y,boxIndex:b,suppressBeginIndex:0}}).filter(function(y){return y.score>o}).sort(Yu),c=a>0?-.5/a:0,l=[],f=[];l.length<e&&u.length>0;){var h=u.pop(),d=h.score,p=h.boxIndex,m=h.suppressBeginIndex;if(d<o)break;for(var v=!1,g=l.length-1;g>=m;--g){var x=Yv(r,p,l[g]);if(x>=n){v=!0;break}if(h.score=h.score*Jv(n,c,x),h.score<=o)break}h.suppressBeginIndex=l.length,v||(h.score===d?(l.push(p),f.push(h.score)):h.score>o&&Xv(u,h,Yu))}var w=l.length;return s&&(l.fill(0,w),f.fill(0,w)),{selectedIndices:We(l,"int32"),selectedScores:We(f,"float32"),numValidOutputs:q(w,"int32")}}function Yv(r,t,e){var n=r.subarray(4*t,4*t+4),o=r.subarray(4*e,4*e+4),a=Math.min(n[0],n[2]),i=Math.min(n[1],n[3]),s=Math.max(n[0],n[2]),u=Math.max(n[1],n[3]),c=Math.min(o[0],o[2]),l=Math.min(o[1],o[3]),f=Math.max(o[0],o[2]),h=Math.max(o[1],o[3]),d=(s-a)*(u-i),p=(f-c)*(h-l);if(d<=0||p<=0)return 0;var m=Math.max(a,c),v=Math.max(i,l),g=Math.min(s,f),x=Math.min(u,h),w=Math.max(g-m,0)*Math.max(x-v,0);return w/(d+p-w)}function Jv(r,t,e){var n=Math.exp(t*e*e);return e<=r?n:0}function Yu(r,t){return r.score-t.score||r.score===t.score&&t.boxIndex-r.boxIndex}function $l(r,t,e){var n=new Array(r.rank).fill(0),o=r.shape.slice();return t.map(function(a){o[e]=a;var i=r.slice(n,o);return n[e]+=a,i})}function Yl(r,t){for(var e=new Array(r.rank),n=0;n<e.length;n++)e[n]=r.shape[n]*t[n];var o=de(e,r.dtype);for(n=0;n<o.values.length;++n){for(var a=o.indexToLoc(n),i=new Array(r.rank),s=0;s<i.length;s++)i[s]=a[s]%r.shape[s];var u=r.locToIndex(i);o.values[n]=r.values[u]}return o.toTensor()}function Jl(r,t,e,n,o){for(var a=t[t.length-1],i=[r.length/a,a],s=i[0],u=i[1],c=eo(e,s*n),l=eo("int32",s*n),f=0;f<s;f++){for(var h=f*u,d=r.subarray(h,h+u),p=[],m=0;m<d.length;m++)p.push({value:d[m],index:m});p.sort(function(y,b){return b.value-y.value});var v=f*n,g=c.subarray(v,v+n),x=l.subarray(v,v+n);for(m=0;m<n;m++)g[m]=p[m].value,x[m]=p[m].index}var w=t.slice();return w[w.length-1]=n,[Ze(c,w,e),Ze(l,w,"int32")]}function As(r,t){for(var e=[],n=0;n<t.length;n++)t[n]&&e.push(n);var o=de(r,"int32"),a=de([e.length,r.length],"int32");for(n=0;n<e.length;n++){var i=o.indexToLoc(e[n]),s=n*r.length;a.values.set(i,s)}return a.toTensor()}var Qv=function(r,t){this.outputShape=[],this.outputShape=r,this.variableNames=t.map(function(o,a){return"T"+a});var e=[];this.variableNames.forEach(function(o){e.push("float v"+o+" = get"+o+"AtOutCoords();")});var n=this.variableNames.map(function(o){return"v"+o}).join(" + ");this.userCode=`
      void main() {
        `+e.join(`
        `)+`

        float result = `+n+`;
        setOutput(result);
      }
    `},Zv=function(r,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r,this.variableNames=t.map(function(o,a){return"T"+a});var e=[];this.variableNames.forEach(function(o){e.push("vec4 v"+o+" = get"+o+"AtOutCoords();")});var n=this.variableNames.map(function(o){return"v"+o}).join(" + ");this.userCode=`
      void main() {
        `+e.join(`
        `)+`

        vec4 result = `+n+`;
        setOutput(result);
      }
    `},em=function(r,t,e){this.variableNames=["A"];var n=r.windowSize,o=r.batchSize,a=r.inSize,i=Math.ceil(a/n);e||this.variableNames.push("bestIndicesA"),this.outputShape=[o,i];var s=t==="max"?">":"<",u=e?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+n+`;

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < `+n+`; i++) {
          int inIdx = `+u+`;
          float candidate = getA(batch, inIdx);
          if (candidate `+s+` bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `};function Ql(r,t){return["x","y","z","w","u","v"].slice(0,t).map(function(e){return r+"."+e})}function ht(r,t){return t===1?[r]:Ql(r,t)}function nt(){var r,t,e,n,o,a,i,s,u,c;return L().getNumber("WEBGL_VERSION")===2?(r="#version 300 es",t="in",e="out",n="in",o="texture",a="outputColor",i="out vec4 outputColor;",s=`
      bool isnan_custom(float val) {
        return (val > 0.0 || val < 0.0) ? false : val != 0.0;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `,u="",c=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(r="",t="attribute",e="varying",n="varying",o="texture2D",a="gl_FragColor",i="",s=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,u=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,c=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:r,attribute:t,varyingVs:e,varyingFs:n,texture2D:o,output:a,defineOutput:i,defineSpecialNaN:s,defineSpecialInf:u,defineRound:c}}function Xn(r,t,e){e===void 0&&(e="index");var n=Zt(t);return n.map(function(o,a){return"int "+r[a]+" = "+e+" / "+o+"; "+(a===n.length-1?"int "+r[a+1]+" = "+e+" - "+r[a]+" * "+o:"index -= "+r[a]+" * "+o)+";"}).join("")}function Ts(r){var t=Zt(r).map(function(e){return e.toString()});return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * `+t[0]+" + coords.y * "+t[1]+` + coords.z;
  }
`}var Zl=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;function tm(r,t,e,n){var o=[];r.forEach(function(d){var p=ee(d.shapeInfo.logicalShape);d.shapeInfo.isUniform?o.push("uniform float "+d.name+(p>1?"["+p+"]":"")+";"):(o.push("uniform sampler2D "+d.name+";"),o.push("uniform int offset"+d.name+";"))});var a,i,s=o.join(`
`),u=r.map(function(d){return function(p,m,v){v===void 0&&(v=!1);var g="";g+=v?ef(p):gr(p);var x=p.shapeInfo.logicalShape,w=m.logicalShape;return x.length<=w.length&&(g+=v?function(y,b){var _,E=y.name,I=E.charAt(0).toUpperCase()+E.slice(1),R="get"+I+"AtOutCoords",k=y.shapeInfo.logicalShape.length,T=b.logicalShape.length,A=An(y.shapeInfo.logicalShape,b.logicalShape),B=Te(T),M=T-k,O=["x","y","z","w","u","v"];_=k===0?"":T<2&&A.length>=1?"coords = 0;":A.map(function(Q){return"coords."+O[Q+M]+" = 0;"}).join(`
`);var U="";U=T<2&&k>0?"coords":y.shapeInfo.logicalShape.map(function(Q,ae){return"coords."+O[ae+M]}).join(", ");var z="return outputValue;",W=ee(y.shapeInfo.logicalShape)===1,V=ee(b.logicalShape)===1;if(k!==1||W||V){if(W&&!V)z=T===1?`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:`
        return vec4(outputValue.x);
      `;else if(A.length){var H=k-2,K=k-1;A.indexOf(H)>-1&&A.indexOf(K)>-1?z="return vec4(outputValue.x);":A.indexOf(H)>-1?z="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":A.indexOf(K)>-1&&(z="return vec4(outputValue.xx, outputValue.zz);")}}else z=`
      return vec4(outputValue.xy, outputValue.xy);
    `;return`
    vec4 `+R+`() {
      `+B+` coords = getOutputCoords();
      `+_+`
      vec4 outputValue = get`+I+"("+U+`);
      `+z+`
    }
  `}(p,m):function(y,b){var _=y.name,E=_.charAt(0).toUpperCase()+_.slice(1),I="get"+E+"AtOutCoords",R=b.texShape,k=y.shapeInfo.texShape,T=y.shapeInfo.logicalShape.length,A=b.logicalShape.length;if(!y.shapeInfo.isUniform&&T===A&&y.shapeInfo.flatOffset==null&&Xe(k,R))return`
      float `+I+`() {
        return sampleTexture(`+_+`, resultUV);
      }
    `;var B,M=Te(A),O=An(y.shapeInfo.logicalShape,b.logicalShape),U=A-T,z=["x","y","z","w","u","v"];B=T===0?"":A<2&&O.length>=1?"coords = 0;":O.map(function(V){return"coords."+z[V+U]+" = 0;"}).join(`
`);var W="";return W=A<2&&T>0?"coords":y.shapeInfo.logicalShape.map(function(V,H){return"coords."+z[H+U]}).join(", "),`
    float `+I+`() {
      `+M+` coords = getOutputCoords();
      `+B+`
      return get`+E+"("+W+`);
    }
  `}(p,m)),g}(d,t,n)}).join(`
`),c=t.texShape,l=nt(),f=function(d){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return `+d.texture2D+`(textureSampler, uv).r;
    }
  `}(l),h=function(d){return d.version+`
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    `+d.varyingFs+` vec2 resultUV;
    `+d.defineOutput+`
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    `+d.defineSpecialNaN+`
    `+d.defineSpecialInf+`
    `+d.defineRound+`

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    `+nm+`
    `+rm+`
    `+om+`
  `}(l);return t.isPacked?(a=function(d,p){switch(d.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(y,b){var _=[Math.ceil(b[0]/2),Math.ceil(b[1]/2)];return _[0]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * `+_[1]+`.0);
      }
    `:_[1]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * `+_[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+_[0]+", "+_[1]+`));
      return 2 * (resTexRC.x * `+_[1]+` + resTexRC.y);
    }
  `}(0,p);case 2:return function(y,b){var _=[Math.ceil(b[0]/2),Math.ceil(b[1]/2)];if(Xe(y,b))return`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(`+_[0]+", "+_[1]+`));
      }
    `;var E=Math.ceil(y[1]/2);return`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+_[0]+", "+_[1]+`));

      int index = resTexRC.x * `+_[1]+` + resTexRC.y;
      int r = 2 * (index / `+E+`);
      int c = imod(index, `+E+`) * 2;

      return ivec2(r, c);
    }
  `}(d,p);case 3:return m=d,v=p,g=[Math.ceil(v[0]/2),Math.ceil(v[1]/2)],x=Math.ceil(m[2]/2),w=x*Math.ceil(m[1]/2),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+g[0]+", "+g[1]+`));
      int index = resTexRC.x * `+g[1]+` + resTexRC.y;

      int b = index / `+w+`;
      index -= b * `+w+`;

      int r = 2 * (index / `+x+`);
      int c = imod(index, `+x+`) * 2;

      return ivec3(b, r, c);
    }
  `;default:return function(y,b){for(var _=[Math.ceil(b[0]/2),Math.ceil(b[1]/2)],E=Math.ceil(y[y.length-1]/2),I=E*Math.ceil(y[y.length-2]/2),R=I,k="",T="b, r, c",A=2;A<y.length-1;A++)R*=y[y.length-A-1],k=`
      int b`+A+" = index / "+R+`;
      index -= b`+A+" * "+R+`;
    `+k,T="b"+A+", "+T;return`
    ivec`+y.length+` getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+_[0]+", "+_[1]+`));
      int index = resTexRC.x * `+_[1]+` + resTexRC.y;

      `+k+`

      int b = index / `+I+`;
      index -= b * `+I+`;

      int r = 2 * (index / `+E+`);
      int c = imod(index, `+E+`) * 2;

      return ivec`+y.length+"("+T+`);
    }
  `}(d,p)}var m,v,g,x,w}(t.logicalShape,c),i=function(d){return`
    void setOutput(vec4 val) {
      `+d.output+` = val;
    }
  `}(l)):(a=function(d,p){switch(d.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(g,x){return x[0]===1?`
      int getOutputCoords() {
        return int(resultUV.x * `+x[1]+`.0);
      }
    `:x[1]===1?`
      int getOutputCoords() {
        return int(resultUV.y * `+x[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+x[0]+", "+x[1]+`));
      return resTexRC.x * `+x[1]+` + resTexRC.y;
    }
  `}(0,p);case 2:return function(g,x){return Xe(g,x)?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(`+x[0]+", "+x[1]+`));
      }
    `:g[1]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+x[0]+", "+x[1]+`));
        int index = resTexRC.x * `+x[1]+` + resTexRC.y;
        return ivec2(index, 0);
      }
    `:g[0]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+x[0]+", "+x[1]+`));
        int index = resTexRC.x * `+x[1]+` + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+x[0]+", "+x[1]+`));
      int index = resTexRC.x * `+x[1]+` + resTexRC.y;
      int r = index / `+g[1]+`;
      int c = index - r * `+g[1]+`;
      return ivec2(r, c);
    }
  `}(d,p);case 3:return m=p,v=Xn(["r","c","d"],d),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+m[0]+", "+m[1]+`));
      int index = resTexRC.x * `+m[1]+` + resTexRC.y;
      `+v+`
      return ivec3(r, c, d);
    }
  `;case 4:return function(g,x){var w=Xn(["r","c","d","d2"],g);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+x[0]+", "+x[1]+`));
      int index = resTexRC.x * `+x[1]+` + resTexRC.y;
      `+w+`
      return ivec4(r, c, d, d2);
    }
  `}(d,p);case 5:return function(g,x){var w=Xn(["r","c","d","d2","d3"],g);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(`+x[0]+`,
                             `+x[1]+`));

      int index = resTexRC.x * `+x[1]+` + resTexRC.y;

      `+w+`

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}(d,p);case 6:return function(g,x){var w=Xn(["r","c","d","d2","d3","d4"],g);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+x[0]+", "+x[1]+`));
      int index = resTexRC.x * `+x[1]+` + resTexRC.y;

      `+w+`

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}(d,p);default:throw new Error(d.length+"-D output sampling is not yet supported")}var m,v}(t.logicalShape,c),i=function(d){return`
    void setOutput(float val) {
      `+d.output+` = vec4(val, 0, 0, 0);
    }
  `}(l)),n&&(h+=am),[h,f,i,s,a,u,e].join(`
`)}function gr(r){var t=r.shapeInfo.logicalShape;switch(t.length){case 0:return function(e){var n=e.name,o="get"+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return"float "+o+"() {return "+n+";}";var a=e.shapeInfo.texShape,i=a[0],s=a[1];if(i===1&&s===1)return`
      float `+o+`() {
        return sampleTexture(`+n+`, halfCR);
      }
    `;var u=e.shapeInfo.texShape,c=u[0],l=u[1],f=Vn(n);return`
    float `+o+`() {
      vec2 uv = uvFromFlat(`+c+", "+l+", "+f+`);
      return sampleTexture(`+n+`, uv);
    }
  `}(r);case 1:return function(e){var n=e.name,o="get"+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return`
      float `+o+`(int index) {
        `+dr(e)+`
      }
    `;var a=e.shapeInfo.texShape,i=a[0],s=a[1];if(s===1&&i===1)return`
      float `+o+`(int index) {
        return sampleTexture(`+n+`, halfCR);
      }
    `;var u=Vn(n);return s===1?`
      float `+o+`(int index) {
        vec2 uv = vec2(0.5, (float(index + `+u+") + 0.5) / "+i+`.0);
        return sampleTexture(`+n+`, uv);
      }
    `:i===1?`
      float `+o+`(int index) {
        vec2 uv = vec2((float(index + `+u+") + 0.5) / "+s+`.0, 0.5);
        return sampleTexture(`+n+`, uv);
      }
    `:`
    float `+o+`(int index) {
      vec2 uv = uvFromFlat(`+i+", "+s+", index + "+u+`);
      return sampleTexture(`+n+`, uv);
    }
  `}(r);case 2:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=e.shapeInfo.texShape;if(i!=null&&Xe(n,i)){var s=i[0],u=i[1];return`
    float `+a+`(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(`+u+".0, "+s+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `}var c=Kn(n),l=c.newShape,f=c.keptDims,h=l;if(h.length<n.length){var d=yr(e,h);return`
      `+gr(d)+`
      float `+a+`(int row, int col) {
        return `+a+"("+xr(["row","col"],f)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(`+n[1]+`, 1)));
        `+dr(e)+`
      }
    `;var p=i[0],m=i[1],v=Vn(o);return m===1?`
    float `+a+`(int row, int col) {
      float index = dot(vec3(row, col, `+v+"), vec3("+n[1]+`, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / `+p+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `:p===1?`
    float `+a+`(int row, int col) {
      float index = dot(vec3(row, col, `+v+"), vec3("+n[1]+`, 1, 1));
      vec2 uv = vec2((index + 0.5) / `+m+`.0, 0.5);
      return sampleTexture(`+o+`, uv);
    }
  `:`
  float `+a+`(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * `+n[1]+" + col + "+v+`;
    vec2 uv = uvFromFlat(`+p+", "+m+`, index);
    return sampleTexture(`+o+`, uv);
  }
`}(r);case 3:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=n[1]*n[2],s=n[2],u=Kn(n),c=u.newShape,l=u.keptDims,f=c;if(f.length<n.length){var h=yr(e,f);return`
        `+gr(h)+`
        float `+a+`(int row, int col, int depth) {
          return `+a+"("+xr(["row","col","depth"],l)+`);
        }
      `}if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(`+i+", "+s+`, 1)));
        `+dr(e)+`
      }
    `;var d=e.shapeInfo.texShape,p=d[0],m=d[1],v=e.shapeInfo.flatOffset;if(m===i&&v==null)return`
        float `+a+`(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(`+s+`, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(`+m+".0, "+p+`.0);
          return sampleTexture(`+o+`, uv);
        }
      `;if(m===s&&v==null)return`
    float `+a+`(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(`+n[1]+`, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+m+".0, "+p+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `;var g=Vn(o);return`
      float `+a+`(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * `+i+" + col * "+s+" + depth + "+g+`;
        vec2 uv = uvFromFlat(`+p+", "+m+`, index);
        return sampleTexture(`+o+`, uv);
      }
  `}(r);case 4:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=n[3],s=n[2]*i,u=n[1]*s,c=Kn(n),l=c.newShape,f=c.keptDims;if(l.length<n.length){var h=yr(e,l);return`
      `+gr(h)+`
      float `+a+`(int row, int col, int depth, int depth2) {
        return `+a+"("+xr(["row","col","depth","depth2"],f)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(`+u+", "+s+", "+i+`, 1)));
        `+dr(e)+`
      }
    `;var d=e.shapeInfo.flatOffset,p=e.shapeInfo.texShape,m=p[0],v=p[1];if(v===u&&d==null)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(`+s+", "+i+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+v+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(v===i&&d==null)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(`+n[1]*n[2]+", "+n[2]+`, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+v+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var g=Vn(o);return`
    float `+a+`(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+u+" + col * "+s+` +
          depth * `+i+` + depth2;
      vec2 uv = uvFromFlat(`+m+", "+v+", index + "+g+`);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);case 5:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=n[4],s=n[3]*i,u=n[2]*s,c=n[1]*u,l=Kn(n),f=l.newShape,h=l.keptDims;if(f.length<n.length){var d=yr(e,f);return`
      `+gr(d)+`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        return `+a+"("+xr(["row","col","depth","depth2","depth3"],h)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(`+c+", "+u+", "+s+", "+i+`)) +
          depth3;
        `+dr(e)+`
      }
    `;var p=e.shapeInfo.flatOffset,m=e.shapeInfo.texShape,v=m[0],g=m[1];if(g===c&&p==null)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(`+u+", "+s+", "+i+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+g+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(g===i&&p==null)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(`+n[1]*n[2]*n[3]+`,
               `+n[2]*n[3]+", "+n[3]+`, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+g+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var x=Vn(o);return`
    float `+a+`(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+c+" + col * "+u+" + depth * "+s+` +
          depth2 * `+i+" + depth3 + "+x+`;
      vec2 uv = uvFromFlat(`+v+", "+g+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);case 6:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=Kn(n),s=i.newShape,u=i.keptDims;if(s.length<n.length){var c=yr(e,s);return`
      `+gr(c)+`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return `+a+"("+xr(["row","col","depth","depth2","depth3","depth4"],u)+`);
      }
    `}var l=n[5],f=n[4]*l,h=n[3]*f,d=n[2]*h,p=n[1]*d;if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(`+p+", "+d+", "+h+", "+f+`)) +
          dot(
            vec2(depth3, depth4),
            vec2(`+l+`, 1)));
        `+dr(e)+`
      }
    `;var m=e.shapeInfo.flatOffset,v=e.shapeInfo.texShape,g=v[0],x=v[1];if(x===p&&m==null)return`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(`+d+", "+h+", "+f+", "+l+`)) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+x+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(x===l&&m==null)return`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(`+n[1]*n[2]*n[3]*n[4]+`,
               `+n[2]*n[3]*n[4]+`,
               `+n[3]*n[4]+`,
               `+n[4]+`)) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+x+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var w=Vn(o);return`
    float `+a+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+p+" + col * "+d+" + depth * "+h+` +
          depth2 * `+f+" + depth3 * "+l+" + depth4 + "+w+`;
      vec2 uv = uvFromFlat(`+g+", "+x+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);default:throw new Error(t.length+"-D input sampling is not yet supported")}}function ef(r){var t,e,n;switch(r.shapeInfo.logicalShape.length){case 0:return t=r.name,e="get"+t.charAt(0).toUpperCase()+t.slice(1),n=nt(),`
    vec4 `+e+`() {
      return `+n.texture2D+"("+t+`, halfCR);
    }
  `;case 1:return function(o){var a=o.name,i="get"+a.charAt(0).toUpperCase()+a.slice(1),s=o.shapeInfo.texShape,u=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],c=nt();return`
    vec4 `+i+`(int index) {
      vec2 uv = packedUVfrom1D(
        `+u[0]+", "+u[1]+`, index);
      return `+c.texture2D+"("+a+`, uv);
    }
  `}(r);case 2:return function(o){var a=o.shapeInfo.logicalShape,i=o.name,s="get"+i.charAt(0).toUpperCase()+i.slice(1),u=o.shapeInfo.texShape,c=u[0],l=u[1],f=nt();if(u!=null&&Xe(a,u))return`
      vec4 `+s+`(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(`+l+".0, "+c+`.0);

        return `+f.texture2D+"("+i+`, uv);
      }
    `;var h=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)],d=Math.ceil(a[1]/2);return`
    vec4 `+s+`(int row, int col) {
      vec2 uv = packedUVfrom2D(`+d+", "+h[0]+", "+h[1]+`, row, col);
      return `+f.texture2D+"("+i+`, uv);
    }
  `}(r);case 3:return function(o){var a=o.shapeInfo.logicalShape,i=o.name,s="get"+i.charAt(0).toUpperCase()+i.slice(1),u=o.shapeInfo.texShape,c=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)];if(a[0]===1){var l=a.slice(1),f=yr(o,l);return`
        `+ef(f)+`
        vec4 `+s+`(int b, int row, int col) {
          return `+s+"("+xr(["b","row","col"],[1,2])+`);
        }
      `}var h=c[0],d=c[1],p=Math.ceil(a[2]/2),m=p*Math.ceil(a[1]/2),v=nt();return`
    vec4 `+s+`(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        `+h+", "+d+", "+m+", "+p+`, b, row, col);
      return `+v.texture2D+"("+i+`, uv);
    }
  `}(r);default:return function(o){for(var a=o.shapeInfo.logicalShape,i=a.length,s=o.name,u="get"+s.charAt(0).toUpperCase()+s.slice(1),c=o.shapeInfo.texShape,l=[Math.ceil(c[0]/2),Math.ceil(c[1]/2)],f=l[0],h=l[1],d=Math.ceil(a[i-1]/2),p=d*Math.ceil(a[i-2]/2),m="int b, int row, int col",v="b * "+p+" + (row / 2) * "+d+" + (col / 2)",g=2;g<i-1;g++)m="int b"+g+", "+m,p*=a[i-g-1],v="b"+g+" * "+p+" + "+v;var x=nt();return`
    vec4 `+u+"("+m+`) {
      int index = `+v+`;
      int texR = index / `+h+`;
      int texC = index - texR * `+h+`;
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+h+", "+f+`);
      return `+x.texture2D+"("+s+`, uv);
    }
  `}(r)}}var nm=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,rm=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,om=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,am=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function Vn(r){return"offset"+r}function dr(r){var t=r.name,e=ee(r.shapeInfo.logicalShape);return e<2?"return "+t+";":`
    for (int i = 0; i < `+e+`; i++) {
      if (i == index) {
        return `+t+`[i];
      }
    }
  `}function Te(r){if(r<=1)return"int";if(r===2)return"ivec2";if(r===3)return"ivec3";if(r===4)return"ivec4";if(r===5)return"ivec5";if(r===6)return"ivec6";throw Error("GPU for rank "+r+" is not yet supported")}function yr(r,t){var e=JSON.parse(JSON.stringify(r));return e.shapeInfo.logicalShape=t,e}function xr(r,t){return t.map(function(e){return r[e]}).join(", ")}var im=function(r,t,e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,S(r.length>2,function(){return"Packed arg"+(e.charAt(0).toUpperCase()+e.slice(1))+" supports only inputs with rank above 2."});var o=r[r.length-1],a=Math.ceil(o/t);this.outputShape=r.slice(0,-1),a>1&&this.outputShape.push(a),n||this.variableNames.push("bestIndicesA");var i,s,u=this.outputShape,c=u.length,l=Te(c),f=ht("coords",c);if(a===1){var h=Te(s=c+1);i=`
        `+h+" sourceLocR = "+h+"("+f.join()+`, 0);
        ++`+f[c-1]+`;
        `+h+" sourceLocG = "+h+"("+f.join()+`, 0);
        ++`+f[c-2]+`;
        `+h+" sourceLocA = "+h+"("+f.join()+`, 0);
        --`+f[c-1]+`;
        `+h+" sourceLocB = "+h+"("+f.join()+`, 0);
        --`+f[c-2]+";"}else s=c,i=`
        `+l+` sourceLocR = coords;
        ++`+f[c-1]+`;
        `+l+` sourceLocG = coords;
        ++`+f[c-2]+`;
        `+l+` sourceLocA = coords;
        --`+f[c-1]+`;
        `+l+` sourceLocB = coords;
        --`+f[c-2]+";";var d=["x","y","z","w","u","v"].slice(0,s),p="."+d[s-1],m=d.map(function(I){return"int "+I}),v=ht("sourceLocR",s-1).concat("inIdx.r"),g=ht("sourceLocG",s-1).concat("inIdx.g"),x=ht("sourceLocB",s-1).concat("inIdx.b"),w=ht("sourceLocA",s-1).concat("inIdx.a"),y=e==="max"?"greaterThan":"lessThan",b=n?"":`
          inIdx = round(vec4(getBestIndicesAChannel(`+v.join()+`),
                             getBestIndicesAChannel(`+g.join()+`),
                             getBestIndicesAChannel(`+x.join()+`),
                             getBestIndicesAChannel(`+w.join()+")));",_=`vec4(
            getAChannel(`+v.join()+`),
            hasNextCol ? getAChannel(`+g.join()+`) : 0.,
            hasNextRow ? getAChannel(`+x.join()+`) : 0.,
            hasNextRow && hasNextCol ? getAChannel(`+w.join()+") : 0.)",E=n?"":`
      float getBestIndicesAChannel(`+m.join()+`) {
        return getChannel(getBestIndicesA(`+d.join()+`),
                                          vec2(`+d.slice(-2).join()+`));
      }`;this.userCode=`
      float getAChannel(`+m.join()+`) {
        return getChannel(getA(`+d.join()+`),
                               vec2(`+d.slice(-2).join()+`));
      }
      `+E+`
      void main() {
        `+l+` coords = getOutputCoords();
        bool hasNextCol = `+f[c-1]+" < "+(u[c-1]-1)+`;
        bool hasNextRow = `+f[c-2]+" < "+(u[c-2]-1)+`;
        `+i+`
        ivec4 srcIdx = ivec4(sourceLocR`+p+", sourceLocG"+p+`,
          sourceLocB`+p+", sourceLocA"+p+") * "+t+`;
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = `+_+`;

        for (int i = 0; i < `+t+`; i++) {
          inIdx = srcIdx;
          `+b+`
          vec4 candidate = `+_+`;
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(`+y+`(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `},sm=function(r){this.variableNames=["dy"],this.outputShape=r.inShape;var t=r.filterHeight,e=r.filterWidth,n=r.strideHeight,o=r.strideWidth,a=r.dilationHeight,i=r.dilationWidth,s=r.effectiveFilterHeight,u=r.effectiveFilterWidth,c=s-1-r.padInfo.top,l=u-1-r.padInfo.left,f=1/(t*e);this.userCode=`
      const ivec2 pads = ivec2(`+c+", "+l+`);
      const float avgMultiplier = float(`+f+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+s+`;
            wR += `+a+`) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+u+`;
            wC+= `+i+`) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `},um=function(r){this.variableNames=["dy"],this.outputShape=r.inShape;var t=r.filterDepth,e=r.filterHeight,n=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.effectiveFilterDepth,f=r.effectiveFilterHeight,h=r.effectiveFilterWidth,d=l-1-r.padInfo.front,p=f-1-r.padInfo.top,m=h-1-r.padInfo.left,v=1/(t*e*n);this.userCode=`
      const ivec3 pads = ivec3(`+d+", "+p+", "+m+`);
      const float avgMultiplier = float(`+v+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          float dyD = float(dyDCorner + wD) / `+o+`.0;

          if (dyD < 0.0 || dyD >= `+r.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+f+`;
              wR += `+u+`) {
            float dyR = float(dyRCorner + wR) / `+a+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+h+`;
                wC += `+c+`) {
              float dyC = float(dyCCorner + wC) / `+i+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `},cm=function(r,t,e,n,o,a){this.outputShape=[],this.variableNames=["x","mean","variance"],xe(r,t),xe(r,e);var i="0.0";n!=null&&(xe(r,n),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="1.0";o!=null&&(xe(r,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=r,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = `+i+`;
        float scale = `+s+`;
        float inv = scale * inversesqrt(variance + float(`+a+`));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `},lm=function(r,t,e,n,o,a){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],xe(r,t),xe(r,e);var i="vec4(0.0)";n!=null&&(xe(r,n),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="vec4(1.0)";o!=null&&(xe(r,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=r,this.userCode=`
      void main() {
        vec4 offset = `+i+`;
        vec4 scale = `+s+`;

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(`+a+`));

        setOutput((x - mean) * inv + offset);
      }
    `},fm="return areal * breal - aimag * bimag;",hm="return areal * bimag + aimag * breal;",Ju=function(r,t,e){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=xe(t,e),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        `+r+`
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `},ci="return a + b;",li="return a - b;",Qu="return a * b;",tf="return (a < 0.) ? b * a : a;",Be=function(r,t,e){this.variableNames=["A","B"],this.outputShape=xe(t,e),this.userCode=`
      float binaryOperation(float a, float b) {
        `+r+`
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `},nf=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`,dn=function(r,t,e,n){n===void 0&&(n=!1),this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=xe(t,e);var o=this.outputShape.length,a="";if(n)if(o===0||ee(this.outputShape)===1)a=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(a=`
          `+Te(o)+` coords = getOutputCoords();
        `,o===1)a+=`
            result.y = (coords + 1) >= `+this.outputShape[0]+` ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{var i=ht("coords",o);a+=`
            bool nextRowOutOfBounds =
              (`+i[o-2]+" + 1) >= "+this.outputShape[o-2]+`;
            bool nextColOutOfBounds =
              (`+i[o-1]+" + 1) >= "+this.outputShape[o-1]+`;
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        `+r+`
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        `+a+`

        setOutput(result);
      }
    `},dm=function(){function r(t){this.variableNames=["A"],this.outputShape=t,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}return r.prototype.getCustomSetupFunc=function(t,e){var n=this;return function(o,a){n.minLoc==null&&(n.minLoc=o.getUniformLocationNoThrow(a,"minVal"),n.maxLoc=o.getUniformLocationNoThrow(a,"maxVal")),o.gl.uniform1f(n.minLoc,t),o.gl.uniform1f(n.maxLoc,e)}},r}(),pm=function(){function r(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}return r.prototype.getCustomSetupFunc=function(t,e){var n=this;return function(o,a){n.minLoc==null&&(n.minLoc=o.getUniformLocationNoThrow(a,"minVal"),n.maxLoc=o.getUniformLocationNoThrow(a,"maxVal")),o.gl.uniform1f(n.minLoc,t),o.gl.uniform1f(n.maxLoc,e)}},r}(),vm=function(r){this.variableNames=["real","imag"],this.outputShape=r,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `},mm=function(r){this.outputShape=[],this.outputShape=Nr(r,1),this.variableNames=r.map(function(s,u){return"T"+u});var t=new Array(r.length-1);t[0]=r[0][1];for(var e=1;e<t.length;e++)t[e]=t[e-1]+r[e][1];var n=["if (yC < "+t[0]+") setOutput(getT0(yR, yC));"];for(e=1;e<t.length;e++){var o=t[e-1];n.push("else if (yC < "+t[e]+") setOutput(getT"+e+"(yR, yC-"+o+"));")}var a=t.length,i=t[t.length-1];n.push("else setOutput(getT"+a+"(yR, yC-"+i+"));"),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        `+n.join(`
        `)+`
      }
    `},gm=function(r,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=Nr(r,t);var e=this.outputShape,n=e.length,o=Te(n),a=ht("coords",n),i=["x","y","z","w","u","v"].slice(0,n);this.variableNames=r.map(function(v,g){return"T"+g});var s=new Array(r.length-1);s[0]=r[0][t];for(var u=1;u<s.length;u++)s[u]=s[u-1]+r[u][t];var c=i[t],l=i.slice(-2),f=i.join(),h="if ("+c+" < "+s[0]+`) {
        return getChannel(
            getT0(`+f+"), vec2("+l.join()+`));
        }`;for(u=1;u<s.length;u++){var d=s[u-1];h+=`
        if (`+c+" < "+s[u]+"  && "+c+" >= "+s[u-1]+`) {
          return getChannel(
            getT`+u+"("+So(i,c,d)+`),
            vec2(`+So(l,c,d)+`));
        }`}var p=s.length,m=s[s.length-1];h+=`
        return getChannel(
          getT`+p+"("+So(i,c,m)+`),
          vec2(`+So(l,c,m)+"));",this.userCode=`
      float getValue(`+i.map(function(v){return"int "+v})+`) {
        `+h+`
      }

      void main() {
        `+o+` coords = getOutputCoords();
        vec4 result = vec4(getValue(`+a+`), 0., 0., 0.);

        `+a[n-1]+" = "+a[n-1]+` + 1;
        if (`+a[n-1]+" < "+e[n-1]+`) {
          result.g = getValue(`+a+`);
        }

        `+a[n-2]+" = "+a[n-2]+` + 1;
        if (`+a[n-2]+" < "+e[n-2]+`) {
          result.a = getValue(`+a+`);
        }

        `+a[n-1]+" = "+a[n-1]+` - 1;
        if (`+a[n-2]+" < "+e[n-2]+` &&
            `+a[n-1]+" < "+e[n-1]+`) {
          result.b = getValue(`+a+`);
        }
        setOutput(result);
      }
    `};function So(r,t,e){var n=r.indexOf(t);return r.map(function(o,a){return a===n?o+" - "+e:o}).join()}var ym=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var t=r.strideHeight,e=r.strideWidth,n=r.padInfo.top,o=r.padInfo.left,a=r.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yR = 0; yR < `+r.outHeight+`; yR++) {
            int xR = wR + yR * `+t+" - "+n+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+r.outWidth+`; yC++) {
              int xC = wC + yC * `+e+" - "+o+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              if (`+a+`) {
                float dyValue = getDy(b, yR, yC, d2);
                float xValue = getX(b, xR, xC, d1);
                dotProd += (xValue * dyValue);
              } else {
                float dyValue = getDy(b, d2, yR, yC);
                float xValue = getX(b, d1, xR, xC);
                dotProd += (xValue * dyValue);
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},xm=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var t=r.filterHeight,e=r.filterWidth,n=r.strideHeight,o=r.strideWidth,a=r.dataFormat==="channelsLast",i=t-1-r.padInfo.top,s=e-1-r.padInfo.left,u=a?1:2,c=a?2:3,l=a?3:1;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[`+l+`];

        ivec2 dyCorner = ivec2(coords[`+u+"], coords["+c+`]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+e+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+e+` - 1 - wC;

            for (int d2 = 0; d2 < `+r.outChannels+`; d2++) {

              if (`+a+`) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},bm=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var t=r.strideDepth,e=r.strideHeight,n=r.strideWidth,o=r.padInfo.front,a=r.padInfo.top,i=r.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yF = 0; yF < `+r.outDepth+`; yF++) {
            int xF = wF + yF * `+t+" - "+o+`;

            if (xF < 0 || xF >= `+r.inDepth+`) {
              continue;
            }

            for (int yR = 0; yR < `+r.outHeight+`; yR++) {
              int xR = wR + yR * `+e+" - "+a+`;

              if (xR < 0 || xR >= `+r.inHeight+`) {
                continue;
              }

              for (int yC = 0; yC < `+r.outWidth+`; yC++) {
                int xC = wC + yC * `+n+" - "+i+`;

                if (xC < 0 || xC >= `+r.inWidth+`) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},wm=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var t=r.filterDepth,e=r.filterHeight,n=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=t-1-r.padInfo.front,u=e-1-r.padInfo.top,c=n-1-r.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(`+s+", "+u+", "+c+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < `+t+`; wF++) {
          float dyF = float(dyFCorner + wF) / `+o+`.0;

          if (dyF < 0.0 || dyF >= `+r.outDepth+`.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = `+t+` - 1 - wF;

          for (int wR = 0; wR < `+e+`; wR++) {
            float dyR = float(dyRCorner + wR) / `+a+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = `+e+` - 1 - wR;

            for (int wC = 0; wC < `+n+`; wC++) {
              float dyC = float(dyCCorner + wC) / `+i+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = `+n+` - 1 - wC;

              for (int d2 = 0; d2 < `+r.outChannels+`; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},_m=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var t=r.strideHeight,e=r.strideWidth,n=r.padInfo.top,o=r.padInfo.left,a=r.outChannels/r.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * `+a+` + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yR = 0; yR < `+r.outHeight+`; yR++) {
            int xR = wR + yR * `+t+" - "+n+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+r.outWidth+`; yC++) {
              int xC = wC + yC * `+e+" - "+o+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `},Cm=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var t=r.filterHeight,e=r.filterWidth,n=r.strideHeight,o=r.strideWidth,a=t-1-r.padInfo.top,i=e-1-r.padInfo.left,s=r.outChannels/r.inChannels;this.userCode=`
      const ivec2 pads = ivec2(`+a+", "+i+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+e+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+e+` - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < `+s+`; dm++) {
              int d2 = d1 * `+s+` + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `},Zu=function(r,t,e,n){t===void 0&&(t=!1),e===void 0&&(e=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.outputShape=r.outShape;var o=r.padInfo.top,a=r.padInfo.left,i=r.strideHeight,s=r.strideWidth,u=r.dilationHeight,c=r.dilationWidth,l=r.filterHeight,f=r.filterWidth,h=4*Math.floor(r.inChannels/4),d=r.inChannels%4,p=r.dataFormat==="channelsLast",m=p?1:2,v=p?2:3,g=p?3:1,x="",w="";e&&(x=n?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`
          float activation(float x) {
            `+e+`
          }
        `,w="result = activation(result);");var y=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+x+`

      const ivec2 strides = ivec2(`+i+", "+s+`);
      const ivec2 pads = ivec2(`+o+", "+a+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[`+g+`];

        ivec2 xRCCorner =
            ivec2(coords[`+m+"], coords["+v+`]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+l+`; wR++) {
          int xR = xRCorner + wR * `+u+`;

          if (xR < 0 || xR >= `+r.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+f+`; wC++) {
            int xC = xCCorner + wC * `+c+`;

            if (xC < 0 || xC >= `+r.inWidth+`) {
              continue;
            }

            for (int d1 = 0; d1 < `+h+`; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (`+p+`) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (`+(d===1)+`) {

              if (`+p+`) {
                dotProd +=
                    getX(batch, xR, xC, `+h+`) *
                    getW(wR, wC, `+h+`, d2);
              } else {
                dotProd +=
                    getX(batch, `+h+`, xR, xC) *
                    getW(wR, wC, `+h+`, d2);
              }

            } else if (`+(d===2)+`) {
              vec2 wValues = vec2(
                getW(wR, wC, `+h+`, d2),
                getW(wR, wC, `+h+` + 1, d2)
              );

              if (`+p+`) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, `+h+`),
                  getX(batch, xR, xC, `+h+` + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, `+h+`, xR, xC),
                  getX(batch, `+h+` + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (`+(d===3)+`) {
              vec3 wValues = vec3(
                getW(wR, wC, `+h+`, d2),
                getW(wR, wC, `+h+` + 1, d2),
                getW(wR, wC, `+h+` + 2, d2)
              );

              if (`+p+`) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, `+h+`),
                  getX(batch, xR, xC, `+h+` + 1),
                  getX(batch, xR, xC, `+h+` + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, `+h+`, xR, xC),
                  getX(batch, `+h+` + 1, xR, xC),
                  getX(batch, `+h+` + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        `+y+`
        `+w+`
        setOutput(result);
      }
    `},Em=function(r){this.variableNames=["x","W"],this.outputShape=r.outShape;var t=r.padInfo.front,e=r.padInfo.top,n=r.padInfo.left,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.filterDepth,f=r.filterHeight,h=r.filterWidth,d=4*Math.floor(r.inChannels/4),p=r.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(`+o+", "+a+", "+i+`);
      const ivec3 pads = ivec3(`+t+", "+e+", "+n+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < `+l+`; wF++) {
          int xF = xFCorner + wF * `+s+`;

          if (xF < 0 || xF >= `+r.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+f+`; wR++) {
            int xR = xRCorner + wR * `+u+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+h+`; wC++) {
              int xC = xCCorner + wC * `+c+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              for (int d1 = 0; d1 < `+d+`; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (`+(p===1)+`) {
                dotProd +=
                  getX(batch, xF, xR, xC, `+d+`) *
                  getW(wF, wR, wC, `+d+`, d2);
              } else if (`+(p===2)+`) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, `+d+`),
                  getX(batch, xF, xR, xC, `+d+` + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, `+d+`, d2),
                  getW(wF, wR, wC, `+d+` + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (`+(p===3)+`) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, `+d+`),
                  getX(batch, xF, xR, xC, `+d+` + 1),
                  getX(batch, xF, xR, xC, `+d+` + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, `+d+`, d2),
                  getW(wF, wR, wC, `+d+` + 1, d2),
                  getW(wF, wR, wC, `+d+` + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},ec=function(r,t,e,n){t===void 0&&(t=!1),e===void 0&&(e=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.outputShape=r.outShape;var o=r.inHeight,a=r.inWidth,i=r.padInfo.top,s=r.padInfo.left,u=r.strideHeight,c=r.strideWidth,l=r.dilationHeight,f=r.dilationWidth,h=r.filterHeight,d=r.filterWidth,p=r.outChannels/r.inChannels,m="",v="";e&&(m=n?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`
          float activation(float x) {
            `+e+`
          }
        `,v="result = activation(result);");var g=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+m+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / `+p+`;
        int q = d2 - d1 * `+p+`;

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < `+h+`; wR++) {
          int xR = xRCorner + wR * `+l+`;

          if (xR < 0 || xR >= `+o+`) {
            continue;
          }

          for (int wC = 0; wC < `+d+`; wC++) {
            int xC = xCCorner + wC * `+f+`;

            if (xC < 0 || xC >= `+a+`) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        `+g+`
        `+v+`
        setOutput(result);
      }
    `},tc=function(r,t,e,n){t===void 0&&(t=!1),e===void 0&&(e=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r.outShape;for(var o=r.inHeight,a=r.inWidth,i=r.padInfo.top,s=r.padInfo.left,u=r.strideHeight,c=r.strideWidth,l=r.dilationHeight,f=r.dilationWidth,h=r.filterHeight,d=r.filterWidth,p=d,m="int xR; int xC; int xCOffset;",v=0;v<h;v++)for(var g=0;g<d;g++)m+=`
          vec4 xTexelR`+v+"C"+2*g+` = vec4(0.);
          vec4 wR`+v+"C"+g+` = vec4(0.);
          vec4 xR`+v+"C"+g+" = vec4(0.);";for(v=0;v<h;v++)for(var x=0;x<p;x++){if(m+=`
          xR = xRCorner + `+v*l+`;
          xC = xCCorner + `+(g=2*x)*f+`;
        `,c===1){if(g<d&&(m+=s%2==1?`
                xCOffset = xC + 1;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+a+`) {
                  xTexelR`+v+"C"+g+` = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+a+`) {
                    xTexelR`+v+"C"+g+`.zw = vec2(0.);
                  }
                } else {
                  xTexelR`+v+"C"+g+` = vec4(0.);
                }

                xCOffset = xC + 1 - 2;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+a+`) {
                  vec4 previous = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+a+`) {
                    previous.zw = vec2(0.);
                  }

                  xR`+v+"C"+g+" = vec4(previous.zw, xTexelR"+v+"C"+g+`.xy);
                } else {
                  xR`+v+"C"+g+" = vec4(0, 0, xTexelR"+v+"C"+g+`.xy);
                }
              `:`
                if(xR >= 0 && xR < `+o+" && xC >= 0 && xC < "+a+`) {
                  xTexelR`+v+"C"+g+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+v+"C"+g+` = vec4(0.);
                }

                xR`+v+"C"+g+" = xTexelR"+v+"C"+g+`;
              `,g+1<d)){var w=s%2==0?bl(f):f;f%2==0&&s%2==1||f%2!=0&&s%2!=1?(m+=`
                  xCOffset = xC + `+s%2+" + "+w+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+a+`) {
                    xTexelR`+v+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                  }
                `,f>1&&(m+=`
                    xCOffset -= 2;
                    if(xR >= 0 && xR < `+o+` &&
                      xCOffset >= 0 && xCOffset < `+a+`) {
                      xTexelR`+v+"C"+g+` = getX(batch, xR, xCOffset, d1);
                    } else {
                      xTexelR`+v+"C"+g+` = vec4(0.);
                    }
                  `),m+=`
                  xR`+v+"C"+(g+1)+` = vec4(
                    xTexelR`+v+"C"+g+".zw, xTexelR"+v+"C"+(g+2)+`.xy);
                `):m+=`
                  xCOffset = xC + `+w+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+a+`) {
                    xTexelR`+v+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                  }

                  xR`+v+"C"+(g+1)+" = xTexelR"+v+"C"+(g+2)+`;
                `}}else g<d&&(m+=`
              if(xR >= 0 && xR < `+o+`) {
            `,s%2==1?(m+=`
                xCOffset = xC + 1 - `+c+`;
                if(xCOffset >= 0 && xCOffset < `+a+`) {
                  xTexelR`+v+"C"+g+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+v+"C"+g+` = vec4(0.);
                }

                if(xC + 1 >= 0 && xC + 1 < `+a+`) {
                  xTexelR`+v+"C"+(g+2)+` = getX(batch, xR, xC + 1, d1);
                } else {
                  xTexelR`+v+"C"+(g+2)+` = vec4(0.);
                }

                xR`+v+"C"+g+` = vec4(
                  xTexelR`+v+"C"+g+".zw, xTexelR"+v+"C"+(g+2)+`.zw);
              `,g+1<d&&(m+=`
                  vec4 final = vec4(0.);
                  xCOffset = xC + 1 + `+c+`;
                  if(xCOffset >= 0 && xCOffset < `+a+`) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xR`+v+"C"+(g+1)+" = vec4(xTexelR"+v+"C"+(g+2)+`.xy, final.xy);
                `)):(m+=`
                if(xC >= 0 && xC < `+a+`) {
                  xTexelR`+v+"C"+g+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+v+"C"+g+` = vec4(0.);
                }

                xCOffset = xC + `+c+`;
                if(xCOffset >= 0 && xCOffset < `+a+`) {
                  xTexelR`+v+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+v+"C"+(g+2)+` = vec4(0.);
                }

                xR`+v+"C"+g+` = vec4(
                  xTexelR`+v+"C"+g+".xy, xTexelR"+v+"C"+(g+2)+`.xy);
              `,g+1<d&&(m+=`
                  xR`+v+"C"+(g+1)+` = vec4(
                    xTexelR`+v+"C"+g+".zw, xTexelR"+v+"C"+(g+2)+`.zw);
                `)),m+="}");g<d&&(m+=`
            vec4 wTexelR`+v+"C"+g+" = getW("+v+", "+g+`, d1, q);
            wR`+v+"C"+g+" = vec4(wTexelR"+v+"C"+g+".xz, wTexelR"+v+"C"+g+`.xz);
          `,g+1<d&&(m+=`
              vec4 wTexelR`+v+"C"+(g+1)+" = getW("+v+", "+(g+1)+`, d1, q);
              wR`+v+"C"+(g+1)+` =
                vec4(wTexelR`+v+"C"+(g+1)+".xz, wTexelR"+v+"C"+(g+1)+".xz);"))}for(v=0;v<h;v++)for(g=0;g<d;g++)m+="dotProd += xR"+v+"C"+g+" * wR"+v+"C"+g+";";var y="",b="";e&&(y=n?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`vec4 activation(vec4 x) {
          `+e+`
        }`,b="result = activation(result);");var _=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+y+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {

        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2;
        int q = 0;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        vec4 dotProd = vec4(0.);

        `+m+`

        vec4 result = dotProd;
        `+_+`
        `+b+`
        setOutput(result);
      }
    `},Im=function(r,t,e,n,o){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];var a=r[0],i=r[1],s=r[2],u=r[3],c=t[0],l=e[0],f=e[1];this.outputShape=[c,l,f,u];var h=n==="bilinear"?1:0,d=[i-1+".0",s-1+".0"],p=d[0],m=d[1],v=l>1?[""+(i-1)/(l-1),"(y2-y1) * height_ratio","y1*"+p+" + float(y)*(height_scale)"]:["0.0","0.0","0.5 * (y1+y2) * "+p],g=v[0],x=v[1],w=v[2],y=f>1?[""+(s-1)/(f-1),"(x2-x1) * width_ratio","x1*"+m+" + float(x)*(width_scale)"]:["0.0","0.0","0.5 * (x1+x2) * "+m],b=y[0],_=y[1],E=y[2];this.userCode=`
      const float height_ratio = float(`+g+`);
      const float width_ratio = float(`+b+`);
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= `+a+`) {
          return;
        }

        float height_scale = `+x+`;
        float width_scale = `+_+`;

        float in_y = `+w+`;
        if( in_y < 0.0 || in_y > `+p+` ) {
          setOutput(float(`+o+`));
          return;
        }
        float in_x = `+E+`;
        if( in_x < 0.0 || in_x > `+m+` ) {
          setOutput(float(`+o+`));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(`+h+` == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `},Rm=function(r,t,e){this.variableNames=["x"],this.outputShape=r;var n=r.length,o=r[r.length-1],a=e?"<":">";this.userCode=`
      int getIndex(int i) {
        `+(e?"return "+o+" -i - 1;":"return i;")+`
      }

      void main() {
        `+Te(n)+` coords = getOutputCoords();
        int end = `+nc(n,"coords")+`;
        float val = 0.0;
        for (int i = `+o+` - 1; i >= 0; i -= 1) {
          int idx = getIndex(i);
          if (idx `+a+` end) {
            continue;
          }
          if (idx == end && `+t+`) {
            continue;
          }
          `+nc(n,"coords")+` = idx;
          val += getX(`+function(i,s){if(i===1)return""+s;if(i===2)return s+".x, "+s+".y";if(i===3)return s+".x, "+s+".y, "+s+".z";if(i===4)return s+".x, "+s+".y, "+s+".z, "+s+".w";throw Error("Cumulative sum for rank "+i+" is not yet supported")}(n,"coords")+`);
        }
        setOutput(val);
      }
    `};function nc(r,t){if(r===1)return""+t;if(r===2)return t+".y";if(r===3)return t+".z";if(r===4)return t+".w";throw Error("Cumulative sum for rank "+r+" is not yet supported")}var km=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=no.DENSE;var t=Xr(r),e=nt();this.outputShape=r,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+Xn(["r","c","d"],r)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+", "+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        `+e.output+` = result;
      }
    `},Sm=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=no.DENSE;var t=Xr(r),e=nt();this.outputShape=r,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+Xn(["r","c","d"],r)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+", "+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        `+e.output+` = result;
      }
    `},Dm=function(){function r(t,e,n){this.variableNames=["x"],this.outputShape=[],this.outputShape=t,this.blockSize=e,this.dataFormat=n,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = `+this.getHeightCoordString()+`;
      int w = `+this.getWidthCoordString()+`;
      int d = `+this.getDepthCoordString()+`;

      int in_h = h / `+e+`;
      int offset_h = imod(h, `+e+`);
      int in_w = w / `+e+`;
      int offset_w = imod(w, `+e+`);
      int offset_d = (offset_h * `+e+` + offset_w) *
        `+this.getOutputDepthSize()+`;
      int in_d = d + offset_d;

      float result = `+this.getInputSamplingString()+`;
      setOutput(result);
    }
  `}return r.prototype.getHeightCoordString=function(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"},r.prototype.getWidthCoordString=function(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"},r.prototype.getDepthCoordString=function(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"},r.prototype.getOutputDepthSize=function(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]},r.prototype.getInputSamplingString=function(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"},r}(),Am=function(r){this.variableNames=["X"],this.outputShape=[r,r],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `},Tm=function(r){this.variableNames=["A"],this.outTexUsage=_t.DOWNLOAD;var t=nt();this.outputShape=r,this.userCode=`
      `+Zl+`

      void main() {
        float x = getAAtOutCoords();
        `+t.output+` = encode_float(x);
      }
    `},Nm=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=_t.DOWNLOAD;var t=nt();this.outputShape=r,this.userCode=`
      `+Zl+`

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        `+t.output+` = encode_float(x);
      }
    `},Fm=function(r,t,e){e===void 0&&(e=!1),this.variableNames=["A"];var n=nt(),o=t[0],a=t[1];this.outputShape=r;var i="result";e&&(i="floor(result * 255. + 0.5)"),this.userCode=`
      `+Ts(r)+`

      void main() {
        ivec3 coords = getOutputCoords();

        int flatIndex = getFlatIndex(coords);
        int offset = imod(flatIndex, 4);

        flatIndex = idiv(flatIndex, 4, 1.);
        
        int r = flatIndex / `+a+`;
        int c = imod(flatIndex, `+a+`);
        vec2 uv = (vec2(c, r) + halfCR) / vec2(`+a+".0, "+o+`.0);
        vec4 values = `+n.texture2D+`(A, uv);

        float result;

        if(offset == 0) {
          result = values[0];
        } else if(offset == 1) {
          result = values[1];
        } else if(offset == 2) {
          result = values[2];
        } else {
          result = values[3];
        }

        `+n.output+" = vec4("+i+`, 0., 0., 0.);
      }
    `},Pm=function(r,t,e){e===void 0&&(e=!1),this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var n=nt(),o=t[0],a=t[1];this.outputShape=r;var i="",s="result";e&&(s="floor(result * 255. + 0.5)");for(var u=0;u<=1;u++)for(var c=0;c<=1;c++){var l=2*u+c;i+=`
          localCoords = coords;
          if(localCoords[2] + `+c+" < "+r[2]+`) {
            localCoords[2] += `+c+`;
            if(localCoords[1] + `+u+" < "+r[1]+`) {
              localCoords[1] += `+u+`;

              flatIndex = getFlatIndex(localCoords);
              offset = imod(flatIndex, 4);

              flatIndex = idiv(flatIndex, 4, 1.);

              r = flatIndex / `+a+`;
              c = imod(flatIndex, `+a+`);
              uv = (vec2(c, r) + halfCR) / vec2(`+a+".0, "+o+`.0);
              values = `+n.texture2D+`(A, uv);

              if(offset == 0) {
                result[`+l+`] = values[0];
              } else if(offset == 1) {
                result[`+l+`] = values[1];
              } else if(offset == 2) {
                result[`+l+`] = values[2];
              } else {
                result[`+l+`] = values[3];
              }
            }
          }
        `}this.userCode=`
      `+Ts(r)+`

      void main() {
        ivec3 coords = getOutputCoords();

        vec4 result = vec4(0.);
        int flatIndex, r, c, offset;
        ivec3 localCoords;
        vec2 uv;
        vec4 values;

        `+i+`

        `+n.output+" = "+s+`;
      }
    `},Mm="return real * expR - imag * expI;",Om="return real * expI + imag * expR;",rc=function(r,t,e){this.variableNames=["real","imag"];var n=t[1];this.outputShape=t;var o=e?"2.0 * "+Math.PI:"-2.0 * "+Math.PI,a=e?n+".0":"1.0";this.userCode=`
      const float exponentMultiplier = `+o+`;

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        `+r+`
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(`+n+`);
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < `+n+`; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / `+a+`;
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `},Bm=function(){function r(t,e){this.outputShape=[],this.variableNames=["x"],this.outputShape=t,this.userCode=`
      uniform float value;
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;return function(n,o){e.valueLoc==null&&(e.valueLoc=n.getUniformLocationNoThrow(o,"value")),n.gl.uniform1f(e.valueLoc,t)}},r}(),Lm=function(r,t,e){this.variableNames=["A","indices"];var n=r.slice();n[e]=t,this.outputShape=n,this.rank=n.length;var o=Te(this.rank),a=function(i,s){var u=i.length;if(u>4)throw Error("Gather for rank "+u+" is not yet supported");if(u===1)return"int(getIndices(resRC))";for(var c=["resRC.x","resRC.y","resRC.z","resRC.w"],l=[],f=0;f<i.length;f++)f===s?l.push("int(getIndices("+c[f]+"))"):l.push(""+c[f]);return l.join()}(r,e);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+a+`));
      }
    `},Wm=function(r,t,e){this.sliceDim=r,this.strides=t,this.variableNames=["x","indices"],this.outputShape=e;var n=Te(t.length),o=Te(e.length),a=this.sliceDim>1?"strides[j]":"strides";this.userCode=`
        `+n+" strides = "+n+"("+this.strides+`);
         void main() {
          `+o+` coords = getOutputCoords();
          int flattenIndex = 0;
          for (int j = 0; j < `+this.sliceDim+`; j++) {
            int index = round(getIndices(coords[0], j));
            flattenIndex += index * `+a+`;
          }
          setOutput(getX(flattenIndex, coords[1]));
        }
      `};function zm(r,t){var e=nt();return Mp(r,t,e.version+`
    precision highp float;
    `+e.attribute+` vec3 clipSpacePos;
    `+e.attribute+` vec2 uv;
    `+e.varyingVs+` vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`)}function Um(r,t){return zp(r,t,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function Vm(r,t){return Up(r,t,new Uint16Array([0,1,2,2,1,3]))}function po(r,t,e,n,o,a,i){Gp(e,n);var s=Vp(r,t),u=r.TEXTURE_2D;return ne(r,t,function(){return r.bindTexture(u,s)}),ne(r,t,function(){return r.texParameteri(u,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE)}),ne(r,t,function(){return r.texParameteri(u,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}),ne(r,t,function(){return r.texParameteri(u,r.TEXTURE_MIN_FILTER,r.NEAREST)}),ne(r,t,function(){return r.texParameteri(u,r.TEXTURE_MAG_FILTER,r.NEAREST)}),ne(r,t,function(){return r.texImage2D(u,0,o,e,n,0,a,i,null)}),ne(r,t,function(){return r.bindTexture(r.TEXTURE_2D,null)}),s}function Gm(r,t,e,n,o){var a=Da(e,n);return po(r,t,a[0],a[1],o.internalFormatFloat,o.textureFormatFloat,r.FLOAT)}function Hm(r,t,e,n,o){var a=Da(e,n);return po(r,t,a[0],a[1],o.internalFormatHalfFloat,o.textureFormatFloat,o.textureTypeHalfFloat)}function jm(r,t,e,n,o){var a=Da(e,n);return po(r,t,a[0],a[1],r.RGBA,r.RGBA,r.UNSIGNED_BYTE)}function qm(r,t,e,n,o){var a=ho(e,n);return po(r,t,a[0],a[1],o.internalFormatPackedFloat,r.RGBA,r.FLOAT)}function Km(r,t,e,n,o){var a=ho(e,n);return po(r,t,a[0],a[1],o.internalFormatPackedHalfFloat,r.RGBA,o.textureTypeHalfFloat)}function Xm(r,t,e,n){return ne(r,t,function(){return r.bindBuffer(r.ARRAY_BUFFER,n)}),Hu(r,t,e,"clipSpacePos",n,3,20,0)&&Hu(r,t,e,"uv",n,2,20,12)}function $m(r,t,e,n,o,a,i){var s,u,c;ne(r,t,function(){return r.bindTexture(r.TEXTURE_2D,e)}),a instanceof Uint8Array?(s=new Uint8Array(n*o*4),u=r.UNSIGNED_BYTE,c=r.RGBA):(s=new Float32Array(n*o*4),u=r.FLOAT,c=i.internalFormatPackedFloat),s.set(a),ne(r,t,function(){return r.texImage2D(r.TEXTURE_2D,0,c,n,o,0,r.RGBA,u,s)}),ne(r,t,function(){return r.bindTexture(r.TEXTURE_2D,null)})}function Ym(r,t,e,n){ne(r,t,function(){return r.bindTexture(r.TEXTURE_2D,e)}),n.data instanceof Uint8Array?ne(r,t,function(){return r.texImage2D(r.TEXTURE_2D,0,r.RGBA,n.width,n.height,0,r.RGBA,r.UNSIGNED_BYTE,n.data)}):ne(r,t,function(){return r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,n)}),ne(r,t,function(){return r.bindTexture(r.TEXTURE_2D,null)})}function Jm(r,t,e,n,o){var a=r.createBuffer();ne(r,t,function(){return r.bindBuffer(r.PIXEL_PACK_BUFFER,a)});var i=16*e*n;return ne(r,t,function(){return r.bufferData(r.PIXEL_PACK_BUFFER,i,r.STREAM_READ)}),ne(r,t,function(){return r.readPixels(0,0,n,e,r.RGBA,r.FLOAT,0)}),ne(r,t,function(){return r.bindBuffer(r.PIXEL_PACK_BUFFER,null)}),a}function Qm(r,t,e){var n=r,o=new Float32Array(e);return n.bindBuffer(n.PIXEL_PACK_BUFFER,t),n.getBufferSubData(n.PIXEL_PACK_BUFFER,0,o),n.bindBuffer(n.PIXEL_PACK_BUFFER,null),o}function Zm(r,t,e,n,o){var a=Da(e,n),i=a[0],s=a[1],u=new Uint8Array(e*n*4);return ne(r,t,function(){return r.readPixels(0,0,i,s,o.downloadTextureFormat,r.UNSIGNED_BYTE,u)}),new Float32Array(u.buffer)}function eg(r,t,e,n,o,a,i,s){var u=r,c=new Float32Array(function(l,f){var h=ho(l,f);return h[0]*h[1]*4}(a,i));return u.bindBuffer(u.PIXEL_PACK_BUFFER,t),u.getBufferSubData(u.PIXEL_PACK_BUFFER,0,c),u.bindBuffer(u.PIXEL_PACK_BUFFER,null),c}function tg(r,t,e,n){var o=new Float32Array(e*n*4);return ne(r,t,function(){return r.readPixels(0,0,n,e,r.RGBA,r.FLOAT,o)}),o}var ng=function(){function r(t){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];var e=L().getNumber("WEBGL_VERSION");t!=null?(this.gl=t,Ap(e,t)):this.gl=sn(e);var n="WEBGL_color_buffer_float";if(L().getNumber("WEBGL_VERSION")===1){if(this.textureFloatExtension=Eo(this.gl,this.debug,"OES_texture_float"),Ft(this.gl,"OES_texture_half_float"))this.textureHalfFloatExtension=Eo(this.gl,this.debug,"OES_texture_half_float");else if(L().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(n),Ft(this.gl,"EXT_color_buffer_half_float"))this.colorBufferHalfFloatExtension=Eo(this.gl,this.debug,"EXT_color_buffer_half_float");else if(L().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(n="EXT_color_buffer_float",Ft(this.gl,n))this.colorBufferFloatExtension=this.gl.getExtension(n);else{if(!Ft(this.gl,"EXT_color_buffer_half_float"))throw new Error("GL context does not support color renderable floats");this.colorBufferHalfFloatExtension=this.gl.getExtension("EXT_color_buffer_half_float")}this.vertexBuffer=Um(this.gl,this.debug),this.indexBuffer=Vm(this.gl,this.debug),this.framebuffer=Hp(this.gl,this.debug),this.textureConfig=ws(this.gl,this.textureHalfFloatExtension)}return Object.defineProperty(r.prototype,"debug",{get:function(){return L().getBool("DEBUG")},enumerable:!0,configurable:!0}),r.prototype.dispose=function(){var t=this;if(!this.disposed){this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");var e=this.gl;ne(e,this.debug,function(){return e.finish()}),ne(e,this.debug,function(){return e.bindFramebuffer(e.FRAMEBUFFER,null)}),ne(e,this.debug,function(){return e.deleteFramebuffer(t.framebuffer)}),ne(e,this.debug,function(){return e.bindBuffer(e.ARRAY_BUFFER,null)}),ne(e,this.debug,function(){return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)}),ne(e,this.debug,function(){return e.deleteBuffer(t.indexBuffer)}),this.disposed=!0}},r.prototype.createFloat32MatrixTexture=function(t,e){return this.throwIfDisposed(),Gm(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.createFloat16MatrixTexture=function(t,e){return this.throwIfDisposed(),Hm(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.createUnsignedBytesMatrixTexture=function(t,e){return this.throwIfDisposed(),jm(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.uploadPixelDataToTexture=function(t,e){this.throwIfDisposed(),Ym(this.gl,this.debug,t,e)},r.prototype.uploadDenseMatrixToTexture=function(t,e,n,o){this.throwIfDisposed(),$m(this.gl,this.debug,t,e,n,o,this.textureConfig)},r.prototype.createFloat16PackedMatrixTexture=function(t,e){return this.throwIfDisposed(),Km(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.createPackedMatrixTexture=function(t,e){return this.throwIfDisposed(),qm(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.deleteMatrixTexture=function(t){var e=this;this.throwIfDisposed(),this.outputTexture===t&&(ju(this.gl,this.debug,this.framebuffer),this.outputTexture=null),ne(this.gl,this.debug,function(){return e.gl.deleteTexture(t)})},r.prototype.downloadByteEncodedFloatMatrixFromOutputTexture=function(t,e,n){var o=this;return this.downloadMatrixDriver(t,function(){return Zm(o.gl,o.debug,e,n,o.textureConfig)})},r.prototype.downloadPackedMatrixFromBuffer=function(t,e,n,o,a,i){return eg(this.gl,t,0,0,0,a,i,this.textureConfig)},r.prototype.downloadFloat32MatrixFromBuffer=function(t,e){return Qm(this.gl,t,e)},r.prototype.createBufferFromTexture=function(t,e,n){this.bindTextureToFrameBuffer(t);var o=Jm(this.gl,this.debug,e,n,this.textureConfig);return this.unbindTextureToFrameBuffer(),o},r.prototype.createAndWaitForFence=function(){var t=this.createFence(this.gl);return this.pollFence(t)},r.prototype.createFence=function(t){var e,n,o=this;if(L().getBool("WEBGL_FENCE_API_ENABLED")){var a=t,i=a.fenceSync(a.SYNC_GPU_COMMANDS_COMPLETE,0);t.flush(),n=function(){var s=a.clientWaitSync(i,0,0);return s===a.ALREADY_SIGNALED||s===a.CONDITION_SATISFIED},e=i}else L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(e=this.beginQuery(),this.endQuery(),n=function(){return o.isQueryAvailable(e,L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}):n=function(){return!0};return{query:e,isFencePassed:n}},r.prototype.downloadMatrixFromPackedTexture=function(t,e,n){var o=this;return this.downloadMatrixDriver(t,function(){return tg(o.gl,o.debug,e,n)})},r.prototype.createProgram=function(t){this.throwIfDisposed();var e=this.gl,n=Op(e,this.debug,t),o=zm(e,this.debug),a=Lp(e,this.debug);return ne(e,this.debug,function(){return e.attachShader(a,o)}),ne(e,this.debug,function(){return e.attachShader(a,n)}),Wp(e,this.debug,a),this.debug&&ai(e,this.debug,a),this.vertexAttrsAreBound||(this.setProgram(a),this.vertexAttrsAreBound=Xm(e,this.debug,this.program,this.vertexBuffer)),a},r.prototype.deleteProgram=function(t){var e=this;this.throwIfDisposed(),t===this.program&&(this.program=null),t!=null&&ne(this.gl,this.debug,function(){return e.gl.deleteProgram(t)})},r.prototype.setProgram=function(t){var e=this;this.throwIfDisposed(),this.program=t,this.program!=null&&this.debug&&ai(this.gl,this.debug,this.program),ne(this.gl,this.debug,function(){return e.gl.useProgram(t)})},r.prototype.getUniformLocation=function(t,e,n){return n===void 0&&(n=!0),this.throwIfDisposed(),n?qp(this.gl,this.debug,t,e):Kp(this.gl,t,e)},r.prototype.getAttributeLocation=function(t,e){var n=this;return this.throwIfDisposed(),ne(this.gl,this.debug,function(){return n.gl.getAttribLocation(t,e)})},r.prototype.getUniformLocationNoThrow=function(t,e){return this.throwIfDisposed(),this.gl.getUniformLocation(t,e)},r.prototype.setInputMatrixTexture=function(t,e,n){this.throwIfDisposed(),this.throwIfNoProgram(),Xp(this.gl,this.debug,this.program,t,e,n)},r.prototype.setOutputMatrixTexture=function(t,e,n){this.setOutputMatrixTextureDriver(t,n,e)},r.prototype.setOutputPackedMatrixTexture=function(t,e,n){this.throwIfDisposed();var o=ho(e,n),a=o[0],i=o[1];this.setOutputMatrixTextureDriver(t,a,i)},r.prototype.setOutputMatrixWriteRegion=function(t,e,n,o){this.setOutputMatrixWriteRegionDriver(n,t,o,e)},r.prototype.setOutputPackedMatrixWriteRegion=function(t,e,n,o){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")},r.prototype.debugValidate=function(){this.program!=null&&ai(this.gl,this.debug,this.program),Io(this.gl)},r.prototype.executeProgram=function(){this.throwIfDisposed(),this.throwIfNoProgram();var t=this.gl;this.debug&&this.debugValidate(),ne(t,this.debug,function(){return t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0)})},r.prototype.blockUntilAllProgramsCompleted=function(){var t=this;this.throwIfDisposed(),ne(this.gl,this.debug,function(){return t.gl.finish()})},r.prototype.getQueryTimerExtension=function(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=Eo(this.gl,this.debug,L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension},r.prototype.getQueryTimerExtensionWebGL2=function(){return this.getQueryTimerExtension()},r.prototype.getQueryTimerExtensionWebGL1=function(){return this.getQueryTimerExtension()},r.prototype.beginQuery=function(){if(L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){var t=this.gl,e=this.getQueryTimerExtensionWebGL2(),n=t.createQuery();return t.beginQuery(e.TIME_ELAPSED_EXT,n),n}var o=this.getQueryTimerExtensionWebGL1(),a=o.createQueryEXT();return o.beginQueryEXT(o.TIME_ELAPSED_EXT,a),a},r.prototype.endQuery=function(){if(L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")!==2){var t=this.getQueryTimerExtensionWebGL1();t.endQueryEXT(t.TIME_ELAPSED_EXT)}else{var e=this.gl,n=this.getQueryTimerExtensionWebGL2();e.endQuery(n.TIME_ELAPSED_EXT)}},r.prototype.waitForQueryAndGetTime=function(t){return Y(this,void 0,void 0,function(){var e=this;return J(this,function(n){switch(n.label){case 0:return[4,Lu(function(){return e.disposed||e.isQueryAvailable(t,L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))})];case 1:return n.sent(),[2,this.getQueryTime(t,L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))]}})})},r.prototype.getQueryTime=function(t,e){if(e===0)return null;if(e===2){var n=this.gl;return n.getQueryParameter(t,n.QUERY_RESULT)/1e6}var o=this.getQueryTimerExtensionWebGL1();return o.getQueryObjectEXT(t,o.QUERY_RESULT_EXT)/1e6},r.prototype.isQueryAvailable=function(t,e){if(e===0)return!0;if(e===2){var n=this.gl,o=this.getQueryTimerExtensionWebGL2(),a=n.getQueryParameter(t,n.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),a&&!this.disjoint}return a=(o=this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(t,o.QUERY_RESULT_AVAILABLE_EXT),this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),a&&!this.disjoint},r.prototype.pollFence=function(t){var e=this;return new Promise(function(n){e.addItemToPoll(function(){return t.isFencePassed()},function(){return n()})})},r.prototype.pollItems=function(){for(var t=function(n){for(var o=0;o<n.length&&n[o]();++o);return o-1}(this.itemsToPoll.map(function(n){return n.isDoneFn})),e=0;e<=t;++e)(0,this.itemsToPoll[e].resolveFn)();this.itemsToPoll=this.itemsToPoll.slice(t+1)},r.prototype.addItemToPoll=function(t,e){var n=this;this.itemsToPoll.push({isDoneFn:t,resolveFn:e}),this.itemsToPoll.length>1||Lu(function(){return n.pollItems(),n.itemsToPoll.length===0})},r.prototype.bindTextureToFrameBuffer=function(t){this.throwIfDisposed(),ii(this.gl,this.debug,t,this.framebuffer),this.debug&&Io(this.gl)},r.prototype.unbindTextureToFrameBuffer=function(){this.outputTexture!=null?(ii(this.gl,this.debug,this.outputTexture,this.framebuffer),this.debug&&Io(this.gl)):ju(this.gl,this.debug,this.framebuffer)},r.prototype.downloadMatrixDriver=function(t,e){this.bindTextureToFrameBuffer(t);var n=e();return this.unbindTextureToFrameBuffer(),n},r.prototype.setOutputMatrixTextureDriver=function(t,e,n){this.throwIfDisposed();var o=this.gl;ii(o,this.debug,t,this.framebuffer),this.debug&&Io(o),this.outputTexture=t,ne(o,this.debug,function(){return o.viewport(0,0,e,n)}),ne(o,this.debug,function(){return o.scissor(0,0,e,n)})},r.prototype.setOutputMatrixWriteRegionDriver=function(t,e,n,o){var a=this;this.throwIfDisposed(),ne(this.gl,this.debug,function(){return a.gl.scissor(t,e,n,o)})},r.prototype.throwIfDisposed=function(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")},r.prototype.throwIfNoProgram=function(){if(this.program==null)throw new Error("No GPU program is currently set.")},r}();function oc(r,t){if(r.length!==t.length)throw Error("Binary was compiled with "+r.length+" inputs, but was executed with "+t.length+" inputs");r.forEach(function(e,n){var o=e.logicalShape,a=t[n],i=a.shape;if(!Xe(o,i))throw Error("Binary was compiled with different shapes than the current args. Shapes "+o+" and "+i+" must match");if(!e.isUniform||!a.isUniform){var s=e.texShape,u=a.isUniform?null:a.texData.texShape;if(!Xe(s,u))throw Error("Binary was compiled with different texture shapes than the current args. Shape "+s+" and "+u+" must match")}})}var rg=function(r,t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r;for(var n=e.filterWidth,o=e.inChannels,a=e.strideWidth,i=e.strideHeight,s=e.padInfo,u=e.outWidth,c=e.dilationWidth,l=e.dilationHeight,f=e.dataFormat,h=s.left,d=s.top,p=o*n,m=nt(),v=f==="channelsLast",g=v?0:1,x=v?1:2,w="",y=0;y<=1;y++)for(var b=0;b<=1;b++)w+=`
          blockIndex = rc.y + `+b+`;
          pos = rc.x + `+y+`;

          if(blockIndex < `+r[1]+" && pos < "+r[0]+`) {
            offsetY = int(blockIndex / (`+u+")) * "+i+" - "+d+`;
            d0 = offsetY + `+l+" * (pos / "+p+`);

            if(d0 < `+t[g]+` && d0 >= 0) {

              offsetX = int(mod(float(blockIndex), `+u+".) * "+a+". - "+h+`.);
              d1 = offsetX + `+c+" * (int(mod(float(pos), "+p+".) / "+o+`.));

              if(d1 < `+t[x]+` && d1 >= 0) {

                ch = int(mod(float(pos), `+o+`.));

                if (`+v+`) {
                  innerDims = vec2(d1, ch);
                  result[`+(2*y+b)+`] = getChannel(
                    getA(d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[`+(2*y+b)+`] = getChannel(
                    getA(ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec2 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        `+w+`

        `+m.output+` = result;
      }
    `},og=function(r,t,e,n,o){this.variableNames=["x"],this.outputShape=[];var a,i=t,s=r[3]-1;this.outputShape=r;var u="float("+e+") + float("+n+") * sum";a=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -`+i+"; j <= "+i+`; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  `+s+`) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * `+a+`;
        setOutput(val);
      }
    `},ag=function(r,t,e,n,o){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=r,this.depth=r[3],this.depthRadius=t,this.bias=e,this.alpha=n,this.beta=o,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < `+this.depth+`; ++d) {
          int depthBegin = int(max(0.0, float(d - `+t+`)));
          int depthEnd = int(min(float(`+this.depth+`),
              float(d + `+t+` + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = `+this.depth+`;

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(`+n+") * norm + float("+e+`);

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(`+n+`)
                * float(`+o+`)
                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * `+o+`);
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `},ig=function(r,t,e,n,o){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;var a,i=t,s=r[3]-1;this.outputShape=r;var u="float("+e+") + float("+n+") * sum";a=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < `+this.outputShape[3]+`;
        bool hasNextRow = c < `+this.outputShape[2]+`;

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - `+i+`;
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - `+i+"; j <= "+i+`; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(`+s+`));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * `+a+`;
        setOutput(result);
      }
    `},sg=function(r){this.variableNames=["dy","maxPos"],this.outputShape=r.inShape;var t=r.strideHeight,e=r.strideWidth,n=r.dilationHeight,o=r.effectiveFilterHeight,a=r.effectiveFilterWidth,i=o-1-r.padInfo.top,s=a-1-r.padInfo.left,u=o*a-1;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+o+`;
          wR += `+n+`) {
          float dyR = float(dyRCorner + wR) / `+t+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+a+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+e+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = `+u+` - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * `+a+` + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `},ug=function(r){this.variableNames=["dy","maxPos"],this.outputShape=r.inShape;var t=r.strideDepth,e=r.strideHeight,n=r.strideWidth,o=r.dilationDepth,a=r.dilationHeight,i=r.dilationWidth,s=r.effectiveFilterDepth,u=r.effectiveFilterHeight,c=r.effectiveFilterWidth,l=s-1-r.padInfo.front,f=u-1-r.padInfo.top,h=c-1-r.padInfo.left,d=s*u*c-1;this.userCode=`
      const ivec3 pads = ivec3(`+l+", "+f+", "+h+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+s+`;
           wD += `+o+`) {
          float dyD = float(dyDCorner + wD) / `+t+`.0;

          if (dyD < 0.0 || dyD >= `+r.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+u+`;
              wR += `+a+`) {
            float dyR = float(dyRCorner + wR) / `+e+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+c+`;
                wC += `+i+`) {
              float dyC = float(dyCCorner + wC) / `+n+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = `+d+` -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * `+u+" * "+c+` +
                  wR * `+c+` + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `},fi=function(r,t,e,n,o,a,i){e===void 0&&(e=!1),n===void 0&&(n=!1),o===void 0&&(o=!1),a===void 0&&(a=null),i===void 0&&(i=!1),this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t;var s=e?r[1]:r[2],u=Math.ceil(s/2),c=e?"i * 2, rc.y":"rc.y, i * 2",l=n?"rc.z, i * 2":"i * 2, rc.z",f=e?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],h=n?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"],d="",p="";a&&(d=i?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+a+`
        }`:`vec4 activation(vec4 x) {
          `+a+`
        }`,p="result = activation(result);");var m=o?"result += getBiasAtOutCoords();":"";o&&this.variableNames.push("bias"),i&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+d+`

      const float sharedDimension = `+u+`.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < `+u+`; i++) {
          vec4 a = getMatrixA(rc.x, `+c+`);
          vec4 b = getMatrixB(rc.x, `+l+`);

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (`+f[0]+" * "+h[0]+`);
          result += (`+f[1]+" * "+h[1]+`);
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        `+m+`

        `+p+`

        setOutput(result);
      }
    `},cg=function(){function r(t,e,n){this.variableNames=["probs"],this.outputShape=[t,n],this.userCode=`
      uniform float seed;

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < `+(e-1)+`; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(`+(e-1)+`));
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;return function(n,o){e.seedLoc==null&&(e.seedLoc=n.getUniformLocation(o,"seed")),n.gl.uniform1f(e.seedLoc,t)}},r}(),lg=function(r,t,e,n){this.variableNames=["indices"],this.outputShape=[r,t],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(`+n+"), float("+e+`),
                      float(index == coords.y)));
      }
    `},fg=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=r;var t=r.length;if(t===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{var e=ht("rc",t),n=Te(t),o=function(s,u,c){if(s===1)return"rc > "+u[0];for(var l="",f=s-2;f<s;f++)l+=c[f]+" >= "+u[f],f<s-1&&(l+="||");return l}(t,r,e),a=function(s,u,c,l){if(s===1)return"";var f=l.slice(-2);return`
    int r = `+f[0]+`;
    int c = `+f[1]+`;
    int rp1 = r + 1;
    int cp1 = c + 1;

    bool cEdge = cp1 >= `+u+`;
    bool rEdge = rp1 >= `+c+`;
  `}(t,r[r.length-1],r[r.length-2],e),i=function(s,u){var c=s.length,l=function(f,h){for(var d=[],p=0;p<=1;p++)for(var m=0;m<=1;m++){for(var v=(p===0?"r":"rp1")+", "+(m===0?"c":"cp1"),g=2;g<f;g++)v=h[h.length-1-g]+","+v;d.push(v)}return d}(c,u);return c===1?`getA(rc),
            rc + 1 >= `+s[0]+` ? 0. : getA(rc + 1),
            0, 0`:"getA("+l[0]+`),
          cEdge ? 0. : getA(`+l[1]+`),
          rEdge ? 0. : getA(`+l[2]+`),
          rEdge || cEdge ? 0. : getA(`+l[3]+")"}(r,e);this.userCode=`
        void main() {
          `+n+` rc = getOutputCoords();

          if(`+o+`) {
            setOutput(vec4(0));
          } else {
            `+a+`

            setOutput(vec4(`+i+`));
          }
        }
      `}},hg=function(r,t,e){this.variableNames=["x"],this.outputShape=t.map(function(u,c){return u[0]+r[c]+u[1]});var n=r.length,o=Te(n),a=t.map(function(u){return u[0]}).join(","),i=t.map(function(u,c){return u[0]+r[c]}).join(","),s=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,n);this.userCode=n!==1?`
      `+o+" start = "+o+"("+a+`);
      `+o+" end = "+o+"("+i+`);

      void main() {
        `+o+` outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(float(`+e+`));
        } else {
          `+o+` coords = outC - start;
          setOutput(getX(`+s+`));
        }
      }
    `:`
        int start = `+a+`;
        int end = `+i+`;

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(float(`+e+`));
          } else {
            setOutput(getX(outC - start));
          }
        }
      `},dg=function(r,t,e){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map(function(v,g){return v[0]+r[g]+v[1]});for(var n=r.length,o=Te(n),a=t.map(function(v){return v[0]}).join(","),i=t.map(function(v,g){return v[0]+r[g]}).join(","),s=ht("rc",n),u=ht("source",n),c=s[n-1]+" < "+this.outputShape[n-1],l=n===1?"source":"vec2("+u.slice(-2).join()+")",f=[o+" rc = outputLoc;",s[n-1]+` += 1;
       if(`+c+`) {
      `,n===1?"":`}
       rc = outputLoc;
       `+s[n-2]+` += 1;
       if(`+s[n-2]+" < "+this.outputShape[n-2]+") {",n===1?"":"  "+s[n-1]+` += 1;
         if(`+c+") {"],h=n===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))",d="",p=0,m=n===1?2:4;p<m;p++)d+=`
        `+f[p]+`
        if (`+h+`) {
          result[`+p+"] = float("+e+`);
        } else {
          `+o+` source = rc - start;
          result[`+p+"] = getChannel(getX("+u.join()+"), "+l+`);
        }
      `;d+=n===1?"} ":"}}",this.userCode=`
      const `+o+" start = "+o+"("+a+`);
      const `+o+" end = "+o+"("+i+`);

      void main() {
        `+o+` outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        `+d+`
        setOutput(result);
      }
    `},hi=function(r,t,e){if(this.variableNames=["x"],t==="avg"&&e)throw new Error("Cannot compute positions for average pool.");var n=r.filterWidth,o=r.strideHeight,a=r.strideWidth,i=r.dilationHeight,s=r.dilationWidth,u=r.effectiveFilterHeight,c=r.effectiveFilterWidth,l=r.padInfo.top,f=r.padInfo.left;this.outputShape=r.outShape;var h=t==="avg",d="0.0";if(h||(d="-1.0 / 1e-20"),e)this.userCode=`
        const ivec2 strides = ivec2(`+o+", "+a+`);
        const ivec2 pads = ivec2(`+l+", "+f+`);

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < `+u+`;
              wR += `+i+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+c+`;
                wC += `+s+`) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = wR * `+c+` + wC;
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var p=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="avg"&&(p="avgValue / count");var m=4*Math.floor(n/4),v=n%4,g=`
      if (`+h+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(`+o+", "+a+`);
      const ivec2 pads = ivec2(`+l+", "+f+`);
      const float initializationValue = `+d+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= `+r.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+d+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < `+u+`;
            wR += `+i+`) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= `+r.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+m+`; wC += 4) {
            int xC = xCCorner + wC * `+s+`;

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              getValue(batch, xR, xC + 3 * `+s+`, d)
            );

            `+g+`
          }

          int xC = xCCorner + `+m+`;
          if (`+(v===1)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            `+g+`
          } else if (`+(v===2)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              initializationValue,
              initializationValue
            );

            `+g+`
          } else if (`+(v===3)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              initializationValue
            );

            `+g+`
          }
        }
        setOutput(`+p+`);
      }
    `}},di=function(r,t,e){if(this.variableNames=["x"],t==="avg"&&e)throw new Error("Cannot compute positions for average pool.");var n=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.effectiveFilterDepth,f=r.effectiveFilterHeight,h=r.effectiveFilterWidth,d=r.padInfo.front,p=r.padInfo.top,m=r.padInfo.left;this.outputShape=r.outShape;var v=t==="avg",g="0.0";if(v||(g="-1.0 / 1e-20"),e)this.userCode=`
        const ivec3 strides =
            ivec3(`+o+", "+a+", "+i+`);
        const ivec3 pads = ivec3(`+d+", "+p+", "+m+`);

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < `+l+`;
              wD += `+s+`) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= `+r.inDepth+`) {
              continue;
            }

            for (int wR = 0; wR < `+f+`;
                wR += `+u+`) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= `+r.inHeight+`) {
                continue;
              }

              for (int wC = 0; wC < `+h+`;
                  wC += `+c+`) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= `+r.inWidth+`) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition =
                      wD * `+f+" * "+h+` +
                      wR * `+h+` + wC;;
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var x=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="avg"&&(x="avgValue / count");var w=4*Math.floor(n/4),y=n%4,b=`
      if (`+v+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(`+o+", "+a+", "+i+`);
      const ivec3 pads = ivec3(`+d+", "+p+", "+m+`);
      const float initializationValue = `+g+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= `+r.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+g+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= `+r.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+f+`;
            wR += `+u+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+w+`; wC += 4) {
              int xC = xCCorner + wC * `+c+`;

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                getValue(batch, xD, xR, xC + 3 * `+c+`, ch)
              );

              `+b+`
            }

            int xC = xCCorner + `+w+`;
            if (`+(y===1)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              `+b+`
            } else if (`+(y===2)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                initializationValue,
                initializationValue
              );

              `+b+`
            } else if (`+(y===3)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                initializationValue
              );

              `+b+`
            }
          }
          setOutput(`+x+`);
        }
      }
    `}},pg=function(r,t){this.variableNames=["x"];var e=r.windowSize,n=r.batchSize,o=r.inSize,a=Math.ceil(o/e);this.outputShape=[n,a];var i="0.0",s="";t==="prod"?i="1.0":t==="min"?(i="1.0 / 1e-20",s="min"):t==="max"&&(i="-1.0 / 1e-20",s="max");var u=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="sum"?u="sumValue":t==="prod"?u="prodValue":t==="all"?u="allValue":t==="any"&&(u="anyValue");var c=4*Math.floor(e/4),l=e%4,f=`
      if (`+(t==="sum")+`) {
        sumValue += dot(values, ones);
      } else if (`+(t==="prod")+`) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = `+s+`(values, minMaxValue);
      }
    `,h="vec4";t==="all"?(i="1.0",f=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,h="bvec4"):t==="any"&&(i="0.0",f=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,h="bvec4");var d="";o%e>0&&(d=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = `+i+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        `+d+`
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+e+`;

        vec4 minMaxValue = vec4(`+i+`);
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < `+c+`; i += 4) {
          int inIdx = inOffset + i;
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          `+f+`
        }

        int inIdx = inOffset + `+c+`;
        if (`+(l===1)+`) {
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          `+f+`
        } else if (`+(l===2)+`) {
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          `+f+`
        } else if (`+(l===3)+`) {
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          `+f+`
        }
        setOutput(`+u+`);
      }
    `},vg=function(r,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r;for(var e="",n=0;n<4;n++){var o="thisRC = rc;";n%2==1&&(o+="thisRC.z += 1;"),n>1&&(o+="thisRC.y += 1;"),e+=`
        `+o+`
        `+(n>0?"if(thisRC.y < rows && thisRC.z < cols){":"")+`
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[`+n+`] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        `+(n>0?"}":"")+`
      `}this.userCode=`
      
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      `+Xn(["r","c","d"],t)+`
      return ivec3(r, c, d);
    }
  
      `+Ts(r)+`

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = `+r[1]+`;
        int cols = `+r[2]+`;

        `+e+`

        setOutput(result);
      }
    `},mg=function(r,t,e){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var n=t.shape,o=n[1],a=n[2],i=r.shape,s=i[1],u=i[2],c=[e&&s>1?o-1:o,e&&u>1?a-1:a],l=[e&&s>1?s-1:s,e&&u>1?u-1:u],f=c[0]/l[0],h=c[1]/l[1],d=1/f,p=1/h,m=2*Math.ceil(d)+2,v=2*Math.ceil(p)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+f+`);
        const float widthScale = float(`+h+`);

        const float invHeightScale = float(`+d+`);
        const float invWidthScale = float(`+p+`);

        const int winHeight = int(`+m+`);
        const int winWidth = int(`+v+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), `+(o-1)+`.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), `+(a-1)+`.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},gg=function(r,t,e,n){this.variableNames=["A"],this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,t,e,s];var u=[n&&t>1?a-1:a,n&&e>1?i-1:i],c=[n&&t>1?t-1:t,n&&e>1?e-1:e];this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+a+".0, "+i+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `},yg=function(r,t,e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,t,e,s];var u=[n&&t>1?a-1:a,n&&e>1?i-1:i],c=[n&&t>1?t-1:t,n&&e>1?e-1:e];this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`,
          `+u[1]/c[1]+`);
      const vec3 inputShapeRC = vec3(`+a+".0, "+i+`.0,
                                     `+i+`.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = vec3(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(sourceFracIndexRC);
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < `+(s-1)+`;
        bool hasNextRow = coords.z < `+(e-1)+`;

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `},xg=function(r,t,e){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var n=t.shape,o=n[1],a=n[2],i=r.shape,s=i[1],u=i[2],c=[e&&s>1?o-1:o,e&&u>1?a-1:a],l=[e&&s>1?s-1:s,e&&u>1?u-1:u],f=c[0]/l[0],h=c[1]/l[1],d=1/f,p=1/h,m=2*Math.ceil(d)+2,v=2*Math.ceil(p)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+f+`);
        const float widthScale = float(`+h+`);

        const float invHeightScale = float(`+d+`);
        const float invWidthScale = float(`+p+`);

        const int winHeight = int(`+m+`);
        const int winWidth = int(`+v+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float sourceFracRow =
              float(`+c[0]+`) *
                (float(dyR) / float(`+l[0]+`));

            float sourceFracCol =
                float(`+c[1]+`) *
                  (float(dyC) / float(`+l[1]+`));

            int sourceNearestRow = int(min(
                float(int(`+o+`) - 1),
                `+e+` ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(`+a+`) - 1),
                `+e+` ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},bg=function(r,t,e,n){this.variableNames=["A"],this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,t,e,s];var u=[n&&t>1?a-1:a,n&&e>1?i-1:i],c=[n&&t>1?t-1:t,n&&e>1?e-1:e],l=n?"0.5":"0.0";this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+a+".0, "+i+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + `+l+`)));

        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `},wg=function(r,t){this.variableNames=["x"];var e=r.length;if(e>4)throw new Error("WebGL backend: Reverse of rank-"+e+" tensor is not yet supported");if(this.outputShape=r,e!==1){var n=r.map(function(a,i){return function(s){return t.indexOf(s)!==-1&&r[s]!==1?r[s]+" - coords["+s+"] - 1":"coords["+s+"]"}(i)}).join(","),o=Te(e);this.userCode=`
      void main() {
        `+o+` coords = getOutputCoords();
        setOutput(getX(`+n+`));
      }
    `}else this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(`+r[0]+` - coord - 1));
        }
      `},_g=function(r,t){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;var e=r.length;if(e>4)throw new Error("WebGL backend: Reverse of rank-"+e+" tensor is not yet supported");this.outputShape=r;var n=ht("rc",e),o=n[e-1]+" + 1 < "+this.outputShape[e-1],a=n[e-2]+" + 1 < "+this.outputShape[e-2],i=Te(e);function s(u){var c=r.map(function(l,f){return function(h,d){return t.indexOf(h)!==-1&&r[h]!==1?r[h]+" - "+d[h]+" - 1":""+d[h]}(f,u)});return"getChannel(getX("+c.join(",")+"), vec2("+c.slice(-2).join(",")+"))"}this.userCode=e===1?`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(`+r[0]+` - rc - 1),
            `+r[0]+` - rc - 1);
          if(`+o+`){
              result.g = getChannel(getX(`+r[0]+` - (rc  + 1) - 1),
                `+r[0]+` - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:`
        void main() {
          `+i+` rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = `+function(u){return s(u)}(n.slice())+`;
          if(`+o+`){
            result.g = `+function(u){return u[e-1]="("+u[e-1]+" + 1)",s(u)}(n.slice())+`;
          }
          if(`+a+`) {
            result.b = `+function(u){return u[e-2]="("+u[e-2]+" + 1)",s(u)}(n.slice())+`;
            if(`+o+`) {
              result.a = `+function(u){return u[e-1]="("+u[e-1]+" + 1)",u[e-2]="("+u[e-2]+" + 1)",s(u)}(n.slice())+`;
            }
          }
          setOutput(result);
        }
    `},ac=function(r,t,e,n,o,a,i){this.variableNames=["updates","indices","defaultValue"],this.outputShape=a;var s=Te(o.length),u=Te(a.length),c="";e===1?c="i":e===2&&(c="i, j");var l="getIndices("+c+")",f="";n===1?f="i":n===2&&(f="i, coords[1]");var h="getUpdates("+f+")",d=t>1?"strides[j]":"strides";this.userCode=`
        `+s+" strides = "+s+"("+o+`);

        void main() {
          `+u+` coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < `+r+`; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < `+t+`; j++) {
              int index = round(`+l+`);
              flattenedIndex += index * `+d+`;
            }
            if (flattenedIndex == coords[0]) {
              sum += `+h+`;
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `},Cg=function(r,t){this.variableNames=["x","segmentIds"];var e=r.windowSize,n=r.batchSize,o=r.inSize,a=r.numSegments,i=a*Math.ceil(o/e);this.outputShape=[n,i];var s=4*Math.floor(e/4),u=e%4,c=`
        sumValue += dot(values, segFilter);
    `,l="";o%e>0&&(l=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `);var f="";o%e>0&&(f=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = 0.0;

      float getValue(int batch, int inIdx) {
        `+l+`
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        `+f+`
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          `+a+")) * float("+e+`));
        int currentSeg = int(mod(float(outIdx), float(`+a+`)));

        float sumValue = 0.0;

        for (int i = 0; i < `+s+`; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          `+c+`
        }

        int inIdx = inOffset + `+s+`;
        if (`+(u===1)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          `+c+`
        } else if (`+(u===2)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          `+c+`
        } else if (`+(u===3)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          `+c+`
        }
        setOutput(sumValue);
      }
    `},Eg=function(r,t,e){var n,o;if(this.variableNames=["c","a","b"],this.outputShape=t,e>4)throw Error("Where for rank "+e+" is not yet supported");if(e===1)o="resRC",n="resRC";else{for(var a=["resRC.x","resRC.y","resRC.z","resRC.w"],i=[],s=[],u=0;u<t.length;u++)s.push(""+a[u]),u<r&&i.push(""+a[u]);n=i.join(),o=s.join()}var c=Te(e);this.userCode=`
      void main() {
        `+c+` resRC = getOutputCoords();
        float cVal = getC(`+n+`);
        if (cVal >= 1.0) {
          setOutput(getA(`+o+`));
        } else {
          setOutput(getB(`+o+`));
        }
      }
    `},Ig=function(){function r(t){this.variableNames=["source"],this.outputShape=t,this.rank=t.length;var e,n=Te(this.rank),o="uniform int start["+this.rank+"];",a=function(i){if(i===1)return"sourceLoc";if(i<=6)return pi.slice(0,i).map(function(s){return"sourceLoc."+s}).join(",");throw Error("Slicing for rank "+i+" is not yet supported")}(this.rank);e=`
        `+n+` sourceLoc;
        `+n+` coords = getOutputCoords();
        `+t.map(function(i,s){return"sourceLoc."+pi[s]+" = start["+s+"] + coords."+pi[s]+";"}).join(`
`)+`
      `,this.userCode=`
      `+o+`
      void main() {
        `+e+`
        setOutput(getSource(`+a+`));
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(n,o){e.startLoc==null&&(e.startLoc=n.getUniformLocationNoThrow(o,"start"),e.startLoc==null)||n.gl.uniform1iv(e.startLoc,t)}},r}(),pi=["x","y","z","w","u","v"],Rg=function(){function r(t){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.rank=t.length;var e=Te(this.rank),n=ht("coords",this.rank),o=ht("sourceLoc",this.rank),a=this.rank===1?"sourceLoc":"vec2("+o.slice(-2).join()+")",i="getChannel(getSource("+o.join()+"), "+a+")",s=`
      result.x = `+i+`;
      if (++`+n[this.rank-1]+" < "+t[this.rank-1]+`) {
        ++`+o[this.rank-1]+`;
        result.y = `+i+`;
        --`+o[this.rank-1]+`;
      }
    `,u=this.rank===1?"":`
      --`+n[this.rank-1]+`;
      if (++`+n[this.rank-2]+" < "+t[this.rank-2]+`) {
        ++`+o[this.rank-2]+`;
        result.z = `+i+`;
        if (++`+n[this.rank-1]+" < "+t[this.rank-1]+`) {
          ++`+o[this.rank-1]+`;
          result.w = `+i+`;
        }
      }
    `,c=this.rank<=4?`sourceLoc = coords +
            `+e+"("+t.map(function(l,f){return"start["+f+"]"}).join()+");":t.map(function(l,f){return o[f]+" = "+n[f]+" + start["+f+"];"}).join(`
`);this.userCode=`
      uniform int start[`+this.rank+`];
      void main() {
        `+e+` coords = getOutputCoords();
        `+e+` sourceLoc;
        `+c+`
        vec4 result = vec4(0.);
        `+s+`
        `+u+`
        setOutput(result);
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(n,o){e.startLoc==null&&(e.startLoc=n.getUniformLocationNoThrow(o,"start"),e.startLoc==null)||n.gl.uniform1iv(e.startLoc,t)}},r}(),kg=function(r,t,e){this.variableNames=["x"],this.outputShape=e;var n=e.length,o=Te(e.length),a=Te(e.length),i="";if(n===1)i="coords * strides + begin";else{var s=0;i=e.map(function(u,c){return s++,e.length===1?"coords * strides["+c+"] + begin["+c+"]":"coords["+(s-1)+"] * strides["+c+"] + begin["+c+"]"}).join(",")}this.userCode=`
      `+o+" begin = "+o+"("+r+`);
      `+o+" strides = "+o+"("+t+`);

      void main() {
        `+a+` coords = getOutputCoords();
        setOutput(getX(`+i+`));
      }
    `},Sg=function(){function r(t){this.gpgpu=t,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}return r.prototype.acquireTexture=function(t,e,n){var o,a=ic(e,n),i=sc(t,a,n);if(i in this.freeTextures||(this.freeTextures[i]=[]),i in this.usedTextures||(this.usedTextures[i]=[]),this.freeTextures[i].length>0){this.numFreeTextures--,this.numUsedTextures++,this.log();var s=this.freeTextures[i].shift();return this.usedTextures[i].push(s),s}return this.numUsedTextures++,this.log(),a===wt.PACKED_2X2_FLOAT32?o=this.gpgpu.createPackedMatrixTexture(t[0],t[1]):a===wt.PACKED_2X2_FLOAT16?o=this.gpgpu.createFloat16PackedMatrixTexture(t[0],t[1]):a===wt.UNPACKED_FLOAT32?o=this.gpgpu.createFloat32MatrixTexture(t[0],t[1]):a===wt.UNPACKED_FLOAT16?o=this.gpgpu.createFloat16MatrixTexture(t[0],t[1]):a===wt.PACKED_4X1_UNSIGNED_BYTE&&(o=this.gpgpu.createUnsignedBytesMatrixTexture(t[0],t[1])),this.usedTextures[i].push(o),o},r.prototype.releaseTexture=function(t,e,n,o){if(this.freeTextures!=null){var a=sc(e,ic(n,o),o);a in this.freeTextures||(this.freeTextures[a]=[]),this.freeTextures[a].push(t),this.numFreeTextures++,this.numUsedTextures--;var i=this.usedTextures[a],s=i.indexOf(t);if(s<0)throw new Error("Cannot release a texture that was never provided by this texture manager");i.splice(s,1),this.log()}},r.prototype.log=function(){if(this.logEnabled){var t=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",this.numFreeTextures+" / "+this.numUsedTextures,"("+t+")")}},r.prototype.getNumUsedTextures=function(){return this.numUsedTextures},r.prototype.getNumFreeTextures=function(){return this.numFreeTextures},r.prototype.dispose=function(){var t=this;if(this.freeTextures!=null){for(var e in this.freeTextures)this.freeTextures[e].forEach(function(n){t.gpgpu.deleteMatrixTexture(n)});for(var e in this.usedTextures)this.usedTextures[e].forEach(function(o){t.gpgpu.deleteMatrixTexture(o)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0}},r}();function ic(r,t){if(r===_t.UPLOAD)return wt.PACKED_2X2_FLOAT32;if(r===_t.RENDER||r==null)return function(e){return L().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?e?wt.PACKED_2X2_FLOAT32:wt.UNPACKED_FLOAT32:e?wt.PACKED_2X2_FLOAT16:wt.UNPACKED_FLOAT16}(t);if(r===_t.DOWNLOAD||r===_t.PIXELS)return wt.PACKED_4X1_UNSIGNED_BYTE;throw new Error("Unknown logical texture type "+r)}function sc(r,t,e){return r[0]+"_"+r[1]+"_"+t+"_"+e}var Dg=function(r,t){this.variableNames=["A"];for(var e=new Array(r.length),n=0;n<e.length;n++)e[n]=r[n]*t[n];this.outputShape=e,this.rank=e.length;var o=Te(this.rank),a=function(i){var s=i.length;if(s>5)throw Error("Tile for rank "+s+" is not yet supported");if(s===1)return"imod(resRC, "+i[0]+")";for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],c=[],l=0;l<i.length;l++)c.push("imod("+u[l]+", "+i[l]+")");return c.join()}(r);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+a+`));
      }
    `},Ag=function(r,t){this.variableNames=["A"];for(var e=new Array(r.length),n=0;n<e.length;n++)e[n]=r[t[n]];this.outputShape=e,this.rank=e.length;var o=Te(this.rank),a=function(i){var s=i.length;if(s>6)throw Error("Transpose for rank "+s+" is not yet supported");for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],c=new Array(s),l=0;l<i.length;l++)c[i[l]]=u[l];return c.join()}(t);this.userCode=`
    void main() {
      `+o+` resRC = getOutputCoords();
      setOutput(getA(`+a+`));
    }
    `},Tg=function(r,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;for(var e=new Array(r.length),n=0;n<e.length;n++)e[n]=r[t[n]];if(this.outputShape=e,this.rank=e.length,this.rank>6)throw Error("Packed transpose for rank "+this.rank+" is not yet supported.");var o=Te(this.rank),a=Ql("rc",this.rank),i=new Array(this.rank);for(n=0;n<t.length;n++)i[t[n]]=a[n];var s="vec2("+i.slice(-2).join()+")",u="++"+a[this.rank-1]+" < "+e[this.rank-1],c="getChannel(getA("+i.join()+"), "+s+")";this.userCode=`
    void main() {
      `+o+` rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = `+c+`;
      if(`+u+`) {
        result[1] = `+c+`;
      }
      --`+a[this.rank-1]+`;
      if(++`+a[this.rank-2]+" < "+e[this.rank-2]+`) {
        result[2] = `+c+`;
        if(`+u+`) {
          result[3] = `+c+`;
        }
      }
      setOutput(result);
    }
    `},Ns=1.7580993408473768,Fs=1.0507009873554805,ve=function(r,t){this.variableNames=["A"],this.outputShape=r,this.userCode=`
      float unaryOperation(float x) {
        `+t+`
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `},Vt="if (isnan(x)) return x;",Ng="return x;",uc="return abs(x);",rf=Vt+`
  return (x < 0.0) ? 0.0 : x;
`,of=Vt+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,af="return (x >= 0.0) ? x : (exp(x) - 1.0);",Fg=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = `+Ns+`;
  float scale = `+Fs+`;
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,cc="return -x;",lc="return ceil(x);",fc="return floor(x);",hc="return exp(x);",dc="return exp(x) - 1.0;",Pg=Vt+`
  return sin(x);
`,Mg=Vt+`
  return cos(x);
`,Og=Vt+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,Bg=Vt+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,Lg=Vt+`
  return atan(x);
`,Wg=Vt+"return log(x + sqrt(x * x + 1.0));",zg=Vt+`
  if (x < 1.0) return NAN;
  return log(x + sqrt(x * x - 1.0));`,Ug=Vt+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
  return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,Do="return x;",Vg="return x;",sf=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,uf=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,cf=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,Hr=function(r,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r,this.userCode=`
      vec4 unaryOperation(vec4 x) {
        `+t+`
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `},Gg=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=r;var t=r.length,e=ht("rc",t),n=Te(t),o=function(s,u){if(s===1)return"rc";for(var c="",l=0;l<s;l++)c+=u[l],l<s-1&&(c+=",");return c}(t,e),a=e.slice(-2),i=t<=1?"rc":"vec2("+a.join(",")+")";this.userCode=`
      void main() {
        `+n+` rc = getOutputCoords();
        vec4 packedInput = getA(`+o+`);

        setOutput(getChannel(packedInput, `+i+`));
      }
    `},Ao={};function To(r,t){if(t===void 0&&(t=!1),r==="linear")return t?Vg:Ng;if(r==="relu")return t?sf:rf;if(r==="elu")return t?cf:af;if(r==="relu6")return t?uf:of;if(r==="prelu")return t?nf:tf;throw new Error("Activation "+r+" has not been implemented for the WebGL backend.")}var Hg=600,jg=function(r){function t(e){var n,o=r.call(this)||this;if(o.pendingRead=new WeakMap,o.pendingDisposal=new WeakSet,o.dataRefCount=new WeakMap,o.numBytesInGPU=0,o.uploadWaitMs=0,o.downloadWaitMs=0,o.warnedAboutMemory=!1,o.pendingDeletes=0,o.disposed=!1,!L().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");if(e==null){var a=sn(L().getNumber("WEBGL_VERSION"));o.binaryCache=((n=L().getNumber("WEBGL_VERSION"))in Ao||(Ao[n]={}),Ao[n]),o.gpgpu=new ng(a),o.canvas=a.canvas,o.gpgpuCreatedLocally=!0}else o.gpgpu=e,o.binaryCache={},o.gpgpuCreatedLocally=!1,o.canvas=e.gl.canvas;return o.textureManager=new Sg(o.gpgpu),o.numMBBeforeWarning=L().global.screen==null?1024:L().global.screen.height*L().global.screen.width*window.devicePixelRatio*Hg/1024/1024,o.texData=new Gl(o,N),o}return Ut(t,r),t.prototype.numDataIds=function(){return this.texData.numDataIds()+(this.cpuBackend?this.cpuBackend.numDataIds():0)-this.pendingDeletes},t.prototype.write=function(e,n,o){if(L().getBool("DEBUG")&&this.checkNumericalProblems(e),o==="complex64"&&e!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");var a={};return this.texData.set(a,{shape:n,dtype:o,values:e,usage:_t.UPLOAD}),a},t.prototype.move=function(e,n,o,a){if(L().getBool("DEBUG")&&this.checkNumericalProblems(n),a==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(e,{shape:o,dtype:a,values:n,usage:_t.UPLOAD})},t.prototype.readSync=function(e){var n=this.texData.get(e),o=n.values,a=n.dtype,i=n.complexTensors,s=n.slice,u=n.shape,c=n.isPacked;if(s!=null){var l=void 0;l=c?new Hr(u,Do):new ve(u,Do);var f=this.runWebGLProgram(l,[{dataId:e,shape:u,dtype:a}],a),h=this.readSync(f.dataId);return this.disposeData(f.dataId),h}if(o!=null)return this.convertAndCacheOnCPU(e);if(a==="string")return o;var d,p,m=this.activeTimers!=null;return m&&(d=Kt()),a==="complex64"?p=ji(i.real.dataSync(),i.imag.dataSync()):p=this.getValuesFromTexture(e),m&&(this.downloadWaitMs+=Kt()-d),this.convertAndCacheOnCPU(e,p)},t.prototype.read=function(e){return Y(this,void 0,void 0,function(){var n,o,a,i,s,u,c,l,f,h,d,p,m,v,g,x,w,y,b,_,E,I;return J(this,function(R){switch(R.label){case 0:if(this.pendingRead.has(e))return n=this.pendingRead.get(e),[2,new Promise(function(k){return n.push(k)})];if(o=this.texData.get(e),a=o.values,i=o.shape,s=o.slice,u=o.dtype,c=o.complexTensors,l=o.isPacked,s!=null)return f=void 0,f=l?new Hr(i,Do):new ve(i,Do),h=this.runWebGLProgram(f,[{dataId:e,shape:i,dtype:u}],u),d=this.read(h.dataId),this.disposeData(h.dataId),[2,d];if(a!=null)return[2,this.convertAndCacheOnCPU(e)];if(!L().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&L().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");return p=null,u!=="complex64"&&L().get("WEBGL_BUFFER_SUPPORTED")&&(m=this.decode(e),v=this.texData.get(m.dataId),p=(I=this.gpgpu).createBufferFromTexture.apply(I,[v.texture].concat(Xr(i)))),this.pendingRead.set(e,[]),u==="complex64"?[3,2]:[4,this.gpgpu.createAndWaitForFence()];case 1:R.sent(),R.label=2;case 2:return u!=="complex64"?[3,4]:[4,Promise.all([c.real.data(),c.imag.data()])];case 3:return x=R.sent(),w=x[0],y=x[1],g=ji(w,y),[3,5];case 4:p==null?g=this.getValuesFromTexture(e):(b=ee(i),g=this.gpgpu.downloadFloat32MatrixFromBuffer(p,b)),R.label=5;case 5:return m!=null&&this.disposeData(m.dataId),_=this.convertAndCacheOnCPU(e,g),E=this.pendingRead.get(e),this.pendingRead.delete(e),E.forEach(function(k){return k(_)}),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e),this.pendingDeletes--),[2,_]}})})},t.prototype.checkNumericalProblems=function(e){if(e!=null)for(var n=0;n<e.length;n++){var o=e[n];if(!Fp(o))throw L().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error("The value "+o+" cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'"):Error("The value "+o+" cannot be represented on this device.")}},t.prototype.getValuesFromTexture=function(e){var n,o=this.texData.get(e),a=o.shape,i=o.dtype,s=o.isPacked,u=ee(a);if(L().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){var c=this.decode(e),l=this.texData.get(c.dataId),f=(n=this.gpgpu).downloadMatrixFromPackedTexture.apply(n,[l.texture].concat(Xr(a))).subarray(0,u);return this.disposeData(c.dataId),f}var h=L().getBool("WEBGL_PACK")&&s===!0,d=h?si(a):a,p=h?new Nm(d):new Tm(d),m=this.runWebGLProgram(p,[{shape:d,dtype:i,dataId:e}],"float32"),v=this.texData.get(m.dataId),g=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(v.texture,v.texShape[0],v.texShape[1]).subarray(0,u);return this.disposeData(m.dataId),g},t.prototype.time=function(e){return Y(this,void 0,void 0,function(){var n,o,a,i,s,u,c;return J(this,function(l){switch(l.label){case 0:return n=this.activeTimers,o=[],a=!1,this.programTimersStack==null?(this.programTimersStack=o,a=!0):this.activeTimers.push(o),this.activeTimers=o,e(),i=Ar(this.activeTimers.map(function(f){return f.query})).filter(function(f){return f!=null}),s=Ar(this.activeTimers.map(function(f){return f.name})).filter(function(f){return f!=null}),this.activeTimers=n,a&&(this.programTimersStack=null),u={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null},L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[4,Promise.all(i)]:[3,2];case 1:return c=l.sent(),u.kernelMs=dp(c),u.getExtraProfileInfo=function(){return c.map(function(f,h){return{name:s[h],ms:f}}).map(function(f){return f.name+": "+f.ms}).join(", ")},[3,3];case 2:u.kernelMs={error:"WebGL query timers are not supported in this environment."},l.label=3;case 3:return this.uploadWaitMs=0,this.downloadWaitMs=0,[2,u]}})})},t.prototype.memory=function(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU}},t.prototype.startTimer=function(){return L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:Kt(),endMs:null}},t.prototype.endTimer=function(e){return L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),e):(e.endMs=Kt(),e)},t.prototype.getQueryTime=function(e){return Y(this,void 0,void 0,function(){var n;return J(this,function(o){return L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[2,this.gpgpu.waitForQueryAndGetTime(e)]:[2,(n=e).endMs-n.startMs]})})},t.prototype.disposeData=function(e){if(!this.pendingDisposal.has(e)){if(this.pendingRead.has(e))return this.pendingDisposal.add(e),void this.pendingDeletes++;if(this.texData.has(e)){this.releaseGPUData(e);var n=this.texData.get(e).complexTensors;n!=null&&(n.real.dispose(),n.imag.dispose()),this.texData.delete(e)}}},t.prototype.releaseGPUData=function(e){var n=this.texData.get(e),o=n.texture,a=n.dtype,i=n.texShape,s=n.usage,u=n.isPacked,c=n.slice,l=c&&c.origDataId||e,f=this.dataRefCount.get(l);f>1?this.dataRefCount.set(l,f-1):(this.dataRefCount.delete(l),o!=null&&(this.numBytesInGPU-=this.computeBytes(i,a),this.textureManager.releaseTexture(o,i,s,u)));var h=this.texData.get(e);h.texture=null,h.texShape=null,h.isPacked=!1,h.slice=null},t.prototype.getTexture=function(e){return this.uploadToGPU(e),this.texData.get(e).texture},t.prototype.getDataInfo=function(e){return this.texData.get(e)},t.prototype.getCPUBackend=function(){return L().getBool("WEBGL_CPU_FORWARD")?(this.cpuBackend==null&&(this.cpuBackend=N.findBackend("cpu")),this.cpuBackend):null},t.prototype.shouldExecuteOnCPU=function(e,n){var o=this;return n===void 0&&(n=128),this.getCPUBackend()!=null&&e.every(function(a){return o.texData.get(a.dataId).texture==null&&a.size<n})},t.prototype.getGPGPUContext=function(){return this.gpgpu},t.prototype.complex=function(e,n){var o=this.makeOutput(e.shape,"complex64");return this.texData.get(o.dataId).complexTensors={real:N.keep(e.clone()),imag:N.keep(n.clone())},o},t.prototype.real=function(e){return this.texData.get(e.dataId).complexTensors.real.clone()},t.prototype.imag=function(e){return this.texData.get(e.dataId).complexTensors.imag.clone()},t.prototype.slice=function(e,n,o){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.slice(e,n,o);if(ee(o)===0)return Ze([],o,e.dtype);var a=this.texData.get(e.dataId).isPacked,i=Ul(e.shape,n,o);if(a||!i){var s=L().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Rg(o):new Ig(o),u=s.getCustomSetupFunc(n);return this.compileAndRun(s,[e],null,u)}return this.uploadToGPU(e.dataId),this.shallowSlice(e,n,o)},t.prototype.shallowSlice=function(e,n,o){var a=this.texData.get(e.dataId),i=this.makeOutput(o,e.dtype),s=this.texData.get(i.dataId);Object.assign(s,a),s.shape=o,s.dtype=e.dtype;var u=Vl(n,e.strides);a.slice&&(u+=a.slice.flatOffset),s.slice={flatOffset:u,origDataId:a.slice&&a.slice.origDataId||e.dataId};var c=this.dataRefCount.get(s.slice.origDataId)||1;return this.dataRefCount.set(s.slice.origDataId,c+1),i},t.prototype.stridedSlice=function(e,n,o,a){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.stridedSlice(e,n,o,a);var i=Rs(n,o,a);if(i.some(function(u){return u===0}))return Ze([],i);var s=new kg(n,a,i);return this.compileAndRun(s,[e])},t.prototype.reverse=function(e,n){var o=L().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new _g(e.shape,n):new wg(e.shape,n);return this.compileAndRun(o,[e])},t.prototype.concat=function(e,n){if(e[0].dtype==="complex64"){var o=e.map(function(d){return Nt(d)}),a=e.map(function(d){return Yt(d)});return Je(this.concat(o,n),this.concat(a,n))}if(this.shouldExecuteOnCPU(e))return this.cpuBackend.concat(e,n);if(e.length===1)return e[0];if(e.length>L().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){var i=Math.floor(e.length/2),s=this.concat(e.slice(0,i),n),u=this.concat(e.slice(i),n);return this.concat([s,u],n)}if(L().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&e[0].rank>1){var c=new gm(e.map(function(d){return d.shape}),n);return this.compileAndRun(c,e)}var l=Nr(e.map(function(d){return d.shape}),n),f=e.map(function(d){return d.as2D(-1,ee(d.shape.slice(n)))}),h=new mm(f.map(function(d){return d.shape}));return this.compileAndRun(h,f).reshape(l)},t.prototype.neg=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.neg(e);if(L().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,cc,e.dtype);var n=new ve(e.shape,cc);return this.compileAndRun(n,[e])},t.prototype.batchMatMul=function(e,n,o,a){var i=o?e.shape[2]:e.shape[1],s=a?n.shape[1]:n.shape[2],u=o?e.shape[1]:e.shape[2],c=e.shape[0];if((i===1||s===1)&&u>1e3){o&&(e=e.transpose([0,2,1])),a&&(n=n.transpose([0,2,1]));var l=s===1?e:e.as3D(c,u,1),f=s===1?2:1,h=s===1?n.as3D(c,1,u):n;return this.multiply(l,h).sum(f,!0)}var d=Qe(e.dtype,n.dtype),p=new fi(e.shape,[c,i,s],o,a);return this.compileAndRun(p,[e,n],d)},t.prototype.fusedBatchMatMul=function(e){var n=e.a,o=e.b,a=e.transposeA,i=e.transposeB,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=a?n.shape[2]:n.shape[1],f=i?o.shape[1]:o.shape[2],h=n.shape[0],d=Qe(n.dtype,o.dtype),p=s!=null,m=c!=null,v=u?To(u,!0):null,g=new fi(n.shape,[h,l,f],a,i,p,v,m),x=[n,o];return s&&x.push(s),c&&x.push(c),this.compileAndRun(g,x,d)},t.prototype.multiply=function(e,n){if(e.dtype==="complex64"){var o=this.texData.get(e.dataId),a=this.texData.get(n.dataId),i=new Ju(fm,e.shape,n.shape),s=new Ju(hm,e.shape,n.shape),u=[this.makeComplexComponentTensorInfo(e,o.complexTensors.real),this.makeComplexComponentTensorInfo(e,o.complexTensors.imag),this.makeComplexComponentTensorInfo(n,a.complexTensors.real),this.makeComplexComponentTensorInfo(n,a.complexTensors.imag)],c=this.compileAndRun(i,u),l=this.compileAndRun(s,u),f=this.complex(c,l);return c.dispose(),l.dispose(),f}if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.multiply(e,n);if(L().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,Qu,e.dtype);var h=new Be(Qu,e.shape,n.shape);return this.compileAndRun(h,[e,n],e.dtype)},t.prototype.batchNormalization=function(e,n,o,a,i,s){var u=[e,n,o],c=null;s!=null&&(c=s.shape,u.push(s));var l=null;if(i!=null&&(l=i.shape,u.push(i)),L().getBool("WEBGL_PACK_NORMALIZATION")){var f=new lm(e.shape,n.shape,o.shape,c,l,a);return this.compileAndRun(f,u)}var h=new cm(e.shape,n.shape,o.shape,c,l,a);return this.compileAndRun(h,u)},t.prototype.localResponseNormalization4D=function(e,n,o,a,i){var s=L().getBool("WEBGL_PACK_NORMALIZATION")?new ig(e.shape,n,o,a,i):new og(e.shape,n,o,a,i);return this.compileAndRun(s,[e])},t.prototype.LRNGrad=function(e,n,o,a,i,s,u){var c=new ag(n.shape,a,i,s,u);return this.compileAndRun(c,[n,o,e])},t.prototype.tile=function(e,n){if(e.dtype==="string"){var o=this.readSync(e.dataId).map(function(i){return ta(i)});return Yl(de(e.shape,e.dtype,o),n)}var a=new Dg(e.shape,n);return this.compileAndRun(a,[e])},t.prototype.pad=function(e,n,o){var a=L().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new dg(e.shape,n,o):new hg(e.shape,n,o);return this.compileAndRun(a,[e])},t.prototype.transpose=function(e,n){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.transpose(e,n);var o=L().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Tg(e.shape,n):new Ag(e.shape,n);return this.compileAndRun(o,[e])},t.prototype.gather=function(e,n,o){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.gather(e,n,o);var a=new Lm(e.shape,n.size,o);return this.compileAndRun(a,[e,n])},t.prototype.batchToSpaceND=function(e,n,o){S(e.rank<=4,function(){return"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet"});var a=n.reduce(function(f,h){return f*h}),i=sa(e.shape,n,a),s=ua(i.length,n.length),u=ca(e.shape,n,a),c=Bl(o,n.length),l=Ll(u,o,n.length);return e.reshape(i).transpose(s).reshape(u).slice(c,l)},t.prototype.spaceToBatchND=function(e,n,o){S(e.rank<=4,function(){return"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet"});var a=n.reduce(function(h,d){return h*d}),i=[[0,0]];i.push.apply(i,o);for(var s=1+n.length;s<e.shape.length;++s)i.push([0,0]);var u=e.pad(i),c=sa(u.shape,n,a,!1),l=ua(c.length,n.length,!1),f=ca(u.shape,n,a,!1);return u.reshape(c).transpose(l).reshape(f)},t.prototype.reduce=function(e,n,o){var a=e.shape[0],i=e.shape[1],s=ui(i),u=new pg({windowSize:s,inSize:i,batchSize:a},n),c=this.compileAndRun(u,[e],o);return c.shape[1]===1?c:this.reduce(c,n,o)},t.prototype.argReduce=function(e,n,o){o===void 0&&(o=null);var a=e.shape[0],i=e.shape[1];o!=null&&(a=o.shape[0],i=o.shape[1]);var s=ui(i),u=new em({windowSize:s,inSize:i,batchSize:a},n,o==null),c=[e];o!=null&&c.push(o);var l=this.compileAndRun(u,c,"int32");return l.shape[1]===1?l:this.argReduce(e,n,l)},t.prototype.argReducePacked=function(e,n,o){o===void 0&&(o=null);var a=o!=null?o.shape:e.shape,i=ui(a[a.length-1]),s=new im(a,i,n,o==null),u=o==null?[e]:[e,o],c=this.compileAndRun(s,u,"int32");return c.rank===e.rank?this.argReducePacked(e,n,c):c},t.prototype.sum=function(e,n){bt("sum",n,e.rank);var o=et(e.shape,n),a=o[0],i=ee(o[1]),s=e.as2D(-1,i),u=ei(e.dtype);return this.reduce(s,"sum",u).reshape(a)},t.prototype.prod=function(e,n){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.prod(e,n);var o=et(e.shape,n),a=o[0],i=ee(o[1]),s=e.as2D(-1,i),u=ei(e.dtype);return this.reduce(s,"prod",u).reshape(a)},t.prototype.unsortedSegmentSum=function(e,n,o){var a=0,i=un([a],e.rank),s=e;i!=null&&(s=e.transpose(i),a=cn(1,e.rank)[0]);var u=function(d,p,m){for(var v=[],g=d.length,x=0;x<g;x++)x!==p?v.push(d[x]):v.push(m);return v}(s.shape,a,o),c=ee([s.shape[a]]),l=s.as2D(-1,c),f=ei(e.dtype),h=this.segOpCompute(l,"unsortedSegmentSum",n,f,o).reshape(u);return i!=null&&(h=h.transpose(_s(i))),h},t.prototype.segOpCompute=function(e,n,o,a,i){var s=e.shape[0],u=e.shape[1],c=function(h,d){var p,m=!1;for(h<=zl?(p=h,m=!0):p=Oi(h,Math.floor(Math.sqrt(h)));!m;)p>d||p===h?m=!0:p=Oi(h,p+1);return p}(u,i),l=new Cg({windowSize:c,inSize:u,batchSize:s,numSegments:i}),f=this.compileAndRun(l,[e,o],a);return f.shape[1]===i?f:(o=ia(0,i).tile([u/c]),this.segOpCompute(f,n,o,a,i))},t.prototype.argMinMaxReduce=function(e,n,o){var a=[n];if(bt("arg"+o.charAt(0).toUpperCase()+o.slice(1),a,e.rank),!L().getBool("WEBGL_PACK_REDUCE")||e.rank<=2){var i=et(e.shape,a),s=i[0],u=ee(i[1]),c=e.as2D(-1,u);return this.argReduce(c,o).reshape(s)}return this.argReducePacked(e,o)},t.prototype.argMin=function(e,n){return this.argMinMaxReduce(e,n,"min")},t.prototype.argMax=function(e,n){return this.argMinMaxReduce(e,n,"max")},t.prototype.cumsum=function(e,n,o,a){if(n!==e.rank-1)throw new Error("WebGL cumsum shader expects an inner-most axis="+(e.rank-1)+" but got axis="+n);var i=new Rm(e.shape,o,a);return this.compileAndRun(i,[e])},t.prototype.equal=function(e,n){if(L().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(equal(a, b));
`,"bool");var o=new Be("return float(a == b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.notEqual=function(e,n){if(L().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(notEqual(a, b));
`,"bool");var o=new Be("return float(a != b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.less=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.less(e,n);if(L().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(lessThan(a, b));
`,"bool");var o=new Be("return float(a < b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.lessEqual=function(e,n){if(L().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(lessThanEqual(a, b));
`,"bool");var o=new Be("return float(a <= b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.greater=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.greater(e,n);if(L().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(greaterThan(a, b));
`,"bool");var o=new Be("return float(a > b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.greaterEqual=function(e,n){if(L().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(greaterThanEqual(a, b));
`,"bool");var o=new Be("return float(a >= b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.logicalNot=function(e){var n=new ve(e.shape,"return float(!(x >= 1.0));");return this.compileAndRun(n,[e])},t.prototype.logicalAnd=function(e,n){if(L().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,"bool");var o=new Be("return float(a >= 1.0 && b >= 1.0);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.logicalOr=function(e,n){if(L().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,"bool");var o=new Be("return float(a >= 1.0 || b >= 1.0);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.select=function(e,n,o){var a=new Eg(e.rank,n.shape,n.rank);return this.compileAndRun(a,[e,n,o],Qe(n.dtype,o.dtype))},t.prototype.where=function(e){oa("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");var n=e.dataSync();return As(e.shape,n)},t.prototype.topk=function(e,n,o){return Jl(e.dataSync(),e.shape,e.dtype,n)},t.prototype.min=function(e,n){bt("min",n,e.rank);var o=et(e.shape,n),a=o[0],i=ee(o[1]),s=e.as2D(-1,i);return this.reduce(s,"min",s.dtype).reshape(a)},t.prototype.minimum=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.minimum(e,n);var o=L().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new dn(`
  vec4 result = vec4(min(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Be(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return min(a, b);
`,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.mod=function(e,n){var o=L().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new dn(`
  vec4 result = mod(a, b);
  vec4 isNaN = vec4(equal(b, vec4(0.0)));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Be(`if (b == 0.0) return NAN;
  return mod(a, b);`,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.max=function(e,n){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.max(e,n);bt("max",n,e.rank);var o=et(e.shape,n),a=o[0],i=ee(o[1]),s=e.as2D(-1,i);return this.reduce(s,"max",s.dtype).reshape(a)},t.prototype.maximum=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.maximum(e,n);var o=L().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new dn(`
  vec4 result = vec4(max(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Be(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return max(a, b);
`,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.all=function(e,n){bt("all",n,e.rank);var o=et(e.shape,n),a=o[0],i=ee(o[1]),s=e.as2D(-1,i);return this.reduce(s,"all",s.dtype).reshape(a)},t.prototype.any=function(e,n){bt("any",n,e.rank);var o=et(e.shape,n),a=o[0],i=ee(o[1]),s=e.as2D(-1,i);return this.reduce(s,"any",s.dtype).reshape(a)},t.prototype.realDivide=function(e,n){if(L().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,"float32",!0);var o=new Be(`
if (a == b) {
  return 1.0;
};
return a / b;`,e.shape,n.shape);return this.compileAndRun(o,[e,n],"float32")},t.prototype.floorDiv=function(e,n){if(L().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,"int32");var o=new Be(`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,e.shape,n.shape);return this.compileAndRun(o,[e,n],"int32")},t.prototype.add=function(e,n){if(e.dtype==="complex64"&&n.dtype==="complex64")return this.complexSeparableBinaryOp(e,n,ci);if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.add(e,n);var o=Qe(e.dtype,n.dtype);if(L().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,ci,o);var a=new Be(ci,e.shape,n.shape);return this.compileAndRun(a,[e,n],o)},t.prototype.packedUnaryOp=function(e,n,o){var a=new Hr(e.shape,n);return this.compileAndRun(a,[e],o)},t.prototype.packedBinaryOp=function(e,n,o,a,i){i===void 0&&(i=!1);var s=new dn(o,e.shape,n.shape,i);return this.compileAndRun(s,[e,n],a)},t.prototype.complexSeparableBinaryOp=function(e,n,o){var a=this,i=this.texData.get(e.dataId),s=this.texData.get(n.dataId),u=[[i.complexTensors.real,s.complexTensors.real],[i.complexTensors.imag,s.complexTensors.imag]].map(function(h){var d=h[0],p=h[1],m=a.makeComplexComponentTensorInfo(e,d),v=a.makeComplexComponentTensorInfo(n,p),g=new Be(o,e.shape,n.shape);return a.compileAndRun(g,[m,v],Qe(d.dtype,p.dtype))}),c=u[0],l=u[1],f=this.complex(c,l);return c.dispose(),l.dispose(),f},t.prototype.makeComplexComponentTensorInfo=function(e,n){return{dataId:n.dataId,dtype:n.dtype,shape:e.shape}},t.prototype.addN=function(e){if(e.length===1)return e[0];if(e.length>L().get("WEBGL_MAX_TEXTURES_IN_SHADER")){var n=Math.floor(e.length/2),o=this.addN(e.slice(0,n)),a=this.addN(e.slice(n));return this.addN([o,a])}var i=e.map(function(c){return c.dtype}).reduce(function(c,l){return Qe(c,l)}),s=e.map(function(c){return c.shape}),u=L().getBool("WEBGL_PACK")?new Zv(e[0].shape,s):new Qv(e[0].shape,s);return this.compileAndRun(u,e,i)},t.prototype.subtract=function(e,n){if(e.dtype==="complex64"&&n.dtype==="complex64")return this.complexSeparableBinaryOp(e,n,li);if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.subtract(e,n);var o=Qe(e.dtype,n.dtype);if(L().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,li,e.dtype);var a=new Be(li,e.shape,n.shape);return this.compileAndRun(a,[e,n],o)},t.prototype.pow=function(e,n){var o=L().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new dn(`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Be(`
if(a < 0.0 && floor(b) < b){
  return NAN;
}
if (b == 0.0) {
  return 1.0;
}
return (round(mod(b, 2.0)) != 1) ?
    pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,e.shape,n.shape),a=Qe(e.dtype,n.dtype);return this.compileAndRun(o,[e,n],a)},t.prototype.ceil=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.ceil(e);if(L().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,lc,e.dtype);var n=new ve(e.shape,lc);return this.compileAndRun(n,[e])},t.prototype.floor=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.floor(e);if(L().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,fc,e.dtype);var n=new ve(e.shape,fc);return this.compileAndRun(n,[e])},t.prototype.sign=function(e){var n=new ve(e.shape,`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`);return this.compileAndRun(n,[e])},t.prototype.isNaN=function(e){var n=new ve(e.shape,"return float(isnan(x));");return this.compileAndRun(n,[e],"bool")},t.prototype.isInf=function(e){var n=new ve(e.shape,"return float(isinf(x));");return this.compileAndRun(n,[e],"bool")},t.prototype.isFinite=function(e){var n=new ve(e.shape,"return float(!isnan(x) && !isinf(x));");return this.compileAndRun(n,[e],"bool")},t.prototype.round=function(e){var n=new ve(e.shape,`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`);return this.compileAndRun(n,[e])},t.prototype.exp=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.exp(e);if(L().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,hc,e.dtype);var n=new ve(e.shape,hc);return this.compileAndRun(n,[e])},t.prototype.expm1=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.expm1(e);if(L().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,dc,e.dtype);var n=new ve(e.shape,dc);return this.compileAndRun(n,[e])},t.prototype.softmax=function(e,n){var o=qe([n],e.shape),a=this.max(e,o),i=vt(a.shape,o),s=this.subtract(e,a.reshape(i)),u=this.exp(s),c=this.sum(u,o).reshape(i);return this.realDivide(u,c)},t.prototype.log=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.log(e);if(L().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,`
  vec4 result = log(x);
  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));
  result.r = isNaN.r == 1.0 ? NAN : result.r;
  result.g = isNaN.g == 1.0 ? NAN : result.g;
  result.b = isNaN.b == 1.0 ? NAN : result.b;
  result.a = isNaN.a == 1.0 ? NAN : result.a;

  return result;
`,e.dtype);var n=new ve(e.shape,`if (x < 0.0) return NAN;
  return log(x);`);return this.compileAndRun(n,[e])},t.prototype.log1p=function(e){var n=new ve(e.shape,"return log(1.0 + x);");return this.compileAndRun(n,[e])},t.prototype.sqrt=function(e){var n=new ve(e.shape,"return sqrt(x);");return this.compileAndRun(n,[e])},t.prototype.rsqrt=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.rsqrt(e);var n=new ve(e.shape,"return inversesqrt(x);");return this.compileAndRun(n,[e])},t.prototype.reciprocal=function(e){var n=new ve(e.shape,"return 1.0 / x;");return this.compileAndRun(n,[e])},t.prototype.relu=function(e){var n;return n=L().getBool("WEBGL_PACK")?new Hr(e.shape,sf):new ve(e.shape,rf),this.compileAndRun(n,[e])},t.prototype.relu6=function(e){var n;return n=L().getBool("WEBGL_PACK")?new Hr(e.shape,uf):new ve(e.shape,of),this.compileAndRun(n,[e])},t.prototype.prelu=function(e,n){var o=L().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new dn(nf,e.shape,n.shape):new Be(tf,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.elu=function(e){if(L().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,cf,e.dtype);var n=new ve(e.shape,af);return this.compileAndRun(n,[e])},t.prototype.eluDer=function(e,n){var o=L().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new dn(`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,e.shape,n.shape):new Be("return (b >= 1.0) ? a : a * (b + 1.0);",e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.selu=function(e){var n=new ve(e.shape,Fg);return this.compileAndRun(n,[e])},t.prototype.int=function(e){var n=new ve(e.shape,"return float(int(x));");return this.compileAndRun(n,[e],"int32")},t.prototype.clip=function(e,n,o){var a,i=(a=L().getBool("WEBGL_PACK_CLIP")?new pm(e.shape):new dm(e.shape)).getCustomSetupFunc(n,o);return this.compileAndRun(a,[e],null,i)},t.prototype.abs=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.abs(e);if(L().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,uc,e.dtype);var n=new ve(e.shape,uc);return this.compileAndRun(n,[e])},t.prototype.complexAbs=function(e){var n=this.texData.get(e.dataId),o=new vm(e.shape),a=[this.makeComplexComponentTensorInfo(e,n.complexTensors.real),this.makeComplexComponentTensorInfo(e,n.complexTensors.imag)];return this.compileAndRun(o,a)},t.prototype.sigmoid=function(e){var n=new ve(e.shape,"return 1.0 / (1.0 + exp(-1.0 * x));");return this.compileAndRun(n,[e])},t.prototype.softplus=function(e){var n=new ve(e.shape,`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`);return this.compileAndRun(n,[e])},t.prototype.sin=function(e){var n=new ve(e.shape,Pg);return this.compileAndRun(n,[e])},t.prototype.cos=function(e){var n=new ve(e.shape,Mg);return this.compileAndRun(n,[e])},t.prototype.tan=function(e){var n=new ve(e.shape,"return tan(x);");return this.compileAndRun(n,[e])},t.prototype.asin=function(e){var n=new ve(e.shape,Og);return this.compileAndRun(n,[e])},t.prototype.acos=function(e){var n=new ve(e.shape,Bg);return this.compileAndRun(n,[e])},t.prototype.atan=function(e){var n=new ve(e.shape,Lg);return this.compileAndRun(n,[e])},t.prototype.atan2=function(e,n){var o=L().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new dn(`
  vec4 result = atan(a, b);
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Be(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return atan(a, b);
`,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.sinh=function(e){var n=new ve(e.shape,`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`);return this.compileAndRun(n,[e])},t.prototype.cosh=function(e){var n=new ve(e.shape,`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`);return this.compileAndRun(n,[e])},t.prototype.tanh=function(e){var n=new ve(e.shape,`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`);return this.compileAndRun(n,[e])},t.prototype.asinh=function(e){var n=new ve(e.shape,Wg);return this.compileAndRun(n,[e])},t.prototype.acosh=function(e){var n=new ve(e.shape,zg);return this.compileAndRun(n,[e])},t.prototype.atanh=function(e){var n=new ve(e.shape,Ug);return this.compileAndRun(n,[e])},t.prototype.erf=function(e){var n=new ve(e.shape,`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = 0.3275911;
  float a1 = 0.254829592;
  float a2 = -0.284496736;
  float a3 = 1.421413741;
  float a4 = -1.453152027;
  float a5 = 1.061405429;

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`);return this.compileAndRun(n,[e])},t.prototype.step=function(e,n){var o=new ve(e.shape,function(a){return a===void 0&&(a=0),Vt+`
    return x > 0.0 ? 1.0 : float(`+a+`);
  `}(n));return this.compileAndRun(o,[e])},t.prototype.conv2dByMatMul=function(e,n,o,a,i,s){var u=e.shape,c=this.texData.get(e.dataId),l=o.inChannels,f=u[0]*u[1]*u[2],h=o.outChannels,d=o.dataFormat==="channelsLast",p=(f===1||h===1)&&l>1e3,m=u[2]%2!=0&&!!c.isPacked;if(p||!L().getBool("WEBGL_LAZILY_UNPACK")||!L().getBool("WEBGL_PACK_BINARY_OPERATIONS")||!m){var v=d?u[0]*u[1]*u[2]:u[0]*u[2]*u[3],g=this.reshape(e,[1,v,o.inChannels]),x=this.reshape(n,[1,o.inChannels,o.outChannels]);return this.reshape(this.fusedBatchMatMul({a:g,b:x,transposeA:!1,transposeB:!1,bias:a,activation:i,preluActivationWeights:s}),o.outShape)}var w=d?u[0]*u[1]*(u[2]+1):u[0]*u[2]*(u[3]+1),y={dataId:e.dataId,shape:[1,w,o.inChannels],dtype:e.dtype},b=c.shape;c.shape=c.shape.slice(),c.shape[c.shape.length-2]++,S(ko(c.shape,y.shape),function(){return"packed reshape "+c.shape+" to "+y.shape+" isn't free"});var _=this.reshape(n,[1,o.inChannels,o.outChannels]),E=this.fusedBatchMatMul({a:y,b:_,transposeA:!1,transposeB:!1,bias:a,activation:i,preluActivationWeights:s}),I=this.texData.get(E.dataId);return S(I.isPacked,function(){return"batchMatMul result is expected to be packed"}),c.shape=b,I.shape=o.outShape,N.makeTensorFromDataId(E.dataId,o.outShape,E.dtype)},t.prototype.conv2dWithIm2Row=function(e,n,o,a,i,s){var u=o.filterWidth,c=o.filterHeight,l=o.inChannels,f=o.outWidth,h=o.outHeight,d=o.dataFormat==="channelsLast",p=u*c*l,m=h*f,v=[p,m],g=e.squeeze([0]),x=n.reshape([1,p,-1]),w=new rg(v,g.shape,o),y=this.compileAndRun(w,[g]).reshape([1,v[0],v[1]]),b=a!=null,_=s!=null,E=i?To(i,!0):null,I=new fi(y.shape,[1,m,o.outChannels],!0,!1,b,E,_),R=[y,x];a&&R.push(a),_&&R.push(s);var k=this.compileAndRun(I,R);return d?k.reshape([1,h,f,o.outChannels]):k.reshape([1,o.outChannels,h,f])},t.prototype.fusedConv2d=function(e){var n=e.input,o=e.filter,a=e.convInfo,i=e.bias,s=e.activation,u=e.preluActivationWeights;if(a.filterHeight===1&&a.filterWidth===1&&a.dilationHeight===1&&a.dilationWidth===1&&a.strideHeight===1&&a.strideWidth===1&&(a.padInfo.type==="SAME"||a.padInfo.type==="VALID"))return this.conv2dByMatMul(n,o,a,i,s,u);if(L().getBool("WEBGL_CONV_IM2COL")&&n.shape[0]===1)return this.conv2dWithIm2Row(n,o,a,i,s,u);var c=i!=null,l=u!=null,f=s?To(s,!1):null,h=new Zu(a,c,f,l),d=[n,o];return i&&d.push(i),u&&d.push(u),this.compileAndRun(h,d)},t.prototype.conv2d=function(e,n,o){if(o.filterHeight===1&&o.filterWidth===1&&o.dilationHeight===1&&o.dilationWidth===1&&o.strideHeight===1&&o.strideWidth===1&&(o.padInfo.type==="SAME"||o.padInfo.type==="VALID"))return this.conv2dByMatMul(e,n,o);if(L().getBool("WEBGL_CONV_IM2COL")&&e.shape[0]===1)return this.conv2dWithIm2Row(e,n,o);var a=new Zu(o);return this.compileAndRun(a,[e,n])},t.prototype.conv2dDerInput=function(e,n,o){var a=new xm(o);return this.compileAndRun(a,[e,n])},t.prototype.conv2dDerFilter=function(e,n,o){var a=new ym(o);return this.compileAndRun(a,[e,n])},t.prototype.fusedDepthwiseConv2D=function(e){var n,o=e.input,a=e.filter,i=e.convInfo,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=L().getBool("WEBGL_PACK_DEPTHWISECONV")&&i.strideWidth<=2&&i.outChannels/i.inChannels==1,f=u?To(u,l):null,h=[o,a],d=s!=null,p=c!=null;return d&&h.push(s),p&&h.push(c),l?(n=new tc(i,d,f,p),this.compileAndRun(n,h)):(n=new ec(i,d,f,p),this.compileAndRun(n,h))},t.prototype.depthwiseConv2D=function(e,n,o){var a;return L().getBool("WEBGL_PACK_DEPTHWISECONV")&&o.strideWidth<=2&&o.outChannels/o.inChannels==1?(a=new tc(o),this.compileAndRun(a,[e,n])):(a=new ec(o),this.compileAndRun(a,[e,n]))},t.prototype.depthwiseConv2DDerInput=function(e,n,o){var a=new Cm(o);return this.compileAndRun(a,[e,n])},t.prototype.depthwiseConv2DDerFilter=function(e,n,o){var a=new _m(o);return this.compileAndRun(a,[e,n])},t.prototype.conv3d=function(e,n,o){var a=new Em(o);return this.compileAndRun(a,[e,n])},t.prototype.conv3dDerInput=function(e,n,o){var a=new wm(o);return this.compileAndRun(a,[e,n])},t.prototype.conv3dDerFilter=function(e,n,o){var a=new bm(o);return this.compileAndRun(a,[e,n])},t.prototype.maxPool=function(e,n){var o=new hi(n,"max",!1);return this.compileAndRun(o,[e])},t.prototype.avgPool=function(e,n){var o=new hi(n,"avg",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.maxPoolBackprop=function(e,n,o,a){var i=new hi(a,"max",!0),s=this.compileAndRun(i,[n]),u=new sg(a),c=this.compileAndRun(u,[e,s],n.dtype);return s.dispose(),c},t.prototype.avgPoolBackprop=function(e,n,o){var a=new sm(o);return this.compileAndRun(a,[e],n.dtype)},t.prototype.cast=function(e,n){return ql(e,n,this)},t.prototype.unstack=function(e,n){for(var o=e.shape[n],a=new Array(e.rank-1),i=0,s=0;s<e.rank;s++)s!==n&&(a[i++]=e.shape[s]);var u=new Array(e.rank).fill(0),c=e.shape.slice();c[n]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[n]=s,l[s]=this.slice(e,u,c).reshape(a);return l},t.prototype.avgPool3d=function(e,n){var o=new di(n,"avg",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.avgPool3dBackprop=function(e,n,o){var a=new um(o);return this.compileAndRun(a,[e],n.dtype)},t.prototype.maxPool3d=function(e,n){var o=new di(n,"max",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.maxPool3dBackprop=function(e,n,o,a){var i=new di(a,"max",!0),s=this.compileAndRun(i,[n]),u=new ug(a),c=this.compileAndRun(u,[e,s],n.dtype);return s.dispose(),c},t.prototype.reshape=function(e,n){var o=this.texData.get(e.dataId);if(o.isPacked&&!ko(e.shape,n)&&(o.texture===null||!ko(o.shape,n))){var a=this.packedReshape(e,n);return N.makeTensorFromDataId(a.dataId,a.shape,a.dtype)}return Hi(e,n)},t.prototype.resizeBilinear=function(e,n,o,a){var i=L().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new yg(e.shape,n,o,a):new gg(e.shape,n,o,a);return this.compileAndRun(i,[e],"float32")},t.prototype.resizeBilinearBackprop=function(e,n,o){var a=new mg(e,n,o);return this.compileAndRun(a,[e])},t.prototype.resizeNearestNeighbor=function(e,n,o,a){var i=new bg(e.shape,n,o,a);return this.compileAndRun(i,[e])},t.prototype.resizeNearestNeighborBackprop=function(e,n,o){var a=new xg(e,n,o);return this.compileAndRun(a,[e])},t.prototype.multinomial=function(e,n,o,a){var i=n?e:xn(e),s=i.shape[0],u=i.shape[1],c=new cg(s,u,o),l=c.getCustomSetupFunc(a);return this.compileAndRun(c,[i],"int32",l)},t.prototype.oneHot=function(e,n,o,a){var i=new lg(e.size,n,o,a);return this.compileAndRun(i,[e])},t.prototype.diag=function(e){var n=new Am(e.size);return this.compileAndRun(n,[e])},t.prototype.nonMaxSuppression=function(e,n,o,a,i){return oa("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead"),Ss(e.dataSync(),n.dataSync(),o,a,i)},t.prototype.cropAndResize=function(e,n,o,a,i,s){var u=new Im(e.shape,n.shape,a,i,s);return this.compileAndRun(u,[e,n,o],"float32")},t.prototype.depthToSpace=function(e,n,o){S(n>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+n});var a=e.shape[0],i=o==="NHWC"?e.shape[1]:e.shape[2],s=o==="NHWC"?e.shape[2]:e.shape[3],u=o==="NHWC"?e.shape[3]:e.shape[1],c=i*n,l=s*n,f=u/(n*n),h=new Dm(o==="NHWC"?[a,c,l,f]:[a,f,c,l],n,o);return this.compileAndRun(h,[e])},t.prototype.split=function(e,n,o){return $l(e,n,o)},t.prototype.scatterND=function(e,n,o){var a=la(0,e,o),i=a.sliceRank,s=a.numUpdates,u=a.sliceSize,c=a.strides,l=a.outputSize,f=[l/u,u],h=e.reshape([s,i]),d=n.reshape([s,u]);if(l===0)return Hi(Ze([]),o);var p=q(0),m=new ac(s,i,h.rank,d.rank,c,f);return this.compileAndRun(m,[d,h,p]).reshape(o)},t.prototype.sparseToDense=function(e,n,o,a){var i=la(0,e,o),s=i.sliceRank,u=i.numUpdates,c=i.strides,l=i.outputSize,f=new ac(u,s,e.rank,n.rank,c,[l,1]);return this.compileAndRun(f,[n,e,a]).reshape(o)},t.prototype.fft=function(e){return this.fftImpl(e,!1)},t.prototype.ifft=function(e){return this.fftImpl(e,!0)},t.prototype.fftImpl=function(e,n){var o=this.texData.get(e.dataId),a=new rc(Mm,e.shape,n),i=new rc(Om,e.shape,n),s=[this.makeComplexComponentTensorInfo(e,o.complexTensors.real),this.makeComplexComponentTensorInfo(e,o.complexTensors.imag)],u=this.compileAndRun(a,s),c=this.compileAndRun(i,s),l=this.complex(u,c).as2D(e.shape[0],e.shape[1]);return u.dispose(),c.dispose(),l},t.prototype.gatherND=function(e,n){var o=n.shape,a=o[o.length-1],i=Wl(e,n),s=i[0],u=i[1],c=i[2],l=i[3],f=n.reshape([u,a]),h=e.reshape([e.size/c,c]),d=new Wm(a,l,[u,c]);return this.compileAndRun(d,[h,f]).reshape(s)},t.prototype.fill=function(e,n,o){if((o=o||lo(n))==="string"){var a=ea(o,ee(e));return a.fill(n),N.makeTensor(a,e,o,this)}var i=new Bm(e,n),s=i.getCustomSetupFunc(n);return this.compileAndRun(i,[],o,s)},t.prototype.onesLike=function(e){if(e.dtype==="string")throw new Error("onesLike is not supported under string dtype");return this.fill(e.shape,1,e.dtype)},t.prototype.zerosLike=function(e){return this.fill(e.shape,e.dtype==="string"?"":0,e.dtype)},t.prototype.linspace=function(e,n,o){return Kl(e,n,o)},t.prototype.makeTensorInfo=function(e,n){var o=this.write(null,e,n);return this.texData.get(o).usage=null,{dataId:o,shape:e,dtype:n}},t.prototype.makeOutput=function(e,n){var o=this.makeTensorInfo(e,n).dataId;return N.makeTensorFromDataId(o,e,n,this)},t.prototype.unpackTensor=function(e){var n=new Gg(e.shape);return this.runWebGLProgram(n,[e],e.dtype)},t.prototype.packTensor=function(e){var n=new fg(e.shape);return this.runWebGLProgram(n,[e],e.dtype,null,!0)},t.prototype.packedReshape=function(e,n){var o=[na(e.shape)].concat(ra(e.shape)),a={dtype:e.dtype,shape:o,dataId:e.dataId},i=[na(n)].concat(ra(n)),s=new vg(i,o),u=this.runWebGLProgram(s,[a],e.dtype,null,!0);return{dataId:u.dataId,shape:n,dtype:u.dtype}},t.prototype.decode=function(e){var n,o=this.texData.get(e),a=o.isPacked,i=o.shape,s=o.dtype,u=si(i);return n=a?new Sm(u):new km(u),{dtype:s,shape:i,dataId:this.runWebGLProgram(n,[{shape:u,dtype:s,dataId:e}],s,null,!0).dataId}},t.prototype.runWebGLProgram=function(e,n,o,a,i){var s=this;i===void 0&&(i=!1);var u=this.makeTensorInfo(e.outputShape,o),c=this.texData.get(u.dataId);if(e.packedOutput&&(c.isPacked=!0),e.outPackingScheme===no.DENSE){var l=Xr(e.outputShape);c.texShape=l.map(function(w){return 2*w})}if(e.outTexUsage!=null&&(c.usage=e.outTexUsage),ee(u.shape)===0)return c.values=eo(u.dtype,0),u;var f=[],h=n.map(function(w){if(w.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");var y=s.texData.get(w.dataId);if(y.texture==null){if(!e.packedInputs&&ee(w.shape)<=L().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:w.shape,texData:null,isUniform:!0,uniformValues:y.values};e.packedInputs&&(y.isPacked=!0,y.shape=w.shape)}else if(!!y.isPacked!=!!e.packedInputs)w=y.isPacked?s.unpackTensor(w):s.packTensor(w),f.push(w),y=s.texData.get(w.dataId);else if(y.isPacked&&!ko(y.shape,w.shape)){var b=w,_=w.shape;w.shape=y.shape,w=s.packedReshape(w,_),f.push(w),y=s.texData.get(w.dataId),b.shape=_}return s.uploadToGPU(w.dataId),{shape:w.shape,texData:y,isUniform:!1}});this.uploadToGPU(u.dataId);var d,p={shape:u.shape,texData:c,isUniform:!1},m=function(w,y,b){var _="";y.concat(b).forEach(function(R){var k=R.texData!=null&&R.texData.slice!=null&&R.texData.slice.flatOffset>0,T=R.isUniform?"uniform":R.texData.texShape;_+=R.shape+"_"+T+"_"+k});var E=w.userCode,I=w.constructor.name;return I+="_"+_+"_"+E}(e,h,p),v=this.getAndSaveBinary(m,function(){return function(w,y,b,_){var E=y.userCode,I=b.map(function(W,V){var H={logicalShape:W.shape,texShape:W.isUniform?null:W.texData.texShape,isUniform:W.isUniform,isPacked:!W.isUniform&&W.texData.isPacked,flatOffset:null};return W.texData!=null&&W.texData.slice!=null&&W.texData.slice.flatOffset>0&&(H.flatOffset=W.texData.slice.flatOffset),{name:y.variableNames[V],shapeInfo:H}}),R=I.map(function(W){return W.shapeInfo}),k={logicalShape:_.shape,texShape:_.texData.texShape,isUniform:!1,isPacked:_.texData.isPacked,flatOffset:null},T=tm(I,k,E,y.packedInputs),A=w.createProgram(T),B=null,M=w.getUniformLocation(A,"NAN",!1);L().getNumber("WEBGL_VERSION")===1&&(B=w.getUniformLocation(A,"INFINITY",!1));for(var O={},U=0;U<y.variableNames.length;U++){var z=y.variableNames[U];O[z]=w.getUniformLocation(A,z,!1),O["offset"+z]=w.getUniformLocation(A,"offset"+z,!1)}return{program:y,source:T,webGLProgram:A,uniformLocations:O,inShapeInfos:R,outShapeInfo:k,infLoc:B,nanLoc:M}}(s.gpgpu,e,h,p)}),g=this.activeTimers!=null;if(g&&(d=this.startTimer()),function(w,y,b,_,E){oc(y.inShapeInfos,b),oc([y.outShapeInfo],[_]);var I=_.texData.texture,R=_.texData.texShape;_.texData.isPacked?w.setOutputPackedMatrixTexture(I,R[0],R[1]):w.setOutputMatrixTexture(I,R[0],R[1]),w.setProgram(y.webGLProgram),L().getNumber("WEBGL_VERSION")===1&&y.infLoc!==null&&w.gl.uniform1f(y.infLoc,1/0),y.nanLoc!==null&&w.gl.uniform1f(y.nanLoc,NaN),b.forEach(function(k,T){var A=y.program.variableNames[T],B=y.uniformLocations[A],M=y.uniformLocations["offset"+A];if(B!=null)if(k.isUniform)if(ee(k.shape)<2)w.gl.uniform1f(B,k.uniformValues[0]);else{var O=k.uniformValues;O instanceof Float32Array||(O=new Float32Array(O)),w.gl.uniform1fv(B,O)}else k.texData.slice!=null&&M!=null&&w.gl.uniform1i(M,k.texData.slice.flatOffset),w.setInputMatrixTexture(k.texData.texture,B,T)}),E!=null&&E(w,y.webGLProgram),w.executeProgram()}(this.gpgpu,v,h,p,a),f.forEach(function(w){return s.disposeData(w.dataId)}),g&&(d=this.endTimer(d),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(d)})),!L().getBool("WEBGL_LAZILY_UNPACK")&&c.isPacked&&i===!1){var x=this.unpackTensor(u);return this.disposeData(u.dataId),x}return u},t.prototype.compileAndRun=function(e,n,o,a,i){i===void 0&&(i=!1),o=o||n[0].dtype;var s=this.runWebGLProgram(e,n,o,a,i);return N.makeTensorFromDataId(s.dataId,s.shape,s.dtype)},t.prototype.getAndSaveBinary=function(e,n){return e in this.binaryCache||(this.binaryCache[e]=n()),this.binaryCache[e]},t.prototype.getTextureManager=function(){return this.textureManager},t.prototype.dispose=function(){var e=this;this.disposed||(L().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(function(n){e.gpgpu.deleteProgram(e.binaryCache[n].webGLProgram),delete e.binaryCache[n]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)},t.prototype.floatPrecision=function(){var e=this;return this.floatPrecisionValue==null&&(this.floatPrecisionValue=$(function(){if(!L().get("WEBGL_RENDER_FLOAT32_ENABLED")){var n=L().getBool("DEBUG");L().set("DEBUG",!1);var o=e.abs(q(1e-8)).dataSync()[0];if(L().set("DEBUG",n),o>0)return 32}return 16})),this.floatPrecisionValue},t.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},t.prototype.uploadToGPU=function(e){var n,o=this.texData.get(e),a=o.shape,i=o.dtype,s=o.values,u=o.texture,c=o.usage,l=o.isPacked;if(u==null){var f,h=this.activeTimers!=null;h&&(f=Kt());var d=o.texShape;if(d==null&&(d=Jp(a,l),o.texShape=d),s!=null){var p=si(a),m=void 0,v=d[1],g=d[0],x=s instanceof Uint8Array;l?(v=(n=ho(d[0],d[1]))[0],g=n[1],m=new Pm(p,[g,v],x)):m=new Fm(p,[g,v],x);var w=this.makeTensorInfo([g,v],i);this.texData.get(w.dataId).usage=x?_t.PIXELS:_t.UPLOAD,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(w.dataId),v,g,s);var y=this.runWebGLProgram(m,[w],i,null,!0),b=this.texData.get(y.dataId);o.texture=b.texture,o.texShape=b.texShape,o.isPacked=b.isPacked,o.usage=b.usage,this.disposeData(w.dataId),this.texData.delete(y.dataId),o.values=null,h&&(this.uploadWaitMs+=Kt()-f)}else{var _=this.acquireTexture(d,c,i,l);o.texture=_}}},t.prototype.convertAndCacheOnCPU=function(e,n){var o=this.texData.get(e),a=o.dtype;return this.releaseGPUData(e),n!=null&&(o.values=function(i,s){if(s==="float32"||s==="complex64")return i;if(s==="int32"||s==="bool"){for(var u=s==="int32"?new Int32Array(i.length):new Uint8Array(i.length),c=0;c<u.length;++c)u[c]=Math.round(i[c]);return u}throw new Error("Unknown dtype "+s)}(n,a)),o.values},t.prototype.acquireTexture=function(e,n,o,a){if(this.numBytesInGPU+=this.computeBytes(e,o),!this.warnedAboutMemory&&this.numBytesInGPU>1024*this.numMBBeforeWarning*1024){var i=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn("High memory usage in GPU: "+i+" MB, most likely due to a memory leak")}return this.textureManager.acquireTexture(e,n,a)},t.prototype.computeBytes=function(e,n){return e[0]*e[1]*wl(n)},t}(Hl);Sl()&&N.registerBackend("webgl",function(){return new jg},2);var qg=D({square_:function(r){var t=C(r,"x","square"),e=[t];return N.runKernelFunc(function(n,o){return o([t]),n.square(t)},{x:t},null,"Square",{},e,[])}}),oo="SquaredDifference",lf=D({squaredDifference_:function(r,t){var e,n=C(r,"a","squaredDifference"),o=C(t,"b","squaredDifference");e=Oe(n,o),n=e[0],o=e[1],xe(n.shape,o.shape);var a={a:n,b:o},i=[n,o];return N.runKernelFunc(function(s,u){var c=s.squaredDifference(n,o);return u([n,o]),c},a,function(s,u){var c=u[0],l=u[1],f=q(2);return{a:function(){return s.mul(c.sub(l).mul(f))},b:function(){return s.mul(l.sub(c).mul(f))}}},oo,{},i,[])}}),Kg=D({abs_:function(r){var t=C(r,"x","abs");return t.dtype==="complex64"?N.runKernelFunc(function(e){return e.complexAbs(t)},{$x:t}):N.runKernelFunc(function(e,n){var o=e.abs(t);return n([t]),o},{x:t},function(e,n){var o=n[0];return{x:function(){return e.mul(o.toFloat().step(-1))}}},"Abs")}}),Xg=D({acos_:function(r){var t=C(r,"x","acos");return N.runKernelFunc(function(e,n){var o=e.acos(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.divStrict(q(1).sub(o.toFloat().square()).sqrt()).neg()}}})}}),$g=D({acosh_:function(r){var t=C(r,"x","acosh");return N.runKernelFunc(function(e,n){var o=e.acosh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.divStrict(o.toFloat().square().sub(1).sqrt())}}})}}),Yg=D({asin_:function(r){var t=C(r,"x","asin");return N.runKernelFunc(function(e,n){var o=e.asin(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.divStrict(q(1).sub(o.toFloat().square()).sqrt())}}})}}),Jg=D({asinh_:function(r){var t=C(r,"x","asinh");return N.runKernelFunc(function(e,n){var o=e.asinh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.divStrict(q(1).add(o.toFloat().square()).sqrt())}}})}}),Qg=D({atan_:function(r){var t=C(r,"x","atan");return N.runKernelFunc(function(e,n){var o=e.atan(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.toFloat().square().add(1))}}})}}),Zg=D({atanh_:function(r){var t=C(r,"x","atanh");return N.runKernelFunc(function(e,n){var o=e.atanh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(q(1).sub(o.toFloat().square()))}}})}}),ey=D({ceil_:function(r){var t=C(r,"x","ceil");return N.runKernelFunc(function(e){return e.ceil(t)},{$x:t},function(e){return{$x:function(){return we(e)}}})}}),Ps=D({clipByValue_:function(r,t,e){var n=C(r,"x","clipByValue");S(t<=e,function(){return"Error in clip: min ("+t+") must be less than or equal to max ("+e+")."});var o=[n],a={min:t,max:e};return N.runKernelFunc(function(i,s){var u=i.clip(n,t,e);return s([n]),u},{x:n},function(i,s){var u=s[0];return{x:function(){return i.where(u.greaterEqual(t).logicalAnd(u.lessEqual(e)),we(i))}}},"ClipByValue",a,o)}}),ty=D({cos_:function(r){var t=C(r,"x","cos"),e=[t];return N.runKernelFunc(function(n,o){var a=n.cos(t);return o([t]),a},{x:t},function(n,o){var a=o[0];return{x:function(){return a.toFloat().sin().neg().mul(n)}}},"Cos",{},e)}}),ny=D({cosh_:function(r){var t=C(r,"x","cosh");return N.runKernelFunc(function(e,n){var o=e.cosh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return o.toFloat().sinh().mulStrict(e)}}})}}),ry=D({erf_:function(r){var t=C(r,"x","erf");return S(t.dtype==="int32"||t.dtype==="float32",function(){return"Input dtype must be `int32` or `float32`."}),t.dtype==="int32"&&(t=t.toFloat()),N.runKernelFunc(function(e,n){var o=e.erf(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.mul(o.square().neg().exp().mul(2/Math.sqrt(Math.PI)))}}})}}),qi=D({exp_:function(r){var t=C(r,"x","exp");return N.runKernelFunc(function(e,n){var o=e.exp(t);return n([o]),o},{x:t},function(e,n){return{x:function(){return e.mulStrict(n[0])}}},"Exp",{},[],[!0])}}),oy=D({expm1_:function(r){var t=C(r,"x","expm1");return N.runKernelFunc(function(e,n){var o=e.expm1(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.mul(o.exp())}}})}}),ay=D({floor_:function(r){var t=C(r,"x","floor");return N.runKernelFunc(function(e){return e.floor(t)},{$x:t},function(e){return{$x:function(){return we(e)}}})}}),iy=D({log_:function(r){var t=C(r,"x","log"),e=[t];return N.runKernelFunc(function(n,o){var a=n.log(t);return o([t]),a},{x:t},function(n,o){var a=o[0];return{x:function(){return n.div(a.toFloat())}}},"Log",{},e)}}),sy=D({log1p_:function(r){var t=C(r,"x","log1p");return N.runKernelFunc(function(e,n){var o=e.log1p(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.add(1))}}})}}),uy=D({logSigmoid_:function(r){var t=C(r,"x","logSigmoid");return N.runKernelFunc(function(e,n){var o=e.softplus(t.neg()).neg();return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.mul(o.neg().sigmoid())}}})}}),pa=D({neg_:function(r){var t=C(r,"x","neg"),e=[t];return N.runKernelFunc(function(n){return n.neg(t)},{x:t},function(n){return{x:function(){return n.neg()}}},"Neg",{},e)}}),cy=D({reciprocal_:function(r){var t=C(r,"x","reciprocal");return N.runKernelFunc(function(e,n){var o=e.reciprocal(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.square().neg())}}})}}),ly=D({round_:function(r){var t=C(r,"x","round");return N.runKernelFunc(function(e){return e.round(t)},{$x:t},function(e){return{$x:function(){return we(e)}}})}}),ff=D({rsqrt_:function(r){var t=C(r,"x","rsqrt"),e=[t];return N.runKernelFunc(function(n,o){var a=n.rsqrt(t);return o([t]),a},{x:t},function(n,o){var a=o[0];return{x:function(){return n.div(a.pow(1.5).mul(2)).neg()}}},"Rsqrt",{},e)}}),hf=D({sigmoid_:function(r){var t=C(r,"x","sigmoid");return N.runKernelFunc(function(e,n){var o=e.sigmoid(t);return n([o]),o},{x:t},function(e,n){var o=n[0];return{x:function(){return e.mul(o.mul(q(1).sub(o)))}}},"Sigmoid")}}),fy=D({sign_:function(r){var t=C(r,"x","sign");return N.runKernelFunc(function(e){return e.sign(t)},{$x:t},function(e){return{$x:function(){return we(e)}}})}}),hy=D({isNaN_:function(r){var t=C(r,"x","isNaN");return N.runKernelFunc(function(e){return e.isNaN(t)},{$x:t},function(e){return{$x:function(){return we(e)}}})}}),dy=D({isInf_:function(r){var t=C(r,"x","isInf");return N.runKernelFunc(function(e){return e.isInf(t)},{$x:t},function(e){return{$x:function(){return we(e)}}})}}),py=D({isFinite_:function(r){var t=C(r,"x","isFinite");return N.runKernelFunc(function(e){return e.isFinite(t)},{$x:t},function(e){return{$x:function(){return we(e)}}})}}),vy=D({sin_:function(r){var t=C(r,"x","sin"),e=[t];return N.runKernelFunc(function(n,o){var a=n.sin(t);return o([t]),a},{x:t},function(n,o){var a=o[0];return{x:function(){return a.toFloat().cos().mul(n)}}},"Sin",{},e)}}),my=D({sinh_:function(r){var t=C(r,"x","sinh");return N.runKernelFunc(function(e,n){var o=e.sinh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return o.toFloat().cosh().mulStrict(e)}}})}}),gy=D({softplus_:function(r){var t=C(r,"x","softplus");return N.runKernelFunc(function(e,n){var o=e.softplus(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.mul(o.sigmoid())}}})}}),yy=D({sqrt_:function(r){var t=C(r,"x","sqrt");return N.runKernelFunc(function(e,n){var o=e.sqrt(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.toFloat().sqrt().mul(2))}}})}}),xy=D({step_:function(r,t){t===void 0&&(t=0);var e=C(r,"x","step");return N.runKernelFunc(function(n){return n.step(e,t)},{$x:e},function(n){return{$x:function(){return we(n)}}})}}),by=D({tan_:function(r){var t=C(r,"x","tan");return N.runKernelFunc(function(e,n){var o=e.tan(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.cos().square())}}})}}),wy=D({tanh_:function(r){var t=C(r,"x","tanh");return N.runKernelFunc(function(e,n){var o=e.tanh(t);return n([o]),o},{x:t},function(e,n){var o=n[0];return{x:function(){return q(1).sub(o.square()).mulStrict(e)}}},"Tanh",{},null,[!0])}});function df(r,t,e,n,o,a){var i,s,u=C(r,"x","batchNorm"),c=C(t,"mean","batchNorm"),l=C(e,"variance","batchNorm");return o!=null&&(i=C(o,"scale","batchNorm")),n!=null&&(s=C(n,"offset","batchNorm")),S(u.rank===2,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),S(c.rank===2||c.rank===1,function(){return"Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank "+c.rank+"."}),S(l.rank===2||l.rank===1,function(){return"Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank "+l.rank+"."}),i!=null&&S(i.rank===2||i.rank===1,function(){return"Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank "+i.rank+"."}),s!=null&&S(s.rank===2||s.rank===1,function(){return"Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank "+s.rank+"."}),vo(u,c,l,s,i,a)}function pf(r,t,e,n,o,a){var i,s,u=C(r,"x","batchNorm"),c=C(t,"mean","batchNorm"),l=C(e,"variance","batchNorm");return o!=null&&(i=C(o,"scale","batchNorm")),n!=null&&(s=C(n,"offset","batchNorm")),S(u.rank===3,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),S(c.rank===3||c.rank===1,function(){return"Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank "+c.rank+"."}),S(l.rank===3||l.rank===1,function(){return"Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank "+l.rank+"."}),i!=null&&S(i.rank===3||i.rank===1,function(){return"Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank "+i.rank+"."}),s!=null&&S(s.rank===3||s.rank===1,function(){return"Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank "+s.rank+"."}),vo(u,c,l,s,i,a)}function vf(r,t,e,n,o,a){var i,s,u=C(r,"x","batchNorm"),c=C(t,"mean","batchNorm"),l=C(e,"variance","batchNorm");return o!=null&&(i=C(o,"scale","batchNorm")),n!=null&&(s=C(n,"offset","batchNorm")),S(u.rank===4,function(){return"Error in batchNorm4D: x must be rank 4 but got rank "+u.rank+"."}),S(c.rank===4||c.rank===1,function(){return"Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank "+c.rank+"."}),S(l.rank===4||l.rank===1,function(){return"Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank "+l.rank+"."}),i!=null&&S(i.rank===4||i.rank===1,function(){return"Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank "+i.rank+"."}),s!=null&&S(s.rank===4||s.rank===1,function(){return"Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank "+s.rank+"."}),vo(u,c,l,s,i,a)}function vo(r,t,e,n,o,a){a==null&&(a=.001);var i,s,u,c=C(r,"x","batchNorm"),l=C(t,"mean","batchNorm"),f=C(e,"variance","batchNorm");o!=null&&(i=C(o,"scale","batchNorm")),n!=null&&(s=C(n,"offset","batchNorm")),S(l.rank===f.rank,function(){return"Batch normalization gradient requires mean and variance to have equal ranks."}),S(s==null||l.rank===s.rank,function(){return"Batch normalization gradient requires mean and offset to have equal ranks."}),S(i==null||l.rank===i.rank,function(){return"Batch normalization gradient requires mean and scale to have equal ranks."}),u=c.rank===0||c.rank===1?c.as4D(1,1,1,c.size):c.rank===2?c.as4D(1,1,c.shape[0],c.shape[1]):c.rank===3?c.as4D(1,c.shape[0],c.shape[1],c.shape[2]):c;var h=[c,l,f,i];return N.runKernelFunc(function(d,p){var m=d.batchNormalization(u,No(l),No(f),a,No(i),No(s));return p([c,l,f,i]),m},{x:c,mean:l,variance:f,scale:i,offset:s},function(d,p){var m=p,v=m[0],g=m[1],x=m[2],w=m[3],y=w??q(1),b=He(g.shape,u.shape),_=[];if(g.rank===1){for(var E=0;E<u.shape.length-1;++E)_.push(u.shape[E]);_.push(1)}var I=v.sub(g),R=d.mul(y),k=ff(x.add(q(a))),T=k.mul(k).mul(k).mul(q(-.5));return{x:function(){return g.rank===1?d.mul(Cr(k.as4D(1,1,1,g.shape[0]),_)).mul(y).reshape(v.shape):d.mul(k).mul(y).reshape(v.shape)},mean:function(){var A=k.mul(q(-1)).mul(R);return g.rank===1&&(A=A.sum(b)),A.reshape(g.shape)},variance:function(){var A=T.mul(I).mul(R);return g.rank===1&&(A=A.sum(b)),A.reshape(g.shape)},scale:function(){var A=I.mul(k),B=d.mul(A);return g.rank===1&&(B=B.sum(b)),B.reshape(g.shape)},offset:function(){var A=d;return g.rank===1&&(A=A.sum(b)),A.reshape(g.shape)}}},"BatchNormalization",{varianceEpsilon:a},h).reshape(c.shape)}function No(r){return r==null?null:r.rank===0?r.as1D():r.rank===1?r:r.rank===2?r.as4D(1,1,r.shape[0],r.shape[1]):r.rank===3?r.as4D(1,r.shape[0],r.shape[1],r.shape[2]):r}function Na(){Dl("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon")}var _y=D({batchNormalization2d_:function(r,t,e,n,o,a){return n===void 0&&(n=.001),Na(),df(r,t,e,a,o,n)}}),Cy=D({batchNormalization3d_:function(r,t,e,n,o,a){return n===void 0&&(n=.001),Na(),pf(r,t,e,a,o,n)}}),Ey=D({batchNormalization4d_:function(r,t,e,n,o,a){return n===void 0&&(n=.001),Na(),vf(r,t,e,a,o,n)}}),Iy=D({batchNormalization_:function(r,t,e,n,o,a){return n===void 0&&(n=.001),Na(),vo(r,t,e,a,o,n)}}),mf=D({batchNorm_:vo}),Ry=D({batchNorm2d_:df}),ky=D({batchNorm3d_:pf}),Sy=D({batchNorm4d_:vf}),Fa=D({logicalAnd_:function(r,t){var e=C(r,"a","logicalAnd","bool"),n=C(t,"b","logicalAnd","bool");return xe(e.shape,n.shape),N.runKernelFunc(function(o){return o.logicalAnd(e,n)},{a:e,b:n},null,"LogicalAnd")}}),Dy=D({logicalNot_:function(r){var t=C(r,"x","logicalNot","bool");return N.runKernelFunc(function(e){return e.logicalNot(t)},{$x:t})}}),gf=D({logicalOr_:function(r,t){var e=C(r,"a","logicalOr","bool"),n=C(t,"b","logicalOr","bool");return xe(e.shape,n.shape),N.runKernelFunc(function(o){return o.logicalOr(e,n)},{$a:e,$b:n})}}),Ay=D({logicalXor_:function(r,t){var e=C(r,"a","logicalXor","bool"),n=C(t,"b","logicalXor","bool");return xe(e.shape,n.shape),gf(r,t).logicalAnd(Fa(r,t).logicalNot())}}),nr=D({where_:function(r,t,e){var n=C(t,"a","where"),o=C(e,"b","where"),a=C(r,"condition","where","bool");return Ie(n.shape,o.shape,"Error in where: "),a.rank===1?S(a.shape[0]===n.shape[0],function(){return"The first dimension of `a` must match the size of `condition`."}):Ie(a.shape,o.shape,"Error in where: "),N.runKernelFunc(function(i,s){var u=i.select(a,n,o);return s([a]),u},{$condition:a,$a:n,$b:o},function(i,s){var u=s[0];return{$condition:function(){return we(u).toFloat()},$a:function(){return i.mul(u.cast(i.dtype))},$b:function(){return i.mul(u.logicalNot().cast(i.dtype))}}})}}),yf=function(r){return Y(this,void 0,void 0,function(){var t,e,n;return J(this,function(o){switch(o.label){case 0:return[4,(t=C(r,"condition","whereAsync","bool")).data()];case 1:return e=o.sent(),n=As(t.shape,e),r!==t&&t.dispose(),[2,n]}})})},ye=D({add_:function(r,t){var e,n=C(r,"a","add"),o=C(t,"b","add");e=Oe(n,o),n=e[0],o=e[1];var a=xe(n.shape,o.shape);return N.runKernelFunc(function(i){return i.add(n,o)},{a:n,b:o},function(i){return{a:function(){var s=i,u=He(n.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(n.shape)},b:function(){var s=i,u=He(o.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(o.shape)}}},"Add")}}),Ty=D({addN_:function(r){S(Array.isArray(r),function(){return"The argument passed to tf.addN() must be a list of tensors"}),S(r.length>=1,function(){return"Must pass at least one tensor to tf.addN(), but got "+r.length});var t=r.map(function(o,a){return C(o,"tensors"+a,"addN")}),e=t[0];t.forEach(function(o){if(o.dtype!==e.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(function(o){if(!Xe(o.shape,e.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});var n=t;return N.runKernelFunc(function(o){return o.addN(t)},n,function(o){var a={};return t.forEach(function(i,s){a[s]=function(){return o.clone()}}),a},"AddN")}}),Ny=D({addStrict_:function(r,t){var e=C(r,"a","addStrict"),n=C(t,"b","addStrict");return Ie(e.shape,n.shape,"Error in addStrict: "),e.add(n)}}),Fy=D({atan2_:function(r,t){var e,n=C(r,"a","atan2"),o=C(t,"b","atan2");e=Oe(n,o),n=e[0],o=e[1];var a=xe(n.shape,o.shape);return N.runKernelFunc(function(i,s){var u=i.atan2(n,o);return s([n,o]),u},{$a:n,$b:o},function(i,s){var u=s[0],c=s[1];return{$a:function(){var l=ye(u.square(),c.square()),f=i.mul(c.div(l)),h=He(u.shape,a);return h.length>0&&(f=f.sum(h)),f.reshape(u.shape)},$b:function(){var l=ye(u.square(),c.square()),f=pa(i.mul(u.div(l))),h=He(c.shape,a);return h.length>0&&(f=f.sum(h)),f.reshape(c.shape)}}})}}),Ot=D({div_:function(r,t){var e,n=C(r,"a","div"),o=C(t,"b","div");if(e=Oe(n,o),n=e[0],o=e[1],n.dtype==="int32"&&o.dtype==="int32")return xf(n,o);var a=xe(n.shape,o.shape);return N.runKernelFunc(function(i,s){var u=i.realDivide(n,o);return s([n,o]),u},{a:n,b:o},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.div(c.toFloat()),f=He(u.shape,a);return f.length>0?l.sum(f).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),f=He(c.shape,a);f.length>0&&(l=l.sum(f).reshape(c.shape));var h=c.square();return l.div(h.toFloat()).neg()}}},"Div")}}),Py=D({divNoNan_:function(r,t){var e,n=C(r,"a","div"),o=C(t,"b","div");n=(e=Oe(n,o))[0],o=e[1];var a=Ot(n,o),i=we(a),s=o.equal(i);return nr(s,i,a)}}),My=D({divStrict_:function(r,t){var e=C(r,"a","div"),n=C(t,"b","div");return Ie(e.shape,n.shape,"Error in divideStrict: "),e.div(n)}}),xf=D({floorDiv_:function(r,t){var e,n=C(r,"a","floorDiv"),o=C(t,"b","floorDiv");e=Oe(n,o),n=e[0],o=e[1];var a=xe(n.shape,o.shape);return N.runKernelFunc(function(i,s){var u=i.floorDiv(n,o);return s([n,o]),u},{a:n,b:o},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.div(c.toFloat()),f=He(u.shape,a);return f.length>0?l.sum(f).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),f=He(c.shape,a);f.length>0&&(l=l.sum(f).reshape(c.shape));var h=c.square();return l.div(h.toFloat()).neg()}}},"FloorDiv")}}),Ms=D({maximum_:function(r,t){var e,n=C(r,"a","maximum"),o=C(t,"b","maximum");return e=Oe(n,o),n=e[0],o=e[1],n.dtype==="bool"&&(n=n.toInt(),o=o.toInt()),xe(n.shape,o.shape),N.runKernelFunc(function(a,i){var s=a.maximum(n,o);return i([n,o]),s},{a:n,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return a.mul(s.greaterEqual(u).toFloat())},b:function(){return a.mul(s.less(u).toFloat())}}},"Maximum")}}),Oy=D({maximumStrict_:function(r,t){var e=C(r,"a","maximumStrict"),n=C(t,"b","maximumStrict");return Ie(e.shape,n.shape,"Error in maximumStrict: "),e.maximum(n)}}),bf=D({minimum_:function(r,t){var e,n=C(r,"a","minimum"),o=C(t,"b","minimum");return e=Oe(n,o),n=e[0],o=e[1],n.dtype==="bool"&&(n=n.toInt(),o=o.toInt()),xe(n.shape,o.shape),N.runKernelFunc(function(a,i){var s=a.minimum(n,o);return i([n,o]),s},{a:n,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return a.mul(s.lessEqual(u).toFloat())},b:function(){return a.mul(s.greater(u).toFloat())}}},"Minimum")}}),By=D({minimumStrict_:function(r,t){var e=C(r,"a","minimumStrict"),n=C(t,"b","minimumStrict");return Ie(e.shape,n.shape,"Error in minimumStrict: "),e.minimum(n)}}),Ly=D({mod_:function(r,t){var e,n=C(r,"a","mod"),o=C(t,"b","mod");e=Oe(n,o),n=e[0],o=e[1];var a=xe(n.shape,o.shape);return N.runKernelFunc(function(i,s){var u=i.mod(n,o);return s([n,o]),u},{$a:n,$b:o},function(i,s){var u=s[0],c=s[1];return{$a:function(){var l=He(u.shape,a);return l.length>0?i.sum(l).reshape(u.shape):i},$b:function(){var l=i.mul(u.div(c).floor().neg()),f=He(c.shape,a);return f.length>0?l.sum(f).reshape(c.shape):l}}})}}),Wy=D({modStrict_:function(r,t){var e=C(r,"a","modStrict"),n=C(t,"b","modStrict");return Ie(e.shape,n.shape,"Error in modStrict: "),e.mod(n)}}),ot=D({mul_:function(r,t){var e,n=C(r,"a","mul"),o=C(t,"b","mul");e=Oe(n,o),n=e[0],o=e[1];var a=xe(n.shape,o.shape);return N.runKernelFunc(function(i,s){var u=i.multiply(n,o);return s([n,o]),u},{a:n,b:o},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.mul(c.toFloat()),f=He(u.shape,a);return f.length>0?l.sum(f).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),f=He(c.shape,a);return f.length>0?l.sum(f).reshape(c.shape):l}}},"Mul")}}),zy=D({mulStrict_:function(r,t){var e=C(r,"a","mul"),n=C(t,"b","mul");return Ie(e.shape,n.shape,"Error in multiplyStrict: "),e.mul(n)}}),va=D({pow_:function(r,t){var e,n=C(r,"base","pow"),o=C(t,"exp","pow");e=Oe(n,o),n=e[0],o=e[1];var a=xe(n.shape,o.shape),i=[n,o];return N.runKernelFunc(function(s,u){var c=s.pow(n,o);return u([n,o,c]),c},{a:n,b:o},function(s,u){var c=u[0],l=u[1],f=u[2];return{a:function(){var h=l.toFloat(),d=s.mul(h.mul(c.pow(h.sub(q(1))))),p=He(c.shape,a);return p.length>0&&(d=d.sum(p)),d.reshape(c.shape)},b:function(){var h=c.greater(0),d=c.log().where(h,we(c)),p=s.mul(f.mul(d)),m=He(l.shape,a);return m.length>0&&(p=p.sum(m)),p.reshape(l.shape)}}},"Pow",{},i,[!0])}}),Uy=D({powStrict_:function(r,t){return Ie(r.shape,t.shape,"Error in powStrict: "),r.pow(t)}}),Vy=D({squaredDifferenceStrict_:function(r,t){var e=C(r,"a","squaredDifferenceStrict"),n=C(t,"b","squaredDifferenceStrict");return Ie(e.shape,n.shape,"Error in squaredDifferenceStrict: "),e.squaredDifference(n)}}),je=D({sub_:function(r,t){var e,n=C(r,"a","sub"),o=C(t,"b","sub");e=Oe(n,o),n=e[0],o=e[1];var a=xe(n.shape,o.shape);return N.runKernelFunc(function(i){return i.subtract(n,o)},{a:n,b:o},function(i){return{a:function(){var s=i,u=He(n.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(n.shape)},b:function(){var s=i,u=He(o.shape,a);return u.length>0&&(s=s.sum(u)),s.neg().reshape(o.shape)}}},"Sub")}}),Gy=D({subStrict_:function(r,t){var e=C(r,"a","subStrict"),n=C(t,"b","subStrict");return Ie(e.shape,n.shape,"Error in subStrict: "),e.sub(n)}}),wf=D({equal_:function(r,t){var e,n=C(r,"a","equal"),o=C(t,"b","equal");return e=Oe(n,o),n=e[0],o=e[1],xe(n.shape,o.shape),N.runKernelFunc(function(a){return a.equal(n,o)},{$a:n,$b:o})}}),Hy=D({equalStrict_:function(r,t){var e=C(r,"a","equalStrict"),n=C(t,"b","equalStrict");return Ie(e.shape,n.shape,"Error in equalStrict: "),e.equal(n)}}),jy=D({greater_:function(r,t){var e,n=C(r,"a","greater"),o=C(t,"b","greater");return e=Oe(n,o),n=e[0],o=e[1],xe(n.shape,o.shape),N.runKernelFunc(function(a){return a.greater(n,o)},{a:n,b:o},null,"Greater")}}),_f=D({greaterEqual_:function(r,t){var e,n=C(r,"a","greaterEqual"),o=C(t,"b","greaterEqual");return e=Oe(n,o),n=e[0],o=e[1],xe(n.shape,o.shape),N.runKernelFunc(function(a,i){var s=a.greaterEqual(n,o);return i([n,o]),s},{a:n,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return we(s)},b:function(){return we(u)}}},"GreaterEqual")}}),qy=D({greaterEqualStrict_:function(r,t){var e=C(r,"a","greaterEqualStrict"),n=C(t,"b","greaterEqualStrict");return Ie(e.shape,n.shape,"Error in greaterEqualStrict: "),e.greaterEqual(n)}}),Ky=D({greaterStrict_:function(r,t){var e=C(r,"a","greaterStrict"),n=C(t,"b","greaterStrict");return Ie(e.shape,n.shape,"Error in greaterStrict: "),e.greater(n)}}),Xy=D({less_:function(r,t){var e,n=C(r,"a","less"),o=C(t,"b","less");return e=Oe(n,o),n=e[0],o=e[1],xe(n.shape,o.shape),N.runKernelFunc(function(a){return a.less(n,o)},{a:n,b:o},null,"Less")}}),$y=D({lessEqual_:function(r,t){var e,n=C(r,"a","lessEqual"),o=C(t,"b","lessEqual");return e=Oe(n,o),n=e[0],o=e[1],xe(n.shape,o.shape),N.runKernelFunc(function(a,i){var s=a.lessEqual(n,o);return i([n,o]),s},{a:n,b:o},null,"LessEqual")}}),Yy=D({lessEqualStrict_:function(r,t){var e=C(r,"a","lessEqualStrict"),n=C(t,"b","lessEqualStrict");return Ie(e.shape,n.shape,"Error in lessEqualStrict: "),e.lessEqual(n)}}),Jy=D({lessStrict_:function(r,t){var e=C(r,"a","lessStrict"),n=C(t,"b","lessStrict");return Ie(e.shape,n.shape,"Error in lessStrict: "),e.less(n)}}),Qy=D({notEqual_:function(r,t){var e,n=C(r,"a","notEqual"),o=C(t,"b","notEqual");return e=Oe(n,o),n=e[0],o=e[1],xe(n.shape,o.shape),N.runKernelFunc(function(a){return a.notEqual(n,o)},{a:n,b:o},null,"NotEqual")}}),Zy=D({notEqualStrict_:function(r,t){var e=C(r,"a","notEqualStrict"),n=C(t,"b","notEqualStrict");return Ie(e.shape,n.shape,"Error in notEqualStrict: "),e.notEqual(n)}});function pc(r,t){for(var e=[],n=r;n<t;++n)e.push(n);return e}function vc(r){for(var t=[],e=0;e<r.length;++e)for(var n=0;n<r[e].length;++n)t.push(r[e][n]);return t}var Os=D({gather_:function(r,t,e){e===void 0&&(e=0);var n=C(r,"x","gather"),o=C(t,"indices","gather","int32");e=qe(e,n.shape)[0];var a=function(i,s,u){for(var c=i.shape[u],l=[],f=1,h=1,d=0;d<u;d++)l.push(i.shape[d]),f*=i.shape[d];for(d=0;d<s.rank;d++)l.push(s.shape[d]);for(d=u+1;d<i.rank;d++)l.push(i.shape[d]),h*=i.shape[d];return{batchSize:f,sliceSize:h,dimSize:c,outputShape:l}}(n,o,e);return N.runKernelFunc(function(i,s){var u=i.gather(n,o.flatten(),e);return s([o]),u},{x:n,indices:o},function(i,s){var u=s[0];return{x:function(){var c=n.shape,l=u.size,f=c.slice(0,e),h=f.length,d=c.slice(e,c.length).slice(1),p=d.length,m=pc(0,h),v=pc(h+1,h+1+p),g=vc([f,[l],d]),x=i.reshape(g),w=u.reshape([l]),y=vc([[h],m,v]),b=x.transpose(y),_=Cf(b,w,n.shape[e]),E=_s(y);return _=_.transpose(E)},indices:function(){return u}}},"Gather",{axis:e}).reshape(a.outputShape)}}),Cf=D({unsortedSegmentSum_:function(r,t,e){var n=C(r,"x","unsortedSegmentSum"),o=C(t,"segmentIds","unsortedSegmentSum","int32");return S(Le(e),function(){return"numSegments must be of dtype int"}),N.runKernelFunc(function(a,i){var s=a.unsortedSegmentSum(n,o,e);return i([o]),s},{$x:n},function(a,i){var s=i[0];return{$x:function(){return function(u,c){for(var l=Ms(c,we(c)),f=Os(u,l),h=_f(c,q(0,"int32")),d=f.rank-h.rank,p=0;p<d;++p)h=Tt(h,p+1);h=Fa(h,zr(f.shape,"bool"));var m=we(f);return nr(h,f,m)}(a,s)}}})}}),e0=function(r,t,e){return Y(this,void 0,void 0,function(){var n,o,a,i,s,u,c,l,f,h,d,p,m;return J(this,function(v){switch(v.label){case 0:for(n=C(r,"tensor","boolMask"),o=C(t,"mask","boolMask","bool"),a=e??0,i=o.rank,s=n.shape,S(i>0,function(){return"mask cannot be scalar"}),Ie(s.slice(a,a+i),o.shape,"mask's shape must match the first K dimensions of tensor's shape,"),u=1,c=a;c<a+i;c++)u*=s[c];return l=s.slice(0,a).concat([u],s.slice(a+i)),f=n.reshape(l),h=o.reshape([-1]),[4,yf(h)];case 1:return d=v.sent(),p=d.squeeze([1]),m=Os(f,p,a),r!==n&&n.dispose(),t!==o&&o.dispose(),p.dispose(),f.dispose(),h.dispose(),d.dispose(),[2,m]}})})};function Ef(r,t,e,n,o,a,i){a===void 0&&(a="NHWC"),S(r.length===t.rank,function(){return"Length of inShape ("+r.length+") and rank of dy ("+t.rank+") must match"});var s=r,u=t,c=!1;t.rank===3&&(c=!0,u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]),s=[1,r[0],r[1],r[2]]),S(s.length===4,function(){return"Error in conv2dDerInput: inShape must be length 4, but got length "+s.length+"."}),S(u.rank===4,function(){return"Error in conv2dDerInput: dy must be rank 4, but got rank "+u.rank}),S(e.rank===4,function(){return"Error in conv2dDerInput: filter must be rank 4, but got rank "+e.rank});var l=a==="NHWC"?s[3]:s[1],f=a==="NHWC"?u.shape[3]:u.shape[1];S(l===e.shape[2],function(){return"Error in conv2dDerInput: depth of input ("+l+") must match input depth for filter "+e.shape[2]+"."}),S(f===e.shape[3],function(){return"Error in conv2dDerInput: depth of output ("+f+") must match output depth for filter "+e.shape[3]+"."}),i!=null&&S(Le(o),function(){return"Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var h=ks(a),d=ir(s,e.shape,n,1,o,i,!1,h),p=N.runKernelFunc(function(m,v){var g=m.conv2dDerInput(u,e,d);return v([e,u]),g},{dy4D:u,filter:e},function(m,v){var g=v[0],x=v[1];return{dy4D:function(){return Pt(m,g,n,o,a,1,i)},filter:function(){return Bs(m,x,g.shape,n,o,a,i)}}});return c?p.as3D(p.shape[1],p.shape[2],p.shape[3]):p}function vi(r){var t=function(a){return typeof a=="number"?[a,a,a]:a.length===2?[a[0],a[1],1]:a}(r),e=t[0],n=t[1],o=t[2];return e===1&&n===1&&o===1}function If(r,t,e,n,o){S(r.length===t.rank,function(){return"Length of inShape ("+r.length+") and rank of dy ("+t.rank+") must match"});var a=r,i=t,s=!1;t.rank===4&&(s=!0,i=t.as5D(1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]),a=[1,r[0],r[1],r[2],r[3]]);var u=a[4],c=i.shape[4];S(a.length===5,function(){return"Error in conv3dDerInput: inShape must be length 5, but got length "+a.length+"."}),S(i.rank===5,function(){return"Error in conv3dDerInput: dy must be rank 5, but got rank "+i.rank}),S(e.rank===5,function(){return"Error in conv3dDerInput: filter must be rank 5, but got rank "+e.rank}),S(u===e.shape[3],function(){return"Error in conv3dDerInput: depth of input ("+u+") must match input depth for filter "+e.shape[3]+"."}),S(c===e.shape[4],function(){return"Error in conv3dDerInput: depth of output ("+c+") must match output depth for filter "+e.shape[4]+"."});var l=ha(a,e.shape,n,1,o),f=N.runKernelFunc(function(h){return h.conv3dDerInput(i,e,l)},{dy5D:i});return s?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}var t0=D({conv1d_:function(r,t,e,n,o,a,i){o===void 0&&(o="NWC"),a===void 0&&(a=1);var s=C(r,"x","conv1d"),u=C(t,"filter","conv1d"),c=s,l=!1;s.rank===2&&(l=!0,c=s.as3D(1,s.shape[0],s.shape[1])),S(c.rank===3,function(){return"Error in conv1d: input must be rank 3, but got rank "+c.rank+"."}),S(u.rank===3,function(){return"Error in conv1d: filter must be rank 3, but got rank "+u.rank+"."}),i!=null&&S(Le(n),function(){return"Error in conv1d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+n+"."}),S(c.shape[2]===u.shape[1],function(){return"Error in conv1d: depth of input ("+c.shape[2]+") must match input depth for filter "+u.shape[1]+"."}),S(mt(e,a),function(){return"Error in conv1D: Either stride or dilation must be 1. Got stride "+e+" and dilation '"+a+"'"}),S(o==="NWC",function(){return"Error in conv1d: got dataFormat of "+o+" but only NWC is currently supported."});var f=u.as4D(1,u.shape[0],u.shape[1],u.shape[2]),h=c.as4D(c.shape[0],1,c.shape[1],c.shape[2]),d=Pt(h,f,[1,e],n,"NHWC",[1,a],i);return l?d.as2D(d.shape[2],d.shape[3]):d.as3D(d.shape[0],d.shape[2],d.shape[3])}}),Pt=D({conv2d_:function(r,t,e,n,o,a,i){o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]);var s=C(r,"x","conv2d"),u=C(t,"filter","conv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),S(c.rank===4,function(){return"Error in conv2d: input must be rank 4, but got rank "+c.rank+"."}),S(u.rank===4,function(){return"Error in conv2d: filter must be rank 4, but got rank "+u.rank+"."}),i!=null&&S(Le(n),function(){return"Error in conv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+n+"."});var f=o==="NHWC"?c.shape[3]:c.shape[1];S(f===u.shape[2],function(){return"Error in conv2d: depth of input ("+f+") must match input depth for filter "+u.shape[2]+"."}),S(mt(e,a),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"});var h=ks(o),d=ir(c.shape,u.shape,e,a,n,i,!1,h),p=[u,c],m=N.runKernelFunc(function(v,g){var x=v.conv2d(c,u,d);return g([u,c]),x},{x:c,filter:u},function(v,g){var x=g,w=x[0],y=x[1];return S(Fr(a),function(){return"Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+a+"'"}),{x:function(){return Rf(y.shape,v,w,e,n,o)},filter:function(){return Bs(y,v,w.shape,e,n,o)}}},"Conv2D",d,p);return l?m.as3D(m.shape[1],m.shape[2],m.shape[3]):m}}),n0=D({conv3d_:function(r,t,e,n,o,a){o===void 0&&(o="NDHWC"),a===void 0&&(a=[1,1,1]);var i=C(r,"x","conv3d"),s=C(t,"filter","conv3d"),u=i,c=!1;i.rank===4&&(c=!0,u=i.as5D(1,i.shape[0],i.shape[1],i.shape[2],i.shape[3])),S(u.rank===5,function(){return"Error in conv3d: input must be rank 5, but got rank "+u.rank+"."}),S(s.rank===5,function(){return"Error in conv3d: filter must be rank 5, but got rank "+s.rank+"."}),S(u.shape[4]===s.shape[3],function(){return"Error in conv3d: depth of input ("+u.shape[4]+") must match input depth for filter "+s.shape[3]+"."}),S(function(h,d){return vi(h)||vi(d)}(e,a),function(){return"Error in conv3D: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"}),S(o==="NDHWC",function(){return"Error in conv3d: got dataFormat of "+o+" but only NDHWC is currently supported."});var l=ha(u.shape,s.shape,e,a,n),f=N.runKernelFunc(function(h,d){var p=h.conv3d(u,s,l);return d([u,s]),p},{x:u,$filter:s},function(h,d){S(vi(a),function(){return"Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+a+"'"});var p=d[0],m=d[1];return{x:function(){return If(p.shape,h,m,e,n)},$filter:function(){return function(v,g,x,w,y){var b=v;v.rank===4&&(b=v.as5D(1,v.shape[0],v.shape[1],v.shape[2],v.shape[3]));var _=g;_.rank===4&&(_=g.as5D(1,g.shape[0],g.shape[1],g.shape[2],g.shape[3])),S(b.rank===5,function(){return"Error in conv3dDerFilter: input must be rank 5, but got shape "+b.shape+"."}),S(_.rank===5,function(){return"Error in conv3dDerFilter: dy must be rank 5, but got shape "+_.shape+"."}),S(x.length===5,function(){return"Error in conv3dDerFilter: filterShape must be length 5, but got "+x+"."}),S(b.shape[4]===x[3],function(){return"Error in conv3dDerFilter: depth of input "+b.shape[4]+") must match input depth in filter ("+x[3]+"."}),S(_.shape[4]===x[4],function(){return"Error in conv3dDerFilter: depth of dy ("+_.shape[4]+") must match output depth for filter ("+x[4]+")."});var E=ha(b.shape,x,w,1,y);return N.runKernelFunc(function(I){return I.conv3dDerFilter(b,_,E)},{x5D:b,dy5D:_})}(p,h,m.shape,e,n)}}});return c?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),Bs=D({conv2dDerFilter_:function(r,t,e,n,o,a,i){a===void 0&&(a="NHWC");var s=r;r.rank===3&&(s=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var u=t;u.rank===3&&(u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),S(s.rank===4,function(){return"Error in conv2dDerFilter: input must be rank 4, but got shape "+s.shape+"."}),S(u.rank===4,function(){return"Error in conv2dDerFilter: dy must be rank 4, but got shape "+u.shape+"."}),S(e.length===4,function(){return"Error in conv2dDerFilter: filterShape must be length 4, but got "+e+"."});var c=a==="NHWC"?s.shape[3]:s.shape[1],l=a==="NHWC"?u.shape[3]:u.shape[1];S(c===e[2],function(){return"Error in conv2dDerFilter: depth of input "+c+") must match input depth in filter ("+e[2]+"."}),S(l===e[3],function(){return"Error in conv2dDerFilter: depth of dy ("+l+") must match output depth for filter ("+e[3]+")."}),i!=null&&S(Le(o),function(){return"Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var f=ks(a),h=ir(s.shape,e,n,1,o,i,!1,f);return N.runKernelFunc(function(d){return d.conv2dDerFilter(s,u,h)},{x4D:s,dy4D:u})}}),Rf=D({conv2dDerInput_:Ef}),Pa=D({depthwiseConv2d_:function(r,t,e,n,o,a,i){a===void 0&&(a=[1,1]);var s=C(r,"x","depthwiseConv2d"),u=C(t,"filter","depthwiseConv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),S(c.rank===4,function(){return"Error in depthwiseConv2d: input must be rank 4, but got rank "+c.rank+"."}),S(u.rank===4,function(){return"Error in depthwiseConv2d: filter must be rank 4, but got rank "+u.rank+"."}),S(c.shape[3]===u.shape[2],function(){return"Error in depthwiseConv2d: number of input channels ("+c.shape[3]+") must match the inChannels dimension in filter "+u.shape[2]+"."}),a==null&&(a=[1,1]),S(mt(e,a),function(){return"Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"}),i!=null&&S(Le(n),function(){return"Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+n+"."});var f=ir(c.shape,u.shape,e,a,n,i,!0),h=[c,u],d=N.runKernelFunc(function(p,m){var v=p.depthwiseConv2D(c,u,f);return m([c,u]),v},{x:c,filter:u},function(p,m){S(Fr(a),function(){return"Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+a+"'"});var v=m[0],g=m[1];return{x:function(){return kf(v.shape,p,g,f)},filter:function(){return Sf(v,p,g.shape,f)}}},"DepthwiseConv2dNative",f,h);return l?d.as3D(d.shape[1],d.shape[2],d.shape[3]):d}}),kf=D({depthwiseConv2dDerInput_:function(r,t,e,n){var o=t,a=!1;t.rank===3&&(a=!0,o=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]));var i=N.runKernelFunc(function(s){return s.depthwiseConv2DDerInput(o,e,n)},{dy4D:o});return a?i.as3D(i.shape[1],i.shape[2],i.shape[3]):i}}),Sf=D({depthwiseConv2dDerFilter_:function(r,t,e,n){var o=r;r.rank===3&&(o=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var a=t;return a.rank===3&&(a=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),N.runKernelFunc(function(i){return i.depthwiseConv2DDerFilter(o,a,n)},{x4D:o,dy4D:a})}}),Ls=D({separableConv2d_:function(r,t,e,n,o,a,i){a===void 0&&(a=[1,1]),i===void 0&&(i="NHWC");var s=C(r,"x","separableConv2d"),u=C(t,"depthwiseFilter","separableConv2d"),c=C(e,"pointwiseFilter","separableConv2d"),l=s,f=!1;if(s.rank===3&&(f=!0,l=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),i==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");S(l.rank===4,function(){return"Error in separableConv2d: input must be rank 4, but got rank "+l.rank+"."}),S(u.rank===4,function(){return"Error in separableConv2d: depthwise filter must be rank 4, but got rank "+u.rank+"."}),S(c.rank===4,function(){return"Error in separableConv2d: pointwise filter must be rank 4, but got rank "+u.rank+"."}),S(c.shape[0]===1,function(){return"Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got "+c.shape[0]+"."}),S(c.shape[1]===1,function(){return"Error in separableConv2d: the second dimension of pointwise filter must be 1, but got "+c.shape[1]+"."});var h=u.shape[2],d=u.shape[3];S(c.shape[2]===h*d,function(){return"Error in separableConv2d: the third dimension of pointwise filter must be "+h*d+", but got "+c.shape[2]+"."});var p=Pa(l,u,n,o,i,a),m=Pt(p,c,1,"valid",i);return f?m.as3D(m.shape[1],m.shape[2],m.shape[3]):m}}),r0=D({conv2dTranspose_:function(r,t,e,n,o,a){return Ef(e,C(r,"x","conv2dTranspose"),C(t,"filter","conv2dTranspose"),n,o,"NHWC",a)}}),o0=D({conv3dTranspose_:function(r,t,e,n,o){return If(e,C(r,"x","conv3dTranspose"),C(t,"filter","conv3dTranspose"),n,o)}}),Ma=D({matMul_:function(r,t,e,n){var o;e===void 0&&(e=!1),n===void 0&&(n=!1);var a=C(r,"a","matMul"),i=C(t,"b","matMul");o=Oe(a,i),a=o[0],i=o[1];var s=e?a.shape[a.rank-2]:a.shape[a.rank-1],u=n?i.shape[i.rank-1]:i.shape[i.rank-2],c=e?a.shape[a.rank-1]:a.shape[a.rank-2],l=n?i.shape[i.rank-2]:i.shape[i.rank-1],f=a.shape.slice(0,-2),h=i.shape.slice(0,-2),d=ee(f),p=ee(h);S(a.rank>=2&&i.rank>=2&&a.rank===i.rank,function(){return"Error in matMul: inputs must have the same rank of at least 2, got ranks "+a.rank+" and "+i.rank+"."}),S(Xe(f,h),function(){return"Error in matMul: outer dimensions ("+f+") and ("+h+") of Tensors with shapes "+a.shape+" and "+i.shape+" must match."}),S(s===u,function(){return"Error in matMul: inner shapes ("+s+") and ("+u+") of Tensors with shapes "+a.shape+" and "+i.shape+" and transposeA="+e+" and transposeB="+n+" must match."});var m=a.shape.slice(0,-2).concat([c,l]),v=e?a.as3D(d,s,c):a.as3D(d,c,s),g=n?i.as3D(p,l,u):i.as3D(p,u,l),x={transposeA:e,transposeB:n};return N.runKernelFunc(function(w,y){var b=w.batchMatMul(v,g,e,n);return y([v,g]),b},{a:v,b:g},function(w,y){var b=y,_=b[0],E=b[1];return e||n?!e&&n?{a:function(){return w.matMul(E,!1,!1)},b:function(){return w.matMul(_,!0,!1)}}:e&&!n?{a:function(){return E.matMul(w,!1,!0)},b:function(){return _.matMul(w,!1,!1)}}:{a:function(){return E.matMul(w,!0,!0)},b:function(){return w.matMul(_,!0,!0)}}:{a:function(){return w.matMul(E,!1,!0)},b:function(){return _.matMul(w,!0,!1)}}},"BatchMatMul",x).reshape(m)}}),a0=D({dot_:function(r,t){var e=C(r,"t1","dot"),n=C(t,"t2","dot");S(!(e.rank!==1&&e.rank!==2||n.rank!==1&&n.rank!==2),function(){return"Error in dot: inputs must all be rank 1 or 2, but got ranks "+e.rank+" and "+n.rank+"."});var o=e.rank===1?e.size:e.shape[1],a=n.rank===1?n.size:n.shape[0];return S(o===a,function(){return"Error in dot: inner dimensions of inputs must match, but got "+o+" and "+a+"."}),e.rank===1&&n.rank===1?e.as2D(1,-1).matMul(n.as2D(-1,1)).asScalar():e.rank===1&&n.rank===2?e.as2D(1,-1).matMul(n.as2D(n.shape[0],n.shape[1])).as1D():e.rank===2&&n.rank===1?e.matMul(n.as2D(-1,1)).as1D():e.matMul(n.as2D(n.shape[0],n.shape[1]))}}),i0=D({outerProduct_:function(r,t){var e=C(r,"v1","outerProduct"),n=C(t,"v2","outerProduct");return S(e.rank===1&&n.rank===1,function(){return"Error in outerProduct: inputs must be rank 1, but got ranks "+e.rank+" and "+n.rank+"."}),e.as2D(-1,1).matMul(n.as2D(1,-1))}}),mo=D({reverse_:function(r,t){var e=C(r,"x","reverse");if(e.rank===0)return e.clone();var n=qe(t,e.shape);return N.runKernelFunc(function(o){return o.reverse(e,n)},{$x:e},function(o){return{$x:function(){return o.reverse(n)}}}).reshapeAs(e)}}),s0=D({reverse1d_:function(r){var t=C(r,"x","reverse");return S(t.rank===1,function(){return"Error in reverse1D: x must be rank 1 but got rank "+t.rank+"."}),mo(t,0)}}),u0=D({reverse2d_:function(r,t){var e=C(r,"x","reverse");return S(e.rank===2,function(){return"Error in reverse2D: x must be rank 2 but got rank "+e.rank+"."}),mo(e,t)}}),c0=D({reverse3d_:function(r,t){var e=C(r,"x","reverse");return S(e.rank===3,function(){return"Error in reverse3D: x must be rank 3 but got rank "+e.rank+"."}),mo(e,t)}}),l0=D({reverse4d_:function(r,t){var e=C(r,"x","reverse");return S(e.rank===4,function(){return"Error in reverse4D: x must be rank 4 but got rank "+e.rank+"."}),mo(e,t)}});function Df(r,t,e,n,o,a){var i=C(r,"x","maxPool"),s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),S(s.rank===4,function(){return"Error in maxPool: input must be rank 4 but got rank "+s.rank+"."}),S(mt(e,n),function(){return"Error in maxPool: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+n+"'"}),a!=null&&S(Le(o),function(){return"Error in maxPool: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var c=ro(s.shape,t,e,n,o,a);if(c.filterWidth===1&&c.filterHeight===1&&Xe(c.inShape,c.outShape))return i.clone();var l=[s],f=N.runKernelFunc(function(h,d){var p=h.maxPool(s,c);return d([s,p]),p},{x:s},function(h,d){var p=d[0],m=d[1];return{x:function(){return function(v,g,x,w,y,b,_,E){var I=C(v,"dy","maxPoolBackprop"),R=C(g,"input","maxPoolBackprop"),k=C(x,"output","maxPoolBackprop");S(R.rank===I.rank,function(){return"Rank of input ("+R.rank+") does not match rank of dy ("+I.rank+")"}),S(mt(y,b),function(){return"Error in maxPoolBackProp: Either strides or dilations must be 1. Got strides "+y+" and dilations '"+b+"'"}),S(I.rank===4,function(){return"Error in maxPoolBackprop: dy must be rank 4 but got rank "+I.rank+"."}),S(R.rank===4,function(){return"Error in maxPoolBackprop: input must be rank 4 but got rank "+R.rank+"."});var T=ro(R.shape,w,y,b,_,E);return N.runKernelFunc(function(A){return A.maxPoolBackprop(I,R,k,T)},{$dy:I,$input:R})}(h,p,m,t,e,n,o)}}},"MaxPool",c,l);return u?f.as3D(f.shape[1],f.shape[2],f.shape[3]):f}function Af(r,t,e,n,o,a){var i=C(r,"x","avgPool","float32");S(mt(e,n),function(){return"Error in avgPool: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+n+"'"});var s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),S(s.rank===4,function(){return"Error in avgPool: x must be rank 4 but got rank "+s.rank+"."}),a!=null&&S(Le(o),function(){return"Error in avgPool: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var c=ro(s.shape,t,e,n,o,a);if(c.filterWidth===1&&c.filterHeight===1&&Xe(c.inShape,c.outShape))return i.clone();var l=N.runKernelFunc(function(f){return f.avgPool(s,c)},{x:s},function(f){return{x:function(){return function(h,d,p,m,v,g){var x=C(h,"dy","avgPoolBackprop"),w=C(d,"input","avgPoolBackprop");S(w.rank===x.rank,function(){return"Rank of input ("+w.rank+") does not match rank of dy ("+x.rank+")"}),S(mt(m,v),function(){return"Error in avgPoolBackprop: Either strides or dilations must be 1. Got strides "+m+" and dilations '"+v+"'"});var y=w,b=x,_=!1;w.rank===3&&(_=!0,y=w.as4D(1,w.shape[0],w.shape[1],w.shape[2]),b=x.as4D(1,x.shape[0],x.shape[1],x.shape[2])),S(b.rank===4,function(){return"Error in avgPoolBackprop: dy must be rank 4 but got rank "+b.rank+"."}),S(y.rank===4,function(){return"Error in avgPoolBackprop: input must be rank 4 but got rank "+y.rank+"."});var E=ro(y.shape,p,m,v,g),I=N.runKernelFunc(function(R){return R.avgPoolBackprop(b,y,E)},{dy4D:b,input4D:y});return _?I.as3D(I.shape[1],I.shape[2],I.shape[3]):I}(f,s,t,e,n,o)}}},"AvgPool",c);return l=l.cast(i.dtype),u?l.as3D(l.shape[1],l.shape[2],l.shape[3]):l}var Ke=D({maxPool_:function(r,t,e,n,o){return Df(r,t,e,1,n,o)}}),go=D({avgPool_:function(r,t,e,n,o){return Af(r,t,e,1,n,o)}}),f0=D({pool_:function(r,t,e,n,o,a){o==null&&(o=[1,1]),a==null&&(a=1),n===0&&(n="valid");var i=C(r,"x","maxPool"),s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),S(mt(a,o),function(){return"Error in pool: Either strides or dilations must be 1. Got strides "+a+" and dilations '"+o+"'"});var c,l=ro(s.shape,t,a,o,n),f=[l.dilationHeight,l.dilationWidth];c=n==="same"?function(y,b){var _=y.map(function(R,k){return R+(R-1)*(b[k]-1)}).map(function(R){return R-1}),E=_.map(function(R){return Math.floor(R/2)}),I=_.map(function(R,k){return R-E[k]});return _.map(function(R,k){return[E[k],I[k]]})}([l.filterHeight,l.filterWidth],f):[[0,0],[0,0]];var h=f[0]===1&&f[1]===1,d=function(y,b,_){var E=_.map(function(M){return M[0]}),I=_.map(function(M){return M[1]}),R=y.concat(E,I),k=b.map(function(M,O){return(M-R[O]%M)%M}),T=I.map(function(M,O){return M+k[O]}),A=b.map(function(M,O){return[E[O],T[O]]}),B=b.map(function(M,O){return[0,k[O]]});return[A,B]}([l.inHeight,l.inWidth],f,c),p=d[0],m=d[1],v=h?n:"valid",g=h?s:Ml(s,f,p),x=(e==="avg"?function(){return Af(g,t,a,1,v)}:function(){return Df(g,t,a,1,v)})(),w=h?x:Nl(x,f,m);return u?w.as3D(w.shape[1],w.shape[2],w.shape[3]):w}}),h0=D({maxPool3d_:function(r,t,e,n,o,a,i){a===void 0&&(a="NDHWC");var s=C(r,"x","maxPool3d"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),i==null&&(i=[1,1,1]),S(u.rank===5,function(){return"Error in maxPool3d: x must be rank 5 but got rank "+u.rank+"."}),S(a==="NDHWC",function(){return"Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of "+a}),S(mt(e,i),function(){return"Error in maxPool3d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"}),o!=null&&S(Le(n),function(){return"Error in maxPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+n+"."});var l=fa(u.shape,t,e,i,n,o,a),f=N.runKernelFunc(function(h,d){var p=h.maxPool3d(u,l);return d([u,p]),p},{x:u},function(h,d){var p=d[0],m=d[1];return{x:function(){return function(v,g,x,w,y,b,_,E){var I=C(v,"dy","maxPool3dBackprop"),R=C(g,"input","maxPool3dBackprop"),k=C(x,"output","maxPool3dBackprop"),T=I,A=R,B=k,M=!1;R.rank===4&&(M=!0,T=I.as5D(1,I.shape[0],I.shape[1],I.shape[2],I.shape[3]),A=R.as5D(1,R.shape[0],R.shape[1],R.shape[2],R.shape[3]),B=k.as5D(1,k.shape[0],k.shape[1],k.shape[2],k.shape[3])),S(T.rank===5,function(){return"Error in maxPool3dBackprop: dy must be rank 5 but got rank "+T.rank+"."}),S(A.rank===5,function(){return"Error in maxPool3dBackprop: input must be rank 5 but got rank "+A.rank+"."}),S(B.rank===5,function(){return"Error in maxPool3dBackprop: output must be rank 5 but got rank "+B.rank+"."}),b==null&&(b=[1,1,1]),S(mt(y,b),function(){return"Error in maxPool3dBackprop: Either strides or dilations must be 1. Got strides "+y+" and dilations '"+b+"'"}),E!=null&&S(Le(_),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+E+" but got pad "+_+"."});var O=fa(A.shape,w,y,b,_,E),U=N.runKernelFunc(function(z){return z.maxPool3dBackprop(T,A,B,O)},{dy5D:T,input5D:A});return M?U.as4D(U.shape[1],U.shape[2],U.shape[3],U.shape[4]):U}(h,p,m,t,e,i,n,o)}}});return c?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),d0=D({avgPool3d_:function(r,t,e,n,o,a,i){a===void 0&&(a="NDHWC");var s=C(r,"x","avgPool3d","float32"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),i==null&&(i=[1,1,1]),S(u.rank===5,function(){return"Error in avgPool3d: x must be rank 5 but got rank "+u.rank+"."}),S(a==="NDHWC",function(){return"Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of "+a}),S(mt(e,i),function(){return"Error in avgPool3d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"}),o!=null&&S(Le(n),function(){return"Error in avgPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+n+"."});var l=fa(u.shape,t,e,i,n,o,a),f=N.runKernelFunc(function(h){return h.avgPool3d(u,l)},{x:u},function(h){return{x:function(){return function(d,p,m,v,g,x,w){var y=C(d,"dy","avgPool3dBackprop"),b=C(p,"input","avgPool3dBackprop"),_=y,E=b,I=!1;b.rank===4&&(I=!0,_=y.as5D(1,y.shape[0],y.shape[1],y.shape[2],y.shape[3]),E=b.as5D(1,b.shape[0],b.shape[1],b.shape[2],b.shape[3])),S(_.rank===5,function(){return"Error in avgPool3dBackprop: dy must be rank 5 but got rank "+_.rank+"."}),S(E.rank===5,function(){return"Error in avgPool3dBackprop: input must be rank 5 but got rank "+E.rank+"."}),g==null&&(g=[1,1,1]),S(mt(v,g),function(){return"Error in avgPool3dBackprop: Either strides or dilations must be 1. Got strides "+v+" and dilations '"+g+"'"}),w!=null&&S(Le(x),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+w+" but got pad "+x+"."});var R=fa(E.shape,m,v,g,x,w),k=N.runKernelFunc(function(T){return T.avgPool3dBackprop(_,E,R)},{dy5D:_,input5D:E});return I?k.as4D(k.shape[1],k.shape[2],k.shape[3],k.shape[4]):k}(h,u,t,e,i,n,o)}}});return f=f.cast(u.dtype),c?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),rn=D({slice_:function(r,t,e){var n,o,a=C(r,"x","slice");if(a.rank===0)throw new Error("Slicing scalar is not possible");(n=typeof t=="number"?[t].concat(new Array(a.rank-1).fill(0)):t.length<a.rank?t.concat(new Array(a.rank-t.length).fill(0)):t.slice()).forEach(function(u){S(u!==-1,function(){return"slice() does not support negative begin indexing."})}),o=(o=e==null?new Array(a.rank).fill(-1):typeof e=="number"?[e].concat(new Array(a.rank-1).fill(-1)):e.length<a.rank?e.concat(new Array(a.rank-e.length).fill(-1)):e).map(function(u,c){return u>=0?u:(S(u===-1,function(){return"Negative size values should be exactly -1 but got "+u+" for the slice() size at index "+c+"."}),a.shape[c]-n[c])}),Uv(a,n,o);var i=a.shape,s={begin:n,size:o};return N.runKernelFunc(function(u){return u.slice(a,n,o)},{x:a},function(u){for(var c=[],l=0;l<u.rank;l++)c.push([n[l],i[l]-n[l]-o[l]]);return{x:function(){return u.pad(c)}}},"Slice",s)}}),p0=D({slice1d_:function(r,t,e){var n=C(r,"x","slice1d");return S(n.rank===1,function(){return"slice1d expects a rank-1 tensor, but got a rank-"+n.rank+" tensor"}),rn(n,[t],[e])}}),v0=D({slice2d_:function(r,t,e){var n=C(r,"x","slice2d");return S(n.rank===2,function(){return"slice2d expects a rank-2 tensor, but got a rank-"+n.rank+" tensor"}),rn(n,t,e)}}),Tf=D({slice3d_:function(r,t,e){var n=C(r,"x","slice3d");return S(n.rank===3,function(){return"slice3d expects a rank-3 tensor, but got a rank-"+n.rank+" tensor"}),rn(n,t,e)}}),m0=D({slice4d_:function(r,t,e){var n=C(r,"x","slice4d");return S(n.rank===4,function(){return"slice4d expects a rank-4 tensor, but got a rank-"+n.rank+" tensor"}),rn(n,t,e)}});function Nf(r,t,e,n,o){return t.rank<e.rank&&(t=t.reshape(vt(t.shape,n))),r.rank<e.rank&&(r=r.reshape(vt(r.shape,n))),{x:function(){var a=r.mul(e.equal(t).cast(r.dtype));return o==null?a:a.transpose(o)}}}var g0=D({all_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=C(r,"x","all","bool"),o=qe(t,n.shape),a=o,i=un(a,n.rank);i!=null&&(n=n.transpose(i),a=cn(a.length,n.rank));var s=N.runKernelFunc(function(c){return c.all(n,a)},{$x:n});if(e){var u=vt(s.shape,o);return s.reshape(u)}return s}}),y0=D({any_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=C(r,"x","any","bool"),o=qe(t,n.shape),a=o,i=un(a,n.rank);i!=null&&(n=n.transpose(i),a=cn(a.length,n.rank));var s=N.runKernelFunc(function(c){return c.any(n,a)},{$x:n});if(e){var u=vt(s.shape,o);return s.reshape(u)}return s}}),x0=D({argMax_:function(r,t){t===void 0&&(t=0);var e=C(r,"x","argMax");t==null&&(t=0);var n=qe(t,e.shape),o=un(n,e.rank);o!=null&&(e=e.transpose(o),n=cn(n.length,e.rank));var a={axis:n[0]},i=[e];return N.runKernelFunc(function(s,u){var c=s.argMax(e,n[0]);return u([e]),c},{x:e},function(s,u){var c=u[0];return{x:function(){return we(c)}}},"ArgMax",a,i)}}),b0=D({argMin_:function(r,t){t===void 0&&(t=0);var e=C(r,"x","argMin");t==null&&(t=0);var n=qe(t,e.shape),o=un(n,e.rank);return o!=null&&(e=e.transpose(o),n=cn(n.length,e.rank)),N.runKernelFunc(function(a,i){var s=a.argMin(e,n[0]);return i([e]),s},{$x:e},function(a,i){var s=i[0];return{$x:function(){return we(s)}}})}}),w0=D({logSumExp_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=C(r,"x","logSumExp"),o=qe(t,n.shape),a=n.max(o,!0),i=n.sub(a).exp().sum(o).log(),s=a.reshape(i.shape).add(i);if(e){var u=vt(s.shape,o);return s.reshape(u)}return s}}),Oa=D({max_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=C(r,"x","max"),o=n,a=qe(t,n.shape),i=a,s=un(i,n.rank);s!=null&&(n=n.transpose(s),i=cn(i.length,n.rank));var u=[n],c=N.runKernelFunc(function(f,h){var d=f.max(n,i);return h([o,d]),d},{x:n},function(f,h){return Nf(f,h[1],h[0],a,s)},"Max",{axes:i},u,[!0]);if(e){var l=vt(c.shape,a);c=c.reshape(l)}return c}}),_0=D({mean_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=C(r,"x","mean"),o=qe(t,n.shape),a=ee(et(n.shape,o)[1]);return Ta(function(i){var s=q(a);return{value:(s.dtype===i.dtype?i:i.cast(s.dtype)).div(s).sum(t,e),gradFunc:function(u){var c=i.shape.slice();return o.forEach(function(l){c[l]=1}),u.reshape(c).mul(zr(i.shape,"float32")).div(a)}}})(n)}}),C0=D({min_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=C(r,"x","min"),o=n,a=qe(t,n.shape),i=a,s=un(i,n.rank);s!=null&&(n=n.transpose(s),i=cn(i.length,n.rank));var u=[n],c=N.runKernelFunc(function(f,h){var d=f.min(n,i);return h([o,d]),d},{x:n},function(f,h){return Nf(f,h[1],h[0],a,s)},"Min",{axes:i},u,[!0]);if(e){var l=vt(c.shape,a);c=c.reshape(l)}return c}}),E0=D({moments_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=qe(t,(r=C(r,"x","moments")).shape),o=r.mean(n,e),a=o.shape;e||(a=vt(o.shape,n));var i=r.toFloat().sub(o.reshape(a)).square();return{mean:o,variance:i.mean(n,e)}}}),Ff=D({sum_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=C(r,"x","sum");n.dtype==="bool"&&(n=n.toInt());var o=qe(t,n.shape);return Ta(function(a){var i=un(o,a.rank),s=o,u=a;i!=null&&(u=a.transpose(i),s=cn(s.length,a.rank));var c=function(d){var p=a.shape.slice();return o.forEach(function(m){p[m]=1}),d.reshape(p).mul(zr(a.shape,"float32"))},l={axes:s},f=N.runKernelFunc(function(d){return d.sum(u,s)},{x:u},function(d){return{x:function(){return c(d)}}},"Sum",l);if(e){var h=vt(f.shape,o);f=f.reshape(h)}return{value:f,gradFunc:c}})(n)}}),I0=D({prod_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=C(r,"x","prod");n.dtype==="bool"&&(n=n.toInt());var o=qe(t,n.shape),a=un(o,n.rank),i=o,s=n;a!=null&&(s=n.transpose(a),i=cn(i.length,n.rank));var u=N.runKernelFunc(function(l){return l.prod(s,i)},{permutedX:s});if(e){var c=vt(u.shape,o);u=u.reshape(c)}return u}}),Pf=D({elu_:function(r){var t=C(r,"x","elu");return N.runKernelFunc(function(e,n){var o=e.elu(t);return n([o]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return N.runKernelFunc(function(a){return a.eluDer(e,o)},{dy:e,y:o})}}})}}),R0=D({leakyRelu_:function(r,t){t===void 0&&(t=.2);var e=C(r,"x","leakyRelu");return Ms(q(t).mul(e),e)}}),Mf=D({prelu_:function(r,t){var e=C(r,"x","prelu"),n=C(t,"alpha","prelu");return N.runKernelFunc(function(o,a){var i=o.prelu(e,n);return a([e,n]),i},{x:e,alpha:n},function(o,a){var i=a[0],s=a[1],u=i.greater(0);return{x:function(){return nr(u,o,o.mul(s))},alpha:function(){var c=nr(u,we(o),o.mul(i)),l=He(s.shape,o.shape);return l.length>0&&(c=c.sum(l)),c.reshape(s.shape)}}},"Prelu")}}),Me=D({relu_:function(r){var t=C(r,"x","relu");return t.dtype==="bool"?t.toInt():N.runKernelFunc(function(e,n){var o=e.relu(t);return n([t]),o},{x:t},function(e,n){var o=n[0];return{x:function(){return e.mulStrict(o.step().toFloat())}}},"Relu")}}),Of=D({relu6_:function(r){var t=C(r,"x","relu6");return t.dtype==="bool"?t.toInt():N.runKernelFunc(function(e,n){var o=e.relu6(t);return n([t]),o},{x:t},function(e,n){var o=n[0],a=o.lessEqual(6).mul(o.step());return{x:function(){return e.mulStrict(a.toFloat())}}},"Relu6")}}),k0=D({selu_:function(r){var t=C(r,"x","selu");return N.runKernelFunc(function(e,n){var o=e.selu(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){var a=o.greater(q(0)),i=q(Ns),s=q(Fs),u=e.mul(s),c=e.mul(i).mul(o.toFloat().exp());return nr(a,u,c)}}})}}),Ln=D({transpose_:function(r,t){var e=C(r,"x","transpose");if(t==null&&(t=e.shape.map(function(o,a){return a}).reverse()),S(e.rank===t.length,function(){return"Error in transpose: rank of input "+e.rank+" must match length of perm "+t+"."}),t.forEach(function(o){S(o>=0&&o<e.rank,function(){return"All entries in 'perm' must be between 0 and "+(e.rank-1)+" but got "+t})}),e.rank<=1)return e.clone();var n={perm:t};return N.runKernelFunc(function(o){return o.transpose(e,t)},{x:e},function(o){var a=_s(t);return{x:function(){return o.transpose(a)}}},"Transpose",n)}}),S0=D({localResponseNormalization_:function(r,t,e,n,o){t===void 0&&(t=5),e===void 0&&(e=1),n===void 0&&(n=1),o===void 0&&(o=.5);var a=C(r,"x","localResponseNormalization");S(a.rank===4||a.rank===3,function(){return`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank `+a.rank+"."}),S(Le(t),function(){return"Error in localResponseNormalization: depthRadius must be an integer but got depthRadius "+t+"."});var i=a,s=!1;a.rank===3&&(s=!0,i=a.as4D(1,a.shape[0],a.shape[1],a.shape[2]));var u=N.runKernelFunc(function(c,l){var f=c.localResponseNormalization4D(i,t,e,n,o);return l([i,f]),f},{x4D:i},function(c,l){var f=l[0],h=l[1];return{x4D:function(){return N.runKernelFunc(function(d){return d.LRNGrad(c,f,h,t,e,n,o)},{})}}});return s?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),Bf=D({norm_:function(r,t,e,n){t===void 0&&(t="euclidean"),e===void 0&&(e=null),n===void 0&&(n=!1);var o=function s(u,c,l){if(l===void 0&&(l=null),u.rank===0)return u.abs();if(u.rank!==1&&l===null)return s(u.reshape([-1]),c,l);if(u.rank===1||typeof l=="number"||Array.isArray(l)&&l.length===1){if(c===1)return u.abs().sum(l);if(c===1/0)return u.abs().max(l);if(c===-1/0)return u.abs().min(l);if(c==="euclidean"||c===2)return u.abs().pow(q(2,"int32")).sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}if(Array.isArray(l)&&l.length===2){if(c===1)return u.abs().sum(l[0]).max(l[1]-1);if(c===1/0)return u.abs().sum(l[1]).max(l[0]);if(c===-1/0)return u.abs().sum(l[1]).min(l[0]);if(c==="fro"||c==="euclidean")return u.square().sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}throw new Error("Error in norm: invalid axis: "+l)}(r=C(r,"x","norm"),t,e),a=o.shape;if(n){var i=qe(e,r.shape);a=vt(o.shape,i)}return o.reshape(a)}}),D0=D({basicLSTMCell_:function(r,t,e,n,o,a){var i=C(r,"forgetBias","basicLSTMCell"),s=C(t,"lstmKernel","basicLSTMCell"),u=C(e,"lstmBias","basicLSTMCell"),c=C(n,"data","basicLSTMCell"),l=C(o,"c","basicLSTMCell"),f=C(a,"h","basicLSTMCell"),h=c.concat(f,1).matMul(s).add(u),d=h.shape[0],p=h.shape[1]/4,m=[d,p],v=h.slice([0,0],m),g=h.slice([0,p],m),x=h.slice([0,2*p],m),w=h.slice([0,3*p],m),y=v.sigmoid().mulStrict(g.tanh()).addStrict(l.mulStrict(i.add(x).sigmoid())),b=y.tanh().mulStrict(w.sigmoid());return[y,b]}}),A0=D({multiRNNCell_:function(r,t,e,n){for(var o=C(t,"data","multiRNNCell"),a=aa(e,"c","multiRNNCell"),i=aa(n,"h","multiRNNCell"),s=o,u=[],c=0;c<r.length;c++){var l=r[c](s,a[c],i[c]);u.push(l[0]),u.push(l[1]),s=l[1]}var f=[],h=[];for(c=0;c<u.length;c+=2)f.push(u[c]),h.push(u[c+1]);return[f,h]}}),T0=D({movingAverage_:function(r,t,e,n,o){o===void 0&&(o=!0);var a=C(r,"v","movingAverage"),i=C(t,"x","movingAverage"),s=C(e,"decay","movingAverage");Sp(a,i),S(Xe(a.shape,i.shape),function(){return"Shape mismatch in v and x"});var u=q(1),c=u.sub(s),l=i.sub(a).mul(c);if(o){S(n!=null,function(){return"When using zeroDebias: true, step is required."});var f=C(n,"step","movingAverage");l=l.div(u.sub(va(s,f)))}return a.add(l)}}),N0=D({stridedSlice_:function(r,t,e,n,o,a,i,s,u){if(o===void 0&&(o=0),a===void 0&&(a=0),i===void 0&&(i=0),s===void 0&&(s=0),u===void 0&&(u=0),n==null&&(n=new Array(t.length)),i!==0)throw new Error("ellipsis mask is not yet supported");var c=C(r,"x","stridedSlice"),l=Xu(s),f=c.shape.slice();l.forEach(function(v){t[v]=0,e[v]=1,f.splice(v,0,1)}),c=c.reshape(f);for(var h=0;h<c.rank;h++)t[h]=Vv(o,t,n,c.shape,h),e[h]=Gv(a,e,n,c.shape,h),n[h]=n[h]||1;var d=Xu(u);d.forEach(function(v){e[v]=t[v]+1,n[v]=1});var p=Rs(t,e,n),m=p.filter(function(v,g){return d.indexOf(g)===-1});return n.every(function(v){return v===1})?rn(c,t,p).reshape(m):N.runKernelFunc(function(v){return v.stridedSlice(c,t,e,n)},{$x:c}).reshape(m)}}),F0=D({topk_:function(r,t,e){t===void 0&&(t=1),e===void 0&&(e=!0);var n=C(r,"x","topk");if(n.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");var o=n.shape[n.shape.length-1];if(t>o)throw new Error("'k' passed to topk() must be <= the last dimension ("+o+") but got "+t);var a=N.runKernelFunc(function(i){return i.topk(n,t,e)},{$x:n});return{values:a[0],indices:a[1]}}}),P0=D({scatterND_:function(r,t,e){var n=C(r,"indices","scatterND","int32"),o=C(t,"updates","scatterND");return zv(o,n,e),N.runKernelFunc(function(a){return a.scatterND(n,o,e)},{indices:n,updates:o},null,"ScatterNd",{shape:e})}}),Ws=D({fft_:function(r){S(r.dtype==="complex64",function(){return"The dtype for tf.spectral.fft() must be complex64 but got "+r.dtype+"."});var t=r.shape[r.shape.length-1],e=r.size/t,n=r.as2D(e,t);return N.runKernelFunc(function(o){return o.fft(n)},{input:r}).reshape(r.shape)}}),ma=D({ifft_:function(r){S(r.dtype==="complex64",function(){return"The dtype for tf.spectral.ifft() must be complex64 but got "+r.dtype+"."});var t=r.shape[r.shape.length-1],e=r.size/t,n=r.as2D(e,t);return N.runKernelFunc(function(o){return o.ifft(n)},{input:r}).reshape(r.shape)}}),zs=D({rfft_:function(r,t){S(r.dtype==="float32",function(){return"The dtype for rfft() must be real value but got "+r.dtype});var e,n=r.shape[r.shape.length-1],o=r.size/n;if(t!=null&&t<n){var a=r.shape.map(function(g){return 0}),i=r.shape.map(function(g){return g});i[r.shape.length-1]=t,e=r.slice(a,i),n=t}else if(t!=null&&t>n){var s=r.shape.map(function(g){return g});s[r.shape.length-1]=t-n,e=r.concat(Ne(s),r.shape.length-1),n=t}else e=r;var u=e.zerosLike(),c=Je(e,u).as2D(o,n),l=Ws(c),f=Math.floor(n/2)+1,h=Nt(l),d=Yt(l),p=h.split([f,n-f],h.shape.length-1),m=d.split([f,n-f],d.shape.length-1),v=e.shape.slice();return v[e.shape.length-1]=f,Je(p[0],m[0]).reshape(v)}}),Lf=D({irfft_:function(r){var t=r.shape[r.shape.length-1],e=r.size/t;if(t<=2){var n=r.as2D(e,t),o=ma(n);return Nt(o)}var a=[e,2*(t-1)],i=Nt(r).as2D(e,t),s=Yt(r).as2D(e,t),u=i.slice([0,1],[e,t-2]).reverse(1),c=s.slice([0,1],[e,t-2]).reverse(1).mul(q(-1)),l=i.concat(u,1),f=s.concat(c,1);return n=Je(l,f).as2D(a[0],a[1]),o=ma(n),Nt(o)}}),M0=Object.freeze({fft:Ws,ifft:ma,rfft:zs,irfft:Lf}),O0=D({sparseToDense_:function(r,t,e,n){n===void 0&&(n=0);var o=C(r,"sparseIndices","sparseToDense","int32"),a=C(t,"sparseValues","sparseToDense"),i=C(n,"defaultValue","sparseToDense",a.dtype);return function(s,u,c,l){if(s.dtype!=="int32")throw new Error("tf.sparseToDense() expects the indices to be int32 type, but the dtype was "+s.dtype+".");if(s.rank>2)throw new Error("sparseIndices should be a scalar, vector, or matrix, but got shape "+s.shape+".");var f=s.rank>0?s.shape[0]:1,h=s.rank>1?s.shape[1]:1;if(c.length!==h)throw new Error("outputShape has incorrect number of elements:, "+c.length+", should be: "+h+".");var d=u.size;if(u.rank!==0&&(u.rank!==1||d!==f))throw new Error("sparseValues has incorrect shape "+u.shape+", should be [] or ["+f+"]");if(u.dtype!==l.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}(o,a,e,i),N.runKernelFunc(function(s){return s.sparseToDense(o,a,e,i)},{$sparseIndices:o,$sparseValues:a,$defaultValue:i})}}),B0=D({gatherND_:function(r,t){var e=C(t,"indices","gatherND","int32"),n=C(r,"x","gatherND");return N.runKernelFunc(function(o){return o.gatherND(n,e)},{x:n,indices:e},null,"GatherNd")}}),L0=D({diag_:function(r){var t=C(r,"x","diag").flatten(),e=r.shape.concat(r.shape);return N.runKernelFunc(function(n){return n.diag(t)},{$x:t}).reshape(e)}}),W0=D({dropout_:function(r,t,e,n){var o=C(r,"x","dropout");if(S(o.dtype==="float32",function(){return"x has to be a floating point tensor since it's going to be scaled, but got a "+o.dtype+" tensor instead."}),S(t>=0&&t<1,function(){return"rate must be a float in the range [0, 1), but got "+t+"."}),t===0)return r instanceof Pe?o.clone():o;var a=function(u,c){if(c==null)return u.shape.slice();if(Xe(u.shape,c))return c;if(u.shape.length===c.length){for(var l=[],f=0;f<u.shape.length;f++)c[f]==null&&u.shape[f]!=null?l.push(u.shape[f]):l.push(c[f]);return l}return c}(o,e),i=1-t,s=Pl(a,0,1,"float32",n).add(i).floor().div(i);return o.mul(s)}});function Wf(r,t,e){for(var n=1-r%2,o=new Float32Array(r),a=0;a<r;++a){var i=2*Math.PI*a/(r+n-1);o[a]=t-e*Math.cos(i)}return We(o,"float32")}var Us=D({hannWindow_:function(r){return Wf(r,.5,.5)}}),zf=D({hammingWindow_:function(r){return Wf(r,.54,.46)}}),Vs=D({frame_:function(r,t,e,n,o){n===void 0&&(n=!1),o===void 0&&(o=0);for(var a=0,i=[];a+t<=r.size;)i.push(rn(r,a,t)),a+=e;if(n)for(;a<r.size;){var s=a+t-r.size,u=Ve([rn(r,a,t-s),en([s],o)]);i.push(u),a+=e}return i.length===0?Fn([],[0,t]):Ve(i).as2D(i.length,t)}}),Uf=D({stft_:function(r,t,e,n,o){var a;o===void 0&&(o=Us),n==null&&(a=t,n=Math.floor(Math.pow(2,Math.ceil(Math.log(a)/Math.log(2)))));for(var i=Vs(r,t,e),s=ot(i,o(t)),u=[],c=0;c<i.shape[0];c++)u.push(zs(s.slice([c,0],[1,t]),n));return Ve(u)}}),z0=Object.freeze({hannWindow:Us,hammingWindow:zf,frame:Vs,stft:Uf}),rt,U0=function(r,t,e){return e===void 0&&(e=1),Y(this,void 0,void 0,function(){var n,o,a,i,s,u,c,l,f,h,d,p,m,v;return J(this,function(g){switch(g.label){case 0:return n=C(r,"predictions","inTopK"),o=C(t,"targets","inTopK"),S(n.rank>1,function(){return"inTopK() expects the predictions to be of rank 2 or higher, but got "+n.rank}),S(n.rank-1===o.rank,function(){return"predictions rank should be 1 larger than targets rank, but got predictions rank "+n.rank+" and targets rank "+o.rank}),Ie(n.shape.slice(0,n.shape.length-1),o.shape,"predictions's shape should be align with the targets' shape, except the last dimension."),a=n.shape[n.shape.length-1],S(e>0&&e<=a,function(){return"'k' passed to inTopK() must be > 0 && <= the predictions last dimension ("+a+"), but got "+e}),[4,n.data()];case 1:return i=g.sent(),[4,o.data()];case 2:for(s=g.sent(),u=[i.length/a,a],l=u[1],f=eo("bool",c=u[0]),h=0;h<c;h++){for(d=h*l,p=i.subarray(d,d+l),m=[],v=0;v<p.length;v++)m.push({value:p[v],index:v});for(m.sort(function(x,w){return w.value-x.value}),f[h]=0,v=0;v<e;v++)if(m[v].index===s[h]){f[h]=1;break}}return r!==n&&n.dispose(),t!==o&&o.dispose(),[2,Ze(f,o.shape,"bool")]}})})};(function(r){r[r.NONE=0]="NONE",r[r.MEAN=1]="MEAN",r[r.SUM=2]="SUM",r[r.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(rt||(rt={}));var V0=D({absoluteDifference_:function(r,t,e,n){n===void 0&&(n=rt.SUM_BY_NONZERO_WEIGHTS);var o=C(r,"labels","absoluteDifference"),a=C(t,"predictions","absoluteDifference"),i=null;e!=null&&(i=C(e,"weights","absoluteDifference")),Ie(o.shape,a.shape,"Error in absoluteDifference: ");var s=o.sub(a).abs();return bn(s,i,n)}}),bn=D({computeWeightedLoss_:function(r,t,e){e===void 0&&(e=rt.SUM_BY_NONZERO_WEIGHTS);var n=C(r,"losses","computeWeightedLoss"),o=null;t!=null&&(o=C(t,"weights","computeWeightedLoss"));var a=o==null?n:n.mul(o);if(e===rt.NONE)return a;if(e===rt.SUM)return a.sum();if(e===rt.MEAN){if(o==null)return a.mean();var i=n.size/o.size,s=a.sum().div(o.sum());return i>1?s.div(q(i)):s}if(e===rt.SUM_BY_NONZERO_WEIGHTS){if(o==null)return a.sum().div(q(n.size));var u=o.mul(zr(n.shape)).notEqual(q(0)).sum().toFloat();return a.sum().div(u)}throw Error("Unknown reduction: "+e)}}),G0=D({cosineDistance_:function(r,t,e,n,o){o===void 0&&(o=rt.SUM_BY_NONZERO_WEIGHTS);var a=C(r,"labels","cosineDistance"),i=C(t,"predictions","cosineDistance"),s=null;n!=null&&(s=C(n,"weights","cosineDistance")),Ie(a.shape,i.shape,"Error in cosineDistance: ");var u=q(1).sub(a.mul(i).sum(e,!0));return bn(u,s,o)}}),H0=D({hingeLoss_:function(r,t,e,n){n===void 0&&(n=rt.SUM_BY_NONZERO_WEIGHTS);var o=C(r,"labels","hingeLoss"),a=C(t,"predictions","hingeLoss"),i=null;e!=null&&(i=C(e,"weights","hingeLoss")),Ie(o.shape,a.shape,"Error in hingeLoss: ");var s=q(1);o=q(2).mul(o).sub(s);var u=s.sub(o.mul(a)).relu();return bn(u,i,n)}}),j0=D({huberLoss_:function(r,t,e,n,o){n===void 0&&(n=1),o===void 0&&(o=rt.SUM_BY_NONZERO_WEIGHTS);var a=C(r,"labels","huberLoss"),i=C(t,"predictions","huberLoss"),s=null;e!=null&&(s=C(e,"weights","huberLoss")),Ie(a.shape,i.shape,"Error in huberLoss: ");var u=q(n),c=i.sub(a).abs(),l=bf(c,u),f=c.sub(l),h=q(.5).mul(l.square()).add(u.mul(f));return bn(h,s,o)}}),q0=D({logLoss_:function(r,t,e,n,o){n===void 0&&(n=1e-7),o===void 0&&(o=rt.SUM_BY_NONZERO_WEIGHTS);var a=C(r,"labels","logLoss"),i=C(t,"predictions","logLoss"),s=null;e!=null&&(s=C(e,"weights","logLoss")),Ie(a.shape,i.shape,"Error in logLoss: ");var u=q(1),c=q(n),l=a.mul(i.add(c).log()).neg().sub(u.sub(a).mul(u.sub(i).add(c).log()));return bn(l,s,o)}}),K0=D({meanSquaredError_:function(r,t,e,n){n===void 0&&(n=rt.SUM_BY_NONZERO_WEIGHTS);var o=C(r,"labels","meanSquaredError"),a=C(t,"predictions","meanSquaredError"),i=null;e!=null&&(i=C(e,"weights","meanSquaredError")),Ie(o.shape,a.shape,"Error in meanSquaredError: ");var s=o.squaredDifference(a);return bn(s,i,n)}}),X0=D({sigmoidCrossEntropy_:function(r,t,e,n,o){n===void 0&&(n=0),o===void 0&&(o=rt.SUM_BY_NONZERO_WEIGHTS);var a=C(r,"multiClassLabels","sigmoidCrossEntropy"),i=C(t,"logits","sigmoidCrossEntropy"),s=null;if(e!=null&&(s=C(e,"weights","sigmoidCrossEntropy")),Ie(a.shape,i.shape,"Error in sigmoidCrossEntropy: "),n>0){var u=q(n),c=q(1),l=q(.5);a=a.mul(c.sub(u)).add(l.mul(u))}var f=function(h,d){var p=C(h,"labels","sigmoidCrossEntropyWithLogits"),m=C(d,"logits","sigmoidCrossEntropyWithLogits");Ie(p.shape,m.shape,"Error in sigmoidCrossEntropyWithLogits: ");var v=m.relu(),g=m.mul(p),x=m.abs().neg().exp().log1p();return v.sub(g).add(x)}(a,i);return bn(f,s,o)}}),$0=D({softmaxCrossEntropy_:function(r,t,e,n,o){n===void 0&&(n=0),o===void 0&&(o=rt.SUM_BY_NONZERO_WEIGHTS);var a=C(r,"onehotLabels","softmaxCrossEntropy"),i=C(t,"logits","softmaxCrossEntropy"),s=null;if(e!=null&&(s=C(e,"weights","softmaxCrossEntropy")),Ie(a.shape,i.shape,"Error in softmaxCrossEntropy: "),n>0){var u=q(n),c=q(1),l=q(a.shape[1]);a=a.mul(c.sub(u)).add(u.div(l))}var f=function(h,d,p){if(p===void 0&&(p=-1),p===-1&&(p=d.rank-1),p!==d.rank-1)throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank "+d.rank+" and dim was "+p);return Ta(function(m,v,g){var x=v.logSumExp([p],!0),w=v.toFloat().sub(x);return g([m,w]),{value:w.mul(m).neg().sum([p]),gradFunc:function(y,b){var _=b[0],E=b[1],I=vt(y.shape,[p]);return[y.reshape(I).mul(_.toFloat().sub(E.exp())),y.reshape(I).mul(E.exp().sub(_.toFloat()))]}}})(h,d)}(a,i);return bn(f,s,o)}}),Y0=Object.freeze({get Reduction(){return rt},absoluteDifference:V0,computeWeightedLoss:bn,cosineDistance:G0,hingeLoss:H0,huberLoss:j0,logLoss:q0,meanSquaredError:K0,sigmoidCrossEntropy:X0,softmaxCrossEntropy:$0});function mc(r,t){return t===void 0&&(t=!1),N.tidy(function(){if(r.shape.length!==2)throw new Error("qr2d() requires a 2D Tensor, but got a "+r.shape.length+"D Tensor.");for(var e=r.shape[0],n=r.shape[1],o=Fl(e),a=r.clone(),i=Fn([[1]],[1,1]),s=i.clone(),u=e>=n?n:e,c=function(f){var h,d=a,p=s,m=o;h=N.tidy(function(){var v=a.slice([f,f],[e-f,1]),g=v.norm(),x=a.slice([f,f],[1,1]),w=Fn([[-1]]).where(x.greater(0),Fn([[1]])),y=x.sub(w.mul(g)),b=v.div(y);s=b.shape[0]===1?i.clone():i.concat(b.slice([1,0],[b.shape[0]-1,b.shape[1]]),0);var _=w.matMul(y).div(g).neg(),E=a.slice([f,0],[e-f,n]),I=_.mul(s);if(f===0)a=E.sub(I.matMul(s.transpose().matMul(E)));else{var R=E.sub(I.matMul(s.transpose().matMul(E)));a=a.slice([0,0],[f,n]).concat(R,0)}var k=o.slice([0,f],[e,o.shape[1]-f]);if(f===0)o=k.sub(k.matMul(s).matMul(I.transpose()));else{var T=k.sub(k.matMul(s).matMul(I.transpose()));o=o.slice([0,0],[e,f]).concat(T,1)}return[s,a,o]}),s=h[0],a=h[1],o=h[2],dt([d,p,m])},l=0;l<u;++l)c(l);return!t&&e>n&&(o=o.slice([0,0],[e,n]),a=a.slice([0,0],[n,n])),[o,a]})}var J0=D({bandPart_:function(r,t,e){if(t%1!=0)throw new Error("bandPart(): numLower must be an integer, got "+t+".");if(e%1!=0)throw new Error("bandPart(): numUpper must be an integer, got "+e+".");var n=C(r,"a","bandPart");if(n.rank<2)throw new Error("bandPart(): Rank must be at least 2, got "+n.rank+".");var o=n.shape,a=n.shape.slice(-2),i=a[0],s=a[1];if(!(t<=i))throw new Error("bandPart(): numLower ("+t+") must not be greater than the number of rows ("+i+").");if(!(e<=s))throw new Error("bandPart(): numUpper ("+e+") must not be greater than the number of columns ("+s+").");t<0&&(t=i),e<0&&(e=s);var u=ia(0,i,1,"int32").reshape([-1,1]),c=ia(0,s,1,"int32"),l=je(u,c),f=Fa(l.lessEqual(q(+t,"int32")),l.greaterEqual(q(-e,"int32"))),h=Ne([i,s],n.dtype);return Rt(Ge(n.reshape([-1,i,s])).map(function(d){return nr(f,d,h)})).reshape(o)}}),Q0=D({gramSchmidt_:function(r){var t;if(Array.isArray(r)){t=!1,S(r!=null&&r.length>0,function(){return"Gram-Schmidt process: input must not be null, undefined, or empty"});for(var e=r[0].shape[0],n=function(u){S(r[u].shape[0]===e,function(){return"Gram-Schmidt: Non-unique lengths found in the input vectors: ("+r[u].shape[0]+" vs. "+e+")"})},o=1;o<r.length;++o)n(o)}else t=!0,r=Es(r,r.shape[0],0).map(function(u){return Ol(u,[0])});S(r.length<=r[0].shape[0],function(){return"Gram-Schmidt: Number of vectors ("+r.length+") exceeds number of dimensions ("+r[0].shape[0]+")."});var a=[],i=r,s=function(u){a.push(N.tidy(function(){var c=i[u];if(u>0)for(var l=0;l<u;++l){var f=Ff(a[l].mulStrict(c)).mul(a[l]);c=c.sub(f)}return c.div(Bf(c,"euclidean"))}))};for(o=0;o<r.length;++o)s(o);return t?Rt(a,0):a}}),Z0=D({qr_:function(r,t){if(t===void 0&&(t=!1),r.rank<2)throw new Error("qr() requires input tensor to have a rank >= 2, but got rank "+r.rank);if(r.rank===2)return mc(r,t);var e=r.shape.slice(0,r.shape.length-2).reduce(function(i,s){return i*s}),n=Ge(r.reshape([e,r.shape[r.shape.length-2],r.shape[r.shape.length-1]]),0),o=[],a=[];return n.forEach(function(i){var s=mc(i,t),u=s[0],c=s[1];o.push(u),a.push(c)}),[Rt(o,0).reshape(r.shape),Rt(a,0).reshape(r.shape)]}}),ex=Object.freeze({bandPart:J0,gramSchmidt:Q0,qr:Z0});function Ba(r,t,e,n,o,a){n==null&&(n=.5),o==null&&(o=Number.NEGATIVE_INFINITY),a==null&&(a=0);var i=r.shape[0];return e=Math.min(e,i),S(0<=n&&n<=1,function(){return"iouThreshold must be in [0, 1], but was '"+n+"'"}),S(r.rank===2,function(){return"boxes must be a 2D tensor, but was of rank '"+r.rank+"'"}),S(r.shape[1]===4,function(){return"boxes must have 4 columns, but 2nd dimension was "+r.shape[1]}),S(t.rank===1,function(){return"scores must be a 1D tensor"}),S(t.shape[0]===i,function(){return"scores has incompatible shape with boxes. Expected "+i+", but was "+t.shape[0]}),S(0<=a&&a<=1,function(){return"softNmsSigma must be in [0, 1], but was '"+a+"'"}),{maxOutputSize:e,iouThreshold:n,scoreThreshold:o,softNmsSigma:a}}var tx=D({resizeBilinear_:function(r,t,e){e===void 0&&(e=!1);var n=C(r,"images","resizeBilinear");S(n.rank===3||n.rank===4,function(){return"Error in resizeBilinear: x must be rank 3 or 4, but got rank "+n.rank+"."}),S(t.length===2,function(){return"Error in resizeBilinear: new shape must 2D, but got shape "+t+"."});var o=n,a=!1;n.rank===3&&(a=!0,o=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var i=t[0],s=t[1],u=N.runKernelFunc(function(c,l){return l([o]),c.resizeBilinear(o,i,s,e)},{x:o},function(c,l){return{x:function(){return N.runKernelFunc(function(f){return f.resizeBilinearBackprop(c,l[0],e)},{})}}},"ResizeBilinear",{alignCorners:e,newHeight:i,newWidth:s});return a?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),nx=D({resizeNearestNeighbor_:function(r,t,e){e===void 0&&(e=!1);var n=C(r,"images","resizeNearestNeighbor");S(n.rank===3||n.rank===4,function(){return"Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank "+n.rank+"."}),S(t.length===2,function(){return"Error in resizeNearestNeighbor: new shape must 2D, but got shape "+t+"."}),S(n.dtype==="float32"||n.dtype==="int32",function(){return"`images` must have `int32` or `float32` as dtype"});var o=n,a=!1;n.rank===3&&(a=!0,o=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var i=t[0],s=t[1],u=N.runKernelFunc(function(c,l){return l([o]),c.resizeNearestNeighbor(o,i,s,e)},{batchImages:o},function(c,l){return{batchImages:function(){return N.runKernelFunc(function(f){return f.resizeNearestNeighborBackprop(c,l[0],e)},{})}}});return a?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),rx=D({nonMaxSuppression_:function(r,t,e,n,o){n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY);var a=C(r,"boxes","nonMaxSuppression"),i=C(t,"scores","nonMaxSuppression"),s=Ba(a,i,e,n,o);e=s.maxOutputSize,n=s.iouThreshold,o=s.scoreThreshold;var u={maxOutputSize:e,iouThreshold:n,scoreThreshold:o};return N.runKernelFunc(function(c){return c.nonMaxSuppression(a,i,e,n,o)},{boxes:a,scores:i},null,"NonMaxSuppressionV3",u)}}),ox=function(r,t,e,n,o){return n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),Y(this,void 0,void 0,function(){var a,i,s,u,c,l,f;return J(this,function(h){switch(h.label){case 0:return a=C(r,"boxes","nonMaxSuppressionAsync"),i=C(t,"scores","nonMaxSuppressionAsync"),s=Ba(a,i,e,n,o),e=s.maxOutputSize,n=s.iouThreshold,o=s.scoreThreshold,[4,Promise.all([a.data(),i.data()])];case 1:return u=h.sent(),c=u[0],l=u[1],f=Ss(c,l,e,n,o),a!==r&&a.dispose(),i!==t&&i.dispose(),[2,f]}})})},ax=D({nonMaxSuppressionWithScore_:function(r,t,e,n,o,a){n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),a===void 0&&(a=0);var i=C(r,"boxes","nonMaxSuppression"),s=C(t,"scores","nonMaxSuppression"),u=Ba(i,s,e,n,o,a),c={maxOutputSize:e=u.maxOutputSize,iouThreshold:n=u.iouThreshold,scoreThreshold:o=u.scoreThreshold,softNmsSigma:a=u.softNmsSigma},l=N.runKernel("NonMaxSuppressionV5",{boxes:i,scores:s},c);return{selectedIndices:l[0],selectedScores:l[1]}}}),ix=function(r,t,e,n,o,a){return n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),a===void 0&&(a=0),Y(this,void 0,void 0,function(){var i,s,u,c,l,f,h;return J(this,function(d){switch(d.label){case 0:return i=C(r,"boxes","nonMaxSuppressionAsync"),s=C(t,"scores","nonMaxSuppressionAsync"),u=Ba(i,s,e,n,o,a),e=u.maxOutputSize,n=u.iouThreshold,o=u.scoreThreshold,a=u.softNmsSigma,[4,Promise.all([i.data(),s.data()])];case 1:return c=d.sent(),l=c[0],f=c[1],h=Ds(l,f,e,n,o,a),i!==r&&i.dispose(),s!==t&&s.dispose(),[2,h]}})})},sx=D({cropAndResize_:function(r,t,e,n,o,a){var i=C(r,"image","cropAndResize"),s=C(t,"boxes","cropAndResize","float32"),u=C(e,"boxInd","cropAndResize","int32");o=o||"bilinear",a=a||0;var c=s.shape[0];return S(i.rank===4,function(){return"Error in cropAndResize: image must be rank 4,but got rank "+i.rank+"."}),S(s.rank===2&&s.shape[1]===4,function(){return"Error in cropAndResize: boxes must be have size ["+c+",4] but had shape "+s.shape+"."}),S(u.rank===1&&u.shape[0]===c,function(){return"Error in cropAndResize: boxInd must be have size ["+c+"] but had shape "+s.shape+"."}),S(n.length===2,function(){return"Error in cropAndResize: cropSize must be of length 2, but got length "+n.length+"."}),S(n[0]>=1&&n[1]>=1,function(){return"cropSize must be atleast [1,1], but was "+n}),S(o==="bilinear"||o==="nearest",function(){return"method must be bilinear or nearest, but was "+o}),N.runKernelFunc(function(l,f){return l.cropAndResize(i,s,u,n,o,a)},{images:i,boxes:s,boxInd:u},null,"CropAndResize",{method:o,extrapolationValue:a,cropSize:n})}}),Gs=Object.freeze({resizeBilinear:tx,resizeNearestNeighbor:nx,nonMaxSuppression:rx,nonMaxSuppressionAsync:ox,nonMaxSuppressionWithScore:ax,nonMaxSuppressionWithScoreAsync:ix,cropAndResize:sx}),Hs=function(r,t){return!(r>0)||t==="linear"},js=function(r,t,e){if(e==null||e==="linear")return r;if(e==="relu")return r.mul(t.step());throw new Error("Gradient for activation "+e+" has not been implemented yet.")},qs=function(r,t){var e=t,n=He(r.shape,t.shape);return n.length>0&&(e=e.sum(n)),e.reshape(r.shape)},Ks=function(r,t,e){if(t==="linear")return r;if(t==="relu")return Me(r);if(t==="elu")return Pf(r);if(t==="relu6")return Of(r);if(t==="prelu")return Mf(r,e);throw new Error("Unknown fused activation "+t+".")},ux=D({fusedMatMul_:function(r){var t,e=r.a,n=r.b,o=r.transposeA,a=o!==void 0&&o,i=r.transposeB,s=i!==void 0&&i,u=r.bias,c=r.activation,l=c===void 0?"linear":c,f=r.preluActivationWeights;if(Hs(N.state.gradientDepth,l)===!1){var h=Ma(e,n,a,s);return u!=null&&(h=ye(h,u)),Ks(h,l,f)}var d=C(e,"a","fused matMul"),p=C(n,"b","fused matMul");t=Oe(d,p),d=t[0],p=t[1];var m=a?d.shape[d.rank-2]:d.shape[d.rank-1],v=s?p.shape[p.rank-1]:p.shape[p.rank-2],g=a?d.shape[d.rank-1]:d.shape[d.rank-2],x=s?p.shape[p.rank-2]:p.shape[p.rank-1],w=d.shape.slice(0,-2),y=p.shape.slice(0,-2),b=ee(w),_=ee(y);S(d.rank>=2&&p.rank>=2&&d.rank===p.rank,function(){return"Error in fused matMul: inputs must have the same rank of at least 2, got ranks "+d.rank+" and "+p.rank+"."}),S(Xe(w,y),function(){return"Error in fused matMul: outer dimensions ("+w+") and ("+y+") of Tensors with shapes "+d.shape+" and "+p.shape+" must match."}),S(m===v,function(){return"Error in fused matMul: inner shapes ("+m+") and ("+v+") of Tensors with shapes "+d.shape+" and "+p.shape+" and transposeA="+a+" and transposeB="+s+" must match."});var E,I,R=d.shape.slice(0,-2).concat([g,x]),k=a?d.as3D(b,m,g):d.as3D(b,g,m),T=s?p.as3D(_,x,v):p.as3D(_,v,x);u!=null&&xe(R,(E=Oe(E=C(u,"bias","fused matMul"),d)[0]).shape),f!=null&&(I=C(f,"prelu weights","fused matMul"));var A={a:k,b:T};u!=null&&(A.bias=E),f!=null&&(A.preluActivationWeights=I);var B=[k,T];return N.runKernelFunc(function(M,O){var U=M.fusedBatchMatMul({a:k,b:T,transposeA:a,transposeB:s,bias:E,activation:l,preluActivationWeights:I});return O([k,T,U]),U},A,function(M,O){var U=O[0],z=O[1],W=O[2],V=js(M,W,l),H={};return u!=null&&(H={bias:function(){return qs(E,V)}}),Object.assign(a||s?!a&&s?{a:function(){return V.matMul(z,!1,!1)},b:function(){return V.matMul(U,!0,!1)}}:a&&!s?{a:function(){return z.matMul(V,!1,!0)},b:function(){return U.matMul(V,!1,!1)}}:{a:function(){return z.matMul(V,!0,!0)},b:function(){return V.matMul(U,!0,!0)}}:{a:function(){return V.matMul(z,!1,!0)},b:function(){return U.matMul(V,!0,!1)}},H)},"_FusedMatMul",{transposeA:a,transposeB:s,activation:l},B,[!0]).reshape(R)}}),cx=D({fusedConv2d_:function(r){var t=r.x,e=r.filter,n=r.strides,o=r.pad,a=r.dataFormat,i=a===void 0?"NHWC":a,s=r.dilations,u=s===void 0?[1,1]:s,c=r.dimRoundingMode,l=r.bias,f=r.activation,h=f===void 0?"linear":f,d=r.preluActivationWeights;if(h=h||"linear",Hs(N.state.gradientDepth,h)===!1){var p=Pt(t,e,n,o,i,u,c);return l!=null&&(p=ye(p,l)),Ks(p,h,d)}var m=C(t,"x","conv2d"),v=C(e,"filter","conv2d"),g=m,x=!1;m.rank===3&&(x=!0,g=m.as4D(1,m.shape[0],m.shape[1],m.shape[2])),S(g.rank===4,function(){return"Error in fused conv2d: input must be rank 4, but got rank "+g.rank+"."}),S(v.rank===4,function(){return"Error in fused conv2d: filter must be rank 4, but got rank "+v.rank+"."}),c!=null&&S(Le(o),function(){return"Error in fused conv2d: pad must be an integer when using, dimRoundingMode "+c+" but got pad "+o+"."}),S(g.shape[3]===v.shape[2],function(){return"Error in conv2d: depth of input ("+g.shape[3]+") must match input depth for filter "+v.shape[2]+"."}),S(mt(n,u),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+u+"'"}),S(i==="NHWC",function(){return"Error in conv2d: got dataFormat of "+i+" but only NHWC is currently supported."});var w,y,b=ir(g.shape,v.shape,n,u,o,c);l!=null&&(w=Oe(w=C(l,"bias","fused conv2d"),m)[0],xe(b.outShape,w.shape)),d!=null&&(y=C(d,"prelu weights","fused conv2d"));var _={x:g,filter:v};l!=null&&(_.bias=w),d!=null&&(_.preluActivationWeights=y);var E=[v,g],I=N.runKernelFunc(function(R,k){var T=R.fusedConv2d({input:g,filter:v,convInfo:b,bias:w,activation:h,preluActivationWeights:y});return k([v,g,T]),T},_,function(R,k){var T=k,A=T[0],B=T[1],M=T[2],O=js(R,M,h);S(Fr(u),function(){return"Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+u+"'"});var U={};return l!=null&&(U={bias:function(){return qs(w,O)}}),Object.assign({x:function(){return Rf(B.shape,O,A,n,o)},filter:function(){return Bs(B,O,A.shape,n,o)}},U)},"FusedConv2D",{convInfo:b,activation:h},E,[!0]);return x?I.as3D(I.shape[1],I.shape[2],I.shape[3]):I}}),lx=D({fusedDepthwiseConv2d_:function(r){var t=r.x,e=r.filter,n=r.strides,o=r.pad,a=r.dataFormat,i=a===void 0?"NHWC":a,s=r.dilations,u=s===void 0?[1,1]:s,c=r.dimRoundingMode,l=r.bias,f=r.activation,h=f===void 0?"linear":f,d=r.preluActivationWeights;if(Hs(N.state.gradientDepth,h)===!1){var p=Pa(t,e,n,o,i,u,c);return l!=null&&(p=ye(p,l)),Ks(p,h,d)}var m=C(t,"x","depthwiseConv2d"),v=C(e,"filter","depthwiseConv2d"),g=m,x=!1;m.rank===3&&(x=!0,g=m.as4D(1,m.shape[0],m.shape[1],m.shape[2])),S(g.rank===4,function(){return"Error in fused depthwiseConv2d: input must be rank 4, but got rank "+g.rank+"."}),S(v.rank===4,function(){return"Error in fused depthwiseConv2d: filter must be rank 4, but got rank "+v.rank+"."}),S(g.shape[3]===v.shape[2],function(){return"Error in fused depthwiseConv2d: number of input channels ("+g.shape[3]+") must match the inChannels dimension in filter "+v.shape[2]+"."}),u==null&&(u=[1,1]),S(mt(n,u),function(){return"Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+u+"'"}),c!=null&&S(Le(o),function(){return"Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode "+c+" but got pad "+o+"."});var w,y,b=ir(g.shape,v.shape,n,u,o,c,!0);l!=null&&(w=Oe(w=C(l,"bias","fused conv2d"),m)[0],xe(b.outShape,w.shape)),d!=null&&(y=C(d,"prelu weights","fused depthwiseConv2d"));var _={x:g,filter:v};l!=null&&(_.bias=w),d!=null&&(_.preluActivationWeights=y);var E=[v,g],I=N.runKernelFunc(function(R,k){var T=R.fusedDepthwiseConv2D({input:g,filter:v,convInfo:b,bias:w,activation:h,preluActivationWeights:y});return k([v,g,T]),T},_,function(R,k){S(Fr(u),function(){return"Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+u+"'"});var T=k[0],A=k[1],B=k[2],M=js(R,B,h),O={};return l!=null&&(O={bias:function(){return qs(w,M)}}),Object.assign({x:function(){return kf(A.shape,M,T,b)},filter:function(){return Sf(A,M,T.shape,b)}},O)},"FusedDepthwiseConv2D",{convInfo:b,activation:h},E,[!0]);return x?I.as3D(I.shape[1],I.shape[2],I.shape[3]):I}}),fx=Object.freeze({matMul:ux,conv2d:cx,depthwiseConv2d:lx}),hx=Object.freeze({image:Gs,linalg:ex,losses:Y0,spectral:M0,fused:fx,signal:z0,square:qg,squaredDifference:lf,conv1d:t0,conv2d:Pt,conv3d:n0,depthwiseConv2d:Pa,separableConv2d:Ls,conv2dTranspose:r0,conv3dTranspose:o0,op:D,batchNormalization2d:_y,batchNormalization3d:Cy,batchNormalization4d:Ey,batchNormalization:Iy,batchNorm:mf,batchNorm2d:Ry,batchNorm3d:ky,batchNorm4d:Sy,booleanMaskAsync:e0,complex:Je,real:Nt,imag:Yt,concat:Ve,concat1d:fv,concat2d:hv,concat3d:dv,concat4d:pv,split:Es,matMul:Ma,dot:a0,outerProduct:i0,reverse:mo,reverse1d:s0,reverse2d:u0,reverse3d:c0,reverse4d:l0,maxPool:Ke,avgPool:go,pool:f0,maxPool3d:h0,avgPool3d:d0,slice:rn,slice1d:p0,slice2d:v0,slice3d:Tf,slice4d:m0,abs:Kg,acos:Xg,acosh:$g,asin:Yg,asinh:Jg,atan:Qg,atanh:Zg,ceil:ey,clipByValue:Ps,cos:ty,cosh:ny,erf:ry,exp:qi,expm1:oy,floor:ay,log:iy,log1p:sy,logSigmoid:uy,neg:pa,reciprocal:cy,round:ly,rsqrt:ff,sigmoid:hf,sign:fy,isNaN:hy,isInf:dy,isFinite:py,sin:vy,sinh:my,softplus:gy,sqrt:yy,step:xy,tan:by,tanh:wy,all:g0,any:y0,argMax:x0,argMin:b0,logSumExp:w0,max:Oa,mean:_0,min:C0,moments:E0,sum:Ff,prod:I0,equal:wf,equalStrict:Hy,greater:jy,greaterEqual:_f,greaterEqualStrict:qy,greaterStrict:Ky,less:Xy,lessEqual:$y,lessEqualStrict:Yy,lessStrict:Jy,notEqual:Qy,notEqualStrict:Zy,add:ye,addN:Ty,addStrict:Ny,atan2:Fy,div:Ot,divNoNan:Py,divStrict:My,floorDiv:xf,maximum:Ms,maximumStrict:Oy,minimum:bf,minimumStrict:By,mod:Ly,modStrict:Wy,mul:ot,mulStrict:zy,pow:va,powStrict:Uy,squaredDifferenceStrict:Vy,sub:je,subStrict:Gy,elu:Pf,leakyRelu:R0,prelu:Mf,relu:Me,relu6:Of,selu:k0,logicalAnd:Fa,logicalNot:Dy,logicalOr:gf,logicalXor:Ay,where:nr,whereAsync:yf,buffer:de,print:Cv,batchToSpaceND:Nl,broadcastTo:Ev,cast:Iv,clone:Rv,cumsum:kv,depthToSpace:Sv,expandDims:Tt,eye:Fl,multinomial:Dv,oneHot:Vi,pad:ar,pad1d:Av,pad2d:Tv,pad3d:Nv,pad4d:Fv,rand:Pv,randomNormal:Mv,randomGamma:Ov,randomUniform:Pl,reshape:Bt,spaceToBatchND:Ml,squeeze:Ol,stack:Rt,tile:Cr,truncatedNormal:Bv,unstack:Ge,setdiff1dAsync:Lv,fill:en,linspace:lv,ones:zr,range:ia,scalar:q,tensor:Ze,tensor1d:We,tensor2d:Fn,tensor3d:Cs,tensor4d:ft,tensor5d:sv,tensor6d:uv,variable:cv,zeros:Ne,onesLike:Tl,zerosLike:we,transpose:Ln,softmax:xn,logSoftmax:jv,localResponseNormalization:S0,norm:Bf,gather:Os,unsortedSegmentSum:Cf,basicLSTMCell:D0,multiRNNCell:A0,movingAverage:T0,stridedSlice:N0,topk:F0,scatterND:P0,fft:Ws,ifft:ma,rfft:zs,irfft:Lf,sparseToDense:O0,gatherND:B0,diag:L0,dropout:W0,hannWindow:Us,hammingWindow:zf,frame:Vs,stft:Uf,inTopKAsync:U0});function G(r,t){Array.isArray(r)||(r=[r]),r.forEach(function(e){e!=null&&S(e.dtype!=="complex64",function(){return t+" does not support complex64 tensors."})})}function mi(r,t,e,n){if(e==="linear")return r.linear(t);if(e==="relu")return r.relu(t);if(e==="elu")return r.elu(t);if(e==="relu6")return r.relu6(t);if(e==="prelu")return r.prelu(t,n);throw new Error("Activation "+e+" has not been implemented for the CPU backend.")}var dx=function(r){function t(){var e=r.call(this)||this;return e.blockSize=48,e.firstUse=!0,e.data=new Gl(e,N),e}return Ut(t,r),t.prototype.write=function(e,n,o){this.firstUse&&(this.firstUse=!1,L().get("IS_NODE")&&oa(`
============================
Hi there 👋. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.
============================`));var a={};return this.data.set(a,{values:e,dtype:o}),a},t.prototype.move=function(e,n,o,a){this.data.set(e,{values:n,dtype:a})},t.prototype.numDataIds=function(){return this.data.numDataIds()},t.prototype.read=function(e){return Y(this,void 0,void 0,function(){return J(this,function(n){return[2,this.readSync(e)]})})},t.prototype.readSync=function(e){var n=this.data.get(e),o=n.dtype,a=n.complexTensors;return o==="complex64"?ji(this.readSync(a.real.dataId),this.readSync(a.imag.dataId)):this.data.get(e).values},t.prototype.bufferSync=function(e){var n=this.readSync(e.dataId),o=n;if(e.dtype==="string")try{o=n.map(function(a){return ta(a)})}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return de(e.shape,e.dtype,o)},t.prototype.makeOutput=function(e,n,o){var a=this.write(e,n,o);return N.makeTensorFromDataId(a,n,o,this)},t.prototype.disposeData=function(e){if(this.data.has(e)){var n=this.data.get(e).complexTensors;n!=null&&(n.real.dispose(),n.imag.dispose()),this.data.delete(e)}},t.prototype.time=function(e){return Y(this,void 0,void 0,function(){var n;return J(this,function(o){return n=Kt(),e(),[2,{kernelMs:Kt()-n}]})})},t.prototype.memory=function(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}},t.prototype.complex=function(e,n){var o=this.makeOutput(null,e.shape,"complex64");return this.data.get(o.dataId).complexTensors={real:N.keep(e.clone()),imag:N.keep(n.clone())},o},t.prototype.real=function(e){return this.data.get(e.dataId).complexTensors.real.clone()},t.prototype.imag=function(e){return this.data.get(e.dataId).complexTensors.imag.clone()},t.prototype.slice=function(e,n,o){if(G(e,"slice"),Ul(e.shape,n,o)){var a=Vl(n,e.strides),i=ee(o);return Ze(this.readSync(e.dataId).subarray(a,a+i),o,e.dtype)}for(var s=de(o,e.dtype),u=this.bufferSync(e),c=0;c<s.size;++c){var l=s.indexToLoc(c).map(function(f,h){return f+n[h]});s.values[c]=u.get.apply(u,l)}return s.toTensor()},t.prototype.stridedSlice=function(e,n,o,a){G(e,"stridedSlice");var i=Rs(n,o,a);if(i.some(function(d){return d===0}))return Ze([],i);for(var s=de(i,e.dtype),u=this.bufferSync(e),c=0;c<s.size;c++){for(var l=s.indexToLoc(c),f=new Array(l.length),h=0;h<f.length;h++)f[h]=l[h]*a[h]+n[h];s.set.apply(s,[u.get.apply(u,f)].concat(l))}return s.toTensor()},t.prototype.diag=function(e){for(var n=this.readSync(e.dataId),o=de([e.size,e.size],e.dtype),a=o.values,i=0;i<n.length;i++)a[i*e.size+i]=n[i];return o.toTensor()},t.prototype.unstack=function(e,n){for(var o=e.shape[n],a=new Array(e.rank-1),i=0,s=0;s<e.rank;s++)s!==n&&(a[i++]=e.shape[s]);var u=new Array(e.rank).fill(0),c=e.shape.slice();c[n]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[n]=s,l[s]=this.slice(e,u,c).reshape(a);return l},t.prototype.reverse=function(e,n){G(e,"reverse");for(var o=de(e.shape,e.dtype),a=this.bufferSync(e),i=function(u){var c=o.indexToLoc(u),l=c.slice();n.forEach(function(f){return l[f]=e.shape[f]-1-l[f]}),o.set.apply(o,[a.get.apply(a,l)].concat(c))},s=0;s<o.size;s++)i(s);return o.toTensor()},t.prototype.concat=function(e,n){var o=this;if(e[0].dtype==="complex64"){var a=e.map(function(d){return Nt(d)}),i=e.map(function(d){return Yt(d)});return Je(this.concat(a,n),this.concat(i,n))}var s=e.map(function(d){var p=ee(d.shape.slice(n));return d.as2D(-1,p)}),u=Nr(s.map(function(d){return d.shape}),1),c=de(u,e[0].dtype).values;if(s[0].shape[0]===1){var l=0;s.forEach(function(d){c.set(o.readSync(d.dataId),l),l+=d.size})}else{var f=0;s.forEach(function(d){for(var p=o.readSync(d.dataId),m=0,v=0;v<d.shape[0];++v)for(var g=v*u[1]+f,x=0;x<d.shape[1];++x)c[g+x]=p[m++];f+=d.shape[1]})}var h=Nr(e.map(function(d){return d.shape}),n);return Ze(c,h,e[0].dtype)},t.prototype.neg=function(e){return G(e,"neg"),this.multiply(q(-1),e)},t.prototype.add=function(e,n){return e.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),n.cast("complex64"),function(o,a,i,s){return{real:o+i,imag:a+s}}):this.broadcastedBinaryOp(e,n,Qe(e.dtype,n.dtype),function(o,a){return o+a})},t.prototype.addN=function(e){var n=this;G(e,"addN");for(var o=e.map(function(l){return n.readSync(l.dataId)}),a=de(e[0].shape,e[0].dtype),i=a.values,s=0;s<e.length;s++)for(var u=o[s],c=0;c<i.length;c++)i[c]+=u[c];return a.toTensor()},t.prototype.softmax=function(e,n){var o=qe([n],e.shape),a=this.max(e,o),i=vt(a.shape,o),s=this.subtract(e,a.reshape(i)),u=this.exp(s),c=this.sum(u,o).reshape(i);return this.realDivide(u,c)},t.prototype.subtract=function(e,n){return e.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),n.cast("complex64"),function(o,a,i,s){return{real:o-i,imag:a-s}}):this.broadcastedBinaryOp(e,n,Qe(e.dtype,n.dtype),function(o,a){return o-a})},t.prototype.pow=function(e,n){return G([e,n],"pow"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){return Math.pow(o,a)})},t.prototype.batchMatMul=function(e,n,o,a){G([e,n],"matMul");for(var i=o?e.shape[1]:e.shape[2],s=o?e.shape[2]:e.shape[1],u=a?n.shape[1]:n.shape[2],c=e.shape[0],l=this.readSync(e.dataId),f=this.readSync(n.dataId),h=o?[e.strides[0],1,e.strides[1]]:[e.strides[0],e.strides[1],1],d=h[0],p=h[1],m=h[2],v=a?[1,n.strides[1],n.strides[0]]:[n.strides[1],1,n.strides[0]],g=v[0],x=v[1],w=v[2],y=s*u,b=de([c,s,u],e.dtype),_=b.values,E=this.blockSize,I=0;I<c;I++)for(var R=0;R<s;R+=E)for(var k=0;k<u;k+=E)for(var T=0;T<i;T+=E)for(var A=Math.min(R+E,s),B=Math.min(k+E,u),M=Math.min(T+E,i),O=R;O<A;O++)for(var U=k;U<B;U++){for(var z=0,W=T;W<M;W++)z+=l[I*d+O*p+W*m]*f[W*g+U*x+I*w];_[I*y+(O*u+U)]+=z}return b.toTensor()},t.prototype.fusedBatchMatMul=function(e){var n=e.a,o=e.b,a=e.transposeA,i=e.transposeB,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=this.batchMatMul(n,o,a,i);return s&&(l=this.add(l,s)),u&&(l=mi(this,l,u,c)),l},t.prototype.multiply=function(e,n){return e.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),n.cast("complex64"),function(o,a,i,s){return{real:o*i-a*s,imag:o*s+a*i}}):this.broadcastedBinaryOp(e,n,Qe(e.dtype,n.dtype),function(o,a){return o*a})},t.prototype.realDivide=function(e,n){return G([e,n],"realDivide"),this.broadcastedBinaryOp(e,n,"float32",function(o,a){return o/a})},t.prototype.floorDiv=function(e,n){return G([e,n],"floorDiv"),this.broadcastedBinaryOp(e,n,"int32",function(o,a){return Math.floor(o/a)})},t.prototype.sum=function(e,n){G(e,"sum"),bt("sum",n,e.rank);for(var o=et(e.shape,n),a=o[0],i=o[1],s=Ne(a,Qe(e.dtype,"int32")),u=ee(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=0,p=0;p<u;++p)d+=l[h+p];c[f]=d}return s},t.prototype.prod=function(e,n){G(e,"sum");for(var o=et(e.shape,n),a=o[0],i=o[1],s=Ne(a,Qe(e.dtype,"int32")),u=ee(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=1,p=0;p<u;++p)d*=l[h+p];c[f]=d}return s},t.prototype.unsortedSegmentSum=function(e,n,o){G(e,"unsortedSegmentSum");for(var a=[],i=e.rank-n.rank,s=0;s<i;++s)n=n.expandDims(s+1);for(s=0;s<o;++s){var u=q(s,"int32"),c=wf(u,n).asType("float32").mul(e).sum(0);a.push(c)}return Rt(a)},t.prototype.argMin=function(e,n){G(e,"argMin");var o=[n];bt("argMin",o,e.rank);for(var a=et(e.shape,o),i=a[0],s=a[1],u=Ne(i,"int32"),c=ee(s),l=this.readSync(u.dataId),f=this.readSync(e.dataId),h=0;h<l.length;++h){for(var d=h*c,p=f[d],m=0,v=0;v<c;++v){var g=f[d+v];g<p&&(p=g,m=v)}l[h]=m}return u},t.prototype.argMax=function(e,n){G(e,"argMax");var o=[n];bt("argMax",o,e.rank);for(var a=et(e.shape,o),i=a[0],s=a[1],u=Ne(i,"int32"),c=ee(s),l=this.readSync(u.dataId),f=this.readSync(e.dataId),h=0;h<l.length;++h){for(var d=h*c,p=f[d],m=0,v=0;v<c;++v){var g=f[d+v];g>p&&(p=g,m=v)}l[h]=m}return u},t.prototype.cumsum=function(e,n,o,a){if(G(e,"cumsum"),n!==e.rank-1)throw new Error("backend.cumsum in CPU expects an inner-most axis="+(e.rank-1)+" but got axis="+n);for(var i=Qe(e.dtype,"int32"),s=Ne(e.shape,i),u=this.readSync(s.dataId),c=this.readSync(e.dataId),l=e.shape[e.rank-1],f=a?function(v,g){return v+l-g-1}:function(v,g){return v+g},h=0;h<c.length;h+=l)for(var d=0;d<l;d++){var p=f(h,d);if(d===0)u[p]=o?0:c[p];else{var m=f(h,d-1);u[p]=o?c[m]+u[m]:c[p]+u[m]}}return s},t.prototype.equal=function(e,n){return G([e,n],"equal"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o===a?1:0})},t.prototype.notEqual=function(e,n){return G([e,n],"notEqual"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o!==a?1:0})},t.prototype.less=function(e,n){return G([e,n],"less"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o<a?1:0})},t.prototype.lessEqual=function(e,n){return G([e,n],"lessEqual"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o<=a?1:0})},t.prototype.greater=function(e,n){return G([e,n],"greater"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o>a?1:0})},t.prototype.greaterEqual=function(e,n){return G([e,n],"greaterEqual"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o>=a?1:0})},t.prototype.logicalNot=function(e){G(e,"logicalNot");for(var n=this.readSync(e.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)o[a]=n[a]?0:1;return this.makeOutput(o,e.shape,"bool")},t.prototype.logicalAnd=function(e,n){return G([e,n],"logicalAnd"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o&&a})},t.prototype.logicalOr=function(e,n){return G([e,n],"logicalOr"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o||a})},t.prototype.select=function(e,n,o){G([e,n,o],"select");for(var a=this.readSync(e.dataId),i=this.readSync(n.dataId),s=this.readSync(o.dataId),u=Ne(n.shape,Qe(n.dtype,o.dtype)),c=this.readSync(u.dataId),l=0,f=e.rank===0||e.rank>1||n.rank===1?1:ee(n.shape.slice(1)),h=0;h<a.length;h++)for(var d=0;d<f;d++)a[h]===1?c[l++]=i[h]:c[l++]=s[h];return u},t.prototype.where=function(e){G([e],"where");var n=this.readSync(e.dataId);return As(e.shape,n)},t.prototype.topk=function(e,n,o){return G(e,"topk"),Jl(this.readSync(e.dataId),e.shape,e.dtype,n)},t.prototype.min=function(e,n){G(e,"min"),bt("min",n,e.rank);for(var o=et(e.shape,n),a=o[0],i=o[1],s=Ne(a,e.dtype),u=ee(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=l[h],p=0;p<u;++p){var m=l[h+p];m<d&&(d=m)}c[f]=d}return s},t.prototype.minimum=function(e,n){return G([e,n],"minimum"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){return Math.min(o,a)})},t.prototype.mod=function(e,n){return G([e,n],"mod"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){var i=o%a;return o<0&&a<0||o>=0&&a>=0?i:(i+a)%a})},t.prototype.max=function(e,n){G(e,"max"),bt("max",n,e.rank);for(var o=et(e.shape,n),a=o[0],i=o[1],s=Ne(a,e.dtype),u=ee(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=l[h],p=0;p<u;++p){var m=l[h+p];m>d&&(d=m)}c[f]=d}return s},t.prototype.maximum=function(e,n){return G([e,n],"maximum"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){return Math.max(o,a)})},t.prototype.all=function(e,n){G(e,"all"),bt("all",n,e.rank);for(var o=et(e.shape,n),a=o[0],i=o[1],s=Ne(a,e.dtype),u=ee(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=l[h],p=0;p<u;++p){var m=l[h+p];d=d&&m}c[f]=d}return s},t.prototype.any=function(e,n){G(e,"any"),bt("any",n,e.rank);for(var o=et(e.shape,n),a=o[0],i=o[1],s=Ne(a,e.dtype),u=ee(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=l[h],p=0;p<u;++p){var m=l[h+p];d=d||m}c[f]=d}return s},t.prototype.squaredDifference=function(e,n){return G([e,n],"squaredDifference"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){var i=o-a;return i*i})},t.prototype.ceil=function(e){G(e,"ceil");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.ceil(n[a]);return this.makeOutput(o,e.shape,"float32")},t.prototype.floor=function(e){G(e,"floor");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.floor(n[a]);return this.makeOutput(o,e.shape,"float32")},t.prototype.sign=function(e){G(e,"x");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)n[a]<0?o[a]=-1:n[a]>0?o[a]=1:o[a]=0;return this.makeOutput(o,e.shape,"float32")},t.prototype.isNaN=function(e){G(e,"x");for(var n=this.readSync(e.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)Number.isNaN(n[a])&&(o[a]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.isInf=function(e){G(e,"x");for(var n=this.readSync(e.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)Math.abs(n[a])===1/0&&(o[a]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.isFinite=function(e){G(e,"x");for(var n=this.readSync(e.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)Number.isFinite(n[a])&&(o[a]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.round=function(e){G(e,"round");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=Math.floor(n[a]);n[a]-i<.5?o[a]=Math.floor(n[a]):n[a]-i>.5?o[a]=Math.ceil(n[a]):o[a]=i%2==0?i:i+1}return this.makeOutput(o,e.shape,"float32")},t.prototype.exp=function(e){G(e,"exp");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.exp(n[a]);return this.makeOutput(o,e.shape,"float32")},t.prototype.expm1=function(e){G(e,"expm1");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.expm1(n[a]);return this.makeOutput(o,e.shape,"float32")},t.prototype.log=function(e){G(e,"log");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=Math.log(i)}return this.makeOutput(o,e.shape,"float32")},t.prototype.log1p=function(e){G(e,"log1p");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=Math.log1p(i)}return this.makeOutput(o,e.shape,"float32")},t.prototype.sqrt=function(e){G(e,"sqrt");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=Math.sqrt(i)}return this.makeOutput(o,e.shape,"float32")},t.prototype.rsqrt=function(e){G(e,"rsqrt");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=1/Math.sqrt(i)}return this.makeOutput(o,e.shape,"float32")},t.prototype.reciprocal=function(e){G(e,"reciprocal");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=1/n[a];return this.makeOutput(o,e.shape,"float32")},t.prototype.linear=function(e){return e},t.prototype.relu=function(e){G(e,"relu");for(var n=Ne(e.shape,e.dtype),o=this.readSync(n.dataId),a=this.readSync(e.dataId),i=0;i<a.length;++i)o[i]=Math.max(0,a[i]);return n},t.prototype.relu6=function(e){G(e,"relu");for(var n=Ne(e.shape,e.dtype),o=this.readSync(n.dataId),a=this.readSync(e.dataId),i=0;i<a.length;++i)o[i]=Math.min(Math.max(0,a[i]),6);return n},t.prototype.prelu=function(e,n){return G([e,n],"prelu"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){return o<0?a*o:o})},t.prototype.elu=function(e){G(e,"elu");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a){var i=o[a];n[a]=i>=0?i:Math.exp(i)-1}return this.makeOutput(n,e.shape,"float32")},t.prototype.eluDer=function(e,n){G([e,n],"eluDer");for(var o=new Float32Array(n.size),a=this.readSync(n.dataId),i=this.readSync(e.dataId),s=0;s<a.length;++s){var u=a[s];o[s]=u>=1?i[s]:i[s]*(u+1)}return this.makeOutput(o,n.shape,"float32")},t.prototype.selu=function(e){G(e,"selu");for(var n=Ns,o=Fs,a=new Float32Array(e.size),i=this.readSync(e.dataId),s=0;s<i.length;++s){var u=i[s];a[s]=u>=0?o*u:n*(Math.exp(u)-1)}return this.makeOutput(a,e.shape,"float32")},t.prototype.clip=function(e,n,o){G(e,"clip");for(var a=new Float32Array(e.size),i=this.readSync(e.dataId),s=0;s<i.length;++s){var u=i[s];a[s]=u>o?o:u<n?n:u}return this.makeOutput(a,e.shape,"float32")},t.prototype.abs=function(e){for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.abs(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.complexAbs=function(e){for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<e.size;++a){var i=o[2*a],s=o[2*a+1];n[a]=Math.hypot(i,s)}return this.makeOutput(n,e.shape,"float32")},t.prototype.int=function(e){G(e,"int");for(var n=new Int32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=o[a];return this.makeOutput(n,e.shape,"int32")},t.prototype.sigmoid=function(e){G(e,"sigmoid");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=1/(1+Math.exp(-o[a]));return this.makeOutput(n,e.shape,"float32")},t.prototype.softplus=function(e){G(e,"softplus");for(var n=Math.log(11920928955078125e-23)+2,o=new Float32Array(e.size),a=this.readSync(e.dataId),i=0;i<a.length;++i){var s=a[i]>-n,u=a[i]<n,c=Math.exp(a[i]),l=void 0;l=u?c:s?a[i]:Math.log(1+c),o[i]=l}return this.makeOutput(o,e.shape,"float32")},t.prototype.sin=function(e){G(e,"sin");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.sin(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.cos=function(e){G(e,"cos");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.cos(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.tan=function(e){G(e,"tan");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.tan(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.asin=function(e){G(e,"asin");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.asin(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.acos=function(e){G(e,"acos");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.acos(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.atan=function(e){G(e,"atan");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.atan(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.atan2=function(e,n){return G([e,n],"atan2"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){return Math.atan2(o,a)})},t.prototype.sinh=function(e){G(e,"sinh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.sinh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.cosh=function(e){G(e,"cosh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.cosh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.tanh=function(e){G(e,"tanh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=pp(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.asinh=function(e){G(e,"asinh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.asinh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.acosh=function(e){G(e,"acosh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.acosh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.atanh=function(e){G(e,"atanh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.atanh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.erf=function(e){G(e,"erf");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a){var i=Math.sign(o[a]),s=Math.abs(o[a]),u=1/(1+.3275911*s);n[a]=i*(1-((((1.061405429*u-1.453152027)*u+1.421413741)*u-.284496736)*u+.254829592)*u*Math.exp(-s*s))}return this.makeOutput(n,e.shape,"float32")},t.prototype.step=function(e,n){n===void 0&&(n=0),G(e,"step");for(var o=new Float32Array(e.size),a=this.readSync(e.dataId),i=0;i<a.length;++i){var s=a[i];isNaN(s)?o[i]=NaN:o[i]=s>0?1:n}return this.makeOutput(o,e.shape,"float32")},t.prototype.fusedConv2d=function(e){var n=e.input,o=e.filter,a=e.convInfo,i=e.bias,s=e.activation,u=e.preluActivationWeights,c=this.conv2d(n,o,a);return i&&(c=this.add(c,i)),s&&(c=mi(this,c,s,u)),c},t.prototype.conv2d=function(e,n,o){G([e,n],"conv2d");for(var a=o.filterHeight,i=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,f=o.dataFormat==="channelsLast",h=de(o.outShape,e.dtype),d=e.strides[0],p=f?e.strides[1]:e.strides[2],m=f?e.strides[2]:1,v=f?1:e.strides[1],g=h.strides[0],x=f?h.strides[1]:h.strides[2],w=f?h.strides[2]:1,y=f?1:h.strides[1],b=this.readSync(e.dataId),_=this.readSync(n.dataId),E=h.values,I=0;I<o.batchSize;++I)for(var R=I*d,k=I*g,T=0;T<o.outHeight;++T)for(var A=k+T*x,B=T*o.strideHeight-l,M=0;M<a;M++){var O=B+M*s;if(!(O<0||O>=o.inHeight))for(var U=M*n.strides[0],z=R+O*p,W=0;W<o.outWidth;++W)for(var V=A+W*w,H=W*o.strideWidth-c,K=0;K<i;K++){var Q=H+K*u;if(!(Q<0||Q>=o.inWidth))for(var ae=z+Q*m,Z=U+K*n.strides[1],ie=0;ie<o.inChannels;++ie){for(var ue=b[ae+ie*v],le=0;le<o.outChannels;++le)E[V+le*y]+=ue*_[Z+le];Z+=o.outChannels}}}return h.toTensor()},t.prototype.conv3d=function(e,n,o){for(var a=o.filterDepth,i=o.filterHeight,s=o.filterWidth,u=o.dilationDepth,c=o.dilationHeight,l=o.dilationWidth,f=o.padInfo.front,h=o.padInfo.left,d=o.padInfo.top,p=de(o.outShape,e.dtype),m=this.readSync(e.dataId),v=this.readSync(n.dataId),g=p.values,x=0;x<o.batchSize;++x)for(var w=x*e.strides[0],y=x*p.strides[0],b=0;b<o.outDepth;++b)for(var _=y+b*p.strides[1],E=b*o.strideDepth-f,I=0;I<a;I++){var R=E+I*u;if(!(R<0||R>=o.inDepth))for(var k=I*n.strides[0],T=w+R*e.strides[1],A=0;A<o.outHeight;++A)for(var B=_+A*p.strides[2],M=A*o.strideHeight-d,O=0;O<i;O++){var U=M+O*c;if(!(U<0||U>=o.inHeight))for(var z=k+O*n.strides[1],W=T+U*e.strides[2],V=0;V<o.outWidth;++V)for(var H=B+V*o.outChannels,K=V*o.strideWidth-h,Q=0;Q<s;Q++){var ae=K+Q*l;if(!(ae<0||ae>=o.inWidth))for(var Z=z+Q*n.strides[2],ie=W+ae*o.inChannels,ue=Z,le=0;le<o.inChannels;++le){for(var pe=m[ie+le],fe=0;fe<o.outChannels;++fe)g[H+fe]+=pe*v[ue+fe];ue+=o.outChannels}}}}return p.toTensor()},t.prototype.conv2dDerInput=function(e,n,o){G([e,n],"conv2dDerInput");for(var a=de(o.inShape,"float32"),i=a.values,s=this.readSync(e.dataId),u=this.readSync(n.dataId),c=n.strides,l=c[0],f=c[1],h=c[2],d=o.batchSize,p=o.filterHeight,m=o.filterWidth,v=o.inChannels,g=o.inHeight,x=o.inWidth,w=o.outChannels,y=o.outHeight,b=o.outWidth,_=o.strideHeight,E=o.strideWidth,I=o.dataFormat,R=p-1-o.padInfo.top,k=m-1-o.padInfo.left,T=I==="channelsLast",A=a.strides[0],B=T?a.strides[1]:a.strides[2],M=T?a.strides[2]:1,O=T?1:a.strides[1],U=e.strides[0],z=T?e.strides[1]:e.strides[2],W=T?e.strides[2]:1,V=T?1:e.strides[1],H=0;H<d;++H)for(var K=0;K<v;++K)for(var Q=0;Q<g;++Q)for(var ae=Q-R,Z=Math.max(0,Math.ceil(ae/_)),ie=Math.min(y,(p+ae)/_),ue=0;ue<x;++ue){for(var le=ue-k,pe=Math.max(0,Math.ceil(le/E)),fe=Math.min(b,(m+le)/E),ke=0,ge=Z;ge<ie;++ge)for(var X=ge*_-ae,te=pe;te<fe;++te)for(var se=U*H+z*ge+W*te,be=l*(p-1-X)+f*(m-1-(te*E-le))+h*K,Ce=0;Ce<w;++Ce)ke+=s[se+V*Ce]*u[be+Ce];i[A*H+B*Q+M*ue+O*K]=ke}return a.toTensor()},t.prototype.conv3dDerInput=function(e,n,o){for(var a=de(o.inShape,"float32"),i=a.values,s=a.strides,u=s[0],c=s[1],l=s[2],f=s[3],h=this.readSync(e.dataId),d=e.strides,p=d[0],m=d[1],v=d[2],g=d[3],x=this.readSync(n.dataId),w=n.strides,y=w[0],b=w[1],_=w[2],E=w[3],I=o.batchSize,R=o.filterDepth,k=o.filterHeight,T=o.filterWidth,A=o.inChannels,B=o.inDepth,M=o.inHeight,O=o.inWidth,U=o.outChannels,z=o.outDepth,W=o.outHeight,V=o.outWidth,H=o.strideDepth,K=o.strideHeight,Q=o.strideWidth,ae=R-1-o.padInfo.front,Z=k-1-o.padInfo.top,ie=T-1-o.padInfo.left,ue=0;ue<I;++ue)for(var le=0;le<A;++le)for(var pe=0;pe<B;++pe)for(var fe=pe-ae,ke=Math.max(0,Math.ceil(fe/H)),ge=Math.min(z,(R+fe)/H),X=0;X<M;++X)for(var te=X-Z,se=Math.max(0,Math.ceil(te/K)),be=Math.min(W,(k+te)/K),Ce=0;Ce<O;++Ce){for(var gt=Ce-ie,St=Math.max(0,Math.ceil(gt/Q)),it=Math.min(V,(T+gt)/Q),En=0,yt=ke;yt<ge;++yt)for(var Dt=yt*H-fe,ln=se;ln<be;++ln)for(var cr=ln*K-te,fn=St;fn<it;++fn)for(var ja=p*ue+m*yt+v*ln+g*fn,lr=y*(R-1-Dt)+b*(k-1-cr)+_*(T-1-(fn*Q-gt))+E*le,Gt=0;Gt<U;++Gt)En+=h[ja+Gt]*x[lr+Gt];i[u*ue+c*pe+l*X+f*Ce+le]=En}return a.toTensor()},t.prototype.conv2dDerFilter=function(e,n,o){G([e,n],"conv2dDerFilter");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dataFormat==="channelsLast",l=de(o.filterShape,"float32"),f=o.padInfo.left,h=o.padInfo.top,d=this.bufferSync(e),p=this.bufferSync(n),m=0;m<s;++m)for(var v=Math.max(0,Math.ceil((h-m)/a)),g=Math.min(o.outHeight,(o.inHeight+h-m)/a),x=0;x<u;++x)for(var w=Math.max(0,Math.ceil((f-x)/i)),y=Math.min(o.outWidth,(o.inWidth+f-x)/i),b=0;b<o.inChannels;++b)for(var _=0;_<o.outChannels;++_){for(var E=0,I=0;I<o.batchSize;++I)for(var R=v;R<g;++R)for(var k=m+R*a-h,T=w;T<y;++T){var A=x+T*i-f;E+=c?d.get(I,k,A,b)*p.get(I,R,T,_):d.get(I,b,k,A)*p.get(I,_,R,T)}l.set(E,m,x,b,_)}return l.toTensor()},t.prototype.conv3dDerFilter=function(e,n,o){for(var a=o.strideDepth,i=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,f=de(o.filterShape,"float32"),h=f.values,d=f.strides,p=d[0],m=d[1],v=d[2],g=d[3],x=this.readSync(n.dataId),w=n.strides,y=w[0],b=w[1],_=w[2],E=w[3],I=this.readSync(e.dataId),R=e.strides,k=R[0],T=R[1],A=R[2],B=R[3],M=o.padInfo.front,O=o.padInfo.left,U=o.padInfo.top,z=0;z<u;++z)for(var W=Math.max(0,Math.ceil((M-z)/a)),V=Math.min(o.outDepth,(o.inDepth+M-z)/a),H=z*p,K=0;K<c;++K)for(var Q=Math.max(0,Math.ceil((U-K)/i)),ae=Math.min(o.outHeight,(o.inHeight+U-K)/i),Z=K*m+H,ie=0;ie<l;++ie)for(var ue=Math.max(0,Math.ceil((O-ie)/s)),le=Math.min(o.outWidth,(o.inWidth+O-ie)/s),pe=ie*v+Z,fe=0;fe<o.inChannels;++fe)for(var ke=fe*g+pe,ge=0;ge<o.outChannels;++ge){for(var X=0,te=0;te<o.batchSize;++te)for(var se=te*k,be=te*y,Ce=W;Ce<V;++Ce)for(var gt=(z+Ce*a-M)*T+se,St=Ce*b+be,it=Q;it<ae;++it)for(var En=(K+it*i-U)*A+gt,yt=it*_+St,Dt=ue;Dt<le;++Dt){var ln=Dt*E+yt;X+=I[(ie+Dt*s-O)*B+En+fe]*x[ln+ge]}h[ke+ge]=X}return f.toTensor()},t.prototype.fusedDepthwiseConv2D=function(e){var n=e.input,o=e.filter,a=e.convInfo,i=e.bias,s=e.activation,u=e.preluActivationWeights,c=this.depthwiseConv2D(n,o,a);return i&&(c=this.add(c,i)),s&&(c=mi(this,c,s,u)),c},t.prototype.depthwiseConv2D=function(e,n,o){G([e,n],"depthwiseConv2D");for(var a=o.filterHeight,i=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,f=o.outChannels/o.inChannels,h=de(o.outShape,e.dtype),d=this.readSync(e.dataId),p=this.readSync(n.dataId),m=h.values,v=0;v<o.batchSize;++v)for(var g=v*e.strides[0],x=v*h.strides[0],w=0;w<o.outHeight;++w)for(var y=x+w*h.strides[1],b=w*o.strideHeight-c,_=0;_<a;++_){var E=b+_*s;if(!(E<0||E>=o.inHeight))for(var I=_*n.strides[0],R=g+E*e.strides[1],k=0;k<o.outWidth;++k)for(var T=y+k*h.strides[2],A=k*o.strideWidth-l,B=0;B<i;++B){var M=A+B*u;if(!(M<0||M>=o.inWidth))for(var O=I+B*n.strides[1],U=R+M*o.inChannels,z=T,W=O,V=0;V<o.inChannels;++V){for(var H=d[U+V],K=0;K<f;++K)m[z+K]+=H*p[W+K];z+=f,W+=f}}}return h.toTensor()},t.prototype.depthwiseConv2DDerInput=function(e,n,o){G([e,n],"depthwiseConv2DDerInput");for(var a=de(o.inShape,"float32"),i=a.values,s=a.strides,u=s[0],c=s[1],l=s[2],f=this.readSync(e.dataId),h=e.strides,d=h[0],p=h[1],m=h[2],v=this.readSync(n.dataId),g=n.strides,x=g[0],w=g[1],y=g[2],b=o.batchSize,_=o.filterHeight,E=o.filterWidth,I=o.inChannels,R=o.inHeight,k=o.inWidth,T=o.outChannels,A=o.outHeight,B=o.outWidth,M=o.strideHeight,O=o.strideWidth,U=_-1-o.padInfo.top,z=E-1-o.padInfo.left,W=T/I,V=0;V<b;++V)for(var H=0;H<I;++H)for(var K=0;K<R;++K)for(var Q=K-U,ae=Math.max(0,Math.ceil(Q/M)),Z=Math.min(A,(_+Q)/M),ie=0;ie<k;++ie){for(var ue=ie-z,le=Math.max(0,Math.ceil(ue/O)),pe=Math.min(B,(E+ue)/O),fe=0,ke=ae;ke<Z;++ke)for(var ge=ke*M-Q,X=le;X<pe;++X)for(var te=d*V+p*ke+m*X,se=x*(_-1-ge)+w*(E-1-(X*O-ue))+y*H,be=0;be<W;++be)fe+=f[te+(H*W+be)]*v[se+be];i[u*V+c*K+l*ie+H]=fe}return a.toTensor()},t.prototype.depthwiseConv2DDerFilter=function(e,n,o){G([e,n],"depthwiseConv2DDerFilter");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=de(o.filterShape,"float32"),l=o.padInfo.left,f=o.padInfo.top,h=o.outChannels/o.inChannels,d=this.bufferSync(e),p=this.bufferSync(n),m=0;m<s;++m)for(var v=Math.max(0,Math.ceil((f-m)/a)),g=Math.min(o.outHeight,(o.inHeight+f-m)/a),x=0;x<u;++x)for(var w=Math.max(0,Math.ceil((l-x)/i)),y=Math.min(o.outWidth,(o.inWidth+l-x)/i),b=0;b<o.outChannels;++b){for(var _=Math.trunc(b/h),E=b%h,I=0,R=0;R<o.batchSize;++R)for(var k=v;k<g;++k)for(var T=m+k*a-f,A=w;A<y;++A){var B=x+A*i-l;I+=d.get(R,T,B,_)*p.get(R,k,A,b)}c.set(I,m,x,_,E)}return c.toTensor()},t.prototype.tile=function(e,n){return G(e,"tile"),Yl(this.bufferSync(e),n)},t.prototype.pad=function(e,n,o){G(e,"pad");var a=n.map(function(h,d){return h[0]+e.shape[d]+h[1]}),i=n.map(function(h){return h[0]}),s=this.bufferSync(e),u=de(a,e.dtype);o!==0&&u.values.fill(o);for(var c=0;c<e.size;c++){var l=s.indexToLoc(c),f=l.map(function(h,d){return h+i[d]});u.set.apply(u,[s.get.apply(s,l)].concat(f))}return u.toTensor()},t.prototype.transpose=function(e,n){G(e,"transpose");for(var o=new Array(e.rank),a=0;a<o.length;a++)o[a]=e.shape[n[a]];var i=this.readSync(e.dataId),s=de(o,e.dtype),u=this.bufferSync(e);for(a=0;a<e.size;++a){for(var c=u.indexToLoc(a),l=new Array(c.length),f=0;f<l.length;f++)l[f]=c[n[f]];var h=s.locToIndex(l);s.values[h]=i[a]}return s.toTensor()},t.prototype.gather=function(e,n,o){G([e,n],"gather");var a=e.shape.slice(),i=this.readSync(n.dataId);a[o]=i.length;for(var s=de(a,e.dtype),u=this.bufferSync(e),c=0;c<s.size;++c){var l=s.indexToLoc(c),f=l.slice();f[o]=i[l[o]];var h=u.locToIndex(f);s.values[c]=u.values[h]}return s.toTensor()},t.prototype.batchToSpaceND=function(e,n,o){G([e],"batchToSpaceND");var a=n.reduce(function(f,h){return f*h}),i=sa(e.shape,n,a),s=ua(i.length,n.length),u=ca(e.shape,n,a),c=Bl(o,n.length),l=Ll(u,o,n.length);return e.reshape(i).transpose(s).reshape(u).slice(c,l)},t.prototype.spaceToBatchND=function(e,n,o){G([e],"spaceToBatchND");var a=n.reduce(function(h,d){return h*d}),i=[[0,0]];i.push.apply(i,o);for(var s=1+n.length;s<e.shape.length;++s)i.push([0,0]);var u=e.pad(i),c=sa(u.shape,n,a,!1),l=ua(c.length,n.length,!1),f=ca(u.shape,n,a,!1);return u.reshape(c).transpose(l).reshape(f)},t.prototype.pool=function(e,n,o){G(e,"pool");for(var a=n.strideHeight,i=n.strideWidth,s=n.dilationHeight,u=n.dilationWidth,c=n.effectiveFilterHeight,l=n.effectiveFilterWidth,f=n.padInfo.top,h=n.padInfo.left,d=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,p=this.readSync(e.dataId),m=de(n.outShape,e.dtype),v=m.values,g=n.outShape[1]*n.outShape[2]*n.outShape[3],x=n.outShape[2]*n.outShape[3],w=n.outShape[3],y=0;y<n.batchSize;++y)for(var b=y*g,_=y*e.strides[0],E=0;E<n.inChannels;++E)for(var I=0;I<n.outHeight;++I)for(var R=I*a-f,k=Math.max(0,R),T=Math.min(n.inHeight,c+R),A=b+I*x,B=0;B<n.outWidth;++B){for(var M=B*i-h,O=Math.max(0,M),U=Math.min(n.inWidth,l+M),z=d,W=0,V=0,H=k;H<T;H+=s){for(var K=_+H*e.strides[1],Q=O;Q<U;Q+=u){var ae=p[K+Q*e.strides[2]+E];o==="max"&&ae>z?z=ae:o==="avg"&&(W+=ae,V++)}if(isNaN(z))break}v[A+B*w+E]=o==="avg"?W/V:z}return m.toTensor()},t.prototype.maxPool=function(e,n){return this.pool(e,n,"max")},t.prototype.maxPoolPositions=function(e,n){for(var o=de(n.outShape,"int32"),a=n.strideHeight,i=n.strideWidth,s=n.dilationHeight,u=n.dilationWidth,c=n.effectiveFilterHeight,l=n.effectiveFilterWidth,f=n.padInfo.top,h=n.padInfo.left,d=this.bufferSync(e),p=0;p<n.batchSize;++p)for(var m=0;m<n.inChannels;++m)for(var v=0;v<n.outHeight;++v){for(var g=v*a-f,x=g;x<0;)x+=s;for(var w=Math.min(n.inHeight,c+g),y=0;y<n.outWidth;++y){for(var b=y*i-h,_=b;_<0;)_+=u;for(var E=Math.min(n.inWidth,l+b),I=Number.NEGATIVE_INFINITY,R=-1,k=x;k<w;k+=s)for(var T=k-g,A=_;A<E;A+=u){var B=A-b,M=d.get(p,k,A,m);M>I&&(I=M,R=T*l+B)}o.set(R,p,v,y,m)}}return o.toTensor()},t.prototype.maxPoolBackprop=function(e,n,o,a){G([n,o],"maxPoolBackprop");for(var i=this.maxPoolPositions(n,a),s=a.strideHeight,u=a.strideWidth,c=a.dilationHeight,l=a.dilationWidth,f=a.effectiveFilterHeight,h=a.effectiveFilterWidth,d=h-1-a.padInfo.left,p=f-1-a.padInfo.top,m=de(n.shape,"float32"),v=this.bufferSync(i),g=this.bufferSync(e),x=0;x<a.batchSize;++x)for(var w=0;w<a.inChannels;++w)for(var y=0;y<a.inHeight;++y)for(var b=0;b<a.inWidth;++b){for(var _=y-p,E=b-d,I=0,R=0;R<f;R+=c){var k=(_+R)/s;if(!(k<0||k>=a.outHeight||Math.floor(k)!==k))for(var T=0;T<h;T+=l){var A=(E+T)/u;if(!(A<0||A>=a.outWidth||Math.floor(A)!==A)){var B=f*h-1-v.get(x,k,A,w)===R*h+T?1:0;B!==0&&(I+=g.get(x,k,A,w)*B)}}}m.set(I,x,y,b,w)}return m.toTensor()},t.prototype.avgPoolBackprop=function(e,n,o){G([e,n],"avgPoolBackprop");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dilationHeight,l=o.dilationWidth,f=o.effectiveFilterHeight,h=o.effectiveFilterWidth,d=h-1-o.padInfo.left,p=f-1-o.padInfo.top,m=de(n.shape,"float32"),v=1/(s*u),g=this.bufferSync(e),x=0;x<o.batchSize;++x)for(var w=0;w<o.inChannels;++w)for(var y=0;y<o.inHeight;++y)for(var b=0;b<o.inWidth;++b){for(var _=y-p,E=b-d,I=0,R=0;R<f;R+=c){var k=(_+R)/a;if(!(k<0||k>=o.outHeight||Math.floor(k)!==k))for(var T=0;T<h;T+=l){var A=(E+T)/i;A<0||A>=o.outWidth||Math.floor(A)!==A||(I+=g.get(x,k,A,w))}}m.set(I*v,x,y,b,w)}return m.toTensor()},t.prototype.pool3d=function(e,n,o){G(e,"pool3d");for(var a=n.strideDepth,i=n.strideHeight,s=n.strideWidth,u=n.dilationDepth,c=n.dilationHeight,l=n.dilationWidth,f=n.effectiveFilterDepth,h=n.effectiveFilterHeight,d=n.effectiveFilterWidth,p=n.padInfo.front,m=n.padInfo.top,v=n.padInfo.left,g=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,x=this.readSync(e.dataId),w=de(n.outShape,e.dtype),y=w.values,b=n.outShape[1]*n.outShape[2]*n.outShape[3]*n.outShape[4],_=n.outShape[2]*n.outShape[3]*n.outShape[4],E=n.outShape[3]*n.outShape[4],I=n.outShape[4],R=0;R<n.batchSize;++R)for(var k=R*b,T=R*e.strides[0],A=0;A<n.inChannels;++A)for(var B=0;B<n.outDepth;++B){for(var M=B*a-p,O=M;O<0;)O+=u;for(var U=Math.min(n.inDepth,f+M),z=k+B*_,W=0;W<n.outHeight;++W){for(var V=W*i-m,H=V;H<0;)H+=c;for(var K=Math.min(n.inHeight,h+V),Q=z+W*E,ae=0;ae<n.outWidth;++ae){for(var Z=ae*s-v,ie=Z;ie<0;)ie+=l;for(var ue=Math.min(n.inWidth,d+Z),le=Q+ae*I,pe=g,fe=0,ke=0,ge=O;ge<U;ge+=u){for(var X=T+ge*e.strides[1],te=H;te<K;te+=c){for(var se=X+te*e.strides[2],be=ie;be<ue;be+=l){var Ce=x[se+be*e.strides[3]+A];if(o==="max"&&Ce>pe?pe=Ce:o==="avg"&&(fe+=Ce,ke++),isNaN(pe))break}if(isNaN(pe))break}if(isNaN(pe))break}y[le+A]=o==="avg"?fe/ke:pe}}}return w.toTensor()},t.prototype.avgPool3d=function(e,n){return G(e,"avgPool3d"),this.pool3d(e,n,"avg").toFloat()},t.prototype.avgPool3dBackprop=function(e,n,o){G([e,n],"avgPool3dBackprop");for(var a=o.strideDepth,i=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,f=o.dilationDepth,h=o.dilationHeight,d=o.dilationWidth,p=o.effectiveFilterDepth,m=o.effectiveFilterHeight,v=o.effectiveFilterWidth,g=p-1-o.padInfo.front,x=v-1-o.padInfo.left,w=m-1-o.padInfo.top,y=de(n.shape,"float32"),b=1/(u*c*l),_=this.bufferSync(e),E=0;E<o.batchSize;++E)for(var I=0;I<o.inChannels;++I)for(var R=0;R<o.inDepth;++R)for(var k=0;k<o.inHeight;++k)for(var T=0;T<o.inWidth;++T){for(var A=R-g,B=k-w,M=T-x,O=0,U=0;U<p;U+=f){var z=(A+U)/a;if(!(z<0||z>=o.outDepth||Math.floor(z)!==z))for(var W=0;W<m;W+=h){var V=(B+W)/i;if(!(V<0||V>=o.outHeight||Math.floor(V)!==V))for(var H=0;H<v;H+=d){var K=(M+H)/s;K<0||K>=o.outWidth||Math.floor(K)!==K||(O+=_.get(E,z,V,K,I))}}}y.set(O*b,E,R,k,T,I)}return y.toTensor()},t.prototype.maxPool3d=function(e,n){return G(e,"maxPool3d"),this.pool3d(e,n,"max").toFloat()},t.prototype.maxPool3dPositions=function(e,n){for(var o=de(n.outShape,"int32"),a=n.strideDepth,i=n.strideHeight,s=n.strideWidth,u=n.dilationDepth,c=n.dilationHeight,l=n.dilationWidth,f=n.effectiveFilterDepth,h=n.effectiveFilterHeight,d=n.effectiveFilterWidth,p=n.padInfo.front,m=n.padInfo.top,v=n.padInfo.left,g=this.bufferSync(e),x=0;x<n.batchSize;++x)for(var w=0;w<n.inChannels;++w)for(var y=0;y<n.outDepth;++y){for(var b=y*a-p,_=b;_<0;)_+=u;for(var E=Math.min(n.inDepth,f+b),I=0;I<n.outHeight;++I){for(var R=I*i-m,k=R;k<0;)k+=c;for(var T=Math.min(n.inHeight,h+R),A=0;A<n.outWidth;++A){for(var B=A*s-v,M=B;M<0;)M+=l;for(var O=Math.min(n.inWidth,d+B),U=Number.NEGATIVE_INFINITY,z=-1,W=_;W<E;W+=u)for(var V=W-b,H=k;H<T;H+=c)for(var K=H-R,Q=M;Q<O;Q+=l){var ae=Q-B,Z=g.get(x,W,H,Q,w);Z>=U&&(U=Z,z=V*h*d+K*h+ae)}o.set(z,x,y,I,A,w)}}}return o.toTensor()},t.prototype.maxPool3dBackprop=function(e,n,o,a){G([n,o],"maxPool3dBackprop");for(var i=this.maxPool3dPositions(n,a),s=a.strideDepth,u=a.strideHeight,c=a.strideWidth,l=a.dilationDepth,f=a.dilationHeight,h=a.dilationWidth,d=a.effectiveFilterDepth,p=a.effectiveFilterHeight,m=a.effectiveFilterWidth,v=d-1-a.padInfo.front,g=m-1-a.padInfo.left,x=p-1-a.padInfo.top,w=de(n.shape,"float32"),y=this.bufferSync(i),b=this.bufferSync(e),_=0;_<a.batchSize;++_)for(var E=0;E<a.inChannels;++E)for(var I=0;I<a.inDepth;++I)for(var R=0;R<a.inHeight;++R)for(var k=0;k<a.inWidth;++k){for(var T=I-v,A=R-x,B=k-g,M=0,O=0;O<d;O+=l){var U=(T+O)/s;if(!(U<0||U>=a.outDepth||Math.floor(U)!==U))for(var z=0;z<p;z+=f){var W=(A+z)/u;if(!(W<0||W>=a.outHeight||Math.floor(W)!==W))for(var V=0;V<m;V+=h){var H=(B+V)/c;if(!(H<0||H>=a.outWidth||Math.floor(H)!==H)){var K=d*p*m-1-y.get(_,U,W,H,E)===O*p*m+z*m+V?1:0;K!==0&&(M+=b.get(_,U,W,H,E)*K)}}}}w.set(M,_,I,R,k,E)}return w.toTensor()},t.prototype.cast=function(e,n){return ql(e,n,this)},t.prototype.reshape=function(e,n){return Hi(e,n)},t.prototype.avgPool=function(e,n){return G(e,"avgPool"),this.pool(e,n,"avg").toFloat()},t.prototype.resizeBilinear=function(e,n,o,a){G(e,"resizeBilinear");for(var i=e.shape,s=i[0],u=i[1],c=i[2],l=i[3],f=this.readSync(e.dataId),h=new Float32Array(ee([s,n,o,l])),d=[a&&n>1?u-1:u,a&&o>1?c-1:c],p=[a&&n>1?n-1:n,a&&o>1?o-1:o],m=0,v=d[0]/p[0],g=d[1]/p[1],x=0;x<s;x++)for(var w=0;w<n;w++)for(var y=v*w,b=Math.floor(y),_=y-b,E=Math.min(u-1,Math.ceil(y)),I=x*e.strides[0]+b*e.strides[1],R=x*e.strides[0]+E*e.strides[1],k=0;k<o;k++)for(var T=g*k,A=Math.floor(T),B=T-A,M=Math.min(c-1,Math.ceil(T)),O=I+A*e.strides[2],U=R+A*e.strides[2],z=I+M*e.strides[2],W=R+M*e.strides[2],V=0;V<l;V++){var H=f[O+V],K=f[U+V],Q=H+(f[z+V]-H)*B,ae=Q+(K+(f[W+V]-K)*B-Q)*_;h[m++]=ae}return Ze(h,[s,n,o,l])},t.prototype.resizeBilinearBackprop=function(e,n,o){G([e,n],"resizeBilinearBackprop");for(var a=n.shape,i=a[0],s=a[1],u=a[2],c=a[3],l=e.shape,f=l[1],h=l[2],d=new Float32Array(i*s*u*c),p=[o&&f>1?s-1:s,o&&h>1?u-1:u],m=[o&&f>1?f-1:f,o&&h>1?h-1:h],v=p[0]/m[0],g=p[1]/m[1],x=this.readSync(e.dataId),w=0,y=0;y<i;y++)for(var b=y*n.strides[0],_=0;_<f;_++)for(var E=_*v,I=Math.floor(E),R=Math.min(Math.ceil(E),s-1),k=b+I*n.strides[1],T=b+R*n.strides[1],A=E-I,B=1-A,M=0;M<h;M++)for(var O=M*g,U=Math.floor(O),z=Math.min(Math.ceil(O),u-1),W=O-U,V=1-W,H=k+U*n.strides[2],K=k+z*n.strides[2],Q=T+U*n.strides[2],ae=T+z*n.strides[2],Z=B*V,ie=B*W,ue=A*V,le=A*W,pe=0;pe<c;pe++){var fe=x[w++];d[H+pe]+=fe*Z,d[K+pe]+=fe*ie,d[Q+pe]+=fe*ue,d[ae+pe]+=fe*le}return ft(d,[i,u,s,c],n.dtype)},t.prototype.resizeNearestNeighbor=function(e,n,o,a){G(e,"resizeNearestNeighbor");for(var i=e.shape,s=i[0],u=i[1],c=i[2],l=i[3],f=this.readSync(e.dataId),h=new Float32Array(s*n*o*l),d=[a&&n>1?u-1:u,a&&o>1?c-1:c],p=[a&&n>1?n-1:n,a&&o>1?o-1:o],m=d[0]/p[0],v=d[1]/p[1],g=0,x=0;x<s;x++)for(var w=x*e.strides[0],y=0;y<n;y++)for(var b=m*y,_=w+Math.min(u-1,a?Math.round(b):Math.floor(b))*e.strides[1],E=0;E<o;E++)for(var I=v*E,R=_+Math.min(c-1,a?Math.round(I):Math.floor(I))*e.strides[2],k=0;k<l;k++){var T=f[R+k];h[g++]=T}return Ze(h,[s,n,o,l],e.dtype)},t.prototype.resizeNearestNeighborBackprop=function(e,n,o){G([e,n],"resizeNearestNeighborBackprop");for(var a=n.shape,i=a[0],s=a[1],u=a[2],c=a[3],l=e.shape,f=l[1],h=l[2],d=new Float32Array(i*s*u*c),p=this.readSync(e.dataId),m=[o&&f>1?s-1:s,o&&h>1?u-1:u],v=[o&&f>1?f-1:f,o&&h>1?h-1:h],g=m[0]/v[0],x=m[1]/v[1],w=1/g,y=1/x,b=2*Math.ceil(w)+2,_=2*Math.ceil(y)+2,E=0;E<i;E++)for(var I=E*n.strides[0],R=0;R<s;R++)for(var k=I+R*n.strides[1],T=Math.floor(R*w),A=Math.floor(T-b/2),B=0;B<u;B++)for(var M=k+B*n.strides[2],O=Math.floor(B*y),U=Math.floor(O-_/2),z=0;z<c;z++){for(var W=0,V=0;V<b;V++){var H=V+A;if(!(H<0||H>=f)){var K=I+H*e.strides[1],Q=H*g;if(R===Math.min(s-1,o?Math.round(Q):Math.floor(Q)))for(var ae=0;ae<_;ae++){var Z=ae+U;if(!(Z<0||Z>=h)){var ie=K+Z*e.strides[2],ue=Z*x;B===Math.min(u-1,o?Math.round(ue):Math.floor(ue))&&(W+=p[ie+z])}}}}d[M+z]=W}return ft(d,n.shape,n.dtype)},t.prototype.batchNormalization=function(e,n,o,a,i,s){G([e,n,o,i,s],"batchNorm");for(var u=this.readSync(e.dataId),c=this.readSync(n.dataId),l=this.readSync(o.dataId),f=i?this.readSync(i.dataId):new Float32Array([1]),h=s?this.readSync(s.dataId):new Float32Array([0]),d=new Float32Array(u.length),p=h.length,m=f.length,v=l.length,g=c.length,x=0,w=0,y=0,b=0,_=0;_<u.length;++_)d[_]=h[x++]+(u[_]-c[w++])*f[y++]/Math.sqrt(l[b++]+a),x>=p&&(x=0),w>=g&&(w=0),y>=m&&(y=0),b>=v&&(b=0);return ft(d,e.shape)},t.prototype.localResponseNormalization4D=function(e,n,o,a,i){G(e,"localResponseNormalization4D");var s=e.shape[3],u=s-1,c=this.readSync(e.dataId),l=e.size,f=new Float32Array(l);function h(v){for(var g=v%s,x=v-g+Math.max(0,g-n),w=v-g+Math.min(g+n,u),y=0;x<=w;x++){var b=c[x];y+=b*b}return y}for(var d=0;d<l;d++){var p=h(d),m=c[d]*Math.pow(o+a*p,-i);f[d]=m}return ft(f,e.shape)},t.prototype.LRNGrad=function(e,n,o,a,i,s,u){G(e,"LRNGrad");for(var c=e.shape[3],l=this.readSync(e.dataId),f=this.readSync(n.dataId),h=this.readSync(o.dataId),d=new Float32Array(e.size),p=e.size,m=0;m<p;m++){for(var v=m%c,g=m-v+Math.max(0,v-a),x=m-v+Math.min(c,v+a+1),w=0,y=g;y<x;y++)w+=Math.pow(f[y],2);for(w=s*w+i,y=g;y<x;y++){var b=-2*s*u*f[y]*h[m]/w;m===y&&(b+=Math.pow(w,-u)),b*=l[m],d[y]+=b}}return ft(d,e.shape)},t.prototype.multinomial=function(e,n,o,a){G(e,"multinomial");for(var i=n?e:xn(e),s=i.shape[0],u=i.shape[1],c=Ne([s,o],"int32"),l=this.readSync(c.dataId),f=this.readSync(i.dataId),h=0;h<s;++h){var d=h*u,p=new Float32Array(u-1);p[0]=f[d];for(var m=1;m<p.length;++m)p[m]=p[m-1]+f[d+m];for(var v=Aa(a.toString()),g=h*o,x=0;x<o;++x){var w=v();l[g+x]=p.length;for(var y=0;y<p.length;y++)if(w<p[y]){l[g+x]=y;break}}}return c},t.prototype.oneHot=function(e,n,o,a){G(e,"oneHot");var i=new Float32Array(e.size*n);i.fill(a);for(var s=this.readSync(e.dataId),u=0;u<e.size;++u)s[u]>=0&&s[u]<n&&(i[u*n+s[u]]=o);return Fn(i,[e.size,n],"int32")},t.prototype.nonMaxSuppression=function(e,n,o,a,i){return G(e,"nonMaxSuppression"),Ss(this.readSync(e.dataId),this.readSync(n.dataId),o,a,i)},t.prototype.fft=function(e){return this.fftBatch(e,!1)},t.prototype.ifft=function(e){return this.fftBatch(e,!0)},t.prototype.fftBatch=function(e,n){for(var o=e.shape[0],a=e.shape[1],i=de(e.shape,"float32"),s=de(e.shape,"float32"),u=Nt(e).as2D(o,a),c=Yt(e).as2D(o,a),l=0;l<o;l++)for(var f=u.slice([l,0],[1,a]),h=c.slice([l,0],[1,a]),d=Je(f,h),p=this.readSync(this.fftImpl(d,n).dataId),m=0;m<a;m++){var v=$u(p,m);i.values[l*a+m]=v.real,s.values[l*a+m]=v.imag}return Je(i.toTensor(),s.toTensor()).as2D(o,a)},t.prototype.fftImpl=function(e,n){var o=e.as1D(),a=o.size;if(this.isExponentOf2(a)){var i=this.fftRadix2(o,a,n).as2D(e.shape[0],e.shape[1]);return n&&(i=Je(Nt(i).div(q(a)),Yt(i).div(q(a)))),i}var s=this.readSync(e.dataId),u=function(c){for(var l=new Float32Array(c.length/2),f=new Float32Array(c.length/2),h=0;h<c.length;h+=2)l[h/2]=c[h],f[h/2]=c[h+1];return{real:l,imag:f}}(this.fourierTransformByMatmul(s,a,n));return Je(u.real,u.imag).as2D(e.shape[0],e.shape[1])},t.prototype.isExponentOf2=function(e){return(e&e-1)==0},t.prototype.fftRadix2=function(e,n,o){if(n===1)return e;var a=this.readSync(e.dataId),i=n/2,s=function(g){for(var x=Math.ceil(g.length/4),w=new Float32Array(x),y=new Float32Array(x),b=0;b<g.length;b+=4)w[Math.floor(b/4)]=g[b],y[Math.floor(b/4)]=g[b+1];return{real:w,imag:y}}(a),u=Je(s.real,s.imag).as1D(),c=function(g){for(var x=Math.floor(g.length/4),w=new Float32Array(x),y=new Float32Array(x),b=2;b<g.length;b+=4)w[Math.floor(b/4)]=g[b],y[Math.floor(b/4)]=g[b+1];return{real:w,imag:y}}(a),l=Je(c.real,c.imag).as1D();u=this.fftRadix2(u,i,o),l=this.fftRadix2(l,i,o);var f=function(g,x){for(var w=new Float32Array(g/2),y=new Float32Array(g/2),b=0;b<Math.ceil(g/2);b++){var _=(x?2:-2)*Math.PI*(b/g);w[b]=Math.cos(_),y[b]=Math.sin(_)}return{real:w,imag:y}}(n,o),h=Je(f.real,f.imag).mul(l),d=u.add(h),p=u.sub(h),m=Nt(d).concat(Nt(p)),v=Yt(d).concat(Yt(p));return Je(m,v).as1D()},t.prototype.fourierTransformByMatmul=function(e,n,o){for(var a=new Float32Array(2*n),i=0;i<n;i++){for(var s=0,u=0,c=0;c<n;c++){var l=Kv(i*c,n,o),f=$u(e,c);s+=f.real*l.real-f.imag*l.imag,u+=f.real*l.imag+f.imag*l.real}o&&(s/=n,u/=n),qv(a,s,u,i)}return a},t.prototype.depthToSpace=function(e,n,o){S(o==="NHWC",function(){return"Only NHWC dataFormat supported on CPU for depthToSpace. Got "+o}),S(n>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+n});for(var a=e.shape[0],i=e.shape[1],s=e.shape[2],u=e.shape[3],c=i*n,l=s*n,f=u/(n*n),h=this.readSync(e.dataId),d=new Float32Array(a*c*l*f),p=0,m=0;m<a;++m)for(var v=0;v<c;++v)for(var g=Math.floor(v/n),x=v%n,w=0;w<l;++w)for(var y=Math.floor(w/n),b=(x*n+w%n)*f,_=0;_<f;++_){var E=_+b+u*(y+s*(g+i*m));d[p++]=h[E]}return ft(d,[a,c,l,f])},t.prototype.broadcastedBinaryOp=function(e,n,o,a){var i=xe(e.shape,n.shape),s=de(i,o),u=this.readSync(e.dataId),c=this.readSync(n.dataId),l=An(e.shape,i),f=An(n.shape,i),h=s.values;if(l.length+f.length===0)for(var d=0;d<h.length;++d)h[d]=a(u[d%u.length],c[d%c.length]);else{var p=this.bufferSync(e),m=this.bufferSync(n),v=function(g){var x=s.indexToLoc(g),w=x.slice(-e.rank);l.forEach(function(E){return w[E]=0});var y=p.locToIndex(w),b=x.slice(-n.rank);f.forEach(function(E){return b[E]=0});var _=m.locToIndex(b);h[g]=a(u[y],c[_])};for(d=0;d<h.length;++d)v(d)}return s.toTensor()},t.prototype.broadcastedBinaryComplexOp=function(e,n,o){var a=xe(e.shape,n.shape),i=de(a,"float32"),s=de(a,"float32"),u=this.readSync(e.dataId),c=this.readSync(n.dataId),l=An(e.shape,a),f=An(n.shape,a),h=i.values,d=s.values;if(l.length+f.length===0)for(var p=0;p<h.length;p++){var m=p%u.length,v=p%c.length,g=o(u[2*m],u[2*m+1],c[2*v],c[2*v+1]);h[p]=g.real,d[p]=g.imag}else{var x=this.bufferSync(this.data.get(e.dataId).complexTensors.real),w=this.bufferSync(this.data.get(n.dataId).complexTensors.real),y=function(b){var _=i.indexToLoc(b),E=_.slice(-e.rank);l.forEach(function(A){return E[A]=0});var I=x.locToIndex(E),R=_.slice(-n.rank);f.forEach(function(A){return R[A]=0});var k=w.locToIndex(R),T=o(u[2*I],u[2*I+1],c[2*k],c[2*k+1]);h[b]=T.real,d[b]=T.imag};for(p=0;p<h.length;p++)y(p)}return this.complex(i.toTensor(),s.toTensor())},t.prototype.split=function(e,n,o){return $l(e,n,o)},t.prototype.dispose=function(){},t.prototype.floatPrecision=function(){return 32},t.prototype.epsilon=function(){return 1e-7},t.prototype.cropAndResize=function(e,n,o,a,i,s){for(var u=e.shape,c=u[0],l=u[1],f=u[2],h=u[3],d=n.shape[0],p=a[0],m=a[1],v=de([d,p,m,h],"float32"),g=this.readSync(n.dataId),x=this.readSync(o.dataId),w=this.readSync(e.dataId),y=e.strides,b=v.strides,_=0;_<d;_++){var E=4*_,I=g[E],R=g[E+1],k=g[E+2],T=g[E+3],A=x[_];if(!(A>=c))for(var B=p>1?(k-I)*(l-1)/(p-1):0,M=m>1?(T-R)*(f-1)/(m-1):0,O=0;O<p;O++){var U=p>1?I*(l-1)+O*B:.5*(I+k)*(l-1);if(U<0||U>l-1)for(var z=0;z<m;z++)for(var W=0;W<h;W++){var V=W+z*b[2]+O*b[1]+_*b[0];v.values[V]=s}else if(i==="bilinear"){var H=Math.floor(U),K=Math.ceil(U),Q=U-H;for(z=0;z<m;z++)if((ge=m>1?R*(f-1)+z*M:.5*(R+T)*(f-1))<0||ge>f-1)for(W=0;W<h;W++)V=W+z*b[2]+O*b[1]+_*b[0],v.values[V]=s;else{var ae=Math.floor(ge),Z=Math.ceil(ge),ie=ge-ae;for(W=0;W<h;W++){var ue=w[V=W+ae*y[2]+H*y[1]+A*y[0]],le=w[V=W+Z*y[2]+H*y[1]+A*y[0]],pe=w[V=W+ae*y[2]+K*y[1]+A*y[0]],fe=ue+(le-ue)*ie,ke=pe+(w[V=W+Z*y[2]+K*y[1]+A*y[0]]-pe)*ie;V=W+z*b[2]+O*b[1]+_*b[0],v.values[V]=fe+(ke-fe)*Q}}}else for(z=0;z<m;++z){var ge;if((ge=m>1?R*(f-1)+z*M:.5*(R+T)*(f-1))<0||ge>f-1)for(W=0;W<h;W++)V=W+z*b[2]+O*b[1]+_*b[0],v.values[V]=s;else{var X=Math.round(ge),te=Math.round(U);for(W=0;W<h;W++){var se=W+X*y[2]+te*y[1]+A*y[0],be=W+z*b[2]+O*b[1]+_*b[0];v.values[be]=w[se]}}}}}return v.toTensor()},t.prototype.sparseToDense=function(e,n,o,a){var i=la(0,e,o),s=i.sliceRank,u=i.numUpdates,c=i.sliceSize,l=i.strides,f=i.outputSize;return this.scatter(e,n,o,f,c,u,s,l,a,!1)},t.prototype.gatherND=function(e,n){var o=n.shape,a=o[o.length-1],i=Wl(e,n),s=i[0],u=i[1],c=i[2],l=i[3];if(u===0)return Ze([],s,e.dtype);for(var f=new to([u,c],e.dtype),h=this.readSync(n.dataId),d=this.readSync(e.dataId),p=0;p<u;p++){for(var m=[],v=0,g=0;g<a;g++){var x=h[p*a+g];v+=x*l[g],m.push(x)}if(v<0||v>=e.size/c)throw new Error("Invalid indices: "+m+" does not index into "+e.shape);for(var w=0;w<c;w++)f.values[p*c+w]=d[v*c+w]}return f.toTensor().reshape(s)},t.prototype.scatterND=function(e,n,o){var a=la(0,e,o),i=a.sliceRank,s=a.numUpdates,u=a.sliceSize,c=a.strides,l=a.outputSize,f=q(0);return this.scatter(e,n,o,l,u,s,i,c,f,!0)},t.prototype.fill=function(e,n,o){var a=ea(o=o||lo(n),ee(e));return a.fill(n),N.makeTensor(a,e,o,this)},t.prototype.onesLike=function(e){if(e.dtype==="string")throw new Error("onesLike is not supported for string tensors");return this.fill(e.shape,1,e.dtype)},t.prototype.zerosLike=function(e){var n=ea(e.dtype,ee(e.shape));return this.makeOutput(n,e.shape,e.dtype)},t.prototype.linspace=function(e,n,o){return Kl(e,n,o)},t.prototype.scatter=function(e,n,o,a,i,s,u,c,l,f){var h=[a/i,i],d=this.readSync(e.dataId),p=this.readSync(n.dataId);if(a===0)return Ze([],o,n.dtype);var m=new to(h,n.dtype);m.values.fill(this.readSync(l.dataId)[0]);for(var v=0;v<s;v++){for(var g=[],x=0,w=0;w<u;w++){var y=d[v*u+w];g.push(y),x+=y*c[w]}if(x<0||x>=a/i)throw new Error("Invalid indices: "+g+" does not index into "+o);for(var b=0;b<i;b++)f?m.values[x*i+b]+=p[v*i+b]:m.values[x*i+b]=n.rank===0?p[0]:p[v*i+b]}return m.toTensor().reshape(o)},t}(Hl);N.registerBackend("cpu",function(){return new dx},1);for(var gi=0,gc=[{kernelName:"NonMaxSuppressionV5",backendName:"cpu",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=r.attrs,o=t,a=o.boxes,i=o.scores,s=n,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,f=s.softNmsSigma,h=e;G(a,"NonMaxSuppressionWithScore");var d=Ds(h.data.get(a.dataId).values,h.data.get(i.dataId).values,u,c,l,f);return[d.selectedIndices,d.selectedScores]}},{kernelName:"Square",backendName:"cpu",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t.x,o=e;G(n,"square");for(var a=o.data.get(n.dataId).values,i=new Float32Array(a.length),s=0;s<a.length;++s){var u=a[s];i[s]=u*u}return{dataId:o.write(i,n.shape,n.dtype),shape:n.shape,dtype:n.dtype}}},{kernelName:oo,backendName:"cpu",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t,o=n.a,a=n.b,i=e;G([o,a],oo);var s=i.data.get(o.dataId).values,u=i.data.get(a.dataId).values,c=function(h,d,p,m,v,g){var x=xe(h,d),w=x.length,y=Zt(x),b=eo(v,ee(x)),_=h.length,E=d.length,I=Zt(h),R=Zt(d),k=An(h,x),T=An(d,x);if(k.length+T.length===0)for(var A=0;A<b.length;++A)b[A]=g(p[A%p.length],m[A%m.length]);else{var B=function(M){var O=Cp(M,w,y),U=O.slice(-_);k.forEach(function(H){return U[H]=0});var z=zu(U,_,I),W=O.slice(-E);T.forEach(function(H){return W[H]=0});var V=zu(W,E,R);b[M]=g(p[z],m[V])};for(A=0;A<b.length;++A)B(A)}return[b,x]}(o.shape,a.shape,s,u,o.dtype,function(h,d){var p=h-d;return p*p}),l=c[0],f=c[1];return{dataId:i.write(l,f,o.dtype),shape:f,dtype:o.dtype}}}];gi<gc.length;gi++)yl(gc[gi]);var pr,px=function(r){this.variableNames=["A"];var t=nt(),e=r[0],n=r[1];this.outputShape=r,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+n+".0, "+e+`.0);

        vec4 values = `+t.texture2D+`(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `},vx=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var t=nt(),e=r[0],n=r[1];this.outputShape=r,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(`+n+".0, "+e+`.0);
            vec4 values = `+t.texture2D+`(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        `+t.output+` = result;
      }
    `};for(var yi=0,yc=[{kernelName:"FromPixels",backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=r.attrs,o=t.pixels,a=n.numChannels,i=typeof HTMLVideoElement<"u"&&o instanceof HTMLVideoElement,s=typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement,u=i?[o.videoWidth,o.videoHeight]:[o.width,o.height],c=u[0],l=u[1],f=[l,c],h=[l,c,a];(s||i)&&(pr==null&&(pr=document.createElement("canvas").getContext("2d")),pr.canvas.width=c,pr.canvas.height=l,pr.drawImage(o,0,0,c,l),o=pr.canvas);var d=e.makeTensorInfo(f,"int32");e.texData.get(d.dataId).usage=_t.PIXELS,e.gpgpu.uploadPixelDataToTexture(e.getTexture(d.dataId),o);var p=L().getBool("WEBGL_PACK")?new vx(h):new px(h),m=e.runWebGLProgram(p,[d],"int32");return e.disposeData(d.dataId),m}},{kernelName:"NonMaxSuppressionV5",backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=r.attrs;oa("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");var o=t,a=o.boxes,i=o.scores,s=n,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,f=s.softNmsSigma,h=e,d=Ds(h.readSync(a.dataId),h.readSync(i.dataId),u,c,l,f);return[d.selectedIndices,d.selectedScores]}},{kernelName:"Square",backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t.x,o=e,a=new ve(n.shape,"return x * x;");return o.runWebGLProgram(a,[n],n.dtype)}},{kernelName:oo,backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t,o=n.a,a=n.b,i=e,s=L().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new dn("return (a - b) * (a - b);",o.shape,a.shape):new Be("return (a - b) * (a - b);",o.shape,a.shape);return i.compileAndRun(s,[o,a])}}];yi<yc.length;yi++)yl(yc[yi]);for(var xi=0,xc=[{kernelName:"Square",gradFunc:function(r,t){var e=t[0];return{x:function(){return r.mul(e.toFloat().mul(2))}}}},{kernelName:oo,gradFunc:function(r,t){var e=t[0],n=t[1],o=q(2);return{a:function(){return ot(r,ot(o,je(e,n)))},b:function(){return ot(r,ot(o,je(n,e)))}}}}];xi<xc.length;xi++)hp(xc[xi]);var mx=function(){function r(){}return r.prototype.fetch=function(t,e){return fetch(t,e)},r.prototype.now=function(){return performance.now()},r.prototype.encode=function(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error("Browser's encoder only supports utf-8, but got "+e);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)},r.prototype.decode=function(t,e){return new TextDecoder(e).decode(t)},r}();L().get("IS_BROWSER")&&L().setPlatform("browser",new mx);var bi,gx=function(){return require("node-fetch")},yx=function(){function r(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}return r.prototype.fetch=function(t,e){return L().global.fetch!=null?L().global.fetch(t,e):(bi==null&&(bi=gx()),bi(t,e))},r.prototype.now=function(){var t=process.hrtime();return 1e3*t[0]+t[1]/1e6},r.prototype.encode=function(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error("Node built-in encoder only supports utf-8, but got "+e);return this.textEncoder.encode(t)},r.prototype.decode=function(t,e){return t.length===0?"":new this.util.TextDecoder(e).decode(t)},r}();L().get("IS_NODE")&&L().setPlatform("node",new yx);var Ki={float32:4,int32:4,uint16:2,uint8:1,bool:1},ga=4;function Vf(r,t){for(var e={},n=0,o=function(s){var u=s.name,c=s.dtype,l=s.shape,f=ee(l),h=void 0;if("quantization"in s){var d=s.quantization;if(d.dtype!=="uint8"&&d.dtype!=="uint16")throw new Error("Weight "+s.name+" has unknown quantization dtype "+d.dtype+". Supported quantization dtypes are: 'uint8' and 'uint16'.");var p=Ki[d.dtype],m=r.slice(n,n+f*p),v=d.dtype==="uint8"?new Uint8Array(m):new Uint16Array(m);if(c==="float32")h=Float32Array.from(v,function(_){return _*d.scale+d.min});else{if(c!=="int32")throw new Error("Unsupported dtype in weight '"+u+"': "+c);h=Int32Array.from(v,function(_){return Math.round(_*d.scale+d.min)})}n+=f*p}else if(c==="string"){var g=ee(s.shape);h=[];for(var x=0;x<g;x++){var w=new Uint32Array(r.slice(n,n+ga))[0];n+=ga;var y=new Uint8Array(r.slice(n,n+w));h.push(y),n+=w}}else{var b=Ki[c];if(m=r.slice(n,n+f*b),c==="float32")h=new Float32Array(m);else if(c==="int32")h=new Int32Array(m);else{if(c!=="bool")throw new Error("Unsupported dtype in weight '"+u+"': "+c);h=new Uint8Array(m)}n+=f*b}e[u]=Ze(h,l,c)},a=0,i=t;a<i.length;a++)o(i[a]);return e}function xx(r){if(r===null)throw new Error("Invalid input value: "+JSON.stringify(r));var t=0,e=[];r.forEach(function(a){if(t+=a.byteLength,e.push(a.byteLength===a.buffer.byteLength?a:new a.constructor(a)),!(a instanceof Float32Array||a instanceof Int32Array||a instanceof Uint8Array))throw new Error("Unsupported TypedArray subtype: "+a.constructor.name)});var n=new Uint8Array(t),o=0;return e.forEach(function(a){n.set(new Uint8Array(a.buffer),o),o+=a.byteLength}),n.buffer}var Xi=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function bc(r){return Xi?Buffer.byteLength(r):new Blob([r]).size}function Xs(r){var t=0;r.forEach(function(o){t+=o.byteLength});var e=new Uint8Array(t),n=0;return r.forEach(function(o){e.set(new Uint8Array(o),n),n+=o.byteLength}),e.buffer}function wc(r){for(r=r.trim();r.endsWith("/");)r=r.slice(0,r.length-1);var t=r.split("/");return t[t.length-1]}function yo(r){if(r.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:r.modelTopology==null?0:bc(JSON.stringify(r.modelTopology)),weightSpecsBytes:r.weightSpecs==null?0:bc(JSON.stringify(r.weightSpecs)),weightDataBytes:r.weightData==null?0:r.weightData.byteLength}}var Ct=function(){function r(){this.saveRouters=[],this.loadRouters=[]}return r.getInstance=function(){return r.instance==null&&(r.instance=new r),r.instance},r.registerSaveRouter=function(t){r.getInstance().saveRouters.push(t)},r.registerLoadRouter=function(t){r.getInstance().loadRouters.push(t)},r.getSaveHandlers=function(t){return r.getHandlers(t,"save")},r.getLoadHandlers=function(t,e){return r.getHandlers(t,"load",e)},r.getHandlers=function(t,e,n){var o=[];return(e==="load"?r.getInstance().loadRouters:r.getInstance().saveRouters).forEach(function(a){var i=a(t,n);i!==null&&o.push(i)}),o},r}(),Ir="://",Pn=function(){function r(){this.managers={}}return r.getInstance=function(){return r.instance==null&&(r.instance=new r),r.instance},r.registerManager=function(t,e){S(t!=null,function(){return"scheme must not be undefined or null."}),t.endsWith(Ir)&&(t=t.slice(0,t.indexOf(Ir))),S(t.length>0,function(){return"scheme must not be an empty string."});var n=r.getInstance();S(n.managers[t]==null,function(){return"A model store manager is already registered for scheme '"+t+"'."}),n.managers[t]=e},r.getManager=function(t){var e=this.getInstance().managers[t];if(e==null)throw new Error("Cannot find model manager for scheme '"+t+"'");return e},r.getSchemes=function(){return Object.keys(this.getInstance().managers)},r}();function zo(r){if(r.indexOf(Ir)===-1)throw new Error("The url string provided does not contain a scheme. Supported schemes are: "+Pn.getSchemes().join(","));return{scheme:r.split(Ir)[0],path:r.split(Ir)[1]}}function _c(r,t,e){return e===void 0&&(e=!1),Y(this,void 0,void 0,function(){var n,o,a,i,s,u,c,l,f;return J(this,function(h){switch(h.label){case 0:return S(r!==t,function(){return"Old path and new path are the same: '"+r+"'"}),S((n=Ct.getLoadHandlers(r)).length>0,function(){return"Copying failed because no load handler is found for source URL "+r+"."}),S(n.length<2,function(){return"Copying failed because more than one ("+n.length+") load handlers for source URL "+r+"."}),o=n[0],S((a=Ct.getSaveHandlers(t)).length>0,function(){return"Copying failed because no save handler is found for destination URL "+t+"."}),S(a.length<2,function(){return"Copying failed because more than one ("+n.length+") save handlers for destination URL "+t+"."}),i=a[0],s=zo(r).scheme,u=zo(r).path,c=s===zo(r).scheme,[4,o.load()];case 1:return l=h.sent(),e&&c?[4,Pn.getManager(s).removeModel(u)]:[3,3];case 2:h.sent(),h.label=3;case 3:return[4,i.save(l)];case 4:return f=h.sent(),!e||c?[3,6]:[4,Pn.getManager(s).removeModel(u)];case 5:h.sent(),h.label=6;case 6:return[2,f.modelArtifactsInfo]}})})}var $n="models_store",Tn="model_info_store";function Gf(){if(!L().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");var r=window||self,t=r.indexedDB||r.mozIndexedDB||r.webkitIndexedDB||r.msIndexedDB||r.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function $i(r){var t=r.result;t.createObjectStore($n,{keyPath:"modelPath"}),t.createObjectStore(Tn,{keyPath:"modelPath"})}var Rr=function(){function r(t){if(this.indexedDB=Gf(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}return r.prototype.save=function(t){return Y(this,void 0,void 0,function(){return J(this,function(e){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return[2,this.databaseAction(this.modelPath,t)]})})},r.prototype.load=function(){return Y(this,void 0,void 0,function(){return J(this,function(t){return[2,this.databaseAction(this.modelPath)]})})},r.prototype.databaseAction=function(t,e){var n=this;return new Promise(function(o,a){var i=n.indexedDB.open("tensorflowjs",1);i.onupgradeneeded=function(){return $i(i)},i.onsuccess=function(){var s=i.result;if(e==null){var u=s.transaction($n,"readonly"),c=u.objectStore($n).get(n.modelPath);c.onsuccess=function(){if(c.result==null)return s.close(),a(new Error("Cannot find model with path '"+n.modelPath+"' in IndexedDB."));o(c.result.modelArtifacts)},c.onerror=function(m){return s.close(),a(c.error)},u.oncomplete=function(){return s.close()}}else{var l,f=yo(e),h=s.transaction(Tn,"readwrite"),d=h.objectStore(Tn),p=d.put({modelPath:n.modelPath,modelArtifactsInfo:f});p.onsuccess=function(){var m=(l=s.transaction($n,"readwrite")).objectStore($n).put({modelPath:n.modelPath,modelArtifacts:e,modelArtifactsInfo:f});m.onsuccess=function(){return o({modelArtifactsInfo:f})},m.onerror=function(v){var g=(d=h.objectStore(Tn)).delete(n.modelPath);g.onsuccess=function(){return s.close(),a(m.error)},g.onerror=function(x){return s.close(),a(m.error)}}},p.onerror=function(m){return s.close(),a(p.error)},h.oncomplete=function(){l==null?s.close():l.oncomplete=function(){return s.close()}}}},i.onerror=function(s){return a(i.error)}})},r.URL_SCHEME="indexeddb://",r}(),Cc=function(r){return L().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(Rr.URL_SCHEME)?(t=r.slice(Rr.URL_SCHEME.length),new Rr(t)):null;var t};Ct.registerSaveRouter(Cc),Ct.registerLoadRouter(Cc);var bx=function(){function r(){this.indexedDB=Gf()}return r.prototype.listModels=function(){return Y(this,void 0,void 0,function(){var t=this;return J(this,function(e){return[2,new Promise(function(n,o){var a=t.indexedDB.open("tensorflowjs",1);a.onupgradeneeded=function(){return $i(a)},a.onsuccess=function(){var i=a.result,s=i.transaction(Tn,"readonly"),u=s.objectStore(Tn).getAll();u.onsuccess=function(){for(var c={},l=0,f=u.result;l<f.length;l++){var h=f[l];c[h.modelPath]=h.modelArtifactsInfo}n(c)},u.onerror=function(c){return i.close(),o(u.error)},s.oncomplete=function(){return i.close()}},a.onerror=function(i){return o(a.error)}})]})})},r.prototype.removeModel=function(t){return Y(this,void 0,void 0,function(){var e=this;return J(this,function(n){var o;return t=(o=t).startsWith(Rr.URL_SCHEME)?o.slice(Rr.URL_SCHEME.length):o,[2,new Promise(function(a,i){var s=e.indexedDB.open("tensorflowjs",1);s.onupgradeneeded=function(){return $i(s)},s.onsuccess=function(){var u,c=s.result,l=c.transaction(Tn,"readwrite"),f=l.objectStore(Tn),h=f.get(t);h.onsuccess=function(){if(h.result==null)return c.close(),i(new Error("Cannot find model with path '"+t+"' in IndexedDB."));var d=f.delete(t),p=function(){var m=(u=c.transaction($n,"readwrite")).objectStore($n).delete(t);m.onsuccess=function(){return a(h.result.modelArtifactsInfo)},m.onerror=function(v){return i(h.error)}};d.onsuccess=p,d.onerror=function(m){return p(),c.close(),i(h.error)}},h.onerror=function(d){return c.close(),i(h.error)},l.oncomplete=function(){u==null?c.close():u.oncomplete=function(){return c.close()}}},s.onerror=function(u){return i(s.error)}})]})})},r}();if(L().getBool("IS_BROWSER"))try{Pn.registerManager(Rr.URL_SCHEME,new bx)}catch{}var pn="/",br="tensorflowjs_models",Hf="info",wx="model_topology",_x="weight_specs",Cx="weight_data",Ex="model_metadata";function jf(r){return{info:[br,r,Hf].join(pn),topology:[br,r,wx].join(pn),weightSpecs:[br,r,_x].join(pn),weightData:[br,r,Cx].join(pn),modelMetadata:[br,r,Ex].join(pn)}}function Ix(r){var t=r.split(pn);if(t.length<3)throw new Error("Invalid key format: "+r);return t.slice(1,t.length-1).join(pn)}var kr=function(){function r(t){if(!L().getBool("IS_BROWSER")||typeof window>"u"||window.localStorage===void 0)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=jf(this.modelPath)}return r.prototype.save=function(t){return Y(this,void 0,void 0,function(){var e,n,o;return J(this,function(a){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");e=JSON.stringify(t.modelTopology),n=JSON.stringify(t.weightSpecs),o=yo(t);try{return this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,function(i){if(Xi)return Buffer.from(i).toString("base64");for(var s=new Uint8Array(i),u="",c=0,l=s.length;c<l;c++)u+=String.fromCharCode(s[c]);return btoa(u)}(t.weightData)),this.LS.setItem(this.keys.modelMetadata,JSON.stringify({format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata})),[2,{modelArtifactsInfo:o}]}catch{throw this.LS.removeItem(this.keys.info),this.LS.removeItem(this.keys.topology),this.LS.removeItem(this.keys.weightSpecs),this.LS.removeItem(this.keys.weightData),this.LS.removeItem(this.keys.modelMetadata),new Error("Failed to save model '"+this.modelPath+"' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes="+o.modelTopologyBytes+", weightSpecsBytes="+o.weightSpecsBytes+", weightDataBytes="+o.weightDataBytes+".")}return[2]})})},r.prototype.load=function(){return Y(this,void 0,void 0,function(){var t,e,n,o,a,i,s;return J(this,function(u){if((t=JSON.parse(this.LS.getItem(this.keys.info)))==null)throw new Error("In local storage, there is no model with name '"+this.modelPath+"'");if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");if(e={},(n=JSON.parse(this.LS.getItem(this.keys.topology)))==null)throw new Error("In local storage, the topology of model '"+this.modelPath+"' is missing.");if(e.modelTopology=n,(o=JSON.parse(this.LS.getItem(this.keys.weightSpecs)))==null)throw new Error("In local storage, the weight specs of model '"+this.modelPath+"' are missing.");if(e.weightSpecs=o,(a=this.LS.getItem(this.keys.modelMetadata))!=null&&(i=JSON.parse(a),e.format=i.format,e.generatedBy=i.generatedBy,e.convertedBy=i.convertedBy,e.userDefinedMetadata=i.userDefinedMetadata),(s=this.LS.getItem(this.keys.weightData))==null)throw new Error("In local storage, the binary weight values of model '"+this.modelPath+"' are missing.");return e.weightData=function(c){if(Xi){var l=Buffer.from(c,"base64");return l.buffer.slice(l.byteOffset,l.byteOffset+l.byteLength)}for(var f=atob(c),h=new Uint8Array(f.length),d=0;d<f.length;++d)h.set([f.charCodeAt(d)],d);return h.buffer}(s),[2,e]})})},r.URL_SCHEME="localstorage://",r}(),Ec=function(r){return L().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(kr.URL_SCHEME)?(t=r.slice(kr.URL_SCHEME.length),new kr(t)):null;var t};Ct.registerSaveRouter(Ec),Ct.registerLoadRouter(Ec);var Rx=function(){function r(){S(L().getBool("IS_BROWSER"),function(){return"Current environment is not a web browser"}),S(typeof window>"u"||window.localStorage!==void 0,function(){return"Current browser does not appear to support localStorage"}),this.LS=window.localStorage}return r.prototype.listModels=function(){return Y(this,void 0,void 0,function(){var t,e,n,o,a,i;return J(this,function(s){for(t={},e=br+pn,n=pn+Hf,o=0;o<this.LS.length;++o)(a=this.LS.key(o)).startsWith(e)&&a.endsWith(n)&&(i=Ix(a),t[i]=JSON.parse(this.LS.getItem(a)));return[2,t]})})},r.prototype.removeModel=function(t){return Y(this,void 0,void 0,function(){var e,n;return J(this,function(o){var a;if(t=(a=t).startsWith(kr.URL_SCHEME)?a.slice(kr.URL_SCHEME.length):a,e=jf(t),this.LS.getItem(e.info)==null)throw new Error("Cannot find model at path '"+t+"'");return n=JSON.parse(this.LS.getItem(e.info)),this.LS.removeItem(e.info),this.LS.removeItem(e.topology),this.LS.removeItem(e.weightSpecs),this.LS.removeItem(e.weightData),[2,n]})})},r}();if(L().getBool("IS_BROWSER"))try{Pn.registerManager(kr.URL_SCHEME,new Rx)}catch{}var kx="model",Sx=".json",Dx=".weights.bin";function Ic(r){return new Promise(function(t){return setTimeout(t)}).then(r)}var wi=function(){function r(t){if(!L().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(r.URL_SCHEME)&&(t=t.slice(r.URL_SCHEME.length)),t!=null&&t.length!==0||(t=kx),this.modelTopologyFileName=t+Sx,this.weightDataFileName=t+Dx}return r.prototype.save=function(t){return Y(this,void 0,void 0,function(){var e,n,o,a,i,s;return J(this,function(u){switch(u.label){case 0:if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");if(e=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"})),!(t.modelTopology instanceof ArrayBuffer))return[3,1];throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");case 1:return n=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,weightsManifest:n},a=window.URL.createObjectURL(new Blob([JSON.stringify(o)],{type:"application/json"})),(i=this.jsonAnchor==null?document.createElement("a"):this.jsonAnchor).download=this.modelTopologyFileName,i.href=a,[4,Ic(function(){return i.dispatchEvent(new MouseEvent("click"))})];case 2:return u.sent(),t.weightData==null?[3,4]:((s=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor).download=this.weightDataFileName,s.href=e,[4,Ic(function(){return s.dispatchEvent(new MouseEvent("click"))})]);case 3:u.sent(),u.label=4;case 4:return[2,{modelArtifactsInfo:yo(t)}]}})})},r.URL_SCHEME="downloads://",r}(),Ax=function(){function r(t){if(t==null||t.length<1)throw new Error("When calling browserFiles, at least 1 file is required, but received "+t);this.files=t}return r.prototype.load=function(){return Y(this,void 0,void 0,function(){var t,e,n=this;return J(this,function(o){return t=this.files[0],e=this.files.slice(1),[2,new Promise(function(a,i){var s=new FileReader;s.onload=function(u){var c=JSON.parse(u.target.result),l=c.modelTopology;if(l!=null){e.length===0&&a({modelTopology:l});var f=c.weightsManifest;if(f!=null){var h;try{h=n.checkManifestAndWeightFiles(f,e)}catch(v){return void i(v)}var d=[],p=[],m=[];f.forEach(function(v){v.paths.forEach(function(g){p.push(g),m.push(null)}),d.push.apply(d,v.weights)}),f.forEach(function(v){v.paths.forEach(function(g){var x=new FileReader;x.onload=function(w){var y=w.target.result,b=p.indexOf(g);m[b]=y,m.indexOf(null)===-1&&a({modelTopology:l,weightSpecs:d,weightData:Xs(m),format:c.format,generatedBy:c.generatedBy,convertedBy:c.convertedBy,userDefinedMetadata:c.userDefinedMetadata})},x.onerror=function(w){return i("Failed to weights data from file of path '"+g+"'.")},x.readAsArrayBuffer(h[g])})})}else i(new Error("weightManifest field is missing from file "+t.name))}else i(new Error("modelTopology field is missing from file "+t.name))},s.onerror=function(u){return i("Failed to read model topology and weights manifest JSON from file '"+t.name+"'. BrowserFiles supports loading Keras-style tf.Model artifacts only.")},s.readAsText(t)})]})})},r.prototype.checkManifestAndWeightFiles=function(t,e){for(var n=[],o=e.map(function(u){return wc(u.name)}),a={},i=0,s=t;i<s.length;i++)s[i].paths.forEach(function(u){var c=wc(u);if(n.indexOf(c)!==-1)throw new Error("Duplicate file basename found in weights manifest: '"+c+"'");if(n.push(c),o.indexOf(c)===-1)throw new Error("Weight file with basename '"+c+"' is not provided.");a[u]=e[o.indexOf(c)]});if(n.length!==e.length)throw new Error("Mismatch in the number of files in weights manifest ("+n.length+") and the number of weight files provided ("+e.length+").");return a},r}();function Rc(r,t,e,n){(function(a){S(a!=null&&Array.isArray(a)&&a.length>0,function(){return"promises must be a none empty array"})})(r),function(a,i){S(a>=0&&a<=1,function(){return"Progress fraction must be in range [0, 1], but got startFraction "+a}),S(i>=0&&i<=1,function(){return"Progress fraction must be in range [0, 1], but got endFraction "+i}),S(i>=a,function(){return"startFraction must be no more than endFraction, but got startFraction "+a+" and endFraction "+i})}(e=e??0,n=n??1);var o=0;return Promise.all(r.map(function(a){return a.then(function(i){var s=e+ ++o/r.length*(n-e);return t(s),i}),a}))}function qf(r,t){return Y(this,void 0,void 0,function(){var e,n,o,a,i,s,u,c,l;return J(this,function(f){switch(f.label){case 0:return t==null&&(t={}),e=t.fetchFunc==null?L().platform.fetch:t.fetchFunc,n=r.map(function(h){return e(h,t.requestInit,{isBinary:!0})}),o=0,a=.5,t.onProgress!=null?[3,2]:[4,Promise.all(n)];case 1:return i=f.sent(),[3,4];case 2:return[4,Rc(n,t.onProgress,o,a)];case 3:i=f.sent(),f.label=4;case 4:return s=i.map(function(h){return h.arrayBuffer()}),u=.5,c=1,t.onProgress!=null?[3,6]:[4,Promise.all(s)];case 5:return l=f.sent(),[3,8];case 6:return[4,Rc(s,t.onProgress,u,c)];case 7:l=f.sent(),f.label=8;case 8:return[2,l]}})})}function kc(r){var t=this;return function(e,n,o){return n===void 0&&(n=""),Y(t,void 0,void 0,function(){var a,i,s,u,c,l,f,h,d,p;return J(this,function(m){switch(m.label){case 0:if(a=e.map(function(){return!1}),i={},s=o!=null?o.map(function(){return!1}):[],u=[],e.forEach(function(v,g){var x=0;v.weights.forEach(function(w){var y="quantization"in w?w.quantization.dtype:w.dtype,b=Ki[y]*ee(w.shape),_=function(){a[g]=!0,i[g]==null&&(i[g]=[]),i[g].push({manifestEntry:w,groupOffset:x,sizeBytes:b})};o!=null?o.forEach(function(E,I){E===w.name&&(_(),s[I]=!0)}):_(),u.push(w.name),x+=b})}),!s.every(function(v){return v}))throw c=o.filter(function(v,g){return!s[g]}),new Error("Could not find weights in manifest with names: "+c.join(", ")+`. 
Manifest JSON has weights with names: `+u.join(", ")+".");return l=a.reduce(function(v,g,x){return g&&v.push(x),v},[]),f=[],l.forEach(function(v){e[v].paths.forEach(function(g){var x=n+(n.endsWith("/")?"":"/")+g;f.push(x)})}),[4,r(f)];case 1:return h=m.sent(),d={},p=0,l.forEach(function(v){for(var g=e[v].paths.length,x=0,w=0;w<g;w++)x+=h[p+w].byteLength;for(var y=new ArrayBuffer(x),b=new Uint8Array(y),_=0,E=0;E<g;E++){var I=new Uint8Array(h[p+E]);b.set(I,_),_+=I.byteLength}i[v].forEach(function(R){var k=Vf(y.slice(R.groupOffset,R.groupOffset+R.sizeBytes),[R.manifestEntry]);for(var T in k)d[T]=k[T]}),p+=g}),[2,d]}})})}}Ct.registerSaveRouter(function(r){return L().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(wi.URL_SCHEME)?function(t){return t===void 0&&(t="model"),new wi(t)}(r.slice(wi.URL_SCHEME.length)):null});var Kf=function(){function r(t,e){if(this.DEFAULT_METHOD="POST",e==null&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.onProgress=e.onProgress,e.fetchFunc!=null?(S(typeof e.fetchFunc=="function",function(){return"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"}),this.fetch=e.fetchFunc):this.fetch=L().platform.fetch,S(t!=null&&t.length>0,function(){return"URL path for http must not be null, undefined or empty."}),Array.isArray(t)&&S(t.length===2,function(){return"URL paths for http must have a length of 2, (actual length is "+t.length+")."}),this.path=t,e.requestInit!=null&&e.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{}}return r.prototype.save=function(t){return Y(this,void 0,void 0,function(){var e,n,o,a;return J(this,function(i){switch(i.label){case 0:if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");return(e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit)).body=new FormData,n=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata,weightsManifest:n},e.body.append("model.json",new Blob([JSON.stringify(o)],{type:"application/json"}),"model.json"),t.weightData!=null&&e.body.append("model.weights.bin",new Blob([t.weightData],{type:"application/octet-stream"}),"model.weights.bin"),[4,this.fetch(this.path,e)];case 1:if((a=i.sent()).ok)return[2,{modelArtifactsInfo:yo(t),responses:[a]}];throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status "+a.status+".")}})})},r.prototype.load=function(){return Y(this,void 0,void 0,function(){var t,e,n,o,a,i,s,u,c,l,f,h;return J(this,function(d){switch(d.label){case 0:return[4,this.fetch(this.path,this.requestInit)];case 1:if(!(t=d.sent()).ok)throw new Error("Request to "+this.path+" failed with status code "+t.status+". Please verify this URL points to the model JSON of the model to load.");d.label=2;case 2:return d.trys.push([2,4,,5]),[4,t.json()];case 3:return e=d.sent(),[3,5];case 4:throw d.sent(),n="Failed to parse model JSON of response from "+this.path+".",this.path.endsWith(".pb")?n+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":n+=" Please make sure the server is serving valid JSON for this request.",new Error(n);case 5:if(o=e.modelTopology,a=e.weightsManifest,i=e.generatedBy,s=e.convertedBy,u=e.format,c=e.userDefinedMetadata,o==null&&a==null)throw new Error("The JSON from HTTP path "+this.path+" contains neither model topology or manifest for weights.");return a==null?[3,7]:[4,this.loadWeights(a)];case 6:h=d.sent(),l=h[0],f=h[1],d.label=7;case 7:return[2,{modelTopology:o,weightSpecs:l,weightData:f,userDefinedMetadata:c,generatedBy:i,convertedBy:s,format:u}]}})})},r.prototype.loadWeights=function(t){return Y(this,void 0,void 0,function(){var e,n,o,a,i,s,u,c,l,f,h;return J(this,function(d){switch(d.label){case 0:for(e=Array.isArray(this.path)?this.path[1]:this.path,n=function(p){var m=p.lastIndexOf("/"),v=p.lastIndexOf("?"),g=p.substring(0,m),x=v>m?p.substring(v):"";return[g+"/",x]}(e),o=n[0],a=n[1],i=this.weightPathPrefix||o,s=[],u=0,c=t;u<c.length;u++)l=c[u],s.push.apply(s,l.weights);return f=[],t.forEach(function(p){p.paths.forEach(function(m){f.push(i+m+a)})}),[4,qf(f,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress})];case 1:return h=d.sent(),[2,[s,Xs(h)]]}})})},r.URL_SCHEME_REGEX=/^https?:\/\//,r}();function Yi(r){return r.match(Kf.URL_SCHEME_REGEX)!=null}var Sc=function(r,t){return typeof fetch>"u"?null:(Array.isArray(r)?r.every(function(e){return Yi(e)}):Yi(r))?Ji(r,{onProgress:t}):null};function Ji(r,t){return new Kf(r,t)}Ct.registerSaveRouter(Sc),Ct.registerLoadRouter(Sc);var _i=function(){function r(t){this.modelArtifacts=t}return r.prototype.load=function(){return Y(this,void 0,void 0,function(){return J(this,function(t){return[2,this.modelArtifacts]})})},r}(),Tx=function(){function r(t){this.saveHandler=t}return r.prototype.save=function(t){return Y(this,void 0,void 0,function(){return J(this,function(e){return[2,this.saveHandler(t)]})})},r}(),Xf=Object.freeze({browserFiles:function(r){return new Ax(r)},browserHTTPRequest:function(r,t){return Ji(r,t)},concatenateArrayBuffers:Xs,decodeWeights:Vf,encodeWeights:function(r,t){return Y(this,void 0,void 0,function(){var e,n,o,a,i,s=this;return J(this,function(u){switch(u.label){case 0:for(e=[],n=[],o=Array.isArray(r)?r.map(function(c){return c.name}):Object.keys(r),a=function(c){var l=o[c],f=Array.isArray(r)?r[c].tensor:r[l];if(f.dtype!=="float32"&&f.dtype!=="int32"&&f.dtype!=="bool"&&f.dtype!=="string")throw new Error("Unsupported dtype in weight '"+l+"': "+f.dtype);var h={name:l,shape:f.shape,dtype:f.dtype};if(f.dtype==="string"){var d=new Promise(function(p){return Y(s,void 0,void 0,function(){var m,v,g,x,w,y,b;return J(this,function(_){switch(_.label){case 0:return[4,f.bytes()];case 1:for(m=_.sent(),v=m.reduce(function(E,I){return E+I.length},0)+ga*m.length,g=new Uint8Array(v),x=0,w=0;w<m.length;w++)y=m[w],b=new Uint8Array(new Uint32Array([y.length]).buffer),g.set(b,x),x+=ga,g.set(y,x),x+=y.length;return p(g),[2]}})})});n.push(d)}else n.push(f.data());t!=null&&(h.group=t),e.push(h)},i=0;i<o.length;++i)a(i);return[4,Promise.all(n)];case 1:return[2,{data:xx(u.sent()),specs:e}]}})})},fromMemory:function(r,t,e,n){return arguments.length===1?r.modelTopology!=null||r.weightSpecs!=null?new _i(r):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new _i({modelTopology:r})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new _i({modelTopology:r,weightSpecs:t,weightData:e,trainingConfig:n}))},getLoadHandlers:function(r,t){return Ct.getLoadHandlers(r,t)},getModelArtifactsInfoForJSON:yo,getSaveHandlers:function(r){return Ct.getSaveHandlers(r)},http:Ji,isHTTPScheme:Yi,loadWeights:function(r,t,e,n){return t===void 0&&(t=""),Y(this,void 0,void 0,function(){return J(this,function(o){return[2,kc(function(a){return qf(a,{requestInit:n})})(r,t,e)]})})},registerLoadRouter:function(r){return Ct.registerLoadRouter(r)},registerSaveRouter:function(r){return Ct.registerSaveRouter(r)},weightsLoaderFactory:kc,withSaveHandler:function(r){return new Tx(r)},copyModel:function(r,t){return Y(this,void 0,void 0,function(){return J(this,function(e){return[2,_c(r,t,!1)]})})},listModels:function(){return Y(this,void 0,void 0,function(){var r,t,e,n,o,a,i;return J(this,function(s){switch(s.label){case 0:r=Pn.getSchemes(),t={},e=0,n=r,s.label=1;case 1:return e<n.length?(o=n[e],[4,Pn.getManager(o).listModels()]):[3,4];case 2:for(i in a=s.sent())t[o+Ir+i]=a[i];s.label=3;case 3:return e++,[3,1];case 4:return[2,t]}})})},moveModel:function(r,t){return Y(this,void 0,void 0,function(){return J(this,function(e){return[2,_c(r,t,!0)]})})},removeModel:function(r){return Y(this,void 0,void 0,function(){var t;return J(this,function(e){return t=zo(r),[2,Pn.getManager(t.scheme).removeModel(t.path)]})})}}),vr;D({confusionMatrix_:function(r,t,e){var n=C(r,"labels","confusionMatrix"),o=C(t,"predictions","confusionMatrix");S(e==null||e>0&&Number.isInteger(e),function(){return"If provided, numClasses must be a positive integer, but got "+e}),S(n.rank===1,function(){return"Expected the rank of labels to be 1, but got "+n.rank}),S(o.rank===1,function(){return"Expected the rank of predictions to be 1, but got "+o.rank}),S(n.shape[0]===o.shape[0],function(){return"Mismatch in the number of examples: "+n.shape[0]+" vs. "+o.shape[0]+". Labels and predictions should have the same number of elements."}),S(e>0&&Number.isInteger(e),function(){return"numClasses is required to be a positive integer, but got "+e});var a=Vi(n.asType("int32"),e),i=Vi(o.asType("int32"),e);return a.transpose().matMul(i).asType("int32")}});var Nx=D({fromPixels_:function(r,t){if(t===void 0&&(t=3),t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(r==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");var e=!1,n=!1,o=!1,a=!1,i=!1;if(r.data instanceof Uint8Array)e=!0;else if(typeof ImageData<"u"&&r instanceof ImageData)n=!0;else if(typeof HTMLVideoElement<"u"&&r instanceof HTMLVideoElement)o=!0;else if(typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement)a=!0;else{if(r.getContext==null)throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was "+r.constructor.name);i=!0}if(o&&o&&r.readyState<2)throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.");if(gl("FromPixels",N.backendName)!=null)return N.runKernel("FromPixels",{pixels:r},{numChannels:t});var s,u,c=o?[r.videoWidth,r.videoHeight]:[r.width,r.height],l=c[0],f=c[1];if(i?s=r.getContext("2d").getImageData(0,0,l,f).data:n||e?s=r.data:(a||o)&&(vr==null&&(vr=document.createElement("canvas").getContext("2d")),vr.canvas.width=l,vr.canvas.height=f,vr.drawImage(r,0,0,l,f),s=vr.getImageData(0,0,l,f).data),t===4)u=new Int32Array(s);else{var h=l*f;u=new Int32Array(h*t);for(var d=0;d<h;d++)for(var p=0;p<t;++p)u[d*t+p]=s[4*d+p]}return Cs(u,[f,l,t],"int32")}}),$s=Object.freeze({toPixels:function(r,t){return Y(this,void 0,void 0,function(){var e,n,o,a,i,s,u,c,l,f,h,d,p,m,v,g,x,w,y,b,_,E,I;return J(this,function(R){switch(R.label){case 0:if(e=C(r,"img","toPixels"),r instanceof Pe||(e=e.toInt()),e.rank!==2&&e.rank!==3)throw new Error("toPixels only supports rank 2 or 3 tensors, got rank "+e.rank+".");if(n=e.shape.slice(0,2),o=n[0],a=n[1],(i=e.rank===2?1:e.shape[2])>4||i===2)throw new Error("toPixels only supports depth of size 1, 3 or 4 but got "+i);return[4,e.data()];case 1:return s=R.sent(),u=e.min(),c=e.max(),[4,Promise.all([u.data(),c.data()])];case 2:if(l=R.sent(),f=l[0],h=l[1],d=f[0],p=h[0],u.dispose(),c.dispose(),e.dtype==="float32"){if(d<0||p>1)throw new Error("Tensor values for a float32 Tensor must be in the range [0 - 1] but got range ["+d+" - "+p+"].")}else{if(e.dtype!=="int32")throw new Error("Unsupported type for toPixels: "+e.dtype+". Please use float32 or int32 tensors.");if(d<0||p>255)throw new Error("Tensor values for a int32 Tensor must be in the range [0 - 255] but got range ["+d+" - "+p+"].")}for(m=e.dtype==="float32"?255:1,v=new Uint8ClampedArray(a*o*4),g=0;g<o*a;++g)x=void 0,w=void 0,y=void 0,b=void 0,i===1?(x=s[g]*m,w=s[g]*m,y=s[g]*m,b=255):i===3?(x=s[3*g]*m,w=s[3*g+1]*m,y=s[3*g+2]*m,b=255):i===4&&(x=s[4*g]*m,w=s[4*g+1]*m,y=s[4*g+2]*m,b=s[4*g+3]*m),v[(_=4*g)+0]=Math.round(x),v[_+1]=Math.round(w),v[_+2]=Math.round(y),v[_+3]=Math.round(b);return t!=null&&(t.width=a,t.height=o,E=t.getContext("2d"),I=new ImageData(v,a,o),E.putImageData(I,0,0)),e!==r&&e.dispose(),[2,v]}})})},fromPixels:Nx}),Fx=function(){function r(){}return r.prototype.getClassName=function(){return this.constructor.className},r.fromConfig=function(t,e){return new t(e)},r}(),Px=function(){function r(){this.classNameMap={}}return r.getMap=function(){return r.instance==null&&(r.instance=new r),r.instance},r.register=function(t){r.getMap().classNameMap[t.className]=[t,t.fromConfig]},r}();function sr(r){S(r.className!=null,function(){return"Class being registered does not have the static className property defined."}),S(typeof r.className=="string",function(){return"className is required to be a string, but got type "+typeof r.className}),S(r.className.length>0,function(){return"Class being registered has an empty-string as its className, which is disallowed."}),Px.register(r)}var ur=function(r){function t(){return r!==null&&r.apply(this,arguments)||this}return Ut(t,r),t.prototype.minimize=function(e,n,o){n===void 0&&(n=!1);var a=this.computeGradients(e,o),i=a.value,s=a.grads;if(o!=null){var u=o.map(function(c){return{name:c.name,tensor:s[c.name]}});this.applyGradients(u)}else this.applyGradients(s);return dt(s),n?i:(i.dispose(),null)},Object.defineProperty(t.prototype,"iterations",{get:function(){return this.iterations_==null&&(this.iterations_=0),this.iterations_},enumerable:!0,configurable:!0}),t.prototype.incrementIterations=function(){this.iterations_=this.iterations+1},t.prototype.computeGradients=function(e,n){return Hv(e,n)},t.prototype.dispose=function(){this.iterations_!=null&&dt(this.iterations_)},t.prototype.saveIterations=function(){return Y(this,void 0,void 0,function(){return J(this,function(e){return this.iterations_==null&&(this.iterations_=0),[2,{name:"iter",tensor:q(this.iterations_,"int32")}]})})},t.prototype.getWeights=function(){return Y(this,void 0,void 0,function(){return J(this,function(e){throw new Error("getWeights() is not implemented for this optimizer yet.")})})},t.prototype.setWeights=function(e){return Y(this,void 0,void 0,function(){return J(this,function(n){throw new Error("setWeights() is not implemented for this optimizer class "+this.getClassName())})})},t.prototype.extractIterations=function(e){return Y(this,void 0,void 0,function(){var n;return J(this,function(o){switch(o.label){case 0:return n=this,[4,e[0].tensor.data()];case 1:return n.iterations_=o.sent()[0],[2,e.slice(1)]}})})},t}(Fx);Object.defineProperty(ur,Symbol.hasInstance,{value:function(r){return r.minimize!=null&&r.computeGradients!=null&&r.applyGradients!=null}});var Mx=function(r){function t(e,n,o){o===void 0&&(o=null);var a=r.call(this)||this;return a.learningRate=e,a.rho=n,a.epsilon=o,a.accumulatedGrads=[],a.accumulatedUpdates=[],o==null&&(a.epsilon=N.backend.epsilon()),a}return Ut(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=N.registeredVariables[o];n.accumulatedGrads[a]==null&&(n.accumulatedGrads[a]={originalName:o+"/accum_grad",variable:$(function(){return we(i).variable(!1)})}),n.accumulatedUpdates[a]==null&&(n.accumulatedUpdates[a]={originalName:o+"/accum_var",variable:$(function(){return we(i).variable(!1)})});var s=Array.isArray(e)?e[a].tensor:e[o];if(s!=null){var u=n.accumulatedGrads[a].variable,c=n.accumulatedUpdates[a].variable;$(function(){var l=u.mul(n.rho).add(s.square().mul(1-n.rho)),f=c.add(n.epsilon).sqrt().div(u.add(n.epsilon).sqrt()).mul(s),h=c.mul(n.rho).add(f.square().mul(1-n.rho));u.assign(l),c.assign(h);var d=f.mul(-n.learningRate).add(i);i.assign(d)})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedUpdates!=null&&(dt(this.accumulatedGrads.map(function(e){return e.variable})),dt(this.accumulatedUpdates.map(function(e){return e.variable})))},t.prototype.getWeights=function(){return Y(this,void 0,void 0,function(){var e;return J(this,function(n){switch(n.label){case 0:return e=this.accumulatedGrads.concat(this.accumulatedUpdates),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(e){return Y(this,void 0,void 0,function(){var n;return J(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(e)];case 1:return e=o.sent(),n=e.length/2,this.accumulatedGrads=e.slice(0,n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.accumulatedUpdates=e.slice(n,2*n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}},t.fromConfig=function(e,n){return new e(n.learningRate,n.rho,n.epsilon)},t.className="Adadelta",t}(ur);sr(Mx);var Ox=function(r){function t(e,n){n===void 0&&(n=.1);var o=r.call(this)||this;return o.learningRate=e,o.initialAccumulatorValue=n,o.accumulatedGrads=[],o}return Ut(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=N.registeredVariables[o];n.accumulatedGrads[a]==null&&(n.accumulatedGrads[a]={originalName:o+"/accumulator",variable:$(function(){return en(i.shape,n.initialAccumulatorValue).variable(!1)})});var s=Array.isArray(e)?e[a].tensor:e[o];if(s!=null){var u=n.accumulatedGrads[a].variable;$(function(){var c=u.add(s.square());u.assign(c);var l=s.div(c.add(N.backend.epsilon()).sqrt()).mul(-n.learningRate).add(i);i.assign(l)})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedGrads!=null&&dt(this.accumulatedGrads.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return Y(this,void 0,void 0,function(){return J(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulatedGrads.map(function(n){return{name:n.originalName,tensor:n.variable}}))]}})})},t.prototype.setWeights=function(e){return Y(this,void 0,void 0,function(){return J(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(e)];case 1:return e=n.sent(),this.accumulatedGrads=e.map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}},t.fromConfig=function(e,n){return new e(n.learningRate,n.initialAccumulatorValue)},t.className="Adagrad",t}(ur);sr(Ox);var Bx=function(r){function t(e,n,o,a){a===void 0&&(a=null);var i=r.call(this)||this;return i.learningRate=e,i.beta1=n,i.beta2=o,i.epsilon=a,i.accumulatedFirstMoment=[],i.accumulatedSecondMoment=[],$(function(){i.accBeta1=q(n).variable(),i.accBeta2=q(o).variable()}),a==null&&(i.epsilon=N.backend.epsilon()),i}return Ut(t,r),t.prototype.applyGradients=function(e){var n=this,o=Array.isArray(e)?e.map(function(a){return a.name}):Object.keys(e);$(function(){var a=je(1,n.accBeta1),i=je(1,n.accBeta2);o.forEach(function(s,u){var c=N.registeredVariables[s];n.accumulatedFirstMoment[u]==null&&(n.accumulatedFirstMoment[u]={originalName:s+"/m",variable:$(function(){return we(c).variable(!1)})}),n.accumulatedSecondMoment[u]==null&&(n.accumulatedSecondMoment[u]={originalName:s+"/v",variable:$(function(){return we(c).variable(!1)})});var l=Array.isArray(e)?e[u].tensor:e[s];if(l!=null){var f=n.accumulatedFirstMoment[u].variable,h=n.accumulatedSecondMoment[u].variable,d=f.mul(n.beta1).add(l.mul(1-n.beta1)),p=h.mul(n.beta2).add(l.square().mul(1-n.beta2)),m=d.div(a),v=p.div(i);f.assign(d),h.assign(p);var g=m.div(v.sqrt().add(n.epsilon)).mul(-n.learningRate).add(c);c.assign(g)}}),n.accBeta1.assign(n.accBeta1.mul(n.beta1)),n.accBeta2.assign(n.accBeta2.mul(n.beta2))}),this.incrementIterations()},t.prototype.dispose=function(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&dt(this.accumulatedFirstMoment.map(function(e){return e.variable})),this.accumulatedSecondMoment!=null&&dt(this.accumulatedSecondMoment.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return Y(this,void 0,void 0,function(){var e;return J(this,function(n){switch(n.label){case 0:return e=this.accumulatedFirstMoment.concat(this.accumulatedSecondMoment),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(e){return Y(this,void 0,void 0,function(){var n,o=this;return J(this,function(a){switch(a.label){case 0:return[4,this.extractIterations(e)];case 1:return e=a.sent(),$(function(){o.accBeta1.assign(va(o.beta1,o.iterations_+1)),o.accBeta2.assign(va(o.beta2,o.iterations_+1))}),n=e.length/2,this.accumulatedFirstMoment=e.slice(0,n).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),this.accumulatedSecondMoment=e.slice(n,2*n).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}},t.fromConfig=function(e,n){return new e(n.learningRate,n.beta1,n.beta2,n.epsilon)},t.className="Adam",t}(ur);sr(Bx);var Lx=function(r){function t(e,n,o,a,i){a===void 0&&(a=null),i===void 0&&(i=0);var s=r.call(this)||this;return s.learningRate=e,s.beta1=n,s.beta2=o,s.epsilon=a,s.decay=i,s.accumulatedFirstMoment=[],s.accumulatedWeightedInfNorm=[],$(function(){s.iteration=q(0).variable(),s.accBeta1=q(n).variable()}),a==null&&(s.epsilon=N.backend.epsilon()),s}return Ut(t,r),t.prototype.applyGradients=function(e){var n=this,o=Array.isArray(e)?e.map(function(a){return a.name}):Object.keys(e);$(function(){var a=je(1,n.accBeta1),i=Ot(-n.learningRate,n.iteration.mul(n.decay).add(1));o.forEach(function(s,u){var c=N.registeredVariables[s];n.accumulatedFirstMoment[u]==null&&(n.accumulatedFirstMoment[u]={originalName:s+"/m",variable:we(c).variable(!1)}),n.accumulatedWeightedInfNorm[u]==null&&(n.accumulatedWeightedInfNorm[u]={originalName:s+"/v",variable:we(c).variable(!1)});var l=Array.isArray(e)?e[u].tensor:e[s];if(l!=null){var f=n.accumulatedFirstMoment[u].variable,h=n.accumulatedWeightedInfNorm[u].variable,d=f.mul(n.beta1).add(l.mul(1-n.beta1)),p=h.mul(n.beta2),m=l.abs(),v=p.maximum(m);f.assign(d),h.assign(v);var g=i.div(a).mul(d.div(v.add(n.epsilon))).add(c);c.assign(g)}}),n.iteration.assign(n.iteration.add(1)),n.accBeta1.assign(n.accBeta1.mul(n.beta1))}),this.incrementIterations()},t.prototype.dispose=function(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&dt(this.accumulatedFirstMoment.map(function(e){return e.variable})),this.accumulatedWeightedInfNorm!=null&&dt(this.accumulatedWeightedInfNorm.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return Y(this,void 0,void 0,function(){return J(this,function(e){throw new Error("getWeights() is not implemented for Adamax yet.")})})},t.prototype.setWeights=function(e){return Y(this,void 0,void 0,function(){return J(this,function(n){throw new Error("setWeights() is not implemented for Adamax yet.")})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}},t.fromConfig=function(e,n){return new e(n.learningRate,n.beta1,n.beta2,n.epsilon,n.decay)},t.className="Adamax",t}(ur);sr(Lx);var $f=function(r){function t(e){var n=r.call(this)||this;return n.learningRate=e,n.setLearningRate(e),n}return Ut(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=Array.isArray(e)?e[a].tensor:e[o];if(i!=null){var s=N.registeredVariables[o];$(function(){var u=n.c.mul(i).add(s);s.assign(u)})}}),this.incrementIterations()},t.prototype.setLearningRate=function(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=ov(q(-e))},t.prototype.dispose=function(){this.c.dispose()},t.prototype.getWeights=function(){return Y(this,void 0,void 0,function(){return J(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()]]}})})},t.prototype.setWeights=function(e){return Y(this,void 0,void 0,function(){return J(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(e)];case 1:if((e=n.sent()).length!==0)throw new Error("SGD optimizer does not have settable weights.");return[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate}},t.fromConfig=function(e,n){return new e(n.learningRate)},t.className="SGD",t}(ur);sr($f);var Wx=function(r){function t(e,n,o){o===void 0&&(o=!1);var a=r.call(this,e)||this;return a.learningRate=e,a.momentum=n,a.useNesterov=o,a.accumulations=[],a.m=q(a.momentum),a}return Ut(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=N.registeredVariables[o];n.accumulations[a]==null&&(n.accumulations[a]={originalName:o+"/momentum",variable:$(function(){return we(i).variable(!1)})});var s=n.accumulations[a].variable,u=Array.isArray(e)?e[a].tensor:e[o];u!=null&&$(function(){var c,l=n.m.mul(s).add(u);c=n.useNesterov?n.c.mul(u.add(l.mul(n.m))).add(i):n.c.mul(l).add(i),s.assign(l),i.assign(c)})}),this.incrementIterations()},t.prototype.dispose=function(){this.m.dispose(),this.accumulations!=null&&dt(this.accumulations.map(function(e){return e.variable}))},t.prototype.setMomentum=function(e){this.momentum=e},t.prototype.getWeights=function(){return Y(this,void 0,void 0,function(){return J(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulations.map(function(n){return{name:n.originalName,tensor:n.variable}}))]}})})},t.prototype.setWeights=function(e){return Y(this,void 0,void 0,function(){return J(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(e)];case 1:return e=n.sent(),this.accumulations=e.map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}},t.fromConfig=function(e,n){return new e(n.learningRate,n.momentum,n.useNesterov)},t.className="Momentum",t}($f);sr(Wx);var zx=function(r){function t(e,n,o,a,i){n===void 0&&(n=.9),o===void 0&&(o=0),a===void 0&&(a=null),i===void 0&&(i=!1);var s=r.call(this)||this;if(s.learningRate=e,s.decay=n,s.momentum=o,s.epsilon=a,s.accumulatedMeanSquares=[],s.accumulatedMoments=[],s.accumulatedMeanGrads=[],s.centered=i,a==null&&(s.epsilon=N.backend.epsilon()),e==null)throw new Error("learningRate for RMSPropOptimizer must be defined.");return s}return Ut(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=N.registeredVariables[o];n.accumulatedMeanSquares[a]==null&&(n.accumulatedMeanSquares[a]={originalName:o+"/rms",variable:$(function(){return we(i).variable(!1)})}),n.accumulatedMoments[a]==null&&(n.accumulatedMoments[a]={originalName:o+"/momentum",variable:$(function(){return we(i).variable(!1)})}),n.accumulatedMeanGrads[a]==null&&n.centered&&(n.accumulatedMeanGrads[a]={originalName:o+"/mg",variable:$(function(){return we(i).variable(!1)})});var s=Array.isArray(e)?e[a].tensor:e[o];if(s!=null){var u=n.accumulatedMeanSquares[a].variable,c=n.accumulatedMoments[a].variable;$(function(){var l=u.mul(n.decay).add(s.square().mul(1-n.decay));if(n.centered){var f=n.accumulatedMeanGrads[a].variable,h=f.mul(n.decay).add(s.mul(1-n.decay)),d=c.mul(n.momentum).add(s.mul(n.learningRate).div(l.sub(h.square().add(n.epsilon)).sqrt()));u.assign(l),f.assign(h),c.assign(d);var p=i.sub(d);i.assign(p)}else{var m=u.mul(n.decay).add(s.square().mul(1-n.decay));d=c.mul(n.momentum).add(s.mul(n.learningRate).div(m.add(n.epsilon).sqrt())),u.assign(m),c.assign(d),p=i.sub(d),i.assign(p)}})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedMeanSquares!=null&&dt(this.accumulatedMeanSquares.map(function(e){return e.variable})),this.accumulatedMeanGrads!=null&&this.centered&&dt(this.accumulatedMeanGrads.map(function(e){return e.variable})),this.accumulatedMoments!=null&&dt(this.accumulatedMoments.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return Y(this,void 0,void 0,function(){var e;return J(this,function(n){switch(n.label){case 0:return e=this.accumulatedMeanSquares.concat(this.accumulatedMoments),this.centered&&e.push.apply(e,this.accumulatedMeanGrads),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(e){return Y(this,void 0,void 0,function(){var n;return J(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(e)];case 1:return e=o.sent(),n=this.centered?e.length/3:e.length/2,this.accumulatedMeanSquares=e.slice(0,n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.accumulatedMoments=e.slice(n,2*n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.centered&&(this.accumulatedMeanGrads=e.slice(2*n,3*n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}})),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}},t.fromConfig=function(e,n){return new e(n.learningRate,n.decay,n.momentum,n.epsilon,n.centered)},t.className="RMSProp",t}(ur);sr(zx);Pe.prototype.squaredDifference=function(r){return lf(this,r)},P=hx;function Gn(r,t,e){if(e===void 0&&(e=!1),r.beginPath(),t.slice(1).forEach(function(a,i){var s=a.x,u=a.y,c=t[i];r.moveTo(c.x,c.y),r.lineTo(s,u)}),e){var n=t[t.length-1],o=t[0];if(!n||!o)return;r.moveTo(n.x,n.y),r.lineTo(o.x,o.y)}r.stroke()}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Qi=function(r,t){return Qi=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var o in n)n.hasOwnProperty(o)&&(e[o]=n[o])},Qi(r,t)};function he(r,t){Qi(r,t);function e(){this.constructor=r}r.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var tt=function(){return tt=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++){e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},tt.apply(this,arguments)};function re(r,t,e,n){function o(a){return a instanceof e?a:new e(function(i){i(a)})}return new(e||(e=Promise))(function(a,i){function s(l){try{c(n.next(l))}catch(f){i(f)}}function u(l){try{c(n.throw(l))}catch(f){i(f)}}function c(l){l.done?a(l.value):o(l.value).then(s,u)}c((n=n.apply(r,[])).next())})}function oe(r,t){var e={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,o,a,i;return i={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function s(c){return function(l){return u([c,l])}}function u(c){if(n)throw new TypeError("Generator is already executing.");for(;e;)try{if(n=1,o&&(a=c[0]&2?o.return:c[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,c[1])).done)return a;switch(o=0,a&&(c=[c[0]&2,a.value]),c[0]){case 0:case 1:a=c;break;case 4:return e.label++,{value:c[1],done:!1};case 5:e.label++,o=c[1],c=[0];continue;case 7:c=e.ops.pop(),e.trys.pop();continue;default:if(a=e.trys,!(a=a.length>0&&a[a.length-1])&&(c[0]===6||c[0]===2)){e=0;continue}if(c[0]===3&&(!a||c[1]>a[0]&&c[1]<a[3])){e.label=c[1];break}if(c[0]===6&&e.label<a[1]){e.label=a[1],a=c;break}if(a&&e.label<a[2]){e.label=a[2],e.ops.push(c);break}a[2]&&e.ops.pop(),e.trys.pop();continue}c=t.call(r,e)}catch(l){c=[6,l],o=0}finally{n=a=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function Yr(){for(var r=0,t=0,e=arguments.length;t<e;t++)r+=arguments[t].length;for(var n=Array(r),o=0,t=0;t<e;t++)for(var a=arguments[t],i=0,s=a.length;i<s;i++,o++)n[o]=a[i];return n}var Zn=function(){function r(t,e){if(!er(t)||!er(e))throw new Error("Dimensions.constructor - expected width and height to be valid numbers, instead have "+JSON.stringify({width:t,height:e}));this._width=t,this._height=e}return Object.defineProperty(r.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),r.prototype.reverse=function(){return new r(1/this.width,1/this.height)},r}();function La(r,t){return r instanceof Pe&&r.shape.length===t}function Ux(r){return La(r,2)}function Wa(r){return La(r,3)}function Mn(r){return La(r,4)}function Vx(r){return r%1!==0}function Dc(r){return r%2===0}function Yf(r,t){t===void 0&&(t=2);var e=Math.pow(10,t);return Math.floor(r*e)/e}function Ac(r){return r&&r.width&&r.height}function Gx(r,t){var e=r.width,n=r.height,o=t/Math.max(n,e);return new Zn(Math.round(e*o),Math.round(n*o))}function Ys(r){return r.reduce(function(t,e){return t.add(e)},new Ee(0,0)).div(new Ee(r.length,r.length))}function ao(r,t,e){return Array(r).fill(0).map(function(n,o){return t+o*e})}function er(r){return!!r&&r!==1/0&&r!==-1/0&&!isNaN(r)||r===0}function Tc(r){return er(r)&&0<=r&&r<=1}var Ee=function(){function r(t,e){this._x=t,this._y=e}return Object.defineProperty(r.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),r.prototype.add=function(t){return new r(this.x+t.x,this.y+t.y)},r.prototype.sub=function(t){return new r(this.x-t.x,this.y-t.y)},r.prototype.mul=function(t){return new r(this.x*t.x,this.y*t.y)},r.prototype.div=function(t){return new r(this.x/t.x,this.y/t.y)},r.prototype.abs=function(){return new r(Math.abs(this.x),Math.abs(this.y))},r.prototype.magnitude=function(){return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))},r.prototype.floor=function(){return new r(Math.floor(this.x),Math.floor(this.y))},r}(),on=function(){function r(t,e){e===void 0&&(e=!0);var n=t||{},o=[n.left,n.top,n.right,n.bottom].every(er),a=[n.x,n.y,n.width,n.height].every(er);if(!a&&!o)throw new Error("Box.constructor - expected box to be IBoundingBox | IRect, instead have "+JSON.stringify(n));var i=a?[n.x,n.y,n.width,n.height]:[n.left,n.top,n.right-n.left,n.bottom-n.top],s=i[0],u=i[1],c=i[2],l=i[3];r.assertIsValidBox({x:s,y:u,width:c,height:l},"Box.constructor",e),this._x=s,this._y=u,this._width=c,this._height=l}return r.isRect=function(t){return!!t&&[t.x,t.y,t.width,t.height].every(er)},r.assertIsValidBox=function(t,e,n){if(n===void 0&&(n=!1),!r.isRect(t))throw new Error(e+" - invalid box: "+JSON.stringify(t)+", expected object with properties x, y, width, height");if(!n&&(t.width<0||t.height<0))throw new Error(e+" - width ("+t.width+") and height ("+t.height+") must be positive numbers")},Object.defineProperty(r.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"left",{get:function(){return this.x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"top",{get:function(){return this.y},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"right",{get:function(){return this.x+this.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottom",{get:function(){return this.y+this.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"area",{get:function(){return this.width*this.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"topLeft",{get:function(){return new Ee(this.left,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"topRight",{get:function(){return new Ee(this.right,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottomLeft",{get:function(){return new Ee(this.left,this.bottom)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottomRight",{get:function(){return new Ee(this.right,this.bottom)},enumerable:!0,configurable:!0}),r.prototype.round=function(){var t=[this.x,this.y,this.width,this.height].map(function(i){return Math.round(i)}),e=t[0],n=t[1],o=t[2],a=t[3];return new r({x:e,y:n,width:o,height:a})},r.prototype.floor=function(){var t=[this.x,this.y,this.width,this.height].map(function(i){return Math.floor(i)}),e=t[0],n=t[1],o=t[2],a=t[3];return new r({x:e,y:n,width:o,height:a})},r.prototype.toSquare=function(){var t=this,e=t.x,n=t.y,o=t.width,a=t.height,i=Math.abs(o-a);return o<a&&(e-=i/2,o+=i),a<o&&(n-=i/2,a+=i),new r({x:e,y:n,width:o,height:a})},r.prototype.rescale=function(t){var e=Ac(t)?t.width:t,n=Ac(t)?t.height:t;return new r({x:this.x*e,y:this.y*n,width:this.width*e,height:this.height*n})},r.prototype.pad=function(t,e){var n=[this.x-t/2,this.y-e/2,this.width+t,this.height+e],o=n[0],a=n[1],i=n[2],s=n[3];return new r({x:o,y:a,width:i,height:s})},r.prototype.clipAtImageBorders=function(t,e){var n=this,o=n.x,a=n.y,i=n.right,s=n.bottom,u=Math.max(o,0),c=Math.max(a,0),l=i-u,f=s-c,h=Math.min(l,t-u),d=Math.min(f,e-c);return new r({x:u,y:c,width:h,height:d}).floor()},r.prototype.shift=function(t,e){var n=this,o=n.width,a=n.height,i=this.x+t,s=this.y+e;return new r({x:i,y:s,width:o,height:a})},r.prototype.padAtBorders=function(t,e){var n=this.width+1,o=this.height+1,a=1,i=1,s=n,u=o,c=this.left,l=this.top,f=this.right,h=this.bottom;return f>e&&(s=-f+e+n,f=e),h>t&&(u=-h+t+o,h=t),c<1&&(u=2-c,c=1),l<1&&(u=2-l,l=1),{dy:i,edy:u,dx:a,edx:s,y:l,ey:h,x:c,ex:f,w:n,h:o}},r.prototype.calibrate=function(t){return new r({left:this.left+t.left*this.width,top:this.top+t.top*this.height,right:this.right+t.right*this.width,bottom:this.bottom+t.bottom*this.height}).toSquare().round()},r}(),za=function(r){he(t,r);function t(e,n,o,a,i){return i===void 0&&(i=!1),r.call(this,{left:e,top:n,right:o,bottom:a},i)||this}return t}(on),Jf=function(){function r(t,e,n,o,a){this._imageDims=new Zn(a.width,a.height),this._score=t,this._classScore=e,this._className=n,this._box=new on(o).rescale(this._imageDims)}return Object.defineProperty(r.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"className",{get:function(){return this._className},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"box",{get:function(){return this._box},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageDims",{get:function(){return this._imageDims},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageWidth",{get:function(){return this.imageDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageHeight",{get:function(){return this.imageDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"relativeBox",{get:function(){return new on(this._box).rescale(this.imageDims.reverse())},enumerable:!0,configurable:!0}),r.prototype.forSize=function(t,e){return new r(this.score,this.classScore,this.className,this.relativeBox,{width:t,height:e})},r}(),kt=function(r){he(t,r);function t(e,n,o){return r.call(this,e,e,"",n,o)||this}return t.prototype.forSize=function(e,n){var o=r.prototype.forSize.call(this,e,n),a=o.score,i=o.relativeBox,s=o.imageDims;return new t(a,i,s)},t}(Jf);function Hx(r,t,e){e===void 0&&(e=!0);var n=Math.max(0,Math.min(r.right,t.right)-Math.max(r.left,t.left)),o=Math.max(0,Math.min(r.bottom,t.bottom)-Math.max(r.top,t.top)),a=n*o;return e?a/(r.area+t.area-a):a/Math.min(r.area,t.area)}function jx(r){var t=r.map(function(s){return s.x}),e=r.map(function(s){return s.y}),n=t.reduce(function(s,u){return u<s?u:s},1/0),o=e.reduce(function(s,u){return u<s?u:s},1/0),a=t.reduce(function(s,u){return s<u?u:s},0),i=e.reduce(function(s,u){return s<u?u:s},0);return new za(n,o,a,i)}function io(r,t,e,n){n===void 0&&(n=!0);for(var o=t.map(function(s,u){return{score:s,boxIndex:u}}).sort(function(s,u){return s.score-u.score}).map(function(s){return s.boxIndex}),a=[],i=function(){var s=o.pop();a.push(s);for(var u=o,c=[],l=0;l<u.length;l++){var f=u[l],h=r[s],d=r[f];c.push(Hx(h,d,n))}o=o.filter(function(p,m){return c[m]<=e})};o.length>0;)i();return a}function xo(r,t){return $(function(){var e=t[0],n=t[1],o=t[2],a=en(Yr(r.shape.slice(0,3),[1]),e),i=en(Yr(r.shape.slice(0,3),[1]),n),s=en(Yr(r.shape.slice(0,3),[1]),o),u=Ve([a,i,s],3);return je(r,u)})}function qx(r,t){return t===void 0&&(t=!1),$(function(){var e=r.shape.slice(1),n=e[0],o=e[1];if(n===o)return r;var a=Math.abs(n-o),i=Math.round(a*(t?.5:1)),s=n>o?2:1,u=function(d){var p=r.shape.slice();return p[s]=d,en(p,0)},c=u(i),l=a-c.shape[s],f=t&&l?u(l):null,h=[f,r,c].filter(function(d){return!!d}).map(function(d){return d.toFloat()});return Ve(h,s)})}function Ci(r){return 1/(1+Math.exp(-r))}var Js=function(r){he(t,r);function t(e,n,o,a,i){return i===void 0&&(i=!1),r.call(this,{x:e,y:n,width:o,height:a},i)||this}return t}(on),Kx=.5,Xx=.43,$x=.45,Pr=function(){function r(t,e,n){n===void 0&&(n=new Ee(0,0));var o=e.width,a=e.height;this._imgDims=new Zn(o,a),this._shift=n,this._positions=t.map(function(i){return i.mul(new Ee(o,a)).add(n)})}return Object.defineProperty(r.prototype,"shift",{get:function(){return new Ee(this._shift.x,this._shift.y)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageWidth",{get:function(){return this._imgDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageHeight",{get:function(){return this._imgDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"positions",{get:function(){return this._positions},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"relativePositions",{get:function(){var t=this;return this._positions.map(function(e){return e.sub(t._shift).div(new Ee(t.imageWidth,t.imageHeight))})},enumerable:!0,configurable:!0}),r.prototype.forSize=function(t,e){return new this.constructor(this.relativePositions,{width:t,height:e})},r.prototype.shiftBy=function(t,e){return new this.constructor(this.relativePositions,this._imgDims,new Ee(t,e))},r.prototype.shiftByPoint=function(t){return this.shiftBy(t.x,t.y)},r.prototype.align=function(t,e){if(e===void 0&&(e={}),t){var n=t instanceof kt?t.box.floor():new on(t);return this.shiftBy(n.x,n.y).align(null,e)}var o=Object.assign({},{useDlibAlignment:!1,minBoxPadding:.2},e),a=o.useDlibAlignment,i=o.minBoxPadding;return a?this.alignDlib():this.alignMinBbox(i)},r.prototype.alignDlib=function(){var t=this.getRefPointsForAlignment(),e=t[0],n=t[1],o=t[2],a=function(f){return o.sub(f).magnitude()},i=(a(e)+a(n))/2,s=Math.floor(i/$x),u=Ys(t),c=Math.floor(Math.max(0,u.x-Kx*s)),l=Math.floor(Math.max(0,u.y-Xx*s));return new Js(c,l,Math.min(s,this.imageWidth+c),Math.min(s,this.imageHeight+l))},r.prototype.alignMinBbox=function(t){var e=jx(this.positions);return e.pad(e.width*t,e.height*t)},r.prototype.getRefPointsForAlignment=function(){throw new Error("getRefPointsForAlignment not implemented by base class")},r}(),Yx=function(r){he(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.getRefPointsForAlignment=function(){var e=this.positions;return[e[0],e[1],Ys([e[3],e[4]])]},t}(Pr),Qf=function(r){he(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.getJawOutline=function(){return this.positions.slice(0,17)},t.prototype.getLeftEyeBrow=function(){return this.positions.slice(17,22)},t.prototype.getRightEyeBrow=function(){return this.positions.slice(22,27)},t.prototype.getNose=function(){return this.positions.slice(27,36)},t.prototype.getLeftEye=function(){return this.positions.slice(36,42)},t.prototype.getRightEye=function(){return this.positions.slice(42,48)},t.prototype.getMouth=function(){return this.positions.slice(48,68)},t.prototype.getRefPointsForAlignment=function(){return[this.getLeftEye(),this.getRightEye(),this.getMouth()].map(Ys)},t}(Pr),Nc=function(){function r(t,e){this._label=t,this._distance=e}return Object.defineProperty(r.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"distance",{get:function(){return this._distance},enumerable:!0,configurable:!0}),r.prototype.toString=function(t){return t===void 0&&(t=!0),""+this.label+(t?" ("+Yf(this.distance)+")":"")},r}(),Fc=function(r){he(t,r);function t(e,n){var o=r.call(this,e)||this;return o._label=n,o}return t.assertIsValidLabeledBox=function(e,n){if(on.assertIsValidBox(e,n),!er(e.label))throw new Error(n+" - expected property label ("+e.label+") to be a number")},Object.defineProperty(t.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),t}(on),Fo=function(){function r(t,e){if(typeof t!="string")throw new Error("LabeledFaceDescriptors - constructor expected label to be a string");if(!Array.isArray(e)||e.some(function(n){return!(n instanceof Float32Array)}))throw new Error("LabeledFaceDescriptors - constructor expected descriptors to be an array of Float32Array");this._label=t,this._descriptors=e}return Object.defineProperty(r.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"descriptors",{get:function(){return this._descriptors},enumerable:!0,configurable:!0}),r.prototype.toJSON=function(){return{label:this.label,descriptors:this.descriptors.map(function(t){return Array.from(t)})}},r.fromJSON=function(t){var e=t.descriptors.map(function(n){return new Float32Array(n)});return new r(t.label,e)},r}();(function(r){he(t,r);function t(e,n,o,a){var i=r.call(this,e,n)||this;return i._score=o,i._classScore=a,i}return t.assertIsValidPredictedBox=function(e,n){if(Fc.assertIsValidLabeledBox(e,n),!Tc(e.score)||!Tc(e.classScore))throw new Error(n+" - expected properties score ("+e.score+") and ("+e.classScore+") to be a number between [0, 1]")},Object.defineProperty(t.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),t})(Fc);function ya(r){return r.detection instanceof kt}function so(r,t){var e={detection:t};return Object.assign({},r,e)}function Zf(){var r=window.fetch||function(){throw new Error("fetch - missing fetch implementation for browser environment")},t=function(){throw new Error("readFile - filesystem not available for browser environment")};return{Canvas:HTMLCanvasElement,CanvasRenderingContext2D,Image:HTMLImageElement,ImageData,Video:HTMLVideoElement,createCanvasElement:function(){return document.createElement("canvas")},createImageElement:function(){return document.createElement("img")},fetch:r,readFile:t}}function eh(r){var t="";if(!r)try{r=require("fs")}catch(n){t=n.toString()}var e=r?function(n){return new Promise(function(o,a){r.readFile(n,function(i,s){return i?a(i):o(s)})})}:function(){throw new Error("readFile - failed to require fs in nodejs environment with error: "+t)};return{readFile:e}}function th(){var r=global.Canvas||global.HTMLCanvasElement,t=global.Image||global.HTMLImageElement,e=function(){if(r)return new r;throw new Error("createCanvasElement - missing Canvas implementation for nodejs environment")},n=function(){if(t)return new t;throw new Error("createImageElement - missing Image implementation for nodejs environment")},o=global.fetch||function(){throw new Error("fetch - missing fetch implementation for nodejs environment")},a=eh();return tt({Canvas:r||function(){function i(){}return i}(),CanvasRenderingContext2D:global.CanvasRenderingContext2D||function(){function i(){}return i}(),Image:t||function(){function i(){}return i}(),ImageData:global.ImageData||function(){function i(){}return i}(),Video:global.HTMLVideoElement||function(){function i(){}return i}(),createCanvasElement:e,createImageElement:n,fetch:o},a)}function nh(){return typeof window=="object"&&typeof document<"u"&&typeof HTMLImageElement<"u"&&typeof HTMLCanvasElement<"u"&&typeof HTMLVideoElement<"u"&&typeof ImageData<"u"&&typeof CanvasRenderingContext2D<"u"}function rh(){return typeof global=="object"&&typeof require=="function"&&typeof Mh<"u"&&typeof process<"u"&&!!process.version}var ze;function Jx(){if(!ze)throw new Error("getEnv - environment is not defined, check isNodejs() and isBrowser()");return ze}function Zi(r){ze=r}function Qs(){nh()&&Zi(Zf()),rh()&&Zi(th())}function Qx(r){if(ze||Qs(),!ze)throw new Error("monkeyPatch - environment is not defined, check isNodejs() and isBrowser()");var t=r.Canvas,e=t===void 0?ze.Canvas:t,n=r.Image,o=n===void 0?ze.Image:n;ze.Canvas=e,ze.Image=o,ze.createCanvasElement=r.createCanvasElement||function(){return new e},ze.createImageElement=r.createImageElement||function(){return new o},ze.ImageData=r.ImageData||ze.ImageData,ze.Video=r.Video||ze.Video,ze.fetch=r.fetch||ze.fetch,ze.readFile=r.readFile||ze.readFile}var at={getEnv:Jx,setEnv:Zi,initialize:Qs,createBrowserEnv:Zf,createFileSystem:eh,createNodejsEnv:th,monkeyPatch:Qx,isBrowser:nh,isNodejs:rh};Qs();function Zs(r){return!at.isNodejs()&&typeof r=="string"?document.getElementById(r):r}function an(r){var t=at.getEnv(),e=t.Canvas,n=t.CanvasRenderingContext2D;if(r instanceof n)return r;var o=Zs(r);if(!(o instanceof e))throw new Error("resolveContext2d - expected canvas to be of instance of Canvas");var a=o.getContext("2d");if(!a)throw new Error("resolveContext2d - canvas 2d context is null");return a}var Nn;(function(r){r.TOP_LEFT="TOP_LEFT",r.TOP_RIGHT="TOP_RIGHT",r.BOTTOM_LEFT="BOTTOM_LEFT",r.BOTTOM_RIGHT="BOTTOM_RIGHT"})(Nn||(Nn={}));var oh=function(){function r(t){t===void 0&&(t={});var e=t.anchorPosition,n=t.backgroundColor,o=t.fontColor,a=t.fontSize,i=t.fontStyle,s=t.padding;this.anchorPosition=e||Nn.TOP_LEFT,this.backgroundColor=n||"rgba(0, 0, 0, 0.5)",this.fontColor=o||"rgba(255, 255, 255, 1)",this.fontSize=a||14,this.fontStyle=i||"Georgia",this.padding=s||4}return r}(),Zx=function(){function r(t,e,n){n===void 0&&(n={}),this.text=typeof t=="string"?[t]:t instanceof r?t.text:t,this.anchor=e,this.options=new oh(n)}return r.prototype.measureWidth=function(t){var e=this.options.padding;return this.text.map(function(n){return t.measureText(n).width}).reduce(function(n,o){return n<o?o:n},0)+2*e},r.prototype.measureHeight=function(){var t=this.options,e=t.fontSize,n=t.padding;return this.text.length*e+2*n},r.prototype.getUpperLeft=function(t,e){var n=this.options.anchorPosition,o=n===Nn.BOTTOM_RIGHT||n===Nn.TOP_RIGHT,a=n===Nn.BOTTOM_LEFT||n===Nn.BOTTOM_RIGHT,i=this.measureWidth(t),s=this.measureHeight(),u=o?this.anchor.x-i:this.anchor.x,c=a?this.anchor.y-s:this.anchor.y;if(e){var l=e.width,f=e.height,h=Math.max(Math.min(u,l-i),0),d=Math.max(Math.min(c,f-s),0);return{x:h,y:d}}return{x:u,y:c}},r.prototype.draw=function(t){var e=Zs(t),n=an(e),o=this.options,a=o.backgroundColor,i=o.fontColor,s=o.fontSize,u=o.fontStyle,c=o.padding;n.font=s+"px "+u;var l=this.measureWidth(n),f=this.measureHeight();n.fillStyle=a;var h=this.getUpperLeft(n,e);n.fillRect(h.x,h.y,l,f),n.fillStyle=i,this.text.forEach(function(d,p){var m=c+h.x,v=c+h.y+(p+1)*s;n.fillText(d,m,v)})},r}(),eb=function(){function r(t){t===void 0&&(t={});var e=t.boxColor,n=t.lineWidth,o=t.label,a=t.drawLabelOptions;this.boxColor=e||"rgba(0, 0, 255, 1)",this.lineWidth=n||2,this.label=o;var i={anchorPosition:Nn.BOTTOM_LEFT,backgroundColor:this.boxColor};this.drawLabelOptions=new oh(Object.assign({},i,a))}return r}(),tb=function(){function r(t,e){e===void 0&&(e={}),this.box=new on(t),this.options=new eb(e)}return r.prototype.draw=function(t){var e=an(t),n=this.options,o=n.boxColor,a=n.lineWidth,i=this.box,s=i.x,u=i.y,c=i.width,l=i.height;e.strokeStyle=o,e.lineWidth=a,e.strokeRect(s,u,c,l);var f=this.options.label;f&&new Zx([f],{x:s-a/2,y:u},this.options.drawLabelOptions).draw(t)},r}();function nb(r,t){var e=Array.isArray(t)?t:[t];e.forEach(function(n){var o=n instanceof kt?n.score:ya(n)?n.detection.score:void 0,a=n instanceof kt?n.box:ya(n)?n.detection.box:new on(n),i=o?""+Yf(o):void 0;new tb(a,{label:i}).draw(r)})}function ah(r){var t=at.getEnv(),e=t.Image,n=t.Video;return r instanceof e&&r.complete||r instanceof n&&r.readyState>=3}function rb(r){return new Promise(function(t,e){if(r instanceof at.getEnv().Canvas||ah(r))return t();function n(a){a.currentTarget&&(a.currentTarget.removeEventListener("load",n),a.currentTarget.removeEventListener("error",o),t(a))}function o(a){a.currentTarget&&(a.currentTarget.removeEventListener("load",n),a.currentTarget.removeEventListener("error",o),e(a))}r.addEventListener("load",n),r.addEventListener("error",o)})}function eu(r){var t=at.getEnv(),e=t.Image,n=t.Video;return r instanceof e?new Zn(r.naturalWidth,r.naturalHeight):r instanceof n?new Zn(r.videoWidth,r.videoHeight):new Zn(r.width,r.height)}function Ua(r){var t=r.width,e=r.height,n=at.getEnv().createCanvasElement,o=n();return o.width=t,o.height=e,o}function tu(r,t){var e=at.getEnv().ImageData;if(!(r instanceof e)&&!ah(r))throw new Error("createCanvasFromMedia - media has not finished loading yet");var n=eu(r),o=n.width,a=n.height,i=Ua({width:o,height:a});return r instanceof e?an(i).putImageData(r,0,0):an(i).drawImage(r,0,0,o,a),i}function ob(r,t){return re(this,void 0,void 0,function(){var e,n,o,a,i,s;return oe(this,function(u){switch(u.label){case 0:return e=at.getEnv().createCanvasElement(),n=r.shape.slice(Mn(r)?1:0),o=n[0],a=n[1],i=n[2],s=$(function(){return r.as3D(o,a,i).toInt()}),[4,$s.toPixels(s,e)];case 1:return u.sent(),s.dispose(),[2,e]}})})}function Pc(r){var t=at.getEnv(),e=t.Image,n=t.Canvas,o=t.Video;return r instanceof e||r instanceof n||r instanceof o}function ab(r,t,e){e===void 0&&(e=!1);var n=at.getEnv(),o=n.Image,a=n.Canvas;if(!(r instanceof o||r instanceof a))throw new Error("imageToSquare - expected arg0 to be HTMLImageElement | HTMLCanvasElement");var i=eu(r),s=t/Math.max(i.height,i.width),u=s*i.width,c=s*i.height,l=Ua({width:t,height:t}),f=r instanceof a?r:tu(r),h=Math.abs(u-c)/2,d=e&&u<c?h:0,p=e&&c<u?h:0;return an(l).drawImage(f,d,p,u,c),l}var xa=function(){function r(t,e){var n=this;if(e===void 0&&(e=!1),this._imageTensors=[],this._canvases=[],this._treatAsBatchInput=!1,this._inputDimensions=[],!Array.isArray(t))throw new Error("NetInput.constructor - expected inputs to be an Array of TResolvedNetInput or to be instanceof tf.Tensor4D, instead have "+t);this._treatAsBatchInput=e,this._batchSize=t.length,t.forEach(function(o,a){if(Wa(o)){n._imageTensors[a]=o,n._inputDimensions[a]=o.shape;return}if(Mn(o)){var i=o.shape[0];if(i!==1)throw new Error("NetInput - tf.Tensor4D with batchSize "+i+" passed, but not supported in input array");n._imageTensors[a]=o,n._inputDimensions[a]=o.shape.slice(1);return}var s=o instanceof at.getEnv().Canvas?o:tu(o);n._canvases[a]=s,n._inputDimensions[a]=[s.height,s.width,3]})}return Object.defineProperty(r.prototype,"imageTensors",{get:function(){return this._imageTensors},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"canvases",{get:function(){return this._canvases},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"isBatchInput",{get:function(){return this.batchSize>1||this._treatAsBatchInput},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"batchSize",{get:function(){return this._batchSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"inputDimensions",{get:function(){return this._inputDimensions},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"reshapedInputDimensions",{get:function(){var t=this;return ao(this.batchSize,0,1).map(function(e,n){return t.getReshapedInputDimensions(n)})},enumerable:!0,configurable:!0}),r.prototype.getInput=function(t){return this.canvases[t]||this.imageTensors[t]},r.prototype.getInputDimensions=function(t){return this._inputDimensions[t]},r.prototype.getInputHeight=function(t){return this._inputDimensions[t][0]},r.prototype.getInputWidth=function(t){return this._inputDimensions[t][1]},r.prototype.getReshapedInputDimensions=function(t){if(typeof this.inputSize!="number")throw new Error("getReshapedInputDimensions - inputSize not set, toBatchTensor has not been called yet");var e=this.getInputWidth(t),n=this.getInputHeight(t);return Gx({width:e,height:n},this.inputSize)},r.prototype.toBatchTensor=function(t,e){var n=this;return e===void 0&&(e=!0),this._inputSize=t,$(function(){var o=ao(n.batchSize,0,1).map(function(i){var s=n.getInput(i);if(s instanceof Pe){var u=Mn(s)?s:s.expandDims();return u=qx(u,e),(u.shape[1]!==t||u.shape[2]!==t)&&(u=Gs.resizeBilinear(u,[t,t])),u.as3D(t,t,3)}if(s instanceof at.getEnv().Canvas)return $s.fromPixels(ab(s,t,e));throw new Error("toBatchTensor - at batchIdx "+i+", expected input to be instanceof tf.Tensor or instanceof HTMLCanvasElement, instead have "+s)}),a=Rt(o.map(function(i){return i.toFloat()})).as4D(n.batchSize,t,t,3);return a})},r}();function $e(r){return re(this,void 0,void 0,function(){var t,e,n;return oe(this,function(o){switch(o.label){case 0:if(r instanceof xa)return[2,r];if(t=Array.isArray(r)?r:[r],!t.length)throw new Error("toNetInput - empty array passed as input");return e=function(a){return Array.isArray(r)?" at input index "+a+":":""},n=t.map(Zs),n.forEach(function(a,i){if(!Pc(a)&&!Wa(a)&&!Mn(a))throw typeof t[i]=="string"?new Error("toNetInput -"+e(i)+" string passed, but could not resolve HTMLElement for element id "+t[i]):new Error("toNetInput -"+e(i)+" expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id");if(Mn(a)){var s=a.shape[0];if(s!==1)throw new Error("toNetInput -"+e(i)+" tf.Tensor4D with batchSize "+s+" passed, but not supported in input array")}}),[4,Promise.all(n.map(function(a){return Pc(a)&&rb(a)}))];case 1:return o.sent(),[2,new xa(n,Array.isArray(r))]}})})}function nu(r,t){return re(this,void 0,void 0,function(){var e,n,o,a,i,s,u;return oe(this,function(c){switch(c.label){case 0:return e=at.getEnv().Canvas,n=r,r instanceof e?[3,5]:[4,$e(r)];case 1:if(o=c.sent(),o.batchSize>1)throw new Error("extractFaces - batchSize > 1 not supported");return a=o.getInput(0),a instanceof e?(i=a,[3,4]):[3,2];case 2:return[4,ob(a)];case 3:i=c.sent(),c.label=4;case 4:n=i,c.label=5;case 5:return s=an(n),u=t.map(function(l){return l instanceof kt?l.forSize(n.width,n.height).box.floor():l}).map(function(l){return l.clipAtImageBorders(n.width,n.height)}),[2,u.map(function(l){var f=l.x,h=l.y,d=l.width,p=l.height,m=Ua({width:d,height:p});return an(m).putImageData(s.getImageData(f,h,d,p),0,0),m})]}})})}function ru(r,t){return re(this,void 0,void 0,function(){return oe(this,function(e){if(!Wa(r)&&!Mn(r))throw new Error("extractFaceTensors - expected image tensor to be 3D or 4D");if(Mn(r)&&r.shape[0]>1)throw new Error("extractFaceTensors - batchSize > 1 not supported");return[2,$(function(){var n=r.shape.slice(Mn(r)?1:0),o=n[0],a=n[1],i=n[2],s=t.map(function(c){return c instanceof kt?c.forSize(a,o).box:c}).map(function(c){return c.clipAtImageBorders(a,o)}),u=s.map(function(c){var l=c.x,f=c.y,h=c.width,d=c.height;return Tf(r.as3D(o,a,i),[f,l,0],[d,h,i])});return u})]})})}function ib(r,t){return re(this,void 0,void 0,function(){var e,n;return oe(this,function(o){switch(o.label){case 0:return e=at.getEnv().fetch,[4,e(r,t)];case 1:if(n=o.sent(),!(n.status<400))throw new Error("failed to fetch: ("+n.status+") "+n.statusText+", from url: "+n.url);return[2,n]}})})}function sb(r){return re(this,void 0,void 0,function(){return oe(this,function(t){switch(t.label){case 0:return[4,ib(r)];case 1:return[2,t.sent().json()]}})})}function ih(r,t){var e=t+"-weights_manifest.json";if(!r)return{modelBaseUri:"",manifestUri:e};if(r==="/")return{modelBaseUri:"/",manifestUri:"/"+e};var n=r.startsWith("http://")?"http://":r.startsWith("https://")?"https://":"";r=r.replace(n,"");var o=r.split("/").filter(function(s){return s}),a=r.endsWith(".json")?o[o.length-1]:e,i=n+(r.endsWith(".json")?o.slice(0,o.length-1):o).join("/");return i=r.startsWith("/")?"/"+i:i,{modelBaseUri:i,manifestUri:i==="/"?"/"+a:i+"/"+a}}function ub(r,t){return re(this,void 0,void 0,function(){var e,n,o,a;return oe(this,function(i){switch(i.label){case 0:return e=ih(r,t),n=e.manifestUri,o=e.modelBaseUri,[4,sb(n)];case 1:return a=i.sent(),[2,Xf.loadWeights(a,o)]}})})}function cb(r,t,e){e===void 0&&(e=!1);var n=e?eu(t):t,o=n.width,a=n.height;return r.width=o,r.height=a,{width:o,height:a}}var wn=function(){function r(t){this._name=t,this._params=void 0,this._paramMappings=[]}return Object.defineProperty(r.prototype,"params",{get:function(){return this._params},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"paramMappings",{get:function(){return this._paramMappings},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"isLoaded",{get:function(){return!!this.params},enumerable:!0,configurable:!0}),r.prototype.getParamFromPath=function(t){var e=this.traversePropertyPath(t),n=e.obj,o=e.objProp;return n[o]},r.prototype.reassignParamFromPath=function(t,e){var n=this.traversePropertyPath(t),o=n.obj,a=n.objProp;o[a].dispose(),o[a]=e},r.prototype.getParamList=function(){var t=this;return this._paramMappings.map(function(e){var n=e.paramPath;return{path:n,tensor:t.getParamFromPath(n)}})},r.prototype.getTrainableParams=function(){return this.getParamList().filter(function(t){return t.tensor instanceof Tr})},r.prototype.getFrozenParams=function(){return this.getParamList().filter(function(t){return!(t.tensor instanceof Tr)})},r.prototype.variable=function(){var t=this;this.getFrozenParams().forEach(function(e){var n=e.path,o=e.tensor;t.reassignParamFromPath(n,o.variable())})},r.prototype.freeze=function(){var t=this;this.getTrainableParams().forEach(function(e){var n=e.path,o=e.tensor,a=Ze(o.dataSync());o.dispose(),t.reassignParamFromPath(n,a)})},r.prototype.dispose=function(t){t===void 0&&(t=!0),this.getParamList().forEach(function(e){if(t&&e.tensor.isDisposed)throw new Error("param tensor has already been disposed for path "+e.path);e.tensor.dispose()}),this._params=void 0},r.prototype.serializeParams=function(){return new Float32Array(this.getParamList().map(function(t){var e=t.tensor;return Array.from(e.dataSync())}).reduce(function(t,e){return t.concat(e)}))},r.prototype.load=function(t){return re(this,void 0,void 0,function(){return oe(this,function(e){switch(e.label){case 0:return t instanceof Float32Array?(this.extractWeights(t),[2]):[4,this.loadFromUri(t)];case 1:return e.sent(),[2]}})})},r.prototype.loadFromUri=function(t){return re(this,void 0,void 0,function(){var e;return oe(this,function(n){switch(n.label){case 0:if(t&&typeof t!="string")throw new Error(this._name+".loadFromUri - expected model uri");return[4,ub(t,this.getDefaultModelName())];case 1:return e=n.sent(),this.loadFromWeightMap(e),[2]}})})},r.prototype.loadFromDisk=function(t){return re(this,void 0,void 0,function(){var e,n,o,a,i,s,u,c,l,f;return oe(this,function(h){switch(h.label){case 0:if(t&&typeof t!="string")throw new Error(this._name+".loadFromDisk - expected model file path");return e=at.getEnv().readFile,n=ih(t,this.getDefaultModelName()),o=n.manifestUri,a=n.modelBaseUri,i=function(d){return Promise.all(d.map(function(p){return e(p).then(function(m){return m.buffer})}))},s=Xf.weightsLoaderFactory(i),l=(c=JSON).parse,[4,e(o)];case 1:return u=l.apply(c,[h.sent().toString()]),[4,s(u,a)];case 2:return f=h.sent(),this.loadFromWeightMap(f),[2]}})})},r.prototype.loadFromWeightMap=function(t){var e=this.extractParamsFromWeigthMap(t),n=e.paramMappings,o=e.params;this._paramMappings=n,this._params=o},r.prototype.extractWeights=function(t){var e=this.extractParams(t),n=e.paramMappings,o=e.params;this._paramMappings=n,this._params=o},r.prototype.traversePropertyPath=function(t){if(!this.params)throw new Error("traversePropertyPath - model has no loaded params");var e=t.split("/").reduce(function(a,i){if(!a.nextObj.hasOwnProperty(i))throw new Error("traversePropertyPath - object does not have property "+i+", for path "+t);return{obj:a.nextObj,objProp:i,nextObj:a.nextObj[i]}},{nextObj:this.params}),n=e.obj,o=e.objProp;if(!n||!o||!(n[o]instanceof Pe))throw new Error("traversePropertyPath - parameter is not a tensor, for path "+t);return{obj:n,objProp:o}},r}();function Et(r,t,e){return $(function(){var n=Ls(r,t.depthwise_filter,t.pointwise_filter,e,"same");return n=ye(n,t.bias),n})}function Ei(r,t,e){return e===void 0&&(e=!1),$(function(){var n=Me(e?ye(Pt(r,t.conv0.filters,[2,2],"same"),t.conv0.bias):Et(r,t.conv0,[2,2])),o=Et(n,t.conv1,[1,1]),a=Me(ye(n,o)),i=Et(a,t.conv2,[1,1]);return Me(ye(n,ye(o,i)))})}function Po(r,t,e,n){return e===void 0&&(e=!1),n===void 0&&(n=!0),$(function(){var o=Me(e?ye(Pt(r,t.conv0.filters,n?[2,2]:[1,1],"same"),t.conv0.bias):Et(r,t.conv0,n?[2,2]:[1,1])),a=Et(o,t.conv1,[1,1]),i=Me(ye(o,a)),s=Et(i,t.conv2,[1,1]),u=Me(ye(o,ye(a,s))),c=Et(u,t.conv3,[1,1]);return Me(ye(o,ye(a,ye(s,c))))})}function Lt(r,t,e,n){return e===void 0&&(e="same"),n===void 0&&(n=!1),$(function(){var o=ye(Pt(r,t.filters,[1,1],e),t.bias);return n?Me(o):o})}function _n(r,t){Object.keys(r).forEach(function(e){t.some(function(n){return n.originalPath===e})||r[e].dispose()})}function Va(r,t){return function(e,n,o,a){var i=ft(r(e*n*o*o),[o,o,e,n]),s=We(r(n));return t.push({paramPath:a+"/filters"},{paramPath:a+"/bias"}),{filters:i,bias:s}}}function ou(r,t){return function(e,n,o){var a=Fn(r(e*n),[e,n]),i=We(r(n));return t.push({paramPath:o+"/weights"},{paramPath:o+"/bias"}),{weights:a,bias:i}}}var sh=function(){function r(t,e,n){this.depthwise_filter=t,this.pointwise_filter=e,this.bias=n}return r}();function au(r,t){return function(e,n,o){var a=ft(r(9*e),[3,3,e,1]),i=ft(r(e*n),[1,1,e,n]),s=We(r(n));return t.push({paramPath:o+"/depthwise_filter"},{paramPath:o+"/pointwise_filter"},{paramPath:o+"/bias"}),new sh(a,i,s)}}function iu(r){return function(t){var e=r(t+"/depthwise_filter",4),n=r(t+"/pointwise_filter",4),o=r(t+"/bias",1);return new sh(e,n,o)}}function Un(r,t){return function(e,n,o){var a=r[e];if(!La(a,n))throw new Error("expected weightMap["+e+"] to be a Tensor"+n+"D, instead have "+a);return t.push({originalPath:e,paramPath:o||e}),a}}function Cn(r){var t=r;function e(o){var a=t.slice(0,o);return t=t.slice(o),a}function n(){return t}return{extractWeights:e,getRemainingWeights:n}}function uh(r,t){var e=Va(r,t),n=au(r,t);function o(i,s,u,c){c===void 0&&(c=!1);var l=c?e(i,s,3,u+"/conv0"):n(i,s,u+"/conv0"),f=n(s,s,u+"/conv1"),h=n(s,s,u+"/conv2");return{conv0:l,conv1:f,conv2:h}}function a(i,s,u,c){c===void 0&&(c=!1);var l=o(i,s,u,c),f=l.conv0,h=l.conv1,d=l.conv2,p=n(s,s,u+"/conv3");return{conv0:f,conv1:h,conv2:d,conv3:p}}return{extractDenseBlock3Params:o,extractDenseBlock4Params:a}}function lb(r){var t=[],e=Cn(r),n=e.extractWeights,o=e.getRemainingWeights,a=uh(n,t).extractDenseBlock4Params,i=a(3,32,"dense0",!0),s=a(32,64,"dense1"),u=a(64,128,"dense2"),c=a(128,256,"dense3");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{dense0:i,dense1:s,dense2:u,dense3:c}}}function ch(r){return function(t){var e=r(t+"/filters",4),n=r(t+"/bias",1);return{filters:e,bias:n}}}function lh(r,t){var e=Un(r,t),n=ch(e),o=iu(e);function a(s,u){u===void 0&&(u=!1);var c=u?n(s+"/conv0"):o(s+"/conv0"),l=o(s+"/conv1"),f=o(s+"/conv2");return{conv0:c,conv1:l,conv2:f}}function i(s,u){u===void 0&&(u=!1);var c=u?n(s+"/conv0"):o(s+"/conv0"),l=o(s+"/conv1"),f=o(s+"/conv2"),h=o(s+"/conv3");return{conv0:c,conv1:l,conv2:f,conv3:h}}return{extractDenseBlock3Params:a,extractDenseBlock4Params:i}}function fb(r){var t=[],e=lh(r,t).extractDenseBlock4Params,n={dense0:e("dense0",!0),dense1:e("dense1"),dense2:e("dense2"),dense3:e("dense3")};return _n(r,t),{params:n,paramMappings:t}}var fh=function(r){he(t,r);function t(){return r.call(this,"FaceFeatureExtractor")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("FaceFeatureExtractor - load model before inference");return $(function(){var o=e.toBatchTensor(112,!0),a=[122.782,117.001,104.298],i=xo(o,a).div(q(255)),s=Po(i,n.dense0,!0);return s=Po(s,n.dense1),s=Po(s,n.dense2),s=Po(s,n.dense3),s=go(s,[7,7],[2,2],"valid"),s})},t.prototype.forward=function(e){return re(this,void 0,void 0,function(){var n;return oe(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,$e(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"face_feature_extractor_model"},t.prototype.extractParamsFromWeigthMap=function(e){return fb(e)},t.prototype.extractParams=function(e){return lb(e)},t}(wn);function Jt(r,t){return $(function(){return ye(Ma(r,t.weights),t.bias)})}function hb(r,t,e){var n=[],o=Cn(r),a=o.extractWeights,i=o.getRemainingWeights,s=ou(a,n),u=s(t,e,"fc");if(i().length!==0)throw new Error("weights remaing after extract: "+i().length);return{paramMappings:n,params:{fc:u}}}function db(r){var t=[],e=Un(r,t);function n(a){var i=e(a+"/weights",2),s=e(a+"/bias",1);return{weights:i,bias:s}}var o={fc:n("fc")};return _n(r,t),{params:o,paramMappings:t}}function hh(r){var t={},e={};return Object.keys(r).forEach(function(n){var o=n.startsWith("fc")?e:t;o[n]=r[n]}),{featureExtractorMap:t,classifierMap:e}}var dh=function(r){he(t,r);function t(e,n){var o=r.call(this,e)||this;return o._faceFeatureExtractor=n,o}return Object.defineProperty(t.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),t.prototype.runNet=function(e){var n=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return $(function(){var a=e instanceof xa?n.faceFeatureExtractor.forwardInput(e):e;return Jt(a.as2D(a.shape[0],-1),o.fc)})},t.prototype.dispose=function(e){e===void 0&&(e=!0),this.faceFeatureExtractor.dispose(e),r.prototype.dispose.call(this,e)},t.prototype.loadClassifierParams=function(e){var n=this.extractClassifierParams(e),o=n.params,a=n.paramMappings;this._params=o,this._paramMappings=a},t.prototype.extractClassifierParams=function(e){return hb(e,this.getClassifierChannelsIn(),this.getClassifierChannelsOut())},t.prototype.extractParamsFromWeigthMap=function(e){var n=hh(e),o=n.featureExtractorMap,a=n.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),db(a)},t.prototype.extractParams=function(e){var n=this.getClassifierChannelsIn(),o=this.getClassifierChannelsOut(),a=o*n+o,i=e.slice(0,e.length-a),s=e.slice(e.length-a);return this.faceFeatureExtractor.extractWeights(i),this.extractClassifierParams(s)},t}(wn),Mc=["neutral","happy","sad","angry","fearful","disgusted","surprised"],pb=function(){function r(t){var e=this;if(t.length!==7)throw new Error("FaceExpressions.constructor - expected probabilities.length to be 7, have: "+t.length);Mc.forEach(function(n,o){e[n]=t[o]})}return r.prototype.asSortedArray=function(){var t=this;return Mc.map(function(e){return{expression:e,probability:t[e]}}).sort(function(e,n){return n.probability-e.probability})},r}(),vb=function(r){he(t,r);function t(e){return e===void 0&&(e=new fh),r.call(this,"FaceExpressionNet",e)||this}return t.prototype.forwardInput=function(e){var n=this;return $(function(){return xn(n.runNet(e))})},t.prototype.forward=function(e){return re(this,void 0,void 0,function(){var n;return oe(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,$e(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.predictExpressions=function(e){return re(this,void 0,void 0,function(){var n,o,a,i,s=this;return oe(this,function(u){switch(u.label){case 0:return[4,$e(e)];case 1:return n=u.sent(),[4,this.forwardInput(n)];case 2:return o=u.sent(),[4,Promise.all(Ge(o).map(function(c){return re(s,void 0,void 0,function(){var l;return oe(this,function(f){switch(f.label){case 0:return[4,c.data()];case 1:return l=f.sent(),c.dispose(),[2,l]}})})}))];case 3:return a=u.sent(),o.dispose(),i=a.map(function(c){return new pb(c)}),[2,n.isBatchInput?i:i[0]]}})})},t.prototype.getDefaultModelName=function(){return"face_expression_model"},t.prototype.getClassifierChannelsIn=function(){return 256},t.prototype.getClassifierChannelsOut=function(){return 7},t}(dh);function ph(r,t){var e={expressions:t};return Object.assign({},r,e)}function su(r){return ya(r)&&r.landmarks instanceof Pr&&r.unshiftedLandmarks instanceof Pr&&r.alignedRect instanceof kt}function Ga(r,t){var e=r.detection.box,n=t.shiftBy(e.x,e.y),o=n.align(),a=r.detection.imageDims,i=new kt(r.detection.score,o.rescale(a.reverse()),a),s={landmarks:n,unshiftedLandmarks:t,alignedRect:i};return Object.assign({},r,s)}var mb=function(){function r(t){t===void 0&&(t={});var e=t.drawLines,n=e===void 0?!0:e,o=t.drawPoints,a=o===void 0?!0:o,i=t.lineWidth,s=t.lineColor,u=t.pointSize,c=t.pointColor;this.drawLines=n,this.drawPoints=a,this.lineWidth=i||1,this.pointSize=u||2,this.lineColor=s||"rgba(0, 255, 255, 1)",this.pointColor=c||"rgba(255, 0, 255, 1)"}return r}(),gb=function(){function r(t,e){e===void 0&&(e={}),this.faceLandmarks=t,this.options=new mb(e)}return r.prototype.draw=function(t){var e=an(t),n=this.options,o=n.drawLines,a=n.drawPoints,i=n.lineWidth,s=n.lineColor,u=n.pointSize,c=n.pointColor;if(o&&this.faceLandmarks instanceof Qf&&(e.strokeStyle=s,e.lineWidth=i,Gn(e,this.faceLandmarks.getJawOutline()),Gn(e,this.faceLandmarks.getLeftEyeBrow()),Gn(e,this.faceLandmarks.getRightEyeBrow()),Gn(e,this.faceLandmarks.getNose()),Gn(e,this.faceLandmarks.getLeftEye(),!0),Gn(e,this.faceLandmarks.getRightEye(),!0),Gn(e,this.faceLandmarks.getMouth(),!0)),a){e.strokeStyle=c,e.fillStyle=c;var l=function(f){e.beginPath(),e.arc(f.x,f.y,u,0,2*Math.PI),e.fill()};this.faceLandmarks.positions.forEach(l)}},r}();function yb(r,t){var e=Array.isArray(t)?t:[t];e.forEach(function(n){var o=n instanceof Pr?n:su(n)?n.landmarks:void 0;if(!o)throw new Error("drawFaceLandmarks - expected faceExpressions to be FaceLandmarks | WithFaceLandmarks<WithFaceDetection<{}>> or array thereof");new gb(o).draw(r)})}function xb(r,t){var e=Va(r,t),n=au(r,t);function o(i,s,u){var c=n(i,s,u+"/separable_conv0"),l=n(s,s,u+"/separable_conv1"),f=e(i,s,1,u+"/expansion_conv");return{separable_conv0:c,separable_conv1:l,expansion_conv:f}}function a(i,s){var u=n(i,i,s+"/separable_conv0"),c=n(i,i,s+"/separable_conv1"),l=n(i,i,s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:e,extractSeparableConvParams:n,extractReductionBlockParams:o,extractMainBlockParams:a}}function bb(r,t){var e=[],n=Cn(r),o=n.extractWeights,a=n.getRemainingWeights,i=xb(o,e),s=i.extractConvParams,u=i.extractSeparableConvParams,c=i.extractReductionBlockParams,l=i.extractMainBlockParams,f=s(3,32,3,"entry_flow/conv_in"),h=c(32,64,"entry_flow/reduction_block_0"),d=c(64,128,"entry_flow/reduction_block_1"),p={conv_in:f,reduction_block_0:h,reduction_block_1:d},m={};ao(t,0,1).forEach(function(w){m["main_block_"+w]=l(128,"middle_flow/main_block_"+w)});var v=c(128,256,"exit_flow/reduction_block"),g=u(256,512,"exit_flow/separable_conv"),x={reduction_block:v,separable_conv:g};if(a().length!==0)throw new Error("weights remaing after extract: "+a().length);return{paramMappings:e,params:{entry_flow:p,middle_flow:m,exit_flow:x}}}function wb(r,t){var e=Un(r,t),n=ch(e),o=iu(e);function a(s){var u=o(s+"/separable_conv0"),c=o(s+"/separable_conv1"),l=n(s+"/expansion_conv");return{separable_conv0:u,separable_conv1:c,expansion_conv:l}}function i(s){var u=o(s+"/separable_conv0"),c=o(s+"/separable_conv1"),l=o(s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:n,extractSeparableConvParams:o,extractReductionBlockParams:a,extractMainBlockParams:i}}function _b(r,t){var e=[],n=wb(r,e),o=n.extractConvParams,a=n.extractSeparableConvParams,i=n.extractReductionBlockParams,s=n.extractMainBlockParams,u=o("entry_flow/conv_in"),c=i("entry_flow/reduction_block_0"),l=i("entry_flow/reduction_block_1"),f={conv_in:u,reduction_block_0:c,reduction_block_1:l},h={};ao(t,0,1).forEach(function(v){h["main_block_"+v]=s("middle_flow/main_block_"+v)});var d=i("exit_flow/reduction_block"),p=a("exit_flow/separable_conv"),m={reduction_block:d,separable_conv:p};return _n(r,e),{params:{entry_flow:f,middle_flow:h,exit_flow:m},paramMappings:e}}function vh(r,t,e){return ye(Pt(r,t.filters,e,"same"),t.bias)}function Ii(r,t,e){e===void 0&&(e=!0);var n=e?Me(r):r;return n=Et(n,t.separable_conv0,[1,1]),n=Et(Me(n),t.separable_conv1,[1,1]),n=Ke(n,[3,3],[2,2],"same"),n=ye(n,vh(r,t.expansion_conv,[2,2])),n}function Cb(r,t){var e=Et(Me(r),t.separable_conv0,[1,1]);return e=Et(Me(e),t.separable_conv1,[1,1]),e=Et(Me(e),t.separable_conv2,[1,1]),e=ye(e,r),e}var Eb=function(r){he(t,r);function t(e){var n=r.call(this,"TinyXception")||this;return n._numMainBlocks=e,n}return t.prototype.forwardInput=function(e){var n=this,o=this.params;if(!o)throw new Error("TinyXception - load model before inference");return $(function(){var a=e.toBatchTensor(112,!0),i=[122.782,117.001,104.298],s=xo(a,i).div(q(256)),u=Me(vh(s,o.entry_flow.conv_in,[2,2]));return u=Ii(u,o.entry_flow.reduction_block_0,!1),u=Ii(u,o.entry_flow.reduction_block_1),ao(n._numMainBlocks,0,1).forEach(function(c){u=Cb(u,o.middle_flow["main_block_"+c])}),u=Ii(u,o.exit_flow.reduction_block),u=Me(Et(u,o.exit_flow.separable_conv,[1,1])),u})},t.prototype.forward=function(e){return re(this,void 0,void 0,function(){var n;return oe(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,$e(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"tiny_xception_model"},t.prototype.extractParamsFromWeigthMap=function(e){return _b(e,this._numMainBlocks)},t.prototype.extractParams=function(e){return bb(e,this._numMainBlocks)},t}(wn);function Ib(r){var t=[],e=Cn(r),n=e.extractWeights,o=e.getRemainingWeights,a=ou(n,t),i=a(512,1,"fc/age"),s=a(512,2,"fc/gender");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{fc:{age:i,gender:s}}}}function Rb(r){var t=[],e=Un(r,t);function n(a){var i=e(a+"/weights",2),s=e(a+"/bias",1);return{weights:i,bias:s}}var o={fc:{age:n("fc/age"),gender:n("fc/gender")}};return _n(r,t),{params:o,paramMappings:t}}var ba;(function(r){r.FEMALE="female",r.MALE="male"})(ba||(ba={}));var kb=function(r){he(t,r);function t(e){e===void 0&&(e=new Eb(2));var n=r.call(this,"AgeGenderNet")||this;return n._faceFeatureExtractor=e,n}return Object.defineProperty(t.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),t.prototype.runNet=function(e){var n=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return $(function(){var a=e instanceof xa?n.faceFeatureExtractor.forwardInput(e):e,i=go(a,[7,7],[2,2],"valid").as2D(a.shape[0],-1),s=Jt(i,o.fc.age).as1D(),u=Jt(i,o.fc.gender);return{age:s,gender:u}})},t.prototype.forwardInput=function(e){var n=this;return $(function(){var o=n.runNet(e),a=o.age,i=o.gender;return{age:a,gender:xn(i)}})},t.prototype.forward=function(e){return re(this,void 0,void 0,function(){var n;return oe(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,$e(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.predictAgeAndGender=function(e){return re(this,void 0,void 0,function(){var n,o,a,i,s,u,c=this;return oe(this,function(l){switch(l.label){case 0:return[4,$e(e)];case 1:return n=l.sent(),[4,this.forwardInput(n)];case 2:return o=l.sent(),a=Ge(o.age),i=Ge(o.gender),s=a.map(function(f,h){return{ageTensor:f,genderTensor:i[h]}}),[4,Promise.all(s.map(function(f){var h=f.ageTensor,d=f.genderTensor;return re(c,void 0,void 0,function(){var p,m,v,g,x;return oe(this,function(w){switch(w.label){case 0:return[4,h.data()];case 1:return p=w.sent()[0],[4,d.data()];case 2:return m=w.sent()[0],v=m>.5,g=v?ba.MALE:ba.FEMALE,x=v?m:1-m,h.dispose(),d.dispose(),[2,{age:p,gender:g,genderProbability:x}]}})})}))];case 3:return u=l.sent(),o.age.dispose(),o.gender.dispose(),[2,n.isBatchInput?u:u[0]]}})})},t.prototype.getDefaultModelName=function(){return"age_gender_model"},t.prototype.dispose=function(e){e===void 0&&(e=!0),this.faceFeatureExtractor.dispose(e),r.prototype.dispose.call(this,e)},t.prototype.loadClassifierParams=function(e){var n=this.extractClassifierParams(e),o=n.params,a=n.paramMappings;this._params=o,this._paramMappings=a},t.prototype.extractClassifierParams=function(e){return Ib(e)},t.prototype.extractParamsFromWeigthMap=function(e){var n=hh(e),o=n.featureExtractorMap,a=n.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),Rb(a)},t.prototype.extractParams=function(e){var n=1539,o=e.slice(0,e.length-n),a=e.slice(e.length-n);return this.faceFeatureExtractor.extractWeights(o),this.extractClassifierParams(a)},t}(wn),mh=function(r){he(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.postProcess=function(e,n,o){var a=o.map(function(s){var u=s.width,c=s.height,l=n/Math.max(c,u);return{width:u*l,height:c*l}}),i=a.length;return $(function(){var s=function(h,d){return Rt([en([68],h),en([68],d)],1).as2D(1,136).as1D()},u=function(h,d){var p=a[h],m=p.width,v=p.height;return d(m,v)?Math.abs(m-v)/2:0},c=function(h){return u(h,function(d,p){return d<p})},l=function(h){return u(h,function(d,p){return p<d})},f=e.mul(en([i,136],n)).sub(Rt(Array.from(Array(i),function(h,d){return s(c(d),l(d))}))).div(Rt(Array.from(Array(i),function(h,d){return s(a[d].width,a[d].height)})));return f})},t.prototype.forwardInput=function(e){var n=this;return $(function(){var o=n.runNet(e);return n.postProcess(o,e.inputSize,e.inputDimensions.map(function(a){var i=a[0],s=a[1];return{height:i,width:s}}))})},t.prototype.forward=function(e){return re(this,void 0,void 0,function(){var n;return oe(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,$e(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.detectLandmarks=function(e){return re(this,void 0,void 0,function(){var n,o,a,i=this;return oe(this,function(s){switch(s.label){case 0:return[4,$e(e)];case 1:return n=s.sent(),o=$(function(){return Ge(i.forwardInput(n))}),[4,Promise.all(o.map(function(u,c){return re(i,void 0,void 0,function(){var l,f,h,d,p;return oe(this,function(m){switch(m.label){case 0:return h=(f=Array).from,[4,u.data()];case 1:return l=h.apply(f,[m.sent()]),d=l.filter(function(v,g){return Dc(g)}),p=l.filter(function(v,g){return!Dc(g)}),[2,new Qf(Array(68).fill(0).map(function(v,g){return new Ee(d[g],p[g])}),{height:n.getInputHeight(c),width:n.getInputWidth(c)})]}})})}))];case 2:return a=s.sent(),o.forEach(function(u){return u.dispose()}),[2,n.isBatchInput?a:a[0]]}})})},t.prototype.getClassifierChannelsOut=function(){return 136},t}(dh),gh=function(r){he(t,r);function t(e){return e===void 0&&(e=new fh),r.call(this,"FaceLandmark68Net",e)||this}return t.prototype.getDefaultModelName=function(){return"face_landmark_68_model"},t.prototype.getClassifierChannelsIn=function(){return 256},t}(mh);function Sb(r){var t=[],e=lh(r,t).extractDenseBlock3Params,n={dense0:e("dense0",!0),dense1:e("dense1"),dense2:e("dense2")};return _n(r,t),{params:n,paramMappings:t}}function Db(r){var t=[],e=Cn(r),n=e.extractWeights,o=e.getRemainingWeights,a=uh(n,t).extractDenseBlock3Params,i=a(3,32,"dense0",!0),s=a(32,64,"dense1"),u=a(64,128,"dense2");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{dense0:i,dense1:s,dense2:u}}}var Ab=function(r){he(t,r);function t(){return r.call(this,"TinyFaceFeatureExtractor")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("TinyFaceFeatureExtractor - load model before inference");return $(function(){var o=e.toBatchTensor(112,!0),a=[122.782,117.001,104.298],i=xo(o,a).div(q(255)),s=Ei(i,n.dense0,!0);return s=Ei(s,n.dense1),s=Ei(s,n.dense2),s=go(s,[14,14],[2,2],"valid"),s})},t.prototype.forward=function(e){return re(this,void 0,void 0,function(){var n;return oe(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,$e(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"face_feature_extractor_tiny_model"},t.prototype.extractParamsFromWeigthMap=function(e){return Sb(e)},t.prototype.extractParams=function(e){return Db(e)},t}(wn),Tb=function(r){he(t,r);function t(e){return e===void 0&&(e=new Ab),r.call(this,"FaceLandmark68TinyNet",e)||this}return t.prototype.getDefaultModelName=function(){return"face_landmark_68_tiny_model"},t.prototype.getClassifierChannelsIn=function(){return 128},t}(mh);(function(r){he(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t})(gh);function Nb(r,t){return ye(ot(r,t.weights),t.biases)}function uu(r,t,e,n,o){o===void 0&&(o="same");var a=t.conv,i=a.filters,s=a.bias,u=Pt(r,i,e,o);return u=ye(u,s),u=Nb(u,t.scale),n?Me(u):u}function Fb(r,t){return uu(r,t,[1,1],!0)}function yh(r,t){return uu(r,t,[1,1],!1)}function xh(r,t){return uu(r,t,[2,2],!0,"valid")}function Pb(r,t){function e(s,u,c){var l=r(s),f=l.length/(u*c*c);if(Vx(f))throw new Error("depth has to be an integer: "+f+", weights.length: "+l.length+", numFilters: "+u+", filterSize: "+c);return $(function(){return Ln(ft(l,[u,f,c,c]),[2,3,1,0])})}function n(s,u,c,l){var f=e(s,u,c),h=We(r(u));return t.push({paramPath:l+"/filters"},{paramPath:l+"/bias"}),{filters:f,bias:h}}function o(s,u){var c=We(r(s)),l=We(r(s));return t.push({paramPath:u+"/weights"},{paramPath:u+"/biases"}),{weights:c,biases:l}}function a(s,u,c,l){var f=n(s,u,c,l+"/conv"),h=o(u,l+"/scale");return{conv:f,scale:h}}function i(s,u,c,l,f){f===void 0&&(f=!1);var h=a((f?.5:1)*s,u,c,l+"/conv1"),d=a(s,u,c,l+"/conv2");return{conv1:h,conv2:d}}return{extractConvLayerParams:a,extractResidualLayerParams:i}}function Mb(r){var t=Cn(r),e=t.extractWeights,n=t.getRemainingWeights,o=[],a=Pb(e,o),i=a.extractConvLayerParams,s=a.extractResidualLayerParams,u=i(4704,32,7,"conv32_down"),c=s(9216,32,3,"conv32_1"),l=s(9216,32,3,"conv32_2"),f=s(9216,32,3,"conv32_3"),h=s(36864,64,3,"conv64_down",!0),d=s(36864,64,3,"conv64_1"),p=s(36864,64,3,"conv64_2"),m=s(36864,64,3,"conv64_3"),v=s(147456,128,3,"conv128_down",!0),g=s(147456,128,3,"conv128_1"),x=s(147456,128,3,"conv128_2"),w=s(589824,256,3,"conv256_down",!0),y=s(589824,256,3,"conv256_1"),b=s(589824,256,3,"conv256_2"),_=s(589824,256,3,"conv256_down_out"),E=$(function(){return Ln(Fn(e(256*128),[128,256]),[1,0])});if(o.push({paramPath:"fc"}),n().length!==0)throw new Error("weights remaing after extract: "+n().length);var I={conv32_down:u,conv32_1:c,conv32_2:l,conv32_3:f,conv64_down:h,conv64_1:d,conv64_2:p,conv64_3:m,conv128_down:v,conv128_1:g,conv128_2:x,conv256_down:w,conv256_1:y,conv256_2:b,conv256_down_out:_,fc:E};return{params:I,paramMappings:o}}function Ob(r,t){var e=Un(r,t);function n(i){var s=e(i+"/scale/weights",1),u=e(i+"/scale/biases",1);return{weights:s,biases:u}}function o(i){var s=e(i+"/conv/filters",4),u=e(i+"/conv/bias",1),c=n(i);return{conv:{filters:s,bias:u},scale:c}}function a(i){return{conv1:o(i+"/conv1"),conv2:o(i+"/conv2")}}return{extractConvLayerParams:o,extractResidualLayerParams:a}}function Bb(r){var t=[],e=Ob(r,t),n=e.extractConvLayerParams,o=e.extractResidualLayerParams,a=n("conv32_down"),i=o("conv32_1"),s=o("conv32_2"),u=o("conv32_3"),c=o("conv64_down"),l=o("conv64_1"),f=o("conv64_2"),h=o("conv64_3"),d=o("conv128_down"),p=o("conv128_1"),m=o("conv128_2"),v=o("conv256_down"),g=o("conv256_1"),x=o("conv256_2"),w=o("conv256_down_out"),y=r.fc;if(t.push({originalPath:"fc",paramPath:"fc"}),!Ux(y))throw new Error("expected weightMap[fc] to be a Tensor2D, instead have "+y);var b={conv32_down:a,conv32_1:i,conv32_2:s,conv32_3:u,conv64_down:c,conv64_1:l,conv64_2:f,conv64_3:h,conv128_down:d,conv128_1:p,conv128_2:m,conv256_down:v,conv256_1:g,conv256_2:x,conv256_down_out:w,fc:y};return _n(r,t),{params:b,paramMappings:t}}function Ht(r,t){var e=Fb(r,t.conv1);return e=yh(e,t.conv2),e=ye(e,r),e=Me(e),e}function Mo(r,t){var e=xh(r,t.conv1);e=yh(e,t.conv2);var n=go(r,2,2,"valid"),o=Ne(n.shape),a=n.shape[3]!==e.shape[3],i=n.shape[1]!==e.shape[1]||n.shape[2]!==e.shape[2];if(i){var s=Yr(e.shape);s[1]=1;var u=Ne(s);e=Ve([e,u],1);var c=Yr(e.shape);c[2]=1;var l=Ne(c);e=Ve([e,l],2)}return n=a?Ve([n,o],3):n,e=ye(n,e),e=Me(e),e}var Lb=function(r){he(t,r);function t(){return r.call(this,"FaceRecognitionNet")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("FaceRecognitionNet - load model before inference");return $(function(){var o=e.toBatchTensor(150,!0).toFloat(),a=[122.782,117.001,104.298],i=xo(o,a).div(q(256)),s=xh(i,n.conv32_down);s=Ke(s,3,2,"valid"),s=Ht(s,n.conv32_1),s=Ht(s,n.conv32_2),s=Ht(s,n.conv32_3),s=Mo(s,n.conv64_down),s=Ht(s,n.conv64_1),s=Ht(s,n.conv64_2),s=Ht(s,n.conv64_3),s=Mo(s,n.conv128_down),s=Ht(s,n.conv128_1),s=Ht(s,n.conv128_2),s=Mo(s,n.conv256_down),s=Ht(s,n.conv256_1),s=Ht(s,n.conv256_2),s=Mo(s,n.conv256_down_out);var u=s.mean([1,2]),c=Ma(u,n.fc);return c})},t.prototype.forward=function(e){return re(this,void 0,void 0,function(){var n;return oe(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,$e(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.computeFaceDescriptor=function(e){return re(this,void 0,void 0,function(){var n,o,a,i=this;return oe(this,function(s){switch(s.label){case 0:return[4,$e(e)];case 1:return n=s.sent(),o=$(function(){return Ge(i.forwardInput(n))}),[4,Promise.all(o.map(function(u){return u.data()}))];case 2:return a=s.sent(),o.forEach(function(u){return u.dispose()}),[2,n.isBatchInput?a:a[0]]}})})},t.prototype.getDefaultModelName=function(){return"face_recognition_model"},t.prototype.extractParamsFromWeigthMap=function(e){return Bb(e)},t.prototype.extractParams=function(e){return Mb(e)},t}(wn);function bh(r,t){var e={descriptor:t};return Object.assign({},r,e)}function wh(r,t){var e={age:t};return Object.assign({},r,e)}function _h(r,t,e){var n={gender:t,genderProbability:e};return Object.assign({},r,n)}var Ch=function(){function r(t){var e=t===void 0?{}:t,n=e.minFaceSize,o=e.scaleFactor,a=e.maxNumScales,i=e.scoreThresholds,s=e.scaleSteps;if(this._name="MtcnnOptions",this._minFaceSize=n||20,this._scaleFactor=o||.709,this._maxNumScales=a||10,this._scoreThresholds=i||[.6,.7,.7],this._scaleSteps=s,typeof this._minFaceSize!="number"||this._minFaceSize<0)throw new Error(this._name+" - expected minFaceSize to be a number > 0");if(typeof this._scaleFactor!="number"||this._scaleFactor<=0||this._scaleFactor>=1)throw new Error(this._name+" - expected scaleFactor to be a number between 0 and 1");if(typeof this._maxNumScales!="number"||this._maxNumScales<0)throw new Error(this._name+" - expected maxNumScales to be a number > 0");if(!Array.isArray(this._scoreThresholds)||this._scoreThresholds.length!==3||this._scoreThresholds.some(function(u){return typeof u!="number"}))throw new Error(this._name+" - expected scoreThresholds to be an array of numbers of length 3");if(this._scaleSteps&&(!Array.isArray(this._scaleSteps)||this._scaleSteps.some(function(u){return typeof u!="number"})))throw new Error(this._name+" - expected scaleSteps to be an array of numbers")}return Object.defineProperty(r.prototype,"minFaceSize",{get:function(){return this._minFaceSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scaleFactor",{get:function(){return this._scaleFactor},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"maxNumScales",{get:function(){return this._maxNumScales},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scoreThresholds",{get:function(){return this._scoreThresholds},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scaleSteps",{get:function(){return this._scaleSteps},enumerable:!0,configurable:!0}),r}();function Wb(r,t){function e(u,c){var l=ft(r(9*u),[3,3,u,1]),f=We(r(u)),h=We(r(u)),d=We(r(u)),p=We(r(u));return t.push({paramPath:c+"/filters"},{paramPath:c+"/batch_norm_scale"},{paramPath:c+"/batch_norm_offset"},{paramPath:c+"/batch_norm_mean"},{paramPath:c+"/batch_norm_variance"}),{filters:l,batch_norm_scale:f,batch_norm_offset:h,batch_norm_mean:d,batch_norm_variance:p}}function n(u,c,l,f,h){var d=ft(r(u*c*l*l),[l,l,u,c]),p=We(r(c));return t.push({paramPath:f+"/filters"},{paramPath:f+"/"+(h?"batch_norm_offset":"bias")}),{filters:d,bias:p}}function o(u,c,l,f){var h=n(u,c,l,f,!0),d=h.filters,p=h.bias;return{filters:d,batch_norm_offset:p}}function a(u,c,l){var f=e(u,l+"/depthwise_conv"),h=o(u,c,1,l+"/pointwise_conv");return{depthwise_conv:f,pointwise_conv:h}}function i(){var u=o(3,32,3,"mobilenetv1/conv_0"),c=a(32,64,"mobilenetv1/conv_1"),l=a(64,128,"mobilenetv1/conv_2"),f=a(128,128,"mobilenetv1/conv_3"),h=a(128,256,"mobilenetv1/conv_4"),d=a(256,256,"mobilenetv1/conv_5"),p=a(256,512,"mobilenetv1/conv_6"),m=a(512,512,"mobilenetv1/conv_7"),v=a(512,512,"mobilenetv1/conv_8"),g=a(512,512,"mobilenetv1/conv_9"),x=a(512,512,"mobilenetv1/conv_10"),w=a(512,512,"mobilenetv1/conv_11"),y=a(512,1024,"mobilenetv1/conv_12"),b=a(1024,1024,"mobilenetv1/conv_13");return{conv_0:u,conv_1:c,conv_2:l,conv_3:f,conv_4:h,conv_5:d,conv_6:p,conv_7:m,conv_8:v,conv_9:g,conv_10:x,conv_11:w,conv_12:y,conv_13:b}}function s(){var u=o(1024,256,1,"prediction_layer/conv_0"),c=o(256,512,3,"prediction_layer/conv_1"),l=o(512,128,1,"prediction_layer/conv_2"),f=o(128,256,3,"prediction_layer/conv_3"),h=o(256,128,1,"prediction_layer/conv_4"),d=o(128,256,3,"prediction_layer/conv_5"),p=o(256,64,1,"prediction_layer/conv_6"),m=o(64,128,3,"prediction_layer/conv_7"),v=n(512,12,1,"prediction_layer/box_predictor_0/box_encoding_predictor"),g=n(512,9,1,"prediction_layer/box_predictor_0/class_predictor"),x=n(1024,24,1,"prediction_layer/box_predictor_1/box_encoding_predictor"),w=n(1024,18,1,"prediction_layer/box_predictor_1/class_predictor"),y=n(512,24,1,"prediction_layer/box_predictor_2/box_encoding_predictor"),b=n(512,18,1,"prediction_layer/box_predictor_2/class_predictor"),_=n(256,24,1,"prediction_layer/box_predictor_3/box_encoding_predictor"),E=n(256,18,1,"prediction_layer/box_predictor_3/class_predictor"),I=n(256,24,1,"prediction_layer/box_predictor_4/box_encoding_predictor"),R=n(256,18,1,"prediction_layer/box_predictor_4/class_predictor"),k=n(128,24,1,"prediction_layer/box_predictor_5/box_encoding_predictor"),T=n(128,18,1,"prediction_layer/box_predictor_5/class_predictor"),A={box_encoding_predictor:v,class_predictor:g},B={box_encoding_predictor:x,class_predictor:w},M={box_encoding_predictor:y,class_predictor:b},O={box_encoding_predictor:_,class_predictor:E},U={box_encoding_predictor:I,class_predictor:R},z={box_encoding_predictor:k,class_predictor:T};return{conv_0:u,conv_1:c,conv_2:l,conv_3:f,conv_4:h,conv_5:d,conv_6:p,conv_7:m,box_predictor_0:A,box_predictor_1:B,box_predictor_2:M,box_predictor_3:O,box_predictor_4:U,box_predictor_5:z}}return{extractMobilenetV1Params:i,extractPredictionLayerParams:s}}function zb(r){var t=[],e=Cn(r),n=e.extractWeights,o=e.getRemainingWeights,a=Wb(n,t),i=a.extractMobilenetV1Params,s=a.extractPredictionLayerParams,u=i(),c=s(),l=Cs(n(5118*4),[1,5118,4]),f={extra_dim:l};if(t.push({paramPath:"output_layer/extra_dim"}),o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{params:{mobilenetv1:u,prediction_layer:c,output_layer:f},paramMappings:t}}function Ub(r,t){var e=Un(r,t);function n(c,l,f){var h=e(c+"/Conv2d_"+l+"_pointwise/weights",4,f+"/filters"),d=e(c+"/Conv2d_"+l+"_pointwise/convolution_bn_offset",1,f+"/batch_norm_offset");return{filters:h,batch_norm_offset:d}}function o(c){var l="mobilenetv1/conv_"+c,f="MobilenetV1/Conv2d_"+c+"_depthwise",h=l+"/depthwise_conv",d=l+"/pointwise_conv",p=e(f+"/depthwise_weights",4,h+"/filters"),m=e(f+"/BatchNorm/gamma",1,h+"/batch_norm_scale"),v=e(f+"/BatchNorm/beta",1,h+"/batch_norm_offset"),g=e(f+"/BatchNorm/moving_mean",1,h+"/batch_norm_mean"),x=e(f+"/BatchNorm/moving_variance",1,h+"/batch_norm_variance");return{depthwise_conv:{filters:p,batch_norm_scale:m,batch_norm_offset:v,batch_norm_mean:g,batch_norm_variance:x},pointwise_conv:n("MobilenetV1",c,d)}}function a(){return{conv_0:n("MobilenetV1",0,"mobilenetv1/conv_0"),conv_1:o(1),conv_2:o(2),conv_3:o(3),conv_4:o(4),conv_5:o(5),conv_6:o(6),conv_7:o(7),conv_8:o(8),conv_9:o(9),conv_10:o(10),conv_11:o(11),conv_12:o(12),conv_13:o(13)}}function i(c,l){var f=e(c+"/weights",4,l+"/filters"),h=e(c+"/biases",1,l+"/bias");return{filters:f,bias:h}}function s(c){var l=i("Prediction/BoxPredictor_"+c+"/BoxEncodingPredictor","prediction_layer/box_predictor_"+c+"/box_encoding_predictor"),f=i("Prediction/BoxPredictor_"+c+"/ClassPredictor","prediction_layer/box_predictor_"+c+"/class_predictor");return{box_encoding_predictor:l,class_predictor:f}}function u(){return{conv_0:n("Prediction",0,"prediction_layer/conv_0"),conv_1:n("Prediction",1,"prediction_layer/conv_1"),conv_2:n("Prediction",2,"prediction_layer/conv_2"),conv_3:n("Prediction",3,"prediction_layer/conv_3"),conv_4:n("Prediction",4,"prediction_layer/conv_4"),conv_5:n("Prediction",5,"prediction_layer/conv_5"),conv_6:n("Prediction",6,"prediction_layer/conv_6"),conv_7:n("Prediction",7,"prediction_layer/conv_7"),box_predictor_0:s(0),box_predictor_1:s(1),box_predictor_2:s(2),box_predictor_3:s(3),box_predictor_4:s(4),box_predictor_5:s(5)}}return{extractMobilenetV1Params:a,extractPredictionLayerParams:u}}function Vb(r){var t=[],e=Ub(r,t),n=e.extractMobilenetV1Params,o=e.extractPredictionLayerParams,a=r["Output/extra_dim"];if(t.push({originalPath:"Output/extra_dim",paramPath:"output_layer/extra_dim"}),!Wa(a))throw new Error("expected weightMap['Output/extra_dim'] to be a Tensor3D, instead have "+a);var i={mobilenetv1:n(),prediction_layer:o(),output_layer:{extra_dim:a}};return _n(r,t),{params:i,paramMappings:t}}function jt(r,t,e){return $(function(){var n=Pt(r,t.filters,e,"same");return n=ye(n,t.batch_norm_offset),Ps(n,0,6)})}var Gb=.0010000000474974513;function Hb(r,t,e){return $(function(){var n=Pa(r,t.filters,e,"same");return n=mf(n,t.batch_norm_mean,t.batch_norm_variance,t.batch_norm_offset,t.batch_norm_scale,Gb),Ps(n,0,6)})}function jb(r){return[2,4,6,12].some(function(t){return t===r})?[2,2]:[1,1]}function qb(r,t){return $(function(){var e=null,n=jt(r,t.conv_0,[2,2]),o=[t.conv_1,t.conv_2,t.conv_3,t.conv_4,t.conv_5,t.conv_6,t.conv_7,t.conv_8,t.conv_9,t.conv_10,t.conv_11,t.conv_12,t.conv_13];if(o.forEach(function(a,i){var s=i+1,u=jb(s);n=Hb(n,a.depthwise_conv,u),n=jt(n,a.pointwise_conv,[1,1]),s===11&&(e=n)}),e===null)throw new Error("mobileNetV1 - output of conv layer 11 is null");return{out:n,conv11:e}})}function Kb(r,t,e,n,o){var a=r.shape[0],i=Math.min(e,a),s=t.map(function(l,f){return{score:l,boxIndex:f}}).filter(function(l){return l.score>o}).sort(function(l,f){return f.score-l.score}),u=function(l){return l<=n?1:0},c=[];return s.forEach(function(l){if(!(c.length>=i)){for(var f=l.score,h=c.length-1;h>=0;--h){var d=Xb(r,l.boxIndex,c[h]);if(d!==0&&(l.score*=u(d),l.score<=o))break}f===l.score&&c.push(l.boxIndex)}}),c}function Xb(r,t,e){var n=r.arraySync(),o=Math.min(n[t][0],n[t][2]),a=Math.min(n[t][1],n[t][3]),i=Math.max(n[t][0],n[t][2]),s=Math.max(n[t][1],n[t][3]),u=Math.min(n[e][0],n[e][2]),c=Math.min(n[e][1],n[e][3]),l=Math.max(n[e][0],n[e][2]),f=Math.max(n[e][1],n[e][3]),h=(i-o)*(s-a),d=(l-u)*(f-c);if(h<=0||d<=0)return 0;var p=Math.max(o,u),m=Math.max(a,c),v=Math.min(i,l),g=Math.min(s,f),x=Math.max(v-p,0)*Math.max(g-m,0);return x/(h+d-x)}function $b(r){var t=Ge(Ln(r,[1,0])),e=[je(t[2],t[0]),je(t[3],t[1])],n=[ye(t[0],Ot(e[0],q(2))),ye(t[1],Ot(e[1],q(2)))];return{sizes:e,centers:n}}function Yb(r,t){var e=$b(r),n=e.sizes,o=e.centers,a=Ge(Ln(t,[1,0])),i=Ot(ot(qi(Ot(a[2],q(5))),n[0]),q(2)),s=ye(ot(Ot(a[0],q(10)),n[0]),o[0]),u=Ot(ot(qi(Ot(a[3],q(5))),n[1]),q(2)),c=ye(ot(Ot(a[1],q(10)),n[1]),o[1]);return Ln(Rt([je(s,i),je(c,u),ye(s,i),ye(c,u)]),[1,0])}function Jb(r,t,e){return $(function(){var n=r.shape[0],o=Yb(Bt(Cr(e.extra_dim,[n,1,1]),[-1,4]),Bt(r,[-1,4]));o=Bt(o,[n,o.shape[0]/n,4]);var a=hf(rn(t,[0,0,1],[-1,-1,-1])),i=rn(a,[0,0,0],[-1,-1,1]);i=Bt(i,[n,i.shape[1]]);var s=Ge(o),u=Ge(i);return{boxes:s,scores:u}})}function mr(r,t){return $(function(){var e=r.shape[0],n=Bt(Lt(r,t.box_encoding_predictor),[e,-1,1,4]),o=Bt(Lt(r,t.class_predictor),[e,-1,3]);return{boxPredictionEncoding:n,classPrediction:o}})}function Qb(r,t,e){return $(function(){var n=jt(r,e.conv_0,[1,1]),o=jt(n,e.conv_1,[2,2]),a=jt(o,e.conv_2,[1,1]),i=jt(a,e.conv_3,[2,2]),s=jt(i,e.conv_4,[1,1]),u=jt(s,e.conv_5,[2,2]),c=jt(u,e.conv_6,[1,1]),l=jt(c,e.conv_7,[2,2]),f=mr(t,e.box_predictor_0),h=mr(r,e.box_predictor_1),d=mr(o,e.box_predictor_2),p=mr(i,e.box_predictor_3),m=mr(u,e.box_predictor_4),v=mr(l,e.box_predictor_5),g=Ve([f.boxPredictionEncoding,h.boxPredictionEncoding,d.boxPredictionEncoding,p.boxPredictionEncoding,m.boxPredictionEncoding,v.boxPredictionEncoding],1),x=Ve([f.classPrediction,h.classPrediction,d.classPrediction,p.classPrediction,m.classPrediction,v.classPrediction],1);return{boxPredictions:g,classPredictions:x}})}var bo=function(){function r(t){var e=t===void 0?{}:t,n=e.minConfidence,o=e.maxResults;if(this._name="SsdMobilenetv1Options",this._minConfidence=n||.5,this._maxResults=o||100,typeof this._minConfidence!="number"||this._minConfidence<=0||this._minConfidence>=1)throw new Error(this._name+" - expected minConfidence to be a number between 0 and 1");if(typeof this._maxResults!="number")throw new Error(this._name+" - expected maxResults to be a number")}return Object.defineProperty(r.prototype,"minConfidence",{get:function(){return this._minConfidence},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"maxResults",{get:function(){return this._maxResults},enumerable:!0,configurable:!0}),r}(),Eh=function(r){he(t,r);function t(){return r.call(this,"SsdMobilenetv1")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("SsdMobilenetv1 - load model before inference");return $(function(){var o=e.toBatchTensor(512,!1).toFloat(),a=je(ot(o,q(.007843137718737125)),q(1)),i=qb(a,n.mobilenetv1),s=Qb(i.out,i.conv11,n.prediction_layer),u=s.boxPredictions,c=s.classPredictions;return Jb(u,c,n.output_layer)})},t.prototype.forward=function(e){return re(this,void 0,void 0,function(){var n;return oe(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,$e(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.locateFaces=function(e,n){return n===void 0&&(n={}),re(this,void 0,void 0,function(){var o,a,i,s,u,c,l,f,h,d,p,m,v,g,x,w,y,b,_,E,I;return oe(this,function(R){switch(R.label){case 0:return o=new bo(n),a=o.maxResults,i=o.minConfidence,[4,$e(e)];case 1:for(s=R.sent(),u=this.forwardInput(s),c=u.boxes,l=u.scores,f=c[0],h=l[0],d=1;d<c.length;d++)c[d].dispose(),l[d].dispose();return v=(m=Array).from,[4,h.data()];case 2:return p=v.apply(m,[R.sent()]),g=.5,x=Kb(f,p,a,g,i),w=s.getReshapedInputDimensions(0),y=s.inputSize,b=y/w.width,_=y/w.height,E=f.arraySync(),I=x.map(function(k){var T=[Math.max(0,E[k][0]),Math.min(1,E[k][2])].map(function(z){return z*_}),A=T[0],B=T[1],M=[Math.max(0,E[k][1]),Math.min(1,E[k][3])].map(function(z){return z*b}),O=M[0],U=M[1];return new kt(p[k],new Js(O,A,U-O,B-A),{height:s.getInputHeight(0),width:s.getInputWidth(0)})}),f.dispose(),h.dispose(),[2,I]}})})},t.prototype.getDefaultModelName=function(){return"ssd_mobilenetv1_model"},t.prototype.extractParamsFromWeigthMap=function(e){return Vb(e)},t.prototype.extractParams=function(e){return zb(e)},t}(wn);(function(r){he(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t})(Eh);var Zb=.4,e1=[new Ee(.738768,.874946),new Ee(2.42204,2.65704),new Ee(4.30971,7.04493),new Ee(10.246,4.59428),new Ee(12.6868,11.8741)],t1=[new Ee(1.603231,2.094468),new Ee(6.041143,7.080126),new Ee(2.882459,3.518061),new Ee(4.266906,5.178857),new Ee(9.041765,10.66308)],n1=[117.001,114.697,97.404],r1="tiny_yolov2_model",o1="tiny_yolov2_separable_conv_model",Oo=function(r){return typeof r=="number"};function a1(r){if(!r)throw new Error("invalid config: "+r);if(typeof r.withSeparableConvs!="boolean")throw new Error("config.withSeparableConvs has to be a boolean, have: "+r.withSeparableConvs);if(!Oo(r.iouThreshold)||r.iouThreshold<0||r.iouThreshold>1)throw new Error("config.iouThreshold has to be a number between [0, 1], have: "+r.iouThreshold);if(!Array.isArray(r.classes)||!r.classes.length||!r.classes.every(function(t){return typeof t=="string"}))throw new Error("config.classes has to be an array class names: string[], have: "+JSON.stringify(r.classes));if(!Array.isArray(r.anchors)||!r.anchors.length||!r.anchors.map(function(t){return t||{}}).every(function(t){return Oo(t.x)&&Oo(t.y)}))throw new Error("config.anchors has to be an array of { x: number, y: number }, have: "+JSON.stringify(r.anchors));if(r.meanRgb&&(!Array.isArray(r.meanRgb)||r.meanRgb.length!==3||!r.meanRgb.every(Oo)))throw new Error("config.meanRgb has to be an array of shape [number, number, number], have: "+JSON.stringify(r.meanRgb))}function cu(r){return $(function(){var t=ot(r,q(.10000000149011612));return ye(Me(je(r,t)),t)})}function Rn(r,t){return $(function(){var e=ar(r,[[0,0],[1,1],[1,1],[0,0]]);return e=Pt(e,t.conv.filters,[1,1],"valid"),e=je(e,t.bn.sub),e=ot(e,t.bn.truediv),e=ye(e,t.conv.bias),cu(e)})}function kn(r,t){return $(function(){var e=ar(r,[[0,0],[1,1],[1,1],[0,0]]);return e=Ls(e,t.depthwise_filter,t.pointwise_filter,[1,1],"valid"),e=ye(e,t.bias),cu(e)})}function i1(r,t){var e=Va(r,t);function n(i,s){var u=We(r(i)),c=We(r(i));return t.push({paramPath:s+"/sub"},{paramPath:s+"/truediv"}),{sub:u,truediv:c}}function o(i,s,u){var c=e(i,s,3,u+"/conv"),l=n(s,u+"/bn");return{conv:c,bn:l}}var a=au(r,t);return{extractConvParams:e,extractConvWithBatchNormParams:o,extractSeparableConvParams:a}}function s1(r,t,e,n){var o=Cn(r),a=o.extractWeights,i=o.getRemainingWeights,s=[],u=i1(a,s),c=u.extractConvParams,l=u.extractConvWithBatchNormParams,f=u.extractSeparableConvParams,h;if(t.withSeparableConvs){var d=n[0],p=n[1],m=n[2],v=n[3],g=n[4],x=n[5],w=n[6],y=n[7],b=n[8],_=t.isFirstLayerConv2d?c(d,p,3,"conv0"):f(d,p,"conv0"),E=f(p,m,"conv1"),I=f(m,v,"conv2"),R=f(v,g,"conv3"),k=f(g,x,"conv4"),T=f(x,w,"conv5"),A=y?f(w,y,"conv6"):void 0,B=b?f(y,b,"conv7"):void 0,M=c(b||y||w,5*e,1,"conv8");h={conv0:_,conv1:E,conv2:I,conv3:R,conv4:k,conv5:T,conv6:A,conv7:B,conv8:M}}else{var d=n[0],p=n[1],m=n[2],v=n[3],g=n[4],x=n[5],w=n[6],y=n[7],b=n[8],_=l(d,p,"conv0"),E=l(p,m,"conv1"),I=l(m,v,"conv2"),R=l(v,g,"conv3"),k=l(g,x,"conv4"),T=l(x,w,"conv5"),A=l(w,y,"conv6"),B=l(y,b,"conv7"),M=c(b,5*e,1,"conv8");h={conv0:_,conv1:E,conv2:I,conv3:R,conv4:k,conv5:T,conv6:A,conv7:B,conv8:M}}if(i().length!==0)throw new Error("weights remaing after extract: "+i().length);return{params:h,paramMappings:s}}function u1(r,t){var e=Un(r,t);function n(s){var u=e(s+"/sub",1),c=e(s+"/truediv",1);return{sub:u,truediv:c}}function o(s){var u=e(s+"/filters",4),c=e(s+"/bias",1);return{filters:u,bias:c}}function a(s){var u=o(s+"/conv"),c=n(s+"/bn");return{conv:u,bn:c}}var i=iu(e);return{extractConvParams:o,extractConvWithBatchNormParams:a,extractSeparableConvParams:i}}function c1(r,t){var e=[],n=u1(r,e),o=n.extractConvParams,a=n.extractConvWithBatchNormParams,i=n.extractSeparableConvParams,s;if(t.withSeparableConvs){var u=t.filterSizes&&t.filterSizes.length||9;s={conv0:t.isFirstLayerConv2d?o("conv0"):i("conv0"),conv1:i("conv1"),conv2:i("conv2"),conv3:i("conv3"),conv4:i("conv4"),conv5:i("conv5"),conv6:u>7?i("conv6"):void 0,conv7:u>8?i("conv7"):void 0,conv8:o("conv8")}}else s={conv0:a("conv0"),conv1:a("conv1"),conv2:a("conv2"),conv3:a("conv3"),conv4:a("conv4"),conv5:a("conv5"),conv6:a("conv6"),conv7:a("conv7"),conv8:o("conv8")};return _n(r,e),{params:s,paramMappings:e}}var Oc;(function(r){r[r.XS=224]="XS",r[r.SM=320]="SM",r[r.MD=416]="MD",r[r.LG=608]="LG"})(Oc||(Oc={}));var lu=function(){function r(t){var e=t===void 0?{}:t,n=e.inputSize,o=e.scoreThreshold;if(this._name="TinyYolov2Options",this._inputSize=n||416,this._scoreThreshold=o||.5,typeof this._inputSize!="number"||this._inputSize%32!==0)throw new Error(this._name+" - expected inputSize to be a number divisible by 32");if(typeof this._scoreThreshold!="number"||this._scoreThreshold<=0||this._scoreThreshold>=1)throw new Error(this._name+" - expected scoreThreshold to be a number between 0 and 1")}return Object.defineProperty(r.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scoreThreshold",{get:function(){return this._scoreThreshold},enumerable:!0,configurable:!0}),r}(),Ih=function(r){he(t,r);function t(e){var n=r.call(this,"TinyYolov2")||this;return a1(e),n._config=e,n}return Object.defineProperty(t.prototype,"config",{get:function(){return this._config},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"withClassScores",{get:function(){return this.config.withClassScores||this.config.classes.length>1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"boxEncodingSize",{get:function(){return 5+(this.withClassScores?this.config.classes.length:0)},enumerable:!0,configurable:!0}),t.prototype.runTinyYolov2=function(e,n){var o=Rn(e,n.conv0);return o=Ke(o,[2,2],[2,2],"same"),o=Rn(o,n.conv1),o=Ke(o,[2,2],[2,2],"same"),o=Rn(o,n.conv2),o=Ke(o,[2,2],[2,2],"same"),o=Rn(o,n.conv3),o=Ke(o,[2,2],[2,2],"same"),o=Rn(o,n.conv4),o=Ke(o,[2,2],[2,2],"same"),o=Rn(o,n.conv5),o=Ke(o,[2,2],[1,1],"same"),o=Rn(o,n.conv6),o=Rn(o,n.conv7),Lt(o,n.conv8,"valid",!1)},t.prototype.runMobilenet=function(e,n){var o=this.config.isFirstLayerConv2d?cu(Lt(e,n.conv0,"valid",!1)):kn(e,n.conv0);return o=Ke(o,[2,2],[2,2],"same"),o=kn(o,n.conv1),o=Ke(o,[2,2],[2,2],"same"),o=kn(o,n.conv2),o=Ke(o,[2,2],[2,2],"same"),o=kn(o,n.conv3),o=Ke(o,[2,2],[2,2],"same"),o=kn(o,n.conv4),o=Ke(o,[2,2],[2,2],"same"),o=kn(o,n.conv5),o=Ke(o,[2,2],[1,1],"same"),o=n.conv6?kn(o,n.conv6):o,o=n.conv7?kn(o,n.conv7):o,Lt(o,n.conv8,"valid",!1)},t.prototype.forwardInput=function(e,n){var o=this,a=this.params;if(!a)throw new Error("TinyYolov2 - load model before inference");return $(function(){var i=e.toBatchTensor(n,!1).toFloat();return i=o.config.meanRgb?xo(i,o.config.meanRgb):i,i=i.div(q(256)),o.config.withSeparableConvs?o.runMobilenet(i,a):o.runTinyYolov2(i,a)})},t.prototype.forward=function(e,n){return re(this,void 0,void 0,function(){var o;return oe(this,function(a){switch(a.label){case 0:return o=this.forwardInput,[4,$e(e)];case 1:return[4,o.apply(this,[a.sent(),n])];case 2:return[2,a.sent()]}})})},t.prototype.detect=function(e,n){return n===void 0&&(n={}),re(this,void 0,void 0,function(){var o,a,i,s,u,c,l,f,h,d,p,m,v,g,x=this;return oe(this,function(w){switch(w.label){case 0:return o=new lu(n),a=o.inputSize,i=o.scoreThreshold,[4,$e(e)];case 1:return s=w.sent(),[4,this.forwardInput(s,a)];case 2:return u=w.sent(),c=$(function(){return Ge(u)[0].expandDims()}),l={width:s.getInputWidth(0),height:s.getInputHeight(0)},[4,this.extractBoxes(c,s.getReshapedInputDimensions(0),i)];case 3:return f=w.sent(),u.dispose(),c.dispose(),h=f.map(function(y){return y.box}),d=f.map(function(y){return y.score}),p=f.map(function(y){return y.classScore}),m=f.map(function(y){return x.config.classes[y.label]}),v=io(h.map(function(y){return y.rescale(a)}),d,this.config.iouThreshold,!0),g=v.map(function(y){return new Jf(d[y],p[y],m[y],h[y],l)}),[2,g]}})})},t.prototype.getDefaultModelName=function(){return""},t.prototype.extractParamsFromWeigthMap=function(e){return c1(e,this.config)},t.prototype.extractParams=function(e){var n=this.config.filterSizes||t.DEFAULT_FILTER_SIZES,o=n?n.length:void 0;if(o!==7&&o!==8&&o!==9)throw new Error("TinyYolov2 - expected 7 | 8 | 9 convolutional filters, but found "+o+" filterSizes in config");return s1(e,this.config,this.boxEncodingSize,n)},t.prototype.extractBoxes=function(e,n,o){return re(this,void 0,void 0,function(){var a,i,s,u,c,l,f,h,d,p,m,v,g,x,w,y,b,_,E,I,R,k,T,A,B,M,O,U,z,W=this;return oe(this,function(V){switch(V.label){case 0:return a=n.width,i=n.height,s=Math.max(a,i),u=s/a,c=s/i,l=e.shape[1],f=this.config.anchors.length,h=$(function(){var H=e.reshape([l,l,f,W.boxEncodingSize]),K=H.slice([0,0,0,0],[l,l,f,4]),Q=H.slice([0,0,0,4],[l,l,f,1]),ae=W.withClassScores?xn(H.slice([0,0,0,5],[l,l,f,W.config.classes.length]),3):q(0);return[K,Q,ae]}),d=h[0],p=h[1],m=h[2],v=[],[4,p.array()];case 1:return g=V.sent(),[4,d.array()];case 2:x=V.sent(),w=0,V.label=3;case 3:if(!(w<l))return[3,12];y=0,V.label=4;case 4:if(!(y<l))return[3,11];b=0,V.label=5;case 5:return b<f?(_=Ci(g[w][y][b][0]),!o||_>o?(E=(y+Ci(x[w][y][b][0]))/l*u,I=(w+Ci(x[w][y][b][1]))/l*c,R=Math.exp(x[w][y][b][2])*this.config.anchors[b].x/l*u,k=Math.exp(x[w][y][b][3])*this.config.anchors[b].y/l*c,T=E-R/2,A=I-k/2,B={row:w,col:y,anchor:b},this.withClassScores?[4,this.extractPredictedClass(m,B)]:[3,7]):[3,9]):[3,10];case 6:return z=V.sent(),[3,8];case 7:z={classScore:1,label:0},V.label=8;case 8:M=z,O=M.classScore,U=M.label,v.push(tt({box:new za(T,A,T+R,A+k),score:_,classScore:_*O,label:U},B)),V.label=9;case 9:return b++,[3,5];case 10:return y++,[3,4];case 11:return w++,[3,3];case 12:return d.dispose(),p.dispose(),m.dispose(),[2,v]}})})},t.prototype.extractPredictedClass=function(e,n){return re(this,void 0,void 0,function(){var o,a,i,s;return oe(this,function(u){switch(u.label){case 0:return o=n.row,a=n.col,i=n.anchor,[4,e.array()];case 1:return s=u.sent(),[2,Array(this.config.classes.length).fill(0).map(function(c,l){return s[o][a][i][l]}).map(function(c,l){return{classScore:c,label:l}}).reduce(function(c,l){return c.classScore>l.classScore?c:l})]}})})},t.DEFAULT_FILTER_SIZES=[3,16,32,64,128,256,512,1024,1024],t}(wn),l1=function(r){he(t,r);function t(e){e===void 0&&(e=!0);var n=this,o=Object.assign({},{withSeparableConvs:e,iouThreshold:Zb,classes:["face"]},e?{anchors:t1,meanRgb:n1}:{anchors:e1,withClassScores:!0});return n=r.call(this,o)||this,n}return Object.defineProperty(t.prototype,"withSeparableConvs",{get:function(){return this.config.withSeparableConvs},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),t.prototype.locateFaces=function(e,n){return re(this,void 0,void 0,function(){var o;return oe(this,function(a){switch(a.label){case 0:return[4,this.detect(e,n)];case 1:return o=a.sent(),[2,o.map(function(i){return new kt(i.score,i.relativeBox,{width:i.imageWidth,height:i.imageHeight})})]}})})},t.prototype.getDefaultModelName=function(){return this.withSeparableConvs?o1:r1},t.prototype.extractParamsFromWeigthMap=function(e){return r.prototype.extractParamsFromWeigthMap.call(this,e)},t}(Ih),es=function(r){he(t,r);function t(){var e=r!==null&&r.apply(this,arguments)||this;return e._name="TinyFaceDetectorOptions",e}return t}(lu),wo=function(){function r(){}return r.prototype.then=function(t){return re(this,void 0,void 0,function(){var e;return oe(this,function(n){switch(n.label){case 0:return e=t,[4,this.run()];case 1:return[2,e.apply(void 0,[n.sent()])]}})})},r.prototype.run=function(){return re(this,void 0,void 0,function(){return oe(this,function(t){throw new Error("ComposableTask - run is not implemented")})})},r}();function Ha(r,t,e,n,o){return o===void 0&&(o=function(a){var i=a.alignedRect;return i}),re(this,void 0,void 0,function(){var a,i,s,u,c;return oe(this,function(l){switch(l.label){case 0:return a=r.map(function(f){return su(f)?o(f):f.detection}),s=n,s?[3,5]:t instanceof Pe?[4,ru(t,a)]:[3,2];case 1:return u=l.sent(),[3,4];case 2:return[4,nu(t,a)];case 3:u=l.sent(),l.label=4;case 4:s=u,l.label=5;case 5:return i=s,[4,e(i)];case 6:return c=l.sent(),i.forEach(function(f){return f instanceof Pe&&f.dispose()}),[2,c]}})})}function fu(r,t,e,n,o){return re(this,void 0,void 0,function(){var a=this;return oe(this,function(i){return[2,Ha([r],t,function(s){return re(a,void 0,void 0,function(){return oe(this,function(u){return[2,e(s[0])]})})},n,o)]})})}function f1(r){return $(function(){return Rt(Ge(r,3).reverse(),3)})}var Bo=2,wa=12;function h1(r,t){var e=Va(r,t),n=ou(r,t);function o(c,l){var f=We(r(c));return t.push({paramPath:l}),f}function a(c,l,f){f===void 0&&(f=!1);var h=e(c[0],c[1],3,l+"/conv1"),d=o(c[1],l+"/prelu1_alpha"),p=e(c[1],c[2],3,l+"/conv2"),m=o(c[2],l+"/prelu2_alpha"),v=e(c[2],c[3],f?2:3,l+"/conv3"),g=o(c[3],l+"/prelu3_alpha");return{conv1:h,prelu1_alpha:d,conv2:p,prelu2_alpha:m,conv3:v,prelu3_alpha:g}}function i(){var c=a([3,10,16,32],"pnet"),l=e(32,2,1,"pnet/conv4_1"),f=e(32,4,1,"pnet/conv4_2");return tt(tt({},c),{conv4_1:l,conv4_2:f})}function s(){var c=a([3,28,48,64],"rnet",!0),l=n(576,128,"rnet/fc1"),f=o(128,"rnet/prelu4_alpha"),h=n(128,2,"rnet/fc2_1"),d=n(128,4,"rnet/fc2_2");return tt(tt({},c),{fc1:l,prelu4_alpha:f,fc2_1:h,fc2_2:d})}function u(){var c=a([3,32,64,64],"onet"),l=e(64,128,2,"onet/conv4"),f=o(128,"onet/prelu4_alpha"),h=n(1152,256,"onet/fc1"),d=o(256,"onet/prelu5_alpha"),p=n(256,2,"onet/fc2_1"),m=n(256,4,"onet/fc2_2"),v=n(256,10,"onet/fc2_3");return tt(tt({},c),{conv4:l,prelu4_alpha:f,fc1:h,prelu5_alpha:d,fc2_1:p,fc2_2:m,fc2_3:v})}return{extractPNetParams:i,extractRNetParams:s,extractONetParams:u}}function d1(r){var t=Cn(r),e=t.extractWeights,n=t.getRemainingWeights,o=[],a=h1(e,o),i=a.extractPNetParams,s=a.extractRNetParams,u=a.extractONetParams,c=i(),l=s(),f=u();if(n().length!==0)throw new Error("weights remaing after extract: "+n().length);return{params:{pnet:c,rnet:l,onet:f},paramMappings:o}}function p1(r,t){var e=Un(r,t);function n(l){var f=e(l+"/weights",4,l+"/filters"),h=e(l+"/bias",1);return{filters:f,bias:h}}function o(l){var f=e(l+"/weights",2),h=e(l+"/bias",1);return{weights:f,bias:h}}function a(l){return e(l,1)}function i(l){var f=n(l+"/conv1"),h=a(l+"/prelu1_alpha"),d=n(l+"/conv2"),p=a(l+"/prelu2_alpha"),m=n(l+"/conv3"),v=a(l+"/prelu3_alpha");return{conv1:f,prelu1_alpha:h,conv2:d,prelu2_alpha:p,conv3:m,prelu3_alpha:v}}function s(){var l=i("pnet"),f=n("pnet/conv4_1"),h=n("pnet/conv4_2");return tt(tt({},l),{conv4_1:f,conv4_2:h})}function u(){var l=i("rnet"),f=o("rnet/fc1"),h=a("rnet/prelu4_alpha"),d=o("rnet/fc2_1"),p=o("rnet/fc2_2");return tt(tt({},l),{fc1:f,prelu4_alpha:h,fc2_1:d,fc2_2:p})}function c(){var l=i("onet"),f=n("onet/conv4"),h=a("onet/prelu4_alpha"),d=o("onet/fc1"),p=a("onet/prelu5_alpha"),m=o("onet/fc2_1"),v=o("onet/fc2_2"),g=o("onet/fc2_3");return tt(tt({},l),{conv4:f,prelu4_alpha:h,fc1:d,prelu5_alpha:p,fc2_1:m,fc2_2:v,fc2_3:g})}return{extractPNetParams:s,extractRNetParams:u,extractONetParams:c}}function v1(r){var t=[],e=p1(r,t),n=e.extractPNetParams,o=e.extractRNetParams,a=e.extractONetParams,i=n(),s=o(),u=a();return _n(r,t),{params:{pnet:i,rnet:s,onet:u},paramMappings:t}}function ts(r,t){var e=t[0],n=t[1];return{height:Math.floor(e*r),width:Math.floor(n*r)}}function m1(r,t,e){for(var n=e[0],o=e[1],a=wa/r,i=[],s=Math.min(n,o)*a,u=0;s>=12;)i.push(a*Math.pow(t,u)),s=s*t,u+=1;return i}var hu=function(r){he(t,r);function t(e,n,o,a){return r.call(this,{left:e,top:n,right:o,bottom:a},!0)||this}return t}(on);function Rh(r){return $(function(){return ot(je(r,q(127.5)),q(.0078125))})}function Sr(r,t){return $(function(){return ye(Me(r),ot(t,pa(Me(pa(r)))))})}function du(r,t,e){return e===void 0&&(e=!1),$(function(){var n=Lt(r,t.conv1,"valid");return n=Sr(n,t.prelu1_alpha),n=Ke(n,e?[2,2]:[3,3],[2,2],"same"),n=Lt(n,t.conv2,"valid"),n=Sr(n,t.prelu2_alpha),n=e?n:Ke(n,[3,3],[2,2],"valid"),n=Lt(n,t.conv3,"valid"),n=Sr(n,t.prelu3_alpha),n})}function g1(r,t){return $(function(){var e=du(r,t,!0),n=Lt(e,t.conv4_1,"valid"),o=Tt(Oa(n,3),3),a=xn(je(n,o),3),i=Lt(e,t.conv4_2,"valid");return{prob:a,regions:i}})}function y1(r,t){return $(function(){var e=ts(t,r.shape.slice(1)),n=e.height,o=e.width,a=Gs.resizeBilinear(r,[n,o]),i=Rh(a);return Ln(i,[0,2,1,3])})}function x1(r,t,e,n){for(var o=[],a=r.arraySync(),i=0;i<r.shape[0];i++)for(var s=0;s<r.shape[1];s++)a[i][s]>=n&&o.push(new Ee(s,i));var u=o.map(function(c){var l=new za(Math.round((c.y*Bo+1)/e),Math.round((c.x*Bo+1)/e),Math.round((c.y*Bo+wa)/e),Math.round((c.x*Bo+wa)/e)),f=a[c.y][c.x],h=t.arraySync(),d=new hu(h[c.y][c.x][0],h[c.y][c.x][1],h[c.y][c.x][2],h[c.y][c.x][3]);return{cell:l,score:f,region:d}});return u}function b1(r,t,e,n,o){o.stage1=[];var a=t.map(function(h){return $(function(){var d={scale:h},p=y1(r,h),m=Date.now(),v=g1(p,n),g=v.prob,x=v.regions;d.pnet=Date.now()-m;var w=Ge(Ge(g,3)[1])[0],y=Ge(x)[0];return{scoresTensor:w,regionsTensor:y,scale:h,statsForScale:d}})}),i=a.map(function(h){var d=h.scoresTensor,p=h.regionsTensor,m=h.scale,v=h.statsForScale,g=x1(d,p,m,e);if(d.dispose(),p.dispose(),!g.length)return o.stage1.push(v),[];var x=Date.now(),w=io(g.map(function(y){return y.cell}),g.map(function(y){return y.score}),.5);return v.nms=Date.now()-x,v.numBoxes=w.length,o.stage1.push(v),w.map(function(y){return g[y]})}),s=i.reduce(function(h,d){return h.concat(d)},[]),u=[],c=[];if(s.length>0){var l=Date.now(),f=io(s.map(function(h){return h.cell}),s.map(function(h){return h.score}),.7);o.stage1_nms=Date.now()-l,c=f.map(function(h){return s[h].score}),u=f.map(function(h){return s[h]}).map(function(h){var d=h.cell,p=h.region;return new za(d.left+p.left*d.width,d.top+p.top*d.height,d.right+p.right*d.width,d.bottom+p.bottom*d.height).toSquare().round()})}return{boxes:u,scores:c}}function kh(r,t,e){var n=e.width,o=e.height;return re(this,void 0,void 0,function(){var a,i,s,u=this;return oe(this,function(c){switch(c.label){case 0:return a=an(r),[4,Promise.all(t.map(function(l){return re(u,void 0,void 0,function(){var f,h,d,p,m,v,g,x;return oe(this,function(w){return f=l.padAtBorders(r.height,r.width),h=f.y,d=f.ey,p=f.x,m=f.ex,v=p-1,g=h-1,x=a.getImageData(v,g,m-v,d-g),[2,at.isNodejs()?tu(x):createImageBitmap(x)]})})}))];case 1:return i=c.sent(),s=[],i.forEach(function(l){var f=Ua({width:n,height:o}),h=an(f);h.drawImage(l,0,0,n,o);for(var d=h.getImageData(0,0,n,o).data,p=[],m=0;m<d.length;m+=4)p.push(d[m+2]),p.push(d[m+1]),p.push(d[m]);s.push(p)}),[2,s.map(function(l){var f=$(function(){var h=Ln(ft(l,[1,n,o,3]),[0,2,1,3]).toFloat();return Rh(h)});return f})]}})})}function w1(r,t){return $(function(){var e=du(r,t),n=Bt(e,[e.shape[0],t.fc1.weights.shape[0]]),o=Jt(n,t.fc1),a=Sr(o,t.prelu4_alpha),i=Jt(a,t.fc2_1),s=Tt(Oa(i,1),1),u=xn(je(i,s),1),c=Jt(a,t.fc2_2),l=Ge(u,1)[1];return{scores:l,regions:c}})}function _1(r,t,e,n,o){return re(this,void 0,void 0,function(){var a,i,s,u,c,l,f,h,d,p,m,v,g,x;return oe(this,function(w){switch(w.label){case 0:return a=Date.now(),[4,kh(r,t,{width:24,height:24})];case 1:return i=w.sent(),o.stage2_extractImagePatches=Date.now()-a,a=Date.now(),s=i.map(function(y){var b=w1(y,n);return y.dispose(),b}),o.stage2_rnet=Date.now()-a,u=s.length>1?Ve(s.map(function(y){return y.scores})):s[0].scores,f=(l=Array).from,[4,u.data()];case 2:return c=f.apply(l,[w.sent()]),u.dispose(),h=c.map(function(y,b){return{score:y,idx:b}}).filter(function(y){return y.score>e}).map(function(y){var b=y.idx;return b}),d=h.map(function(y){return t[y]}),p=h.map(function(y){return c[y]}),m=[],v=[],d.length>0&&(a=Date.now(),g=io(d,p,.7),o.stage2_nms=Date.now()-a,x=g.map(function(y){var b=s[h[y]].regions.arraySync();return new hu(b[0][0],b[0][1],b[0][2],b[0][3])}),v=g.map(function(y){return p[y]}),m=g.map(function(y,b){return d[y].calibrate(x[b])})),s.forEach(function(y){y.regions.dispose(),y.scores.dispose()}),[2,{boxes:m,scores:v}]}})})}function C1(r,t){return $(function(){var e=du(r,t);e=Ke(e,[2,2],[2,2],"same"),e=Lt(e,t.conv4,"valid"),e=Sr(e,t.prelu4_alpha);var n=Bt(e,[e.shape[0],t.fc1.weights.shape[0]]),o=Jt(n,t.fc1),a=Sr(o,t.prelu5_alpha),i=Jt(a,t.fc2_1),s=Tt(Oa(i,1),1),u=xn(je(i,s),1),c=Jt(a,t.fc2_2),l=Jt(a,t.fc2_3),f=Ge(u,1)[1];return{scores:f,regions:c,points:l}})}function E1(r,t,e,n,o){return re(this,void 0,void 0,function(){var a,i,s,u,c,l,f,h,d,p,m,v,g,x,w;return oe(this,function(y){switch(y.label){case 0:return a=Date.now(),[4,kh(r,t,{width:48,height:48})];case 1:return i=y.sent(),o.stage3_extractImagePatches=Date.now()-a,a=Date.now(),s=i.map(function(b){var _=C1(b,n);return b.dispose(),_}),o.stage3_onet=Date.now()-a,u=s.length>1?Ve(s.map(function(b){return b.scores})):s[0].scores,f=(l=Array).from,[4,u.data()];case 2:return c=f.apply(l,[y.sent()]),u.dispose(),h=c.map(function(b,_){return{score:b,idx:_}}).filter(function(b){return b.score>e}).map(function(b){var _=b.idx;return _}),d=h.map(function(b){var _=s[b].regions.arraySync();return new hu(_[0][0],_[0][1],_[0][2],_[0][3])}),p=h.map(function(b,_){return t[b].calibrate(d[_])}),m=h.map(function(b){return c[b]}),v=[],g=[],x=[],p.length>0&&(a=Date.now(),w=io(p,m,.7,!1),o.stage3_nms=Date.now()-a,v=w.map(function(b){return p[b]}),g=w.map(function(b){return m[b]}),x=w.map(function(b,_){return Array(5).fill(0).map(function(E,I){var R=s[b].points.arraySync();return new Ee(R[0][I]*(v[_].width+1)+v[_].left,R[0][I+5]*(v[_].height+1)+v[_].top)})})),s.forEach(function(b){b.regions.dispose(),b.scores.dispose(),b.points.dispose()}),[2,{boxes:v,scores:g,points:x}]}})})}var I1=function(r){he(t,r);function t(){return r.call(this,"Mtcnn")||this}return t.prototype.load=function(e){return re(this,void 0,void 0,function(){return oe(this,function(n){return console.warn("mtcnn is deprecated and will be removed soon"),[2,r.prototype.load.call(this,e)]})})},t.prototype.loadFromDisk=function(e){return re(this,void 0,void 0,function(){return oe(this,function(n){return console.warn("mtcnn is deprecated and will be removed soon"),[2,r.prototype.loadFromDisk.call(this,e)]})})},t.prototype.forwardInput=function(e,n){return n===void 0&&(n={}),re(this,void 0,void 0,function(){var o,a,i,s,u,c,l,f,h,d,p,m,v,g,x,w,y,b,_,E,I;return oe(this,function(R){switch(R.label){case 0:if(o=this.params,!o)throw new Error("Mtcnn - load model before inference");if(a=e.canvases[0],!a)throw new Error("Mtcnn - inputCanvas is not defined, note that passing tensors into Mtcnn.forwardInput is not supported yet.");return i={},s=Date.now(),u=$(function(){return f1(Tt($s.fromPixels(a)).toFloat())}),c=function(k){return u.dispose(),i.total=Date.now()-s,k},l=u.shape.slice(1),f=l[0],h=l[1],d=new Ch(n),p=d.minFaceSize,m=d.scaleFactor,v=d.maxNumScales,g=d.scoreThresholds,x=d.scaleSteps,w=(x||m1(p,m,[f,h])).filter(function(k){var T=ts(k,[f,h]);return Math.min(T.width,T.height)>wa}).slice(0,v),i.scales=w,i.pyramid=w.map(function(k){return ts(k,[f,h])}),y=Date.now(),[4,b1(u,w,g[0],o.pnet,i)];case 1:return b=R.sent(),i.total_stage1=Date.now()-y,b.boxes.length?(i.stage2_numInputBoxes=b.boxes.length,y=Date.now(),[4,_1(a,b.boxes,g[1],o.rnet,i)]):[2,c({results:[],stats:i})];case 2:return _=R.sent(),i.total_stage2=Date.now()-y,_.boxes.length?(i.stage3_numInputBoxes=_.boxes.length,y=Date.now(),[4,E1(a,_.boxes,g[2],o.onet,i)]):[2,c({results:[],stats:i})];case 3:return E=R.sent(),i.total_stage3=Date.now()-y,I=E.boxes.map(function(k,T){return Ga(so({},new kt(E.scores[T],new Js(k.left/h,k.top/f,k.width/h,k.height/f),{height:f,width:h})),new Yx(E.points[T].map(function(A){return A.sub(new Ee(k.left,k.top)).div(new Ee(k.width,k.height))}),{width:k.width,height:k.height}))}),[2,c({results:I,stats:i})]}})})},t.prototype.forward=function(e,n){return n===void 0&&(n={}),re(this,void 0,void 0,function(){var o;return oe(this,function(a){switch(a.label){case 0:return o=this.forwardInput,[4,$e(e)];case 1:return[4,o.apply(this,[a.sent(),n])];case 2:return[2,a.sent().results]}})})},t.prototype.forwardWithStats=function(e,n){return n===void 0&&(n={}),re(this,void 0,void 0,function(){var o;return oe(this,function(a){switch(a.label){case 0:return o=this.forwardInput,[4,$e(e)];case 1:return[2,o.apply(this,[a.sent(),n])]}})})},t.prototype.getDefaultModelName=function(){return"mtcnn_model"},t.prototype.extractParamsFromWeigthMap=function(e){return v1(e)},t.prototype.extractParams=function(e){return d1(e)},t}(wn),R1=.4,k1=[new Ee(1.603231,2.094468),new Ee(6.041143,7.080126),new Ee(2.882459,3.518061),new Ee(4.266906,5.178857),new Ee(9.041765,10.66308)],S1=[117.001,114.697,97.404],D1=function(r){he(t,r);function t(){var e=this,n={withSeparableConvs:!0,iouThreshold:R1,classes:["face"],anchors:k1,meanRgb:S1,isFirstLayerConv2d:!0,filterSizes:[3,16,32,64,128,256,512]};return e=r.call(this,n)||this,e}return Object.defineProperty(t.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),t.prototype.locateFaces=function(e,n){return re(this,void 0,void 0,function(){var o;return oe(this,function(a){switch(a.label){case 0:return[4,this.detect(e,n)];case 1:return o=a.sent(),[2,o.map(function(i){return new kt(i.score,i.relativeBox,{width:i.imageWidth,height:i.imageHeight})})]}})})},t.prototype.getDefaultModelName=function(){return"tiny_face_detector_model"},t.prototype.extractParamsFromWeigthMap=function(e){return r.prototype.extractParamsFromWeigthMap.call(this,e)},t}(Ih),ut={ssdMobilenetv1:new Eh,tinyFaceDetector:new D1,tinyYolov2:new l1,mtcnn:new I1,faceLandmark68Net:new gh,faceLandmark68TinyNet:new Tb,faceRecognitionNet:new Lb,faceExpressionNet:new vb,ageGenderNet:new kb},Sh=function(r){he(t,r);function t(e,n,o){var a=r.call(this)||this;return a.parentTask=e,a.input=n,a.extractedFaces=o,a}return t}(wo),pu=function(r){he(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return re(this,void 0,void 0,function(){var e,n,o=this;return oe(this,function(a){switch(a.label){case 0:return[4,this.parentTask];case 1:return e=a.sent(),[4,Ha(e,this.input,function(i){return re(o,void 0,void 0,function(){return oe(this,function(s){switch(s.label){case 0:return[4,Promise.all(i.map(function(u){return ut.faceExpressionNet.predictExpressions(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return n=a.sent(),[2,e.map(function(i,s){return ph(i,n[s])})]}})})},t.prototype.withAgeAndGender=function(){return new yu(this,this.input)},t}(Sh),vu=function(r){he(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return re(this,void 0,void 0,function(){var e,n;return oe(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),e?[4,fu(e,this.input,function(a){return ut.faceExpressionNet.predictExpressions(a)},this.extractedFaces)]:[2];case 2:return n=o.sent(),[2,ph(e,n)]}})})},t.prototype.withAgeAndGender=function(){return new xu(this,this.input)},t}(Sh),mu=function(r){he(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withAgeAndGender=function(){return new bu(this,this.input)},t.prototype.withFaceDescriptors=function(){return new _u(this,this.input)},t}(pu),gu=function(r){he(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withAgeAndGender=function(){return new wu(this,this.input)},t.prototype.withFaceDescriptor=function(){return new Cu(this,this.input)},t}(vu),Dh=function(r){he(t,r);function t(e,n,o){var a=r.call(this)||this;return a.parentTask=e,a.input=n,a.extractedFaces=o,a}return t}(wo),yu=function(r){he(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return re(this,void 0,void 0,function(){var e,n,o=this;return oe(this,function(a){switch(a.label){case 0:return[4,this.parentTask];case 1:return e=a.sent(),[4,Ha(e,this.input,function(i){return re(o,void 0,void 0,function(){return oe(this,function(s){switch(s.label){case 0:return[4,Promise.all(i.map(function(u){return ut.ageGenderNet.predictAgeAndGender(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return n=a.sent(),[2,e.map(function(i,s){var u=n[s],c=u.age,l=u.gender,f=u.genderProbability;return wh(_h(i,l,f),c)})]}})})},t.prototype.withFaceExpressions=function(){return new pu(this,this.input)},t}(Dh),xu=function(r){he(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return re(this,void 0,void 0,function(){var e,n,o,a,i;return oe(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return e=s.sent(),e?[4,fu(e,this.input,function(u){return ut.ageGenderNet.predictAgeAndGender(u)},this.extractedFaces)]:[2];case 2:return n=s.sent(),o=n.age,a=n.gender,i=n.genderProbability,[2,wh(_h(e,a,i),o)]}})})},t.prototype.withFaceExpressions=function(){return new vu(this,this.input)},t}(Dh),bu=function(r){he(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withFaceExpressions=function(){return new mu(this,this.input)},t.prototype.withFaceDescriptors=function(){return new _u(this,this.input)},t}(yu),wu=function(r){he(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withFaceExpressions=function(){return new gu(this,this.input)},t.prototype.withFaceDescriptor=function(){return new Cu(this,this.input)},t}(xu),Ah=function(r){he(t,r);function t(e,n){var o=r.call(this)||this;return o.parentTask=e,o.input=n,o}return t}(wo),_u=function(r){he(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return re(this,void 0,void 0,function(){var e,n;return oe(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),[4,Ha(e,this.input,function(a){return Promise.all(a.map(function(i){return ut.faceRecognitionNet.computeFaceDescriptor(i)}))},null,function(a){return a.landmarks.align(null,{useDlibAlignment:!0})})];case 2:return n=o.sent(),[2,n.map(function(a,i){return bh(e[i],a)})]}})})},t.prototype.withFaceExpressions=function(){return new mu(this,this.input)},t.prototype.withAgeAndGender=function(){return new bu(this,this.input)},t}(Ah),Cu=function(r){he(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return re(this,void 0,void 0,function(){var e,n;return oe(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),e?[4,fu(e,this.input,function(a){return ut.faceRecognitionNet.computeFaceDescriptor(a)},null,function(a){return a.landmarks.align(null,{useDlibAlignment:!0})})]:[2];case 2:return n=o.sent(),[2,bh(e,n)]}})})},t.prototype.withFaceExpressions=function(){return new gu(this,this.input)},t.prototype.withAgeAndGender=function(){return new wu(this,this.input)},t}(Ah),Th=function(r){he(t,r);function t(e,n,o){var a=r.call(this)||this;return a.parentTask=e,a.input=n,a.useTinyLandmarkNet=o,a}return Object.defineProperty(t.prototype,"landmarkNet",{get:function(){return this.useTinyLandmarkNet?ut.faceLandmark68TinyNet:ut.faceLandmark68Net},enumerable:!0,configurable:!0}),t}(wo),A1=function(r){he(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return re(this,void 0,void 0,function(){var e,n,o,a,i,s=this;return oe(this,function(u){switch(u.label){case 0:return[4,this.parentTask];case 1:return e=u.sent(),n=e.map(function(c){return c.detection}),this.input instanceof Pe?[4,ru(this.input,n)]:[3,3];case 2:return a=u.sent(),[3,5];case 3:return[4,nu(this.input,n)];case 4:a=u.sent(),u.label=5;case 5:return o=a,[4,Promise.all(o.map(function(c){return s.landmarkNet.detectLandmarks(c)}))];case 6:return i=u.sent(),o.forEach(function(c){return c instanceof Pe&&c.dispose()}),[2,e.map(function(c,l){return Ga(c,i[l])})]}})})},t.prototype.withFaceExpressions=function(){return new mu(this,this.input)},t.prototype.withAgeAndGender=function(){return new bu(this,this.input)},t.prototype.withFaceDescriptors=function(){return new _u(this,this.input)},t}(Th),T1=function(r){he(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return re(this,void 0,void 0,function(){var e,n,o,a,i;return oe(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return e=s.sent(),e?(n=e.detection,this.input instanceof Pe?[4,ru(this.input,[n])]:[3,3]):[2];case 2:return a=s.sent(),[3,5];case 3:return[4,nu(this.input,[n])];case 4:a=s.sent(),s.label=5;case 5:return o=a,[4,this.landmarkNet.detectLandmarks(o[0])];case 6:return i=s.sent(),o.forEach(function(u){return u instanceof Pe&&u.dispose()}),[2,Ga(e,i)]}})})},t.prototype.withFaceExpressions=function(){return new gu(this,this.input)},t.prototype.withAgeAndGender=function(){return new wu(this,this.input)},t.prototype.withFaceDescriptor=function(){return new Cu(this,this.input)},t}(Th),Nh=function(r){he(t,r);function t(e,n){n===void 0&&(n=new bo);var o=r.call(this)||this;return o.input=e,o.options=n,o}return t}(wo),Fh=function(r){he(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return re(this,void 0,void 0,function(){var e,n,o,a;return oe(this,function(i){switch(i.label){case 0:return e=this,n=e.input,o=e.options,o instanceof Ch?[4,ut.mtcnn.forward(n,o)]:[3,2];case 1:return[2,i.sent().map(function(s){return s.detection})];case 2:if(a=o instanceof es?function(s){return ut.tinyFaceDetector.locateFaces(s,o)}:o instanceof bo?function(s){return ut.ssdMobilenetv1.locateFaces(s,o)}:o instanceof lu?function(s){return ut.tinyYolov2.locateFaces(s,o)}:null,!a)throw new Error("detectFaces - expected options to be instance of TinyFaceDetectorOptions | SsdMobilenetv1Options | MtcnnOptions | TinyYolov2Options");return[2,a(n)]}})})},t.prototype.runAndExtendWithFaceDetections=function(){var e=this;return new Promise(function(n){return re(e,void 0,void 0,function(){var o;return oe(this,function(a){switch(a.label){case 0:return[4,this.run()];case 1:return o=a.sent(),[2,n(o.map(function(i){return so({},i)}))]}})})})},t.prototype.withFaceLandmarks=function(e){return e===void 0&&(e=!1),new A1(this.runAndExtendWithFaceDetections(),this.input,e)},t.prototype.withFaceExpressions=function(){return new pu(this.runAndExtendWithFaceDetections(),this.input)},t.prototype.withAgeAndGender=function(){return new yu(this.runAndExtendWithFaceDetections(),this.input)},t}(Nh),N1=function(r){he(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return re(this,void 0,void 0,function(){var e,n;return oe(this,function(o){switch(o.label){case 0:return[4,new Fh(this.input,this.options)];case 1:return e=o.sent(),n=e[0],e.forEach(function(a){a.score>n.score&&(n=a)}),[2,n]}})})},t.prototype.runAndExtendWithFaceDetection=function(){var e=this;return new Promise(function(n){return re(e,void 0,void 0,function(){var o;return oe(this,function(a){switch(a.label){case 0:return[4,this.run()];case 1:return o=a.sent(),[2,n(o?so({},o):void 0)]}})})})},t.prototype.withFaceLandmarks=function(e){return e===void 0&&(e=!1),new T1(this.runAndExtendWithFaceDetection(),this.input,e)},t.prototype.withFaceExpressions=function(){return new vu(this.runAndExtendWithFaceDetection(),this.input)},t.prototype.withAgeAndGender=function(){return new xu(this.runAndExtendWithFaceDetection(),this.input)},t}(Nh);function F1(r,t){return t===void 0&&(t=new bo),new N1(r,t)}function P1(r,t){return t===void 0&&(t=new bo),new Fh(r,t)}function M1(r,t){if(r.length!==t.length)throw new Error("euclideanDistance: arr1.length !== arr2.length");var e=Array.from(r),n=Array.from(t);return Math.sqrt(e.map(function(o,a){return o-n[a]}).reduce(function(o,a){return o+Math.pow(a,2)},0))}(function(){function r(t,e){e===void 0&&(e=.6),this._distanceThreshold=e;var n=Array.isArray(t)?t:[t];if(!n.length)throw new Error("FaceRecognizer.constructor - expected atleast one input");var o=1,a=function(){return"person "+o++};this._labeledDescriptors=n.map(function(i){if(i instanceof Fo)return i;if(i instanceof Float32Array)return new Fo(a(),[i]);if(i.descriptor&&i.descriptor instanceof Float32Array)return new Fo(a(),[i.descriptor]);throw new Error("FaceRecognizer.constructor - expected inputs to be of type LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array | Array<LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array>")})}return Object.defineProperty(r.prototype,"labeledDescriptors",{get:function(){return this._labeledDescriptors},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"distanceThreshold",{get:function(){return this._distanceThreshold},enumerable:!0,configurable:!0}),r.prototype.computeMeanDistance=function(t,e){return e.map(function(n){return M1(n,t)}).reduce(function(n,o){return n+o},0)/(e.length||1)},r.prototype.matchDescriptor=function(t){var e=this;return this.labeledDescriptors.map(function(n){var o=n.descriptors,a=n.label;return new Nc(a,e.computeMeanDistance(t,o))}).reduce(function(n,o){return n.distance<o.distance?n:o})},r.prototype.findBestMatch=function(t){var e=this.matchDescriptor(t);return e.distance<this.distanceThreshold?e:new Nc("unknown",e.distance)},r.prototype.toJSON=function(){return{distanceThreshold:this.distanceThreshold,labeledDescriptors:this.labeledDescriptors.map(function(t){return t.toJSON()})}},r.fromJSON=function(t){var e=t.labeledDescriptors.map(function(n){return Fo.fromJSON(n)});return new r(e,t.distanceThreshold)},r})();function Ph(r,t){var e=new Zn(t.width,t.height),n=e.width,o=e.height;if(n<=0||o<=0)throw new Error("resizeResults - invalid dimensions: "+JSON.stringify({width:n,height:o}));if(Array.isArray(r))return r.map(function(s){return Ph(s,{width:n,height:o})});if(su(r)){var a=r.detection.forSize(n,o),i=r.unshiftedLandmarks.forSize(a.box.width,a.box.height);return Ga(so(r,a),i)}return ya(r)?so(r,r.detection.forSize(n,o)):r instanceof Pr||r instanceof kt?r.forSize(n,o):r}var O1=Ye('<li class="emotion svelte-8hz4uz"> </li>'),B1=Ye('<ul class="emotion-list svelte-8hz4uz"></ul>'),L1=Ye('<main><div class="face-wrapper svelte-8hz4uz"><div class="video-container svelte-8hz4uz"><video autoplay playsinline="" class="svelte-8hz4uz"></video> <canvas class="svelte-8hz4uz"></canvas></div> <div class="expression-box svelte-8hz4uz"><!></div></div></main>',2);function W1(r,t){Ea(t,!1);let e=Qo(t,"detections",12),n=[],o,a=Ue(),i=Ue();async function s(){const E="/choose-your-llm-face-adventure//models";await ut.tinyFaceDetector.loadFromUri(E),await ut.faceExpressionNet.loadFromUri(E),await ut.faceLandmark68Net.loadFromUri(E)}async function u(){try{const E=await navigator.mediaDevices.getUserMedia({video:!0});Lo(a,j(a).srcObject=E),await j(a).play()}catch(E){alert("Could not access webcam: "+E.message)}}async function c(){if(!j(a)||!j(i))return;const E={width:j(a).videoWidth,height:j(a).videoHeight};cb(j(i),E);const I=new es,R=await P1(j(a),I).withFaceLandmarks(),k=Ph(R,E);j(i).getContext("2d").clearRect(0,0,j(i).width,j(i).height),nb(j(i),k),yb(j(i),k)}async function l(){if(!j(a))return;const E=new es,I=await F1(j(a),E).withFaceExpressions();if(e((I==null?void 0:I.expressions)||null),e()){n.push({timestamp:Date.now(),expressions:I.expressions});const R=Date.now()-5e3;n=n.filter(k=>k.timestamp>=R)}}function f(E){const I={neutral:0,happy:0,sad:0,angry:0,fearful:0,disgusted:0,surprised:0},R=E.length;for(const T of E)for(const[A,B]of Object.entries(T.expressions))I[A]+=B;const k={};for(const[T,A]of Object.entries(I))k[T]=A/R;return console.log("Emotion summary:",k),k}function h(E){return E?Object.entries(E).sort(([,I],[,R])=>R-I).slice(0,6):[]}async function d(E=5e3){return n=[],new Promise(I=>{const R=setInterval(()=>{l()},500);setTimeout(()=>{clearInterval(R);const k=f(n);I(k)},E)})}function p(){o&&clearInterval(o),o=setInterval(()=>{l()},500)}dl(async()=>{await s(),await u(),j(a).addEventListener("play",()=>{Lo(i,j(i).width=j(a).videoWidth),Lo(i,j(i).height=j(a).videoHeight)}),setInterval(()=>{c()},80),p()}),xs();var m=L1(),v=me(m),g=me(v),x=me(g);Jo(x,E=>Re(a,E),()=>j(a));var w=_e(x,2);Jo(w,E=>Re(i,E),()=>j(i));var y=_e(g,2),b=me(y);{var _=E=>{var I=B1();Kr(I,5,()=>h(e()),qr,(R,k)=>{var T=yd(()=>jh(j(k),2));let A=()=>j(T)[0],B=()=>j(T)[1];var M=O1(),O=me(M);Mt(U=>qt(O,`${A()??""}: ${U??""}%`),[()=>(B()*100).toFixed(0)],wr),Fe(R,M)}),Fe(E,I)};vn(b,E=>{e()&&E(_)})}return Fe(r,m),Fu(t,"collectExpressions",d),Fu(t,"startContinuousExpressionTracking",p),Ia({collectExpressions:d,startContinuousExpressionTracking:p})}async function Bc(r){const n={...{model:"mistral",seed:Math.floor(Math.random()*1e5),private:"true"},messages:[{role:"system",content:`
            You are a master storyteller creating a Choose-Your-Adventure game.
            Your top priority is to surprise, delight, and occasionally shock the reader.
            Do NOT follow clichés. Do NOT use predictable plots.
            Invent strange characters, bizarre twists, and imaginative details.
            You are ALLOWED and ENCOURAGED to be weird, surreal, or dreamlike.
            Be highly creative unless told otherwise.
        `},{role:"user",content:r}]},o="https://text.pollinations.ai/openai";try{const a=await fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!a.ok){const s=await a.text();throw new Error(`LLM error ${a.status}: ${s}`)}return(await a.json()).choices[0].message.content}catch(a){return console.error("Text fetch error:",a),""}}async function Lc(r,t={}){const e={width:800,height:600,private:"true",nologo:"true",safe:"true"},n="https://image.pollinations.ai/prompt",o=new URLSearchParams({...e,...t}),a=encodeURIComponent(r),i=`${n}/${a}?${o.toString()}`;console.log("Fetching image from:",i);try{const s=await fetch(i);if(!s.ok){const c=await s.text();throw new Error(`HTTP error ${s.status}: ${c}`)}const u=await s.blob();return URL.createObjectURL(u)}catch(s){return console.error("Image fetch error:",s),""}}var z1=Ye('<img loading="lazy" class="svelte-ff35uw"/>'),U1=Ye("<p>Loading image...</p>"),V1=Ye('<main><div class="image-container svelte-ff35uw"><!></div></main>');function G1(r,t){let e=Qo(t,"imageUrl",8,""),n=Qo(t,"alt",8,"Generated story image");var o=V1(),a=me(o),i=me(a);{var s=c=>{var l=z1();Mt(()=>{Yo(l,"src",e()),Yo(l,"alt",n())}),Fe(c,l)},u=c=>{var l=U1();Fe(c,l)};vn(i,c=>{e()?c(s):c(u,!1)})}Fe(r,o)}var H1=Ye('<h2 class="svelte-2dzs07">A story begins..</h2>'),j1=Ye('<h2 class="svelte-2dzs07">And then..</h2>'),q1=Ye("<p><em>No story yet. Start the adventure!</em></p>"),K1=Ye('<img class="story-log-image svelte-2dzs07"/>'),X1=Ye('<div class="story-log-entry svelte-2dzs07"><p><strong></strong> </p> <!></div>'),$1=Ye('<div class="story-history-content svelte-2dzs07"><!></div>'),Y1=Ye('<main><div class="LLM-story-results svelte-2dzs07"><div class="story-text svelte-2dzs07"><div class="story-latest svelte-2dzs07"><!> <p> </p></div> <button class="story-history-toggle svelte-2dzs07"><strong> </strong> <!></button></div> <div class="story-image svelte-2dzs07"><!></div></div> <div class="face-row svelte-2dzs07"><!></div></main>');function J1(r,t){Ea(t,!1);let e=Qo(t,"storyConfig",8),n=`
        Start the choose your adventure story! 
        But keep it BRIEF (only 1 sentence). 
        Don't provide options yet; just set the scene. 
        Only return the story in your message.
    `,o=`
        The story must match this creative configuration:
        - Genre: ${e().genre}
        - Setting: ${e().setting}
        - Tone: ${e().tone}
        - Silliness level: ${e().sliders.silliness}/100
        - Creativity level: ${e().sliders.creativity}/100 
            → match this with unpredictable and highly inventive ideas.
    `;e().sliders.creativity>60&&(o+=`
            Use unusual metaphors, surreal events, and imaginative world-building.
            Break genre norms if it adds surprise.
        `);let a=`
        Based on the story, generate an image that matches this style:
        - Style: 
            ${e().sliders.image_realism<70?"cartoon or animated illustration":"realistic or photo-style"}
        - Do NOT generate photo-realistic output if style is cartoon.
        - Be visually imaginative, especially if cartoon-style is selected.
        - Do NOT generate anything creepy or scary.
    `,i=`
        ONLY RETURN ONE SINGLE, BRIEF SENTENCE. NO MORE.
        If your response includes more than one sentence, the story will be rejected. 
    `,s=Ue(),u=Ue([]),c="",l=Ue(""),f;const h=80;let d=Ue(""),p="",m=Ue(!1),v=Ue({}),g=Ue(),x=Ue(!0);function w(Z){return Object.entries(Z||{}).sort((le,pe)=>pe[1]-le[1]).slice(0,3).map(([le,pe])=>`- ${le}: ${(pe*100).toFixed(1)}%`).join(`
`)}async function y(){const Z=`
            What happens next? Keep it BRIEF (only 1-2 sentences).
            Do not provide options. Do not mention the user. 
            Just continue the story. Keep it short and interesting.
        `;if(j(x)){c=await Bc(n+`
`+o+`
`+i),Re(d,await Lc(c+`
`+o+`
`+a+`
`+i)),p+=c+`

`,Re(x,!1),b(c);return}const ie=await j(g).collectExpressions(5e3),ue=w(ie);n=`
            ${p}
            The user reacted to the previous scene with these expressions:
            
${ue}

            Use these emotions to shape how the story continues. 
            Reflect user's feelings by adapting tone, mood, and events accordingly. 
            Make the story respond emotionally to the user's expressions.
            ${Z}
        `,c=await Bc(n+`
`+o+`
`+i),Re(d,await Lc(c+`
`+o+`
`+a+`
`+i)),p+=c+`

`,b(c)}function b(Z){var ue;Re(l,""),clearInterval(f);let ie=0;(ue=j(g))==null||ue.startContinuousExpressionTracking(),f=setInterval(()=>{Re(l,j(l)+Z.charAt(ie)),ie++,ie>=Z.length&&(clearInterval(f),setTimeout(async()=>{var le;Re(u,[...j(u),{text:j(l),image:j(d)}]),await((le=j(g))==null?void 0:le.startContinuousExpressionTracking()),await y()},5e3))},h)}dl(()=>{y()}),sp(()=>{j(s)&&Lo(s,j(s).scrollTop=j(s).scrollHeight)}),xs();var _=Y1(),E=me(_),I=me(E),R=me(I),k=me(R);{var T=Z=>{var ie=H1();Fe(Z,ie)},A=Z=>{var ie=j1();Fe(Z,ie)};vn(k,Z=>{j(x)?Z(T):Z(A,!1)})}var B=_e(k,2),M=me(B),O=_e(R,2),U=me(O),z=me(U),W=_e(U,2);{var V=Z=>{var ie=$1(),ue=me(ie);{var le=fe=>{var ke=q1();Fe(fe,ke)},pe=fe=>{var ke=qd(),ge=_d(ke);Kr(ge,1,()=>j(u),qr,(X,te,se)=>{var be=X1(),Ce=me(be),gt=me(Ce);gt.textContent=`Part ${se+1}:`;var St=_e(gt),it=_e(Ce,2);{var En=yt=>{var Dt=K1();Yo(Dt,"alt",`Scene image ${se+1}`),Mt(()=>Yo(Dt,"src",j(te).image)),Fe(yt,Dt)};vn(it,yt=>{j(te).image&&yt(En)})}Mt(()=>qt(St,` ${j(te).text??""}`)),Fe(X,be)}),Fe(fe,ke)};vn(ue,fe=>{j(u).length===0?fe(le):fe(pe,!1)})}Jo(ie,fe=>Re(s,fe),()=>j(s)),Fe(Z,ie)};vn(W,Z=>{j(m)&&Z(V)})}var H=_e(I,2),K=me(H);G1(K,{get imageUrl(){return j(d)}});var Q=_e(E,2),ae=me(Q);Jo(W1(ae,{get detections(){return j(v)},set detections(Z){Re(v,Z)},$$legacy:!0}),Z=>Re(g,Z),()=>j(g)),Mt(()=>{qt(M,j(l)),qt(z,j(m)?"Hide Story Log":"Show Story Log")}),hl("click",O,()=>Re(m,!j(m))),Fe(r,_),Ia()}var Q1=Ye("<option> </option>"),Z1=Ye("<option> </option>"),ew=Ye("<option> </option>"),tw=Ye(`<main class="svelte-oij2bt"><h1 class="svelte-oij2bt">Choose Your [LLM] Adventure.. Using Your Face!</h1> <p class="svelte-oij2bt">The LLM will write the story. Then it's your job to react!</p> <div class="configs svelte-oij2bt"><fieldset class="story-scene svelte-oij2bt"><legend class="svelte-oij2bt">The Scene</legend> <section class="input-group svelte-oij2bt"><label for="genre" class="svelte-oij2bt">Genre</label> <input id="genre" type="text" placeholder="e.g. Sci-fi" list="genres-options" name="genre" class="svelte-oij2bt"/> <datalist id="genres-options"></datalist></section> <section class="input-group svelte-oij2bt"><label for="setting" class="svelte-oij2bt">Setting</label> <input id="setting" type="text" placeholder="e.g. Hidden Civilization" list="settings-options" name="setting" class="svelte-oij2bt"/> <datalist id="settings-options"></datalist></section> <section class="input-group svelte-oij2bt"><label for="tone" class="svelte-oij2bt">Tone</label> <input id="tone" type="text" placeholder="e.g. Whimsical" list="tones-options" name="tone" class="svelte-oij2bt"/> <datalist id="tones-options"></datalist></section> <section class="config-summary svelte-oij2bt"><p class="svelte-oij2bt">Your story will take place <span class="highlight-config svelte-oij2bt"> </span>...</p> <p class="svelte-oij2bt">The plot will be filled with <span class="highlight-config svelte-oij2bt"><!></span>.</p> <p class="svelte-oij2bt">And don't worry, the mood will stay <span class="highlight-config svelte-oij2bt"><!></span>!</p></section></fieldset> <fieldset class="vibe-check svelte-oij2bt"><legend class="svelte-oij2bt">Vibe Check</legend> <div class="slider-group svelte-oij2bt"><label for="silliness" orient="horizontal" data-before="grounded fit" data-after="weird fun" class="svelte-oij2bt">Silliness</label> <input id="silliness" type="range" min="0" max="100" class="svelte-oij2bt"/></div> <div class="slider-group svelte-oij2bt"><label for="creativity" orient="horizontal" data-before="classic feel" data-after="very unique" class="svelte-oij2bt">Creativity</label> <input id="creativity" type="range" min="0" max="100" class="svelte-oij2bt"/></div> <div class="slider-group svelte-oij2bt"><label for="image_realism" orient="horizontal" data-before="cartoon style" data-after="natural look" class="svelte-oij2bt">Image Realism</label> <input id="image_realism" type="range" min="0" max="100" class="svelte-oij2bt"/></div></fieldset></div> <button class="svelte-oij2bt">🚀 Start My Adventure!</button></main>`);function nw(r,t){Ea(t,!1);const e=ip();let n=Ue(),o=Ue(),a=Ue(),i=Ue(),s=Ue(),u=Ue();const c=["Action","Adventure","Drama","Fable","Fantasy","Magical Realism","Mystery","Sci-fi","Suspense","Comedy","Rom-com","Slice of Life"],l=["Futuristic Space Station","Inside a Video Game","Deep Ocean","Tropical Wildnerness","Hidden Civilization","Unexplored Castle","Abandoned Gem Mine","Old Haunted Manor","Magical School","Talking Animal Village","Miniature Universe","Mythical Zoo","Awkward Road Trip","Dream Vacation","Earth With Dinosaurs","Life Across Dimensions","Superhero Dystopia","Cartoon-Drawn World","Frog-Filled Swamp","Secret Mushroom Society","Alien Suburbia","Monster Building Factory","Cheese and Bread Land","Cloud City"],f=["Cheerful","Comedic","Whimsical","Lighthearted","Cozy","Fun","Eccentric","Wacky","Dark","Uneasy"];function h(){const X={genre:j(n),setting:j(o),tone:j(a),sliders:{silliness:j(i),creativity:j(s),image_realism:j(u)}};e("start",X),console.log("Starting story with: ",X)}function d(X){if(!X)return"in some unknown setting";const se=X.trim().toLowerCase();return se.startsWith("inside")||se.startsWith("on")||se.startsWith("in")?se:se.startsWith("the")?`in ${se}`:`in ${/^[aeiou]/.test(se)?"an":"a"} ${se}`}xs();var p=tw(),m=_e(me(p),4),v=me(m),g=_e(me(v),2),x=_e(me(g),2),w=_e(x,2);Kr(w,5,()=>c,qr,(X,te)=>{var se=Q1(),be={},Ce=me(se);Mt(()=>{be!==(be=j(te))&&(se.value=(se.__value=j(te))??""),qt(Ce,j(te))}),Fe(X,se)});var y=_e(g,2),b=_e(me(y),2),_=_e(b,2);Kr(_,5,()=>l,qr,(X,te)=>{var se=Z1(),be={},Ce=me(se);Mt(()=>{be!==(be=j(te))&&(se.value=(se.__value=j(te))??""),qt(Ce,j(te))}),Fe(X,se)});var E=_e(y,2),I=_e(me(E),2),R=_e(I,2);Kr(R,5,()=>f,qr,(X,te)=>{var se=ew(),be={},Ce=me(se);Mt(()=>{be!==(be=j(te))&&(se.value=(se.__value=j(te))??""),qt(Ce,j(te))}),Fe(X,se)});var k=_e(E,2),T=me(k),A=_e(me(T)),B=me(A),M=_e(T,2),O=_e(me(M)),U=me(O);{var z=X=>{var te=_o();Mt(se=>qt(te,se),[()=>j(n).toLowerCase()+" goodness"],wr),Fe(X,te)},W=X=>{var te=_o();te.nodeValue="interesting new tales",Fe(X,te)};vn(U,X=>{j(n)?X(z):X(W,!1)})}var V=_e(M,2),H=_e(me(V)),K=me(H);{var Q=X=>{var te=_o();Mt(se=>qt(te,se),[()=>j(a).toLowerCase()],wr),Fe(X,te)},ae=X=>{var te=_o();te.nodeValue="engaging throughout",Fe(X,te)};vn(K,X=>{j(a)?X(Q):X(ae,!1)})}var Z=_e(v,2),ie=_e(me(Z),2),ue=_e(me(ie),2),le=_e(ie,2),pe=_e(me(le),2),fe=_e(le,2),ke=_e(me(fe),2),ge=_e(m,2);Mt(X=>qt(B,X),[()=>d(j(o))],wr),hr(x,()=>j(n),X=>Re(n,X)),hr(b,()=>j(o),X=>Re(o,X)),hr(I,()=>j(a),X=>Re(a,X)),hr(ue,()=>j(i),X=>Re(i,X)),hr(pe,()=>j(s),X=>Re(s,X)),hr(ke,()=>j(u),X=>Re(u,X)),hl("click",ge,h),Fe(r,p),Ia()}var rw=Ye('<main class="svelte-vxogrg"><!></main>');function ow(r){let t=Ue(null);function e(s){Re(t,s.detail)}var n=rw(),o=me(n);{var a=s=>{nw(s,{$$events:{start:e}})},i=s=>{J1(s,{get storyConfig(){return j(t)}})};vn(o,s=>{j(t)===null?s(a):s(i,!1)})}Fe(r,n)}Kd(ow,{target:document.getElementById("app")})});export default aw();
