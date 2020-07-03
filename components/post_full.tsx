import React from "react";
import { Item, Image } from "semantic-ui-react";
import { PostInterface } from "../data/posts";
import { PostMeta } from "./post_meta";
import { PostTags } from "./post_tags";

export const PostFull: React.FC<PostInterface> = (props) => {
  return (
    <Item>
      <Item.Content>
        <Item.Header>
          {props.header}
        </Item.Header>
        <PostMeta readTime={props.readTime} time={props.time}/>
        {props.image && <Image src={props.image} size="large" centered rounded />}
        <Item.Description>
          {props.full}
        </Item.Description>
        <PostTags tags={props.tags}/>
      </Item.Content>
    </Item>
  )
}
