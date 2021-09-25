import { a, code, p } from "../models/tree";
import { PostInterface } from "../models/posts";

const c = `import { DiscussionEmbed } from "disqus-react"

<DiscussionEmbed
  shortname={"remember that short name from second step?"}
  config={{
    url: "this page url",
    identifier: "unique identifier of this page",
    title: "this page title"
  }}
/>
`;

const preview = p([
  "In this post, you will learn how to add comments to your Next.js project. And it is easy with Disqus.",
]);

export const comments: PostInterface = {
  pid: "comments",
  header: "Disqus and Next.js",
  time: 1606511156981,
  image:
    "https://res.cloudinary.com/barhamon/image/upload/c_scale,q_auto,w_600/v1609664771/header/comments_ertdr5.jpg",
  tags: ["blog", "nextjs", "comments", "disqus", "ts"],
  description:
    "You will learn how to add comments to your Next.js project. And it is easy with Disqus.",
  preview: [preview],
  full: [
    preview,
    p([
      "First, create an account on ",
      a({ url: "https://disqus.com/", text: "Disqus" }),
      ".",
    ]),
    p([
      "Second, go to the ",
      a({ url: "https://disqus.com/profile/signup/intent/" }),
      ' and press "I want to install Disqus on my site", fill-up the form, and remember the short name (it will be useful later).',
    ]),
    p([
      "Third, install the ",
      a({
        url: "https://www.npmjs.com/package/disqus-react",
        text: "disqus-react",
      }),
      " package from npm. If you are a Typescript user, this package already has typings.",
    ]),
    code({ content: "npm install disqus-react", lang: "bash" }),
    p(["And use it like this:"]),
    code({ content: c, lang: "jsx" }),
    p([
      "You can find a usage example here: ",
      a({
        url: "https://github.com/Lurk/barhamon/blob/master/components/comments.tsx",
        text: "comments.tsx",
      }),
    ]),
  ],
};
