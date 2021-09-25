import { a, li, p, s, ul } from "../models/tree";
import { PostInterface } from "../models/posts";

const preview = [
  p(["This blog built with:"]),
  ul({
    content: [
      li([a({ url: "https://nextjs.org/", text: "next.js" })]),
      li([
        a({ url: "https://react.semantic-ui.com/", text: "Semantic UI React" }),
      ]),
      li([a({ url: "https://date-fns.org/", text: "date-fns" })]),
      li([a({ url: "https://prismjs.com/index.html", text: "Prism JS" })]),
      li([a({ url: "https://disqus.com/", text: "Disqus" })]),
    ],
  }),
];

export const this_blog: PostInterface = {
  pid: "this_blog",
  header: "This blog",
  time: 1593599633253,
  image: "/img/this_blog.jpg",
  tags: ["blog", "roadmap"],
  description: "",
  preview: preview,
  full: [
    ...preview,
    p(["Deployed on ", a({ url: "https://vercel.com/", text: "Vercel" }), "."]),
    p([
      "You can find source code on ",
      a({ url: "https://github.com/Lurk/barhamon", text: "GitHub repo" }),
      ". If you find a bug, or typo, or error, or you know ways to do things better - please submit ",
      a({ url: "https://github.com/Lurk/barhamon/issues", text: "an issue" }),
      ".",
    ]),
    p(["Roadmap:"]),
    ul({
      type: "number",
      content: [
        li([s("Tags page")]),
        li([s("Code formatting in posts")]),
        li([s('"Rad more" button in posts with preview')]),
        li([s("Meta tags")]),
        li([s("Pagination")]),
        li([s("Comments")]),
        li(["Pages (bio, contacts, etc)"]),
        li(["RSS feed"]),
        li(["Music"]),
      ],
    }),
  ],
};
