"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[52938],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11172:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var a=n(87462),o=(n(67294),n(3905)),r=n(65426),i=n(17010);const s={title:"Memoization in React - How useCallback Works",description:"Improve the APP performance with React useCallback() hook",slug:"react-usecallback-guide",authors:"abdullah_numan",tags:["react","memoization","usecallback","performance"],image:"/img/blog/2022-09-20-react-use-callback/social.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/blog/react-usecallback-guide",source:"@site/blog/2022-09-20-react-use-callback.md",title:"Memoization in React - How useCallback Works",description:"Improve the APP performance with React useCallback() hook",date:"2022-09-20T00:00:00.000Z",formattedDate:"September 20, 2022",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"memoization",permalink:"/blog/tags/memoization"},{label:"usecallback",permalink:"/blog/tags/usecallback"},{label:"performance",permalink:"/blog/tags/performance"}],readingTime:5.565,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"Memoization in React - How useCallback Works",description:"Improve the APP performance with React useCallback() hook",slug:"react-usecallback-guide",authors:"abdullah_numan",tags:["react","memoization","usecallback","performance"],image:"/img/blog/2022-09-20-react-use-callback/social.png",hide_table_of_contents:!1},prevItem:{title:"OTP Authentication with Supabase and Twilio in React",permalink:"/blog/supabase-twilio-otp-authentication-in-react"},nextItem:{title:"Redirect in React Router V6 with useNavigate hook",permalink:"/blog/usenavigate-react-router-redirect"},relatedPosts:[{title:"Framer Motion examples for React animations",permalink:"/blog/framer-motion-react-animations",formattedDate:"September 1, 2022",authors:[{name:"Joel Ezimorah",title:"Software Developer",url:"https://github.com/prince-joel",imageURL:"https://github.com/prince-joel.png",key:"joel_ezimorah"}],readingTime:8.78,date:"2022-09-01T00:00:00.000Z"},{title:"Using Google Lighthouse to improve app performance",permalink:"/blog/lighthouse-google-chrome",formattedDate:"August 31, 2022",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:15.725,date:"2022-08-31T00:00:00.000Z"},{title:"Develop your Own Customizable Invoice Generator with Refine and Strapi | Part I",permalink:"/blog/refine-react-admin-invoice-genarator",formattedDate:"February 22, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:11.205,date:"2022-02-22T00:00:00.000Z"}],authorPosts:[{title:"How to use TypeScript Partial Type?",permalink:"/blog/typescript-partial-utility-type",formattedDate:"October 10, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:3.985,date:"2022-10-10T00:00:00.000Z"},{title:"Javascript Currying - Variadic Currying",permalink:"/blog/javascript-variadic-currying",formattedDate:"August 28, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:8.82,date:"2022-08-28T00:00:00.000Z"},{title:"A Definitive guide on JavaScript every() Method",permalink:"/blog/javascript-every-method",formattedDate:"November 2, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:9.685,date:"2022-11-02T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},m=[{value:"Introduction",id:"introduction",level:2},{value:"Project Content Overview",id:"project-content-overview",level:3},{value:"Pass Callback from Parent to Child",id:"pass-callback-from-parent-to-child",level:2},{value:"Referential Integrity",id:"referential-integrity",level:2},{value:"Memoizing Event Listeners with <code>useCallback()</code>",id:"memoizing-event-listeners-with-usecallback",level:2},{value:"Other Cases",id:"other-cases",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Live StackBlitz Example",id:"live-stackblitz-example",level:2}],d=(u="PromotionBanner",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var u;const h={toc:m};function k(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"This post is about using the ",(0,o.kt)("inlineCode",{parentName:"p"},"useCallback()")," hook in React. This is the third part of the series titled Memoization in React."),(0,o.kt)("p",null,"In React, callback functions like event handlers inside a component are re-created as unique function objects at every re-render of the component. When a callback is passed from a parent to a child as a prop, the child component re-renders just because of the absence of referential integrity of the callback. ",(0,o.kt)("inlineCode",{parentName:"p"},"useCallback()")," helps maintain the callback's referential integrity and prevent these re-renders."),(0,o.kt)("p",null,"We'll look at the details of the ",(0,o.kt)("inlineCode",{parentName:"p"},"useCallback()")," hook with an example demonstrated in the previous post titled ",(0,o.kt)("a",{parentName:"p",href:"https://refine.dev/blog/react-usememo/"},"Memoization in React - How ",(0,o.kt)("inlineCode",{parentName:"a"},"useMemo()")," Works"),". "),(0,o.kt)("p",null,"Steps we'll cover:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#pass-callback-from-parent-to-child"},"Pass Callback from Parent to Child")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#referential-integrity"},"Referential Integrity")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#memoizing-event-listeners-with-usecallback"},"Memoizing Event Listeners with ",(0,o.kt)("inlineCode",{parentName:"a"},"useCallback()"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#other-cases"},"Other Cases"))),(0,o.kt)("h3",{id:"project-content-overview"},"Project Content Overview"),(0,o.kt)("p",null,"The app is based on the idea of a list of posts on a blog."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#live-stackblitz-example"},"The example app live code")),(0,o.kt)("p",null,"The discussion of this article is focused on optimizing performance by memoizing callback functions that are passed as a prop from a parent component to a child. We are going to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"useCallback()")," hook for this."),(0,o.kt)("h2",{id:"pass-callback-from-parent-to-child"},"Pass Callback from Parent to Child"),(0,o.kt)("p",null,"In this example, we'll consider the ",(0,o.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<UserPosts />")," components."),(0,o.kt)("p",null,"As you can see below, ",(0,o.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />")," fetches and sets ",(0,o.kt)("inlineCode",{parentName:"p"},"userPosts")," when the compnent renders:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/UserPostIndex.jsx"',title:'"components/UserPostIndex.jsx"'},'import React, { useEffect, useState } from "react";\nimport fetchUserPosts from "../fetch/fetchUserPosts";\nimport UserPostsList from "./UserPostsList";\n\nconst UserPostsIndex = ({ signedIn }) => {\n  const [userPosts, setUserPosts] = useState([]);\n\n  const deletePost = e => {\n    const { postId } = e.currentTarget.dataset;\n    const remainingPosts = userPosts.filter(post => post.id !== parseInt(postId));\n    setUserPosts(remainingPosts);\n  };\n\n  useEffect(() => {\n    const posts = fetchUserPosts();\n    setUserPosts(posts);\n  }, []);\n\n\n  return (\n    <div className="my-1 p-2 box">\n      <div className="m-1 py-1">\n        <h2 className="heading-md">Your Posts</h2>\n        <p className="m-1 p-1">{signedIn ? `Signed in`: `Signed out `}</p>\n        {\n          userPosts &&\n          (\n            <div className="px-1">\n              {\n                <UserPostsList userPosts={userPosts}\n                  deletePost={deletePost}\n                />\n              }\n            </div>\n          )\n        }\n      </div>\n    </div>\n  );\n};\n\nexport default React.memo(UserPostsIndex);\n')),(0,o.kt)("p",null,"In the JSX, we have a ",(0,o.kt)("inlineCode",{parentName:"p"},"deletePost()")," function passed on to ",(0,o.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," component, along with ",(0,o.kt)("inlineCode",{parentName:"p"},"userPosts"),". Prior to that, ",(0,o.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex>")," receives ",(0,o.kt)("inlineCode",{parentName:"p"},"signedIn")," as a prop from ",(0,o.kt)("inlineCode",{parentName:"p"},"<Blog />"),"."),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," component, we receive ",(0,o.kt)("inlineCode",{parentName:"p"},"userPosts")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"deletePost()")," function and display a ",(0,o.kt)("inlineCode",{parentName:"p"},"<UserPost />")," for each post in ",(0,o.kt)("inlineCode",{parentName:"p"},"userPosts")," array:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/UserPostList.jsx"',title:'"components/UserPostList.jsx"'},"import React from 'react';\nimport UserPost from './UserPost';\n\nconst UserPostsList = ({ userPosts, deletePost }) => {\n\n  console.log('Rendering UserPostsList component');\n\n  return (\n    (\n      <div className=\"px-1\">\n        {\n          userPosts.map(post => (\n            <div key={post.id} className=\"my-1 box flex-row\">\n              <UserPost post={post} />\n              <button className=\"btn btn-danger\" data-post-id={post.id} onClick={deletePost}>Delete</button>\n            </div>\n        ))\n        }\n      </div>\n    )\n  );\n};\n\nexport default React.memo(UserPostsList);\n")),(0,o.kt)("p",null,"Inside ",(0,o.kt)("inlineCode",{parentName:"p"},"<UserPostsList />"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"deletePost()")," is used to remove an item from the list."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<UserPost />")," is just a presentational component where we display the title as a link. Feel free to go over it in your editor."),(0,o.kt)("p",null,"Now let's add following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/UserPostIndex.jsx"',title:'"components/UserPostIndex.jsx"'},"console.log('Rendering UserPostsIndex component');\n")),(0,o.kt)("p",null,"and this one in ",(0,o.kt)("inlineCode",{parentName:"p"},"<UserPostsList />"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/UserPostList.jsx"',title:'"components/UserPostList.jsx"'},"console.log('Rendering UserPostsList component');\n")),(0,o.kt)("p",null,"If we check our console, we can see the logs for the inital rendering of the components.",(0,o.kt)("br",{parentName:"p"}),"\n","Then if we click the ",(0,o.kt)("inlineCode",{parentName:"p"},"SignOut")," button on the navbar, we see batches of renders from ",(0,o.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<UserPost />"),":"),(0,o.kt)("div",{class:"img-container","align-items":"center"},(0,o.kt)("img",{style:{alignSelf:"center",width:"400px"},src:r.Z,alt:"usecallback1"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"We can account for the re-render of ",(0,o.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />")," because the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"signedIn")," prop changed. However, re-rendering ",(0,o.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," does not make sense because ",(0,o.kt)("inlineCode",{parentName:"p"},"userPosts")," does not change with the change in the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"signedIn"),".  "),(0,o.kt)("p",null,"We already memoized ",(0,o.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"React.memo()"),". We don't see any reason why it should re-render due changes in any ancestor's state."),(0,o.kt)("p",null," Does ",(0,o.kt)("inlineCode",{parentName:"p"},"deletePost()")," change ?"),(0,o.kt)("hr",null),(0,o.kt)(d,{title:"Building a side project?",image:"/img/generic_banner.png",mdxType:"PromotionBanner"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"referential-integrity"},"Referential Integrity"),(0,o.kt)("p",null,"Well, ",(0,o.kt)("inlineCode",{parentName:"p"},"deletePost()")," changes, and it changes due to breaking of ",(0,o.kt)("strong",{parentName:"p"},"referential integrity"),". And this change triggers a re-render in ",(0,o.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," which we don't expect to see."),(0,o.kt)("p",null,"In React, a function passed to a component as a prop fails to maintain referential integrity because a new function object is created at every render from a function declared inside a parent component. So the value of the prop in the receiver component is different at every re-render of the parent. As a result, the receiver also re-renders, unexpectedly."),(0,o.kt)("p",null,"In our example, ",(0,o.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," is not expected to be re-rendered, but it does because referential integrity fails as ",(0,o.kt)("inlineCode",{parentName:"p"},"deletePost()")," is a different function object at every re-render of ",(0,o.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />"),", i.e. they are not equal. So, when we change ",(0,o.kt)("inlineCode",{parentName:"p"},"signedIn"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />")," re-renders, and so ",(0,o.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," also re-renders."),(0,o.kt)("h2",{id:"memoizing-event-listeners-with-usecallback"},"Memoizing Event Listeners with ",(0,o.kt)("inlineCode",{parentName:"h2"},"useCallback()")),(0,o.kt)("p",null,"Now, memoizing ",(0,o.kt)("inlineCode",{parentName:"p"},"deletePost()")," produces the same function at every re-render. Let's memoize it with ",(0,o.kt)("inlineCode",{parentName:"p"},"useCallback()")," by making the following changes in ",(0,o.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/UserPostIndex.jsx"',title:'"components/UserPostIndex.jsx"'},'  // highlight-next-line\nimport React, { useCallback, useEffect, useState } from "react";\n\nconst UserPostsIndex = ({ signedIn }) => {\n\n// highlight-next-line\n  const deletePost = useCallback(e => {\n    const { postId } = e.currentTarget.dataset;\n    const remainingPosts = userPosts.filter(post => post.id !== parseInt(postId));\n    setUserPosts(remainingPosts);\n    // highlight-next-line\n  }, [userPosts]);\n\n  ...\n\n};\n\nexport default React.memo(UserPostsIndex);\n')),(0,o.kt)("p",null,"Now, if we click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Sign Out")," button a few times, we'll see in the console that ",(0,o.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />")," is re-rendered, but ",(0,o.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<UserPost />")," is not:"),(0,o.kt)("div",{class:"img-container","align-items":"center"},(0,o.kt)("img",{style:{alignSelf:"center",width:"400px"},src:i.Z,alt:"usecallback2"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"This is because ",(0,o.kt)("inlineCode",{parentName:"p"},"useCallback()")," caches and produces the same copy of ",(0,o.kt)("inlineCode",{parentName:"p"},"deletePost()")," at every render of ",(0,o.kt)("inlineCode",{parentName:"p"},"<UserPostsList />"),", until its dependencies change. "),(0,o.kt)("p",null,"Here, a change in ",(0,o.kt)("inlineCode",{parentName:"p"},"userPosts")," triggers renewal of the memo of the function, so everytime the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"userPosts")," changes, ",(0,o.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," will be re-rendered."),(0,o.kt)("br",null),(0,o.kt)("div",null,(0,o.kt)("a",{href:"https://discord.gg/refine"},(0,o.kt)("img",{src:"/img/discord_big_blue.png",alt:"discord banner"}))),(0,o.kt)("h2",{id:"other-cases"},"Other Cases"),(0,o.kt)("p",null,"Memoized callbacks are very important to maintain referential integrity so that the same function object is made available every time a component re-renders. ",(0,o.kt)("inlineCode",{parentName:"p"},"useCallback()")," is also used to cache callbacks in debouncing, as well as dependencies in hooks like ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect()"),"."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"In this article, we looked at how re-renders of a parent component lead to violation of referential integrity of callback functions passed in as props to child components, which causes unnecessary re-renders of a child. ",(0,o.kt)("inlineCode",{parentName:"p"},"useCallback()")," helps us produce the same function object at every re-render of the parent, and be pass it to the child. This prevents the unnecessary re-renders of child components."),(0,o.kt)("br",null),(0,o.kt)("div",null,(0,o.kt)("a",{href:"https://discord.gg/refine"},(0,o.kt)("img",{src:"https://refine.dev/img/discord-banner.png",alt:"discord banner"}))),(0,o.kt)("h2",{id:"live-stackblitz-example"},"Live StackBlitz Example"),(0,o.kt)("iframe",{loading:"lazy",src:"https://stackblitz.com/github/refinedev/refine/tree/master/examples/blog/react-memoization-memo/?embed=1&view=preview&theme=dark&preset=node&ctl=1",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"react-memoization-memo",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}k.isMDXComponent=!0},65426:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/usecallback1-40a9e312d402ada1effd8c6d41d8603d.png"},17010:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/usecallback2-588f68ce5217abd67650ca5745cc200a.png"}}]);