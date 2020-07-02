import React from "react";
import { Header, Item } from 'semantic-ui-react';
import { GetStaticPaths, GetStaticProps } from "next";
import { Layout } from "../../components/layout";
import { posts } from "../../data/posts";
import Error from "next/error";
import { PostPreview } from "../../components/post_preview";


const PostPage: React.FC<{ tag: string }> = ({ tag }) => {
  const filtered = Object.values(posts).filter((p) => p.tags.includes(tag))
  if (filtered) {
    return (
      <Layout title={tag}>
        <Header>Posts filtered by tag: {tag.toUpperCase()}</Header>
        <Item.Group>
          {filtered.map((p) => <PostPreview {...p} key={p.pid}/>)}
        </Item.Group>
      </Layout>
    );
  }
  return (<Error statusCode={404}/>);
}

export default PostPage

export const getStaticPaths: GetStaticPaths = async () => {
  console.log(Object.values(posts).map((p) => p.tags.map((tag) => ({ params: { tag } }))).flat())
  return {
    paths: Object.values(posts).map((p) => p.tags.map((tag) => ({ params: { tag } }))).flat(),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<{ tag: string }, { tag: string }> = async ({ params }) => {
  return {
    props: { tag: params.tag }
  }
}
