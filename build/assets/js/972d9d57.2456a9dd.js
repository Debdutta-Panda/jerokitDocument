"use strict";(self.webpackChunkjerokit=self.webpackChunkjerokit||[]).push([[937],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9880:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const i={id:"introduction",title:"Introduction",slug:"/"},a=void 0,l={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"img alt",source:"@site/docs/introduction.mdx",sourceDirName:".",slug:"/",permalink:"/jerokitDoc/",draft:!1,tags:[],version:"current",frontMatter:{id:"introduction",title:"Introduction",slug:"/"},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/jerokitDoc/getting-started"}},c={},s=[],p={toc:s};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img alt",src:n(6381).Z,width:"416",height:"106"})),(0,r.kt)("h1",{id:"jetpack-compose"},"Jetpack Compose"),(0,r.kt)("img",{src:"/img/jetpack_compose_logo.png",width:"25%"}),(0,r.kt)("p",null,"Jetpack Compose is just awesome. It offers us to develop nice UI with minimal effort. But this is the half of the truth. If you are developing a very small project then everything will go good. Besides the UI we need to handle the following as well:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigation"),(0,r.kt)("li",{parentName:"ul"},"Permission"),(0,r.kt)("li",{parentName:"ul"},"Status bar color control"),(0,r.kt)("li",{parentName:"ul"},"Soft input mode"),(0,r.kt)("li",{parentName:"ul"},"Modal bottom sheets"),(0,r.kt)("li",{parentName:"ul"},"Back press handle"),(0,r.kt)("li",{parentName:"ul"},"Activity for result, taking image from camera, etc.")),(0,r.kt)("p",null,"Jetpack Compose have all these supported in nice way."),(0,r.kt)("h1",{id:"so-what-is-the-problem"},"So what is the problem?"),(0,r.kt)("p",null,"Well, all these things can be handled only from composable UI code. Imagine a situation when you have to fetch something from server and according to the result you may have to navigate to some page. Imagine that you may have to check/request a permission in a specific situation which depends on logic or fetched data etc. If we have the control of those things only in UI and the situations are being created in non-UI code then it is very difficult to handle all the things. Again for big/complex/sophisticated project we have to use ViewModel/MVVM/Architecture. So, we can not mix UI with logic, database, api calling etc. "),(0,r.kt)("p",null,"So, there should be way to handle navigation, permission, etc. from viewModel."),(0,r.kt)("p",null,"But, the problem is that, navigation, permission etc. should not be in ViewModel. So, the requirement and best-practices are conflicting."),(0,r.kt)("p",null,"Well, ",(0,r.kt)("strong",{parentName:"p"},"JeroKit")," solves this problem. It offers you to control navigation, permisson, etc. directly from viewModel without violating any best-practices."))}u.isMDXComponent=!0},6381:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/jerokit_logo-bcced11a3ffd1b2932492b3eb9a500e0.svg"}}]);