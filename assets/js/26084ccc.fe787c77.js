(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),i=(n(0),n(284)),o={title:"Migrations"},c={unversionedId:"optional-components/migrations",id:"version-10.x/optional-components/migrations",isDocsHomePage:!1,title:"Migrations",description:"* Definition",source:"@site/versioned_docs/version-10.x/optional-components/migrations.md",sourceDirName:"optional-components",slug:"/optional-components/migrations",permalink:"/docs/optional-components/migrations",editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-10.x/optional-components/migrations.md",version:"10.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1619394104,formattedLastUpdatedAt:"4/25/2021",frontMatter:{title:"Migrations"},sidebar:"version-10.x/docs",previous:{title:"Tests",permalink:"/docs/optional-components/tests"},next:{title:"Seeders",permalink:"/docs/optional-components/seeders"}},l=[{value:"Definition",id:"definition",children:[]},{value:"Principles",id:"principles",children:[]},{value:"Rules",id:"rules",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Code Samples",id:"code-samples",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#definition"},"Definition")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#principles"},"Principles")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#rules"},"Rules")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#code-samples"},"Code Samples"))),Object(i.b)("h3",{id:"definition"},"Definition"),Object(i.b)("p",null,"Migrations (are the short name for Database Migrations)."),Object(i.b)("p",null,"Migrations are the version control of your database. They are very useful for generating and documenting the database tables."),Object(i.b)("h3",{id:"principles"},"Principles"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Migrations SHOULD be created inside the Containers folders.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Migrations will be autoloaded by the framework."))),Object(i.b)("h3",{id:"rules"},"Rules"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"No need to publish the DB Migrations. Just run the ",Object(i.b)("inlineCode",{parentName:"li"},"artisan migrate")," command and Laravel will read the Migrations from the Containers.")),Object(i.b)("h3",{id:"folder-structure"},"Folder Structure"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"   - app\n      - Containers\n          - {section-name}\n              - {container-name}\n                  - Data\n                      - Migrations\n                          - 2200_01_01_000001_create_something_table.php\n                          - ...\n")),Object(i.b)("h3",{id:"code-samples"},"Code Samples"),Object(i.b)("h4",{id:"user-createdemotable-migrations"},"User CreateDemoTable Migrations"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"class CreateDemoTable extends Migration\n{\n    public function up()\n    {\n        Schema::create('demos', function (Blueprint $table) {\n            $table->increments('id');\n            // ...\n            $table->timestamps();\n            $table->softDeletes();\n        });\n    }\n\n    public function down()\n    {\n        Schema::drop('demos');\n    }\n}\n\n")),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Further reading")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"More info at ",Object(i.b)("a",{parentName:"p",href:"https://laravel.com/docs/migrations"},"Laravel Docs"),"."))))}p.isMDXComponent=!0},284:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),m=r,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||i;return n?a.a.createElement(d,c(c({ref:t},s),{},{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);