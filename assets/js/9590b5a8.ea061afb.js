"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[51933],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,h=d["".concat(s,".").concat(u)]||d[u]||c[u]||r;return a?i.createElement(h,o(o({ref:t},m),{},{components:a})):i.createElement(h,o({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},46793:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var i=a(87462),n=(a(67294),a(3905)),r=a(77815),o=a(45977);const l={title:"Web3 with Refine",description:"Sign-in Ethereum with Web3 and Refine",slug:"web3-with-refine",authors:"melih",tags:["refine","web3","dapps","metamask","login-ethereum"],image:"/img/placeholder.png",hide_table_of_contents:!1},s=void 0,p={permalink:"/blog/web3-with-refine",source:"@site/blog/2021-12-13-web3-refine.md",title:"Web3 with Refine",description:"Sign-in Ethereum with Web3 and Refine",date:"2021-12-13T00:00:00.000Z",formattedDate:"December 13, 2021",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"web3",permalink:"/blog/tags/web-3"},{label:"dapps",permalink:"/blog/tags/dapps"},{label:"metamask",permalink:"/blog/tags/metamask"},{label:"login-ethereum",permalink:"/blog/tags/login-ethereum"}],readingTime:1.72,hasTruncateMarker:!0,authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],frontMatter:{title:"Web3 with Refine",description:"Sign-in Ethereum with Web3 and Refine",slug:"web3-with-refine",authors:"melih",tags:["refine","web3","dapps","metamask","login-ethereum"],image:"/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"How to upload files from your HTML form using Base64 encoding",permalink:"/blog/how-to-base64-upload"},nextItem:{title:"Refine vs AdminBro - Comparison Admin Panel Framework",permalink:"/blog/refine-vs-adminbro"},relatedPosts:[{title:"Top React Component Libraries and Frameworks Every Developer Should Know",permalink:"/blog/top-react-component-libraries-and-frameworks-every-developer-should-know",formattedDate:"April 29, 2022",authors:[{name:"Salih \xd6zdemir",title:"Software Developer",url:"https://github.com/salihozdemir",imageURL:"https://github.com/salihozdemir.png",key:"salih"}],readingTime:4.92,date:"2022-04-29T00:00:00.000Z"},{title:"How to Multipart File Upload Using FormData with React Hook Form",permalink:"/blog/how-to-multipart-file-upload-with-react-hook-form",formattedDate:"March 29, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:7.615,date:"2022-03-29T00:00:00.000Z"},{title:"Create Your Easy Customizable Internal Issue Tracker With Refine and Supabase",permalink:"/blog/customizable-issue-tracker-with-refine-and-supabase",formattedDate:"November 12, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:18.775,date:"2021-11-12T00:00:00.000Z"}],authorPosts:[{title:"How to Create Full Stack React/Next.JS Web App in Few Hour",permalink:"/blog/create-full-stack-app-with-refine",formattedDate:"April 29, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:8.485,date:"2022-04-29T00:00:00.000Z"},{title:"Building an Customizable Invoice Generator App with Refine, Strapi & Ant Design | Part II",permalink:"/blog/refine-invoice-generator",formattedDate:"March 1, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:12.635,date:"2022-03-01T00:00:00.000Z"},{title:"Refine vs React-Admin Which is Better for Your Project?",permalink:"/blog/refine-vs-react-admin",formattedDate:"November 26, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:14.575,date:"2021-11-26T00:00:00.000Z"}]},m={authorsImageUrls:[void 0]},c=[{value:"What is Web3?",id:"what-is-web3",level:2},{value:"What is dApps(Dapps)?",id:"what-is-dappsdapps",level:2},{value:"Live Codesandbox Example",id:"live-codesandbox-example",level:2}],d={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this article, we will talk about what is web3 and a simple ethereum wallet login application with ",(0,n.kt)("strong",{parentName:"p"},"refine"),"."),(0,n.kt)("h2",{id:"what-is-web3"},"What is Web3?"),(0,n.kt)("p",null,"Web 3.0 eliminates intermediates. There\u2019s no centralized database that stores the application state."),(0,n.kt)("p",null,"In web3, developers don't usually build and deploy applications that run on a single server or that store their data in a single database.\nInstead of, Web3 applications run on blockchains, decentralized networks of many peer to peer nodes"),(0,n.kt)("p",null,"Features provided by Web3:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Verifiable"),(0,n.kt)("li",{parentName:"ul"},"Self-governing"),(0,n.kt)("li",{parentName:"ul"},"Permissionless"),(0,n.kt)("li",{parentName:"ul"},"Stateful"),(0,n.kt)("li",{parentName:"ul"},"Trustless"),(0,n.kt)("li",{parentName:"ul"},"Native built-in payments"),(0,n.kt)("li",{parentName:"ul"},"Anonymity")),(0,n.kt)("h2",{id:"what-is-dappsdapps"},"What is dApps(Dapps)?"),(0,n.kt)("p",null,'Dapps is short for "Decentralized Applications" and refers to any application that is decentralized in nature, built on a blockchain, and may use tokens for transactions.'),(0,n.kt)("p",null,"Dapps is just like any other software application you use. It could be a website or an app on your phone. What makes a Dapp different than a traditional app is that it's built on a decentralized network, like Ethereum."),(0,n.kt)("p",null,"Many applications on the logic of dApp have been developed and continue to be developed."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://ethereum.org/en/dapps/"},"Here you can browse some dapps")),(0,n.kt)("p",null,"We have developed a simple app where you can login with ethereum and send ethereum over the network using Metamask Wallet and ",(0,n.kt)("strong",{parentName:"p"},"refine"),"."),(0,n.kt)("p",null,"This application allows you to login with your web3 wallet and you can also send ethereum over the ethereum network."),(0,n.kt)("p",null,"This example is simple intro to dApps development  built with web3 and ",(0,n.kt)("strong",{parentName:"p"},"refine"),"."),(0,n.kt)("div",{class:"img-container"},(0,n.kt)("div",{class:"window"},(0,n.kt)("div",{class:"control red"}),(0,n.kt)("div",{class:"control orange"}),(0,n.kt)("div",{class:"control green"})),(0,n.kt)("img",{src:r.Z,alt:"login"})),(0,n.kt)("br",null),(0,n.kt)("div",{class:"img-container"},(0,n.kt)("div",{class:"window"},(0,n.kt)("div",{class:"control red"}),(0,n.kt)("div",{class:"control orange"}),(0,n.kt)("div",{class:"control green"})),(0,n.kt)("img",{src:o.Z,alt:"overview"})),(0,n.kt)("br",null),(0,n.kt)("p",null,"You can develop many fast and functional dApps using web3 and ",(0,n.kt)("strong",{parentName:"p"},"refine"),"."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/examples/web3/ethereumLogin"},"View Source")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://refine.dev/docs/guides-and-concepts/web3/ethereum-signin/"},"View Guide")),(0,n.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,n.kt)("iframe",{src:"https://codesandbox.io/embed/signin-with-ethereum-umho3?autoresize=1&fontsize=14&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"signin-with-ethereum",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}u.isMDXComponent=!0},77815:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/login-bdf4a22c5704da1860b37373863170db.gif"},45977:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/overview-6a9efc47259667e81bac625c1192b70c.gif"}}]);