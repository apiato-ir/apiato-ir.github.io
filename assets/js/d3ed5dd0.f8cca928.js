(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{248:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(8),i=(t(0),t(284)),o={title:"Transformers"},c={unversionedId:"main-components/transformers",id:"version-10.x/main-components/transformers",isDocsHomePage:!1,title:"Transformers",description:"* Definition & Principles",source:"@site/versioned_docs/version-10.x/main-components/transformers.md",sourceDirName:"main-components",slug:"/main-components/transformers",permalink:"/docs/main-components/transformers",editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-10.x/main-components/transformers.md",version:"10.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1619394104,formattedLastUpdatedAt:"4/25/2021",frontMatter:{title:"Transformers"},sidebar:"version-10.x/docs",previous:{title:"Views",permalink:"/docs/main-components/views"},next:{title:"Exceptions",permalink:"/docs/main-components/exceptions"}},l=[{value:"Definition &amp; Principles",id:"definition-principles",children:[]},{value:"Rules",id:"rules",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Code Samples",id:"code-samples",children:[]},{value:"Relationships (include)",id:"relationships-include",children:[]},{value:"Transformer Available helper functions:",id:"transformer-available-helper-functions",children:[]}],s={toc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#definition-principles"},"Definition & Principles")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#rules"},"Rules")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#code-samples"},"Code Samples")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#relationships-include"},"Relationships (include)"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#from-front-end"},"From Front-end")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#from-back-end"},"From Back-end")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#transformer-available-helper-functions"},"Transformer Available helper functions:"))),Object(i.b)("h3",{id:"definition-principles"},"Definition & Principles"),Object(i.b)("p",null,"Read ",Object(i.b)("a",{parentName:"p",href:"https://github.com/Mahmoudz/Porto#Transformers"},Object(i.b)("strong",{parentName:"a"},"Porto SAP Documentation (#Transformers)")),"."),Object(i.b)("h3",{id:"rules"},"Rules"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"All API responses MUST be formatted via a Transformer.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Every Transformer SHOULD extend from ",Object(i.b)("inlineCode",{parentName:"p"},"App\\Ship\\Parents\\Transformers\\Transformer"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Each Transformer MUST have a ",Object(i.b)("inlineCode",{parentName:"p"},"transform()")," function."))),Object(i.b)("h3",{id:"folder-structure"},"Folder Structure"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"}," - app\n    - Containers\n        - {section-name}\n            - {container-name}\n                - UI\n                    - API\n                        - Transformers\n                            - UserTransformer.php\n                            - ...\n")),Object(i.b)("h3",{id:"code-samples"},"Code Samples"),Object(i.b)("h4",{id:"reward-transformer-with-country-relation"},"Reward Transformer with Country relation"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"class ItemTransformer extends Transformer\n{\n    protected $availableIncludes = [\n        'images',\n    ];\n\n    protected $defaultIncludes = [\n        'roles',\n    ];\n\n    public function transform(Item $item)\n    {\n        $response = [\n            'object'      => $item->getResourceKey(),\n            'id'          => $item->getHashedKey(),\n            'name'        => $item->name,\n            'description' => $item->description,\n            'price'       => (float)$item->price,\n            'weight'      => (float)$item->weight,\n            'created_at'  => $item->created_at,\n            'updated_at'  => $item->updated_at,\n            'readable_created_at' => $item->created_at->diffForHumans(),\n            'readable_updated_at' => $item->updated_at->diffForHumans(),\n        ];\n\n        // add more or modify data for Admins only\n        $response = $this->ifAdmin([\n            'real_id'    => $item->id,\n            'deleted_at' => $item->deleted_at,\n        ], $response);\n\n        return $response;\n    }\n\n    public function includeImages(Item $item)\n    {\n        return $this->collection($item->images, new ItemImageTransformer());\n    }\n\n    public function includeRoles(User $user)\n    {\n        return $this->collection($user->roles, new RoleTransformer());\n    }\n}\n")),Object(i.b)("h4",{id:"usage-from-controller-single-item"},"Usage from Controller (Single Item)"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"$user = $this->getUser();\n\n$this->transform($user, UserTransformer::class);\n\n// more options are available\n")),Object(i.b)("h3",{id:"relationships-include"},"Relationships (include)"),Object(i.b)("p",null,"Loading relationships in Transformer (calling other Transformers):"),Object(i.b)("p",null,"This can be done in 2 ways:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"By the User, he can specify what relations to return in response.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"By the Developer, define what relations to include at run time."))),Object(i.b)("h4",{id:"from-front-end"},"From Front-end"),Object(i.b)("p",null,"You can request data with their relationships directly from the API call using ",Object(i.b)("inlineCode",{parentName:"p"},"include=tags,user")," but first the Transformer need to have the ",Object(i.b)("inlineCode",{parentName:"p"},"availableIncludes")," defined with their functions like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"class AccountTransformer extends Transformer\n{\n    protected $availableIncludes = [\n        'tags',\n        'user',\n    ];\n\n    public function transform(Account $account)\n    {\n        return [\n            'id'       => (int)$account->id,\n            'url'      => $account->url,\n            'username' => $account->username,\n            'secret'   => $account->secret,\n            'note'     => $account->note,\n        ];\n    }\n\n    public function includeTags(Account $account)\n    {\n        // use collection with `multi` relationship\n        return $this->collection($account->tags, new TagTransformer());\n    }\n\n    public function includeUser(Account $account)\n    {\n        // use `item` with single relationship\n        return $this->item($account->user, new UserTransformer());\n    }\n}\n")),Object(i.b)("p",null,"Now to get the ",Object(i.b)("inlineCode",{parentName:"p"},"Tags")," with the response when Accounts are requested pass the ",Object(i.b)("inlineCode",{parentName:"p"},"?include=tags")," parameter with the ","[GET]"," request."),Object(i.b)("p",null,"To get Tags with User use the comma separator: ",Object(i.b)("inlineCode",{parentName:"p"},"?include=tags,user"),"."),Object(i.b)("h4",{id:"from-back-end"},"From Back-end"),Object(i.b)("p",null,"From the controller you can dynamically set the ",Object(i.b)("inlineCode",{parentName:"p"},"DefaultInclude")," using (",Object(i.b)("inlineCode",{parentName:"p"},"setDefaultIncludes"),") anytime you want."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"return $this->transform($rewards, ProductsTransformer::class)->setDefaultIncludes(['tags']);\n")),Object(i.b)("p",null,"You need to have ",Object(i.b)("inlineCode",{parentName:"p"},"includeTags")," function defined on the transformer. Look at the full examples above."),Object(i.b)("p",null,"If you want to include a relation with every response from this transformer you can define the relation directly in the transformer on (",Object(i.b)("inlineCode",{parentName:"p"},"$defaultIncludes"),")"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"protected $availableIncludes = [\n    'users',\n];\n\nprotected $defaultIncludes = [\n    'tags',\n];\n\n// ..\n")),Object(i.b)("p",null,"You need to have ",Object(i.b)("inlineCode",{parentName:"p"},"includeUser")," and ",Object(i.b)("inlineCode",{parentName:"p"},"includeTags")," functions defined on the transformer. Look at the full examples above."),Object(i.b)("h2",{id:"transformer-available-helper-functions"},"Transformer Available helper functions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"user()")," : returns current authenticated user object.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"ifAdmin($adminResponse, $clientResponse)")," : merges normal client response with the admin extra or modified results, when current authenticated user is Admin. Look at the full examples above."))),Object(i.b)("p",null,"For more information about the Transformers read ",Object(i.b)("a",{parentName:"p",href:"http://fractal.thephpleague.com/transformers/"},"this"),"."))}p.isMDXComponent=!0},284:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),b=r,d=u["".concat(o,".").concat(b)]||u[b]||m[b]||i;return t?a.a.createElement(d,c(c({ref:n},s),{},{components:t})):a.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);