"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3372],{4700:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=n(5893),s=n(1151);const r={slug:"react-hooks",title:"Built-in React Hooks",tags:["react","hook"]},a=void 0,i={permalink:"/blog/react-hooks",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/react-hooks.md",source:"@site/blog/react-hooks.md",title:"Built-in React Hooks",description:"State Hooks",date:"2024-01-23T13:00:27.780Z",formattedDate:"January 23, 2024",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"hook",permalink:"/blog/tags/hook"}],readingTime:1.745,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"react-hooks",title:"Built-in React Hooks",tags:["react","hook"]},unlisted:!1,nextItem:{title:"How to design customized rendering",permalink:"/blog/design-customized-rendering"}},c={authorsImageUrls:[]},l=[{value:"State Hooks",id:"state-hooks",level:2},{value:"Context Hooks",id:"context-hooks",level:2},{value:"Ref Hooks",id:"ref-hooks",level:2},{value:"Effect Hooks",id:"effect-hooks",level:2},{value:"Performance Hooks",id:"performance-hooks",level:2},{value:"Resource Hooks",id:"resource-hooks",level:2},{value:"Other Hooks",id:"other-hooks",level:2}];function h(e){const t={h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"state-hooks",children:"State Hooks"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"useState: declares a state variable tthat we can update directly."}),"\n",(0,o.jsx)(t.li,{children:"useReducer: declares a state variable with the update logic inside a reducer function."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"context-hooks",children:"Context Hooks"}),"\n",(0,o.jsx)(t.p,{children:"Context lets a component receive information from distant parents without passing it as props."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"useContext: reads and subscribes to a content."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"ref-hooks",children:"Ref Hooks"}),"\n",(0,o.jsx)(t.p,{children:'Refs let a component hold soe information that isn\'t used for rendering, like a DOM node or timeout ID. Refs are an "escape hatch" from the react paradigm. They are useful when you need to work with non-React systems, such as the built-in browser APIs.'}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"useRef: declares a ref. We can hold any value in it, but most often it's used to hold a DOM node."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"effect-hooks",children:"Effect Hooks"}),"\n",(0,o.jsx)(t.p,{children:"Effects let a component connect to and synchronize with external systems. This includes dealing with network, browser DOM, animationm widgets written using a different UI library, and other non-React code."}),"\n",(0,o.jsx)(t.p,{children:"Effects are an \u201cescape hatch\u201d from the React paradigm. Don\u2019t use Effects to orchestrate the data flow of your application. If you\u2019re not interacting with an external system, you might not need an Effect."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"useEffect: connects a component to an external system."}),"\n",(0,o.jsx)(t.li,{children:"useLayoutEffect: fires before the browser repaints the screen."}),"\n",(0,o.jsx)(t.li,{children:"useInsertionEffect: fires before React makes changes to the DOM. Libraries can insert dynamic CSS here."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"performance-hooks",children:"Performance Hooks"}),"\n",(0,o.jsx)(t.p,{children:"A common way to optimize re-renderinng performance is to skip uneccessary work."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"useMemo: lets you cache the result of an expensive calculation."}),"\n",(0,o.jsx)(t.li,{children:"useCallback: lets you cache a function definition before passing it down to an optimized component."}),"\n",(0,o.jsx)(t.li,{children:"useTransition: lets you mark a state transition as non-blocking and allow other updates to interrupt it."}),"\n",(0,o.jsx)(t.li,{children:"useDeferredValue: lets you defer updating a non-critical part of the UI and let parts update first."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"resource-hooks",children:"Resource Hooks"}),"\n",(0,o.jsx)(t.p,{children:"Resources can be accessed by a component without having them as a part of their state."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"use: lets you read the value of a resource like a Promise or context."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"other-hooks",children:"Other Hooks"}),"\n",(0,o.jsx)(t.p,{children:"Commonly useful to library authors."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"useDefaultValue"}),"\n",(0,o.jsx)(t.li,{children:"useId"}),"\n",(0,o.jsx)(t.li,{children:"useSyncExternalStore"}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>a});var o=n(7294);const s={},r=o.createContext(s);function a(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);