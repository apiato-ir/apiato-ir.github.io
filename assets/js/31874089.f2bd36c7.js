"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6050],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,f=c["".concat(l,".").concat(m)]||c[m]||s[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9493:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],d={title:"Admin Dashboard"},l=void 0,p={unversionedId:"core-features/admin-dashboard",id:"version-9.x/core-features/admin-dashboard",isDocsHomePage:!1,title:"Admin Dashboard",description:"- The provided Admin route",source:"@site/versioned_docs/version-9.x/core-features/admin-dashboard.md",sourceDirName:"core-features",slug:"/core-features/admin-dashboard",permalink:"/docs/9.x/core-features/admin-dashboard",editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/core-features/admin-dashboard.md",tags:[],version:"9.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1618748235,formattedLastUpdatedAt:"4/18/2021",frontMatter:{title:"Admin Dashboard"},sidebar:"version-9.x/docs",previous:{title:"Useful Commands",permalink:"/docs/9.x/core-features/useful-commands"},next:{title:"Profiler",permalink:"/docs/9.x/core-features/profiler"}},u=[{value:"The provided Admin route",id:"the-provided-admin-route",children:[]},{value:"How it works",id:"how-it-works",children:[]},{value:"Change default Admin credentials",id:"change-default-admin-credentials",children:[]}],s={toc:u};function c(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#the-provided-admin-route"},"The provided Admin route")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#how-it-works"},"How it works")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#change-default-admin-credentials"},"Change default Admin credentials"))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Apiato does not recommend serving HTML pages. Instead, you should build your own Frontend App completely isolated from the Backend code.")),(0,o.kt)("h2",{id:"the-provided-admin-route"},"The provided Admin route"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"http://admin.apiato.test/dashboard"},"http://admin.apiato.test/dashboard"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"http://admin.apiato.test/login"},"http://admin.apiato.test/login"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"http://admin.apiato.test/logout"},"http://admin.apiato.test/logout")))),(0,o.kt)("h2",{id:"how-it-works"},"How it works"),(0,o.kt)("p",null,"Visiting ",(0,o.kt)("a",{parentName:"p",href:"http://admin.apiato.test/dashboard"},"http://admin.apiato.test/dashboard")," will redirect you to a login page for admins."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"the default credentials are:"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"email: ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"mailto:admin@admin.com"},"admin@admin.com")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"password: ",(0,o.kt)("strong",{parentName:"p"},"admin"))))),(0,o.kt)("p",null,"It is up to you to build and customize your admin dashboard however you prefer."),(0,o.kt)("h2",{id:"change-default-admin-credentials"},"Change default Admin credentials"),(0,o.kt)("p",null,"you can change these default values from the seeder class in the Authorization container: ",(0,o.kt)("inlineCode",{parentName:"p"},"app/Containers/Authorization/Data/Seeders/RolesAndPermissionsSeeder.php"),"."))}c.isMDXComponent=!0}}]);