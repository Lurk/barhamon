import React from "react";
import { posts } from "../data";
import { Layout } from "../components/layout";
import { PostList } from "../components/post_list";

const limit = parseInt(process.env.NEXT_PUBLIC_POSTS_PER_PAGE);

export default function Home() {
  const filtered = posts.getPage({ limit, offset: 0 })
  return (
    <Layout>
      <PostList page={filtered} url={p => `/posts/${p}`}/>
    </Layout>
  )
}
