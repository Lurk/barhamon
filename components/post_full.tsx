import React from "react";
import { Item } from "semantic-ui-react";
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
        {props.image && <Item.Image src={props.image} size="massive"/>}
        <Item.Description>
          {props.full}
        </Item.Description>
        <PostTags tags={props.tags}/>
      </Item.Content>
    </Item>
  )
}
