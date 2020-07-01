import React from "react";
import { Item } from "semantic-ui-react";
import { PostPreview } from "../components/post_preview";
import { posts } from "../data/posts";
import { Layout } from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Item.Group>
        {Object.values(posts).map((p) => <PostPreview {...p} key={p.pid}/>)}
      </Item.Group>
    </Layout>
  )
}
