import React from "react";
import { Code } from "../components/code";

const code = `import { DiscussionEmbed } from "disqus-react"

<DiscussionEmbed
  shortname={"remember that short name from second step?"}
  config={{
    url: "url for this page",
    identifier: "unique identifier of this page",
    title: "title for this page"
  }}
/>
`;


const CommentsPreview: React.FC = () => {
  return (
      <p>In this post, you will learn how to add comments to your Next.js project. And it is easy with Disqus. </p>
  )
}

const CommentsFull: React.FC = () => {
  return (
    <>
      <CommentsPreview/>
      <p>First, create an account on <a href="https://disqus.com/">Disqus</a> .</p>

      <p>Second, go to the <a href="https://disqus.com/profile/signup/intent/">https://disqus.com/profile/signup/intent/</a> and press "I want to install Disqus on my site", fill-up the form, and remember the short name (it will be useful later).</p>

      <p>Third, install the <a href="https://www.npmjs.com/package/disqus-react">disqus-react</a> package from npm.  If you are a Typescript user, this package already has typings.</p>
      <Code language={"bash"}>{`npm install disqus-react`}</Code>
      <p>And use it like this:</p>
      <Code language="jsx">
        {code}
      </Code>
      <p>You can find a usage example here: <a href="https://github.com/Lurk/barhamon/blob/master/components/comments.tsx">comments.tsx</a> </p>
    </>
  )
}

export const comments = {
  pid: "comments",
  header: "Disqus and Next.js",
  time: 1606511156981,
  image: '/img/comments.jpg',
  tags: ['blog', 'nextjs', 'comments', 'disqus'],
  description: "You will learn how to add comments to your Next.js project. And it is easy with Disqus.",
  Preview: CommentsPreview,
  Full: CommentsFull,
};
