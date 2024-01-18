"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8630],{1301:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>h});var t=a(5893),i=a(1151);const r={title:"usePaginationFragment",slug:"use-pagination-fragment",tags:["Relay","GraphQL"],hide_table_of_contents:!1},o=void 0,s={permalink:"/blog/use-pagination-fragment",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/use-pagination-fragment.md",source:"@site/blog/use-pagination-fragment.md",title:"usePaginationFragment",description:"usePaginationFragment is a hook provided by Relay, a JavaScriptframework for building data-driven React applications with GraphQL.",date:"2024-01-09T15:47:15.000Z",formattedDate:"January 9, 2024",tags:[{label:"Relay",permalink:"/blog/tags/relay"},{label:"GraphQL",permalink:"/blog/tags/graph-ql"}],readingTime:1.58,hasTruncateMarker:!1,authors:[],frontMatter:{title:"usePaginationFragment",slug:"use-pagination-fragment",tags:["Relay","GraphQL"],hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"React Router",permalink:"/blog/react-router"},nextItem:{title:"Implemenation of a Heap",permalink:"/blog/heap"}},l={authorsImageUrls:[]},h=[{value:"What is a Pagination Fragment",id:"what-is-a-pagination-fragment",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Return Value",id:"return-value",level:2},{value:"To make &quot;usePaginationFragment&quot; work",id:"to-make-usepaginationfragment-work",level:2}];function d(e){const n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"usePaginationFragment is a hook provided by Relay, a JavaScriptframework for building data-driven React applications with GraphQL."}),"\n",(0,t.jsx)(n.p,{children:"This hook is specially designed for working with paginated data."}),"\n",(0,t.jsx)(n.h2,{id:"what-is-a-pagination-fragment",children:"What is a Pagination Fragment"}),"\n",(0,t.jsx)(n.p,{children:"A pagination fragment in Relay is a way to define a part of a GraphQL query that deals with a list of items taht can be paginated.\nThis means it you can fetch a subset of items initially and then load more items as needs(e.g., when a  user scroll to the bottom of a list)"}),"\n",(0,t.jsx)(n.h2,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"fragment"}),"\n",(0,t.jsx)(n.li,{children:"fragmentReference(fragmentKey)"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"data"}),"\n",(0,t.jsx)(n.li,{children:"isLoadingNext"}),"\n",(0,t.jsx)(n.li,{children:"isLoadingPrevious"}),"\n",(0,t.jsx)(n.li,{children:"hasNext"}),"\n",(0,t.jsx)(n.li,{children:"hasPrevious"}),"\n",(0,t.jsx)(n.li,{children:"loadNext"}),"\n",(0,t.jsx)(n.li,{children:"loadPrevious"}),"\n",(0,t.jsx)(n.li,{children:"refetch"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"to-make-usepaginationfragment-work",children:'To make "usePaginationFragment" work'}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fragment Definition: Start by defining a GraphQL fragment on the type that represents your list of items. This fragment includes fields you want to fetch for each item and a connection for pagination."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Hook Usage: Use the "usePaginationFragment" hook. This hook takes 2 arguments:'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The FraphQL fragment you define. (fragment)"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The data from the parent query or fragment that contains the connection(fragmentKey).\nThe fragment reference(fragmentKey) is an opaque Relay object that Relay uses to read the data for the fragment from the store; more specifically, it contains information about which particular object instance the data should be read from."}),"\n",(0,t.jsxs)(n.p,{children:["The type of the fragment reference can be imported from the generated Flow types, from the file ",(0,t.jsx)(n.code,{children:"fragment_name"}),".graphql.js , and can be used to declare the type of your Props. The name of the fragment reference type will be: ",(0,t.jsx)(n.code,{children:"fragment_name"}),"$key."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fetching More Data: The hook provides methods to fetch more items (e.g., loadNext, loadNext). When you call these methods, Relay will automatically make a GraphQL query to fetch the next or previous set of items."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Handling Data and State: The hook also provides the current data and state of the pagination(e.g., hasNext, isLoadingPrevious, isLoadingNext)"}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>s,a:()=>o});var t=a(7294);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);