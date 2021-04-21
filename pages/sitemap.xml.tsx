import React from "react";
import { posts } from "../data";
import type { PostInterface } from "../models/posts";
import { memoize } from "../utils";

//Change this to your site url.
const POST_URL_PREFIX = `${process.env.NEXT_PUBLIC_HOST}/post/`;

const createSitemap = memoize((posts: PostInterface[]) => {
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${posts
    .map(({ pid }) => `<url><loc>${POST_URL_PREFIX}${pid}</loc></url>`)
    .join("")}</urlset>`;
});

export async function getServerSideProps({ res }) {
  res.setHeader("Content-Type", "text/xml");
  res.write(createSitemap(posts.getAll()));
  res.end();

  //Don't forget this line, even if it seems useless.
  //Without it NextJs will be complaining about:
  //TypeError: Cannot convert undefined or null to object
  return { props: {} };
}

const Sitemap: React.FC = () => <></>;

export default Sitemap;
