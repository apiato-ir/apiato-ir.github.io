(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),o=(n(0),n(221)),i={title:"Code Generator"},c={unversionedId:"features/code-generator",id:"version-9.x/features/code-generator",isDocsHomePage:!1,title:"Code Generator",description:"- Introduction",source:"@site/versioned_docs/version-9.x/features/code-generator.md",slug:"/features/code-generator",permalink:"/docs/features/code-generator",editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/features/code-generator.md",version:"9.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1618147270,formattedLastUpdatedAt:"4/11/2021",sidebar:"version-9.x/docs",previous:{title:"Conventions and Principles",permalink:"/docs/getting-started/conventions-and-principles"},next:{title:"API Docs Generator",permalink:"/docs/features/api-docs-generator"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Available Code Generator Commands",id:"available-code-generator-commands",children:[]},{value:"Demo",id:"demo",children:[]},{value:"Custom Code Stubs (aka. Customizing the Generator)",id:"custom-code-stubs",children:[]},{value:"Contributing",id:"contributing",children:[]},{value:"For AngularJS 2 Users",id:"for-angularjs-users",children:[]}],s={toc:l};function p(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#introduction"},"Introduction")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#available-code-generator-commands"},"Available Code Generator Commands")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#demo"},"Demo")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#custom-code-stubs"},"Custom Code Stubs")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#contributing"},"Contributing")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#for-angularjs-users"},"For AngularJS 2 Users"))),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"Code Generators are a nice way to speed up development by creating boiler-plate code based on your inputs. You may\nalready be familiar with the Laravel code generators (",Object(o.b)("inlineCode",{parentName:"p"},"php artisan make:controller"),"). "),Object(o.b)("p",null,"Apiato code generator works the same way. In addition, it can generate a full Container with fully working CRUD operations, including routes, requests, controller, Actions, Repositories, Models, Migrations, documentation.... and much more)"),Object(o.b)("h2",{id:"available-code-generator-commands"},"Available Code Generator Commands"),Object(o.b)("p",null,"To see the list of code generators type ",Object(o.b)("inlineCode",{parentName:"p"},"php artisan"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'  apiato:generate:container        Create a Container for apiato from scratch\n  apiato:generate:action           Create a Action file for a Container\n  apiato:generate:configuration    Create a Configuration file for a Container\n  apiato:generate:controller       Create a controller for a container\n  apiato:generate:exception        Create a new Exception class\n  apiato:generate:job              Create a new Job class\n  apiato:generate:mail             Create a new Mail class\n  apiato:generate:migration        Create an "empty" migration file for a Container\n  apiato:generate:model            Create a new Model class\n  apiato:generate:notification     Create a new Notification class\n  apiato:generate:repository       Create a new Repository class\n  apiato:generate:request          Create a new Request class\n  apiato:generate:route            Create a new Route class\n  apiato:generate:seeder           Create a new Seeder class\n  apiato:generate:serviceprovider  Create a ServiceProvider for a Container\n  apiato:generate:subaction        Create a new SubAction class\n  apiato:generate:task             Create a Task file for a Container\n  apiato:generate:transformer      Create a new Transformer class for a given Model\n\n')),Object(o.b)("p",null,"To get more info about each command, add ",Object(o.b)("inlineCode",{parentName:"p"},"--help")," to the command. Example: ",Object(o.b)("inlineCode",{parentName:"p"},"php artisan apiato:generate:route --help"),". The help page shows all options, which can be directly passed to the command."),Object(o.b)("p",null,"If you do not provide respective information via the command line options, a wizard will be displayed to guide you through."),Object(o.b)("p",null,"For example, you can directly call ",Object(o.b)("inlineCode",{parentName:"p"},"php artisan apiato:generate:controller --file=UserController")," to directly specify the class\nto be generated. The wizard, however, will ask you for the ",Object(o.b)("inlineCode",{parentName:"p"},"--container")," as well."),Object(o.b)("p",null,"Note that ",Object(o.b)("strong",{parentName:"p"},"all")," generators automatically inherit the options ",Object(o.b)("inlineCode",{parentName:"p"},"--container")," and ",Object(o.b)("inlineCode",{parentName:"p"},"--file")," (these are documented\nas well in the help page). Furthermore, a generator may have specific options as well (e.g., the ",Object(o.b)("inlineCode",{parentName:"p"},"--ui")," (user-interface)\nto generate something for)."),Object(o.b)("h2",{id:"demo"},"Demo"),Object(o.b)("h4",{id:"generating-a-route-endpoint-file"},"Generating a Route (endpoint) file:"),Object(o.b)("p",null,Object(o.b)("img",{src:n(300).default})),Object(o.b)("h4",{id:"result"},"Result"),Object(o.b)("p",null,Object(o.b)("img",{src:n(301).default})),Object(o.b)("h2",{id:"custom-code-stubs"},"Custom Code Stubs (aka. Customizing the Generator)"),Object(o.b)("p",null,"If you don't like the automatically generated code (or would like to adapt it to your specific needs) you can do this quite easily."),Object(o.b)("p",null,"The existing ",Object(o.b)("inlineCode",{parentName:"p"},"Generators")," allow to read ",Object(o.b)("inlineCode",{parentName:"p"},"custom stubs")," from the ",Object(o.b)("inlineCode",{parentName:"p"},"app/Ship/Generators/CustomStubs")," folder. The name of\nfile needs to be the same as in ",Object(o.b)("inlineCode",{parentName:"p"},"vendor/apiato/core/Generator/Stubs"),"."),Object(o.b)("p",null,"Say, if you like to change the ",Object(o.b)("inlineCode",{parentName:"p"},"config.stub"),", simply copy the file to ",Object(o.b)("inlineCode",{parentName:"p"},"app/Ship/Generators/CustomStubs/config.stub")," and\nstart adapting it to your needs. "),Object(o.b)("p",null,"If you run the respective command (e.g., in this case ",Object(o.b)("inlineCode",{parentName:"p"},"php artisan apiato:generate:configuration"),")\nthis would read your specific ",Object(o.b)("inlineCode",{parentName:"p"},"config.stub")," file instead the pre-defined one!"),Object(o.b)("h2",{id:"contributing"},"Contributing"),Object(o.b)("p",null,"If you would like to add your own generators, please check out the ",Object(o.b)("a",{parentName:"p",href:"../general/contribution-guide"},"Contribution Guide"),"."),Object(o.b)("h2",{id:"for-angularjs-users"},"For AngularJS 2 Users"),Object(o.b)("p",null,"Checkout this awesome ",Object(o.b)("a",{parentName:"p",href:"https://github.com/llstarscreamll/Crud"},"CRUD Containers generator package")," for Angular 2.4+."))}p.isMDXComponent=!0},221:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},300:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/generate-route-demo-3e24df4e81b181bef31816e0ae972132.png"},301:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/generated-route-demo-cebd1728f0bd428168804cc7d7cde276.png"}}]);