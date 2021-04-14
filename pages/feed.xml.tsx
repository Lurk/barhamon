import React from "react";
import formatRFC7231 from "date-fns/formatRFC3339";
import { posts } from "../data";
import type { PostInterface } from "../models/posts";
import { memoize } from "../utils";

const POST_URL_PREFIX = `${process.env.NEXT_PUBLIC_HOST}/post/`;

const createJsonFeed = memoize((posts: PostInterface[]) => {
  return `<rss version="2.0"><channel><title>${
    process.env.NEXT_PUBLIC_TITLE
  }</title><link>${
    process.env.NEXT_PUBLIC_HOST
  }</link><language>en-us</language><image><url>${
    process.env.NEXT_PUBLIC_HOST
  }/mstile-150x150.png</url><title>${
    process.env.NEXT_PUBLIC_TITLE
  }</title><link>${process.env.NEXT_PUBLIC_HOST}</link></image><description>${
    process.env.NEXT_PUBLIC_TITLE
  } blog</description>${posts.map(renderPost).join("")}</channel></rss>`;
});

function renderPost(post: PostInterface) {
  return `<item><title>${post.header}</title><link>${POST_URL_PREFIX}${
    post.pid
  }</link><description>${
    post.description
  }</description><pubDate>${formatRFC7231(
    post.time
  )}</pubDate><guid isPermaLink="true">${POST_URL_PREFIX}${
    post.pid
  }</guid></item>`;
}

export async function getServerSideProps({ res }) {
  res.setHeader("Content-Type", "application/rss+xml");
  res.write(createJsonFeed(posts.getAll()));
  res.end();

  //Don't forget this line, even if it seems useless.
  //Without it NextJs will be complaining about:
  //TypeError: Cannot convert undefined or null to object
  return { props: {} };
}

const Sitemap: React.FC = () => <></>;

export default Sitemap;
