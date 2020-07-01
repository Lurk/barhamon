import React from "react";
import { List } from "semantic-ui-react";

export const ThisBlogPreview: React.FC = () => {
  return (
    <>
      <p>This blog built with:</p>
      <List as="ul">
        <List.Item><a href="https://nextjs.org/">next.js</a></List.Item>
        <List.Item><a href="https://react.semantic-ui.com/">Semantic UI React</a></List.Item>
        <List.Item><a href="https://date-fns.org/">date-fns</a></List.Item>
      </List>
      <p>Deployed on <a href="https://vercel.com/">Vercel</a>.</p>
      <p>You can view source code on <a href="https://github.com/Lurk/barhamon">GitHub repo</a>. And if you find some
        bug, or typo, or error, or you know ways to do things better - please submit <a
          href="https://github.com/Lurk/barhamon/issues">an issue</a>.</p>
    </>
  )
}

export const ThisBlogFull: React.FC = () => {
  return (
    <>
      <p>This blog built with:</p>
      <List as="ul">
        <List.Item><a href="https://nextjs.org/">next.js</a></List.Item>
        <List.Item><a href="https://react.semantic-ui.com/">Semantic UI React</a></List.Item>
        <List.Item><a href="https://date-fns.org/">date-fns</a></List.Item>
      </List>
      <p>Deployed on <a href="https://vercel.com/">Vercel</a>.</p>
      <p>You can view source code on <a href="https://github.com/Lurk/barhamon">GitHub repo</a>. And if you find some
        bug, or typo, or error, or you know ways to do things better - please submit <a
          href="https://github.com/Lurk/barhamon/issues">an issue</a>.</p>
      <p>Roadmap:</p>
      <List ordered>
        <List.Item>Tags page</List.Item>
        <List.Item>Code formatting in posts</List.Item>
        <List.Item>Pagination</List.Item>
        <List.Item>Pages (bio, contacts, etc)</List.Item>
        <List.Item>Comments</List.Item>
        <List.Item>RSS feed</List.Item>
      </List>
    </>
  )
}
