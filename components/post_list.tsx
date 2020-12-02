import React from "react";
import { Card, Container } from 'semantic-ui-react';
import { PostPreview } from "./post_preview";
import { PageResult } from "../models/posts";
import { Pagination } from "./pagination";


export const PostList: React.FC<{ page: PageResult, url: (activePage: string) => string }> = ({ page, url }) => {
  return (
    <>
      <Card.Group>
        {page.posts.map((p) => <PostPreview {...p} key={p.pid}/>)}
      </Card.Group>
      <Container textAlign="center" style={{marginTop:'50px'}}>
        <Pagination totalPages={page.totalPages} activePage={page.currentPage} url={url}/>
      </Container>
    </>
  )
    ;
}

