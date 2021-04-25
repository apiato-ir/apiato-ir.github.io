(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{253:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(8),o=(n(0),n(284)),i={title:"Code Generator"},p={unversionedId:"core-features/code-generator",id:"version-10.x/core-features/code-generator",isDocsHomePage:!1,title:"Code Generator",description:"- Introduction",source:"@site/versioned_docs/version-10.x/core-features/code-generator.md",sourceDirName:"core-features",slug:"/core-features/code-generator",permalink:"/docs/core-features/code-generator",editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-10.x/core-features/code-generator.md",version:"10.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1619394104,formattedLastUpdatedAt:"4/25/2021",frontMatter:{title:"Code Generator"},sidebar:"version-10.x/docs",previous:{title:"Container Installer",permalink:"/docs/getting-started/container-installer"},next:{title:"Authentication",permalink:"/docs/core-features/authentication"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Available Code Generator Commands",id:"available-code-generator-commands",children:[]},{value:"Demo",id:"demo",children:[]},{value:"Custom Code Stubs (aka. Customizing the Generator)",id:"custom-code-stubs",children:[]},{value:"Contributing",id:"contributing",children:[]}],l={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#introduction"},"Introduction")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#available-code-generator-commands"},"Available Code Generator Commands")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#demo"},"Demo")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#custom-code-stubs"},"Custom Code Stubs")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#contributing"},"Contributing"))),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"Code Generators are a nice way to speed up development by creating boiler-plate code based on your inputs. You may\nalready be familiar with the Laravel code generators (",Object(o.b)("inlineCode",{parentName:"p"},"php artisan make:controller"),"). "),Object(o.b)("p",null,"Apiato code generator works the same way. In addition, it can generate a full Container with fully working CRUD operations, including routes, requests, controller, Actions, Repositories, Models, Migrations, documentation.... and much more)"),Object(o.b)("h2",{id:"available-code-generator-commands"},"Available Code Generator Commands"),Object(o.b)("p",null,"To see the list of code generators type ",Object(o.b)("inlineCode",{parentName:"p"},"php artisan")," and look for ",Object(o.b)("inlineCode",{parentName:"p"},"apiato"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},'  php artisan apiato:generate:container        Create a Container for apiato from scratch\n  php artisan apiato:generate:action           Create an Action file for a Container\n  php artisan apiato:generate:configuration    Create a Configuration file for a Container\n  php artisan apiato:generate:container:api    Create a Container for apiato from scratch (API Part)\n  php artisan apiato:generate:container:web    Create a Container for apiato from scratch (WEB Part)\n  php artisan apiato:generate:controller       Create a controller for a container\n  php artisan apiato:generate:event            Create a new Event class and its corresponding Handler\n  php artisan apiato:generate:eventhandler     Create a new EventHandler class\n  php artisan apiato:generate:exception        Create a new Exception class\n  php artisan apiato:generate:job              Create a new Job class\n  php artisan apiato:generate:mail             Create a new Mail class\n  php artisan apiato:generate:migration        Create an "empty" migration file for a Container\n  php artisan apiato:generate:model            Create a new Model class\n  php artisan apiato:generate:notification     Create a new Notification class\n  php artisan apiato:generate:readme           Create a README file for a Container\n  php artisan apiato:generate:repository       Create a new Repository class\n  php artisan apiato:generate:request          Create a new Request class\n  php artisan apiato:generate:route            Create a new Route class\n  php artisan apiato:generate:seeder           Create a new Seeder class\n  php artisan apiato:generate:serviceprovider  Create a ServiceProvider for a Container\n  php artisan apiato:generate:subaction        Create a new SubAction class\n  php artisan apiato:generate:task             Create a Task file for a Container\n  php artisan apiato:generate:test:functional  Create a Functional Test file.\n  php artisan apiato:generate:test:testcase    Create the TestCase file.\n  php artisan apiato:generate:test:unit        Create a Unit Test file.\n  php artisan apiato:generate:transformer      Create a new Transformer class for a given Model\n  php artisan apiato:generate:value            Create a new Value class\n')),Object(o.b)("p",null,"To get more info about each command, add ",Object(o.b)("inlineCode",{parentName:"p"},"--help")," to the command. Example: ",Object(o.b)("inlineCode",{parentName:"p"},"php artisan apiato:generate:route --help"),". The help page shows all options, which can be directly passed to the command."),Object(o.b)("p",null,"If you do not provide respective information via the command line options, a wizard will be displayed to guide you through."),Object(o.b)("p",null,"For example, you can directly call ",Object(o.b)("inlineCode",{parentName:"p"},"php artisan apiato:generate:controller --file=UserController")," to directly specify the class\nto be generated. The wizard, however, will ask you for the ",Object(o.b)("inlineCode",{parentName:"p"},"--section")," and ",Object(o.b)("inlineCode",{parentName:"p"},"--container")," as well."),Object(o.b)("p",null,"Note that ",Object(o.b)("strong",{parentName:"p"},"all")," generators automatically inherit the options ",Object(o.b)("inlineCode",{parentName:"p"},"--section"),", ",Object(o.b)("inlineCode",{parentName:"p"},"--container")," and ",Object(o.b)("inlineCode",{parentName:"p"},"--file")," (these are documented\nas well in the help page). Furthermore, a generator may have specific options as well (e.g., the ",Object(o.b)("inlineCode",{parentName:"p"},"--ui")," (user-interface)\nto generate something for)."),Object(o.b)("h2",{id:"demo"},"Demo"),Object(o.b)("h4",{id:"generating-a-route-endpoint-file"},"Generating a Route (endpoint) file:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"$ php artisan apiato:generate:route\n\n Enter the name of the Section [AppSection]:\n >\n\n Enter the name of the Container:\n > Car\n\n Enter the name of the Route file [DefaultRoute]:\n > CreateCar\n\n> Generating (CreateCar) in (AppSection:Car) Container.\n\n Select the UI for the controller [API]:\n  [0] API\n  [1] WEB\n > 0\n\n Enter the endpoint version (integer)[1]:\n > 1\n\n Select the type for this endpoint?[private]:\n  [0] private\n  [1] public\n > 1\n\n Enter the name of the controller function that needs to be invoked when calling this endpoint:\n > createNewCar\n\n Enter the HTTP verb of this endpoint (GET, POST,...):\n > POST\n\n Enter the endpoint URI (foo/bar/{id}):\n > cars\n\nRoute generated successfully.\n\n")),Object(o.b)("h4",{id:"result"},"Result"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"CreateCar.v1.public.php")," file will be created in ",Object(o.b)("inlineCode",{parentName:"p"},"App\\Containers\\AppSection\\Car\\UI\\API\\Routes\\")),Object(o.b)("h2",{id:"custom-code-stubs"},"Custom Code Stubs (aka. Customizing the Generator)"),Object(o.b)("p",null,"If you don't like the automatically generated code (or would like to adapt it to your specific needs) you can do this quite easily."),Object(o.b)("p",null,"The existing ",Object(o.b)("inlineCode",{parentName:"p"},"Generators")," allow to read ",Object(o.b)("inlineCode",{parentName:"p"},"custom stubs")," from the ",Object(o.b)("inlineCode",{parentName:"p"},"app/Ship/Generators/CustomStubs")," folder. The name of\nfile needs to be the same as in ",Object(o.b)("inlineCode",{parentName:"p"},"vendor/apiato/core/Generator/Stubs"),"."),Object(o.b)("p",null,"Say, if you like to change the ",Object(o.b)("inlineCode",{parentName:"p"},"config.stub"),", simply copy the file to ",Object(o.b)("inlineCode",{parentName:"p"},"app/Ship/Generators/CustomStubs/config.stub")," and\nstart adapting it to your needs. "),Object(o.b)("p",null,"If you run the respective command (e.g., in this case ",Object(o.b)("inlineCode",{parentName:"p"},"php artisan apiato:generate:configuration"),")\nthis would read your specific ",Object(o.b)("inlineCode",{parentName:"p"},"config.stub")," file instead the pre-defined one!"),Object(o.b)("h2",{id:"contributing"},"Contributing"),Object(o.b)("p",null,"If you would like to add your own generators, please check out the ",Object(o.b)("a",{parentName:"p",href:"../contribution-guide"},"Contribution Guide"),"."))}s.isMDXComponent=!0},284:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),b=a,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return n?r.a.createElement(m,p(p({ref:t},l),{},{components:n})):r.a.createElement(m,p({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);