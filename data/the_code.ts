import { a, code, createMessage, h3, p } from "../models/tree";
import { PostInterface } from "../models/posts";

const c = `import React, { useEffect, ReactNode, useState } from "react";
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
  const [data, replaceToken] = useState< Array<string | Token>>([])
  useEffect(() => {
      import(\`prismjs/components/prism-\${language}\`).then(() => {
        const tokens: Array<string | Token> = Prism.languages[ language ]
          ? Prism.tokenize(children, Prism.languages[ language ])
          : [];
        replaceToken(tokens)
      })
  }, [children]);

  return (
    <pre className={\`language-\${language}\`}>
      {data.length ? data.map(tokenToReactNode) : children}
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
  const [data, replaceToken] = useState<Array<string | Token>>([])
  useEffect(() => {
      //We need to add languages since, by default only markup, CSS, clike, and javascript are available.
      //I did not find a better way, like the one below, if you know - please submit an issue.
      import(\`prismjs/components/prism-\${language}\`).then(() => {
        //If language still not available skip tokenize part
        const tokens: Array<string | Token> = Prism.languages[ language ]
          ? Prism.tokenize(children, Prism.languages[ language ])
          : [];
        //Save the result to the state.
        replaceToken( tokens )
      }, [children])
  });
  //If the array with tokens is empty, print the code from props, otherwise render our beauty.
  return (
    <pre className={\`language-\${language}\`}>
      {data.length ? data.map(tokenToReactNode) : children}
    </pre>
  );
}
`;

const preview = p(
  "I needed to add code highlighting to posts (no one likes ugly code :)."
);

export const Typescript_Nextjs_Prismjs: PostInterface = {
  pid: "Typescript_Nextjs_Prismjs",
  header: "Typescript + Nextjs + Prismjs or the tale about code highlighting",
  time: 1593767695933,
  image: "/img/the_code.jpg",
  tags: ["blog", "nextjs", "prismjs", "ts", "react"],
  description: "How to make Prism JS work with typescript and NextJs",
  preview: [preview],
  full: [
    preview,
    p(
      "A quick googling showed that for my stack there is nothing ready. But everything revolves around Prismjs."
    ),
    createMessage({
      content: [
        p([
          "The guys from FormidableLabs with ",
          a({
            url: "https://github.com/FormidableLabs/prism-react-renderer",
            text: "prism-react-renderer",
          }),
          " came closest to what I need. But I want to figure it out myself.",
        ]),
      ],
    }),
    createMessage({
      header: "update #1",
      content: [
        p([
          "to reduce js bundle size you can use ",
          a({
            url: "https://github.com/mAAdhaTTah/babel-plugin-prismjs",
            text: "babel-plugin-prismjs",
          }),
          ". With this babel plugin you can bundle only languages you need.",
        ]),
        p([
          "You can find usage example ",
          a({
            url: "https://github.com/Lurk/barhamon/blob/f0cb751604c5fc90b2dd679a6b1f96705b1a2bc3/.babelrc",
            text: "here",
          }),
        ]),
      ],
    }),
    h3("If you didn’t come here for details:"),
    p("Step 1:"),
    code({
      content: "yarn add prismjs\nyarn add @types/prismjs -D",
      lang: "bash",
    }),
    p("Step # 2:"),
    p("in pages / _app.tsx add"),
    code({
      content: "import 'prismjs/themes/prism-tomorrow.css';",
      lang: "typescript",
    }),
    p("step # 3:"),
    p("Create the Code component"),
    code({ content: c, lang: "jsx" }),
    h3("And now the details:"),
    p(
      "In the first step, we add the prismjs library and types to it in the project."
    ),
    p(
      "In the second step, we add a theme. The prismjs library already has several themes and we use one of them. You can choose which one you like here: node_modules/prismjs/themes. Also, on the library website, you can choose from about a million more."
    ),
    p(
      "In the third step, we create the component itself, this time with comments."
    ),
    code({ content: codeWithComments, lang: "jsx" }),
  ],
  readTime: 5,
};
