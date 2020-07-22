import React from "react";
import { Item } from "semantic-ui-react";
import { PostPreview } from "../components/post_preview";
import { posts } from "../data";
import { Layout } from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Item.Group>
        {posts.getAll().map((p) => <PostPreview {...p} key={p.pid}/>)}
      </Item.Group>
    </Layout>
  )
}
