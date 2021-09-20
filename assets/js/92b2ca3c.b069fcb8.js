(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{186:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),s=(n(0),n(281)),o={title:"Validation"},i={unversionedId:"core-features/validation",id:"version-9.x/core-features/validation",isDocsHomePage:!1,title:"Validation",description:"Apiato uses the powerful Laravel validation system.",source:"@site/versioned_docs/version-9.x/core-features/validation.md",sourceDirName:"core-features",slug:"/core-features/validation",permalink:"/docs/9.x/core-features/validation",editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/core-features/validation.md",version:"9.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1618748235,formattedLastUpdatedAt:"4/18/2021",frontMatter:{title:"Validation"},sidebar:"version-9.x/docs",previous:{title:"API Versioning",permalink:"/docs/9.x/core-features/api-versioning"},next:{title:"Search Query Parameter",permalink:"/docs/9.x/core-features/search-query-parameter"}},l=[{value:"Responses",id:"responses",children:[]}],c={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Apiato uses the powerful ",Object(s.b)("a",{parentName:"p",href:"https://laravel.com/docs/validation"},"Laravel validation")," system."),Object(s.b)("p",null,"In Apiato, validation must be defined in ",Object(s.b)("a",{parentName:"p",href:".././main-components/requests"},"Request")," component, since every request might have different rules."),Object(s.b)("p",null,"Validation rules are automatically applied, once injecting the Request in the Controller."),Object(s.b)("p",null,"Requests help validating User data, accessibility, ownership and more can be added if needed."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Example Request with Validation rules:")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\User\\UI\\API\\Requests;\n\nuse App\\Ship\\Parents\\Requests\\Request;\n\nclass RegisterUserRequest extends Request\n{\n    /**\n     * @return  array\n     */\n    public function rules()\n    {\n        return [\n            'email'    => 'required|email|max:200|unique:users,email',\n            'password' => 'required|min:20|max:300',\n            'name'     => 'required|min:2|max:400',\n        ];\n    }\n\n}\n")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Usage from Controller Example:")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},"    public function registerUser(RegisterUserRequest $request, CreateUserAction $action)\n    {\n        // if the actions takes the request object, you can pass the entire request instance as parameter\n        $user = Apiato::call('User@RegisterUserAction', [\n            [\n                $request['email'],\n                $request['password'],\n                $request['name'],\n                $request['gender'],\n                $request['birth']\n            ]\n        ]);\n        \n        return $this->transform($user, UserTransformer::class);\n    }\n")),Object(s.b)("h2",{id:"responses"},"Responses"),Object(s.b)("p",null,"Validation Error response format:"),Object(s.b)("p",null,"Single Field:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": {\n    "email": [\n      "The email has already been taken."\n    ]\n  },\n  "status_code": 422,\n  "message": "The given data failed to pass validation."\n}\n')),Object(s.b)("p",null,"Multiple Fields:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": {\n    "email": [\n      "The email field is required."\n    ],\n    "password": [\n      "The password field is required."\n    ]\n  },\n  "status_code": 422,\n  "message": "The given data failed to pass validation."\n}\n')),Object(s.b)("p",null,"More details about requests in the ",Object(s.b)("a",{parentName:"p",href:".././main-components/requests"},"Requests")," Page."))}u.isMDXComponent=!0},281:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,b=p["".concat(o,".").concat(m)]||p[m]||d[m]||s;return n?a.a.createElement(b,i(i({ref:t},c),{},{components:n})):a.a.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);