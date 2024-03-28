/*! For license information please see 956b6a08.043af698.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[493141],{110327:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=n(824246),o=n(511151);const s={id:"concepts",title:"Concepts",description:"Documentation on concepts that are introduced with Spotify's docs-like-code solution in Backstage"},c=void 0,i={id:"features/techdocs/concepts",title:"Concepts",description:"Documentation on concepts that are introduced with Spotify's docs-like-code solution in Backstage",source:"@site/../docs/features/techdocs/concepts.md",sourceDirName:"features/techdocs",slug:"/features/techdocs/concepts",permalink:"/docs/features/techdocs/concepts",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/techdocs/concepts.md",tags:[],version:"current",frontMatter:{id:"concepts",title:"Concepts",description:"Documentation on concepts that are introduced with Spotify's docs-like-code solution in Backstage"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/features/techdocs/getting-started"},next:{title:"TechDocs Addons",permalink:"/docs/features/techdocs/addons"}},a={},u=[{value:"Generating TechDocs Steps",id:"generating-techdocs-steps",level:2},{value:"TechDocs Preparer",id:"techdocs-preparer",level:3},{value:"TechDocs Generator",id:"techdocs-generator",level:3},{value:"TechDocs Publisher",id:"techdocs-publisher",level:3},{value:"TechDocs Build Strategy",id:"techdocs-build-strategy",level:2},{value:"TechDocs Container",id:"techdocs-container",level:2},{value:"TechDocs Core Plugin",id:"techdocs-core-plugin",level:2},{value:"TechDocs CLI",id:"techdocs-cli",level:2},{value:"TechDocs Reader",id:"techdocs-reader",level:2},{value:"Transformers",id:"transformers",level:2},{value:"TechDocs Addons",id:"techdocs-addons",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"This page describes concepts that are introduced with Spotify's docs-like-code\nsolution in Backstage."}),"\n",(0,r.jsx)(t.h2,{id:"generating-techdocs-steps",children:"Generating TechDocs Steps"}),"\n",(0,r.jsx)(t.h3,{id:"techdocs-preparer",children:"TechDocs Preparer"}),"\n",(0,r.jsx)(t.p,{children:"Preparing is the first step of generating documentation for an entity. It\nfetches the source markdown files from the source code hosting provider (GitHub,\nGitLab, etc.) and passes the files to the generator for next steps."}),"\n",(0,r.jsx)(t.p,{children:"There are two kinds of preparers available -"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Common Git Preparer - Uses ",(0,r.jsx)(t.code,{children:"git clone"})," on any repository URL."]}),"\n",(0,r.jsx)(t.li,{children:"URL Reader - Uses source code hosting provider's API to download files.\n(Faster and recommended)"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"techdocs-generator",children:"TechDocs Generator"}),"\n",(0,r.jsxs)(t.p,{children:["Generating is the second step after preparing the markdown source files. This\nstep either runs the TechDocs container (defined below) or runs ",(0,r.jsx)(t.code,{children:"mkdocs"})," CLI to\ngenerate static HTML files and its assets."]}),"\n",(0,r.jsx)(t.h3,{id:"techdocs-publisher",children:"TechDocs Publisher"}),"\n",(0,r.jsx)(t.p,{children:"Publishing is the third and final step after preparing and generating docs.\nTechDocs Publisher uploads the generated files to a storage."}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"techdocs-backend"})," plugin currently comes with two publishers - Google Cloud\nStorage and Local Filesystem. You can configure them in your Backstage app.\n",(0,r.jsx)(t.a,{href:"/docs/features/techdocs/configuration",children:"See here"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["A TechDocs publisher is responsible for two things (two-way communication\nbetween ",(0,r.jsx)(t.code,{children:"techdocs-backend"})," and the storage)"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Publish generated static files to a storage (Configured by\n",(0,r.jsx)(t.code,{children:"techdocs.builder"}),")"]}),"\n",(0,r.jsx)(t.li,{children:"Read files from the storage when users visit a TechDocs site"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/techdocs-backend",children:"TechDocs Backend"})}),"\n",(0,r.jsx)(t.h2,{id:"techdocs-build-strategy",children:"TechDocs Build Strategy"}),"\n",(0,r.jsx)(t.p,{children:"To accommodate more complex logic surrounding whether or not to build TechDocs, the TechDocs backend\nsupports selecting a Build Strategy.\nThe Build Strategy is responsible for deciding whether the documentation requested should be built locally\nby the TechDocs backend or not.\nCustomization of the Build Strategy allows for more complex behaviour regarding whether the TechDocs backend\nis responsible for building TechDocs, whether an external process is responsible, or whether a combination\nof local builds and an external process is responsible, on an entity-by-entity basis."}),"\n",(0,r.jsxs)(t.p,{children:["The default Build Strategy results in the TechDocs backend building documentation locally if the\n",(0,r.jsx)(t.code,{children:"techdocs.builder"})," configuration option is set to ",(0,r.jsx)(t.code,{children:"'local'"}),", and skipping any building otherwise.\nHowever any logic that satisfies the Build Strategy interface can be implemented, using the Backstage\nconfig as well as the entity being processed to make a decision."]}),"\n",(0,r.jsxs)(t.p,{children:["For an example of how the Build Strategy can be used to implement a 'hybrid' build model, refer to\nthe ",(0,r.jsx)(t.a,{href:"/docs/features/techdocs/how-to-guides#how-to-implement-a-hybrid-build-strategy",children:"How to implement a hybrid build strategy"})," guide."]}),"\n",(0,r.jsx)(t.h2,{id:"techdocs-container",children:"TechDocs Container"}),"\n",(0,r.jsxs)(t.p,{children:["The TechDocs container is a Docker container available at\n",(0,r.jsx)(t.a,{href:"https://hub.docker.com/r/spotify/techdocs",children:"DockerHub"}),". It builds static HTML\npages, including stylesheets and scripts from Python flavored Markdown, through\nMkDocs."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/backstage/techdocs-container",children:"TechDocs Container"})}),"\n",(0,r.jsx)(t.h2,{id:"techdocs-core-plugin",children:"TechDocs Core Plugin"}),"\n",(0,r.jsxs)(t.p,{children:["The TechDocs Core Plugin is an ",(0,r.jsx)(t.a,{href:"https://www.mkdocs.org/",children:"MkDocs"})," plugin created\nas a wrapper around multiple MkDocs plugins and Python Markdown extensions to\nstandardize the configuration of MkDocs used for TechDocs."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/backstage/mkdocs-techdocs-core",children:"TechDocs Core"})}),"\n",(0,r.jsx)(t.h2,{id:"techdocs-cli",children:"TechDocs CLI"}),"\n",(0,r.jsx)(t.p,{children:"The TechDocs CLI was created to make it easy to write, generate and preview\ndocumentation for publishing. Currently it mostly acts as a wrapper around the\nTechDocs container and provides an easy-to-use interface for our docker\ncontainer."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/backstage/techdocs-cli",children:"TechDocs CLI"})}),"\n",(0,r.jsx)(t.h2,{id:"techdocs-reader",children:"TechDocs Reader"}),"\n",(0,r.jsx)(t.p,{children:"Documentation generated by TechDocs is generated as static HTML sites. The\nTechDocs Reader was therefore created to be able to integrate pre-generated HTML\nsites with the Backstage UI."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/techdocs/src/reader/README.md",children:"TechDocs Reader"})}),"\n",(0,r.jsx)(t.h2,{id:"transformers",children:"Transformers"}),"\n",(0,r.jsx)(t.p,{children:"Transformers are different pieces of functionality used inside the TechDocs\nReader. The reason why transformers were introduced was to provide a way to\ntransform the HTML content on pre and post render (e.g. rewrite docs links or\nmodify css)."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/techdocs/src/reader/README.md",children:"Transformers API docs"})}),"\n",(0,r.jsx)(t.h2,{id:"techdocs-addons",children:"TechDocs Addons"}),"\n",(0,r.jsx)(t.p,{children:"Addons (introduced in Backstage v1.2) are client-side, React-based extensions\nthat can be used to augment the TechDocs experience at read-time. They offer a\nmechanism for configuring the TechDocs Reader to better suit your\norganization's needs."}),"\n",(0,r.jsx)(t.p,{children:"Addons can dynamically load and display information anywhere in the TechDocs\nReader, including within the statically generated content itself."}),"\n",(0,r.jsxs)(t.p,{children:["Addons should not be confused with ",(0,r.jsx)(t.code,{children:"mkdocs"})," plugins, which may be used to\ncustomize a TechDocs site's content at build-time. While it's possible to take\nadvantage of some ",(0,r.jsx)(t.code,{children:"mkdocs"})," plugins, not all such plugins play well with\nTechDocs (primarily, but not exclusively, for security reasons). Addons offer\nan alternative."]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,s={},u=null,l=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,r)&&!a.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:l,props:s,_owner:i.current}}t.Fragment=s,t.jsx=u,t.jsxs=u},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),a=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),f=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,g={};function m(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||p}function b(){}function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||p}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var x=v.prototype=new b;x.constructor=v,y(x,m.prototype),x.isPureReactComponent=!0;var k=Array.isArray,j=Object.prototype.hasOwnProperty,T={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function D(e,t,r){var o,s={},c=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)j.call(t,o)&&!w.hasOwnProperty(o)&&(s[o]=t[o]);var a=arguments.length-2;if(1===a)s.children=r;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];s.children=u}if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===s[o]&&(s[o]=a[o]);return{$$typeof:n,type:e,key:c,ref:i,props:s,_owner:T.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var S=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,o,s,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var a=!1;if(null===e)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case n:case r:a=!0}}if(a)return c=c(a=e),e=""===s?"."+C(a,0):s,k(c)?(o="",null!=e&&(o=e.replace(S,"$&/")+"/"),R(c,t,o,"",(function(e){return e}))):null!=c&&(_(c)&&(c=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||a&&a.key===c.key?"":(""+c.key).replace(S,"$&/")+"/")+e)),t.push(c)),1;if(a=0,s=""===s?".":s+":",k(e))for(var u=0;u<e.length;u++){var l=s+C(i=e[u],u);a+=R(i,t,o,l,c)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(i=e.next()).done;)a+=R(i=i.value,t,o,l=s+C(i,u++),c);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function E(e,t,n){if(null==e)return e;var r=[],o=0;return R(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},I={transition:null},L={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:I,ReactCurrentOwner:T};t.Children={map:E,forEach:function(e,t,n){E(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return E(e,(function(){t++})),t},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=o,t.Profiler=c,t.PureComponent=v,t.StrictMode=s,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),s=e.key,c=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,i=T.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)j.call(t,u)&&!w.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==a?a[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){a=Array(u);for(var l=0;l<u;l++)a[l]=arguments[l+2];o.children=a}return{$$typeof:n,type:e.type,key:s,ref:c,props:o,_owner:i}},t.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=D,t.createFactory=function(e){var t=D.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return $.current.useCallback(e,t)},t.useContext=function(e){return $.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return $.current.useDeferredValue(e)},t.useEffect=function(e,t){return $.current.useEffect(e,t)},t.useId=function(){return $.current.useId()},t.useImperativeHandle=function(e,t,n){return $.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return $.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return $.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return $.current.useMemo(e,t)},t.useReducer=function(e,t,n){return $.current.useReducer(e,t,n)},t.useRef=function(e){return $.current.useRef(e)},t.useState=function(e){return $.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return $.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return $.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>c});var r=n(667294);const o={},s=r.createContext(o);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);