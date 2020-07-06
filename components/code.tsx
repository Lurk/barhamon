import React, { useEffect, ReactNode, useState } from "react";
import Prism, { Token } from "prismjs";
import style from './code.module.css';

export interface CodeProps {
  language: 'js' | 'css' | 'json' | 'jsx' | 'typescript' | 'yml' | 'Rust' | 'bash',
  children: string
}

function tokenToReactNode(token: Token | string, i: number): ReactNode {
  if (typeof token === "string") {
    return <span key={i}>{token}</span>
  } else if (typeof token.content === "string") {
    return (<span key={i} className={`token ${token.type}`}>{token.content}</span>)
  } else if (Array.isArray(token.content)) {
    return <span key={i} className={`token ${token.type}`}>{token.content.map(tokenToReactNode)}</span>
  } else {
    return (<span key={i} className={`token ${token.type}`}>{tokenToReactNode(token.content, 0)}</span>)
  }
}

export const Code: React.FC<CodeProps> = ({ language, children }) => {
  const [data, replaceToken] = useState<{ tokens: Array<string | Token>, code: string }>({ tokens: [], code: '' })
  useEffect(() => {
    if (data.code !== children) {
      import(`prismjs/components/prism-${language}`).then(() => {
        const tokens: Array<string | Token> = Prism.languages[ language ] ? Prism.tokenize(children, Prism.languages[ language ]) : [];
        replaceToken({ tokens, code: children })
      })
    }
  });

  return (
    <pre className={`language-${language} ${style.code}`}>
      {data.tokens.length ? data.tokens.map(tokenToReactNode) : children}
    </pre>
  );
}
