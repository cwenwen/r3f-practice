import{r as m,j as F}from"./react-CJ2V4BqM.js";import{W as xt,R as it,O as St,P as Pt,S as Ot,a as be,V as Rt,b as Tt,B as It,C as At,L as kt,c as st,N as _t,A as Lt,d as qe,e as at,f as Dt,U as Ft,g as D,h as ct,i as Ht,T as zt,j as De,k as Ve,l as Ut,m as Bt,n as Nt,Q as he,M as Fe,o as qt,p as Vt,q as Wt,D as We,r as Gt}from"./three-Dr8ZukuY.js";import{j as Xt}from"./react-use-measure-C4cfVL5w.js";import{c as Yt,x as $t,i as Qt,m as Zt}from"./its-fine-Cd7e02TJ.js";import{c as ue,R as Jt}from"./react-reconciler-CZb9o7j7.js";import{s as Ge}from"./scheduler-DV1PgV85.js";import"./react-dom-DubS1pxz.js";import{_ as Q}from"./@babel-CF3RwP-h.js";import{C as we}from"./camera-controls-dj_nLnPV.js";import{S as Kt}from"./three-stdlib-Djkg-FbO.js";import{c as en}from"./zustand-D4-C1mB2.js";import{s as tn,p as nn,c as rn}from"./suspend-react-BKIKQNXN.js";function lt(e){let t=e.root;for(;t.getState().previousRoot;)t=t.getState().previousRoot;return t}const ut=e=>e&&e.isOrthographicCamera,on=e=>e&&e.hasOwnProperty("current"),sn=e=>e!=null&&(typeof e=="string"||typeof e=="number"||e.isColor),ne=((e,t)=>typeof window<"u"&&(((e=window.document)==null?void 0:e.createElement)||((t=window.navigator)==null?void 0:t.product)==="ReactNative"))()?m.useLayoutEffect:m.useEffect;function ft(e){const t=m.useRef(e);return ne(()=>void(t.current=e),[e]),t}function an(){const e=Yt(),t=$t();return m.useMemo(()=>({children:n})=>{const o=!!Qt(e,!0,a=>a.type===m.StrictMode)?m.StrictMode:m.Fragment;return F.jsx(o,{children:F.jsx(t,{children:n})})},[e,t])}function cn({set:e}){return ne(()=>(e(new Promise(()=>null)),()=>e(!1)),[e]),null}const ln=(e=>(e=class extends m.Component{constructor(...n){super(...n),this.state={error:!1}}componentDidCatch(n){this.props.set(n)}render(){return this.state.error?null:this.props.children}},e.getDerivedStateFromError=()=>({error:!0}),e))();function pt(e){var t;const n=typeof window<"u"?(t=window.devicePixelRatio)!=null?t:2:1;return Array.isArray(e)?Math.min(Math.max(e[0],n),e[1]):e}function X(e){var t;return(t=e.__r3f)==null?void 0:t.root.getState()}const I={obj:e=>e===Object(e)&&!I.arr(e)&&typeof e!="function",fun:e=>typeof e=="function",str:e=>typeof e=="string",num:e=>typeof e=="number",boo:e=>typeof e=="boolean",und:e=>e===void 0,nul:e=>e===null,arr:e=>Array.isArray(e),equ(e,t,{arrays:n="shallow",objects:r="reference",strict:o=!0}={}){if(typeof e!=typeof t||!!e!=!!t)return!1;if(I.str(e)||I.num(e)||I.boo(e))return e===t;const a=I.obj(e);if(a&&r==="reference")return e===t;const p=I.arr(e);if(p&&n==="reference")return e===t;if((p||a)&&e===t)return!0;let u;for(u in e)if(!(u in t))return!1;if(a&&n==="shallow"&&r==="shallow"){for(u in o?t:e)if(!I.equ(e[u],t[u],{strict:o,objects:"reference"}))return!1}else for(u in o?t:e)if(e[u]!==t[u])return!1;if(I.und(u)){if(p&&e.length===0&&t.length===0||a&&Object.keys(e).length===0&&Object.keys(t).length===0)return!0;if(e!==t)return!1}return!0}};function un(e){const t={nodes:{},materials:{},meshes:{}};return e&&e.traverse(n=>{n.name&&(t.nodes[n.name]=n),n.material&&!t.materials[n.material.name]&&(t.materials[n.material.name]=n.material),n.isMesh&&!t.meshes[n.name]&&(t.meshes[n.name]=n)}),t}function fn(e){e.type!=="Scene"&&(e.dispose==null||e.dispose());for(const t in e){const n=e[t];(n==null?void 0:n.type)!=="Scene"&&(n==null||n.dispose==null||n.dispose())}}const dt=["children","key","ref"];function pn(e){const t={};for(const n in e)dt.includes(n)||(t[n]=e[n]);return t}function pe(e,t,n,r){const o=e;let a=o==null?void 0:o.__r3f;return a||(a={root:t,type:n,parent:null,children:[],props:pn(r),object:o,eventCount:0,handlers:{},isHidden:!1},o&&(o.__r3f=a)),a}function te(e,t){let n=e[t];if(!t.includes("-"))return{root:e,key:t,target:n};n=e;for(const o of t.split("-")){var r;t=o,e=n,n=(r=n)==null?void 0:r[t]}return{root:e,key:t,target:n}}const Xe=/-\d+$/;function de(e,t){if(I.str(t.props.attach)){if(Xe.test(t.props.attach)){const o=t.props.attach.replace(Xe,""),{root:a,key:p}=te(e.object,o);Array.isArray(a[p])||(a[p]=[])}const{root:n,key:r}=te(e.object,t.props.attach);t.previousAttach=n[r],n[r]=t.object}else I.fun(t.props.attach)&&(t.previousAttach=t.props.attach(e.object,t.object))}function me(e,t){if(I.str(t.props.attach)){const{root:n,key:r}=te(e.object,t.props.attach),o=t.previousAttach;o===void 0?delete n[r]:n[r]=o}else t.previousAttach==null||t.previousAttach(e.object,t.object);delete t.previousAttach}const Te=[...dt,"args","dispose","attach","object","onUpdate","dispose"],Ye=new Map;function dn(e){let t=Ye.get(e.constructor);try{t||(t=new e.constructor,Ye.set(e.constructor,t))}catch{}return t}function mn(e,t){const n={};for(const r in t)if(!Te.includes(r)&&!I.equ(t[r],e.props[r])){n[r]=t[r];for(const o in t)o.startsWith(`${r}-`)&&(n[o]=t[o])}for(const r in e.props){if(Te.includes(r)||t.hasOwnProperty(r))continue;const{root:o,key:a}=te(e.object,r);if(o.constructor&&o.constructor.length===0){const p=dn(o);I.und(p)||(n[a]=p[a])}else n[a]=0}return n}const vn=["map","emissiveMap","sheenColorMap","specularColorMap","envMap"],hn=/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;function B(e,t){var n;const r=e.__r3f,o=r&&lt(r).getState(),a=r==null?void 0:r.eventCount;for(const u in t){let i=t[u];if(Te.includes(u))continue;if(r&&hn.test(u)){typeof i=="function"?r.handlers[u]=i:delete r.handlers[u],r.eventCount=Object.keys(r.handlers).length;continue}if(i===void 0)continue;let{root:h,key:l,target:c}=te(e,u);if(c instanceof qe&&i instanceof qe)c.mask=i.mask;else if(c instanceof at&&sn(i))c.set(i);else if(c!==null&&typeof c=="object"&&typeof c.set=="function"&&typeof c.copy=="function"&&i!=null&&i.constructor&&c.constructor===i.constructor)c.copy(i);else if(c!==null&&typeof c=="object"&&typeof c.set=="function"&&Array.isArray(i))typeof c.fromArray=="function"?c.fromArray(i):c.set(...i);else if(c!==null&&typeof c=="object"&&typeof c.set=="function"&&typeof i=="number")typeof c.setScalar=="function"?c.setScalar(i):c.set(i);else{var p;h[l]=i,o&&!o.linear&&vn.includes(l)&&(p=h[l])!=null&&p.isTexture&&h[l].format===Dt&&h[l].type===Ft&&(h[l].colorSpace=st)}}if(r!=null&&r.parent&&o!=null&&o.internal&&(n=r.object)!=null&&n.isObject3D&&a!==r.eventCount){const u=r.object,i=o.internal.interaction.indexOf(u);i>-1&&o.internal.interaction.splice(i,1),r.eventCount&&u.raycast!==null&&o.internal.interaction.push(u)}return r&&r.props.attach===void 0&&(r.object.isBufferGeometry?r.props.attach="geometry":r.object.isMaterial&&(r.props.attach="material")),r&&J(r),e}function J(e){var t;if(!e.parent)return;e.props.onUpdate==null||e.props.onUpdate(e.object);const n=(t=e.root)==null||t.getState==null?void 0:t.getState();n&&n.internal.frames===0&&n.invalidate()}function gn(e,t){e.manual||(ut(e)?(e.left=t.width/-2,e.right=t.width/2,e.top=t.height/2,e.bottom=t.height/-2):e.aspect=t.width/t.height,e.updateProjectionMatrix())}const L=e=>e==null?void 0:e.isObject3D;function se(e){return(e.eventObject||e.object).uuid+"/"+e.index+e.instanceId}function mt(e,t,n,r){const o=n.get(t);o&&(n.delete(t),n.size===0&&(e.delete(r),o.target.releasePointerCapture(r)))}function yn(e,t){const{internal:n}=e.getState();n.interaction=n.interaction.filter(r=>r!==t),n.initialHits=n.initialHits.filter(r=>r!==t),n.hovered.forEach((r,o)=>{(r.eventObject===t||r.object===t)&&n.hovered.delete(o)}),n.capturedMap.forEach((r,o)=>{mt(n.capturedMap,t,r,o)})}function bn(e){function t(i){const{internal:h}=e.getState(),l=i.offsetX-h.initialClick[0],c=i.offsetY-h.initialClick[1];return Math.round(Math.sqrt(l*l+c*c))}function n(i){return i.filter(h=>["Move","Over","Enter","Out","Leave"].some(l=>{var c;return(c=h.__r3f)==null?void 0:c.handlers["onPointer"+l]}))}function r(i,h){const l=e.getState(),c=new Set,y=[],b=h?h(l.internal.interaction):l.internal.interaction;for(let f=0;f<b.length;f++){const s=X(b[f]);s&&(s.raycaster.camera=void 0)}l.previousRoot||l.events.compute==null||l.events.compute(i,l);function M(f){const s=X(f);if(!s||!s.events.enabled||s.raycaster.camera===null)return[];if(s.raycaster.camera===void 0){var v;s.events.compute==null||s.events.compute(i,s,(v=s.previousRoot)==null?void 0:v.getState()),s.raycaster.camera===void 0&&(s.raycaster.camera=null)}return s.raycaster.camera?s.raycaster.intersectObject(f,!0):[]}let x=b.flatMap(M).sort((f,s)=>{const v=X(f.object),g=X(s.object);return!v||!g?f.distance-s.distance:g.events.priority-v.events.priority||f.distance-s.distance}).filter(f=>{const s=se(f);return c.has(s)?!1:(c.add(s),!0)});l.events.filter&&(x=l.events.filter(x,l));for(const f of x){let s=f.object;for(;s;){var P;(P=s.__r3f)!=null&&P.eventCount&&y.push({...f,eventObject:s}),s=s.parent}}if("pointerId"in i&&l.internal.capturedMap.has(i.pointerId))for(let f of l.internal.capturedMap.get(i.pointerId).values())c.has(se(f.intersection))||y.push(f.intersection);return y}function o(i,h,l,c){if(i.length){const y={stopped:!1};for(const b of i){let M=X(b.object);if(M||b.object.traverseAncestors(x=>{const P=X(x);if(P)return M=P,!1}),M){const{raycaster:x,pointer:P,camera:f,internal:s}=M,v=new D(P.x,P.y,0).unproject(f),g=E=>{var S,T;return(S=(T=s.capturedMap.get(E))==null?void 0:T.has(b.eventObject))!=null?S:!1},d=E=>{const S={intersection:b,target:h.target};s.capturedMap.has(E)?s.capturedMap.get(E).set(b.eventObject,S):s.capturedMap.set(E,new Map([[b.eventObject,S]])),h.target.setPointerCapture(E)},w=E=>{const S=s.capturedMap.get(E);S&&mt(s.capturedMap,b.eventObject,S,E)};let O={};for(let E in h){let S=h[E];typeof S!="function"&&(O[E]=S)}let C={...b,...O,pointer:P,intersections:i,stopped:y.stopped,delta:l,unprojectedPoint:v,ray:x.ray,camera:f,stopPropagation(){const E="pointerId"in h&&s.capturedMap.get(h.pointerId);if((!E||E.has(b.eventObject))&&(C.stopped=y.stopped=!0,s.hovered.size&&Array.from(s.hovered.values()).find(S=>S.eventObject===b.eventObject))){const S=i.slice(0,i.indexOf(b));a([...S,b])}},target:{hasPointerCapture:g,setPointerCapture:d,releasePointerCapture:w},currentTarget:{hasPointerCapture:g,setPointerCapture:d,releasePointerCapture:w},nativeEvent:h};if(c(C),y.stopped===!0)break}}}return i}function a(i){const{internal:h}=e.getState();for(const l of h.hovered.values())if(!i.length||!i.find(c=>c.object===l.object&&c.index===l.index&&c.instanceId===l.instanceId)){const y=l.eventObject.__r3f;if(h.hovered.delete(se(l)),y!=null&&y.eventCount){const b=y.handlers,M={...l,intersections:i};b.onPointerOut==null||b.onPointerOut(M),b.onPointerLeave==null||b.onPointerLeave(M)}}}function p(i,h){for(let l=0;l<h.length;l++){const c=h[l].__r3f;c==null||c.handlers.onPointerMissed==null||c.handlers.onPointerMissed(i)}}function u(i){switch(i){case"onPointerLeave":case"onPointerCancel":return()=>a([]);case"onLostPointerCapture":return h=>{const{internal:l}=e.getState();"pointerId"in h&&l.capturedMap.has(h.pointerId)&&requestAnimationFrame(()=>{l.capturedMap.has(h.pointerId)&&(l.capturedMap.delete(h.pointerId),a([]))})}}return function(l){const{onPointerMissed:c,internal:y}=e.getState();y.lastEvent.current=l;const b=i==="onPointerMove",M=i==="onClick"||i==="onContextMenu"||i==="onDoubleClick",P=r(l,b?n:void 0),f=M?t(l):0;i==="onPointerDown"&&(y.initialClick=[l.offsetX,l.offsetY],y.initialHits=P.map(v=>v.eventObject)),M&&!P.length&&f<=2&&(p(l,y.interaction),c&&c(l)),b&&a(P);function s(v){const g=v.eventObject,d=g.__r3f;if(!(d!=null&&d.eventCount))return;const w=d.handlers;if(b){if(w.onPointerOver||w.onPointerEnter||w.onPointerOut||w.onPointerLeave){const O=se(v),C=y.hovered.get(O);C?C.stopped&&v.stopPropagation():(y.hovered.set(O,v),w.onPointerOver==null||w.onPointerOver(v),w.onPointerEnter==null||w.onPointerEnter(v))}w.onPointerMove==null||w.onPointerMove(v)}else{const O=w[i];O?(!M||y.initialHits.includes(g))&&(p(l,y.interaction.filter(C=>!y.initialHits.includes(C))),O(v)):M&&y.initialHits.includes(g)&&p(l,y.interaction.filter(C=>!y.initialHits.includes(C)))}}o(P,l,f,s)}}return{handlePointer:u}}const $e=e=>!!(e!=null&&e.render),vt=m.createContext(null),wn=(e,t)=>{const n=en((u,i)=>{const h=new D,l=new D,c=new D;function y(f=i().camera,s=l,v=i().size){const{width:g,height:d,top:w,left:O}=v,C=g/d;s.isVector3?c.copy(s):c.set(...s);const E=f.getWorldPosition(h).distanceTo(c);if(ut(f))return{width:g/f.zoom,height:d/f.zoom,top:w,left:O,factor:1,distance:E,aspect:C};{const S=f.fov*Math.PI/180,T=2*Math.tan(S/2)*E,q=T*(g/d);return{width:q,height:T,top:w,left:O,factor:g/q,distance:E,aspect:C}}}let b;const M=f=>u(s=>({performance:{...s.performance,current:f}})),x=new ct;return{set:u,get:i,gl:null,camera:null,raycaster:null,events:{priority:1,enabled:!0,connected:!1},scene:null,xr:null,invalidate:(f=1)=>e(i(),f),advance:(f,s)=>t(f,s,i()),legacy:!1,linear:!1,flat:!1,controls:null,clock:new Ht,pointer:x,mouse:x,frameloop:"always",onPointerMissed:void 0,performance:{current:1,min:.5,max:1,debounce:200,regress:()=>{const f=i();b&&clearTimeout(b),f.performance.current!==f.performance.min&&M(f.performance.min),b=setTimeout(()=>M(i().performance.max),f.performance.debounce)}},size:{width:0,height:0,top:0,left:0},viewport:{initialDpr:0,dpr:0,width:0,height:0,top:0,left:0,aspect:0,distance:0,factor:0,getCurrentViewport:y},setEvents:f=>u(s=>({...s,events:{...s.events,...f}})),setSize:(f,s,v=0,g=0)=>{const d=i().camera,w={width:f,height:s,top:v,left:g};u(O=>({size:w,viewport:{...O.viewport,...y(d,l,w)}}))},setDpr:f=>u(s=>{const v=pt(f);return{viewport:{...s.viewport,dpr:v,initialDpr:s.viewport.initialDpr||v}}}),setFrameloop:(f="always")=>{const s=i().clock;s.stop(),s.elapsedTime=0,f!=="never"&&(s.start(),s.elapsedTime=0),u(()=>({frameloop:f}))},previousRoot:void 0,internal:{interaction:[],hovered:new Map,subscribers:[],initialClick:[0,0],initialHits:[],capturedMap:new Map,lastEvent:m.createRef(),active:!1,frames:0,priority:0,subscribe:(f,s,v)=>{const g=i().internal;return g.priority=g.priority+(s>0?1:0),g.subscribers.push({ref:f,priority:s,store:v}),g.subscribers=g.subscribers.sort((d,w)=>d.priority-w.priority),()=>{const d=i().internal;d!=null&&d.subscribers&&(d.priority=d.priority-(s>0?1:0),d.subscribers=d.subscribers.filter(w=>w.ref!==f))}}}}}),r=n.getState();let o=r.size,a=r.viewport.dpr,p=r.camera;return n.subscribe(()=>{const{camera:u,size:i,viewport:h,gl:l,set:c}=n.getState();if(i.width!==o.width||i.height!==o.height||h.dpr!==a){o=i,a=h.dpr,gn(u,i),h.dpr>0&&l.setPixelRatio(h.dpr);const y=typeof HTMLCanvasElement<"u"&&l.domElement instanceof HTMLCanvasElement;l.setSize(i.width,i.height,y)}u!==p&&(p=u,c(y=>({viewport:{...y.viewport,...y.viewport.getCurrentViewport(u)}})))}),n.subscribe(u=>e(u)),n};function ht(){const e=m.useContext(vt);if(!e)throw new Error("R3F: Hooks can only be used within the Canvas component!");return e}function U(e=n=>n,t){return ht()(e,t)}function gt(e,t=0){const n=ht(),r=n.getState().internal.subscribe,o=ft(e);return ne(()=>r(o,t,n),[t,r,n]),null}const Qe=new WeakMap,Cn=e=>{var t;return typeof e=="function"&&(e==null||(t=e.prototype)==null?void 0:t.constructor)===e};function yt(e,t){return function(n,...r){let o;return Cn(n)?(o=Qe.get(n),o||(o=new n,Qe.set(n,o))):o=n,e&&e(o),Promise.all(r.map(a=>new Promise((p,u)=>o.load(a,i=>{L(i==null?void 0:i.scene)&&Object.assign(i,un(i.scene)),p(i)},t,i=>u(new Error(`Could not load ${a}: ${i==null?void 0:i.message}`))))))}}function re(e,t,n,r){const o=Array.isArray(t)?t:[t],a=tn(yt(n,r),[e,...o],{equal:I.equ});return Array.isArray(t)?a:a[0]}re.preload=function(e,t,n){const r=Array.isArray(t)?t:[t];return nn(yt(n),[e,...r])};re.clear=function(e,t){const n=Array.isArray(t)?t:[t];return rn([e,...n])};function En(e){const t=Jt(e);return t.injectIntoDevTools({bundleType:0,rendererPackageName:"@react-three/fiber",version:m.version}),t}const bt=0,Z={},jn=/^three(?=[A-Z])/,ge=e=>`${e[0].toUpperCase()}${e.slice(1)}`;let Mn=0;const xn=e=>typeof e=="function";function He(e){if(xn(e)){const t=`${Mn++}`;return Z[t]=e,t}else Object.assign(Z,e)}function wt(e,t){const n=ge(e),r=Z[n];if(e!=="primitive"&&!r)throw new Error(`R3F: ${n} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);if(e==="primitive"&&!t.object)throw new Error("R3F: Primitives without 'object' are invalid!");if(t.args!==void 0&&!Array.isArray(t.args))throw new Error("R3F: The args prop must be an array!")}function Sn(e,t,n){var r;return e=ge(e)in Z?e:e.replace(jn,""),wt(e,t),e==="primitive"&&(r=t.object)!=null&&r.__r3f&&delete t.object.__r3f,pe(t.object,n,e,t)}function Pn(e){if(!e.isHidden){var t;e.props.attach&&(t=e.parent)!=null&&t.object?me(e.parent,e):L(e.object)&&(e.object.visible=!1),e.isHidden=!0,J(e)}}function Ct(e){if(e.isHidden){var t;e.props.attach&&(t=e.parent)!=null&&t.object?de(e.parent,e):L(e.object)&&e.props.visible!==!1&&(e.object.visible=!0),e.isHidden=!1,J(e)}}function ze(e,t,n){const r=t.root.getState();if(!(!e.parent&&e.object!==r.scene)){if(!t.object){var o,a;const p=Z[ge(t.type)];t.object=(o=t.props.object)!=null?o:new p(...(a=t.props.args)!=null?a:[]),t.object.__r3f=t}if(B(t.object,t.props),t.props.attach)de(e,t);else if(L(t.object)&&L(e.object)){const p=e.object.children.indexOf(n==null?void 0:n.object);if(n&&p!==-1){const u=e.object.children.indexOf(t.object);if(u!==-1){e.object.children.splice(u,1);const i=u<p?p-1:p;e.object.children.splice(i,0,t.object)}else t.object.parent=e.object,e.object.children.splice(p,0,t.object),t.object.dispatchEvent({type:"added"}),e.object.dispatchEvent({type:"childadded",child:t.object})}else e.object.add(t.object)}for(const p of t.children)ze(t,p);J(t)}}function Ce(e,t){t&&(t.parent=e,e.children.push(t),ze(e,t))}function Ze(e,t,n){if(!t||!n)return;t.parent=e;const r=e.children.indexOf(n);r!==-1?e.children.splice(r,0,t):e.children.push(t),ze(e,t,n)}function Et(e){if(typeof e.dispose=="function"){const t=()=>{try{e.dispose()}catch{}};typeof IS_REACT_ACT_ENVIRONMENT<"u"?t():Ge.unstable_scheduleCallback(Ge.unstable_IdlePriority,t)}}function Ie(e,t,n){if(!t)return;t.parent=null;const r=e.children.indexOf(t);r!==-1&&e.children.splice(r,1),t.props.attach?me(e,t):L(t.object)&&L(e.object)&&(e.object.remove(t.object),yn(lt(t),t.object));const o=t.props.dispose!==null&&n!==!1;for(let a=t.children.length-1;a>=0;a--){const p=t.children[a];Ie(t,p,o)}t.children.length=0,delete t.object.__r3f,o&&t.type!=="primitive"&&t.object.type!=="Scene"&&Et(t.object),n===void 0&&J(t)}function On(e,t){for(const n of[e,e.alternate])if(n!==null)if(typeof n.ref=="function"){n.refCleanup==null||n.refCleanup();const r=n.ref(t);typeof r=="function"&&(n.refCleanup=r)}else n.ref&&(n.ref.current=t)}const fe=[];function Rn(){for(const[n]of fe){const r=n.parent;if(r){n.props.attach?me(r,n):L(n.object)&&L(r.object)&&r.object.remove(n.object);for(const o of n.children)o.props.attach?me(n,o):L(o.object)&&L(n.object)&&n.object.remove(o.object)}n.isHidden&&Ct(n),n.object.__r3f&&delete n.object.__r3f,n.type!=="primitive"&&Et(n.object)}for(const[n,r,o]of fe){n.props=r;const a=n.parent;if(a){var e,t;const p=Z[ge(n.type)];n.object=(e=n.props.object)!=null?e:new p(...(t=n.props.args)!=null?t:[]),n.object.__r3f=n,On(o,n.object),B(n.object,n.props),n.props.attach?de(a,n):L(n.object)&&L(a.object)&&a.object.add(n.object);for(const u of n.children)u.props.attach?de(n,u):L(u.object)&&L(n.object)&&n.object.add(u.object);J(n)}}fe.length=0}const Ee=()=>{},Je={};let ae=bt;const Tn=0,In=4,Ae=En({isPrimaryRenderer:!1,warnsIfNotActing:!1,supportsMutation:!0,supportsPersistence:!1,supportsHydration:!1,createInstance:Sn,removeChild:Ie,appendChild:Ce,appendInitialChild:Ce,insertBefore:Ze,appendChildToContainer(e,t){const n=e.getState().scene.__r3f;!t||!n||Ce(n,t)},removeChildFromContainer(e,t){const n=e.getState().scene.__r3f;!t||!n||Ie(n,t)},insertInContainerBefore(e,t,n){const r=e.getState().scene.__r3f;!t||!n||!r||Ze(r,t,n)},getRootHostContext:()=>Je,getChildHostContext:()=>Je,commitUpdate(e,t,n,r,o){var a,p,u;wt(t,r);let i=!1;if((e.type==="primitive"&&n.object!==r.object||((a=r.args)==null?void 0:a.length)!==((p=n.args)==null?void 0:p.length)||(u=r.args)!=null&&u.some((l,c)=>{var y;return l!==((y=n.args)==null?void 0:y[c])}))&&(i=!0),i)fe.push([e,{...r},o]);else{const l=mn(e,r);Object.keys(l).length&&(Object.assign(e.props,l),B(e.object,l))}(o.sibling===null||(o.flags&In)===Tn)&&Rn()},finalizeInitialChildren:()=>!1,commitMount(){},getPublicInstance:e=>e==null?void 0:e.object,prepareForCommit:()=>null,preparePortalMount:e=>pe(e.getState().scene,e,"",{}),resetAfterCommit:()=>{},shouldSetTextContent:()=>!1,clearContainer:()=>!1,hideInstance:Pn,unhideInstance:Ct,createTextInstance:Ee,hideTextInstance:Ee,unhideTextInstance:Ee,scheduleTimeout:typeof setTimeout=="function"?setTimeout:void 0,cancelTimeout:typeof clearTimeout=="function"?clearTimeout:void 0,noTimeout:-1,getInstanceFromNode:()=>null,beforeActiveInstanceBlur(){},afterActiveInstanceBlur(){},detachDeletedInstance(){},prepareScopeUpdate(){},getInstanceFromScope:()=>null,shouldAttemptEagerTransition:()=>!1,trackSchedulerEvent:()=>{},resolveEventType:()=>null,resolveEventTimeStamp:()=>-1.1,requestPostPaintCallback(){},maySuspendCommit:()=>!1,preloadInstance:()=>!0,startSuspendingCommit(){},suspendInstance(){},waitForCommitToBeReady:()=>null,NotPendingTransition:null,HostTransitionContext:m.createContext(null),setCurrentUpdatePriority(e){ae=e},getCurrentUpdatePriority(){return ae},resolveUpdatePriority(){var e;if(ae!==bt)return ae;switch(typeof window<"u"&&((e=window.event)==null?void 0:e.type)){case"click":case"contextmenu":case"dblclick":case"pointercancel":case"pointerdown":case"pointerup":return ue.DiscreteEventPriority;case"pointermove":case"pointerout":case"pointerover":case"pointerenter":case"pointerleave":case"wheel":return ue.ContinuousEventPriority;default:return ue.DefaultEventPriority}},resetFormInstance(){}}),G=new Map,Y={objects:"shallow",strict:!1};function An(e,t){if(!t&&typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement&&e.parentElement){const{width:n,height:r,top:o,left:a}=e.parentElement.getBoundingClientRect();return{width:n,height:r,top:o,left:a}}else if(!t&&typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)return{width:e.width,height:e.height,top:0,left:0};return{width:0,height:0,top:0,left:0,...t}}function kn(e){const t=G.get(e),n=t==null?void 0:t.fiber,r=t==null?void 0:t.store;t&&console.warn("R3F.createRoot should only be called once!");const o=typeof reportError=="function"?reportError:console.error,a=r||wn(Le,et),p=n||Ae.createContainer(a,ue.ConcurrentRoot,null,!1,null,"",o,o,o,null);t||G.set(e,{fiber:p,store:a});let u,i,h=!1,l=null;return{async configure(c={}){let y;l=new Promise(R=>y=R);let{gl:b,size:M,scene:x,events:P,onCreated:f,shadows:s=!1,linear:v=!1,flat:g=!1,legacy:d=!1,orthographic:w=!1,frameloop:O="always",dpr:C=[1,2],performance:E,raycaster:S,camera:T,onPointerMissed:q}=c,j=a.getState(),k=j.gl;if(!j.gl){const R={canvas:e,powerPreference:"high-performance",antialias:!0,alpha:!0},A=typeof b=="function"?await b(R):b;$e(A)?k=A:k=new xt({...R,...b}),j.set({gl:k})}let H=j.raycaster;H||j.set({raycaster:H=new it});const{params:oe,...V}=S||{};if(I.equ(V,H,Y)||B(H,{...V}),I.equ(oe,H.params,Y)||B(H,{params:{...H.params,...oe}}),!j.camera||j.camera===i&&!I.equ(i,T,Y)){i=T;const R=T==null?void 0:T.isCamera,A=R?T:w?new St(0,0,0,0,.1,1e3):new Pt(75,0,.1,1e3);R||(A.position.z=5,T&&(B(A,T),A.manual||("aspect"in T||"left"in T||"right"in T||"bottom"in T||"top"in T)&&(A.manual=!0,A.updateProjectionMatrix())),!j.camera&&!(T!=null&&T.rotation)&&A.lookAt(0,0,0)),j.set({camera:A}),H.camera=A}if(!j.scene){let R;x!=null&&x.isScene?(R=x,pe(R,a,"",{})):(R=new Ot,pe(R,a,"",{}),x&&B(R,x)),j.set({scene:R})}P&&!j.events.handlers&&j.set({events:P(a)});const W=An(e,M);if(I.equ(W,j.size,Y)||j.setSize(W.width,W.height,W.top,W.left),C&&j.viewport.dpr!==pt(C)&&j.setDpr(C),j.frameloop!==O&&j.setFrameloop(O),j.onPointerMissed||j.set({onPointerMissed:q}),E&&!I.equ(E,j.performance,Y)&&j.set(R=>({performance:{...R.performance,...E}})),!j.xr){var N;const R=(_,ye)=>{const Ne=a.getState();Ne.frameloop!=="never"&&et(_,!0,Ne,ye)},A=()=>{const _=a.getState();_.gl.xr.enabled=_.gl.xr.isPresenting,_.gl.xr.setAnimationLoop(_.gl.xr.isPresenting?R:null),_.gl.xr.isPresenting||Le(_)},z={connect(){const _=a.getState().gl;_.xr.addEventListener("sessionstart",A),_.xr.addEventListener("sessionend",A)},disconnect(){const _=a.getState().gl;_.xr.removeEventListener("sessionstart",A),_.xr.removeEventListener("sessionend",A)}};typeof((N=k.xr)==null?void 0:N.addEventListener)=="function"&&z.connect(),j.set({xr:z})}if(k.shadowMap){const R=k.shadowMap.enabled,A=k.shadowMap.type;if(k.shadowMap.enabled=!!s,I.boo(s))k.shadowMap.type=be;else if(I.str(s)){var ie;const z={basic:It,percentage:Tt,soft:be,variance:Rt};k.shadowMap.type=(ie=z[s])!=null?ie:be}else I.obj(s)&&Object.assign(k.shadowMap,s);(R!==k.shadowMap.enabled||A!==k.shadowMap.type)&&(k.shadowMap.needsUpdate=!0)}return At.enabled=!d,h||(k.outputColorSpace=v?kt:st,k.toneMapping=g?_t:Lt),j.legacy!==d&&j.set(()=>({legacy:d})),j.linear!==v&&j.set(()=>({linear:v})),j.flat!==g&&j.set(()=>({flat:g})),b&&!I.fun(b)&&!$e(b)&&!I.equ(b,k,Y)&&B(k,b),u=f,h=!0,y(),this},render(c){return!h&&!l&&this.configure(),l.then(()=>{Ae.updateContainer(F.jsx(_n,{store:a,children:c,onCreated:u,rootElement:e}),p,null,()=>{})}),a},unmount(){jt(e)}}}function _n({store:e,children:t,onCreated:n,rootElement:r}){return ne(()=>{const o=e.getState();o.set(a=>({internal:{...a.internal,active:!0}})),n&&n(o),e.getState().events.connected||o.events.connect==null||o.events.connect(r)},[]),F.jsx(vt.Provider,{value:e,children:t})}function jt(e,t){const n=G.get(e),r=n==null?void 0:n.fiber;if(r){const o=n==null?void 0:n.store.getState();o&&(o.internal.active=!1),Ae.updateContainer(null,r,null,()=>{o&&setTimeout(()=>{try{var a,p,u,i;o.events.disconnect==null||o.events.disconnect(),(a=o.gl)==null||(p=a.renderLists)==null||p.dispose==null||p.dispose(),(u=o.gl)==null||u.forceContextLoss==null||u.forceContextLoss(),(i=o.gl)!=null&&i.xr&&o.xr.disconnect(),fn(o.scene),G.delete(e)}catch{}},500)})}}const Ln=new Set,Dn=new Set,Fn=new Set;function je(e,t){if(e.size)for(const{callback:n}of e.values())n(t)}function ee(e,t){switch(e){case"before":return je(Ln,t);case"after":return je(Dn,t);case"tail":return je(Fn,t)}}let Me,xe;function ke(e,t,n){let r=t.clock.getDelta();t.frameloop==="never"&&typeof e=="number"&&(r=e-t.clock.elapsedTime,t.clock.oldTime=t.clock.elapsedTime,t.clock.elapsedTime=e),Me=t.internal.subscribers;for(let o=0;o<Me.length;o++)xe=Me[o],xe.ref.current(xe.store.getState(),r,n);return!t.internal.priority&&t.gl.render&&t.gl.render(t.scene,t.camera),t.internal.frames=Math.max(0,t.internal.frames-1),t.frameloop==="always"?1:t.internal.frames}let ve=!1,_e=!1,Se,Ke,$;function Mt(e){Ke=requestAnimationFrame(Mt),ve=!0,Se=0,ee("before",e),_e=!0;for(const n of G.values()){var t;$=n.store.getState(),$.internal.active&&($.frameloop==="always"||$.internal.frames>0)&&!((t=$.gl.xr)!=null&&t.isPresenting)&&(Se+=ke(e,$))}if(_e=!1,ee("after",e),Se===0)return ee("tail",e),ve=!1,cancelAnimationFrame(Ke)}function Le(e,t=1){var n;if(!e)return G.forEach(r=>Le(r.store.getState(),t));(n=e.gl.xr)!=null&&n.isPresenting||!e.internal.active||e.frameloop==="never"||(t>1?e.internal.frames=Math.min(60,e.internal.frames+t):_e?e.internal.frames=2:e.internal.frames=1,ve||(ve=!0,requestAnimationFrame(Mt)))}function et(e,t=!0,n,r){if(t&&ee("before",e),n)ke(e,n,r);else for(const o of G.values())ke(e,o.store.getState());t&&ee("after",e)}const Pe={onClick:["click",!1],onContextMenu:["contextmenu",!1],onDoubleClick:["dblclick",!1],onWheel:["wheel",!0],onPointerDown:["pointerdown",!0],onPointerUp:["pointerup",!0],onPointerLeave:["pointerleave",!0],onPointerMove:["pointermove",!0],onPointerCancel:["pointercancel",!0],onLostPointerCapture:["lostpointercapture",!0]};function Hn(e){const{handlePointer:t}=bn(e);return{priority:1,enabled:!0,compute(n,r,o){r.pointer.set(n.offsetX/r.size.width*2-1,-(n.offsetY/r.size.height)*2+1),r.raycaster.setFromCamera(r.pointer,r.camera)},connected:void 0,handlers:Object.keys(Pe).reduce((n,r)=>({...n,[r]:t(r)}),{}),update:()=>{var n;const{events:r,internal:o}=e.getState();(n=o.lastEvent)!=null&&n.current&&r.handlers&&r.handlers.onPointerMove(o.lastEvent.current)},connect:n=>{const{set:r,events:o}=e.getState();if(o.disconnect==null||o.disconnect(),r(a=>({events:{...a.events,connected:n}})),o.handlers)for(const a in o.handlers){const p=o.handlers[a],[u,i]=Pe[a];n.addEventListener(u,p,{passive:i})}},disconnect:()=>{const{set:n,events:r}=e.getState();if(r.connected){if(r.handlers)for(const o in r.handlers){const a=r.handlers[o],[p]=Pe[o];r.connected.removeEventListener(p,a)}n(o=>({events:{...o.events,connected:void 0}}))}}}}function zn({ref:e,children:t,fallback:n,resize:r,style:o,gl:a,events:p=Hn,eventSource:u,eventPrefix:i,shadows:h,linear:l,flat:c,legacy:y,orthographic:b,frameloop:M,dpr:x,performance:P,raycaster:f,camera:s,scene:v,onPointerMissed:g,onCreated:d,...w}){m.useMemo(()=>He(zt),[]);const O=an(),[C,E]=Xt({scroll:!0,debounce:{scroll:50,resize:0},...r}),S=m.useRef(null),T=m.useRef(null);m.useImperativeHandle(e,()=>S.current);const q=ft(g),[j,k]=m.useState(!1),[H,oe]=m.useState(!1);if(j)throw j;if(H)throw H;const V=m.useRef(null);ne(()=>{const N=S.current;if(E.width>0&&E.height>0&&N){V.current||(V.current=kn(N));async function ie(){await V.current.configure({gl:a,scene:v,events:p,shadows:h,linear:l,flat:c,legacy:y,orthographic:b,frameloop:M,dpr:x,performance:P,raycaster:f,camera:s,size:E,onPointerMissed:(...R)=>q.current==null?void 0:q.current(...R),onCreated:R=>{R.events.connect==null||R.events.connect(u?on(u)?u.current:u:T.current),i&&R.setEvents({compute:(A,z)=>{const _=A[i+"X"],ye=A[i+"Y"];z.pointer.set(_/z.size.width*2-1,-(ye/z.size.height)*2+1),z.raycaster.setFromCamera(z.pointer,z.camera)}}),d==null||d(R)}}),V.current.render(F.jsx(O,{children:F.jsx(ln,{set:oe,children:F.jsx(m.Suspense,{fallback:F.jsx(cn,{set:k}),children:t??null})})}))}ie()}}),m.useEffect(()=>{const N=S.current;if(N)return()=>jt(N)},[]);const W=u?"none":"auto";return F.jsx("div",{ref:T,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",pointerEvents:W,...o},...w,children:F.jsx("div",{ref:C,style:{width:"100%",height:"100%"},children:F.jsx("canvas",{ref:S,style:{display:"block"},children:n})})})}function nr(e){return F.jsx(Zt,{children:F.jsx(zn,{...e})})}const Oe=e=>e===Object(e)&&!Array.isArray(e)&&typeof e!="function";function Ue(e,t){const n=U(a=>a.gl),r=re(De,Oe(e)?Object.values(e):e);return m.useLayoutEffect(()=>{t==null||t(r)},[t]),m.useEffect(()=>{if("initTexture"in n){let a=[];Array.isArray(r)?a=r:r instanceof Ve?a=[r]:Oe(r)&&(a=Object.values(r)),a.forEach(p=>{p instanceof Ve&&n.initTexture(p)})}},[n,r]),m.useMemo(()=>{if(Oe(e)){const a={};let p=0;for(const u in e)a[u]=r[p++];return a}else return r},[e,r])}Ue.preload=e=>re.preload(De,e);Ue.clear=e=>re.clear(De,e);const rr=m.forwardRef((e,t)=>{m.useMemo(()=>{const d={Box3:Vt,MathUtils:{clamp:qt.clamp},Matrix4:Fe,Quaternion:he,Raycaster:it,Sphere:Nt,Spherical:Bt,Vector2:ct,Vector3:D,Vector4:Ut};we.install({THREE:d}),He({CameraControlsImpl:we})},[]);const{camera:n,domElement:r,makeDefault:o,onStart:a,onEnd:p,onChange:u,regress:i,...h}=e,l=U(d=>d.camera),c=U(d=>d.gl),y=U(d=>d.invalidate),b=U(d=>d.events),M=U(d=>d.setEvents),x=U(d=>d.set),P=U(d=>d.get),f=U(d=>d.performance),s=n||l,v=r||b.connected||c.domElement,g=m.useMemo(()=>new we(s),[s]);return gt((d,w)=>{g.enabled&&g.update(w)},-1),m.useEffect(()=>(g.connect(v),()=>void g.disconnect()),[v,g]),m.useEffect(()=>{const d=C=>{y(),i&&f.regress(),u&&u(C)},w=C=>{a&&a(C)},O=C=>{p&&p(C)};return g.addEventListener("update",d),g.addEventListener("controlstart",w),g.addEventListener("controlend",O),g.addEventListener("control",d),g.addEventListener("transitionstart",d),g.addEventListener("wake",d),()=>{g.removeEventListener("update",d),g.removeEventListener("controlstart",w),g.removeEventListener("controlend",O),g.removeEventListener("control",d),g.removeEventListener("transitionstart",d),g.removeEventListener("wake",d)}},[g,a,p,y,M,i,u]),m.useEffect(()=>{if(o){const d=P().controls;return x({controls:g}),()=>x({controls:d})}},[o,g]),m.createElement("primitive",Q({ref:t,object:g},h))}),Re=(e,t)=>{e.updateRanges[0]=t};function Un(e,t,n=new D){const r=Math.PI*(e-.5),o=2*Math.PI*(t-.5);return n.x=Math.cos(o),n.y=Math.sin(r),n.z=Math.sin(o),n}const or=m.forwardRef(({inclination:e=.6,azimuth:t=.1,distance:n=1e3,mieCoefficient:r=.005,mieDirectionalG:o=.8,rayleigh:a=.5,turbidity:p=10,sunPosition:u=Un(e,t),...i},h)=>{const l=m.useMemo(()=>new D().setScalar(n),[n]),[c]=m.useState(()=>new Kt);return m.createElement("primitive",Q({object:c,ref:h,"material-uniforms-mieCoefficient-value":r,"material-uniforms-mieDirectionalG-value":o,"material-uniforms-rayleigh-value":a,"material-uniforms-sunPosition-value":u,"material-uniforms-turbidity-value":p,scale:l},i))}),Bn="https://rawcdn.githack.com/pmndrs/drei-assets/9225a9f1fbd449d9411125c2f419b843d0308c9f/cloud.png",tt=new Fe,ce=new D,le=new he,nt=new D,rt=new he,K=new D,Be=m.createContext(null),Nn=m.forwardRef(({children:e,material:t=Wt,texture:n=Bn,range:r,limit:o=200,frustumCulled:a,...p},u)=>{var i,h;const l=m.useMemo(()=>class extends t{constructor(){super();const C=parseInt(Gt.replace(/\D+/g,""))>=154?"opaque_fragment":"output_fragment";this.onBeforeCompile=E=>{E.vertexShader=`attribute float cloudOpacity;
               varying float vOpacity;
              `+E.vertexShader.replace("#include <fog_vertex>",`#include <fog_vertex>
                 vOpacity = cloudOpacity;
                `),E.fragmentShader=`varying float vOpacity;
              `+E.fragmentShader.replace(`#include <${C}>`,`#include <${C}>
                 gl_FragColor = vec4(outgoingLight, diffuseColor.a * vOpacity);
                `)}}},[t]);He({CloudMaterial:l});const c=m.useRef(null),y=m.useRef([]),b=m.useMemo(()=>new Float32Array(Array.from({length:o},()=>1)),[o]),M=m.useMemo(()=>new Float32Array(Array.from({length:o},()=>[1,1,1]).flat()),[o]),x=Ue(n);let P=0,f=0,s;const v=new he,g=new D(0,0,1),d=new D;gt((C,E)=>{for(P=C.clock.elapsedTime,tt.copy(c.current.matrixWorld).invert(),C.camera.matrixWorld.decompose(nt,rt,K),f=0;f<y.current.length;f++)s=y.current[f],s.ref.current.matrixWorld.decompose(ce,le,K),ce.add(d.copy(s.position).applyQuaternion(le).multiply(K)),le.copy(rt).multiply(v.setFromAxisAngle(g,s.rotation+=E*s.rotationFactor)),K.multiplyScalar(s.volume+(1+Math.sin(P*s.density*s.speed))/2*s.growth),s.matrix.compose(ce,le,K).premultiply(tt),s.dist=ce.distanceTo(nt);for(y.current.sort((S,T)=>T.dist-S.dist),f=0;f<y.current.length;f++)s=y.current[f],b[f]=s.opacity*(s.dist<s.fade-1?s.dist/s.fade:1),c.current.setMatrixAt(f,s.matrix),c.current.setColorAt(f,s.color);c.current.geometry.attributes.cloudOpacity.needsUpdate=!0,c.current.instanceMatrix.needsUpdate=!0,c.current.instanceColor&&(c.current.instanceColor.needsUpdate=!0)}),m.useLayoutEffect(()=>{const C=Math.min(o,r!==void 0?r:o,y.current.length);c.current.count=C,Re(c.current.instanceMatrix,{start:0,count:C*16}),c.current.instanceColor&&Re(c.current.instanceColor,{start:0,count:C*3}),Re(c.current.geometry.attributes.cloudOpacity,{start:0,count:C})});let w=[(i=x.image.width)!==null&&i!==void 0?i:1,(h=x.image.height)!==null&&h!==void 0?h:1];const O=Math.max(w[0],w[1]);return w=[w[0]/O,w[1]/O],m.createElement("group",Q({ref:u},p),m.createElement(Be.Provider,{value:y},e,m.createElement("instancedMesh",{matrixAutoUpdate:!1,ref:c,args:[null,null,o],frustumCulled:a},m.createElement("instancedBufferAttribute",{usage:We,attach:"instanceColor",args:[M,3]}),m.createElement("planeGeometry",{args:[...w]},m.createElement("instancedBufferAttribute",{usage:We,attach:"attributes-cloudOpacity",args:[b,1]})),m.createElement("cloudMaterial",{key:t.name,map:x,transparent:!0,depthWrite:!1}))))}),ot=m.forwardRef(({opacity:e=1,speed:t=0,bounds:n=[5,1,1],segments:r=20,color:o="#ffffff",fade:a=10,volume:p=6,smallestVolume:u=.25,distribute:i=null,growth:h=4,concentrate:l="inside",seed:c=Math.random(),...y},b)=>{function M(){const v=Math.sin(c++)*1e4;return v-Math.floor(v)}const x=m.useContext(Be),P=m.useRef(null),f=m.useId(),s=m.useMemo(()=>[...new Array(r)].map((v,g)=>({segments:r,bounds:new D(1,1,1),position:new D,uuid:f,index:g,ref:P,dist:0,matrix:new Fe,color:new at,rotation:g*(Math.PI/r)})),[r,f]);return m.useLayoutEffect(()=>{s.forEach((v,g)=>{B(v,{volume:p,color:o,speed:t,growth:h,opacity:e,fade:a,bounds:n,density:Math.max(.5,M()),rotationFactor:Math.max(.2,.5*M())*t});const d=i==null?void 0:i(v,g);if(d||r>1){var w;v.position.copy(v.bounds).multiply((w=d==null?void 0:d.point)!==null&&w!==void 0?w:{x:M()*2-1,y:M()*2-1,z:M()*2-1})}const O=Math.abs(v.position.x),C=Math.abs(v.position.y),E=Math.abs(v.position.z),S=Math.max(O,C,E);v.length=1,O===S&&(v.length-=O/v.bounds.x),C===S&&(v.length-=C/v.bounds.y),E===S&&(v.length-=E/v.bounds.z),v.volume=((d==null?void 0:d.volume)!==void 0?d.volume:Math.max(Math.max(0,u),l==="random"?M():l==="inside"?v.length:1-v.length))*p})},[l,n,a,o,e,h,p,c,r,t]),m.useLayoutEffect(()=>{const v=s;return x.current=[...x.current,...v],()=>{x.current=x.current.filter(g=>g.uuid!==f)}},[s]),m.useImperativeHandle(b,()=>P.current,[]),m.createElement("group",Q({ref:P},y))}),ir=m.forwardRef((e,t)=>m.useContext(Be)?m.createElement(ot,Q({ref:t},e)):m.createElement(Nn,null,m.createElement(ot,Q({ref:t},e))));export{Nn as C,or as S,ir as a,nr as b,rr as c,U as d,gt as u};
