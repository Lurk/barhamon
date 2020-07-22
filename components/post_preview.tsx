import React from "react";
import { Item } from "semantic-ui-react";
import Link from "next/link";
import type { PostInterface } from "../models/posts";
import { PostMeta } from "./post_meta";
import { PostTags } from "./post_tags";

export const PostPreview: React.FC<PostInterface> = ({Preview, Full, ...rest}) => {

  return (
    <Item>
      {rest.image && <Item.Image src={rest.image} size="small"/>}
      <Item.Content>
        <Item.Header>
          <Link as={`/post/${rest.pid}`} href={`/post/[pid]`}><a>{rest.header}</a></Link>
        </Item.Header>
        <PostMeta readTime={rest.readTime} time={rest.time}/>
        <Item.Description>
          <Preview/>
          {Full !== Preview && <p><Link as={`/post/${rest.pid}`} href={`/post/[pid]`}><a>Read more...</a></Link></p>}
        </Item.Description>
        <PostTags tags={rest.tags}/>
      </Item.Content>
    </Item>
  )
}
