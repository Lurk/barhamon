import React from "react";
import { Item } from 'semantic-ui-react';
import { GetStaticPaths, GetStaticProps } from "next";
import { Layout } from "../../components/layout";
import { posts } from "../../data/posts";
import Error from "next/error";
import { PostFull } from "../../components/post_full";


const PostPage: React.FC<{ pid: string }> = ({ pid }) => {
  const post = posts[ pid ]
  if (post) {
    return (
      <Layout title={post.header}>
        <Item.Group>
          <PostFull {...post}/>
        </Item.Group>
      </Layout>
    );
  }
  return (<Error statusCode={404}/>);
}

export default PostPage

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.values(posts).map((p) => ({ params: { pid: p.pid } })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<{ pid: string }, { pid: string }> = async ({ params }) => {
  return {
    props: { pid: params.pid }
  }
}
