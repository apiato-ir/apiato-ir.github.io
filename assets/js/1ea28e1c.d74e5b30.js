(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{100:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return c}));var n=a(3),r=a(8),o=(a(0),a(281)),i={title:"Upgrade Guide"},p={unversionedId:"upgrade-guide",id:"upgrade-guide",isDocsHomePage:!1,title:"Upgrade Guide",description:"- Upgrade from 10.0 to 11.0",source:"@site/docs/upgrade-guide.md",sourceDirName:".",slug:"/upgrade-guide",permalink:"/docs/next/upgrade-guide",editUrl:"https://github.com/apiato/documentation/tree/master/docs/upgrade-guide.md",version:"current",lastUpdatedBy:"mohammad-alavi",lastUpdatedAt:1632981597,formattedLastUpdatedAt:"9/30/2021",frontMatter:{title:"Upgrade Guide"},sidebar:"docs",previous:{title:"Tasks Queuing",permalink:"/docs/next/miscellaneous/tasks-queuing"},next:{title:"Contribution Guide",permalink:"/docs/next/contribution-guide"}},l=[{value:"Upgrade from 10.0 to 11.0",id:"upgrade-10To11",children:[]},{value:"Upgrade from 9.0 to 10.0",id:"upgrade-90To10",children:[]},{value:"Upgrade from 8.0 to 9.0",id:"upgrade-80To90",children:[]},{value:"Upgrade from 7.4 to 8.0",id:"upgrade-74To80",children:[]},{value:"Upgrade from 7.3 to 7.4",id:"upgrade-73To74",children:[]},{value:"Upgrade from 7.2 to 7.3",id:"upgrade-72To73",children:[]},{value:"Upgrade from 7.1 to 7.2",id:"upgrade-71To72",children:[]},{value:"Upgrade from 7.0 to 7.1",id:"upgrade-70To71",children:[]},{value:"Upgrade from 5.0 to 7.0",id:"upgrade-50To70",children:[]},{value:"Upgrade from 4.1 to 5.0",id:"upgrade-41To50",children:[]},{value:"How to manually upgrade older versions to 4.1?",id:"how-to-manually-upgrade-older-versions-to-41",children:[]},{value:"Manual Upgrading Guide",id:"Manual-Upgrading-Guide",children:[]}],b={toc:l};function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#upgrade-10To11"},"Upgrade from 10.0 to 11.0")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#upgrade-90To10"},"Upgrade from 9.0 to 10.0")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#upgrade-80To90"},"Upgrade from 8.0 to 9.0")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#upgrade-74To80"},"Upgrade from 7.4 to 8.0")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#upgrade-73To74"},"Upgrade from 7.3 to 7.4")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#upgrade-72To73"},"Upgrade from 7.2 to 7.3")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#upgrade-71To72"},"Upgrade from 7.1 to 7.2")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#upgrade-70To71"},"Upgrade from 7.0 to 7.1")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#upgrade-50To70"},"Upgrade from 5.0 to 7.0")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#upgrade-41To50"},"Upgrade from 4.1 to 5.0")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#how-to-manually-upgrade-older-versions-to-41"},"How to manually upgrade older versions to 4.1?")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#Manual-Upgrading-Guide"},"Manual Upgrading Guide"))),Object(o.b)("h2",{id:"upgrade-10To11"},"Upgrade from 10.0 to 11.0"),Object(o.b)("p",null,"WIP"),Object(o.b)("h2",{id:"upgrade-90To10"},"Upgrade from 9.0 to 10.0"),Object(o.b)("p",null,"Changes in v10 are so drastic that there was no way we could provide an upgrade guide for it.",Object(o.b)("br",{parentName:"p"}),"\n","We suggest that you see the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/apiato/apiato/releases/tag/v10.0.0"},"v10 release notes")," and upgrade your project using it."),Object(o.b)("h2",{id:"upgrade-80To90"},"Upgrade from 8.0 to 9.0"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Estimated upgrading time: 30 minutes.")),Object(o.b)("p",null,"1) Follow the steps in the ",Object(o.b)("a",{parentName:"p",href:"#Manual-Upgrading-Guide"},"Manual Upgrading Guide")," below."),Object(o.b)("p",null,"You can view ",Object(o.b)("a",{parentName:"p",href:"https://github.com/apiato/apiato/compare/8.0...9.0"},"all changes here"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Running ",Object(o.b)("inlineCode",{parentName:"li"},"php artisan apiato")," should return ",Object(o.b)("inlineCode",{parentName:"li"},"9.0.0")),Object(o.b)("li",{parentName:"ul"},"Running ",Object(o.b)("inlineCode",{parentName:"li"},"php artisan -V")," should return ",Object(o.b)("inlineCode",{parentName:"li"},"7.*.*"))),Object(o.b)("h2",{id:"upgrade-74To80"},"Upgrade from 7.4 to 8.0"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Estimated upgrading time: 30 minutes.")),Object(o.b)("p",null,"1) Move the ",Object(o.b)("inlineCode",{parentName:"p"},"WePay")," Container away until the upgrade is done, or delete it if you're not using it. This container was removed in Apiato 8.0."),Object(o.b)("p",null,"2) Follow the steps in the ",Object(o.b)("a",{parentName:"p",href:"#Manual-Upgrading-Guide"},"Manual Upgrading Guide")," below."),Object(o.b)("p",null,"3) Use ",Object(o.b)("inlineCode",{parentName:"p"},".test")," instead of ",Object(o.b)("inlineCode",{parentName:"p"},".develop")," for the URL's."),Object(o.b)("h2",{id:"upgrade-73To74"},"Upgrade from 7.3 to 7.4"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Estimated upgrading time: 30 minutes.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"IMPORTANT NOTE 1")," : Before upgrading, please review ",Object(o.b)("strong",{parentName:"p"},"all"),' of your own dependencies, if respective "Laravel 5.6\ncompatible versions" are already published!'),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"IMPORTANT NOTE 2")," : Before upgrading, please ",Object(o.b)("inlineCode",{parentName:"p"},"git commit")," all of your changes in order to rollback if something breaks!"),Object(o.b)("p",null,"Key Changes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Apiato now requires PHP 7.1.3 to run - this is because of Laravel's dependency!"),Object(o.b)("li",{parentName:"ul"},"Added Laravel 5.6. See the ",Object(o.b)("a",{parentName:"li",href:"https://laravel.com/docs/master/upgrade"},"Laravel Upgrade Guide")," for more details.")),Object(o.b)("p",null,"Most of the changes introduced by Laravel 5.6 are easy to integrate. However, the following might be a ",Object(o.b)("strong",{parentName:"p"},"BREAKING CHANGE"),"\nto your application. Please review the following changes with caution:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Database: Index Order Of Morph Columns"),Object(o.b)("p",{parentName:"blockquote"},"The indexing of the columns built by the morphs migration method has been reversed for better performance. If you are\nusing the morphs method in one of your migrations, you may receive an error when attempting to run the migration's\ndown method. If the application is still in development, you may use the migrate:fresh command to rebuild the database\nfrom scratch. If the application is in production, you should pass an explicit index name to the morphs method.")),Object(o.b)("p",null,"Manual Tasks to do:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Update your own dependencies to new L5.6 compatible versions!"),Object(o.b)("li",{parentName:"ul"},"Add the new ",Object(o.b)("inlineCode",{parentName:"li"},"LOG_CHANNEL=stack")," to your environment file."),Object(o.b)("li",{parentName:"ul"},"Copy the 2 new Laravel config files (",Object(o.b)("inlineCode",{parentName:"li"},"hashing.php")," and ",Object(o.b)("inlineCode",{parentName:"li"},"logging.php"),") to ",Object(o.b)("inlineCode",{parentName:"li"},"/config/")," folder in your main project tree."),Object(o.b)("li",{parentName:"ul"},"Adjust the ",Object(o.b)("inlineCode",{parentName:"li"},"TrustProxies")," in ",Object(o.b)("inlineCode",{parentName:"li"},"App/Ship/Middlewares")," accordingly."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},'Check, if the described "breaking change" may affect your application!')),Object(o.b)("li",{parentName:"ul"},"Check (and eventually manually set) the dependency to ",Object(o.b)("inlineCode",{parentName:"li"},"apiato/core : 2.4.*")," in your ",Object(o.b)("inlineCode",{parentName:"li"},"App/Ship/composer.json")," file")),Object(o.b)("p",null,"Use the ",Object(o.b)("a",{parentName:"p",href:"#Manual-Upgrading-Guide"},"Manual Upgrading Guide")," below."),Object(o.b)("h2",{id:"upgrade-72To73"},"Upgrade from 7.2 to 7.3"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Estimated upgrading time: 20 minutes.")),Object(o.b)("p",null,"Use the ",Object(o.b)("a",{parentName:"p",href:"#Manual-Upgrading-Guide"},"Manual Upgrading Guide")," below."),Object(o.b)("h2",{id:"upgrade-71To72"},"Upgrade from 7.1 to 7.2"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Estimated upgrading time: 10 minutes.")),Object(o.b)("p",null,"Use the ",Object(o.b)("a",{parentName:"p",href:"#Manual-Upgrading-Guide"},"Manual Upgrading Guide")," below."),Object(o.b)("h2",{id:"upgrade-70To71"},"Upgrade from 7.0 to 7.1"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Estimated upgrading time: 45 minutes.")),Object(o.b)("p",null,"Use the ",Object(o.b)("a",{parentName:"p",href:"#Manual-Upgrading-Guide"},"Manual Upgrading Guide")," below."),Object(o.b)("h2",{id:"upgrade-50To70"},"Upgrade from 5.0 to 7.0"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Estimated upgrading time: 30 minutes.")),Object(o.b)("p",null,"By upgrading to ",Object(o.b)("inlineCode",{parentName:"p"},"Apiato 7.0")," you can benefit from all the features provided by ",Object(o.b)("inlineCode",{parentName:"p"},"Laravel 5.5"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"This upgrade is simple.")),Object(o.b)("p",null,"You just have to do the following changes found at the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/apiato/apiato/compare/5.0...7.0"},"GitHub Comparison Tool"),"."),Object(o.b)("p",null,"Note: Some of the files are not required to be upgraded. And some of them, can be simply replaced by the new files\n(copy a file content from the Apiato repository and replace it with your older version)."),Object(o.b)("p",null,"Hint: You can do a git merge and solve the conflicts, if you don't want to manually do the changes commit by commit."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Important Information"),": Laravel 5.5 introduces an ",Object(o.b)("inlineCode",{parentName:"p"},"auto-discovery")," feature that lets you automatically register ",Object(o.b)("inlineCode",{parentName:"p"},"ServiceProviders"),".\nDue to the nature and structure of Apiato applications, this features ",Object(o.b)("strong",{parentName:"p"},"is turned off"),", because it messes up how ",Object(o.b)("inlineCode",{parentName:"p"},"config")," files are loaded\nin apiato. This means, that you still need to ",Object(o.b)("strong",{parentName:"p"},"manually")," register 3rd-party ",Object(o.b)("inlineCode",{parentName:"p"},"ServiceProviders")," in the ",Object(o.b)("inlineCode",{parentName:"p"},"ServiceProvider")," of a ",Object(o.b)("inlineCode",{parentName:"p"},"Container"),". (This should be a temporary situation)")),Object(o.b)("h2",{id:"upgrade-41To50"},"Upgrade from 4.1 to 5.0"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Estimated upgrading time: 15 minutes.")),Object(o.b)("p",null,"This guide will show you how to freshly install the new Apiato 5.0, then migrate your old project (built with Apiato 4.1)\nto the freshly installed one (Apiato 5.0)."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"In the guide we'll be using the term ",Object(o.b)("strong",{parentName:"em"},"Old Project")," (referring to your old project that was built with Apiato 4.1),\nand the term New ",Object(o.b)("strong",{parentName:"em"},"Project")," (referring to the new freshly installed Apiato 5.0).")),Object(o.b)("p",null,"1) Download and install Apiato 5.0. See ","[Application Setup]","({{ site.baseurl }}{% link _docs/getting-started/installation.md %})."),Object(o.b)("p",null,"2) Delete the Containers directory ",Object(o.b)("inlineCode",{parentName:"p"},"app/Containers")," from the new project."),Object(o.b)("p",null,"3) Move the Containers directory ",Object(o.b)("inlineCode",{parentName:"p"},"app/Containers")," from the old project to the new project."),Object(o.b)("p",null,"4) Open this file ",Object(o.b)("inlineCode",{parentName:"p"},"app/Ship/composer.json")," in your old project and only copy the required dependencies, from the old project to the same file in the new project."),Object(o.b)("p",null,"5) Again, open the ",Object(o.b)("inlineCode",{parentName:"p"},"app/Ship/composer.json")," file in the new project, and remove the following dependencies:\n",Object(o.b)("inlineCode",{parentName:"p"},"guzzlehttp/guzzle"),", ",Object(o.b)("inlineCode",{parentName:"p"},"prettus/l5-repository"),", ",Object(o.b)("inlineCode",{parentName:"p"},"barryvdh/laravel-cors"),", ",Object(o.b)("inlineCode",{parentName:"p"},"spatie/laravel-fractal"),", ",Object(o.b)("inlineCode",{parentName:"p"},"vinkla/hashids")," and ",Object(o.b)("inlineCode",{parentName:"p"},"johannesschobel/apiato-container-installer"),"."),Object(o.b)("p",null,"6) Move and replace the following directories from the old project to the new project: ",Object(o.b)("inlineCode",{parentName:"p"},"config"),", ",Object(o.b)("inlineCode",{parentName:"p"},"public"),", ",Object(o.b)("inlineCode",{parentName:"p"},"resources"),", ",Object(o.b)("inlineCode",{parentName:"p"},"database")," and ",Object(o.b)("inlineCode",{parentName:"p"},"storage"),"."),Object(o.b)("p",null,"7) Open ",Object(o.b)("inlineCode",{parentName:"p"},"config/app.php")," and replace ",Object(o.b)("inlineCode",{parentName:"p"},"App\\Ship\\Engine\\Providers\\PortoServiceProvider::class")," with ",Object(o.b)("inlineCode",{parentName:"p"},"Apiato\\Core\\Providers\\ApiatoProvider::class"),"."),Object(o.b)("p",null,"8) Move ",Object(o.b)("inlineCode",{parentName:"p"},".gitignore"),", ",Object(o.b)("inlineCode",{parentName:"p"},"phpunit.xml")," and ",Object(o.b)("inlineCode",{parentName:"p"},".env")," files, from the old project to the new project."),Object(o.b)("p",null,"9) Open the ",Object(o.b)("inlineCode",{parentName:"p"},".env")," file on the new project and append this to it ",Object(o.b)("inlineCode",{parentName:"p"},"API_RATE_LIMIT_ENABLED=true"),"."),Object(o.b)("p",null,"10) Open ",Object(o.b)("inlineCode",{parentName:"p"},"phpunit.xml")," file of the new project and delete this line from the file ",Object(o.b)("inlineCode",{parentName:"p"},"<file>./app/Ship/Engine/Loaders/FactoryMixer/FactoriesLoader.php</file>"),"."),Object(o.b)("p",null,"11) If you had live testing data in your old project inside ",Object(o.b)("inlineCode",{parentName:"p"},"app/Ship/Seeders/Data/Testing/Seeders/TestingDataSeeder.php")," file, then copy that file content and past it in the new project inside ",Object(o.b)("inlineCode",{parentName:"p"},"app/Ship/Seeders/SeedTestingData.php"),". You will need to rename the class (not the file) from ",Object(o.b)("inlineCode",{parentName:"p"},"TestingDataSeeder")," to ",Object(o.b)("inlineCode",{parentName:"p"},"SeedTestingData"),",\nand you will need to update the namespace from ",Object(o.b)("inlineCode",{parentName:"p"},"namespace App\\Ship\\Seeders\\Data\\Testing\\Seeders;")," to ",Object(o.b)("inlineCode",{parentName:"p"},"namespace App\\Ship\\Seeders;"),"."),Object(o.b)("p",null,"12) If you ever used the ",Object(o.b)("inlineCode",{parentName:"p"},"HashIdTrait"),", you need to search and replace this namespace ",Object(o.b)("inlineCode",{parentName:"p"},"App\\Ship\\Engine\\Traits\\HashIdTrait")," with this ",Object(o.b)("inlineCode",{parentName:"p"},"Apiato\\Core\\Traits\\HashIdTrait"),"."),Object(o.b)("p",null,"13) Run ",Object(o.b)("inlineCode",{parentName:"p"},"composer update"),". If you got any error at this step, try to solve it or open an ",Object(o.b)("a",{parentName:"p",href:"https://github.com/apiato/apiato/issues"},"Issue"),"."),Object(o.b)("p",null,"14) Move the ",Object(o.b)("inlineCode",{parentName:"p"},".git")," directory from the old project to the new one. Add all changes ",Object(o.b)("inlineCode",{parentName:"p"},"git add .")," then commit ",Object(o.b)("inlineCode",{parentName:"p"},"git commit -m 'upgrade Apiato from 4.1 to 5.0'"),"."),Object(o.b)("p",null,"15) Run your tests ",Object(o.b)("inlineCode",{parentName:"p"},"vendor/bin/phpunit"),"."),Object(o.b)("p",null,"That's it :)"),Object(o.b)("h2",{id:"how-to-manually-upgrade-older-versions-to-41"},"How to manually upgrade older versions to 4.1?"),Object(o.b)("p",null,"Use the ",Object(o.b)("a",{parentName:"p",href:"#Manual-Upgrading-Guide"},"Manual Upgrading Guide")," below."),Object(o.b)("h2",{id:"Manual-Upgrading-Guide"},"Manual Upgrading Guide"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"These commands and examples, are compatible with the Apiato 8.0 upgrade. You can just copy/past.")),Object(o.b)("p",null,"1) Checkout a new branch from your stable branch, to perform the upgrade."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"\u276f git checkout -b upgrade-apiato\n")),Object(o.b)("p",null,"2) Configure a new remote (upstream) that points to the official Apiato repository."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"\u276f git remote add upstream https://github.com/apiato/apiato\n")),Object(o.b)("p",null,"Verify the new upstream repository was added, by listing the current configured remote repositories."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"\u276f git remote -vv\n\norigin      git@bitbucket.org:username/my-awesome-api.git (fetch)\norigin      git@bitbucket.org:username/my-awesome-api.git (push)\nupstream    git@github.com:apiato/apiato.git (fetch)\nupstream    git@github.com:apiato/apiato.git (push)\n")),Object(o.b)("p",null,"3) Checkout a new branch to hold the latest Apiato changes. ",Object(o.b)("em",{parentName:"p"},"This branch will be merged into your ",Object(o.b)("inlineCode",{parentName:"em"},"upgrade-apiato")," branch created above.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"\u276f git checkout -b apiato-{version}\n// Example:   git checkout -b apiato-8.0\n")),Object(o.b)("p",null,"4) Configure this branch to track an upstream specific branch."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Replace ",Object(o.b)("inlineCode",{parentName:"em"},"{upstream-branch-name}")," with the ",Object(o.b)("a",{parentName:"em",href:"https://github.com/apiato/apiato/branches"},"branch")," name you want to upgrade to (for example ",Object(o.b)("inlineCode",{parentName:"em"},"8.0"),").")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"\u276f git fetch upstream {upstream-branch-name}\n// Example:   git fetch upstream 8.0\n\n\u276f git branch --set-upstream-to upstream/{upstream-branch-name}\n// Example:   git branch --set-upstream-to upstream/8.0\n")),Object(o.b)("p",null,"Verify your local branch is tracking the Apiato specified upstream branch."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"\u276f git branch -vv\n\n apiato          77b4d945 [upstream/{upstream-branch-name}] ...\n master          77d302aa [origin/master] ...\n")),Object(o.b)("p",null,"5) Make this branch identical to the remote upstream branch"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"\u276f git reset --hard upstream/{upstream-branch-name}\n// Example:   git reset --hard upstream/8.0\n")),Object(o.b)("p",null,"Verify this branch now contains the latest changes from the upstream branch."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"\u276f git log\n")),Object(o.b)("p",null,"6) Switch back to the ",Object(o.b)("inlineCode",{parentName:"p"},"upgrade-apiato")," branch"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"\u276f git checkout upgrade-apiato\n")),Object(o.b)("p",null,"7) Now lets merge the 2 branches. This step can be done in two ways:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Option A"),": Merge all the changes together and solve the conflicts if any. (Recommended)"),Object(o.b)("p",null,"You can execute the next command with different different parameters, below are 2 options to pick whatever feels safer to you. Do not execute both of them."),Object(o.b)("p",null,"A1: This will overwrite your changes with the upstream changes. (Try this first and if your tests failed then you can try the second one)."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"\u276f git merge --allow-unrelated-histories --strategy-option=theirs apiato-{version}\n// Example:   git merge --allow-unrelated-histories --strategy-option=theirs apiato-8.0\n")),Object(o.b)("p",null,"A2: This will let you solve all the conflicts manually. (Can be the most secure choice, but it's time consuming as well.)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"\u276f git merge --allow-unrelated-histories apiato-{version}\n// Example:   git merge --allow-unrelated-histories apiato-8.0\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Option B"),": Manually cherry pick the commits you likes to have:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"\u276f git log {upstream-branch-name}\n")),Object(o.b)("p",null,"(copy each commit ID, one by one)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"\u276f git cherry-pick {commit-ID}\n")),Object(o.b)("p",null,"(if you get any conflict solve it and keep moving)"),Object(o.b)("p",null,"8) Compare your ",Object(o.b)("inlineCode",{parentName:"p"},".env")," with the new ",Object(o.b)("inlineCode",{parentName:"p"},".env-example")," and update it."),Object(o.b)("p",null,"9) Check everything is working. By running Composer install first then re-running your tests."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Read the changelog ",Object(o.b)("a",{parentName:"li",href:"https://github.com/apiato/apiato/releases"},"releases")," page."),Object(o.b)("li",{parentName:"ul"},"You may want to update your custom containers dependencies, simply follow the ",Object(o.b)("inlineCode",{parentName:"li"},"composer install")," error outputs and bump each failing dependency. (Hint: visit each package ",Object(o.b)("a",{parentName:"li",href:"https://github.com/apiato/apiato/releases"},"releases")," page, and use the version which supports the supported version of Laravel)."),Object(o.b)("li",{parentName:"ul"},"You may need to fix the failing tests.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"\u276f composer install  &&  vendor/bin/phpunit\n")),Object(o.b)("p",null,"10) Finally, merge the upgrade-apiato (which contains the upgraded changes) with your stable branch (could be master)."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"\u276f git checkout master\n\u276f git merge upgrade-apiato\n\n\u276f php artisan -V\n")),Object(o.b)("p",null,"Enjoy :)"))}c.isMDXComponent=!0},281:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),c=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=c(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=c(a),s=n,m=u["".concat(i,".").concat(s)]||u[s]||d[s]||o;return a?r.a.createElement(m,p(p({ref:t},b),{},{components:a})):r.a.createElement(m,p({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var b=2;b<o;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);