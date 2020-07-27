import React from "react";
import { Header, Item } from 'semantic-ui-react';
import { GetStaticPaths, GetStaticProps } from "next";
import Error from "next/error";
import { Layout } from "../../components/layout";
import { posts } from "../../data";
import { PostPreview } from "../../components/post_preview";
import { Pagination } from "../../components/pagination";

const limit = 10;
const PostPage: React.FC<{ tag: string, page: number }> = ({ tag, page }) => {
  const filtered = posts.getPage({ limit, offset: (page - 1) * limit, tag })
  console.log(filtered);
  if (filtered) {
    return (
      <Layout title={tag}>
        <Header>Posts filtered by tag: {tag.toUpperCase()}</Header>
        <Item.Group>
          {filtered.posts.map((p) => <PostPreview {...p} key={p.pid}/>)}
        </Item.Group>
        <Pagination totalPages={filtered.totalPages} activePage={filtered.currentPage} url={p => `/tag/${tag}/${p}`}/>
      </Layout>
    );
  }
  return (<Error statusCode={404}/>);
}

export default PostPage

type Tag = {
  tag: [string, string],
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: posts.getAll().reduce(
      (acc: { params: Tag }[], p) => [...acc, ...p.tags.map(
        (tag) => {
          const p = posts.getPage({ limit, tag, offset: 0 });
          return new Array(p.totalPages)
            .fill(0)
            .map((v, i) => ([{ params: { tag: [tag, `${i + 1}`] } },{ params: { tag: [tag] } } ]))
            .flat()
        }).flat()],
      []
    ),
    fallback: false
  };
}


export const getStaticProps: GetStaticProps<{ tag: string, page: number }, Tag> = async ({ params }) => {
  return {
    props: { tag: params.tag[ 0 ], page: params.tag[ 1 ] ? parseInt(params.tag[ 1 ]) : 1 }
  }
}
