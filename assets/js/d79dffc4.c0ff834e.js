"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2222],{2594:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>h});var a=t(5893),s=t(1151),r=t(2961),l=t(4866),o=t(5162);const i={},c=void 0,u={permalink:"/blog/react-suspense",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/react-suspense.mdx",source:"@site/blog/react-suspense.mdx",title:"react-suspense",description:"---",date:"2024-01-09T15:49:03.534Z",formattedDate:"January 9, 2024",tags:[],readingTime:2.175,hasTruncateMarker:!0,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"applications-of-heap",permalink:"/blog/applications-of-heap"},nextItem:{title:"js",permalink:"/blog/js"}},d={authorsImageUrls:[]},h=[{value:"slug: react-suspense\ntitle:  react Suspense\ntags: [React]",id:"slug-react-suspensetitle--react-suspensetags-react",level:2},{value:"Purpose",id:"purpose",level:2},{value:"Common usage",id:"common-usage",level:2},{value:"Displaying a fallback while content is loading",id:"displaying-a-fallback-while-content-is-loading",level:3},{value:"Revealing content together at once",id:"revealing-content-together-at-once",level:3},{value:"Revealing nested content as it loads",id:"revealing-nested-content-as-it-loads",level:3},{value:"More usage see at react &lt;Suspense&gt;",id:"more-usage-see-at-react-suspense",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"slug-react-suspensetitle--react-suspensetags-react",children:"slug: react-suspense\ntitle:  react Suspense\ntags: [React]"}),"\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(o.Z,{value:"apple",label:"apple",default:!0,children:(0,a.jsx)(n.p,{children:"hello apple"})}),(0,a.jsx)(o.Z,{value:"orange",label:"orange",default:!0,children:(0,a.jsx)(n.p,{children:"hello orange"})})]}),"\n",(0,a.jsx)(n.h1,{id:"suspense",children:"<Suspense>"}),"\n",(0,a.jsxs)(n.p,{children:["<Suspense> component is part of ",(0,a.jsx)(n.em,{children:"React's"})," Concurrent Mode feature to improve the user experience by making it more respective and resilient."]}),"\n",(0,a.jsx)(n.h2,{id:"purpose",children:"Purpose"}),"\n",(0,a.jsx)(n.p,{children:'The primary purpose of the <Suspense> component is to handle asynchronous operations, such as data fetching or lazy loading of components, in a more declarative way. It allows you to "suspend" rendering until some condition is met, typically until data is ready.'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import React, { Suspense } from 'react';\n\nconst MyComponent = React.lazy(() => import('./MyComponent'));\n\nfunction App() {\n  return (\n    <Suspense fallback={<div>Loading...</div>}>\n      <MyComponent />\n    </Suspense>\n  );\n}\n\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["When you are using Relay's ",(0,a.jsx)(r.Z,{style:"color: #277B9F",children:"useLazyQuery"})," , the official document recommend wrap it with a ",(0,a.jsx)(r.Z,{style:"color: #277B9F",children:"Suspense"})," Component for better user experience."]})}),"\n",(0,a.jsx)(n.h2,{id:"common-usage",children:"Common usage"}),"\n",(0,a.jsx)(n.h3,{id:"displaying-a-fallback-while-content-is-loading",children:"Displaying a fallback while content is loading"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"<Suspense fallback={<Loading />}>\n  <Albums />\n</Suspense>\n"})}),"\n",(0,a.jsxs)(n.p,{children:["React will display ",(0,a.jsx)(r.Z,{color:"#E6F8FF",children:"loading fallback"}),"\nuntil all the code and data needed by the children has been loaded."]}),"\n",(0,a.jsxs)(n.p,{children:["Only Suspense-enable data sources will activate the ",(0,a.jsx)(r.Z,{color:" #E6F8FF",children:"Suspense component"}),"."]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Data fetching with Suspense-enabled frameworks like ",(0,a.jsx)(r.Z,{color:"#277B9F",children:"Relay"})," and ",(0,a.jsx)(r.Z,{color:"#277B9F",children:"Next.js"}),", such as ",(0,a.jsx)(r.Z,{color:"#FDF2EA",children:"useLazyQuery"})," in ",(0,a.jsx)(r.Z,{color:"#277B9F",children:"Relay"})]}),"\n",(0,a.jsxs)(n.li,{children:["Lazy-loading component code with ",(0,a.jsx)(r.Z,{color:"#277B9F",children:"lazy"})]}),"\n",(0,a.jsxs)(n.li,{children:["Reading the value of a Promise with ",(0,a.jsx)(r.Z,{color:"#277B9F",children:"use"})]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"revealing-content-together-at-once",children:"Revealing content together at once"}),"\n",(0,a.jsx)(n.p,{children:"By default, the whole tree inside Suspense is treated as a single unit. Only all components inside the Suspense have been ready for rendering, all of those components will appear at once. Otherwise, even if only one of these components suspends waiting for some data, all of them together will be replaced by the loading indicator."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Alt text",src:t(1335).Z+"",width:"1698",height:"326"})}),"\n",(0,a.jsx)(n.h3,{id:"revealing-nested-content-as-it-loads",children:"Revealing nested content as it loads"}),"\n",(0,a.jsx)(n.p,{children:"Each Suspense boundary's fallback will be filled in as the next level of content becomes available."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Alt text",src:t(8754).Z+"",width:"1710",height:"442"})}),"\n",(0,a.jsxs)(n.p,{children:["With this change, displaying the ",(0,a.jsx)(r.Z,{color:"#F6F7F9",children:"Biography"}),' doesn\'t need to "wait" for the ',(0,a.jsx)(r.Z,{color:"#F6F7F9",children:"Albums"})," to load."]}),"\n",(0,a.jsx)(r.Z,{color:"#F6F7F9",children:"AlbumsGlimmer"}),"\n",(0,a.jsx)(n.p,{children:"Let's break it down with proper sequence:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["If ",(0,a.jsx)(r.Z,{color:"#F6F7F9",children:"Biography"})," hasn't loaded yet, ",(0,a.jsx)(r.Z,{color:"#F6F7F9",children:"BigSpinner"})," is shown in place of the entire content area."]}),"\n",(0,a.jsxs)(n.li,{children:["Once the ",(0,a.jsx)(r.Z,{color:"#F6F7F9",children:"Biography"})," finishes loadingm ",(0,a.jsx)(r.Z,{color:"#F6F7F9",children:"BigSpinner"})," is replaced by the content."]}),"\n",(0,a.jsxs)(n.li,{children:["If ",(0,a.jsx)(r.Z,{color:"#F6F7F9",children:"Albums"})," hasn't loaded yet, ",(0,a.jsx)(r.Z,{color:"#F6F7F9",children:"AlbumsGlimmer"})," id shown in place of ",(0,a.jsx)(r.Z,{color:"#F6F7F9",children:"Albums"})," and its parent Panel."]}),"\n",(0,a.jsxs)(n.li,{children:["Finally, once ",(0,a.jsx)(r.Z,{color:"#F6F7F9",children:"Albums"})," finishes loading, it replaces ",(0,a.jsx)(r.Z,{color:"#F6F7F9",children:"AlbumsGlimmer"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.h3,{id:"more-usage-see-at-react-suspense",children:["More usage see at ",(0,a.jsx)(n.a,{href:"https://react.dev/reference/react/Suspense",children:"react <Suspense>"})]})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>l});t(7294);var a=t(512);const s={tabItem:"tabItem_Ymn6"};var r=t(5893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(s.tabItem,l),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>F});var a=t(7294),s=t(512),r=t(2466),l=t(6550),o=t(469),i=t(1980),c=t(7392),u=t(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:s}}=e;return{value:n,label:t,attributes:a,default:s}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,l.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=h(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[c,d]=m({queryString:t,groupId:s}),[f,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,u.Nk)(t);return[s,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),b=(()=>{const e=c??f;return p({value:e,tabValues:r})?e:null})();(0,o.Z)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),g(e)}),[d,g,r]),tabValues:r}}var g=t(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(5893);function j(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),s=o[t].value;s!==a&&(c(n),l(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...r,className:(0,s.Z)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,s.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(j,{...e,...n}),(0,x.jsx)(v,{...e,...n})]})}function F(e){const n=(0,g.Z)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},2961:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(5893);const s=e=>{let{children:n,color:t}=e;return(0,a.jsx)("span",{style:{backgroundColor:"#2C6F63",borderRadius:"2px",border:"1px solid black",color:"#fff",padding:"0.2rem"},children:n})}},8754:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/image-1-86919027ee5d9a0b36f0fcf501dc2d3f.png"},1335:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/image-d8f1ab47a015ccd1ae121ab782b76520.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>l});var a=t(7294);const s={},r=a.createContext(s);function l(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);