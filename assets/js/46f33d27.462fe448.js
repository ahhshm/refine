"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[97204],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=u(n),c=o,h=d["".concat(l,".").concat(c)]||d[c]||p[c]||r;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16730:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const r={id:"useMenu",title:"useMenu"},i=void 0,s={unversionedId:"core/hooks/ui/useMenu",id:"core/hooks/ui/useMenu",title:"useMenu",description:"useMenu is used to get menu items derived from the resources. These items include a link to dashboard page (if it exists) and links to the user defined resources (passed as children to ``).",source:"@site/docs/core/hooks/ui/useMenu.md",sourceDirName:"core/hooks/ui",slug:"/core/hooks/ui/useMenu",permalink:"/docs/core/hooks/ui/useMenu",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/core/hooks/ui/useMenu.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1659098500,formattedLastUpdatedAt:"7/29/2022",frontMatter:{id:"useMenu",title:"useMenu"},sidebar:"someSidebar",previous:{title:"useModal",permalink:"/docs/core/hooks/ui/useModal"},next:{title:"<Refine>",permalink:"/docs/core/components/refine-config"}},l={},u=[{value:"Usage",id:"usage",level:2},{value:"Creating a Menu",id:"creating-a-menu",level:3},{value:"Multi Level Menus",id:"multi-level-menus",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Return values",id:"return-values",level:3},{value:"Interfaces",id:"interfaces",level:4},{value:"Source Code",id:"source-code",level:3}],m={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useMenu")," is used to get menu items derived from the resources. These items include a link to dashboard page (if it exists) and links to the user defined resources (passed as children to ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>"),").\nThis hook can also be used to build custom menus, including multi-level support. ",(0,o.kt)("inlineCode",{parentName:"p"},"<Sider/>")," components inside ",(0,o.kt)("a",{parentName:"p",href:"/docs/ui-frameworks/antd/tutorial/"},(0,o.kt)("inlineCode",{parentName:"a"},"@pankod/refine-antd"))," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/ui-frameworks/mui/tutorial/"},(0,o.kt)("inlineCode",{parentName:"a"},"@pankod/refine-mui"))," packages are using this hook as a base for their menus."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { selectedKey, menuItems, defaultOpenKeys } = useMenu();\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"menuItems")," is a list of style agnostic menu items. Each of them has a key."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"selectedKey")," is the key of the resource user is viewing at the moment. Its inferred from the route."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"defaultOpenKeys")," is the array with the keys of default opened menus.")),(0,o.kt)("br",null),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"useMenu")," hooks exported from ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-antd")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-mui")," packages are now ",(0,o.kt)("strong",{parentName:"p"},"deprecated")," and will be removed. Please use ",(0,o.kt)("inlineCode",{parentName:"p"},"useMenu")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-core"),"."))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you are using ",(0,o.kt)("a",{parentName:"p",href:"/docs/ui-frameworks/antd/tutorial/"},(0,o.kt)("inlineCode",{parentName:"a"},"@pankod/refine-antd"))," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/ui-frameworks/mui/tutorial/"},(0,o.kt)("inlineCode",{parentName:"a"},"@pankod/refine-mui"))," as a UI framework integration, you can find out more info about how their ",(0,o.kt)("inlineCode",{parentName:"p"},"<Sider/>")," components are created and how to create a custom one by following their guides."),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"/docs/ui-frameworks/antd/customization/antd-custom-sider/"},"Ant Design > Customization > Custom Sider ","\u2192")),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"/docs/ui-frameworks/mui/customization/mui-custom-sider/"},"Material UI > Customization > Custom Sider ","\u2192")))),(0,o.kt)("h3",{id:"creating-a-menu"},"Creating a Menu"),(0,o.kt)("p",null,"We will show you how to use ",(0,o.kt)("inlineCode",{parentName:"p"},"useMenu")," to create a simple menu for your refine application."),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"<Layout />")," component inside ",(0,o.kt)("inlineCode",{parentName:"p"},"src/components/layout.tsx")," with the following code;"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/layout.tsx"',title:'"src/components/layout.tsx"'},'import { LayoutProps } from "@pankod/refine-core";\nimport { useMenu, useNavigation, useRouterContext, useRefineContext } from "@pankod/refine-core";\n\nexport const Layout: React.FC<LayoutProps> = ({ children }) => {\n    const { menuItems, selectedKey } = useMenu();\n    const { hasDashboard } = useRefineContext();\n    const { Link } = useRouterContext();\n    // You can also use navigation helpers from `useNavigation` hook instead of `Link` from your Router Provider.\n    // const { push } = useNavigation();\n\n    return (\n        <div className="flex min-h-screen flex-col">\n            <div className="mb-2 border-b py-2">\n                <div className="container mx-auto">\n                    <div className="flex items-center gap-2">\n                        <Link to="/">\n                            <img\n                                className="w-32"\n                                src="https://refine.dev/img/refine_logo.png"\n                                alt="Logo"\n                            />\n                        </Link>\n                        // highlight-start\n                        <ul>\n                            {hasDashboard && (\n                                <li>\n                                    <Link to="/">\n                                        <a style={{ fontWeight: selectedKey === "/" ? "bold" : "normal" }}>\n                                            <span>Dashboard</span>\n                                        </a>\n                                    </Link>\n                                </li>\n                            )}\n                            {menuItems.map(({ name, label icon, route }) => {\n                                const isSelected = route === selectedKey;\n                                return (\n                                    <li key={name}>\n                                        <Link to={route}>\n                                            <a style={{ fontWeight: isSelected ? "bold" : "normal" }}>\n                                                {icon}\n                                                <span>{label ?? name}</span>\n                                            </a>\n                                        </Link>\n                                    </li>\n                                );\n                            })}\n                        </ul>\n                        // highlight-end\n                    </div>\n                </div>\n            </div>\n            <div className="bg-white">{children}</div>\n        </div>\n    );\n};\n')),(0,o.kt)("p",null,"We created a header with a logo and a list of links to all menu items (resources). The links are clickable and will navigate to the corresponding resource. To do this, we used the ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/hooks/ui/useMenu"},(0,o.kt)("inlineCode",{parentName:"a"},"useMenu"))," hook to get the menu items from the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine/>")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"useRouterContext")," hook to get the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Link/>")," component from the router provider. Also ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/hooks/navigation/useNavigation"},(0,o.kt)("inlineCode",{parentName:"a"},"useNavigation"))," hook can be used to navigate between routes."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"children")," is the content of the layout. In our case, it is the content of the ",(0,o.kt)("strong",{parentName:"p"},"Page")," components."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"/docs/guides-and-concepts/custom-layout"},"Refer to Custom Layout guide for more detailed information on layout customization. ","\u2192"),"  "))),(0,o.kt)("p",null,"Now, we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Layout/>")," in our application."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nimport { PostList, PostCreate, PostEdit, PostShow } from "pages/post";\nimport { CategoryList, CategoryCreate, CategoryEdit } from "pages/category";\n// highlight-next-line\nimport { Layout } from "components/layout";\nimport { PostIcon } from "icons";\n\nexport const App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                    create: PostCreate,\n                    edit: PostEdit,\n                    show: PostShow,\n                },\n                {\n                    name: "categories",\n                    list: CategoryList,\n                    create: CategoryCreate,\n                    edit: CategoryEdit,\n                    canDelete: true,\n                },\n            ]}\n            // highlight-next-line\n            Layout={Layout}\n        />\n    );\n};\n')),(0,o.kt)("h3",{id:"multi-level-menus"},"Multi Level Menus"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useMenu")," hook comes out of the box with multi level menu support, you can render menu items recursively to get a multi level menu."),(0,o.kt)("p",null,"Update your ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine/>")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"parentName")," to nest them inside a label."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nimport { PostList, PostCreate, PostEdit, PostShow } from "pages/post";\nimport { CategoryList, CategoryCreate, CategoryEdit } from "pages/category";\n\nimport { Layout } from "components/layout";\nimport { PostIcon } from "icons";\n\nexport const App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            // highlight-start\n            resources={[\n                {\n                    name: "CMS",\n                },\n                {\n                    name: "posts",\n                    parentName: "CMS",\n                    list: PostList,\n                    create: PostCreate,\n                    edit: PostEdit,\n                    show: PostShow,\n                },\n                {\n                    name: "categories",\n                    parentName: "CMS",\n                    list: CategoryList,\n                    create: CategoryCreate,\n                    edit: CategoryEdit,\n                    canDelete: true,\n                },\n            ]}\n            // highlight-end\n            Layout={Layout}\n        />\n    );\n};\n')),(0,o.kt)("p",null,"Now you can update your ",(0,o.kt)("inlineCode",{parentName:"p"},"<Layout/>")," to support multi level rendering with following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/Layout.tsx"',title:'"src/components/Layout.tsx"'},'import { LayoutProps } from "@pankod/refine-core";\nimport { useMenu, useNavigation, useRouterContext } from "@pankod/refine-core";\n\nexport const Layout: React.FC<LayoutProps> = ({ children }) => {\n    const { menuItems, selectedKey } = useMenu();\n    const { Link } = useRouterContext();\n\n    // highlight-start\n    const renderMenu = (items) => {\n        return (\n            <ul>\n                {items.map((item) => (\n                    <li key={item.label}>\n                        <span>{item.label}</span>\n                        {item.children ? renderMenu(item.children) : null}\n                    </li>\n                ))}\n            </ul>\n        );\n    };\n    // highlight-end\n\n    return (\n        <div className="flex min-h-screen flex-col">\n            <div className="mb-2 border-b py-2">\n                <div className="container mx-auto">\n                    <div className="flex items-center gap-2">\n                        <Link to="/">\n                            <img\n                                className="w-32"\n                                src="https://refine.dev/img/refine_logo.png"\n                                alt="Logo"\n                            />\n                        </Link>\n                        // highlight-start\n                        {renderMenu(menuItems)}\n                        // highlight-end\n                    </div>\n                </div>\n            </div>\n            <div className="bg-white">{children}</div>\n        </div>\n    );\n};\n')),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"return-values"},"Return values"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"selectedKey"),(0,o.kt)("td",{parentName:"tr",align:null},"Key of the resource the user is viewing at the moment"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"menuItems"),(0,o.kt)("td",{parentName:"tr",align:null},"List of keys and routes and some metadata of resources and also the dashboard if exists"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#interfaces"},(0,o.kt)("inlineCode",{parentName:"a"},"ITreeMenu[]")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"defaultOpenKeys"),(0,o.kt)("td",{parentName:"tr",align:null},"Array with the keys of default opened menus."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string[]"))))),(0,o.kt)("h4",{id:"interfaces"},"Interfaces"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface IResourceItem extends IResourceComponents {\n    name: string;\n    label?: string;\n    route?: string;\n    icon?: ReactNode;\n    canCreate?: boolean;\n    canEdit?: boolean;\n    canShow?: boolean;\n    canDelete?: boolean;\n    parentName?: string;\n}\n\ninterface IResourceComponents {\n    list?: React.FunctionComponent<IResourceComponentsProps>;\n    create?: React.FunctionComponent<IResourceComponentsProps>;\n    edit?: React.FunctionComponent<IResourceComponentsProps>;\n    show?: React.FunctionComponent<IResourceComponentsProps>;\n}\n\ninterface IResourceComponentsProps<TCrudData = any> {\n    canCreate?: boolean;\n    canEdit?: boolean;\n    canDelete?: boolean;\n    canShow?: boolean;\n    name?: string;\n    initialData?: TCrudData;\n}\n\n// highlight-start\ntype IMenuItem = IResourceItem & {\n    key: string;\n};\n\ntype ITreeMenu = IMenuItem & {\n    children: ITreeMenu[];\n};\n// highlight-end\n")),(0,o.kt)("h3",{id:"source-code"},"Source Code"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/blob/feat/use-menu-core/packages/core/src/hooks/menu/useMenu.tsx#L26"},"View source code for ",(0,o.kt)("inlineCode",{parentName:"a"},"useMenu")," on GitHub ","\u2192")))}p.isMDXComponent=!0}}]);