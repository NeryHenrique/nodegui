(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{145:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return d}));t(0);var o=t(173);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function r(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i={sidebar_label:"Architecture",title:"Architecture"},s=[{value:"Qode",id:"qode",children:[]},{value:"Using NodeGui APIs",id:"using-nodegui-apis",children:[]},{value:"Using Nodejs APIs",id:"using-nodejs-apis",children:[]}],l={rightToc:s},c="wrapper";function d(e){var n=e.components,t=r(e,["components"]);return Object(o.b)(c,a({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"By looking at how NodeGui works internally, we would get a clear picture on why the APIs are designed the way they are."),Object(o.b)("h2",{id:"qode"},"Qode"),Object(o.b)("p",null,"NodeGui uses Qt for creating Windows and other UI elements. Hence it exports thin wrappers of native C++ widgets from Qt into Javascript world. Now, every Qt application needs to initialize an instance of ",Object(o.b)("inlineCode",{parentName:"p"},"QApplication")," before creating widgets. The way we do it in C++ Qt application is (dont worry if it doesnt make sense right now):"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-cpp"}),' #include <QApplication>\n #include <QPushButton>\n\n int main(int argc, char *argv[])\n {\n     QApplication app(argc, argv); // Important\n\n     QPushButton hello("Hello world!");\n     hello.resize(100, 30);\n     hello.show();\n\n     return app.exec(); // Important\n }\n')),Object(o.b)("p",null,"Like many Gui libraries Qt uses an event/message loop to handle events from widgets. Hence, when we call ",Object(o.b)("inlineCode",{parentName:"p"},"app.exec()")," Qt starts its message loop and blocks on that line. This is all good when there is only one message loop in the entire app. But since we want to use Qt with NodeJS and NodeJs has its own event loop, we cannot run both Qt and NodeJs on the same thread easily."),Object(o.b)("p",null,"Then following questions arise:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"What if we run Qt on a separate thread?")," : No this is not possible since Qt has a requirement that it needs to run on the main thread."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"What if we run Node on a separate thread?")," : This would mean we need to build a complex bridge between Node and Qt threads to make them communicate. A strict no no.")),Object(o.b)("p",null,"So in order to make both NodeJs and Qt work together we need to find a way to merge these two event loops into one. This is achieved by a custom NodeJs binary we call as ",Object(o.b)("inlineCode",{parentName:"p"},"Qode"),"."),Object(o.b)("p",null,"Qode is a lightly modified fork of Node.js that merges Node's event loop with Qt's event loop. The idea of merging event loops is inspired by Electron and ",Object(o.b)("a",a({parentName:"p"},{href:"https://github.com/yue"}),"other")," Gui libraries developed by ",Object(o.b)("a",a({parentName:"p"},{href:"https://github.com/zcbenz"}),"zcbenz (Cheng Zhao)"),". It has been detailed in a post here: ",Object(o.b)("a",a({parentName:"p"},{href:"https://electronjs.org/blog/electron-internals-node-integration"}),"Electron internals"),". Hence, we reused the logic from electron to achieve smooth integration between Qt and NodeJs."),Object(o.b)("p",null,"The idea is to release a corresponding Qode binary for every NodeJs version that comes out after Node v12.6.\nThe source code of Qode can be found ",Object(o.b)("a",a({parentName:"p"},{href:"https://github.com/nodegui/qode"}),"here"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"*","PS: Qode is a fork of ",Object(o.b)("a",a({parentName:"em"},{href:"https://github.com/yue/yode"}),"Yode"))),Object(o.b)("h2",{id:"using-nodegui-apis"},"Using NodeGui APIs"),Object(o.b)("p",null,"NodeGui offers a number of APIs that support the development of a desktop\napplication. You'd access NodeGui's APIs by requiring its included module:"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-javascript"}),'require("@nodegui/nodegui");\n')),Object(o.b)("p",null,"A window in NodeGui is for instance created using the ",Object(o.b)("inlineCode",{parentName:"p"},"QMainWindow"),"\nclass."),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-javascript"}),'const { QMainWindow } = require("@nodegui/nodegui");\n\nconst win = new QMainWindow();\n')),Object(o.b)("h2",{id:"using-nodejs-apis"},"Using Nodejs APIs"),Object(o.b)("p",null,"NodeGui exposes full access to Node.js. This has two important implications:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"All APIs available in Node.js are available in NodeGui. Calling the\nfollowing code from an NodeGui app works:")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"const fs = require(\"fs\");\n\nconst root = fs.readdirSync(\"/\");\n\n// This will print all files at the root-level of the disk,\n// either '/' or 'C:\\'.\nconsole.log(root);\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"You can use Node.js modules in your application. Pick your favorite npm\nmodule. npm offers currently the world's biggest repository of open-source\ncode – the ability to use well-maintained and tested code that used to be\nreserved for server applications is one of the key features of NodeGui.")),Object(o.b)("p",null,"As an example, to use the official AWS SDK in your application, you'd first\ninstall it as a dependency:"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-sh"}),"npm install --save aws-sdk\n")),Object(o.b)("p",null,"Then, in your NodeGui app, require and use the module as if you were\nbuilding a Node.js application:"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-javascript"}),'// A ready-to-use S3 Client\nconst S3 = require("aws-sdk/clients/s3");\n')),Object(o.b)("p",null,"There is one important caveat: Native Node.js modules (that is, modules that\nrequire compilation of native code before they can be used) will need to be\ncompiled with Qode or a compatible Node version to be used with NodeGui."),Object(o.b)("p",null,"The vast majority of Node.js modules are ",Object(o.b)("em",{parentName:"p"},"not")," native. Only 400 out of the\n~650.000 modules are native. However, if you do need native modules, please\nconsult ",Object(o.b)("a",a({parentName:"p"},{href:"/docs/guides/using-native-node-modules"}),"this guide on how to recompile them for NodeGui"),"."))}d.isMDXComponent=!0},173:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return p}));var o=t(0),a=t.n(o),r=a.a.createContext({}),i=function(e){var n=a.a.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},s=function(e){var n=i(e.components);return a.a.createElement(r.Provider,{value:n},e.children)};var l="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=Object(o.forwardRef)((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,l=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===n.indexOf(o)&&(t[o]=e[o]);return t}(e,["components","mdxType","originalType","parentName"]),d=i(t),p=o,u=d[s+"."+p]||d[p]||c[p]||r;return t?a.a.createElement(u,Object.assign({},{ref:n},l,{components:t})):a.a.createElement(u,Object.assign({},{ref:n},l))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[l]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);