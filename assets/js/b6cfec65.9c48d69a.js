"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5923],{7310:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=t(5893),s=t(1151);const r={sidebar_position:1},c=void 0,i={id:"react-notes/react-hooks",title:"react-hooks",description:"useCallback Hook",source:"@site/docs/react-notes/react-hooks.md",sourceDirName:"react-notes",slug:"/react-notes/react-hooks",permalink:"/docs/react-notes/react-hooks",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/react-notes/react-hooks.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Translate your site",permalink:"/docs/tutorial-extras/translate-your-site"}},a={},l=[{value:"useCallback Hook",id:"usecallback-hook",level:2},{value:"Usage",id:"usage",level:3},{value:"1. Skipping re-rendering of components",id:"1-skipping-re-rendering-of-components",level:4},{value:"useContext Hook",id:"usecontext-hook",level:2}];function d(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usecallback-hook",children:"useCallback Hook"}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.h4,{id:"1-skipping-re-rendering-of-components",children:"1. Skipping re-rendering of components"}),"\n",(0,o.jsx)(n.p,{children:"Explain it with more context."}),"\n",(0,o.jsx)(n.p,{children:"In React, components can re-render. Re-rendering means the component's UI is updated based on changes on state or props. When a component re-renders, its function, including event handlers and other callbacks, are recreated."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"// ParentComponent.jsx\nimport React, { useState, useCallback } from 'react';\nimport ChildComponent from './ChildComponent';\n\nfunction ParentComponent() {\n  const [count, setCount] = useState(0);\n\n  const onClickHandler = useCallback(() => {\n    console.log('Button Clicked!', count);\n  }, [count]);\n\n  return (\n    <div>\n      <ChildComponent onClick={onClickHandler} />\n      <button onClick={() => setCount(count + 1)}>Increment Count</button>\n    </div>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"In the example:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"onClickHandler"})," function in the ",(0,o.jsx)(n.code,{children:"ParentComponent"})," is created using ",(0,o.jsx)(n.code,{children:"useCallback"}),". It takes into consideration the ",(0,o.jsx)(n.code,{children:"count"})," state as a dependency."]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"ChildComponent"})," receives this memorized function (",(0,o.jsx)(n.code,{children:"onClickHandler"}),") as a prop."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:'Now we can understand the behavior "between re-renders":'}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["if ",(0,o.jsx)(n.code,{children:"onClickHandler"})," was not memorized with ",(0,o.jsx)(n.code,{children:"useCallback"}),", every time ",(0,o.jsx)(n.code,{children:"ParentComponent"})," re-renders, a new function would be created, and the ",(0,o.jsx)(n.code,{children:"onClick"})," prop passed to ",(0,o.jsx)(n.code,{children:"ChildComponent"})," would change."]}),"\n",(0,o.jsxs)(n.li,{children:["By using ",(0,o.jsx)(n.code,{children:"useCallback"})," with ",(0,o.jsx)(n.code,{children:"[count]"})," as dependencies, React ensures that the ",(0,o.jsx)(n.code,{children:"onClickHandler"})," function only changes when ",(0,o.jsx)(n.code,{children:"count"})," changes. This is beneficial because, even if ",(0,o.jsx)(n.code,{children:"ParentComponent"})," re-renders for other reasons(like updating unrelated state), the ",(0,o.jsx)(n.code,{children:"onClick"})," prop passed to ",(0,o.jsx)(n.code,{children:"ChildComponent"})," won't change unless ",(0,o.jsx)(n.code,{children:"count"})," changes."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"This stability in function references can be important in scenarios where you want to optimize performance, especially in the context of avoiding unnecessary re-renders in child components."}),"\n",(0,o.jsx)(n.h2,{id:"usecontext-hook",children:"useContext Hook"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"useContent"})," hook provides a way to pass data through the component tree without having to pass props down manually at every level. This can be especially for sharing state or functionality between components that are deeply nested in the component tree."]}),"\n",(0,o.jsx)(n.p,{children:"key concepts:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Context:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Context is a way to share values like themes, authentication status, or any other global state between components without explicitly passing them through props."}),"\n",(0,o.jsxs)(n.li,{children:["Context is created using ",(0,o.jsx)(n.code,{children:"React.createContext()"}),", which returns an object with a ",(0,o.jsx)(n.code,{children:" Provider"})," and a ",(0,o.jsx)(n.code,{children:"Consumer"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Provider"}),":","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"Provider"}),' component is used to wrap a part of the component tree and "provide" the context value to all its descendants.']}),"\n",(0,o.jsxs)(n.li,{children:["It takes a ",(0,o.jsx)(n.code,{children:"value"})," prop, which is the value that eill be shared with components beneath it."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Consumer"}),":","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Before the introduction of hooks, we would use the Consumer component to access the context within a class component. It uses a render prop pattern."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Now, let's introduce the ",(0,o.jsx)(n.code,{children:"useContext"})," hook:\n**",(0,o.jsx)(n.em,{children:"useContext Hook:"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"With the introduction of hooks, specifically useContext, accessing the context value has become more straightforward."}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"useContext"})," is a hook that takes a context object (the result of ",(0,o.jsx)(n.code,{children:"React.createContext())"})," as its argument and returns the current context value for that context."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'// 1. Create a context\nconst MyContext = React.createContext();\n\n// 2. Create a component that provides the context value\nconst MyProvider = ({ children }) => {\n  const sharedValue = "Hello from Context!";\n  return <MyContext.Provider value={sharedValue}>{children}</MyContext.Provider>;\n};\n\n// 3. Use the context value in a child component with useContext\nconst MyComponent = () => {\n  const contextValue = useContext(MyContext);\n  return <p>{contextValue}</p>;\n};\n\n// 4. Wrap the component tree with the provider\nconst App = () => {\n  return (\n    <MyProvider>\n      <MyComponent />\n    </MyProvider>\n  );\n};\n\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>c});var o=t(7294);const s={},r=o.createContext(s);function c(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);