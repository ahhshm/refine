"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[84722],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),d=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(t),m=a,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||i;return t?o.createElement(h,r(r({ref:n},u),{},{components:t})):o.createElement(h,r({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var d=2;d<i;d++)r[d]=t[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},90658:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=t(87462),a=(t(67294),t(3905));const i={id:"antd-custom-sider",title:"Custom Sider"},r=void 0,s={unversionedId:"ui-frameworks/antd/customization/antd-custom-sider",id:"ui-frameworks/antd/customization/antd-custom-sider",title:"Custom Sider",description:"You can create a custom ` component and use it either by passing it to ` or using a Custom Layout.",source:"@site/docs/ui-frameworks/antd/customization/sider.md",sourceDirName:"ui-frameworks/antd/customization",slug:"/ui-frameworks/antd/customization/antd-custom-sider",permalink:"/docs/ui-frameworks/antd/customization/antd-custom-sider",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/ui-frameworks/antd/customization/sider.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1659155784,formattedLastUpdatedAt:"7/30/2022",frontMatter:{id:"antd-custom-sider",title:"Custom Sider"},sidebar:"someSidebar",previous:{title:"Custom Layout",permalink:"/docs/ui-frameworks/antd/customization/antd-custom-layout"},next:{title:"Tutorial",permalink:"/docs/ui-frameworks/mui/tutorial"}},l={},d=[{value:"Recreating the Default Sider Menu",id:"recreating-the-default-sider-menu",level:2}],u={toc:d};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can create a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"<Sider />")," component and use it either by passing it to ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/components/refine-config"},(0,a.kt)("inlineCode",{parentName:"a"},"<Refine />"))," or using a ",(0,a.kt)("a",{parentName:"p",href:"/docs/ui-frameworks/antd/customization/antd-custom-layout"},"Custom Layout"),"."),(0,a.kt)("h2",{id:"recreating-the-default-sider-menu"},"Recreating the Default Sider Menu"),(0,a.kt)("p",null,"We will show you how to use ",(0,a.kt)("inlineCode",{parentName:"p"},"useMenu")," to create a custom sider menu that is identical to default sider menu."),(0,a.kt)("p",null,"First we define ",(0,a.kt)("inlineCode",{parentName:"p"},"<CustomMenu>"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/CustomMenu.tsx"',title:'"src/CustomMenu.tsx"'},'import { useState, CSSProperties } from "react";\nimport {\n    useTitle,\n    ITreeMenu,\n    CanAccess,\n    useTranslate,\n    useRefineContext,\n    useRouterContext,\n    useMenu,\n} from "@pankod/refine-core";\nimport { AntdLayout, Menu, Grid, Icons } from "@pankod/refine-antd";\n\nexport const CustomMenu: React.FC = () => {\n    const Title = useTitle();\n    const { Link } = useRouterContext();\n    const translate = useTranslate();\n    const { hasDashboard } = useRefineContext();\n    const { SubMenu } = Menu;\n\n    // highlight-next-line\n    const { menuItems, selectedKey, defaultOpenKeys } = useMenu();\n\n    const [collapsed, setCollapsed] = useState<boolean>(false);\n\n    const breakpoint = Grid.useBreakpoint();\n    const isMobile =\n        typeof breakpoint.lg === "undefined" ? false : !breakpoint.lg;\n\n    const RenderToTitle = Title ?? DefaultTitle;\n\n    // highlight-start\n    const renderTreeView = (tree: ITreeMenu[], selectedKey: string) => {\n        return tree.map((item: ITreeMenu) => {\n            const { icon, label, route, name, children, parentName } = item;\n\n            if (children.length > 0) {\n                return (\n                    <SubMenu\n                        key={route}\n                        icon={icon ?? <Icons.UnorderedListOutlined />}\n                        title={label}\n                    >\n                        {renderTreeView(children, selectedKey)}\n                    </SubMenu>\n                );\n            }\n            const isSelected = route === selectedKey;\n            const isRoute = !(\n                parentName !== undefined && children.length === 0\n            );\n            return (\n                <CanAccess\n                    key={route}\n                    resource={name.toLowerCase()}\n                    action="list"\n                >\n                    <Menu.Item\n                        key={route}\n                        style={{\n                            fontWeight: isSelected ? "bold" : "normal",\n                        }}\n                        icon={\n                            icon ?? (isRoute && <Icons.UnorderedListOutlined />)\n                        }\n                    >\n                        <Link to={route}>{label}</Link>\n                        {!collapsed && isSelected && (\n                            <div className="ant-menu-tree-arrow" />\n                        )}\n                    </Menu.Item>\n                </CanAccess>\n            );\n        });\n    };\n    // highlight-end\n\n    return (\n        <AntdLayout.Sider\n            collapsible\n            collapsed={collapsed}\n            onCollapse={(collapsed: boolean): void => setCollapsed(collapsed)}\n            collapsedWidth={isMobile ? 0 : 80}\n            breakpoint="lg"\n            style={isMobile ? antLayoutSiderMobile : antLayoutSider}\n        >\n            <RenderToTitle collapsed={collapsed} />\n            // highlight-start\n            <Menu\n                defaultOpenKeys={defaultOpenKeys}\n                selectedKeys={[selectedKey]}\n                mode="inline"\n                onClick={() => {\n                    if (!breakpoint.lg) {\n                        setCollapsed(true);\n                    }\n                }}\n            >\n                {hasDashboard ? (\n                    <Menu.Item\n                        key="dashboard"\n                        style={{\n                            fontWeight: selectedKey === "/" ? "bold" : "normal",\n                        }}\n                        icon={<Icons.DashboardOutlined />}\n                    >\n                        <Link to="/">\n                            {translate("dashboard.title", "Dashboard")}\n                        </Link>\n                        {!collapsed && selectedKey === "/" && (\n                            <div className="ant-menu-tree-arrow" />\n                        )}\n                    </Menu.Item>\n                ) : null}\n                {renderTreeView(menuItems, selectedKey)}\n            </Menu>\n            // highlight-end\n        </AntdLayout.Sider>\n    );\n};\n\nconst antLayoutSider: CSSProperties = {\n    position: "relative",\n};\nconst antLayoutSiderMobile: CSSProperties = {\n    position: "fixed",\n    height: "100vh",\n    zIndex: 999,\n};\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useMenu")," hook is used to get style agnostic menu items. We render these items in the body of the sider. We create a recursive ",(0,a.kt)("inlineCode",{parentName:"p"},"renderTreeView")," function to create menu items from the list of resources passed to ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>"),". We get the ",(0,a.kt)("inlineCode",{parentName:"p"},"Title")," component with the ",(0,a.kt)("inlineCode",{parentName:"p"},"useTitle")," hook."),(0,a.kt)("br",null),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you want to create a multi-level menu, you can take a look at this ",(0,a.kt)("a",{parentName:"p",href:"/docs/examples/multi-level-menu/"},(0,a.kt)("inlineCode",{parentName:"a"},"multi-level menu"))," example and also ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides-and-concepts/multi-level-menu/"},(0,a.kt)("inlineCode",{parentName:"a"},"here"))," is the guide."))),(0,a.kt)("p",null,"We can override the default sider and show the custom menu we implemented in its place by passing a the custom component to ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>"),"s ",(0,a.kt)("inlineCode",{parentName:"p"},"Sider")," prop:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport "@pankod/refine/dist/styles.min.css";\n\nimport { PostList } from "pages/posts";\n\n// highlight-next-line\nimport { CustomMenu } from "./CustomMenu";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            dataProvider={dataProvider(API_URL)}\n            // highlight-next-line\n            Sider={CustomMenu}\n            resources={[{ name: "posts", list: PostList }]}\n        />\n    );\n};\n\nexport default App;\n')),(0,a.kt)("br",null),(0,a.kt)("p",null,"We can also add a logout button:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/CustomMenu.tsx"',title:'"src/CustomMenu.tsx"'},'import { useState, CSSProperties } from "react";\nimport { \n    useTitle,\n    useRouterContext,\n    useMenu,\n    // highlight-next-line\n    useLogout,\n} from "@pankod/refine-core";\nimport {\n    AntdLayout,\n    Menu,\n    Link,\n    Grid,\n    // highlight-next-line\n    Icons,\n} from "@pankod/refine-antd";\n\nexport const CustomMenu: React.FC = () => {\n    const Title = useTitle();\n    const { Link } = useRouterContext();\n    const { menuItems, selectedKey } = useMenu();\n\n    const [collapsed, setCollapsed] = useState<boolean>(false);\n\n    const breakpoint = Grid.useBreakpoint();\n    const isMobile =\n        typeof breakpoint.lg === "undefined" ? false : !breakpoint.lg;\n\n    const RenderToTitle = Title ?? DefaultTitle;\n\n    const renderTreeView = (tree: ITreeMenu[], selectedKey: string) => {\n        return tree.map((item: ITreeMenu) => {\n            const { icon, label, route, name, children, parentName } = item;\n\n            if (children.length > 0) {\n                return (\n                    <SubMenu\n                        key={name}\n                        icon={icon ?? <Icons.UnorderedListOutlined />}\n                        title={label}\n                    >\n                        {renderTreeView(children, selectedKey)}\n                    </SubMenu>\n                );\n            }\n            const isSelected = route === selectedKey;\n            const isRoute = !(\n                parentName !== undefined && children.length === 0\n            );\n            return (\n                <CanAccess\n                    key={route}\n                    resource={name.toLowerCase()}\n                    action="list"\n                >\n                    <Menu.Item\n                        key={route}\n                        style={{\n                            fontWeight: isSelected ? "bold" : "normal",\n                        }}\n                        icon={\n                            icon ?? (isRoute && <Icons.UnorderedListOutlined />)\n                        }\n                    >\n                        <Link to={route}>{label}</Link>\n                        {!collapsed && isSelected && (\n                            <div className="ant-menu-tree-arrow" />\n                        )}\n                    </Menu.Item>\n                </CanAccess>\n            );\n        });\n    };\n\n    // highlight-start\n    const { mutate: logout } = useLogout();\n    // highlight-end\n\n    return (\n        <AntdLayout.Sider\n            collapsible\n            collapsed={collapsed}\n            onCollapse={(collapsed: boolean): void => setCollapsed(collapsed)}\n            collapsedWidth={isMobile ? 0 : 80}\n            breakpoint="lg"\n            style={isMobile ? antLayoutSiderMobile : antLayoutSider}\n        >\n            <RenderToTitle collapsed={collapsed} />\n            <Menu\n                defaultOpenKeys={defaultOpenKeys}\n                selectedKeys={[selectedKey]}\n                mode="inline"\n                onClick={() => {\n                    if (!breakpoint.lg) {\n                        setCollapsed(true);\n                    }\n                }}\n            >\n                {renderTreeView(menuItems, selectedKey)}\n                // highlight-start\n                <Menu.Item\n                    key="logout"\n                    onClick={() => logout()}\n                    icon={<Icons.LogoutOutlined />}\n                >\n                    Logout\n                </Menu.Item>\n                // highlight-end\n            </Menu>\n        </AntdLayout.Sider>\n    );\n};\n\nconst antLayoutSider: CSSProperties = {\n    position: "relative",\n};\nconst antLayoutSiderMobile: CSSProperties = {\n    position: "fixed",\n    height: "100vh",\n    zIndex: 999,\n};\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useLogout")," provides the logout functionality."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("inlineCode",{parentName:"p"},"useLogout")," hook can only be used if the ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider")," is provided.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"/docs/core/providers/auth-provider"},"Refer to authProvider docs for more detailed information. ","\u2192"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"/docs/core/hooks/auth/useLogout"},"Refer to useLogout docs for more detailed information. ","\u2192")))),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"You can further customize the Sider and its appearance.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/layout/#Layout.Sider"},"Refer to Ant Design docs for more detailed information about Sider. ","\u2192")))))}c.isMDXComponent=!0}}]);