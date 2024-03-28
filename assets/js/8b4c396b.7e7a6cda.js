/*! For license information please see 8b4c396b.7e7a6cda.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[560636],{138613:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=a(785893),i=a(511151);const s={title:"Scaling Backstage Ingestion with Incremental Entity Providers",author:"Paul Cowan & Taras Mankovski",authorURL:"https://frontside.com/"},r=void 0,o={permalink:"/blog/2023/01/31/incremental-entity-provider",source:"@site/blog/2023-01-31-incremental-entity-provider.mdx",title:"Scaling Backstage Ingestion with Incremental Entity Providers",description:"At the heart of Backstage is the Backstage Software Catalog, which is a data store that allows an organization to centralize and visualize its many software services and components. Backstage inspects and transforms an organization's disparate software services and parts into a centralized data store. This blog post introduces the concept of incremental entity providers, which allow Backstage to scale ingestion to even larger datasets.",date:"2023-01-31T00:00:00.000Z",formattedDate:"January 31, 2023",tags:[],readingTime:4.795,hasTruncateMarker:!0,authors:[{name:"Paul Cowan & Taras Mankovski",url:"https://frontside.com/"}],frontMatter:{title:"Scaling Backstage Ingestion with Incremental Entity Providers",author:"Paul Cowan & Taras Mankovski",authorURL:"https://frontside.com/"},unlisted:!1,prevItem:{title:"What\u2019s Ahead in 2023?",permalink:"/blog/2023/02/06/whats-ahead-in-2023"},nextItem:{title:"Backstage Wrapped 2022",permalink:"/blog/2022/12/19/backstage-wrapped-2022"}},l={authorsImageUrls:[void 0]},c=[{value:"Entity Providers",id:"entity-providers",level:2},{value:"Incremental entity providers",id:"incremental-entity-providers",level:2},{value:"Go forth and ingest!",id:"go-forth-and-ingest",level:2}];function d(e){const t={a:"a",h2:"h2",img:"img",p:"p",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["At the heart of ",(0,n.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage"})," is the ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/",children:"Backstage Software Catalog"}),", which is a data store that allows an organization to centralize and visualize its many software services and components. Backstage inspects and transforms an organization's disparate software services and parts into a centralized data store. This blog post introduces the concept of incremental entity providers, which allow Backstage to scale ingestion to even larger datasets."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"catalog pipeline",src:a(760852).Z+"",width:"451",height:"241"})}),"\n",(0,n.jsx)(t.p,{children:"{/* truncate */}"}),"\n",(0,n.jsxs)(t.p,{children:["A common use case is for an organization to want to surface ownership and metadata about repositories. Backstage provides a mechanism for discovering and transforming repository information into a standard data structure and persisting it into the Backstage ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/",children:"Catalog"}),". This process is known as ingestion, where all data is transformed into a standard Backstage data structure known as an entity. Entities in the Catalog\u2019s data store are accessible to the Backstage App via the REST API."]}),"\n",(0,n.jsxs)(t.p,{children:["Data is transformed into entities via what is known as the ingestion and processing loop, which can be thought of as an ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Extract,_transform,_load",children:"extract, transform and load (ETL) pipeline"}),", where raw data such as GitHub repositories are loaded from GitHub, transformed into entities and outputted to the Catalog."]}),"\n",(0,n.jsx)(t.h2,{id:"entity-providers",children:"Entity Providers"}),"\n",(0,n.jsxs)(t.p,{children:["Backstage offers what are known as ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/life-of-an-entity",children:"entity providers"})," as a means for ingesting the raw data into the pipeline and transforming them into Backstage entities. For example, Backstage comes with a ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/reference/plugin-catalog-backend-module-github",children:"GitHub Entity Provider"})," that finds all catalog-info.yaml files in GitHub repositories. The processing loop transforms them into Backstage entities and subsequently persists them to the software catalog."]}),"\n",(0,n.jsx)(t.p,{children:"Entity providers are a relatively new abstraction and the recommended way to ingest data into the catalog. The Backstage catalog engine starts each registered entity provider, which connects to its data source (e.g., the GitHub Entity Provider connects to GitHub). The entity provider will query the external data source and convert the data into the entity format. Finally, the entity provider issues what is known as a mutation to the catalog engine. A mutation is a signal from the entity provider to the catalog engine that entities are available to be processed and stored."}),"\n",(0,n.jsx)(t.p,{children:"A mutation can be either a full mutation or a delta mutation. A full mutation replaces all entities previously ingested by the entity provider with a new set of entities. The entity provider will remove all entities not found in the latest ingestion. A full mutation can be used to ingest relatively small datasets (less than 10,000 entities); however, ingesting more during a full ingestion may cause out-of-memory errors and delay the processing of entities from other entity providers. A delta mutation can surgically add and remove entities from the catalog. A delta mutation is useful when the data source provides events-based APIs like webhooks, which allows the Backstage catalog engine to ingest a small number of entities as they get added, updated and/or deleted."}),"\n",(0,n.jsx)(t.h2,{id:"incremental-entity-providers",children:"Incremental entity providers"}),"\n",(0,n.jsx)(t.p,{children:"A large organization typically deals with massive datasets. Until recently, ingesting large datasets with entity providers has been problematic because performing a full ingestion resulted in out-of-memory errors, and many data sources don\u2019t provide webhooks or other events-based APIs. At the same time, the datasets were too large to efficiently manage through targeted delta mutations."}),"\n",(0,n.jsxs)(t.p,{children:["This is a problem that ",(0,n.jsx)(t.a,{href:"http://hp.com",children:"DevEx team at HP"})," faced when building their software catalog with Backstage. ",(0,n.jsx)(t.a,{href:"https://github.com/dekoding",children:"Damon Kaswell"}),", Senior Application Developer on the DevEx team at HP, shared their experience at ",(0,n.jsx)(t.a,{href:"https://www.youtube.com/watch?v=5qHyZntKXRU&list=PLj6h78yzYM2OKySsTuiip3BqmdYZQRnSf&index=13",children:"BackstageCon 2022"}),", detailing the problem and the solution that ",(0,n.jsx)(t.a,{href:"https://frontside.com/",children:"Frontside"})," created in collaboration with developers on HP\u2019s DevEx team."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Damon Kaswell",src:a(168637).Z+"",width:"204",height:"224"})}),"\n",(0,n.jsxs)(t.p,{children:["The solution HP and ",(0,n.jsx)(t.a,{href:"https://frontside.com/",children:"Frontside"})," arrived at was to implement an incremental entity provider. An incremental entity provider effectively performs a full mutation using a series of delta mutations combined with a mark and sweep mechanism. It paginates through the dataset, tracking entities retrieved from each page and the cursor of the next page, pausing ingestion every few seconds to give the processing loop time to process existing entities. Once it reaches the end of the dataset, it determines which entities were not ingested during this ingestion cycle and emits a delta mutation to delete unmarked entities."]}),"\n",(0,n.jsx)(t.p,{children:"Simply by adding a few new tables to the database schema, the incremental ingestion entity provider converts any existing entity provider into an incremental entity provider. These tables allow the incremental entity provider to be long-lived and keep track of its current location in the dataset by persisting a cursor that it uses to page through any large dataset. The larger the dataset, the more pages of data or bursts of work the incremental entity provider will ingest\u2014but there will be no out-of-memory errors, effectively removing scalability problems."}),"\n",(0,n.jsx)(t.p,{children:"The results speak for themselves. Migrating from regular entity providers to incremental entity providers reduced ingestion time by 92% \u2013 from over 4 and a half hours to just 20 minutes. Incremental entity providers eliminated the ingestion maintenance burden from being a constant problem to a non-issue. Writing reliable integration with external services can now be done in days instead of weeks."}),"\n",(0,n.jsx)(t.h2,{id:"go-forth-and-ingest",children:"Go forth and ingest!"}),"\n",(0,n.jsxs)(t.p,{children:["Backstage provides a robust framework for ingesting data from external sources, but HP needed to scale it beyond its design. The Backstage framework allowed ",(0,n.jsx)(t.a,{href:"https://frontside.com/",children:"Frontside"})," and HP\u2019s developers to extend it with a plugin to support HP\u2019s scaling requirements."]}),"\n",(0,n.jsxs)(t.p,{children:["We're delighted to share that as of ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/14356",children:"this PR"}),", the incremental ingestion backend is available for anyone to use with Backstage. The solution was released open source as ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/catalog-backend-module-incremental-ingestion#backstageplugin-catalog-backend-module-incremental-ingestion",children:"@backstage/plugin-catalog-backend-module-incremental-ingestion"})," and contains a package for creating incremental entity providers. The plugin's ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/catalog-backend-module-incremental-ingestion",children:"repository README"})," has detailed configuration and usage outlined."]}),"\n",(0,n.jsx)(t.p,{children:"The incremental ingestion entity provider is an excellent addition to the Backstage stack. Battle-tested on large datasets, the incremental entity provider is a significant step forward in smoothing the path to successful ingestion at scale."})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},675251:(e,t,a)=>{var n=a(667294),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,a){var n,s={},c=null,d=null;for(n in void 0!==a&&(c=""+a),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)r.call(t,n)&&!l.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:i,type:e,key:c,ref:d,props:s,_owner:o.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},785893:(e,t,a)=>{e.exports=a(675251)},760852:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/catalog-pipeline-1c001702d710f795d338a19754eacfcf.png"},168637:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/damon-32d83539fe147296dc9e4b3c3bcab6ff.jpg"},511151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>r});var n=a(667294);const i={},s=n.createContext(i);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);