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
      <p>You can find source code on <a href="https://github.com/Lurk/barhamon">GitHub repo</a>. If you find a bug, or
        typo, or error, or you know ways to do things better - please submit <a
          href="https://github.com/Lurk/barhamon/issues">an issue</a>.</p>
    </>
  )
}

export const ThisBlogFull: React.FC = () => {
  return (
    <>
      <ThisBlogPreview/>
      <p>Roadmap:</p>
      <List ordered>
        <List.Item><s>Tags page</s></List.Item>
        <List.Item>Code formatting in posts</List.Item>
        <List.Item>"Rad more" button in posts with preview</List.Item>
        <List.Item>Pagination</List.Item>
        <List.Item>Pages (bio, contacts, etc)</List.Item>
        <List.Item>Comments</List.Item>
        <List.Item>RSS feed</List.Item>
        <List.Item>Music</List.Item>
      </List>
    </>
  )
}
