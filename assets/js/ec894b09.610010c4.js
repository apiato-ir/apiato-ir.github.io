(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{208:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),o=(n(0),n(218)),i={title:"Factories"},c={unversionedId:"optional-components/factories",id:"optional-components/factories",isDocsHomePage:!1,title:"Factories",description:"* Definition",source:"@site/docs/optional-components/factories.md",sourceDirName:"optional-components",slug:"/optional-components/factories",permalink:"/docs/next/optional-components/factories",editUrl:"https://github.com/apiato/documentation/tree/master/docs/optional-components/factories.md",version:"current",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1618738326,formattedLastUpdatedAt:"4/18/2021",frontMatter:{title:"Factories"},sidebar:"docs",previous:{title:"Seeders",permalink:"/docs/next/optional-components/seeders"},next:{title:"Middlewares",permalink:"/docs/next/optional-components/middlewares"}},s=[{value:"Definition",id:"definition",children:[]},{value:"Principles",id:"principles",children:[]},{value:"Rules",id:"rules",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Code Samples",id:"code-samples",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#definition"},"Definition")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#principles"},"Principles")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#rules"},"Rules")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#code-samples"},"Code Samples"))),Object(o.b)("h3",{id:"definition"},"Definition"),Object(o.b)("p",null,"Factories (are a short name for Model Factories)."),Object(o.b)("p",null,"Factories are used to generate some fake data with the help of Faker to be used for testing purposes."),Object(o.b)("p",null,"Factories are mainly used from Tests."),Object(o.b)("h3",{id:"principles"},"Principles"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Factories SHOULD be created in the Containers.")),Object(o.b)("h3",{id:"rules"},"Rules"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"All Factories MUST extend from ",Object(o.b)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Factories\\Factory"),".")),Object(o.b)("h3",{id:"folder-structure"},"Folder Structure"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"}," - app\n    - Containers\n        - {section-name}\n            - {container-name}\n                 - Data\n                    - Factories\n                        - UserFactory.php\n                        - ...\n")),Object(o.b)("h3",{id:"code-samples"},"Code Samples"),Object(o.b)("h4",{id:"a-user-model-factory"},"A User Model Factory"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"class UserFactory extends Factory\n{\n    protected $model = User::class;\n\n    public function definition(): array\n    {\n        static $password;\n\n        return [\n            'name' => $this->faker->name,\n            'email' => $this->faker->unique()->safeEmail,\n            'password' => $password ?: $password = Hash::make('testing-password'),\n            'email_verified_at' => now(),\n            'remember_token' => Str::random(10),\n            'is_admin' => false,\n        ];\n    }\n}\n")),Object(o.b)("h4",{id:"usage-from-tests-or-anywhere-else"},"Usage from Tests or Anywhere Else"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"// creating 4 users\nUser::factory()->count(4)->create();\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Further reading")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"More info at ",Object(o.b)("a",{parentName:"p",href:"https://laravel.com/docs/database-testing#defining-model-factories"},"Laravel Docs"),"."))))}p.isMDXComponent=!0},218:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,b=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?a.a.createElement(b,c(c({ref:t},l),{},{components:n})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);