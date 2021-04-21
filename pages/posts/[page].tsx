import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Error from "next/error";
import { Layout } from "../../components/layout";
import { posts } from "../../data";
import { PostList } from "../../components/post_list";
import { NextPage } from "next";
import { PageResult } from "../../models/posts";

const limit = parseInt(process.env.NEXT_PUBLIC_POSTS_PER_PAGE);

const PostPage: NextPage<{ page?: PageResult }> = ({ page }) => {
  if (page) {
    return (
      <Layout>
        <PostList page={page} url={(p) => `/posts/${p}`} />
      </Layout>
    );
  }
  return <Error statusCode={404} />;
};

export default PostPage;

type Params = {
  page: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const f = posts.getPage({ limit, offset: 0 });
  return {
    paths: new Array(f.totalPages)
      .fill(0)
      .reduce(
        (acc: { params: Params }[], p, k) => [
          ...acc,
          { params: { page: String(k + 1) } },
        ],
        []
      ),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  { page: PageResult },
  Params
> = async ({ params }) => {
  const page = params.page ? parseInt(params.page) : 1;
  return {
    props: {
      page: posts.getPage({ limit, offset: (page - 1) * limit }),
    },
  };
};
