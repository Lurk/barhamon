import React from "react";
import formatRFC3339 from 'date-fns/formatRFC3339'
import { posts } from "../data";
import type { PostInterface } from "../models/posts";
import { memoize } from "../utils";

const POST_URL_PREFIX = `${process.env.NEXT_PUBLIC_HOST}/post/`;

const createJsonFeed = memoize((posts: PostInterface[]) => {
  return JSON.stringify({
    "version": "https://jsonfeed.org/version/1.1",
    "title": process.env.NEXT_PUBLIC_TITLE,
    "home_page_url": process.env.NEXT_PUBLIC_HOST,
    "feed_url": `${process.env.NEXT_PUBLIC_HOST}/feed.json`,
    "icon": `${process.env.NEXT_PUBLIC_HOST}/android-chrome-512x512.png`,
    "favicon": `${process.env.NEXT_PUBLIC_HOST}/mstile-150x150.png`,
    "language": "en",
    "items": posts.map((post) => (
      {
        "id": post.pid,
        "title": post.header,
        "summary": post.description,
        "url": `${POST_URL_PREFIX}${post.pid}`,
        "image": post.image.startsWith('https://') ? post.image : `${process.env.NEXT_PUBLIC_HOST}${post.image}`,
        "date_published": formatRFC3339(post.time),
        "tags": post.tags
      }
    ))
  })

});

export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'application/feed+json');
  res.write(createJsonFeed(posts.getAll()));
  res.end();

  //Don't forget this line, even if it seems useless.
  //Without it NextJs will be complaining about:
  //TypeError: Cannot convert undefined or null to object
  return { props: {} };
}

const Sitemap: React.FC = () => (<></>)

export default Sitemap;
