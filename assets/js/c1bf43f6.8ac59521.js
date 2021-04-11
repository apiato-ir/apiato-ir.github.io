(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{189:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),i=(n(0),n(221)),o={title:"Migrations"},l={unversionedId:"optional-components/migrations",id:"version-9.x/optional-components/migrations",isDocsHomePage:!1,title:"Migrations",description:"* Definition",source:"@site/versioned_docs/version-9.x/optional-components/migrations.md",slug:"/optional-components/migrations",permalink:"/docs/optional-components/migrations",editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/optional-components/migrations.md",version:"9.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1618096631,formattedLastUpdatedAt:"4/10/2021",sidebar:"version-9.x/docs",previous:{title:"Tests",permalink:"/docs/optional-components/tests"},next:{title:"Seeders",permalink:"/docs/optional-components/seeders"}},s=[{value:"Definition",id:"definition",children:[]},{value:"Principles",id:"principles",children:[]},{value:"Rules",id:"rules",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Code Samples",id:"code-samples",children:[]}],c={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#definition"},"Definition")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#principles"},"Principles")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#rules"},"Rules")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#code-samples"},"Code Samples"))),Object(i.b)("h3",{id:"definition"},"Definition"),Object(i.b)("p",null,"Migrations (are the short name for Database Migrations)."),Object(i.b)("p",null,"Migrations are the version control of your database. They are very useful for generating and documenting the database tables."),Object(i.b)("h3",{id:"principles"},"Principles"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Migrations SHOULD be created inside the Containers folders.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Migrations will be autoloaded in the framework"))),Object(i.b)("h3",{id:"rules"},"Rules"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"No need to publish the DB Migrations. Just run the ",Object(i.b)("inlineCode",{parentName:"li"},"artisan migrate")," command and Laravel will read the Migrations from the Containers.")),Object(i.b)("h3",{id:"folder-structure"},"Folder Structure"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"}," - app\n    - Containers\n        - User\n            - Data\n                - Migrations\n                    - 2200_01_01_000001_create_users_table.php\n                    - ...\n")),Object(i.b)("h3",{id:"code-samples"},"Code Samples"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"User CreateUsersTable ",Object(i.b)("inlineCode",{parentName:"strong"},"Migrations"),":")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"\n<?php\n\nuse Illuminate\\Database\\Migrations\\Migration;\nuse Illuminate\\Database\\Schema\\Blueprint;\n\nclass CreateUsersTable extends Migration\n{\n    public function up()\n    {\n        Schema::create('users', function (Blueprint $table) {\n            $table->increments('id');\n            $table->string('name');\n            $table->string('email')->unique();\n            $table->string('password');\n            $table->rememberToken();\n            $table->timestamps();\n            $table->softDeletes();\n        });\n    }\n\n    public function down()\n    {\n        Schema::drop('users');\n    }\n}\n\n")),Object(i.b)("p",null,"For more information about the Database Migrations read ",Object(i.b)("a",{parentName:"p",href:"https://laravel.com/docs/master/migrations"},"this"),"."))}p.isMDXComponent=!0},221:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||i;return n?a.a.createElement(d,l(l({ref:t},c),{},{components:n})):a.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);