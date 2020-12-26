import React from "react";
import { posts } from "../data";
import { Layout } from "../components/layout";
import { PostList } from "../components/post_list";

const limit = parseInt(process.env.NEXT_PUBLIC_POSTS_PER_PAGE);

export default function Home({ page }) {
  return (
    <Layout>
      <PostList page={page} url={p => `/posts/${p}`}/>
    </Layout>
  )
}

Home.getInitialProps = async () => {
  return { page: posts.getPage({ limit, offset: 0 }) }
}
