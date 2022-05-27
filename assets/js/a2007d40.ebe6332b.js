"use strict";(self.webpackChunklibs_documentations=self.webpackChunklibs_documentations||[]).push([[258],{9613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(v,a(a({ref:t},u),{},{components:n})):r.createElement(v,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},801:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(2848),o=n(9213),i=(n(9496),n(9613)),a=["components"],c={id:"directives",title:"Directives",sidebar_label:"Directives"},s=void 0,l={unversionedId:"core/directives",id:"core/directives",title:"Directives",description:"NgtRepeat",source:"@site/docs/core/directives.mdx",sourceDirName:"core",slug:"/core/directives",permalink:"/docs/core/directives",draft:!1,editUrl:"https://github.com/nartc/angular-three/tree/main/libs/documentations/docs/docs/core/directives.mdx",tags:[],version:"current",frontMatter:{id:"directives",title:"Directives",sidebar_label:"Directives"},sidebar:"docs",previous:{title:"Services",permalink:"/docs/core/services"},next:{title:"Pipes",permalink:"/docs/core/pipes"}},u={},p=[{value:"NgtRepeat",id:"ngtrepeat",level:2},{value:"NgtCursor",id:"ngtcursor",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"ngtrepeat"},"NgtRepeat"),(0,i.kt)("p",null,"This directive acts like an ",(0,i.kt)("inlineCode",{parentName:"p"},"ngFor"),' but the template will iterate over "how many times" instead of "how many items"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!--creating 1000 SobaDetailed--\x3e\n<ngt-soba-detailed #lod *ngFor="let i repeat 1000"></ngt-soba-detailed>\n')),(0,i.kt)("h2",{id:"ngtcursor"},"NgtCursor"),(0,i.kt)("p",null,"This directive will change the cursor style on the ",(0,i.kt)("inlineCode",{parentName:"p"},"document.body")," to pointer on objects' hover, and back to auto on objects' off-hover. This is useful when you want to show a pointer cursor to let the users know that some 3D object is actionable."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"NgtCursor")," can only be used on ",(0,i.kt)("inlineCode",{parentName:"p"},"NgtObject")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!--hovering this mesh will change the cursor--\x3e\n<ngt-mesh ngtCursor></ngt-mesh>\n\n\x3c!--nothing happens when hovering this--\x3e\n<ngt-stats ngtCursor></ngt-stats>\n")))}m.isMDXComponent=!0}}]);