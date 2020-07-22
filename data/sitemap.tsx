import React from "react";
import { Code } from "../components/code";
import { Segment } from "semantic-ui-react";

export const SitemapPreview: React.FC = () => {
  return (
    <>
      <p>To not only increase entropy but also be useful, this blog should be indexed by search engines. And to make it
        easier for search engines to index, they came up with robots.txt and sitemap.</p>
    </>
  )
}


const code = `// /pages/sitemap.xml.tsx
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
`


export const SitemapFull: React.FC = () => {
  return (
    <>
      <SitemapPreview/>
      <Segment secondary>
        <p>sitemap.xml - a list of pages that can be downloaded. Optionally you can specify how often the page is
          refreshed
          and when was the last time, but as far as I know, the optional parameters are ignored. More details can be
          found <a href="https://www.sitemaps.org/">here</a>.</p>
        <p>robots.txt - instructions for robots. In our case, we simply indicate the path from where to get the sitemap.
          More details can be found <a href="https://www.robotstxt.org/">here</a>.</p>
      </Segment>
      <p>For our site to produce sitemap.xml, create a sitemap.xml.tsx file in the pages folder:</p>
      <Code language='typescript'>{code}</Code>

      <p>In the public folder, create the robots.txt file:</p>
      <Code language="bash">
        {`User-agent: *
Sitemap: https://barhamon.com/sitemap.xml
`}
      </Code>

      <p>As usual, all the code on the <a href="https://github.com/Lurk/barhamon">GitHub</a>. If you find a mistake, or
        you know how to do it better, please submit an
        issue.</p>
    </>
  )
}

export const How_to_serve_sitemap_xml_with_Next_JS = {
  pid: "How_to_serve_sitemap_xml_with_Next_JS",
  header: "How to serve sitemap.xml with Next.JS",
  time: 1594293850344,
  image: '/img/sitemap.jpg',
  tags: ['blog', 'nextjs', 'SEO', 'typescript'],
  description: "Quick guide with code and explanation on sitemap.xml with Next.JS",
  Preview: SitemapPreview,
  Full: SitemapFull,
  readTime: 1
};
