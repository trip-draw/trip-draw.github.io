"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7628],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,b=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(b,s(s({ref:t},c),{},{components:n})):r.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:o,s[1]=u;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7391:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={title:"Self-Hosted Runners",slug:"/backend/github/self-hosted",last_update:{date:"2023/07/20",author:"\ud5c8\ube0c"}},s=void 0,u={unversionedId:"backend/\uae43\ud5c8\ube0c/Self-hosted runners",id:"backend/\uae43\ud5c8\ube0c/Self-hosted runners",title:"Self-Hosted Runners",description:"Self-Hosted Runners",source:"@site/docs/backend/\uae43\ud5c8\ube0c/Self-hosted runners.md",sourceDirName:"backend/\uae43\ud5c8\ube0c",slug:"/backend/github/self-hosted",permalink:"/docs/backend/github/self-hosted",draft:!1,editUrl:"https://github.com/trip-draw/trip-draw.github.io/tree/main/docs/backend/\uae43\ud5c8\ube0c/Self-hosted runners.md",tags:[],version:"current",frontMatter:{title:"Self-Hosted Runners",slug:"/backend/github/self-hosted",last_update:{date:"2023/07/20",author:"\ud5c8\ube0c"}},sidebar:"BackendSidebar",previous:{title:"Github Actions",permalink:"/docs/backend/github/actions"},next:{title:"Swap \uba54\ubaa8\ub9ac \uc124\uc815",permalink:"/docs/backend/server/swap"}},i={},l=[{value:"Self-Hosted Runners",id:"self-hosted-runners",level:3},{value:"Runner \uc0dd\uc131",id:"runner-\uc0dd\uc131",level:3},{value:"\uc778\uc2a4\ud134\uc2a4\uc5d0 Runner \uc124\uc815",id:"\uc778\uc2a4\ud134\uc2a4\uc5d0-runner-\uc124\uc815",level:3},{value:"\uc2e4\ud589",id:"\uc2e4\ud589",level:3},{value:"\ucc38\uace0 \uc790\ub8cc",id:"\ucc38\uace0-\uc790\ub8cc",level:3}],c={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"self-hosted-runners"},"Self-Hosted Runners"),(0,o.kt)("p",null,"\ub85c\uceec \ud658\uacbd\uc5d0\uc11c GitHub Actions workflow\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\uac8c \ud574\uc8fc\ub294 \uc11c\ube44\uc2a4"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners"},"Self-Hosted Runners\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \uc815\ubcf4 \uc54c\uc544\ubcf4\uae30"))),(0,o.kt)("h3",{id:"runner-\uc0dd\uc131"},"Runner \uc0dd\uc131"),(0,o.kt)("p",null,"Repository \u2192 Settings \u2192 Actions \u2192 Runners \u2192 New self-hosted runner"),(0,o.kt)("h3",{id:"\uc778\uc2a4\ud134\uc2a4\uc5d0-runner-\uc124\uc815"},"\uc778\uc2a4\ud134\uc2a4\uc5d0 Runner \uc124\uc815"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"EC2 \uc778\uc2a4\ud134\uc2a4 t4g.small Ubuntu 22.04 \uae30\uc900")),(0,o.kt)("p",null,"Runner Image: Linux",(0,o.kt)("br",{parentName:"p"}),"\n","Architecture: ARM 64",(0,o.kt)("br",{parentName:"p"}),"\n","Github \uc548\ub0b4 \ubb38\uad6c\ub97c \ud1b5\ud574 \uc124\uce58\ud558\uace0, \uc124\uc815 \ubd80\ubd84\uc758 \uacbd\uc6b0 \uc5d4\ud130\ub9cc \uacc4\uc18d \uc785\ub825\ud574\ub3c4 \uc124\uc815\uc774 \uc644\ub8cc\ub41c\ub2e4.  "),(0,o.kt)("admonition",{title:"\uc124\uc815 \uc2dc \uc8fc\uc758\uc0ac\ud56d",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"\uc911\uac04\uc5d0 \ub0b4\ubd80 ip\ub85c \uc774\ub984 \uc124\uc815\uc774 \uc790\ub3d9\ud654 \ub418\ub294 \ubd80\ubd84\uc774 \uc788\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\uc774 \ubd80\ubd84\uc740 \uc9c1\uc811 \ub2e4\ub978 \uc774\ub984\uc73c\ub85c \ubcc0\uacbd\ud574\uc57c \ud55c\ub2e4. ")),(0,o.kt)("h3",{id:"\uc2e4\ud589"},"\uc2e4\ud589"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"nohup ./run.sh &")," \uc744 \uc774\uc6a9\ud558\uc5ec \ubc31\uadf8\ub77c\uc6b4\ub4dc \uc2e4\ud589\ud55c\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","Repository \u2192 Settings \u2192 Actions \u2192 Runners\uc5d0 \ub4e4\uc5b4\uac00\uba74 Active\ub41c Runner\ub97c \ud655\uc778\ud560 \uc218 \uc788\ub2e4."),(0,o.kt)("h3",{id:"\ucc38\uace0-\uc790\ub8cc"},"\ucc38\uace0 \uc790\ub8cc"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://be-student.tistory.com/75"},"\ub204\ub204\uc758 Self Hosted Runner \ub85c EC2 \uc5d0 CD \uad6c\ucd95"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners"},"Self-Hosted Runners")))}d.isMDXComponent=!0}}]);