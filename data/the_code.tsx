import React from "react";
import { Header, Segment } from "semantic-ui-react";
import { Code } from "../components/code";

const code = `import React, { useEffect, ReactNode, useState } from "react";
import Prism, { Token } from "prismjs";

export interface CodeProps {
  language: 'js' | 'css' | 'json' | 'jsx' | 'typescript' | 'yml' | 'Rust' | 'bash',
  children: string
}

function tokenToReactNode(token: Token | string, i: number): ReactNode {
  if (typeof token === "string") {
    return <span key={i}>{token}</span>
  } else if (typeof token.content === "string") {
    return (<span key={i} className={\`token \${token.type}\`}>{token.content}</span>)
  } else if (Array.isArray(token.content)) {
    return <span key={i} className={\`token \${token.type}\`}>{token.content.map(tokenToReactNode)}</span>
  } else {
    return (<span key={i} className={\`token \${token.type}\`}>{tokenToReactNode(token.content, 0)}</span>)
  }
}

export const Code: React.FC<CodeProps> = ({ language, children }) => {
  const [data, replaceToken] = useState<{ tokens: Array<string | Token>, code: string }>({ tokens: [], code: '' })
  useEffect(() => {
    if (data.code !== children) {
      import(\`prismjs/components/prism-\${language}\`).then(() => {
        const tokens: Array<string | Token> = Prism.languages[ language ] ? Prism.tokenize(children, Prism.languages[ language ]) : [];
        replaceToken({ tokens, code: children })
      })
    }
  });

  return (
    <pre className={\`language-\${language}\`}>
      {data.tokens.length ? data.tokens.map(tokenToReactNode) : children}
    </pre>
  );
}
`;
const codeWithComments = `import React, { useEffect, ReactNode, useState } from "react";
import Prism, { Token } from "prismjs";

export interface CodeProps {
  //Prismjs supports a lot more languages. The entire list can be found on the site,
  //this is a list of those languages that will be useful to me.
  language: 'js' | 'css' | 'json' | 'jsx' | 'typescript' | 'yml' | 'Rust' | 'bash',
  children: string
}

//We will use the tokenize method (https://prismjs.com/docs/Prism.html#.tokenize).
//Because other API methods directly manipulate DOM, and that’s not what we want.
//tokenToReactNode is our function that converts the result of executing tokenize into react components.
function tokenToReactNode(token: Token | string, i: number): ReactNode {
  if (typeof token === "string") {
    return <span key={i}>{token}</span>
  } else if (typeof token.content === "string") {
    return (<span key={i} className={\`token \${token.type}\`}>{token.content}</span>)
  } else if (Array.isArray(token.content)) {
    return <span key={i} className={\`token \${token.type}\`}>{token.content.map(tokenToReactNode)}</span>
  } else {
    return (<span key={i} className={\`token \${token.type}\`}>{tokenToReactNode(token.content, 0)}</span>)
  }
}

export const Code: React.FC<CodeProps> = ({ language, children }) => {
  //In the state, we store the code and tokens for the code.
  const [data, replaceToken] = useState<{ tokens: Array<string | Token>, code: string }>({ tokens: [], code: '' })
  useEffect(() => {
    //If we have already processed the code that came to us in props, we do nothing.
    if (data.code !== children) {
      //We need to add languages since, by default only markup, CSS, clike, and javascript are available.
      //I did not find a better way, like the one below, if you know - please write an issue.
      import(\`prismjs/components/prism-\${language}\`).then(() => {
        //If language still not available skip tokenize part
        const tokens: Array<string | Token> = Prism.languages[ language ] ? Prism.tokenize(children, Prism.languages[ language ]) : [];
        //Save the result to the state.
        replaceToken({ tokens, code: children })
      })
    }
  });
  //If the array with tokens is empty, print the code from props, otherwise render our beauty.
  return (
    <pre className={\`language-\${language}\`}>
      {data.tokens.length ? data.tokens.map(tokenToReactNode) : children}
    </pre>
  );
}
`;

export const TheCodePreview: React.FC = () => {
  return (
    <>
      <p>I needed to add code highlighting to posts (no one likes ugly code :).</p>
      <p>A quick googling showed that for my stack there is nothing ready. But everything revolves around Prismjs.</p>
    </>
  )
}

export const TheCodeFull: React.FC = () => {
  return (
    <>
      <TheCodePreview/>
      <Segment secondary>
        The guys from FormidableLabs with <a href="https://github.com/FormidableLabs/prism-react-renderer">prism-react-renderer</a> came closest to what I need. But I want to figure it out myself.
      </Segment>
      <Header as="h4">If you didn’t come here for details:</Header>
      <br/>
      <p>Step 1:</p>
      <Code language="bash">
        {`yarn add prismjs
yarn add @ types / prismjs -D`}
      </Code>
      <p>Step # 2:</p>
      <p>in pages / _app.tsx add</p>
      <Code language="typescript">
        {`import 'prismjs/themes/prism-tomorrow.css';`}
      </Code>
      <p>step # 3:</p>
      <p>Сreate the Code component</p>
      <Code language="typescript">
        {code}
      </Code>
      <Header as="h4">And now the details:</Header>
      <p>In the first step, we add the prismjs library and types to it in the project.</p>
      <p>In the second step, we add a theme. The prismjs library already has several themes and we use one of them. You can
      choose which one you like here: node_modules/prismjs/themes. Also, on the library website, you can choose from
      about a million more.</p>
      <p>In the third step, we create the component itself, this time with comments.</p>
      <Code language="typescript">{codeWithComments}</Code>
      <p>I hope you found here what you were looking for.</p>
      <p>As always you can find all source code on the <a href="https://github.com/Lurk/barhamon">GitHub repo</a></p>
    </>
  )
}
