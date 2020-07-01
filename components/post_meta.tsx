import React from "react";
import { formatDistance } from "date-fns"
import { Item } from "semantic-ui-react";

export interface PostMeta {
  time: number,
  readTime?: number
}

export const PostMeta: React.FC<PostMeta> = ({ time, readTime }) => {

  return (
    <Item.Meta>{formatDistance(new Date(time), new Date())} ago{readTime ? ` · ${readTime} min read` : ''} </Item.Meta>
  )
}
