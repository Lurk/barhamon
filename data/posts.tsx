import React, { ReactNode } from "react";
import { NewHopePreview } from "./new_hope";
import { ThisBlogFull, ThisBlogPreview } from "./this_blog";
import { WhyFull, WhyPreview } from "./why";
import { TheCodeFull, TheCodePreview } from "./the_code";

export interface PostInterface {
  pid: string,
  header: string,
  time: number,
  preview: ReactNode
  full: ReactNode
  image?: string,
  readTime?: number,
  tags?: string[]
}

type Dict<T> = {
  [ key: string ]: T | undefined
}

export const posts: Dict<PostInterface> = {
  'Typescript_Nextjs_Prismjs': {
    pid: "Typescript_Nextjs_Prismjs",
    header: "Typescript + Nextjs + Prismjs or the tale about code highlighting",
    time: 1593767695933,
    image: '/img/the_code.jpg',
    tags: ['blog', 'nextjs', 'prismjs', 'typescript'],
    preview: <TheCodePreview/>,
    full: <TheCodeFull/>,
    readTime: 5
  },
  why: {
    pid: "why",
    header: "Why?",
    time: 1593701715703,
    image: '/img/why.jpg',
    tags: ['blog'],
    preview: <WhyPreview/>,
    full: <WhyFull/>
  },
  this_blog: {
    pid: "this_blog",
    header: 'This blog',
    time: 1593599633253,
    image: "/img/this_blog.jpg",
    tags: ['blog', 'development', 'roadmap'],
    preview: <ThisBlogPreview/>,
    full: <ThisBlogFull/>
  },
  new_hope: {
    pid: "new_hope",
    header: 'New Hope ;)',
    time: 1593538782006,
    image: "/img/avatar.jpg",
    tags: ['bio'],
    preview: <NewHopePreview/>,
    full: <NewHopePreview/>
  }
}
