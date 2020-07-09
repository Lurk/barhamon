import React from "react";
import { NewHopePreview } from "./new_hope";
import { ThisBlogFull, ThisBlogPreview } from "./this_blog";
import { WhyFull, WhyPreview } from "./why";
import { TheCodeFull, TheCodePreview } from "./the_code";
import {
  TheRainTheRiverAndTheSunsetFull,
  TheRainTheRiverAndTheSunsetPreview
} from "./the_rain_the_river_and_the_sunset";
import { SitemapFull, SitemapPreview } from "./sitemap";

export interface PostInterface {
  pid: string,
  header: string,
  time: number,
  description: string,
  Preview: React.FC
  Full: React.FC
  image: string,
  readTime?: number,
  tags?: string[]
}

type Dict<T> = {
  [ key: string ]: T | undefined
}

export const posts: Dict<PostInterface> = {
  'How_to_serve_sitemap_xml_with_Next_JS': {
    pid: "How_to_serve_sitemap_xml_with_Next_JS",
    header: "How to serve sitemap.xml with Next.JS",
    time: 1594293850344,
    image: '/img/sitemap.jpg',
    tags: ['blog', 'nextjs', 'SEO', 'typescript'],
    description: "To not only increase entropy but also be useful, this blog should be indexed by search engines. And to make it easier for search engines to index, they came up with robots.txt and sitemap",
    Preview: SitemapPreview,
    Full: SitemapFull,
    readTime: 1
  },
  'the_rain_the_river_and_the_sunset': {
    pid: "the_rain_the_river_and_the_sunset",
    header: "The rain, the river and the sunset",
    time: 1594022460268,
    image: '/img/the_rain_the_river_and_the_sunset.jpg',
    tags: ['camping'],
    description: "one night on the river shore",
    Preview: TheRainTheRiverAndTheSunsetPreview,
    Full: TheRainTheRiverAndTheSunsetFull,
    readTime: 1
  },
  'Typescript_Nextjs_Prismjs': {
    pid: "Typescript_Nextjs_Prismjs",
    header: "Typescript + Nextjs + Prismjs or the tale about code highlighting",
    time: 1593767695933,
    image: '/img/the_code.jpg',
    tags: ['blog', 'nextjs', 'prismjs', 'typescript'],
    description: "How to make Prism JS work with typescript and NextJs",
    Preview: TheCodePreview,
    Full: TheCodeFull,
    readTime: 5
  },
  why: {
    pid: "why",
    header: "Why?",
    time: 1593701715703,
    image: '/img/why.jpg',
    tags: ['blog'],
    description: "",
    Preview: WhyPreview,
    Full: WhyFull
  },
  this_blog: {
    pid: "this_blog",
    header: 'This blog',
    time: 1593599633253,
    image: "/img/this_blog.jpg",
    tags: ['blog', 'roadmap'],
    description: "",
    Preview: ThisBlogPreview,
    Full: ThisBlogFull
  },
  new_hope: {
    pid: "new_hope",
    header: 'New Hope ;)',
    time: 1593538782006,
    image: "/img/avatar.jpg",
    description: "",
    tags: ['bio'],
    Preview: NewHopePreview,
    Full: NewHopePreview
  }
}
