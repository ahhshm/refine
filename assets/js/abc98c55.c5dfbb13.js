"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[68051],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),g=s(a),u=n,f=g["".concat(l,".").concat(u)]||g[u]||p[u]||i;return a?r.createElement(f,o(o({ref:t},m),{},{components:a})):r.createElement(f,o({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},93218:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));a(26466),a(95663),a(38704),a(73590),a(71698),a(2687);const i={title:"Creating a React search bar and content filtering components",description:"Article about how to create Search bar and filter component in React",slug:"react-search-bar-and-filtering",authors:"madars_biss",tags:["react","refine","search-bar","filtering"],image:"/img/blog/2022-08-26-react-content-filtering/refine-filter-social.png",hide_table_of_contents:!1},o=void 0,c={permalink:"/blog/react-search-bar-and-filtering",source:"@site/blog/2022-08-26-react-content-filtering.md",title:"Creating a React search bar and content filtering components",description:"Article about how to create Search bar and filter component in React",date:"2022-08-26T00:00:00.000Z",formattedDate:"August 26, 2022",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"refine",permalink:"/blog/tags/refine"},{label:"search-bar",permalink:"/blog/tags/search-bar"},{label:"filtering",permalink:"/blog/tags/filtering"}],readingTime:14.825,hasTruncateMarker:!0,authors:[{name:"Madars Bi\u0161s",title:"Software Developer",url:"https://github.com/madzadev",imageURL:"https://github.com/madzadev.png",key:"madars_biss"}],frontMatter:{title:"Creating a React search bar and content filtering components",description:"Article about how to create Search bar and filter component in React",slug:"react-search-bar-and-filtering",authors:"madars_biss",tags:["react","refine","search-bar","filtering"],image:"/img/blog/2022-08-26-react-content-filtering/refine-filter-social.png",hide_table_of_contents:!1},prevItem:{title:"Javascript Currying - Variadic Currying",permalink:"/blog/javascript-variadic-currying"},nextItem:{title:"MUI Icons in React",permalink:"/blog/mui-icons-in-react"},relatedPosts:[{title:"Building a CRUD app with Material UI and Strapi in React",permalink:"/blog/build-admin-panel-with-material-ui-and-strapi",formattedDate:"July 21, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Content, refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://github.com/necatiozmen",linkedin:"https://github.com/necatiozmen",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:16.72,date:"2022-07-21T00:00:00.000Z"},{title:"React 18 Upgrade Guide and New Features",permalink:"/blog/react-18-upgrade-guide",formattedDate:"September 9, 2022",authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],readingTime:8.795,date:"2022-09-09T00:00:00.000Z"},{title:"How to use Material UI Select in React",permalink:"/blog/material-ui-select-component",formattedDate:"October 30, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:9.29,date:"2022-10-30T00:00:00.000Z"}],authorPosts:[]},l={authorsImageUrls:[void 0]},s=[{value:"Introduction",id:"introduction",level:2}],m={toc:s};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Filtering systems are common for most modern web applications. They are especially useful if there are large amounts of data. They allow users to save time and easily access the information they are looking for."))}p.isMDXComponent=!0},26466:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/demo-842c6099818f37b1344febc6b5afa75e.png"},95663:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/filters-4fac09db67ae2325b1d2c4a02f602e54.gif"},38704:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/mobile-14573b94cce0fafb5a1fd667080363ab.gif"},2687:(e,t,a)=>{a.p},73590:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/search-218ff174fc63af26fda7c5697730aaef.gif"},71698:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/terminal-c83f578827a10891bedccb04a42d943a.png"}}]);