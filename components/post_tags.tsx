import React from "react";
import { Icon, Item, Label } from "semantic-ui-react";

export interface PostTags {
  tags?: string[]
}

export const PostTags: React.FC<PostTags> = ({ tags }) => {
  return (
    <Item.Extra> {tags && tags.map((t, i) => <Label key={i}><Icon name="tag"/>{t}</Label>)}</Item.Extra>
  )
}
