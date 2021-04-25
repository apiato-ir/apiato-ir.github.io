(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{284:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),m=r,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return n?a.a.createElement(d,c(c({ref:t},s),{},{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),o=(n(0),n(284)),i={title:"Architecture"},c={unversionedId:"getting-started/software-architectural-patterns",id:"version-10.x/getting-started/software-architectural-patterns",isDocsHomePage:!1,title:"Architecture",description:"* Porto Introduction",source:"@site/versioned_docs/version-10.x/getting-started/software-architectural-patterns.md",sourceDirName:"getting-started",slug:"/getting-started/software-architectural-patterns",permalink:"/docs/getting-started/software-architectural-patterns",editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-10.x/getting-started/software-architectural-patterns.md",version:"10.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1619394104,formattedLastUpdatedAt:"4/25/2021",frontMatter:{title:"Architecture"},sidebar:"version-10.x/docs",previous:{title:"Installation",permalink:"/docs/getting-started/installation"},next:{title:"Samples",permalink:"/docs/getting-started/samples"}},l=[{value:"Porto SAP",id:"porto",children:[{value:"Introduction",id:"introduction",children:[]},{value:"About Porto",id:"porto",children:[]},{value:"Create a custom Container",id:"porto-new-container",children:[]}]}],s={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#introduction"},"Porto Introduction"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#introduction"},"The Containers Layer"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#porto"},"Container")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#porto"},"Section")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#introduction"},"The Ship Layer")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#porto-new-container"},"Create a custom Container"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#porto-new-container-code-generator"},"Using the Code Generator")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#containter-conventions"},"Container Conventions"))))),Object(o.b)("h2",{id:"porto"},"Porto SAP"),Object(o.b)("h3",{id:"introduction"},"Introduction"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/Mahmoudz/Porto"},"Porto")," is the default and recommended architecture for building apps on Apiato."),Object(o.b)("p",null,"Apiato also supports the popular MVC architecture (with a little modifications). The Apiato features are written using Porto, but can be used by any architecture."),Object(o.b)("h3",{id:"porto"},"About Porto"),Object(o.b)("p",null,"Porto is an architecture that consists of 2 layers the ",Object(o.b)("strong",{parentName:"p"},"Containers")," layer and ",Object(o.b)("strong",{parentName:"p"},"Ship")," layer."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/Mahmoudz/Porto#2-containers-layer"},Object(o.b)("strong",{parentName:"a"},"The Containers layer"))," holds all your application business logic code."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/Mahmoudz/Porto#1-ship-layer"},Object(o.b)("strong",{parentName:"a"},"The Ship layer"))," holds the infrastructure code (your shared code between all Containers).")),Object(o.b)("p",null,"The Containers layer consists of ",Object(o.b)("strong",{parentName:"p"},"Containers"),". These containers are grouped into isolated ",Object(o.b)("strong",{parentName:"p"},"Sections"),", to easily move them around."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/Mahmoudz/Porto#Containers"},Object(o.b)("strong",{parentName:"a"},"A Container"))," can be a ",Object(o.b)("strong",{parentName:"li"},"feature"),", or can be a wrapper around a RESTful API resource, or anything else. A container is allowed to depend on other containers."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/Mahmoudz/Porto#Sections"},Object(o.b)("strong",{parentName:"a"},"A Section"))," (is a group of related containers), it can be ",Object(o.b)("strong",{parentName:"li"},"service")," ",Object(o.b)("em",{parentName:"li"},"(micro or bigger)"),", or a sub-system within the main system, or antyhing else. A Section is not allowed to directly communicate with another service, except via Events or Commands.")),Object(o.b)("p",null,"The default Apiato Sections:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"The App Section"),": is the only default section Apiato provides, it contains all the default containers. You can create additional sections anytime, and rename them to anything you want. (ex: Inventory Section, Shipping Section, Order Section, Payment Section...)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"The Vendor"),": is a special Section, it only contains installed and reusable Containers. Similar to the vendor directory at the root. Any Section is allowed to depend on the Vendor Section.")),Object(o.b)("hr",null),Object(o.b)("p",null,"Spending 30 minutes, reading the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Mahmoudz/Porto"},"Porto Document")," before getting started, is a great\ninvestment of time."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"porto-new-container"},"Create a custom Container"),Object(o.b)("h4",{id:"porto-new-container-code-generator"},"Using the Code Generator:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"php artisan apiato:generate:container\n")),Object(o.b)("p",null,"Refer to the ",Object(o.b)("a",{parentName:"p",href:"../core-features/code-generator"},"code generator")," page for more details."),Object(o.b)("h4",{id:"containter-conventions"},"Container Conventions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Containers name SHOULD start with Capital. Use CamelCase to rename Containers."),Object(o.b)("li",{parentName:"ul"},'Namespace should be the same as the container name, (if container name is "Printer" the namespace should be\n',Object(o.b)("inlineCode",{parentName:"li"},"App\\Containers\\SectionName\\Printer"),")."),Object(o.b)("li",{parentName:"ul"},"Container MAY be named anything, however a good practice is to name it to its most important Model name.\n",Object(o.b)("em",{parentName:"li"},"Example: If the User Story is (User can create a Store and Store can have Items) then we you could have 3\nContainers (User, Store and Item)."))))}p.isMDXComponent=!0}}]);