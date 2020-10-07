import React from "react";
import { Item } from 'semantic-ui-react';
import { GetStaticPaths, GetStaticProps } from "next";
import Error from "next/error";
import { Layout } from "../../components/layout";
import { posts } from "../../data";
import { PostPreview } from "../../components/post_preview";
import { Pagination } from "../../components/pagination";

const limit = 10;
const PostPage: React.FC<{ page: number }> = ({ page }) => {
  const filtered = posts.getPage({ limit, offset: (page - 1) * limit })
  if (filtered) {
    return (
      <Layout>
        <Item.Group>
          {filtered.posts.map((p) => <PostPreview {...p} key={p.pid}/>)}
        </Item.Group>
        <Pagination totalPages={filtered.totalPages} activePage={filtered.currentPage} url={p => `/posts/${p}`}/>
      </Layout>
    );
  }
  return (<Error statusCode={404}/>);
}

export default PostPage

type Params = {
  page: string,
}

export const getStaticPaths: GetStaticPaths = async () => {
  const f = posts.getPage({ limit, offset: 0 });
  return {
    paths: new Array(f.totalPages)
      .fill(0)
      .reduce(
        (acc: { params: Params }[], p, k) => [...acc, { params: { page: String(k + 1) } }],
        []
      ),
    fallback: false
  };
}


export const getStaticProps: GetStaticProps<{ page: number }, Params> = async ({ params }) => {
  return {
    props: { page: params.page ? parseInt(params.page) : 1 }
  }
}
