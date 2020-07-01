import React from "react";
import { Item } from "semantic-ui-react";
import Link from "next/link";
import { PostInterface } from "../data/posts";
import { PostMeta } from "./post_meta";
import { PostTags } from "./post_tags";

export const PostPreview: React.FC<PostInterface> = (props) => {

  return (
    <Item>
      {props.image && <Item.Image src={props.image} size="small"/>}
      <Item.Content>
        <Item.Header>
          <Link as={`/post/${props.pid}`} href={`/post/[pid]`}><a>{props.header}</a></Link>
        </Item.Header>
        <PostMeta readTime={props.readTime} time={props.time}/>
        <Item.Description>
          {props.preview}
        </Item.Description>
        <PostTags tags={props.tags}/>
      </Item.Content>
    </Item>
  )
}
