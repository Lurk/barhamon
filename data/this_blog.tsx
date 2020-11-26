import React from "react";
import { List } from "semantic-ui-react";

const ThisBlogPreview: React.FC = () => {
  return (
    <>
      <p>This blog built with:</p>
      <List as="ul">
        <List.Item><a href="https://nextjs.org/">next.js</a></List.Item>
        <List.Item><a href="https://react.semantic-ui.com/">Semantic UI React</a></List.Item>
        <List.Item><a href="https://date-fns.org/">date-fns</a></List.Item>
        <List.Item><a href="https://prismjs.com/index.html">Prism JS</a></List.Item>
      </List>
      <p>Deployed on <a href="https://vercel.com/">Vercel</a>.</p>
      <p>You can find source code on <a href="https://github.com/Lurk/barhamon">GitHub repo</a>. If you find a bug, or
        typo, or error, or you know ways to do things better - please submit <a
          href="https://github.com/Lurk/barhamon/issues">an issue</a>.</p>
    </>
  )
}

const ThisBlogFull: React.FC = () => {
  return (
    <>
      <ThisBlogPreview/>
      <p>Roadmap:</p>
      <List ordered>
        <List.Item><s>Tags page</s></List.Item>
        <List.Item><s>Code formatting in posts</s></List.Item>
        <List.Item><s>"Rad more" button in posts with preview</s></List.Item>
        <List.Item><s>Meta tags</s></List.Item>
        <List.Item><s>Pagination</s></List.Item>
        <List.Item><s>Comments</s></List.Item>
        <List.Item>Pages (bio, contacts, etc)</List.Item>
        <List.Item>RSS feed</List.Item>
        <List.Item>Music</List.Item>
      </List>
    </>
  )
}

export const this_blog = {
  pid: "this_blog",
  header: 'This blog',
  time: 1593599633253,
  image: "/img/this_blog.jpg",
  tags: ['blog', 'roadmap'],
  description: "",
  Preview: ThisBlogPreview,
  Full: ThisBlogFull
};
