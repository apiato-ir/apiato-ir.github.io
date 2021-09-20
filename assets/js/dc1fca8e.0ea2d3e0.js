(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{255:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(8),i=(t(0),t(281)),o={title:"Helpers"},l={unversionedId:"optional-components/helpers",id:"optional-components/helpers",isDocsHomePage:!1,title:"Helpers",description:"- Definition",source:"@site/docs/optional-components/helpers.md",sourceDirName:"optional-components",slug:"/optional-components/helpers",permalink:"/docs/next/optional-components/helpers",editUrl:"https://github.com/apiato/documentation/tree/master/docs/optional-components/helpers.md",version:"current",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1618838814,formattedLastUpdatedAt:"4/19/2021",frontMatter:{title:"Helpers"},sidebar:"docs",previous:{title:"Configs",permalink:"/docs/next/optional-components/configs"},next:{title:"Commands",permalink:"/docs/next/optional-components/commands"}},c=[{value:"Definition",id:"definition",children:[]},{value:"Principles",id:"principles",children:[]},{value:"Rules",id:"rules",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Usage",id:"usage",children:[]}],p={toc:c};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#definition"},"Definition")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#principles"},"Principles")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#rules"},"Rules")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#usage"},"Usage"))),Object(i.b)("h3",{id:"definition"},"Definition"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Helpers are global PHP functions that you can call from anywhere in your application."),Object(i.b)("li",{parentName:"ul"},"Helper files are simple PHP files that hold functions.")),Object(i.b)("h3",{id:"principles"},"Principles"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Helpers SHOULD be created inside the Containers. However, general Helpers CAN be created in the Ship layer."),Object(i.b)("li",{parentName:"ul"},"You can create as many helper files as you need, per container."),Object(i.b)("li",{parentName:"ul"},"You can implement as many helper functions as you need, per helper file."),Object(i.b)("li",{parentName:"ul"},"All Helper files will be autoloaded by the framework.")),Object(i.b)("h3",{id:"rules"},"Rules"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Helpers CAN be placed inside the Containers in Helpers folder or on the Ship for the general Helpers.")),Object(i.b)("h3",{id:"folder-structure"},"Folder Structure"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"- App\n  - Containers\n    - {section-name}\n      - {container-name}\n        - Helpers\n          - helpers.php\n          - mix.php\n          - ...\n\n  - Ship\n    - Helpers\n      - helpers.php\n      - mix.php\n      - ...\n")),Object(i.b)("h3",{id:"usage"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"if (!function_exists('add')) {\n    function add(int $firstNumber, int $secondNumber): int\n    {\n        return $firstNumber + $secondNumber;\n    }\n}\n")))}s.isMDXComponent=!0},281:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),s=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return t?a.a.createElement(m,l(l({ref:n},p),{},{components:t})):a.a.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);