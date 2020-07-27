import React from "react";
import { Item } from "semantic-ui-react";
import { PostPreview } from "../components/post_preview";
import { posts } from "../data";
import { Layout } from "../components/layout";
import { Pagination } from "../components/pagination";

export default function Home() {
  const filtered = posts.getPage({ limit: 10, offset: 0 })
  return (
    <Layout>
      <Item.Group>
        {filtered.posts.map((p) => <PostPreview {...p} key={p.pid}/>)}
      </Item.Group>
      <Pagination totalPages={filtered.totalPages} activePage={filtered.currentPage} url={p => `/posts/${p}`}/>
    </Layout>
  )
}
