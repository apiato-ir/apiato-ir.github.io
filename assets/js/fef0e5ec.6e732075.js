(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{216:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),s=(n(0),n(221)),i={title:"Validation"},o={unversionedId:"features/validation",id:"features/validation",isDocsHomePage:!1,title:"Validation",description:"Apiato uses the powerful Laravel validation system.",source:"@site/docs/features/validation.md",slug:"/features/validation",permalink:"/docs/next/features/validation",editUrl:"https://github.com/apiato/documentation/tree/master/docs/features/validation.md",version:"current",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1618012240,formattedLastUpdatedAt:"4/9/2021",sidebar:"docs",previous:{title:"API Versioning",permalink:"/docs/next/features/api-versioning"},next:{title:"Search Query Parameter",permalink:"/docs/next/features/search-query-parameter"}},l=[{value:"Responses",id:"responses",children:[]}],c={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Apiato uses the powerful ",Object(s.b)("a",{parentName:"p",href:"https://laravel.com/docs/validation"},"Laravel validation")," system."),Object(s.b)("p",null,"In Apiato, validation must be defined in ",Object(s.b)("a",{parentName:"p",href:".././main-components/requests"},"Request")," component, since every request might have different rules."),Object(s.b)("p",null,"Validation rules are automatically applied, once injecting the Request in the Controller."),Object(s.b)("p",null,"Requests help validating User data, accessibility, ownership and more can be added if needed."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Example Request with Validation rules:")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\User\\UI\\API\\Requests;\n\nuse App\\Ship\\Parents\\Requests\\Request;\n\nclass RegisterUserRequest extends Request\n{\n    /**\n     * @return  array\n     */\n    public function rules()\n    {\n        return [\n            'email'    => 'required|email|max:200|unique:users,email',\n            'password' => 'required|min:20|max:300',\n            'name'     => 'required|min:2|max:400',\n        ];\n    }\n\n}\n")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Usage from Controller Example:")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},"    public function registerUser(RegisterUserRequest $request, CreateUserAction $action)\n    {\n        // if the actions takes the request object, you can pass the entire request instance as parameter\n        $user = Apiato::call('User@RegisterUserAction', [\n            [\n                $request['email'],\n                $request['password'],\n                $request['name'],\n                $request['gender'],\n                $request['birth']\n            ]\n        ]);\n        \n        return $this->transform($user, UserTransformer::class);\n    }\n")),Object(s.b)("h2",{id:"responses"},"Responses"),Object(s.b)("p",null,"Validation Error response format:"),Object(s.b)("p",null,"Single Field:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": {\n    "email": [\n      "The email has already been taken."\n    ]\n  },\n  "status_code": 422,\n  "message": "The given data failed to pass validation."\n}\n')),Object(s.b)("p",null,"Multiple Fields:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": {\n    "email": [\n      "The email field is required."\n    ],\n    "password": [\n      "The password field is required."\n    ]\n  },\n  "status_code": 422,\n  "message": "The given data failed to pass validation."\n}\n')),Object(s.b)("p",null,"More details about requests in the ",Object(s.b)("a",{parentName:"p",href:".././main-components/requests"},"Requests")," Page."))}u.isMDXComponent=!0},221:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||s;return n?a.a.createElement(b,o(o({ref:t},c),{},{components:n})):a.a.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);