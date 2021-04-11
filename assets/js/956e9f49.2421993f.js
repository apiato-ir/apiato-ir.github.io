(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{155:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(8),a=(t(0),t(221)),i={title:"Exceptions"},p={unversionedId:"optional-components/exceptions",id:"version-9.x/optional-components/exceptions",isDocsHomePage:!1,title:"Exceptions",description:"* Definition",source:"@site/versioned_docs/version-9.x/optional-components/exceptions.md",slug:"/optional-components/exceptions",permalink:"/docs/optional-components/exceptions",editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/optional-components/exceptions.md",version:"9.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1618096631,formattedLastUpdatedAt:"4/10/2021",sidebar:"version-9.x/docs",previous:{title:"Repositories",permalink:"/docs/optional-components/repositories"},next:{title:"Criterias",permalink:"/docs/optional-components/criterias"}},c=[{value:"Definition",id:"definition",children:[]},{value:"Principles",id:"principles",children:[]},{value:"Rules",id:"rules",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Code Samples",id:"code-samples",children:[]},{value:"Application Error Codes",id:"application-error-codes",children:[]}],l={toc:c};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#definition"},"Definition")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#principles"},"Principles")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#rules"},"Rules")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#code-samples"},"Code Samples")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#application-error-codes"},"Application Error Codes"))),Object(a.b)("h3",{id:"definition"},"Definition"),Object(a.b)("p",null,"Exceptions are classes the handles errors, and helps developers debug their code in a more efficient way."),Object(a.b)("h3",{id:"principles"},"Principles"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Exceptions can be thrown from anywhere in the application."),Object(a.b)("li",{parentName:"ul"},"Exceptions SHOULD be created inside the Containers. However, general Exceptions CAN be created in the ",Object(a.b)("inlineCode",{parentName:"li"},"Ship")," layer.")),Object(a.b)("h3",{id:"rules"},"Rules"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"All Exceptions MUST extend ",Object(a.b)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Exceptions\\Exception"),"."),Object(a.b)("li",{parentName:"ul"},"Shared (general) Exceptions between all Containers SHOULD be created in the ",Object(a.b)("strong",{parentName:"li"},"Exceptions Ship")," folder (",Object(a.b)("inlineCode",{parentName:"li"},"app/Ship/Exceptions/*"),")."),Object(a.b)("li",{parentName:"ul"},"Every Exception SHOULD have two properties ",Object(a.b)("inlineCode",{parentName:"li"},"httpStatusCode")," and ",Object(a.b)("inlineCode",{parentName:"li"},"message"),", both properties will be displayed when an error occurs. You can override those values while throwing the error.")),Object(a.b)("h3",{id:"folder-structure"},"Folder Structure"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"}," - App\n    - Containers\n        - {container-name}\n            - Exceptions\n                - AccountFailedException.php\n                - ...\n\n    - Ship\n        - Exceptions\n            - IncorrectIdException.php\n            - InternalErrorException.php\n            - ...\n")),Object(a.b)("h3",{id:"code-samples"},"Code Samples"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"User ",Object(a.b)("inlineCode",{parentName:"strong"},"Exception"),":")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\User\\Exceptions;\n\nuse App\\Ship\\Parents\\Exceptions\\Exception;\nuse Symfony\\Component\\HttpFoundation\\Response;\n\nclass AccountFailedException extends Exception\n{\n    public $httpStatusCode = Response::HTTP_CONFLICT;\n\n    public $message = 'Failed creating new User.';\n    \n    public $code = 4711;\n}\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"General ",Object(a.b)("inlineCode",{parentName:"strong"},"Exception"),":")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Ship\\Exceptions;\n\nuse App\\Ship\\Parents\\Exceptions\\Exception;\nuse Symfony\\Component\\HttpFoundation\\Response as SymfonyResponse;\n\nclass InternalErrorException extends Exception\n{\n    public $httpStatusCode = SymfonyResponse::HTTP_INTERNAL_SERVER_ERROR;\n\n    public $message = 'Something went wrong!';\n}\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"General ",Object(a.b)("inlineCode",{parentName:"strong"},"Exception")," with CustomData:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Ship\\Exceptions;\n\nuse App\\Ship\\Parents\\Exceptions\\Exception;\nuse Symfony\\Component\\HttpFoundation\\Response as SymfonyResponse;\n\nclass AwesomeExceptionWithCustomData extends Exception\n{\n    public $httpStatusCode = SymfonyResponse::HTTP_INTERNAL_SERVER_ERROR;\n\n    public $message = 'Something went wrong!';\n    \n    public $code = 1234;\n    \n    /*\n     * Everything you add here will be automatically added to the ExceptionFormatter on the top level!\n     * You can define any structure you want or maybe include translated messages\n     */\n    public function addCustomData() {\n        return [\n            'title' => 'nice',\n            'description' => 'one fancy description here',\n            'foo' => true,\n            'meta' => [\n                'bar' => 1234,\n            ]\n        ];\n    }\n}\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Exception usage from anywhere:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\nthrow new AccountFailedException();\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Usage with Log for Debugging:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\nthrow (new AccountFailedException())->debug($e); // debug() accepts string or \\Exception instance\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Usage and overriding the default ",Object(a.b)("inlineCode",{parentName:"strong"},"message"),":")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\nthrow new AccountFailedException('I am the message to be displayed for the user');\n\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Usage and overwriting pre-set CustomData")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\nthrow (new AwesomeExceptionWithCustomData())->overrideCustomData(['foo' => 'bar']);\n\n")),Object(a.b)("h3",{id:"application-error-codes"},"Application Error Codes"),Object(a.b)("p",null,"Apiato provides a convenient way to manage all ",Object(a.b)("inlineCode",{parentName:"p"},"application error codes")," in one central place. Therefore, Apiato provides, amongst others, the ",Object(a.b)("inlineCode",{parentName:"p"},"\\App\\Ship\\Exceptions\\Codes\\ApplicationErrorCodesTable")," class, which already holds various information for multiple errors."),Object(a.b)("p",null,"Thereby, one error look like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"const BASE_GENERAL_ERROR = [\n    'code' => 1001,\n    'title' => 'Unknown / Unspecified Error.',\n    'description' => 'Something unexpected happened.',\n];\n")),Object(a.b)("p",null,"Note that the ",Object(a.b)("inlineCode",{parentName:"p"},"code")," is used to be sent back to the client. The ",Object(a.b)("inlineCode",{parentName:"p"},"title")," and ",Object(a.b)("inlineCode",{parentName:"p"},"description"),", however, can be used to automatically generate a documentation regarding all defined error codes and their meaning. Please note that this feature is currently not implemented but will be added later on."),Object(a.b)("h4",{id:"linking-exceptions-and-error-codes"},"Linking Exceptions and Error Codes"),Object(a.b)("p",null,"In order to link an ",Object(a.b)("inlineCode",{parentName:"p"},"error code")," to an ",Object(a.b)("inlineCode",{parentName:"p"},"Exception"),", you simply need override the ",Object(a.b)("inlineCode",{parentName:"p"},"useErrorCode()")," method of the ",Object(a.b)("inlineCode",{parentName:"p"},"Exception"),"."),Object(a.b)("p",null,"Consider the following example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"class InternalErrorException extends Exception\n{\n\n    public $httpStatusCode = SymfonyResponse::HTTP_INTERNAL_SERVER_ERROR;\n\n    public $message = 'Something went wrong!';\n    \n    public code = 4711; // this code will be overwritten by the useErrorCode() method!\n\n    public function useErrorCode()\n    {\n        return ApplicationErrorCodes::BASE_INTERNAL_ERROR;\n    }\n}\n")),Object(a.b)("p",null,"Please note that already defined ",Object(a.b)("inlineCode",{parentName:"p"},"$code")," values may be overwritten by the ",Object(a.b)("inlineCode",{parentName:"p"},"useErrorCode()")," method! Furthermore, this feature is completely optional - you may still use the known ",Object(a.b)("inlineCode",{parentName:"p"},"public $code = 4711;")," approach to manually set an error code."),Object(a.b)("h4",{id:"defining-own-error-code-tables"},"Defining Own Error Code Tables"),Object(a.b)("p",null,"Of course, Apiato allows you to define your own ",Object(a.b)("inlineCode",{parentName:"p"},"CustomErrorCodesTable"),". In fact, there already exists such a file where you can define your own error codes. Please note that the ",Object(a.b)("inlineCode",{parentName:"p"},"ApplicationErrorCodesTable")," may be adapted by Apiato - the others will not."),Object(a.b)("p",null,"If you like to split the errors in various files, you can easily create a ",Object(a.b)("inlineCode",{parentName:"p"},"UserErrorCodesTable"),' in respective namespace and define the errors accordingly. However, you need to manually "register" this code table. This can be achieved in the ',Object(a.b)("inlineCode",{parentName:"p"},"ErrorCodeManager::getCodeTables()")," method."),Object(a.b)("p",null,"Now you can easily use your ",Object(a.b)("inlineCode",{parentName:"p"},"UserErrorCodesTable::USER_NOT_VERIFIED")," error in your ",Object(a.b)("inlineCode",{parentName:"p"},"Exception")," class."))}s.isMDXComponent=!0},221:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),s=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},b=function(e){var n=s(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=s(t),u=r,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||a;return t?o.a.createElement(m,p(p({ref:n},l),{},{components:t})):o.a.createElement(m,p({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);