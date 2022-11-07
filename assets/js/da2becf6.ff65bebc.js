"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3949],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?i.createElement(g,r(r({ref:t},c),{},{components:n})):i.createElement(g,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var l=2;l<o;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40199:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(87462),a=(n(67294),n(3905)),o=(n(2776),n(36514));const r={title:"A Guide for Next.js with TypeScript",description:"We will explain the entire process of how to use Next.js in TypeScript",slug:"next-js-with-typescript",authors:"michael",tags:["nextjs","typescript"],image:"/img/blog/2022-09-12-next-typescript/social.png",hide_table_of_contents:!1},p=void 0,s={permalink:"/blog/next-js-with-typescript",source:"@site/blog/2022-09-12-next-typescript.md",title:"A Guide for Next.js with TypeScript",description:"We will explain the entire process of how to use Next.js in TypeScript",date:"2022-09-12T00:00:00.000Z",formattedDate:"September 12, 2022",tags:[{label:"nextjs",permalink:"/blog/tags/nextjs"},{label:"typescript",permalink:"/blog/tags/typescript"}],readingTime:8.09,hasTruncateMarker:!1,authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://pbs.twimg.com/profile_images/1476736258340794392/p7d1de3k_400x400.jpg",key:"michael"}],frontMatter:{title:"A Guide for Next.js with TypeScript",description:"We will explain the entire process of how to use Next.js in TypeScript",slug:"next-js-with-typescript",authors:"michael",tags:["nextjs","typescript"],image:"/img/blog/2022-09-12-next-typescript/social.png",hide_table_of_contents:!1},prevItem:{title:"React memo guide with examples",permalink:"/blog/react-memo-guide"},nextItem:{title:"Build a Progressive Web App (PWA) with Next.js",permalink:"/blog/next-js-pwa"},relatedPosts:[{title:"Nextjs image optimization with examples",permalink:"/blog/using-next-image",formattedDate:"August 17, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://pbs.twimg.com/profile_images/1476736258340794392/p7d1de3k_400x400.jpg",key:"michael"}],readingTime:12.62,date:"2022-08-17T00:00:00.000Z"},{title:"How to use TypeScript Partial Type?",permalink:"/blog/typescript-partial-utility-type",formattedDate:"October 10, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:3.985,date:"2022-10-10T00:00:00.000Z"},{title:"A Guide on TypeScript Omit Type",permalink:"/blog/typescript-omit-utility-type",formattedDate:"October 3, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:3.525,date:"2022-10-03T00:00:00.000Z"}],authorPosts:[{title:"Using Material UI DataGrid component with refine app",permalink:"/blog/mui-datagrid-refine",formattedDate:"August 23, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://pbs.twimg.com/profile_images/1476736258340794392/p7d1de3k_400x400.jpg",key:"michael"}],readingTime:16.75,date:"2022-08-23T00:00:00.000Z"},{title:"What is Next.js getInitialProps and getServerSideProps?",permalink:"/blog/next-js-getinitialprops-and-getserversideprops",formattedDate:"October 31, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://pbs.twimg.com/profile_images/1476736258340794392/p7d1de3k_400x400.jpg",key:"michael"}],readingTime:9.355,date:"2022-10-31T00:00:00.000Z"},{title:"Introduction to Next.js Link component with examples",permalink:"/blog/next-js-link-component",formattedDate:"September 4, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://pbs.twimg.com/profile_images/1476736258340794392/p7d1de3k_400x400.jpg",key:"michael"}],readingTime:8.815,date:"2022-09-04T00:00:00.000Z"}]},l={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"What is TypeScript?",id:"what-is-typescript",level:2},{value:"How to add TypeScript to your Next.js app",id:"how-to-add-typescript-to-your-nextjs-app",level:2},{value:"<code>create-next-app</code>",id:"create-next-app",level:4},{value:"Adding TypeScript to an existing project",id:"adding-typescript-to-an-existing-project",level:4},{value:"How to use Typescript with Next.js data fetching methods",id:"how-to-use-typescript-with-nextjs-data-fetching-methods",level:2},{value:"How to use Typescript in Next.js API routes",id:"how-to-use-typescript-in-nextjs-api-routes",level:2},{value:"How to configure absolute imports and module path aliases in tsconfig.json",id:"how-to-configure-absolute-imports-and-module-path-aliases-in-tsconfigjson",level:2},{value:"Disabling Typescript Errors in Production",id:"disabling-typescript-errors-in-production",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Next.js is an open source React framework for building single-page web applications. It comes with numerous out-of-the-box functionalities that make developing web applications faster and more interesting, thereby providing refined and elegant developer and user experiences."),(0,a.kt)("p",null,"Combining ",(0,a.kt)("strong",{parentName:"p"},"Next.js and TypeScript")," gives us superpowers to rapidly create applications with a good developer and user experiences. Every developer hates bugs. Especially pesky ones such as typos or trying to use or access undeclared variables. ",(0,a.kt)("strong",{parentName:"p"},"TypeScript")," helps catch these types of bugs early during development, and this is one of the many features that make integrating it with a tool like Next.js fantastic."),(0,a.kt)("p",null,"In this article, we'll look at how you can integrate TypeScript in your Next.js apps. We'll also explore reasons why you should consider using this tool in your Next.js projects and also talk about its benefits. "),(0,a.kt)("p",null,"Steps we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#what-is-typescript"},"What is TypeScript?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#how-to-add-typescript-to-your-nextjs-app"},"How to add TypeScript to your Next.js app"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#create-next-app"},(0,a.kt)("inlineCode",{parentName:"a"},"create-next-app"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#adding-typescript-to-an-existing-project"},"Adding TypeScript to an existing project")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#how-to-use-typescript-with-nextjs-data-fetching-methods"},"How to use Typescript with Next.js data fetching methods")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#how-to-use-typescript-in-nextjs-api-routes"},"How to use Typescript in Next.js API routes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#how-to-configure-absolute-imports-and-module-path-aliases-in-tsconfigjson"},"How to configure absolute imports and module path aliases in tsconfig.json")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#disabling-typescript-errors-in-production"},"Disabling Typescript Errors in Production"))),(0,a.kt)("h2",{id:"what-is-typescript"},"What is TypeScript?"),(0,a.kt)("p",null," It's a strict JavaScript superset used for large enterprise projects and writing programs that scale. In the end, TypeScript transpiles to plain JavaScript and can be used for developing applications on the client-side and server-side."),(0,a.kt)("p",null,"TypeScript is an object-oriented programming language that provides all JavaScript features and extra useful capabilities. These capabilities include static or dynamic type checking, error checking during compilation, type inference, and so on."),(0,a.kt)("h2",{id:"how-to-add-typescript-to-your-nextjs-app"},"How to add TypeScript to your Next.js app"),(0,a.kt)("p",null,"Next.js provides integrated support for TypeScript with built-in types for pages, API routes, the three data fetching methods, etc."),(0,a.kt)("p",null,"Basically, there are two ways in which we can add TypeScript to our project. The first is with ",(0,a.kt)("inlineCode",{parentName:"p"},"create-next-app"),", and the second is by adding TypeSript manually to an existing project."),(0,a.kt)("h4",{id:"create-next-app"},(0,a.kt)("inlineCode",{parentName:"h4"},"create-next-app")),(0,a.kt)("p",null,"We can bootstrap a Next.js application with TypeScript by adding a ",(0,a.kt)("inlineCode",{parentName:"p"},"--typescript")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"--ts")," flag to the ",(0,a.kt)("inlineCode",{parentName:"p"},"create-next-app")," command like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-next-app@latest --ts\n# or\nnpx create-next-app@latest --typescript\n")),(0,a.kt)("h4",{id:"adding-typescript-to-an-existing-project"},"Adding TypeScript to an existing project"),(0,a.kt)("p",null,"Alternatively, we can also add TypeScript manually to an existing Next.js project. "),(0,a.kt)("p",null,"First, you'll need to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file in your project root folder. This file specifies the root files and the compiler options required to compile the project and is populated automatically by Next.js with default values."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"touch tsconfig.json\n")),(0,a.kt)("p",null,"Next, run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run dev")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn dev")," (if you use Yarn) to start the application development server. "),(0,a.kt)("p",null,"Next.js will emit a message in the terminal with the following content and try to install the necessary TypeScript related packages:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"It looks like you're trying to use TypeScript but do not have the required package(s) installed.\nInstalling dependencies\n\nIf you are not trying to use TypeScript, please remove the tsconfig.json file from your package root (and any TypeScript files in your pages directory).\n\n\nInstalling devDependencies (yarn):\n- typescript\n- @types/react\n- @types/node\n\n[1/4] Resolving packages...\n[2/4] Fetching packages...\n\n")),(0,a.kt)("p",null,"When the installation is complete, open ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," and you'll see it populated with values like below: "),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("img",{src:o.Z,alt:"tsconfig"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"If you noticed, Next.js also created a new file, ",(0,a.kt)("inlineCode",{parentName:"p"},"next-env.d.ts")," in the project root. This file ensures Next.js types are picked up by the compiler and should ",(0,a.kt)("strong",{parentName:"p"},"not")," be edited or deleted. Also, ensure the file is added to ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," to prevent it from being committed by version control like Git."),(0,a.kt)("p",null,"With this, you can now start creating files with ",(0,a.kt)("inlineCode",{parentName:"p"},".ts")," and ",(0,a.kt)("inlineCode",{parentName:"p"},".tsx")," extensions in your application."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Usage example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react'\n\ntype ProfileProps = {\n    profile: {\n    firstName: string,\n    lastName: string,\n    age: number,\n    }\n}\n\nconst Profile: React.FunctionComponent<ProfileProps> = ({ profile }): JSX.Element => {\n    return (\n        <>\n          <p>Profile</p>\n          <div>Welcome, {profile.firstName}</div> \n        </>\n    )\n}\n\nexport default Profile;\n")),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://github.com/refinedev/refine"},(0,a.kt)("img",{src:"https://refine.dev/img/github-support-banner.png",alt:"github support banner"}))),(0,a.kt)("h2",{id:"how-to-use-typescript-with-nextjs-data-fetching-methods"},"How to use Typescript with Next.js data fetching methods"),(0,a.kt)("p",null,"Next.js comes with built-in types for all its three data fetching methods (",(0,a.kt)("inlineCode",{parentName:"p"},"getStaticProps"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"getServerSideProps"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"getStaticPaths"),"). "),(0,a.kt)("p",null,"Here's how to use them in your code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'\n\nexport const getStaticProps: GetStaticProps = async (context) => {}\n\nexport const getStaticPaths: GetStaticPaths = async () => {}\n\nexport const getServerSideProps: GetServerSideProps = async (context) => {}\n")),(0,a.kt)("p",null,"Next.js also provides built-in types to infer the types for props from ",(0,a.kt)("inlineCode",{parentName:"p"},"getServerSideProps")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"getStaticProps"),"."),(0,a.kt)("p",null,"If you want to get inferred typings for your props, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"InferGetStaticPropsType<typeof getStaticProps>")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"InferGetServerSidePropsType<typeof getServerSideProps>")," in a page component. "),(0,a.kt)("p",null,"Let's say we're expecting some data from an API that we need to pre-render at build time.\nInstead of writing repetitive code like the below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="index.tsx"',title:'"index.tsx"'},"type PostProps= {\n    userId: number,\n    id: number,\n    title: string,\n    body: string\n  }\n  \nexport const getStaticProps = async () => {\n      const response = await fetch('https://jsonplaceholder.typicode.com/posts');\n      const posts: PostProps[] = await response.json();\n  \n    return {\n      props: {\n        posts,\n      },\n    }\n  }\n  \nfunction PostPage({ posts }: { posts: PostProps }) {\n    ...\n  }\n  \nexport default PostPage;\n")),(0,a.kt)("p",null,"We can use ",(0,a.kt)("inlineCode",{parentName:"p"},"InferGetStaticPropsType")," to get inferred typings for the ",(0,a.kt)("inlineCode",{parentName:"p"},"posts")," prop. Add and refactor the code with the highlighted like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="index.tsx"',title:'"index.tsx"'},"//highlight-next-line\nimport { InferGetStaticPropsType } from 'next'\n\n...\n\n //highlight-next-line \nfunction PostPage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {}\n  \nexport default PostPage\n")),(0,a.kt)("p",null,"You can also use this same method when using ",(0,a.kt)("inlineCode",{parentName:"p"},"getServerSideProps"),"."),(0,a.kt)("h2",{id:"how-to-use-typescript-in-nextjs-api-routes"},"How to use Typescript in Next.js API routes"),(0,a.kt)("p",null,"Next.js also comes with built-in types for API routes. which we can access like below: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import type { NextApiRequest, NextApiResponse } from 'next'\n\nexport default (req: NextApiRequest, res: NextApiResponse) => {\n  res.status(200).json({ age: '25' })\n}\n")),(0,a.kt)("p",null,"We can also specify custom types for the response data:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { NextApiRequest, NextApiResponse } from 'next'\n\ntype Data = {\n  name: string\n}\n\nexport default (req: NextApiRequest, res: NextApiResponse<Data>) => {\n  res.status(200).json({ age: '25' })\n}\n")),(0,a.kt)("h2",{id:"how-to-configure-absolute-imports-and-module-path-aliases-in-tsconfigjson"},"How to configure absolute imports and module path aliases in tsconfig.json"),(0,a.kt)("p",null,"Do you relate with the pain of having to do something like this?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"Import { fetchUserProfile } from '../../../../utils'\nImport UserProfile from '../../../UserProfile'\n")),(0,a.kt)("p",null,"How about if you could do something like?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"Import { fetchUserProfile } from '/@utils'\nImport UserProfile from '@components/UserProfile'\n")),(0,a.kt)("p",null,"Well, to achieve this, we can configure path aliases in ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," so we can conveniently import modules across our application. TypeScript path aliases allow us to create aliases or shortcuts for absolute paths in the application, which we can resolve to. Next.js also automatically supports path aliases, so we don't have to do many configurations. "),(0,a.kt)("p",null,"For example, if you have a file in your project importing a module with a path structure like ",(0,a.kt)("inlineCode",{parentName:"p"},"/components/MUIComponents/ButtonGroup/"),", instead of trying to write an ugly code such as this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport ButtonGroup from import ButtonGroup from "../../components/MUIComponents/ButtonGroup";\n\nconst User = () => {\n  return (\n    <>\n      <h1>User Page</h1>\n      <div>\n        <ButtonGroup />\n      </div>\n    </>\n  );\n};\n\nexport default User;\n')),(0,a.kt)("p",null,"We can create a path alias for all files in the ",(0,a.kt)("inlineCode",{parentName:"p"},"MUIComponents")," folder for easy access using the ",(0,a.kt)("inlineCode",{parentName:"p"},"baseUrl")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," options in ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'...\n"baseUrl": ".",\n"paths": {\n    "@/MUIComponents/*": ["components/MUIComponents/*"]\n},\n...\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"baseUrl")," lets us specify a root URL to use for our imports and ",(0,a.kt)("inlineCode",{parentName:"p"},"paths")," lets us configure path aliases. You can read more about module path aliases ",(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/advanced-features/module-path-aliases"},"here"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You can use a ",(0,a.kt)("inlineCode",{parentName:"p"},"jsconfig.json")," file instead if you're not using TypeScript in your project.")),(0,a.kt)("p",null,"Now we can use the alias in our application like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import ButtonGroup from "@/MUIComponents/ButtonGroup";\n\nconst User = () => {\n  return (\n    <>\n      <h1>User Page</h1>\n      <div>\n        <ButtonGroup />\n      </div>\n    </>\n  );\n};\n\nexport default User;\n')),(0,a.kt)("p",null,"This looks way better and straightforward."),(0,a.kt)("h2",{id:"disabling-typescript-errors-in-production"},"Disabling Typescript Errors in Production"),(0,a.kt)("p",null,"If you happen to have TypeScript errors while running ",(0,a.kt)("inlineCode",{parentName:"p"},"next build"),", Next.js will fail the build but you can disable the type checks if you wish. "),(0,a.kt)("p",null,"To disable the type checking step, enable the ",(0,a.kt)("inlineCode",{parentName:"p"},"ignoreBuildErrors")," option in ",(0,a.kt)("inlineCode",{parentName:"p"},"next.config.js")," like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="next.config.js"',title:'"next.config.js"'},"module.exports = {\n  typescript: {\n    // !! WARN !!\n    // Dangerously allow production builds to successfully complete even if\n    // your project has type errors.\n    // !! WARN !!\n    ignoreBuildErrors: true,\n  },\n}\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Make sure you really know what you're doing before using this option.")),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"We covered how to get started with ",(0,a.kt)("strong",{parentName:"p"},"TypeScript in your Next.js")," applications. We also talked about the importance and benefits associated with combining TypeScript capabilities with Next.js for a faster and easier application development experience. We hope this article helps you consider integrating ",(0,a.kt)("strong",{parentName:"p"},"TypeScript and Next.js")," in your next applications.  "),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://discord.gg/refine"},(0,a.kt)("img",{src:"/img/discord_big_blue.png",alt:"discord banner"}))),(0,a.kt)("hr",null),(0,a.kt)("div",{className:"banner-container"},(0,a.kt)("div",{className:"banner-header"},"Stop wasting your time copy/pasting your table code all over your application!"),(0,a.kt)("p",null,"Meet the headless, React-based solution to build sleek ",(0,a.kt)("strong",{parentName:"p"},"CRUD")," applications. With refine, you can be confident that your codebase will always stay clean and boilerplate-free."),(0,a.kt)("p",null,"Try ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},"refine")," to rapidly build your next ",(0,a.kt)("strong",{parentName:"p"},"CRUD")," project, whether it's an admin panel, dashboard, internal tool or storefront."),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://github.com/refinedev/refine"},(0,a.kt)("img",{src:"/img/generic_banner.png",alt:"refine blog logo"}))),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," is an open-source, React-based framework for building CRUD applications without constraints. It\u2019s headless by design and seamlessly works with ",(0,a.kt)("strong",{parentName:"p"},"any custom design")," or ",(0,a.kt)("strong",{parentName:"p"},"UI framework")," you favor. For convenience, it ships with ready-made integrations for ",(0,a.kt)("strong",{parentName:"p"},"Ant Design System, Material UI and Mantine UI"),"."),(0,a.kt)("p",null,"It can ",(0,a.kt)("strong",{parentName:"p"},"speed up your development time up to 3X")," without compromising freedom on styling, customization and project workflow."),(0,a.kt)("p",null,"Visit ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},"refine GitHub repository")," for more information, demos, tutorials, and example projects.")))}d.isMDXComponent=!0},2776:(e,t,n)=>{n.p},36514:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/tsconfig-7ede6ee349e822143833e30b2daab1ea.png"}}]);