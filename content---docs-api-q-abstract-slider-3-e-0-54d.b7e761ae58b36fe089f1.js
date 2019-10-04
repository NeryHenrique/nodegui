(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{161:function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return m}));var a=i(0),n=i.n(a),r=n.a.createContext({}),l=function(e){var t=n.a.useContext(r),i=t;return e&&(i="function"==typeof e?e(t):Object.assign({},t,e)),i},s=function(e){var t=l(e.components);return n.a.createElement(r.Provider,{value:t},e.children)};var c="mdxType",o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=function(e,t){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(i[a]=e[a]);return i}(e,["components","mdxType","originalType","parentName"]),d=l(i),m=a,b=d[s+"."+m]||d[m]||o[m]||r;return i?n.a.createElement(b,Object.assign({},{ref:t},c,{components:i})):n.a.createElement(b,Object.assign({},{ref:t},c))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var m=2;m<r;m++)l[m]=i[m];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,i)}d.displayName="MDXCreateElement"},61:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return l})),i.d(t,"rightToc",(function(){return s})),i.d(t,"default",(function(){return d}));i(0);var a=i(161);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l={sidebar_label:"QAbstractSlider",title:"QAbstractSlider"},s=[{value:"Static Methods",id:"static-methods",children:[]},{value:"Instance Properties",id:"instance-properties",children:[]},{value:"Instance Methods",id:"instance-methods",children:[{value:"widget.setSingleStep(step)",id:"widgetsetsinglestepstep",children:[]},{value:"widget.setMaximum(maximum)",id:"widgetsetmaximummaximum",children:[]},{value:"widget.setMinimum(minimum)",id:"widgetsetminimumminimum",children:[]},{value:"widget.setValue(value)",id:"widgetsetvaluevalue",children:[]},{value:"widget.setOrientation(orientation)",id:"widgetsetorientationorientation",children:[]},{value:"slider.maximum()",id:"slidermaximum",children:[]},{value:"slider.minimum()",id:"sliderminimum",children:[]},{value:"slider.value()",id:"slidervalue",children:[]}]}],c={rightToc:s},o="wrapper";function d(e){var t=e.components,i=r(e,["components"]);return Object(a.b)(o,n({},c,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Abstract class to add functionalities common to all slider based widgets.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"This class implements all methods, properties of Qt's ",Object(a.b)("a",n({parentName:"strong"},{href:"https://doc.qt.io/qt-5/qabstractslider.html"}),"QAbstractSlider class")," so that it can be inherited by all slider based widgets")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"QAbstractSlider")," is an abstract class and hence no instances of the same should be created. It exists so that we can add similar functionalities to all slider widget's easily. If you wish to create a slider use ",Object(a.b)("a",n({parentName:"p"},{href:"/docs/api/QDial"}),"QDial")," instead."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"QAbstractSlider is the base class for all widgets. It inherits from another abstract class ",Object(a.b)("a",n({parentName:"strong"},{href:"/docs/api/NodeWidget"}),"NodeWidget"))),Object(a.b)("p",null,"QAbstractSlider will list all methods and properties that are common to all slider widgets in the NodeGui world."),Object(a.b)("h2",{id:"static-methods"},"Static Methods"),Object(a.b)("p",null,"QAbstractSlider can access all the static methods defined in ",Object(a.b)("a",n({parentName:"p"},{href:"/docs/api/NodeWidget"}),"NodeWidget")),Object(a.b)("h2",{id:"instance-properties"},"Instance Properties"),Object(a.b)("p",null,"QAbstractSlider can access all the instance properties defined in ",Object(a.b)("a",n({parentName:"p"},{href:"/docs/api/NodeWidget"}),"NodeWidget")),Object(a.b)("h2",{id:"instance-methods"},"Instance Methods"),Object(a.b)("p",null,"QAbstractSlider can access all the instance methods defined in ",Object(a.b)("a",n({parentName:"p"},{href:"/docs/api/NodeWidget"}),"NodeWidget")),Object(a.b)("p",null,"Additionally it also has the following instance methods:"),Object(a.b)("h3",{id:"widgetsetsinglestepstep"},Object(a.b)("inlineCode",{parentName:"h3"},"widget.setSingleStep(step)")),Object(a.b)("p",null,"Sets the step value for user arrow key slider interaction. It calls the native method ",Object(a.b)("a",n({parentName:"p"},{href:"https://doc.qt.io/qt-5/qabstractslider.html#singleStep-prop"}),"QAbstractSlider: setSingleStep"),"."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"step")," number - Specified single step value.")),Object(a.b)("h3",{id:"widgetsetmaximummaximum"},Object(a.b)("inlineCode",{parentName:"h3"},"widget.setMaximum(maximum)")),Object(a.b)("p",null,"Sets the maximum value for slider. It calls the native method ",Object(a.b)("a",n({parentName:"p"},{href:"https://doc.qt.io/qt-5/qabstractslider.html#maximum-prop"}),"QAbstractSlider: setMaximum"),"."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"maximum")," number - Specified maximum slider value.")),Object(a.b)("h3",{id:"widgetsetminimumminimum"},Object(a.b)("inlineCode",{parentName:"h3"},"widget.setMinimum(minimum)")),Object(a.b)("p",null,"Sets the minimum value for slider. It calls the native method ",Object(a.b)("a",n({parentName:"p"},{href:"https://doc.qt.io/qt-5/qabstractslider.html#minimum-prop"}),"QAbstractSlider: setMinimum"),"."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"minimum")," number - Specified minimum slider value.")),Object(a.b)("h3",{id:"widgetsetvaluevalue"},Object(a.b)("inlineCode",{parentName:"h3"},"widget.setValue(value)")),Object(a.b)("p",null,"Sets the current value for slider. It calls the native method ",Object(a.b)("a",n({parentName:"p"},{href:"https://doc.qt.io/qt-5/qabstractslider.html#value-prop"}),"QAbstractSlider: setValue"),"."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"value")," number - Specified current slider value.")),Object(a.b)("h3",{id:"widgetsetorientationorientation"},Object(a.b)("inlineCode",{parentName:"h3"},"widget.setOrientation(orientation)")),Object(a.b)("p",null,"Sets the current orientation for slider. It calls the native method ",Object(a.b)("a",n({parentName:"p"},{href:"https://doc.qt.io/qt-5/qabstractslider.html#orientation-prop"}),"QAbstractSlider: setOrientation"),"."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"orientation")," Orientation - Specifies visual orientation of the slider. ",Object(a.b)("a",n({parentName:"li"},{href:"/docs/api/QtEnums"}),"Orientation is an enum from Qt"))),Object(a.b)("h3",{id:"slidermaximum"},Object(a.b)("inlineCode",{parentName:"h3"},"slider.maximum()")),Object(a.b)("p",null,"Returns the maximum value (Number) of the slider. It calls the native method ",Object(a.b)("a",n({parentName:"p"},{href:"https://doc.qt.io/qt-5/qabstractslider.html#maximum-prop"}),"QAbstractSlider: maximum"),"."),Object(a.b)("h3",{id:"sliderminimum"},Object(a.b)("inlineCode",{parentName:"h3"},"slider.minimum()")),Object(a.b)("p",null,"Returns the minimum value (Number) of the slider. It calls the native method ",Object(a.b)("a",n({parentName:"p"},{href:"https://doc.qt.io/qt-5/qabstractslider.html#minimum-prop"}),"QAbstractSlider: minimum"),"."),Object(a.b)("h3",{id:"slidervalue"},Object(a.b)("inlineCode",{parentName:"h3"},"slider.value()")),Object(a.b)("p",null,"Returns the current value (Number) of the slider. It calls the native method ",Object(a.b)("a",n({parentName:"p"},{href:"https://doc.qt.io/qt-5/qabstractslider.html#value-prop"}),"QAbstractSlider: value"),"."))}d.isMDXComponent=!0}}]);