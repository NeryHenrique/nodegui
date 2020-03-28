(window.webpackJsonp=window.webpackJsonp||[]).push([[297],{398:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(1),o=t(6),i=(t(0),t(431)),a={sidebar_label:"process",title:"process"},s={id:"api/manual/process",title:"process",description:"> Extensions to process object.",source:"@site/docs/api/manual/process.md",permalink:"/docs/api/manual/process",editUrl:"https://github.com/nodegui/nodegui/edit/master/website/docs/api/manual/process.md",sidebar_label:"process",sidebar:"api",previous:{title:"Range",permalink:"/docs/api/generated/interfaces/range"}},c=[{value:"Properties",id:"properties",children:[{value:"<code>process.versions.qode</code> <em>Readonly</em>",id:"processversionsqode-readonly",children:[]},{value:"<code>process.versions.qt(compiled)</code> <em>Readonly</em>",id:"processversionsqtcompiled-readonly",children:[]},{value:"<code>process.versions.qt(runtime)</code> <em>Readonly</em>",id:"processversionsqtruntime-readonly",children:[]}]}],p={rightToc:c};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Extensions to process object.")),Object(i.b)("p",null,"Qode's ",Object(i.b)("inlineCode",{parentName:"p"},"process")," object is extended from the\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://nodejs.org/api/process.html"}),"Node.js ",Object(i.b)("inlineCode",{parentName:"a"},"process")," object"),".\nIt adds the following properties :"),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"processversionsqode-readonly"},Object(i.b)("inlineCode",{parentName:"h3"},"process.versions.qode")," ",Object(i.b)("em",{parentName:"h3"},"Readonly")),Object(i.b)("p",null,"A ",Object(i.b)("inlineCode",{parentName:"p"},"String")," representing Qode's version string. Qode is a lightly modified version of NodeJs that allows running Qt and NodeJs under a single process."),Object(i.b)("h3",{id:"processversionsqtcompiled-readonly"},Object(i.b)("inlineCode",{parentName:"h3"},"process.versions.qt(compiled)")," ",Object(i.b)("em",{parentName:"h3"},"Readonly")),Object(i.b)("p",null,"A ",Object(i.b)("inlineCode",{parentName:"p"},"String")," representing Qt version used when compile Qode binary. This can be useful to know which version of Qt is binary compatible with the version of Qode you are running. This is useful when running qode with a different version of Qt than what it was compiled with."),Object(i.b)("h3",{id:"processversionsqtruntime-readonly"},Object(i.b)("inlineCode",{parentName:"h3"},"process.versions.qt(runtime)")," ",Object(i.b)("em",{parentName:"h3"},"Readonly")),Object(i.b)("p",null,"A ",Object(i.b)("inlineCode",{parentName:"p"},"String")," representing Qt version of the Qt library loaded during runtime. This can be useful to know which version of Qt you are using at runtime as compared to the version of Qt used when Qode was compiled.This is possible since Qt is dynamically linked to Qode and you could replace the Qt dynamic libraries with any binary compatible library. Hence, this is useful when running qode with a different version of Qt than what it was compiled with."))}l.isMDXComponent=!0},431:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),l=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s({},n,{},e)),t},d=function(e){var n=l(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(t),b=r,m=d["".concat(a,".").concat(b)]||d[b]||u[b]||i;return t?o.a.createElement(m,s({ref:n},p,{components:t})):o.a.createElement(m,s({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=b;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);