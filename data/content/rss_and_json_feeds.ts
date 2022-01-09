import { a, li, p, ul } from "../../models/tree";
import { PostInterface } from "../../models/posts";

const preview = [p(["Hey!"]), p(["You can now subscribe to this blog :)"])];

export const rss_and_json_feeds_for_next_js_site: PostInterface = {
  pid: "RSS_and_JSON_feeds_for_Next_JS_site",
  header: "RSS and JSON feeds for Next.JS site",
  time: 1609948460248,
  image:
    "https://res.cloudinary.com/barhamon/image/upload/c_scale,q_auto,w_650/v1609947024/header/RSS_and_JSON_feeds_for_Next_JS_site_d4a1jo.jpg",
  tags: ["blog", "nextjs", "typescript"],
  description: "How to add RSS and JSON feeds to your Next.JS site.",
  preview: preview,
  full: [
    ...preview,
    p([
      "Yeah, I planned to add this feature a long time ago, and finally, today, I got a couple of hours to do it. After some googling, I found ",
      a({
        text: "JSON feed",
        url: "https://jsonfeed.org/",
      }),
      '. I do not want to start the "FINALLY! THE RSS KILLER" thread, but I am happy because I do not like XML. It is wordy and not readable for me.',
    ]),
    p([
      "Newerless RSS feeds are widely supported, so this blog should provide a new and shiny JSON feed and an old and dusty RSS.",
    ]),
    p([
      "If you read the ",
      a({
        text: '"How to serve sitemap.xml with Next.JS"',
        url: "/post/[pid]",
        as: "/post/How_to_serve_sitemap_xml_with_Next_JS",
      }),
      " post, then it should be familiar to you. Here are links to the source code of ",
      a({
        text: "feed.json.tsx",
        url: "https://github.com/Lurk/barhamon/blob/9f87a27d4324f9d6f8e284a43ce8c1de5eb3951d/pages/feed.json.tsx",
      }),
      " and ",
      a({
        text: "feed.xml.tsx.",
        url: "https://github.com/Lurk/barhamon/blob/9f87a27d4324f9d6f8e284a43ce8c1de5eb3951d/pages/feed.xml.tsx",
      }),
    ]),
    p([
      "One significant difference is memoization. Since posts are immutable, we can remember the result of feed generation. I wrote a simple helper function for that. It is not a general-purpose memoization function because it will only work with a one-argument function and make only shallow comparisons. This is intentional and done for simplicity's sake. You can find the source code here ",
      a({
        text: "utils/index.ts",
        url: "https://github.com/Lurk/barhamon/blob/67ef55743382bdc152a901211434fe0895b6cff0/utils/index.ts",
      }),
      ".",
    ]),
    p(["Here are the links for your feed reader:"]),
    ul({
      content: [
        li([a({ text: "JSON Feed", url: "https://barhamon.com/feed.json" })]),
        li([a({ text: "RSS Feed", url: "https://barhamon.com/feed.xml" })]),
      ],
      type: "dot",
    }),
    p(["Stay tuned!"]),
  ],
};
