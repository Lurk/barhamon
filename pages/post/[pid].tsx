import React from "react";
import { Item } from 'semantic-ui-react';
import { GetStaticPaths, GetStaticProps } from "next";
import Error from "next/error";
import { Layout } from "../../components/layout";
import { posts } from "../../data";
import { PostFull } from "../../components/post_full";
import { PostInterface } from "../../models/posts";


const PostPage: React.FC<{ post: PostInterface | false }> = ({ post }) => {
  if (post) {
    return (
      <Layout
        title={post.header}
        image={post.image}
        keywords={post.tags}
        description={post.description}
        canonical={`/post/${post.pid}`}
      >
        <Item.Group unstackable>
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
    paths: posts.getAll().map((p) => ({ params: { pid: p.pid } })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<{ post: PostInterface | false }, { pid: string }> = async ({ params }) => {
  return {
    props: {
      post: posts.getPost(params.pid)
    }
  }
}
