import { a, createMessage, p, code } from "../models/tree";
import { PostInterface } from "../models/posts";

const c = `// /pages/sitemap.xml.tsx
import { PostInterface, posts } from "../data/posts";
import React from "react";

//Change this to your site url.
const POST_URL_PREFIX = 'https://barhamon.com/post/';

function createSitemap(posts: PostInterface[]) {
  return \`<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    \${posts.map(({ pid }) => \`<url><loc>\${POST_URL_PREFIX}\${pid}</loc></url>\`).join('')}
    </urlset>\`;
}

export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'text/xml');
  res.write(createSitemap(Object.values(posts)));
  res.end();

  //Don't forget this line, even if it seems useless.
  //Without it NextJs will be complaining about:
  //TypeError: Cannot convert undefined or null to object
  return { props: {} };
}

const Sitemap: React.FC = () => (<></>)

export default Sitemap;
`;

export const How_to_serve_sitemap_xml_with_Next_JS: PostInterface = {
  pid: "How_to_serve_sitemap_xml_with_Next_JS",
  header: "How to serve sitemap.xml with Next.JS",
  time: 1594293850344,
  image:
    "https://res.cloudinary.com/barhamon/image/upload/c_scale,h_800,q_auto/v1634066156/header/sitemap.jpg",
  tags: ["blog", "nextjs", "SEO", "ts", "react"],
  description:
    "Quick guide with code and explanation on sitemap.xml with Next.JS",
  preview: [
    p([
      "To not only increase entropy but also be useful, this blog should be indexed by search engines.",
    ]),
  ],
  full: [
    p([
      "To not only increase entropy but also be useful, this blog should be indexed by search engines. And to make it easier for search engines to index, they came up with robots.txt and sitemap.",
    ]),
    createMessage({
      content: [
        p([
          "sitemap.xml - a list of pages that can be downloaded. Optionally you can specify how often the page is refreshed and when was the last time, but as far as I know, the optional parameters are ignored. More details can be found ",
          a({ url: "https://www.sitemaps.org/", text: "here" }),
          ".",
        ]),
        p([
          "robots.txt - instructions for robots. In our case, we simply indicate the path from where to get the sitemap. More details can be found ",
          a({ url: "https://www.robotstxt.org/", text: "here" }),
          ".",
        ]),
      ],
    }),
    p([
      "For our site to produce sitemap.xml, create a sitemap.xml.tsx file in the pages folder:",
    ]),
    code({ content: c, lang: "typescript" }),
    p(["In the public folder, create the robots.txt file:"]),
    code({
      content: "User-agent: *\nSitemap: https://barhamon.com/sitemap.xml",
      lang: "bash",
    }),
    p([
      "As usual, all the code on the ",
      a({ url: "https://github.com/Lurk/barhamon", text: "GitHub" }),
      ". If you find a mistake, or you know how to do it better, please submit an issue.",
    ]),
  ],
  readTime: 1,
};
