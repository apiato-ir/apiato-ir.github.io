(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{199:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return c}));var n=r(3),a=r(8),o=(r(0),r(284)),i={title:"Repositories"},p={unversionedId:"optional-components/repositories",id:"optional-components/repositories",isDocsHomePage:!1,title:"Repositories",description:"* Definition",source:"@site/docs/optional-components/repositories.md",sourceDirName:"optional-components",slug:"/optional-components/repositories",permalink:"/docs/next/optional-components/repositories",editUrl:"https://github.com/apiato/documentation/tree/master/docs/optional-components/repositories.md",version:"current",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1618738326,formattedLastUpdatedAt:"4/18/2021",frontMatter:{title:"Repositories"},sidebar:"docs",previous:{title:"Providers",permalink:"/docs/next/optional-components/providers"},next:{title:"Criterias",permalink:"/docs/next/optional-components/criterias"}},l=[{value:"Definition",id:"definition",children:[]},{value:"Principles",id:"principles",children:[]},{value:"Rules",id:"rules",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Code Samples",id:"code-samples",children:[]},{value:"Other Properties:",id:"other-properties",children:[]}],s={toc:l};function c(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#definition"},"Definition")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#principles"},"Principles")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#rules"},"Rules")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#code-samples"},"Code Samples")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#other-properties"},"Other Properties"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#api-query-parameters-property"},"API Query Parameters Property")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#all-other-properties"},"All other Properties"))))),Object(o.b)("h3",{id:"definition"},"Definition"),Object(o.b)("p",null,"The Repository classes are an implementation of the Repository Design Pattern."),Object(o.b)("p",null,"Their major roles are separating the business logic from the data (or the data access Task)."),Object(o.b)("p",null,"Repositories save and retrieves Models to/from the underlying storage mechanism."),Object(o.b)("p",null,"The Repository is used to separate the logic that retrieves the data and maps it to a Model, from the business logic that acts on the Model."),Object(o.b)("h3",{id:"principles"},"Principles"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Every Model SHOULD have a Repository.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"A Model SHOULD always get accessed through its Repository. (Never accessed directly)."))),Object(o.b)("h3",{id:"rules"},"Rules"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"All Repositories MUST extend from ",Object(o.b)("inlineCode",{parentName:"p"},"App\\Ship\\Parents\\Repositories\\Repository"),". Extending from this class will give you access to methods like (",Object(o.b)("inlineCode",{parentName:"p"},"find"),", ",Object(o.b)("inlineCode",{parentName:"p"},"create"),", ",Object(o.b)("inlineCode",{parentName:"p"},"update")," and much more).")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Repository name should be same as it's model name (model: ",Object(o.b)("inlineCode",{parentName:"p"},"Foo")," -> repository: ",Object(o.b)("inlineCode",{parentName:"p"},"FooRepository"),").")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"If a Repository belongs to a Model whose name is not equal to its Container name, then the Repository implement ",Object(o.b)("inlineCode",{parentName:"p"},"model()")," method like ",Object(o.b)("a",{parentName:"p",href:"#model-method-example"},"this"),"."))),Object(o.b)("h3",{id:"folder-structure"},"Folder Structure"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"}," - app\n    - Containers\n        - {section-name}\n            - {container-name}\n                - Data\n                - Repositories\n                    - UserRepository.php\n                    - ...\n")),Object(o.b)("h3",{id:"code-samples"},"Code Samples"),Object(o.b)("h4",{id:"demo-repository"},"Demo Repository"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"class DemoRepository extends Repository\n{\n    protected $fieldSearchable = [\n        'name'  => 'like',\n        'email' => '=',\n    ];\n}\n")),Object(o.b)("h4",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"// paginate the data by 10\n$users = $userRepository->paginate(10);\n\n// search by 1 field\n$cars = $carRepository->findByField('colour', $colour);\n\n// searching multiple fields\n$offer = $offerRepository->findWhere([\n    'offer_id' => $offer_id,\n    'user_id'  => $user_id,\n])->first();\n\n//....\n")),Object(o.b)("h4",{id:"model-method-example"},"Different Model and Container Name"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"model()")," method must be implemented when the model has different name than the container."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"class DemoRepository extends Repository\n{\n    // ...\n    \n    public function model(): string\n    {\n        return Demo::class;\n    }\n}\n")),Object(o.b)("h3",{id:"other-properties"},"Other Properties:"),Object(o.b)("h4",{id:"api-query-parameters-property"},"API Query Parameters Property"),Object(o.b)("p",null,"To enable query parameters (",Object(o.b)("inlineCode",{parentName:"p"},"?search=text"),",...) in your API you need to set the property ",Object(o.b)("inlineCode",{parentName:"p"},"$fieldSearchable")," on the Repository class, to instruct the querying on your model. More ",Object(o.b)("a",{parentName:"p",href:"../core-features/query-parameters##using-the-request-criteria"},"details"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"    protected $fieldSearchable = [\n      'name'  => 'like',\n      'email' => '=',\n    ];\n")),Object(o.b)("h4",{id:"all-other-properties"},"All other Properties"),Object(o.b)("p",null,"Apiato uses the ",Object(o.b)("inlineCode",{parentName:"p"},"l5-repository")," package, to provide a lot of powerful features to the repository class.  "),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Further reading")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"To learn more about all the properties you can use, visit the ",Object(o.b)("inlineCode",{parentName:"p"},"andersao/l5-repository")," package ",Object(o.b)("a",{parentName:"p",href:"https://github.com/andersao/l5-repository"},"documentation"),"."))))}c.isMDXComponent=!0},284:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return u}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),c=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},b=function(e){var t=c(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=c(r),d=n,u=b["".concat(i,".").concat(d)]||b[d]||m[d]||o;return r?a.a.createElement(u,p(p({ref:t},s),{},{components:r})):a.a.createElement(u,p({ref:t},s))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);