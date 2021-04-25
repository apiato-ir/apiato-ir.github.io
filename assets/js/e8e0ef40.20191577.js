(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{263:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(8),i=(n(0),n(284)),o={title:"Seeders"},s={unversionedId:"optional-components/seeders",id:"version-10.x/optional-components/seeders",isDocsHomePage:!1,title:"Seeders",description:"* Definition",source:"@site/versioned_docs/version-10.x/optional-components/seeders.md",sourceDirName:"optional-components",slug:"/optional-components/seeders",permalink:"/docs/optional-components/seeders",editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-10.x/optional-components/seeders.md",version:"10.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1619394104,formattedLastUpdatedAt:"4/25/2021",frontMatter:{title:"Seeders"},sidebar:"version-10.x/docs",previous:{title:"Migrations",permalink:"/docs/optional-components/migrations"},next:{title:"Factories",permalink:"/docs/optional-components/factories"}},c=[{value:"Definition",id:"definition",children:[]},{value:"Principles",id:"principles",children:[]},{value:"Rules",id:"rules",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Code Samples",id:"code-samples",children:[]},{value:"Run the Seeders",id:"run-the-seeders",children:[]},{value:"Testing Seeder Command",id:"apiato-testing-seeder-command",children:[]}],l={toc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#definition"},"Definition")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#principles"},"Principles")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#rules"},"Rules")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#code-samples"},"Code Samples")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#run-the-seeders"},"Run the Seeders")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#apiato-testing-seeder-command"},"Testing seeder command"))),Object(i.b)("h3",{id:"definition"},"Definition"),Object(i.b)("p",null,"Seeders (are a short name for Database Seeders)."),Object(i.b)("p",null,"Seeders are classes made to seed the database with real data, this data usually should exist in the Application after the installation (Example: the default Users Roles and Permissions or the list of Countries)."),Object(i.b)("h3",{id:"principles"},"Principles"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Seeders SHOULD be created in the Containers. (If the container is using a package that publishes a Seeder class, this class should be manually placed in the Container that make use of it. Do not rely on the package to place it in its right location).")),Object(i.b)("h3",{id:"rules"},"Rules"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Seeders should be in the right directory inside the container to be loaded.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"To avoid any conflict between containers seeders classes, you SHOULD always prepend the Seeders of each container with the container name. (Example: ",Object(i.b)("inlineCode",{parentName:"p"},"UserPermissionsSeeder"),", ",Object(i.b)("inlineCode",{parentName:"p"},"ItemPermissionsSeeder"),")."),Object(i.b)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"If 2 seeders classes have the same name but live in different containers, one of them will not be loaded. In these situations you can also prepend the seeder name with the section name")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"If you wish to order the seeding of the classes, you can just append ",Object(i.b)("inlineCode",{parentName:"p"},"_1"),", ",Object(i.b)("inlineCode",{parentName:"p"},"_2")," to your classes."))),Object(i.b)("h3",{id:"folder-structure"},"Folder Structure"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"}," - App\n    - Containers\n        - {section-name}\n            - {container-name}\n                 - Data\n                    - Seeders\n                        - ContainerNameRolesSeeder_1.php\n                        - ContainerNamePermissionsSeeder_2.php\n                        - ...\n")),Object(i.b)("h3",{id:"code-samples"},"Code Samples"),Object(i.b)("h4",{id:"demo-seeder"},"Demo Seeder"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"class DemoSeeder_1 extends Seeder\n{\n    public function run()\n    {\n        app(CreateRoleTask::class)->run('admin', 'Administrator', 'Administrator Role', 999);\n        // ...\n    }\n}\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Same Seeder class is allowed to contain seeding for multiple ",Object(i.b)("inlineCode",{parentName:"p"},"Models"),"."))),Object(i.b)("h3",{id:"run-the-seeders"},"Run the Seeders"),Object(i.b)("p",null,"After registering the ",Object(i.b)("inlineCode",{parentName:"p"},"Seeders")," you can run this command:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"php artisan db:seed\n")),Object(i.b)("p",null,"Migrate & seed at the same time"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"php artisan migrate --seed\n")),Object(i.b)("h3",{id:"apiato-testing-seeder-command"},"Testing Seeder Command"),Object(i.b)("p",null,"It's useful sometimes to create a big set of testing data. apiato facilitates this task:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Open ",Object(i.b)("inlineCode",{parentName:"li"},"app/Ship/Seeders/SeedTestingData.php")," and write your testing data here."),Object(i.b)("li",{parentName:"ol"},"Run this command any time you want this data available (example at staging servers):")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"php artisan apiato:seed-test\n")),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Further reading")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"More info at ",Object(i.b)("a",{parentName:"p",href:"https://laravel.com/docs/seeding"},"Laravel Docs"),"."))))}d.isMDXComponent=!0},284:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,u=p["".concat(o,".").concat(m)]||p[m]||b[m]||i;return n?r.a.createElement(u,s(s({ref:t},l),{},{components:n})):r.a.createElement(u,s({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);