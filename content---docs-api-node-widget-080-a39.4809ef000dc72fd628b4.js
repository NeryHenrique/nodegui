(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{173:function(e,t,i){"use strict";i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return c}));var n=i(0),a=i.n(n),d=a.a.createContext({}),l=function(e){var t=a.a.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):Object.assign({},t,e)),i},r=function(e){var t=l(e.components);return a.a.createElement(d.Provider,{value:t},e.children)};var s="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},o=Object(n.forwardRef)((function(e,t){var i=e.components,n=e.mdxType,d=e.originalType,r=e.parentName,s=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(i[n]=e[n]);return i}(e,["components","mdxType","originalType","parentName"]),o=l(i),c=n,h=o[r+"."+c]||o[c]||b[c]||d;return i?a.a.createElement(h,Object.assign({},{ref:t},s,{components:i})):a.a.createElement(h,Object.assign({},{ref:t},s))}));function c(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var d=i.length,l=new Array(d);l[0]=o;var r={};for(var b in t)hasOwnProperty.call(t,b)&&(r[b]=t[b]);r.originalType=e,r[s]="string"==typeof e?e:n,l[1]=r;for(var c=2;c<d;c++)l[c]=i[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,i)}o.displayName="MDXCreateElement"},67:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return l})),i.d(t,"rightToc",(function(){return r})),i.d(t,"default",(function(){return o}));i(0);var n=i(173);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},d=Object.keys(e);for(n=0;n<d.length;n++)i=d[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)i=d[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l={sidebar_label:"NodeWidget",title:"NodeWidget"},r=[{value:"Example",id:"example",children:[]},{value:"Static Methods",id:"static-methods",children:[]},{value:"Instance Properties",id:"instance-properties",children:[{value:"widget.layout",id:"widgetlayout",children:[]},{value:"widget.type",id:"widgettype",children:[]}]},{value:"Instance Methods",id:"instance-methods",children:[{value:"widget.show()",id:"widgetshow",children:[]},{value:"widget.resize(width, height)",id:"widgetresizewidth-height",children:[]},{value:"widget.close()",id:"widgetclose",children:[]},{value:"widget.setLayout(layout)",id:"widgetsetlayoutlayout",children:[]},{value:"widget.setStyleSheet(styleSheet)",id:"widgetsetstylesheetstylesheet",children:[]},{value:"widget.setCursor(cursor)",id:"widgetsetcursorcursor",children:[]},{value:"widget.setWindowIcon(icon)",id:"widgetsetwindowiconicon",children:[]},{value:"widget.setWindowState(state)",id:"widgetsetwindowstatestate",children:[]},{value:"widget.setWindowTitle(title)",id:"widgetsetwindowtitletitle",children:[]},{value:"widget.styleSheet()",id:"widgetstylesheet",children:[]},{value:"widget.hide()",id:"widgethide",children:[]},{value:"widget.move(x, y)",id:"widgetmovex-y",children:[]},{value:"widget.setObjectName(objectName)",id:"widgetsetobjectnameobjectname",children:[]},{value:"widget.objectName()",id:"widgetobjectname",children:[]},{value:"widget.setMouseTracking(isMouseTracked)",id:"widgetsetmousetrackingismousetracked",children:[]},{value:"widget.setEnabled(enabled)",id:"widgetsetenabledenabled",children:[]},{value:"widget.setFixedSize(width, height)",id:"widgetsetfixedsizewidth-height",children:[]},{value:"widget.setGeometry(x, y, width, height)",id:"widgetsetgeometryx-y-width-height",children:[]},{value:"widget.setMaximumSize(width, height)",id:"widgetsetmaximumsizewidth-height",children:[]},{value:"widget.setMinimumSize(width, height)",id:"widgetsetminimumsizewidth-height",children:[]},{value:"widget.repaint()",id:"widgetrepaint",children:[]},{value:"widget.update()",id:"widgetupdate",children:[]},{value:"widget.pos()",id:"widgetpos",children:[]},{value:"widget.size()",id:"widgetsize",children:[]},{value:"widget.updateGeometry()",id:"widgetupdategeometry",children:[]},{value:"widget.setAttribute(attributeName, switchOn)",id:"widgetsetattributeattributename-switchon",children:[]},{value:"widget.testAttribute(attributeName)",id:"widgettestattributeattributename",children:[]}]}],s={rightToc:r},b="wrapper";function o(e){var t=e.components,i=d(e,["components"]);return Object(n.b)(b,a({},s,i,{components:t,mdxType:"MDXLayout"}),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Abstract class to add functionalities common to all Widgets.")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"This class implements all methods, properties of Qt's ",Object(n.b)("a",a({parentName:"strong"},{href:"https://doc.qt.io/qt-5/qwidget.html"}),"QWidget class")," so that it can be inherited by all widgets")),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"NodeWidget")," is an abstract class and hence no instances of the same should be created. It exists so that we can add similar functionalities to all widget's easily. Additionally it helps in type checking process. If you wish to create a ",Object(n.b)("inlineCode",{parentName:"p"},"div")," like widget use ",Object(n.b)("a",a({parentName:"p"},{href:"/docs/api/QWidget"}),"QWidget")," instead."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"NodeWidget is the base class for all widgets. It inherits from another abstract class ",Object(n.b)("a",a({parentName:"strong"},{href:"/docs/api/EventWidget"}),"EventWidget"))),Object(n.b)("h3",{id:"example"},"Example"),Object(n.b)("pre",null,Object(n.b)("code",a({parentName:"pre"},{className:"language-javascript"}),'const {\n  NodeWidget,\n  QPushButton,\n  QWidget,\n  QRadioButton\n} = require("@nodegui/nodegui");\n\n// showWidget can accept any widget since it expects NodeWidget\nconst showWidget = (widget: NodeWidget) => {\n  widget.show();\n};\n\nshowWidget(new QPushButton());\nshowWidget(new QWidget());\nshowWidget(new QRadioButton());\n')),Object(n.b)("p",null,"NodeWidget will list all methods and properties that are common to all widgets in the NodeGui world."),Object(n.b)("h2",{id:"static-methods"},"Static Methods"),Object(n.b)("p",null,"NodeWidget can access all the static methods defined in ",Object(n.b)("a",a({parentName:"p"},{href:"/docs/api/EventWidget"}),"EventWidget")),Object(n.b)("h2",{id:"instance-properties"},"Instance Properties"),Object(n.b)("p",null,"NodeWidget can access all the instance properties defined in ",Object(n.b)("a",a({parentName:"p"},{href:"/docs/api/EventWidget"}),"EventWidget")),Object(n.b)("p",null,"Additionally it also has the following instance properties:"),Object(n.b)("h3",{id:"widgetlayout"},Object(n.b)("inlineCode",{parentName:"h3"},"widget.layout")),Object(n.b)("p",null,"A ",Object(n.b)("inlineCode",{parentName:"p"},"NodeLayout")," representing current layout that is set on the widget."),Object(n.b)("h3",{id:"widgettype"},Object(n.b)("inlineCode",{parentName:"h3"},"widget.type")),Object(n.b)("p",null,"This will return the string ",Object(n.b)("inlineCode",{parentName:"p"},"widget")," for all widgets."),Object(n.b)("h2",{id:"instance-methods"},"Instance Methods"),Object(n.b)("p",null,"NodeWidget can access all the instance methods defined in ",Object(n.b)("a",a({parentName:"p"},{href:"/docs/api/EventWidget"}),"EventWidget")),Object(n.b)("p",null,"Additionally it also has the following instance methods:"),Object(n.b)("h3",{id:"widgetshow"},Object(n.b)("inlineCode",{parentName:"h3"},"widget.show()")),Object(n.b)("p",null,"Shows the widget and its children. It calls the native method ",Object(n.b)("a",a({parentName:"p"},{href:"https://doc.qt.io/qt-5/qwidget.html#show"}),"QWidget: show"),"."),Object(n.b)("h3",{id:"widgetresizewidth-height"},Object(n.b)("inlineCode",{parentName:"h3"},"widget.resize(width, height)")),Object(n.b)("p",null,"Resizes the widget. It calls the native method ",Object(n.b)("a",a({parentName:"p"},{href:"https://doc.qt.io/qt-5/qwidget.html#resize-1"}),"QWidget: resize"),"."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"width")," number - Pixels."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"height")," number - Pixels.")),Object(n.b)("h3",{id:"widgetclose"},Object(n.b)("inlineCode",{parentName:"h3"},"widget.close()")),Object(n.b)("p",null,"Closes this widget. It calls the native method ",Object(n.b)("a",a({parentName:"p"},{href:"https://doc.qt.io/qt-5/qwidget.html#close"}),"QWidget: close"),".\nReturns true if the widget was closed; otherwise returns false."),Object(n.b)("h3",{id:"widgetsetlayoutlayout"},Object(n.b)("inlineCode",{parentName:"h3"},"widget.setLayout(layout)")),Object(n.b)("p",null,"Sets the layout manager for this widget to layout. It calls the native method ",Object(n.b)("a",a({parentName:"p"},{href:"https://doc.qt.io/qt-5/qwidget.html#setLayout"}),"QWidget: setLayout"),"."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"layout")," NodeLayout - Any layout that inherits from NodeLayout class.")),Object(n.b)("h3",{id:"widgetsetstylesheetstylesheet"},Object(n.b)("inlineCode",{parentName:"h3"},"widget.setStyleSheet(styleSheet)")),Object(n.b)("p",null,"Sets the property that holds the widget's style sheet. It calls the native method ",Object(n.b)("a",a({parentName:"p"},{href:"https://doc.qt.io/qt-5/qwidget.html#styleSheet-prop"}),"QWidget: styleSheet"),"."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"styleSheet")," string - String which holds the widget's style sheet. Make sure you create this string using ",Object(n.b)("inlineCode",{parentName:"li"},"StyleSheet.create()"))),Object(n.b)("h3",{id:"widgetsetcursorcursor"},Object(n.b)("inlineCode",{parentName:"h3"},"widget.setCursor(cursor)")),Object(n.b)("p",null,"Sets the window mouse cursor. It calls the native method ",Object(n.b)("a",a({parentName:"p"},{href:"https://doc.qt.io/qt-5/qwidget.html#cursor-prop"}),"QWidget: setCursor"),"."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"cursor")," CursorShape - Specifies current cursor for the window ",Object(n.b)("a",a({parentName:"li"},{href:"/docs/api/QtEnums"}),"CursorShape is an enum from Qt"))),Object(n.b)("h3",{id:"widgetsetwindowiconicon"},Object(n.b)("inlineCode",{parentName:"h3"},"widget.setWindowIcon(icon)")),Object(n.b)("p",null,"Sets the window icon. It calls the native method ",Object(n.b)("a",a({parentName:"p"},{href:"https://doc.qt.io/qt-5/qwidget.html#windowIcon-prop"}),"QWidget: setWindowIcon"),"."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"icon")," QIcon - Specifies icon for the window.")),Object(n.b)("h3",{id:"widgetsetwindowstatestate"},Object(n.b)("inlineCode",{parentName:"h3"},"widget.setWindowState(state)")),Object(n.b)("p",null,"Sets the window state. It calls the native method ",Object(n.b)("a",a({parentName:"p"},{href:"https://doc.qt.io/qt-5/qwidget.html#setWindowState"}),"QWidget: setWindowState"),"."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"state")," WindowState - Specifies current state for the window ",Object(n.b)("a",a({parentName:"li"},{href:"/docs/api/QtEnums"}),"WindowState is an enum from Qt"))),Object(n.b)("h3",{id:"widgetsetwindowtitletitle"},Object(n.b)("inlineCode",{parentName:"h3"},"widget.setWindowTitle(title)")),Object(n.b)("p",null,"Sets the window title property. It calls the native method ",Object(n.b)("a",a({parentName:"p"},{href:"https://doc.qt.io/qt-5/qwidget.html#windowTitle-prop"}),"QWidget: setWindowTitle"),"."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"title")," string - String which holds the windows title.")),Object(n.b)("h3",{id:"widgetstylesheet"},Object(n.b)("inlineCode",{parentName:"h3"},"widget.styleSheet()")),Object(n.b)("p",null,"Gets the property that holds the widget's style sheet. It calls the native method ",Object(n.b)("a",a({parentName:"p"},{href:"https://doc.qt.io/qt-5/qwidget.html#styleSheet-prop"}),"QWidget: styleSheet"),"."),Object(n.b)("h3",{id:"widgethide"},Object(n.b)("inlineCode",{parentName:"h3"},"widget.hide()")),Object(n.b)("p",null,"Hides the widget and its children. It calls the native method ",Object(n.b)("a",a({parentName:"p"},{href:"https://doc.qt.io/qt-5/qwidget.html#hide"}),"QWidget: hide"),"."),Object(n.b)("h3",{id:"widgetmovex-y"},Object(n.b)("inlineCode",{parentName:"h3"},"widget.move(x, y)")),Object(n.b)("p",null,"Sets the screen position of the widget. It calls the native method ",Object(n.b)("a",a({parentName:"p"},{href:"https://doc.qt.io/qt-5/qwidget.html#move-1"}),"QWidget: move"),"."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"x")," number - Pixels."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"y")," number - Pixels.")),Object(n.b)("h3",{id:"widgetsetobjectnameobjectname"},Object(n.b)("inlineCode",{parentName:"h3"},"widget.setObjectName(objectName)")),Object(n.b)("p",null,"Sets the object name of the widget in Qt. It calls the native method ",Object(n.b)("a",a({parentName:"p"},{href:"https://doc.qt.io/qt-5/qobject.html#objectName-prop"}),"QObject: setObjectName"),". Object name can be analogous to ",Object(n.b)("inlineCode",{parentName:"p"},"id")," of an element in the web world. Using the objectName of the widget one can reference it in the Qt's stylesheet much like what we do with id in the web world."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"objectName")," string - String which holds the widget's object name.")),Object(n.b)("h3",{id:"widgetobjectname"},Object(n.b)("inlineCode",{parentName:"h3"},"widget.objectName()")),Object(n.b)("p",null,"Gets the property that holds the widget's object name. It calls the native method ",Object(n.b)("a",a({parentName:"p"},{href:"https://doc.qt.io/qt-5/qobject.html#objectName-prop"}),"QObject: setObjectName"),"."),Object(n.b)("h3",{id:"widgetsetmousetrackingismousetracked"},Object(n.b)("inlineCode",{parentName:"h3"},"widget.setMouseTracking(isMouseTracked)")),Object(n.b)("p",null,"Sets the property that tells whether mouseTracking is enabled for the widget. It calls the native method ",Object(n.b)("a",a({parentName:"p"},{href:"https://doc.qt.io/qt-5/qwidget.html#mouseTracking-prop"}),"QWidget: mouseTracking"),"."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"isMouseTracked")," boolean - Set it to true to enable mouse tracking.")),Object(n.b)("h3",{id:"widgetsetenabledenabled"},Object(n.b)("inlineCode",{parentName:"h3"},"widget.setEnabled(enabled)")),Object(n.b)("p",null,"Sets the property that tells whether the widget is enabled. It calls the native method ",Object(n.b)("a",a({parentName:"p"},{href:"https://doc.qt.io/qt-5/qwidget.html#enabled-prop"}),"QWidget: enabled"),". In general an enabled widget handles keyboard and mouse events; a disabled widget does not."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"enabled")," boolean - Set it to true to enable the widget.")),Object(n.b)("h3",{id:"widgetsetfixedsizewidth-height"},Object(n.b)("inlineCode",{parentName:"h3"},"widget.setFixedSize(width, height)")),Object(n.b)("p",null,"Sets both the minimum and maximum sizes of the widget. It calls the native method ",Object(n.b)("a",a({parentName:"p"},{href:"https://doc.qt.io/qt-5/qwidget.html#setFixedSize"}),"QWidget: setFixedSize"),"."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"width")," number - Pixels."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"height")," number - Pixels.")),Object(n.b)("h3",{id:"widgetsetgeometryx-y-width-height"},Object(n.b)("inlineCode",{parentName:"h3"},"widget.setGeometry(x, y, width, height)")),Object(n.b)("p",null,"Sets the screen position as well as size of the widget. It calls the native method ",Object(n.b)("a",a({parentName:"p"},{href:"https://doc.qt.io/qt-5/qwidget.html#setGeometry-1"}),"QWidget: setGeometry"),"."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"x")," number - Pixels."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"y")," number - Pixels."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"width")," number - Pixels."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"height")," number - Pixels.")),Object(n.b)("h3",{id:"widgetsetmaximumsizewidth-height"},Object(n.b)("inlineCode",{parentName:"h3"},"widget.setMaximumSize(width, height)")),Object(n.b)("p",null,"Sets the maximum size of the widget. It calls the native method ",Object(n.b)("a",a({parentName:"p"},{href:"https://doc.qt.io/qt-5/qwidget.html#setMaximumSize-1"}),"QWidget: setMaximumSize"),"."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"width")," number - Pixels."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"height")," number - Pixels.")),Object(n.b)("h3",{id:"widgetsetminimumsizewidth-height"},Object(n.b)("inlineCode",{parentName:"h3"},"widget.setMinimumSize(width, height)")),Object(n.b)("p",null,"Sets the minimum size of the widget. It calls the native method ",Object(n.b)("a",a({parentName:"p"},{href:"https://doc.qt.io/qt-5/qwidget.html#setMinimumSize-1"}),"QWidget: setMinimumSize"),"."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"width")," number - Pixels."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"height")," number - Pixels.")),Object(n.b)("h3",{id:"widgetrepaint"},Object(n.b)("inlineCode",{parentName:"h3"},"widget.repaint()")),Object(n.b)("p",null,"Repaints the widget. It calls the native method ",Object(n.b)("a",a({parentName:"p"},{href:"https://doc.qt.io/qt-5/qwidget.html#repaint"}),"QWidget: repaint"),"."),Object(n.b)("h3",{id:"widgetupdate"},Object(n.b)("inlineCode",{parentName:"h3"},"widget.update()")),Object(n.b)("p",null,"Updates the widget. It calls the native method ",Object(n.b)("a",a({parentName:"p"},{href:"https://doc.qt.io/qt-5/qwidget.html#update"}),"QWidget: update"),"."),Object(n.b)("h3",{id:"widgetpos"},Object(n.b)("inlineCode",{parentName:"h3"},"widget.pos()")),Object(n.b)("p",null,"Returns the current widget position. It calls the native method ",Object(n.b)("a",a({parentName:"p"},{href:"https://doc.qt.io/qt-5/qwidget.html#pos-prop"}),"QWidget: pos"),". The returned size object contains x and y coordinates in pixels."),Object(n.b)("h3",{id:"widgetsize"},Object(n.b)("inlineCode",{parentName:"h3"},"widget.size()")),Object(n.b)("p",null,"Returns the current widget size. It calls the native method ",Object(n.b)("a",a({parentName:"p"},{href:"https://doc.qt.io/qt-5/qwidget.html#size-prop"}),"QWidget: size"),". The returned size object contains width and height in pixels."),Object(n.b)("h3",{id:"widgetupdategeometry"},Object(n.b)("inlineCode",{parentName:"h3"},"widget.updateGeometry()")),Object(n.b)("p",null,"Notifies the layout system that this widget has changed and may need to change geometry."),Object(n.b)("h3",{id:"widgetsetattributeattributename-switchon"},Object(n.b)("inlineCode",{parentName:"h3"},"widget.setAttribute(attributeName, switchOn)")),Object(n.b)("p",null,"Sets the attribute attribute on this widget if on is true; otherwise clears the attribute. It calls the native method ",Object(n.b)("a",a({parentName:"p"},{href:"https://doc.qt.io/qt-5/qwidget.html#setAttribute"}),"QWidget: setAttribute"),"."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"attributeName")," WidgetAttribute - Enum from WidgetAttribute."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"switchOn")," boolean - set it to true if you want to enable an attribute.")),Object(n.b)("h3",{id:"widgettestattributeattributename"},Object(n.b)("inlineCode",{parentName:"h3"},"widget.testAttribute(attributeName)")),Object(n.b)("p",null,"Returns true if attribute attribute is set on this widget; otherwise returns false. It calls the native method ",Object(n.b)("a",a({parentName:"p"},{href:"https://doc.qt.io/qt-5/qwidget.html#testAttribute"}),"QWidget: testAttribute"),"."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"attributeName")," WidgetAttribute - Enum from WidgetAttribute.")),Object(n.b)("h4",{id:"widgetinheritsclassname"},Object(n.b)("inlineCode",{parentName:"h4"},"widget.inherits(className)")),Object(n.b)("p",null,"Returns true if this object is an instance of a class that inherits className or a QObject subclass that inherits className; otherwise returns false. A class is considered to inherit itself. Example:"),Object(n.b)("pre",null,Object(n.b)("code",a({parentName:"pre"},{className:"language-ts"}),'const progressBar = new QProgressBar();\nprogressBar.inherits("QObject");         // returns true\nprogressBar.inherits("QProgressBar");    // returns true\nprogressBar.inherits("QTabWidget");      // returns false\n')),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"className")," string - Name of the class to get if this widget inherits from.")))}o.isMDXComponent=!0}}]);