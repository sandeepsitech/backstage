/*! For license information please see ade1b247.f97937d4.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[768682],{27348:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(824246),r=n(511151);const a={id:"homepage",title:"Backstage homepage - Setup and Customization",description:"Documentation on setting up and customizing Backstage homepage"},i=void 0,s={id:"getting-started/homepage",title:"Backstage homepage - Setup and Customization",description:"Documentation on setting up and customizing Backstage homepage",source:"@site/../docs/getting-started/homepage.md",sourceDirName:"getting-started",slug:"/getting-started/homepage",permalink:"/docs/getting-started/homepage",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/getting-started/homepage.md",tags:[],version:"current",frontMatter:{id:"homepage",title:"Backstage homepage - Setup and Customization",description:"Documentation on setting up and customizing Backstage homepage"},sidebar:"docs",previous:{title:"Customize the look-and-feel of your App",permalink:"/docs/getting-started/app-custom-theme"},next:{title:"Keeping Backstage Updated",permalink:"/docs/getting-started/keeping-backstage-updated"}},c={},l=[{value:"Homepage",id:"homepage",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Setup homepage",id:"setup-homepage",level:3},{value:"1. Install the plugin",id:"1-install-the-plugin",level:4},{value:"2. Create a new HomePage component",id:"2-create-a-new-homepage-component",level:4},{value:"3. Update router for the root <code>/</code> route",id:"3-update-router-for-the-root--route",level:4},{value:"4. Update sidebar items",id:"4-update-sidebar-items",level:4},{value:"Use the default template",id:"use-the-default-template",level:3},{value:"Composing your homepage",id:"composing-your-homepage",level:3}];function u(e){const t=Object.assign({h2:"h2",p:"p",a:"a",ul:"ul",li:"li",h3:"h3",code:"code",h4:"h4",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",img:"img",em:"em",blockquote:"blockquote"},(0,r.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"homepage",children:"Homepage"}),"\n",(0,o.jsxs)(t.p,{children:["Having a good Backstage homepage can significantly improve the discoverability of the platform. You want your users to find all the things they need right from the homepage and never have to remember direct URLs in Backstage. The ",(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/home",children:"Home plugin"})," introduces a system for composing a homepage for Backstage in order to surface relevant info and provide convenient shortcuts for common tasks. It's designed with composability in mind with an open ecosystem that allows anyone to contribute with any component, to be included in any homepage."]}),"\n",(0,o.jsx)(t.p,{children:"For App Integrators, the system is designed to be composable to give total freedom in designing a Homepage that suits the needs of the organization. From the perspective of a Component Developer who wishes to contribute with building blocks to be included in Homepages, there's a convenient interface for bundling the different parts and exporting them with both error boundary and lazy loading handled under the surface."}),"\n",(0,o.jsx)(t.p,{children:"At the end of this tutorial, you can expect:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Your Backstage app to have a dedicated homepage instead of Software Catalog."}),"\n",(0,o.jsx)(t.li,{children:"Understand the composability of homepage and how to start customizing it for your own organization."}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsx)(t.p,{children:"Before we begin, make sure"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["You have created your own standalone Backstage app using ",(0,o.jsx)(t.a,{href:"/docs/getting-started/#create-your-backstage-app",children:(0,o.jsx)(t.code,{children:"@backstage/create-app"})})," and not using a fork of the ",(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage",children:"backstage"})," repository."]}),"\n",(0,o.jsx)(t.li,{children:"You do not have an existing homepage, and by default you are redirected to Software Catalog when you open Backstage."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Now, let's get started by installing the home plugin and creating a simple homepage for your Backstage app."}),"\n",(0,o.jsx)(t.h3,{id:"setup-homepage",children:"Setup homepage"}),"\n",(0,o.jsx)(t.h4,{id:"1-install-the-plugin",children:"1. Install the plugin"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"# From your Backstage root directory\nyarn --cwd packages/app add @backstage/plugin-home\n"})}),"\n",(0,o.jsx)(t.h4,{id:"2-create-a-new-homepage-component",children:"2. Create a new HomePage component"}),"\n",(0,o.jsxs)(t.p,{children:["Inside your ",(0,o.jsx)(t.code,{children:"packages/app"})," directory, create a new file where our new homepage component is going to live. Create ",(0,o.jsx)(t.code,{children:"packages/app/src/components/home/HomePage.tsx"})," with the following initial code"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import React from 'react';\n\nexport const HomePage = () => (\n  /* We will shortly compose a pretty homepage here. */\n  <h1>Welcome to Backstage!</h1>\n);\n"})}),"\n",(0,o.jsxs)(t.h4,{id:"3-update-router-for-the-root--route",children:["3. Update router for the root ",(0,o.jsx)(t.code,{children:"/"})," route"]}),"\n",(0,o.jsx)(t.p,{children:"If you don't have a homepage already, most likely you have a redirect setup to use the Catalog homepage as a homepage."}),"\n",(0,o.jsxs)(t.p,{children:["Inside your ",(0,o.jsx)(t.code,{children:"packages/app/src/App.tsx"}),", look for"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",metastring:'title="packages/app/src/App.tsx"',children:'const routes = (\n  <FlatRoutes>\n    <Navigate key="/" to="catalog" />\n    {/* ... */}\n  </FlatRoutes>\n);\n'})}),"\n",(0,o.jsxs)(t.p,{children:["Let's replace the ",(0,o.jsx)(t.code,{children:"<Navigate>"})," line and use the new component we created in the previous step as the new homepage."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",metastring:'title="packages/app/src/App.tsx"',children:'/* highlight-add-start */\nimport { HomepageCompositionRoot } from \'@backstage/plugin-home\';\nimport { HomePage } from \'./components/home/HomePage\';\n/* highlight-add-end */\n\nconst routes = (\n  <FlatRoutes>\n    {/* highlight-remove-next-line */}\n    <Navigate key="/" to="catalog" />\n    {/* highlight-add-start */}\n    <Route path="/" element={<HomepageCompositionRoot />}>\n      <HomePage />\n    </Route>\n    {/* highlight-add-end */}\n    {/* ... */}\n  </FlatRoutes>\n);\n'})}),"\n",(0,o.jsx)(t.h4,{id:"4-update-sidebar-items",children:"4. Update sidebar items"}),"\n",(0,o.jsx)(t.p,{children:"Let's update the route for \"Home\" in the Backstage sidebar to point to the new homepage. We'll also add a Sidebar item to quickly open Catalog."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Before"}),(0,o.jsx)(t.th,{children:"After"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.img,{alt:"Sidebar without Catalog",src:n(656131).Z+"",width:"215",height:"475"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.img,{alt:"Sidebar with Catalog",src:n(399660).Z+"",width:"215",height:"475"})})]})})]}),"\n",(0,o.jsxs)(t.p,{children:["The code for the Backstage sidebar is most likely inside your ",(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/packages/app/src/components/Root/Root.tsx",children:(0,o.jsx)(t.code,{children:"packages/app/src/components/Root/Root.tsx"})}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Let's make the following changes"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",metastring:'title="packages/app/src/components/Root/Root.tsx"',children:'/* highlight-add-next-line */\nimport CategoryIcon from \'@material-ui/icons/Category\';\n\nexport const Root = ({ children }: PropsWithChildren<{}>) => (\n  <SidebarPage>\n    <Sidebar>\n      <SidebarLogo />\n      {/* ... */}\n      <SidebarGroup label="Menu" icon={<MenuIcon />}>\n        {/* Global nav, not org-specific */}\n        {/* highlight-remove-next-line */}\n        <SidebarItem icon={HomeIcon} to="catalog" text="Home" />\n        {/* highlight-add-start */}\n        <SidebarItem icon={HomeIcon} to="/" text="Home" />\n        <SidebarItem icon={CategoryIcon} to="catalog" text="Catalog" />\n        {/* highlight-add-end */}\n        <SidebarItem icon={ExtensionIcon} to="api-docs" text="APIs" />\n        <SidebarItem icon={LibraryBooks} to="docs" text="Docs" />\n        <SidebarItem icon={LayersIcon} to="explore" text="Explore" />\n        <SidebarItem icon={CreateComponentIcon} to="create" text="Create..." />\n        {/* End global nav */}\n        <SidebarDivider />\n        {/* ... */}\n      </SidebarGroup>\n    </Sidebar>\n  </SidebarPage>\n);\n'})}),"\n",(0,o.jsxs)(t.p,{children:["That's it! You should now have ",(0,o.jsx)(t.em,{children:"(although slightly boring)"})," a homepage!"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Screenshot of a blank homepage",src:n(795846).Z+"",width:"1920",height:"1134"})}),"\n",(0,o.jsx)(t.p,{children:"In the next steps, we will make it interesting and useful!"}),"\n",(0,o.jsx)(t.h3,{id:"use-the-default-template",children:"Use the default template"}),"\n",(0,o.jsxs)(t.p,{children:["There is a default homepage template (",(0,o.jsx)(t.a,{href:"https://backstage.io/storybook/?path=/story/plugins-home-templates--default-template",children:"storybook link"}),") which we will use to set up our homepage. Checkout the ",(0,o.jsx)(t.a,{href:"https://backstage.io/blog/2022/01/25/backstage-homepage-templates",children:"blog post announcement"})," about the Backstage homepage templates for more information."]}),"\n",(0,o.jsx)(t.h3,{id:"composing-your-homepage",children:"Composing your homepage"}),"\n",(0,o.jsxs)(t.p,{children:["Composing a homepage is no different from creating a regular React Component,\ni.e. the App Integrator is free to include whatever content they like. However,\nthere are components developed with the homepage in mind. If you are looking\nfor components to use when composing your homepage, you can take a look at the\n",(0,o.jsx)(t.a,{href:"https://backstage.io/storybook?path=/story/plugins-home-components",children:"collection of Homepage components"}),"\nin storybook. If you don't find a component that suits your needs but want to\ncontribute, check the\n",(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/home/README.md#contributing",children:"Contributing documentation"}),"."]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["If you want to use one of the available homepage templates you can find the\n",(0,o.jsx)(t.a,{href:"https://backstage.io/storybook/?path=/story/plugins-home-templates",children:"templates"}),'\nin the storybook under the "Home" plugin. And if you would like to contribute\na template, please see the\n',(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/home/README.md#contributing",children:"Contributing documentation"})]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import React from 'react';\nimport Grid from '@material-ui/core/Grid';\nimport { HomePageCompanyLogo } from '@backstage/plugin-home';\n\nexport const homePage = (\n  <Grid container spacing={3}>\n    <Grid item xs={12} md={4}>\n      <HomePageCompanyLogo />\n    </Grid>\n  </Grid>\n);\n"})})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(u,e)})):u(e)}},399660:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/sidebar-with-catalog-f94e950f2ea3627ecaab41aabbe167b6.png"},656131:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/sidebar-without-catalog-e7737bc9f306437332595c57606fc644.png"},795846:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/simple-homepage-db083f208f2b1bfe180eb81e04e345a6.png"},371426:(e,t,n)=>{var o=n(827378),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var o,a={},l=null,u=null;for(o in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,o)&&!c.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===a[o]&&(a[o]=t[o]);return{$$typeof:r,type:e,key:l,ref:u,props:a,_owner:s.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var n=Symbol.for("react.element"),o=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),h=Symbol.iterator;var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,f={};function y(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||g}function b(){}function x(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var k=x.prototype=new b;k.constructor=x,m(k,y.prototype),k.isPureReactComponent=!0;var v=Array.isArray,j=Object.prototype.hasOwnProperty,w={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,o){var r,a={},i=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)j.call(t,r)&&!_.hasOwnProperty(r)&&(a[r]=t[r]);var c=arguments.length-2;if(1===c)a.children=o;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===a[r]&&(a[r]=c[r]);return{$$typeof:n,type:e,key:i,ref:s,props:a,_owner:w.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var R=/\/+/g;function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,r,a,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case o:c=!0}}if(c)return i=i(c=e),e=""===a?"."+I(c,0):a,v(i)?(r="",null!=e&&(r=e.replace(R,"$&/")+"/"),E(i,t,r,"",(function(e){return e}))):null!=i&&(C(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(R,"$&/")+"/")+e)),t.push(i)),1;if(c=0,a=""===a?".":a+":",v(e))for(var l=0;l<e.length;l++){var u=a+I(s=e[l],l);c+=E(s,t,r,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(s=e.next()).done;)c+=E(s=s.value,t,r,u=a+I(s,l++),i);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function P(e,t,n){if(null==e)return e;var o=[],r=0;return E(e,o,"","",(function(e){return t.call(n,e,r++)})),o}function H(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var B={current:null},$={transition:null},O={ReactCurrentDispatcher:B,ReactCurrentBatchConfig:$,ReactCurrentOwner:w};t.Children={map:P,forEach:function(e,t,n){P(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=r,t.Profiler=i,t.PureComponent=x,t.StrictMode=a,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,t.cloneElement=function(e,t,o){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=m({},e.props),a=e.key,i=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,s=w.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)j.call(t,l)&&!_.hasOwnProperty(l)&&(r[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)r.children=o;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];r.children=c}return{$$typeof:n,type:e.type,key:a,ref:i,props:r,_owner:s}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:H}},t.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=$.transition;$.transition={};try{e()}finally{$.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return B.current.useCallback(e,t)},t.useContext=function(e){return B.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return B.current.useDeferredValue(e)},t.useEffect=function(e,t){return B.current.useEffect(e,t)},t.useId=function(){return B.current.useId()},t.useImperativeHandle=function(e,t,n){return B.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return B.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return B.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return B.current.useMemo(e,t)},t.useReducer=function(e,t,n){return B.current.useReducer(e,t,n)},t.useRef=function(e){return B.current.useRef(e)},t.useState=function(e){return B.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return B.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return B.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>s,ah:()=>a});var o=n(667294);const r=o.createContext({});function a(e){const t=o.useContext(r);return o.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||i:a(e),o.createElement(r.Provider,{value:s},t)}}}]);