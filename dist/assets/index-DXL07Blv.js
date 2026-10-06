(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Qm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Nu={exports:{}},Ga={},Pu={exports:{}},Et={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function Tx(){if(Bp)return Et;Bp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.iterator;function y(w){return w===null||typeof w!="object"?null:(w=_&&w[_]||w["@@iterator"],typeof w=="function"?w:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,b={};function S(w,W,xe){this.props=w,this.context=W,this.refs=b,this.updater=xe||M}S.prototype.isReactComponent={},S.prototype.setState=function(w,W){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,W,"setState")},S.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function v(){}v.prototype=S.prototype;function U(w,W,xe){this.props=w,this.context=W,this.refs=b,this.updater=xe||M}var L=U.prototype=new v;L.constructor=U,E(L,S.prototype),L.isPureReactComponent=!0;var C=Array.isArray,$=Object.prototype.hasOwnProperty,F={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function j(w,W,xe){var X,ee={},fe=null,re=null;if(W!=null)for(X in W.ref!==void 0&&(re=W.ref),W.key!==void 0&&(fe=""+W.key),W)$.call(W,X)&&!O.hasOwnProperty(X)&&(ee[X]=W[X]);var ge=arguments.length-2;if(ge===1)ee.children=xe;else if(1<ge){for(var be=Array(ge),Le=0;Le<ge;Le++)be[Le]=arguments[Le+2];ee.children=be}if(w&&w.defaultProps)for(X in ge=w.defaultProps,ge)ee[X]===void 0&&(ee[X]=ge[X]);return{$$typeof:s,type:w,key:fe,ref:re,props:ee,_owner:F.current}}function P(w,W){return{$$typeof:s,type:w.type,key:W,ref:w.ref,props:w.props,_owner:w._owner}}function N(w){return typeof w=="object"&&w!==null&&w.$$typeof===s}function V(w){var W={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(xe){return W[xe]})}var le=/\/+/g;function Q(w,W){return typeof w=="object"&&w!==null&&w.key!=null?V(""+w.key):W.toString(36)}function de(w,W,xe,X,ee){var fe=typeof w;(fe==="undefined"||fe==="boolean")&&(w=null);var re=!1;if(w===null)re=!0;else switch(fe){case"string":case"number":re=!0;break;case"object":switch(w.$$typeof){case s:case e:re=!0}}if(re)return re=w,ee=ee(re),w=X===""?"."+Q(re,0):X,C(ee)?(xe="",w!=null&&(xe=w.replace(le,"$&/")+"/"),de(ee,W,xe,"",function(Le){return Le})):ee!=null&&(N(ee)&&(ee=P(ee,xe+(!ee.key||re&&re.key===ee.key?"":(""+ee.key).replace(le,"$&/")+"/")+w)),W.push(ee)),1;if(re=0,X=X===""?".":X+":",C(w))for(var ge=0;ge<w.length;ge++){fe=w[ge];var be=X+Q(fe,ge);re+=de(fe,W,xe,be,ee)}else if(be=y(w),typeof be=="function")for(w=be.call(w),ge=0;!(fe=w.next()).done;)fe=fe.value,be=X+Q(fe,ge++),re+=de(fe,W,xe,be,ee);else if(fe==="object")throw W=String(w),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return re}function pe(w,W,xe){if(w==null)return w;var X=[],ee=0;return de(w,X,"","",function(fe){return W.call(xe,fe,ee++)}),X}function ce(w){if(w._status===-1){var W=w._result;W=W(),W.then(function(xe){(w._status===0||w._status===-1)&&(w._status=1,w._result=xe)},function(xe){(w._status===0||w._status===-1)&&(w._status=2,w._result=xe)}),w._status===-1&&(w._status=0,w._result=W)}if(w._status===1)return w._result.default;throw w._result}var ue={current:null},H={transition:null},he={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:H,ReactCurrentOwner:F};function I(){throw Error("act(...) is not supported in production builds of React.")}return Et.Children={map:pe,forEach:function(w,W,xe){pe(w,function(){W.apply(this,arguments)},xe)},count:function(w){var W=0;return pe(w,function(){W++}),W},toArray:function(w){return pe(w,function(W){return W})||[]},only:function(w){if(!N(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},Et.Component=S,Et.Fragment=t,Et.Profiler=o,Et.PureComponent=U,Et.StrictMode=r,Et.Suspense=h,Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=he,Et.act=I,Et.cloneElement=function(w,W,xe){if(w==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var X=E({},w.props),ee=w.key,fe=w.ref,re=w._owner;if(W!=null){if(W.ref!==void 0&&(fe=W.ref,re=F.current),W.key!==void 0&&(ee=""+W.key),w.type&&w.type.defaultProps)var ge=w.type.defaultProps;for(be in W)$.call(W,be)&&!O.hasOwnProperty(be)&&(X[be]=W[be]===void 0&&ge!==void 0?ge[be]:W[be])}var be=arguments.length-2;if(be===1)X.children=xe;else if(1<be){ge=Array(be);for(var Le=0;Le<be;Le++)ge[Le]=arguments[Le+2];X.children=ge}return{$$typeof:s,type:w.type,key:ee,ref:fe,props:X,_owner:re}},Et.createContext=function(w){return w={$$typeof:u,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},w.Provider={$$typeof:l,_context:w},w.Consumer=w},Et.createElement=j,Et.createFactory=function(w){var W=j.bind(null,w);return W.type=w,W},Et.createRef=function(){return{current:null}},Et.forwardRef=function(w){return{$$typeof:d,render:w}},Et.isValidElement=N,Et.lazy=function(w){return{$$typeof:x,_payload:{_status:-1,_result:w},_init:ce}},Et.memo=function(w,W){return{$$typeof:p,type:w,compare:W===void 0?null:W}},Et.startTransition=function(w){var W=H.transition;H.transition={};try{w()}finally{H.transition=W}},Et.unstable_act=I,Et.useCallback=function(w,W){return ue.current.useCallback(w,W)},Et.useContext=function(w){return ue.current.useContext(w)},Et.useDebugValue=function(){},Et.useDeferredValue=function(w){return ue.current.useDeferredValue(w)},Et.useEffect=function(w,W){return ue.current.useEffect(w,W)},Et.useId=function(){return ue.current.useId()},Et.useImperativeHandle=function(w,W,xe){return ue.current.useImperativeHandle(w,W,xe)},Et.useInsertionEffect=function(w,W){return ue.current.useInsertionEffect(w,W)},Et.useLayoutEffect=function(w,W){return ue.current.useLayoutEffect(w,W)},Et.useMemo=function(w,W){return ue.current.useMemo(w,W)},Et.useReducer=function(w,W,xe){return ue.current.useReducer(w,W,xe)},Et.useRef=function(w){return ue.current.useRef(w)},Et.useState=function(w){return ue.current.useState(w)},Et.useSyncExternalStore=function(w,W,xe){return ue.current.useSyncExternalStore(w,W,xe)},Et.useTransition=function(){return ue.current.useTransition()},Et.version="18.3.1",Et}var Vp;function tf(){return Vp||(Vp=1,Pu.exports=Tx()),Pu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp;function bx(){if(Hp)return Ga;Hp=1;var s=tf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,h,p){var x,_={},y=null,M=null;p!==void 0&&(y=""+p),h.key!==void 0&&(y=""+h.key),h.ref!==void 0&&(M=h.ref);for(x in h)r.call(h,x)&&!l.hasOwnProperty(x)&&(_[x]=h[x]);if(d&&d.defaultProps)for(x in h=d.defaultProps,h)_[x]===void 0&&(_[x]=h[x]);return{$$typeof:e,type:d,key:y,ref:M,props:_,_owner:o.current}}return Ga.Fragment=t,Ga.jsx=u,Ga.jsxs=u,Ga}var Gp;function Ax(){return Gp||(Gp=1,Nu.exports=bx()),Nu.exports}var g=Ax(),dt=tf();const Cx=Qm(dt);var fl={},Lu={exports:{}},kn={},Du={exports:{}},Iu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function Rx(){return jp||(jp=1,(function(s){function e(H,he){var I=H.length;H.push(he);e:for(;0<I;){var w=I-1>>>1,W=H[w];if(0<o(W,he))H[w]=he,H[I]=W,I=w;else break e}}function t(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var he=H[0],I=H.pop();if(I!==he){H[0]=I;e:for(var w=0,W=H.length,xe=W>>>1;w<xe;){var X=2*(w+1)-1,ee=H[X],fe=X+1,re=H[fe];if(0>o(ee,I))fe<W&&0>o(re,ee)?(H[w]=re,H[fe]=I,w=fe):(H[w]=ee,H[X]=I,w=X);else if(fe<W&&0>o(re,I))H[w]=re,H[fe]=I,w=fe;else break e}}return he}function o(H,he){var I=H.sortIndex-he.sortIndex;return I!==0?I:H.id-he.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var h=[],p=[],x=1,_=null,y=3,M=!1,E=!1,b=!1,S=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(H){for(var he=t(p);he!==null;){if(he.callback===null)r(p);else if(he.startTime<=H)r(p),he.sortIndex=he.expirationTime,e(h,he);else break;he=t(p)}}function C(H){if(b=!1,L(H),!E)if(t(h)!==null)E=!0,ce($);else{var he=t(p);he!==null&&ue(C,he.startTime-H)}}function $(H,he){E=!1,b&&(b=!1,v(j),j=-1),M=!0;var I=y;try{for(L(he),_=t(h);_!==null&&(!(_.expirationTime>he)||H&&!V());){var w=_.callback;if(typeof w=="function"){_.callback=null,y=_.priorityLevel;var W=w(_.expirationTime<=he);he=s.unstable_now(),typeof W=="function"?_.callback=W:_===t(h)&&r(h),L(he)}else r(h);_=t(h)}if(_!==null)var xe=!0;else{var X=t(p);X!==null&&ue(C,X.startTime-he),xe=!1}return xe}finally{_=null,y=I,M=!1}}var F=!1,O=null,j=-1,P=5,N=-1;function V(){return!(s.unstable_now()-N<P)}function le(){if(O!==null){var H=s.unstable_now();N=H;var he=!0;try{he=O(!0,H)}finally{he?Q():(F=!1,O=null)}}else F=!1}var Q;if(typeof U=="function")Q=function(){U(le)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,pe=de.port2;de.port1.onmessage=le,Q=function(){pe.postMessage(null)}}else Q=function(){S(le,0)};function ce(H){O=H,F||(F=!0,Q())}function ue(H,he){j=S(function(){H(s.unstable_now())},he)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_continueExecution=function(){E||M||(E=!0,ce($))},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(H){switch(y){case 1:case 2:case 3:var he=3;break;default:he=y}var I=y;y=he;try{return H()}finally{y=I}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(H,he){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var I=y;y=H;try{return he()}finally{y=I}},s.unstable_scheduleCallback=function(H,he,I){var w=s.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?w+I:w):I=w,H){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=I+W,H={id:x++,callback:he,priorityLevel:H,startTime:I,expirationTime:W,sortIndex:-1},I>w?(H.sortIndex=I,e(p,H),t(h)===null&&H===t(p)&&(b?(v(j),j=-1):b=!0,ue(C,I-w))):(H.sortIndex=W,e(h,H),E||M||(E=!0,ce($))),H},s.unstable_shouldYield=V,s.unstable_wrapCallback=function(H){var he=y;return function(){var I=y;y=he;try{return H.apply(this,arguments)}finally{y=I}}}})(Iu)),Iu}var Wp;function Nx(){return Wp||(Wp=1,Du.exports=Rx()),Du.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp;function Px(){if(Xp)return kn;Xp=1;var s=tf(),e=Nx();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},_={};function y(n){return h.call(_,n)?!0:h.call(x,n)?!1:p.test(n)?_[n]=!0:(x[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function b(n,i,a,c,f,m,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new b(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];S[i]=new b(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new b(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new b(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new b(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new b(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new b(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new b(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new b(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function U(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,U);S[i]=new b(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,U);S[i]=new b(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,U);S[i]=new b(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new b(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new b(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,a,c){var f=S.hasOwnProperty(i)?S[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,f,c)&&(a=null),c||f===null?y(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):f.mustUseProperty?n[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,c=f.attributeNamespace,a===null?n.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$=Symbol.for("react.element"),F=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),V=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),pe=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),H=Symbol.iterator;function he(n){return n===null||typeof n!="object"?null:(n=H&&n[H]||n["@@iterator"],typeof n=="function"?n:null)}var I=Object.assign,w;function W(n){if(w===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);w=i&&i[1]||""}return`
`+w+n}var xe=!1;function X(n,i){if(!n||xe)return"";xe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(oe){var c=oe}Reflect.construct(n,[],i)}else{try{i.call()}catch(oe){c=oe}n.call(i.prototype)}else{try{throw Error()}catch(oe){c=oe}n()}}catch(oe){if(oe&&c&&typeof oe.stack=="string"){for(var f=oe.stack.split(`
`),m=c.stack.split(`
`),T=f.length-1,k=m.length-1;1<=T&&0<=k&&f[T]!==m[k];)k--;for(;1<=T&&0<=k;T--,k--)if(f[T]!==m[k]){if(T!==1||k!==1)do if(T--,k--,0>k||f[T]!==m[k]){var B=`
`+f[T].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=T&&0<=k);break}}}finally{xe=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?W(n):""}function ee(n){switch(n.tag){case 5:return W(n.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return n=X(n.type,!1),n;case 11:return n=X(n.type.render,!1),n;case 1:return n=X(n.type,!0),n;default:return""}}function fe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case F:return"Portal";case P:return"Profiler";case j:return"StrictMode";case Q:return"Suspense";case de:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case N:return(n._context.displayName||"Context")+".Provider";case le:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case pe:return i=n.displayName||null,i!==null?i:fe(n.type)||"Memo";case ce:i=n._payload,n=n._init;try{return fe(n(i))}catch{}}return null}function re(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fe(i);case 8:return i===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ge(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function be(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Le(n){var i=be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(T){c=""+T,m.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Je(n){n._valueTracker||(n._valueTracker=Le(n))}function $e(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=be(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function lt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function z(n,i){var a=i.checked;return I({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Ct(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=ge(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function nt(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function Oe(n,i){nt(n,i);var a=ge(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Mt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Mt(n,i.type,ge(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function We(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Mt(n,i,a){(i!=="number"||lt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var ke=Array.isArray;function D(n,i,a,c){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&c&&(n[a].defaultSelected=!0)}else{for(a=""+ge(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function A(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return I({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function te(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(ke(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:ge(a)}}function _e(n,i){var a=ge(i.value),c=ge(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Se(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function me(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ge(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?me(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Pe,Ue=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,f){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Pe=Pe||document.createElement("div"),Pe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Pe.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ft(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Te={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Be=["Webkit","ms","Moz","O"];Object.keys(Te).forEach(function(n){Be.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Te[i]=Te[n]})});function et(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Te.hasOwnProperty(n)&&Te[n]?(""+i).trim():i+"px"}function it(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=et(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,f):n[a]=f}}var Ve=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xt(n,i){if(i){if(Ve[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Qe(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mt=null;function q(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ne=null,ie=null,ve=null;function De(n){if(n=Ca(n)){if(typeof Ne!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ao(i),Ne(n.stateNode,n.type,i))}}function Ce(n){ie?ve?ve.push(n):ve=[n]:ie=n}function ut(){if(ie){var n=ie,i=ve;if(ve=ie=null,De(n),i)for(n=0;n<i.length;n++)De(i[n])}}function It(n,i){return n(i)}function Wt(){}var Tt=!1;function $t(n,i,a){if(Tt)return n(i,a);Tt=!0;try{return It(n,i,a)}finally{Tt=!1,(ie!==null||ve!==null)&&(Wt(),ut())}}function un(n,i){var a=n.stateNode;if(a===null)return null;var c=Ao(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Di=!1;if(d)try{var Rn={};Object.defineProperty(Rn,"passive",{get:function(){Di=!0}}),window.addEventListener("test",Rn,Rn),window.removeEventListener("test",Rn,Rn)}catch{Di=!1}function si(n,i,a,c,f,m,T,k,B){var oe=Array.prototype.slice.call(arguments,3);try{i.apply(a,oe)}catch(Ee){this.onError(Ee)}}var Xn=!1,Si=null,Mi=!1,wn=null,Fr={onError:function(n){Xn=!0,Si=n}};function nr(n,i,a,c,f,m,T,k,B){Xn=!1,Si=null,si.apply(Fr,arguments)}function hs(n,i,a,c,f,m,T,k,B){if(nr.apply(this,arguments),Xn){if(Xn){var oe=Si;Xn=!1,Si=null}else throw Error(t(198));Mi||(Mi=!0,wn=oe)}}function Bt(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Or(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function zr(n){if(Bt(n)!==n)throw Error(t(188))}function ir(n){var i=n.alternate;if(!i){if(i=Bt(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var f=a.return;if(f===null)break;var m=f.alternate;if(m===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===a)return zr(f),n;if(m===c)return zr(f),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=f,c=m;else{for(var T=!1,k=f.child;k;){if(k===a){T=!0,a=f,c=m;break}if(k===c){T=!0,c=f,a=m;break}k=k.sibling}if(!T){for(k=m.child;k;){if(k===a){T=!0,a=m,c=f;break}if(k===c){T=!0,c=m,a=f;break}k=k.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function R(n){return n=ir(n),n!==null?K(n):null}function K(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=K(n);if(i!==null)return i;n=n.sibling}return null}var se=e.unstable_scheduleCallback,ae=e.unstable_cancelCallback,G=e.unstable_shouldYield,ye=e.unstable_requestPaint,Me=e.unstable_now,Xe=e.unstable_getCurrentPriorityLevel,Fe=e.unstable_ImmediatePriority,tt=e.unstable_UserBlockingPriority,rt=e.unstable_NormalPriority,He=e.unstable_LowPriority,_t=e.unstable_IdlePriority,wt=null,ht=null;function Kt(n){if(ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(wt,n,void 0,(n.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:Rt,Ze=Math.log,ai=Math.LN2;function Rt(n){return n>>>=0,n===0?32:31-(Ze(n)/ai|0)|0}var mn=64,oi=4194304;function en(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function wi(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,f=n.suspendedLanes,m=n.pingedLanes,T=a&268435455;if(T!==0){var k=T&~f;k!==0?c=en(k):(m&=T,m!==0&&(c=en(m)))}else T=a&~f,T!==0?c=en(T):m!==0&&(c=en(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,m=i&-i,f>=m||f===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-gt(i),f=1<<a,c|=n[a],i&=~f;return c}function kt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yn(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,m=n.pendingLanes;0<m;){var T=31-gt(m),k=1<<T,B=f[T];B===-1?((k&a)===0||(k&c)!==0)&&(f[T]=kt(k,i)):B<=i&&(n.expiredLanes|=k),m&=~k}}function Ii(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function En(){var n=mn;return mn<<=1,(mn&4194240)===0&&(mn=64),n}function qn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Nn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-gt(i),n[i]=a}function uo(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var f=31-gt(a),m=1<<f;i[f]=0,c[f]=-1,n[f]=-1,a&=~m}}function Ql(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-gt(a),f=1<<c;f&i|n[c]&i&&(n[c]|=i),a&=~f}}var Lt=0;function vf(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var _f,ec,yf,Sf,Mf,tc=!1,fo=[],rr=null,sr=null,ar=null,fa=new Map,ha=new Map,or=[],Y0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wf(n,i){switch(n){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":fa.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ha.delete(i.pointerId)}}function pa(n,i,a,c,f,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[f]},i!==null&&(i=Ca(i),i!==null&&ec(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function q0(n,i,a,c,f){switch(i){case"focusin":return rr=pa(rr,n,i,a,c,f),!0;case"dragenter":return sr=pa(sr,n,i,a,c,f),!0;case"mouseover":return ar=pa(ar,n,i,a,c,f),!0;case"pointerover":var m=f.pointerId;return fa.set(m,pa(fa.get(m)||null,n,i,a,c,f)),!0;case"gotpointercapture":return m=f.pointerId,ha.set(m,pa(ha.get(m)||null,n,i,a,c,f)),!0}return!1}function Ef(n){var i=Br(n.target);if(i!==null){var a=Bt(i);if(a!==null){if(i=a.tag,i===13){if(i=Or(a),i!==null){n.blockedOn=i,Mf(n.priority,function(){yf(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ho(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=ic(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);mt=c,a.target.dispatchEvent(c),mt=null}else return i=Ca(a),i!==null&&ec(i),n.blockedOn=a,!1;i.shift()}return!0}function Tf(n,i,a){ho(n)&&a.delete(i)}function $0(){tc=!1,rr!==null&&ho(rr)&&(rr=null),sr!==null&&ho(sr)&&(sr=null),ar!==null&&ho(ar)&&(ar=null),fa.forEach(Tf),ha.forEach(Tf)}function ma(n,i){n.blockedOn===i&&(n.blockedOn=null,tc||(tc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,$0)))}function ga(n){function i(f){return ma(f,n)}if(0<fo.length){ma(fo[0],n);for(var a=1;a<fo.length;a++){var c=fo[a];c.blockedOn===n&&(c.blockedOn=null)}}for(rr!==null&&ma(rr,n),sr!==null&&ma(sr,n),ar!==null&&ma(ar,n),fa.forEach(i),ha.forEach(i),a=0;a<or.length;a++)c=or[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<or.length&&(a=or[0],a.blockedOn===null);)Ef(a),a.blockedOn===null&&or.shift()}var ps=C.ReactCurrentBatchConfig,po=!0;function K0(n,i,a,c){var f=Lt,m=ps.transition;ps.transition=null;try{Lt=1,nc(n,i,a,c)}finally{Lt=f,ps.transition=m}}function Z0(n,i,a,c){var f=Lt,m=ps.transition;ps.transition=null;try{Lt=4,nc(n,i,a,c)}finally{Lt=f,ps.transition=m}}function nc(n,i,a,c){if(po){var f=ic(n,i,a,c);if(f===null)yc(n,i,c,mo,a),wf(n,c);else if(q0(f,n,i,a,c))c.stopPropagation();else if(wf(n,c),i&4&&-1<Y0.indexOf(n)){for(;f!==null;){var m=Ca(f);if(m!==null&&_f(m),m=ic(n,i,a,c),m===null&&yc(n,i,c,mo,a),m===f)break;f=m}f!==null&&c.stopPropagation()}else yc(n,i,c,null,a)}}var mo=null;function ic(n,i,a,c){if(mo=null,n=q(c),n=Br(n),n!==null)if(i=Bt(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Or(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return mo=n,null}function bf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xe()){case Fe:return 1;case tt:return 4;case rt:case He:return 16;case _t:return 536870912;default:return 16}default:return 16}}var lr=null,rc=null,go=null;function Af(){if(go)return go;var n,i=rc,a=i.length,c,f="value"in lr?lr.value:lr.textContent,m=f.length;for(n=0;n<a&&i[n]===f[n];n++);var T=a-n;for(c=1;c<=T&&i[a-c]===f[m-c];c++);return go=f.slice(n,1<c?1-c:void 0)}function xo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function vo(){return!0}function Cf(){return!1}function zn(n){function i(a,c,f,m,T){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var k in n)n.hasOwnProperty(k)&&(a=n[k],this[k]=a?a(m):m[k]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?vo:Cf,this.isPropagationStopped=Cf,this}return I(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=vo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=vo)},persist:function(){},isPersistent:vo}),i}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sc=zn(ms),xa=I({},ms,{view:0,detail:0}),J0=zn(xa),ac,oc,va,_o=I({},xa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==va&&(va&&n.type==="mousemove"?(ac=n.screenX-va.screenX,oc=n.screenY-va.screenY):oc=ac=0,va=n),ac)},movementY:function(n){return"movementY"in n?n.movementY:oc}}),Rf=zn(_o),Q0=I({},_o,{dataTransfer:0}),eg=zn(Q0),tg=I({},xa,{relatedTarget:0}),lc=zn(tg),ng=I({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),ig=zn(ng),rg=I({},ms,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),sg=zn(rg),ag=I({},ms,{data:0}),Nf=zn(ag),og={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ug(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=cg[n])?!!i[n]:!1}function cc(){return ug}var dg=I({},xa,{key:function(n){if(n.key){var i=og[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=xo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?lg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cc,charCode:function(n){return n.type==="keypress"?xo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?xo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),fg=zn(dg),hg=I({},_o,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pf=zn(hg),pg=I({},xa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cc}),mg=zn(pg),gg=I({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),xg=zn(gg),vg=I({},_o,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),_g=zn(vg),yg=[9,13,27,32],uc=d&&"CompositionEvent"in window,_a=null;d&&"documentMode"in document&&(_a=document.documentMode);var Sg=d&&"TextEvent"in window&&!_a,Lf=d&&(!uc||_a&&8<_a&&11>=_a),Df=" ",If=!1;function Uf(n,i){switch(n){case"keyup":return yg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var gs=!1;function Mg(n,i){switch(n){case"compositionend":return kf(i);case"keypress":return i.which!==32?null:(If=!0,Df);case"textInput":return n=i.data,n===Df&&If?null:n;default:return null}}function wg(n,i){if(gs)return n==="compositionend"||!uc&&Uf(n,i)?(n=Af(),go=rc=lr=null,gs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Lf&&i.locale!=="ko"?null:i.data;default:return null}}var Eg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ff(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Eg[n.type]:i==="textarea"}function Of(n,i,a,c){Ce(c),i=Eo(i,"onChange"),0<i.length&&(a=new sc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var ya=null,Sa=null;function Tg(n){nh(n,0)}function yo(n){var i=Ss(n);if($e(i))return n}function bg(n,i){if(n==="change")return i}var zf=!1;if(d){var dc;if(d){var fc="oninput"in document;if(!fc){var Bf=document.createElement("div");Bf.setAttribute("oninput","return;"),fc=typeof Bf.oninput=="function"}dc=fc}else dc=!1;zf=dc&&(!document.documentMode||9<document.documentMode)}function Vf(){ya&&(ya.detachEvent("onpropertychange",Hf),Sa=ya=null)}function Hf(n){if(n.propertyName==="value"&&yo(Sa)){var i=[];Of(i,Sa,n,q(n)),$t(Tg,i)}}function Ag(n,i,a){n==="focusin"?(Vf(),ya=i,Sa=a,ya.attachEvent("onpropertychange",Hf)):n==="focusout"&&Vf()}function Cg(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return yo(Sa)}function Rg(n,i){if(n==="click")return yo(i)}function Ng(n,i){if(n==="input"||n==="change")return yo(i)}function Pg(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var li=typeof Object.is=="function"?Object.is:Pg;function Ma(n,i){if(li(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!h.call(i,f)||!li(n[f],i[f]))return!1}return!0}function Gf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function jf(n,i){var a=Gf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Gf(a)}}function Wf(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Wf(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Xf(){for(var n=window,i=lt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=lt(n.document)}return i}function hc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Lg(n){var i=Xf(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Wf(a.ownerDocument.documentElement,a)){if(c!==null&&hc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=a.textContent.length,m=Math.min(c.start,f);c=c.end===void 0?m:Math.min(c.end,f),!n.extend&&m>c&&(f=c,c=m,m=f),f=jf(a,m);var T=jf(a,c);f&&T&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Dg=d&&"documentMode"in document&&11>=document.documentMode,xs=null,pc=null,wa=null,mc=!1;function Yf(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;mc||xs==null||xs!==lt(c)||(c=xs,"selectionStart"in c&&hc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),wa&&Ma(wa,c)||(wa=c,c=Eo(pc,"onSelect"),0<c.length&&(i=new sc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=xs)))}function So(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var vs={animationend:So("Animation","AnimationEnd"),animationiteration:So("Animation","AnimationIteration"),animationstart:So("Animation","AnimationStart"),transitionend:So("Transition","TransitionEnd")},gc={},qf={};d&&(qf=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function Mo(n){if(gc[n])return gc[n];if(!vs[n])return n;var i=vs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in qf)return gc[n]=i[a];return n}var $f=Mo("animationend"),Kf=Mo("animationiteration"),Zf=Mo("animationstart"),Jf=Mo("transitionend"),Qf=new Map,eh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cr(n,i){Qf.set(n,i),l(i,[n])}for(var xc=0;xc<eh.length;xc++){var vc=eh[xc],Ig=vc.toLowerCase(),Ug=vc[0].toUpperCase()+vc.slice(1);cr(Ig,"on"+Ug)}cr($f,"onAnimationEnd"),cr(Kf,"onAnimationIteration"),cr(Zf,"onAnimationStart"),cr("dblclick","onDoubleClick"),cr("focusin","onFocus"),cr("focusout","onBlur"),cr(Jf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ea="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ea));function th(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,hs(c,i,void 0,n),n.currentTarget=null}function nh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],f=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var T=c.length-1;0<=T;T--){var k=c[T],B=k.instance,oe=k.currentTarget;if(k=k.listener,B!==m&&f.isPropagationStopped())break e;th(f,k,oe),m=B}else for(T=0;T<c.length;T++){if(k=c[T],B=k.instance,oe=k.currentTarget,k=k.listener,B!==m&&f.isPropagationStopped())break e;th(f,k,oe),m=B}}}if(Mi)throw n=wn,Mi=!1,wn=null,n}function Ot(n,i){var a=i[bc];a===void 0&&(a=i[bc]=new Set);var c=n+"__bubble";a.has(c)||(ih(i,n,2,!1),a.add(c))}function _c(n,i,a){var c=0;i&&(c|=4),ih(a,n,c,i)}var wo="_reactListening"+Math.random().toString(36).slice(2);function Ta(n){if(!n[wo]){n[wo]=!0,r.forEach(function(a){a!=="selectionchange"&&(kg.has(a)||_c(a,!1,n),_c(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[wo]||(i[wo]=!0,_c("selectionchange",!1,i))}}function ih(n,i,a,c){switch(bf(i)){case 1:var f=K0;break;case 4:f=Z0;break;default:f=nc}a=f.bind(null,i,a,n),f=void 0,!Di||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function yc(n,i,a,c,f){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var k=c.stateNode.containerInfo;if(k===f||k.nodeType===8&&k.parentNode===f)break;if(T===4)for(T=c.return;T!==null;){var B=T.tag;if((B===3||B===4)&&(B=T.stateNode.containerInfo,B===f||B.nodeType===8&&B.parentNode===f))return;T=T.return}for(;k!==null;){if(T=Br(k),T===null)return;if(B=T.tag,B===5||B===6){c=m=T;continue e}k=k.parentNode}}c=c.return}$t(function(){var oe=m,Ee=q(a),Ae=[];e:{var we=Qf.get(n);if(we!==void 0){var ze=sc,Ye=n;switch(n){case"keypress":if(xo(a)===0)break e;case"keydown":case"keyup":ze=fg;break;case"focusin":Ye="focus",ze=lc;break;case"focusout":Ye="blur",ze=lc;break;case"beforeblur":case"afterblur":ze=lc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ze=Rf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ze=eg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ze=mg;break;case $f:case Kf:case Zf:ze=ig;break;case Jf:ze=xg;break;case"scroll":ze=J0;break;case"wheel":ze=_g;break;case"copy":case"cut":case"paste":ze=sg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ze=Pf}var qe=(i&4)!==0,Zt=!qe&&n==="scroll",J=qe?we!==null?we+"Capture":null:we;qe=[];for(var Y=oe,ne;Y!==null;){ne=Y;var Re=ne.stateNode;if(ne.tag===5&&Re!==null&&(ne=Re,J!==null&&(Re=un(Y,J),Re!=null&&qe.push(ba(Y,Re,ne)))),Zt)break;Y=Y.return}0<qe.length&&(we=new ze(we,Ye,null,a,Ee),Ae.push({event:we,listeners:qe}))}}if((i&7)===0){e:{if(we=n==="mouseover"||n==="pointerover",ze=n==="mouseout"||n==="pointerout",we&&a!==mt&&(Ye=a.relatedTarget||a.fromElement)&&(Br(Ye)||Ye[Ui]))break e;if((ze||we)&&(we=Ee.window===Ee?Ee:(we=Ee.ownerDocument)?we.defaultView||we.parentWindow:window,ze?(Ye=a.relatedTarget||a.toElement,ze=oe,Ye=Ye?Br(Ye):null,Ye!==null&&(Zt=Bt(Ye),Ye!==Zt||Ye.tag!==5&&Ye.tag!==6)&&(Ye=null)):(ze=null,Ye=oe),ze!==Ye)){if(qe=Rf,Re="onMouseLeave",J="onMouseEnter",Y="mouse",(n==="pointerout"||n==="pointerover")&&(qe=Pf,Re="onPointerLeave",J="onPointerEnter",Y="pointer"),Zt=ze==null?we:Ss(ze),ne=Ye==null?we:Ss(Ye),we=new qe(Re,Y+"leave",ze,a,Ee),we.target=Zt,we.relatedTarget=ne,Re=null,Br(Ee)===oe&&(qe=new qe(J,Y+"enter",Ye,a,Ee),qe.target=ne,qe.relatedTarget=Zt,Re=qe),Zt=Re,ze&&Ye)t:{for(qe=ze,J=Ye,Y=0,ne=qe;ne;ne=_s(ne))Y++;for(ne=0,Re=J;Re;Re=_s(Re))ne++;for(;0<Y-ne;)qe=_s(qe),Y--;for(;0<ne-Y;)J=_s(J),ne--;for(;Y--;){if(qe===J||J!==null&&qe===J.alternate)break t;qe=_s(qe),J=_s(J)}qe=null}else qe=null;ze!==null&&rh(Ae,we,ze,qe,!1),Ye!==null&&Zt!==null&&rh(Ae,Zt,Ye,qe,!0)}}e:{if(we=oe?Ss(oe):window,ze=we.nodeName&&we.nodeName.toLowerCase(),ze==="select"||ze==="input"&&we.type==="file")var Ke=bg;else if(Ff(we))if(zf)Ke=Ng;else{Ke=Cg;var st=Ag}else(ze=we.nodeName)&&ze.toLowerCase()==="input"&&(we.type==="checkbox"||we.type==="radio")&&(Ke=Rg);if(Ke&&(Ke=Ke(n,oe))){Of(Ae,Ke,a,Ee);break e}st&&st(n,we,oe),n==="focusout"&&(st=we._wrapperState)&&st.controlled&&we.type==="number"&&Mt(we,"number",we.value)}switch(st=oe?Ss(oe):window,n){case"focusin":(Ff(st)||st.contentEditable==="true")&&(xs=st,pc=oe,wa=null);break;case"focusout":wa=pc=xs=null;break;case"mousedown":mc=!0;break;case"contextmenu":case"mouseup":case"dragend":mc=!1,Yf(Ae,a,Ee);break;case"selectionchange":if(Dg)break;case"keydown":case"keyup":Yf(Ae,a,Ee)}var at;if(uc)e:{switch(n){case"compositionstart":var ct="onCompositionStart";break e;case"compositionend":ct="onCompositionEnd";break e;case"compositionupdate":ct="onCompositionUpdate";break e}ct=void 0}else gs?Uf(n,a)&&(ct="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ct="onCompositionStart");ct&&(Lf&&a.locale!=="ko"&&(gs||ct!=="onCompositionStart"?ct==="onCompositionEnd"&&gs&&(at=Af()):(lr=Ee,rc="value"in lr?lr.value:lr.textContent,gs=!0)),st=Eo(oe,ct),0<st.length&&(ct=new Nf(ct,n,null,a,Ee),Ae.push({event:ct,listeners:st}),at?ct.data=at:(at=kf(a),at!==null&&(ct.data=at)))),(at=Sg?Mg(n,a):wg(n,a))&&(oe=Eo(oe,"onBeforeInput"),0<oe.length&&(Ee=new Nf("onBeforeInput","beforeinput",null,a,Ee),Ae.push({event:Ee,listeners:oe}),Ee.data=at))}nh(Ae,i)})}function ba(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Eo(n,i){for(var a=i+"Capture",c=[];n!==null;){var f=n,m=f.stateNode;f.tag===5&&m!==null&&(f=m,m=un(n,a),m!=null&&c.unshift(ba(n,m,f)),m=un(n,i),m!=null&&c.push(ba(n,m,f))),n=n.return}return c}function _s(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function rh(n,i,a,c,f){for(var m=i._reactName,T=[];a!==null&&a!==c;){var k=a,B=k.alternate,oe=k.stateNode;if(B!==null&&B===c)break;k.tag===5&&oe!==null&&(k=oe,f?(B=un(a,m),B!=null&&T.unshift(ba(a,B,k))):f||(B=un(a,m),B!=null&&T.push(ba(a,B,k)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var Fg=/\r\n?/g,Og=/\u0000|\uFFFD/g;function sh(n){return(typeof n=="string"?n:""+n).replace(Fg,`
`).replace(Og,"")}function To(n,i,a){if(i=sh(i),sh(n)!==i&&a)throw Error(t(425))}function bo(){}var Sc=null,Mc=null;function wc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ec=typeof setTimeout=="function"?setTimeout:void 0,zg=typeof clearTimeout=="function"?clearTimeout:void 0,ah=typeof Promise=="function"?Promise:void 0,Bg=typeof queueMicrotask=="function"?queueMicrotask:typeof ah<"u"?function(n){return ah.resolve(null).then(n).catch(Vg)}:Ec;function Vg(n){setTimeout(function(){throw n})}function Tc(n,i){var a=i,c=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){n.removeChild(f),ga(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);ga(i)}function ur(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function oh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var ys=Math.random().toString(36).slice(2),Ei="__reactFiber$"+ys,Aa="__reactProps$"+ys,Ui="__reactContainer$"+ys,bc="__reactEvents$"+ys,Hg="__reactListeners$"+ys,Gg="__reactHandles$"+ys;function Br(n){var i=n[Ei];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Ui]||a[Ei]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=oh(n);n!==null;){if(a=n[Ei])return a;n=oh(n)}return i}n=a,a=n.parentNode}return null}function Ca(n){return n=n[Ei]||n[Ui],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ss(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ao(n){return n[Aa]||null}var Ac=[],Ms=-1;function dr(n){return{current:n}}function zt(n){0>Ms||(n.current=Ac[Ms],Ac[Ms]=null,Ms--)}function Ft(n,i){Ms++,Ac[Ms]=n.current,n.current=i}var fr={},gn=dr(fr),Pn=dr(!1),Vr=fr;function ws(n,i){var a=n.type.contextTypes;if(!a)return fr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},m;for(m in a)f[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Ln(n){return n=n.childContextTypes,n!=null}function Co(){zt(Pn),zt(gn)}function lh(n,i,a){if(gn.current!==fr)throw Error(t(168));Ft(gn,i),Ft(Pn,a)}function ch(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(t(108,re(n)||"Unknown",f));return I({},a,c)}function Ro(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||fr,Vr=gn.current,Ft(gn,n),Ft(Pn,Pn.current),!0}function uh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=ch(n,i,Vr),c.__reactInternalMemoizedMergedChildContext=n,zt(Pn),zt(gn),Ft(gn,n)):zt(Pn),Ft(Pn,a)}var ki=null,No=!1,Cc=!1;function dh(n){ki===null?ki=[n]:ki.push(n)}function jg(n){No=!0,dh(n)}function hr(){if(!Cc&&ki!==null){Cc=!0;var n=0,i=Lt;try{var a=ki;for(Lt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}ki=null,No=!1}catch(f){throw ki!==null&&(ki=ki.slice(n+1)),se(Fe,hr),f}finally{Lt=i,Cc=!1}}return null}var Es=[],Ts=0,Po=null,Lo=0,$n=[],Kn=0,Hr=null,Fi=1,Oi="";function Gr(n,i){Es[Ts++]=Lo,Es[Ts++]=Po,Po=n,Lo=i}function fh(n,i,a){$n[Kn++]=Fi,$n[Kn++]=Oi,$n[Kn++]=Hr,Hr=n;var c=Fi;n=Oi;var f=32-gt(c)-1;c&=~(1<<f),a+=1;var m=32-gt(i)+f;if(30<m){var T=f-f%5;m=(c&(1<<T)-1).toString(32),c>>=T,f-=T,Fi=1<<32-gt(i)+f|a<<f|c,Oi=m+n}else Fi=1<<m|a<<f|c,Oi=n}function Rc(n){n.return!==null&&(Gr(n,1),fh(n,1,0))}function Nc(n){for(;n===Po;)Po=Es[--Ts],Es[Ts]=null,Lo=Es[--Ts],Es[Ts]=null;for(;n===Hr;)Hr=$n[--Kn],$n[Kn]=null,Oi=$n[--Kn],$n[Kn]=null,Fi=$n[--Kn],$n[Kn]=null}var Bn=null,Vn=null,Vt=!1,ci=null;function hh(n,i){var a=ei(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function ph(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Bn=n,Vn=ur(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Bn=n,Vn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Hr!==null?{id:Fi,overflow:Oi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ei(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Bn=n,Vn=null,!0):!1;default:return!1}}function Pc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Lc(n){if(Vt){var i=Vn;if(i){var a=i;if(!ph(n,i)){if(Pc(n))throw Error(t(418));i=ur(a.nextSibling);var c=Bn;i&&ph(n,i)?hh(c,a):(n.flags=n.flags&-4097|2,Vt=!1,Bn=n)}}else{if(Pc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Vt=!1,Bn=n}}}function mh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Bn=n}function Do(n){if(n!==Bn)return!1;if(!Vt)return mh(n),Vt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!wc(n.type,n.memoizedProps)),i&&(i=Vn)){if(Pc(n))throw gh(),Error(t(418));for(;i;)hh(n,i),i=ur(i.nextSibling)}if(mh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Vn=ur(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Vn=null}}else Vn=Bn?ur(n.stateNode.nextSibling):null;return!0}function gh(){for(var n=Vn;n;)n=ur(n.nextSibling)}function bs(){Vn=Bn=null,Vt=!1}function Dc(n){ci===null?ci=[n]:ci.push(n)}var Wg=C.ReactCurrentBatchConfig;function Ra(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var f=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(T){var k=f.refs;T===null?delete k[m]:k[m]=T},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Io(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function xh(n){var i=n._init;return i(n._payload)}function vh(n){function i(J,Y){if(n){var ne=J.deletions;ne===null?(J.deletions=[Y],J.flags|=16):ne.push(Y)}}function a(J,Y){if(!n)return null;for(;Y!==null;)i(J,Y),Y=Y.sibling;return null}function c(J,Y){for(J=new Map;Y!==null;)Y.key!==null?J.set(Y.key,Y):J.set(Y.index,Y),Y=Y.sibling;return J}function f(J,Y){return J=Sr(J,Y),J.index=0,J.sibling=null,J}function m(J,Y,ne){return J.index=ne,n?(ne=J.alternate,ne!==null?(ne=ne.index,ne<Y?(J.flags|=2,Y):ne):(J.flags|=2,Y)):(J.flags|=1048576,Y)}function T(J){return n&&J.alternate===null&&(J.flags|=2),J}function k(J,Y,ne,Re){return Y===null||Y.tag!==6?(Y=Eu(ne,J.mode,Re),Y.return=J,Y):(Y=f(Y,ne),Y.return=J,Y)}function B(J,Y,ne,Re){var Ke=ne.type;return Ke===O?Ee(J,Y,ne.props.children,Re,ne.key):Y!==null&&(Y.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===ce&&xh(Ke)===Y.type)?(Re=f(Y,ne.props),Re.ref=Ra(J,Y,ne),Re.return=J,Re):(Re=rl(ne.type,ne.key,ne.props,null,J.mode,Re),Re.ref=Ra(J,Y,ne),Re.return=J,Re)}function oe(J,Y,ne,Re){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==ne.containerInfo||Y.stateNode.implementation!==ne.implementation?(Y=Tu(ne,J.mode,Re),Y.return=J,Y):(Y=f(Y,ne.children||[]),Y.return=J,Y)}function Ee(J,Y,ne,Re,Ke){return Y===null||Y.tag!==7?(Y=Zr(ne,J.mode,Re,Ke),Y.return=J,Y):(Y=f(Y,ne),Y.return=J,Y)}function Ae(J,Y,ne){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Y=Eu(""+Y,J.mode,ne),Y.return=J,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case $:return ne=rl(Y.type,Y.key,Y.props,null,J.mode,ne),ne.ref=Ra(J,null,Y),ne.return=J,ne;case F:return Y=Tu(Y,J.mode,ne),Y.return=J,Y;case ce:var Re=Y._init;return Ae(J,Re(Y._payload),ne)}if(ke(Y)||he(Y))return Y=Zr(Y,J.mode,ne,null),Y.return=J,Y;Io(J,Y)}return null}function we(J,Y,ne,Re){var Ke=Y!==null?Y.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number")return Ke!==null?null:k(J,Y,""+ne,Re);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case $:return ne.key===Ke?B(J,Y,ne,Re):null;case F:return ne.key===Ke?oe(J,Y,ne,Re):null;case ce:return Ke=ne._init,we(J,Y,Ke(ne._payload),Re)}if(ke(ne)||he(ne))return Ke!==null?null:Ee(J,Y,ne,Re,null);Io(J,ne)}return null}function ze(J,Y,ne,Re,Ke){if(typeof Re=="string"&&Re!==""||typeof Re=="number")return J=J.get(ne)||null,k(Y,J,""+Re,Ke);if(typeof Re=="object"&&Re!==null){switch(Re.$$typeof){case $:return J=J.get(Re.key===null?ne:Re.key)||null,B(Y,J,Re,Ke);case F:return J=J.get(Re.key===null?ne:Re.key)||null,oe(Y,J,Re,Ke);case ce:var st=Re._init;return ze(J,Y,ne,st(Re._payload),Ke)}if(ke(Re)||he(Re))return J=J.get(ne)||null,Ee(Y,J,Re,Ke,null);Io(Y,Re)}return null}function Ye(J,Y,ne,Re){for(var Ke=null,st=null,at=Y,ct=Y=0,ln=null;at!==null&&ct<ne.length;ct++){at.index>ct?(ln=at,at=null):ln=at.sibling;var Nt=we(J,at,ne[ct],Re);if(Nt===null){at===null&&(at=ln);break}n&&at&&Nt.alternate===null&&i(J,at),Y=m(Nt,Y,ct),st===null?Ke=Nt:st.sibling=Nt,st=Nt,at=ln}if(ct===ne.length)return a(J,at),Vt&&Gr(J,ct),Ke;if(at===null){for(;ct<ne.length;ct++)at=Ae(J,ne[ct],Re),at!==null&&(Y=m(at,Y,ct),st===null?Ke=at:st.sibling=at,st=at);return Vt&&Gr(J,ct),Ke}for(at=c(J,at);ct<ne.length;ct++)ln=ze(at,J,ct,ne[ct],Re),ln!==null&&(n&&ln.alternate!==null&&at.delete(ln.key===null?ct:ln.key),Y=m(ln,Y,ct),st===null?Ke=ln:st.sibling=ln,st=ln);return n&&at.forEach(function(Mr){return i(J,Mr)}),Vt&&Gr(J,ct),Ke}function qe(J,Y,ne,Re){var Ke=he(ne);if(typeof Ke!="function")throw Error(t(150));if(ne=Ke.call(ne),ne==null)throw Error(t(151));for(var st=Ke=null,at=Y,ct=Y=0,ln=null,Nt=ne.next();at!==null&&!Nt.done;ct++,Nt=ne.next()){at.index>ct?(ln=at,at=null):ln=at.sibling;var Mr=we(J,at,Nt.value,Re);if(Mr===null){at===null&&(at=ln);break}n&&at&&Mr.alternate===null&&i(J,at),Y=m(Mr,Y,ct),st===null?Ke=Mr:st.sibling=Mr,st=Mr,at=ln}if(Nt.done)return a(J,at),Vt&&Gr(J,ct),Ke;if(at===null){for(;!Nt.done;ct++,Nt=ne.next())Nt=Ae(J,Nt.value,Re),Nt!==null&&(Y=m(Nt,Y,ct),st===null?Ke=Nt:st.sibling=Nt,st=Nt);return Vt&&Gr(J,ct),Ke}for(at=c(J,at);!Nt.done;ct++,Nt=ne.next())Nt=ze(at,J,ct,Nt.value,Re),Nt!==null&&(n&&Nt.alternate!==null&&at.delete(Nt.key===null?ct:Nt.key),Y=m(Nt,Y,ct),st===null?Ke=Nt:st.sibling=Nt,st=Nt);return n&&at.forEach(function(Ex){return i(J,Ex)}),Vt&&Gr(J,ct),Ke}function Zt(J,Y,ne,Re){if(typeof ne=="object"&&ne!==null&&ne.type===O&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case $:e:{for(var Ke=ne.key,st=Y;st!==null;){if(st.key===Ke){if(Ke=ne.type,Ke===O){if(st.tag===7){a(J,st.sibling),Y=f(st,ne.props.children),Y.return=J,J=Y;break e}}else if(st.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===ce&&xh(Ke)===st.type){a(J,st.sibling),Y=f(st,ne.props),Y.ref=Ra(J,st,ne),Y.return=J,J=Y;break e}a(J,st);break}else i(J,st);st=st.sibling}ne.type===O?(Y=Zr(ne.props.children,J.mode,Re,ne.key),Y.return=J,J=Y):(Re=rl(ne.type,ne.key,ne.props,null,J.mode,Re),Re.ref=Ra(J,Y,ne),Re.return=J,J=Re)}return T(J);case F:e:{for(st=ne.key;Y!==null;){if(Y.key===st)if(Y.tag===4&&Y.stateNode.containerInfo===ne.containerInfo&&Y.stateNode.implementation===ne.implementation){a(J,Y.sibling),Y=f(Y,ne.children||[]),Y.return=J,J=Y;break e}else{a(J,Y);break}else i(J,Y);Y=Y.sibling}Y=Tu(ne,J.mode,Re),Y.return=J,J=Y}return T(J);case ce:return st=ne._init,Zt(J,Y,st(ne._payload),Re)}if(ke(ne))return Ye(J,Y,ne,Re);if(he(ne))return qe(J,Y,ne,Re);Io(J,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"?(ne=""+ne,Y!==null&&Y.tag===6?(a(J,Y.sibling),Y=f(Y,ne),Y.return=J,J=Y):(a(J,Y),Y=Eu(ne,J.mode,Re),Y.return=J,J=Y),T(J)):a(J,Y)}return Zt}var As=vh(!0),_h=vh(!1),Uo=dr(null),ko=null,Cs=null,Ic=null;function Uc(){Ic=Cs=ko=null}function kc(n){var i=Uo.current;zt(Uo),n._currentValue=i}function Fc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Rs(n,i){ko=n,Ic=Cs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Dn=!0),n.firstContext=null)}function Zn(n){var i=n._currentValue;if(Ic!==n)if(n={context:n,memoizedValue:i,next:null},Cs===null){if(ko===null)throw Error(t(308));Cs=n,ko.dependencies={lanes:0,firstContext:n}}else Cs=Cs.next=n;return i}var jr=null;function Oc(n){jr===null?jr=[n]:jr.push(n)}function yh(n,i,a,c){var f=i.interleaved;return f===null?(a.next=a,Oc(i)):(a.next=f.next,f.next=a),i.interleaved=a,zi(n,c)}function zi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var pr=!1;function zc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Bi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function mr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(bt&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,zi(n,a)}return f=c.interleaved,f===null?(i.next=i,Oc(c)):(i.next=f.next,f.next=i),c.interleaved=i,zi(n,a)}function Fo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Ql(n,a)}}function Mh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?f=m=T:m=m.next=T,a=a.next}while(a!==null);m===null?f=m=i:m=m.next=i}else f=m=i;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Oo(n,i,a,c){var f=n.updateQueue;pr=!1;var m=f.firstBaseUpdate,T=f.lastBaseUpdate,k=f.shared.pending;if(k!==null){f.shared.pending=null;var B=k,oe=B.next;B.next=null,T===null?m=oe:T.next=oe,T=B;var Ee=n.alternate;Ee!==null&&(Ee=Ee.updateQueue,k=Ee.lastBaseUpdate,k!==T&&(k===null?Ee.firstBaseUpdate=oe:k.next=oe,Ee.lastBaseUpdate=B))}if(m!==null){var Ae=f.baseState;T=0,Ee=oe=B=null,k=m;do{var we=k.lane,ze=k.eventTime;if((c&we)===we){Ee!==null&&(Ee=Ee.next={eventTime:ze,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var Ye=n,qe=k;switch(we=i,ze=a,qe.tag){case 1:if(Ye=qe.payload,typeof Ye=="function"){Ae=Ye.call(ze,Ae,we);break e}Ae=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=qe.payload,we=typeof Ye=="function"?Ye.call(ze,Ae,we):Ye,we==null)break e;Ae=I({},Ae,we);break e;case 2:pr=!0}}k.callback!==null&&k.lane!==0&&(n.flags|=64,we=f.effects,we===null?f.effects=[k]:we.push(k))}else ze={eventTime:ze,lane:we,tag:k.tag,payload:k.payload,callback:k.callback,next:null},Ee===null?(oe=Ee=ze,B=Ae):Ee=Ee.next=ze,T|=we;if(k=k.next,k===null){if(k=f.shared.pending,k===null)break;we=k,k=we.next,we.next=null,f.lastBaseUpdate=we,f.shared.pending=null}}while(!0);if(Ee===null&&(B=Ae),f.baseState=B,f.firstBaseUpdate=oe,f.lastBaseUpdate=Ee,i=f.shared.interleaved,i!==null){f=i;do T|=f.lane,f=f.next;while(f!==i)}else m===null&&(f.shared.lanes=0);Yr|=T,n.lanes=T,n.memoizedState=Ae}}function wh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var Na={},Ti=dr(Na),Pa=dr(Na),La=dr(Na);function Wr(n){if(n===Na)throw Error(t(174));return n}function Bc(n,i){switch(Ft(La,i),Ft(Pa,n),Ft(Ti,Na),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ge(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Ge(i,n)}zt(Ti),Ft(Ti,i)}function Ns(){zt(Ti),zt(Pa),zt(La)}function Eh(n){Wr(La.current);var i=Wr(Ti.current),a=Ge(i,n.type);i!==a&&(Ft(Pa,n),Ft(Ti,a))}function Vc(n){Pa.current===n&&(zt(Ti),zt(Pa))}var Ht=dr(0);function zo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Hc=[];function Gc(){for(var n=0;n<Hc.length;n++)Hc[n]._workInProgressVersionPrimary=null;Hc.length=0}var Bo=C.ReactCurrentDispatcher,jc=C.ReactCurrentBatchConfig,Xr=0,Gt=null,tn=null,an=null,Vo=!1,Da=!1,Ia=0,Xg=0;function xn(){throw Error(t(321))}function Wc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!li(n[a],i[a]))return!1;return!0}function Xc(n,i,a,c,f,m){if(Xr=m,Gt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Bo.current=n===null||n.memoizedState===null?Kg:Zg,n=a(c,f),Da){m=0;do{if(Da=!1,Ia=0,25<=m)throw Error(t(301));m+=1,an=tn=null,i.updateQueue=null,Bo.current=Jg,n=a(c,f)}while(Da)}if(Bo.current=jo,i=tn!==null&&tn.next!==null,Xr=0,an=tn=Gt=null,Vo=!1,i)throw Error(t(300));return n}function Yc(){var n=Ia!==0;return Ia=0,n}function bi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?Gt.memoizedState=an=n:an=an.next=n,an}function Jn(){if(tn===null){var n=Gt.alternate;n=n!==null?n.memoizedState:null}else n=tn.next;var i=an===null?Gt.memoizedState:an.next;if(i!==null)an=i,tn=n;else{if(n===null)throw Error(t(310));tn=n,n={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},an===null?Gt.memoizedState=an=n:an=an.next=n}return an}function Ua(n,i){return typeof i=="function"?i(n):i}function qc(n){var i=Jn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=tn,f=c.baseQueue,m=a.pending;if(m!==null){if(f!==null){var T=f.next;f.next=m.next,m.next=T}c.baseQueue=f=m,a.pending=null}if(f!==null){m=f.next,c=c.baseState;var k=T=null,B=null,oe=m;do{var Ee=oe.lane;if((Xr&Ee)===Ee)B!==null&&(B=B.next={lane:0,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),c=oe.hasEagerState?oe.eagerState:n(c,oe.action);else{var Ae={lane:Ee,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null};B===null?(k=B=Ae,T=c):B=B.next=Ae,Gt.lanes|=Ee,Yr|=Ee}oe=oe.next}while(oe!==null&&oe!==m);B===null?T=c:B.next=k,li(c,i.memoizedState)||(Dn=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=B,a.lastRenderedState=c}if(n=a.interleaved,n!==null){f=n;do m=f.lane,Gt.lanes|=m,Yr|=m,f=f.next;while(f!==n)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function $c(n){var i=Jn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,f=a.pending,m=i.memoizedState;if(f!==null){a.pending=null;var T=f=f.next;do m=n(m,T.action),T=T.next;while(T!==f);li(m,i.memoizedState)||(Dn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function Th(){}function bh(n,i){var a=Gt,c=Jn(),f=i(),m=!li(c.memoizedState,f);if(m&&(c.memoizedState=f,Dn=!0),c=c.queue,Kc(Rh.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||an!==null&&an.memoizedState.tag&1){if(a.flags|=2048,ka(9,Ch.bind(null,a,c,f,i),void 0,null),on===null)throw Error(t(349));(Xr&30)!==0||Ah(a,i,f)}return f}function Ah(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Gt.updateQueue,i===null?(i={lastEffect:null,stores:null},Gt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Ch(n,i,a,c){i.value=a,i.getSnapshot=c,Nh(i)&&Ph(n)}function Rh(n,i,a){return a(function(){Nh(i)&&Ph(n)})}function Nh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!li(n,a)}catch{return!0}}function Ph(n){var i=zi(n,1);i!==null&&hi(i,n,1,-1)}function Lh(n){var i=bi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:n},i.queue=n,n=n.dispatch=$g.bind(null,Gt,n),[i.memoizedState,n]}function ka(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Gt.updateQueue,i===null?(i={lastEffect:null,stores:null},Gt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Dh(){return Jn().memoizedState}function Ho(n,i,a,c){var f=bi();Gt.flags|=n,f.memoizedState=ka(1|i,a,void 0,c===void 0?null:c)}function Go(n,i,a,c){var f=Jn();c=c===void 0?null:c;var m=void 0;if(tn!==null){var T=tn.memoizedState;if(m=T.destroy,c!==null&&Wc(c,T.deps)){f.memoizedState=ka(i,a,m,c);return}}Gt.flags|=n,f.memoizedState=ka(1|i,a,m,c)}function Ih(n,i){return Ho(8390656,8,n,i)}function Kc(n,i){return Go(2048,8,n,i)}function Uh(n,i){return Go(4,2,n,i)}function kh(n,i){return Go(4,4,n,i)}function Fh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Oh(n,i,a){return a=a!=null?a.concat([n]):null,Go(4,4,Fh.bind(null,i,n),a)}function Zc(){}function zh(n,i){var a=Jn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Wc(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Bh(n,i){var a=Jn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Wc(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Vh(n,i,a){return(Xr&21)===0?(n.baseState&&(n.baseState=!1,Dn=!0),n.memoizedState=a):(li(a,i)||(a=En(),Gt.lanes|=a,Yr|=a,n.baseState=!0),i)}function Yg(n,i){var a=Lt;Lt=a!==0&&4>a?a:4,n(!0);var c=jc.transition;jc.transition={};try{n(!1),i()}finally{Lt=a,jc.transition=c}}function Hh(){return Jn().memoizedState}function qg(n,i,a){var c=_r(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Gh(n))jh(i,a);else if(a=yh(n,i,a,c),a!==null){var f=bn();hi(a,n,c,f),Wh(a,i,c)}}function $g(n,i,a){var c=_r(n),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Gh(n))jh(i,f);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var T=i.lastRenderedState,k=m(T,a);if(f.hasEagerState=!0,f.eagerState=k,li(k,T)){var B=i.interleaved;B===null?(f.next=f,Oc(i)):(f.next=B.next,B.next=f),i.interleaved=f;return}}catch{}finally{}a=yh(n,i,f,c),a!==null&&(f=bn(),hi(a,n,c,f),Wh(a,i,c))}}function Gh(n){var i=n.alternate;return n===Gt||i!==null&&i===Gt}function jh(n,i){Da=Vo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Wh(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Ql(n,a)}}var jo={readContext:Zn,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useInsertionEffect:xn,useLayoutEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useMutableSource:xn,useSyncExternalStore:xn,useId:xn,unstable_isNewReconciler:!1},Kg={readContext:Zn,useCallback:function(n,i){return bi().memoizedState=[n,i===void 0?null:i],n},useContext:Zn,useEffect:Ih,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Ho(4194308,4,Fh.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Ho(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ho(4,2,n,i)},useMemo:function(n,i){var a=bi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=bi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=qg.bind(null,Gt,n),[c.memoizedState,n]},useRef:function(n){var i=bi();return n={current:n},i.memoizedState=n},useState:Lh,useDebugValue:Zc,useDeferredValue:function(n){return bi().memoizedState=n},useTransition:function(){var n=Lh(!1),i=n[0];return n=Yg.bind(null,n[1]),bi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Gt,f=bi();if(Vt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),on===null)throw Error(t(349));(Xr&30)!==0||Ah(c,i,a)}f.memoizedState=a;var m={value:a,getSnapshot:i};return f.queue=m,Ih(Rh.bind(null,c,m,n),[n]),c.flags|=2048,ka(9,Ch.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=bi(),i=on.identifierPrefix;if(Vt){var a=Oi,c=Fi;a=(c&~(1<<32-gt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ia++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Xg++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Zg={readContext:Zn,useCallback:zh,useContext:Zn,useEffect:Kc,useImperativeHandle:Oh,useInsertionEffect:Uh,useLayoutEffect:kh,useMemo:Bh,useReducer:qc,useRef:Dh,useState:function(){return qc(Ua)},useDebugValue:Zc,useDeferredValue:function(n){var i=Jn();return Vh(i,tn.memoizedState,n)},useTransition:function(){var n=qc(Ua)[0],i=Jn().memoizedState;return[n,i]},useMutableSource:Th,useSyncExternalStore:bh,useId:Hh,unstable_isNewReconciler:!1},Jg={readContext:Zn,useCallback:zh,useContext:Zn,useEffect:Kc,useImperativeHandle:Oh,useInsertionEffect:Uh,useLayoutEffect:kh,useMemo:Bh,useReducer:$c,useRef:Dh,useState:function(){return $c(Ua)},useDebugValue:Zc,useDeferredValue:function(n){var i=Jn();return tn===null?i.memoizedState=n:Vh(i,tn.memoizedState,n)},useTransition:function(){var n=$c(Ua)[0],i=Jn().memoizedState;return[n,i]},useMutableSource:Th,useSyncExternalStore:bh,useId:Hh,unstable_isNewReconciler:!1};function ui(n,i){if(n&&n.defaultProps){i=I({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Jc(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:I({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Wo={isMounted:function(n){return(n=n._reactInternals)?Bt(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=bn(),f=_r(n),m=Bi(c,f);m.payload=i,a!=null&&(m.callback=a),i=mr(n,m,f),i!==null&&(hi(i,n,f,c),Fo(i,n,f))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=bn(),f=_r(n),m=Bi(c,f);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=mr(n,m,f),i!==null&&(hi(i,n,f,c),Fo(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=bn(),c=_r(n),f=Bi(a,c);f.tag=2,i!=null&&(f.callback=i),i=mr(n,f,c),i!==null&&(hi(i,n,c,a),Fo(i,n,c))}};function Xh(n,i,a,c,f,m,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,T):i.prototype&&i.prototype.isPureReactComponent?!Ma(a,c)||!Ma(f,m):!0}function Yh(n,i,a){var c=!1,f=fr,m=i.contextType;return typeof m=="object"&&m!==null?m=Zn(m):(f=Ln(i)?Vr:gn.current,c=i.contextTypes,m=(c=c!=null)?ws(n,f):fr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Wo,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=m),i}function qh(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Wo.enqueueReplaceState(i,i.state,null)}function Qc(n,i,a,c){var f=n.stateNode;f.props=a,f.state=n.memoizedState,f.refs={},zc(n);var m=i.contextType;typeof m=="object"&&m!==null?f.context=Zn(m):(m=Ln(i)?Vr:gn.current,f.context=ws(n,m)),f.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Jc(n,i,m,a),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Wo.enqueueReplaceState(f,f.state,null),Oo(n,a,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Ps(n,i){try{var a="",c=i;do a+=ee(c),c=c.return;while(c);var f=a}catch(m){f=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:f,digest:null}}function eu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function tu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Qg=typeof WeakMap=="function"?WeakMap:Map;function $h(n,i,a){a=Bi(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Jo||(Jo=!0,gu=c),tu(n,i)},a}function Kh(n,i,a){a=Bi(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;a.payload=function(){return c(f)},a.callback=function(){tu(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){tu(n,i),typeof c!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function Zh(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Qg;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(a)||(f.add(a),n=hx.bind(null,n,i,a),i.then(n,n))}function Jh(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Qh(n,i,a,c,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Bi(-1,1),i.tag=2,mr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var ex=C.ReactCurrentOwner,Dn=!1;function Tn(n,i,a,c){i.child=n===null?_h(i,null,a,c):As(i,n.child,a,c)}function ep(n,i,a,c,f){a=a.render;var m=i.ref;return Rs(i,f),c=Xc(n,i,a,c,m,f),a=Yc(),n!==null&&!Dn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Vi(n,i,f)):(Vt&&a&&Rc(i),i.flags|=1,Tn(n,i,c,f),i.child)}function tp(n,i,a,c,f){if(n===null){var m=a.type;return typeof m=="function"&&!wu(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,np(n,i,m,c,f)):(n=rl(a.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&f)===0){var T=m.memoizedProps;if(a=a.compare,a=a!==null?a:Ma,a(T,c)&&n.ref===i.ref)return Vi(n,i,f)}return i.flags|=1,n=Sr(m,c),n.ref=i.ref,n.return=i,i.child=n}function np(n,i,a,c,f){if(n!==null){var m=n.memoizedProps;if(Ma(m,c)&&n.ref===i.ref)if(Dn=!1,i.pendingProps=c=m,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Dn=!0);else return i.lanes=n.lanes,Vi(n,i,f)}return nu(n,i,a,c,f)}function ip(n,i,a){var c=i.pendingProps,f=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ft(Ds,Hn),Hn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ft(Ds,Hn),Hn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,Ft(Ds,Hn),Hn|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,Ft(Ds,Hn),Hn|=c;return Tn(n,i,f,a),i.child}function rp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function nu(n,i,a,c,f){var m=Ln(a)?Vr:gn.current;return m=ws(i,m),Rs(i,f),a=Xc(n,i,a,c,m,f),c=Yc(),n!==null&&!Dn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Vi(n,i,f)):(Vt&&c&&Rc(i),i.flags|=1,Tn(n,i,a,f),i.child)}function sp(n,i,a,c,f){if(Ln(a)){var m=!0;Ro(i)}else m=!1;if(Rs(i,f),i.stateNode===null)Yo(n,i),Yh(i,a,c),Qc(i,a,c,f),c=!0;else if(n===null){var T=i.stateNode,k=i.memoizedProps;T.props=k;var B=T.context,oe=a.contextType;typeof oe=="object"&&oe!==null?oe=Zn(oe):(oe=Ln(a)?Vr:gn.current,oe=ws(i,oe));var Ee=a.getDerivedStateFromProps,Ae=typeof Ee=="function"||typeof T.getSnapshotBeforeUpdate=="function";Ae||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(k!==c||B!==oe)&&qh(i,T,c,oe),pr=!1;var we=i.memoizedState;T.state=we,Oo(i,c,T,f),B=i.memoizedState,k!==c||we!==B||Pn.current||pr?(typeof Ee=="function"&&(Jc(i,a,Ee,c),B=i.memoizedState),(k=pr||Xh(i,a,k,c,we,B,oe))?(Ae||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=B),T.props=c,T.state=B,T.context=oe,c=k):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,Sh(n,i),k=i.memoizedProps,oe=i.type===i.elementType?k:ui(i.type,k),T.props=oe,Ae=i.pendingProps,we=T.context,B=a.contextType,typeof B=="object"&&B!==null?B=Zn(B):(B=Ln(a)?Vr:gn.current,B=ws(i,B));var ze=a.getDerivedStateFromProps;(Ee=typeof ze=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(k!==Ae||we!==B)&&qh(i,T,c,B),pr=!1,we=i.memoizedState,T.state=we,Oo(i,c,T,f);var Ye=i.memoizedState;k!==Ae||we!==Ye||Pn.current||pr?(typeof ze=="function"&&(Jc(i,a,ze,c),Ye=i.memoizedState),(oe=pr||Xh(i,a,oe,c,we,Ye,B)||!1)?(Ee||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,Ye,B),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,Ye,B)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||k===n.memoizedProps&&we===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&we===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Ye),T.props=c,T.state=Ye,T.context=B,c=oe):(typeof T.componentDidUpdate!="function"||k===n.memoizedProps&&we===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&we===n.memoizedState||(i.flags|=1024),c=!1)}return iu(n,i,a,c,m,f)}function iu(n,i,a,c,f,m){rp(n,i);var T=(i.flags&128)!==0;if(!c&&!T)return f&&uh(i,a,!1),Vi(n,i,m);c=i.stateNode,ex.current=i;var k=T&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&T?(i.child=As(i,n.child,null,m),i.child=As(i,null,k,m)):Tn(n,i,k,m),i.memoizedState=c.state,f&&uh(i,a,!0),i.child}function ap(n){var i=n.stateNode;i.pendingContext?lh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&lh(n,i.context,!1),Bc(n,i.containerInfo)}function op(n,i,a,c,f){return bs(),Dc(f),i.flags|=256,Tn(n,i,a,c),i.child}var ru={dehydrated:null,treeContext:null,retryLane:0};function su(n){return{baseLanes:n,cachePool:null,transitions:null}}function lp(n,i,a){var c=i.pendingProps,f=Ht.current,m=!1,T=(i.flags&128)!==0,k;if((k=T)||(k=n!==null&&n.memoizedState===null?!1:(f&2)!==0),k?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Ft(Ht,f&1),n===null)return Lc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,n=c.fallback,m?(c=i.mode,m=i.child,T={mode:"hidden",children:T},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=T):m=sl(T,c,0,null),n=Zr(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=su(a),i.memoizedState=ru,n):au(i,T));if(f=n.memoizedState,f!==null&&(k=f.dehydrated,k!==null))return tx(n,i,T,c,k,f,a);if(m){m=c.fallback,T=i.mode,f=n.child,k=f.sibling;var B={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=B,i.deletions=null):(c=Sr(f,B),c.subtreeFlags=f.subtreeFlags&14680064),k!==null?m=Sr(k,m):(m=Zr(m,T,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,T=n.child.memoizedState,T=T===null?su(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},m.memoizedState=T,m.childLanes=n.childLanes&~a,i.memoizedState=ru,c}return m=n.child,n=m.sibling,c=Sr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function au(n,i){return i=sl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Xo(n,i,a,c){return c!==null&&Dc(c),As(i,n.child,null,a),n=au(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function tx(n,i,a,c,f,m,T){if(a)return i.flags&256?(i.flags&=-257,c=eu(Error(t(422))),Xo(n,i,T,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,f=i.mode,c=sl({mode:"visible",children:c.children},f,0,null),m=Zr(m,f,T,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&As(i,n.child,null,T),i.child.memoizedState=su(T),i.memoizedState=ru,m);if((i.mode&1)===0)return Xo(n,i,T,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var k=c.dgst;return c=k,m=Error(t(419)),c=eu(m,c,void 0),Xo(n,i,T,c)}if(k=(T&n.childLanes)!==0,Dn||k){if(c=on,c!==null){switch(T&-T){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|T))!==0?0:f,f!==0&&f!==m.retryLane&&(m.retryLane=f,zi(n,f),hi(c,n,f,-1))}return Mu(),c=eu(Error(t(421))),Xo(n,i,T,c)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=px.bind(null,n),f._reactRetry=i,null):(n=m.treeContext,Vn=ur(f.nextSibling),Bn=i,Vt=!0,ci=null,n!==null&&($n[Kn++]=Fi,$n[Kn++]=Oi,$n[Kn++]=Hr,Fi=n.id,Oi=n.overflow,Hr=i),i=au(i,c.children),i.flags|=4096,i)}function cp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Fc(n.return,i,a)}function ou(n,i,a,c,f){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=f)}function up(n,i,a){var c=i.pendingProps,f=c.revealOrder,m=c.tail;if(Tn(n,i,c.children,a),c=Ht.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&cp(n,a,i);else if(n.tag===19)cp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ft(Ht,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&zo(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),ou(i,!1,f,a,m);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&zo(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}ou(i,!0,a,null,m);break;case"together":ou(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Yo(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Vi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Yr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Sr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Sr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function nx(n,i,a){switch(i.tag){case 3:ap(i),bs();break;case 5:Eh(i);break;case 1:Ln(i.type)&&Ro(i);break;case 4:Bc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Ft(Uo,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Ft(Ht,Ht.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?lp(n,i,a):(Ft(Ht,Ht.current&1),n=Vi(n,i,a),n!==null?n.sibling:null);Ft(Ht,Ht.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return up(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ft(Ht,Ht.current),c)break;return null;case 22:case 23:return i.lanes=0,ip(n,i,a)}return Vi(n,i,a)}var dp,lu,fp,hp;dp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},lu=function(){},fp=function(n,i,a,c){var f=n.memoizedProps;if(f!==c){n=i.stateNode,Wr(Ti.current);var m=null;switch(a){case"input":f=z(n,f),c=z(n,c),m=[];break;case"select":f=I({},f,{value:void 0}),c=I({},c,{value:void 0}),m=[];break;case"textarea":f=A(n,f),c=A(n,c),m=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=bo)}xt(a,c);var T;a=null;for(oe in f)if(!c.hasOwnProperty(oe)&&f.hasOwnProperty(oe)&&f[oe]!=null)if(oe==="style"){var k=f[oe];for(T in k)k.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else oe!=="dangerouslySetInnerHTML"&&oe!=="children"&&oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&oe!=="autoFocus"&&(o.hasOwnProperty(oe)?m||(m=[]):(m=m||[]).push(oe,null));for(oe in c){var B=c[oe];if(k=f!=null?f[oe]:void 0,c.hasOwnProperty(oe)&&B!==k&&(B!=null||k!=null))if(oe==="style")if(k){for(T in k)!k.hasOwnProperty(T)||B&&B.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in B)B.hasOwnProperty(T)&&k[T]!==B[T]&&(a||(a={}),a[T]=B[T])}else a||(m||(m=[]),m.push(oe,a)),a=B;else oe==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,k=k?k.__html:void 0,B!=null&&k!==B&&(m=m||[]).push(oe,B)):oe==="children"?typeof B!="string"&&typeof B!="number"||(m=m||[]).push(oe,""+B):oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&(o.hasOwnProperty(oe)?(B!=null&&oe==="onScroll"&&Ot("scroll",n),m||k===B||(m=[])):(m=m||[]).push(oe,B))}a&&(m=m||[]).push("style",a);var oe=m;(i.updateQueue=oe)&&(i.flags|=4)}},hp=function(n,i,a,c){a!==c&&(i.flags|=4)};function Fa(n,i){if(!Vt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function vn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function ix(n,i,a){var c=i.pendingProps;switch(Nc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vn(i),null;case 1:return Ln(i.type)&&Co(),vn(i),null;case 3:return c=i.stateNode,Ns(),zt(Pn),zt(gn),Gc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Do(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ci!==null&&(_u(ci),ci=null))),lu(n,i),vn(i),null;case 5:Vc(i);var f=Wr(La.current);if(a=i.type,n!==null&&i.stateNode!=null)fp(n,i,a,c,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return vn(i),null}if(n=Wr(Ti.current),Do(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[Ei]=i,c[Aa]=m,n=(i.mode&1)!==0,a){case"dialog":Ot("cancel",c),Ot("close",c);break;case"iframe":case"object":case"embed":Ot("load",c);break;case"video":case"audio":for(f=0;f<Ea.length;f++)Ot(Ea[f],c);break;case"source":Ot("error",c);break;case"img":case"image":case"link":Ot("error",c),Ot("load",c);break;case"details":Ot("toggle",c);break;case"input":Ct(c,m),Ot("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Ot("invalid",c);break;case"textarea":te(c,m),Ot("invalid",c)}xt(a,m),f=null;for(var T in m)if(m.hasOwnProperty(T)){var k=m[T];T==="children"?typeof k=="string"?c.textContent!==k&&(m.suppressHydrationWarning!==!0&&To(c.textContent,k,n),f=["children",k]):typeof k=="number"&&c.textContent!==""+k&&(m.suppressHydrationWarning!==!0&&To(c.textContent,k,n),f=["children",""+k]):o.hasOwnProperty(T)&&k!=null&&T==="onScroll"&&Ot("scroll",c)}switch(a){case"input":Je(c),We(c,m,!0);break;case"textarea":Je(c),Se(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=bo)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=me(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=T.createElement(a,{is:c.is}):(n=T.createElement(a),a==="select"&&(T=n,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):n=T.createElementNS(n,a),n[Ei]=i,n[Aa]=c,dp(n,i,!1,!1),i.stateNode=n;e:{switch(T=Qe(a,c),a){case"dialog":Ot("cancel",n),Ot("close",n),f=c;break;case"iframe":case"object":case"embed":Ot("load",n),f=c;break;case"video":case"audio":for(f=0;f<Ea.length;f++)Ot(Ea[f],n);f=c;break;case"source":Ot("error",n),f=c;break;case"img":case"image":case"link":Ot("error",n),Ot("load",n),f=c;break;case"details":Ot("toggle",n),f=c;break;case"input":Ct(n,c),f=z(n,c),Ot("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=I({},c,{value:void 0}),Ot("invalid",n);break;case"textarea":te(n,c),f=A(n,c),Ot("invalid",n);break;default:f=c}xt(a,f),k=f;for(m in k)if(k.hasOwnProperty(m)){var B=k[m];m==="style"?it(n,B):m==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&Ue(n,B)):m==="children"?typeof B=="string"?(a!=="textarea"||B!=="")&&ft(n,B):typeof B=="number"&&ft(n,""+B):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?B!=null&&m==="onScroll"&&Ot("scroll",n):B!=null&&L(n,m,B,T))}switch(a){case"input":Je(n),We(n,c,!1);break;case"textarea":Je(n),Se(n);break;case"option":c.value!=null&&n.setAttribute("value",""+ge(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?D(n,!!c.multiple,m,!1):c.defaultValue!=null&&D(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=bo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return vn(i),null;case 6:if(n&&i.stateNode!=null)hp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Wr(La.current),Wr(Ti.current),Do(i)){if(c=i.stateNode,a=i.memoizedProps,c[Ei]=i,(m=c.nodeValue!==a)&&(n=Bn,n!==null))switch(n.tag){case 3:To(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&To(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Ei]=i,i.stateNode=c}return vn(i),null;case 13:if(zt(Ht),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Vt&&Vn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)gh(),bs(),i.flags|=98560,m=!1;else if(m=Do(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Ei]=i}else bs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;vn(i),m=!1}else ci!==null&&(_u(ci),ci=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Ht.current&1)!==0?nn===0&&(nn=3):Mu())),i.updateQueue!==null&&(i.flags|=4),vn(i),null);case 4:return Ns(),lu(n,i),n===null&&Ta(i.stateNode.containerInfo),vn(i),null;case 10:return kc(i.type._context),vn(i),null;case 17:return Ln(i.type)&&Co(),vn(i),null;case 19:if(zt(Ht),m=i.memoizedState,m===null)return vn(i),null;if(c=(i.flags&128)!==0,T=m.rendering,T===null)if(c)Fa(m,!1);else{if(nn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=zo(n),T!==null){for(i.flags|=128,Fa(m,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,T=m.alternate,T===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=T.childLanes,m.lanes=T.lanes,m.child=T.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=T.memoizedProps,m.memoizedState=T.memoizedState,m.updateQueue=T.updateQueue,m.type=T.type,n=T.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ft(Ht,Ht.current&1|2),i.child}n=n.sibling}m.tail!==null&&Me()>Is&&(i.flags|=128,c=!0,Fa(m,!1),i.lanes=4194304)}else{if(!c)if(n=zo(T),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Fa(m,!0),m.tail===null&&m.tailMode==="hidden"&&!T.alternate&&!Vt)return vn(i),null}else 2*Me()-m.renderingStartTime>Is&&a!==1073741824&&(i.flags|=128,c=!0,Fa(m,!1),i.lanes=4194304);m.isBackwards?(T.sibling=i.child,i.child=T):(a=m.last,a!==null?a.sibling=T:i.child=T,m.last=T)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Me(),i.sibling=null,a=Ht.current,Ft(Ht,c?a&1|2:a&1),i):(vn(i),null);case 22:case 23:return Su(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Hn&1073741824)!==0&&(vn(i),i.subtreeFlags&6&&(i.flags|=8192)):vn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function rx(n,i){switch(Nc(i),i.tag){case 1:return Ln(i.type)&&Co(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ns(),zt(Pn),zt(gn),Gc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Vc(i),null;case 13:if(zt(Ht),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));bs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return zt(Ht),null;case 4:return Ns(),null;case 10:return kc(i.type._context),null;case 22:case 23:return Su(),null;case 24:return null;default:return null}}var qo=!1,_n=!1,sx=typeof WeakSet=="function"?WeakSet:Set,je=null;function Ls(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Xt(n,i,c)}else a.current=null}function cu(n,i,a){try{a()}catch(c){Xt(n,i,c)}}var pp=!1;function ax(n,i){if(Sc=po,n=Xf(),hc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var T=0,k=-1,B=-1,oe=0,Ee=0,Ae=n,we=null;t:for(;;){for(var ze;Ae!==a||f!==0&&Ae.nodeType!==3||(k=T+f),Ae!==m||c!==0&&Ae.nodeType!==3||(B=T+c),Ae.nodeType===3&&(T+=Ae.nodeValue.length),(ze=Ae.firstChild)!==null;)we=Ae,Ae=ze;for(;;){if(Ae===n)break t;if(we===a&&++oe===f&&(k=T),we===m&&++Ee===c&&(B=T),(ze=Ae.nextSibling)!==null)break;Ae=we,we=Ae.parentNode}Ae=ze}a=k===-1||B===-1?null:{start:k,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Mc={focusedElem:n,selectionRange:a},po=!1,je=i;je!==null;)if(i=je,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,je=n;else for(;je!==null;){i=je;try{var Ye=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ye!==null){var qe=Ye.memoizedProps,Zt=Ye.memoizedState,J=i.stateNode,Y=J.getSnapshotBeforeUpdate(i.elementType===i.type?qe:ui(i.type,qe),Zt);J.__reactInternalSnapshotBeforeUpdate=Y}break;case 3:var ne=i.stateNode.containerInfo;ne.nodeType===1?ne.textContent="":ne.nodeType===9&&ne.documentElement&&ne.removeChild(ne.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Re){Xt(i,i.return,Re)}if(n=i.sibling,n!==null){n.return=i.return,je=n;break}je=i.return}return Ye=pp,pp=!1,Ye}function Oa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var m=f.destroy;f.destroy=void 0,m!==void 0&&cu(i,a,m)}f=f.next}while(f!==c)}}function $o(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function uu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function mp(n){var i=n.alternate;i!==null&&(n.alternate=null,mp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ei],delete i[Aa],delete i[bc],delete i[Hg],delete i[Gg])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function gp(n){return n.tag===5||n.tag===3||n.tag===4}function xp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||gp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function du(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=bo));else if(c!==4&&(n=n.child,n!==null))for(du(n,i,a),n=n.sibling;n!==null;)du(n,i,a),n=n.sibling}function fu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(fu(n,i,a),n=n.sibling;n!==null;)fu(n,i,a),n=n.sibling}var dn=null,di=!1;function gr(n,i,a){for(a=a.child;a!==null;)vp(n,i,a),a=a.sibling}function vp(n,i,a){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(wt,a)}catch{}switch(a.tag){case 5:_n||Ls(a,i);case 6:var c=dn,f=di;dn=null,gr(n,i,a),dn=c,di=f,dn!==null&&(di?(n=dn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):dn.removeChild(a.stateNode));break;case 18:dn!==null&&(di?(n=dn,a=a.stateNode,n.nodeType===8?Tc(n.parentNode,a):n.nodeType===1&&Tc(n,a),ga(n)):Tc(dn,a.stateNode));break;case 4:c=dn,f=di,dn=a.stateNode.containerInfo,di=!0,gr(n,i,a),dn=c,di=f;break;case 0:case 11:case 14:case 15:if(!_n&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var m=f,T=m.destroy;m=m.tag,T!==void 0&&((m&2)!==0||(m&4)!==0)&&cu(a,i,T),f=f.next}while(f!==c)}gr(n,i,a);break;case 1:if(!_n&&(Ls(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(k){Xt(a,i,k)}gr(n,i,a);break;case 21:gr(n,i,a);break;case 22:a.mode&1?(_n=(c=_n)||a.memoizedState!==null,gr(n,i,a),_n=c):gr(n,i,a);break;default:gr(n,i,a)}}function _p(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new sx),i.forEach(function(c){var f=mx.bind(null,n,c);a.has(c)||(a.add(c),c.then(f,f))})}}function fi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var m=n,T=i,k=T;e:for(;k!==null;){switch(k.tag){case 5:dn=k.stateNode,di=!1;break e;case 3:dn=k.stateNode.containerInfo,di=!0;break e;case 4:dn=k.stateNode.containerInfo,di=!0;break e}k=k.return}if(dn===null)throw Error(t(160));vp(m,T,f),dn=null,di=!1;var B=f.alternate;B!==null&&(B.return=null),f.return=null}catch(oe){Xt(f,i,oe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)yp(i,n),i=i.sibling}function yp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(fi(i,n),Ai(n),c&4){try{Oa(3,n,n.return),$o(3,n)}catch(qe){Xt(n,n.return,qe)}try{Oa(5,n,n.return)}catch(qe){Xt(n,n.return,qe)}}break;case 1:fi(i,n),Ai(n),c&512&&a!==null&&Ls(a,a.return);break;case 5:if(fi(i,n),Ai(n),c&512&&a!==null&&Ls(a,a.return),n.flags&32){var f=n.stateNode;try{ft(f,"")}catch(qe){Xt(n,n.return,qe)}}if(c&4&&(f=n.stateNode,f!=null)){var m=n.memoizedProps,T=a!==null?a.memoizedProps:m,k=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{k==="input"&&m.type==="radio"&&m.name!=null&&nt(f,m),Qe(k,T);var oe=Qe(k,m);for(T=0;T<B.length;T+=2){var Ee=B[T],Ae=B[T+1];Ee==="style"?it(f,Ae):Ee==="dangerouslySetInnerHTML"?Ue(f,Ae):Ee==="children"?ft(f,Ae):L(f,Ee,Ae,oe)}switch(k){case"input":Oe(f,m);break;case"textarea":_e(f,m);break;case"select":var we=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!m.multiple;var ze=m.value;ze!=null?D(f,!!m.multiple,ze,!1):we!==!!m.multiple&&(m.defaultValue!=null?D(f,!!m.multiple,m.defaultValue,!0):D(f,!!m.multiple,m.multiple?[]:"",!1))}f[Aa]=m}catch(qe){Xt(n,n.return,qe)}}break;case 6:if(fi(i,n),Ai(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,m=n.memoizedProps;try{f.nodeValue=m}catch(qe){Xt(n,n.return,qe)}}break;case 3:if(fi(i,n),Ai(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ga(i.containerInfo)}catch(qe){Xt(n,n.return,qe)}break;case 4:fi(i,n),Ai(n);break;case 13:fi(i,n),Ai(n),f=n.child,f.flags&8192&&(m=f.memoizedState!==null,f.stateNode.isHidden=m,!m||f.alternate!==null&&f.alternate.memoizedState!==null||(mu=Me())),c&4&&_p(n);break;case 22:if(Ee=a!==null&&a.memoizedState!==null,n.mode&1?(_n=(oe=_n)||Ee,fi(i,n),_n=oe):fi(i,n),Ai(n),c&8192){if(oe=n.memoizedState!==null,(n.stateNode.isHidden=oe)&&!Ee&&(n.mode&1)!==0)for(je=n,Ee=n.child;Ee!==null;){for(Ae=je=Ee;je!==null;){switch(we=je,ze=we.child,we.tag){case 0:case 11:case 14:case 15:Oa(4,we,we.return);break;case 1:Ls(we,we.return);var Ye=we.stateNode;if(typeof Ye.componentWillUnmount=="function"){c=we,a=we.return;try{i=c,Ye.props=i.memoizedProps,Ye.state=i.memoizedState,Ye.componentWillUnmount()}catch(qe){Xt(c,a,qe)}}break;case 5:Ls(we,we.return);break;case 22:if(we.memoizedState!==null){wp(Ae);continue}}ze!==null?(ze.return=we,je=ze):wp(Ae)}Ee=Ee.sibling}e:for(Ee=null,Ae=n;;){if(Ae.tag===5){if(Ee===null){Ee=Ae;try{f=Ae.stateNode,oe?(m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(k=Ae.stateNode,B=Ae.memoizedProps.style,T=B!=null&&B.hasOwnProperty("display")?B.display:null,k.style.display=et("display",T))}catch(qe){Xt(n,n.return,qe)}}}else if(Ae.tag===6){if(Ee===null)try{Ae.stateNode.nodeValue=oe?"":Ae.memoizedProps}catch(qe){Xt(n,n.return,qe)}}else if((Ae.tag!==22&&Ae.tag!==23||Ae.memoizedState===null||Ae===n)&&Ae.child!==null){Ae.child.return=Ae,Ae=Ae.child;continue}if(Ae===n)break e;for(;Ae.sibling===null;){if(Ae.return===null||Ae.return===n)break e;Ee===Ae&&(Ee=null),Ae=Ae.return}Ee===Ae&&(Ee=null),Ae.sibling.return=Ae.return,Ae=Ae.sibling}}break;case 19:fi(i,n),Ai(n),c&4&&_p(n);break;case 21:break;default:fi(i,n),Ai(n)}}function Ai(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(gp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(ft(f,""),c.flags&=-33);var m=xp(n);fu(n,m,f);break;case 3:case 4:var T=c.stateNode.containerInfo,k=xp(n);du(n,k,T);break;default:throw Error(t(161))}}catch(B){Xt(n,n.return,B)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function ox(n,i,a){je=n,Sp(n)}function Sp(n,i,a){for(var c=(n.mode&1)!==0;je!==null;){var f=je,m=f.child;if(f.tag===22&&c){var T=f.memoizedState!==null||qo;if(!T){var k=f.alternate,B=k!==null&&k.memoizedState!==null||_n;k=qo;var oe=_n;if(qo=T,(_n=B)&&!oe)for(je=f;je!==null;)T=je,B=T.child,T.tag===22&&T.memoizedState!==null?Ep(f):B!==null?(B.return=T,je=B):Ep(f);for(;m!==null;)je=m,Sp(m),m=m.sibling;je=f,qo=k,_n=oe}Mp(n)}else(f.subtreeFlags&8772)!==0&&m!==null?(m.return=f,je=m):Mp(n)}}function Mp(n){for(;je!==null;){var i=je;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:_n||$o(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!_n)if(a===null)c.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:ui(i.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&wh(i,m,c);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}wh(i,T,a)}break;case 5:var k=i.stateNode;if(a===null&&i.flags&4){a=k;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&a.focus();break;case"img":B.src&&(a.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var oe=i.alternate;if(oe!==null){var Ee=oe.memoizedState;if(Ee!==null){var Ae=Ee.dehydrated;Ae!==null&&ga(Ae)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}_n||i.flags&512&&uu(i)}catch(we){Xt(i,i.return,we)}}if(i===n){je=null;break}if(a=i.sibling,a!==null){a.return=i.return,je=a;break}je=i.return}}function wp(n){for(;je!==null;){var i=je;if(i===n){je=null;break}var a=i.sibling;if(a!==null){a.return=i.return,je=a;break}je=i.return}}function Ep(n){for(;je!==null;){var i=je;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{$o(4,i)}catch(B){Xt(i,a,B)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(B){Xt(i,f,B)}}var m=i.return;try{uu(i)}catch(B){Xt(i,m,B)}break;case 5:var T=i.return;try{uu(i)}catch(B){Xt(i,T,B)}}}catch(B){Xt(i,i.return,B)}if(i===n){je=null;break}var k=i.sibling;if(k!==null){k.return=i.return,je=k;break}je=i.return}}var lx=Math.ceil,Ko=C.ReactCurrentDispatcher,hu=C.ReactCurrentOwner,Qn=C.ReactCurrentBatchConfig,bt=0,on=null,Jt=null,fn=0,Hn=0,Ds=dr(0),nn=0,za=null,Yr=0,Zo=0,pu=0,Ba=null,In=null,mu=0,Is=1/0,Hi=null,Jo=!1,gu=null,xr=null,Qo=!1,vr=null,el=0,Va=0,xu=null,tl=-1,nl=0;function bn(){return(bt&6)!==0?Me():tl!==-1?tl:tl=Me()}function _r(n){return(n.mode&1)===0?1:(bt&2)!==0&&fn!==0?fn&-fn:Wg.transition!==null?(nl===0&&(nl=En()),nl):(n=Lt,n!==0||(n=window.event,n=n===void 0?16:bf(n.type)),n)}function hi(n,i,a,c){if(50<Va)throw Va=0,xu=null,Error(t(185));Nn(n,a,c),((bt&2)===0||n!==on)&&(n===on&&((bt&2)===0&&(Zo|=a),nn===4&&yr(n,fn)),Un(n,c),a===1&&bt===0&&(i.mode&1)===0&&(Is=Me()+500,No&&hr()))}function Un(n,i){var a=n.callbackNode;Yn(n,i);var c=wi(n,n===on?fn:0);if(c===0)a!==null&&ae(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&ae(a),i===1)n.tag===0?jg(bp.bind(null,n)):dh(bp.bind(null,n)),Bg(function(){(bt&6)===0&&hr()}),a=null;else{switch(vf(c)){case 1:a=Fe;break;case 4:a=tt;break;case 16:a=rt;break;case 536870912:a=_t;break;default:a=rt}a=Ip(a,Tp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Tp(n,i){if(tl=-1,nl=0,(bt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Us()&&n.callbackNode!==a)return null;var c=wi(n,n===on?fn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=il(n,c);else{i=c;var f=bt;bt|=2;var m=Cp();(on!==n||fn!==i)&&(Hi=null,Is=Me()+500,$r(n,i));do try{dx();break}catch(k){Ap(n,k)}while(!0);Uc(),Ko.current=m,bt=f,Jt!==null?i=0:(on=null,fn=0,i=nn)}if(i!==0){if(i===2&&(f=Ii(n),f!==0&&(c=f,i=vu(n,f))),i===1)throw a=za,$r(n,0),yr(n,c),Un(n,Me()),a;if(i===6)yr(n,c);else{if(f=n.current.alternate,(c&30)===0&&!cx(f)&&(i=il(n,c),i===2&&(m=Ii(n),m!==0&&(c=m,i=vu(n,m))),i===1))throw a=za,$r(n,0),yr(n,c),Un(n,Me()),a;switch(n.finishedWork=f,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Kr(n,In,Hi);break;case 3:if(yr(n,c),(c&130023424)===c&&(i=mu+500-Me(),10<i)){if(wi(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){bn(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=Ec(Kr.bind(null,n,In,Hi),i);break}Kr(n,In,Hi);break;case 4:if(yr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,f=-1;0<c;){var T=31-gt(c);m=1<<T,T=i[T],T>f&&(f=T),c&=~m}if(c=f,c=Me()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*lx(c/1960))-c,10<c){n.timeoutHandle=Ec(Kr.bind(null,n,In,Hi),c);break}Kr(n,In,Hi);break;case 5:Kr(n,In,Hi);break;default:throw Error(t(329))}}}return Un(n,Me()),n.callbackNode===a?Tp.bind(null,n):null}function vu(n,i){var a=Ba;return n.current.memoizedState.isDehydrated&&($r(n,i).flags|=256),n=il(n,i),n!==2&&(i=In,In=a,i!==null&&_u(i)),n}function _u(n){In===null?In=n:In.push.apply(In,n)}function cx(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],m=f.getSnapshot;f=f.value;try{if(!li(m(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function yr(n,i){for(i&=~pu,i&=~Zo,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-gt(i),c=1<<a;n[a]=-1,i&=~c}}function bp(n){if((bt&6)!==0)throw Error(t(327));Us();var i=wi(n,0);if((i&1)===0)return Un(n,Me()),null;var a=il(n,i);if(n.tag!==0&&a===2){var c=Ii(n);c!==0&&(i=c,a=vu(n,c))}if(a===1)throw a=za,$r(n,0),yr(n,i),Un(n,Me()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Kr(n,In,Hi),Un(n,Me()),null}function yu(n,i){var a=bt;bt|=1;try{return n(i)}finally{bt=a,bt===0&&(Is=Me()+500,No&&hr())}}function qr(n){vr!==null&&vr.tag===0&&(bt&6)===0&&Us();var i=bt;bt|=1;var a=Qn.transition,c=Lt;try{if(Qn.transition=null,Lt=1,n)return n()}finally{Lt=c,Qn.transition=a,bt=i,(bt&6)===0&&hr()}}function Su(){Hn=Ds.current,zt(Ds)}function $r(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,zg(a)),Jt!==null)for(a=Jt.return;a!==null;){var c=a;switch(Nc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Co();break;case 3:Ns(),zt(Pn),zt(gn),Gc();break;case 5:Vc(c);break;case 4:Ns();break;case 13:zt(Ht);break;case 19:zt(Ht);break;case 10:kc(c.type._context);break;case 22:case 23:Su()}a=a.return}if(on=n,Jt=n=Sr(n.current,null),fn=Hn=i,nn=0,za=null,pu=Zo=Yr=0,In=Ba=null,jr!==null){for(i=0;i<jr.length;i++)if(a=jr[i],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,m=a.pending;if(m!==null){var T=m.next;m.next=f,c.next=T}a.pending=c}jr=null}return n}function Ap(n,i){do{var a=Jt;try{if(Uc(),Bo.current=jo,Vo){for(var c=Gt.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}Vo=!1}if(Xr=0,an=tn=Gt=null,Da=!1,Ia=0,hu.current=null,a===null||a.return===null){nn=1,za=i,Jt=null;break}e:{var m=n,T=a.return,k=a,B=i;if(i=fn,k.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var oe=B,Ee=k,Ae=Ee.tag;if((Ee.mode&1)===0&&(Ae===0||Ae===11||Ae===15)){var we=Ee.alternate;we?(Ee.updateQueue=we.updateQueue,Ee.memoizedState=we.memoizedState,Ee.lanes=we.lanes):(Ee.updateQueue=null,Ee.memoizedState=null)}var ze=Jh(T);if(ze!==null){ze.flags&=-257,Qh(ze,T,k,m,i),ze.mode&1&&Zh(m,oe,i),i=ze,B=oe;var Ye=i.updateQueue;if(Ye===null){var qe=new Set;qe.add(B),i.updateQueue=qe}else Ye.add(B);break e}else{if((i&1)===0){Zh(m,oe,i),Mu();break e}B=Error(t(426))}}else if(Vt&&k.mode&1){var Zt=Jh(T);if(Zt!==null){(Zt.flags&65536)===0&&(Zt.flags|=256),Qh(Zt,T,k,m,i),Dc(Ps(B,k));break e}}m=B=Ps(B,k),nn!==4&&(nn=2),Ba===null?Ba=[m]:Ba.push(m),m=T;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var J=$h(m,B,i);Mh(m,J);break e;case 1:k=B;var Y=m.type,ne=m.stateNode;if((m.flags&128)===0&&(typeof Y.getDerivedStateFromError=="function"||ne!==null&&typeof ne.componentDidCatch=="function"&&(xr===null||!xr.has(ne)))){m.flags|=65536,i&=-i,m.lanes|=i;var Re=Kh(m,k,i);Mh(m,Re);break e}}m=m.return}while(m!==null)}Np(a)}catch(Ke){i=Ke,Jt===a&&a!==null&&(Jt=a=a.return);continue}break}while(!0)}function Cp(){var n=Ko.current;return Ko.current=jo,n===null?jo:n}function Mu(){(nn===0||nn===3||nn===2)&&(nn=4),on===null||(Yr&268435455)===0&&(Zo&268435455)===0||yr(on,fn)}function il(n,i){var a=bt;bt|=2;var c=Cp();(on!==n||fn!==i)&&(Hi=null,$r(n,i));do try{ux();break}catch(f){Ap(n,f)}while(!0);if(Uc(),bt=a,Ko.current=c,Jt!==null)throw Error(t(261));return on=null,fn=0,nn}function ux(){for(;Jt!==null;)Rp(Jt)}function dx(){for(;Jt!==null&&!G();)Rp(Jt)}function Rp(n){var i=Dp(n.alternate,n,Hn);n.memoizedProps=n.pendingProps,i===null?Np(n):Jt=i,hu.current=null}function Np(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=ix(a,i,Hn),a!==null){Jt=a;return}}else{if(a=rx(a,i),a!==null){a.flags&=32767,Jt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{nn=6,Jt=null;return}}if(i=i.sibling,i!==null){Jt=i;return}Jt=i=n}while(i!==null);nn===0&&(nn=5)}function Kr(n,i,a){var c=Lt,f=Qn.transition;try{Qn.transition=null,Lt=1,fx(n,i,a,c)}finally{Qn.transition=f,Lt=c}return null}function fx(n,i,a,c){do Us();while(vr!==null);if((bt&6)!==0)throw Error(t(327));a=n.finishedWork;var f=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(uo(n,m),n===on&&(Jt=on=null,fn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Qo||(Qo=!0,Ip(rt,function(){return Us(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Qn.transition,Qn.transition=null;var T=Lt;Lt=1;var k=bt;bt|=4,hu.current=null,ax(n,a),yp(a,n),Lg(Mc),po=!!Sc,Mc=Sc=null,n.current=a,ox(a),ye(),bt=k,Lt=T,Qn.transition=m}else n.current=a;if(Qo&&(Qo=!1,vr=n,el=f),m=n.pendingLanes,m===0&&(xr=null),Kt(a.stateNode),Un(n,Me()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)f=i[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(Jo)throw Jo=!1,n=gu,gu=null,n;return(el&1)!==0&&n.tag!==0&&Us(),m=n.pendingLanes,(m&1)!==0?n===xu?Va++:(Va=0,xu=n):Va=0,hr(),null}function Us(){if(vr!==null){var n=vf(el),i=Qn.transition,a=Lt;try{if(Qn.transition=null,Lt=16>n?16:n,vr===null)var c=!1;else{if(n=vr,vr=null,el=0,(bt&6)!==0)throw Error(t(331));var f=bt;for(bt|=4,je=n.current;je!==null;){var m=je,T=m.child;if((je.flags&16)!==0){var k=m.deletions;if(k!==null){for(var B=0;B<k.length;B++){var oe=k[B];for(je=oe;je!==null;){var Ee=je;switch(Ee.tag){case 0:case 11:case 15:Oa(8,Ee,m)}var Ae=Ee.child;if(Ae!==null)Ae.return=Ee,je=Ae;else for(;je!==null;){Ee=je;var we=Ee.sibling,ze=Ee.return;if(mp(Ee),Ee===oe){je=null;break}if(we!==null){we.return=ze,je=we;break}je=ze}}}var Ye=m.alternate;if(Ye!==null){var qe=Ye.child;if(qe!==null){Ye.child=null;do{var Zt=qe.sibling;qe.sibling=null,qe=Zt}while(qe!==null)}}je=m}}if((m.subtreeFlags&2064)!==0&&T!==null)T.return=m,je=T;else e:for(;je!==null;){if(m=je,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Oa(9,m,m.return)}var J=m.sibling;if(J!==null){J.return=m.return,je=J;break e}je=m.return}}var Y=n.current;for(je=Y;je!==null;){T=je;var ne=T.child;if((T.subtreeFlags&2064)!==0&&ne!==null)ne.return=T,je=ne;else e:for(T=Y;je!==null;){if(k=je,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:$o(9,k)}}catch(Ke){Xt(k,k.return,Ke)}if(k===T){je=null;break e}var Re=k.sibling;if(Re!==null){Re.return=k.return,je=Re;break e}je=k.return}}if(bt=f,hr(),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(wt,n)}catch{}c=!0}return c}finally{Lt=a,Qn.transition=i}}return!1}function Pp(n,i,a){i=Ps(a,i),i=$h(n,i,1),n=mr(n,i,1),i=bn(),n!==null&&(Nn(n,1,i),Un(n,i))}function Xt(n,i,a){if(n.tag===3)Pp(n,n,a);else for(;i!==null;){if(i.tag===3){Pp(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(xr===null||!xr.has(c))){n=Ps(a,n),n=Kh(i,n,1),i=mr(i,n,1),n=bn(),i!==null&&(Nn(i,1,n),Un(i,n));break}}i=i.return}}function hx(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=bn(),n.pingedLanes|=n.suspendedLanes&a,on===n&&(fn&a)===a&&(nn===4||nn===3&&(fn&130023424)===fn&&500>Me()-mu?$r(n,0):pu|=a),Un(n,i)}function Lp(n,i){i===0&&((n.mode&1)===0?i=1:(i=oi,oi<<=1,(oi&130023424)===0&&(oi=4194304)));var a=bn();n=zi(n,i),n!==null&&(Nn(n,i,a),Un(n,a))}function px(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Lp(n,a)}function mx(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Lp(n,a)}var Dp;Dp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Pn.current)Dn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Dn=!1,nx(n,i,a);Dn=(n.flags&131072)!==0}else Dn=!1,Vt&&(i.flags&1048576)!==0&&fh(i,Lo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Yo(n,i),n=i.pendingProps;var f=ws(i,gn.current);Rs(i,a),f=Xc(null,i,c,n,f,a);var m=Yc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Ln(c)?(m=!0,Ro(i)):m=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,zc(i),f.updater=Wo,i.stateNode=f,f._reactInternals=i,Qc(i,c,n,a),i=iu(null,i,c,!0,m,a)):(i.tag=0,Vt&&m&&Rc(i),Tn(null,i,f,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Yo(n,i),n=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=xx(c),n=ui(c,n),f){case 0:i=nu(null,i,c,n,a);break e;case 1:i=sp(null,i,c,n,a);break e;case 11:i=ep(null,i,c,n,a);break e;case 14:i=tp(null,i,c,ui(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ui(c,f),nu(n,i,c,f,a);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ui(c,f),sp(n,i,c,f,a);case 3:e:{if(ap(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,f=m.element,Sh(n,i),Oo(i,c,null,a);var T=i.memoizedState;if(c=T.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){f=Ps(Error(t(423)),i),i=op(n,i,c,a,f);break e}else if(c!==f){f=Ps(Error(t(424)),i),i=op(n,i,c,a,f);break e}else for(Vn=ur(i.stateNode.containerInfo.firstChild),Bn=i,Vt=!0,ci=null,a=_h(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(bs(),c===f){i=Vi(n,i,a);break e}Tn(n,i,c,a)}i=i.child}return i;case 5:return Eh(i),n===null&&Lc(i),c=i.type,f=i.pendingProps,m=n!==null?n.memoizedProps:null,T=f.children,wc(c,f)?T=null:m!==null&&wc(c,m)&&(i.flags|=32),rp(n,i),Tn(n,i,T,a),i.child;case 6:return n===null&&Lc(i),null;case 13:return lp(n,i,a);case 4:return Bc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=As(i,null,c,a):Tn(n,i,c,a),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ui(c,f),ep(n,i,c,f,a);case 7:return Tn(n,i,i.pendingProps,a),i.child;case 8:return Tn(n,i,i.pendingProps.children,a),i.child;case 12:return Tn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,m=i.memoizedProps,T=f.value,Ft(Uo,c._currentValue),c._currentValue=T,m!==null)if(li(m.value,T)){if(m.children===f.children&&!Pn.current){i=Vi(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var k=m.dependencies;if(k!==null){T=m.child;for(var B=k.firstContext;B!==null;){if(B.context===c){if(m.tag===1){B=Bi(-1,a&-a),B.tag=2;var oe=m.updateQueue;if(oe!==null){oe=oe.shared;var Ee=oe.pending;Ee===null?B.next=B:(B.next=Ee.next,Ee.next=B),oe.pending=B}}m.lanes|=a,B=m.alternate,B!==null&&(B.lanes|=a),Fc(m.return,a,i),k.lanes|=a;break}B=B.next}}else if(m.tag===10)T=m.type===i.type?null:m.child;else if(m.tag===18){if(T=m.return,T===null)throw Error(t(341));T.lanes|=a,k=T.alternate,k!==null&&(k.lanes|=a),Fc(T,a,i),T=m.sibling}else T=m.child;if(T!==null)T.return=m;else for(T=m;T!==null;){if(T===i){T=null;break}if(m=T.sibling,m!==null){m.return=T.return,T=m;break}T=T.return}m=T}Tn(n,i,f.children,a),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,Rs(i,a),f=Zn(f),c=c(f),i.flags|=1,Tn(n,i,c,a),i.child;case 14:return c=i.type,f=ui(c,i.pendingProps),f=ui(c.type,f),tp(n,i,c,f,a);case 15:return np(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ui(c,f),Yo(n,i),i.tag=1,Ln(c)?(n=!0,Ro(i)):n=!1,Rs(i,a),Yh(i,c,f),Qc(i,c,f,a),iu(null,i,c,!0,n,a);case 19:return up(n,i,a);case 22:return ip(n,i,a)}throw Error(t(156,i.tag))};function Ip(n,i){return se(n,i)}function gx(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(n,i,a,c){return new gx(n,i,a,c)}function wu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function xx(n){if(typeof n=="function")return wu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===le)return 11;if(n===pe)return 14}return 2}function Sr(n,i){var a=n.alternate;return a===null?(a=ei(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function rl(n,i,a,c,f,m){var T=2;if(c=n,typeof n=="function")wu(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case O:return Zr(a.children,f,m,i);case j:T=8,f|=8;break;case P:return n=ei(12,a,i,f|2),n.elementType=P,n.lanes=m,n;case Q:return n=ei(13,a,i,f),n.elementType=Q,n.lanes=m,n;case de:return n=ei(19,a,i,f),n.elementType=de,n.lanes=m,n;case ue:return sl(a,f,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case N:T=10;break e;case V:T=9;break e;case le:T=11;break e;case pe:T=14;break e;case ce:T=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ei(T,a,i,f),i.elementType=n,i.type=c,i.lanes=m,i}function Zr(n,i,a,c){return n=ei(7,n,c,i),n.lanes=a,n}function sl(n,i,a,c){return n=ei(22,n,c,i),n.elementType=ue,n.lanes=a,n.stateNode={isHidden:!1},n}function Eu(n,i,a){return n=ei(6,n,null,i),n.lanes=a,n}function Tu(n,i,a){return i=ei(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function vx(n,i,a,c,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qn(0),this.expirationTimes=qn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qn(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function bu(n,i,a,c,f,m,T,k,B){return n=new vx(n,i,a,k,B),i===1?(i=1,m===!0&&(i|=8)):i=0,m=ei(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},zc(m),n}function _x(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Up(n){if(!n)return fr;n=n._reactInternals;e:{if(Bt(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Ln(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Ln(a))return ch(n,a,i)}return i}function kp(n,i,a,c,f,m,T,k,B){return n=bu(a,c,!0,n,f,m,T,k,B),n.context=Up(null),a=n.current,c=bn(),f=_r(a),m=Bi(c,f),m.callback=i??null,mr(a,m,f),n.current.lanes=f,Nn(n,f,c),Un(n,c),n}function al(n,i,a,c){var f=i.current,m=bn(),T=_r(f);return a=Up(a),i.context===null?i.context=a:i.pendingContext=a,i=Bi(m,T),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=mr(f,i,T),n!==null&&(hi(n,f,T,m),Fo(n,f,T)),T}function ol(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Fp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Au(n,i){Fp(n,i),(n=n.alternate)&&Fp(n,i)}function yx(){return null}var Op=typeof reportError=="function"?reportError:function(n){console.error(n)};function Cu(n){this._internalRoot=n}ll.prototype.render=Cu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));al(n,i,null,null)},ll.prototype.unmount=Cu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;qr(function(){al(null,n,null,null)}),i[Ui]=null}};function ll(n){this._internalRoot=n}ll.prototype.unstable_scheduleHydration=function(n){if(n){var i=Sf();n={blockedOn:null,target:n,priority:i};for(var a=0;a<or.length&&i!==0&&i<or[a].priority;a++);or.splice(a,0,n),a===0&&Ef(n)}};function Ru(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function cl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function zp(){}function Sx(n,i,a,c,f){if(f){if(typeof c=="function"){var m=c;c=function(){var oe=ol(T);m.call(oe)}}var T=kp(i,c,n,0,null,!1,!1,"",zp);return n._reactRootContainer=T,n[Ui]=T.current,Ta(n.nodeType===8?n.parentNode:n),qr(),T}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var k=c;c=function(){var oe=ol(B);k.call(oe)}}var B=bu(n,0,!1,null,null,!1,!1,"",zp);return n._reactRootContainer=B,n[Ui]=B.current,Ta(n.nodeType===8?n.parentNode:n),qr(function(){al(i,B,a,c)}),B}function ul(n,i,a,c,f){var m=a._reactRootContainer;if(m){var T=m;if(typeof f=="function"){var k=f;f=function(){var B=ol(T);k.call(B)}}al(i,T,n,f)}else T=Sx(a,i,n,f,c);return ol(T)}_f=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=en(i.pendingLanes);a!==0&&(Ql(i,a|1),Un(i,Me()),(bt&6)===0&&(Is=Me()+500,hr()))}break;case 13:qr(function(){var c=zi(n,1);if(c!==null){var f=bn();hi(c,n,1,f)}}),Au(n,1)}},ec=function(n){if(n.tag===13){var i=zi(n,134217728);if(i!==null){var a=bn();hi(i,n,134217728,a)}Au(n,134217728)}},yf=function(n){if(n.tag===13){var i=_r(n),a=zi(n,i);if(a!==null){var c=bn();hi(a,n,i,c)}Au(n,i)}},Sf=function(){return Lt},Mf=function(n,i){var a=Lt;try{return Lt=n,i()}finally{Lt=a}},Ne=function(n,i,a){switch(i){case"input":if(Oe(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var f=Ao(c);if(!f)throw Error(t(90));$e(c),Oe(c,f)}}}break;case"textarea":_e(n,a);break;case"select":i=a.value,i!=null&&D(n,!!a.multiple,i,!1)}},It=yu,Wt=qr;var Mx={usingClientEntryPoint:!1,Events:[Ca,Ss,Ao,Ce,ut,yu]},Ha={findFiberByHostInstance:Br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wx={bundleType:Ha.bundleType,version:Ha.version,rendererPackageName:Ha.rendererPackageName,rendererConfig:Ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=R(n),n===null?null:n.stateNode},findFiberByHostInstance:Ha.findFiberByHostInstance||yx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dl.isDisabled&&dl.supportsFiber)try{wt=dl.inject(wx),ht=dl}catch{}}return kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mx,kn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ru(i))throw Error(t(200));return _x(n,i,null,a)},kn.createRoot=function(n,i){if(!Ru(n))throw Error(t(299));var a=!1,c="",f=Op;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=bu(n,1,!1,null,null,a,!1,c,f),n[Ui]=i.current,Ta(n.nodeType===8?n.parentNode:n),new Cu(i)},kn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=R(i),n=n===null?null:n.stateNode,n},kn.flushSync=function(n){return qr(n)},kn.hydrate=function(n,i,a){if(!cl(i))throw Error(t(200));return ul(null,n,i,!0,a)},kn.hydrateRoot=function(n,i,a){if(!Ru(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,f=!1,m="",T=Op;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=kp(i,null,n,1,a??null,f,!1,m,T),n[Ui]=i.current,Ta(n),c)for(n=0;n<c.length;n++)a=c[n],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new ll(i)},kn.render=function(n,i,a){if(!cl(i))throw Error(t(200));return ul(null,n,i,!1,a)},kn.unmountComponentAtNode=function(n){if(!cl(n))throw Error(t(40));return n._reactRootContainer?(qr(function(){ul(null,null,n,!1,function(){n._reactRootContainer=null,n[Ui]=null})}),!0):!1},kn.unstable_batchedUpdates=yu,kn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!cl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ul(n,i,a,!1,c)},kn.version="18.3.1-next-f1338f8080-20240426",kn}var Yp;function Lx(){if(Yp)return Lu.exports;Yp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Lu.exports=Px(),Lu.exports}var qp;function Dx(){if(qp)return fl;qp=1;var s=Lx();return fl.createRoot=s.createRoot,fl.hydrateRoot=s.hydrateRoot,fl}var Ix=Dx();const Ux=Qm(Ix);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase());/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=s=>{const e=Fx(s);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Uu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},zx=dt.createContext({}),Bx=()=>dt.useContext(zx),Vx=dt.forwardRef(({color:s,size:e,strokeWidth:t,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...d},h)=>{const{size:p=24,strokeWidth:x=2,absoluteStrokeWidth:_=!1,color:y="currentColor",className:M=""}=Bx()??{},E=r??_?Number(t??x)*24/Number(e??p):t??x;return dt.createElement("svg",{ref:h,...Uu,width:e??p??Uu.width,height:e??p??Uu.height,stroke:s??y,strokeWidth:E,className:e0("lucide",M,o),...!l&&!Ox(d)&&{"aria-hidden":"true"},...d},[...u.map(([b,S])=>dt.createElement(b,S)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=(s,e)=>{const t=dt.forwardRef(({className:r,...o},l)=>dt.createElement(Vx,{ref:l,iconNode:e,className:e0(`lucide-${kx($p(s))}`,`lucide-${s}`,r),...o}));return t.displayName=$p(s),t};/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],t0=pt("activity",Hx);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],kr=pt("arrow-right",Gx);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],Wx=pt("arrow-up",jx);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],n0=pt("award",Xx);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],qx=pt("bell",Yx);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],Kx=pt("brain",$x);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=[["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3",key:"cabbwy"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2",key:"1uxh74"}]],Jx=pt("building",Zx);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]],to=pt("calendar",Qx);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],tv=pt("check",ev);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],iv=pt("circle-alert",nv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],Wl=pt("circle-check",rv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],i0=pt("circle-question-mark",sv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],ta=pt("clock",av);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]],r0=pt("compass",ov);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],cv=pt("database",lv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],dv=pt("download",uv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=[["path",{d:"M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762",key:"17lmqv"}]],hv=pt("heart-handshake",fv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],mv=pt("heart",pv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],xv=pt("info",gv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],s0=pt("loader-circle",vv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],yv=pt("lock",_v);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Mv=pt("mail",Sv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],ro=pt("map-pin",wv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Tv=pt("menu",Ev);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],Av=pt("message-circle",bv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],Rv=pt("message-square",Cv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=[["path",{d:"M13 2a9 9 0 0 1 9 9",key:"1itnx2"}],["path",{d:"M13 6a5 5 0 0 1 5 5",key:"11nki7"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Pv=pt("phone-call",Nv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Dv=pt("phone",Lv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Uv=pt("rotate-ccw",Iv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Fv=pt("search",kv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],zv=pt("server",Ov);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],Vv=pt("shield-alert",Bv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],nf=pt("shield-check",Hv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],jv=pt("smartphone",Gv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Xl=pt("sparkles",Wv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Yv=pt("star",Xv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=[["path",{d:"M11 2v2",key:"1539x4"}],["path",{d:"M5 2v2",key:"1yf1q8"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",key:"rb5t3r"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3",key:"x18d4x"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]],Vl=pt("stethoscope",qv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Kv=pt("trash",$v);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Jv=pt("user",Zv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]],e_=pt("users-round",Qv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],n_=pt("users",t_);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],so=pt("video",i_);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Yl=pt("x",r_);function s_({onOpenArchitecture:s,onOpenAppointments:e}){const[t,r]=dt.useState(!1),[o,l]=dt.useState(!1);dt.useEffect(()=>{const d=()=>{r(window.scrollY>20)};return window.addEventListener("scroll",d,{passive:!0}),()=>window.removeEventListener("scroll",d)},[]);const u=d=>{l(!1);const h=document.getElementById(d);h&&h.scrollIntoView({behavior:"smooth"})};return g.jsx("header",{className:`navbar-sticky transition-all duration-300 ${t?"bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3":"bg-[#FAFCFF]/90 backdrop-blur-xs py-4"}`,children:g.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsxs("a",{href:"#",className:"flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded-lg",children:[g.jsx("div",{className:"w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-700 via-teal-600 to-sky-600 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform duration-200",children:g.jsx(t0,{className:"w-4 h-4"})}),g.jsx("div",{children:g.jsxs("div",{className:"flex items-center gap-1.5",children:[g.jsx("span",{className:"font-extrabold text-xl tracking-tight text-slate-900",children:"CareConnect"}),g.jsx("span",{className:"text-xs font-bold px-1.5 py-0.5 rounded-md bg-teal-50 text-teal-700 border border-teal-200/60",children:"AI"})]})})]}),g.jsxs("nav",{className:"hidden md:flex items-center gap-1 text-sm font-medium text-slate-600",children:[g.jsx("button",{onClick:()=>u("healthy-habits"),className:"nav-link",children:"Healthy Habits"}),g.jsx("button",{onClick:()=>u("body-signals"),className:"nav-link",children:"Listen to Your Body"}),g.jsx("button",{onClick:()=>u("seek-help"),className:"nav-link",children:"When to Seek Help"}),g.jsx("button",{onClick:()=>u("careconnect-tools"),className:"nav-link text-teal-800 font-semibold",children:"CareConnect Tools"}),g.jsx("button",{onClick:()=>u("how-it-works"),className:"nav-link",children:"How it works"})]}),g.jsxs("div",{className:"hidden lg:flex items-center gap-3",children:[g.jsxs("button",{onClick:e,className:"text-xs font-semibold text-slate-600 hover:text-teal-700 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors flex items-center gap-1.5",children:[g.jsx(to,{className:"w-3.5 h-3.5 text-teal-600"}),"My Bookings"]}),g.jsxs("button",{onClick:()=>u("careconnect-tools"),className:"inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-xs bg-slate-900 hover:bg-slate-800 text-white shadow-xs hover:shadow-soft transition-all duration-200",children:["Find a doctor",g.jsx(kr,{className:"w-3.5 h-3.5"})]})]}),g.jsx("div",{className:"flex md:hidden items-center gap-2",children:g.jsx("button",{onClick:()=>l(!o),className:"p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none","aria-label":"Toggle navigation menu",children:o?g.jsx(Yl,{className:"w-6 h-6"}):g.jsx(Tv,{className:"w-6 h-6"})})})]}),o&&g.jsxs("div",{className:"md:hidden mt-3 pt-3 border-t border-slate-200 pb-4 space-y-1 bg-white/98 rounded-2xl p-4 shadow-soft",children:[g.jsx("button",{onClick:()=>u("healthy-habits"),className:"block w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-700",children:"Healthy Habits"}),g.jsx("button",{onClick:()=>u("body-signals"),className:"block w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-700",children:"Listen to Your Body"}),g.jsx("button",{onClick:()=>u("seek-help"),className:"block w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-700",children:"When to Seek Help"}),g.jsx("button",{onClick:()=>u("careconnect-tools"),className:"block w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-teal-800 hover:bg-teal-50",children:"CareConnect Tools"}),g.jsx("button",{onClick:()=>u("how-it-works"),className:"block w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-700",children:"How it works"}),g.jsxs("div",{className:"pt-2 border-t border-slate-100 flex flex-col gap-2",children:[g.jsx("button",{onClick:()=>{l(!1),e()},className:"w-full text-center px-4 py-2 text-xs font-semibold text-slate-700 border border-slate-200 rounded-xl hover:bg-slate-50",children:"View My Bookings"}),g.jsx("button",{onClick:()=>u("careconnect-tools"),className:"w-full text-center px-4 py-2.5 text-sm font-semibold text-white bg-slate-900 rounded-xl hover:bg-slate-800",children:"Find a doctor →"})]})]})]})})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rf="170",a_=0,Kp=1,o_=2,a0=1,o0=2,qi=3,Ir=0,Fn=1,Ki=2,Pr=0,Js=1,Zp=2,Jp=3,Qp=4,l_=5,as=100,c_=101,u_=102,d_=103,f_=104,h_=200,p_=201,m_=202,g_=203,md=204,gd=205,x_=206,v_=207,__=208,y_=209,S_=210,M_=211,w_=212,E_=213,T_=214,xd=0,vd=1,_d=2,na=3,yd=4,Sd=5,Md=6,wd=7,l0=0,b_=1,A_=2,Lr=0,C_=1,R_=2,N_=3,c0=4,P_=5,L_=6,D_=7,u0=300,ia=301,ra=302,Ed=303,Td=304,ql=306,bd=1e3,cs=1001,Ad=1002,yi=1003,I_=1004,hl=1005,Ni=1006,ku=1007,us=1008,er=1009,d0=1010,f0=1011,no=1012,sf=1013,ds=1014,Zi=1015,ao=1016,af=1017,of=1018,sa=1020,h0=35902,p0=1021,m0=1022,_i=1023,g0=1024,x0=1025,Qs=1026,aa=1027,v0=1028,lf=1029,_0=1030,cf=1031,uf=1033,Ul=33776,kl=33777,Fl=33778,Ol=33779,Cd=35840,Rd=35841,Nd=35842,Pd=35843,Ld=36196,Dd=37492,Id=37496,Ud=37808,kd=37809,Fd=37810,Od=37811,zd=37812,Bd=37813,Vd=37814,Hd=37815,Gd=37816,jd=37817,Wd=37818,Xd=37819,Yd=37820,qd=37821,zl=36492,$d=36494,Kd=36495,y0=36283,Zd=36284,Jd=36285,Qd=36286,U_=3200,k_=3201,S0=0,F_=1,Nr="",ni="srgb",la="srgb-linear",$l="linear",Ut="srgb",ks=7680,em=519,O_=512,z_=513,B_=514,M0=515,V_=516,H_=517,G_=518,j_=519,tm=35044,nm="300 es",Ji=2e3,Hl=2001;class ca{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let im=1234567;const Za=Math.PI/180,io=180/Math.PI;function ua(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yn[s&255]+yn[s>>8&255]+yn[s>>16&255]+yn[s>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]).toLowerCase()}function pn(s,e,t){return Math.max(e,Math.min(t,s))}function df(s,e){return(s%e+e)%e}function W_(s,e,t,r,o){return r+(s-e)*(o-r)/(t-e)}function X_(s,e,t){return s!==e?(t-s)/(e-s):0}function Ja(s,e,t){return(1-t)*s+t*e}function Y_(s,e,t,r){return Ja(s,e,1-Math.exp(-t*r))}function q_(s,e=1){return e-Math.abs(df(s,e*2)-e)}function $_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function K_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Z_(s,e){return s+Math.floor(Math.random()*(e-s+1))}function J_(s,e){return s+Math.random()*(e-s)}function Q_(s){return s*(.5-Math.random())}function ey(s){s!==void 0&&(im=s);let e=im+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ty(s){return s*Za}function ny(s){return s*io}function iy(s){return(s&s-1)===0&&s!==0}function ry(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function sy(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ay(s,e,t,r,o){const l=Math.cos,u=Math.sin,d=l(t/2),h=u(t/2),p=l((e+r)/2),x=u((e+r)/2),_=l((e-r)/2),y=u((e-r)/2),M=l((r-e)/2),E=u((r-e)/2);switch(o){case"XYX":s.set(d*x,h*_,h*y,d*p);break;case"YZY":s.set(h*y,d*x,h*_,d*p);break;case"ZXZ":s.set(h*_,h*y,d*x,d*p);break;case"XZX":s.set(d*x,h*E,h*M,d*p);break;case"YXY":s.set(h*M,d*x,h*E,d*p);break;case"ZYZ":s.set(h*E,h*M,d*x,d*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Ks(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function An(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Dt={DEG2RAD:Za,RAD2DEG:io,generateUUID:ua,clamp:pn,euclideanModulo:df,mapLinear:W_,inverseLerp:X_,lerp:Ja,damp:Y_,pingpong:q_,smoothstep:$_,smootherstep:K_,randInt:Z_,randFloat:J_,randFloatSpread:Q_,seededRandom:ey,degToRad:ty,radToDeg:ny,isPowerOfTwo:iy,ceilPowerOfTwo:ry,floorPowerOfTwo:sy,setQuaternionFromProperEuler:ay,normalize:An,denormalize:Ks};class ot{constructor(e=0,t=0){ot.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(pn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vt{constructor(e,t,r,o,l,u,d,h,p){vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,h,p)}set(e,t,r,o,l,u,d,h,p){const x=this.elements;return x[0]=e,x[1]=o,x[2]=d,x[3]=t,x[4]=l,x[5]=h,x[6]=r,x[7]=u,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[3],h=r[6],p=r[1],x=r[4],_=r[7],y=r[2],M=r[5],E=r[8],b=o[0],S=o[3],v=o[6],U=o[1],L=o[4],C=o[7],$=o[2],F=o[5],O=o[8];return l[0]=u*b+d*U+h*$,l[3]=u*S+d*L+h*F,l[6]=u*v+d*C+h*O,l[1]=p*b+x*U+_*$,l[4]=p*S+x*L+_*F,l[7]=p*v+x*C+_*O,l[2]=y*b+M*U+E*$,l[5]=y*S+M*L+E*F,l[8]=y*v+M*C+E*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],h=e[6],p=e[7],x=e[8];return t*u*x-t*d*p-r*l*x+r*d*h+o*l*p-o*u*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],h=e[6],p=e[7],x=e[8],_=x*u-d*p,y=d*h-x*l,M=p*l-u*h,E=t*_+r*y+o*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=_*b,e[1]=(o*p-x*r)*b,e[2]=(d*r-o*u)*b,e[3]=y*b,e[4]=(x*t-o*h)*b,e[5]=(o*l-d*t)*b,e[6]=M*b,e[7]=(r*h-p*t)*b,e[8]=(u*t-r*l)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,d){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*u+p*d)+u+e,-o*p,o*h,-o*(-p*u+h*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(Fu.makeScale(e,t)),this}rotate(e){return this.premultiply(Fu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fu=new vt;function w0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Gl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function oy(){const s=Gl("canvas");return s.style.display="block",s}const rm={};function $a(s){s in rm||(rm[s]=!0,console.warn(s))}function ly(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function cy(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function uy(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const At={enabled:!0,workingColorSpace:la,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Ut&&(s.r=Qi(s.r),s.g=Qi(s.g),s.b=Qi(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ut&&(s.r=ea(s.r),s.g=ea(s.g),s.b=ea(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Nr?$l:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Qi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ea(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const sm=[.64,.33,.3,.6,.15,.06],am=[.2126,.7152,.0722],om=[.3127,.329],lm=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cm=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);At.define({[la]:{primaries:sm,whitePoint:om,transfer:$l,toXYZ:lm,fromXYZ:cm,luminanceCoefficients:am,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:sm,whitePoint:om,transfer:Ut,toXYZ:lm,fromXYZ:cm,luminanceCoefficients:am,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}});let Fs;class dy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fs===void 0&&(Fs=Gl("canvas")),Fs.width=e.width,Fs.height=e.height;const r=Fs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Fs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Qi(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Qi(t[r]/255)*255):t[r]=Qi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fy=0;class E0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fy++}),this.uuid=ua(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?l.push(Ou(o[u].image)):l.push(Ou(o[u]))}else l=Ou(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Ou(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?dy.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hy=0;class On extends ca{constructor(e=On.DEFAULT_IMAGE,t=On.DEFAULT_MAPPING,r=cs,o=cs,l=Ni,u=us,d=_i,h=er,p=On.DEFAULT_ANISOTROPY,x=Nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=ua(),this.name="",this.source=new E0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=h,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==u0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bd:e.x=e.x-Math.floor(e.x);break;case cs:e.x=e.x<0?0:1;break;case Ad:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bd:e.y=e.y-Math.floor(e.y);break;case cs:e.y=e.y<0?0:1;break;case Ad:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=u0;On.DEFAULT_ANISOTROPY=1;class Yt{constructor(e=0,t=0,r=0,o=1){Yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const h=e.elements,p=h[0],x=h[4],_=h[8],y=h[1],M=h[5],E=h[9],b=h[2],S=h[6],v=h[10];if(Math.abs(x-y)<.01&&Math.abs(_-b)<.01&&Math.abs(E-S)<.01){if(Math.abs(x+y)<.1&&Math.abs(_+b)<.1&&Math.abs(E+S)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(p+1)/2,C=(M+1)/2,$=(v+1)/2,F=(x+y)/4,O=(_+b)/4,j=(E+S)/4;return L>C&&L>$?L<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(L),o=F/r,l=O/r):C>$?C<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(C),r=F/o,l=j/o):$<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt($),r=O/l,o=j/l),this.set(r,o,l,t),this}let U=Math.sqrt((S-E)*(S-E)+(_-b)*(_-b)+(y-x)*(y-x));return Math.abs(U)<.001&&(U=1),this.x=(S-E)/U,this.y=(_-b)/U,this.z=(y-x)/U,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class py extends ca{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Yt(0,0,e,t),this.scissorTest=!1,this.viewport=new Yt(0,0,e,t);const o={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new On(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new E0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fs extends py{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class T0 extends On{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=yi,this.minFilter=yi,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class my extends On{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=yi,this.minFilter=yi,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oo{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,d){let h=r[o+0],p=r[o+1],x=r[o+2],_=r[o+3];const y=l[u+0],M=l[u+1],E=l[u+2],b=l[u+3];if(d===0){e[t+0]=h,e[t+1]=p,e[t+2]=x,e[t+3]=_;return}if(d===1){e[t+0]=y,e[t+1]=M,e[t+2]=E,e[t+3]=b;return}if(_!==b||h!==y||p!==M||x!==E){let S=1-d;const v=h*y+p*M+x*E+_*b,U=v>=0?1:-1,L=1-v*v;if(L>Number.EPSILON){const $=Math.sqrt(L),F=Math.atan2($,v*U);S=Math.sin(S*F)/$,d=Math.sin(d*F)/$}const C=d*U;if(h=h*S+y*C,p=p*S+M*C,x=x*S+E*C,_=_*S+b*C,S===1-d){const $=1/Math.sqrt(h*h+p*p+x*x+_*_);h*=$,p*=$,x*=$,_*=$}}e[t]=h,e[t+1]=p,e[t+2]=x,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,o,l,u){const d=r[o],h=r[o+1],p=r[o+2],x=r[o+3],_=l[u],y=l[u+1],M=l[u+2],E=l[u+3];return e[t]=d*E+x*_+h*M-p*y,e[t+1]=h*E+x*y+p*_-d*M,e[t+2]=p*E+x*M+d*y-h*_,e[t+3]=x*E-d*_-h*y-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,d=Math.cos,h=Math.sin,p=d(r/2),x=d(o/2),_=d(l/2),y=h(r/2),M=h(o/2),E=h(l/2);switch(u){case"XYZ":this._x=y*x*_+p*M*E,this._y=p*M*_-y*x*E,this._z=p*x*E+y*M*_,this._w=p*x*_-y*M*E;break;case"YXZ":this._x=y*x*_+p*M*E,this._y=p*M*_-y*x*E,this._z=p*x*E-y*M*_,this._w=p*x*_+y*M*E;break;case"ZXY":this._x=y*x*_-p*M*E,this._y=p*M*_+y*x*E,this._z=p*x*E+y*M*_,this._w=p*x*_-y*M*E;break;case"ZYX":this._x=y*x*_-p*M*E,this._y=p*M*_+y*x*E,this._z=p*x*E-y*M*_,this._w=p*x*_+y*M*E;break;case"YZX":this._x=y*x*_+p*M*E,this._y=p*M*_+y*x*E,this._z=p*x*E-y*M*_,this._w=p*x*_-y*M*E;break;case"XZY":this._x=y*x*_-p*M*E,this._y=p*M*_-y*x*E,this._z=p*x*E+y*M*_,this._w=p*x*_+y*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],d=t[5],h=t[9],p=t[2],x=t[6],_=t[10],y=r+d+_;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(x-h)*M,this._y=(l-p)*M,this._z=(u-o)*M}else if(r>d&&r>_){const M=2*Math.sqrt(1+r-d-_);this._w=(x-h)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(l+p)/M}else if(d>_){const M=2*Math.sqrt(1+d-r-_);this._w=(l-p)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(h+x)/M}else{const M=2*Math.sqrt(1+_-r-d);this._w=(u-o)/M,this._x=(l+p)/M,this._y=(h+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pn(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,d=t._x,h=t._y,p=t._z,x=t._w;return this._x=r*x+u*d+o*p-l*h,this._y=o*x+u*h+l*d-r*p,this._z=l*x+u*p+r*h-o*d,this._w=u*x-r*d-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,u=this._w;let d=u*e._w+r*e._x+o*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=u,this._x=r,this._y=o,this._z=l,this;const h=1-d*d;if(h<=Number.EPSILON){const M=1-t;return this._w=M*u+t*this._w,this._x=M*r+t*this._x,this._y=M*o+t*this._y,this._z=M*l+t*this._z,this.normalize(),this}const p=Math.sqrt(h),x=Math.atan2(p,d),_=Math.sin((1-t)*x)/p,y=Math.sin(t*x)/p;return this._w=u*_+this._w*y,this._x=r*_+this._x*y,this._y=o*_+this._y*y,this._z=l*_+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,t=0,r=0){Z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(um.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(um.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,d=e.z,h=e.w,p=2*(u*o-d*r),x=2*(d*t-l*o),_=2*(l*r-u*t);return this.x=t+h*p+u*_-d*x,this.y=r+h*x+d*p-l*_,this.z=o+h*_+l*x-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,d=t.y,h=t.z;return this.x=o*h-l*d,this.y=l*u-r*h,this.z=r*d-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return zu.copy(this).projectOnVector(e),this.sub(zu)}reflect(e){return this.sub(zu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(pn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zu=new Z,um=new oo;class lo{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,pi):pi.fromBufferAttribute(l,u),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),pl.copy(r.boundingBox)),pl.applyMatrix4(e.matrixWorld),this.union(pl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ja),ml.subVectors(this.max,ja),Os.subVectors(e.a,ja),zs.subVectors(e.b,ja),Bs.subVectors(e.c,ja),wr.subVectors(zs,Os),Er.subVectors(Bs,zs),Jr.subVectors(Os,Bs);let t=[0,-wr.z,wr.y,0,-Er.z,Er.y,0,-Jr.z,Jr.y,wr.z,0,-wr.x,Er.z,0,-Er.x,Jr.z,0,-Jr.x,-wr.y,wr.x,0,-Er.y,Er.x,0,-Jr.y,Jr.x,0];return!Bu(t,Os,zs,Bs,ml)||(t=[1,0,0,0,1,0,0,0,1],!Bu(t,Os,zs,Bs,ml))?!1:(gl.crossVectors(wr,Er),t=[gl.x,gl.y,gl.z],Bu(t,Os,zs,Bs,ml))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Gi=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],pi=new Z,pl=new lo,Os=new Z,zs=new Z,Bs=new Z,wr=new Z,Er=new Z,Jr=new Z,ja=new Z,ml=new Z,gl=new Z,Qr=new Z;function Bu(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){Qr.fromArray(s,l);const d=o.x*Math.abs(Qr.x)+o.y*Math.abs(Qr.y)+o.z*Math.abs(Qr.z),h=e.dot(Qr),p=t.dot(Qr),x=r.dot(Qr);if(Math.max(-Math.max(h,p,x),Math.min(h,p,x))>d)return!1}return!0}const gy=new lo,Wa=new Z,Vu=new Z;class ff{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):gy.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wa.subVectors(e,this.center);const t=Wa.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Wa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wa.copy(e.center).add(Vu)),this.expandByPoint(Wa.copy(e.center).sub(Vu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ji=new Z,Hu=new Z,xl=new Z,Tr=new Z,Gu=new Z,vl=new Z,ju=new Z;class xy{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ji.copy(this.origin).addScaledVector(this.direction,t),ji.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Hu.copy(e).add(t).multiplyScalar(.5),xl.copy(t).sub(e).normalize(),Tr.copy(this.origin).sub(Hu);const l=e.distanceTo(t)*.5,u=-this.direction.dot(xl),d=Tr.dot(this.direction),h=-Tr.dot(xl),p=Tr.lengthSq(),x=Math.abs(1-u*u);let _,y,M,E;if(x>0)if(_=u*h-d,y=u*d-h,E=l*x,_>=0)if(y>=-E)if(y<=E){const b=1/x;_*=b,y*=b,M=_*(_+u*y+2*d)+y*(u*_+y+2*h)+p}else y=l,_=Math.max(0,-(u*y+d)),M=-_*_+y*(y+2*h)+p;else y=-l,_=Math.max(0,-(u*y+d)),M=-_*_+y*(y+2*h)+p;else y<=-E?(_=Math.max(0,-(-u*l+d)),y=_>0?-l:Math.min(Math.max(-l,-h),l),M=-_*_+y*(y+2*h)+p):y<=E?(_=0,y=Math.min(Math.max(-l,-h),l),M=y*(y+2*h)+p):(_=Math.max(0,-(u*l+d)),y=_>0?l:Math.min(Math.max(-l,-h),l),M=-_*_+y*(y+2*h)+p);else y=u>0?-l:l,_=Math.max(0,-(u*y+d)),M=-_*_+y*(y+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Hu).addScaledVector(xl,y),M}intersectSphere(e,t){ji.subVectors(e.center,this.origin);const r=ji.dot(this.direction),o=ji.dot(ji)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),d=r-u,h=r+u;return h<0?null:d<0?this.at(h,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,d,h;const p=1/this.direction.x,x=1/this.direction.y,_=1/this.direction.z,y=this.origin;return p>=0?(r=(e.min.x-y.x)*p,o=(e.max.x-y.x)*p):(r=(e.max.x-y.x)*p,o=(e.min.x-y.x)*p),x>=0?(l=(e.min.y-y.y)*x,u=(e.max.y-y.y)*x):(l=(e.max.y-y.y)*x,u=(e.min.y-y.y)*x),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),_>=0?(d=(e.min.z-y.z)*_,h=(e.max.z-y.z)*_):(d=(e.max.z-y.z)*_,h=(e.min.z-y.z)*_),r>h||d>o)||((d>r||r!==r)&&(r=d),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,ji)!==null}intersectTriangle(e,t,r,o,l){Gu.subVectors(t,e),vl.subVectors(r,e),ju.crossVectors(Gu,vl);let u=this.direction.dot(ju),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;Tr.subVectors(this.origin,e);const h=d*this.direction.dot(vl.crossVectors(Tr,vl));if(h<0)return null;const p=d*this.direction.dot(Gu.cross(Tr));if(p<0||h+p>u)return null;const x=-d*Tr.dot(ju);return x<0?null:this.at(x/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(e,t,r,o,l,u,d,h,p,x,_,y,M,E,b,S){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,h,p,x,_,y,M,E,b,S)}set(e,t,r,o,l,u,d,h,p,x,_,y,M,E,b,S){const v=this.elements;return v[0]=e,v[4]=t,v[8]=r,v[12]=o,v[1]=l,v[5]=u,v[9]=d,v[13]=h,v[2]=p,v[6]=x,v[10]=_,v[14]=y,v[3]=M,v[7]=E,v[11]=b,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/Vs.setFromMatrixColumn(e,0).length(),l=1/Vs.setFromMatrixColumn(e,1).length(),u=1/Vs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),h=Math.cos(o),p=Math.sin(o),x=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const y=u*x,M=u*_,E=d*x,b=d*_;t[0]=h*x,t[4]=-h*_,t[8]=p,t[1]=M+E*p,t[5]=y-b*p,t[9]=-d*h,t[2]=b-y*p,t[6]=E+M*p,t[10]=u*h}else if(e.order==="YXZ"){const y=h*x,M=h*_,E=p*x,b=p*_;t[0]=y+b*d,t[4]=E*d-M,t[8]=u*p,t[1]=u*_,t[5]=u*x,t[9]=-d,t[2]=M*d-E,t[6]=b+y*d,t[10]=u*h}else if(e.order==="ZXY"){const y=h*x,M=h*_,E=p*x,b=p*_;t[0]=y-b*d,t[4]=-u*_,t[8]=E+M*d,t[1]=M+E*d,t[5]=u*x,t[9]=b-y*d,t[2]=-u*p,t[6]=d,t[10]=u*h}else if(e.order==="ZYX"){const y=u*x,M=u*_,E=d*x,b=d*_;t[0]=h*x,t[4]=E*p-M,t[8]=y*p+b,t[1]=h*_,t[5]=b*p+y,t[9]=M*p-E,t[2]=-p,t[6]=d*h,t[10]=u*h}else if(e.order==="YZX"){const y=u*h,M=u*p,E=d*h,b=d*p;t[0]=h*x,t[4]=b-y*_,t[8]=E*_+M,t[1]=_,t[5]=u*x,t[9]=-d*x,t[2]=-p*x,t[6]=M*_+E,t[10]=y-b*_}else if(e.order==="XZY"){const y=u*h,M=u*p,E=d*h,b=d*p;t[0]=h*x,t[4]=-_,t[8]=p*x,t[1]=y*_+b,t[5]=u*x,t[9]=M*_-E,t[2]=E*_-M,t[6]=d*x,t[10]=b*_+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vy,e,_y)}lookAt(e,t,r){const o=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),br.crossVectors(r,Gn),br.lengthSq()===0&&(Math.abs(r.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),br.crossVectors(r,Gn)),br.normalize(),_l.crossVectors(Gn,br),o[0]=br.x,o[4]=_l.x,o[8]=Gn.x,o[1]=br.y,o[5]=_l.y,o[9]=Gn.y,o[2]=br.z,o[6]=_l.z,o[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[4],h=r[8],p=r[12],x=r[1],_=r[5],y=r[9],M=r[13],E=r[2],b=r[6],S=r[10],v=r[14],U=r[3],L=r[7],C=r[11],$=r[15],F=o[0],O=o[4],j=o[8],P=o[12],N=o[1],V=o[5],le=o[9],Q=o[13],de=o[2],pe=o[6],ce=o[10],ue=o[14],H=o[3],he=o[7],I=o[11],w=o[15];return l[0]=u*F+d*N+h*de+p*H,l[4]=u*O+d*V+h*pe+p*he,l[8]=u*j+d*le+h*ce+p*I,l[12]=u*P+d*Q+h*ue+p*w,l[1]=x*F+_*N+y*de+M*H,l[5]=x*O+_*V+y*pe+M*he,l[9]=x*j+_*le+y*ce+M*I,l[13]=x*P+_*Q+y*ue+M*w,l[2]=E*F+b*N+S*de+v*H,l[6]=E*O+b*V+S*pe+v*he,l[10]=E*j+b*le+S*ce+v*I,l[14]=E*P+b*Q+S*ue+v*w,l[3]=U*F+L*N+C*de+$*H,l[7]=U*O+L*V+C*pe+$*he,l[11]=U*j+L*le+C*ce+$*I,l[15]=U*P+L*Q+C*ue+$*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],d=e[5],h=e[9],p=e[13],x=e[2],_=e[6],y=e[10],M=e[14],E=e[3],b=e[7],S=e[11],v=e[15];return E*(+l*h*_-o*p*_-l*d*y+r*p*y+o*d*M-r*h*M)+b*(+t*h*M-t*p*y+l*u*y-o*u*M+o*p*x-l*h*x)+S*(+t*p*_-t*d*M-l*u*_+r*u*M+l*d*x-r*p*x)+v*(-o*d*x-t*h*_+t*d*y+o*u*_-r*u*y+r*h*x)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],h=e[6],p=e[7],x=e[8],_=e[9],y=e[10],M=e[11],E=e[12],b=e[13],S=e[14],v=e[15],U=_*S*p-b*y*p+b*h*M-d*S*M-_*h*v+d*y*v,L=E*y*p-x*S*p-E*h*M+u*S*M+x*h*v-u*y*v,C=x*b*p-E*_*p+E*d*M-u*b*M-x*d*v+u*_*v,$=E*_*h-x*b*h-E*d*y+u*b*y+x*d*S-u*_*S,F=t*U+r*L+o*C+l*$;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/F;return e[0]=U*O,e[1]=(b*y*l-_*S*l-b*o*M+r*S*M+_*o*v-r*y*v)*O,e[2]=(d*S*l-b*h*l+b*o*p-r*S*p-d*o*v+r*h*v)*O,e[3]=(_*h*l-d*y*l-_*o*p+r*y*p+d*o*M-r*h*M)*O,e[4]=L*O,e[5]=(x*S*l-E*y*l+E*o*M-t*S*M-x*o*v+t*y*v)*O,e[6]=(E*h*l-u*S*l-E*o*p+t*S*p+u*o*v-t*h*v)*O,e[7]=(u*y*l-x*h*l+x*o*p-t*y*p-u*o*M+t*h*M)*O,e[8]=C*O,e[9]=(E*_*l-x*b*l-E*r*M+t*b*M+x*r*v-t*_*v)*O,e[10]=(u*b*l-E*d*l+E*r*p-t*b*p-u*r*v+t*d*v)*O,e[11]=(x*d*l-u*_*l-x*r*p+t*_*p+u*r*M-t*d*M)*O,e[12]=$*O,e[13]=(x*b*o-E*_*o+E*r*y-t*b*y-x*r*S+t*_*S)*O,e[14]=(E*d*o-u*b*o-E*r*h+t*b*h+u*r*S-t*d*S)*O,e[15]=(u*_*o-x*d*o+x*r*h-t*_*h-u*r*y+t*d*y)*O,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,d=e.y,h=e.z,p=l*u,x=l*d;return this.set(p*u+r,p*d-o*h,p*h+o*d,0,p*d+o*h,x*d+r,x*h-o*u,0,p*h-o*d,x*h+o*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,d=t._z,h=t._w,p=l+l,x=u+u,_=d+d,y=l*p,M=l*x,E=l*_,b=u*x,S=u*_,v=d*_,U=h*p,L=h*x,C=h*_,$=r.x,F=r.y,O=r.z;return o[0]=(1-(b+v))*$,o[1]=(M+C)*$,o[2]=(E-L)*$,o[3]=0,o[4]=(M-C)*F,o[5]=(1-(y+v))*F,o[6]=(S+U)*F,o[7]=0,o[8]=(E+L)*O,o[9]=(S-U)*O,o[10]=(1-(y+b))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=Vs.set(o[0],o[1],o[2]).length();const u=Vs.set(o[4],o[5],o[6]).length(),d=Vs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],mi.copy(this);const p=1/l,x=1/u,_=1/d;return mi.elements[0]*=p,mi.elements[1]*=p,mi.elements[2]*=p,mi.elements[4]*=x,mi.elements[5]*=x,mi.elements[6]*=x,mi.elements[8]*=_,mi.elements[9]*=_,mi.elements[10]*=_,t.setFromRotationMatrix(mi),r.x=l,r.y=u,r.z=d,this}makePerspective(e,t,r,o,l,u,d=Ji){const h=this.elements,p=2*l/(t-e),x=2*l/(r-o),_=(t+e)/(t-e),y=(r+o)/(r-o);let M,E;if(d===Ji)M=-(u+l)/(u-l),E=-2*u*l/(u-l);else if(d===Hl)M=-u/(u-l),E=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=p,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=x,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,l,u,d=Ji){const h=this.elements,p=1/(t-e),x=1/(r-o),_=1/(u-l),y=(t+e)*p,M=(r+o)*x;let E,b;if(d===Ji)E=(u+l)*_,b=-2*_;else if(d===Hl)E=l*_,b=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-y,h[1]=0,h[5]=2*x,h[9]=0,h[13]=-M,h[2]=0,h[6]=0,h[10]=b,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Vs=new Z,mi=new jt,vy=new Z(0,0,0),_y=new Z(1,1,1),br=new Z,_l=new Z,Gn=new Z,dm=new jt,fm=new oo;class Li{constructor(e=0,t=0,r=0,o=Li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],d=o[8],h=o[1],p=o[5],x=o[9],_=o[2],y=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(pn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-pn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(pn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-pn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(pn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-pn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-x,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return dm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fm.setFromEuler(this),this.setFromQuaternion(fm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Li.DEFAULT_ORDER="XYZ";class b0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yy=0;const hm=new Z,Hs=new oo,Wi=new jt,yl=new Z,Xa=new Z,Sy=new Z,My=new oo,pm=new Z(1,0,0),mm=new Z(0,1,0),gm=new Z(0,0,1),xm={type:"added"},wy={type:"removed"},Gs={type:"childadded",child:null},Wu={type:"childremoved",child:null};class Mn extends ca{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yy++}),this.uuid=ua(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const e=new Z,t=new Li,r=new oo,o=new Z(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new jt},normalMatrix:{value:new vt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new b0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.premultiply(Hs),this}rotateX(e){return this.rotateOnAxis(pm,e)}rotateY(e){return this.rotateOnAxis(mm,e)}rotateZ(e){return this.rotateOnAxis(gm,e)}translateOnAxis(e,t){return hm.copy(e).applyQuaternion(this.quaternion),this.position.add(hm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pm,e)}translateY(e){return this.translateOnAxis(mm,e)}translateZ(e){return this.translateOnAxis(gm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?yl.copy(e):yl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Xa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(Xa,yl,this.up):Wi.lookAt(yl,Xa,this.up),this.quaternion.setFromRotationMatrix(Wi),o&&(Wi.extractRotation(o.matrixWorld),Hs.setFromRotationMatrix(Wi),this.quaternion.premultiply(Hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xm),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wy),Wu.child=e,this.dispatchEvent(Wu),Wu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xm),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xa,e,Sy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xa,My,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let p=0,x=h.length;p<x;p++){const _=h[p];l(e.shapes,_)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,p=this.material.length;h<p;h++)d.push(l(e.materials,this.material[h]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];o.animations.push(l(e.animations,h))}}if(t){const d=u(e.geometries),h=u(e.materials),p=u(e.textures),x=u(e.images),_=u(e.shapes),y=u(e.skeletons),M=u(e.animations),E=u(e.nodes);d.length>0&&(r.geometries=d),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),x.length>0&&(r.images=x),_.length>0&&(r.shapes=_),y.length>0&&(r.skeletons=y),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=o,r;function u(d){const h=[];for(const p in d){const x=d[p];delete x.metadata,h.push(x)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Mn.DEFAULT_UP=new Z(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new Z,Xi=new Z,Xu=new Z,Yi=new Z,js=new Z,Ws=new Z,vm=new Z,Yu=new Z,qu=new Z,$u=new Z,Ku=new Yt,Zu=new Yt,Ju=new Yt;class vi{constructor(e=new Z,t=new Z,r=new Z){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),gi.subVectors(e,t),o.cross(gi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){gi.subVectors(o,t),Xi.subVectors(r,t),Xu.subVectors(e,t);const u=gi.dot(gi),d=gi.dot(Xi),h=gi.dot(Xu),p=Xi.dot(Xi),x=Xi.dot(Xu),_=u*p-d*d;if(_===0)return l.set(0,0,0),null;const y=1/_,M=(p*h-d*x)*y,E=(u*x-d*h)*y;return l.set(1-M-E,E,M)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,t,r,o,l,u,d,h){return this.getBarycoord(e,t,r,o,Yi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Yi.x),h.addScaledVector(u,Yi.y),h.addScaledVector(d,Yi.z),h)}static getInterpolatedAttribute(e,t,r,o,l,u){return Ku.setScalar(0),Zu.setScalar(0),Ju.setScalar(0),Ku.fromBufferAttribute(e,t),Zu.fromBufferAttribute(e,r),Ju.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Ku,l.x),u.addScaledVector(Zu,l.y),u.addScaledVector(Ju,l.z),u}static isFrontFacing(e,t,r,o){return gi.subVectors(r,t),Xi.subVectors(e,t),gi.cross(Xi).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),gi.cross(Xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return vi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,d;js.subVectors(o,r),Ws.subVectors(l,r),Yu.subVectors(e,r);const h=js.dot(Yu),p=Ws.dot(Yu);if(h<=0&&p<=0)return t.copy(r);qu.subVectors(e,o);const x=js.dot(qu),_=Ws.dot(qu);if(x>=0&&_<=x)return t.copy(o);const y=h*_-x*p;if(y<=0&&h>=0&&x<=0)return u=h/(h-x),t.copy(r).addScaledVector(js,u);$u.subVectors(e,l);const M=js.dot($u),E=Ws.dot($u);if(E>=0&&M<=E)return t.copy(l);const b=M*p-h*E;if(b<=0&&p>=0&&E<=0)return d=p/(p-E),t.copy(r).addScaledVector(Ws,d);const S=x*E-M*_;if(S<=0&&_-x>=0&&M-E>=0)return vm.subVectors(l,o),d=(_-x)/(_-x+(M-E)),t.copy(o).addScaledVector(vm,d);const v=1/(S+b+y);return u=b*v,d=y*v,t.copy(r).addScaledVector(js,u).addScaledVector(Ws,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const A0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ar={h:0,s:0,l:0},Sl={h:0,s:0,l:0};function Qu(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Pt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=At.workingColorSpace){return this.r=e,this.g=t,this.b=r,At.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=At.workingColorSpace){if(e=df(e,1),t=pn(t,0,1),r=pn(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=Qu(u,l,e+1/3),this.g=Qu(u,l,e),this.b=Qu(u,l,e-1/3)}return At.toWorkingColorSpace(this,o),this}setStyle(e,t=ni){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ni){const r=A0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=ea(e.r),this.g=ea(e.g),this.b=ea(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return At.fromWorkingColorSpace(Sn.copy(this),e),Math.round(pn(Sn.r*255,0,255))*65536+Math.round(pn(Sn.g*255,0,255))*256+Math.round(pn(Sn.b*255,0,255))}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.fromWorkingColorSpace(Sn.copy(this),t);const r=Sn.r,o=Sn.g,l=Sn.b,u=Math.max(r,o,l),d=Math.min(r,o,l);let h,p;const x=(d+u)/2;if(d===u)h=0,p=0;else{const _=u-d;switch(p=x<=.5?_/(u+d):_/(2-u-d),u){case r:h=(o-l)/_+(o<l?6:0);break;case o:h=(l-r)/_+2;break;case l:h=(r-o)/_+4;break}h/=6}return e.h=h,e.s=p,e.l=x,e}getRGB(e,t=At.workingColorSpace){return At.fromWorkingColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=ni){At.fromWorkingColorSpace(Sn.copy(this),e);const t=Sn.r,r=Sn.g,o=Sn.b;return e!==ni?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Ar),this.setHSL(Ar.h+e,Ar.s+t,Ar.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Ar),e.getHSL(Sl);const r=Ja(Ar.h,Sl.h,t),o=Ja(Ar.s,Sl.s,t),l=Ja(Ar.l,Sl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new Pt;Pt.NAMES=A0;let Ey=0;class co extends ca{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=ua(),this.name="",this.blending=Js,this.side=Ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=md,this.blendDst=gd,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=na,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=em,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(r.blending=this.blending),this.side!==Ir&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==md&&(r.blendSrc=this.blendSrc),this.blendDst!==gd&&(r.blendDst=this.blendDst),this.blendEquation!==as&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==na&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==em&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ks&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ks&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ks&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const d in l){const h=l[d];delete h.metadata,u.push(h)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Rr extends co{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=l0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qt=new Z,Ml=new ot;class Pi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=tm,this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Ml.fromBufferAttribute(this,t),Ml.applyMatrix3(e),this.setXY(t,Ml.x,Ml.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ks(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=An(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ks(t,this.array)),t}setX(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ks(t,this.array)),t}setY(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ks(t,this.array)),t}setZ(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ks(t,this.array)),t}setW(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),r=An(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),r=An(r,this.array),o=An(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),r=An(r,this.array),o=An(o,this.array),l=An(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tm&&(e.usage=this.usage),e}}class C0 extends Pi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class R0 extends Pi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class qt extends Pi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Ty=0;const ti=new jt,ed=new Mn,Xs=new Z,jn=new lo,Ya=new lo,cn=new Z;class ri extends ca{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ty++}),this.uuid=ua(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(w0(e)?R0:C0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new vt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,r){return ti.makeTranslation(e,t,r),this.applyMatrix4(ti),this}scale(e,t,r){return ti.makeScale(e,t,r),this.applyMatrix4(ti),this}lookAt(e){return ed.lookAt(e),ed.updateMatrix(),this.applyMatrix4(ed.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new qt(r,3))}else{for(let r=0,o=t.count;r<o;r++){const l=e[r];t.setXYZ(r,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];jn.setFromBufferAttribute(l),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ff);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const r=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];Ya.setFromBufferAttribute(d),this.morphTargetsRelative?(cn.addVectors(jn.min,Ya.min),jn.expandByPoint(cn),cn.addVectors(jn.max,Ya.max),jn.expandByPoint(cn)):(jn.expandByPoint(Ya.min),jn.expandByPoint(Ya.max))}jn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)cn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(cn));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],h=this.morphTargetsRelative;for(let p=0,x=d.count;p<x;p++)cn.fromBufferAttribute(d,p),h&&(Xs.fromBufferAttribute(e,p),cn.add(Xs)),o=Math.max(o,r.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],h=[];for(let j=0;j<r.count;j++)d[j]=new Z,h[j]=new Z;const p=new Z,x=new Z,_=new Z,y=new ot,M=new ot,E=new ot,b=new Z,S=new Z;function v(j,P,N){p.fromBufferAttribute(r,j),x.fromBufferAttribute(r,P),_.fromBufferAttribute(r,N),y.fromBufferAttribute(l,j),M.fromBufferAttribute(l,P),E.fromBufferAttribute(l,N),x.sub(p),_.sub(p),M.sub(y),E.sub(y);const V=1/(M.x*E.y-E.x*M.y);isFinite(V)&&(b.copy(x).multiplyScalar(E.y).addScaledVector(_,-M.y).multiplyScalar(V),S.copy(_).multiplyScalar(M.x).addScaledVector(x,-E.x).multiplyScalar(V),d[j].add(b),d[P].add(b),d[N].add(b),h[j].add(S),h[P].add(S),h[N].add(S))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let j=0,P=U.length;j<P;++j){const N=U[j],V=N.start,le=N.count;for(let Q=V,de=V+le;Q<de;Q+=3)v(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const L=new Z,C=new Z,$=new Z,F=new Z;function O(j){$.fromBufferAttribute(o,j),F.copy($);const P=d[j];L.copy(P),L.sub($.multiplyScalar($.dot(P))).normalize(),C.crossVectors(F,P);const V=C.dot(h[j])<0?-1:1;u.setXYZW(j,L.x,L.y,L.z,V)}for(let j=0,P=U.length;j<P;++j){const N=U[j],V=N.start,le=N.count;for(let Q=V,de=V+le;Q<de;Q+=3)O(e.getX(Q+0)),O(e.getX(Q+1)),O(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Pi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let y=0,M=r.count;y<M;y++)r.setXYZ(y,0,0,0);const o=new Z,l=new Z,u=new Z,d=new Z,h=new Z,p=new Z,x=new Z,_=new Z;if(e)for(let y=0,M=e.count;y<M;y+=3){const E=e.getX(y+0),b=e.getX(y+1),S=e.getX(y+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,b),u.fromBufferAttribute(t,S),x.subVectors(u,l),_.subVectors(o,l),x.cross(_),d.fromBufferAttribute(r,E),h.fromBufferAttribute(r,b),p.fromBufferAttribute(r,S),d.add(x),h.add(x),p.add(x),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(b,h.x,h.y,h.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let y=0,M=t.count;y<M;y+=3)o.fromBufferAttribute(t,y+0),l.fromBufferAttribute(t,y+1),u.fromBufferAttribute(t,y+2),x.subVectors(u,l),_.subVectors(o,l),x.cross(_),r.setXYZ(y+0,x.x,x.y,x.z),r.setXYZ(y+1,x.x,x.y,x.z),r.setXYZ(y+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(d,h){const p=d.array,x=d.itemSize,_=d.normalized,y=new p.constructor(h.length*x);let M=0,E=0;for(let b=0,S=h.length;b<S;b++){d.isInterleavedBufferAttribute?M=h[b]*d.data.stride+d.offset:M=h[b]*x;for(let v=0;v<x;v++)y[E++]=p[M++]}return new Pi(y,x,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ri,r=this.index.array,o=this.attributes;for(const d in o){const h=o[d],p=e(h,r);t.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const h=[],p=l[d];for(let x=0,_=p.length;x<_;x++){const y=p[x],M=e(y,r);h.push(M)}t.morphAttributes[d]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,h=u.length;d<h;d++){const p=u[d];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],x=[];for(let _=0,y=p.length;_<y;_++){const M=p[_];x.push(M.toJSON(e.data))}x.length>0&&(o[h]=x,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const p in o){const x=o[p];this.setAttribute(p,x.clone(t))}const l=e.morphAttributes;for(const p in l){const x=[],_=l[p];for(let y=0,M=_.length;y<M;y++)x.push(_[y].clone(t));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,x=u.length;p<x;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _m=new jt,es=new xy,wl=new ff,ym=new Z,El=new Z,Tl=new Z,bl=new Z,td=new Z,Al=new Z,Sm=new Z,Cl=new Z;class St extends Mn{constructor(e=new ri,t=new Rr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){Al.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const x=d[h],_=l[h];x!==0&&(td.fromBufferAttribute(_,e),u?Al.addScaledVector(td,x):Al.addScaledVector(td.sub(t),x))}t.add(Al)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),wl.copy(r.boundingSphere),wl.applyMatrix4(l),es.copy(e.ray).recast(e.near),!(wl.containsPoint(es.origin)===!1&&(es.intersectSphere(wl,ym)===null||es.origin.distanceToSquared(ym)>(e.far-e.near)**2))&&(_m.copy(l).invert(),es.copy(e.ray).applyMatrix4(_m),!(r.boundingBox!==null&&es.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,d=l.index,h=l.attributes.position,p=l.attributes.uv,x=l.attributes.uv1,_=l.attributes.normal,y=l.groups,M=l.drawRange;if(d!==null)if(Array.isArray(u))for(let E=0,b=y.length;E<b;E++){const S=y[E],v=u[S.materialIndex],U=Math.max(S.start,M.start),L=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let C=U,$=L;C<$;C+=3){const F=d.getX(C),O=d.getX(C+1),j=d.getX(C+2);o=Rl(this,v,e,r,p,x,_,F,O,j),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const E=Math.max(0,M.start),b=Math.min(d.count,M.start+M.count);for(let S=E,v=b;S<v;S+=3){const U=d.getX(S),L=d.getX(S+1),C=d.getX(S+2);o=Rl(this,u,e,r,p,x,_,U,L,C),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let E=0,b=y.length;E<b;E++){const S=y[E],v=u[S.materialIndex],U=Math.max(S.start,M.start),L=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let C=U,$=L;C<$;C+=3){const F=C,O=C+1,j=C+2;o=Rl(this,v,e,r,p,x,_,F,O,j),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const E=Math.max(0,M.start),b=Math.min(h.count,M.start+M.count);for(let S=E,v=b;S<v;S+=3){const U=S,L=S+1,C=S+2;o=Rl(this,u,e,r,p,x,_,U,L,C),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function by(s,e,t,r,o,l,u,d){let h;if(e.side===Fn?h=r.intersectTriangle(u,l,o,!0,d):h=r.intersectTriangle(o,l,u,e.side===Ir,d),h===null)return null;Cl.copy(d),Cl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Cl);return p<t.near||p>t.far?null:{distance:p,point:Cl.clone(),object:s}}function Rl(s,e,t,r,o,l,u,d,h,p){s.getVertexPosition(d,El),s.getVertexPosition(h,Tl),s.getVertexPosition(p,bl);const x=by(s,e,t,r,El,Tl,bl,Sm);if(x){const _=new Z;vi.getBarycoord(Sm,El,Tl,bl,_),o&&(x.uv=vi.getInterpolatedAttribute(o,d,h,p,_,new ot)),l&&(x.uv1=vi.getInterpolatedAttribute(l,d,h,p,_,new ot)),u&&(x.normal=vi.getInterpolatedAttribute(u,d,h,p,_,new Z),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const y={a:d,b:h,c:p,normal:new Z,materialIndex:0};vi.getNormal(El,Tl,bl,y.normal),x.face=y,x.barycoord=_}return x}class Dr extends ri{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const d=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],x=[],_=[];let y=0,M=0;E("z","y","x",-1,-1,r,t,e,u,l,0),E("z","y","x",1,-1,r,t,-e,u,l,1),E("x","z","y",1,1,e,r,t,o,u,2),E("x","z","y",1,-1,e,r,-t,o,u,3),E("x","y","z",1,-1,e,t,r,o,l,4),E("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new qt(p,3)),this.setAttribute("normal",new qt(x,3)),this.setAttribute("uv",new qt(_,2));function E(b,S,v,U,L,C,$,F,O,j,P){const N=C/O,V=$/j,le=C/2,Q=$/2,de=F/2,pe=O+1,ce=j+1;let ue=0,H=0;const he=new Z;for(let I=0;I<ce;I++){const w=I*V-Q;for(let W=0;W<pe;W++){const xe=W*N-le;he[b]=xe*U,he[S]=w*L,he[v]=de,p.push(he.x,he.y,he.z),he[b]=0,he[S]=0,he[v]=F>0?1:-1,x.push(he.x,he.y,he.z),_.push(W/O),_.push(1-I/j),ue+=1}}for(let I=0;I<j;I++)for(let w=0;w<O;w++){const W=y+w+pe*I,xe=y+w+pe*(I+1),X=y+(w+1)+pe*(I+1),ee=y+(w+1)+pe*I;h.push(W,xe,ee),h.push(xe,X,ee),H+=6}d.addGroup(M,H,P),M+=H,y+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function oa(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Cn(s){const e={};for(let t=0;t<s.length;t++){const r=oa(s[t]);for(const o in r)e[o]=r[o]}return e}function Ay(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function N0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const Cy={clone:oa,merge:Cn};var Ry=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ny=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ur extends co{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ry,this.fragmentShader=Ny,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oa(e.uniforms),this.uniformsGroups=Ay(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class P0 extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Ji}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Cr=new Z,Mm=new ot,wm=new ot;class ii extends P0{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=io*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Za*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return io*2*Math.atan(Math.tan(Za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z),Cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z)}getViewSize(e,t){return this.getViewBounds(e,Mm,wm),t.subVectors(wm,Mm)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Za*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/h,t-=u.offsetY*r/p,o*=u.width/h,r*=u.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ys=-90,qs=1;class Py extends Mn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ii(Ys,qs,e,t);o.layers=this.layers,this.add(o);const l=new ii(Ys,qs,e,t);l.layers=this.layers,this.add(l);const u=new ii(Ys,qs,e,t);u.layers=this.layers,this.add(u);const d=new ii(Ys,qs,e,t);d.layers=this.layers,this.add(d);const h=new ii(Ys,qs,e,t);h.layers=this.layers,this.add(h);const p=new ii(Ys,qs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,d,h]=t;for(const p of t)this.remove(p);if(e===Ji)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Hl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,h,p,x]=this.children,_=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,d),e.setRenderTarget(r,3,o),e.render(t,h),e.setRenderTarget(r,4,o),e.render(t,p),r.texture.generateMipmaps=b,e.setRenderTarget(r,5,o),e.render(t,x),e.setRenderTarget(_,y,M),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class L0 extends On{constructor(e,t,r,o,l,u,d,h,p,x){e=e!==void 0?e:[],t=t!==void 0?t:ia,super(e,t,r,o,l,u,d,h,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ly extends fs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new L0(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ni}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Dr(5,5,5),l=new Ur({name:"CubemapFromEquirect",uniforms:oa(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Fn,blending:Pr});l.uniforms.tEquirect.value=t;const u=new St(o,l),d=t.minFilter;return t.minFilter===us&&(t.minFilter=Ni),new Py(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,r,o){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}const nd=new Z,Dy=new Z,Iy=new vt;class rs{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=nd.subVectors(r,t).cross(Dy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(nd),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Iy.getNormalMatrix(e),o=this.coplanarPoint(nd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new ff,Nl=new Z;class hf{constructor(e=new rs,t=new rs,r=new rs,o=new rs,l=new rs,u=new rs){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(o),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ji){const r=this.planes,o=e.elements,l=o[0],u=o[1],d=o[2],h=o[3],p=o[4],x=o[5],_=o[6],y=o[7],M=o[8],E=o[9],b=o[10],S=o[11],v=o[12],U=o[13],L=o[14],C=o[15];if(r[0].setComponents(h-l,y-p,S-M,C-v).normalize(),r[1].setComponents(h+l,y+p,S+M,C+v).normalize(),r[2].setComponents(h+u,y+x,S+E,C+U).normalize(),r[3].setComponents(h-u,y-x,S-E,C-U).normalize(),r[4].setComponents(h-d,y-_,S-b,C-L).normalize(),t===Ji)r[5].setComponents(h+d,y+_,S+b,C+L).normalize();else if(t===Hl)r[5].setComponents(d,_,b,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){return ts.center.set(0,0,0),ts.radius=.7071067811865476,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Nl.x=o.normal.x>0?e.max.x:e.min.x,Nl.y=o.normal.y>0?e.max.y:e.min.y,Nl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Nl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function D0(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Uy(s){const e=new WeakMap;function t(d,h){const p=d.array,x=d.usage,_=p.byteLength,y=s.createBuffer();s.bindBuffer(h,y),s.bufferData(h,p,x),d.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,h,p){const x=h.array,_=h.updateRanges;if(s.bindBuffer(p,d),_.length===0)s.bufferSubData(p,0,x);else{_.sort((M,E)=>M.start-E.start);let y=0;for(let M=1;M<_.length;M++){const E=_[y],b=_[M];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++y,_[y]=b)}_.length=y+1;for(let M=0,E=_.length;M<E;M++){const b=_[M];s.bufferSubData(p,b.start*x.BYTES_PER_ELEMENT,x,b.start,b.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(s.deleteBuffer(h.buffer),e.delete(d))}function u(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,t(d,h));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,h),p.version=d.version}}return{get:o,remove:l,update:u}}class Kl extends ri{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,d=Math.floor(r),h=Math.floor(o),p=d+1,x=h+1,_=e/d,y=t/h,M=[],E=[],b=[],S=[];for(let v=0;v<x;v++){const U=v*y-u;for(let L=0;L<p;L++){const C=L*_-l;E.push(C,-U,0),b.push(0,0,1),S.push(L/d),S.push(1-v/h)}}for(let v=0;v<h;v++)for(let U=0;U<d;U++){const L=U+p*v,C=U+p*(v+1),$=U+1+p*(v+1),F=U+1+p*v;M.push(L,C,F),M.push(C,$,F)}this.setIndex(M),this.setAttribute("position",new qt(E,3)),this.setAttribute("normal",new qt(b,3)),this.setAttribute("uv",new qt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kl(e.width,e.height,e.widthSegments,e.heightSegments)}}var ky=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Oy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,By=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Gy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Wy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$y=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ky=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Jy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,e1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,t1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,n1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,i1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,r1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,s1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,a1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,o1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,l1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,c1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,u1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,d1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f1="gl_FragColor = linearToOutputTexel( gl_FragColor );",h1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,p1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,m1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,g1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,x1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,v1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,y1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,S1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,M1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,w1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,E1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,T1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,b1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,A1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,C1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,R1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,N1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,P1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,L1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,D1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,I1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,U1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,k1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,F1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,O1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,z1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,H1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,G1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,j1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,W1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Y1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,q1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,K1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,J1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,eS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,oS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,vS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_S=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,SS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,MS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ES=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,TS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,CS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,RS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,NS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,PS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,LS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,DS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,IS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const US=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,HS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,GS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,WS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$S=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,KS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,eM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,iM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,aM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,uM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,hM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yt={alphahash_fragment:ky,alphahash_pars_fragment:Fy,alphamap_fragment:Oy,alphamap_pars_fragment:zy,alphatest_fragment:By,alphatest_pars_fragment:Vy,aomap_fragment:Hy,aomap_pars_fragment:Gy,batching_pars_vertex:jy,batching_vertex:Wy,begin_vertex:Xy,beginnormal_vertex:Yy,bsdfs:qy,iridescence_fragment:$y,bumpmap_pars_fragment:Ky,clipping_planes_fragment:Zy,clipping_planes_pars_fragment:Jy,clipping_planes_pars_vertex:Qy,clipping_planes_vertex:e1,color_fragment:t1,color_pars_fragment:n1,color_pars_vertex:i1,color_vertex:r1,common:s1,cube_uv_reflection_fragment:a1,defaultnormal_vertex:o1,displacementmap_pars_vertex:l1,displacementmap_vertex:c1,emissivemap_fragment:u1,emissivemap_pars_fragment:d1,colorspace_fragment:f1,colorspace_pars_fragment:h1,envmap_fragment:p1,envmap_common_pars_fragment:m1,envmap_pars_fragment:g1,envmap_pars_vertex:x1,envmap_physical_pars_fragment:C1,envmap_vertex:v1,fog_vertex:_1,fog_pars_vertex:y1,fog_fragment:S1,fog_pars_fragment:M1,gradientmap_pars_fragment:w1,lightmap_pars_fragment:E1,lights_lambert_fragment:T1,lights_lambert_pars_fragment:b1,lights_pars_begin:A1,lights_toon_fragment:R1,lights_toon_pars_fragment:N1,lights_phong_fragment:P1,lights_phong_pars_fragment:L1,lights_physical_fragment:D1,lights_physical_pars_fragment:I1,lights_fragment_begin:U1,lights_fragment_maps:k1,lights_fragment_end:F1,logdepthbuf_fragment:O1,logdepthbuf_pars_fragment:z1,logdepthbuf_pars_vertex:B1,logdepthbuf_vertex:V1,map_fragment:H1,map_pars_fragment:G1,map_particle_fragment:j1,map_particle_pars_fragment:W1,metalnessmap_fragment:X1,metalnessmap_pars_fragment:Y1,morphinstance_vertex:q1,morphcolor_vertex:$1,morphnormal_vertex:K1,morphtarget_pars_vertex:Z1,morphtarget_vertex:J1,normal_fragment_begin:Q1,normal_fragment_maps:eS,normal_pars_fragment:tS,normal_pars_vertex:nS,normal_vertex:iS,normalmap_pars_fragment:rS,clearcoat_normal_fragment_begin:sS,clearcoat_normal_fragment_maps:aS,clearcoat_pars_fragment:oS,iridescence_pars_fragment:lS,opaque_fragment:cS,packing:uS,premultiplied_alpha_fragment:dS,project_vertex:fS,dithering_fragment:hS,dithering_pars_fragment:pS,roughnessmap_fragment:mS,roughnessmap_pars_fragment:gS,shadowmap_pars_fragment:xS,shadowmap_pars_vertex:vS,shadowmap_vertex:_S,shadowmask_pars_fragment:yS,skinbase_vertex:SS,skinning_pars_vertex:MS,skinning_vertex:wS,skinnormal_vertex:ES,specularmap_fragment:TS,specularmap_pars_fragment:bS,tonemapping_fragment:AS,tonemapping_pars_fragment:CS,transmission_fragment:RS,transmission_pars_fragment:NS,uv_pars_fragment:PS,uv_pars_vertex:LS,uv_vertex:DS,worldpos_vertex:IS,background_vert:US,background_frag:kS,backgroundCube_vert:FS,backgroundCube_frag:OS,cube_vert:zS,cube_frag:BS,depth_vert:VS,depth_frag:HS,distanceRGBA_vert:GS,distanceRGBA_frag:jS,equirect_vert:WS,equirect_frag:XS,linedashed_vert:YS,linedashed_frag:qS,meshbasic_vert:$S,meshbasic_frag:KS,meshlambert_vert:ZS,meshlambert_frag:JS,meshmatcap_vert:QS,meshmatcap_frag:eM,meshnormal_vert:tM,meshnormal_frag:nM,meshphong_vert:iM,meshphong_frag:rM,meshphysical_vert:sM,meshphysical_frag:aM,meshtoon_vert:oM,meshtoon_frag:lM,points_vert:cM,points_frag:uM,shadow_vert:dM,shadow_frag:fM,sprite_vert:hM,sprite_frag:pM},Ie={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},Ri={basic:{uniforms:Cn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:Cn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Pt(0)}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:Cn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:Cn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:Cn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Pt(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:Cn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:Cn([Ie.points,Ie.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:Cn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:Cn([Ie.common,Ie.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:Cn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:Cn([Ie.sprite,Ie.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distanceRGBA:{uniforms:Cn([Ie.common,Ie.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distanceRGBA_vert,fragmentShader:yt.distanceRGBA_frag},shadow:{uniforms:Cn([Ie.lights,Ie.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};Ri.physical={uniforms:Cn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};const Pl={r:0,b:0,g:0},ns=new Li,mM=new jt;function gM(s,e,t,r,o,l,u){const d=new Pt(0);let h=l===!0?0:1,p,x,_=null,y=0,M=null;function E(U){let L=U.isScene===!0?U.background:null;return L&&L.isTexture&&(L=(U.backgroundBlurriness>0?t:e).get(L)),L}function b(U){let L=!1;const C=E(U);C===null?v(d,h):C&&C.isColor&&(v(C,1),L=!0);const $=s.xr.getEnvironmentBlendMode();$==="additive"?r.buffers.color.setClear(0,0,0,1,u):$==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(U,L){const C=E(L);C&&(C.isCubeTexture||C.mapping===ql)?(x===void 0&&(x=new St(new Dr(1,1,1),new Ur({name:"BackgroundCubeMaterial",uniforms:oa(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function($,F,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(x)),ns.copy(L.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),x.material.uniforms.envMap.value=C,x.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(mM.makeRotationFromEuler(ns)),x.material.toneMapped=At.getTransfer(C.colorSpace)!==Ut,(_!==C||y!==C.version||M!==s.toneMapping)&&(x.material.needsUpdate=!0,_=C,y=C.version,M=s.toneMapping),x.layers.enableAll(),U.unshift(x,x.geometry,x.material,0,0,null)):C&&C.isTexture&&(p===void 0&&(p=new St(new Kl(2,2),new Ur({name:"BackgroundMaterial",uniforms:oa(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Ir,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=C,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=At.getTransfer(C.colorSpace)!==Ut,C.matrixAutoUpdate===!0&&C.updateMatrix(),p.material.uniforms.uvTransform.value.copy(C.matrix),(_!==C||y!==C.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,_=C,y=C.version,M=s.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function v(U,L){U.getRGB(Pl,N0(s)),r.buffers.color.setClear(Pl.r,Pl.g,Pl.b,L,u)}return{getClearColor:function(){return d},setClearColor:function(U,L=1){d.set(U),h=L,v(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(U){h=U,v(d,h)},render:b,addToRenderList:S}}function xM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=y(null);let l=o,u=!1;function d(N,V,le,Q,de){let pe=!1;const ce=_(Q,le,V);l!==ce&&(l=ce,p(l.object)),pe=M(N,Q,le,de),pe&&E(N,Q,le,de),de!==null&&e.update(de,s.ELEMENT_ARRAY_BUFFER),(pe||u)&&(u=!1,C(N,V,le,Q),de!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function h(){return s.createVertexArray()}function p(N){return s.bindVertexArray(N)}function x(N){return s.deleteVertexArray(N)}function _(N,V,le){const Q=le.wireframe===!0;let de=r[N.id];de===void 0&&(de={},r[N.id]=de);let pe=de[V.id];pe===void 0&&(pe={},de[V.id]=pe);let ce=pe[Q];return ce===void 0&&(ce=y(h()),pe[Q]=ce),ce}function y(N){const V=[],le=[],Q=[];for(let de=0;de<t;de++)V[de]=0,le[de]=0,Q[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:le,attributeDivisors:Q,object:N,attributes:{},index:null}}function M(N,V,le,Q){const de=l.attributes,pe=V.attributes;let ce=0;const ue=le.getAttributes();for(const H in ue)if(ue[H].location>=0){const I=de[H];let w=pe[H];if(w===void 0&&(H==="instanceMatrix"&&N.instanceMatrix&&(w=N.instanceMatrix),H==="instanceColor"&&N.instanceColor&&(w=N.instanceColor)),I===void 0||I.attribute!==w||w&&I.data!==w.data)return!0;ce++}return l.attributesNum!==ce||l.index!==Q}function E(N,V,le,Q){const de={},pe=V.attributes;let ce=0;const ue=le.getAttributes();for(const H in ue)if(ue[H].location>=0){let I=pe[H];I===void 0&&(H==="instanceMatrix"&&N.instanceMatrix&&(I=N.instanceMatrix),H==="instanceColor"&&N.instanceColor&&(I=N.instanceColor));const w={};w.attribute=I,I&&I.data&&(w.data=I.data),de[H]=w,ce++}l.attributes=de,l.attributesNum=ce,l.index=Q}function b(){const N=l.newAttributes;for(let V=0,le=N.length;V<le;V++)N[V]=0}function S(N){v(N,0)}function v(N,V){const le=l.newAttributes,Q=l.enabledAttributes,de=l.attributeDivisors;le[N]=1,Q[N]===0&&(s.enableVertexAttribArray(N),Q[N]=1),de[N]!==V&&(s.vertexAttribDivisor(N,V),de[N]=V)}function U(){const N=l.newAttributes,V=l.enabledAttributes;for(let le=0,Q=V.length;le<Q;le++)V[le]!==N[le]&&(s.disableVertexAttribArray(le),V[le]=0)}function L(N,V,le,Q,de,pe,ce){ce===!0?s.vertexAttribIPointer(N,V,le,de,pe):s.vertexAttribPointer(N,V,le,Q,de,pe)}function C(N,V,le,Q){b();const de=Q.attributes,pe=le.getAttributes(),ce=V.defaultAttributeValues;for(const ue in pe){const H=pe[ue];if(H.location>=0){let he=de[ue];if(he===void 0&&(ue==="instanceMatrix"&&N.instanceMatrix&&(he=N.instanceMatrix),ue==="instanceColor"&&N.instanceColor&&(he=N.instanceColor)),he!==void 0){const I=he.normalized,w=he.itemSize,W=e.get(he);if(W===void 0)continue;const xe=W.buffer,X=W.type,ee=W.bytesPerElement,fe=X===s.INT||X===s.UNSIGNED_INT||he.gpuType===sf;if(he.isInterleavedBufferAttribute){const re=he.data,ge=re.stride,be=he.offset;if(re.isInstancedInterleavedBuffer){for(let Le=0;Le<H.locationSize;Le++)v(H.location+Le,re.meshPerAttribute);N.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Le=0;Le<H.locationSize;Le++)S(H.location+Le);s.bindBuffer(s.ARRAY_BUFFER,xe);for(let Le=0;Le<H.locationSize;Le++)L(H.location+Le,w/H.locationSize,X,I,ge*ee,(be+w/H.locationSize*Le)*ee,fe)}else{if(he.isInstancedBufferAttribute){for(let re=0;re<H.locationSize;re++)v(H.location+re,he.meshPerAttribute);N.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let re=0;re<H.locationSize;re++)S(H.location+re);s.bindBuffer(s.ARRAY_BUFFER,xe);for(let re=0;re<H.locationSize;re++)L(H.location+re,w/H.locationSize,X,I,w*ee,w/H.locationSize*re*ee,fe)}}else if(ce!==void 0){const I=ce[ue];if(I!==void 0)switch(I.length){case 2:s.vertexAttrib2fv(H.location,I);break;case 3:s.vertexAttrib3fv(H.location,I);break;case 4:s.vertexAttrib4fv(H.location,I);break;default:s.vertexAttrib1fv(H.location,I)}}}}U()}function $(){j();for(const N in r){const V=r[N];for(const le in V){const Q=V[le];for(const de in Q)x(Q[de].object),delete Q[de];delete V[le]}delete r[N]}}function F(N){if(r[N.id]===void 0)return;const V=r[N.id];for(const le in V){const Q=V[le];for(const de in Q)x(Q[de].object),delete Q[de];delete V[le]}delete r[N.id]}function O(N){for(const V in r){const le=r[V];if(le[N.id]===void 0)continue;const Q=le[N.id];for(const de in Q)x(Q[de].object),delete Q[de];delete le[N.id]}}function j(){P(),u=!0,l!==o&&(l=o,p(l.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:j,resetDefaultState:P,dispose:$,releaseStatesOfGeometry:F,releaseStatesOfProgram:O,initAttributes:b,enableAttribute:S,disableUnusedAttributes:U}}function vM(s,e,t){let r;function o(p){r=p}function l(p,x){s.drawArrays(r,p,x),t.update(x,r,1)}function u(p,x,_){_!==0&&(s.drawArraysInstanced(r,p,x,_),t.update(x,r,_))}function d(p,x,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,x,0,_);let M=0;for(let E=0;E<_;E++)M+=x[E];t.update(M,r,1)}function h(p,x,_,y){if(_===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)u(p[E],x[E],y[E]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,x,0,y,0,_);let E=0;for(let b=0;b<_;b++)E+=x[b]*y[b];t.update(E,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function _M(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==_i&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const j=O===ao&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==er&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Zi&&!j)}function h(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const x=h(p);x!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const _=t.logarithmicDepthBuffer===!0,y=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),U=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),$=E>0,F=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reverseDepthBuffer:y,maxTextures:M,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:U,maxVaryings:L,maxFragmentUniforms:C,vertexTextures:$,maxSamples:F}}function yM(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new rs,d=new vt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y){const M=_.length!==0||y||r!==0||o;return o=y,r=_.length,M},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,y){t=x(_,y,0)},this.setState=function(_,y,M){const E=_.clippingPlanes,b=_.clipIntersection,S=_.clipShadows,v=s.get(_);if(!o||E===null||E.length===0||l&&!S)l?x(null):p();else{const U=l?0:r,L=U*4;let C=v.clippingState||null;h.value=C,C=x(E,y,L,M);for(let $=0;$!==L;++$)C[$]=t[$];v.clippingState=C,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=U}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(_,y,M,E){const b=_!==null?_.length:0;let S=null;if(b!==0){if(S=h.value,E!==!0||S===null){const v=M+b*4,U=y.matrixWorldInverse;d.getNormalMatrix(U),(S===null||S.length<v)&&(S=new Float32Array(v));for(let L=0,C=M;L!==b;++L,C+=4)u.copy(_[L]).applyMatrix4(U,d),u.normal.toArray(S,C),S[C+3]=u.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,S}}function SM(s){let e=new WeakMap;function t(u,d){return d===Ed?u.mapping=ia:d===Td&&(u.mapping=ra),u}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===Ed||d===Td)if(e.has(u)){const h=e.get(u).texture;return t(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const p=new Ly(h.height);return p.fromEquirectangularTexture(s,u),e.set(u,p),u.addEventListener("dispose",o),t(p.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class I0 extends P0{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,d-=x*this.view.offsetY,h=d-x*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Zs=4,Em=[.125,.215,.35,.446,.526,.582],os=20,id=new I0,Tm=new Pt;let rd=null,sd=0,ad=0,od=!1;const ss=(1+Math.sqrt(5))/2,$s=1/ss,bm=[new Z(-ss,$s,0),new Z(ss,$s,0),new Z(-$s,0,ss),new Z($s,0,ss),new Z(0,ss,-$s),new Z(0,ss,$s),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)];class Am{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){rd=this._renderer.getRenderTarget(),sd=this._renderer.getActiveCubeFace(),ad=this._renderer.getActiveMipmapLevel(),od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rd,sd,ad),this._renderer.xr.enabled=od,e.scissorTest=!1,Ll(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ia||e.mapping===ra?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rd=this._renderer.getRenderTarget(),sd=this._renderer.getActiveCubeFace(),ad=this._renderer.getActiveMipmapLevel(),od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Ni,minFilter:Ni,generateMipmaps:!1,type:ao,format:_i,colorSpace:la,depthBuffer:!1},o=Cm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cm(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=MM(l)),this._blurMaterial=wM(l,e,t)}return o}_compileMaterial(e){const t=new St(this._lodPlanes[0],e);this._renderer.compile(t,id)}_sceneToCubeUV(e,t,r,o){const d=new ii(90,1,t,r),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],x=this._renderer,_=x.autoClear,y=x.toneMapping;x.getClearColor(Tm),x.toneMapping=Lr,x.autoClear=!1;const M=new Rr({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),E=new St(new Dr,M);let b=!1;const S=e.background;S?S.isColor&&(M.color.copy(S),e.background=null,b=!0):(M.color.copy(Tm),b=!0);for(let v=0;v<6;v++){const U=v%3;U===0?(d.up.set(0,h[v],0),d.lookAt(p[v],0,0)):U===1?(d.up.set(0,0,h[v]),d.lookAt(0,p[v],0)):(d.up.set(0,h[v],0),d.lookAt(0,0,p[v]));const L=this._cubeSize;Ll(o,U*L,v>2?L:0,L,L),x.setRenderTarget(o),b&&x.render(E,d),x.render(e,d)}E.geometry.dispose(),E.material.dispose(),x.toneMapping=y,x.autoClear=_,e.background=S}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===ia||e.mapping===ra;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rm());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new St(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const h=this._cubeSize;Ll(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(u,id)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=bm[(o-l-1)%bm.length];this._blur(e,l-1,l,u,d)}t.autoClear=r}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,d){const h=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,_=new St(this._lodPlanes[o],p),y=p.uniforms,M=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*os-1),b=l/E,S=isFinite(l)?1+Math.floor(x*b):os;S>os&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${os}`);const v=[];let U=0;for(let O=0;O<os;++O){const j=O/b,P=Math.exp(-j*j/2);v.push(P),O===0?U+=P:O<S&&(U+=2*P)}for(let O=0;O<v.length;O++)v[O]=v[O]/U;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=v,y.latitudinal.value=u==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:L}=this;y.dTheta.value=E,y.mipInt.value=L-r;const C=this._sizeLods[o],$=3*C*(o>L-Zs?o-L+Zs:0),F=4*(this._cubeSize-C);Ll(t,$,F,3*C,2*C),h.setRenderTarget(t),h.render(_,id)}}function MM(s){const e=[],t=[],r=[];let o=s;const l=s-Zs+1+Em.length;for(let u=0;u<l;u++){const d=Math.pow(2,o);t.push(d);let h=1/d;u>s-Zs?h=Em[u-s+Zs-1]:u===0&&(h=0),r.push(h);const p=1/(d-2),x=-p,_=1+p,y=[x,x,_,x,_,_,x,x,_,_,x,_],M=6,E=6,b=3,S=2,v=1,U=new Float32Array(b*E*M),L=new Float32Array(S*E*M),C=new Float32Array(v*E*M);for(let F=0;F<M;F++){const O=F%3*2/3-1,j=F>2?0:-1,P=[O,j,0,O+2/3,j,0,O+2/3,j+1,0,O,j,0,O+2/3,j+1,0,O,j+1,0];U.set(P,b*E*F),L.set(y,S*E*F);const N=[F,F,F,F,F,F];C.set(N,v*E*F)}const $=new ri;$.setAttribute("position",new Pi(U,b)),$.setAttribute("uv",new Pi(L,S)),$.setAttribute("faceIndex",new Pi(C,v)),e.push($),o>Zs&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Cm(s,e,t){const r=new fs(s,e,t);return r.texture.mapping=ql,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ll(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function wM(s,e,t){const r=new Float32Array(os),o=new Z(0,1,0);return new Ur({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:pf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function Rm(){return new Ur({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function Nm(){return new Ur({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function pf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function EM(s){let e=new WeakMap,t=null;function r(d){if(d&&d.isTexture){const h=d.mapping,p=h===Ed||h===Td,x=h===ia||h===ra;if(p||x){let _=e.get(d);const y=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return t===null&&(t=new Am(s)),_=p?t.fromEquirectangular(d,_):t.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const M=d.image;return p&&M&&M.height>0||x&&M&&o(M)?(t===null&&(t=new Am(s)),_=p?t.fromEquirectangular(d):t.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",l),_.texture):null}}}return d}function o(d){let h=0;const p=6;for(let x=0;x<p;x++)d[x]!==void 0&&h++;return h===p}function l(d){const h=d.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function TM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&$a("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function bM(s,e,t,r){const o={},l=new WeakMap;function u(_){const y=_.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);for(const E in y.morphAttributes){const b=y.morphAttributes[E];for(let S=0,v=b.length;S<v;S++)e.remove(b[S])}y.removeEventListener("dispose",u),delete o[y.id];const M=l.get(y);M&&(e.remove(M),l.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function d(_,y){return o[y.id]===!0||(y.addEventListener("dispose",u),o[y.id]=!0,t.memory.geometries++),y}function h(_){const y=_.attributes;for(const E in y)e.update(y[E],s.ARRAY_BUFFER);const M=_.morphAttributes;for(const E in M){const b=M[E];for(let S=0,v=b.length;S<v;S++)e.update(b[S],s.ARRAY_BUFFER)}}function p(_){const y=[],M=_.index,E=_.attributes.position;let b=0;if(M!==null){const U=M.array;b=M.version;for(let L=0,C=U.length;L<C;L+=3){const $=U[L+0],F=U[L+1],O=U[L+2];y.push($,F,F,O,O,$)}}else if(E!==void 0){const U=E.array;b=E.version;for(let L=0,C=U.length/3-1;L<C;L+=3){const $=L+0,F=L+1,O=L+2;y.push($,F,F,O,O,$)}}else return;const S=new(w0(y)?R0:C0)(y,1);S.version=b;const v=l.get(_);v&&e.remove(v),l.set(_,S)}function x(_){const y=l.get(_);if(y){const M=_.index;M!==null&&y.version<M.version&&p(_)}else p(_);return l.get(_)}return{get:d,update:h,getWireframeAttribute:x}}function AM(s,e,t){let r;function o(y){r=y}let l,u;function d(y){l=y.type,u=y.bytesPerElement}function h(y,M){s.drawElements(r,M,l,y*u),t.update(M,r,1)}function p(y,M,E){E!==0&&(s.drawElementsInstanced(r,M,l,y*u,E),t.update(M,r,E))}function x(y,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,l,y,0,E);let S=0;for(let v=0;v<E;v++)S+=M[v];t.update(S,r,1)}function _(y,M,E,b){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<y.length;v++)p(y[v]/u,M[v],b[v]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,l,y,0,b,0,E);let v=0;for(let U=0;U<E;U++)v+=M[U]*b[U];t.update(v,r,1)}}this.setMode=o,this.setIndex=d,this.render=h,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=_}function CM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=d*(l/3);break;case s.LINES:t.lines+=d*(l/2);break;case s.LINE_STRIP:t.lines+=d*(l-1);break;case s.LINE_LOOP:t.lines+=d*l;break;case s.POINTS:t.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function RM(s,e,t){const r=new WeakMap,o=new Yt;function l(u,d,h){const p=u.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=x!==void 0?x.length:0;let y=r.get(d);if(y===void 0||y.count!==_){let N=function(){j.dispose(),r.delete(d),d.removeEventListener("dispose",N)};var M=N;y!==void 0&&y.texture.dispose();const E=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],U=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let C=0;E===!0&&(C=1),b===!0&&(C=2),S===!0&&(C=3);let $=d.attributes.position.count*C,F=1;$>e.maxTextureSize&&(F=Math.ceil($/e.maxTextureSize),$=e.maxTextureSize);const O=new Float32Array($*F*4*_),j=new T0(O,$,F,_);j.type=Zi,j.needsUpdate=!0;const P=C*4;for(let V=0;V<_;V++){const le=v[V],Q=U[V],de=L[V],pe=$*F*4*V;for(let ce=0;ce<le.count;ce++){const ue=ce*P;E===!0&&(o.fromBufferAttribute(le,ce),O[pe+ue+0]=o.x,O[pe+ue+1]=o.y,O[pe+ue+2]=o.z,O[pe+ue+3]=0),b===!0&&(o.fromBufferAttribute(Q,ce),O[pe+ue+4]=o.x,O[pe+ue+5]=o.y,O[pe+ue+6]=o.z,O[pe+ue+7]=0),S===!0&&(o.fromBufferAttribute(de,ce),O[pe+ue+8]=o.x,O[pe+ue+9]=o.y,O[pe+ue+10]=o.z,O[pe+ue+11]=de.itemSize===4?o.w:1)}}y={count:_,texture:j,size:new ot($,F)},r.set(d,y),d.addEventListener("dispose",N)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const b=d.morphTargetsRelative?1:1-E;h.getUniforms().setValue(s,"morphTargetBaseInfluence",b),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",y.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:l}}function NM(s,e,t,r){let o=new WeakMap;function l(h){const p=r.render.frame,x=h.geometry,_=e.get(h,x);if(o.get(_)!==p&&(e.update(_),o.set(_,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),o.get(h)!==p&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),o.set(h,p))),h.isSkinnedMesh){const y=h.skeleton;o.get(y)!==p&&(y.update(),o.set(y,p))}return _}function u(){o=new WeakMap}function d(h){const p=h.target;p.removeEventListener("dispose",d),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:u}}class U0 extends On{constructor(e,t,r,o,l,u,d,h,p,x=Qs){if(x!==Qs&&x!==aa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&x===Qs&&(r=ds),r===void 0&&x===aa&&(r=sa),super(null,o,l,u,d,h,x,r,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=d!==void 0?d:yi,this.minFilter=h!==void 0?h:yi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const k0=new On,Pm=new U0(1,1),F0=new T0,O0=new my,z0=new L0,Lm=[],Dm=[],Im=new Float32Array(16),Um=new Float32Array(9),km=new Float32Array(4);function da(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=Lm[o];if(l===void 0&&(l=new Float32Array(o),Lm[o]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,s[u].toArray(l,d)}return l}function rn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function sn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Zl(s,e){let t=Dm[e];t===void 0&&(t=new Int32Array(e),Dm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function PM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function LM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;s.uniform2fv(this.addr,e),sn(t,e)}}function DM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;s.uniform3fv(this.addr,e),sn(t,e)}}function IM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;s.uniform4fv(this.addr,e),sn(t,e)}}function UM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(rn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,r))return;km.set(r),s.uniformMatrix2fv(this.addr,!1,km),sn(t,r)}}function kM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(rn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,r))return;Um.set(r),s.uniformMatrix3fv(this.addr,!1,Um),sn(t,r)}}function FM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(rn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,r))return;Im.set(r),s.uniformMatrix4fv(this.addr,!1,Im),sn(t,r)}}function OM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function zM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;s.uniform2iv(this.addr,e),sn(t,e)}}function BM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;s.uniform3iv(this.addr,e),sn(t,e)}}function VM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;s.uniform4iv(this.addr,e),sn(t,e)}}function HM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function GM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;s.uniform2uiv(this.addr,e),sn(t,e)}}function jM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;s.uniform3uiv(this.addr,e),sn(t,e)}}function WM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;s.uniform4uiv(this.addr,e),sn(t,e)}}function XM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Pm.compareFunction=M0,l=Pm):l=k0,t.setTexture2D(e||l,o)}function YM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||O0,o)}function qM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||z0,o)}function $M(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||F0,o)}function KM(s){switch(s){case 5126:return PM;case 35664:return LM;case 35665:return DM;case 35666:return IM;case 35674:return UM;case 35675:return kM;case 35676:return FM;case 5124:case 35670:return OM;case 35667:case 35671:return zM;case 35668:case 35672:return BM;case 35669:case 35673:return VM;case 5125:return HM;case 36294:return GM;case 36295:return jM;case 36296:return WM;case 35678:case 36198:case 36298:case 36306:case 35682:return XM;case 35679:case 36299:case 36307:return YM;case 35680:case 36300:case 36308:case 36293:return qM;case 36289:case 36303:case 36311:case 36292:return $M}}function ZM(s,e){s.uniform1fv(this.addr,e)}function JM(s,e){const t=da(e,this.size,2);s.uniform2fv(this.addr,t)}function QM(s,e){const t=da(e,this.size,3);s.uniform3fv(this.addr,t)}function ew(s,e){const t=da(e,this.size,4);s.uniform4fv(this.addr,t)}function tw(s,e){const t=da(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function nw(s,e){const t=da(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function iw(s,e){const t=da(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function rw(s,e){s.uniform1iv(this.addr,e)}function sw(s,e){s.uniform2iv(this.addr,e)}function aw(s,e){s.uniform3iv(this.addr,e)}function ow(s,e){s.uniform4iv(this.addr,e)}function lw(s,e){s.uniform1uiv(this.addr,e)}function cw(s,e){s.uniform2uiv(this.addr,e)}function uw(s,e){s.uniform3uiv(this.addr,e)}function dw(s,e){s.uniform4uiv(this.addr,e)}function fw(s,e,t){const r=this.cache,o=e.length,l=Zl(t,o);rn(r,l)||(s.uniform1iv(this.addr,l),sn(r,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||k0,l[u])}function hw(s,e,t){const r=this.cache,o=e.length,l=Zl(t,o);rn(r,l)||(s.uniform1iv(this.addr,l),sn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||O0,l[u])}function pw(s,e,t){const r=this.cache,o=e.length,l=Zl(t,o);rn(r,l)||(s.uniform1iv(this.addr,l),sn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||z0,l[u])}function mw(s,e,t){const r=this.cache,o=e.length,l=Zl(t,o);rn(r,l)||(s.uniform1iv(this.addr,l),sn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||F0,l[u])}function gw(s){switch(s){case 5126:return ZM;case 35664:return JM;case 35665:return QM;case 35666:return ew;case 35674:return tw;case 35675:return nw;case 35676:return iw;case 5124:case 35670:return rw;case 35667:case 35671:return sw;case 35668:case 35672:return aw;case 35669:case 35673:return ow;case 5125:return lw;case 36294:return cw;case 36295:return uw;case 36296:return dw;case 35678:case 36198:case 36298:case 36306:case 35682:return fw;case 35679:case 36299:case 36307:return hw;case 35680:case 36300:case 36308:case 36293:return pw;case 36289:case 36303:case 36311:case 36292:return mw}}class xw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=KM(t.type)}}class vw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gw(t.type)}}class _w{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const d=o[l];d.setValue(e,t[d.id],r)}}}const ld=/(\w+)(\])?(\[|\.)?/g;function Fm(s,e){s.seq.push(e),s.map[e.id]=e}function yw(s,e,t){const r=s.name,o=r.length;for(ld.lastIndex=0;;){const l=ld.exec(r),u=ld.lastIndex;let d=l[1];const h=l[2]==="]",p=l[3];if(h&&(d=d|0),p===void 0||p==="["&&u+2===o){Fm(t,p===void 0?new xw(d,s,e):new vw(d,s,e));break}else{let _=t.map[d];_===void 0&&(_=new _w(d),Fm(t,_)),t=_}}}class Bl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);yw(l,u,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const d=t[l],h=r[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function Om(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const Sw=37297;let Mw=0;function ww(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return r.join(`
`)}const zm=new vt;function Ew(s){At._getMatrix(zm,At.workingColorSpace,s);const e=`mat3( ${zm.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(s)){case $l:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Bm(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+ww(s.getShaderSource(e),u)}else return o}function Tw(s,e){const t=Ew(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function bw(s,e){let t;switch(e){case C_:t="Linear";break;case R_:t="Reinhard";break;case N_:t="Cineon";break;case c0:t="ACESFilmic";break;case L_:t="AgX";break;case D_:t="Neutral";break;case P_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Dl=new Z;function Aw(){At.getLuminanceCoefficients(Dl);const s=Dl.x.toFixed(4),e=Dl.y.toFixed(4),t=Dl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ka).join(`
`)}function Rw(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function Nw(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return t}function Ka(s){return s!==""}function Vm(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Pw=/^[ \t]*#include +<([\w\d./]+)>/gm;function ef(s){return s.replace(Pw,Dw)}const Lw=new Map;function Dw(s,e){let t=yt[e];if(t===void 0){const r=Lw.get(e);if(r!==void 0)t=yt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return ef(t)}const Iw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gm(s){return s.replace(Iw,Uw)}function Uw(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function jm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function kw(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===a0?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===o0?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===qi&&(e="SHADOWMAP_TYPE_VSM"),e}function Fw(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ia:case ra:e="ENVMAP_TYPE_CUBE";break;case ql:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ow(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ra:e="ENVMAP_MODE_REFRACTION";break}return e}function zw(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case l0:e="ENVMAP_BLENDING_MULTIPLY";break;case b_:e="ENVMAP_BLENDING_MIX";break;case A_:e="ENVMAP_BLENDING_ADD";break}return e}function Bw(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function Vw(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const h=kw(t),p=Fw(t),x=Ow(t),_=zw(t),y=Bw(t),M=Cw(t),E=Rw(l),b=o.createProgram();let S,v,U=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Ka).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Ka).join(`
`),v.length>0&&(v+=`
`)):(S=[jm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+x:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ka).join(`
`),v=[jm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+x:"",t.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Lr?"#define TONE_MAPPING":"",t.toneMapping!==Lr?yt.tonemapping_pars_fragment:"",t.toneMapping!==Lr?bw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,Tw("linearToOutputTexel",t.outputColorSpace),Aw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ka).join(`
`)),u=ef(u),u=Vm(u,t),u=Hm(u,t),d=ef(d),d=Vm(d,t),d=Hm(d,t),u=Gm(u),d=Gm(d),t.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",t.glslVersion===nm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=U+S+u,C=U+v+d,$=Om(o,o.VERTEX_SHADER,L),F=Om(o,o.FRAGMENT_SHADER,C);o.attachShader(b,$),o.attachShader(b,F),t.index0AttributeName!==void 0?o.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function O(V){if(s.debug.checkShaderErrors){const le=o.getProgramInfoLog(b).trim(),Q=o.getShaderInfoLog($).trim(),de=o.getShaderInfoLog(F).trim();let pe=!0,ce=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if(pe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,b,$,F);else{const ue=Bm(o,$,"vertex"),H=Bm(o,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+le+`
`+ue+`
`+H)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(Q===""||de==="")&&(ce=!1);ce&&(V.diagnostics={runnable:pe,programLog:le,vertexShader:{log:Q,prefix:S},fragmentShader:{log:de,prefix:v}})}o.deleteShader($),o.deleteShader(F),j=new Bl(o,b),P=Nw(o,b)}let j;this.getUniforms=function(){return j===void 0&&O(this),j};let P;this.getAttributes=function(){return P===void 0&&O(this),P};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=o.getProgramParameter(b,Sw)),N},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Mw++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=$,this.fragmentShader=F,this}let Hw=0;class Gw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new jw(e),t.set(e,r)),r}}class jw{constructor(e){this.id=Hw++,this.code=e,this.usedTimes=0}}function Ww(s,e,t,r,o,l,u){const d=new b0,h=new Gw,p=new Set,x=[],_=o.logarithmicDepthBuffer,y=o.vertexTextures;let M=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(P){return p.add(P),P===0?"uv":`uv${P}`}function S(P,N,V,le,Q){const de=le.fog,pe=Q.geometry,ce=P.isMeshStandardMaterial?le.environment:null,ue=(P.isMeshStandardMaterial?t:e).get(P.envMap||ce),H=ue&&ue.mapping===ql?ue.image.height:null,he=E[P.type];P.precision!==null&&(M=o.getMaxPrecision(P.precision),M!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",M,"instead."));const I=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,w=I!==void 0?I.length:0;let W=0;pe.morphAttributes.position!==void 0&&(W=1),pe.morphAttributes.normal!==void 0&&(W=2),pe.morphAttributes.color!==void 0&&(W=3);let xe,X,ee,fe;if(he){const Tt=Ri[he];xe=Tt.vertexShader,X=Tt.fragmentShader}else xe=P.vertexShader,X=P.fragmentShader,h.update(P),ee=h.getVertexShaderID(P),fe=h.getFragmentShaderID(P);const re=s.getRenderTarget(),ge=s.state.buffers.depth.getReversed(),be=Q.isInstancedMesh===!0,Le=Q.isBatchedMesh===!0,Je=!!P.map,$e=!!P.matcap,lt=!!ue,z=!!P.aoMap,Ct=!!P.lightMap,nt=!!P.bumpMap,Oe=!!P.normalMap,We=!!P.displacementMap,Mt=!!P.emissiveMap,ke=!!P.metalnessMap,D=!!P.roughnessMap,A=P.anisotropy>0,te=P.clearcoat>0,_e=P.dispersion>0,Se=P.iridescence>0,me=P.sheen>0,Ge=P.transmission>0,Pe=A&&!!P.anisotropyMap,Ue=te&&!!P.clearcoatMap,ft=te&&!!P.clearcoatNormalMap,Te=te&&!!P.clearcoatRoughnessMap,Be=Se&&!!P.iridescenceMap,et=Se&&!!P.iridescenceThicknessMap,it=me&&!!P.sheenColorMap,Ve=me&&!!P.sheenRoughnessMap,xt=!!P.specularMap,Qe=!!P.specularColorMap,mt=!!P.specularIntensityMap,q=Ge&&!!P.transmissionMap,Ne=Ge&&!!P.thicknessMap,ie=!!P.gradientMap,ve=!!P.alphaMap,De=P.alphaTest>0,Ce=!!P.alphaHash,ut=!!P.extensions;let It=Lr;P.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(It=s.toneMapping);const Wt={shaderID:he,shaderType:P.type,shaderName:P.name,vertexShader:xe,fragmentShader:X,defines:P.defines,customVertexShaderID:ee,customFragmentShaderID:fe,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:M,batching:Le,batchingColor:Le&&Q._colorsTexture!==null,instancing:be,instancingColor:be&&Q.instanceColor!==null,instancingMorph:be&&Q.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:re===null?s.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:la,alphaToCoverage:!!P.alphaToCoverage,map:Je,matcap:$e,envMap:lt,envMapMode:lt&&ue.mapping,envMapCubeUVHeight:H,aoMap:z,lightMap:Ct,bumpMap:nt,normalMap:Oe,displacementMap:y&&We,emissiveMap:Mt,normalMapObjectSpace:Oe&&P.normalMapType===F_,normalMapTangentSpace:Oe&&P.normalMapType===S0,metalnessMap:ke,roughnessMap:D,anisotropy:A,anisotropyMap:Pe,clearcoat:te,clearcoatMap:Ue,clearcoatNormalMap:ft,clearcoatRoughnessMap:Te,dispersion:_e,iridescence:Se,iridescenceMap:Be,iridescenceThicknessMap:et,sheen:me,sheenColorMap:it,sheenRoughnessMap:Ve,specularMap:xt,specularColorMap:Qe,specularIntensityMap:mt,transmission:Ge,transmissionMap:q,thicknessMap:Ne,gradientMap:ie,opaque:P.transparent===!1&&P.blending===Js&&P.alphaToCoverage===!1,alphaMap:ve,alphaTest:De,alphaHash:Ce,combine:P.combine,mapUv:Je&&b(P.map.channel),aoMapUv:z&&b(P.aoMap.channel),lightMapUv:Ct&&b(P.lightMap.channel),bumpMapUv:nt&&b(P.bumpMap.channel),normalMapUv:Oe&&b(P.normalMap.channel),displacementMapUv:We&&b(P.displacementMap.channel),emissiveMapUv:Mt&&b(P.emissiveMap.channel),metalnessMapUv:ke&&b(P.metalnessMap.channel),roughnessMapUv:D&&b(P.roughnessMap.channel),anisotropyMapUv:Pe&&b(P.anisotropyMap.channel),clearcoatMapUv:Ue&&b(P.clearcoatMap.channel),clearcoatNormalMapUv:ft&&b(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&b(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&b(P.iridescenceMap.channel),iridescenceThicknessMapUv:et&&b(P.iridescenceThicknessMap.channel),sheenColorMapUv:it&&b(P.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&b(P.sheenRoughnessMap.channel),specularMapUv:xt&&b(P.specularMap.channel),specularColorMapUv:Qe&&b(P.specularColorMap.channel),specularIntensityMapUv:mt&&b(P.specularIntensityMap.channel),transmissionMapUv:q&&b(P.transmissionMap.channel),thicknessMapUv:Ne&&b(P.thicknessMap.channel),alphaMapUv:ve&&b(P.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(Oe||A),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!pe.attributes.uv&&(Je||ve),fog:!!de,useFog:P.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:ge,skinning:Q.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:W,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:It,decodeVideoTexture:Je&&P.map.isVideoTexture===!0&&At.getTransfer(P.map.colorSpace)===Ut,decodeVideoTextureEmissive:Mt&&P.emissiveMap.isVideoTexture===!0&&At.getTransfer(P.emissiveMap.colorSpace)===Ut,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Ki,flipSided:P.side===Fn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:ut&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&P.extensions.multiDraw===!0||Le)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Wt.vertexUv1s=p.has(1),Wt.vertexUv2s=p.has(2),Wt.vertexUv3s=p.has(3),p.clear(),Wt}function v(P){const N=[];if(P.shaderID?N.push(P.shaderID):(N.push(P.customVertexShaderID),N.push(P.customFragmentShaderID)),P.defines!==void 0)for(const V in P.defines)N.push(V),N.push(P.defines[V]);return P.isRawShaderMaterial===!1&&(U(N,P),L(N,P),N.push(s.outputColorSpace)),N.push(P.customProgramCacheKey),N.join()}function U(P,N){P.push(N.precision),P.push(N.outputColorSpace),P.push(N.envMapMode),P.push(N.envMapCubeUVHeight),P.push(N.mapUv),P.push(N.alphaMapUv),P.push(N.lightMapUv),P.push(N.aoMapUv),P.push(N.bumpMapUv),P.push(N.normalMapUv),P.push(N.displacementMapUv),P.push(N.emissiveMapUv),P.push(N.metalnessMapUv),P.push(N.roughnessMapUv),P.push(N.anisotropyMapUv),P.push(N.clearcoatMapUv),P.push(N.clearcoatNormalMapUv),P.push(N.clearcoatRoughnessMapUv),P.push(N.iridescenceMapUv),P.push(N.iridescenceThicknessMapUv),P.push(N.sheenColorMapUv),P.push(N.sheenRoughnessMapUv),P.push(N.specularMapUv),P.push(N.specularColorMapUv),P.push(N.specularIntensityMapUv),P.push(N.transmissionMapUv),P.push(N.thicknessMapUv),P.push(N.combine),P.push(N.fogExp2),P.push(N.sizeAttenuation),P.push(N.morphTargetsCount),P.push(N.morphAttributeCount),P.push(N.numDirLights),P.push(N.numPointLights),P.push(N.numSpotLights),P.push(N.numSpotLightMaps),P.push(N.numHemiLights),P.push(N.numRectAreaLights),P.push(N.numDirLightShadows),P.push(N.numPointLightShadows),P.push(N.numSpotLightShadows),P.push(N.numSpotLightShadowsWithMaps),P.push(N.numLightProbes),P.push(N.shadowMapType),P.push(N.toneMapping),P.push(N.numClippingPlanes),P.push(N.numClipIntersection),P.push(N.depthPacking)}function L(P,N){d.disableAll(),N.supportsVertexTextures&&d.enable(0),N.instancing&&d.enable(1),N.instancingColor&&d.enable(2),N.instancingMorph&&d.enable(3),N.matcap&&d.enable(4),N.envMap&&d.enable(5),N.normalMapObjectSpace&&d.enable(6),N.normalMapTangentSpace&&d.enable(7),N.clearcoat&&d.enable(8),N.iridescence&&d.enable(9),N.alphaTest&&d.enable(10),N.vertexColors&&d.enable(11),N.vertexAlphas&&d.enable(12),N.vertexUv1s&&d.enable(13),N.vertexUv2s&&d.enable(14),N.vertexUv3s&&d.enable(15),N.vertexTangents&&d.enable(16),N.anisotropy&&d.enable(17),N.alphaHash&&d.enable(18),N.batching&&d.enable(19),N.dispersion&&d.enable(20),N.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),N.fog&&d.enable(0),N.useFog&&d.enable(1),N.flatShading&&d.enable(2),N.logarithmicDepthBuffer&&d.enable(3),N.reverseDepthBuffer&&d.enable(4),N.skinning&&d.enable(5),N.morphTargets&&d.enable(6),N.morphNormals&&d.enable(7),N.morphColors&&d.enable(8),N.premultipliedAlpha&&d.enable(9),N.shadowMapEnabled&&d.enable(10),N.doubleSided&&d.enable(11),N.flipSided&&d.enable(12),N.useDepthPacking&&d.enable(13),N.dithering&&d.enable(14),N.transmission&&d.enable(15),N.sheen&&d.enable(16),N.opaque&&d.enable(17),N.pointsUvs&&d.enable(18),N.decodeVideoTexture&&d.enable(19),N.decodeVideoTextureEmissive&&d.enable(20),N.alphaToCoverage&&d.enable(21),P.push(d.mask)}function C(P){const N=E[P.type];let V;if(N){const le=Ri[N];V=Cy.clone(le.uniforms)}else V=P.uniforms;return V}function $(P,N){let V;for(let le=0,Q=x.length;le<Q;le++){const de=x[le];if(de.cacheKey===N){V=de,++V.usedTimes;break}}return V===void 0&&(V=new Vw(s,N,P,l),x.push(V)),V}function F(P){if(--P.usedTimes===0){const N=x.indexOf(P);x[N]=x[x.length-1],x.pop(),P.destroy()}}function O(P){h.remove(P)}function j(){h.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:C,acquireProgram:$,releaseProgram:F,releaseShaderCache:O,programs:x,dispose:j}}function Xw(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function o(u,d,h){s.get(u)[d]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function Yw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Wm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Xm(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(_,y,M,E,b,S){let v=s[e];return v===void 0?(v={id:_.id,object:_,geometry:y,material:M,groupOrder:E,renderOrder:_.renderOrder,z:b,group:S},s[e]=v):(v.id=_.id,v.object=_,v.geometry=y,v.material=M,v.groupOrder=E,v.renderOrder=_.renderOrder,v.z=b,v.group=S),e++,v}function d(_,y,M,E,b,S){const v=u(_,y,M,E,b,S);M.transmission>0?r.push(v):M.transparent===!0?o.push(v):t.push(v)}function h(_,y,M,E,b,S){const v=u(_,y,M,E,b,S);M.transmission>0?r.unshift(v):M.transparent===!0?o.unshift(v):t.unshift(v)}function p(_,y){t.length>1&&t.sort(_||Yw),r.length>1&&r.sort(y||Wm),o.length>1&&o.sort(y||Wm)}function x(){for(let _=e,y=s.length;_<y;_++){const M=s[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:d,unshift:h,finish:x,sort:p}}function qw(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new Xm,s.set(r,[u])):o>=l.length?(u=new Xm,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function $w(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new Pt};break;case"SpotLight":t={position:new Z,direction:new Z,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":t={color:new Pt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return s[e.id]=t,t}}}function Kw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Zw=0;function Jw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Qw(s){const e=new $w,t=Kw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new Z);const o=new Z,l=new jt,u=new jt;function d(p){let x=0,_=0,y=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let M=0,E=0,b=0,S=0,v=0,U=0,L=0,C=0,$=0,F=0,O=0;p.sort(Jw);for(let P=0,N=p.length;P<N;P++){const V=p[P],le=V.color,Q=V.intensity,de=V.distance,pe=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)x+=le.r*Q,_+=le.g*Q,y+=le.b*Q;else if(V.isLightProbe){for(let ce=0;ce<9;ce++)r.probe[ce].addScaledVector(V.sh.coefficients[ce],Q);O++}else if(V.isDirectionalLight){const ce=e.get(V);if(ce.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const ue=V.shadow,H=t.get(V);H.shadowIntensity=ue.intensity,H.shadowBias=ue.bias,H.shadowNormalBias=ue.normalBias,H.shadowRadius=ue.radius,H.shadowMapSize=ue.mapSize,r.directionalShadow[M]=H,r.directionalShadowMap[M]=pe,r.directionalShadowMatrix[M]=V.shadow.matrix,U++}r.directional[M]=ce,M++}else if(V.isSpotLight){const ce=e.get(V);ce.position.setFromMatrixPosition(V.matrixWorld),ce.color.copy(le).multiplyScalar(Q),ce.distance=de,ce.coneCos=Math.cos(V.angle),ce.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),ce.decay=V.decay,r.spot[b]=ce;const ue=V.shadow;if(V.map&&(r.spotLightMap[$]=V.map,$++,ue.updateMatrices(V),V.castShadow&&F++),r.spotLightMatrix[b]=ue.matrix,V.castShadow){const H=t.get(V);H.shadowIntensity=ue.intensity,H.shadowBias=ue.bias,H.shadowNormalBias=ue.normalBias,H.shadowRadius=ue.radius,H.shadowMapSize=ue.mapSize,r.spotShadow[b]=H,r.spotShadowMap[b]=pe,C++}b++}else if(V.isRectAreaLight){const ce=e.get(V);ce.color.copy(le).multiplyScalar(Q),ce.halfWidth.set(V.width*.5,0,0),ce.halfHeight.set(0,V.height*.5,0),r.rectArea[S]=ce,S++}else if(V.isPointLight){const ce=e.get(V);if(ce.color.copy(V.color).multiplyScalar(V.intensity),ce.distance=V.distance,ce.decay=V.decay,V.castShadow){const ue=V.shadow,H=t.get(V);H.shadowIntensity=ue.intensity,H.shadowBias=ue.bias,H.shadowNormalBias=ue.normalBias,H.shadowRadius=ue.radius,H.shadowMapSize=ue.mapSize,H.shadowCameraNear=ue.camera.near,H.shadowCameraFar=ue.camera.far,r.pointShadow[E]=H,r.pointShadowMap[E]=pe,r.pointShadowMatrix[E]=V.shadow.matrix,L++}r.point[E]=ce,E++}else if(V.isHemisphereLight){const ce=e.get(V);ce.skyColor.copy(V.color).multiplyScalar(Q),ce.groundColor.copy(V.groundColor).multiplyScalar(Q),r.hemi[v]=ce,v++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ie.LTC_FLOAT_1,r.rectAreaLTC2=Ie.LTC_FLOAT_2):(r.rectAreaLTC1=Ie.LTC_HALF_1,r.rectAreaLTC2=Ie.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=_,r.ambient[2]=y;const j=r.hash;(j.directionalLength!==M||j.pointLength!==E||j.spotLength!==b||j.rectAreaLength!==S||j.hemiLength!==v||j.numDirectionalShadows!==U||j.numPointShadows!==L||j.numSpotShadows!==C||j.numSpotMaps!==$||j.numLightProbes!==O)&&(r.directional.length=M,r.spot.length=b,r.rectArea.length=S,r.point.length=E,r.hemi.length=v,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=C+$-F,r.spotLightMap.length=$,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=O,j.directionalLength=M,j.pointLength=E,j.spotLength=b,j.rectAreaLength=S,j.hemiLength=v,j.numDirectionalShadows=U,j.numPointShadows=L,j.numSpotShadows=C,j.numSpotMaps=$,j.numLightProbes=O,r.version=Zw++)}function h(p,x){let _=0,y=0,M=0,E=0,b=0;const S=x.matrixWorldInverse;for(let v=0,U=p.length;v<U;v++){const L=p[v];if(L.isDirectionalLight){const C=r.directional[_];C.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(S),_++}else if(L.isSpotLight){const C=r.spot[M];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(S),M++}else if(L.isRectAreaLight){const C=r.rectArea[E];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(S),u.identity(),l.copy(L.matrixWorld),l.premultiply(S),u.extractRotation(l),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),E++}else if(L.isPointLight){const C=r.point[y];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(S),y++}else if(L.isHemisphereLight){const C=r.hemi[b];C.direction.setFromMatrixPosition(L.matrixWorld),C.direction.transformDirection(S),b++}}}return{setup:d,setupView:h,state:r}}function Ym(s){const e=new Qw(s),t=[],r=[];function o(x){p.camera=x,t.length=0,r.length=0}function l(x){t.push(x)}function u(x){r.push(x)}function d(){e.setup(t)}function h(x){e.setupView(t,x)}const p={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:d,setupLightsView:h,pushLight:l,pushShadow:u}}function eE(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let d;return u===void 0?(d=new Ym(s),e.set(o,[d])):l>=u.length?(d=new Ym(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}class tE extends co{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=U_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nE extends co{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const iE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function sE(s,e,t){let r=new hf;const o=new ot,l=new ot,u=new Yt,d=new tE({depthPacking:k_}),h=new nE,p={},x=t.maxTextureSize,_={[Ir]:Fn,[Fn]:Ir,[Ki]:Ki},y=new Ur({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:iE,fragmentShader:rE}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const E=new ri;E.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new St(E,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=a0;let v=this.type;this.render=function(F,O,j){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;const P=s.getRenderTarget(),N=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),le=s.state;le.setBlending(Pr),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const Q=v!==qi&&this.type===qi,de=v===qi&&this.type!==qi;for(let pe=0,ce=F.length;pe<ce;pe++){const ue=F[pe],H=ue.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const he=H.getFrameExtents();if(o.multiply(he),l.copy(H.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(l.x=Math.floor(x/he.x),o.x=l.x*he.x,H.mapSize.x=l.x),o.y>x&&(l.y=Math.floor(x/he.y),o.y=l.y*he.y,H.mapSize.y=l.y)),H.map===null||Q===!0||de===!0){const w=this.type!==qi?{minFilter:yi,magFilter:yi}:{};H.map!==null&&H.map.dispose(),H.map=new fs(o.x,o.y,w),H.map.texture.name=ue.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const I=H.getViewportCount();for(let w=0;w<I;w++){const W=H.getViewport(w);u.set(l.x*W.x,l.y*W.y,l.x*W.z,l.y*W.w),le.viewport(u),H.updateMatrices(ue,w),r=H.getFrustum(),C(O,j,H.camera,ue,this.type)}H.isPointLightShadow!==!0&&this.type===qi&&U(H,j),H.needsUpdate=!1}v=this.type,S.needsUpdate=!1,s.setRenderTarget(P,N,V)};function U(F,O){const j=e.update(b);y.defines.VSM_SAMPLES!==F.blurSamples&&(y.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new fs(o.x,o.y)),y.uniforms.shadow_pass.value=F.map.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(O,null,j,y,b,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(O,null,j,M,b,null)}function L(F,O,j,P){let N=null;const V=j.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(V!==void 0)N=V;else if(N=j.isPointLight===!0?h:d,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const le=N.uuid,Q=O.uuid;let de=p[le];de===void 0&&(de={},p[le]=de);let pe=de[Q];pe===void 0&&(pe=N.clone(),de[Q]=pe,O.addEventListener("dispose",$)),N=pe}if(N.visible=O.visible,N.wireframe=O.wireframe,P===qi?N.side=O.shadowSide!==null?O.shadowSide:O.side:N.side=O.shadowSide!==null?O.shadowSide:_[O.side],N.alphaMap=O.alphaMap,N.alphaTest=O.alphaTest,N.map=O.map,N.clipShadows=O.clipShadows,N.clippingPlanes=O.clippingPlanes,N.clipIntersection=O.clipIntersection,N.displacementMap=O.displacementMap,N.displacementScale=O.displacementScale,N.displacementBias=O.displacementBias,N.wireframeLinewidth=O.wireframeLinewidth,N.linewidth=O.linewidth,j.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const le=s.properties.get(N);le.light=j}return N}function C(F,O,j,P,N){if(F.visible===!1)return;if(F.layers.test(O.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&N===qi)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,F.matrixWorld);const Q=e.update(F),de=F.material;if(Array.isArray(de)){const pe=Q.groups;for(let ce=0,ue=pe.length;ce<ue;ce++){const H=pe[ce],he=de[H.materialIndex];if(he&&he.visible){const I=L(F,he,P,N);F.onBeforeShadow(s,F,O,j,Q,I,H),s.renderBufferDirect(j,null,Q,I,F,H),F.onAfterShadow(s,F,O,j,Q,I,H)}}}else if(de.visible){const pe=L(F,de,P,N);F.onBeforeShadow(s,F,O,j,Q,pe,null),s.renderBufferDirect(j,null,Q,pe,F,null),F.onAfterShadow(s,F,O,j,Q,pe,null)}}const le=F.children;for(let Q=0,de=le.length;Q<de;Q++)C(le[Q],O,j,P,N)}function $(F){F.target.removeEventListener("dispose",$);for(const j in p){const P=p[j],N=F.target.uuid;N in P&&(P[N].dispose(),delete P[N])}}}const aE={[xd]:vd,[_d]:Md,[yd]:wd,[na]:Sd,[vd]:xd,[Md]:_d,[wd]:yd,[Sd]:na};function oE(s,e){function t(){let q=!1;const Ne=new Yt;let ie=null;const ve=new Yt(0,0,0,0);return{setMask:function(De){ie!==De&&!q&&(s.colorMask(De,De,De,De),ie=De)},setLocked:function(De){q=De},setClear:function(De,Ce,ut,It,Wt){Wt===!0&&(De*=It,Ce*=It,ut*=It),Ne.set(De,Ce,ut,It),ve.equals(Ne)===!1&&(s.clearColor(De,Ce,ut,It),ve.copy(Ne))},reset:function(){q=!1,ie=null,ve.set(-1,0,0,0)}}}function r(){let q=!1,Ne=!1,ie=null,ve=null,De=null;return{setReversed:function(Ce){if(Ne!==Ce){const ut=e.get("EXT_clip_control");Ne?ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.ZERO_TO_ONE_EXT):ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.NEGATIVE_ONE_TO_ONE_EXT);const It=De;De=null,this.setClear(It)}Ne=Ce},getReversed:function(){return Ne},setTest:function(Ce){Ce?re(s.DEPTH_TEST):ge(s.DEPTH_TEST)},setMask:function(Ce){ie!==Ce&&!q&&(s.depthMask(Ce),ie=Ce)},setFunc:function(Ce){if(Ne&&(Ce=aE[Ce]),ve!==Ce){switch(Ce){case xd:s.depthFunc(s.NEVER);break;case vd:s.depthFunc(s.ALWAYS);break;case _d:s.depthFunc(s.LESS);break;case na:s.depthFunc(s.LEQUAL);break;case yd:s.depthFunc(s.EQUAL);break;case Sd:s.depthFunc(s.GEQUAL);break;case Md:s.depthFunc(s.GREATER);break;case wd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ve=Ce}},setLocked:function(Ce){q=Ce},setClear:function(Ce){De!==Ce&&(Ne&&(Ce=1-Ce),s.clearDepth(Ce),De=Ce)},reset:function(){q=!1,ie=null,ve=null,De=null,Ne=!1}}}function o(){let q=!1,Ne=null,ie=null,ve=null,De=null,Ce=null,ut=null,It=null,Wt=null;return{setTest:function(Tt){q||(Tt?re(s.STENCIL_TEST):ge(s.STENCIL_TEST))},setMask:function(Tt){Ne!==Tt&&!q&&(s.stencilMask(Tt),Ne=Tt)},setFunc:function(Tt,$t,un){(ie!==Tt||ve!==$t||De!==un)&&(s.stencilFunc(Tt,$t,un),ie=Tt,ve=$t,De=un)},setOp:function(Tt,$t,un){(Ce!==Tt||ut!==$t||It!==un)&&(s.stencilOp(Tt,$t,un),Ce=Tt,ut=$t,It=un)},setLocked:function(Tt){q=Tt},setClear:function(Tt){Wt!==Tt&&(s.clearStencil(Tt),Wt=Tt)},reset:function(){q=!1,Ne=null,ie=null,ve=null,De=null,Ce=null,ut=null,It=null,Wt=null}}}const l=new t,u=new r,d=new o,h=new WeakMap,p=new WeakMap;let x={},_={},y=new WeakMap,M=[],E=null,b=!1,S=null,v=null,U=null,L=null,C=null,$=null,F=null,O=new Pt(0,0,0),j=0,P=!1,N=null,V=null,le=null,Q=null,de=null;const pe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,ue=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(H)[1]),ce=ue>=1):H.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),ce=ue>=2);let he=null,I={};const w=s.getParameter(s.SCISSOR_BOX),W=s.getParameter(s.VIEWPORT),xe=new Yt().fromArray(w),X=new Yt().fromArray(W);function ee(q,Ne,ie,ve){const De=new Uint8Array(4),Ce=s.createTexture();s.bindTexture(q,Ce),s.texParameteri(q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ut=0;ut<ie;ut++)q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?s.texImage3D(Ne,0,s.RGBA,1,1,ve,0,s.RGBA,s.UNSIGNED_BYTE,De):s.texImage2D(Ne+ut,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,De);return Ce}const fe={};fe[s.TEXTURE_2D]=ee(s.TEXTURE_2D,s.TEXTURE_2D,1),fe[s.TEXTURE_CUBE_MAP]=ee(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[s.TEXTURE_2D_ARRAY]=ee(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),fe[s.TEXTURE_3D]=ee(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),re(s.DEPTH_TEST),u.setFunc(na),nt(!1),Oe(Kp),re(s.CULL_FACE),z(Pr);function re(q){x[q]!==!0&&(s.enable(q),x[q]=!0)}function ge(q){x[q]!==!1&&(s.disable(q),x[q]=!1)}function be(q,Ne){return _[q]!==Ne?(s.bindFramebuffer(q,Ne),_[q]=Ne,q===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Ne),q===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Le(q,Ne){let ie=M,ve=!1;if(q){ie=y.get(Ne),ie===void 0&&(ie=[],y.set(Ne,ie));const De=q.textures;if(ie.length!==De.length||ie[0]!==s.COLOR_ATTACHMENT0){for(let Ce=0,ut=De.length;Ce<ut;Ce++)ie[Ce]=s.COLOR_ATTACHMENT0+Ce;ie.length=De.length,ve=!0}}else ie[0]!==s.BACK&&(ie[0]=s.BACK,ve=!0);ve&&s.drawBuffers(ie)}function Je(q){return E!==q?(s.useProgram(q),E=q,!0):!1}const $e={[as]:s.FUNC_ADD,[c_]:s.FUNC_SUBTRACT,[u_]:s.FUNC_REVERSE_SUBTRACT};$e[d_]=s.MIN,$e[f_]=s.MAX;const lt={[h_]:s.ZERO,[p_]:s.ONE,[m_]:s.SRC_COLOR,[md]:s.SRC_ALPHA,[S_]:s.SRC_ALPHA_SATURATE,[__]:s.DST_COLOR,[x_]:s.DST_ALPHA,[g_]:s.ONE_MINUS_SRC_COLOR,[gd]:s.ONE_MINUS_SRC_ALPHA,[y_]:s.ONE_MINUS_DST_COLOR,[v_]:s.ONE_MINUS_DST_ALPHA,[M_]:s.CONSTANT_COLOR,[w_]:s.ONE_MINUS_CONSTANT_COLOR,[E_]:s.CONSTANT_ALPHA,[T_]:s.ONE_MINUS_CONSTANT_ALPHA};function z(q,Ne,ie,ve,De,Ce,ut,It,Wt,Tt){if(q===Pr){b===!0&&(ge(s.BLEND),b=!1);return}if(b===!1&&(re(s.BLEND),b=!0),q!==l_){if(q!==S||Tt!==P){if((v!==as||C!==as)&&(s.blendEquation(s.FUNC_ADD),v=as,C=as),Tt)switch(q){case Js:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zp:s.blendFunc(s.ONE,s.ONE);break;case Jp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Qp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Js:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Jp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Qp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}U=null,L=null,$=null,F=null,O.set(0,0,0),j=0,S=q,P=Tt}return}De=De||Ne,Ce=Ce||ie,ut=ut||ve,(Ne!==v||De!==C)&&(s.blendEquationSeparate($e[Ne],$e[De]),v=Ne,C=De),(ie!==U||ve!==L||Ce!==$||ut!==F)&&(s.blendFuncSeparate(lt[ie],lt[ve],lt[Ce],lt[ut]),U=ie,L=ve,$=Ce,F=ut),(It.equals(O)===!1||Wt!==j)&&(s.blendColor(It.r,It.g,It.b,Wt),O.copy(It),j=Wt),S=q,P=!1}function Ct(q,Ne){q.side===Ki?ge(s.CULL_FACE):re(s.CULL_FACE);let ie=q.side===Fn;Ne&&(ie=!ie),nt(ie),q.blending===Js&&q.transparent===!1?z(Pr):z(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),u.setFunc(q.depthFunc),u.setTest(q.depthTest),u.setMask(q.depthWrite),l.setMask(q.colorWrite);const ve=q.stencilWrite;d.setTest(ve),ve&&(d.setMask(q.stencilWriteMask),d.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),d.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Mt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?re(s.SAMPLE_ALPHA_TO_COVERAGE):ge(s.SAMPLE_ALPHA_TO_COVERAGE)}function nt(q){N!==q&&(q?s.frontFace(s.CW):s.frontFace(s.CCW),N=q)}function Oe(q){q!==a_?(re(s.CULL_FACE),q!==V&&(q===Kp?s.cullFace(s.BACK):q===o_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ge(s.CULL_FACE),V=q}function We(q){q!==le&&(ce&&s.lineWidth(q),le=q)}function Mt(q,Ne,ie){q?(re(s.POLYGON_OFFSET_FILL),(Q!==Ne||de!==ie)&&(s.polygonOffset(Ne,ie),Q=Ne,de=ie)):ge(s.POLYGON_OFFSET_FILL)}function ke(q){q?re(s.SCISSOR_TEST):ge(s.SCISSOR_TEST)}function D(q){q===void 0&&(q=s.TEXTURE0+pe-1),he!==q&&(s.activeTexture(q),he=q)}function A(q,Ne,ie){ie===void 0&&(he===null?ie=s.TEXTURE0+pe-1:ie=he);let ve=I[ie];ve===void 0&&(ve={type:void 0,texture:void 0},I[ie]=ve),(ve.type!==q||ve.texture!==Ne)&&(he!==ie&&(s.activeTexture(ie),he=ie),s.bindTexture(q,Ne||fe[q]),ve.type=q,ve.texture=Ne)}function te(){const q=I[he];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function _e(){try{s.compressedTexImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Se(){try{s.compressedTexImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function me(){try{s.texSubImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ge(){try{s.texSubImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Pe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ue(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ft(){try{s.texStorage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Te(){try{s.texStorage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Be(){try{s.texImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function et(){try{s.texImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function it(q){xe.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),xe.copy(q))}function Ve(q){X.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),X.copy(q))}function xt(q,Ne){let ie=p.get(Ne);ie===void 0&&(ie=new WeakMap,p.set(Ne,ie));let ve=ie.get(q);ve===void 0&&(ve=s.getUniformBlockIndex(Ne,q.name),ie.set(q,ve))}function Qe(q,Ne){const ve=p.get(Ne).get(q);h.get(Ne)!==ve&&(s.uniformBlockBinding(Ne,ve,q.__bindingPointIndex),h.set(Ne,ve))}function mt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},he=null,I={},_={},y=new WeakMap,M=[],E=null,b=!1,S=null,v=null,U=null,L=null,C=null,$=null,F=null,O=new Pt(0,0,0),j=0,P=!1,N=null,V=null,le=null,Q=null,de=null,xe.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:re,disable:ge,bindFramebuffer:be,drawBuffers:Le,useProgram:Je,setBlending:z,setMaterial:Ct,setFlipSided:nt,setCullFace:Oe,setLineWidth:We,setPolygonOffset:Mt,setScissorTest:ke,activeTexture:D,bindTexture:A,unbindTexture:te,compressedTexImage2D:_e,compressedTexImage3D:Se,texImage2D:Be,texImage3D:et,updateUBOMapping:xt,uniformBlockBinding:Qe,texStorage2D:ft,texStorage3D:Te,texSubImage2D:me,texSubImage3D:Ge,compressedTexSubImage2D:Pe,compressedTexSubImage3D:Ue,scissor:it,viewport:Ve,reset:mt}}function qm(s,e,t,r){const o=lE(r);switch(t){case p0:return s*e;case g0:return s*e;case x0:return s*e*2;case v0:return s*e/o.components*o.byteLength;case lf:return s*e/o.components*o.byteLength;case _0:return s*e*2/o.components*o.byteLength;case cf:return s*e*2/o.components*o.byteLength;case m0:return s*e*3/o.components*o.byteLength;case _i:return s*e*4/o.components*o.byteLength;case uf:return s*e*4/o.components*o.byteLength;case Ul:case kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Fl:case Ol:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rd:case Pd:return Math.max(s,16)*Math.max(e,8)/4;case Cd:case Nd:return Math.max(s,8)*Math.max(e,8)/2;case Ld:case Dd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Id:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ud:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case kd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Fd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Od:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case zd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Bd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Gd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case jd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Wd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Xd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Yd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case qd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case zl:case $d:case Kd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case y0:case Zd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Jd:case Qd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function lE(s){switch(s){case er:case d0:return{byteLength:1,components:1};case no:case f0:case ao:return{byteLength:2,components:1};case af:case of:return{byteLength:2,components:4};case ds:case sf:case Zi:return{byteLength:4,components:1};case h0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function cE(s,e,t,r,o,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ot,x=new WeakMap;let _;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,A){return M?new OffscreenCanvas(D,A):Gl("canvas")}function b(D,A,te){let _e=1;const Se=ke(D);if((Se.width>te||Se.height>te)&&(_e=te/Math.max(Se.width,Se.height)),_e<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const me=Math.floor(_e*Se.width),Ge=Math.floor(_e*Se.height);_===void 0&&(_=E(me,Ge));const Pe=A?E(me,Ge):_;return Pe.width=me,Pe.height=Ge,Pe.getContext("2d").drawImage(D,0,0,me,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+me+"x"+Ge+")."),Pe}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),D;return D}function S(D){return D.generateMipmaps}function v(D){s.generateMipmap(D)}function U(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(D,A,te,_e,Se=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let me=A;if(A===s.RED&&(te===s.FLOAT&&(me=s.R32F),te===s.HALF_FLOAT&&(me=s.R16F),te===s.UNSIGNED_BYTE&&(me=s.R8)),A===s.RED_INTEGER&&(te===s.UNSIGNED_BYTE&&(me=s.R8UI),te===s.UNSIGNED_SHORT&&(me=s.R16UI),te===s.UNSIGNED_INT&&(me=s.R32UI),te===s.BYTE&&(me=s.R8I),te===s.SHORT&&(me=s.R16I),te===s.INT&&(me=s.R32I)),A===s.RG&&(te===s.FLOAT&&(me=s.RG32F),te===s.HALF_FLOAT&&(me=s.RG16F),te===s.UNSIGNED_BYTE&&(me=s.RG8)),A===s.RG_INTEGER&&(te===s.UNSIGNED_BYTE&&(me=s.RG8UI),te===s.UNSIGNED_SHORT&&(me=s.RG16UI),te===s.UNSIGNED_INT&&(me=s.RG32UI),te===s.BYTE&&(me=s.RG8I),te===s.SHORT&&(me=s.RG16I),te===s.INT&&(me=s.RG32I)),A===s.RGB_INTEGER&&(te===s.UNSIGNED_BYTE&&(me=s.RGB8UI),te===s.UNSIGNED_SHORT&&(me=s.RGB16UI),te===s.UNSIGNED_INT&&(me=s.RGB32UI),te===s.BYTE&&(me=s.RGB8I),te===s.SHORT&&(me=s.RGB16I),te===s.INT&&(me=s.RGB32I)),A===s.RGBA_INTEGER&&(te===s.UNSIGNED_BYTE&&(me=s.RGBA8UI),te===s.UNSIGNED_SHORT&&(me=s.RGBA16UI),te===s.UNSIGNED_INT&&(me=s.RGBA32UI),te===s.BYTE&&(me=s.RGBA8I),te===s.SHORT&&(me=s.RGBA16I),te===s.INT&&(me=s.RGBA32I)),A===s.RGB&&te===s.UNSIGNED_INT_5_9_9_9_REV&&(me=s.RGB9_E5),A===s.RGBA){const Ge=Se?$l:At.getTransfer(_e);te===s.FLOAT&&(me=s.RGBA32F),te===s.HALF_FLOAT&&(me=s.RGBA16F),te===s.UNSIGNED_BYTE&&(me=Ge===Ut?s.SRGB8_ALPHA8:s.RGBA8),te===s.UNSIGNED_SHORT_4_4_4_4&&(me=s.RGBA4),te===s.UNSIGNED_SHORT_5_5_5_1&&(me=s.RGB5_A1)}return(me===s.R16F||me===s.R32F||me===s.RG16F||me===s.RG32F||me===s.RGBA16F||me===s.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function C(D,A){let te;return D?A===null||A===ds||A===sa?te=s.DEPTH24_STENCIL8:A===Zi?te=s.DEPTH32F_STENCIL8:A===no&&(te=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ds||A===sa?te=s.DEPTH_COMPONENT24:A===Zi?te=s.DEPTH_COMPONENT32F:A===no&&(te=s.DEPTH_COMPONENT16),te}function $(D,A){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==yi&&D.minFilter!==Ni?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function F(D){const A=D.target;A.removeEventListener("dispose",F),j(A),A.isVideoTexture&&x.delete(A)}function O(D){const A=D.target;A.removeEventListener("dispose",O),N(A)}function j(D){const A=r.get(D);if(A.__webglInit===void 0)return;const te=D.source,_e=y.get(te);if(_e){const Se=_e[A.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&P(D),Object.keys(_e).length===0&&y.delete(te)}r.remove(D)}function P(D){const A=r.get(D);s.deleteTexture(A.__webglTexture);const te=D.source,_e=y.get(te);delete _e[A.__cacheKey],u.memory.textures--}function N(D){const A=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(A.__webglFramebuffer[_e]))for(let Se=0;Se<A.__webglFramebuffer[_e].length;Se++)s.deleteFramebuffer(A.__webglFramebuffer[_e][Se]);else s.deleteFramebuffer(A.__webglFramebuffer[_e]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[_e])}else{if(Array.isArray(A.__webglFramebuffer))for(let _e=0;_e<A.__webglFramebuffer.length;_e++)s.deleteFramebuffer(A.__webglFramebuffer[_e]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let _e=0;_e<A.__webglColorRenderbuffer.length;_e++)A.__webglColorRenderbuffer[_e]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[_e]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const te=D.textures;for(let _e=0,Se=te.length;_e<Se;_e++){const me=r.get(te[_e]);me.__webglTexture&&(s.deleteTexture(me.__webglTexture),u.memory.textures--),r.remove(te[_e])}r.remove(D)}let V=0;function le(){V=0}function Q(){const D=V;return D>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),V+=1,D}function de(D){const A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function pe(D,A){const te=r.get(D);if(D.isVideoTexture&&We(D),D.isRenderTargetTexture===!1&&D.version>0&&te.__version!==D.version){const _e=D.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(te,D,A);return}}t.bindTexture(s.TEXTURE_2D,te.__webglTexture,s.TEXTURE0+A)}function ce(D,A){const te=r.get(D);if(D.version>0&&te.__version!==D.version){X(te,D,A);return}t.bindTexture(s.TEXTURE_2D_ARRAY,te.__webglTexture,s.TEXTURE0+A)}function ue(D,A){const te=r.get(D);if(D.version>0&&te.__version!==D.version){X(te,D,A);return}t.bindTexture(s.TEXTURE_3D,te.__webglTexture,s.TEXTURE0+A)}function H(D,A){const te=r.get(D);if(D.version>0&&te.__version!==D.version){ee(te,D,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture,s.TEXTURE0+A)}const he={[bd]:s.REPEAT,[cs]:s.CLAMP_TO_EDGE,[Ad]:s.MIRRORED_REPEAT},I={[yi]:s.NEAREST,[I_]:s.NEAREST_MIPMAP_NEAREST,[hl]:s.NEAREST_MIPMAP_LINEAR,[Ni]:s.LINEAR,[ku]:s.LINEAR_MIPMAP_NEAREST,[us]:s.LINEAR_MIPMAP_LINEAR},w={[O_]:s.NEVER,[j_]:s.ALWAYS,[z_]:s.LESS,[M0]:s.LEQUAL,[B_]:s.EQUAL,[G_]:s.GEQUAL,[V_]:s.GREATER,[H_]:s.NOTEQUAL};function W(D,A){if(A.type===Zi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Ni||A.magFilter===ku||A.magFilter===hl||A.magFilter===us||A.minFilter===Ni||A.minFilter===ku||A.minFilter===hl||A.minFilter===us)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,he[A.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,he[A.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,he[A.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,I[A.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,I[A.minFilter]),A.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,w[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===yi||A.minFilter!==hl&&A.minFilter!==us||A.type===Zi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function xe(D,A){let te=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",F));const _e=A.source;let Se=y.get(_e);Se===void 0&&(Se={},y.set(_e,Se));const me=de(A);if(me!==D.__cacheKey){Se[me]===void 0&&(Se[me]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,te=!0),Se[me].usedTimes++;const Ge=Se[D.__cacheKey];Ge!==void 0&&(Se[D.__cacheKey].usedTimes--,Ge.usedTimes===0&&P(A)),D.__cacheKey=me,D.__webglTexture=Se[me].texture}return te}function X(D,A,te){let _e=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(_e=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(_e=s.TEXTURE_3D);const Se=xe(D,A),me=A.source;t.bindTexture(_e,D.__webglTexture,s.TEXTURE0+te);const Ge=r.get(me);if(me.version!==Ge.__version||Se===!0){t.activeTexture(s.TEXTURE0+te);const Pe=At.getPrimaries(At.workingColorSpace),Ue=A.colorSpace===Nr?null:At.getPrimaries(A.colorSpace),ft=A.colorSpace===Nr||Pe===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Te=b(A.image,!1,o.maxTextureSize);Te=Mt(A,Te);const Be=l.convert(A.format,A.colorSpace),et=l.convert(A.type);let it=L(A.internalFormat,Be,et,A.colorSpace,A.isVideoTexture);W(_e,A);let Ve;const xt=A.mipmaps,Qe=A.isVideoTexture!==!0,mt=Ge.__version===void 0||Se===!0,q=me.dataReady,Ne=$(A,Te);if(A.isDepthTexture)it=C(A.format===aa,A.type),mt&&(Qe?t.texStorage2D(s.TEXTURE_2D,1,it,Te.width,Te.height):t.texImage2D(s.TEXTURE_2D,0,it,Te.width,Te.height,0,Be,et,null));else if(A.isDataTexture)if(xt.length>0){Qe&&mt&&t.texStorage2D(s.TEXTURE_2D,Ne,it,xt[0].width,xt[0].height);for(let ie=0,ve=xt.length;ie<ve;ie++)Ve=xt[ie],Qe?q&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,Ve.width,Ve.height,Be,et,Ve.data):t.texImage2D(s.TEXTURE_2D,ie,it,Ve.width,Ve.height,0,Be,et,Ve.data);A.generateMipmaps=!1}else Qe?(mt&&t.texStorage2D(s.TEXTURE_2D,Ne,it,Te.width,Te.height),q&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Te.width,Te.height,Be,et,Te.data)):t.texImage2D(s.TEXTURE_2D,0,it,Te.width,Te.height,0,Be,et,Te.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Qe&&mt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,it,xt[0].width,xt[0].height,Te.depth);for(let ie=0,ve=xt.length;ie<ve;ie++)if(Ve=xt[ie],A.format!==_i)if(Be!==null)if(Qe){if(q)if(A.layerUpdates.size>0){const De=qm(Ve.width,Ve.height,A.format,A.type);for(const Ce of A.layerUpdates){const ut=Ve.data.subarray(Ce*De/Ve.data.BYTES_PER_ELEMENT,(Ce+1)*De/Ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,Ce,Ve.width,Ve.height,1,Be,ut)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,Ve.width,Ve.height,Te.depth,Be,Ve.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ie,it,Ve.width,Ve.height,Te.depth,0,Ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?q&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,Ve.width,Ve.height,Te.depth,Be,et,Ve.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ie,it,Ve.width,Ve.height,Te.depth,0,Be,et,Ve.data)}else{Qe&&mt&&t.texStorage2D(s.TEXTURE_2D,Ne,it,xt[0].width,xt[0].height);for(let ie=0,ve=xt.length;ie<ve;ie++)Ve=xt[ie],A.format!==_i?Be!==null?Qe?q&&t.compressedTexSubImage2D(s.TEXTURE_2D,ie,0,0,Ve.width,Ve.height,Be,Ve.data):t.compressedTexImage2D(s.TEXTURE_2D,ie,it,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?q&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,Ve.width,Ve.height,Be,et,Ve.data):t.texImage2D(s.TEXTURE_2D,ie,it,Ve.width,Ve.height,0,Be,et,Ve.data)}else if(A.isDataArrayTexture)if(Qe){if(mt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,it,Te.width,Te.height,Te.depth),q)if(A.layerUpdates.size>0){const ie=qm(Te.width,Te.height,A.format,A.type);for(const ve of A.layerUpdates){const De=Te.data.subarray(ve*ie/Te.data.BYTES_PER_ELEMENT,(ve+1)*ie/Te.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ve,Te.width,Te.height,1,Be,et,De)}A.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Be,et,Te.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,it,Te.width,Te.height,Te.depth,0,Be,et,Te.data);else if(A.isData3DTexture)Qe?(mt&&t.texStorage3D(s.TEXTURE_3D,Ne,it,Te.width,Te.height,Te.depth),q&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Be,et,Te.data)):t.texImage3D(s.TEXTURE_3D,0,it,Te.width,Te.height,Te.depth,0,Be,et,Te.data);else if(A.isFramebufferTexture){if(mt)if(Qe)t.texStorage2D(s.TEXTURE_2D,Ne,it,Te.width,Te.height);else{let ie=Te.width,ve=Te.height;for(let De=0;De<Ne;De++)t.texImage2D(s.TEXTURE_2D,De,it,ie,ve,0,Be,et,null),ie>>=1,ve>>=1}}else if(xt.length>0){if(Qe&&mt){const ie=ke(xt[0]);t.texStorage2D(s.TEXTURE_2D,Ne,it,ie.width,ie.height)}for(let ie=0,ve=xt.length;ie<ve;ie++)Ve=xt[ie],Qe?q&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,Be,et,Ve):t.texImage2D(s.TEXTURE_2D,ie,it,Be,et,Ve);A.generateMipmaps=!1}else if(Qe){if(mt){const ie=ke(Te);t.texStorage2D(s.TEXTURE_2D,Ne,it,ie.width,ie.height)}q&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Be,et,Te)}else t.texImage2D(s.TEXTURE_2D,0,it,Be,et,Te);S(A)&&v(_e),Ge.__version=me.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function ee(D,A,te){if(A.image.length!==6)return;const _e=xe(D,A),Se=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+te);const me=r.get(Se);if(Se.version!==me.__version||_e===!0){t.activeTexture(s.TEXTURE0+te);const Ge=At.getPrimaries(At.workingColorSpace),Pe=A.colorSpace===Nr?null:At.getPrimaries(A.colorSpace),Ue=A.colorSpace===Nr||Ge===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const ft=A.isCompressedTexture||A.image[0].isCompressedTexture,Te=A.image[0]&&A.image[0].isDataTexture,Be=[];for(let ve=0;ve<6;ve++)!ft&&!Te?Be[ve]=b(A.image[ve],!0,o.maxCubemapSize):Be[ve]=Te?A.image[ve].image:A.image[ve],Be[ve]=Mt(A,Be[ve]);const et=Be[0],it=l.convert(A.format,A.colorSpace),Ve=l.convert(A.type),xt=L(A.internalFormat,it,Ve,A.colorSpace),Qe=A.isVideoTexture!==!0,mt=me.__version===void 0||_e===!0,q=Se.dataReady;let Ne=$(A,et);W(s.TEXTURE_CUBE_MAP,A);let ie;if(ft){Qe&&mt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,xt,et.width,et.height);for(let ve=0;ve<6;ve++){ie=Be[ve].mipmaps;for(let De=0;De<ie.length;De++){const Ce=ie[De];A.format!==_i?it!==null?Qe?q&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,De,0,0,Ce.width,Ce.height,it,Ce.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,De,xt,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qe?q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,De,0,0,Ce.width,Ce.height,it,Ve,Ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,De,xt,Ce.width,Ce.height,0,it,Ve,Ce.data)}}}else{if(ie=A.mipmaps,Qe&&mt){ie.length>0&&Ne++;const ve=ke(Be[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,xt,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Te){Qe?q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Be[ve].width,Be[ve].height,it,Ve,Be[ve].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,xt,Be[ve].width,Be[ve].height,0,it,Ve,Be[ve].data);for(let De=0;De<ie.length;De++){const ut=ie[De].image[ve].image;Qe?q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,De+1,0,0,ut.width,ut.height,it,Ve,ut.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,De+1,xt,ut.width,ut.height,0,it,Ve,ut.data)}}else{Qe?q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,it,Ve,Be[ve]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,xt,it,Ve,Be[ve]);for(let De=0;De<ie.length;De++){const Ce=ie[De];Qe?q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,De+1,0,0,it,Ve,Ce.image[ve]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,De+1,xt,it,Ve,Ce.image[ve])}}}S(A)&&v(s.TEXTURE_CUBE_MAP),me.__version=Se.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function fe(D,A,te,_e,Se,me){const Ge=l.convert(te.format,te.colorSpace),Pe=l.convert(te.type),Ue=L(te.internalFormat,Ge,Pe,te.colorSpace),ft=r.get(A),Te=r.get(te);if(Te.__renderTarget=A,!ft.__hasExternalTextures){const Be=Math.max(1,A.width>>me),et=Math.max(1,A.height>>me);Se===s.TEXTURE_3D||Se===s.TEXTURE_2D_ARRAY?t.texImage3D(Se,me,Ue,Be,et,A.depth,0,Ge,Pe,null):t.texImage2D(Se,me,Ue,Be,et,0,Ge,Pe,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),Oe(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,Se,Te.__webglTexture,0,nt(A)):(Se===s.TEXTURE_2D||Se>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,_e,Se,Te.__webglTexture,me),t.bindFramebuffer(s.FRAMEBUFFER,null)}function re(D,A,te){if(s.bindRenderbuffer(s.RENDERBUFFER,D),A.depthBuffer){const _e=A.depthTexture,Se=_e&&_e.isDepthTexture?_e.type:null,me=C(A.stencilBuffer,Se),Ge=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=nt(A);Oe(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pe,me,A.width,A.height):te?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,me,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,me,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ge,s.RENDERBUFFER,D)}else{const _e=A.textures;for(let Se=0;Se<_e.length;Se++){const me=_e[Se],Ge=l.convert(me.format,me.colorSpace),Pe=l.convert(me.type),Ue=L(me.internalFormat,Ge,Pe,me.colorSpace),ft=nt(A);te&&Oe(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,Ue,A.width,A.height):Oe(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft,Ue,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Ue,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ge(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _e=r.get(A.depthTexture);_e.__renderTarget=A,(!_e.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),pe(A.depthTexture,0);const Se=_e.__webglTexture,me=nt(A);if(A.depthTexture.format===Qs)Oe(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Se,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Se,0);else if(A.depthTexture.format===aa)Oe(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Se,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Se,0);else throw new Error("Unknown depthTexture format")}function be(D){const A=r.get(D),te=D.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==D.depthTexture){const _e=D.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),_e){const Se=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,_e.removeEventListener("dispose",Se)};_e.addEventListener("dispose",Se),A.__depthDisposeCallback=Se}A.__boundDepthTexture=_e}if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");ge(A.__webglFramebuffer,D)}else if(te){A.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[_e]),A.__webglDepthbuffer[_e]===void 0)A.__webglDepthbuffer[_e]=s.createRenderbuffer(),re(A.__webglDepthbuffer[_e],D,!1);else{const Se=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=A.__webglDepthbuffer[_e];s.bindRenderbuffer(s.RENDERBUFFER,me),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,me)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),re(A.__webglDepthbuffer,D,!1);else{const _e=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Se=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Se),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,Se)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Le(D,A,te){const _e=r.get(D);A!==void 0&&fe(_e.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),te!==void 0&&be(D)}function Je(D){const A=D.texture,te=r.get(D),_e=r.get(A);D.addEventListener("dispose",O);const Se=D.textures,me=D.isWebGLCubeRenderTarget===!0,Ge=Se.length>1;if(Ge||(_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture()),_e.__version=A.version,u.memory.textures++),me){te.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(A.mipmaps&&A.mipmaps.length>0){te.__webglFramebuffer[Pe]=[];for(let Ue=0;Ue<A.mipmaps.length;Ue++)te.__webglFramebuffer[Pe][Ue]=s.createFramebuffer()}else te.__webglFramebuffer[Pe]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){te.__webglFramebuffer=[];for(let Pe=0;Pe<A.mipmaps.length;Pe++)te.__webglFramebuffer[Pe]=s.createFramebuffer()}else te.__webglFramebuffer=s.createFramebuffer();if(Ge)for(let Pe=0,Ue=Se.length;Pe<Ue;Pe++){const ft=r.get(Se[Pe]);ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture(),u.memory.textures++)}if(D.samples>0&&Oe(D)===!1){te.__webglMultisampledFramebuffer=s.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Pe=0;Pe<Se.length;Pe++){const Ue=Se[Pe];te.__webglColorRenderbuffer[Pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,te.__webglColorRenderbuffer[Pe]);const ft=l.convert(Ue.format,Ue.colorSpace),Te=l.convert(Ue.type),Be=L(Ue.internalFormat,ft,Te,Ue.colorSpace,D.isXRRenderTarget===!0),et=nt(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,et,Be,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,te.__webglColorRenderbuffer[Pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(te.__webglDepthRenderbuffer=s.createRenderbuffer(),re(te.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(me){t.bindTexture(s.TEXTURE_CUBE_MAP,_e.__webglTexture),W(s.TEXTURE_CUBE_MAP,A);for(let Pe=0;Pe<6;Pe++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ue=0;Ue<A.mipmaps.length;Ue++)fe(te.__webglFramebuffer[Pe][Ue],D,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ue);else fe(te.__webglFramebuffer[Pe],D,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);S(A)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let Pe=0,Ue=Se.length;Pe<Ue;Pe++){const ft=Se[Pe],Te=r.get(ft);t.bindTexture(s.TEXTURE_2D,Te.__webglTexture),W(s.TEXTURE_2D,ft),fe(te.__webglFramebuffer,D,ft,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,0),S(ft)&&v(s.TEXTURE_2D)}t.unbindTexture()}else{let Pe=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Pe=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Pe,_e.__webglTexture),W(Pe,A),A.mipmaps&&A.mipmaps.length>0)for(let Ue=0;Ue<A.mipmaps.length;Ue++)fe(te.__webglFramebuffer[Ue],D,A,s.COLOR_ATTACHMENT0,Pe,Ue);else fe(te.__webglFramebuffer,D,A,s.COLOR_ATTACHMENT0,Pe,0);S(A)&&v(Pe),t.unbindTexture()}D.depthBuffer&&be(D)}function $e(D){const A=D.textures;for(let te=0,_e=A.length;te<_e;te++){const Se=A[te];if(S(Se)){const me=U(D),Ge=r.get(Se).__webglTexture;t.bindTexture(me,Ge),v(me),t.unbindTexture()}}}const lt=[],z=[];function Ct(D){if(D.samples>0){if(Oe(D)===!1){const A=D.textures,te=D.width,_e=D.height;let Se=s.COLOR_BUFFER_BIT;const me=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ge=r.get(D),Pe=A.length>1;if(Pe)for(let Ue=0;Ue<A.length;Ue++)t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Ue=0;Ue<A.length;Ue++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Se|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Se|=s.STENCIL_BUFFER_BIT)),Pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ue]);const ft=r.get(A[Ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ft,0)}s.blitFramebuffer(0,0,te,_e,0,0,te,_e,Se,s.NEAREST),h===!0&&(lt.length=0,z.length=0,lt.push(s.COLOR_ATTACHMENT0+Ue),D.depthBuffer&&D.resolveDepthBuffer===!1&&(lt.push(me),z.push(me),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,z)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,lt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Pe)for(let Ue=0;Ue<A.length;Ue++){t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ue]);const ft=r.get(A[Ue]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,ft,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&h){const A=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function nt(D){return Math.min(o.maxSamples,D.samples)}function Oe(D){const A=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function We(D){const A=u.render.frame;x.get(D)!==A&&(x.set(D,A),D.update())}function Mt(D,A){const te=D.colorSpace,_e=D.format,Se=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||te!==la&&te!==Nr&&(At.getTransfer(te)===Ut?(_e!==_i||Se!==er)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),A}function ke(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=Q,this.resetTextureUnits=le,this.setTexture2D=pe,this.setTexture2DArray=ce,this.setTexture3D=ue,this.setTextureCube=H,this.rebindTextures=Le,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Oe}function uE(s,e){function t(r,o=Nr){let l;const u=At.getTransfer(o);if(r===er)return s.UNSIGNED_BYTE;if(r===af)return s.UNSIGNED_SHORT_4_4_4_4;if(r===of)return s.UNSIGNED_SHORT_5_5_5_1;if(r===h0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===d0)return s.BYTE;if(r===f0)return s.SHORT;if(r===no)return s.UNSIGNED_SHORT;if(r===sf)return s.INT;if(r===ds)return s.UNSIGNED_INT;if(r===Zi)return s.FLOAT;if(r===ao)return s.HALF_FLOAT;if(r===p0)return s.ALPHA;if(r===m0)return s.RGB;if(r===_i)return s.RGBA;if(r===g0)return s.LUMINANCE;if(r===x0)return s.LUMINANCE_ALPHA;if(r===Qs)return s.DEPTH_COMPONENT;if(r===aa)return s.DEPTH_STENCIL;if(r===v0)return s.RED;if(r===lf)return s.RED_INTEGER;if(r===_0)return s.RG;if(r===cf)return s.RG_INTEGER;if(r===uf)return s.RGBA_INTEGER;if(r===Ul||r===kl||r===Fl||r===Ol)if(u===Ut)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Ul)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ol)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Ul)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===kl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ol)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Cd||r===Rd||r===Nd||r===Pd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Cd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Rd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Nd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Pd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ld||r===Dd||r===Id)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Ld||r===Dd)return u===Ut?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Id)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ud||r===kd||r===Fd||r===Od||r===zd||r===Bd||r===Vd||r===Hd||r===Gd||r===jd||r===Wd||r===Xd||r===Yd||r===qd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Ud)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===kd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Fd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Od)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===zd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Bd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Vd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Hd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Gd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===jd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Wd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Xd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Yd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===qd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===zl||r===$d||r===Kd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===zl)return u===Ut?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===$d)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Kd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===y0||r===Zd||r===Jd||r===Qd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===zl)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Zd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Jd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Qd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===sa?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}class dE extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hn extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fE={type:"move"};class cd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const d=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const b of e.hand.values()){const S=t.getJointPose(b,r),v=this._getHandJoint(p,b);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const x=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],y=x.position.distanceTo(_.position),M=.02,E=.005;p.inputState.pinching&&y>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(fE)))}return d!==null&&(d.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new hn;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const hE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class mE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new On,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Ur({vertexShader:hE,fragmentShader:pE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new St(new Kl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gE extends ca{constructor(e,t){super();const r=this;let o=null,l=1,u=null,d="local-floor",h=1,p=null,x=null,_=null,y=null,M=null,E=null;const b=new mE,S=t.getContextAttributes();let v=null,U=null;const L=[],C=[],$=new ot;let F=null;const O=new ii;O.viewport=new Yt;const j=new ii;j.viewport=new Yt;const P=[O,j],N=new dE;let V=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ee=L[X];return ee===void 0&&(ee=new cd,L[X]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(X){let ee=L[X];return ee===void 0&&(ee=new cd,L[X]=ee),ee.getGripSpace()},this.getHand=function(X){let ee=L[X];return ee===void 0&&(ee=new cd,L[X]=ee),ee.getHandSpace()};function Q(X){const ee=C.indexOf(X.inputSource);if(ee===-1)return;const fe=L[ee];fe!==void 0&&(fe.update(X.inputSource,X.frame,p||u),fe.dispatchEvent({type:X.type,data:X.inputSource}))}function de(){o.removeEventListener("select",Q),o.removeEventListener("selectstart",Q),o.removeEventListener("selectend",Q),o.removeEventListener("squeeze",Q),o.removeEventListener("squeezestart",Q),o.removeEventListener("squeezeend",Q),o.removeEventListener("end",de),o.removeEventListener("inputsourceschange",pe);for(let X=0;X<L.length;X++){const ee=C[X];ee!==null&&(C[X]=null,L[X].disconnect(ee))}V=null,le=null,b.reset(),e.setRenderTarget(v),M=null,y=null,_=null,o=null,U=null,xe.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize($.width,$.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){l=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){d=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(X){p=X},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(X){if(o=X,o!==null){if(v=e.getRenderTarget(),o.addEventListener("select",Q),o.addEventListener("selectstart",Q),o.addEventListener("selectend",Q),o.addEventListener("squeeze",Q),o.addEventListener("squeezestart",Q),o.addEventListener("squeezeend",Q),o.addEventListener("end",de),o.addEventListener("inputsourceschange",pe),S.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize($),o.renderState.layers===void 0){const ee={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,ee),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new fs(M.framebufferWidth,M.framebufferHeight,{format:_i,type:er,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let ee=null,fe=null,re=null;S.depth&&(re=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=S.stencil?aa:Qs,fe=S.stencil?sa:ds);const ge={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:l};_=new XRWebGLBinding(o,t),y=_.createProjectionLayer(ge),o.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),U=new fs(y.textureWidth,y.textureHeight,{format:_i,type:er,depthTexture:new U0(y.textureWidth,y.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await o.requestReferenceSpace(d),xe.setContext(o),xe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function pe(X){for(let ee=0;ee<X.removed.length;ee++){const fe=X.removed[ee],re=C.indexOf(fe);re>=0&&(C[re]=null,L[re].disconnect(fe))}for(let ee=0;ee<X.added.length;ee++){const fe=X.added[ee];let re=C.indexOf(fe);if(re===-1){for(let be=0;be<L.length;be++)if(be>=C.length){C.push(fe),re=be;break}else if(C[be]===null){C[be]=fe,re=be;break}if(re===-1)break}const ge=L[re];ge&&ge.connect(fe)}}const ce=new Z,ue=new Z;function H(X,ee,fe){ce.setFromMatrixPosition(ee.matrixWorld),ue.setFromMatrixPosition(fe.matrixWorld);const re=ce.distanceTo(ue),ge=ee.projectionMatrix.elements,be=fe.projectionMatrix.elements,Le=ge[14]/(ge[10]-1),Je=ge[14]/(ge[10]+1),$e=(ge[9]+1)/ge[5],lt=(ge[9]-1)/ge[5],z=(ge[8]-1)/ge[0],Ct=(be[8]+1)/be[0],nt=Le*z,Oe=Le*Ct,We=re/(-z+Ct),Mt=We*-z;if(ee.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Mt),X.translateZ(We),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),ge[10]===-1)X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const ke=Le+We,D=Je+We,A=nt-Mt,te=Oe+(re-Mt),_e=$e*Je/D*ke,Se=lt*Je/D*ke;X.projectionMatrix.makePerspective(A,te,_e,Se,ke,D),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function he(X,ee){ee===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ee.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(o===null)return;let ee=X.near,fe=X.far;b.texture!==null&&(b.depthNear>0&&(ee=b.depthNear),b.depthFar>0&&(fe=b.depthFar)),N.near=j.near=O.near=ee,N.far=j.far=O.far=fe,(V!==N.near||le!==N.far)&&(o.updateRenderState({depthNear:N.near,depthFar:N.far}),V=N.near,le=N.far),O.layers.mask=X.layers.mask|2,j.layers.mask=X.layers.mask|4,N.layers.mask=O.layers.mask|j.layers.mask;const re=X.parent,ge=N.cameras;he(N,re);for(let be=0;be<ge.length;be++)he(ge[be],re);ge.length===2?H(N,O,j):N.projectionMatrix.copy(O.projectionMatrix),I(X,N,re)};function I(X,ee,fe){fe===null?X.matrix.copy(ee.matrixWorld):(X.matrix.copy(fe.matrixWorld),X.matrix.invert(),X.matrix.multiply(ee.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=io*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(y===null&&M===null))return h},this.setFoveation=function(X){h=X,y!==null&&(y.fixedFoveation=X),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=X)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(N)};let w=null;function W(X,ee){if(x=ee.getViewerPose(p||u),E=ee,x!==null){const fe=x.views;M!==null&&(e.setRenderTargetFramebuffer(U,M.framebuffer),e.setRenderTarget(U));let re=!1;fe.length!==N.cameras.length&&(N.cameras.length=0,re=!0);for(let be=0;be<fe.length;be++){const Le=fe[be];let Je=null;if(M!==null)Je=M.getViewport(Le);else{const lt=_.getViewSubImage(y,Le);Je=lt.viewport,be===0&&(e.setRenderTargetTextures(U,lt.colorTexture,y.ignoreDepthValues?void 0:lt.depthStencilTexture),e.setRenderTarget(U))}let $e=P[be];$e===void 0&&($e=new ii,$e.layers.enable(be),$e.viewport=new Yt,P[be]=$e),$e.matrix.fromArray(Le.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(Le.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(Je.x,Je.y,Je.width,Je.height),be===0&&(N.matrix.copy($e.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),re===!0&&N.cameras.push($e)}const ge=o.enabledFeatures;if(ge&&ge.includes("depth-sensing")){const be=_.getDepthInformation(fe[0]);be&&be.isValid&&be.texture&&b.init(e,be,o.renderState)}}for(let fe=0;fe<L.length;fe++){const re=C[fe],ge=L[fe];re!==null&&ge!==void 0&&ge.update(re,ee,p||u)}w&&w(X,ee),ee.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ee}),E=null}const xe=new D0;xe.setAnimationLoop(W),this.setAnimationLoop=function(X){w=X},this.dispose=function(){}}}const is=new Li,xE=new jt;function vE(s,e){function t(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function r(S,v){v.color.getRGB(S.fogColor.value,N0(s)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function o(S,v,U,L,C){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(S,v):v.isMeshToonMaterial?(l(S,v),_(S,v)):v.isMeshPhongMaterial?(l(S,v),x(S,v)):v.isMeshStandardMaterial?(l(S,v),y(S,v),v.isMeshPhysicalMaterial&&M(S,v,C)):v.isMeshMatcapMaterial?(l(S,v),E(S,v)):v.isMeshDepthMaterial?l(S,v):v.isMeshDistanceMaterial?(l(S,v),b(S,v)):v.isMeshNormalMaterial?l(S,v):v.isLineBasicMaterial?(u(S,v),v.isLineDashedMaterial&&d(S,v)):v.isPointsMaterial?h(S,v,U,L):v.isSpriteMaterial?p(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,t(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,t(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===Fn&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,t(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===Fn&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,t(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,t(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const U=e.get(v),L=U.envMap,C=U.envMapRotation;L&&(S.envMap.value=L,is.copy(C),is.x*=-1,is.y*=-1,is.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),S.envMapRotation.value.setFromMatrix4(xE.makeRotationFromEuler(is)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,S.aoMapTransform))}function u(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,t(v.map,S.mapTransform))}function d(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function h(S,v,U,L){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*U,S.scale.value=L*.5,v.map&&(S.map.value=v.map,t(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function p(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,t(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function x(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function _(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function y(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function M(S,v,U){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Fn&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=U.texture,S.transmissionSamplerSize.value.set(U.width,U.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,v){v.matcap&&(S.matcap.value=v.matcap)}function b(S,v){const U=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(U.matrixWorld),S.nearDistance.value=U.shadow.camera.near,S.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function _E(s,e,t,r){let o={},l={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(U,L){const C=L.program;r.uniformBlockBinding(U,C)}function p(U,L){let C=o[U.id];C===void 0&&(E(U),C=x(U),o[U.id]=C,U.addEventListener("dispose",S));const $=L.program;r.updateUBOMapping(U,$);const F=e.render.frame;l[U.id]!==F&&(y(U),l[U.id]=F)}function x(U){const L=_();U.__bindingPointIndex=L;const C=s.createBuffer(),$=U.__size,F=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,$,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,C),C}function _(){for(let U=0;U<d;U++)if(u.indexOf(U)===-1)return u.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(U){const L=o[U.id],C=U.uniforms,$=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let F=0,O=C.length;F<O;F++){const j=Array.isArray(C[F])?C[F]:[C[F]];for(let P=0,N=j.length;P<N;P++){const V=j[P];if(M(V,F,P,$)===!0){const le=V.__offset,Q=Array.isArray(V.value)?V.value:[V.value];let de=0;for(let pe=0;pe<Q.length;pe++){const ce=Q[pe],ue=b(ce);typeof ce=="number"||typeof ce=="boolean"?(V.__data[0]=ce,s.bufferSubData(s.UNIFORM_BUFFER,le+de,V.__data)):ce.isMatrix3?(V.__data[0]=ce.elements[0],V.__data[1]=ce.elements[1],V.__data[2]=ce.elements[2],V.__data[3]=0,V.__data[4]=ce.elements[3],V.__data[5]=ce.elements[4],V.__data[6]=ce.elements[5],V.__data[7]=0,V.__data[8]=ce.elements[6],V.__data[9]=ce.elements[7],V.__data[10]=ce.elements[8],V.__data[11]=0):(ce.toArray(V.__data,de),de+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,le,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(U,L,C,$){const F=U.value,O=L+"_"+C;if($[O]===void 0)return typeof F=="number"||typeof F=="boolean"?$[O]=F:$[O]=F.clone(),!0;{const j=$[O];if(typeof F=="number"||typeof F=="boolean"){if(j!==F)return $[O]=F,!0}else if(j.equals(F)===!1)return j.copy(F),!0}return!1}function E(U){const L=U.uniforms;let C=0;const $=16;for(let O=0,j=L.length;O<j;O++){const P=Array.isArray(L[O])?L[O]:[L[O]];for(let N=0,V=P.length;N<V;N++){const le=P[N],Q=Array.isArray(le.value)?le.value:[le.value];for(let de=0,pe=Q.length;de<pe;de++){const ce=Q[de],ue=b(ce),H=C%$,he=H%ue.boundary,I=H+he;C+=he,I!==0&&$-I<ue.storage&&(C+=$-I),le.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=C,C+=ue.storage}}}const F=C%$;return F>0&&(C+=$-F),U.__size=C,U.__cache={},this}function b(U){const L={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(L.boundary=4,L.storage=4):U.isVector2?(L.boundary=8,L.storage=8):U.isVector3||U.isColor?(L.boundary=16,L.storage=12):U.isVector4?(L.boundary=16,L.storage=16):U.isMatrix3?(L.boundary=48,L.storage=48):U.isMatrix4?(L.boundary=64,L.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),L}function S(U){const L=U.target;L.removeEventListener("dispose",S);const C=u.indexOf(L.__bindingPointIndex);u.splice(C,1),s.deleteBuffer(o[L.id]),delete o[L.id],delete l[L.id]}function v(){for(const U in o)s.deleteBuffer(o[U]);u=[],o={},l={}}return{bind:h,update:p,dispose:v}}class yE{constructor(e={}){const{canvas:t=oy(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=u;const E=new Uint32Array(4),b=new Int32Array(4);let S=null,v=null;const U=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ni,this.toneMapping=Lr,this.toneMappingExposure=1;const C=this;let $=!1,F=0,O=0,j=null,P=-1,N=null;const V=new Yt,le=new Yt;let Q=null;const de=new Pt(0);let pe=0,ce=t.width,ue=t.height,H=1,he=null,I=null;const w=new Yt(0,0,ce,ue),W=new Yt(0,0,ce,ue);let xe=!1;const X=new hf;let ee=!1,fe=!1;const re=new jt,ge=new jt,be=new Z,Le=new Yt,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function lt(){return j===null?H:1}let z=r;function Ct(R,K){return t.getContext(R,K)}try{const R={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rf}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),z===null){const K="webgl2";if(z=Ct(K,R),z===null)throw Ct(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let nt,Oe,We,Mt,ke,D,A,te,_e,Se,me,Ge,Pe,Ue,ft,Te,Be,et,it,Ve,xt,Qe,mt,q;function Ne(){nt=new TM(z),nt.init(),Qe=new uE(z,nt),Oe=new _M(z,nt,e,Qe),We=new oE(z,nt),Oe.reverseDepthBuffer&&y&&We.buffers.depth.setReversed(!0),Mt=new CM(z),ke=new Xw,D=new cE(z,nt,We,ke,Oe,Qe,Mt),A=new SM(C),te=new EM(C),_e=new Uy(z),mt=new xM(z,_e),Se=new bM(z,_e,Mt,mt),me=new NM(z,Se,_e,Mt),it=new RM(z,Oe,D),Te=new yM(ke),Ge=new Ww(C,A,te,nt,Oe,mt,Te),Pe=new vE(C,ke),Ue=new qw,ft=new eE(nt),et=new gM(C,A,te,We,me,M,h),Be=new sE(C,me,Oe),q=new _E(z,Mt,Oe,We),Ve=new vM(z,nt,Mt),xt=new AM(z,nt,Mt),Mt.programs=Ge.programs,C.capabilities=Oe,C.extensions=nt,C.properties=ke,C.renderLists=Ue,C.shadowMap=Be,C.state=We,C.info=Mt}Ne();const ie=new gE(C,z);this.xr=ie,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const R=nt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=nt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(R){R!==void 0&&(H=R,this.setSize(ce,ue,!1))},this.getSize=function(R){return R.set(ce,ue)},this.setSize=function(R,K,se=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ce=R,ue=K,t.width=Math.floor(R*H),t.height=Math.floor(K*H),se===!0&&(t.style.width=R+"px",t.style.height=K+"px"),this.setViewport(0,0,R,K)},this.getDrawingBufferSize=function(R){return R.set(ce*H,ue*H).floor()},this.setDrawingBufferSize=function(R,K,se){ce=R,ue=K,H=se,t.width=Math.floor(R*se),t.height=Math.floor(K*se),this.setViewport(0,0,R,K)},this.getCurrentViewport=function(R){return R.copy(V)},this.getViewport=function(R){return R.copy(w)},this.setViewport=function(R,K,se,ae){R.isVector4?w.set(R.x,R.y,R.z,R.w):w.set(R,K,se,ae),We.viewport(V.copy(w).multiplyScalar(H).round())},this.getScissor=function(R){return R.copy(W)},this.setScissor=function(R,K,se,ae){R.isVector4?W.set(R.x,R.y,R.z,R.w):W.set(R,K,se,ae),We.scissor(le.copy(W).multiplyScalar(H).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(R){We.setScissorTest(xe=R)},this.setOpaqueSort=function(R){he=R},this.setTransparentSort=function(R){I=R},this.getClearColor=function(R){return R.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(R=!0,K=!0,se=!0){let ae=0;if(R){let G=!1;if(j!==null){const ye=j.texture.format;G=ye===uf||ye===cf||ye===lf}if(G){const ye=j.texture.type,Me=ye===er||ye===ds||ye===no||ye===sa||ye===af||ye===of,Xe=et.getClearColor(),Fe=et.getClearAlpha(),tt=Xe.r,rt=Xe.g,He=Xe.b;Me?(E[0]=tt,E[1]=rt,E[2]=He,E[3]=Fe,z.clearBufferuiv(z.COLOR,0,E)):(b[0]=tt,b[1]=rt,b[2]=He,b[3]=Fe,z.clearBufferiv(z.COLOR,0,b))}else ae|=z.COLOR_BUFFER_BIT}K&&(ae|=z.DEPTH_BUFFER_BIT),se&&(ae|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),Ue.dispose(),ft.dispose(),ke.dispose(),A.dispose(),te.dispose(),me.dispose(),mt.dispose(),q.dispose(),Ge.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Di),ie.removeEventListener("sessionend",Rn),si.stop()};function ve(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),$=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),$=!1;const R=Mt.autoReset,K=Be.enabled,se=Be.autoUpdate,ae=Be.needsUpdate,G=Be.type;Ne(),Mt.autoReset=R,Be.enabled=K,Be.autoUpdate=se,Be.needsUpdate=ae,Be.type=G}function Ce(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ut(R){const K=R.target;K.removeEventListener("dispose",ut),It(K)}function It(R){Wt(R),ke.remove(R)}function Wt(R){const K=ke.get(R).programs;K!==void 0&&(K.forEach(function(se){Ge.releaseProgram(se)}),R.isShaderMaterial&&Ge.releaseShaderCache(R))}this.renderBufferDirect=function(R,K,se,ae,G,ye){K===null&&(K=Je);const Me=G.isMesh&&G.matrixWorld.determinant()<0,Xe=Or(R,K,se,ae,G);We.setMaterial(ae,Me);let Fe=se.index,tt=1;if(ae.wireframe===!0){if(Fe=Se.getWireframeAttribute(se),Fe===void 0)return;tt=2}const rt=se.drawRange,He=se.attributes.position;let _t=rt.start*tt,wt=(rt.start+rt.count)*tt;ye!==null&&(_t=Math.max(_t,ye.start*tt),wt=Math.min(wt,(ye.start+ye.count)*tt)),Fe!==null?(_t=Math.max(_t,0),wt=Math.min(wt,Fe.count)):He!=null&&(_t=Math.max(_t,0),wt=Math.min(wt,He.count));const ht=wt-_t;if(ht<0||ht===1/0)return;mt.setup(G,ae,Xe,se,Fe);let Kt,gt=Ve;if(Fe!==null&&(Kt=_e.get(Fe),gt=xt,gt.setIndex(Kt)),G.isMesh)ae.wireframe===!0?(We.setLineWidth(ae.wireframeLinewidth*lt()),gt.setMode(z.LINES)):gt.setMode(z.TRIANGLES);else if(G.isLine){let Ze=ae.linewidth;Ze===void 0&&(Ze=1),We.setLineWidth(Ze*lt()),G.isLineSegments?gt.setMode(z.LINES):G.isLineLoop?gt.setMode(z.LINE_LOOP):gt.setMode(z.LINE_STRIP)}else G.isPoints?gt.setMode(z.POINTS):G.isSprite&&gt.setMode(z.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)gt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))gt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ze=G._multiDrawStarts,ai=G._multiDrawCounts,Rt=G._multiDrawCount,mn=Fe?_e.get(Fe).bytesPerElement:1,oi=ke.get(ae).currentProgram.getUniforms();for(let en=0;en<Rt;en++)oi.setValue(z,"_gl_DrawID",en),gt.render(Ze[en]/mn,ai[en])}else if(G.isInstancedMesh)gt.renderInstances(_t,ht,G.count);else if(se.isInstancedBufferGeometry){const Ze=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,ai=Math.min(se.instanceCount,Ze);gt.renderInstances(_t,ht,ai)}else gt.render(_t,ht)};function Tt(R,K,se){R.transparent===!0&&R.side===Ki&&R.forceSinglePass===!1?(R.side=Fn,R.needsUpdate=!0,nr(R,K,se),R.side=Ir,R.needsUpdate=!0,nr(R,K,se),R.side=Ki):nr(R,K,se)}this.compile=function(R,K,se=null){se===null&&(se=R),v=ft.get(se),v.init(K),L.push(v),se.traverseVisible(function(G){G.isLight&&G.layers.test(K.layers)&&(v.pushLight(G),G.castShadow&&v.pushShadow(G))}),R!==se&&R.traverseVisible(function(G){G.isLight&&G.layers.test(K.layers)&&(v.pushLight(G),G.castShadow&&v.pushShadow(G))}),v.setupLights();const ae=new Set;return R.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ye=G.material;if(ye)if(Array.isArray(ye))for(let Me=0;Me<ye.length;Me++){const Xe=ye[Me];Tt(Xe,se,G),ae.add(Xe)}else Tt(ye,se,G),ae.add(ye)}),L.pop(),v=null,ae},this.compileAsync=function(R,K,se=null){const ae=this.compile(R,K,se);return new Promise(G=>{function ye(){if(ae.forEach(function(Me){ke.get(Me).currentProgram.isReady()&&ae.delete(Me)}),ae.size===0){G(R);return}setTimeout(ye,10)}nt.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let $t=null;function un(R){$t&&$t(R)}function Di(){si.stop()}function Rn(){si.start()}const si=new D0;si.setAnimationLoop(un),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(R){$t=R,ie.setAnimationLoop(R),R===null?si.stop():si.start()},ie.addEventListener("sessionstart",Di),ie.addEventListener("sessionend",Rn),this.render=function(R,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if($===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(K),K=ie.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,K,j),v=ft.get(R,L.length),v.init(K),L.push(v),ge.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),X.setFromProjectionMatrix(ge),fe=this.localClippingEnabled,ee=Te.init(this.clippingPlanes,fe),S=Ue.get(R,U.length),S.init(),U.push(S),ie.enabled===!0&&ie.isPresenting===!0){const ye=C.xr.getDepthSensingMesh();ye!==null&&Xn(ye,K,-1/0,C.sortObjects)}Xn(R,K,0,C.sortObjects),S.finish(),C.sortObjects===!0&&S.sort(he,I),$e=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,$e&&et.addToRenderList(S,R),this.info.render.frame++,ee===!0&&Te.beginShadows();const se=v.state.shadowsArray;Be.render(se,R,K),ee===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=S.opaque,G=S.transmissive;if(v.setupLights(),K.isArrayCamera){const ye=K.cameras;if(G.length>0)for(let Me=0,Xe=ye.length;Me<Xe;Me++){const Fe=ye[Me];Mi(ae,G,R,Fe)}$e&&et.render(R);for(let Me=0,Xe=ye.length;Me<Xe;Me++){const Fe=ye[Me];Si(S,R,Fe,Fe.viewport)}}else G.length>0&&Mi(ae,G,R,K),$e&&et.render(R),Si(S,R,K);j!==null&&(D.updateMultisampleRenderTarget(j),D.updateRenderTargetMipmap(j)),R.isScene===!0&&R.onAfterRender(C,R,K),mt.resetDefaultState(),P=-1,N=null,L.pop(),L.length>0?(v=L[L.length-1],ee===!0&&Te.setGlobalState(C.clippingPlanes,v.state.camera)):v=null,U.pop(),U.length>0?S=U[U.length-1]:S=null};function Xn(R,K,se,ae){if(R.visible===!1)return;if(R.layers.test(K.layers)){if(R.isGroup)se=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(K);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||X.intersectsSprite(R)){ae&&Le.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ge);const Me=me.update(R),Xe=R.material;Xe.visible&&S.push(R,Me,Xe,se,Le.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||X.intersectsObject(R))){const Me=me.update(R),Xe=R.material;if(ae&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Le.copy(R.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Le.copy(Me.boundingSphere.center)),Le.applyMatrix4(R.matrixWorld).applyMatrix4(ge)),Array.isArray(Xe)){const Fe=Me.groups;for(let tt=0,rt=Fe.length;tt<rt;tt++){const He=Fe[tt],_t=Xe[He.materialIndex];_t&&_t.visible&&S.push(R,Me,_t,se,Le.z,He)}}else Xe.visible&&S.push(R,Me,Xe,se,Le.z,null)}}const ye=R.children;for(let Me=0,Xe=ye.length;Me<Xe;Me++)Xn(ye[Me],K,se,ae)}function Si(R,K,se,ae){const G=R.opaque,ye=R.transmissive,Me=R.transparent;v.setupLightsView(se),ee===!0&&Te.setGlobalState(C.clippingPlanes,se),ae&&We.viewport(V.copy(ae)),G.length>0&&wn(G,K,se),ye.length>0&&wn(ye,K,se),Me.length>0&&wn(Me,K,se),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function Mi(R,K,se,ae){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ae.id]===void 0&&(v.state.transmissionRenderTarget[ae.id]=new fs(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?ao:er,minFilter:us,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const ye=v.state.transmissionRenderTarget[ae.id],Me=ae.viewport||V;ye.setSize(Me.z,Me.w);const Xe=C.getRenderTarget();C.setRenderTarget(ye),C.getClearColor(de),pe=C.getClearAlpha(),pe<1&&C.setClearColor(16777215,.5),C.clear(),$e&&et.render(se);const Fe=C.toneMapping;C.toneMapping=Lr;const tt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),v.setupLightsView(ae),ee===!0&&Te.setGlobalState(C.clippingPlanes,ae),wn(R,se,ae),D.updateMultisampleRenderTarget(ye),D.updateRenderTargetMipmap(ye),nt.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let He=0,_t=K.length;He<_t;He++){const wt=K[He],ht=wt.object,Kt=wt.geometry,gt=wt.material,Ze=wt.group;if(gt.side===Ki&&ht.layers.test(ae.layers)){const ai=gt.side;gt.side=Fn,gt.needsUpdate=!0,Fr(ht,se,ae,Kt,gt,Ze),gt.side=ai,gt.needsUpdate=!0,rt=!0}}rt===!0&&(D.updateMultisampleRenderTarget(ye),D.updateRenderTargetMipmap(ye))}C.setRenderTarget(Xe),C.setClearColor(de,pe),tt!==void 0&&(ae.viewport=tt),C.toneMapping=Fe}function wn(R,K,se){const ae=K.isScene===!0?K.overrideMaterial:null;for(let G=0,ye=R.length;G<ye;G++){const Me=R[G],Xe=Me.object,Fe=Me.geometry,tt=ae===null?Me.material:ae,rt=Me.group;Xe.layers.test(se.layers)&&Fr(Xe,K,se,Fe,tt,rt)}}function Fr(R,K,se,ae,G,ye){R.onBeforeRender(C,K,se,ae,G,ye),R.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),G.onBeforeRender(C,K,se,ae,R,ye),G.transparent===!0&&G.side===Ki&&G.forceSinglePass===!1?(G.side=Fn,G.needsUpdate=!0,C.renderBufferDirect(se,K,ae,G,R,ye),G.side=Ir,G.needsUpdate=!0,C.renderBufferDirect(se,K,ae,G,R,ye),G.side=Ki):C.renderBufferDirect(se,K,ae,G,R,ye),R.onAfterRender(C,K,se,ae,G,ye)}function nr(R,K,se){K.isScene!==!0&&(K=Je);const ae=ke.get(R),G=v.state.lights,ye=v.state.shadowsArray,Me=G.state.version,Xe=Ge.getParameters(R,G.state,ye,K,se),Fe=Ge.getProgramCacheKey(Xe);let tt=ae.programs;ae.environment=R.isMeshStandardMaterial?K.environment:null,ae.fog=K.fog,ae.envMap=(R.isMeshStandardMaterial?te:A).get(R.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&R.envMap===null?K.environmentRotation:R.envMapRotation,tt===void 0&&(R.addEventListener("dispose",ut),tt=new Map,ae.programs=tt);let rt=tt.get(Fe);if(rt!==void 0){if(ae.currentProgram===rt&&ae.lightsStateVersion===Me)return Bt(R,Xe),rt}else Xe.uniforms=Ge.getUniforms(R),R.onBeforeCompile(Xe,C),rt=Ge.acquireProgram(Xe,Fe),tt.set(Fe,rt),ae.uniforms=Xe.uniforms;const He=ae.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(He.clippingPlanes=Te.uniform),Bt(R,Xe),ae.needsLights=ir(R),ae.lightsStateVersion=Me,ae.needsLights&&(He.ambientLightColor.value=G.state.ambient,He.lightProbe.value=G.state.probe,He.directionalLights.value=G.state.directional,He.directionalLightShadows.value=G.state.directionalShadow,He.spotLights.value=G.state.spot,He.spotLightShadows.value=G.state.spotShadow,He.rectAreaLights.value=G.state.rectArea,He.ltc_1.value=G.state.rectAreaLTC1,He.ltc_2.value=G.state.rectAreaLTC2,He.pointLights.value=G.state.point,He.pointLightShadows.value=G.state.pointShadow,He.hemisphereLights.value=G.state.hemi,He.directionalShadowMap.value=G.state.directionalShadowMap,He.directionalShadowMatrix.value=G.state.directionalShadowMatrix,He.spotShadowMap.value=G.state.spotShadowMap,He.spotLightMatrix.value=G.state.spotLightMatrix,He.spotLightMap.value=G.state.spotLightMap,He.pointShadowMap.value=G.state.pointShadowMap,He.pointShadowMatrix.value=G.state.pointShadowMatrix),ae.currentProgram=rt,ae.uniformsList=null,rt}function hs(R){if(R.uniformsList===null){const K=R.currentProgram.getUniforms();R.uniformsList=Bl.seqWithValue(K.seq,R.uniforms)}return R.uniformsList}function Bt(R,K){const se=ke.get(R);se.outputColorSpace=K.outputColorSpace,se.batching=K.batching,se.batchingColor=K.batchingColor,se.instancing=K.instancing,se.instancingColor=K.instancingColor,se.instancingMorph=K.instancingMorph,se.skinning=K.skinning,se.morphTargets=K.morphTargets,se.morphNormals=K.morphNormals,se.morphColors=K.morphColors,se.morphTargetsCount=K.morphTargetsCount,se.numClippingPlanes=K.numClippingPlanes,se.numIntersection=K.numClipIntersection,se.vertexAlphas=K.vertexAlphas,se.vertexTangents=K.vertexTangents,se.toneMapping=K.toneMapping}function Or(R,K,se,ae,G){K.isScene!==!0&&(K=Je),D.resetTextureUnits();const ye=K.fog,Me=ae.isMeshStandardMaterial?K.environment:null,Xe=j===null?C.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:la,Fe=(ae.isMeshStandardMaterial?te:A).get(ae.envMap||Me),tt=ae.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,rt=!!se.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),He=!!se.morphAttributes.position,_t=!!se.morphAttributes.normal,wt=!!se.morphAttributes.color;let ht=Lr;ae.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ht=C.toneMapping);const Kt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,gt=Kt!==void 0?Kt.length:0,Ze=ke.get(ae),ai=v.state.lights;if(ee===!0&&(fe===!0||R!==N)){const En=R===N&&ae.id===P;Te.setState(ae,R,En)}let Rt=!1;ae.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==ai.state.version||Ze.outputColorSpace!==Xe||G.isBatchedMesh&&Ze.batching===!1||!G.isBatchedMesh&&Ze.batching===!0||G.isBatchedMesh&&Ze.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ze.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ze.instancing===!1||!G.isInstancedMesh&&Ze.instancing===!0||G.isSkinnedMesh&&Ze.skinning===!1||!G.isSkinnedMesh&&Ze.skinning===!0||G.isInstancedMesh&&Ze.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ze.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ze.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ze.instancingMorph===!1&&G.morphTexture!==null||Ze.envMap!==Fe||ae.fog===!0&&Ze.fog!==ye||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Te.numPlanes||Ze.numIntersection!==Te.numIntersection)||Ze.vertexAlphas!==tt||Ze.vertexTangents!==rt||Ze.morphTargets!==He||Ze.morphNormals!==_t||Ze.morphColors!==wt||Ze.toneMapping!==ht||Ze.morphTargetsCount!==gt)&&(Rt=!0):(Rt=!0,Ze.__version=ae.version);let mn=Ze.currentProgram;Rt===!0&&(mn=nr(ae,K,G));let oi=!1,en=!1,wi=!1;const kt=mn.getUniforms(),Yn=Ze.uniforms;if(We.useProgram(mn.program)&&(oi=!0,en=!0,wi=!0),ae.id!==P&&(P=ae.id,en=!0),oi||N!==R){We.buffers.depth.getReversed()?(re.copy(R.projectionMatrix),cy(re),uy(re),kt.setValue(z,"projectionMatrix",re)):kt.setValue(z,"projectionMatrix",R.projectionMatrix),kt.setValue(z,"viewMatrix",R.matrixWorldInverse);const qn=kt.map.cameraPosition;qn!==void 0&&qn.setValue(z,be.setFromMatrixPosition(R.matrixWorld)),Oe.logarithmicDepthBuffer&&kt.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&kt.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),N!==R&&(N=R,en=!0,wi=!0)}if(G.isSkinnedMesh){kt.setOptional(z,G,"bindMatrix"),kt.setOptional(z,G,"bindMatrixInverse");const En=G.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),kt.setValue(z,"boneTexture",En.boneTexture,D))}G.isBatchedMesh&&(kt.setOptional(z,G,"batchingTexture"),kt.setValue(z,"batchingTexture",G._matricesTexture,D),kt.setOptional(z,G,"batchingIdTexture"),kt.setValue(z,"batchingIdTexture",G._indirectTexture,D),kt.setOptional(z,G,"batchingColorTexture"),G._colorsTexture!==null&&kt.setValue(z,"batchingColorTexture",G._colorsTexture,D));const Ii=se.morphAttributes;if((Ii.position!==void 0||Ii.normal!==void 0||Ii.color!==void 0)&&it.update(G,se,mn),(en||Ze.receiveShadow!==G.receiveShadow)&&(Ze.receiveShadow=G.receiveShadow,kt.setValue(z,"receiveShadow",G.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(Yn.envMap.value=Fe,Yn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&K.environment!==null&&(Yn.envMapIntensity.value=K.environmentIntensity),en&&(kt.setValue(z,"toneMappingExposure",C.toneMappingExposure),Ze.needsLights&&zr(Yn,wi),ye&&ae.fog===!0&&Pe.refreshFogUniforms(Yn,ye),Pe.refreshMaterialUniforms(Yn,ae,H,ue,v.state.transmissionRenderTarget[R.id]),Bl.upload(z,hs(Ze),Yn,D)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Bl.upload(z,hs(Ze),Yn,D),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&kt.setValue(z,"center",G.center),kt.setValue(z,"modelViewMatrix",G.modelViewMatrix),kt.setValue(z,"normalMatrix",G.normalMatrix),kt.setValue(z,"modelMatrix",G.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const En=ae.uniformsGroups;for(let qn=0,Nn=En.length;qn<Nn;qn++){const uo=En[qn];q.update(uo,mn),q.bind(uo,mn)}}return mn}function zr(R,K){R.ambientLightColor.needsUpdate=K,R.lightProbe.needsUpdate=K,R.directionalLights.needsUpdate=K,R.directionalLightShadows.needsUpdate=K,R.pointLights.needsUpdate=K,R.pointLightShadows.needsUpdate=K,R.spotLights.needsUpdate=K,R.spotLightShadows.needsUpdate=K,R.rectAreaLights.needsUpdate=K,R.hemisphereLights.needsUpdate=K}function ir(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(R,K,se){ke.get(R.texture).__webglTexture=K,ke.get(R.depthTexture).__webglTexture=se;const ae=ke.get(R);ae.__hasExternalTextures=!0,ae.__autoAllocateDepthBuffer=se===void 0,ae.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ae.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,K){const se=ke.get(R);se.__webglFramebuffer=K,se.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(R,K=0,se=0){j=R,F=K,O=se;let ae=!0,G=null,ye=!1,Me=!1;if(R){const Fe=ke.get(R);if(Fe.__useDefaultFramebuffer!==void 0)We.bindFramebuffer(z.FRAMEBUFFER,null),ae=!1;else if(Fe.__webglFramebuffer===void 0)D.setupRenderTarget(R);else if(Fe.__hasExternalTextures)D.rebindTextures(R,ke.get(R.texture).__webglTexture,ke.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const He=R.depthTexture;if(Fe.__boundDepthTexture!==He){if(He!==null&&ke.has(He)&&(R.width!==He.image.width||R.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(R)}}const tt=R.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Me=!0);const rt=ke.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(rt[K])?G=rt[K][se]:G=rt[K],ye=!0):R.samples>0&&D.useMultisampledRTT(R)===!1?G=ke.get(R).__webglMultisampledFramebuffer:Array.isArray(rt)?G=rt[se]:G=rt,V.copy(R.viewport),le.copy(R.scissor),Q=R.scissorTest}else V.copy(w).multiplyScalar(H).floor(),le.copy(W).multiplyScalar(H).floor(),Q=xe;if(We.bindFramebuffer(z.FRAMEBUFFER,G)&&ae&&We.drawBuffers(R,G),We.viewport(V),We.scissor(le),We.setScissorTest(Q),ye){const Fe=ke.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+K,Fe.__webglTexture,se)}else if(Me){const Fe=ke.get(R.texture),tt=K||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Fe.__webglTexture,se||0,tt)}P=-1},this.readRenderTargetPixels=function(R,K,se,ae,G,ye,Me){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=ke.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Me!==void 0&&(Xe=Xe[Me]),Xe){We.bindFramebuffer(z.FRAMEBUFFER,Xe);try{const Fe=R.texture,tt=Fe.format,rt=Fe.type;if(!Oe.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Oe.textureTypeReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=R.width-ae&&se>=0&&se<=R.height-G&&z.readPixels(K,se,ae,G,Qe.convert(tt),Qe.convert(rt),ye)}finally{const Fe=j!==null?ke.get(j).__webglFramebuffer:null;We.bindFramebuffer(z.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(R,K,se,ae,G,ye,Me){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=ke.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Me!==void 0&&(Xe=Xe[Me]),Xe){const Fe=R.texture,tt=Fe.format,rt=Fe.type;if(!Oe.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Oe.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=R.width-ae&&se>=0&&se<=R.height-G){We.bindFramebuffer(z.FRAMEBUFFER,Xe);const He=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,He),z.bufferData(z.PIXEL_PACK_BUFFER,ye.byteLength,z.STREAM_READ),z.readPixels(K,se,ae,G,Qe.convert(tt),Qe.convert(rt),0);const _t=j!==null?ke.get(j).__webglFramebuffer:null;We.bindFramebuffer(z.FRAMEBUFFER,_t);const wt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await ly(z,wt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,He),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,ye),z.deleteBuffer(He),z.deleteSync(wt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,K=null,se=0){R.isTexture!==!0&&($a("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,R=arguments[1]);const ae=Math.pow(2,-se),G=Math.floor(R.image.width*ae),ye=Math.floor(R.image.height*ae),Me=K!==null?K.x:0,Xe=K!==null?K.y:0;D.setTexture2D(R,0),z.copyTexSubImage2D(z.TEXTURE_2D,se,0,0,Me,Xe,G,ye),We.unbindTexture()},this.copyTextureToTexture=function(R,K,se=null,ae=null,G=0){R.isTexture!==!0&&($a("WebGLRenderer: copyTextureToTexture function signature has changed."),ae=arguments[0]||null,R=arguments[1],K=arguments[2],G=arguments[3]||0,se=null);let ye,Me,Xe,Fe,tt,rt,He,_t,wt;const ht=R.isCompressedTexture?R.mipmaps[G]:R.image;se!==null?(ye=se.max.x-se.min.x,Me=se.max.y-se.min.y,Xe=se.isBox3?se.max.z-se.min.z:1,Fe=se.min.x,tt=se.min.y,rt=se.isBox3?se.min.z:0):(ye=ht.width,Me=ht.height,Xe=ht.depth||1,Fe=0,tt=0,rt=0),ae!==null?(He=ae.x,_t=ae.y,wt=ae.z):(He=0,_t=0,wt=0);const Kt=Qe.convert(K.format),gt=Qe.convert(K.type);let Ze;K.isData3DTexture?(D.setTexture3D(K,0),Ze=z.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(D.setTexture2DArray(K,0),Ze=z.TEXTURE_2D_ARRAY):(D.setTexture2D(K,0),Ze=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,K.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,K.unpackAlignment);const ai=z.getParameter(z.UNPACK_ROW_LENGTH),Rt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),mn=z.getParameter(z.UNPACK_SKIP_PIXELS),oi=z.getParameter(z.UNPACK_SKIP_ROWS),en=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,ht.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ht.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Fe),z.pixelStorei(z.UNPACK_SKIP_ROWS,tt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,rt);const wi=R.isDataArrayTexture||R.isData3DTexture,kt=K.isDataArrayTexture||K.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const Yn=ke.get(R),Ii=ke.get(K),En=ke.get(Yn.__renderTarget),qn=ke.get(Ii.__renderTarget);We.bindFramebuffer(z.READ_FRAMEBUFFER,En.__webglFramebuffer),We.bindFramebuffer(z.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let Nn=0;Nn<Xe;Nn++)wi&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ke.get(R).__webglTexture,G,rt+Nn),R.isDepthTexture?(kt&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ke.get(K).__webglTexture,G,wt+Nn),z.blitFramebuffer(Fe,tt,ye,Me,He,_t,ye,Me,z.DEPTH_BUFFER_BIT,z.NEAREST)):kt?z.copyTexSubImage3D(Ze,G,He,_t,wt+Nn,Fe,tt,ye,Me):z.copyTexSubImage2D(Ze,G,He,_t,wt+Nn,Fe,tt,ye,Me);We.bindFramebuffer(z.READ_FRAMEBUFFER,null),We.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else kt?R.isDataTexture||R.isData3DTexture?z.texSubImage3D(Ze,G,He,_t,wt,ye,Me,Xe,Kt,gt,ht.data):K.isCompressedArrayTexture?z.compressedTexSubImage3D(Ze,G,He,_t,wt,ye,Me,Xe,Kt,ht.data):z.texSubImage3D(Ze,G,He,_t,wt,ye,Me,Xe,Kt,gt,ht):R.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,G,He,_t,ye,Me,Kt,gt,ht.data):R.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,G,He,_t,ht.width,ht.height,Kt,ht.data):z.texSubImage2D(z.TEXTURE_2D,G,He,_t,ye,Me,Kt,gt,ht);z.pixelStorei(z.UNPACK_ROW_LENGTH,ai),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Rt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,mn),z.pixelStorei(z.UNPACK_SKIP_ROWS,oi),z.pixelStorei(z.UNPACK_SKIP_IMAGES,en),G===0&&K.generateMipmaps&&z.generateMipmap(Ze),We.unbindTexture()},this.copyTextureToTexture3D=function(R,K,se=null,ae=null,G=0){return R.isTexture!==!0&&($a("WebGLRenderer: copyTextureToTexture3D function signature has changed."),se=arguments[0]||null,ae=arguments[1]||null,R=arguments[2],K=arguments[3],G=arguments[4]||0),$a('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,K,se,ae,G)},this.initRenderTarget=function(R){ke.get(R).__webglFramebuffer===void 0&&D.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?D.setTextureCube(R,0):R.isData3DTexture?D.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?D.setTexture2DArray(R,0):D.setTexture2D(R,0),We.unbindTexture()},this.resetState=function(){F=0,O=0,j=null,We.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}}class SE extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class tr{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const r=this.getLengths();let o=0;const l=r.length;let u;t?u=t:u=e*r[l-1];let d=0,h=l-1,p;for(;d<=h;)if(o=Math.floor(d+(h-d)/2),p=r[o]-u,p<0)d=o+1;else if(p>0)h=o-1;else{h=o;break}if(o=h,r[o]===u)return o/(l-1);const x=r[o],y=r[o+1]-x,M=(u-x)/y;return(o+M)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const u=this.getPoint(o),d=this.getPoint(l),h=t||(u.isVector2?new ot:new Z);return h.copy(d).sub(u).normalize(),h}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){const r=new Z,o=[],l=[],u=[],d=new Z,h=new jt;for(let M=0;M<=e;M++){const E=M/e;o[M]=this.getTangentAt(E,new Z)}l[0]=new Z,u[0]=new Z;let p=Number.MAX_VALUE;const x=Math.abs(o[0].x),_=Math.abs(o[0].y),y=Math.abs(o[0].z);x<=p&&(p=x,r.set(1,0,0)),_<=p&&(p=_,r.set(0,1,0)),y<=p&&r.set(0,0,1),d.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],d),u[0].crossVectors(o[0],l[0]);for(let M=1;M<=e;M++){if(l[M]=l[M-1].clone(),u[M]=u[M-1].clone(),d.crossVectors(o[M-1],o[M]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(pn(o[M-1].dot(o[M]),-1,1));l[M].applyMatrix4(h.makeRotationAxis(d,E))}u[M].crossVectors(o[M],l[M])}if(t===!0){let M=Math.acos(pn(l[0].dot(l[e]),-1,1));M/=e,o[0].dot(d.crossVectors(l[0],l[e]))>0&&(M=-M);for(let E=1;E<=e;E++)l[E].applyMatrix4(h.makeRotationAxis(o[E],M*E)),u[E].crossVectors(o[E],l[E])}return{tangents:o,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class B0 extends tr{constructor(e=0,t=0,r=1,o=1,l=0,u=Math.PI*2,d=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=d,this.aRotation=h}getPoint(e,t=new ot){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(u?l=0:l=o),this.aClockwise===!0&&!u&&(l===o?l=-o:l=l-o);const d=this.aStartAngle+e*l;let h=this.aX+this.xRadius*Math.cos(d),p=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const x=Math.cos(this.aRotation),_=Math.sin(this.aRotation),y=h-this.aX,M=p-this.aY;h=y*x-M*_+this.aX,p=y*_+M*x+this.aY}return r.set(h,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ME extends B0{constructor(e,t,r,o,l,u){super(e,t,r,r,o,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function mf(){let s=0,e=0,t=0,r=0;function o(l,u,d,h){s=l,e=d,t=-3*l+3*u-2*d-h,r=2*l-2*u+d+h}return{initCatmullRom:function(l,u,d,h,p){o(u,d,p*(d-l),p*(h-u))},initNonuniformCatmullRom:function(l,u,d,h,p,x,_){let y=(u-l)/p-(d-l)/(p+x)+(d-u)/x,M=(d-u)/x-(h-u)/(x+_)+(h-d)/_;y*=x,M*=x,o(u,d,y,M)},calc:function(l){const u=l*l,d=u*l;return s+e*l+t*u+r*d}}}const Il=new Z,ud=new mf,dd=new mf,fd=new mf;class V0 extends tr{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new Z){const r=t,o=this.points,l=o.length,u=(l-(this.closed?0:1))*e;let d=Math.floor(u),h=u-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/l)+1)*l:h===0&&d===l-1&&(d=l-2,h=1);let p,x;this.closed||d>0?p=o[(d-1)%l]:(Il.subVectors(o[0],o[1]).add(o[0]),p=Il);const _=o[d%l],y=o[(d+1)%l];if(this.closed||d+2<l?x=o[(d+2)%l]:(Il.subVectors(o[l-1],o[l-2]).add(o[l-1]),x=Il),this.curveType==="centripetal"||this.curveType==="chordal"){const M=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(_),M),b=Math.pow(_.distanceToSquared(y),M),S=Math.pow(y.distanceToSquared(x),M);b<1e-4&&(b=1),E<1e-4&&(E=b),S<1e-4&&(S=b),ud.initNonuniformCatmullRom(p.x,_.x,y.x,x.x,E,b,S),dd.initNonuniformCatmullRom(p.y,_.y,y.y,x.y,E,b,S),fd.initNonuniformCatmullRom(p.z,_.z,y.z,x.z,E,b,S)}else this.curveType==="catmullrom"&&(ud.initCatmullRom(p.x,_.x,y.x,x.x,this.tension),dd.initCatmullRom(p.y,_.y,y.y,x.y,this.tension),fd.initCatmullRom(p.z,_.z,y.z,x.z,this.tension));return r.set(ud.calc(h),dd.calc(h),fd.calc(h)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new Z().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function $m(s,e,t,r,o){const l=(r-e)*.5,u=(o-t)*.5,d=s*s,h=s*d;return(2*t-2*r+l+u)*h+(-3*t+3*r-2*l-u)*d+l*s+t}function wE(s,e){const t=1-s;return t*t*e}function EE(s,e){return 2*(1-s)*s*e}function TE(s,e){return s*s*e}function Qa(s,e,t,r){return wE(s,e)+EE(s,t)+TE(s,r)}function bE(s,e){const t=1-s;return t*t*t*e}function AE(s,e){const t=1-s;return 3*t*t*s*e}function CE(s,e){return 3*(1-s)*s*s*e}function RE(s,e){return s*s*s*e}function eo(s,e,t,r,o){return bE(s,e)+AE(s,t)+CE(s,r)+RE(s,o)}class NE extends tr{constructor(e=new ot,t=new ot,r=new ot,o=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new ot){const r=t,o=this.v0,l=this.v1,u=this.v2,d=this.v3;return r.set(eo(e,o.x,l.x,u.x,d.x),eo(e,o.y,l.y,u.y,d.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class PE extends tr{constructor(e=new Z,t=new Z,r=new Z,o=new Z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new Z){const r=t,o=this.v0,l=this.v1,u=this.v2,d=this.v3;return r.set(eo(e,o.x,l.x,u.x,d.x),eo(e,o.y,l.y,u.y,d.y),eo(e,o.z,l.z,u.z,d.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class LE extends tr{constructor(e=new ot,t=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ot){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ot){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class DE extends tr{constructor(e=new Z,t=new Z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Z){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class IE extends tr{constructor(e=new ot,t=new ot,r=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new ot){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(Qa(e,o.x,l.x,u.x),Qa(e,o.y,l.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class H0 extends tr{constructor(e=new Z,t=new Z,r=new Z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Z){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(Qa(e,o.x,l.x,u.x),Qa(e,o.y,l.y,u.y),Qa(e,o.z,l.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class UE extends tr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ot){const r=t,o=this.points,l=(o.length-1)*e,u=Math.floor(l),d=l-u,h=o[u===0?u:u-1],p=o[u],x=o[u>o.length-2?o.length-1:u+1],_=o[u>o.length-3?o.length-1:u+2];return r.set($m(d,h.x,p.x,x.x,_.x),$m(d,h.y,p.y,x.y,_.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new ot().fromArray(o))}return this}}var kE=Object.freeze({__proto__:null,ArcCurve:ME,CatmullRomCurve3:V0,CubicBezierCurve:NE,CubicBezierCurve3:PE,EllipseCurve:B0,LineCurve:LE,LineCurve3:DE,QuadraticBezierCurve:IE,QuadraticBezierCurve3:H0,SplineCurve:UE});class ls extends ri{constructor(e=1,t=32,r=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:r,thetaLength:o},t=Math.max(3,t);const l=[],u=[],d=[],h=[],p=new Z,x=new ot;u.push(0,0,0),d.push(0,0,1),h.push(.5,.5);for(let _=0,y=3;_<=t;_++,y+=3){const M=r+_/t*o;p.x=e*Math.cos(M),p.y=e*Math.sin(M),u.push(p.x,p.y,p.z),d.push(0,0,1),x.x=(u[y]/e+1)/2,x.y=(u[y+1]/e+1)/2,h.push(x.x,x.y)}for(let _=1;_<=t;_++)l.push(_,_+1,0);this.setIndex(l),this.setAttribute("position",new qt(u,3)),this.setAttribute("normal",new qt(d,3)),this.setAttribute("uv",new qt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ls(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Wn extends ri{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,d=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:d,thetaLength:h};const p=this;o=Math.floor(o),l=Math.floor(l);const x=[],_=[],y=[],M=[];let E=0;const b=[],S=r/2;let v=0;U(),u===!1&&(e>0&&L(!0),t>0&&L(!1)),this.setIndex(x),this.setAttribute("position",new qt(_,3)),this.setAttribute("normal",new qt(y,3)),this.setAttribute("uv",new qt(M,2));function U(){const C=new Z,$=new Z;let F=0;const O=(t-e)/r;for(let j=0;j<=l;j++){const P=[],N=j/l,V=N*(t-e)+e;for(let le=0;le<=o;le++){const Q=le/o,de=Q*h+d,pe=Math.sin(de),ce=Math.cos(de);$.x=V*pe,$.y=-N*r+S,$.z=V*ce,_.push($.x,$.y,$.z),C.set(pe,O,ce).normalize(),y.push(C.x,C.y,C.z),M.push(Q,1-N),P.push(E++)}b.push(P)}for(let j=0;j<o;j++)for(let P=0;P<l;P++){const N=b[P][j],V=b[P+1][j],le=b[P+1][j+1],Q=b[P][j+1];(e>0||P!==0)&&(x.push(N,V,Q),F+=3),(t>0||P!==l-1)&&(x.push(V,le,Q),F+=3)}p.addGroup(v,F,0),v+=F}function L(C){const $=E,F=new ot,O=new Z;let j=0;const P=C===!0?e:t,N=C===!0?1:-1;for(let le=1;le<=o;le++)_.push(0,S*N,0),y.push(0,N,0),M.push(.5,.5),E++;const V=E;for(let le=0;le<=o;le++){const de=le/o*h+d,pe=Math.cos(de),ce=Math.sin(de);O.x=P*ce,O.y=S*N,O.z=P*pe,_.push(O.x,O.y,O.z),y.push(0,N,0),F.x=pe*.5+.5,F.y=ce*.5*N+.5,M.push(F.x,F.y),E++}for(let le=0;le<o;le++){const Q=$+le,de=V+le;C===!0?x.push(de,de+1,Q):x.push(de+1,de,Q),j+=3}p.addGroup(v,j,C===!0?1:2),v+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xi extends ri{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(u+d,Math.PI);let p=0;const x=[],_=new Z,y=new Z,M=[],E=[],b=[],S=[];for(let v=0;v<=r;v++){const U=[],L=v/r;let C=0;v===0&&u===0?C=.5/t:v===r&&h===Math.PI&&(C=-.5/t);for(let $=0;$<=t;$++){const F=$/t;_.x=-e*Math.cos(o+F*l)*Math.sin(u+L*d),_.y=e*Math.cos(u+L*d),_.z=e*Math.sin(o+F*l)*Math.sin(u+L*d),E.push(_.x,_.y,_.z),y.copy(_).normalize(),b.push(y.x,y.y,y.z),S.push(F+C,1-L),U.push(p++)}x.push(U)}for(let v=0;v<r;v++)for(let U=0;U<t;U++){const L=x[v][U+1],C=x[v][U],$=x[v+1][U],F=x[v+1][U+1];(v!==0||u>0)&&M.push(L,C,F),(v!==r-1||h<Math.PI)&&M.push(C,$,F)}this.setIndex(M),this.setAttribute("position",new qt(E,3)),this.setAttribute("normal",new qt(b,3)),this.setAttribute("uv",new qt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class jl extends ri{constructor(e=1,t=.4,r=12,o=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:l},r=Math.floor(r),o=Math.floor(o);const u=[],d=[],h=[],p=[],x=new Z,_=new Z,y=new Z;for(let M=0;M<=r;M++)for(let E=0;E<=o;E++){const b=E/o*l,S=M/r*Math.PI*2;_.x=(e+t*Math.cos(S))*Math.cos(b),_.y=(e+t*Math.cos(S))*Math.sin(b),_.z=t*Math.sin(S),d.push(_.x,_.y,_.z),x.x=e*Math.cos(b),x.y=e*Math.sin(b),y.subVectors(_,x).normalize(),h.push(y.x,y.y,y.z),p.push(E/o),p.push(M/r)}for(let M=1;M<=r;M++)for(let E=1;E<=o;E++){const b=(o+1)*M+E-1,S=(o+1)*(M-1)+E-1,v=(o+1)*(M-1)+E,U=(o+1)*M+E;u.push(b,S,U),u.push(S,v,U)}this.setIndex(u),this.setAttribute("position",new qt(d,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class gf extends ri{constructor(e=new H0(new Z(-1,-1,0),new Z(-1,1,0),new Z(1,1,0)),t=64,r=1,o=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:o,closed:l};const u=e.computeFrenetFrames(t,l);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const d=new Z,h=new Z,p=new ot;let x=new Z;const _=[],y=[],M=[],E=[];b(),this.setIndex(E),this.setAttribute("position",new qt(_,3)),this.setAttribute("normal",new qt(y,3)),this.setAttribute("uv",new qt(M,2));function b(){for(let L=0;L<t;L++)S(L);S(l===!1?t:0),U(),v()}function S(L){x=e.getPointAt(L/t,x);const C=u.normals[L],$=u.binormals[L];for(let F=0;F<=o;F++){const O=F/o*Math.PI*2,j=Math.sin(O),P=-Math.cos(O);h.x=P*C.x+j*$.x,h.y=P*C.y+j*$.y,h.z=P*C.z+j*$.z,h.normalize(),y.push(h.x,h.y,h.z),d.x=x.x+r*h.x,d.y=x.y+r*h.y,d.z=x.z+r*h.z,_.push(d.x,d.y,d.z)}}function v(){for(let L=1;L<=t;L++)for(let C=1;C<=o;C++){const $=(o+1)*(L-1)+(C-1),F=(o+1)*L+(C-1),O=(o+1)*L+C,j=(o+1)*(L-1)+C;E.push($,F,j),E.push(F,O,j)}}function U(){for(let L=0;L<=t;L++)for(let C=0;C<=o;C++)p.x=L/t,p.y=C/o,M.push(p.x,p.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new gf(new kE[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Ci extends co{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=S0,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class G0 extends Mn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const hd=new jt,Km=new Z,Zm=new Z;class FE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hf,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Km.setFromMatrixPosition(e.matrixWorld),t.position.copy(Km),Zm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zm),t.updateMatrixWorld(),hd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hd),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(hd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class OE extends FE{constructor(){super(new I0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pd extends G0{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new OE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class zE extends G0{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class BE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Jm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Jm();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Jm(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rf);function VE({state:s="idle",className:e="",onDirectStateChange:t=null}){const r=dt.useRef(null),[o,l]=dt.useState(s),[u,d]=dt.useState(!0),h=dt.useRef(s);return dt.useEffect(()=>{l(s),h.current=s},[s]),dt.useCallback(p=>{l(p),h.current=p,t&&t(p)},[t]),dt.useEffect(()=>{const p=r.current;if(!p)return;try{const G=document.createElement("canvas");if(!(G.getContext("webgl")||G.getContext("experimental-webgl"))){d(!1);return}}catch{d(!1);return}let x;const _=p.clientWidth||420,y=p.clientHeight||460,M=new SE,E=new ii(38,_/y,.1,100);E.position.set(0,.15,3.4);const b=new yE({antialias:!0,alpha:!0,powerPreference:"high-performance"});b.setSize(_,y),b.setPixelRatio(Math.min(window.devicePixelRatio,2)),b.shadowMap.enabled=!0,b.shadowMap.type=o0,b.toneMapping=c0,b.toneMappingExposure=1.05,p.appendChild(b.domElement),b.domElement.className="care-canvas";const S=new zE(16777215,.85);M.add(S);const v=new pd(16775149,1.2);v.position.set(2.5,3.5,3),v.castShadow=!0,M.add(v);const U=new pd(3718648,1.1);U.position.set(-2.5,2,-2),M.add(U);const L=new pd(14742270,.6);L.position.set(0,-1,2),M.add(L);const C=new Ci({color:16502965,roughness:.55,metalness:.05}),$=new Rr({color:16020150,transparent:!0,opacity:.28}),F=new Ci({color:4006676,roughness:.6,metalness:.1}),O=new Ci({color:165063,roughness:.45,metalness:.05}),j=new Ci({color:16317180,roughness:.35,metalness:.02}),P=new Ci({color:13751771,roughness:.2,metalness:.85}),N=new Ci({color:1976635,roughness:.5,metalness:.1}),V=new Rr({color:16777215}),le=new Ci({color:165063,roughness:.3}),Q=new Rr({color:988970}),de=new Rr({color:16777215}),pe=new Rr({color:14362487}),ce=new hn;ce.position.set(0,-.7,0),M.add(ce);const ue=new hn;ce.add(ue);const H=new Wn(.38,.46,.95,24),he=new St(H,j);he.position.y=.48,ue.add(he);const I=new Wn(.24,.28,.5,16),w=new St(I,O);w.position.set(0,.68,.16),ue.add(w);const W=new Dr(.12,.16,.02),xe=new Ci({color:165063,roughness:.2}),X=new St(W,xe);X.position.set(-.22,.62,.38),X.rotation.z=-.05,ue.add(X);const ee=new xi(.015,8,8),fe=new Rr({color:1096065}),re=new St(ee,fe);re.position.set(-.25,.67,.4),ue.add(re);const ge=new hn;ue.add(ge);const be=new V0([new Z(-.22,.85,.05),new Z(-.2,.65,.35),new Z(0,.42,.42),new Z(.2,.65,.35),new Z(.22,.85,.05)]),Le=new gf(be,32,.018,8,!1),Je=new St(Le,N);ge.add(Je);const $e=new Wn(.07,.07,.03,16),lt=new St($e,P);lt.rotation.x=Math.PI/2,lt.position.set(0,.42,.44),ge.add(lt);const z=new hn;z.position.set(0,.95,0),ce.add(z);const Ct=new Wn(.12,.14,.22,16),nt=new St(Ct,C);nt.position.y=.08,z.add(nt);const Oe=new hn;Oe.position.set(0,.2,0),z.add(Oe);const We=new xi(.36,32,32);We.scale(1,1.08,1);const Mt=new St(We,C);Oe.add(Mt);const ke=new St(new ls(.065,16),$);ke.position.set(-.2,-.05,.34),ke.rotation.y=-.3,Oe.add(ke);const D=new St(new ls(.065,16),$);D.position.set(.2,-.05,.34),D.rotation.y=.3,Oe.add(D);const A=new xi(.035,12,12),te=new St(A,C);te.position.set(0,-.02,.38),Oe.add(te);const _e=new xi(.39,32,32),Se=new St(_e,F);Se.position.set(0,.06,-.04),Oe.add(Se);const me=new Wn(.08,.02,.45,12),Ge=new St(me,F);Ge.position.set(-.35,-.06,.16),Ge.rotation.z=-.2,Oe.add(Ge);const Pe=new Wn(.08,.02,.45,12),Ue=new St(Pe,F);Ue.position.set(.35,-.06,.16),Ue.rotation.z=.2,Oe.add(Ue);const ft=new xi(.19,20,20),Te=new St(ft,F);Te.position.set(0,.28,-.35),Oe.add(Te);const Be=new jl(.18,.025,12,24),et=new Ci({color:165063,roughness:.3}),it=new St(Be,et);it.position.set(0,.26,-.32),it.rotation.x=Math.PI/3,Oe.add(it);const Ve=new hn;Oe.add(Ve);function xt(G){const ye=G?1:-1,Me=new hn;Me.position.set(ye*.14,.04,.33);const Xe=new St(new xi(.075,16,16),V);Xe.scale.set(1,.9,.5),Me.add(Xe);const Fe=new hn;Fe.position.set(0,0,.045),Me.add(Fe);const tt=new St(new ls(.042,16),le);Fe.add(tt);const rt=new St(new ls(.022,16),Q);rt.position.z=.001,Fe.add(rt);const He=new St(new ls(.012,12),de);He.position.set(.015,.015,.002),Fe.add(He);const _t=new xi(.078,16,16,0,Math.PI*2,0,Math.PI/2),wt=new St(_t,C);wt.rotation.x=-Math.PI/2,wt.scale.set(1,.01,1),Me.add(wt);const ht=new Wn(.016,.01,.11,8),Kt=new St(ht,F);return Kt.rotation.z=Math.PI/2+ye*.1,Kt.position.set(0,.1,.02),Me.add(Kt),{eyeRig:Me,pupilGroup:Fe,lid:wt,brow:Kt}}const Qe=xt(!1),mt=xt(!0);Ve.add(Qe.eyeRig),Ve.add(mt.eyeRig);const q=new jl(.07,.016,8,16,Math.PI*.85),Ne=new St(q,pe);Ne.position.set(0,-.15,.34),Ne.rotation.x=.2,Ne.rotation.z=Math.PI*1.07,Oe.add(Ne);const ie=new hn;ie.position.set(.42,.78,.05),ue.add(ie);const ve=new Wn(.09,.08,.42,16),De=new St(ve,j);De.position.y=-.2,ie.add(De);const Ce=new hn;Ce.position.set(0,-.38,0),ie.add(Ce);const ut=new Wn(.075,.065,.38,16),It=new St(ut,C);It.position.y=-.18,Ce.add(It);const Wt=new xi(.07,12,12);Wt.scale(1,1.2,.7);const Tt=new St(Wt,C);Tt.position.set(0,-.36,.02),Ce.add(Tt);const $t=new hn;$t.position.set(-.42,.78,.05),ue.add($t);const un=new Wn(.09,.08,.42,16),Di=new St(un,j);Di.position.y=-.2,$t.add(Di);const Rn=new hn;Rn.position.set(0,-.38,0),$t.add(Rn);const si=new Wn(.075,.065,.38,16),Xn=new St(si,C);Xn.position.y=-.18,Rn.add(Xn);const Si=new xi(.07,12,12);Si.scale(1,1.2,.7);const Mi=new St(Si,C);Mi.position.set(0,-.36,.02),Rn.add(Mi),$t.rotation.x=.3,$t.rotation.z=.15,Rn.rotation.x=-.4;const wn=new hn;wn.position.set(.65,.65,.3),ce.add(wn);const Fr=new Ci({color:959977,emissive:165063,emissiveIntensity:.6,transparent:!0,opacity:.85,roughness:.2}),nr=new St(new Dr(.04,.14,.03),Fr),hs=new St(new Dr(.14,.04,.03),Fr);wn.add(nr),wn.add(hs);const Bt={x:0,y:0,targetX:0,targetY:0},Or=G=>{const ye=G.clientX/window.innerWidth*2-1,Me=-(G.clientY/window.innerHeight)*2+1;Bt.targetX=ye,Bt.targetY=Me};window.addEventListener("mousemove",Or,{passive:!0});let zr=2,ir=!1,R=0;const K=new BE,se=()=>{x=requestAnimationFrame(se);const G=K.getElapsedTime(),ye=h.current;Bt.x=Dt.lerp(Bt.x,Bt.targetX,.05),Bt.y=Dt.lerp(Bt.y,Bt.targetY,.05);const Me=Math.sin(G*2.2);ue.scale.set(1+Me*.012,1+Me*.018,1+Me*.012),ce.position.y=-.7+Math.sin(G*1.5)*.02,wn.position.y=.65+Math.sin(G*2.5)*.04,wn.rotation.y=G*.8;const Xe=Bt.x*.45,Fe=-Bt.y*.3;let tt=0,rt=0,He=0;ye==="listening"||ye==="typing"?(tt=.08,He=.06):ye==="hover"?(He=-.05,tt=.04):ye==="pointing"&&(rt=-.25),Oe.rotation.y=Dt.lerp(Oe.rotation.y,Xe+rt,.06),Oe.rotation.x=Dt.lerp(Oe.rotation.x,Fe+tt,.06),Oe.rotation.z=Dt.lerp(Oe.rotation.z,Bt.x*.1+He,.06);const _t=Dt.clamp(Bt.x*.02,-.015,.015),wt=Dt.clamp(Bt.y*.015,-.012,.012);if(Qe.pupilGroup.position.x=_t,Qe.pupilGroup.position.y=wt,mt.pupilGroup.position.x=_t,mt.pupilGroup.position.y=wt,G>zr&&!ir&&(ir=!0,R=0),ir){R+=.18;const ht=Math.sin(R*Math.PI);Qe.lid.scale.y=Math.max(.01,ht),mt.lid.scale.y=Math.max(.01,ht),R>=1&&(ir=!1,Qe.lid.scale.y=.01,mt.lid.scale.y=.01,zr=G+3+Math.random()*3.5)}if(ye==="listening"||ye==="typing"?(Qe.brow.position.y=Dt.lerp(Qe.brow.position.y,.12,.1),mt.brow.position.y=Dt.lerp(mt.brow.position.y,.12,.1)):ye==="hover"?(Qe.brow.position.y=Dt.lerp(Qe.brow.position.y,.13,.1),mt.brow.position.y=Dt.lerp(mt.brow.position.y,.13,.1)):(Qe.brow.position.y=Dt.lerp(Qe.brow.position.y,.1,.08),mt.brow.position.y=Dt.lerp(mt.brow.position.y,.1,.08)),ye==="hover"){const ht=Math.sin(G*8)*.25;ie.rotation.x=Dt.lerp(ie.rotation.x,1.3,.1),ie.rotation.z=Dt.lerp(ie.rotation.z,-.65,.1),Ce.rotation.x=Dt.lerp(Ce.rotation.x,-1.2,.1),Ce.rotation.z=Dt.lerp(Ce.rotation.z,ht,.2),Ne.scale.set(1.15,1.25,1)}else ye==="listening"||ye==="typing"?(ie.rotation.x=Dt.lerp(ie.rotation.x,.75,.08),ie.rotation.z=Dt.lerp(ie.rotation.z,-.3,.08),Ce.rotation.x=Dt.lerp(Ce.rotation.x,-.9,.08),Ce.rotation.z=Dt.lerp(Ce.rotation.z,.4,.08),Ne.scale.set(1,1,1)):ye==="pointing"?(ie.rotation.x=Dt.lerp(ie.rotation.x,1.1,.08),ie.rotation.z=Dt.lerp(ie.rotation.z,.2,.08),Ce.rotation.x=Dt.lerp(Ce.rotation.x,-.3,.08),Ce.rotation.z=Dt.lerp(Ce.rotation.z,.5,.08)):(ie.rotation.x=Dt.lerp(ie.rotation.x,.15,.05),ie.rotation.z=Dt.lerp(ie.rotation.z,-.12,.05),Ce.rotation.x=Dt.lerp(Ce.rotation.x,-.15,.05),Ce.rotation.z=Dt.lerp(Ce.rotation.z,0,.05),Ne.scale.set(1,1,1));b.render(M,E)};se();const ae=()=>{if(!p)return;const G=p.clientWidth||420,ye=p.clientHeight||460;E.aspect=G/ye,E.updateProjectionMatrix(),b.setSize(G,ye)};return window.addEventListener("resize",ae),()=>{cancelAnimationFrame(x),window.removeEventListener("mousemove",Or),window.removeEventListener("resize",ae),b.domElement&&p.contains(b.domElement)&&p.removeChild(b.domElement),b.dispose()}},[]),g.jsx("div",{className:`care-3d-wrapper ${e}`,children:u?g.jsx("div",{ref:r,className:"care-canvas-container"}):g.jsxs("div",{className:"care-fallback bg-sky-50/70 rounded-3xl border border-sky-100",children:[g.jsx("div",{className:"w-24 h-24 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 mb-4 shadow-soft",children:g.jsx(Vl,{className:"w-12 h-12"})}),g.jsx("h3",{className:"text-xl font-bold text-slate-800 mb-1",children:"Meet Care"}),g.jsx("p",{className:"text-sm text-slate-500 max-w-xs",children:"Your friendly healthcare guide. Tell Care what you are experiencing and get directed to the right specialist."})]})})}function HE({careState:s,setCareState:e}){const t=()=>{const o=document.getElementById("healthy-habits");o&&o.scrollIntoView({behavior:"smooth"})},r=()=>{const o=document.getElementById("careconnect-tools");o&&o.scrollIntoView({behavior:"smooth"})};return g.jsxs("section",{className:"hero-container relative pt-12 pb-16 md:pt-20 md:pb-28 lg:pt-24 lg:pb-32 overflow-hidden",children:[g.jsx("div",{className:"hero-glow-blob bg-teal-50/70 top-[-60px] left-[-80px]","aria-hidden":"true"}),g.jsx("div",{className:"hero-glow-blob bg-sky-50/60 top-[120px] right-[-60px]","aria-hidden":"true"}),g.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:g.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center",children:[g.jsxs("div",{className:"lg:col-span-7 space-y-6 text-center lg:text-left",children:[g.jsx("span",{className:"text-xs font-bold uppercase tracking-widest text-teal-800/80 inline-block",children:"Daily Wellness & Clinical Guidance"}),g.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]",children:["Your health starts with the"," ",g.jsx("span",{className:"text-teal-700 font-extrabold",children:"little things."})]}),g.jsx("p",{className:"text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0",children:"Small daily choices can make a big difference. Learn how to take better care of yourself and know when it's time to seek professional help."}),g.jsxs("div",{className:"pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4",children:[g.jsxs("button",{onClick:t,className:"w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-bold text-sm bg-teal-700 hover:bg-teal-800 text-white shadow-soft transition-all duration-200 cursor-pointer active:scale-95",children:[g.jsx(r0,{className:"w-4 h-4 text-teal-200"}),"Explore your health"]}),g.jsxs("button",{onClick:r,className:"w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-4 rounded-2xl font-semibold text-sm text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 transition-colors border border-slate-200/80 cursor-pointer",children:["Find a doctor",g.jsx(kr,{className:"w-4 h-4 text-slate-400"})]})]})]}),g.jsx("div",{className:"lg:col-span-5 flex items-center justify-center relative",children:g.jsx("div",{className:"w-full max-w-[380px] sm:max-w-[420px] aspect-square relative flex items-center justify-center",children:g.jsx(VE,{state:s,className:"w-full h-full"})})})]})})]})}const $i={GENERAL_MEDICINE:{id:"general-medicine",name:"General Medicine",tagline:"Primary care, fever, fatigue, routine wellness, and initial evaluation",badgeColor:"blue",icon:"Stethoscope"},NEUROLOGY:{id:"neurology",name:"Neurology",tagline:"Headaches, migraines, dizziness, nerve pain, and cognitive symptoms",badgeColor:"indigo",icon:"Brain"},ORTHOPEDICS:{id:"orthopedics",name:"Orthopedics",tagline:"Joint pain, backache, spine stiffness, fractures, and sports injuries",badgeColor:"amber",icon:"Bone"},DERMATOLOGY:{id:"dermatology",name:"Dermatology",tagline:"Skin rashes, allergies, acne, hair loss, and epidermal concerns",badgeColor:"rose",icon:"Sparkles"},CARDIOLOGY:{id:"cardiology",name:"Cardiology",tagline:"Heart health, chest discomfort, palpitations, and blood pressure",badgeColor:"red",icon:"HeartPulse"},ENT:{id:"ent",name:"ENT (Ear, Nose & Throat)",tagline:"Sinus congestion, sore throat, earaches, tinnitus, and vertigo",badgeColor:"teal",icon:"Headphones"},GASTROENTEROLOGY:{id:"gastroenterology",name:"Gastroenterology",tagline:"Abdominal pain, indigestion, acid reflux, stomach issues",badgeColor:"emerald",icon:"Activity"},PEDIATRICS:{id:"pediatrics",name:"Pediatrics",tagline:"Children & adolescent health, growth, vaccination, pediatric care",badgeColor:"cyan",icon:"Smile"}},GE=[{regex:/(headache|head ache|migraine|throbbing head|dizziness|vertigo|tingling|numbness|memory|seizure)/i,specialty:$i.NEUROLOGY,reason:"Frequent or persistent headaches, head pressure, or dizziness are best evaluated by a neurologist or a general physician to understand neurological factors and provide safe relief.",careMessage:"I hear you. Head pain can make it really difficult to focus on your day. A Neurologist or General Physician can examine the underlying triggers and help you get relief."},{regex:/(back pain|lower back|spine|knee|joint|shoulder|neck pain|stiffness|bone|fracture|sprain|swelling in leg|walking difficulty)/i,specialty:$i.ORTHOPEDICS,reason:"Joint stiffness, back pain, and musculoskeletal discomfort are the core focus of an Orthopedic specialist or physical health consultant.",careMessage:"Back and joint discomfort can really wear you down. An Orthopedic specialist is the ideal place to start for targeted examination and joint-friendly recovery."},{regex:/(rash|itch|red spot|skin|acne|eczema|psoriasis|allergy|hives|hair fall|scalp)/i,specialty:$i.DERMATOLOGY,reason:"Skin irritations, unexplained rashes, and allergic dermatological conditions are evaluated and managed by a Dermatologist.",careMessage:"Skin symptoms can be both uncomfortable and puzzling. A Dermatologist can take a close look at the pattern and recommend soothing, tailored treatment."},{regex:/(chest pain|chest tightness|heart|palpitation|shortness of breath|breathless|high bp|blood pressure)/i,specialty:$i.CARDIOLOGY,reason:"Chest tightness, rapid heartbeat, or unexplained breathlessness warrant careful evaluation by a Cardiologist or immediate medical assessment.",careMessage:"Your heart health is top priority. A Cardiologist can review your symptoms thoroughly to ensure everything is functioning safely and soundly."},{regex:/(throat|sore throat|ear|earache|sinus|runny nose|nasal|tinnitus|hearing|swallowing|tonsil)/i,specialty:$i.ENT,reason:"Persistent throat irritation, ear discomfort, or sinus congestion fall directly under the care of an ENT (Ear, Nose & Throat) specialist.",careMessage:"Ear, nose, and throat symptoms can be very nagging. An ENT specialist will look right at the passages and help clear up the discomfort."},{regex:/(stomach|abdomen|belly|digestion|indigestion|acid|acidity|reflux|bloating|nausea|vomit|cramps|constipation|diarrhea)/i,specialty:$i.GASTROENTEROLOGY,reason:"Abdominal pain, recurring acidity, or digestive issues are best evaluated by a Gastroenterologist or Internal Medicine physician.",careMessage:"Digestive troubles take a real toll on your daily comfort. A Gastroenterologist can help identify gentle ways to settle your system."},{regex:/(baby|infant|toddler|child|kid|pediatric|growth|vaccine)/i,specialty:$i.PEDIATRICS,reason:"Symptoms affecting infants, children, or adolescents are best managed by a board-certified Pediatrician.",careMessage:"Taking care of little ones requires gentle, specialized attention. A Pediatrician will ensure your child receives the most appropriate and comforting care."}];async function jE(s){await new Promise(o=>setTimeout(o,650));const e=(s||"").trim();if(!e)return{success:!1,message:"Please describe what you are experiencing so Care can guide you."};const t=/(severe chest pain|cannot breathe|unconscious|heavy bleeding|slurred speech|facial droop|stroke|heart attack)/i.test(e);let r=GE.find(o=>o.regex.test(e));return r||(r={specialty:$i.GENERAL_MEDICINE,reason:"A General Medicine specialist or Internal Physician is the most versatile and reassuring starting point to evaluate your general symptoms and coordinate further tests if required.",careMessage:"I understand. When symptoms aren't straightforward, a General Medicine physician is the best starting place for a comprehensive health check."}),{success:!0,userInput:e,isEmergency:t,specialty:r.specialty,careGreeting:"I understand. Let me help you find the right place to start.",careMessage:r.careMessage,guidanceReason:r.reason,disclaimer:"Care provides guidance to help you find the right healthcare service. It does not diagnose medical conditions or replace professional medical advice.",questionsForDoctor:["How long have you noticed these symptoms happening?","Does anything specific trigger or relieve them?","Are you taking any ongoing medications or vitamins?"]}}const WE=["I've been having headaches for the last few days...","Persistent lower back pain and stiffness after sitting...","Red itchy rash on my forearm since yesterday...","Chest tightness and mild palpitations when stressed...","Stomach cramps and acid reflux after meals...","Sore throat, runny nose and mild fever..."];function XE({careState:s,setCareState:e,onRecommendationReceived:t,onClearRecommendation:r}){const[o,l]=dt.useState(""),[u,d]=dt.useState(!1),[h,p]=dt.useState(""),x=()=>{e("listening")},_=()=>{!o.trim()&&!u&&e("idle")},y=b=>{l(b.target.value),h&&p(""),b.target.value.length>0?e("typing"):e("listening")},M=b=>{l(b),p(""),e("typing")},E=async b=>{if(b&&b.preventDefault(),!o.trim()){p("Please describe your symptoms so Care can guide you.");return}d(!0),e("listening");try{const S=await jE(o);d(!1),e("pointing"),t(S),setTimeout(()=>{const v=document.getElementById("recommendation-section");v&&v.scrollIntoView({behavior:"smooth"})},100)}catch(S){console.error(S),d(!1),p("Care had trouble analyzing your input. Please try again."),e("idle")}};return g.jsx("section",{id:"symptom-section",className:"py-16 md:py-20 bg-gradient-to-b from-[#FAFCFF] via-white to-sky-50/40 relative",children:g.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[g.jsxs("div",{className:"text-center mb-10 space-y-3",children:[g.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200/60 text-sky-700 text-xs font-semibold",children:[g.jsx(Av,{className:"w-3.5 h-3.5 text-sky-600"}),"Conversational Triage"]}),g.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight",children:"What's bothering you?"}),g.jsx("p",{className:"text-base sm:text-lg text-slate-600 max-w-xl mx-auto",children:"Tell Care what you're experiencing. You don't need to use medical terms or know which department to choose."})]}),g.jsxs("div",{className:"symptom-card p-6 sm:p-8 relative",children:[g.jsxs("div",{className:"flex items-start gap-3.5 mb-5 pb-5 border-b border-slate-100",children:[g.jsx("div",{className:"w-10 h-10 rounded-full bg-gradient-to-tr from-sky-600 to-sky-400 flex items-center justify-center text-white font-bold text-sm shadow-soft flex-shrink-0",children:"Care"}),g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("span",{className:"font-bold text-slate-900 text-sm",children:"Care"}),g.jsx("span",{className:"text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-medium",children:"Listening"})]}),g.jsx("p",{className:"text-sm text-slate-600 mt-1 font-normal leading-relaxed",children:`"Hi, I'm Care. Tell me what you're experiencing. You don't need to know medical terminology—I'll guide you to the right place to start."`})]})]}),g.jsxs("form",{onSubmit:E,className:"space-y-4",children:[g.jsxs("div",{className:"relative",children:[g.jsx("label",{htmlFor:"symptom-textarea",className:"sr-only",children:"Describe your symptoms"}),g.jsx("textarea",{id:"symptom-textarea",rows:4,value:o,onChange:y,onFocus:x,onBlur:_,placeholder:"I've been having headaches for the last few days...",className:"w-full px-4 py-3.5 text-base sm:text-lg text-slate-800 placeholder-slate-400 rounded-xl bg-slate-50/50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 transition-all resize-none leading-relaxed"})]}),h&&g.jsxs("div",{className:"text-xs text-rose-600 font-medium flex items-center gap-1.5",children:[g.jsx(Vv,{className:"w-3.5 h-3.5"}),h]}),g.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4 pt-2",children:[g.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-500",children:[g.jsx(i0,{className:"w-4 h-4 text-sky-600 flex-shrink-0"}),g.jsx("span",{children:'Ordinary language is best. E.g., "stiff neck", "fever since Monday".'})]}),g.jsx("button",{type:"submit",disabled:u||!o.trim(),className:"w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-sky-600 hover:bg-sky-700 active:scale-95 text-white shadow-soft transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",children:u?g.jsxs(g.Fragment,{children:[g.jsx(s0,{className:"w-4 h-4 animate-spin"}),"Care is thinking..."]}):g.jsxs(g.Fragment,{children:["Help me find the right doctor",g.jsx(kr,{className:"w-4 h-4"})]})})]})]}),g.jsxs("div",{className:"mt-7 pt-5 border-t border-slate-100",children:[g.jsxs("p",{className:"text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5",children:[g.jsx(Xl,{className:"w-3.5 h-3.5 text-amber-500"}),"Or try one of these common examples:"]}),g.jsx("div",{className:"flex flex-wrap gap-2",children:WE.map((b,S)=>g.jsx("button",{type:"button",onClick:()=>M(b),className:"sample-chip",children:b},S))})]})]})]})})}function YE({recommendation:s,onViewDoctors:e}){if(!s||!s.success)return null;const{specialty:t,careGreeting:r,careMessage:o,guidanceReason:l,isEmergency:u,questionsForDoctor:d,disclaimer:h}=s,p=()=>{e&&e(t.id);const x=document.getElementById("find-doctor");x&&x.scrollIntoView({behavior:"smooth"})};return g.jsx("section",{id:"recommendation-section",className:"py-8 bg-sky-50/40",children:g.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:g.jsxs("div",{className:"recommendation-card p-6 sm:p-9 relative overflow-hidden",children:[g.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-sky-100/60 rounded-full blur-3xl pointer-events-none -z-0"}),u&&g.jsxs("div",{className:"mb-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3",children:[g.jsx(iv,{className:"w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5"}),g.jsxs("div",{className:"text-sm",children:[g.jsx("span",{className:"font-bold",children:"Urgent Medical Advisory:"})," If you are experiencing acute chest pain, severe shortness of breath, sudden weakness, or an emergency, please call 112 / 911 or head to the nearest Emergency Department immediately."]})]}),g.jsxs("div",{className:"flex items-start gap-3.5 mb-6 relative z-10",children:[g.jsx("div",{className:"w-10 h-10 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold text-sm shadow-soft flex-shrink-0",children:"Care"}),g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("span",{className:"font-bold text-slate-900 text-sm",children:"Care"}),g.jsx("span",{className:"text-xs px-2 py-0.5 rounded-md bg-sky-100 text-sky-800 font-semibold",children:"Recommendation"})]}),g.jsxs("p",{className:"text-sm text-slate-600 mt-1 italic font-medium",children:['"',r,'"']})]})]}),g.jsxs("div",{className:"bg-slate-50/80 rounded-2xl p-6 border border-slate-200/90 relative z-10 mb-6",children:[g.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-sky-700 block mb-1",children:"Based on what you've described"}),g.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2",children:[g.jsx("div",{children:g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("div",{className:"w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center",children:g.jsx(Vl,{className:"w-5 h-5"})}),g.jsxs("div",{children:[g.jsx("h3",{className:"text-2xl font-extrabold text-slate-900",children:t.name}),g.jsx("p",{className:"text-xs text-slate-500 font-medium",children:t.tagline})]})]})}),g.jsx("div",{className:"flex-shrink-0",children:g.jsxs("button",{onClick:p,className:"w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-sky-600 hover:bg-sky-700 active:scale-95 text-white shadow-soft transition-all cursor-pointer",children:["View available doctors",g.jsx(kr,{className:"w-4 h-4"})]})})]}),g.jsxs("div",{className:"mt-5 pt-4 border-t border-slate-200 text-sm text-slate-700 leading-relaxed",children:[g.jsxs("p",{className:"font-medium text-slate-800 mb-1",children:["A ",t.name," specialist may be a good place to start."]}),g.jsx("p",{className:"text-slate-600 text-sm",children:l})]}),d&&d.length>0&&g.jsxs("div",{className:"mt-4 pt-4 border-t border-slate-200",children:[g.jsxs("p",{className:"text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5",children:[g.jsx(i0,{className:"w-3.5 h-3.5 text-sky-600"}),"Helpful questions you might ask your doctor:"]}),g.jsx("ul",{className:"space-y-1 text-xs text-slate-600",children:d.map((x,_)=>g.jsxs("li",{className:"flex items-center gap-2",children:[g.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0"}),g.jsx("span",{children:x})]},_))})]})]}),g.jsxs("div",{className:"flex items-start gap-2.5 text-xs text-slate-500 bg-sky-50/50 p-3.5 rounded-xl border border-sky-100",children:[g.jsx(nf,{className:"w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5"}),g.jsx("p",{className:"leading-normal",children:h})]})]})})})}const j0=[{id:"doc-1",name:"Dr. Priya Sharma",gender:"female",title:"Senior Consultant Physician",specialtyId:"general-medicine",specialtyName:"General Medicine",qualification:"MBBS, MD (Internal Medicine)",experienceYears:12,consultationFee:500,languages:["English","Hindi"],rating:4.9,reviewCount:312,hospitalOrClinic:"CareConnect Community Health Center",consultationModes:["In-Person","Video Call"],nextAvailable:"Today, 10:30 AM",avatar:"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300",bio:"Focuses on holistic primary care, persistent seasonal viral fevers, fatigue workups, and chronic lifestyle guidance with a gentle, patient-first approach."},{id:"doc-2",name:"Dr. Rajesh Verma",gender:"male",title:"Consultant Neurologist",specialtyId:"neurology",specialtyName:"Neurology",qualification:"MBBS, MD, DM (Neurology)",experienceYears:15,consultationFee:800,languages:["English","Hindi"],rating:4.95,reviewCount:428,hospitalOrClinic:"Metro Neuro & Spine Center",consultationModes:["In-Person","Video Call"],nextAvailable:"Today, 11:30 AM",avatar:"https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300",bio:"Specializes in tension headaches, migraine management, vestibular dizziness, sleep disorders, and comprehensive neurological triage."},{id:"doc-3",name:"Dr. Ananya Iyer",gender:"female",title:"Orthopedic & Joint Specialist",specialtyId:"orthopedics",specialtyName:"Orthopedics",qualification:"MBBS, MS (Orthopedics), Fellowship Joint Care",experienceYears:10,consultationFee:700,languages:["English","Hindi","Tamil"],rating:4.88,reviewCount:265,hospitalOrClinic:"CareConnect Ortho & Rehab Clinic",consultationModes:["In-Person"],nextAvailable:"Today, 02:00 PM",avatar:"https://images.unsplash.com/photo-1594824813637-2950541e2638?auto=format&fit=crop&q=80&w=300",bio:"Dedicated to ergonomic lower back care, knee pain rehabilitation, sports sprains, and non-surgical mobility restoration."},{id:"doc-4",name:"Dr. Kabir Mehta",gender:"male",title:"Consultant Dermatologist",specialtyId:"dermatology",specialtyName:"Dermatology",qualification:"MBBS, MD (Dermatology, Venereology & Leprosy)",experienceYears:8,consultationFee:600,languages:["English","Hindi"],rating:4.85,reviewCount:190,hospitalOrClinic:"Aura Skin & Allergy Care",consultationModes:["In-Person","Video Call"],nextAvailable:"Tomorrow, 09:30 AM",avatar:"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300",bio:"Special interest in acute allergic reactions, contact dermatitis, adult acne, scalp treatments, and patient comfort."},{id:"doc-5",name:"Dr. Sunita Rao",gender:"female",title:"Senior Cardiologist",specialtyId:"cardiology",specialtyName:"Cardiology",qualification:"MBBS, MD (Medicine), DM (Cardiology)",experienceYears:18,consultationFee:950,languages:["English","Hindi","Kannada"],rating:4.97,reviewCount:512,hospitalOrClinic:"Heart & Vascular Institute",consultationModes:["In-Person","Video Call"],nextAvailable:"Today, 04:30 PM",avatar:"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300",bio:"Extensive background in preventive cardiology, hypertension control, arrhythmia evaluations, and gentle lifestyle cardiac guidance."},{id:"doc-6",name:"Dr. Arpit Saxena",gender:"male",title:"ENT & Head-Neck Surgeon",specialtyId:"ent",specialtyName:"ENT (Ear, Nose & Throat)",qualification:"MBBS, MS (ENT), DNB",experienceYears:11,consultationFee:550,languages:["English","Hindi"],rating:4.89,reviewCount:220,hospitalOrClinic:"Apex ENT & Sinus Clinic",consultationModes:["In-Person","Video Call"],nextAvailable:"Tomorrow, 10:00 AM",avatar:"https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300",bio:"Helps patients suffering from chronic allergic rhinitis, recurring throat infections, ear pressure imbalance, and sinus headaches."},{id:"doc-7",name:"Dr. Meera Nambiar",gender:"female",title:"Consultant Gastroenterologist",specialtyId:"gastroenterology",specialtyName:"Gastroenterology",qualification:"MBBS, MD, DNB (Gastroenterology)",experienceYears:13,consultationFee:750,languages:["English","Hindi","Malayalam"],rating:4.92,reviewCount:340,hospitalOrClinic:"Digestive Health Center",consultationModes:["In-Person","Video Call"],nextAvailable:"Today, 03:30 PM",avatar:"https://images.unsplash.com/photo-1594824813637-2950541e2638?auto=format&fit=crop&q=80&w=300",bio:"Warm, attentive specialist in acid reflux, IBS, microbiome health, recurring stomach discomfort, and therapeutic nutritional planning."},{id:"doc-8",name:"Dr. Rohan Deshmukh",gender:"male",title:"Senior Pediatrician",specialtyId:"pediatrics",specialtyName:"Pediatrics",qualification:"MBBS, MD (Pediatrics), FIAP",experienceYears:14,consultationFee:600,languages:["English","Hindi","Marathi"],rating:4.96,reviewCount:460,hospitalOrClinic:"Little Stars Pediatric Care",consultationModes:["In-Person","Video Call"],nextAvailable:"Today, 11:00 AM",avatar:"https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300",bio:"Gentle and cheerful approach to child fever, developmental milestones, adolescent wellness, and parental reassurance."}];function qE(s="",e="all",t="all"){let r=j0;e&&e!=="all"&&(r=r.filter(l=>l.specialtyId===e)),t&&t!=="all"&&(r=r.filter(l=>l.consultationModes.includes(t)));const o=s.trim().toLowerCase();return o&&(r=r.filter(l=>l.name.toLowerCase().includes(o)||l.specialtyName.toLowerCase().includes(o)||l.qualification.toLowerCase().includes(o)||l.bio.toLowerCase().includes(o))),r}function $E({doctor:s,isSelected:e,onSelectDoctor:t}){return g.jsxs("div",{className:`doctor-card p-5 sm:p-6 flex flex-col justify-between ${e?"ring-2 ring-sky-600 border-sky-600 bg-sky-50/20":""}`,children:[g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-start gap-4",children:[g.jsxs("div",{className:"relative flex-shrink-0",children:[g.jsx("img",{src:s.avatar,alt:s.name,className:"w-16 h-16 sm:w-18 sm:h-18 rounded-2xl object-cover border border-slate-100 shadow-sm",loading:"lazy"}),g.jsx("span",{className:"absolute -bottom-1 -right-1 p-1 bg-sky-600 text-white rounded-full shadow-xs",title:"Verified Specialist",children:g.jsx(n0,{className:"w-3.5 h-3.5"})})]}),g.jsxs("div",{className:"flex-1 min-w-0",children:[g.jsxs("div",{className:"flex items-center justify-between gap-1",children:[g.jsx("h4",{className:"font-bold text-lg text-slate-900 truncate",children:s.name}),g.jsxs("div",{className:"flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md flex-shrink-0",children:[g.jsx(Yv,{className:"w-3.5 h-3.5 fill-amber-400 text-amber-400"}),g.jsx("span",{children:s.rating}),g.jsxs("span",{className:"text-slate-400 font-normal",children:["(",s.reviewCount,")"]})]})]}),g.jsx("p",{className:"text-xs font-semibold text-sky-700 mt-0.5",children:s.specialtyName}),g.jsxs("p",{className:"text-xs text-slate-500 truncate mt-0.5",children:[s.qualification," • ",s.experienceYears," yrs experience"]})]})]}),g.jsx("p",{className:"text-xs text-slate-600 mt-4 line-clamp-2 leading-relaxed",children:s.bio}),g.jsxs("div",{className:"mt-4 pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-600",children:[g.jsxs("div",{className:"flex items-center gap-1.5 truncate",children:[g.jsx(Jx,{className:"w-3.5 h-3.5 text-slate-400 flex-shrink-0"}),g.jsx("span",{className:"truncate",children:s.hospitalOrClinic})]}),g.jsx("div",{className:"flex items-center gap-2 pt-0.5",children:s.consultationModes.map((r,o)=>g.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium",children:[r==="Video Call"?g.jsx(so,{className:"w-3 h-3 text-sky-600"}):g.jsx(ro,{className:"w-3 h-3 text-emerald-600"}),r]},o))})]})]}),g.jsxs("div",{className:"mt-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-3",children:[g.jsxs("div",{className:"flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50/80 px-2.5 py-1.5 rounded-lg",children:[g.jsx(ta,{className:"w-3.5 h-3.5 text-emerald-600 flex-shrink-0"}),g.jsx("span",{children:s.nextAvailable})]}),g.jsxs("button",{onClick:()=>t(s),className:`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${e?"bg-emerald-600 text-white shadow-soft":"bg-sky-50 text-sky-700 hover:bg-sky-600 hover:text-white"}`,children:[e?"Selected":"View Slots",g.jsx(kr,{className:"w-3 h-3"})]})]})]})}const KE=[{id:"all",label:"All Specialties"},...Object.values($i).map(s=>({id:s.id,label:s.name}))];function ZE({selectedSpecialtyId:s="all",onSpecialtyChange:e,selectedDoctor:t,onSelectDoctor:r}){const[o,l]=dt.useState(""),[u,d]=dt.useState("all"),h=dt.useMemo(()=>qE(o,s,u),[o,s,u]),p=x=>{r(x);const _=document.getElementById("appointment-slots");_&&_.scrollIntoView({behavior:"smooth"})};return g.jsx("section",{id:"find-doctor",className:"py-16 md:py-20 bg-[#FAFCFF] relative",children:g.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[g.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10",children:[g.jsxs("div",{children:[g.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/60 text-sky-700 text-xs font-semibold mb-2",children:[g.jsx(Vl,{className:"w-3.5 h-3.5 text-sky-600"}),"Verified Doctor Directory"]}),g.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight",children:"Find the right doctor"}),g.jsx("p",{className:"text-base text-slate-600 mt-2 max-w-xl",children:"Connect with experienced specialists across hospital departments and clinics. Choose between in-person consultation or video appointment."})]}),g.jsxs("div",{className:"inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200 self-start md:self-auto",children:[g.jsx("button",{onClick:()=>d("all"),className:`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${u==="all"?"bg-white text-slate-900 shadow-xs":"text-slate-600 hover:text-slate-900"}`,children:"All Types"}),g.jsxs("button",{onClick:()=>d("In-Person"),className:`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1 ${u==="In-Person"?"bg-white text-slate-900 shadow-xs":"text-slate-600 hover:text-slate-900"}`,children:[g.jsx(ro,{className:"w-3 h-3 text-emerald-600"}),"In-Person"]}),g.jsxs("button",{onClick:()=>d("Video Call"),className:`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1 ${u==="Video Call"?"bg-white text-slate-900 shadow-xs":"text-slate-600 hover:text-slate-900"}`,children:[g.jsx(so,{className:"w-3 h-3 text-sky-600"}),"Video Call"]})]})]}),g.jsxs("div",{className:"space-y-4 mb-8",children:[g.jsxs("div",{className:"relative max-w-xl",children:[g.jsx(Fv,{className:"absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"}),g.jsx("input",{type:"text",value:o,onChange:x=>l(x.target.value),placeholder:"Search by doctor name, specialty, or condition...",className:"w-full pl-11 pr-4 py-3 text-sm rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 transition-all shadow-xs"})]}),g.jsx("div",{className:"flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none",children:KE.map(x=>g.jsx("button",{onClick:()=>e(x.id),className:`specialty-tab ${s===x.id?"active":""}`,children:x.label},x.id))})]}),h.length>0?g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:h.map(x=>g.jsx($E,{doctor:x,isSelected:(t==null?void 0:t.id)===x.id,onSelectDoctor:p},x.id))}):g.jsxs("div",{className:"text-center py-12 bg-white rounded-2xl border border-slate-200 p-8",children:[g.jsx(Vl,{className:"w-10 h-10 text-slate-400 mx-auto mb-3"}),g.jsx("h4",{className:"text-lg font-bold text-slate-800",children:"No doctors match your criteria"}),g.jsx("p",{className:"text-sm text-slate-500 mt-1 max-w-sm mx-auto",children:'Try adjusting your search query or selecting "All Specialties" to see all available clinical specialists.'}),g.jsx("button",{onClick:()=>{l(""),e("all"),d("all")},className:"mt-4 px-4 py-2 bg-sky-50 text-sky-700 font-semibold text-xs rounded-xl hover:bg-sky-100",children:"Reset filters"})]}),g.jsxs("div",{className:"mt-8 flex items-center justify-center gap-2 text-xs text-slate-400 text-center",children:[g.jsx(xv,{className:"w-3.5 h-3.5"}),g.jsx("span",{children:"Demo clinical directory for CareConnect AI presentation. No artificial statistics or endorsements."})]})]})})}const W0="careconnect_appointments_v1",qa=[{id:"0930",time:"09:30 AM",period:"Morning"},{id:"1000",time:"10:00 AM",period:"Morning"},{id:"1030",time:"10:30 AM",period:"Morning"},{id:"1130",time:"11:30 AM",period:"Morning"},{id:"1400",time:"02:00 PM",period:"Afternoon"},{id:"1500",time:"03:00 PM",period:"Afternoon"},{id:"1630",time:"04:30 PM",period:"Afternoon"},{id:"1730",time:"05:30 PM",period:"Evening"},{id:"1830",time:"06:30 PM",period:"Evening"}];function JE(){const s=[],e=new Date;for(let t=0;t<5;t++){const r=new Date(e);r.setDate(e.getDate()+t);let o="";t===0?o="Today":t===1?o="Tomorrow":o=r.toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"}),s.push({dateString:r.toISOString().split("T")[0],dayName:r.toLocaleDateString("en-US",{weekday:"short"}),dayNumber:r.getDate(),monthName:r.toLocaleDateString("en-US",{month:"short"}),label:o,isToday:t===0,isTomorrow:t===1})}return s}function Jl(){try{if(typeof window>"u"||!window.localStorage)return[];const s=window.localStorage.getItem(W0);return s?JSON.parse(s):[]}catch(s){return console.error("Failed reading appointments from localStorage",s),[]}}function X0(s){try{if(typeof window>"u"||!window.localStorage)return;window.localStorage.setItem(W0,JSON.stringify(s))}catch(e){console.error("Failed saving appointments to localStorage",e)}}function QE(s,e){const r=Jl().filter(d=>d.doctorId===s&&d.dateString===e&&d.status!=="cancelled"),o=new Set(r.map(d=>d.time)),l=(s.charCodeAt(s.length-1)+(e.charCodeAt(e.length-1)||0))%4,u=[qa[l%qa.length].time,qa[(l+3)%qa.length].time];return qa.map(d=>{const h=o.has(d.time)||u.includes(d.time);return{...d,isAvailable:!h,isBooked:h}})}async function eT({doctorId:s,doctorName:e,doctorSpecialty:t,doctorAvatar:r,doctorClinic:o,consultationMode:l="In-Person",dateString:u,dateFormatted:d,time:h,patientName:p,patientPhone:x,patientEmail:_,symptomsSummary:y=""}){await new Promise(U=>setTimeout(U,450));const M=Jl();if(M.find(U=>U.doctorId===s&&U.dateString===u&&U.time===h&&U.status!=="cancelled"))return{success:!1,message:"This slot was just booked by another patient. Please choose another convenient time."};const v={id:`CC-${Math.floor(1e4+Math.random()*9e4)}`,doctorId:s,doctorName:e,doctorSpecialty:t,doctorAvatar:r,doctorClinic:o,consultationMode:l,dateString:u,dateFormatted:d||u,time:h,patientName:p,patientPhone:x,patientEmail:_,symptomsSummary:y,status:"confirmed",createdAt:new Date().toISOString()};return M.unshift(v),X0(M),{success:!0,appointment:v,message:"Your appointment has been successfully booked."}}function tT(s){const t=Jl().map(r=>r.id===s?{...r,status:"cancelled"}:r);return X0(t),{success:!0}}function nT({selectedDoctor:s,onSelectDoctor:e,onProceedToBook:t}){const r=JE(),[o,l]=dt.useState(r[0]),[u,d]=dt.useState(null),[h,p]=dt.useState("In-Person"),x=s||j0[0],[_,y]=dt.useState([]);dt.useEffect(()=>{if(x&&o){const v=QE(x.id,o.dateString);y(v),d(null)}},[x,o]);const M=_.filter(v=>v.period==="Morning"),E=_.filter(v=>v.period==="Afternoon"),b=_.filter(v=>v.period==="Evening"),S=()=>{u&&t({doctor:x,date:o,time:u,consultationMode:h})};return g.jsx("section",{id:"appointment-slots",className:"py-16 md:py-20 bg-sky-50/30 relative",children:g.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",children:[g.jsxs("div",{className:"text-center max-w-2xl mx-auto mb-10 space-y-2",children:[g.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200/60 text-sky-700 text-xs font-semibold",children:[g.jsx(ta,{className:"w-3.5 h-3.5 text-sky-600"}),"Live Slot Scheduling"]}),g.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight",children:"Choose a time that works for you"}),g.jsx("p",{className:"text-sm sm:text-base text-slate-600",children:"Real-time conflict-free slot booking. Select a date and available time slot to meet with your specialist."})]}),g.jsxs("div",{className:"bg-white rounded-2xl p-5 border border-slate-200 shadow-soft mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[g.jsxs("div",{className:"flex items-center gap-4",children:[g.jsx("img",{src:x.avatar,alt:x.name,className:"w-14 h-14 rounded-2xl object-cover border border-slate-100 shadow-xs"}),g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-sky-700",children:"Selected Specialist"}),g.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500"})]}),g.jsx("h4",{className:"text-lg font-bold text-slate-900",children:x.name}),g.jsxs("p",{className:"text-xs text-slate-500",children:[x.specialtyName," • ",x.hospitalOrClinic]})]})]}),g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("span",{className:"text-xs font-semibold text-slate-500 mr-1",children:"Consultation:"}),g.jsxs("div",{className:"inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200 text-xs",children:[g.jsxs("button",{type:"button",onClick:()=>p("In-Person"),className:`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1 ${h==="In-Person"?"bg-white text-slate-900 shadow-xs":"text-slate-600 hover:text-slate-900"}`,children:[g.jsx(ro,{className:"w-3.5 h-3.5 text-emerald-600"}),"In-Person"]}),g.jsxs("button",{type:"button",onClick:()=>p("Video Call"),className:`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1 ${h==="Video Call"?"bg-white text-slate-900 shadow-xs":"text-slate-600 hover:text-slate-900"}`,children:[g.jsx(so,{className:"w-3.5 h-3.5 text-sky-600"}),"Video Call"]})]})]})]}),g.jsxs("div",{className:"mb-8",children:[g.jsx("label",{className:"block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3",children:"Select Date"}),g.jsx("div",{className:"flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none",children:r.map((v,U)=>{const L=o.dateString===v.dateString;return g.jsxs("button",{type:"button",onClick:()=>l(v),className:`date-card ${L?"active":""}`,children:[g.jsx("div",{className:`text-xs font-bold ${L?"text-white":"text-slate-700"}`,children:v.label}),g.jsxs("div",{className:`text-[11px] date-subtext ${L?"text-white/80":"text-slate-400"}`,children:[v.monthName," ",v.dayNumber]})]},U)})})]}),g.jsxs("div",{className:"bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-soft space-y-7",children:[g.jsxs("div",{children:[g.jsxs("h4",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5",children:[g.jsx("span",{children:"Morning"}),g.jsx("span",{className:"text-[10px] text-slate-400 font-normal",children:"(09:30 AM – 11:30 AM)"})]}),g.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:M.map(v=>g.jsxs("button",{type:"button",disabled:v.isBooked,onClick:()=>d(v.time),className:`slot-btn ${v.isBooked?"booked":u===v.time?"selected":"available"}`,children:[v.time,v.isBooked&&g.jsx("span",{className:"text-[10px] uppercase font-bold text-slate-400",children:"(Booked)"})]},v.id))})]}),g.jsxs("div",{children:[g.jsxs("h4",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5",children:[g.jsx("span",{children:"Afternoon"}),g.jsx("span",{className:"text-[10px] text-slate-400 font-normal",children:"(02:00 PM – 04:30 PM)"})]}),g.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:E.map(v=>g.jsxs("button",{type:"button",disabled:v.isBooked,onClick:()=>d(v.time),className:`slot-btn ${v.isBooked?"booked":u===v.time?"selected":"available"}`,children:[v.time,v.isBooked&&g.jsx("span",{className:"text-[10px] uppercase font-bold text-slate-400",children:"(Booked)"})]},v.id))})]}),g.jsxs("div",{children:[g.jsxs("h4",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5",children:[g.jsx("span",{children:"Evening"}),g.jsx("span",{className:"text-[10px] text-slate-400 font-normal",children:"(05:30 PM – 06:30 PM)"})]}),g.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:b.map(v=>g.jsxs("button",{type:"button",disabled:v.isBooked,onClick:()=>d(v.time),className:`slot-btn ${v.isBooked?"booked":u===v.time?"selected":"available"}`,children:[v.time,v.isBooked&&g.jsx("span",{className:"text-[10px] uppercase font-bold text-slate-400",children:"(Booked)"})]},v.id))})]}),g.jsxs("div",{className:"pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[g.jsx("div",{children:u?g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("div",{className:"w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0",children:g.jsx(Wl,{className:"w-5 h-5"})}),g.jsxs("div",{children:[g.jsx("span",{className:"text-xs text-slate-500 font-medium",children:"Selected appointment time:"}),g.jsxs("p",{className:"text-sm font-bold text-slate-900",children:[o.label,", ",o.monthName," ",o.dayNumber," at ",u," (",h,")"]})]})]}):g.jsxs("p",{className:"text-xs text-slate-500 flex items-center gap-1.5",children:[g.jsx(ta,{className:"w-4 h-4 text-sky-600"}),"Click any available time slot above to proceed with booking."]})}),g.jsxs("button",{type:"button",disabled:!u,onClick:S,className:"inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-sky-600 hover:bg-sky-700 active:scale-95 text-white shadow-soft transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer",children:["Book appointment",g.jsx(kr,{className:"w-4 h-4"})]})]})]})]})})}function iT({bookingData:s,onClose:e,onBookingSuccess:t}){if(!s)return null;const{doctor:r,date:o,time:l,consultationMode:u,symptomsSummary:d}=s,[h,p]=dt.useState(""),[x,_]=dt.useState(""),[y,M]=dt.useState(""),[E,b]=dt.useState(d||""),[S,v]=dt.useState(!1),[U,L]=dt.useState(""),C=async $=>{if($.preventDefault(),!h.trim()||!x.trim()){L("Please enter your full name and contact number.");return}v(!0),L("");try{const F=await eT({doctorId:r.id,doctorName:r.name,doctorSpecialty:r.specialtyName,doctorAvatar:r.avatar,doctorClinic:r.hospitalOrClinic,consultationMode:u,dateString:o.dateString,dateFormatted:`${o.label}, ${o.monthName} ${o.dayNumber}`,time:l,patientName:h,patientPhone:x,patientEmail:y,symptomsSummary:E});v(!1),F.success?t(F.appointment):L(F.message||"Could not complete booking.")}catch(F){console.error(F),v(!1),L("Failed to connect to the scheduling service. Please try again.")}};return g.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-fadeIn",children:g.jsxs("div",{className:"bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative",children:[g.jsx("button",{onClick:e,className:"absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors","aria-label":"Close booking modal",children:g.jsx(Yl,{className:"w-5 h-5"})}),g.jsxs("div",{className:"mb-6",children:[g.jsxs("div",{className:"inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-md bg-sky-50 text-sky-700 mb-1",children:[g.jsx(Wl,{className:"w-3.5 h-3.5"}),"Step 2 of 2: Patient Details"]}),g.jsx("h3",{className:"text-2xl font-extrabold text-slate-900",children:"Confirm your appointment"})]}),g.jsxs("div",{className:"bg-slate-50 rounded-2xl p-4 border border-slate-200/80 mb-6 space-y-2 text-xs text-slate-600",children:[g.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-slate-200",children:[g.jsx("span",{className:"font-semibold text-slate-800",children:"Doctor:"}),g.jsxs("span",{className:"font-bold text-sky-700",children:[r.name," (",r.specialtyName,")"]})]}),g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsx("span",{children:"Date & Time:"}),g.jsxs("span",{className:"font-bold text-slate-900",children:[o.label,", ",o.monthName," ",o.dayNumber," at ",l]})]}),g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsx("span",{children:"Mode:"}),g.jsxs("span",{className:"font-medium text-slate-700 flex items-center gap-1",children:[u==="Video Call"?g.jsx(so,{className:"w-3.5 h-3.5 text-sky-600"}):g.jsx(ro,{className:"w-3.5 h-3.5 text-emerald-600"}),u]})]})]}),g.jsxs("form",{onSubmit:C,className:"space-y-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5",children:"Full Name *"}),g.jsxs("div",{className:"relative",children:[g.jsx(Jv,{className:"w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"}),g.jsx("input",{type:"text",required:!0,value:h,onChange:$=>p($.target.value),placeholder:"e.g. Navneet Aryan",className:"w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500"})]})]}),g.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5",children:"Phone Number *"}),g.jsxs("div",{className:"relative",children:[g.jsx(Dv,{className:"w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"}),g.jsx("input",{type:"tel",required:!0,value:x,onChange:$=>_($.target.value),placeholder:"+91 98765 43210",className:"w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500"})]})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5",children:"Email Address"}),g.jsxs("div",{className:"relative",children:[g.jsx(Mv,{className:"w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"}),g.jsx("input",{type:"email",value:y,onChange:$=>M($.target.value),placeholder:"name@example.com",className:"w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500"})]})]})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5",children:"Reason / Symptoms Note for Doctor (Optional)"}),g.jsx("textarea",{rows:2,value:E,onChange:$=>b($.target.value),placeholder:"Any symptoms or questions you'd like the doctor to know in advance...",className:"w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 resize-none"})]}),U&&g.jsx("p",{className:"text-xs text-rose-600 font-medium",children:U}),g.jsx("div",{className:"pt-2",children:g.jsx("button",{type:"submit",disabled:S,className:"w-full py-3.5 rounded-xl font-bold text-sm bg-sky-600 hover:bg-sky-700 active:scale-95 text-white shadow-soft transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50",children:S?g.jsxs(g.Fragment,{children:[g.jsx(s0,{className:"w-4 h-4 animate-spin"}),"Locking slot & booking..."]}):"Confirm & Lock Appointment"})}),g.jsxs("p",{className:"text-[11px] text-slate-400 text-center flex items-center justify-center gap-1",children:[g.jsx(nf,{className:"w-3.5 h-3.5 text-emerald-600"}),"Conflict-free slot locking • Free cancellation anytime"]})]})]})})}var xf={};(function s(e,t,r,o){var l=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),u=typeof Path2D=="function"&&typeof DOMMatrix=="function",d=(function(){if(!e.OffscreenCanvas)return!1;try{var I=new OffscreenCanvas(1,1),w=I.getContext("2d");w.fillRect(0,0,1,1);var W=I.transferToImageBitmap();w.createPattern(W,"no-repeat")}catch{return!1}return!0})();function h(){}function p(I){var w=t.exports.Promise,W=w!==void 0?w:e.Promise;return typeof W=="function"?new W(I):(I(h,h),null)}var x=(function(I,w){return{transform:function(W){if(I)return W;if(w.has(W))return w.get(W);var xe=new OffscreenCanvas(W.width,W.height),X=xe.getContext("2d");return X.drawImage(W,0,0),w.set(W,xe),xe},clear:function(){w.clear()}}})(d,new Map),_=(function(){var I=Math.floor(16.666666666666668),w,W,xe={},X=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(w=function(ee){var fe=Math.random();return xe[fe]=requestAnimationFrame(function re(ge){X===ge||X+I-1<ge?(X=ge,delete xe[fe],ee()):xe[fe]=requestAnimationFrame(re)}),fe},W=function(ee){xe[ee]&&cancelAnimationFrame(xe[ee])}):(w=function(ee){return setTimeout(ee,I)},W=function(ee){return clearTimeout(ee)}),{frame:w,cancel:W}})(),y=(function(){var I,w,W={};function xe(X){function ee(fe,re){X.postMessage({options:fe||{},callback:re})}X.init=function(re){var ge=re.transferControlToOffscreen();X.postMessage({canvas:ge},[ge])},X.fire=function(re,ge,be){if(w)return ee(re,null),w;var Le=Math.random().toString(36).slice(2);return w=p(function(Je){function $e(lt){lt.data.callback===Le&&(delete W[Le],X.removeEventListener("message",$e),w=null,x.clear(),be(),Je())}X.addEventListener("message",$e),ee(re,Le),W[Le]=$e.bind(null,{data:{callback:Le}})}),w},X.reset=function(){X.postMessage({reset:!0});for(var re in W)W[re](),delete W[re]}}return function(){if(I)return I;if(!r&&l){var X=["var CONFETTI, SIZE = {}, module = {};","("+s.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{I=new Worker(URL.createObjectURL(new Blob([X])))}catch(ee){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",ee),null}xe(I)}return I}})(),M={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function E(I,w){return w?w(I):I}function b(I){return I!=null}function S(I,w,W){return E(I&&b(I[w])?I[w]:M[w],W)}function v(I){return I<0?0:Math.floor(I)}function U(I,w){return Math.floor(Math.random()*(w-I))+I}function L(I){return parseInt(I,16)}function C(I){return I.map($)}function $(I){var w=String(I).replace(/[^0-9a-f]/gi,"");return w.length<6&&(w=w[0]+w[0]+w[1]+w[1]+w[2]+w[2]),{r:L(w.substring(0,2)),g:L(w.substring(2,4)),b:L(w.substring(4,6))}}function F(I){var w=S(I,"origin",Object);return w.x=S(w,"x",Number),w.y=S(w,"y",Number),w}function O(I){I.width=document.documentElement.clientWidth,I.height=document.documentElement.clientHeight}function j(I){var w=I.getBoundingClientRect();I.width=w.width,I.height=w.height}function P(I){var w=document.createElement("canvas");return w.style.position="fixed",w.style.top="0px",w.style.left="0px",w.style.pointerEvents="none",w.style.zIndex=I,w}function N(I,w,W,xe,X,ee,fe,re,ge){I.save(),I.translate(w,W),I.rotate(ee),I.scale(xe,X),I.arc(0,0,1,fe,re,ge),I.restore()}function V(I){var w=I.angle*(Math.PI/180),W=I.spread*(Math.PI/180);return{x:I.x,y:I.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:I.startVelocity*.5+Math.random()*I.startVelocity,angle2D:-w+(.5*W-Math.random()*W),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:I.color,shape:I.shape,tick:0,totalTicks:I.ticks,decay:I.decay,drift:I.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:I.gravity*3,ovalScalar:.6,scalar:I.scalar,flat:I.flat}}function le(I,w){w.x+=Math.cos(w.angle2D)*w.velocity+w.drift,w.y+=Math.sin(w.angle2D)*w.velocity+w.gravity,w.velocity*=w.decay,w.flat?(w.wobble=0,w.wobbleX=w.x+10*w.scalar,w.wobbleY=w.y+10*w.scalar,w.tiltSin=0,w.tiltCos=0,w.random=1):(w.wobble+=w.wobbleSpeed,w.wobbleX=w.x+10*w.scalar*Math.cos(w.wobble),w.wobbleY=w.y+10*w.scalar*Math.sin(w.wobble),w.tiltAngle+=.1,w.tiltSin=Math.sin(w.tiltAngle),w.tiltCos=Math.cos(w.tiltAngle),w.random=Math.random()+2);var W=w.tick++/w.totalTicks,xe=w.x+w.random*w.tiltCos,X=w.y+w.random*w.tiltSin,ee=w.wobbleX+w.random*w.tiltCos,fe=w.wobbleY+w.random*w.tiltSin;if(I.fillStyle="rgba("+w.color.r+", "+w.color.g+", "+w.color.b+", "+(1-W)+")",I.beginPath(),u&&w.shape.type==="path"&&typeof w.shape.path=="string"&&Array.isArray(w.shape.matrix))I.fill(ue(w.shape.path,w.shape.matrix,w.x,w.y,Math.abs(ee-xe)*.1,Math.abs(fe-X)*.1,Math.PI/10*w.wobble));else if(w.shape.type==="bitmap"){var re=Math.PI/10*w.wobble,ge=Math.abs(ee-xe)*.1,be=Math.abs(fe-X)*.1,Le=w.shape.bitmap.width*w.scalar,Je=w.shape.bitmap.height*w.scalar,$e=new DOMMatrix([Math.cos(re)*ge,Math.sin(re)*ge,-Math.sin(re)*be,Math.cos(re)*be,w.x,w.y]);$e.multiplySelf(new DOMMatrix(w.shape.matrix));var lt=I.createPattern(x.transform(w.shape.bitmap),"no-repeat");lt.setTransform($e),I.globalAlpha=1-W,I.fillStyle=lt,I.fillRect(w.x-Le/2,w.y-Je/2,Le,Je),I.globalAlpha=1}else if(w.shape==="circle")I.ellipse?I.ellipse(w.x,w.y,Math.abs(ee-xe)*w.ovalScalar,Math.abs(fe-X)*w.ovalScalar,Math.PI/10*w.wobble,0,2*Math.PI):N(I,w.x,w.y,Math.abs(ee-xe)*w.ovalScalar,Math.abs(fe-X)*w.ovalScalar,Math.PI/10*w.wobble,0,2*Math.PI);else if(w.shape==="star")for(var z=Math.PI/2*3,Ct=4*w.scalar,nt=8*w.scalar,Oe=w.x,We=w.y,Mt=5,ke=Math.PI/Mt;Mt--;)Oe=w.x+Math.cos(z)*nt,We=w.y+Math.sin(z)*nt,I.lineTo(Oe,We),z+=ke,Oe=w.x+Math.cos(z)*Ct,We=w.y+Math.sin(z)*Ct,I.lineTo(Oe,We),z+=ke;else I.moveTo(Math.floor(w.x),Math.floor(w.y)),I.lineTo(Math.floor(w.wobbleX),Math.floor(X)),I.lineTo(Math.floor(ee),Math.floor(fe)),I.lineTo(Math.floor(xe),Math.floor(w.wobbleY));return I.closePath(),I.fill(),w.tick<w.totalTicks}function Q(I,w,W,xe,X){var ee=w.slice(),fe=I.getContext("2d"),re,ge,be=p(function(Le){function Je(){re=ge=null,fe.clearRect(0,0,xe.width,xe.height),x.clear(),X(),Le()}function $e(){r&&!(xe.width===o.width&&xe.height===o.height)&&(xe.width=I.width=o.width,xe.height=I.height=o.height),!xe.width&&!xe.height&&(W(I),xe.width=I.width,xe.height=I.height),fe.clearRect(0,0,xe.width,xe.height),ee=ee.filter(function(lt){return le(fe,lt)}),ee.length?re=_.frame($e):Je()}re=_.frame($e),ge=Je});return{addFettis:function(Le){return ee=ee.concat(Le),be},canvas:I,promise:be,reset:function(){re&&_.cancel(re),ge&&ge()}}}function de(I,w){var W=!I,xe=!!S(w||{},"resize"),X=!1,ee=S(w,"disableForReducedMotion",Boolean),fe=l&&!!S(w||{},"useWorker"),re=fe?y():null,ge=W?O:j,be=I&&re?!!I.__confetti_initialized:!1,Le=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Je;function $e(z,Ct,nt){for(var Oe=S(z,"particleCount",v),We=S(z,"angle",Number),Mt=S(z,"spread",Number),ke=S(z,"startVelocity",Number),D=S(z,"decay",Number),A=S(z,"gravity",Number),te=S(z,"drift",Number),_e=S(z,"colors",C),Se=S(z,"ticks",Number),me=S(z,"shapes"),Ge=S(z,"scalar"),Pe=!!S(z,"flat"),Ue=F(z),ft=Oe,Te=[],Be=I.width*Ue.x,et=I.height*Ue.y;ft--;)Te.push(V({x:Be,y:et,angle:We,spread:Mt,startVelocity:ke,color:_e[ft%_e.length],shape:me[U(0,me.length)],ticks:Se,decay:D,gravity:A,drift:te,scalar:Ge,flat:Pe}));return Je?Je.addFettis(Te):(Je=Q(I,Te,ge,Ct,nt),Je.promise)}function lt(z){var Ct=ee||S(z,"disableForReducedMotion",Boolean),nt=S(z,"zIndex",Number);if(Ct&&Le)return p(function(ke){ke()});W&&Je?I=Je.canvas:W&&!I&&(I=P(nt),document.body.appendChild(I)),xe&&!be&&ge(I);var Oe={width:I.width,height:I.height};re&&!be&&re.init(I),be=!0,re&&(I.__confetti_initialized=!0);function We(){if(re){var ke={getBoundingClientRect:function(){if(!W)return I.getBoundingClientRect()}};ge(ke),re.postMessage({resize:{width:ke.width,height:ke.height}});return}Oe.width=Oe.height=null}function Mt(){Je=null,xe&&(X=!1,e.removeEventListener("resize",We)),W&&I&&(document.body.contains(I)&&document.body.removeChild(I),I=null,be=!1)}return xe&&!X&&(X=!0,e.addEventListener("resize",We,!1)),re?re.fire(z,Oe,Mt):$e(z,Oe,Mt)}return lt.reset=function(){re&&re.reset(),Je&&Je.reset()},lt}var pe;function ce(){return pe||(pe=de(null,{useWorker:!0,resize:!0})),pe}function ue(I,w,W,xe,X,ee,fe){var re=new Path2D(I),ge=new Path2D;ge.addPath(re,new DOMMatrix(w));var be=new Path2D;return be.addPath(ge,new DOMMatrix([Math.cos(fe)*X,Math.sin(fe)*X,-Math.sin(fe)*ee,Math.cos(fe)*ee,W,xe])),be}function H(I){if(!u)throw new Error("path confetti are not supported in this browser");var w,W;typeof I=="string"?w=I:(w=I.path,W=I.matrix);var xe=new Path2D(w),X=document.createElement("canvas"),ee=X.getContext("2d");if(!W){for(var fe=1e3,re=fe,ge=fe,be=0,Le=0,Je,$e,lt=0;lt<fe;lt+=2)for(var z=0;z<fe;z+=2)ee.isPointInPath(xe,lt,z,"nonzero")&&(re=Math.min(re,lt),ge=Math.min(ge,z),be=Math.max(be,lt),Le=Math.max(Le,z));Je=be-re,$e=Le-ge;var Ct=10,nt=Math.min(Ct/Je,Ct/$e);W=[nt,0,0,nt,-Math.round(Je/2+re)*nt,-Math.round($e/2+ge)*nt]}return{type:"path",path:w,matrix:W}}function he(I){var w,W=1,xe="#000000",X='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof I=="string"?w=I:(w=I.text,W="scalar"in I?I.scalar:W,X="fontFamily"in I?I.fontFamily:X,xe="color"in I?I.color:xe);var ee=10*W,fe=""+ee+"px "+X,re=new OffscreenCanvas(ee,ee),ge=re.getContext("2d");ge.font=fe;var be=ge.measureText(w),Le=Math.ceil(be.actualBoundingBoxRight+be.actualBoundingBoxLeft),Je=Math.ceil(be.actualBoundingBoxAscent+be.actualBoundingBoxDescent),$e=2,lt=be.actualBoundingBoxLeft+$e,z=be.actualBoundingBoxAscent+$e;Le+=$e+$e,Je+=$e+$e,re=new OffscreenCanvas(Le,Je),ge=re.getContext("2d"),ge.font=fe,ge.fillStyle=xe,ge.fillText(w,lt,z);var Ct=1/W;return{type:"bitmap",bitmap:re.transferToImageBitmap(),matrix:[Ct,0,0,Ct,-Le*Ct/2,-Je*Ct/2]}}t.exports=function(){return ce().apply(this,arguments)},t.exports.reset=function(){ce().reset()},t.exports.create=de,t.exports.shapeFromPath=H,t.exports.shapeFromText=he})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),xf,!1);const rT=xf.exports;xf.exports.create;function sT({appointment:s,onClose:e,onViewAllAppointments:t}){if(dt.useEffect(()=>{try{rT({particleCount:50,spread:60,origin:{y:.6},colors:["#0284c7","#14b8a6","#38bdf8","#10b981"]})}catch{}},[]),!s)return null;const r=()=>{const o=`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//CareConnect AI//Doctor Appointment//EN
BEGIN:VEVENT
SUMMARY:Doctor Appointment with ${s.doctorName} (${s.doctorSpecialty})
DESCRIPTION:Consultation with ${s.doctorName} at ${s.doctorClinic}. Appointment ID: ${s.id}.
LOCATION:${s.doctorClinic}
DTSTART;VALUE=DATE:${s.dateString.replace(/-/g,"")}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`,l=new Blob([o],{type:"text/calendar;charset=utf-8"}),u=window.URL.createObjectURL(l),d=document.createElement("a");d.href=u,d.setAttribute("download",`appointment-${s.id}.ics`),document.body.appendChild(d),d.click(),document.body.removeChild(d)};return g.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn",children:g.jsxs("div",{className:"bg-white rounded-3xl max-w-lg w-full p-6 sm:p-9 shadow-2xl border border-slate-100 text-center relative overflow-hidden",children:[g.jsx("div",{className:"absolute -top-12 -left-12 w-40 h-40 bg-emerald-100/60 rounded-full blur-2xl pointer-events-none"}),g.jsx("div",{className:"absolute -bottom-12 -right-12 w-40 h-40 bg-sky-100/60 rounded-full blur-2xl pointer-events-none"}),g.jsx("div",{className:"w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-soft",children:g.jsx(Wl,{className:"w-9 h-9"})}),g.jsx("h3",{className:"text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight",children:"You're all set."}),g.jsx("p",{className:"text-sm sm:text-base text-slate-600 mt-1",children:"Your appointment has been successfully booked."}),g.jsxs("div",{className:"mt-4 p-3 bg-sky-50/80 rounded-2xl border border-sky-100 flex items-center justify-center gap-2.5 text-xs text-sky-800 font-medium",children:[g.jsx("span",{className:"w-6 h-6 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center text-[10px]",children:"Care"}),g.jsx("span",{children:`"I've secured your time slot! You're taking a positive step toward feeling better."`})]}),g.jsxs("div",{className:"mt-6 p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-3.5",children:[g.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-200",children:[g.jsxs("div",{children:[g.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-slate-400",children:"Appointment ID"}),g.jsx("p",{className:"text-sm font-extrabold text-sky-700 font-mono",children:s.id})]}),g.jsx("div",{className:"px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold",children:"Confirmed"})]}),g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("img",{src:s.doctorAvatar,alt:s.doctorName,className:"w-12 h-12 rounded-xl object-cover border border-slate-200"}),g.jsxs("div",{children:[g.jsx("h4",{className:"font-bold text-sm text-slate-900",children:s.doctorName}),g.jsx("p",{className:"text-xs text-sky-700 font-semibold",children:s.doctorSpecialty}),g.jsx("p",{className:"text-[11px] text-slate-500",children:s.doctorClinic})]})]}),g.jsxs("div",{className:"pt-2 border-t border-slate-200 grid grid-cols-2 gap-2 text-xs text-slate-700",children:[g.jsxs("div",{className:"flex items-center gap-1.5",children:[g.jsx(to,{className:"w-3.5 h-3.5 text-slate-400 flex-shrink-0"}),g.jsx("span",{className:"font-semibold",children:s.dateFormatted})]}),g.jsxs("div",{className:"flex items-center gap-1.5",children:[g.jsx(ta,{className:"w-3.5 h-3.5 text-slate-400 flex-shrink-0"}),g.jsx("span",{className:"font-semibold",children:s.time})]}),g.jsxs("div",{className:"flex items-center gap-1.5 col-span-2 text-slate-600",children:[s.consultationMode==="Video Call"?g.jsx(so,{className:"w-3.5 h-3.5 text-sky-600 flex-shrink-0"}):g.jsx(ro,{className:"w-3.5 h-3.5 text-emerald-600 flex-shrink-0"}),g.jsxs("span",{children:[s.consultationMode," • Patient: ",s.patientName]})]})]})]}),g.jsxs("div",{className:"mt-6 flex flex-col sm:flex-row items-center gap-3",children:[g.jsxs("button",{onClick:r,className:"w-full sm:w-1/2 py-3 px-4 rounded-xl font-bold text-xs bg-slate-100 hover:bg-slate-200 text-slate-800 transition-all flex items-center justify-center gap-1.5 cursor-pointer",children:[g.jsx(dv,{className:"w-3.5 h-3.5 text-slate-600"}),"Add to Calendar (.ics)"]}),g.jsx("button",{onClick:e,className:"w-full sm:w-1/2 py-3 px-4 rounded-xl font-bold text-xs bg-sky-600 hover:bg-sky-700 text-white shadow-soft transition-all flex items-center justify-center gap-1.5 cursor-pointer",children:"Back to Home"})]}),g.jsx("button",{onClick:t,className:"mt-4 text-xs font-semibold text-slate-500 hover:text-sky-600 transition-colors inline-block",children:"View all booked appointments →"})]})})}function aT({onClose:s}){const[e,t]=dt.useState([]),r=()=>{t(Jl())};dt.useEffect(()=>{r()},[]);const o=l=>{window.confirm("Are you sure you want to cancel this appointment? Your slot will be immediately freed for other patients.")&&(tT(l),r())};return g.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-fadeIn",children:g.jsxs("div",{className:"bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[85vh] flex flex-col",children:[g.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-200",children:[g.jsxs("div",{children:[g.jsx("h3",{className:"text-xl font-extrabold text-slate-900",children:"My Appointments"}),g.jsx("p",{className:"text-xs text-slate-500",children:"Live conflict-free bookings stored in your browser session"})]}),g.jsx("button",{onClick:s,className:"p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors",children:g.jsx(Yl,{className:"w-5 h-5"})})]}),g.jsx("div",{className:"flex-1 overflow-y-auto py-4 space-y-4",children:e.length>0?e.map(l=>g.jsxs("div",{className:`p-4 rounded-2xl border transition-all ${l.status==="cancelled"?"bg-slate-50 border-slate-200 opacity-60":"bg-white border-slate-200 shadow-xs hover:border-sky-300"}`,children:[g.jsxs("div",{className:"flex items-start justify-between gap-3",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("img",{src:l.doctorAvatar,alt:l.doctorName,className:"w-11 h-11 rounded-xl object-cover border border-slate-200"}),g.jsxs("div",{children:[g.jsx("h4",{className:"font-bold text-sm text-slate-900",children:l.doctorName}),g.jsx("p",{className:"text-xs text-sky-700 font-semibold",children:l.doctorSpecialty})]})]}),g.jsxs("div",{className:"text-right",children:[g.jsx("span",{className:`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${l.status==="cancelled"?"bg-slate-200 text-slate-600":"bg-emerald-100 text-emerald-800"}`,children:l.status}),g.jsx("p",{className:"text-[10px] text-slate-400 font-mono mt-1",children:l.id})]})]}),g.jsxs("div",{className:"mt-3 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsxs("span",{className:"flex items-center gap-1",children:[g.jsx(to,{className:"w-3.5 h-3.5 text-slate-400"}),l.dateFormatted]}),g.jsxs("span",{className:"flex items-center gap-1 font-semibold text-slate-900",children:[g.jsx(ta,{className:"w-3.5 h-3.5 text-sky-600"}),l.time]})]}),l.status!=="cancelled"&&g.jsxs("button",{onClick:()=>o(l.id),className:"text-xs text-rose-600 hover:text-rose-700 font-medium flex items-center gap-1 cursor-pointer",children:[g.jsx(Kv,{className:"w-3.5 h-3.5"}),"Cancel"]})]})]},l.id)):g.jsxs("div",{className:"text-center py-12 text-slate-400",children:[g.jsx(to,{className:"w-12 h-12 mx-auto mb-2 opacity-40"}),g.jsx("p",{className:"text-sm font-medium text-slate-600",children:"No appointments booked yet"}),g.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:"Book a doctor consultation above to see your scheduled visits here."})]})}),g.jsx("div",{className:"pt-4 border-t border-slate-200 text-right",children:g.jsx("button",{onClick:s,className:"px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all",children:"Close"})})]})})}const oT=[{num:"01",title:"Tell Care",description:"Describe what you're experiencing in your everyday words. No medical jargon needed.",icon:Rv,badge:"Symptom Triage"},{num:"02",title:"Find your match",description:"Care guides you toward the relevant clinical specialty and verified specialists.",icon:Xl,badge:"Specialty Routing"},{num:"03",title:"Choose a time",description:"See live, conflict-free appointment slots for today, tomorrow, or later.",icon:to,badge:"Live Slots"},{num:"04",title:"You're booked",description:"Receive instant confirmation, calendar sync, and automated SMS reminders.",icon:Wl,badge:"Zero Waiting"}];function lT(){const s=()=>{const e=document.getElementById("symptom-section");e&&e.scrollIntoView({behavior:"smooth"})};return g.jsx("section",{id:"how-it-works",className:"py-16 md:py-24 bg-white relative",children:g.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[g.jsxs("div",{className:"text-center max-w-2xl mx-auto mb-16 space-y-3",children:[g.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3.5 py-1 rounded-full border border-sky-200/60",children:"Simple 4-Step Process"}),g.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight",children:"Healthcare, without the hassle."}),g.jsx("p",{className:"text-base sm:text-lg text-slate-600",children:"From first symptom to confirmed doctor consultation in under two minutes."})]}),g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative",children:oT.map((e,t)=>{const r=e.icon;return g.jsxs("div",{className:"relative bg-slate-50/70 rounded-2xl p-6 border border-slate-200/80 hover:border-sky-300 transition-all duration-200 group",children:[g.jsxs("div",{className:"flex items-center justify-between mb-4",children:[g.jsx("span",{className:"text-3xl font-black text-sky-600/30 group-hover:text-sky-600 transition-colors",children:e.num}),g.jsx("div",{className:"w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-sky-600 shadow-xs group-hover:scale-105 transition-transform",children:g.jsx(r,{className:"w-5 h-5"})})]}),g.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-sky-700 bg-sky-100/60 px-2 py-0.5 rounded-md inline-block mb-2",children:e.badge}),g.jsx("h3",{className:"text-lg font-bold text-slate-900 mb-2",children:e.title}),g.jsx("p",{className:"text-xs sm:text-sm text-slate-600 leading-relaxed",children:e.description})]},t)})}),g.jsx("div",{className:"mt-12 text-center",children:g.jsxs("button",{onClick:s,className:"inline-flex items-center gap-2 text-sm font-bold text-sky-700 hover:text-sky-800 bg-sky-50 px-5 py-2.5 rounded-xl border border-sky-200/80 hover:bg-sky-100 transition-colors cursor-pointer",children:["Ready to try it? Tell Care your symptoms",g.jsx(kr,{className:"w-4 h-4"})]})})]})})}function cT(){return g.jsx("section",{id:"problem-story",className:"py-16 md:py-24 bg-gradient-to-b from-white via-sky-50/20 to-[#FAFCFF]",children:g.jsx("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",children:g.jsxs("div",{className:"bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden",children:[g.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-sky-600/20 rounded-full blur-3xl pointer-events-none"}),g.jsx("div",{className:"absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"}),g.jsxs("div",{className:"relative z-10 space-y-8",children:[g.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-semibold backdrop-blur-xs border border-white/10",children:[g.jsx(hv,{className:"w-4 h-4 text-sky-400"}),"The Human Story Behind CareConnect"]}),g.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white max-w-3xl",children:`"Finding a doctor shouldn't be another thing you have to figure out when you're already not feeling well."`}),g.jsx("p",{className:"text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed",children:"When someone is unwell, navigating hospital departments, calling reception desks, and guessing whether they need an internal physician, neurologist, or orthopedist adds needless anxiety."}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 pt-4",children:[g.jsxs("div",{className:"p-5 rounded-2xl bg-white/5 border border-white/10",children:[g.jsx("div",{className:"w-8 h-8 rounded-lg bg-rose-500/20 text-rose-300 flex items-center justify-center mb-3",children:g.jsx(r0,{className:"w-4 h-4"})}),g.jsx("h4",{className:"font-bold text-white text-sm mb-1.5",children:"Department Confusion"}),g.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Patients often book with the wrong department, wasting days before reaching the appropriate specialist."})]}),g.jsxs("div",{className:"p-5 rounded-2xl bg-white/5 border border-white/10",children:[g.jsx("div",{className:"w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center mb-3",children:g.jsx(Pv,{className:"w-4 h-4"})}),g.jsx("h4",{className:"font-bold text-white text-sm mb-1.5",children:"Endless Phone Calls"}),g.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Traditional clinics still rely on manual phone calls, walk-in queues, and double-booking risks."})]}),g.jsxs("div",{className:"p-5 rounded-2xl bg-white/5 border border-white/10",children:[g.jsx("div",{className:"w-8 h-8 rounded-lg bg-sky-500/20 text-sky-300 flex items-center justify-center mb-3",children:g.jsx(tv,{className:"w-4 h-4"})}),g.jsx("h4",{className:"font-bold text-white text-sm mb-1.5",children:"Connected Guidance"}),g.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"CareConnect AI unifies conversational symptom guidance with real-time, conflict-free slot reservation."})]})]})]})]})})})}const uT=[{icon:Xl,title:"AI Symptom Guidance",description:"Interprets everyday descriptions and directs you toward the appropriate specialty without giving a medical diagnosis."},{icon:ta,title:"Live Slot Availability",description:"Doctors publish real-time open slots so you see verified times instead of waiting on callback queues."},{icon:yv,title:"Conflict-Free Slot Locking",description:"Instant locking guarantees zero double-bookings even during high concurrent clinic requests."},{icon:Uv,title:"Easy Cancel & Reschedule",description:"Plans change. Easily reschedule or release your time slot with a single tap, keeping clinic schedules running smoothly."},{icon:qx,title:"Automated Reminders",description:"Smart SMS and calendar notifications keep both patients and clinicians punctual, reducing no-shows."},{icon:e_,title:"Three-Sided Ecosystem",description:"Tailored portals for Patients, Clinicians, and Clinic Administrators for unified OPD operations."}];function dT(){return g.jsx("section",{className:"py-16 md:py-24 bg-white relative",children:g.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[g.jsxs("div",{className:"text-center max-w-2xl mx-auto mb-16 space-y-3",children:[g.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3.5 py-1 rounded-full border border-sky-200/60",children:"Engineered For Care"}),g.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight",children:"Designed for patients, trusted by clinicians"}),g.jsx("p",{className:"text-base sm:text-lg text-slate-600",children:"CareConnect AI brings clarity, speed, and reliability to modern outpatient appointment scheduling."})]}),g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:uT.map((s,e)=>{const t=s.icon;return g.jsxs("div",{className:"p-6 rounded-2xl border border-slate-200/80 bg-[#FAFCFF] hover:bg-white hover:border-sky-300 hover:shadow-soft transition-all duration-200 flex items-start gap-4",children:[g.jsx("div",{className:"w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center flex-shrink-0",children:g.jsx(t,{className:"w-5 h-5"})}),g.jsxs("div",{children:[g.jsx("h3",{className:"font-bold text-base text-slate-900 mb-1",children:s.title}),g.jsx("p",{className:"text-xs sm:text-sm text-slate-600 leading-relaxed",children:s.description})]})]},e)})})]})})}function fT({onClose:s}){return g.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn",children:g.jsxs("div",{className:"bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto",children:[g.jsx("button",{onClick:s,className:"absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors",children:g.jsx(Yl,{className:"w-5 h-5"})}),g.jsxs("div",{className:"mb-6",children:[g.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-semibold mb-2",children:[g.jsx(n0,{className:"w-3.5 h-3.5 text-sky-600"}),"NeoHack 2026 Innovation Architecture"]}),g.jsx("h3",{className:"text-2xl sm:text-3xl font-extrabold text-slate-900",children:"CareConnect AI System Architecture"}),g.jsx("p",{className:"text-xs sm:text-sm text-slate-600 mt-1",children:"Production design for end-to-end outpatient healthcare scheduling and AI guidance."})]}),g.jsxs("div",{className:"space-y-4 mb-6",children:[g.jsxs("div",{className:"p-4 rounded-2xl bg-sky-50/70 border border-sky-100 flex items-start gap-3.5",children:[g.jsx("div",{className:"w-9 h-9 rounded-xl bg-sky-600 text-white flex items-center justify-center flex-shrink-0",children:g.jsx(jv,{className:"w-5 h-5"})}),g.jsxs("div",{children:[g.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-sky-700",children:"Client Tier"}),g.jsx("h4",{className:"font-bold text-sm text-slate-900",children:"Responsive WebApp & Companion Mobile App"}),g.jsx("p",{className:"text-xs text-slate-600 mt-0.5",children:'React 18, Three.js WebGL Assistant ("Care"), Tailwind CSS, and conflict-free slot reservation interface.'})]})]}),g.jsx("div",{className:"text-center text-xs font-bold text-slate-400",children:"↓ REST API / HTTPS"}),g.jsxs("div",{className:"p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 flex items-start gap-3.5",children:[g.jsx("div",{className:"w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center flex-shrink-0",children:g.jsx(zv,{className:"w-5 h-5"})}),g.jsxs("div",{children:[g.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-indigo-700",children:"Backend Tier"}),g.jsx("h4",{className:"font-bold text-sm text-slate-900",children:"Java + Spring Boot REST Engine"}),g.jsx("p",{className:"text-xs text-slate-600 mt-0.5",children:"Slot locking engine, concurrent transactional booking safety, Twilio SMS/email notifications, and authentication."})]})]}),g.jsx("div",{className:"text-center text-xs font-bold text-slate-400",children:"↓ ORM / JDBC & AI Gateway"}),g.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[g.jsxs("div",{className:"p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 flex items-start gap-3.5",children:[g.jsx("div",{className:"w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0",children:g.jsx(cv,{className:"w-5 h-5"})}),g.jsxs("div",{children:[g.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-emerald-700",children:"Data Tier"}),g.jsx("h4",{className:"font-bold text-xs text-slate-900",children:"MySQL Database"}),g.jsx("p",{className:"text-[11px] text-slate-600 mt-0.5",children:"Doctor schemas, clinic timetables, slot states, appointment records, and patient profiles."})]})]}),g.jsxs("div",{className:"p-4 rounded-2xl bg-purple-50/70 border border-purple-100 flex items-start gap-3.5",children:[g.jsx("div",{className:"w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center flex-shrink-0",children:g.jsx(Kx,{className:"w-5 h-5"})}),g.jsxs("div",{children:[g.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-purple-700",children:"Intelligence Tier"}),g.jsx("h4",{className:"font-bold text-xs text-slate-900",children:"LLM Triage Gateway"}),g.jsx("p",{className:"text-[11px] text-slate-600 mt-0.5",children:"Natural language symptom classification, department suggestion, and non-diagnostic safety guardrails."})]})]})]})]}),g.jsxs("div",{className:"p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-6",children:[g.jsxs("h4",{className:"text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5",children:[g.jsx(n_,{className:"w-3.5 h-3.5 text-sky-600"}),"Unified 3-Sided Portal Ecosystem"]}),g.jsxs("div",{className:"grid grid-cols-3 gap-2 text-center text-xs",children:[g.jsxs("div",{className:"p-2 rounded-xl bg-white border border-slate-200",children:[g.jsx("span",{className:"font-bold text-slate-900 block",children:"Patient"}),g.jsx("span",{className:"text-[10px] text-slate-500",children:"Symptom Search & Slot Booking"})]}),g.jsxs("div",{className:"p-2 rounded-xl bg-white border border-slate-200",children:[g.jsx("span",{className:"font-bold text-slate-900 block",children:"Doctor"}),g.jsx("span",{className:"text-[10px] text-slate-500",children:"Availability & Patient Queue"})]}),g.jsxs("div",{className:"p-2 rounded-xl bg-white border border-slate-200",children:[g.jsx("span",{className:"font-bold text-slate-900 block",children:"Admin"}),g.jsx("span",{className:"text-[10px] text-slate-500",children:"OPD Ops & Clinic Analytics"})]})]})]}),g.jsxs("div",{className:"p-4 rounded-2xl bg-sky-50/50 border border-sky-100 flex items-center justify-between text-xs text-slate-600",children:[g.jsxs("div",{children:[g.jsx("span",{className:"font-bold text-slate-900 block",children:"Team CareConnect AI (NeoHack 2026)"}),g.jsx("span",{className:"text-slate-500",children:"Navneet Aryan • Anshu Kumari • Pragati Jaiswal"})]}),g.jsx("span",{className:"text-[11px] font-semibold text-sky-700",children:"IMS Engineering College"})]}),g.jsx("div",{className:"mt-6 text-right",children:g.jsx("button",{onClick:s,className:"px-6 py-2.5 rounded-xl bg-sky-600 text-white font-bold text-xs hover:bg-sky-700 transition-all cursor-pointer shadow-soft",children:"Close Architecture Overview"})})]})})}function hT({setCareState:s}){const e=()=>{s("listening");const t=document.getElementById("symptom-section");t&&(t.scrollIntoView({behavior:"smooth"}),setTimeout(()=>{const r=document.getElementById("symptom-textarea");r&&r.focus()},500))};return g.jsx("section",{className:"py-20 bg-gradient-to-b from-white to-sky-50/60 relative overflow-hidden",children:g.jsx("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:g.jsxs("div",{className:"bg-gradient-to-tr from-sky-600 via-sky-500 to-sky-600 text-white rounded-3xl p-8 sm:p-14 text-center shadow-soft-lg relative overflow-hidden",children:[g.jsx("div",{className:"absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/10 pointer-events-none"}),g.jsx("div",{className:"absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-white/10 pointer-events-none"}),g.jsxs("div",{className:"max-w-2xl mx-auto space-y-6 relative z-10",children:[g.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 text-white text-xs font-semibold backdrop-blur-xs border border-white/20",children:[g.jsx(Xl,{className:"w-3.5 h-3.5 text-sky-200"}),"Friendly Healthcare Guide"]}),g.jsxs("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight",children:["Not sure where to start?"," ",g.jsx("span",{className:"block text-sky-100 mt-1 font-bold",children:"Care can help."})]}),g.jsx("p",{className:"text-base sm:text-lg text-sky-50 max-w-xl mx-auto leading-relaxed",children:"Skip the confusion and long hold times. Describe your symptoms in plain language and discover the right doctor in moments."}),g.jsx("div",{className:"pt-2",children:g.jsxs("button",{onClick:e,className:"inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-extrabold text-base bg-white text-sky-700 hover:bg-sky-50 active:scale-95 shadow-soft transition-all duration-200 cursor-pointer",children:["Talk to Care",g.jsx(kr,{className:"w-5 h-5 text-sky-600"})]})}),g.jsx("p",{className:"text-xs text-sky-100/80 pt-2",children:"No medical terms required • 100% Confidential • Instant conflict-free booking"})]})]})})})}function pT({onOpenArchitecture:s}){const e=()=>{window.scrollTo({top:0,behavior:"smooth"})};return g.jsx("footer",{className:"bg-slate-900 text-slate-400 py-12 md:py-16 border-t border-slate-800",children:g.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12",children:[g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:[g.jsxs("div",{className:"md:col-span-2 space-y-4",children:[g.jsxs("div",{className:"flex items-center gap-2.5",children:[g.jsx("div",{className:"w-8 h-8 rounded-xl bg-sky-600 flex items-center justify-center text-white",children:g.jsx(t0,{className:"w-4 h-4"})}),g.jsx("span",{className:"font-extrabold text-xl text-white tracking-tight",children:"CareConnect AI"})]}),g.jsx("p",{className:"text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed",children:"Smart online doctor appointment booking platform. Helping patients find the right specialist through compassionate conversational AI guidance and conflict-free live slot booking."}),g.jsx("div",{className:"text-xs text-slate-500 font-medium",children:"NeoHack 2026 Project • IMS Engineering College, Ghaziabad"})]}),g.jsxs("div",{children:[g.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-slate-200 mb-3",children:"Platform"}),g.jsxs("ul",{className:"space-y-2 text-xs",children:[g.jsx("li",{children:g.jsx("a",{href:"#how-it-works",className:"hover:text-sky-400 transition-colors",children:"How it works"})}),g.jsx("li",{children:g.jsx("a",{href:"#symptom-section",className:"hover:text-sky-400 transition-colors",children:"Symptom Triage"})}),g.jsx("li",{children:g.jsx("a",{href:"#find-doctor",className:"hover:text-sky-400 transition-colors",children:"Doctor Directory"})}),g.jsx("li",{children:g.jsx("a",{href:"#appointment-slots",className:"hover:text-sky-400 transition-colors",children:"Live Slot Booking"})}),g.jsx("li",{children:g.jsx("button",{onClick:s,className:"hover:text-sky-400 transition-colors text-left",children:"System Architecture"})})]})]}),g.jsxs("div",{children:[g.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-slate-200 mb-3",children:"Clinical Safety"}),g.jsxs("ul",{className:"space-y-2 text-xs",children:[g.jsx("li",{children:g.jsx("span",{className:"text-slate-400",children:"Non-diagnostic Triage"})}),g.jsx("li",{children:g.jsx("span",{className:"text-slate-400",children:"Conflict-Free Slot Locks"})}),g.jsx("li",{children:g.jsx("span",{className:"text-slate-400",children:"Emergency Protocol (112/911)"})}),g.jsx("li",{children:g.jsx("span",{className:"text-slate-400",children:"Patient Privacy Protected"})})]})]})]}),g.jsxs("div",{className:"p-4 sm:p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300 flex items-start gap-3",children:[g.jsx(nf,{className:"w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5"}),g.jsxs("p",{className:"leading-relaxed",children:[g.jsx("span",{className:"font-bold text-white",children:"Trust & Clinical Safety Disclaimer:"})," Care provides guidance to help you find the right healthcare service. It does not diagnose medical conditions or replace professional medical advice. If you are experiencing a life-threatening emergency, please contact your local emergency helpline immediately."]})]}),g.jsxs("div",{className:"pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500",children:[g.jsxs("div",{className:"flex items-center gap-1",children:[g.jsx("span",{children:"Crafted with"}),g.jsx(mv,{className:"w-3.5 h-3.5 text-rose-500 fill-rose-500"}),g.jsx("span",{children:"by Team CareConnect AI (Navneet Aryan, Anshu Kumari, Pragati Jaiswal)"})]}),g.jsxs("div",{className:"flex items-center gap-6",children:[g.jsx("span",{children:"© 2026 CareConnect AI. All rights reserved."}),g.jsx("button",{onClick:e,className:"p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors",title:"Back to top",children:g.jsx(Wx,{className:"w-4 h-4"})})]})]})]})})}function mT(){const[s,e]=dt.useState("idle"),[t,r]=dt.useState(null),[o,l]=dt.useState("all"),[u,d]=dt.useState(null),[h,p]=dt.useState(null),[x,_]=dt.useState(null),[y,M]=dt.useState(!1),[E,b]=dt.useState(!1),S=C=>{var $;r(C),($=C==null?void 0:C.specialty)!=null&&$.id&&l(C.specialty.id)},v=C=>{l(C)},U=C=>{p({...C,symptomsSummary:(t==null?void 0:t.userInput)||""})},L=C=>{p(null),_(C),e("hover")};return g.jsxs("div",{className:"min-h-screen flex flex-col bg-[#FAFCFF] text-slate-900 selection:bg-sky-100 selection:text-sky-900",children:[g.jsx(s_,{onOpenArchitecture:()=>b(!0),onOpenAppointments:()=>M(!0)}),g.jsxs("main",{className:"flex-1",children:[g.jsx(HE,{careState:s,setCareState:e,onRecommendationReceived:S}),g.jsx(XE,{careState:s,setCareState:e,onRecommendationReceived:S,onClearRecommendation:()=>r(null)}),t&&g.jsx(YE,{recommendation:t,onViewDoctors:v}),g.jsx(ZE,{selectedSpecialtyId:o,onSpecialtyChange:l,selectedDoctor:u,onSelectDoctor:d}),g.jsx(nT,{selectedDoctor:u,onSelectDoctor:d,onProceedToBook:U}),g.jsx(lT,{}),g.jsx(cT,{}),g.jsx(dT,{}),g.jsx(hT,{setCareState:e})]}),g.jsx(pT,{onOpenArchitecture:()=>b(!0)}),h&&g.jsx(iT,{bookingData:h,onClose:()=>p(null),onBookingSuccess:L}),x&&g.jsx(sT,{appointment:x,onClose:()=>_(null),onViewAllAppointments:()=>{_(null),M(!0)}}),y&&g.jsx(aT,{onClose:()=>M(!1)}),E&&g.jsx(fT,{onClose:()=>b(!1)})]})}function gT(){return g.jsx(mT,{})}Ux.createRoot(document.getElementById("root")).render(g.jsx(Cx.StrictMode,{children:g.jsx(gT,{})}));
