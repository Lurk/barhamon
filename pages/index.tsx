import React from "react";
import { posts } from "../data";
import { Layout } from "../components/layout";
import { PostList } from "../components/post_list";
import { GetStaticProps } from "next";
import { PageResult } from "../models/posts";
import { Params } from "next/dist/next-server/server/router";

const limit = parseInt(process.env.NEXT_PUBLIC_POSTS_PER_PAGE);

export default function Home({ page }) {
  return (
    <Layout>
      <PostList page={page} url={(p) => `/posts/${p}`} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<
  { page: PageResult },
  Params
> = async () => {
  return {
    props: {
      page: posts.getPage({ limit, offset: 0 }),
    },
  };
};
